# Manabi（学び）

Japanisch-Lern-App von **JLPT N5 bis N1** mit Fokus auf **Input**: Vokabeln, Grammatik und Lesen.

- **Wiederholen:** Karteikarten mit „Gewusst“ / „Nicht gewusst“. Gewusst → der Abstand bis zur nächsten Abfrage wächst (ca. 1 → 3 → 8 → 20 Tage …). Nicht gewusst → die Karte kommt nach wenigen Minuten wieder, der Abstand wird kürzer.
- **Standard-Deck** mit 5999 Wörtern nach Häufigkeit, jedes mit Beispielsatz, Furigana und deutscher Übersetzung (Beispielsätze aus dem Tatoeba-Projekt und eigene; die deutschen Wortbedeutungen sind maschinell übersetzt). Dazu ein **eigenes Deck** mit selbst angelegten Karten.
- **Natürliche Sprachausgabe:** Alle Wörter und Sätze der App sind vorab mit einer japanischen KI-Stimme (Microsoft Azure, „Daichi“) vertont und liegen der App bei. Das klingt auf jedem Gerät gleich und funktioniert offline.
- **Grammatik nach JLPT-Stufen:** rund 690 Grammatikpunkte von N5 bis N1, jeweils mit Bedeutung, Bildung, einer kurzen Erklärung zu Gebrauch und Nuance und drei vertonten Beispielsätzen, dazu ein Quiz pro Stufe. Dazu der **Grundkurs** mit 21 ausführlichen Lektionen zu den Grundlagen (Verbgruppen, Wörterbuchform und Verbstamm, て-, ない- und た-Form mit den Bildungsregeln je Verbgruppe, い- und な-Adjektive, Potential, Passiv, Geben und Bekommen …), jede mit Vokabelliste; die Wörter einer Lektion lassen sich in den Karten vorziehen.
- **49 Lesetexte** von N5 bis N1 mit Übersetzung pro Satz, Verständnisfragen und Vorlesefunktion, darunter zwei gemeinfreie Klassiker (Anfang von „Gon, der Fuchs“ und „Ich der Kater“). **Jedes Wort ist anklickbar:** ein kleines Fenster zeigt Übersetzung, Lesung, JLPT-Stufe und einen Knopf zum Anhören.
- **Einstieg für Anfänger:** Beim ersten Start fragt die App, wo du stehst. Wer neu anfängt, wird über einen **Lernpfad** durch Hiragana und Katakana geführt: 18 Schritte je Schrift, immer nur eine Zeile, mit Ton und einem Quiz, das nur schon gelernte Zeichen abfragt (ab 80 % richtig geht es weiter; überspringen ist möglich, ebenso ein Quiz über alle Zeichen). Die Startseite zeigt oben genau einen **nächsten Schritt**. Lange Grundkurs-Lektionen werden abschnittsweise gezeigt, auf Wunsch auch auf einer Seite. Die ersten 300 Karten des Standard-Decks haben Beispielsätze, die fast nur schon gelernte Wörter enthalten.
- **Üben im Grundkurs:** Jede Lektion endet mit Auswahlfragen, dazu kommen Lückenfragen zu den Partikeln („Welche Partikel fehlt?“) und je eine Hörfrage aus den Beispielsätzen. Unter „Grammatik“ gibt es eine Wiederholung mit gemischten Fragen aus allen erledigten Lektionen. Die N5-Liste ist in neun Gruppen gegliedert (Partikeln, て-Form-Muster usw.).
- Funktioniert **offline** und im hellen wie im dunklen Modus. Der Fortschritt bleibt auf dem Handy und lässt sich als Sicherungsdatei mitnehmen.

Aus demselben Code entstehen zwei Apps:

| Handy | Was du bekommst | Wie es aufs Handy kommt |
|---|---|---|
| **Android** | Echte App (.apk) | GitHub baut sie automatisch, du lädst sie unter „Releases“ herunter |
| **iPhone** | Web-App auf dem Home-Bildschirm (Vollbild, offline, eigenes Icon) | GitHub veröffentlicht sie über GitHub Pages, du fügst sie in Safari hinzu |

> Eine „echte“ iPhone-App aus dem App Store braucht einen Mac mit Xcode und für die dauerhafte Installation ein Apple-Entwicklerkonto (99 €/Jahr). Das Projekt enthält alles dafür (siehe ganz unten).

---

## 1. Projekt auf GitHub hochladen (einmalig, ca. 5 Minuten)

1. ZIP-Datei entpacken.
2. Auf github.com ein **neues Repository** anlegen: oben rechts **+** → **New repository**.
   - Name: z. B. `manabu`
   - **Public** wählen (GitHub Pages für die iPhone-Version ist nur bei öffentlichen Repositories kostenlos).
   - **Kein** Häkchen bei „Add a README“.
   - **Create repository** klicken.
3. Auf der neuen Seite auf **„uploading an existing file“** klicken.
4. **Den Inhalt** des entpackten Ordners `manabu` ins Browserfenster ziehen, also die Dateien und Ordner darin, nicht den Ordner selbst.
5. Unten **Commit changes** klicken.

**Wichtig – Ordner `.github` prüfen:** Nach dem Hochladen muss in der Dateiliste ein Ordner `.github` stehen. Auf dem Mac ist er im Finder oft versteckt und wird dann nicht mit hochgeladen. Falls er fehlt: Im Finder **Cmd + Shift + .** drücken (zeigt versteckte Dateien) und den Ordner `.github` nachträglich hochladen.

## 2. GitHub Pages einschalten (für das iPhone)

Im Repository: **Settings → Pages → Build and deployment → Source: „GitHub Actions“**.

Danach: Reiter **Actions** → **„Web-App veröffentlichen (iPhone)“** → **Run workflow**.

## 3. Apps holen

Im Reiter **Actions** siehst du beide Builds laufen. Sie dauern ca. 2 Minuten (Web) und 5–8 Minuten (Android).

**Android**
1. Auf dem Handy die Repository-Seite öffnen → rechts **Releases** → neueste Version → **manabi.apk** antippen.
2. Die heruntergeladene Datei öffnen. Beim ersten Mal fragt Android, ob der Browser Apps installieren darf. Das einmal erlauben.
3. Updates: neue APK genauso über die alte installieren. Der Fortschritt bleibt erhalten.

**iPhone**
1. In Safari `https://DEIN-NAME.github.io/manabu/` öffnen.
2. **Teilen**-Taste → **„Zum Home-Bildschirm“**.
3. Ab jetzt die App über das Icon starten. Sie läuft auch ohne Internet.

**Sprachausgabe:** Die App bringt ihre Stimme selbst mit (Ordner `www/audio`). Nur Karten aus dem eigenen Deck spricht ohne Azure-Schlüssel (siehe Abschnitt 4) die japanische Stimme des Geräts:
- Android: Einstellungen → „Sprachausgabe“ → Google-Sprachausgabe → Japanisch installieren.
- iPhone: Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Japanisch.

## 4. Decks

Das **Standard-Deck** ist eingebaut und beim ersten Start aktiv. Unter **設定 (Deck & Optionen) → „Eigenes Deck“** kannst du zusätzlich ein eigenes Deck anlegen und Karten selbst hinzufügen:

- **Vorderseite** (Wort) und **Rückseite** (Bedeutung) sind Pflicht.
- Freiwillig: Lesung in Kana, Beispielsatz (Furigana als `漢字[かんじ]`), Übersetzung des Satzes und ein Bild.
- **„Automatisch ausfüllen“** trägt zu einem japanischen Wort Lesung, Bedeutung und einen Beispielsatz mit Übersetzung ein. Wörter des Standard-Decks kommen aus der App; alle anderen aus dem freien Online-Wörterbuch [Jotoba](https://jotoba.de) (Beispielsätze von Tatoeba, CC BY), dafür wird das Wort dorthin gesendet.
- Karten bearbeitest oder löschst du unter **単語 (Wörter)**, solange das eigene Deck aktiv ist.

**Ton für eigene Karten:** Ohne Einrichtung liest die japanische Stimme des Geräts. Trägst du unter „Eigenes Deck“ einen eigenen Schlüssel für Microsoft Azure Speech samt Region ein (kostenlose Stufe F0 genügt), erzeugt die App den Ton für Wort und Satz selbst, mit derselben Stimme wie im Rest der App. Der Schlüssel bleibt auf dem Gerät und steht nicht in der Sicherungsdatei. Bilder und Ton liegen im Gerätespeicher der App (IndexedDB).

## 5. Handy wechseln

**Deck & Optionen → Sicherung erstellen** speichert den ganzen Fortschritt samt eigenem Deck, Bildern und Ton als Datei. Auf dem neuen Handy lädst du sie mit **„Sicherung laden“**.

---

## Für später: App ändern oder selbst bauen

Der Code der App liegt in `www/`:
- `www/js/content.js`: Kana-Tabellen und die Grundkurs-Lektionen
- `www/js/core.js`: das Standard-Deck
- `www/audio/`: die vertonten Wörter und Sätze (`index.json` und Pakete `*.pack`)
- `www/js/gram-n5.js` … `gram-n1.js`: Grammatikpunkte je JLPT-Stufe (eine Zeile pro Punkt)
- `www/js/texts-a.js` … `texts-c.js`: Lesetexte je Stufe
- `www/js/lexicon.js`: Wörterbuch für die Lesetexte (Übersetzung, Lesung, JLPT-Stufe)
- `www/js/data.js`: bereitet diese Daten auf
- `www/js/app.js`: Logik und Oberfläche (Wiederholungs-Algorithmus, Import, Grammatik, Lesen …)
- `www/css/app.css`: Gestaltung

Jede Änderung, die du auf GitHub hochlädst, baut automatisch eine neue APK und aktualisiert die Web-Version.

Lokal am Computer mit Node.js 22:

```bash
npm install
npm run serve          # App im Browser unter http://localhost:8080
npm run android:init   # Android-Projekt erzeugen (dann in Android Studio: npx cap open android)
npm run ios:init       # nur Mac: iOS-Projekt erzeugen (dann: npx cap open ios)
```

**Eigene Inhalte ergänzen**

- *Grammatikpunkt:* in der passenden `gram-n?.js` eine Zeile anhängen: `Muster|Bedeutung|Bildung|Beispielsatz|Übersetzung`. Erklärung und weitere Beispiele stehen in `gramx-n?.js` als `Muster|Erklärung|Satz|Übersetzung|Satz|Übersetzung` (das Muster muss genau gleich lauten). Furigana schreibt man als `漢字[かんじ]`.
- *Lesetext:* in `texts-?.js` einen Block mit `# Titel|Übersetzung` beginnen, dann pro Satz `Japanisch // Deutsch`, am Ende Fragen als `? Frage|richtig|falsch|falsch|falsch`. Im japanischen Satz trennt ein Leerzeichen Wortgruppen und `|` einzelne Wörter, zum Beispiel `私[わたし]|は 学生[がくせい]|です。`
- *Wörter:* Jedes Wort eines Textes braucht eine Zeile in `lexicon.js`: `Wort|Lesung|Bedeutung|Stufe|Klasse`. Gebeugte Formen (食べました → 食べる) findet die App selbst, wenn die Klasse stimmt (`1` = る-Verb, `5` = う-Verb, `i` = い-Adjektiv).

Die JLPT-Stufen sind nicht offiziell: Seit 2010 veröffentlicht die Prüfungsstelle keine Listen mehr. Die Einteilung der Grammatik folgt den gängigen Lernlisten, die Wortstufen den verbreiteten Wortlisten von Jonathan Waller (tanos.co.uk, CC BY).

**Vokabellisten des Grundkurses**

Unter jeder Grundkurs-Lektion steht ein Link zu den Vokabeln ihrer Beispiel- und Quizsätze. Die Listen liegen in `www/js/lesson-voc.js` und werden erzeugt: Nach Änderungen an den Beispielsätzen `node scripts/lesson-voc.mjs` ausführen. Wörter, die das Skript nicht im Lexikon findet, meldet es; sie werden in `scripts/lesson-voc-extra.json` nachgetragen (der Aufbau steht oben im Skript). Danach den Ton für neue Wörter erzeugen (nächster Abschnitt).

**Lokal testen**

`python3 scripts/serve.py` startet die App unter http://127.0.0.1:8642/ und verbietet dem Browser das Zwischenspeichern, damit Änderungen beim Neuladen sofort sichtbar sind.

**Ton neu erzeugen**

Wenn du Grammatikpunkte, Texte oder Wörter änderst, fehlt für das Neue zunächst der Ton; die App nimmt dann die Stimme des Geräts. So vertonst du nach:

1. Im [Azure-Portal](https://portal.azure.com) eine „Speech“-Ressource anlegen (Tarif F0 ist kostenlos und reicht). Schlüssel und Region in eine Datei außerhalb des Projekts schreiben, z. B. `~/Manabu/azure-key.txt`: Zeile 1 der Schlüssel, Zeile 2 die Region. Außerdem werden `ffmpeg` und Node.js gebraucht.
2. Im Projektordner: `node scripts/audio-list.mjs > audio-list.json`
3. `python3 scripts/make-audio.py audio-list.json --azure ~/Manabu/azure-key.txt`

Schon vertonte Ausschnitte liegen in `.audio-cache-azure/` und werden wiederverwendet; nur Neues wird vertont. Der Tarif F0 erlaubt 20 Anfragen pro Minute – ein vollständiger Lauf über alle rund 13.600 Ausschnitte dauert damit etwa 13 Stunden und lässt sich jederzeit abbrechen und fortsetzen. Eine andere Stimme wählst du mit `--voice <Name>` (dann vorher `.audio-cache-azure/` löschen). Azure meldet nicht zurück, wie es Kanji liest; falsch gelesene Wörter fallen also erst beim Hören auf.

Ohne `--azure` arbeitet das Skript mit einer lokal laufenden [VOICEVOX](https://voicevox.hiroshiba.jp)-Engine (`--speaker <Nummer>`, Ablage `.audio-cache/`); dort ist dann der Stimmenhinweis „VOICEVOX:<Name>“ Pflicht.

**Quellen und Lizenzen**

- **Stimme:** Microsoft Azure Speech, `ja-JP-DaichiNeural`. Nach Auskunft des Microsoft-Supports dürfen die erzeugten Aufnahmen genutzt und weitergegeben werden, solange der Eingabetext der eigene ist; für eine kommerzielle App wird statt des Gratis-Tarifs F0 ein bezahlter Tarif (S0) empfohlen. Den Vertragstext selbst solltest du vor einer kommerziellen Veröffentlichung prüfen.
- **Standard-Deck, Wortliste:** Auswahl und Reihenfolge der 5999 Wörter folgen den verbreiteten „Core 2000/6000“-Listen (ursprünglich iKnow!/Cerego, bezogen über das Anki-Deck „Core 2k/6k Optimized Japanese Vocabulary“). Die deutschen Bedeutungen sind maschinell erstellt und nicht gegengelesen. Die Beispielsätze und Tonaufnahmen dieses Decks sind **nicht** übernommen.
- **Standard-Deck, Beispielsätze:** 5398 Sätze stammen aus dem [Tatoeba-Projekt](https://tatoeba.org) (Lizenz [CC BY 2.0 FR](https://creativecommons.org/licenses/by/2.0/fr/), einzelne CC0), 4445 davon samt deutscher Übersetzung. Die übrigen 953 Tatoeba-Sätze sind für diese App übersetzt, 601 Sätze sind eigens geschrieben – darunter alle der ersten 300 Karten, die fast nur schon gelernte Wörter verwenden. Satznummern und Verfasser stehen in `www/tatoeba-quellen.txt`; wer die App weitergibt, muss diese Datei und den Lizenzhinweis mitgeben.
- **Furigana der Beispielsätze:** automatisch erzeugt (UniDic), geprüft und korrigiert mit JMdict (EDRDG) und dem Tatoeba-Wortindex, dazu von Hand durchgesehene Zweifelsfälle. Einzelne falsche Lesungen sind trotzdem möglich. Die deutschen Übersetzungen von Tatoeba sind nicht gegengelesen und manchmal frei.
- **Lesetexte:** selbst geschrieben, bis auf zwei gemeinfreie Auszüge: Niimi Nankichi, „Gon, der Fuchs“ (1932), und Natsume Sōseki, „Ich der Kater“ (1905), Wortlaut nach Aozora Bunko.
- **JLPT-Wortstufen:** nach den Listen von Jonathan Waller (tanos.co.uk, CC BY).

**Signatur:** `signing/manabu.keystore` sorgt dafür, dass sich Updates über die alte Version installieren lassen. Das Passwort ist `manabu-app`. Für den privaten Gebrauch reicht das. Für den Google Play Store würdest du einen eigenen Schlüssel erzeugen und als GitHub-Secret hinterlegen (`KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`).

**Echte iPhone-App:** Auf einem Mac mit Xcode `npm install && npm run ios:init && npx cap open ios` ausführen, in Xcode deine Apple-ID als Team wählen und auf dem angeschlossenen iPhone starten. Mit einer kostenlosen Apple-ID läuft die App 7 Tage, mit Entwicklerkonto lässt sie sich über TestFlight verteilen.

Schriften: Klee One und Hanken Grotesk (SIL Open Font License).
