// Kopiert Capacitor-Laufzeit und Schriften aus node_modules nach www/ (für Offline-Betrieb).
import { cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
const nm = 'node_modules/';
mkdirSync('www/fonts', { recursive: true });
cpSync(nm + '@capacitor/core/dist/capacitor.js', 'www/js/capacitor.js');

// Klee One 600 (Anzeigeschrift, alle Kanji-Teilmengen, nur woff2)
const kDir = nm + '@fontsource/klee-one/';
for (const f of readdirSync(kDir + 'files')) if (f.endsWith('-600-normal.woff2')) cpSync(kDir + 'files/' + f, 'www/fonts/' + f);
const klee = readFileSync(kDir + '600.css', 'utf8').replace(
  /src: url\(\.\/files\/([^)]+\.woff2)\) format\('woff2'\), url\([^)]+\) format\('woff'\);/g,
  "src: url(../fonts/$1) format('woff2');");

// Hanken Grotesk (lateinische Oberflächenschrift)
const hDir = nm + '@fontsource/hanken-grotesk/';
let hanken = '';
for (const w of [400, 500, 600, 700]) {
  const f = `hanken-grotesk-latin-${w}-normal.woff2`;
  cpSync(hDir + 'files/' + f, 'www/fonts/' + f);
  hanken += `@font-face{font-family:'Hanken Grotesk';font-style:normal;font-display:swap;font-weight:${w};src:url(../fonts/${f}) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}\n`;
}
cpSync(kDir + 'LICENSE', 'www/fonts/LICENSE-KleeOne.txt');
cpSync(hDir + 'LICENSE', 'www/fonts/LICENSE-HankenGrotesk.txt');
writeFileSync('www/css/fonts.css', '/* Klee One und Hanken Grotesk (SIL Open Font License), lokal gebündelt */\n' + hanken + klee);

// Build-Kennung für den Offline-Cache der Web-Version
const build = process.env.BUILD_ID || 'local';
writeFileSync('www/sw.js', readFileSync('www/sw.js', 'utf8').replace(/manabu-[^']*'/, `manabu-${build}'`));
console.log('www/ vorbereitet (Build ' + build + ')');
