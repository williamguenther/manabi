// Listet alles auf, was die App vorlesen kann: node scripts/audio-list.mjs > audio-list.json
// Jeder Eintrag: g = Paket, p = Schreibweise, k = Lesung in Kana, f = Schreibweise mit Furigana (falls vorhanden).
// p und k müssen genau dem entsprechen, was app.js an TTS.say() übergibt – daraus entsteht der Schlüssel des Tonausschnitts.
import { readFileSync } from 'node:fs';
const dir = new URL('../www/js/', import.meta.url);
const files = ['content.js', 'lesson-voc.js', 'core.js', 'gram-n5.js', 'gram-n4.js', 'gram-n3.js', 'gram-n2.js', 'gram-n1.js', 'gramx-n5.js', 'gramx-n4.js', 'gramx-n3.js', 'gramx-n2.js', 'gramx-n1.js', 'texts-a.js', 'texts-b.js', 'texts-c.js', 'lexicon.js', 'data.js'];
const src = files.map(f => readFileSync(new URL(f, dir), 'utf8').replace(/^'use strict';/, '')).join('\n');
const D = new Function(src + '; return { CORE_RAW, GRAMMAR, GRAMMAR_VOC, KANA, toKatakana, GP, TEXTS, LEVELS, textTokens };')();

const FURI = /([㐀-䶿一-鿿豈-﫿々〆ヶヵ]+)\[([^\]]+)\]/g;
const plain = s => String(s || '').replace(FURI, '$1').replace(/ +/g, '');
const kana = s => String(s || '').replace(FURI, '$2').replace(/\s+/g, '');
const sayable = w => { const r = w.r ? kana(w.r).split(/[・、,;\/]/)[0] : ''; return r || kana(w.w) || plain(w.w); };

const out = [], seen = new Set();
const add = (g, p, k, f) => { if (!p || !k) return; const id = p + '|' + k; if (seen.has(id)) return; seen.add(id); out.push(f && f !== p ? { g, p, k, f } : { g, p, k }); };
const deck = (raw, name, per) => raw.trim().split('\n').forEach((line, i) => {
  const [w, r, m, s] = line.split('|'), g = per ? name + '-' + String(Math.floor(i / per) + 1).padStart(2, '0') : name;
  add(g, plain(w), sayable({ w, r }), r && r.includes('[') && !/[・、,;\/]/.test(r) ? r : '');
  if (s) add(g, plain(s), kana(s), s);
});

add('misc', '日本語を勉強しています。', 'にほんごをべんきょうしています。', '日本語[にほんご]を 勉強[べんきょう]しています。');
D.GRAMMAR.forEach(g => [...(g.ex || []), ...(g.sec || []).flatMap(c => c.ex || [])].forEach(e => add('grundkurs', plain(e[0]), kana(e[0]), e[0])));
D.GRAMMAR_VOC.forEach(l => l.forEach(v => add('grundkurs', v[0], v[1])));
for (const k in D.KANA) D.KANA[k].forEach(r => r.forEach(c => c && add('kana', D.toKatakana(c[0]), c[0]))); // Kana-Tabellen: Katakana als Eingabe, damit は/へ/を als Silbe gelesen werden
for (const lv of D.LEVELS) D.GP[lv].forEach(g => g.ex.forEach(e => add('gram-' + lv.toLowerCase(), plain(e[0]), kana(e[0]), e[0])));
for (const t of D.TEXTS) {
  const lv = t.lv.toLowerCase();
  for (const toks of D.textTokens(t)) {
    add('text-' + lv, toks.map(k => k.t === 'g' ? '' : k.t === 'p' ? k.raw : k.pl).join(''), toks.map(k => k.t === 'w' ? k.kn : k.t === 'p' ? k.raw : '').join(''), toks.map(k => k.t === 'g' ? ' ' : k.raw).join(''));
    for (const k of toks) if (k.t === 'w') { // wie im Wort-Fenster (openWord)
      const e = k.e, same = !e || k.pl === e.w;
      add('words', e ? e.w : k.pl, !e ? k.kn : (same && k.pl !== k.kn ? k.kn : e.r));
      if (!same) add('words', k.pl, k.kn, k.raw);
    }
  }
}
deck(D.CORE_RAW, 'core', 250);
process.stdout.write(JSON.stringify(out));
