#!/usr/bin/env python3
"""Vertont alle Wörter und Sätze der App und legt sie als Pakete in www/audio/ ab – mit VOICEVOX oder Microsoft Azure.

Voraussetzungen: eine laufende VOICEVOX-Engine (https://voicevox.hiroshiba.jp, Standard http://127.0.0.1:50021),
ffmpeg und Node.js. Aufruf im Projektordner:

    node scripts/audio-list.mjs > audio-list.json
    python3 scripts/make-audio.py audio-list.json [--speaker 21] [--url http://127.0.0.1:50021]

Fertige Ausschnitte landen in .audio-cache/ (ein MP3 pro Schlüssel). Ein zweiter Lauf vertont deshalb nur Neues
und baut danach die Pakete und www/audio/index.json neu.

Mit Azure (Speech-Ressource, Stufe F0 genügt) statt VOICEVOX:

    python3 scripts/make-audio.py audio-list.json --azure ~/Manabu/azure-key.txt [--voice ja-JP-DaichiNeural] [--rpm 18]

Die Schlüsseldatei enthält in Zeile 1 den Schlüssel und in Zeile 2 die Region (z. B. westeurope). Die Stufe F0 erlaubt
20 Anfragen pro Minute, ein voller Lauf dauert damit rund 13 Stunden; er lässt sich jederzeit abbrechen und fortsetzen.
Azure meldet keine Lesung zurück, die Prüfung der Lesungen entfällt dort.

VOICEVOX liest die Schreibweise mit Kanji (damit Betonung und Satzmelodie stimmen). Weicht die erkannte Lesung von
der Lesung der App ab, werden die betroffenen Wörter in Kana übergeben.
"""
import argparse, hashlib, http.client, json, os, re, subprocess, sys, threading, time, urllib.error, urllib.parse, urllib.request
from xml.sax.saxutils import escape
from concurrent.futures import ThreadPoolExecutor

ap = argparse.ArgumentParser()
ap.add_argument('list'); ap.add_argument('--url', default='http://127.0.0.1:50021'); ap.add_argument('--speaker', type=int, default=21)
ap.add_argument('--cache', default='.audio-cache'); ap.add_argument('--out', default='www/audio'); ap.add_argument('--jobs', type=int, default=4)
ap.add_argument('--limit', type=int, default=0); ap.add_argument('--pack-mb', type=float, default=20)
ap.add_argument('--azure', default='', help='Datei mit Azure-Schlüssel (Zeile 1) und Region (Zeile 2)'); ap.add_argument('--voice', default='ja-JP-DaichiNeural'); ap.add_argument('--rpm', type=float, default=18)
A = ap.parse_args()
if A.azure:
    AZ_KEY, AZ_REGION = open(os.path.expanduser(A.azure), encoding='utf8').read().split()[:2]
    if A.cache == '.audio-cache': A.cache = '.audio-cache-azure'   # eigene Ablage, damit sich die Stimmen nicht mischen

FURI = re.compile(r'([㐀-䶿一-鿿豈-﫿々〆ヶヵ]+)\[([^\]]+)\]')

def clip_key(p, k):
    """cyrb53 wie clipKey() in app.js"""
    M = 0xffffffff; h1, h2 = 0xdeadbeef, 0x41c6ce57
    data = (p + '|' + k).encode('utf-16-le')
    for i in range(0, len(data), 2):
        ch = data[i] | data[i + 1] << 8
        h1 = ((h1 ^ ch) * 2654435761) & M; h2 = ((h2 ^ ch) * 1597334677) & M
    h1 = (((h1 ^ (h1 >> 16)) * 2246822507) & M) ^ (((h2 ^ (h2 >> 13)) * 3266489909) & M)
    h2 = (((h2 ^ (h2 >> 16)) * 2246822507) & M) ^ (((h1 ^ (h1 >> 13)) * 3266489909) & M)
    n = 4294967296 * (2097151 & h2) + h1; s = ''
    while True:
        n, r = divmod(n, 36); s = '0123456789abcdefghijklmnopqrstuvwxyz'[r] + s
        if not n: return s

# ---------- Lesungen vergleichen ----------
O_ROW, E_ROW = 'オコソトノホモヨロヲゴゾドボポョォ', 'エケセテネヘメレゲゼデベペェ'
VOWEL = {}
for v, row in zip('アイウエオ', ['アカサタナハマヤラワガザダバパャァ', 'イキシチニヒミリギジヂビピィ', 'ウクスツヌフムユルグズヅブプュゥヴ', E_ROW, O_ROW]):
    for c in row: VOWEL[c] = v
def norm(s):
    s = ''.join(chr(ord(c) + 0x60) if 'ぁ' <= c <= 'ゖ' else c for c in s)
    s = re.sub(r'[^ァ-ヺー]', '', s).replace('ヲ', 'オ').replace('ヂ', 'ジ').replace('ヅ', 'ズ')
    out = []
    for c in s:
        prev = out[-1] if out else ''
        if c == 'ー': c = VOWEL.get(prev, 'ー')
        elif c == 'ウ' and prev in O_ROW: c = 'オ'
        elif c == 'イ' and prev in E_ROW: c = 'エ'
        out.append(c)
    return ''.join(out)
def dist(a, b):
    """Editierabstand; は/わ und へ/え (Partikeln) gelten als gleich"""
    same = lambda x, y: x == y or {x, y} in ({'ハ', 'ワ'}, {'ヘ', 'エ'})
    prev = list(range(len(b) + 1))
    for i, x in enumerate(a, 1):
        cur = [i]
        for j, y in enumerate(b, 1): cur.append(min(prev[j] + 1, cur[-1] + 1, prev[j - 1] + (0 if same(x, y) else 1)))
        prev = cur
    return prev[-1]

def post(path, params, body=None):
    req = urllib.request.Request(A.url + path + '?' + urllib.parse.urlencode(params), data=json.dumps(body).encode() if body is not None else b'', method='POST', headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=120) as r: return r.read()
def query(text):
    q = json.loads(post('/audio_query', {'text': text, 'speaker': A.speaker}))
    return q, norm(''.join(m['text'] for ph in q['accent_phrases'] for m in ph['moras']))

# ---------- Azure ----------
_slot, _lock = [0.0], threading.Lock()
def azure(text):
    """Ein Satz als WAV. Hält die Anfragen pro Minute ein und wartet bei 429 ab."""
    ssml = f"<speak version='1.0' xml:lang='ja-JP'><voice name='{A.voice}'>{escape(text)}</voice></speak>".encode()
    for attempt in range(60):
        with _lock:
            wait = _slot[0] - time.time(); _slot[0] = max(_slot[0], time.time()) + 60 / A.rpm
        if wait > 0: time.sleep(wait)
        req = urllib.request.Request(f'https://{AZ_REGION}.tts.speech.microsoft.com/cognitiveservices/v1', data=ssml, method='POST', headers={
            'Ocp-Apim-Subscription-Key': AZ_KEY, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'riff-24khz-16bit-mono-pcm', 'User-Agent': 'manabu-make-audio'})
        try:
            with urllib.request.urlopen(req, timeout=120) as r: return r.read()
        except urllib.error.HTTPError as e:
            if e.code not in (429, 500, 502, 503) or attempt == 59: raise
            time.sleep(float(e.headers.get('Retry-After') or 20))
        except (urllib.error.URLError, OSError, http.client.HTTPException):   # Netz kurz weg: bis zu einer Stunde lang weiter versuchen
            if attempt == 59: raise
            time.sleep(60)

def best_query(it):
    """Wählt die Eingabe, deren Lesung zur App passt. Rückgabe: (query, Abstand, Art)"""
    want = norm(it['k'])
    q, got = query(it['p'])
    if re.search(r'[^ぁ-ゖァ-ヺー、。「」『』？！：（）・…―\s]', it['k']): return q, 0, 'ungeprüft'   # Lesung enthält Ziffern o. Ä.
    d = dist(got, want)
    if d == 0: return q, 0, 'kanji'
    best = (q, d, 'kanji')
    if it.get('f'):   # Wortgruppe für Wortgruppe in Kana umschreiben, solange es die Lesung verbessert
        parts = [[m.group(1), m.group(2), False] for m in FURI.finditer(it['f'])]
        def build():
            i = iter(parts)
            return re.sub(r'\s+', '', FURI.sub(lambda m: (lambda p: p[1] if p[2] else p[0])(next(i)), it['f']))
        for p in parts:
            p[2] = True; q2, got2 = query(build()); d2 = dist(got2, want)
            if d2 < best[1]: best = (q2, d2, 'gemischt')
            else: p[2] = False
            if best[1] == 0: return best
    q3, got3 = query(it['k']); d3 = dist(got3, want)
    if d3 < best[1]: best = (q3, d3, 'kana')
    return best

def make(it):
    key = clip_key(it['p'], it['k']); path = os.path.join(A.cache, key + '.mp3')
    if os.path.exists(path) and os.path.getsize(path) > 200: return key, None
    if A.azure: wav, d, how = azure(it['p']), 0, 'azure'
    else:
        q, d, how = best_query(it)
        q.update(speedScale=1.0, prePhonemeLength=0.06, postPhonemeLength=0.1, outputSamplingRate=24000, outputStereo=False)
        wav = post('/synthesis', {'speaker': A.speaker}, q)
    # Azure hängt rund eine Sekunde Stille an: bis auf einen kurzen Rest abschneiden
    cut = ['-af', 'silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.08,areverse,silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.15,areverse'] if A.azure else []
    mp3 = subprocess.run(['ffmpeg', '-v', 'error', '-f', 'wav', '-i', 'pipe:0', *cut, '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '32k', '-write_xing', '0', '-id3v2_version', '0', '-f', 'mp3', 'pipe:1'], input=wav, capture_output=True, check=True).stdout
    with open(path + '.tmp', 'wb') as f: f.write(mp3)
    os.replace(path + '.tmp', path)
    return key, (how, d, it['p'], it['k'])

items = json.load(open(A.list, encoding='utf8'))
if A.limit: items = items[:A.limit]
os.makedirs(A.cache, exist_ok=True); os.makedirs(A.out, exist_ok=True)
stats, bad, done = {}, [], 0
with ThreadPoolExecutor(A.jobs) as ex:
    for key, info in ex.map(make, items):
        done += 1
        if info:
            stats[info[0]] = stats.get(info[0], 0) + 1
            if info[1]: bad.append(info)
        if done % 500 == 0: print(done, '/', len(items), stats, 'abweichend:', len(bad), flush=True)
print('fertig', len(items), stats, 'abweichend:', len(bad), flush=True)
with open(os.path.join(A.cache, 'abweichend.txt'), 'a', encoding='utf8') as f:
    for how, d, p, k in bad: f.write(f'{d}\t{how}\t{p}\t{k}\n')

# ---------- Pakete bauen: MP3-Ausschnitte hintereinander, index.json nennt Paket, Anfang und Länge ----------
for old in os.listdir(A.out):
    if old.endswith('.pack') or old == 'index.json': os.remove(os.path.join(A.out, old))
groups = {}
for it in items: groups.setdefault(it['g'], []).append(clip_key(it['p'], it['k']))
packs, clips, total = [], {}, 0
for g, keys in groups.items():
    part, buf = 0, bytearray()
    def flush():
        global total
        if not buf: return
        name = g + ('' if part == 0 else '-' + chr(ord('a') + part)) + '.pack'
        open(os.path.join(A.out, name), 'wb').write(buf); packs.append(name); total += len(buf)
    for key in keys:
        data = open(os.path.join(A.cache, key + '.mp3'), 'rb').read()
        if len(buf) + len(data) > A.pack_mb * 1e6: flush(); part += 1; buf = bytearray()
        clips[key] = [len(packs), len(buf), len(data)]; buf += data
    flush()
speaker = A.voice if A.azure else next((f"{s['name']}（{st['name']}）" for s in json.loads(urllib.request.urlopen(A.url + '/speakers', timeout=30).read()) for st in s['styles'] if st['id'] == A.speaker), str(A.speaker))
stamp = hashlib.md5(json.dumps([speaker, clips], sort_keys=True).encode()).hexdigest()[:8]   # ändert sich mit dem Inhalt: die App hängt es an die Paket-Adressen, damit kein alter Cache greift
json.dump({'v': 1, 'id': stamp, 'voice': ('Microsoft Azure ' if A.azure else 'VOICEVOX:') + speaker, 'packs': packs, 'clips': clips}, open(os.path.join(A.out, 'index.json'), 'w', encoding='utf8'), ensure_ascii=False, separators=(',', ':'))
print(len(clips), 'Ausschnitte in', len(packs), 'Paketen,', round(total / 1e6, 1), 'MB, Stimme', speaker)
