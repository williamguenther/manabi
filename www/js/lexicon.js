/* Wort-Lexikon für die Lesetexte: jedes Wort, das in texts-*.js vorkommt.
   Zeile: Formen|Lesung|Bedeutung|Stufe|Klasse      (Erklärung der Felder in data.js)
   Die JLPT-Stufen sind mit den verbreiteten Wortlisten abgeglichen (Jonathan Waller, tanos.co.uk, CC BY). Was dort fehlt
   (Partikeln, Hilfswörter, Zusammensetzungen), ist geschätzt; 0 steht für Wörter außerhalb der Listen. */
LEX_RAW.push(`
は|わ|Themenpartikel: „was … betrifft“|5
が||Subjektpartikel; aber|5
を||Objektpartikel|5
に||in, an, um (Zeit / Ort); nach, zu (Ziel); von (beim Passiv)|5
へ|え|nach, zu (Richtung)|5
で||in, an (Ort der Handlung); mit (Mittel); und (て-Form von だ)|5
と||und; mit; dass (Zitat); wenn|5
も||auch; sogar|5
の||von (Besitz, Zugehörigkeit); das …en (Nominalisierung); erklärend|5
や||und (unter anderem)|5
か||Fragepartikel; oder|5
ね||nicht wahr? (sucht Zustimmung)|5
よ||betont eine Mitteilung|5
な||verbindet な-Adjektiv und Nomen; (nach Verb) Verbot|5
から||von, ab, seit; weil|5
まで||bis|5
より||als (Vergleich); von … an; (に より) durch, aufgrund|5
だけ||nur|5
しか||nur (mit Verneinung)|5
ので||weil, da|5
のに||obwohl; um zu|4
でも||aber; auch, selbst; … oder so|5
など||und so weiter|5
ずつ||je, jeweils|5
ぐらい,くらい||ungefähr; so sehr wie|5
ばかり||nur, nichts als; (た + ばかりに) nur weil|4
さえ||sogar, selbst; wenn nur|3
すら||sogar, selbst (schriftsprachlich)|1
こそ||gerade, eben (Hervorhebung)|3
とも||zusammen (と ともに); selbst wenn; sowohl|2
ながら||während (gleichzeitig); obwohl|4
つつ||während; (つつ ある) im Begriff sein zu …|2
ほど||so sehr, dass; etwa; je … desto|4
のみ||nur (schriftsprachlich)|2
って||Zitatpartikel (umgangssprachlich)|4
さ||-heit, -e (macht aus Adjektiven Nomen)|4
ん||erklärend (kurz für の)|5
じゃ||kurz für では|5
じゃあ||na dann, also|5
だ,だった,だろう,だが||ist (einfache Form von です); だろう = wohl|5
です,でした,でしょう||ist, sind (höflich); でしょう = wohl|5
という||namens; dass …; so etwas wie|4
ように,ような||wie; damit; (ように なる) dahin kommen, dass|4
そうだ||soll … (Hörensagen); sieht aus wie|4
らしい||es scheint, offenbar; typisch für|4|i
かもしれない||vielleicht, es kann sein|3
べき||sollte|3
まい||wohl nicht; nicht wollen|2
がち||neigt dazu, … zu|3
ざる||nicht (alte Verneinung; ざるを 得ない = nicht umhinkönnen)|2
かねない||könnte durchaus (etwas Schlimmes)|2
ほかならない||nichts anderes als|2
かかわらず||ungeachtet, trotz (に も かかわらず)|2
にもかかわらず||trotzdem, dennoch|2
とって||(に とって) für, aus der Sicht von|3
ついて||(に ついて) über, bezüglich; (気が ついて) bemerkt|4
つれて||(に つれて) in dem Maße wie|3
やすい||leicht zu …|4|i
にくい||schwer zu …|4|i
すぎる,過ぎる|すぎる|zu viel / zu sehr …; vorübergehen, überschreiten; (に 過ぎない) nichts weiter als|4|1
こと||Sache, Angelegenheit; das …en|5
もの||Ding, Sache|5
ところ||Ort, Stelle; Punkt, Seite|5
とき||Zeit; wenn, als|5
ころ||Zeit, als; ungefähr um|5
うち||Inneres; solange, während; Zuhause|5
方,ほう|ほう|Seite, Richtung; (ほうが いい) besser|5
はず||müsste, sollte eigentlich|4
わけ||Grund; (わけではない) es ist nicht so, dass|4
つもり||Absicht, Vorhaben|4
せい||Schuld, Ursache (negativ)|3
おかげ||Dank, Verdienst (positiver Grund)|4
たび||Mal; jedes Mal wenn|3
ため||Zweck, Grund; um zu, für, wegen|4
まま||so wie es ist, unverändert|4
とたん||in dem Moment als, kaum dass|3
きっかけ||Anlass, Auslöser|2
きらい||(〜きらいが ある) Neigung, Tendenz (zu etwas Negativem)|1
なし||ohne; nicht vorhanden|2
ごなし||(頭ごなしに) von oben herab, ohne zuzuhören|0
いとま||freie Zeit, Muße (枚挙に いとまが ない = zahllos)|0
おろか||(は おろか) ganz zu schweigen von|1
さる||(も さる こと ながら) gewiss wichtig, aber …|1
なおさら||umso mehr, erst recht|1
これ||dies (hier)|5
それ||das (da)|5
どれ||welches; (どれほど) wie sehr|5
この||diese(r, s)|5
その||der / die / das (da); dessen|5
ここ||hier|5
そこ||dort, da|5
どこ||wo|5
こちら||hier, hierher (höflich)|5
あなた||du, Sie|5
みんな||alle|5
どんな||was für ein|5
どう||wie|5
どうか||(か どうか) ob … oder nicht; bitte|3
いつ||wann|5
いつも||immer|5
いくら||wie viel; (いくら 〜ても) egal wie sehr|5
いかに||wie, wie sehr (schriftsprachlich)|1
このように||auf diese Weise, so|3
そうした||solche(r, s), derartige|0
こうした||solche(r, s), derartige|0
これから||von jetzt an|5
とても||sehr|5
たくさん||viel, viele|5
よく||oft; gut|5
あまり||nicht besonders (mit Verneinung); zu sehr|5
まだ||noch; noch nicht|5
もう||schon; noch (ein)|5
すぐ||sofort, gleich|5
ゆっくり||langsam, in Ruhe|5
まず||zuerst|4
ぜひ||unbedingt|4
もし||falls, wenn|4
だんだん||allmählich, nach und nach|5
びっくり||Überraschung (びっくりする = überrascht sein)|4
いろいろ||verschieden, allerlei|5
さまざま||verschiedenartig, vielfältig|3
ほとんど||fast alle; beinahe|4
かなり||ziemlich|3
はっきり||deutlich, klar|4
じっくり||gründlich, in aller Ruhe|1
うまく,うまい|うまい|geschickt, gut; lecker|4|i
つい||unabsichtlich, unwillkürlich; gerade erst|3
わざわざ||extra, eigens|3
むしろ||eher, vielmehr|2
かつて||einst, früher|2
かえって||im Gegenteil, stattdessen erst recht|2
もちろん||natürlich, selbstverständlich|4
それから||danach, und dann|5
それで||deshalb, daher|4
それでも||trotzdem|3
そして||und, und dann|5
しかし||aber, jedoch|4
しかも||noch dazu, obendrein|3
すると||da, daraufhin|4
ところが||aber, jedoch (unerwartet)|3
だから||deshalb, darum|4
つまり||das heißt, also|3
また||wieder; außerdem|5
もっとも||allerdings; (最も) am meisten|2
どうぞ||bitte (anbietend)|5
すみません||Entschuldigung; danke (für die Umstände)|5
ありがとう||danke|5
ください||bitte geben Sie mir; (て ください) bitte tun Sie|5
お願いします|おねがいします|bitte (ich bitte darum)|5
いらっしゃいませ||Willkommen! (im Geschäft)|5
かしこまりました||Sehr wohl, sehr gern (höflich)|2
する;し,さ,せ||tun, machen|5
来る,くる,きて,きた,きました;来|くる|kommen; (nach て-Form) her-, allmählich werden|5
いる||da sein (Lebewesen); (て いる) gerade tun, Zustand|5|1
ある||da sein, es gibt; haben; ein gewisser|5|5
ない||nicht; nicht vorhanden|5|i
なる||werden|5|5
できる||können; fertig werden, entstehen|5|1
いい||gut|5
良い,よい|よい|gut|5|i
よろしい||gut, in Ordnung (höflich)|4|i
ほしい||haben wollen, sich wünschen|5|i
うれしい||froh, erfreut|4|i
かわいい||niedlich, süß|5|i
きれい||schön; sauber|5
あげる||geben; (て あげる) für jemanden tun|5|1
くれる||(mir) geben; (て くれる) für mich tun|5|1
もらう||bekommen; (て もらう) sich etwas tun lassen|5|5
いただく||bekommen, erhalten (bescheiden); (て いただく) für mich tun (höflich)|4|5
しまう||(て しまう) ganz fertig tun; leider, aus Versehen|4|5
みる||(て みる) ausprobieren|5|1
やる||tun, machen; geben|5|5
行く,いく|いく|gehen, fahren; (て いく) weiter-, fort-|5|5
かかる||dauern, kosten; (に かかって いる) abhängen von; greifen|5|5
かける||(電話を) anrufen; (迷惑を) bereiten; (時間を) aufwenden; aufhängen|5|1
つく||haften; (気が つく) bemerken; (取り返しが つかない) nicht wiedergutzumachen|4|5
つける||anbringen; (区別を) unterscheiden; einschalten|5|1
よる||(に よる) abhängen von; (に よって) durch, je nach; (に よれば) laut|4|5
なくなる||verschwinden, ausgehen, verloren gehen|4|5
ためる||sparen, ansammeln|3|1
ためらう||zögern|2|5
まとめる||zusammenfassen, bündeln; (まとめて) auf einmal|3|1
はらむ||in sich bergen; schwanger sein|1|5
こなす||bewältigen, beherrschen (使いこなす = souverän nutzen)|1|5
`);
LEX_RAW.push(`
私|わたし|ich|5
私たち|わたしたち|wir|5
たち||(Pluralendung für Personen)|5
さん||Herr, Frau (Anrede)|5
様|さま|Herr, Frau (sehr höflich)|4
人|ひと|Mensch, Person|5
人|じん|-er (Angehöriger eines Landes)|5
人|にん|(Zählwort für Personen)|5
人々|ひとびと|die Menschen, Leute|3
一人|ひとり|eine Person; allein|5
二人|ふたり|zwei Personen|5
一人一人|ひとりひとり|jeder Einzelne|3
自分|じぶん|selbst; man selbst|5
本人|ほんにん|die Person selbst, der Betroffene|3
相手|あいて|Gegenüber, Partner|3
誰|だれ|wer; (誰も + Verneinung) niemand|5
全員|ぜんいん|alle (Mitglieder)|3
大勢|おおぜい|viele Menschen|5
個人|こじん|Einzelperson, Individuum|3
人間|にんげん|Mensch (als Wesen)|3
家族|かぞく|Familie|5
父|ちち|(mein) Vater|5
母|はは|(meine) Mutter|5
姉|あね|(meine) ältere Schwester|5
親|おや|Eltern, Elternteil|4
祖母|そぼ|(meine) Großmutter|4
子供|こども|Kind|5
大人|おとな|Erwachsene(r)|5
若者|わかもの|junger Mensch, Jugend|3
高齢者|こうれいしゃ|ältere Menschen, Senioren|1
世代|せだい|Generation|1
友達|ともだち|Freund(in)|5
先生|せんせい|Lehrer(in); Arzt|5
学生|がくせい|Student(in), Schüler(in)|5
先輩|せんぱい|Ältere(r) in Schule oder Firma|4
同僚|どうりょう|Kollege, Kollegin|3
会社員|かいしゃいん|Firmenangestellte(r)|4
店員|てんいん|Verkäufer(in), Bedienung|4
店長|てんちょう|Filialleiter(in)|3
駅員|えきいん|Bahnhofsangestellte(r)|4
医者|いしゃ|Arzt, Ärztin|5
客|きゃく|Gast, Kunde|4
お客|おきゃく|Gast, Kunde (höflich)|4
外国人|がいこくじん|Ausländer(in)|5
日本人|にほんじん|Japaner(in)|5
住民|じゅうみん|Einwohner, Bewohner|3
専門家|せんもんか|Fachmann, Experte|3
者|しゃ|Person (als Nachsilbe: -er)|3
屋|や|Laden, Geschäft (Nachsilbe)|5
名|めい|(Zählwort für Personen, höflich); Name (Nachsilbe)|4
シュミット||Schmidt (Name)|x
タマ||Tama (Katzenname)|x
山田|やまだ|Yamada (Familienname)|x
ドイツ||Deutschland|x
日本|にほん|Japan|x
東京|とうきょう|Tokio|x
京都|きょうと|Kyoto|x
大阪|おおさか|Osaka|x
日本語|にほんご|Japanisch (Sprache)|5
名前|なまえ|Name|5
一|いち|eins|5
二|に|zwei|5
三|さん|drei|5
四|よん|vier|5
六|ろく|sechs|5
七|しち|sieben|5
八|はち|acht|5
十一|じゅういち|elf|5
二十四|にじゅうよん|vierundzwanzig|5
三十|さんじゅう|dreißig|5
千|せん|tausend|5
つ||(allgemeines Zählwort für Dinge)|5
時|じ|… Uhr|5
分|ふん|Minute|5
分|ぶん|Teil, Anteil, Portion|3
円|えん|Yen|5
階|かい|Stockwerk|5
杯|はい|(Zählwort für Tassen, Schalen, Gläser)|5
冊|さつ|(Zählwort für Bücher)|5
年|ねん|Jahr|5
日|ひ|Tag; Sonne|5
日|にち|Tag (beim Zählen)|5
週|しゅう|Woche|3
週間|しゅうかん|Woche (Dauer)|5
時間|じかん|Zeit; Stunde|5
半年|はんとし|ein halbes Jahr|4
二日|ふつか|zwei Tage; der Zweite|5
数年|すうねん|einige Jahre|3
代|だい|Kosten, Gebühr (Nachsilbe); Generation|4
中|なか|Inneres, in, mitten in|5
中|じゅう|den ganzen … über; überall in|5
間|あいだ|Zwischenraum; zwischen; während|5
間|かん|Dauer, Zeitraum; zwischen (Nachsilbe)|4
間|ま|Zwischenraum, Zeit (いつの 間にか = unbemerkt, irgendwann)|3
前|まえ|vor; vorn; früher|5
後|あと|nach, danach; hinten|5
上|うえ|oben, auf; (上で) bei, im Hinblick auf|5
下|した|unten, unter|5
外|そと|draußen, außen|5
隣|となり|nebenan, Nachbar|5
近く|ちかく|Nähe; in der Nähe|5
裏|うら|Rückseite, Kehrseite|4
面|めん|Seite, Aspekt; Fläche|3
点|てん|Punkt|4
場|ば|Ort, Situation|3
以下|いか|weniger als, unter; Folgendes|4
今|いま|jetzt|5
今日|きょう|heute|5
明日|あした|morgen|5
昨日|きのう|gestern|5
今朝|けさ|heute Morgen|5
毎日|まいにち|jeden Tag|5
毎朝|まいあさ|jeden Morgen|5
朝|あさ|Morgen|5
夜|よる|Abend, Nacht|5
夜中|よなか|mitten in der Nacht|3
夕方|ゆうがた|früher Abend|5
午後|ごご|Nachmittag|5
先週|せんしゅう|letzte Woche|5
先月|せんげつ|letzten Monat|5
来月|らいげつ|nächsten Monat|5
去年|きょねん|letztes Jahr|5
来年|らいねん|nächstes Jahr|5
先日|せんじつ|neulich|3
最近|さいきん|in letzter Zeit|4
週末|しゅうまつ|Wochenende|4
土曜日|どようび|Samstag|5
日曜日|にちようび|Sonntag|5
春|はる|Frühling|5
夏休み|なつやすみ|Sommerferien|5
誕生日|たんじょうび|Geburtstag|5
昔|むかし|früher, alte Zeiten|4
時代|じだい|Zeitalter, Epoche|4
時期|じき|Zeitpunkt, Phase|3
時点|じてん|Zeitpunkt|1
未来|みらい|Zukunft|3
最初|さいしょ|Anfang; zuerst|4
最後|さいご|Ende; zuletzt|4
初めて|はじめて|zum ersten Mal|5
久しぶり|ひさしぶり|nach langer Zeit|4
年々|ねんねん|von Jahr zu Jahr|1
次|つぎ|nächste(r, s)|5
次々|つぎつぎ|eins nach dem anderen|3
何|なに|was|5
何度|なんど|wie oft; (何度も) viele Male|4
一番|いちばん|am meisten, Nummer eins|5
少し|すこし|ein wenig|5
全部|ぜんぶ|alles|5
多く|おおく|viele, ein Großteil|3
全く|まったく|ganz und gar; (mit Verneinung) überhaupt nicht|3
特|とく|(特に) besonders|4
最も|もっとも|am meisten|4
決して|けっして|keinesfalls, niemals (mit Verneinung)|4
例えば|たとえば|zum Beispiel|4
結局|けっきょく|letzten Endes, schließlich|3
直接|ちょくせつ|direkt|3
本来|ほんらい|ursprünglich, eigentlich|2
確か|たしか|sicher, gewiss; (確かに) tatsächlich|4
互い|たがい|einander, gegenseitig|3
逆|ぎゃく|umgekehrt, Gegenteil|3
無|む|un-, -los (Vorsilbe)|3
的|てき|-lich, -isch (Nachsilbe)|3
家|いえ|Haus, Zuhause|5
部屋|へや|Zimmer|5
庭|にわ|Garten|5
町|まち|Stadt, Ort|5
国|くに|Land, Staat|5
駅|えき|Bahnhof|5
店|みせ|Laden, Geschäft, Lokal|5
公園|こうえん|Park|5
図書館|としょかん|Bibliothek|5
お寺|おてら|(buddhistischer) Tempel|4
大学|だいがく|Universität|5
学校|がっこう|Schule|5
会社|かいしゃ|Firma|5
病院|びょういん|Krankenhaus|5
喫茶店|きっさてん|Café|5
交番|こうばん|Polizeiwache (klein, im Viertel)|5
デパート||Kaufhaus|5
スーパー||Supermarkt|4
レストラン||Restaurant|5
コンビニ||Konbini, 24-Stunden-Laden|0
ホテル||Hotel|5
アパート||Mietwohnung, Wohnhaus|5
実家|じっか|Elternhaus|2
自宅|じたく|eigenes Zuhause|3
田舎|いなか|Land (im Gegensatz zur Stadt); Heimatdorf|4
都会|とかい|Großstadt|3
地方|ちほう|Region, Provinz, ländliche Gegend|3
地域|ちいき|Gebiet, Region|3
各地|かくち|vielerorts, alle Gegenden|2
土地|とち|Grund, Boden; Gegend|3
外国|がいこく|Ausland|5
世界|せかい|Welt|4
場所|ばしょ|Ort, Platz|4
道|みち|Weg, Straße|5
通り|とおり|Straße; so wie|3
席|せき|Sitzplatz|4
宿|やど|Unterkunft, Herberge|3
民家|みんか|Wohnhaus (Privathaus)|0
空き家|あきや|leer stehendes Haus|0
木|き|Baum; Holz|5
花|はな|Blume, Blüte|5
桜|さくら|Kirschbaum, Kirschblüte|3
雨|あめ|Regen|5
雪|ゆき|Schnee|5
風|かぜ|Wind|5
天気|てんき|Wetter|5
空気|くうき|Luft; Stimmung|4
猫|ねこ|Katze|5
生き物|いきもの|Lebewesen|3
頭|あたま|Kopf|5
目|め|Auge|5
耳|みみ|Ohr|5
口|くち|Mund|5
力|ちから|Kraft, Fähigkeit|4
声|こえ|Stimme|5
気|き|Geist, Gemüt, Gefühl (気が つく = bemerken; 気が する = das Gefühl haben)|4
気持ち|きもち|Gefühl, Empfinden|4
熱|ねつ|Fieber; Hitze|4
風邪|かぜ|Erkältung|5
お風呂|おふろ|Bad, Badewanne|5
病気|びょうき|Krankheit|5
薬|くすり|Medizin, Medikament|5
元気|げんき|gesund, munter|5
睡眠|すいみん|Schlaf|3
疲れ|つかれ|Müdigkeit, Erschöpfung|3
ストレス||Stress|3
朝ご飯|あさごはん|Frühstück|5
昼ご飯|ひるごはん|Mittagessen|5
晩ご飯|ばんごはん|Abendessen|5
ご飯|ごはん|gekochter Reis; Mahlzeit|5
パン||Brot|5
卵|たまご|Ei|5
野菜|やさい|Gemüse|5
海老|えび|Garnele|0
天ぷら|てんぷら|Tempura|0
ラーメン||Ramen (Nudelsuppe)|0
おかゆ||Reisbrei|0
弁当|べんとう|Lunchbox, Bento|5
味噌|みそ|Miso (Sojabohnenpaste)|4
味噌汁|みそしる|Misosuppe|0
お茶|おちゃ|(grüner) Tee|5
コーヒー||Kaffee|5
コップ||Glas, Becher|5
茶わん|ちゃわん|Reisschale|5
料理|りょうり|Kochen; Gericht|5
食べ物|たべもの|Essen, Lebensmittel|5
飲み物|のみもの|Getränk|5
食品|しょくひん|Lebensmittel|3
食品ロス|しょくひんロス|Lebensmittelverschwendung|0
味|あじ|Geschmack|4
メニュー||Speisekarte|2
注文|ちゅうもん|Bestellung|3
ごちそう||Festessen; (ごちそうする) einladen, bewirten|4
本|ほん|Buch|5
小説|しょうせつ|Roman|4
雑誌|ざっし|Zeitschrift|5
辞書|じしょ|Wörterbuch|5
随筆|ずいひつ|Essay|2
文章|ぶんしょう|Text, Satz|5
文字|もじ|Schriftzeichen, Schrift|3
漢字|かんじ|Kanji|5
言葉|ことば|Wort, Sprache|5
単語|たんご|Vokabel, Wort|3
敬語|けいご|Höflichkeitssprache|2
方言|ほうげん|Dialekt|2
標準語|ひょうじゅんご|Standardsprache|0
表現|ひょうげん|Ausdruck|3
意味|いみ|Bedeutung|5
話|はなし|Gespräch, Geschichte|5
意見|いけん|Meinung|4
答え|こたえ|Antwort|4
例|れい|Beispiel|3
読書|どくしょ|Lesen (von Büchern)|3
言い方|いいかた|Ausdrucksweise|0
読み方|よみかた|Lesart, Art des Lesens|5
使い方|つかいかた|Gebrauch, Verwendungsweise|0
作り方|つくりかた|Zubereitung, Herstellungsweise|0
行き方|いきかた|Weg (wie man hinkommt)|0
音楽|おんがく|Musik|5
映画|えいが|Film|5
テレビ||Fernsehen, Fernseher|5
ニュース||Nachrichten|5
ゲーム||Spiel|3
広告|こうこく|Werbung, Anzeige|3
電車|でんしゃ|Zug, Bahn|5
電話|でんわ|Telefon, Anruf|5
電気|でんき|Strom; Licht|5
スマートフォン||Smartphone|0
歩きスマホ|あるきスマホ|aufs Smartphone schauen beim Gehen|0
画面|がめん|Bildschirm|2
カード||Karte|3
地図|ちず|Landkarte, Stadtplan|5
機械|きかい|Maschine|3
道具|どうぐ|Werkzeug, Gerät|4
傘|かさ|Regenschirm|5
靴|くつ|Schuhe|5
かばん||Tasche|5
財布|さいふ|Portemonnaie|5
箱|はこ|Kiste, Schachtel, Karton|5
荷物|にもつ|Gepäck, Paket|5
紙|かみ|Papier|5
物|もの|Ding, Sache, Ware|5
日用品|にちようひん|Dinge des täglichen Bedarfs|2
商品|しょうひん|Ware, Produkt|3
現金|げんきん|Bargeld|3
お金|おかね|Geld|5
免許証|めんきょしょう|Führerschein|2
忘れ物|わすれもの|vergessener Gegenstand|4
買い物|かいもの|Einkauf, Einkaufen|5
売り上げ|うりあげ|Umsatz, Absatz|2
仕事|しごと|Arbeit|5
アルバイト||Nebenjob|4
勤務|きんむ|Dienst, Arbeit (in einer Firma)|1
在宅|ざいたく|zu Hause (anwesend)|0
通勤|つうきん|Arbeitsweg, Pendeln|2
出張|しゅっちょう|Dienstreise|2
業務|ぎょうむ|Geschäftstätigkeit, Aufgaben|1
事務|じむ|Büroarbeit|3
作業|さぎょう|Arbeit, Arbeitsgang|3
会議|かいぎ|Besprechung, Konferenz|4
家事|かじ|Hausarbeit|3
洗濯|せんたく|Wäschewaschen|5
勉強|べんきょう|Lernen, Studium|5
研究|けんきゅう|Forschung, Studie|4
旅行|りょこう|Reise|5
お花見|おはなみ|Kirschblütenschau|4
引っ越し|ひっこし|Umzug|3
一人暮らし|ひとりぐらし|Alleinwohnen|0
暮らし|くらし|Leben, Lebensweise|3
生活|せいかつ|(Alltags-)Leben|4
予定|よてい|Plan, Vorhaben|4
卒業|そつぎょう|Schulabschluss, Abschluss|4
案内|あんない|Führung, Betreuung, Auskunft|4
説明|せつめい|Erklärung|4
連絡|れんらく|Kontakt, Benachrichtigung|4
注意|ちゅうい|Aufmerksamkeit; Ermahnung|4
感謝|かんしゃ|Dankbarkeit|3
お礼|おれい|Dank; Dankeschön|4
迷惑|めいわく|Belästigung, Umstände|3
申し訳|もうしわけ|Entschuldigung (申し訳 ない = es tut mir leid)|3
秘密|ひみつ|Geheimnis|3
事故|じこ|Unfall|4
原因|げんいん|Ursache|4
結果|けっか|Ergebnis; als Folge|3
問題|もんだい|Problem; Aufgabe|5
課題|かだい|Aufgabe, Herausforderung|1
存在|そんざい|Existenz, Dasein|3
反面|はんめん|andererseits, Kehrseite|2
一方|いっぽう|einerseits; immer mehr; während|3
場面|ばめん|Situation, Szene|3
状況|じょうきょう|Lage, Umstände|3
事態|じたい|Lage, Sachlage|3
事実|じじつ|Tatsache|3
現象|げんしょう|Phänomen|3
影響|えいきょう|Einfluss, Auswirkung|3
変化|へんか|Veränderung, Wandel|3
流れ|ながれ|Strömung, Verlauf, Trend|3
動き|うごき|Bewegung, Tendenz|3
流行|りゅうこう|Mode, Trend|3
普及|ふきゅう|Verbreitung|2
増加|ぞうか|Zunahme|3
減少|げんしょう|Abnahme, Rückgang|1
不足|ふそく|Mangel|3
割合|わりあい|Anteil, Verhältnis|4
数|かず|Zahl, Anzahl|3
量|りょう|Menge|3
大量|たいりょう|große Menge|2
限り|かぎり|Grenze; solange, soweit|2
期限|きげん|Frist, Ablaufdatum|2
機会|きかい|Gelegenheit|4
区別|くべつ|Unterscheidung|3
違い|ちがい|Unterschied; (に 違い ない) ganz sicher|3
代わり|かわり|Ersatz; (の 代わりに) statt|4
当たり|あたり|pro, je (Nachsilbe); Treffer|3
内容|ないよう|Inhalt|3
指摘|してき|Hinweis, Anmerkung|1
評価|ひょうか|Bewertung, Würdigung|3
判断|はんだん|Urteil, Beurteilung|3
判断力|はんだんりょく|Urteilsvermögen|0
集中力|しゅうちゅうりょく|Konzentrationsfähigkeit|0
能力|のうりょく|Fähigkeit|3
努力|どりょく|Anstrengung, Bemühung|3
恐れ|おそれ|Furcht; Gefahr (恐れが ある = es besteht die Gefahr)|2
孤独|こどく|Einsamkeit|1
安心|あんしん|Beruhigung, Sorglosigkeit|4
不安|ふあん|Unruhe, Sorge|3
不満|ふまん|Unzufriedenheit|3
嘆き|なげき|Klage, Kummer|0
懸念|けねん|Befürchtung, Besorgnis|1
自由|じゆう|Freiheit|4
責任|せきにん|Verantwortung|3
役|やく|Rolle, Nutzen (役に 立つ = nützlich sein)|3
役割|やくわり|Rolle, Aufgabe|3
楽しみ|たのしみ|Vorfreude, Freude|4
社会|しゃかい|Gesellschaft|4
文化|ぶんか|Kultur|4
歴史|れきし|Geschichte|4
環境|かんきょう|Umwelt, Umfeld|3
家庭|かてい|Haushalt, Familie|5
活動|かつどう|Aktivität, Tätigkeit|3
制度|せいど|System, Einrichtung|3
年金|ねんきん|Rente|2
医療|いりょう|medizinische Versorgung|3
少子高齢化|しょうしこうれいか|Geburtenrückgang und Überalterung|0
人口|じんこう|Bevölkerung(szahl)|4
行政|ぎょうせい|Verwaltung|1
支援|しえん|Unterstützung|1
防災|ぼうさい|Katastrophenschutz|0
景観|けいかん|Landschaftsbild, Ortsbild|0
資源|しげん|Ressource, Rohstoff|3
再生|さいせい|Wiederbelebung, Erneuerung|1
改装|かいそう|Umbau, Renovierung|0
移住|いじゅう|Umsiedlung, Zuzug|1
摩擦|まさつ|Reibung|2
歯止め|はどめ|Bremse, Einhalt|1
皮切り|かわきり|Auftakt, Anfang (を 皮切りに = beginnend mit)|0
試み|こころみ|Versuch|1
にぎわい||reges Treiben, Belebtheit|0
意識|いしき|Bewusstsein|3
科学|かがく|(Natur-)Wissenschaft|4
知識|ちしき|Wissen, Kenntnisse|3
技術|ぎじゅつ|Technik, Technologie|4
人工知能|じんこうちのう|künstliche Intelligenz|0
発達|はったつ|Entwicklung|3
進歩|しんぽ|Fortschritt|3
産業|さんぎょう|Industrie|4
革命|かくめい|Revolution|1
専門|せんもん|Fachgebiet|4
翻訳|ほんやく|Übersetzung|4
診断|しんだん|Diagnose|2
予測|よそく|Vorhersage, Prognose|3
対象|たいしょう|Gegenstand, Zielgruppe|3
決断|けつだん|Entscheidung, Entschluss|1
選択|せんたく|Wahl, Auswahl|3
証拠|しょうこ|Beweis, Beleg|1
仮説|かせつ|Hypothese|0
根本|こんぽん|Grundlage, Wurzel|1
態度|たいど|Haltung, Einstellung|3
姿勢|しせい|Haltung, Einstellung|2
人情|にんじょう|menschliches Empfinden|1
忍耐|にんたい|Geduld, Ausdauer|0
意図|いと|Absicht|1
雰囲気|ふんいき|Atmosphäre, Stimmung|3
行動|こうどう|Handeln, Verhalten|3
反対|はんたい|Widerspruch, Gegenteil|4
賛成|さんせい|Zustimmung|3
否定|ひてい|Verneinung, Ablehnung|3
議論|ぎろん|Diskussion|3
両立|りょうりつ|Vereinbarkeit, beides zugleich|1
重視|じゅうし|Wertschätzung, großes Gewicht|3
断定|だんてい|eindeutige Feststellung|2
条件|じょうけん|Bedingung|3
枚挙|まいきょ|Aufzählung (枚挙に いとまが ない = zahllos)|0
取り返し|とりかえし|Wiedergutmachung (取り返しが つかない = nicht wiedergutzumachen)|0
誤り|あやまり|Fehler, Irrtum; (誤る) sich irren|3
白|しろ|Weiß|5
黒|くろ|Schwarz|5
`);
LEX_RAW.push(`
大きい|おおきい|groß|5|i
小さい|ちいさい|klein|5|i
小さな|ちいさな|klein, gering|5
新しい|あたらしい|neu|5|i
古い|ふるい|alt (Dinge)|5|i
高い|たかい|hoch; teuer|5|i
安い|やすい|billig|5|i
軽い|かるい|leicht|5|i
重い|おもい|schwer|5|i
長い|ながい|lang|5|i
短い|みじかい|kurz|5|i
白い|しろい|weiß|5|i
黒い|くろい|schwarz|5|i
青い|あおい|blau|5|i
寒い|さむい|kalt (Wetter)|5|i
温かい|あたたかい|warm|5|i
辛い|からい|scharf (Geschmack)|5|i
美味しい|おいしい|lecker|5|i
難しい|むずかしい|schwierig|5|i
楽しい|たのしい|vergnüglich, macht Spaß|5|i
面白い|おもしろい|interessant, lustig|5|i
忙しい|いそがしい|beschäftigt|5|i
痛い|いたい|schmerzhaft, tut weh|5|i
狭い|せまい|eng, schmal|5|i
遠い|とおい|weit, fern|5|i
近い|ちかい|nah|5|i
多い|おおい|viel, zahlreich|5|i
少ない|すくない|wenig|5|i
早い|はやい|früh; schnell|5|i
遅い|おそい|spät; langsam|5|i
若い|わかい|jung|5|i
弱い|よわい|schwach|5|i
恥ずかしい|はずかしい|peinlich, beschämt|4|i
珍しい|めずらしい|selten, ungewöhnlich|4|i
頼りない|たよりない|unzuverlässig, wenig vertrauenerweckend|0|i
心地よい|ここちよい|angenehm, behaglich|0|i
好き|すき|mögen, gern haben|5
大好き|だいすき|sehr mögen, lieben|5
上手|じょうず|geschickt, gut (in etwas)|5
静か|しずか|ruhig, still|5
親切|しんせつ|freundlich, hilfsbereit|4
便利|べんり|praktisch, bequem|5
大切|たいせつ|wichtig, wertvoll|5
大変|たいへん|anstrengend, schlimm; sehr|5
丁寧|ていねい|höflich, sorgfältig|4
必要|ひつよう|nötig; Notwendigkeit|4
危険|きけん|gefährlich; Gefahr|4
不思議|ふしぎ|seltsam, wunderlich|3
同じ|おなじ|gleich, derselbe|5
急速|きゅうそく|rasch, schnell|3
満員|まんいん|voll besetzt, überfüllt|2
単なる|たんなる|bloß, nichts als|3
新た|あらた|neu, frisch|3
深刻|しんこく|ernst, schwerwiegend|3
健全|けんぜん|gesund, solide|1
無理|むり|unmöglich, unzumutbar|4
妥当|だとう|angemessen, vernünftig|2
不確か|ふたしか|ungewiss, unsicher|0
起きる|おきる|aufstehen; geschehen|5|1
寝る|ねる|schlafen, ins Bett gehen|5|1
食べる|たべる|essen|5|1
見る|みる|sehen, ansehen|5|1
出る|でる|hinausgehen, herauskommen|5|1
出かける|でかける|ausgehen, losgehen|5|1
教える|おしえる|lehren, beibringen; mitteilen|5|1
調べる|しらべる|nachschlagen, untersuchen|4|1
忘れる|わすれる|vergessen|5|1
降りる|おりる|aussteigen, hinuntergehen|5|1
開ける|あける|öffnen|5|1
入れる|いれる|hineintun; (Tee, Kaffee) zubereiten|5|1
始める|はじめる|anfangen (etwas)|4|1
決める|きめる|entscheiden, festlegen|4|1
考える|かんがえる|denken, überlegen|4|1
答える|こたえる|antworten|5|1
覚える|おぼえる|sich merken; empfinden|5|1
続ける|つづける|fortsetzen; weiter …|4|1
片付ける|かたづける|aufräumen|4|1
間違える|まちがえる|sich irren, verwechseln|4|1
慣れる|なれる|sich gewöhnen|4|1
疲れる|つかれる|müde werden|5|1
捨てる|すてる|wegwerfen|4|1
届ける|とどける|liefern, abgeben|4|1
育てる|そだてる|großziehen, anbauen|4|1
増える|ふえる|zunehmen|4|1
消える|きえる|verschwinden, ausgehen|5|1
落ちる|おちる|fallen, sinken|4|1
足りる|たりる|genügen, reichen|4|1
確かめる|たしかめる|überprüfen, sich vergewissern|3|1
訪ねる|たずねる|besuchen|4|1
慌てる|あわてる|in Panik geraten, sich überstürzen|2|1
感じる|かんじる|fühlen, empfinden|3|1
生まれる|うまれる|geboren werden, entstehen|5|1
生じる|しょうじる|entstehen, auftreten|3|1
与える|あたえる|geben, verursachen (Einfluss)|3|1
支える|ささえる|stützen, tragen|3|1
伝える|つたえる|mitteilen, weitergeben|4|1
求める|もとめる|verlangen, fordern, suchen|3|1
認める|みとめる|anerkennen, eingestehen|3|1
触れる|ふれる|berühren, in Berührung kommen|3|1
乱れる|みだれる|in Unordnung geraten|1|1
避ける|さける|vermeiden|3|1
込める|こめる|hineinlegen (Gefühl, Bedeutung)|3|1
通じる|つうじる|verstanden werden; führen zu|3|1
受け入れる|うけいれる|annehmen, akzeptieren|1|1
傾ける|かたむける|neigen; (耳を) genau zuhören|1|1
恐れる|おそれる|fürchten|3|1
捉える|とらえる|erfassen, begreifen|2|1
抱える|かかえる|im Arm halten; (Probleme) haben, mit sich tragen|3|1
重ねる|かさねる|aufeinanderlegen, wiederholen|2|1
見える|みえる|zu sehen sein; scheinen|4|1
切れる|きれる|(V-Stamm + 切れる) ganz … können; reißen, ausgehen|3|1
得る|える|bekommen, gewinnen; (V-Stamm + 得る) können|3|1
帰る|かえる|zurückkehren, nach Hause gehen|5|5
会う|あう|treffen|5|5
買う|かう|kaufen|5|5
売る|うる|verkaufen|5|5
言う|いう|sagen|5|5
聞く|きく|hören; fragen|5|5
話す|はなす|sprechen|5|5
読む|よむ|lesen|5|5
書く|かく|schreiben|5|5
飲む|のむ|trinken; (Medizin) einnehmen|5|5
休む|やすむ|sich ausruhen; fehlen, freinehmen|5|5
住む|すむ|wohnen|5|5
持つ|もつ|halten, haben, besitzen|5|5
待つ|まつ|warten|5|5
立つ|たつ|stehen, aufstehen; (役に 立つ) nützlich sein|5|5
乗る|のる|einsteigen, fahren mit|5|5
降る|ふる|fallen (Regen, Schnee)|5|5
歩く|あるく|zu Fuß gehen|5|5
働く|はたらく|arbeiten|5|5
作る|つくる|machen, herstellen, kochen|5|5
使う|つかう|benutzen|5|5
取る|とる|nehmen; (場所を) besetzen; (連絡を) aufnehmen; (疲れが 取れる) vergehen|5|5
入る|はいる|hineingehen, eintreten; enthalten sein|5|5
開く|あく|aufgehen, geöffnet sein|5|5
着く|つく|ankommen|5|5
出す|だす|herausholen, abgeben; (V-Stamm + 出す) heraus-, hervor-|5|5
分かる|わかる|verstehen, wissen|5|5
思う|おもう|denken, meinen|4|5
知る|しる|wissen, erfahren|5|5
呼ぶ|よぶ|rufen; nennen|5|5
咲く|さく|blühen|5|5
吹く|ふく|wehen, blasen|5|5
遊ぶ|あそぶ|spielen; sich vergnügen|5|5
終わる|おわる|enden, fertig sein|5|5
始まる|はじまる|anfangen, beginnen|5|5
困る|こまる|in Schwierigkeiten sein|5|5
送る|おくる|schicken; begleiten|4|5
払う|はらう|bezahlen|4|5
運ぶ|はこぶ|tragen, transportieren|4|5
手伝う|てつだう|helfen|4|5
助かる|たすかる|gerettet sein; eine Hilfe sein|2|5
残る|のこる|übrig bleiben|4|5
売れ残る|うれのこる|unverkauft übrig bleiben|0|5
余る|あまる|übrig sein|2|5
混む|こむ|voll sein, überfüllt sein|4|5
割る|わる|zerbrechen; teilen|3|5
散る|ちる|abfallen (Blüten), sich zerstreuen|2|5
引く|ひく|ziehen; (風邪を) sich erkälten|5|5
引っ越す|ひっこす|umziehen|4|5
見つかる|みつかる|gefunden werden|4|5
伺う|うかがう|besuchen; fragen (bescheiden)|4|5
炊く|たく|(Reis) kochen|2|5
謝る|あやまる|sich entschuldigen|4|5
譲る|ゆずる|überlassen, abtreten|3|5
表す|あらわす|ausdrücken, zeigen|3|5
違う|ちがう|anders sein; falsch sein|5|5
迷う|まよう|sich verirren; unschlüssig sein|3|5
眠る|ねむる|schlafen|4|5
頑張る|がんばる|sich anstrengen|3|5
笑う|わらう|lachen|4|5
落とす|おとす|fallen lassen, verlieren|4|5
驚く|おどろく|überrascht sein, staunen|4|5
減る|へる|abnehmen, weniger werden|3|5
変わる|かわる|sich ändern|4|5
代わる|かわる|ersetzen, an die Stelle treten|3|5
広がる|ひろがる|sich ausbreiten|3|5
高まる|たかまる|steigen, sich verstärken|1|5
続く|つづく|andauern, sich fortsetzen|4|5
下がる|さがる|sinken, fallen|4|5
下す|くだす|(Urteil, Entscheidung) fällen|1|5
過ごす|すごす|(Zeit) verbringen|3|5
済む|すむ|erledigt sein; (ずに 済む) nicht … müssen|4|5
向く|むく|sich wenden nach; geeignet sein|3|5
育つ|そだつ|aufwachsen, sich entwickeln|3|5
生む,産む|うむ|gebären; hervorbringen|3|5
苦しむ|くるしむ|leiden|3|5
異なる|ことなる|sich unterscheiden|3|5
直す|なおす|reparieren, korrigieren, umstellen|4|5
伴う|ともなう|begleiten, einhergehen mit|1|5
映す|うつす|spiegeln, projizieren|2|5
失う|うしなう|verlieren|3|5
削る|けずる|kürzen; abschaben|2|5
気づく|きづく|bemerken|3|5
越す|こす|überschreiten; (に 越した ことは ない) am besten ist|3|5
限る|かぎる|begrenzen; (と は 限らない) nicht unbedingt|3|5
通す|とおす|durchlassen; (を 通して) durch, über; (V-Stamm + 通す) bis zum Ende …|3|5
関わる|かかわる|betreffen, zu tun haben mit|2|5
当たる|あたる|treffen; (に は 当たらない) kein Grund zu|3|5
載る|のる|(in Zeitung, Buch) stehen, erscheinen|2|5
至る|いたる|gelangen zu, führen zu|3|5
果たす|はたす|erfüllen, vollbringen|1|5
流す|ながす|fließen lassen, wegspülen; (流される) mitgerissen werden|3|5
記す|しるす|aufschreiben, festhalten|1|5
付き合う|つきあう|Umgang haben mit; begleiten|3|5
繰り返す|くりかえす|wiederholen|3|5
問う|とう|fragen, hinterfragen|1|5
くみ取る|くみとる|(Gefühle) erfassen, nachempfinden; schöpfen|0|5
進む|すすむ|vorankommen, fortschreiten|4|5
察する;察し|さっする|erspüren, erahnen|1
指す|さす|zeigen auf, bezeichnen|3|5
合う|あう|passen; (V-Stamm + 合う) einander, gegenseitig|4|5
壊す|こわす|kaputt machen, zerstören|4|5
黙る|だまる|schweigen|3|5
招く|まねく|einladen; herbeiführen|3|5
成り立つ|なりたつ|zustande kommen, bestehen|1|5
成す|なす|bilden, ausmachen|2|5
傷む|いたむ|beschädigt werden, verfallen, verderben|2|5
任す|まかす|überlassen, anvertrauen|1|5
損なう|そこなう|schädigen, beeinträchtigen|1|5
移る|うつる|umziehen, übergehen|4|5
貸す|かす|verleihen, vermieten|5|5
戻る|もどる|zurückkehren|4|5
歩む|あゆむ|gehen, schreiten (歩み寄る = aufeinander zugehen)|1|5
寄る|よる|sich nähern; vorbeischauen|4|5
語る|かたる|erzählen, sprechen über|3|5
暮らす|くらす|leben, seinen Alltag verbringen|3|5
覆す|くつがえす|umstürzen, umstoßen|1|5
飛びつく|とびつく|sich stürzen auf, anspringen|0|5
二階|にかい|erster Stock, Obergeschoss|5
広い|ひろい|weit, geräumig|5|i
明るい|あかるい|hell; fröhlich|5|i
窓|まど|Fenster|5
机|つくえ|Schreibtisch|5
ノート||Heft|5
ベッド||Bett|5
横|よこ|Seite, neben; quer|5
本棚|ほんだな|Bücherregal|5
壁|かべ|Wand|4
ゆき||Yuki (Vorname)|x
プレゼント||Geschenk|4
ケーキ||Kuchen|5
歌|うた|Lied|5
歌う|うたう|singen|5|5
月曜日|げつようび|Montag|5
木曜日|もくようび|Donnerstag|5
授業|じゅぎょう|Unterricht|5
九|く|neun|5
田中|たなか|Tanaka (Familienname)|x
優しい|やさしい|freundlich, sanft|4|i
クラス||Klasse|5
十|じゅう|zehn|5
十|じゅっ|zehn (vor manchen Zählwörtern)|5
海|うみ|Meer|5
車|くるま|Auto|5
弟|おとうと|(mein) jüngerer Bruder|5
泳ぐ|およぐ|schwimmen|5|5
魚|さかな|Fisch|5
釣る|つる|angeln|3|5
おいしい||lecker|5|i
座る|すわる|sitzen, sich setzen|5|5
おばあさん||Großmutter; alte Frau|5
そう||(Stamm + そう) sieht aus wie; so|4
高校生|こうこうせい|Oberschüler(in)|4
嬉しい|うれしい|froh, glücklich|4|i
では||(では ない / では ありません) nicht sein; in, bei|5
教室|きょうしつ|Klassenzimmer; Kurs|5
通う|かよう|regelmäßig hingehen, pendeln|4|5
毎週|まいしゅう|jede Woche|5
習う|ならう|lernen (bei jemandem)|5|5
簡単|かんたん|einfach, leicht|4
もっと||mehr, noch mehr|5
切る|きる|schneiden|5|5
カレー||Curry|5
卵焼き|たまごやき|japanisches Omelett|0
よう||Art, Weise; (よう に) damit, sodass; (よう な) wie|4
夏|なつ|Sommer|5
富士山|ふじさん|Fuji (Berg)|x
登る|のぼる|besteigen, hinaufsteigen|5|5
山|やま|Berg|5
途中|とちゅう|unterwegs, mittendrin|4
山小屋|やまごや|Berghütte|0
足|あし|Bein, Fuß|5
五|ご|fünf|5
ごろ||gegen, ungefähr um|5
頂上|ちょうじょう|Gipfel|2
日の出|ひので|Sonnenaufgang|2
美しい|うつくしい|schön|4|i
所|ところ|Ort, Stelle|5
借りる|かりる|ausleihen, sich borgen|5|1
一度|いちど|einmal|4
以内|いない|innerhalb von|4
返す|かえす|zurückgeben|5|5
新聞|しんぶん|Zeitung|5
ただし||allerdings, jedoch|3
館内|かんない|im Gebäude|0
絵|え|Bild|5
秋|あき|Herbst|5
冬|ふゆ|Winter|5
四つ|よっつ|vier (Stück)|5
季節|きせつ|Jahreszeit|4
それぞれ||jeweils, jede(r) für sich|3
花見|はなみ|Kirschblütenschau|4
蒸し暑い|むしあつい|schwül|3|i
花火|はなび|Feuerwerk|3
祭り|まつり|Fest|4
楽しむ|たのしむ|genießen|4|5
行事|ぎょうじ|Veranstaltung, Brauch|3
涼しい|すずしい|kühl|5|i
葉|は|Blatt|4
赤|あか|Rot|5
黄色|きいろ|Gelb|5
食欲|しょくよく|Appetit|3
北|きた|Norden|5
スキー||Ski, Skifahren|4
服|ふく|Kleidung|5
挨拶|あいさつ|Gruß|4
手紙|てがみ|Brief|5
初め|はじめ|Anfang|5
一つ|ひとつ|eins, ein Stück|5
一部|いちぶ|ein Teil|3
風呂|ふろ|Bad|5
銭湯|せんとう|öffentliches Badehaus|1
近所|きんじょ|Nachbarschaft|4
魅力|みりょく|Reiz, Anziehungskraft|2
湯船|ゆぶね|Badebecken, Badewanne|0
伸ばす|のばす|strecken, verlängern|3|5
熱い|あつい|heiß (Dinge)|5|i
湯|ゆ|heißes Wasser|4
一日|いちにち|ein Tag|5
それに||außerdem|4
自然|しぜん|Natur; natürlich, von selbst|3
おじいさん||Großvater; alter Mann|5
様子|ようす|Zustand, Aussehen|3
残念|ざんねん|schade, bedauerlich|4
旅行者|りょこうしゃ|Reisende(r)|0
人気|にんき|Beliebtheit|3
いう||sagen; (と いう) namens, so genannt; heißt es|5|5
こう||so, auf diese Weise|4
外国語|がいこくご|Fremdsprache|4
文法|ぶんぽう|Grammatik|4
周り|まわり|Umgebung, um … herum|3
本物|ほんもの|das Echte|3
ドラマ||Fernsehserie, Drama|3
易しい|やさしい|leicht, einfach|5|i
部分|ぶぶん|Teil|3
出会う|であう|begegnen|3|5
村|むら|Dorf|4
茂平|もへい|Mohei (Name)|x
むかし||früher, in alter Zeit (昔)|4
ちかく||Nähe (近く)|5
中山|なかやま|Nakayama (Ortsname)|x
城|しろ|Burg|2
おとのさま||Fürst, Landesherr (お殿様)|0
おる||da sein (bescheiden); (て おる) = て いる; (おられる) respektvoll|3|5
はなれる||entfernt sein, sich entfernen (離れる)|3|1
狐|きつね|Fuchs|1
狐|ぎつね|Fuchs (in Zusammensetzungen)|1
ぼっち||(一人 ぼっち) ganz allein|0
小狐|こぎつね|kleiner Fuchs|0
一ぱい|いっぱい|voll, in Menge (一杯)|4
森|もり|Wald|4
穴|あな|Loch, Bau|3
ほる||graben (掘る)|3|5
昼|ひる|Tag, Mittag|5
あたり||Umgebung, Gegend (辺り)|3
或|ある|ein gewisser, irgendein (heute meist ある)|0
ふりつづく||ununterbrochen regnen (降り続く)|3|5
あがる||aufhören (Regen); hinaufgehen (上がる)|4|5
ほっと||erleichtert|3
はい出る|はいでる|herauskriechen (這い出る)|0|1
空|そら|Himmel|5
からっと||strahlend klar, trocken (Wetter)|0
晴れる|はれる|sich aufklären, heiter sein|5|1
百舌鳥|もず|Würger (Vogel)|0
きんきん||hell, schrill (Klang)|0
ひびく||hallen, schallen (響く)|2|5
近年|きんねん|in den letzten Jahren|1
訪れる|おとずれる|besuchen|2|1
観光客|かんこうきゃく|Tourist(in)|0
観光|かんこう|Tourismus, Sightseeing|3
経済|けいざい|Wirtschaft|4
大きな|おおきな|groß|4
収入|しゅうにゅう|Einkommen, Einnahmen|3
有名|ゆうめい|berühmt|5
観光地|かんこうち|Touristenort|0
バス||Bus|5
混雑|こんざつ|Gedränge, Überfüllung|3
利用|りよう|Nutzung|4
ごみ||Müll|4
騒音|そうおん|Lärm|2
悩ます|なやます|plagen, zu schaffen machen|1|5
公害|こうがい|Umweltbelastung|2
対策|たいさく|Gegenmaßnahme|2
制限|せいげん|Beschränkung|3
入場料|にゅうじょうりょう|Eintrittsgeld|0
紹介|しょうかい|Vorstellung|4
分散|ぶんさん|Verteilung, Streuung|1
単に|たんに|bloß, einfach|2
増やす|ふやす|vermehren|3|5
側|がわ|Seite|3
迎える|むかえる|empfangen, abholen|4|1
両方|りょうほう|beide|4
満足|まんぞく|Zufriedenheit|3
形|かたち|Form|4
探す|さがす|suchen|4|5
試験|しけん|Prüfung|4
晩|ばん|Abend|5
徹夜|てつや|die Nacht durchmachen|2
経験|けいけん|Erfahrung|4
数日|すうじつ|einige Tage|0
脳|のう|Gehirn|2
情報|じょうほう|Information|3
重要|じゅうよう|wichtig|3
空ける|あける|frei machen; (時間を) Abstand lassen|3|1
記憶|きおく|Gedächtnis, Erinnerung|3
分ける|わける|teilen, aufteilen|3|1
復習|ふくしゅう|Wiederholung|4
効果的|こうかてき|wirksam|2
思い出す|おもいだす|sich erinnern|4|5
強い|つよい|stark|5|i
深い|ふかい|tief|4|i
関係|かんけい|Beziehung, Zusammenhang|4
整理|せいり|Ordnen|3
二重|にじゅう|doppelt|2
損|そん|Verlust, Nachteil|3
一年|いちねん|ein Jahr|5
贈り物|おくりもの|Geschenk|4
お中元|おちゅうげん|Sommergabe (Geschenk zur Jahresmitte)|1
お歳暮|おせいぼ|Geschenk zum Jahresende|1
世話|せわ|Fürsorge; (世話に なる) jemandem etwas verdanken|4
習慣|しゅうかん|Gewohnheit, Brauch|4
職場|しょくば|Arbeitsplatz|2
お土産|おみやげ|Mitbringsel|5
普通|ふつう|normal, üblich|4
興味深い|きょうみぶかい|interessant|2|i
お返し|おかえし|Gegengabe|0
半分|はんぶん|Hälfte|5
程度|ていど|Grad, Ausmaß|3
値段|ねだん|Preis|4
ちょうど||genau, gerade|5
贈る|おくる|schenken|4|5
負担|ふたん|Last, Belastung|2
渡す|わたす|übergeben|5|5
つまらない||langweilig; belanglos|5|i
面倒|めんどう|lästig, mühsam|3
言語|げんご|Sprache|2
別|べつ|anders, ein anderer|4
置き換える|おきかえる|ersetzen, übertragen|1|1
実際|じっさい|tatsächlich; Wirklichkeit|3
携わる|たずさわる|sich befassen mit|1|5
単純|たんじゅん|einfach, schlicht|3
理解|りかい|Verständnis|3
思い知る|おもいしる|einsehen, deutlich zu spüren bekommen|0|5
価値観|かちかん|Wertvorstellungen|1
背負う|せおう|auf dem Rücken tragen; mit sich tragen|2|5
対|たい|zu, gegen (Verhältnis)|3
対応|たいおう|Entsprechung; Reaktion|2
語|ご|Wort; Sprache|3
例外|れいがい|Ausnahme|2
属する;属し,属さ,属せ|ぞくする|gehören zu|2
たとえば||zum Beispiel|4
お願い|おねがい|Bitte; (お願い します) ich bitte darum|5
一言|ひとこと|ein Wort, kurze Bemerkung|2
過不足|かふそく|Zuviel oder Zuwenig|0
他|た|andere(r, s)|3
移す|うつす|versetzen, übertragen|3|5
至難|しなん|äußerst schwierig|0
業|わざ|Kunst, Tat, Leistung|1
翻訳者|ほんやくしゃ|Übersetzer(in)|0
原文|げんぶん|Originaltext|1
忠実|ちゅうじつ|treu, getreu|1
訳文|やくぶん|Übersetzungstext|0
不自然|ふしぜん|unnatürlich|2
矛盾|むじゅん|Widerspruch|2
絶えず|たえず|ständig|2
直面|ちょくめん|Konfrontation, gegenüberstehen|1
かといって||aber deshalb … auch nicht; andererseits|1
優先|ゆうせん|Vorrang|2
異質|いしつ|andersartig, fremd|1
消し去る|けしさる|auslöschen|0|5
意義|いぎ|Sinn, Bedeutung|2
精度|せいど|Genauigkeit|1
飛躍的|ひやくてき|sprunghaft|1
向上|こうじょう|Verbesserung|2
不要|ふよう|unnötig|2
どの||welche(r, s)|5
選ぶ|えらぶ|wählen|4|5
あえて||bewusst, es wagen|1
訳す|やくす|übersetzen|3|5
残す|のこす|übrig lassen, zurücklassen|3|5
二つ|ふたつ|zwei (Stück)|5
橋|はし|Brücke|5
架ける|かける|(Brücke) schlagen|1|1
同時|どうじ|gleichzeitig|3
横たわる|よこたわる|liegen, sich erstrecken|1|5
溝|みぞ|Graben, Kluft|1
示す|しめす|zeigen|2|5
営み|いとなみ|Tätigkeit, Tun|1
大都市|だいとし|Großstadt|2
他者|たしゃ|der andere, andere Menschen|0
囲む|かこむ|umgeben|3|5
肩|かた|Schulter|3
寄せ合う|よせあう|aneinanderrücken|0|5
光景|こうけい|Anblick, Szene|2
象徴|しょうちょう|Symbol, Sinnbild|2
匿名性|とくめいせい|Anonymität|0
都市|とし|Stadt|3
顔見知り|かおみしり|Bekannte(r) vom Sehen|0
共同体|きょうどうたい|Gemeinschaft|1
息苦しい|いきぐるしい|beklemmend, erstickend|0|i
逃れる|のがれる|entkommen|1|1
べく||um zu (förmlich); (べく も ない) unmöglich|1
目指す|めざす|anstreben, zusteuern auf|2|5
干渉|かんしょう|Einmischung|1
表裏|ひょうり|Vorder- und Rückseite; (表裏 一体) zwei Seiten derselben Sache|0
一体|いったい|eine Einheit; überhaupt|3
とりわけ||vor allem, insbesondere|1
単身|たんしん|allein, alleinstehend|0
世帯|せたい|Haushalt|1
につれ,につれて||in dem Maße wie, mit zunehmendem …|3
看取る|みとる|(einen Sterbenden) bis zuletzt begleiten|0|5
亡くなる|なくなる|sterben|4|5
絶つ|たつ|abbrechen; (後を 絶たない) nicht abreißen|1|5
受ける|うける|erhalten; (を 受けて) angesichts|4|1
見守り|みまもり|Achtgeben, Obhut|0
取り組み|とりくみ|Bemühung, Maßnahme|1
とはいえ||obwohl, auch wenn; freilich|1
そのまま||so wie es ist, unverändert|3
復活|ふっかつ|Wiederbelebung|1
もはや||nicht mehr; schon|1
望む|のぞむ|wünschen, hoffen|3|5
過度|かど|übermäßig|1
縛る|しばる|binden, fesseln|2|5
孤立|こりつ|Isolation|1
緩やか|ゆるやか|locker, sanft|1
つながり||Verbindung, Verbundenheit|2
吾輩|わがはい|ich (altertümlich, selbstbewusst)|0
無い|ない|nicht vorhanden|5|i
生れる|うまれる|geboren werden (alte Schreibung von 生まれる)|4|1
とんと||ganz und gar (nicht)|0
見当|けんとう|Ahnung, Schätzung|2
薄暗い|うすぐらい|düster, dämmrig|2|i
じめじめ||feucht, klamm|1
ニャーニャー||miau, miau|0
泣く|なく|weinen; (Tier) schreien|4|5
事|こと|Sache, Angelegenheit|5
あと||später, danach|5
書生|しょせい|Student, der bei einer Familie wohnt und im Haus hilft (Meiji-Zeit)|0
獰悪|どうあく|grausam, wild|0
種族|しゅぞく|Stamm, Sorte|0
時々|ときどき|manchmal|5
我々|われわれ|wir|3
捕える|つかまえる|fangen (heute: 捕まえる)|4|1
煮る|にる|kochen|3|1
食う|くう|essen, fressen (derb)|1|5
当時|とうじ|damals|3
考|かんがえ|Gedanke (heute: 考え)|4
別段|べつだん|besonders (mit Verneinung)|0
恐しい|おそろしい|furchterregend (heute: 恐ろしい)|3|i
ただ||nur, bloß|4
彼|かれ|er|4
掌|てのひら|Handfläche|1
載せる|のせる|darauflegen, setzen|2|1
スー||(mit と) sacht, glatt|0
持ち上げる|もちあげる|hochheben|2|1
何だか|なんだか|irgendwie|3
フワフワ||schwebend, flauschig|0
中|ちゅう|unter, innerhalb von; während|4
いけない,いけません||nicht dürfen; nicht gut|5
なら||wenn (es um … geht), falls|4
さま||(Anrede, höflicher als さん)|4
ごん||Gon (Name des Fuchses)|x
しだ||Farn|0
しげる||dicht wachsen, wuchern (茂る)|1|5
いたずら||Streich, Unfug|3
しゃがむ||sich hinhocken, kauern|2|5
さらに||außerdem, noch mehr|3
よろしく||(よろしく お願い します) ich bitte um Ihr Wohlwollen|5
なくして||ohne (なくして は … ない)|1
感じ|かんじ|Gefühl, Eindruck|3
`);
