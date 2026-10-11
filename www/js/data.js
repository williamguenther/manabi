'use strict';
/* Bereitet die Rohdaten auf: Grammatikpunkte je JLPT-Stufe, Lesetexte und das Wort-Lexikon für die Lesetexte.
   Hier steht nur Datenlogik, keine Oberfläche. */
const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

/* ---------- Grammatikpunkte: Stufe → [{id, lv, p (Muster), m (Bedeutung), f (Bildung), x (Erklärung), ex: [[jp, de], …]}] ---------- */
const GP = {};
for (const lv of LEVELS) {
  GP[lv] = (GP_RAW[lv] || '').trim().split('\n').filter(Boolean).map(line => {
    const a = line.split('|'), ex = [];
    for (let i = 3; i + 1 < a.length; i += 2) ex.push([a[i], a[i + 1]]);
    return { id: lv + ':' + a[0], lv, p: a[0], m: a[1], f: a[2], x: '', ex };
  });
  // Zusatz aus gramx-*.js: Muster|Erklärung|JP|DE|JP|DE …
  const byP = new Map(GP[lv].map(g => [g.p, g]));
  for (const line of (GPX_RAW[lv] || '').trim().split('\n')) {
    const a = line.split('|'), g = byP.get(a[0]); if (!g) continue;
    g.x = a[1] || '';
    for (let i = 2; i + 1 < a.length; i += 2) if (a[i]) g.ex.push([a[i], a[i + 1]]);
  }
}

/* ---------- Lesetexte: [{id, lv, t, de, note, s: [[jp, de], …], q: [{q, o}]}] ---------- */
const TEXTS = [];
for (const lv of LEVELS) {
  let t = null;
  for (const raw of (TEXT_RAW[lv] || '').split('\n')) {
    const line = raw.trim(); if (!line) continue;
    if (line[0] === '#') { const [jt, de] = line.slice(1).split('|').map(x => x.trim()); t = { id: lv + ':' + jt, lv, t: jt, de, note: '', s: [], q: [], tok: null }; TEXTS.push(t); }
    else if (!t) continue;
    else if (line[0] === '>') t.note = line.slice(1).trim();
    else if (line[0] === '?') { const a = line.slice(1).split('|').map(x => x.trim()); t.q.push({ q: a[0], o: a.slice(1) }); }
    else { const k = line.lastIndexOf(' // '); t.s.push([k < 0 ? line : line.slice(0, k), k < 0 ? '' : line.slice(k + 4)]); }
  }
}

/* ---------- Wort-Lexikon ----------
   Zeile: Formen|Lesung|Bedeutung|Stufe|Klasse
   Formen: Grundform, danach mit Komma weitere Schreibweisen; nach ; feste Stämme unregelmäßiger Wörter (する;し,さ,せ).
   Stufe:  5–1 = JLPT N5–N1, 0 = in keiner gängigen JLPT-Liste, x = Eigenname.
   Klasse: 1 = る-Verb, 5 = う-Verb, i = い-Adjektiv, leer = wird nicht gebeugt. */
const LEX = { exact: new Map(), stems: new Map(), size: 0 };
const LX_GODAN = { 'う': 'わいうえおっ', 'く': 'かきくけこい', 'ぐ': 'がぎぐげごい', 'す': 'さしすせそ', 'つ': 'たちつてとっ', 'ぬ': 'なにぬねのん', 'ぶ': 'ばびぶべぼん', 'む': 'まみむめもん', 'る': 'らりるれろっ' };
const LX_HIRA = /^[ぁ-ゖー]*$/, LX_KANA = /^[ぁ-ヿ]+$/;
const LX_FURI = /([㐀-䶿一-鿿豈-﫿々〆ヶヵ]+)\[([^\]]+)\]/g;
const LX_PUNCT = '、。「」『』？！：（）・…―';
function lxStems(form, cls) {
  const base = form.slice(0, -1), last = form.slice(-1);
  if (cls === '1' || cls === 'i') return [base];
  if (cls === '5') { const row = LX_GODAN[last]; if (!row) return []; const a = [...row].map(k => base + k); if (form === '行く' || form === 'いく') a.push(base + 'っ'); return a; }
  return [];
}
function lxPush(map, key, val) { const l = map.get(key); if (l) l.push(val); else map.set(key, [val]); }
function lexAdd(line) {
  const a = line.split('|'); if (a.length < 3 || !a[0]) return;
  const [fs, fixed] = a[0].split(';'), forms = fs.split(',');
  const e = { w: forms[0], r: a[1] || forms[0], m: a[2], lv: a[3] || '0', c: a[4] || '' };
  LEX.size++;
  for (const f of forms) {
    const fr = LX_KANA.test(f) ? f : e.r;
    lxPush(LEX.exact, f, { e, k: fr });
    if (e.c) { const ps = lxStems(f, e.c), ks = lxStems(fr, e.c); ps.forEach((s, i) => lxPush(LEX.stems, s, { e, k: ks[i] || '', c: e.c })); }
  }
  if (fixed) for (const s of fixed.split(',')) lxPush(LEX.stems, s, { e, k: '', c: 'p' });
}
for (const block of LEX_RAW) block.trim().split('\n').forEach(lexAdd);

/* Passt die Endung zum Stamm? Verhindert, dass kurze Stämme zufällig auf andere Wörter passen. */
function lxEndingOk(x, stem, rest) {
  if (x.c === 'i') return /^[いくかけさそすみげ]/.test(rest);
  if (x.c === '1' && stem.length === 1 && LX_KANA.test(stem)) return /^[まてたなるれよらず]/.test(rest);
  return true;
}
/* Sucht zu einem Wort aus dem Text (pl = ohne Furigana, kn = in Kana) den Lexikoneintrag. */
function lexFind(pl, kn, forced) {
  const pick = (list, k) => !list ? null : (list.find(x => x.k === k) || list[0]);
  if (forced) { const x = pick(LEX.exact.get(forced), kn); return x ? { e: x.e, infl: forced !== pl } : null; }
  const tries = [[pl, kn]];
  if (pl.length > 1 && /^[おご]/.test(pl) && pl[0] === kn[0]) tries.push([pl.slice(1), kn.slice(1)]); // Höflichkeitsvorsilbe お・ご
  for (const [p, k] of tries) { const x = pick(LEX.exact.get(p), k); if (x) return { e: x.e, infl: p !== x.e.w }; }
  for (const [p, k] of tries) {
    for (let n = p.length; n > 0; n--) {
      const stem = p.slice(0, n), rest = p.slice(n); if (!LX_HIRA.test(rest)) continue;
      const list = LEX.stems.get(stem); if (!list) continue;
      const ok = list.filter(x => lxEndingOk(x, stem, rest) && (!x.k || k.startsWith(x.k)));
      if (ok.length) return { e: ok[0].e, infl: true };
    }
  }
  return null;
}
/* Zerlegt einen Satz der Lesetexte in Wörter (w), Satzzeichen (p) und sichtbare Lücken (g). */
function tokenize(jp) {
  const out = [];
  jp.trim().split(/ +/).forEach((chunk, ci) => {
    if (ci) out.push({ t: 'g' });
    for (let piece of chunk.split('|')) {
      if (!piece) continue;
      let forced = ''; const m = piece.match(/\{([^}]+)\}/); if (m) { forced = m[1]; piece = piece.replace(m[0], ''); }
      let buf = '';
      const flush = () => {
        if (!buf) return;
        const pl = buf.replace(LX_FURI, '$1'), kn = buf.replace(LX_FURI, '$2'), hit = lexFind(pl, kn, forced);
        out.push({ t: 'w', raw: buf, pl, kn, e: hit ? hit.e : null, infl: hit ? hit.infl : false }); buf = '';
      };
      for (const ch of piece) { if (LX_PUNCT.includes(ch)) { flush(); out.push({ t: 'p', raw: ch }); } else buf += ch; }
      flush();
    }
  });
  return out;
}
function textTokens(t) { return t.tok || (t.tok = t.s.map(s => tokenize(s[0]))); }
