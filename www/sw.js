/* Offline-Cache für die Web-Version (iPhone/Browser). In der Android-/iOS-App wird er nicht benutzt. */
const VERSION = 'manabu-__BUILD__';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'css/app.css', 'css/fonts.css', 'js/capacitor.js', 'js/content.js', 'js/lesson-voc.js', 'js/core.js',
  'js/gram-n5.js', 'js/gram-n4.js', 'js/gram-n3.js', 'js/gram-n2.js', 'js/gram-n1.js', 'js/gramx-n5.js', 'js/gramx-n4.js', 'js/gramx-n3.js', 'js/gramx-n2.js', 'js/gramx-n1.js', 'js/texts-a.js', 'js/texts-b.js', 'js/texts-c.js', 'js/lexicon.js', 'js/data.js', 'js/app.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-touch-icon.png', 'icons/favicon.png', 'audio/index.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isFont = req.url.includes('/fonts/') || req.url.endsWith('.pack');
  if (isFont) { // Schriften und Ton-Pakete ändern sich innerhalb einer Version nie: aus dem Cache, sonst laden und merken
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; })));
    return;
  }
  // App-Dateien: erst Netz (für Updates), bei fehlendem Netz der Cache
  e.respondWith(fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })
    .catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('index.html'))));
});
