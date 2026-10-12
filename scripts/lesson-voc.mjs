// Erzeugt www/js/lesson-voc.js: die Vokabelliste jeder Grundkurs-Lektion.   node scripts/lesson-voc.mjs
// Quelle sind die Beispiel- und Quizsätze der Lektion. Jede Wortgruppe wird im Lexikon (lexicon.js) nachgeschlagen;
// was dort fehlt oder falsch erkannt würde, steht in scripts/lesson-voc-extra.json:
//   "Wortgruppe": [Wort, Lesung, Bedeutung]   fester Eintrag für diese Wortgruppe
//   "#3": [[Wort, Lesung, Bedeutung], …]      zusätzliche Einträge für Lektion 3
//   "=": { Wort: Bedeutung }                  kürzere Bedeutung als im Lexikon
import { readFileSync, writeFileSync } from 'node:fs';
const dir = new URL('../www/js/', import.meta.url);
const files = ['content.js', 'core.js', 'gram-n5.js', 'gram-n4.js', 'gram-n3.js', 'gram-n2.js', 'gram-n1.js', 'gramx-n5.js', 'gramx-n4.js', 'gramx-n3.js', 'gramx-n2.js', 'gramx-n1.js', 'texts-a.js', 'texts-b.js', 'texts-c.js', 'lexicon.js', 'data.js'];
const D = new Function(files.map(f => readFileSync(new URL(f, dir), 'utf8').replace(/^'use strict';/, '')).join('\n') + '; return { GRAMMAR, lexFind };')();
const EXTRA = JSON.parse(readFileSync(new URL('lesson-voc-extra.json', import.meta.url), 'utf8'));
const FURI = /([㐀-䶿一-鿿豈-﫿々〆ヶヵ]+)\[([^\]]+)\]/g;
const plain = s => s.replace(FURI, '$1'), kana = s => s.replace(FURI, '$2');
const SUF = ['じゃなかったです', 'じゃありません', 'ですか', 'でした', 'ですね', 'のです', 'です', 'では', 'から', 'だ', 'は', 'が', 'を', 'に', 'へ', 'で', 'と', 'の', 'も', 'か', 'ね'].sort((a, b) => b.length - a.length);
const miss = [], out = [];
D.GRAMMAR.forEach((g, i) => {
  const ex = [...(g.sec || []).flatMap(c => c.ex || []), ...(g.ex || []), ...g.q.filter(q => q.jp && !q.cz).map(q => [q.q])], list = [], seen = new Set();
  const push = y => { if (!seen.has(y[0])) { seen.add(y[0]); list.push(y); } };
  (EXTRA['#' + (i + 1)] || []).forEach(push);
  for (const e of ex) for (const ch of e[0].replace(/[。、？！「」]/g, ' ').trim().split(/\s+/)) {
    if (!/[ぁ-ヿ㐀-鿿]/.test(ch)) continue;
    const pl = plain(ch), kn = kana(ch);
    if (pl in EXTRA) { push(EXTRA[pl]); continue; }
    let w = (D.lexFind(pl, kn) || {}).e;
    for (const s of SUF) { if (w) break; if (pl.endsWith(s) && pl.length > s.length) { const f = D.lexFind(pl.slice(0, -s.length), kn.slice(0, -s.length)); if (f && !/^[ぁ-ん]$/.test(f.e.w)) w = f.e; } }
    if (!w) { miss.push((i + 1) + ': ' + pl); continue; }
    push([w.w, w.r, EXTRA['='][w.w] || w.m]);
  }
  out.push(list);
});
writeFileSync(new URL('lesson-voc.js', dir), '/* Vokabeln der Grundkurs-Lektionen, erzeugt von scripts/lesson-voc.mjs – nicht von Hand ändern.\n   Je Lektion eine Zeile mit Einträgen [Wort, Lesung, Bedeutung]. */\nconst GRAMMAR_VOC = [\n' + out.map(l => ' ' + JSON.stringify(l)).join(',\n') + '\n];\n');
console.log(out.map((l, i) => (i + 1) + ': ' + l.length).join('  '));
if (miss.length) { console.log('Nicht gefunden (in lesson-voc-extra.json ergänzen):\n' + miss.join('\n')); process.exitCode = 1; }
