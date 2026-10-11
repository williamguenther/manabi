'use strict';
/* ================= Hilfsfunktionen =================
   Inhalte kommen aus content.js (Kana, Grundkurs), core.js (Standard-Deck) und data.js (Grammatikpunkte, Lesetexte, Wort-Lexikon). */
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KANJI = '\\u3400-\\u4dbf\\u4e00-\\u9fff\\uf900-\\ufaff々〆ヶヵ';
const FURI_RE = new RegExp('([' + KANJI + ']+)\\[([^\\]]+)\\]', 'g');
const MIN = 60000, DAY = 86400000;
const LEARN_STEPS = [1, 10], RELEARN_STEPS = [10];
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const plain = s => String(s || '').replace(FURI_RE, '$1').replace(/ +/g, '');
const kana = s => String(s || '').replace(FURI_RE, '$2').replace(/\s+/g, '');
let FORCE_FURI = false; // im Grundkurs sind Furigana immer zu sehen, unabhängig von der Einstellung
/* Furigana in fertigem HTML (Erklärtexte, Tabellen): 漢字[かな] → <ruby> */
function rb(h, force) { return String(h).replace(FURI_RE, (m, b, r) => S.settings.furigana || FORCE_FURI || force ? '<ruby>' + b + '<rt>' + r + '</rt></ruby>' : b); }
function jp(s) {
  let h = rb(esc(s));
  return S.settings.spaces ? h.replace(/ +/g, '<span class="gap"></span>') : h.replace(/ +/g, '');
}
function dayStart(t = Date.now()) { const d = new Date(t - 4 * 3600000); d.setHours(0, 0, 0, 0); return d.getTime() + 4 * 3600000; }
function dayKey(t = Date.now()) { const d = new Date(t - 4 * 3600000); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function jpDate(t = Date.now()) { const d = new Date(t); return (d.getMonth() + 1) + '月' + d.getDate() + '日（' + '日月火水木金土'[d.getDay()] + '）'; }
const ICON = {
  speaker: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a4.5 4.5 0 0 1 0 7M18.6 6a8 8 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  stop: '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>',
  play: '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M7 5l12 7-12 7z" fill="currentColor"/></svg>'
};
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2400); }

/* ================= Daten ================= */
const CORE = CORE_RAW.trim().split('\n').map((line, i) => { const [w, r, m, s, t, p] = line.split('|'); return { id: 'c' + i, w, r, m, s, t, p }; });
const DEFAULTS = { newPerDay: 10, cardMode: 'read', autoAudio: true, rate: 1, furigana: true, spaces: true, gLv: 'N5', rLv: 'N5', rate1: true, hideInstall: false, welcome: false };
const S = { settings: { ...DEFAULTS }, log: {}, gdone: {}, gp: {}, tdone: {}, prio: {}, deckMeta: null, active: 'c', updatedAt: 0, srs: {}, deck: null };
/* Eigenes Deck: jede Karte behält ihre Kennung (i + Nummer), auch wenn andere gelöscht werden; g = hat ein Bild */
const toRow = w => [w.w, w.r, w.m, w.s, w.t, w.p, w.id, w.g ? 1 : 0];
const rowsToDeck = rows => rows.map((r, i) => ({ id: r[6] || 'i' + i, w: r[0] || '', r: r[1] || '', m: r[2] || '', s: r[3] || '', t: r[4] || '', p: r[5] || '', g: !!r[7] }));
/* Decks: c = Standard-Deck (eingebaut), i = eigenes Deck */
const activeWords = () => (S.active === 'i' && S.deck) ? S.deck : CORE;
const wordById = id => id[0] === 'c' ? CORE[+id.slice(1)] : (id[0] === 'i' && S.deck ? S.deck.find(w => w.id === id) || null : null);
const isOwn = w => !!w && w.id[0] === 'i';
const deckName = () => (S.active === 'i' && S.deckMeta) ? S.deckMeta.name : 'Standard-Deck';
function readingOf(w) { const r = w.r ? kana(w.r) : ''; return r && r !== plain(w.w) ? r : ''; }
function sayWord(w, opt) { if (w) TTS.say(plain(w.w), sayableWord(w), { ...opt, own: isOwn(w) }); }
function saySent(w) { if (w && w.s) TTS.say(plain(w.s), kana(w.s), { own: isOwn(w) }); }
function sayableWord(w) { const r = w.r ? kana(w.r).split(/[・、,;\/]/)[0] : ''; return r || kana(w.w) || plain(w.w); }
function todayLog() { const k = dayKey(); return S.log[k] || (S.log[k] = { n: 0, r: 0, c: 0, x: 0 }); }

/* ================= Plattform ================= */
const CAP = window.Capacitor || null;
const NATIVE = !!(CAP && CAP.isNativePlatform && CAP.isNativePlatform());
const PLATFORM = CAP && CAP.getPlatform ? CAP.getPlatform() : 'web';
const plugin = name => (NATIVE && CAP.registerPlugin) ? (CAP.Plugins[name] || CAP.registerPlugin(name)) : null;
const FS = plugin('Filesystem'), SHARE = plugin('Share'), APP = plugin('App'), NTTS = plugin('TextToSpeech');
const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const STANDALONE = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;

/* ================= Speicherung =================
   App (Android/iOS): JSON-Dateien im privaten App-Ordner. Web/PWA: localStorage. */
const Store = {
  async get(name) {
    if (FS) {
      try { const r = await FS.readFile({ path: 'manabu/' + name + '.json', directory: 'DATA', encoding: 'utf8' }); return JSON.parse(r.data); }
      catch (e) { return null; }
    }
    try { return JSON.parse(localStorage.getItem('manabu.' + name + '.v1')); } catch (e) { return null; }
  },
  async set(name, val) {
    const data = JSON.stringify(val);
    if (FS) {
      try { await FS.writeFile({ path: 'manabu/' + name + '.json', directory: 'DATA', encoding: 'utf8', data, recursive: true }); return true; }
      catch (e) { console.warn('Speichern fehlgeschlagen', e); return false; }
    }
    try { localStorage.setItem('manabu.' + name + '.v1', data); return true; } catch (e) { return false; }
  },
  async del(name) {
    if (FS) { try { await FS.deleteFile({ path: 'manabu/' + name + '.json', directory: 'DATA' }); } catch (e) {} return; }
    try { localStorage.removeItem('manabu.' + name + '.v1'); } catch (e) {}
  }
};
/* Frühere Versionen merkten sich gelesene Texte über ihre Nummer; heute über Stufe und Titel. */
const OLD_TEXT_IDS = ['N5:私の一日', 'N5:私の家族', 'N5:週末', 'N5:雨の日', 'N5:レストランで', 'N5:日本への旅行'];
const OLD_LESSONS = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14];
const V2_LESSONS = k => k < 7 ? [k] : k < 14 ? [k + 1] : k === 14 ? [15, 16] : [k + 2]; // Version 3: neu sind „Wörterbuchform und Verbstamm“ (7) und die geteilte einfache Form (15, 16)
function applyState(st) {
  S.settings = { ...DEFAULTS, ...(st.settings || {}) };
  if (!(st.settings || {}).rate1 && S.settings.rate === 0.9) S.settings.rate = 1; // früher war 0,9 voreingestellt
  if (!LEVELS.includes(S.settings.gLv)) S.settings.gLv = 'N5';
  if (!LEVELS.includes(S.settings.rLv)) S.settings.rLv = 'N5';
  S.log = st.log || {}; S.gp = st.gp || {};
  S.gdone = {}; // der Grundkurs ist zweimal gewachsen (Version 2 und 3): alte Lektionsnummern auf die neuen umrechnen
  if (st.gv === 3) S.gdone = st.gdone || {};
  else for (const k in (st.gdone || {})) { const v2 = st.gv === 2 ? +k : OLD_LESSONS[+k]; if (v2 !== undefined) for (const n of V2_LESSONS(v2)) S.gdone[n] = 1; }
  S.tdone = {}; for (const k in (st.tdone || {})) S.tdone[/^\d+$/.test(k) ? (OLD_TEXT_IDS[+k] || k) : k] = 1;
  S.deckMeta = st.deckMeta || null; S.active = st.active || 'c'; S.updatedAt = st.updatedAt || 0;
  if (S.active !== 'i') S.active = 'c'; // das frühere Starter-Deck gibt es nicht mehr
  S.prio = st.prio || {};
}
function stateBody() {
  const keys = Object.keys(S.log).sort().slice(-400); const log = {}; keys.forEach(k => log[k] = S.log[k]);
  return { settings: S.settings, log, gdone: S.gdone, gv: 3, gp: S.gp, tdone: S.tdone, prio: S.prio, deckMeta: S.deckMeta, active: S.active, coreInit: 1, updatedAt: S.updatedAt };
}
let saveTimer = null, deckDirty = false, saving = Promise.resolve();
function persist(now) {
  clearTimeout(saveTimer);
  const f = () => {
    const st = stateBody(), sr = S.srs, dk = deckDirty ? (S.deck ? S.deck.map(toRow) : null) : undefined; deckDirty = false;
    saving = saving.then(async () => {
      let ok = await Store.set('state', st) && await Store.set('srs', sr);
      if (dk !== undefined) { if (dk) ok = await Store.set('deck', dk) && ok; else await Store.del('deck'); }
      if (!ok) setSync('err');
    });
    return saving;
  };
  if (now) return f(); saveTimer = setTimeout(f, 400);
}
async function loadAll() {
  const st = await Store.get('state'); if (st) applyState(st);
  const az = await Store.get('azure'); if (az && az.key) { AZ.key = az.key; AZ.region = az.region || ''; }
  await Media.init();
  const sr = await Store.get('srs'); if (sr && typeof sr === 'object') S.srs = sr;
  if (S.deckMeta) { const dk = await Store.get('deck'); if (Array.isArray(dk)) S.deck = rowsToDeck(dk); }
  if (S.active === 'i' && !S.deck) S.active = 'c';
  if (!S.settings.welcome && (Object.keys(S.srs).length || Object.keys(S.gdone).length || Object.keys(S.tdone).length)) S.settings.welcome = true; // wer schon gelernt hat, braucht keine Begrüßung
  if (!S.settings.welcome) UI.view = 'welcome';
}
function touch() { S.updatedAt = Date.now(); persist(); }
function touchCard() { touch(); }
function setSync(mode) {
  const text = mode === 'err' ? 'Speichern ist fehlgeschlagen. Ist der Gerätespeicher voll?' : (NATIVE ? 'Fortschritt wird auf diesem Gerät gespeichert.' : 'Fortschritt wird in diesem Browser gespeichert.');
  UI.syncText = text;
  const el = $('#sync'); if (el) { el.className = 'sync ' + (mode === 'err' ? 'err' : 'cloud'); el.querySelector('span').textContent = text; }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') persist(true); });
window.addEventListener('pagehide', () => persist(true));

/* ---------- Sicherung: alles in eine Datei, um Geräte zu wechseln ---------- */
async function backupData() { return { app: 'manabu', v: 1, at: new Date().toISOString(), state: stateBody(), srs: S.srs, deck: S.deck ? S.deck.map(toRow) : null, media: S.deck ? await Media.dump() : null }; }
async function exportBackup() {
  await persist(true);
  const name = 'manabi-sicherung-' + dayKey() + '.json', json = JSON.stringify(await backupData());
  try {
    if (FS && SHARE) {
      const r = await FS.writeFile({ path: name, directory: 'CACHE', encoding: 'utf8', data: json });
      await SHARE.share({ title: 'Manabi – Sicherung', files: [r.uri], dialogTitle: 'Sicherung speichern oder senden' });
      return;
    }
    const file = new File([json], name, { type: 'application/json' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Manabi – Sicherung' }); return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    toast('Sicherung heruntergeladen');
  } catch (e) { if (!/cancel|abort/i.test(String(e && (e.message || e.name)))) toast('Sicherung fehlgeschlagen: ' + (e.message || e)); }
}
function readBackup(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const b = JSON.parse(String(r.result));
      if (!b || b.app !== 'manabu' || !b.state) throw new Error('Das ist keine Sicherung von Manabi.');
      UI.pendingBackup = b; UI.confirm = 'restore'; render(true);
    } catch (e) { toast(e.message || 'Datei nicht lesbar'); }
  };
  r.readAsText(file, 'utf-8');
}
async function restoreBackup() {
  const b = UI.pendingBackup; if (!b) return;
  await Media.restore(b.media);
  applyState(b.state); S.srs = b.srs || {}; S.deck = Array.isArray(b.deck) && b.state.deckMeta ? rowsToDeck(b.deck) : null;
  if (!S.deck) S.deckMeta = null; if (S.active === 'i' && !S.deck) S.active = 'c';
  deckDirty = true; SES = null; UI.gquiz = null; UI.pendingBackup = null; UI.confirm = null;
  S.updatedAt = Date.now(); persist(true); render(); toast('Sicherung wiederhergestellt');
}

/* ================= Eigene Karten: Bilder und Ton =================
   Liegen in IndexedDB auf dem Gerät: „img“ je Karte, „audio“ je Schlüssel aus Schreibweise und Lesung (wie clipKey).
   Gespeichert wird { t: Typ, b: ArrayBuffer }. Ton entsteht auf Wunsch über Microsoft Azure mit dem Schlüssel des Nutzers –
   dieselbe Stimme wie im Rest der App. Der Schlüssel bleibt auf dem Gerät und kommt nicht in die Sicherung. */
const AZ = { key: '', region: '', voice: 'ja-JP-DaichiNeural' };
const Media = {
  db: null, audio: new Set(), urls: new Map(),
  open() { return this.db || (this.db = new Promise((res, rej) => { const r = indexedDB.open('manabu-media', 1); r.onupgradeneeded = () => { r.result.createObjectStore('img'); r.result.createObjectStore('audio'); }; r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); })); },
  async tx(store, mode, fn) { const db = await this.open(); return new Promise((res, rej) => { const t = db.transaction(store, mode), rq = fn(t.objectStore(store)); t.oncomplete = () => res(rq && rq.result); t.onerror = t.onabort = () => rej(t.error); }); },
  async init() { try { (await this.tx('audio', 'readonly', s => s.getAllKeys())).forEach(k => this.audio.add(k)); } catch (e) { console.warn('Medienspeicher nicht verfügbar', e); } },
  async get(store, key) { try { const v = await this.tx(store, 'readonly', s => s.get(key)); return v ? new Blob([v.b], { type: v.t }) : null; } catch (e) { return null; } },
  async put(store, key, blob) { const b = await blob.arrayBuffer(); await this.tx(store, 'readwrite', s => s.put({ t: blob.type, b }, key)); if (store === 'audio') this.audio.add(key); else this.forget(key); },
  async del(store, key) { try { await this.tx(store, 'readwrite', s => s.delete(key)); } catch (e) {} if (store === 'audio') this.audio.delete(key); else this.forget(key); },
  async clear() { for (const st of ['img', 'audio']) { try { await this.tx(st, 'readwrite', s => s.clear()); } catch (e) {} } this.audio.clear(); [...this.urls.keys()].forEach(k => this.forget(k)); },
  forget(id) { const u = this.urls.get(id); if (u) { URL.revokeObjectURL(u); this.urls.delete(id); } },
  async url(id) { let u = this.urls.get(id); if (!u) { const b = await this.get('img', id); if (!b) return ''; u = URL.createObjectURL(b); this.urls.set(id, u); } return u; },
  /* Sicherung: alles als data:-Adressen */
  async dump() {
    const out = { img: {}, audio: {} }, b64 = v => new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => res(''); r.readAsDataURL(new Blob([v.b], { type: v.t })); });
    try { for (const st of ['img', 'audio']) { const keys = await this.tx(st, 'readonly', s => s.getAllKeys()), vals = await this.tx(st, 'readonly', s => s.getAll()); for (let i = 0; i < keys.length; i++) out[st][keys[i]] = await b64(vals[i]); } } catch (e) {}
    return out;
  },
  async restore(m) {
    await this.clear(); if (!m) return;
    for (const st of ['img', 'audio']) for (const k in (m[st] || {})) { try { await this.put(st, k, await (await fetch(m[st][k])).blob()); } catch (e) {} }
  }
};
function fillImages() { document.querySelectorAll('img[data-img]').forEach(el => Media.url(el.dataset.img).then(u => { if (u) el.src = u; else el.remove(); })); }
async function azureTTS(text) {
  if (!/^[a-z0-9]+$/.test(AZ.region)) throw new Error('Die Region fehlt.');
  let r;
  try {
    r = await fetch('https://' + AZ.region + '.tts.speech.microsoft.com/cognitiveservices/v1', { method: 'POST',
      headers: { 'Ocp-Apim-Subscription-Key': AZ.key, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3' },
      body: "<speak version='1.0' xml:lang='ja-JP'><voice name='" + AZ.voice + "'>" + esc(text) + '</voice></speak>' });
  } catch (e) { throw new Error('Keine Verbindung zu Azure. Stimmt die Region, und bist du online?'); }
  if (!r.ok) throw new Error(r.status === 401 || r.status === 403 ? 'Azure lehnt den Schlüssel ab. Prüfe Schlüssel und Region.' : r.status === 429 ? 'Zu viele Anfragen in kurzer Zeit. Warte eine Minute.' : 'Azure meldet Fehler ' + r.status + '.');
  const b = await r.blob(); if (!b.size) throw new Error('Azure hat keinen Ton geliefert.');
  return new Blob([b], { type: 'audio/mpeg' });
}
/* Ton einer eigenen Karte: gespeichert, sonst (mit Schlüssel) jetzt erzeugen und merken; null = Gerätestimme */
const azBusy = new Map();
function ownAudio(p, k, strict) {
  const key = clipKey(p, k);
  if (CLIPS.idx && CLIPS.idx.clips[key]) return CLIPS.get(p, k); // gibt es schon in der App
  if (Media.audio.has(key)) return Media.get('audio', key);
  if (!AZ.key) return Promise.resolve(null);
  let job = azBusy.get(key);
  if (!job) { job = azureTTS(p).then(async b => { await Media.put('audio', key, b).catch(() => {}); return b; }); azBusy.set(key, job); job.catch(() => {}).then(() => azBusy.delete(key)); }
  return strict ? job : job.catch(() => null);
}
const audioKeys = w => [clipKey(plain(w.w), sayableWord(w))].concat(w.s ? [clipKey(plain(w.s), kana(w.s))] : []);

/* ================= Sprachausgabe =================
   Wörter und Sätze der App sind vorab vertont (scripts/make-audio.py): www/audio/index.json nennt zu jedem
   Schlüssel ein Paket samt Anfang und Länge, die Pakete *.pack sind aneinandergehängte MP3-Ausschnitte.
   Karten des eigenen Decks: Ton aus dem Gerätespeicher (siehe ownAudio). Für alles ohne Ton spricht die Stimme des Geräts: in der App nativ, im Web die Web Speech API. */
function clipKey(p, k) { // cyrb53; muss zu clip_key() in scripts/make-audio.py passen
  const str = p + '|' + k; let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}
const SILENCE = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
const CLIPS = {
  idx: null, tried: false, loading: null, packs: new Map(), el: null, url: '', unlocked: false,
  load() {
    return this.loading || (this.loading = fetch('audio/index.json').then(r => r.ok ? r.json() : null).catch(() => null).then(j => {
      this.idx = j && j.clips && j.packs ? j : null; this.tried = true;
      if (UI.view === 'settings' || (UI.view === 'read' && UI.text !== null && !READER.playing)) render(true);
    }));
  },
  pack(name) { // Pakete bleiben im Speicher, die ältesten fallen heraus
    let p = this.packs.get(name);
    if (!p) {
      p = fetch('audio/' + name + (this.idx.id ? '?v=' + this.idx.id : '')).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.arrayBuffer(); });
      p.catch(() => this.packs.delete(name)); this.packs.set(name, p);
      if (this.packs.size > 6) this.packs.delete(this.packs.keys().next().value);
    }
    return p;
  },
  async get(p, k) {
    await this.load();
    const c = this.idx && this.idx.clips[clipKey(p, k)]; if (!c) return null;
    const buf = await this.pack(this.idx.packs[c[0]]);
    return new Blob([buf.slice(c[1], c[1] + c[2])], { type: 'audio/mpeg' });
  },
  audio() { return this.el || (this.el = new Audio()); },
  halt() { if (this.el) { this.el.onended = this.el.onerror = null; this.el.pause(); } if (this.url) { URL.revokeObjectURL(this.url); this.url = ''; } },
  unlock() { if (this.unlocked) return; this.unlocked = true; const a = this.audio(); a.src = SILENCE; a.play().catch(() => {}); } // iOS erlaubt späteres Abspielen erst nach einer Wiedergabe in einer Berührung
};
const TTS = {
  voice: null, ok: false, checked: false, token: 0,
  async init() {
    if (NTTS) {
      try { const r = await NTTS.isLanguageSupported({ lang: 'ja-JP' }); this.ok = !!r.supported; } catch (e) { this.ok = true; }
      this.checked = true; if (!this.ok && ['read', 'settings'].includes(UI.view)) render(true); return;
    }
    if (!('speechSynthesis' in window)) { this.checked = true; return; }
    const pick = () => {
      const ja = speechSynthesis.getVoices().filter(v => /^ja/i.test(v.lang));
      this.voice = ja.find(v => /google|kyoko|nanami|haruka|ayumi|o-ren|siri/i.test(v.name)) || ja[0] || null;
      this.ok = !!this.voice;
    };
    pick(); speechSynthesis.onvoiceschanged = () => { pick(); this.checked = true; };
    setTimeout(() => { pick(); this.checked = true; if (['read', 'settings'].includes(UI.view) && !this.ok) render(true); }, 1500);
  },
  /* p = Schreibweise, k = Lesung in Kana. Spielt den aufgenommenen Ausschnitt, sonst spricht die Gerätestimme die Kana. */
  say(p, k, opt = {}) {
    p = p || k; k = k || p;
    if (!k) { opt.onend && opt.onend(); return; }
    this.stop(); const my = ++this.token, fallback = () => { if (my === this.token) this.speak(k, opt); };
    CLIPS.get(p, k).then(blob => blob || !opt.own ? blob : ownAudio(p, k).catch(() => null)).then(blob => {
      if (my !== this.token) return;
      if (!blob) { fallback(); return; }
      const a = CLIPS.audio(); CLIPS.url = URL.createObjectURL(blob);
      a.src = CLIPS.url; a.defaultPlaybackRate = a.playbackRate = opt.rate || S.settings.rate;
      a.onended = () => { if (my === this.token) opt.onend && opt.onend(); };
      a.onerror = fallback;
      a.play().catch(e => { if (e && e.name === 'NotAllowedError') fallback(); });
    }, fallback);
  },
  speak(text, opt = {}) {
    const done = () => opt.onend && opt.onend();
    if (!text) { done(); return; }
    const my = ++this.token, rate = opt.rate || S.settings.rate;
    if (NTTS) {
      NTTS.stop().catch(() => {}).then(() => {
        if (my !== this.token) return;
        NTTS.speak({ text, lang: 'ja-JP', rate, pitch: 1, volume: 1, category: 'playback', queueStrategy: 0 })
          .then(() => { if (my === this.token) done(); }, () => { if (my === this.token) done(); });
      });
      return;
    }
    if (!('speechSynthesis' in window)) { done(); return; }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP'; if (this.voice) u.voice = this.voice; u.rate = rate;
      u.onend = () => { if (my === this.token) done(); }; u.onerror = u.onend;
      speechSynthesis.speak(u);
    } catch (e) { done(); }
  },
  stop() { this.token++; CLIPS.halt(); if (NTTS) { NTTS.stop().catch(() => {}); return; } try { speechSynthesis.cancel(); } catch (e) {} }
};
function voiceNote() {
  if (CLIPS.idx || !CLIPS.tried) return ''; // die aufgenommene Stimme ist da: die Gerätestimme wird kaum gebraucht
  if (NTTS) {
    if (!TTS.checked || TTS.ok) return '';
    return PLATFORM === 'android'
      ? '<div class="note">Auf diesem Handy fehlt die japanische Sprachausgabe. Installiere sie in den Android-Einstellungen unter „Sprachausgabe“ (Google-Sprachausgabe → Japanisch). <button class="link" data-a="ttsinstall">Einstellungen öffnen</button></div>'
      : '<p class="note">Auf diesem iPhone fehlt eine japanische Stimme: Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Japanisch.</p>';
  }
  if (!('speechSynthesis' in window)) return '<p class="note">Dieser Browser hat keine Sprachausgabe. Öffne die App in Safari, Chrome oder Edge, um Wörter und Sätze zu hören.</p>';
  if (TTS.checked && !TTS.ok) return '<p class="note">Auf diesem Gerät ist keine japanische Stimme installiert. iPhone: Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Japanisch. Windows: Einstellungen → Zeit und Sprache → Sprache → Japanisch hinzufügen.</p>';
  return '';
}

/* ================= Wiederholungs-Algorithmus ================= */
/* Karte: [fällig(ms), Intervall(Tage), Ease(‰), Wiederholungen, Fehler, Schritt]; Schritt -1 = Wiederholung, 0..n = Lernphase, 100+ = Neu-Lernen */
function fuzz(n) { if (n < 3) return n; const f = Math.max(1, Math.round(n * 0.05)); return n + Math.round((Math.random() * 2 - 1) * f); }
function schedule(prev, ok, now = Date.now(), useFuzz = true) {
  let [due, ivl, ease, reps, lapses, step] = prev ? prev : [now, 0, 2500, 0, 0, 0];
  reps++;
  if (step === -1) {
    if (ok) { let n = Math.max(ivl + 1, Math.round(ivl * ease / 1000)); if (useFuzz) n = Math.max(ivl + 1, fuzz(n)); ivl = Math.min(n, 3650); due = dayStart(now) + ivl * DAY; }
    else { lapses++; ease = Math.max(1300, ease - 200); ivl = Math.max(1, Math.round(ivl * 0.5)); step = 100; due = now + RELEARN_STEPS[0] * MIN; }
  } else if (step >= 100) {
    if (ok) { const k = step - 100 + 1; if (k >= RELEARN_STEPS.length) { step = -1; due = dayStart(now) + ivl * DAY; } else { step = 100 + k; due = now + RELEARN_STEPS[k] * MIN; } }
    else { step = 100; due = now + RELEARN_STEPS[0] * MIN; }
  } else {
    if (ok) { const k = step + 1; if (k >= LEARN_STEPS.length) { step = -1; ivl = 1; due = dayStart(now) + DAY; } else { step = k; due = now + LEARN_STEPS[k] * MIN; } }
    else { step = 0; due = now + LEARN_STEPS[0] * MIN; }
  }
  return [due, ivl, ease, reps, lapses, step];
}
function fmtDays(d) { if (d < 30) return d + ' T'; if (d < 365) return String(Math.round(d / 3) / 10).replace('.', ',') + ' Mon'; return String(Math.round(d / 36.5) / 10).replace('.', ',') + ' J'; }
function fmtNext(c, now) { if (c[5] === -1) return fmtDays(c[1]); const m = Math.max(1, Math.round((c[0] - now) / MIN)); return m < 60 ? '< ' + m + ' Min' : Math.round(m / 60) + ' Std'; }
function status(w) { const c = S.srs[w.id]; if (!c) return 'new'; if (c[5] !== -1) return 'learn'; return c[1] >= 21 ? 'mature' : 'young'; }
const STATUS_LABEL = { new: 'Neu', learn: 'Lernend', young: 'Jung', mature: 'Gefestigt' };
function counts(now = Date.now()) {
  const lg = todayLog(); let newAvail = 0, due = 0, learnDue = 0, learnAll = 0, nextLearn = Infinity;
  for (const w of activeWords()) {
    const c = S.srs[w.id];
    if (!c) newAvail++;
    else if (c[5] === -1) { if (c[0] <= now) due++; }
    else { learnAll++; if (c[0] <= now + 20 * MIN) learnDue++; else nextLearn = Math.min(nextLearn, c[0]); }
  }
  const newLeft = Math.min(newAvail, Math.max(0, S.settings.newPerDay + (lg.x || 0) - lg.n));
  return { newLeft, newAvail, due, learnDue, learnAll, nextLearn, total: newLeft + due + learnDue };
}

/* ================= UI-Zustand ================= */
const NAV = [['home', 'Heute', '今日'], ['review', 'Wiederholen', '復習'], ['grammar', 'Grammatik', '文法'], ['read', 'Lesen', '読解'], ['words', 'Wörter', '単語'], ['settings', 'Deck & Optionen', '設定']];
const UI = { view: 'home', lesson: null, gq: '', gopen: null, gopenOnly: false, gbase: false, gquiz: null, lvoc: false, kana: 'h', kq: null, text: null, words: { q: '', f: 'all', page: 0, open: null }, card: null, confirm: null, qa: {}, qo: {}, trAll: false, tr: {}, syncText: '', pendingBackup: null };
let SES = null;
const READER = { playing: false, idx: -1 };

const TABS = ['home', 'review', 'grammar', 'read'];
const TAB_SHORT = { home: 'Heute', review: 'Karten', grammar: 'Grammatik', read: 'Lesen' };
function buildNav() {
  $('#nav').innerHTML = NAV.map(([v, l, k]) => '<button data-a="go" data-v="' + v + '"><span class="k" aria-hidden="true">' + k + '</span><span>' + l + '</span>' + (v === 'review' ? '<span class="badge" data-badge hidden></span>' : '') + '</button>').join('');
  $('#tabs').innerHTML = TABS.map(v => { const n = NAV.find(x => x[0] === v); return '<button data-a="go" data-v="' + v + '"><span class="k" aria-hidden="true">' + n[2] + '</span><span>' + TAB_SHORT[v] + '</span>' + (v === 'review' ? '<span class="badge" data-badge hidden></span>' : '') + '</button>'; }).join('');
  $('#topbtns').innerHTML = '<button class="tb" data-a="go" data-v="words" aria-label="Wörter"><span class="k" aria-hidden="true">単語</span>Wörter</button><button class="tb" data-a="go" data-v="settings" aria-label="Deck und Optionen"><span class="k" aria-hidden="true">設定</span></button>';
}
function render(keepScroll) {
  closeWord();
  document.querySelectorAll('#nav button, #tabs button, #topbtns button').forEach(b => b.classList.toggle('on', b.dataset.v === UI.view));
  const c = counts(); document.querySelectorAll('[data-badge]').forEach(bd => { bd.textContent = c.total > 999 ? '999+' : c.total; bd.hidden = !c.total; });
  const n = NAV.find(x => x[0] === UI.view); $('#tt').textContent = n ? n[1] : UI.view === 'kana' ? 'Schrift' : UI.view === 'welcome' ? 'Willkommen' : UI.view === 'card' ? 'Karte' : '';
  const fn = { home: vHome, review: vReview, grammar: vGrammar, read: vRead, words: vWords, settings: vSettings, kana: vKana, welcome: vWelcome, card: vCard }[UI.view];
  $('#main').innerHTML = '<div class="wrap">' + fn() + '</div>';
  fitTables(); fillImages();
  if (!keepScroll) window.scrollTo(0, 0);
}
/* Tabellen, die breiter als der Bildschirm wären, werden zeilenweise untereinander dargestellt (CSS .stack) */
// zu breite Tabellen: erst enger setzen, und nur wenn das nicht reicht, die Zeilen untereinander stapeln
function fitTables() { document.querySelectorAll('.tblwrap').forEach(w => { w.classList.remove('stack', 'tight'); const wide = () => w.scrollWidth > w.clientWidth + 1;
  if (wide()) { w.classList.add('tight'); if (wide()) { w.classList.remove('tight'); w.classList.add('stack'); } } }); }
window.addEventListener('resize', () => { clearTimeout(fitTables.t); fitTables.t = setTimeout(fitTables, 150); });
function go(v) { if (UI.view !== v) { TTS.stop(); READER.playing = false; UI.gquiz = null; UI.kq = null; }
  if (UI.view === 'welcome' && !S.settings.welcome) { S.settings.welcome = true; touch(); }
  UI.view = v; UI.confirm = null; render(); }
/* Zurück-Taste (Android): erst innerhalb der App zurück, auf „Heute“ die App schließen */
function goBack() {
  if (closeWord()) return true;
  if (UI.confirm) { UI.confirm = null; render(true); return true; }
  if (UI.view === 'review' && SES) { SES = null; TTS.stop(); render(); return true; }
  if (UI.view === 'kana' && UI.kq) { UI.kq = null; TTS.stop(); render(); return true; }
  if (UI.view === 'grammar' && UI.gquiz) { UI.gquiz = null; TTS.stop(); render(); return true; }
  if (UI.view === 'grammar' && UI.lesson !== null && UI.lvoc) { UI.lvoc = false; TTS.stop(); render(); return true; }
  if (UI.view === 'grammar' && UI.lesson !== null) { UI.lesson = null; TTS.stop(); render(); return true; }
  if (UI.view === 'read' && UI.text !== null) { UI.text = null; READER.playing = false; TTS.stop(); render(); return true; }
  if (UI.view === 'card') { closeCard(); return true; }
  if (UI.view !== 'home') { go('home'); return true; }
  return false;
}

/* ================= Ansicht: Begrüßung (nur beim ersten Start) ================= */
const KANA_TILE = '<button class="tile" data-a="go" data-v="kana"><span class="k" lang="ja">あ</span><b>Hiragana &amp; Katakana</b><span>Schrifttabellen mit Aussprache und Quiz</span></button>';
function vWelcome() {
  return `<header class="pagehead"><span class="eyebrow jpd" lang="ja">ようこそ</span><h1>Willkommen bei Manabi</h1></header>
  <section class="prose"><p>Mit Manabi lernst du Japanisch vor allem über <b>Wörter</b> und viel <b>Lesen und Hören</b>. Die Grammatik läuft nebenher und ist zum Wiedererkennen da, nicht zum Pauken.</p><p>Womit möchtest du anfangen?</p></section>
  <div class="welcome">
    <button class="tile" data-a="welcome" data-to="kana"><span class="k" lang="ja">あ</span><b>Ich fange ganz neu an</b><span>Zuerst die Schrift: Hiragana und Katakana mit Aussprache und Quiz. Danach geht es mit Lektion 1 weiter.</span></button>
    <button class="tile" data-a="welcome" data-to="course"><span class="k" lang="ja">文</span><b>Ich kann Hiragana und Katakana lesen</b><span>Starte mit Lektion 1 des Grundkurses. Sie erklärt in fünf Minuten, wie du mit der App lernst.</span></button>
    <button class="tile" data-a="welcome" data-to="home"><span class="k" lang="ja">今</span><b>Ich habe schon Vorkenntnisse</b><span>Direkt zur Übersicht: Karten wiederholen, Grammatik nach JLPT-Stufe, Lesetexte von N5 bis N1.</span></button>
  </div>
  <p class="muted small">Du kannst jederzeit wechseln – alles ist über die Leiste unten und die Startseite erreichbar.</p>`;
}

/* ================= Ansicht: Heute ================= */
function installHint() {
  if (NATIVE || STANDALONE || S.settings.hideInstall) return '';
  const how = IS_IOS ? 'Tippe in Safari auf <b>Teilen</b> und dann auf <b>„Zum Home-Bildschirm“</b>.' : 'Öffne das Browser-Menü und wähle <b>„App installieren“</b> oder <b>„Zum Startbildschirm hinzufügen“</b>.';
  return '<section class="panel install"><span class="k" aria-hidden="true">学</span><div style="display:flex;flex-direction:column;gap:6px;min-width:0"><h2>Als App installieren</h2><p class="muted small">' + how + ' Danach startet Manabi wie eine normale App, im Vollbild und auch ohne Internet.</p><div><button class="link" data-a="hideinstall">Ausblenden</button></div></div></section>';
}
function vHome() {
  const now = Date.now(), c = counts(now), lg = todayLog(), words = activeWords();
  const pr = { new: 0, learn: 0, young: 0, mature: 0 }; words.forEach(w => pr[status(w)]++);
  const total = words.length;
  // Prognose 14 Tage
  const ds = dayStart(now), fc = Array(14).fill(0);
  for (const w of words) { const x = S.srs[w.id]; if (!x) continue; const k = x[0] < ds + DAY ? 0 : Math.floor((x[0] - ds) / DAY); if (k >= 0 && k < 14) fc[k]++; }
  const mx = Math.max(1, ...fc);
  const fcHtml = fc.map((v, i) => { const d = new Date(ds + i * DAY + 12 * 3600000); return '<div class="col' + (i === 0 ? ' today' : '') + '" title="' + v + ' Karten"><span class="v">' + (v || '') + '</span><span class="b" style="height:' + Math.round(v / mx * 82) + 'px"></span><span class="d">' + (i === 0 ? '今' : '日月火水木金土'[d.getDay()]) + '</span></div>'; }).join('');
  // Serie
  let streak = 0; for (let i = 0; i < 400; i++) { const k = dayKey(now - i * DAY); if (S.log[k] && S.log[k].r > 0) streak++; else if (i > 0) break; }
  const pct = lg.r ? Math.round(lg.c / lg.r * 100) + ' %' : '–';
  const seg = (n, col) => n ? '<span style="width:' + (n / total * 100) + '%;background:' + col + '"></span>' : '';
  const gNext = GRAMMAR.findIndex((g, i) => !S.gdone[i]), tNext = nextText(), gs = gpStats(S.settings.gLv);
  return `
  <header class="pagehead"><span class="eyebrow jpd">${jpDate(now)}</span><h1 class="hide-m">Heute</h1></header>
  ${installHint()}
  <section class="panel today">
    <div class="nums">
      <div class="num"><span class="n" style="color:var(--new)">${c.newLeft}</span><span class="l">Neue Wörter</span></div>
      <div class="num"><span class="n" style="color:var(--learn)">${c.learnDue}</span><span class="l">In der Lernphase</span></div>
      <div class="num"><span class="n" style="color:var(--good)">${c.due}</span><span class="l">Fällig</span></div>
    </div>
    ${c.total ? `<button class="btn primary big" data-a="startrev">Wiederholen · ${c.total}</button>` : `<button class="btn big" data-a="opentext" data-i="${tNext}">Für heute fertig – einen Text lesen</button>`}
    <p class="meta">${esc(deckName())} · ${total} Wörter · ${S.settings.newPerDay} neue pro Tag</p>
  </section>
  <section class="stats">
    <div class="stat"><b>${lg.r}</b><span>Karten heute (${pct} gewusst)</span></div>
    <div class="stat"><b>${streak} ${streak === 1 ? 'Tag' : 'Tage'}</b><span>Lernserie</span></div>
    <div class="stat"><b>${total - pr.new} / ${total}</b><span>Wörter begonnen</span></div>
  </section>
  <section class="grid2">
    <div class="panel"><h2>Fällige Karten, nächste 14 Tage</h2><div class="fc" role="img" aria-label="Prognose der fälligen Karten">${fcHtml}</div></div>
    <div class="panel"><h2>Stand im Deck</h2>
      <div class="prog">${seg(pr.mature, 'var(--mature)')}${seg(pr.young, 'var(--good)')}${seg(pr.learn, 'var(--learn)')}</div>
      <div class="legend">
        <div><i style="background:var(--mature)"></i>Gefestigt (ab 21 Tagen)<b>${pr.mature}</b></div>
        <div><i style="background:var(--good)"></i>Jung<b>${pr.young}</b></div>
        <div><i style="background:var(--learn)"></i>Lernend<b>${pr.learn}</b></div>
        <div><i style="background:var(--sunk);border:1px solid var(--line)"></i>Noch neu<b>${pr.new}</b></div>
      </div>
    </div>
  </section>
  <section class="panel"><h2>Weiter mit</h2>
    <div class="nextlist">
      ${S.gdone[0] ? '' : KANA_TILE}
      ${gNext < 0 ? '' : `<button class="tile" data-a="opengram" data-i="${gNext}"><span class="k">文</span><b>Grundkurs · Lektion ${gNext + 1}</b><span>${esc(GRAMMAR[gNext].t)}</span></button>`}
      <button class="tile" data-a="go" data-v="grammar"><span class="k">${gNext < 0 ? '文' : '法'}</span><b>Grammatik ${S.settings.gLv}</b><span>${gs.n} von ${gs.total} Punkten gelernt</span></button>
      <button class="tile" data-a="opentext" data-i="${tNext}"><span class="k">読</span><b lang="ja">${esc(TEXTS[tNext].t)}</b><span>${esc(TEXTS[tNext].de)} · ${TEXTS[tNext].lv}</span></button>
      ${S.gdone[0] ? KANA_TILE : ''}
    </div>
  </section>`;
}

/* ================= Ansicht: Wiederholen ================= */
function learningIds() { const a = []; for (const w of activeWords()) { const c = S.srs[w.id]; if (c && c[5] !== -1) a.push(w.id); } return a; }
function startSession() {
  const now = Date.now(), c = counts(now);
  const reviews = [], fresh = [];
  for (const w of activeWords()) if (S.prio[w.id] && !S.srs[w.id] && fresh.length < c.newLeft) fresh.push(w.id); // aus einer Lektion vorgezogene Wörter kommen zuerst
  for (const w of activeWords()) { const x = S.srs[w.id]; if (!x) { if (fresh.length < c.newLeft && !S.prio[w.id]) fresh.push(w.id); } else if (x[5] === -1 && x[0] <= now) reviews.push(w.id); }
  shuffle(reviews);
  const main = []; const gap = fresh.length ? Math.max(1, Math.floor(reviews.length / fresh.length)) : reviews.length;
  let ri = 0, ni = 0;
  while (ri < reviews.length || ni < fresh.length) { for (let k = 0; k < gap && ri < reviews.length; k++) main.push(reviews[ri++]); if (ni < fresh.length) main.push(fresh[ni++]); }
  SES = { main, idx: 0, cur: null, last: null, revealed: false, mode: 'read', history: [], ok: 0, bad: 0, speak: false };
  nextCard();
  UI.view = 'review'; render();
  autoSpeak();
}
function pickNext() {
  const now = Date.now();
  const learn = learningIds().sort((a, b) => S.srs[a][0] - S.srs[b][0]);
  const dueNow = learn.filter(id => S.srs[id][0] <= now);
  if (dueNow.length) return dueNow[0] === SES.last && dueNow.length > 1 && SES.idx >= SES.main.length ? dueNow[1] : dueNow[0];
  while (SES.idx < SES.main.length) {
    const id = SES.main[SES.idx++]; const c = S.srs[id];
    if (!c || (c[5] === -1 && c[0] <= now)) return id;
  }
  const ahead = learn.filter(id => S.srs[id][0] <= now + 20 * MIN);
  if (ahead.length) return ahead[0] === SES.last && ahead.length > 1 ? ahead[1] : ahead[0];
  return null;
}
function nextCard() {
  SES.cur = pickNext(); SES.revealed = false;
  const m = S.settings.cardMode; SES.mode = m === 'mix' ? (Math.random() < .5 ? 'listen' : 'read') : m;
  SES.speak = !!SES.cur && SES.mode === 'listen';
}
function autoSpeak() { if (SES && SES.cur && SES.speak) { SES.speak = false; sayWord(wordById(SES.cur)); } }
function sessionCounts() {
  const now = Date.now(); let n = 0, r = 0;
  for (let i = SES.idx; i < SES.main.length; i++) { const c = S.srs[SES.main[i]]; if (!c) n++; else if (c[5] === -1 && c[0] <= now) r++; }
  let l = learningIds().filter(id => S.srs[id][0] <= now + 20 * MIN && id !== SES.cur).length;
  if (SES.cur) { const c = S.srs[SES.cur]; if (!c) n++; else if (c[5] === -1) r++; else l++; }
  return { n, r, l };
}
function reveal() { if (!SES || !SES.cur || SES.revealed) return; SES.revealed = true; render(true); if (SES.mode === 'read' && S.settings.autoAudio) sayWord(wordById(SES.cur)); }
function answerCard(ok) {
  if (!SES || !SES.cur || !SES.revealed) return;
  const id = SES.cur, prev = S.srs[id] ? S.srs[id].slice() : null;
  SES.history.push({ id, prev, ok });
  S.srs[id] = schedule(prev, ok);
  const L = todayLog(); L.r++; if (ok) L.c++; if (!prev) L.n++;
  ok ? SES.ok++ : SES.bad++;
  touchCard(id);
  SES.last = id; TTS.stop(); nextCard(); render(true); autoSpeak();
}
function undo() {
  if (!SES || !SES.history.length) return;
  const h = SES.history.pop();
  if (h.prev) S.srs[h.id] = h.prev; else delete S.srs[h.id];
  const L = todayLog(); L.r = Math.max(0, L.r - 1); if (h.ok) L.c = Math.max(0, L.c - 1); if (!h.prev) L.n = Math.max(0, L.n - 1);
  h.ok ? SES.ok-- : SES.bad--;
  if (SES.cur && SES.idx > 0 && SES.main[SES.idx - 1] === SES.cur) SES.idx--;
  SES.cur = h.id; SES.revealed = true;
  touchCard(h.id); render(true); toast('Letzte Antwort zurückgenommen');
}
function vReview() {
  if (!SES) {
    const c = counts();
    return `<header class="pagehead"><span class="eyebrow jpd">復習</span><h1>Wiederholen</h1></header>
    <section class="panel today">
      <div class="nums">
        <div class="num"><span class="n" style="color:var(--new)">${c.newLeft}</span><span class="l">Neu</span></div>
        <div class="num"><span class="n" style="color:var(--learn)">${c.learnDue}</span><span class="l">Lernphase</span></div>
        <div class="num"><span class="n" style="color:var(--good)">${c.due}</span><span class="l">Fällig</span></div>
      </div>
      ${c.total ? '<button class="btn primary big" data-a="startrev">Starten</button>' : ''}
      <p class="meta">${esc(deckName())} · Vorderseite: ${{ read: 'Wort lesen', listen: 'Wort hören', mix: 'gemischt' }[S.settings.cardMode]}</p>
    </section>
    ${c.total ? '' : `<section class="panel"><h2>Für heute ist alles erledigt</h2>
      <p class="muted">${c.learnAll ? c.learnAll + ' Karten in der Lernphase kommen ' + (c.nextLearn < Infinity ? 'in ' + Math.max(1, Math.round((c.nextLearn - Date.now()) / MIN)) + ' Min. ' : '') + 'wieder. ' : ''}${c.newAvail ? 'Wenn du mehr schaffen willst, kannst du heute zusätzliche neue Wörter freischalten.' : 'Alle Wörter dieses Decks sind begonnen.'}</p>
      ${c.newAvail ? '<div class="row"><button class="btn" data-a="extra">+10 neue Wörter heute</button></div>' : ''}</section>`}
    <section class="panel"><h2>So funktioniert es</h2>
      <p class="muted">Schau dir das Wort an (oder hör es dir an) und überlege, was es bedeutet. Dann deck die Karte auf. Wusstest du es, wird der Abstand bis zur nächsten Abfrage größer – etwa 1, 3, 8, 20 Tage. Wusstest du es nicht, kommt die Karte nach wenigen Minuten wieder und der Abstand wird kürzer.</p></section>`;
  }
  if (!SES.cur) {
    const c = counts(), n = SES.ok + SES.bad;
    return `<section class="panel done-hero"><span class="jbig">お疲れさまでした！</span><h1>Runde geschafft</h1>
      <p class="lead">${n} Karten, davon ${SES.ok} gewusst${n ? ' (' + Math.round(SES.ok / n * 100) + ' %)' : ''}.
      ${c.learnAll ? c.learnAll + ' Karten aus der Lernphase kommen später heute wieder – dann wird die Zahl in der Seitenleiste angezeigt.' : ''}</p>
      <div class="row"><button class="btn primary" data-a="endses" data-v="home">Zur Übersicht</button><button class="btn" data-a="endses" data-v="read">Einen Text lesen</button></div>
      <p class="tip">Tipp: Hör oder schau heute auch außerhalb der App ein wenig Japanisch, etwa auf YouTube oder Netflix. Zehn Minuten genügen – so festigen sich die Wörter, und du gewöhnst dich an natürliches Sprechen.</p></section>`;
  }
  const w = wordById(SES.cur), c = S.srs[SES.cur], sc = sessionCounts();
  const tag = !c ? '<span class="chip new">Neu</span>' : c[5] === -1 ? '<span class="chip young">Wiederholung</span>' : '<span class="chip learn">Lernphase</span>';
  const listenFront = SES.mode === 'listen';
  const front = listenFront ? '<button class="play-big" data-a="sayword">' + ICON.speaker + '<span>Nochmal anhören</span></button>' : '<div class="word" lang="ja">' + esc(plain(w.w)) + '</div>';
  let back = '', btns;
  if (SES.revealed) {
    const rd = readingOf(w);
    back = `<div class="backside">
      ${listenFront ? '<div class="word" lang="ja" style="font-size:48px;text-align:left;padding:0;background:none">' + esc(plain(w.w)) + '</div>' : ''}
      <div class="reading" lang="ja">${esc(rd)}<button class="icon" data-a="sayword" aria-label="Wort anhören">${ICON.speaker}</button></div>
      <div class="meaning">${esc(w.m)}</div>
      ${w.p ? '<div class="pos">' + esc(w.p) + '</div>' : ''}
      ${w.g ? '<img class="cardimg" data-img="' + w.id + '" alt="">' : ''}
      ${w.s ? '<div class="ex"><div class="ex-jp" lang="ja"><span>' + jp(w.s) + '</span><button class="icon sm" data-a="saysent" aria-label="Satz anhören">' + ICON.speaker + '</button></div>' + (w.t ? '<div class="ex-de">' + esc(w.t) + '</div>' : '') + '</div>' : ''}
    </div>`;
    const now = Date.now(), prev = S.srs[SES.cur];
    btns = '<button class="btn again" data-a="ans" data-ok="0">Nicht gewusst<small>' + fmtNext(schedule(prev, false, now, false), now) + '</small></button><button class="btn good" data-a="ans" data-ok="1">Gewusst<small>' + fmtNext(schedule(prev, true, now, false), now) + '</small></button>';
  } else btns = '<button class="btn primary big wide" data-a="reveal">Aufdecken</button>';
  return `<div class="ses-top">
      <div class="counts"><span style="color:var(--new)">${sc.n}<small>neu</small></span><span style="color:var(--learn)">${sc.l}<small>lernen</small></span><span style="color:var(--good)">${sc.r}<small>fällig</small></span></div>
      <span class="sp"></span>
      ${SES.history.length ? '<button class="link" data-a="undo">Rückgängig</button>' : ''}
      <button class="btn" data-a="endses" data-v="review">Beenden</button>
    </div>
    <article class="flash${SES.revealed ? ' open' : ''}"><div class="flash-tag">${tag}</div><div class="flash-front">${front}</div>${back}</article>
    <div class="answer">${btns}</div>
    <p class="keys"><kbd>Leertaste</kbd> ${SES.revealed ? 'Gewusst' : 'Aufdecken'} · <kbd>1</kbd> Nicht gewusst · <kbd>2</kbd> Gewusst · <kbd>R</kbd> Anhören · <kbd>Z</kbd> Rückgängig</p>`;
}

/* ================= Quiz-Baustein ================= */
function quizHTML(key, items) {
  return '<div class="quiz">' + items.map((it, i) => {
    const k = key + ':' + i;
    if (!UI.qo[k]) UI.qo[k] = shuffle(it.o.map((_, j) => j));
    const ans = UI.qa[k];
    const opts = UI.qo[k].map(j => {
      let cls = 'opt'; if (ans !== undefined) { if (j === 0) cls += ' right'; else if (j === ans) cls += ' wrong'; }
      return '<button class="' + cls + '" data-a="qans" data-k="' + k + '" data-j="' + j + '"' + (ans !== undefined ? ' disabled' : '') + '>' + rb(esc(it.o[j])) + '</button>';
    }).join('');
    const q = it.jp ? '<div class="qt jp" lang="ja">' + jp(it.q) + '</div>' : '<div class="qt">' + rb(esc(it.q)) + '</div>';
    return '<div class="qq"><span class="eyebrow">Frage ' + (i + 1) + '</span>' + q + '<div class="opts">' + opts + '</div>' + (ans !== undefined && it.e ? '<p class="expl">' + (ans === 0 ? 'Richtig. ' : 'Nicht ganz. ') + rb(esc(it.e)) + '</p>' : (ans !== undefined ? '<p class="expl">' + (ans === 0 ? 'Richtig.' : 'Nicht ganz – die richtige Antwort ist markiert.') + '</p>' : '')) + '</div>';
  }).join('') + '</div>';
}
function quizScore(key, n) { let a = 0, r = 0; for (let i = 0; i < n; i++) { const v = UI.qa[key + ':' + i]; if (v !== undefined) { a++; if (v === 0) r++; } } return { a, r }; }

/* ================= Ansicht: Grammatik ================= */
const GP_BY_ID = new Map(); LEVELS.forEach(lv => GP[lv].forEach(g => GP_BY_ID.set(g.id, g)));
const GP_LESSON = new Map(); GRAMMAR.forEach((g, i) => (g.gp || []).forEach(id => GP_LESSON.set(id, i))); // Grammatikpunkt → ausführliche Grundkurs-Lektion
const LV_NAME = { N5: 'Einstieg', N4: 'Grundstufe', N3: 'Mittelstufe', N2: 'obere Mittelstufe', N1: 'Fortgeschrittene' };
function lvSeg(action, cur, info) {
  return '<div class="seg lvseg" role="radiogroup" aria-label="JLPT-Stufe">' + LEVELS.map(lv => '<label><input type="radio" name="' + action + '" data-a="' + action + '" value="' + lv + '"' + (cur === lv ? ' checked' : '') + '><span>' + lv + '<small>' + info(lv) + '</small></span></label>').join('') + '</div>';
}
function gpStats(lv) { return { n: GP[lv].filter(g => S.gp[g.id]).length, total: GP[lv].length }; }
function exRow(e) { return '<div class="exr"><button class="icon sm" data-a="say" data-p="' + esc(plain(e[0])) + '" data-t="' + esc(kana(e[0])) + '" aria-label="Anhören">' + ICON.speaker + '</button><span class="jp" lang="ja">' + jp(e[0]) + '</span><span class="de">' + esc(e[1]) + '</span></div>'; }
function vGrammar() {
  if (UI.lesson !== null) return vLesson();
  if (UI.gquiz) return vGramQuiz();
  const lv = S.settings.gLv, st = gpStats(lv), q = UI.gq.trim().toLowerCase();
  const list = GP[lv].filter(g => (!UI.gopenOnly || !S.gp[g.id]) && (!q || g.p.toLowerCase().includes(q) || g.m.toLowerCase().includes(q) || plain(g.ex[0][0]).includes(q)));
  let base = '';
  {
    const n = GRAMMAR.filter((g, i) => S.gdone[i]).length, next = GRAMMAR.findIndex((g, i) => !S.gdone[i]);
    base = `<section class="panel"><div class="panelhead"><h2>Grundkurs</h2><span class="muted small">${n} von ${GRAMMAR.length} Lektionen erledigt</span></div>
      <p class="muted">Ausführliche Lektionen zu den Grundlagen, auf denen alles Weitere aufbaut: Satzbau, Verbgruppen, Adjektive, て-Form, Potential, Passiv, Geben und Bekommen. Es geht ums Wiedererkennen, nicht ums Auswendiglernen.</p>
      <div class="row">${next >= 0 ? '<button class="btn primary" data-a="opengram" data-i="' + next + '">Weiter mit Lektion ' + (next + 1) + '</button>' : ''}<button class="btn" data-a="gbase">${UI.gbase ? 'Lektionen ausblenden' : 'Alle Lektionen zeigen'}</button></div>
      ${UI.gbase ? '<div class="list">' + GRAMMAR.map((g, i) => `<button class="li" data-a="opengram" data-i="${i}"><span class="no">${i + 1}</span><span class="ti"><b>${esc(g.t)}</b><span lang="ja">${rb(esc(g.jp), true)}</span></span>${S.gdone[i] ? '<span class="chip done">' + ICON.check + 'Erledigt</span>' : '<span></span>'}</button>`).join('') + '</div>' : ''}</section>`;
  }
  const rows = list.map(g => {
    const open = UI.gopen === g.id, done = !!S.gp[g.id];
    let h = `<button class="gprow" data-a="gpopen" data-id="${esc(g.id)}" aria-expanded="${open}"><span class="p" lang="ja">${esc(g.p)}</span><span class="m">${esc(g.m)}</span>${done ? '<span class="chip done">' + ICON.check + 'Gelernt</span>' : '<span></span>'}</button>`;
    if (open) h += `<div class="gpdetail">${g.x ? '<p class="gpx">' + rb(esc(g.x)) + '</p>' : ''}<div class="gpf"><span class="eyebrow">Bildung</span><span lang="ja">${esc(g.f)}</span></div>
      <div class="exs">${g.ex.map(exRow).join('')}</div>
      <div class="row"><button class="btn${done ? '' : ' primary'}" data-a="gpdone" data-id="${esc(g.id)}">${done ? 'Wieder als offen markieren' : 'Als gelernt markieren'}</button>${GP_LESSON.has(g.id) ? '<button class="btn" data-a="opengram" data-i="' + GP_LESSON.get(g.id) + '">Ausführlich im Grundkurs · Lektion ' + (GP_LESSON.get(g.id) + 1) + '</button>' : ''}</div></div>`;
    return h;
  }).join('');
  return `<header class="pagehead"><span class="eyebrow jpd">文法</span><h1>Grammatik</h1></header>
  <p class="lead">Die Grammatik nach JLPT-Stufen. Eine offizielle Liste gibt es nicht; die Einteilung folgt den gängigen Lehrwerken und Lernlisten.</p>
  ${lvSeg('glv', lv, l => { const s = gpStats(l); return s.n + '/' + s.total; })}
  ${base}
  <section class="panel"><div class="panelhead"><h2>${lv} · ${LV_NAME[lv]}</h2><span class="muted small">${st.n} von ${st.total} gelernt</span></div>
    <div class="prog"><span style="width:${st.total ? st.n / st.total * 100 : 0}%;background:var(--good)"></span></div>
    <div class="row"><button class="btn primary" data-a="gquiz">Quiz · 10 Fragen</button><span class="muted small">Du siehst ein Muster und wählst die Bedeutung. Offene Punkte kommen zuerst dran.</span></div>
  </section>
  <div class="filters"><input class="search" id="gq" type="search" placeholder="Suchen: Muster oder Bedeutung" value="${esc(UI.gq)}" autocomplete="off">
    <button class="btn${UI.gopenOnly ? ' on' : ''}" data-a="gopenonly" aria-pressed="${UI.gopenOnly}">Nur offene</button></div>
  <div class="gplist">${rows || '<p style="padding:16px" class="muted">Keine Treffer.</p>'}</div>`;
}
function vLesson() { FORCE_FURI = true; try { return lessonHTML(); } finally { FORCE_FURI = false; } }
/* Vokabeln einer Lektion (GRAMMAR_VOC aus lesson-voc.js), mit Stand in den Karten des aktiven Decks */
const DECK_IDX = { key: null, map: null };
function deckWord(w, r) {
  const key = S.active + (S.deckMeta ? S.deckMeta.name : '');
  if (DECK_IDX.key !== key) { DECK_IDX.key = key; DECK_IDX.map = new Map(); for (const x of activeWords()) { const k = plain(x.w); if (!DECK_IDX.map.has(k)) DECK_IDX.map.set(k, []); DECK_IDX.map.get(k).push(x); } }
  const l = DECK_IDX.map.get(w); return l ? (l.find(x => kana(x.r || x.w) === r) || l[0]) : null;
}
function lessonVocHTML(i) {
  const g = GRAMMAR[i], voc = (GRAMMAR_VOC[i] || []).map(v => ({ v, c: deckWord(v[0], v[1]) }));
  const inDeck = voc.filter(x => x.c), fresh = inDeck.filter(x => !S.srs[x.c.id]), todo = fresh.filter(x => !S.prio[x.c.id]);
  const chip = x => { if (!x.c) return ''; const st = status(x.c); return '<span class="chip ' + st + '">' + (st === 'new' ? (S.prio[x.c.id] ? 'Vorgemerkt' : 'Karte: neu') : 'Karte: ' + STATUS_LABEL[st].toLowerCase()) + '</span>'; };
  return `<button class="back" data-a="lvoc">← Lektion ${i + 1}</button>
  <header class="pagehead"><span class="eyebrow">Grundkurs · Lektion ${i + 1} · Vokabeln</span><h1>${esc(g.t)}</h1></header>
  <p class="muted small">${voc.length} Wörter aus den Beispiel- und Quizsätzen dieser Lektion, in der Reihenfolge ihres Auftretens. Verben und Adjektive stehen in der Wörterbuchform. Zum Wiedererkennen, nicht zum Pauken.</p>
  ${inDeck.length ? '<section class="panel vocdeck"><p class="small"><b>' + inDeck.length + ' dieser Wörter</b> sind auch in deinen Karten (' + esc(deckName()) + ')' + (fresh.length ? ', <b>' + fresh.length + '</b> davon hast du dort noch nicht gelernt.' : ' – du hast alle schon begonnen.') + '</p>' + (todo.length ? '<div class="row"><button class="btn primary" data-a="lvocprio">' + todo.length + ' neue Wörter in den Karten vorziehen</button></div><p class="muted small">Sie kommen dann als nächste neue Karten, vor dem Rest des Decks. Dein Tageslimit für neue Wörter bleibt gleich.</p>' : (fresh.length ? '<p class="muted small">Die neuen Wörter sind vorgemerkt und kommen als nächste neue Karten.</p>' : '')) + '</section>' : ''}
  <section class="panel"><div class="exs">${voc.map(x => '<div class="exr vrow"><button class="icon sm" data-a="say" data-p="' + esc(x.v[0]) + '" data-t="' + esc(x.v[1]) + '" aria-label="Anhören">' + ICON.speaker + '</button><span class="jp" lang="ja">' + esc(x.v[0]) + (x.v[1] !== x.v[0] ? '<small>' + esc(x.v[1]) + '</small>' : '') + chip(x) + '</span><span class="de">' + esc(x.v[2]) + '</span></div>').join('')}</div></section>
  <div class="pager"><button class="btn" data-a="lvoc">← Zurück zur Lektion</button></div>`;
}
function lessonHTML() {
  const i = UI.lesson, g = GRAMMAR[i], key = 'g' + i;
  if (UI.lvoc) return lessonVocHTML(i);
  const nvoc = (GRAMMAR_VOC[i] || []).length;
  const sc = quizScore(key, g.q.length);
  const tblHTML = t => t ? '<div class="tblwrap"><table class="g"><thead><tr>' + t[0].map(h => '<th>' + rb(esc(h)) + '</th>').join('') + '</tr></thead><tbody>' + t.slice(1).map(r => '<tr>' + r.map((c, k) => '<td data-l="' + esc(t[0][k] || '') + '"><span>' + rb(esc(c)) + '</span></td>').join('') + '</tr>').join('') + '</tbody></table></div>' : '';
  const tbl = tblHTML(g.tbl);
  return `<button class="back" data-a="gramlist">← Grammatik</button>
  <header class="pagehead"><span class="eyebrow">Grundkurs · Lektion ${i + 1} von ${GRAMMAR.length}</span><h1>${esc(g.t)}</h1><span class="eyebrow jpd" lang="ja">${rb(esc(g.jp))}</span></header>
  <section class="prose">${g.intro.map(p => '<p>' + rb(p) + '</p>').join('')}</section>
  ${g.pat && g.pat.length ? '<section class="pattern">' + g.pat.map(p => '<div class="pat"><span class="j" lang="ja">' + rb(esc(p[0])) + '</span><span lang="ja">' + rb(esc(p[1])) + '</span></div>').join('') + '</section>' : ''}
  ${tbl}
  ${(g.sec || []).map(c => '<section class="panel lsec"><h2>' + rb(esc(c.h)) + '</h2>' + (c.p || []).map(x => '<p class="lp">' + rb(x) + '</p>').join('') + tblHTML(c.tbl) + (c.ex && c.ex.length ? '<div class="exs">' + c.ex.map(exRow).join('') + '</div>' : '') + '</section>').join('')}
  ${g.ex && g.ex.length ? '<section class="panel"><h2>' + (g.sec ? 'Weitere Beispiele' : 'Beispiele') + '</h2><div class="exs">' + g.ex.map(exRow).join('') + '</div></section>' : ''}
  ${g.note ? '<p class="tip">' + rb(esc(g.note)) + '</p>' : ''}
  <section class="panel"><h2>Verstehst du es?</h2>${quizHTML(key, g.q)}
  ${sc.a === g.q.length ? '<p class="small"><b>' + sc.r + ' von ' + g.q.length + ' richtig.</b> ' + (sc.r === g.q.length ? 'Lektion erledigt.' : 'Lies die Beispiele noch einmal und versuch es erneut.') + ' <button class="link" data-a="qreset" data-k="' + key + '">Fragen wiederholen</button></p>' : ''}</section>
  ${nvoc ? '<p class="voclink"><button class="link" data-a="lvoc">Vokabeln dieser Lektion (' + nvoc + ' Wörter)</button></p>' : ''}
  <div class="pager">${i > 0 ? '<button class="btn" data-a="opengram" data-i="' + (i - 1) + '">← Lektion ' + i + '</button>' : '<span></span>'}${i < GRAMMAR.length - 1 ? '<button class="btn primary" data-a="opengram" data-i="' + (i + 1) + '">Lektion ' + (i + 2) + ' →</button>' : ''}</div>`;
}
/* ================= Ansicht: Hiragana & Katakana ================= */
function startKanaQuiz() {
  const pool = Object.keys(KANA).flatMap(k => KANA[k].flat().filter(Boolean).map(c => ({ c, yo: k === 'yoon' }))); // immer alle Zeichen
  const all = k => KANA[k].flat().filter(Boolean).map(c => c[1]);
  const items = shuffle(pool.slice()).slice(0, 15).map(({ c, yo }) => {
    const others = shuffle([...new Set(yo ? all('yoon') : all('base').concat(all('dak')))].filter(r => r !== c[1])).slice(0, 3);
    return { c, opts: shuffle([c[1], ...others]) };
  });
  UI.kq = { items, i: 0, ans: null, res: [] }; TTS.stop(); render();
}
function vKanaQuiz() {
  const q = UI.kq, kata = UI.kana === 'k', show = h => kata ? toKatakana(h) : h, n = q.items.length;
  if (q.i >= n) {
    const ok = q.res.filter(Boolean).length, miss = q.items.filter((it, i) => !q.res[i]);
    return `<header class="pagehead"><span class="eyebrow">${kata ? 'Katakana' : 'Hiragana'} · Quiz</span><h1>${ok} von ${n} richtig</h1></header>
    ${miss.length ? '<section class="panel"><h2>Noch einmal ansehen</h2><div class="kgrid k5">' + miss.map(it => '<button class="kcell" data-a="say" data-p="' + toKatakana(it.c[0]) + '" data-t="' + it.c[0] + '"><b lang="ja">' + show(it.c[0]) + '</b><span>' + it.c[1] + '</span></button>').join('') + '</div></section>' : '<p class="tip">Alles richtig.</p>'}
    <div class="pager"><button class="btn" data-a="kqend">← Zur Tabelle</button><button class="btn primary" data-a="kqstart">Noch eine Runde</button></div>`;
  }
  const it = q.items[q.i];
  return `<button class="back" data-a="kqend">← Zur Tabelle</button>
  <header class="pagehead"><span class="eyebrow">${kata ? 'Katakana' : 'Hiragana'} · Quiz · ${q.i + 1} von ${n}</span></header>
  <section class="panel kquiz"><div class="kq-c" lang="ja">${show(it.c[0])}</div><p class="muted small">Wie wird dieses Zeichen gelesen?</p>
  <div class="opts kq-o">${it.opts.map((o, j) => '<button class="opt' + (q.ans !== null ? (o === it.c[1] ? ' right' : j === q.ans ? ' wrong' : '') : '') + '" data-a="kqans" data-j="' + j + '"' + (q.ans !== null ? ' disabled' : '') + '>' + o + '</button>').join('')}</div>
  ${q.ans !== null ? '<div class="row"><button class="btn primary" data-a="kqnext">' + (q.i + 1 < n ? 'Weiter' : 'Ergebnis') + '</button><button class="btn" data-a="say" data-p="' + toKatakana(it.c[0]) + '" data-t="' + it.c[0] + '">Noch einmal hören</button></div>' : ''}</section>`;
}
function vKana() {
  if (UI.kq) return vKanaQuiz();
  const kata = UI.kana === 'k', show = h => kata ? toKatakana(h) : h;
  // vorgelesen wird immer die Katakana-Schreibweise: so liest die Stimme は, へ und を als Silbe und nicht als Partikel
  const cell = c => c ? '<button class="kcell" data-a="say" data-p="' + toKatakana(c[0]) + '" data-t="' + c[0] + '"><b lang="ja">' + show(c[0]) + '</b><span>' + c[1] + '</span></button>' : '<span class="kcell empty"></span>';
  const grid = (rows, n) => '<div class="kgrid k' + n + '">' + rows.map(r => r.map(cell).join('')).join('') + '</div>';
  return `<button class="back" data-a="go" data-v="home">← Heute</button>
  <header class="pagehead"><span class="eyebrow">Schrift</span><h1>Hiragana &amp; Katakana</h1><span class="eyebrow jpd" lang="ja">ひらがな・カタカナ</span></header>
  <section class="prose"><p>Japanisch wird mit drei Schriften geschrieben. <b>Hiragana</b> und <b>Katakana</b> sind Silbenschriften: Jedes Zeichen steht für eine Silbe, und beide haben dieselben 46 Grundlaute. Dazu kommen die <b>Kanji</b>, die du nicht einzeln lernst, sondern mit den Wörtern.</p>
  <p>Fang mit Hiragana an – damit sind Endungen, Partikeln und die Lesehilfen über den Kanji geschrieben. Katakana brauchst du für Fremdwörter und Namen wie <span class="j" lang="ja">パン</span> (Brot) oder <span class="j" lang="ja">ドイツ</span> (Deutschland). Tippe ein Zeichen an, um es zu hören.</p></section>
  <div class="seg" role="radiogroup" aria-label="Schrift"><label><input type="radio" name="kanaset" data-a="kanaset" value="h"${kata ? '' : ' checked'}><span>Hiragana</span></label><label><input type="radio" name="kanaset" data-a="kanaset" value="k"${kata ? ' checked' : ''}><span>Katakana</span></label></div>
  <section class="panel"><h2>Üben</h2><p class="muted small">Das Quiz zeigt ein Zeichen, du wählst die Lesung. Jede Runde fragt 15 zufällige Zeichen aus allen Tabellen ab.</p>
    <div class="row"><button class="btn primary" data-a="kqstart">Quiz starten</button></div></section>
  <section class="panel"><h2>Grundlaute</h2><p class="muted small">Gelesen wird zeilenweise: a, i, u, e, o – ka, ki, ku, ke, ko – und so weiter.</p>${grid(KANA.base, 5)}</section>
  <section class="panel"><h2>Mit Strichen und Kreis</h2><p class="muted small">Zwei Striche machen den Laut stimmhaft (k → g, s → z, t → d, h → b), der kleine Kreis macht aus h ein p.</p>${grid(KANA.dak, 5)}</section>
  <section class="panel"><h2>Zusammengesetzte Laute</h2><p class="muted small">Ein Zeichen der i-Spalte und ein kleines ${show('や')}, ${show('ゆ')} oder ${show('よ')} verschmelzen zu einer Silbe.</p>${grid(KANA.yoon, 3)}</section>
  <section class="panel"><h2>Gut zu wissen</h2><ul class="klist">
    <li>Als Partikel wird <span class="j" lang="ja">は</span> wie <b>wa</b> gesprochen, <span class="j" lang="ja">へ</span> wie <b>e</b> und <span class="j" lang="ja">を</span> wie <b>o</b>.</li>
    <li>Ein kleines <span class="j" lang="ja">${show('っ')}</span> verdoppelt den folgenden Konsonanten: <span class="j" lang="ja">${kata ? 'ベッド' : 'きって'}</span> = ${kata ? 'beddo (Bett)' : 'kitte (Briefmarke)'}.</li>
    <li>Lange Vokale: in Hiragana durch einen zweiten Vokal (<span class="j" lang="ja">おかあさん</span> = okāsan, <span class="j" lang="ja">がっこう</span> = gakkō), in Katakana durch einen Strich (<span class="j" lang="ja">コーヒー</span> = kōhī).</li>
    <li><span class="j" lang="ja">${show('し')}</span>, <span class="j" lang="ja">${show('ち')}</span>, <span class="j" lang="ja">${show('つ')}</span> und <span class="j" lang="ja">${show('ふ')}</span> weichen von der Reihe ab: shi, chi, tsu, fu.</li>
    <li>Du musst die Tabellen nicht fehlerfrei können, bevor du weitermachst. Lies jeden Tag ein paar Zeichen und fang dann mit den Karten und dem Grundkurs an – beim Lesen festigen sie sich von selbst.</li></ul></section>
  <div class="pager"><button class="btn" data-a="go" data-v="home">← Heute</button><button class="btn primary" data-a="opengram" data-i="0">Zum Grundkurs →</button></div>`;
}
/* Quiz zu den Grammatikpunkten einer Stufe: Muster sehen, Bedeutung wählen */
function startGramQuiz() {
  const lv = S.settings.gLv, all = GP[lv]; if (all.length < 4) return;
  const pick = shuffle(all.filter(g => !S.gp[g.id])).concat(shuffle(all.filter(g => S.gp[g.id]))).slice(0, 10);
  UI.gquiz = { lv, i: 0, ans: null, res: [], items: shuffle(pick).map(g => ({ g, opts: shuffle([g, ...shuffle(all.filter(x => x !== g && x.m !== g.m)).slice(0, 3)]) })) };
  TTS.stop(); render();
}
function vGramQuiz() {
  const Q = UI.gquiz, n = Q.items.length;
  if (Q.i >= n) {
    const ok = Q.res.filter(Boolean).length, miss = Q.items.filter((it, j) => !Q.res[j]);
    return `<section class="panel done-hero"><span class="jbig">${ok === n ? 'よくできました！' : 'お疲れさまでした！'}</span><h1>${ok} von ${n} richtig</h1>
      <div class="progress-dots">${Q.res.map(r => '<i class="' + (r ? 'ok' : 'no') + '"></i>').join('')}</div>
      <div class="row"><button class="btn primary" data-a="gquiz">Neue Runde</button><button class="btn" data-a="gqend">Zur Liste</button></div></section>
      ${miss.length ? '<section class="panel"><h2>Noch einmal ansehen</h2><div class="gplist flat">' + miss.map(it => `<button class="gprow" data-a="gqshow" data-id="${esc(it.g.id)}"><span class="p" lang="ja">${esc(it.g.p)}</span><span class="m">${esc(it.g.m)}</span><span></span></button>`).join('') + '</div></section>' : ''}`;
  }
  const it = Q.items[Q.i], g = it.g, done = Q.ans !== null;
  const dots = Q.items.map((_, j) => '<i class="' + (j < Q.res.length ? (Q.res[j] ? 'ok' : 'no') : j === Q.i ? 'cur' : '') + '"></i>').join('');
  const opts = it.opts.map((o, j) => { let cls = 'opt'; if (done) { if (o === g) cls += ' right'; else if (j === Q.ans) cls += ' wrong'; } return '<button class="' + cls + '" data-a="gqans" data-j="' + j + '"' + (done ? ' disabled' : '') + '>' + esc(o.m) + '</button>'; }).join('');
  return `<div class="ses-top"><span class="eyebrow">Grammatik-Quiz ${Q.lv} · ${Q.i + 1} / ${n}</span><span class="sp"></span><button class="btn" data-a="gqend">Beenden</button></div>
  <section class="panel lis-card"><div class="progress-dots">${dots}</div>
    <span class="eyebrow">Was bedeutet dieses Muster?</span><div class="gq-p" lang="ja">${esc(g.p)}</div>
    ${done ? '<div class="gq-f muted" lang="ja">' + esc(g.f) + '</div>' : ''}</section>
  <div class="opts">${opts}</div>
  ${done ? '<section class="panel"><div class="exs">' + g.ex.map(exRow).join('') + '</div></section><div class="row">' + (S.gp[g.id] ? '' : '<button class="btn" data-a="gpdone" data-id="' + esc(g.id) + '">Als gelernt markieren</button>') + '<button class="btn primary big" data-a="gqnext" style="flex:1">' + (Q.i + 1 < n ? 'Weiter' : 'Ergebnis') + '</button></div>' : ''}
  <p class="keys"><kbd>1</kbd>–<kbd>4</kbd> Antwort wählen · <kbd>Enter</kbd> Weiter</p>`;
}

/* ================= Ansicht: Lesen ================= */
const LV_LABEL = { '5': 'JLPT N5', '4': 'JLPT N4', '3': 'JLPT N3', '2': 'JLPT N2', '1': 'JLPT N1', '0': 'außerhalb der JLPT-Listen', x: 'Eigenname' };
const NUM_JP = '一二三四五六七八九十';
function textsOf(lv) { return TEXTS.map((t, i) => [t, i]).filter(([t]) => t.lv === lv); }
function nextText() { const cur = textsOf(S.settings.rLv); const hit = cur.find(([t]) => !S.tdone[t.id]) || TEXTS.map((t, i) => [t, i]).find(([t]) => !S.tdone[t.id]) || cur[0]; return hit[1]; }
function furi(raw) { return esc(raw).replace(FURI_RE, (m, b, r) => S.settings.furigana ? '<ruby>' + b + '<rt>' + r + '</rt></ruby>' : b); }
function sentHTML(toks, j) {
  return toks.map((k, n) => k.t === 'g' ? (S.settings.spaces ? '<span class="gap"></span>' : '') : k.t === 'p' ? esc(k.raw)
    : '<span class="w" data-a="word" data-j="' + j + '" data-n="' + n + '" role="button" tabindex="0">' + furi(k.raw) + '</span>').join('');
}
function sentPlain(toks) { return toks.map(k => k.t === 'g' ? '' : k.t === 'p' ? k.raw : k.pl).join(''); }
function sentKana(toks) { return toks.map(k => k.t === 'w' ? k.kn : k.t === 'p' ? k.raw : '').join(''); }
function vRead() {
  if (UI.text === null) {
    const lv = S.settings.rLv, list = textsOf(lv);
    return `<header class="pagehead"><span class="eyebrow jpd">読む</span><h1>Lesen</h1></header>
    <p class="lead">Texte nach JLPT-Stufen. Tippe im Text auf ein Wort, um Übersetzung, Lesung und Stufe zu sehen und es dir anzuhören.</p>
    ${lvSeg('rlv', lv, l => { const a = textsOf(l); return a.filter(([t]) => S.tdone[t.id]).length + '/' + a.length; })}
    <div class="list">${list.map(([t, i], n) => `<button class="li" data-a="opentext" data-i="${i}"><span class="no" lang="ja">${NUM_JP[n] || n + 1}</span><span class="ti"><b lang="ja" style="font-family:var(--f-jp)">${esc(t.t)}</b><span style="font-family:var(--f-ui)">${esc(t.de)} · ${t.s.length} Sätze</span></span>${S.tdone[t.id] ? '<span class="chip done">' + ICON.check + 'Gelesen</span>' : '<span></span>'}</button>`).join('')}</div>`;
  }
  const i = UI.text, t = TEXTS[i], key = 't' + i, sc = quizScore(key, t.q.length), toks = textTokens(t);
  const sib = textsOf(t.lv).map(x => x[1]), pos = sib.indexOf(i);
  return `<button class="back" data-a="textlist">← Alle Texte</button>
  <header class="pagehead"><span class="eyebrow">${t.lv} · ${esc(t.de)}</span><h1 lang="ja">${esc(t.t)}</h1></header>
  ${t.note ? '<p class="tip">' + esc(t.note) + '</p>' : ''}${voiceNote()}
  <div class="toolbar">
    <button class="btn${READER.playing ? ' on' : ''}" data-a="readall">${READER.playing ? ICON.stop + ' Stopp' : ICON.play + ' Ganzen Text anhören'}</button>
    <button class="btn${S.settings.furigana ? ' on' : ''}" data-a="togglefuri" aria-pressed="${S.settings.furigana}">Furigana</button>
    <button class="btn${UI.trAll ? ' on' : ''}" data-a="toggletr" aria-pressed="${UI.trAll}">Alle Übersetzungen</button>
  </div>
  <p class="small muted">Tippe auf ein Wort für Übersetzung, Stufe und Ton. <span class="trk" lang="ja">訳</span> zeigt die Übersetzung des Satzes.</p>
  <div class="reader">${t.s.map((s, j) => { const tr = UI.trAll || UI.tr[i + ':' + j]; return `<div class="sent${READER.playing && READER.idx === j ? ' cur' : ''}"><span class="jp" lang="ja">${sentHTML(toks[j], j)}</span><span class="sbtn"><button class="icon sm" data-a="saytext" data-j="${j}" aria-label="Satz anhören">${ICON.speaker}</button><button class="icon sm trb${tr ? ' on' : ''}" data-a="tsent" data-j="${j}" aria-label="Übersetzung des Satzes" aria-pressed="${!!tr}" lang="ja">訳</button></span>${tr ? '<span class="de">' + esc(s[1]) + '</span>' : ''}</div>`; }).join('')}</div>
  <section class="panel"><h2>Verständnisfragen</h2>${quizHTML(key, t.q)}
  ${sc.a === t.q.length ? '<p class="small"><b>' + sc.r + ' von ' + t.q.length + ' richtig.</b> <button class="link" data-a="qreset" data-k="' + key + '">Nochmal</button></p>' : ''}</section>
  <div class="pager">${pos > 0 ? '<button class="btn" data-a="opentext" data-i="' + sib[pos - 1] + '">← Vorheriger Text</button>' : '<span></span>'}${pos < sib.length - 1 ? '<button class="btn primary" data-a="opentext" data-i="' + sib[pos + 1] + '">Nächster Text →</button>' : ''}</div>`;
}
function readAll() {
  if (READER.playing) { READER.playing = false; TTS.stop(); render(true); return; }
  const t = TEXTS[UI.text], toks = textTokens(t); READER.playing = true; READER.idx = 0;
  const step = () => {
    if (!READER.playing || UI.view !== 'read' || UI.text === null) return;
    if (READER.idx >= t.s.length) { READER.playing = false; READER.idx = -1; render(true); return; }
    render(true);
    TTS.say(sentPlain(toks[READER.idx]), sentKana(toks[READER.idx]), { onend: () => { READER.idx++; setTimeout(step, 350); } });
  };
  step();
}
/* ---------- Wort-Fenster: erscheint beim Antippen eines Worts im Lesetext ---------- */
function closeWord() {
  const pop = $('#wpop'); if (!pop || pop.hidden) return false;
  pop.hidden = true; pop.innerHTML = '';
  document.querySelectorAll('.reader .w.sel').forEach(x => x.classList.remove('sel'));
  return true;
}
function openWord(el) {
  const t = TEXTS[UI.text], pop = $('#wpop'); if (!t || !pop) return;
  const k = (textTokens(t)[+el.dataset.j] || [])[+el.dataset.n]; if (!k) return;
  const again = el.classList.contains('sel'); closeWord(); if (again) return;
  el.classList.add('sel');
  const e = k.e, head = e ? e.w : k.pl, same = !e || k.pl === e.w;
  const rd = !e ? k.kn : (same && k.pl !== k.kn ? k.kn : e.r);
  const mine = e ? activeWords().find(w => plain(w.w) === e.w) : null, st = mine ? status(mine) : '';
  pop.innerHTML = `<div class="wp-top"><div class="wp-w" lang="ja">${esc(head)}</div><button class="icon" data-a="say" data-p="${esc(head)}" data-t="${esc(rd)}" aria-label="Wort anhören">${ICON.speaker}</button><button class="wp-x" data-a="wclose" aria-label="Schließen">×</button></div>
    ${rd !== head ? '<div class="wp-r" lang="ja">' + esc(rd) + '</div>' : ''}
    <div class="wp-m">${e ? esc(e.m) : 'Für dieses Wort gibt es noch keinen Eintrag.'}</div>
    ${e ? '<div class="wp-f"><span class="chip lv lv' + e.lv + '">' + LV_LABEL[e.lv] + '</span>' + (mine ? '<span class="chip ' + st + '">Im Deck: ' + STATUS_LABEL[st] + '</span>' : '') + '</div>' : ''}
    ${same ? '' : '<div class="wp-i"><span class="eyebrow">Im Text</span><b lang="ja">' + esc(k.pl) + '</b>' + (k.kn !== k.pl ? '<span lang="ja">' + esc(k.kn) + '</span>' : '') + '<button class="icon sm" data-a="say" data-p="' + esc(k.pl) + '" data-t="' + esc(k.kn) + '" aria-label="Form im Text anhören">' + ICON.speaker + '</button></div>'}`;
  pop.hidden = false;
  // unter dem Wort platzieren; wenn dort kein Platz ist, darüber
  const r = el.getClientRects()[0] || el.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight, vw = document.documentElement.clientWidth;
  const tabs = $('#tabs'), low = window.innerHeight - (tabs && tabs.offsetHeight ? tabs.offsetHeight : 0) - 8;
  let top = r.bottom + 8; if (top + ph > low && r.top - ph - 8 > 60) top = r.top - ph - 8;
  pop.style.left = Math.round(Math.max(8, Math.min(vw - pw - 8, r.left + r.width / 2 - pw / 2)) + window.scrollX) + 'px';
  pop.style.top = Math.round(top + window.scrollY) + 'px';
}

/* ================= Ansicht: Wörter ================= */
function vWords() {
  const W = UI.words, q = W.q.trim().toLowerCase(), words = activeWords();
  let list = words.map((w, i) => [w, i]).filter(([w]) => {
    if (W.f !== 'all') { const s = status(w); if (W.f === 'known' ? !(s === 'young' || s === 'mature') : s !== W.f) return false; }
    if (!q) return true;
    return plain(w.w).includes(q) || kana(w.r).includes(q) || (w.m || '').toLowerCase().includes(q);
  });
  const per = 60, pages = Math.max(1, Math.ceil(list.length / per)); W.page = Math.min(W.page, pages - 1);
  const slice = list.slice(W.page * per, (W.page + 1) * per), now = Date.now();
  const rows = slice.map(([w, i]) => {
    const st = status(w), c = S.srs[w.id], own = isOwn(w) ? ' data-own="1"' : '';
    const lab = st === 'new' ? 'Neu' : st === 'learn' ? 'Lernend' : (c[0] <= now ? 'Fällig' : 'in ' + fmtDays(Math.max(1, Math.round((c[0] - dayStart(now)) / DAY))));
    let row = `<button class="wrow" data-a="wopen" data-id="${w.id}" aria-expanded="${W.open === w.id}"><span class="nr">${i + 1}</span><span class="w" lang="ja">${esc(plain(w.w))}</span><span class="r" lang="ja">${esc(readingOf(w))}</span><span class="m">${esc(w.m)}</span><span class="chip ${st}">${lab}</span></button>`;
    if (W.open === w.id) row += `<div class="wdetail">
      <div class="row"><button class="icon" data-a="say" data-p="${esc(plain(w.w))}" data-t="${esc(sayableWord(w))}"${own} aria-label="Wort anhören">${ICON.speaker}</button><span lang="ja" style="font-family:var(--f-jp);font-size:18px">${esc(readingOf(w) || plain(w.w))}</span><span class="muted">${esc(w.m)}</span></div>
      ${w.s ? '<div class="ex-jp" lang="ja"><span>' + jp(w.s) + '</span><button class="icon sm" data-a="say" data-p="' + esc(plain(w.s)) + '" data-t="' + esc(kana(w.s)) + '"' + own + ' aria-label="Satz anhören">' + ICON.speaker + '</button></div>' + (w.t ? '<div class="ex-de">' + esc(w.t) + '</div>' : '') : ''}
      ${w.g ? '<img class="cardimg" data-img="' + w.id + '" alt="">' : ''}
      ${c ? '<p class="small muted">' + c[3] + '× abgefragt, ' + c[4] + '× vergessen' + (c[5] === -1 ? ', Intervall ' + fmtDays(c[1]) : '') + '</p>' : ''}
      <div class="row">${st === 'new' || st === 'learn' ? '<button class="btn" data-a="wknown" data-id="' + w.id + '">Kenne ich schon</button>' : ''}${c ? '<button class="btn" data-a="wreset" data-id="' + w.id + '">Zurücksetzen</button>' : ''}${isOwn(w) ? '<button class="btn" data-a="cardedit" data-id="' + w.id + '">Bearbeiten</button>' : ''}</div></div>`;
    return row;
  }).join('');
  const f = [['all', 'Alle'], ['new', 'Neu'], ['learn', 'Lernend'], ['known', 'Gelernt']];
  return `<header class="pagehead"><span class="eyebrow jpd">単語</span><h1>Wörter</h1></header>
  <div class="filters"><input class="search" id="wq" type="search" placeholder="Suchen: Kanji, Kana oder Bedeutung" value="${esc(W.q)}" autocomplete="off">
    <div class="seg" role="radiogroup">${f.map(([v, l]) => '<label><input type="radio" name="wf" data-a="wfilter" value="' + v + '"' + (W.f === v ? ' checked' : '') + '><span>' + l + '</span></label>').join('')}</div></div>
  <p class="small muted">${esc(deckName())} · ${list.length} ${list.length === 1 ? 'Wort' : 'Wörter'}${pages > 1 ? ' · Seite ' + (W.page + 1) + ' von ' + pages : ''}</p>
  ${S.active === 'i' ? '<div class="row"><button class="btn primary" data-a="cardnew" data-from="words">＋ Karte hinzufügen</button></div>' : ''}
  <div class="wlist">${rows || '<p style="padding:16px" class="muted">' + (words.length ? 'Keine Treffer.' : 'Dieses Deck hat noch keine Karten.') + '</p>'}</div>
  ${pages > 1 ? '<div class="pager"><button class="btn" data-a="wpage" data-d="-1"' + (W.page ? '' : ' disabled') + '>← Zurück</button><button class="btn" data-a="wpage" data-d="1"' + (W.page < pages - 1 ? '' : ' disabled') + '>Weiter →</button></div>' : ''}`;
}

/* ================= Ansicht: Karte anlegen oder bearbeiten ================= */
function newCardId() { let n = S.deckMeta.seq || 0; for (const w of S.deck) { const k = +w.id.slice(1); if (k >= n) n = k + 1; } S.deckMeta.seq = n + 1; return 'i' + n; }
function openCard(id, from) {
  const w = id ? wordById(id) : null; TTS.stop();
  UI.card = { id: w ? w.id : null, from: from || 'words', w: w ? w.w : '', r: w ? w.r : '', m: w ? w.m : '', s: w ? w.s : '', t: w ? w.t : '', g: !!(w && w.g), img: undefined, imgUrl: '', err: '', del: false };
  UI.view = 'card'; render();
  const f = $('#cf-w'); if (f && !w) f.focus();
}
function closeCard() { const c = UI.card; if (c && c.imgUrl) URL.revokeObjectURL(c.imgUrl); UI.card = null; TTS.stop(); UI.view = c && c.from === 'settings' ? 'settings' : 'words'; UI.confirm = null; render(); }
function cardFields() { const c = UI.card; return { w: c.w.trim(), r: c.r.trim(), m: c.m.trim(), s: c.s.trim(), t: c.t.trim() }; }
/* Bild verkleinern: längste Seite höchstens 900 Punkte, als JPEG */
function shrinkImage(file) {
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(file), im = new Image();
    im.onload = () => {
      const k = Math.min(1, 900 / Math.max(im.width, im.height)), cv = document.createElement('canvas');
      cv.width = Math.max(1, Math.round(im.width * k)); cv.height = Math.max(1, Math.round(im.height * k));
      const x = cv.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, cv.width, cv.height); x.drawImage(im, 0, 0, cv.width, cv.height);
      URL.revokeObjectURL(url); cv.toBlob(b => b ? res(b) : rej(new Error('Das Bild konnte nicht gelesen werden.')), 'image/jpeg', 0.82);
    };
    im.onerror = () => { URL.revokeObjectURL(url); rej(new Error('Das ist kein Bild, das der Browser lesen kann.')); };
    im.src = url;
  });
}
/* Karte automatisch ausfüllen: Wörter des Standard-Decks aus der App selbst, alle anderen aus dem freien
   Wörterbuch Jotoba (jotoba.de; deutsche Bedeutungen, Beispielsätze von Tatoeba). c.auto merkt sich die Fundstücke zum Wort. */
function jotoba(kind, query) {
  return fetch('https://jotoba.de/api/search/' + kind, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query, language: 'German', no_english: false }) })
    .then(r => { if (!r.ok) throw new Error('Das Wörterbuch antwortet nicht (Fehler ' + r.status + ').'); return r.json(); }, () => { throw new Error('Keine Verbindung zum Wörterbuch. Bist du online?'); });
}
const jotoFuri = f => String(f || '').replace(/\[([^|\]]+)\|([^\]]+)\]/g, (m, b, r) => b + '[' + r.replace(/\|/g, '') + ']'); // [図書館|と|しょ|かん] → 図書館[としょかん]
async function autoFill(nextSent) {
  const c = UI.card, w = plain(c.w.trim());
  if (!w) { toast('Trag zuerst ein Wort ein.'); return; }
  if (c.busy) return; c.busy = true; c.err = ''; render(true);
  try {
    let a = c.auto;
    if (!a || a.w !== w) {
      a = { w, r: '', m: '', sents: [], si: -1, more: false };
      const hit = CORE.find(x => plain(x.w) === w);
      if (hit) { a.r = kana(hit.r) === w ? '' : kana(hit.r); a.m = hit.m; if (hit.s) a.sents.push([hit.s, hit.t || '']); }
      else {
        const list = (await jotoba('words', w)).words || [];
        const e = list.find(x => x.reading && (x.reading.kanji === w || (!x.reading.kanji && x.reading.kana === w))) || list.find(x => x.reading && x.reading.kana === w);
        if (!e) throw new Error('„' + w + '“ steht nicht im Wörterbuch. Prüfe die Schreibweise – am besten in der Grundform.');
        const de = (e.senses || []).filter(s => s.language === 'German'), ss = de.length ? de : (e.senses || []);
        a.r = e.reading.kana && e.reading.kana !== w ? e.reading.kana : '';
        a.m = ss.slice(0, 2).map(s => (s.glosses || []).slice(0, 3).join(', ')).filter(Boolean).join('; ') + (de.length || !ss.length ? '' : ' (nur englisch gefunden)');
      }
      c.auto = a; c.r = a.r; if (a.m) c.m = a.m;
    }
    if (!a.more && (nextSent || !a.sents.length)) {
      a.more = true;
      try {
        const got = ((await jotoba('sentences', w)).sentences || []).filter(s => s.content && s.translation);
        const de = got.filter(s => s.language === 'German'), seen = new Set(a.sents.map(s => plain(s[0])));
        (de.length ? de : got).sort((x, y) => Math.abs(x.content.length - 14) - Math.abs(y.content.length - 14)).slice(0, 8).forEach(s => { if (!seen.has(s.content)) { seen.add(s.content); a.sents.push([jotoFuri(s.furigana) || s.content, s.translation]); } });
      } catch (e) { if (nextSent || !a.sents.length) toast(e.message); }
    }
    if (a.sents.length) { if (nextSent || a.si < 0) a.si = (a.si + 1) % a.sents.length; [c.s, c.t] = a.sents[a.si]; if (nextSent && a.sents.length === 1) toast('Kein weiterer Satz gefunden'); }
    else toast('Wort gefunden, aber kein Beispielsatz');
  } catch (e) { c.err = e.message; }
  if (UI.card === c) { c.busy = false; if (UI.view === 'card') render(true); }
}
async function saveCard(more) {
  const c = UI.card, f = cardFields();
  if (!f.w || !f.m) { c.err = 'Vorderseite (Wort) und Rückseite (Bedeutung) dürfen nicht leer sein.'; render(true); return; }
  let w = c.id ? wordById(c.id) : null; const old = w ? audioKeys(w) : [];
  if (!w) { w = { id: newCardId(), p: '', g: false }; S.deck.push(w); }
  Object.assign(w, f);
  if (c.img !== undefined) {
    try { if (c.img) { await Media.put('img', w.id, c.img); w.g = true; } else { await Media.del('img', w.id); w.g = false; } }
    catch (e) { w.g = false; toast('Das Bild konnte nicht gespeichert werden.'); }
  }
  const keys = audioKeys(w); old.filter(k => !keys.includes(k) && !S.deck.some(x => x !== w && audioKeys(x).includes(k))).forEach(k => Media.del('audio', k)); // Ton zum alten Wortlaut
  S.deckMeta.count = S.deck.length; deckDirty = true; SES = null; touch();
  if (AZ.key) { // Ton gleich erzeugen, damit er beim Lernen da ist
    const jobs = [ownAudio(plain(w.w), sayableWord(w), true)]; if (w.s) jobs.push(ownAudio(plain(w.s), kana(w.s), true));
    Promise.all(jobs).catch(e => toast('Ton nicht erzeugt: ' + e.message));
  }
  if (more) { const from = c.from; if (c.imgUrl) URL.revokeObjectURL(c.imgUrl); UI.card = null; openCard(null, from); toast('Karte gespeichert · ' + S.deck.length + ' im Deck'); }
  else { closeCard(); toast('Karte gespeichert'); }
}
function deleteCard() {
  const c = UI.card, w = c && c.id ? wordById(c.id) : null; if (!w) return;
  const keys = audioKeys(w); S.deck.splice(S.deck.indexOf(w), 1);
  keys.filter(k => !S.deck.some(x => audioKeys(x).includes(k))).forEach(k => Media.del('audio', k)); Media.del('img', w.id);
  delete S.srs[w.id]; delete S.prio[w.id]; S.deckMeta.count = S.deck.length; deckDirty = true; SES = null; touch();
  closeCard(); toast('Karte gelöscht');
}
function vCard() {
  const c = UI.card, img = c.img ? c.imgUrl : (c.img === undefined && c.g ? c.id : '');
  const field = (k, lab, hint, attr) => '<label class="field"><b>' + lab + '</b>' + (k === 's' ? '<textarea class="search" id="cf-s" data-cf="s" rows="2"' + attr + '>' + esc(c.s) + '</textarea>' : '<input class="search" id="cf-' + k + '" data-cf="' + k + '" value="' + esc(c[k]) + '"' + attr + ' autocomplete="off">') + (hint ? '<span>' + hint + '</span>' : '') + '</label>';
  return `<button class="back" data-a="cardcancel">← ${c.from === 'settings' ? 'Deck & Optionen' : 'Wörter'}</button>
  <header class="pagehead"><span class="eyebrow jpd" lang="ja">カード</span><h1>${c.id ? 'Karte bearbeiten' : 'Neue Karte'}</h1></header>
  <section class="panel cardform">
    <p class="small muted">${esc(S.deckMeta.name)} · ${S.deck.length} ${S.deck.length === 1 ? 'Karte' : 'Karten'}</p>
    ${field('w', 'Vorderseite: Wort', 'Das japanische Wort, z. B. 食べる.', ' lang="ja" placeholder="食べる"')}
    <div class="field"><div class="row"><button class="btn" data-a="cardauto"${c.busy ? ' disabled' : ''}>${c.busy ? 'Wird gesucht …' : 'Automatisch ausfüllen'}</button>${c.auto && c.auto.w === plain(c.w.trim()) && !c.busy ? '<button class="btn" data-a="cardauto" data-next="1">Anderer Beispielsatz</button>' : ''}</div>
      <span>Trägt Lesung, Bedeutung und einen Beispielsatz mit Übersetzung ein; du kannst alles danach ändern. Wörter des Standard-Decks kommen aus der App, alle anderen aus dem Online-Wörterbuch jotoba.de – dafür wird das Wort dorthin gesendet.</span></div>
    ${field('r', 'Lesung in Kana', 'Freiwillig. Steht auf der Rückseite, z. B. たべる.', ' lang="ja" placeholder="たべる"')}
    ${field('m', 'Rückseite: Bedeutung', '', ' placeholder="essen"')}
    ${field('s', 'Beispielsatz', 'Freiwillig. Furigana schreibst du in eckigen Klammern hinter die Kanji: 朝[あさ]ごはんを 食[た]べる。', ' lang="ja" placeholder="朝ごはんを食べる。"')}
    ${field('t', 'Übersetzung des Satzes', '', ' placeholder="Ich esse Frühstück."')}
    <div class="field"><b>Bild</b>
      ${img ? '<img class="cardimg" ' + (c.img ? 'src="' + c.imgUrl + '"' : 'data-img="' + c.id + '"') + ' alt="Bild der Karte">' : ''}
      <div class="row"><label class="btn filebtn">${img ? 'Anderes Bild' : 'Bild auswählen'}<input type="file" id="cimg" accept="image/*"></label>${img ? '<button class="btn" data-a="cardimgdel">Bild entfernen</button>' : ''}</div>
      <span>Freiwillig. Das Bild erscheint auf der Rückseite der Karte.</span></div>
    <div class="field"><b>Ton</b>
      <div class="row"><button class="btn" data-a="cardsay" data-k="w">Wort anhören</button><button class="btn" data-a="cardsay" data-k="s">Satz anhören</button></div>
      <span>${AZ.key ? 'Der Ton wird beim Speichern mit der Stimme ' + esc(AZ.voice) + ' erzeugt. Dafür muss das Gerät online sein.' : 'Es liest die japanische Stimme deines Geräts. Unter „Deck & Optionen“ kannst du einrichten, dass die App den Ton mit der Stimme des Standard-Decks selbst erzeugt.'}</span></div>
    ${c.err ? '<p class="note" style="background:var(--again-soft)">' + esc(c.err) + '</p>' : ''}
    ${c.del ? '<div class="confirm"><span>Diese Karte samt Fortschritt löschen?</span><button class="btn danger" data-a="carddodel">Ja, löschen</button><button class="btn" data-a="carddel">Abbrechen</button></div>'
      : '<div class="row"><button class="btn primary" data-a="cardsave">Speichern</button>' + (c.id ? '' : '<button class="btn" data-a="cardsave" data-more="1">Speichern und nächste Karte</button>') + '<button class="btn" data-a="cardcancel">Abbrechen</button>' + (c.id ? '<button class="btn" data-a="carddel">Karte löschen</button>' : '') + '</div>'}
  </section>`;
}

/* ================= Ansicht: Deck & Optionen ================= */
function vSettings() {
  const st = S.settings;
  const seg = (key, opts) => '<div class="seg" role="radiogroup">' + opts.map(([v, l]) => '<label><input type="radio" name="s-' + key + '" data-set="' + key + '" value="' + v + '"' + (String(st[key]) === v ? ' checked' : '') + '><span>' + l + '</span></label>').join('') + '</div>';
  const sw = (key) => '<label class="switch"><input type="checkbox" id="sw-' + key + '" data-set="' + key + '"' + (st[key] ? ' checked' : '') + '><span></span></label>';
  const resetName = deckName();
  return `<header class="pagehead"><span class="eyebrow jpd">設定</span><h1>Deck & Optionen</h1></header>
  <section class="panel"><h2>Aktives Deck</h2>
    <div class="decks">
      <button class="deckopt${S.active === 'c' ? ' on' : ''}" data-a="setdeck" data-d="c"><b>Standard-Deck</b><span>${CORE.length} Wörter nach Häufigkeit, mit Beispielsätzen und deutschen Bedeutungen.</span></button>
      <button class="deckopt${S.active === 'i' ? ' on' : ''}" data-a="setdeck" data-d="i"${S.deck ? '' : ' disabled'}><b>${S.deck ? esc(S.deckMeta.name) : 'Eigenes Deck'}</b><span>${S.deck ? S.deck.length + (S.deck.length === 1 ? ' Karte' : ' Karten') + ', dein eigenes Deck' : 'Noch nicht angelegt. Unten kannst du es erstellen.'}</span></button>
    </div>
    <p class="small muted">Jedes Deck hat seinen eigenen Fortschritt. Ein Wechsel löscht nichts.</p>
  </section>
  <section class="panel"><h2>Eigenes Deck</h2>
    ${S.deck ? `<p class="muted">${S.deck.length} ${S.deck.length === 1 ? 'Karte' : 'Karten'}. Jede Karte hat Wort und Bedeutung, dazu nach Wunsch Lesung, Beispielsatz mit Übersetzung und ein Bild.</p>
    <div class="row"><button class="btn primary" data-a="cardnew" data-from="settings">＋ Karte hinzufügen</button><button class="btn" data-a="owncards">Karten ansehen und bearbeiten</button></div>
    <div class="set"><div class="lab"><b>Name des Decks</b></div><input class="search" id="deckname" value="${esc(S.deckMeta.name)}" maxlength="60" style="max-width:280px" aria-label="Name des Decks"></div>`
    : `<p class="muted">Lege ein eigenes Deck an und füge Karten selbst hinzu: Wort und Bedeutung, dazu nach Wunsch Lesung, Beispielsatz mit Übersetzung und ein Bild.</p>
    <div class="row"><input class="search" id="deckname" value="Mein Deck" maxlength="60" style="max-width:280px" aria-label="Name des Decks"><button class="btn primary" data-a="mkdeck">Deck anlegen</button></div>`}
    <h3>Ton für eigene Karten</h3>
    ${AZ.key ? `<p class="muted">Wort und Satz deiner Karten werden mit der Stimme ${esc(AZ.voice)} vertont und auf diesem Gerät gespeichert (${Media.audio.size} Aufnahmen). Region: ${esc(AZ.region)}.</p>
    <div class="row"><button class="btn" data-a="azdel">Schlüssel entfernen</button></div>`
    : `<p class="muted">Ohne weitere Einrichtung liest die japanische Stimme deines Geräts deine Karten vor. Mit einem eigenen Schlüssel für Microsoft Azure Speech (kostenlose Stufe F0) erzeugt die App den Ton selbst – mit derselben Stimme wie im Rest der App.</p>
    <div class="row"><input class="search" id="azkey" type="password" placeholder="Azure-Schlüssel" autocomplete="off" style="max-width:280px" aria-label="Azure-Schlüssel"><input class="search" id="azregion" placeholder="Region, z. B. germanywestcentral" autocomplete="off" autocapitalize="none" style="max-width:280px" aria-label="Azure-Region"><button class="btn" data-a="azsave"${UI.azBusy ? ' disabled' : ''}>${UI.azBusy ? 'Wird geprüft …' : 'Prüfen und speichern'}</button></div>
    <p class="small muted">Der Schlüssel bleibt auf diesem Gerät. Er wird nur an Microsoft gesendet und steht nicht in der Sicherungsdatei.</p>`}
  </section>
  <section class="panel"><h2>Lernen</h2>
    <div class="set"><div class="lab"><b>Neue Wörter pro Tag</b><span>10 sind ein guter Start: das ergibt nach einigen Wochen etwa 60–100 Wiederholungen täglich.</span></div>
      <div class="stepper"><button data-a="npd" data-d="-5" aria-label="Weniger">−</button><output>${st.newPerDay}</output><button data-a="npd" data-d="5" aria-label="Mehr">+</button></div></div>
    <div class="set"><div class="lab"><b>Vorderseite der Karte</b><span>„Hören“ zeigt kein Schriftbild, nur den Klang.</span></div>${seg('cardMode', [['read', 'Wort lesen'], ['listen', 'Wort hören'], ['mix', 'Gemischt']])}</div>
    <div class="set"><div class="lab"><b>Wort beim Aufdecken vorlesen</b></div>${sw('autoAudio')}</div>
  </section>
  <section class="panel"><h2>Anzeige und Audio</h2>
    <div class="set"><div class="lab"><b>Furigana</b><span>Lesehilfe in kleinen Kana über den Kanji.</span></div>${sw('furigana')}</div>
    <div class="set"><div class="lab"><b>Abstände zwischen Wörtern</b><span>Echte japanische Texte haben keine – für den Anfang helfen sie.</span></div>${sw('spaces')}</div>
    <div class="set"><div class="lab"><b>Sprechtempo</b><span>${String(st.rate).replace('.', ',')}×</span></div><div class="row"><input type="range" id="rate" min="0.6" max="1.2" step="0.05" value="${st.rate}" data-set="rate" aria-label="Sprechtempo"><button class="icon" data-a="say" data-p="日本語を勉強しています。" data-t="にほんごをべんきょうしています。" aria-label="Probe anhören">${ICON.speaker}</button></div></div>
    ${voiceNote()}
    <p class="small muted">${CLIPS.idx ? 'Wörter und Sätze der App sind vorab vertont. Stimme: ' + esc(CLIPS.idx.voice) + '. Karten aus deinem eigenen Deck: siehe oben unter „Eigenes Deck“.' : 'Es spricht die japanische Stimme deines Geräts.'}</p>
  </section>
  <section class="panel"><h2>Speicherung und Sicherung</h2>
    <p class="muted">${esc(UI.syncText)} Mit einer Sicherungsdatei nimmst du deinen Fortschritt samt eigenem Deck, Bildern und Ton auf ein neues Handy mit.</p>
    <div class="row"><button class="btn" data-a="backup">Sicherung erstellen</button><label class="btn filebtn">Sicherung laden<input type="file" id="bfile" accept=".json,application/json"></label></div>
    ${UI.confirm === 'restore' && UI.pendingBackup ? '<div class="confirm"><span>Sicherung vom ' + esc(new Date(UI.pendingBackup.at).toLocaleString('de-DE')) + ' laden? Der jetzige Fortschritt auf diesem Gerät wird ersetzt.</span><button class="btn danger" data-a="dorestore">Ja, laden</button><button class="btn" data-a="cancelconfirm">Abbrechen</button></div>' : ''}
    ${UI.confirm === 'reset' ? '<div class="confirm"><span>Fortschritt für „' + esc(resetName) + '“ wirklich löschen? Das lässt sich nicht rückgängig machen.</span><button class="btn danger" data-a="doreset">Ja, löschen</button><button class="btn" data-a="cancelconfirm">Abbrechen</button></div>'
      : UI.confirm === 'deldeck' ? '<div class="confirm"><span>Eigenes Deck „' + esc(S.deckMeta.name) + '“ mit allen Karten, Bildern und dem Fortschritt entfernen?</span><button class="btn danger" data-a="dodeldeck">Ja, entfernen</button><button class="btn" data-a="cancelconfirm">Abbrechen</button></div>'
      : '<div class="row"><button class="btn" data-a="confirm" data-c="reset">Fortschritt dieses Decks zurücksetzen</button>' + (S.deck ? '<button class="btn" data-a="confirm" data-c="deldeck">Eigenes Deck entfernen</button>' : '') + '</div>'}
  </section>`;
}

/* ================= Ereignisse ================= */
const A = {
  go: el => go(el.dataset.v),
  startrev: () => startSession(),
  reveal: () => reveal(),
  ans: el => answerCard(el.dataset.ok === '1'),
  undo: () => undo(),
  endses: el => { SES = null; TTS.stop(); go(el.dataset.v); },
  sayword: () => SES && SES.cur && sayWord(wordById(SES.cur)),
  saysent: () => SES && SES.cur && saySent(wordById(SES.cur)),
  say: el => TTS.say(el.dataset.p, el.dataset.t, { own: !!el.dataset.own }),
  extra: () => { todayLog().x = (todayLog().x || 0) + 10; touch(); startSession(); },
  opengram: el => { UI.view = 'grammar'; UI.lesson = +el.dataset.i; UI.gquiz = null; UI.lvoc = false; TTS.stop(); render(); },
  lvoc: () => { UI.lvoc = !UI.lvoc; TTS.stop(); render(); },
  lvocprio: () => { let n = 0; for (const v of GRAMMAR_VOC[UI.lesson] || []) { const c = deckWord(v[0], v[1]); if (c && !S.srs[c.id] && !S.prio[c.id]) { S.prio[c.id] = 1; n++; } } touch(); render(true); toast(n + ' Wörter vorgemerkt'); },
  welcome: el => { S.settings.welcome = true; touch(); const to = el.dataset.to; if (to === 'course') A.opengram({ dataset: { i: '0' } }); else go(to === 'kana' ? 'kana' : 'home'); },
  kqstart: () => startKanaQuiz(),
  kqans: el => { const q = UI.kq; if (!q || q.ans !== null) return; const it = q.items[q.i]; q.ans = +el.dataset.j; q.res.push(it.opts[q.ans] === it.c[1]); TTS.say(toKatakana(it.c[0]), it.c[0]); render(true); },
  kqnext: () => { const q = UI.kq; if (!q) return; q.i++; q.ans = null; render(); },
  kqend: () => { UI.kq = null; TTS.stop(); render(); },
  gbase: () => { UI.gbase = !UI.gbase; render(true); },
  gpopen: el => { UI.gopen = UI.gopen === el.dataset.id ? null : el.dataset.id; TTS.stop(); render(true); },
  gpdone: el => { const id = el.dataset.id; if (S.gp[id]) delete S.gp[id]; else S.gp[id] = 1; touch(); render(true); },
  gopenonly: () => { UI.gopenOnly = !UI.gopenOnly; render(true); },
  gquiz: () => startGramQuiz(),
  gqans: el => { const Q = UI.gquiz; if (!Q || Q.ans !== null) return; const it = Q.items[Q.i]; Q.ans = +el.dataset.j; Q.res.push(it.opts[Q.ans] === it.g); render(true); },
  gqnext: () => { const Q = UI.gquiz; if (!Q) return; Q.i++; Q.ans = null; TTS.stop(); render(); },
  gqend: () => { UI.gquiz = null; TTS.stop(); render(); },
  gqshow: el => { const g = GP_BY_ID.get(el.dataset.id); UI.gquiz = null; if (g) { S.settings.gLv = g.lv; UI.gq = ''; UI.gopenOnly = false; UI.gopen = g.id; } render(); const row = document.querySelector('.gprow[aria-expanded="true"]'); if (row) row.scrollIntoView({ block: 'center' }); },
  gramlist: () => { UI.lesson = null; UI.lvoc = false; TTS.stop(); render(); },
  opentext: el => { UI.view = 'read'; UI.text = +el.dataset.i; READER.playing = false; TTS.stop(); render(); },
  textlist: () => { UI.text = null; READER.playing = false; TTS.stop(); render(); },
  qans: el => {
    const k = el.dataset.k; UI.qa[k] = +el.dataset.j;
    const [key] = k.split(':'), txt = key[0] === 't' ? TEXTS[+key.slice(1)] : null, n = txt ? txt.q.length : GRAMMAR[+key.slice(1)].q.length;
    const sc = quizScore(key, n);
    if (sc.a === n) { if (key[0] === 'g' && sc.r === n && !S.gdone[+key.slice(1)]) { S.gdone[+key.slice(1)] = 1; touch(); } if (txt && !S.tdone[txt.id]) { S.tdone[txt.id] = 1; touch(); } }
    render(true);
  },
  qreset: el => { const key = el.dataset.k; Object.keys(UI.qa).forEach(k => { if (k.startsWith(key + ':')) { delete UI.qa[k]; delete UI.qo[k]; } }); render(true); },
  readall: () => readAll(),
  togglefuri: () => { S.settings.furigana = !S.settings.furigana; touch(); render(true); },
  toggletr: () => { UI.trAll = !UI.trAll; render(true); },
  tsent: el => { const k = UI.text + ':' + el.dataset.j; UI.tr[k] = !UI.tr[k]; render(true); },
  saytext: el => { READER.playing = false; const toks = textTokens(TEXTS[UI.text])[+el.dataset.j]; TTS.say(sentPlain(toks), sentKana(toks)); },
  word: el => openWord(el),
  wclose: () => closeWord(),
  wopen: el => { UI.words.open = UI.words.open === el.dataset.id ? null : el.dataset.id; render(true); },
  wpage: el => { UI.words.page += +el.dataset.d; UI.words.open = null; render(); },
  wknown: el => { const id = el.dataset.id, now = Date.now(), prev = S.srs[id]; S.srs[id] = [dayStart(now) + 30 * DAY, 30, 2500, prev ? prev[3] : 0, prev ? prev[4] : 0, -1]; touchCard(id); render(true); toast('Als bekannt markiert – nächste Abfrage in 30 Tagen'); },
  wreset: el => { delete S.srs[el.dataset.id]; touchCard(el.dataset.id); render(true); toast('Wort ist wieder neu'); },
  setdeck: el => { if (el.dataset.d === 'i' && !S.deck) return; S.active = el.dataset.d; SES = null; UI.words.page = 0; touch(); render(true); toast('Aktives Deck: ' + deckName()); },
  npd: el => { S.settings.newPerDay = Math.max(0, Math.min(100, S.settings.newPerDay + +el.dataset.d)); touch(); render(true); },
  mkdeck: () => {
    const nm = $('#deckname'); S.deck = []; S.deckMeta = { name: (nm && nm.value.trim()) || 'Mein Deck', count: 0, at: Date.now(), seq: 0 };
    S.active = 'i'; deckDirty = true; SES = null; UI.words.page = 0; touch(); openCard(null, 'settings');
  },
  owncards: () => { if (!S.deck) return; S.active = 'i'; SES = null; UI.words = { q: '', f: 'all', page: 0, open: null }; touch(); go('words'); },
  cardnew: el => { if (S.deck) openCard(null, el.dataset.from); },
  cardedit: el => openCard(el.dataset.id, 'words'),
  cardcancel: () => closeCard(),
  cardauto: el => autoFill(!!el.dataset.next),
  cardsave: el => saveCard(!!el.dataset.more),
  carddel: () => { UI.card.del = !UI.card.del; render(true); },
  carddodel: () => deleteCard(),
  cardimgdel: () => { const c = UI.card; if (c.imgUrl) URL.revokeObjectURL(c.imgUrl); c.img = null; c.imgUrl = ''; render(true); },
  cardsay: el => {
    const f = cardFields(), w = el.dataset.k === 'w';
    if (w ? !f.w : !f.s) { toast(w ? 'Trag zuerst ein Wort ein.' : 'Trag zuerst einen Satz ein.'); return; }
    const p = plain(w ? f.w : f.s), k = w ? sayableWord(f) : kana(f.s);
    if (AZ.key) ownAudio(p, k, true).then(() => TTS.say(p, k, { own: true }), e => { toast(e.message); TTS.say(p, k); });
    else TTS.say(p, k, { own: true });
  },
  azsave: async () => {
    const key = $('#azkey').value.trim(), region = $('#azregion').value.trim().toLowerCase().replace(/\s+/g, '');
    if (!key || !region) { toast('Trag Schlüssel und Region ein.'); return; }
    AZ.key = key; AZ.region = region; UI.azBusy = true; render(true);
    try {
      const b = await azureTTS('テスト'); await Store.set('azure', { key, region }); UI.azBusy = false; render(true); toast('Schlüssel gespeichert – die App erzeugt den Ton jetzt selbst');
      const a = CLIPS.audio(); TTS.stop(); CLIPS.url = URL.createObjectURL(b); a.src = CLIPS.url; a.play().catch(() => {});
    } catch (e) { AZ.key = ''; AZ.region = ''; UI.azBusy = false; render(true); toast(e.message); }
  },
  azdel: () => { AZ.key = ''; AZ.region = ''; Store.del('azure'); render(true); toast('Schlüssel entfernt. Vorhandene Aufnahmen bleiben.'); },
  confirm: el => { UI.confirm = el.dataset.c; render(true); },
  cancelconfirm: () => { UI.confirm = null; render(true); },
  doreset: () => {
    const p = S.active; for (const id in S.srs) if (id[0] === p) delete S.srs[id];
    SES = null; UI.confirm = null; touch(); render(true); toast('Fortschritt zurückgesetzt');
  },
  backup: () => exportBackup(),
  dorestore: () => restoreBackup(),
  hideinstall: () => { S.settings.hideInstall = true; touch(); render(true); },
  ttsinstall: () => { if (NTTS) NTTS.openInstall().catch(() => {}); },
  dodeldeck: () => {
    for (const id in S.srs) if (id[0] === 'i') delete S.srs[id];
    S.deck = null; S.deckMeta = null; S.active = 'c'; deckDirty = true; SES = null; UI.confirm = null; Media.clear();
    touch(); render(true); toast('Eigenes Deck entfernt');
  }
};
document.addEventListener('click', e => {
  CLIPS.unlock();
  const el = e.target.closest('[data-a]');
  if (!e.target.closest('#wpop') && !(el && el.dataset.a === 'word')) closeWord(); // Tippen daneben schließt das Wort-Fenster
  if (!el) return;
  if (el.tagName === 'INPUT' || el.tagName === 'SELECT') return;
  const fn = A[el.dataset.a]; if (fn) { e.preventDefault(); fn(el, e); }
});
document.addEventListener('change', e => {
  const el = e.target;
  if (el.id === 'cimg') { const f = el.files && el.files[0]; el.value = ''; if (f && UI.card) shrinkImage(f).then(b => { const c = UI.card; if (!c) return; if (c.imgUrl) URL.revokeObjectURL(c.imgUrl); c.img = b; c.imgUrl = URL.createObjectURL(b); c.err = ''; render(true); }, e => toast(e.message)); return; }
  if (el.id === 'deckname') { if (S.deck && el.value.trim()) { S.deckMeta.name = el.value.trim(); touch(); render(true); toast('Deck umbenannt'); } return; }
  if (el.id === 'bfile') { if (el.files && el.files[0]) readBackup(el.files[0]); el.value = ''; return; }
  if (el.dataset.a === 'kanaset') { UI.kana = el.value; TTS.stop(); render(true); return; }
  if (el.dataset.a === 'glv') { S.settings.gLv = el.value; UI.gopen = null; UI.gq = ''; TTS.stop(); touch(); render(true); return; }
  if (el.dataset.a === 'rlv') { S.settings.rLv = el.value; touch(); render(true); return; }
  if (el.dataset.a === 'wfilter') { UI.words.f = el.value; UI.words.page = 0; UI.words.open = null; render(true); return; }
  const key = el.dataset.set; if (!key) return;
  if (el.type === 'checkbox') S.settings[key] = el.checked;
  else if (key === 'rate') S.settings.rate = Math.round(parseFloat(el.value) * 100) / 100;
  else S.settings[key] = el.value;
  touch(); render(true);
  if (key === 'rate') TTS.say('日本語を勉強しています。', 'にほんごをべんきょうしています。');
});
let searchT = null;
document.addEventListener('input', e => {
  if (e.target.dataset.cf && UI.card) { UI.card[e.target.dataset.cf] = e.target.value; return; }
  if (e.target.id === 'wq') { const v = e.target.value; clearTimeout(searchT); searchT = setTimeout(() => { UI.words.q = v; UI.words.page = 0; UI.words.open = null; render(true); const s = $('#wq'); if (s) { s.focus(); s.setSelectionRange(v.length, v.length); } }, 250); }
  if (e.target.id === 'gq') { const v = e.target.value; clearTimeout(searchT); searchT = setTimeout(() => { UI.gq = v; UI.gopen = null; render(true); const s = $('#gq'); if (s) { s.focus(); s.setSelectionRange(v.length, v.length); } }, 250); }
  if (e.target.id === 'rate') { const lab = e.target.closest('.set').querySelector('.lab span'); if (lab) lab.textContent = String(e.target.value).replace('.', ',') + '×'; }
});
document.addEventListener('keydown', e => {
  const tag = (e.target.tagName || '').toLowerCase();
  if (e.key === 'Escape' && closeWord()) return;
  if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.target.dataset && e.target.dataset.a === 'word' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openWord(e.target); return; }
  if (UI.view === 'review' && SES && SES.cur) {
    const k = e.key.toLowerCase();
    if (k === ' ' || k === 'enter') { if (tag === 'button' && k === 'enter') return; e.preventDefault(); SES.revealed ? answerCard(true) : reveal(); }
    else if (k === '1' && SES.revealed) answerCard(false);
    else if ((k === '2' || k === '3') && SES.revealed) answerCard(true);
    else if (k === 'r') A.sayword();
    else if (k === 'z') undo();
  } else if (UI.view === 'grammar' && UI.gquiz && UI.gquiz.i < UI.gquiz.items.length) {
    if (/^[1-4]$/.test(e.key) && UI.gquiz.ans === null) { const b = document.querySelectorAll('[data-a="gqans"]')[+e.key - 1]; if (b) A.gqans(b); }
    else if (e.key === 'Enter' && UI.gquiz.ans !== null && tag !== 'button') { e.preventDefault(); A.gqnext(); }
  }
});

/* ================= Start ================= */
(async function start() {
  buildNav();
  try { await loadAll(); } catch (e) { console.warn(e); }
  setSync('ok');
  render();
  TTS.init(); CLIPS.load();
  if (APP) {
    APP.addListener('backButton', () => { if (!goBack()) APP.exitApp(); });
    APP.addListener('pause', () => { TTS.stop(); persist(true); });
    APP.addListener('resume', () => { if (UI.view === 'home' || (UI.view === 'review' && !SES)) render(true); });
  }
  if (!NATIVE && 'serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
