/* Standard-Deck: 5999 Wörter mit Beispielsatz, nach Häufigkeit geordnet.
   Wortliste (Wort, Lesung, Wortart, Reihenfolge): nach den verbreiteten „Core 2000/6000“-Listen. Die deutschen Bedeutungen sind maschinell erstellt und nicht gegengelesen.
   Beispielsätze: 5398 stammen aus dem Tatoeba-Projekt (tatoeba.org, Lizenz CC BY 2.0 FR; einzelne CC0), 601 sind für diese App geschrieben.
   Von den Tatoeba-Sätzen haben 4445 auch ihre deutsche Übersetzung von Tatoeba; die übrigen 953 und die eigenen Sätze sind für diese App übersetzt.
   Die Sätze der ersten 300 Karten sind von Hand so geschrieben, dass sie fast nur schon gelernte Wörter enthalten.
   Satznummern und Verfasser stehen in www/tatoeba-quellen.txt. Die Furigana sind automatisch erzeugt (UniDic, geprüft mit JMdict und dem Tatoeba-Wortindex).
   Format je Zeile: Wort|Lesung (Furigana als 漢字[かな])|Bedeutung|Beispielsatz|Übersetzung|Wortart */
const CORE_RAW = `それ|それ|das (da)|それです。|Das ist es.|Pronomen
一つ|一[ひと]つ|eins, ein Stück|それは 一[ひと]つです。|Das ist ein Stück.|Nomen
一|一[いち]|eins|それは 一[いち]です。|Das ist eine Eins.|Nomen
二|二[に]|zwei|一[いち]、 二[に]。|Eins, zwei.|Nomen
二つ|二[ふた]つ|zwei (Stück)|それを 二[ふた]つください。|Zwei davon, bitte.|Nomen
三|三[さん]|drei|一[いち]、 二[に]、 三[さん]。|Eins, zwei, drei.|Nomen
三つ|三[みっ]つ|drei (Stück)|それは 三[みっ]つです。|Das sind drei Stück.|Nomen
四つ|四[よっ]つ|vier (Stück)|それを 四[よっ]つください。|Vier davon, bitte.|Nomen
四|四[し]・四[よん]|vier|二[に]、 三[さん]、 四[し]。|Zwei, drei, vier.|Nomen
これ|これ|dies (hier)|これは 一[ひと]つです。|Das hier ist ein Stück.|Nomen
四|四[よん]|vier|これは 四[よん]です。|Das hier ist eine Vier.|Nomen
五つ|五[いつ]つ|fünf (Stück)|これを 五[いつ]つください。|Fünf hiervon, bitte.|Nomen
五|五[ご]|fünf|三[さん]、 四[し]、 五[ご]。|Drei, vier, fünf.|Nomen
六つ|六[むっ]つ|sechs (Stück); sechs Jahre alt|それは 六[むっ]つです。|Das sind sechs Stück.|Nomen
六|六[ろく]|sechs|四[し]、 五[ご]、 六[ろく]。|Vier, fünf, sechs.|Nomen
七|七[なな]|sieben|五[ご]、 六[ろく]、 七[なな]。|Fünf, sechs, sieben.|Nomen
七つ|七[なな]つ|sieben (Stück); sieben Jahre alt|これは 七[なな]つです。|Das hier sind sieben Stück.|Nomen
八|八[はち]|acht|六[ろく]、 七[なな]、 八[はち]。|Sechs, sieben, acht.|Nomen
八つ|八[やっ]つ|acht (Stück)|これを 八[やっ]つください。|Acht hiervon, bitte.|Nomen
なる|なる|werden|二[ふた]つが 三[みっ]つになります。|Aus zwei Stück werden drei.|Verb
九|九[きゅう]|neun|七[なな]、 八[はち]、 九[きゅう]。|Sieben, acht, neun.|Nomen
九つ|九[ここの]つ|neun (Stück); neun Jahre alt|それは 九[ここの]つです。|Das sind neun Stück.|Nomen
十|十[じゅう]|zehn|八[はち]、 九[きゅう]、 十[じゅう]。|Acht, neun, zehn.|Nomen
百|百[ひゃく]|hundert|それは 百[ひゃく]です。|Das ist hundert.|Nomen
千|千[せん]|tausend|百[ひゃく]が 十[じゅう]で 千[せん]になります。|Zehnmal hundert ergibt tausend.|Nomen
万|万[まん]|zehntausend|千[せん]が 十[じゅう]で 一万[いちまん]になります。|Zehnmal tausend ergibt zehntausend.|Nomen
円|円[えん]|Kreis|これは 円[えん]です。|Das hier ist ein Kreis.|Nomen
円|円[えん]|Yen|これは 千円[せんえん]です。|Das hier kostet tausend Yen.|Nomen
時|時[とき]|Zeit|その 時[とき]、 十[じゅう]になりました。|Damals wurde ich zehn.|Nomen
する|する|tun, machen|これをします。|Ich mache das hier.|Verb
時々|時々[ときどき]|manchmal|時々[ときどき]それをします。|Manchmal mache ich das.|Adverb
日|日[にち]|Tag|十一日[じゅういちにち]です。|Es ist der Elfte.|Nomen
六日|六日[むいか]|sechs Tage; der 6. (des Monats)|それは 六日[むいか]です。|Das ist am Sechsten.|Nomen
三日|三日[みっか]|drei Tage; der 3. (des Monats)|三日[みっか]になります。|Es werden drei Tage.|Nomen
五日|五日[いつか]|fünf Tage; der 5. (des Monats)|五日[いつか]にします。|Ich nehme den Fünften.|Nomen
八日|八日[ようか]|acht Tage; der 8. (des Monats)|それは 八日[ようか]です。|Das ist am Achten.|Nomen
二十日|二十日[はつか]|zwanzig Tage; der 20. (des Monats)|二十日[はつか]になりました。|Es ist der Zwanzigste geworden.|Nomen
二日|二日[ふつか]|zwei Tage; der 2. (des Monats)|二日[ふつか]にします。|Ich nehme den Zweiten.|Nomen
九日|九日[ここのか]|neun Tage; der 9. (des Monats)|これは 九日[ここのか]です。|Das hier ist am Neunten.|Nomen
ところ|ところ|Ort, Stelle; bei jemandem|いいところです。|Das ist ein schöner Ort.|Nomen
一日|一日[ついたち]|der 1. (des Monats)|一日[ついたち]にします。|Ich nehme den Ersten.|Nomen
十日|十日[とおか]|zehn Tage; der 10. (des Monats)|十日[とおか]になりました。|Es sind zehn Tage geworden.|Nomen
七日|七日[なのか]|sieben Tage; der 7. (des Monats)|七日[なのか]です。|Es ist der Siebte.|Nomen
四日|四日[よっか]|vier Tage; der 4. (des Monats)|四日[よっか]にします。|Ich nehme den Vierten.|Nomen
月|月[つき]|Mond|それは 月[つき]です。|Das ist der Mond.|Nomen
水|水[みず]|Wasser|水[みず]をください。|Wasser, bitte.|Nomen
金|金[かね]|Geld|それは 金[かね]になります。|Das bringt Geld ein.|Nomen
日曜日|日曜日[にちようび]|Sonntag|日曜日[にちようび]にします。|Ich nehme den Sonntag.|Nomen
土曜日|土曜日[どようび]|Samstag|土曜日[どようび]は 二十日[はつか]です。|Samstag ist der Zwanzigste.|Nomen
やる|やる|tun, machen (umgangssprachlich)|それをやります。|Ich mache das.|Verb
金曜日|金曜日[きんようび]|Freitag|金曜日[きんようび]にやります。|Ich mache es am Freitag.|Nomen
月曜日|月曜日[げつようび]|Montag|月曜日[げつようび]は 六日[むいか]です。|Montag ist der Sechste.|Nomen
木曜日|木曜日[もくようび]|Donnerstag|木曜日[もくようび]にします。|Ich nehme den Donnerstag.|Nomen
曜日|曜日[ようび]|Wochentag|何曜日[なんようび]ですか。|Welcher Wochentag ist es?|Nomen
火曜日|火曜日[かようび]|Dienstag|火曜日[かようび]は 八日[ようか]です。|Dienstag ist der Achte.|Nomen
水曜日|水曜日[すいようび]|Mittwoch|水曜日[すいようび]にやります。|Ich mache es am Mittwoch.|Nomen
週|週[しゅう]|Woche|週[しゅう]に 三日[みっか]します。|Ich mache es drei Tage pro Woche.|Nomen
年|年[とし]|Jahr; Alter|年[とし]は 十九[じゅうきゅう]です。|Ich bin neunzehn Jahre alt.|Nomen
分かる|分[わ]かる|verstehen|それは 分[わ]かります。|Das verstehe ich.|Verb
そう|そう|so, auf diese Weise|そうです。|So ist es.|Adverb
何|何[なに]|was|何[なに]がありますか。|Was gibt es?|Nomen
先|先[さき]|voraus, zuerst; vorn|先[さき]にやります。|Ich mache es zuerst.|Nomen
今年|今年[ことし]|dieses Jahr|今年[ことし]、 十九[じゅうきゅう]になります。|Dieses Jahr werde ich neunzehn.|Nomen
今|今[いま]|jetzt|今[いま]、 何[なに]をしますか。|Was machst du jetzt?|Adverb
今日|今日[きょう]|heute|今日[きょう]は 月曜日[げつようび]です。|Heute ist Montag.|Nomen
今月|今月[こんげつ]|diesen Monat|今月[こんげつ]は 何[なに]をしますか。|Was machst du diesen Monat?|Nomen
今週|今週[こんしゅう]|diese Woche|今週[こんしゅう]、それをやります。|Diese Woche mache ich das.|Nomen
来る|来[く]る|kommen|日曜日[にちようび]に 来[き]ます。|Ich komme am Sonntag.|Verb
来年|来年[らいねん]|nächstes Jahr|来年[らいねん]、それをやります。|Nächstes Jahr mache ich das.|Nomen
もう|もう|schon; (nicht) mehr|もう 分[わ]かりました。|Ich habe es schon verstanden.|Adverb
行く|行[い]く|gehen, fahren|今日[きょう]、 行[い]きます。|Ich gehe heute.|Verb
帰る|帰[かえ]る|zurückkehren, nach Hause gehen|今[いま]、 帰[かえ]ります。|Ich gehe jetzt nach Hause.|Verb
大きい|大[おお]きい|groß|これは 大[おお]きいです。|Das hier ist groß.|Adjektiv
小さい|小[ちい]さい|klein|それは 小[ちい]さいです。|Das ist klein.|Adjektiv
少ない|少[すく]ない|wenig|水[みず]が 少[すく]ないです。|Es ist wenig Wasser da.|Adjektiv
少し|少[すこ]し|ein bisschen, ein wenig|少[すこ]し 分[わ]かります。|Ich verstehe ein bisschen.|Adverb
多い|多[おお]い|viel, zahlreich|水[みず]が 多[おお]いです。|Es ist viel Wasser da.|Adjektiv
多分|多分[たぶん]|wahrscheinlich, vielleicht|多分[たぶん]、 来[き]ます。|Wahrscheinlich kommt er.|Adverb
上げる|上[あ]げる|heben, hochlegen; erhöhen|これを 上[あ]げます。|Ich hebe das hier hoch.|Verb
よく|よく|oft|よく 来[き]ます。|Er kommt oft.|Adverb
上る|上[のぼ]る|hinaufgehen, hinaufsteigen|月[つき]が 上[のぼ]ります。|Der Mond geht auf.|Verb
上|上[うえ]|oben, über|上[うえ]に 行[い]きます。|Ich gehe nach oben.|Nomen
下|下[した]|unten, unter|下[した]に 水[みず]があります。|Unten ist Wasser.|Nomen
右|右[みぎ]|rechts|右[みぎ]に 行[い]きます。|Ich gehe nach rechts.|Nomen
左|左[ひだり]|links|それは 左[ひだり]です。|Das ist links.|Nomen
方|方[ほう]|Richtung, Seite|右[みぎ]の 方[ほう]に 行[い]きます。|Ich gehe in Richtung rechts.|Nomen
大人|大人[おとな]|Erwachsener|もう 大人[おとな]です。|Ich bin schon erwachsen.|Nomen
人|人[ひと]|Mensch, Person|人[ひと]が 多[おお]いです。|Es sind viele Leute da.|Nomen
一人|一人[ひとり]|eine Person; allein|一人[ひとり]で 行[い]きます。|Ich gehe allein.|Nomen
どう|どう|wie|これはどうですか。|Wie wäre es hiermit?|Adverb
入れる|入[い]れる|hineintun, hineinlegen|水[みず]を 入[い]れます。|Ich fülle Wasser ein.|Verb
入る|入[はい]る|hineingehen, eintreten|水[みず]に 入[はい]ります。|Ich gehe ins Wasser.|Verb
出る|出[で]る|hinausgehen, verlassen|月[つき]が 出[で]ました。|Der Mond ist aufgegangen.|Verb
出来る|出来[でき]る|können; fertig werden|一人[ひとり]で 出来[でき]ます。|Ich kann es allein.|Verb
出す|出[だ]す|herausnehmen, herausholen|金[かね]を 出[だ]します。|Ich gebe das Geld.|Verb
本|本[ほん]|Buch; Zählwort für lange Dinge|これは 本[ほん]です。|Das hier ist ein Buch.|Nomen
休む|休[やす]む|freinehmen, fehlen; sich ausruhen|今日[きょう]は 休[やす]みます。|Heute nehme ich frei.|Verb
体|体[からだ]|Körper; Gesundheit|体[からだ]が 大[おお]きいです。|Er ist groß gebaut.|Nomen
目|目[め]|Auge|目[め]が 大[おお]きいです。|Sie hat große Augen.|Nomen
どこ|どこ|wo|本[ほん]はどこですか。|Wo ist das Buch?|Nomen
口|口[くち]|Mund|口[くち]が 小[ちい]さいです。|Er hat einen kleinen Mund.|Nomen
耳|耳[みみ]|Ohr; Gehör|耳[みみ]が 大[おお]きいです。|Er hat große Ohren.|Nomen
上手|上手[じょうず]|geschickt, gut (in etwas)|上手[じょうず]になりました。|Du bist gut geworden.|な-Adjektiv
手|手[て]|Hand|手[て]が 小[ちい]さいです。|Sie hat kleine Hände.|Nomen
足|足[あし]|Bein, Fuß|足[あし]が 大[おお]きいです。|Er hat große Füße.|Nomen
空く|空[す]く|leer sein, frei sein|おなかが 空[す]きました。|Ich habe Hunger.|Verb
男|男[おとこ]|Mann|男[おとこ]の 人[ひと]が 来[き]ました。|Ein Mann ist gekommen.|Nomen
女|女[おんな]|Frau|女[おんな]の 人[ひと]が 多[おお]いです。|Es sind viele Frauen da.|Nomen
子供|子供[こども]|Kind|子供[こども]が 二人[ふたり]います。|Ich habe zwei Kinder.|Nomen
あげる|あげる|geben, schenken|子供[こども]に 本[ほん]をあげます。|Ich gebe dem Kind ein Buch.|Verb
好き|好[す]き|mögen, gern haben|本[ほん]が 好[す]きです。|Ich mag Bücher.|な-Adjektiv
大好き|大好[だいす]き|sehr mögen, lieben|子供[こども]が 大好[だいす]きです。|Ich mag Kinder sehr.|Adjektiv
私|私[わたし]|ich|私[わたし]は 大人[おとな]です。|Ich bin erwachsen.|Nomen
友達|友達[ともだち]|Freund(in)|友達[ともだち]が 来[き]ます。|Ein Freund kommt.|Nomen
家|家[うち]|Haus, Zuhause|友達[ともだち]が 家[うち]に 来[き]ます。|Ein Freund kommt zu mir nach Hause.|Nomen
気|気[き]|Geist, Gemüt, Stimmung|それが 気[き]になります。|Das beschäftigt mich.|Nomen
元気|元気[げんき]|gesund, munter|私[わたし]は 元気[げんき]です。|Mir geht es gut.|Adjektiv
天気|天気[てんき]|Wetter|今日[きょう]の 天気[てんき]はどうですか。|Wie ist das Wetter heute?|Nomen
晴れる|晴[は]れる|sich aufklären, sonnig werden|今日[きょう]は 晴[は]れます。|Heute wird es sonnig.|Verb
こう|こう|so, auf diese Art|こうします。|Ich mache es so.|Adverb
昨日|昨日[きのう]|gestern|昨日[きのう]、 友達[ともだち]が 来[き]ました。|Gestern ist ein Freund gekommen.|Nomen
開ける|開[あ]ける|öffnen, aufmachen|口[くち]を 開[あ]けます。|Ich mache den Mund auf.|Verb
開く|開[ひら]く|aufschlagen, öffnen; aufgehen|本[ほん]を 開[ひら]きます。|Ich schlage das Buch auf.|Verb
閉じる|閉[と]じる|schließen, zumachen (Buch, Augen)|目[め]を 閉[と]じます。|Ich schließe die Augen.|Verb
閉める|閉[し]める|schließen, zumachen (Tür, Fenster)|ドアを 閉[し]めます。|Ich schließe die Tür.|Verb
閉まる|閉[し]まる|geschlossen sein, zugehen|ドアが 閉[し]まります。|Die Tür schließt sich.|Verb
聞く|聞[き]く|hören; fragen|友達[ともだち]に 聞[き]きます。|Ich frage einen Freund.|Verb
時間|時間[じかん]|Zeit; Stunde|今日[きょう]は 時間[じかん]があります。|Heute habe ich Zeit.|Nomen
高い|高[たか]い|hoch; teuer|これは 高[たか]いです。|Das hier ist teuer.|Adjektiv
くれる|くれる|(mir) geben|友達[ともだち]が 本[ほん]をくれました。|Ein Freund hat mir ein Buch geschenkt.|Verb
安い|安[やす]い|billig, günstig|それは 安[やす]いです。|Das ist billig.|Adjektiv
低い|低[ひく]い|niedrig; klein (Körpergröße)|これは 低[ひく]いです。|Das hier ist niedrig.|Adjektiv
前|前[まえ]|vorn, vor; früher|家[いえ]の 前[まえ]に 人[ひと]がいます。|Vor dem Haus steht jemand.|Nomen
後|後[あと]|nach, danach|後[あと]で 行[い]きます。|Ich gehe später.|Adverb
後ろ|後[うし]ろ|hinten, hinter|私[わたし]の 後[うし]ろに 友達[ともだち]がいます。|Hinter mir ist ein Freund.|Nomen
午後|午後[ごご]|Nachmittag|午後[ごご]に 友達[ともだち]が 来[き]ます。|Am Nachmittag kommt ein Freund.|Nomen
午前|午前[ごぜん]|Vormittag|午前[ごぜん]は 家[いえ]にいます。|Vormittags bin ich zu Hause.|Nomen
朝|朝[あさ]|Morgen|朝[あさ]は 時間[じかん]がありません。|Morgens habe ich keine Zeit.|Nomen
昼|昼[ひる]|Mittag, Tag (tagsüber)|昼[ひる]に 帰[かえ]ります。|Ich komme mittags nach Hause.|Nomen
かなり|かなり|ziemlich|これはかなり 高[たか]いです。|Das hier ist ziemlich teuer.|Adverb
晩|晩[ばん]|Abend|晩[ばん]に 友達[ともだち]が 来[き]ます。|Am Abend kommt ein Freund.|Nomen
今晩|今晩[こんばん]|heute Abend|今晩[こんばん]は 家[いえ]にいます。|Heute Abend bin ich zu Hause.|Nomen
夜|夜[よる]|Nacht, Abend|夜[よる]、 家[いえ]に 帰[かえ]ります。|Nachts komme ich nach Hause.|Nomen
食べる|食[た]べる|essen|朝[あさ]、 何[なに]を 食[た]べますか。|Was isst du morgens?|Verb
飲む|飲[の]む|trinken|水[みず]を 飲[の]みます。|Ich trinke Wasser.|Verb
ご飯|ご 飯[はん]|gekochter Reis; Mahlzeit|ご 飯[はん]を 食[た]べます。|Ich esse Reis.|Nomen
買う|買[か]う|kaufen|本[ほん]を 買[か]います。|Ich kaufe ein Buch.|Verb
見る|見[み]る|sehen, ansehen|夜[よる]、 月[つき]を 見[み]ます。|Nachts schaue ich den Mond an.|Verb
見せる|見[み]せる|zeigen|友達[ともだち]に 本[ほん]を 見[み]せます。|Ich zeige einem Freund das Buch.|Verb
もっと|もっと|mehr, noch mehr|もっと 食[た]べます。|Ich esse mehr.|Adverb
見つける|見[み]つける|finden|安[やす]い 本[ほん]を 見[み]つけました。|Ich habe ein billiges Buch gefunden.|Verb
見える|見[み]える|zu sehen sein, sichtbar sein|月[つき]が 見[み]えます。|Man sieht den Mond.|Verb
見つかる|見[み]つかる|gefunden werden|本[ほん]が 見[み]つかりました。|Das Buch ist gefunden worden.|Verb
言う|言[い]う|sagen|友達[ともだち]がそう 言[い]いました。|Mein Freund hat das gesagt.|Verb
話す|話[はな]す|sprechen, erzählen|友達[ともだち]と 話[はな]します。|Ich spreche mit einem Freund.|Verb
読む|読[よ]む|lesen|夜[よる]、 本[ほん]を 読[よ]みます。|Abends lese ich ein Buch.|Verb
漢字|漢字[かんじ]|Kanji (chinesisches Schriftzeichen)|漢字[かんじ]を 読[よ]みます。|Ich lese Kanji.|Nomen
書く|書[か]く|schreiben|漢字[かんじ]を 書[か]きます。|Ich schreibe Kanji.|Verb
覚える|覚[おぼ]える|sich merken, lernen|漢字[かんじ]を 覚[おぼ]えます。|Ich merke mir Kanji.|Verb
そこ|そこ|dort, da|そこに 本[ほん]があります。|Dort liegt ein Buch.|Pronomen
会う|会[あ]う|treffen|午後[ごご]、 友達[ともだち]に 会[あ]います。|Am Nachmittag treffe ich einen Freund.|Verb
仕事|仕事[しごと]|Arbeit, Beruf|今日[きょう]は 仕事[しごと]があります。|Heute habe ich Arbeit.|Nomen
場合|場合[ばあい]|Fall, Situation|その 場合[ばあい]は 私[わたし]に 言[い]ってください。|Sagen Sie es mir in dem Fall bitte.|Nomen
車|車[くるま]|Auto|車[くるま]を 買[か]いました。|Ich habe ein Auto gekauft.|Nomen
電車|電車[でんしゃ]|Zug, Bahn|電車[でんしゃ]で 行[い]きます。|Ich fahre mit dem Zug.|Nomen
駅|駅[えき]|Bahnhof|駅[えき]で 友達[ともだち]に 会[あ]います。|Ich treffe einen Freund am Bahnhof.|Nomen
道|道[みち]|Straße, Weg|この 道[みち]を 行[い]きます。|Ich gehe diese Straße entlang.|Nomen
他|他[ほか]|andere(r, s)|他[ほか]の 本[ほん]を 見[み]せてください。|Zeigen Sie mir bitte ein anderes Buch.|Nomen
止める|止[や]める|aufhören, lassen|仕事[しごと]を 止[や]めます。|Ich höre mit der Arbeit auf.|Verb
ここ|ここ|hier|ここに 車[くるま]があります。|Hier steht ein Auto.|Pronomen
歩く|歩[ある]く|zu Fuß gehen, laufen|駅[えき]まで 歩[ある]きます。|Ich gehe zu Fuß zum Bahnhof.|Verb
走る|走[はし]る|rennen, laufen|子供[こども]が 走[はし]ります。|Das Kind rennt.|Verb
近く|近[ちか]く|in der Nähe|近[ちか]くに 駅[えき]があります。|In der Nähe ist ein Bahnhof.|Adverb
近い|近[ちか]い|nah|駅[えき]は 近[ちか]いです。|Der Bahnhof ist nah.|Adjektiv
近く|近[ちか]く|Nähe, Umgebung|駅[えき]の 近[ちか]くで 会[あ]います。|Wir treffen uns in der Nähe des Bahnhofs.|Nomen
遠い|遠[とお]い|weit, fern|駅[えき]は 遠[とお]いです。|Der Bahnhof ist weit weg.|Adjektiv
長い|長[なが]い|lang|この 道[みち]は 長[なが]いです。|Diese Straße ist lang.|Adjektiv
短い|短[みじか]い|kurz|この 本[ほん]は 短[みじか]いです。|Dieses Buch ist kurz.|Adjektiv
広い|広[ひろ]い|weit, geräumig|この 道[みち]は 広[ひろ]いです。|Diese Straße ist breit.|Adjektiv
もらう|もらう|bekommen|友達[ともだち]に 本[ほん]をもらいました。|Ich habe von einem Freund ein Buch bekommen.|Verb
全部|全部[ぜんぶ]|alles, ganz|全部[ぜんぶ] 食[た]べました。|Ich habe alles aufgegessen.|Adverb
国|国[くに]|Land|私[わたし]の 国[くに]は 小[ちい]さいです。|Mein Land ist klein.|Nomen
白い|白[しろ]い|weiß|白[しろ]い 車[くるま]を 買[か]いました。|Ich habe ein weißes Auto gekauft.|Adjektiv
赤い|赤[あか]い|rot|赤[あか]い 車[くるま]が 好[す]きです。|Ich mag rote Autos.|Adjektiv
部屋|部屋[へや]|Zimmer|私[わたし]の 部屋[へや]は 広[ひろ]いです。|Mein Zimmer ist groß.|Nomen
米|米[こめ]|Reis (ungekocht)|米[こめ]を 買[か]います。|Ich kaufe Reis.|Nomen
未だ|未[ま]だ|noch (nicht)|未[ま]だ 食[た]べていません。|Ich habe noch nicht gegessen.|Adverb
有る|有[あ]る|da sein, es gibt; haben|ここに 本[ほん]が 有[あ]ります。|Hier liegt ein Buch.|Verb
無い|無[な]い|nicht da sein, es gibt nicht|今日[きょう]は 時間[じかん]が 無[な]いです。|Heute habe ich keine Zeit.|Adjektiv
とても|とても|sehr|この 本[ほん]はとても 高[たか]いです。|Dieses Buch ist sehr teuer.|Adverb
作る|作[つく]る|machen, herstellen|ご 飯[はん]を 作[つく]ります。|Ich koche Essen.|Verb
使う|使[つか]う|benutzen|車[くるま]を 使[つか]います。|Ich benutze das Auto.|Verb
消す|消[け]す|ausmachen, löschen|書[か]いた 漢字[かんじ]を 消[け]します。|Ich radiere die geschriebenen Kanji aus.|Verb
売る|売[う]る|verkaufen|車[くるま]を 売[う]ります。|Ich verkaufe das Auto.|Verb
店|店[みせ]|Laden, Geschäft|この 店[みせ]は 安[やす]いです。|Dieser Laden ist billig.|Nomen
春|春[はる]|Frühling|もう 春[はる]です。|Es ist schon Frühling.|Nomen
夏|夏[なつ]|Sommer|今年[ことし]の 夏[なつ]は 長[なが]いです。|Der Sommer ist dieses Jahr lang.|Nomen
秋|秋[あき]|Herbst|秋[あき]が 好[す]きです。|Ich mag den Herbst.|Nomen
冬|冬[ふゆ]|Winter|冬[ふゆ]は 夜[よる]が 長[なが]いです。|Im Winter sind die Nächte lang.|Nomen
みんな|みんな|alle|みんなで 食[た]べます。|Wir essen alle zusammen.|Nomen
暑い|暑[あつ]い|heiß (Wetter, Luft)|今日[きょう]はとても 暑[あつ]いです。|Heute ist es sehr heiß.|Adjektiv
熱い|熱[あつ]い|heiß (Dinge, bei Berührung)|この 水[みず]は 熱[あつ]いです。|Dieses Wasser ist heiß.|Adjektiv
寒い|寒[さむ]い|kalt (Wetter, Luft)|冬[ふゆ]はとても 寒[さむ]いです。|Im Winter ist es sehr kalt.|Adjektiv
暖かい|暖[あたた]かい|warm|春[はる]は 暖[あたた]かいです。|Im Frühling ist es warm.|Adjektiv
新しい|新[あたら]しい|neu|新[あたら]しい 車[くるま]を 買[か]いました。|Ich habe ein neues Auto gekauft.|Adjektiv
古い|古[ふる]い|alt (Dinge)|この 店[みせ]は 古[ふる]いです。|Dieser Laden ist alt.|Adjektiv
良い|良[い]い|gut|今日[きょう]は 天気[てんき]が 良[い]いです。|Heute ist das Wetter gut.|Adjektiv
悪い|悪[わる]い|schlecht|今日[きょう]は 天気[てんき]が 悪[わる]いです。|Heute ist das Wetter schlecht.|Adjektiv
思う|思[おも]う|denken, meinen|私[わたし]もそう 思[おも]います。|Das denke ich auch.|Verb
いつも|いつも|immer|いつもここで 食[た]べます。|Ich esse immer hier.|Adverb
忘れる|忘[わす]れる|vergessen; liegen lassen|本[ほん]を 家[いえ]に 忘[わす]れました。|Ich habe das Buch zu Hause vergessen.|Verb
考える|考[かんが]える|nachdenken, überlegen|少[すこ]し 考[かんが]えます。|Ich denke kurz nach.|Verb
決める|決[き]める|entscheiden, festlegen|行[い]く 日[ひ]を 決[き]めます。|Ich lege den Tag fest, an dem ich gehe.|Verb
決まる|決[き]まる|entschieden werden, feststehen|行[い]く 日[ひ]が 決[き]まりました。|Der Tag, an dem ich gehe, steht fest.|Verb
知る|知[し]る|wissen, kennen|その 人[ひと]を 知[し]っています。|Ich kenne diese Person.|Verb
一番|一番[いちばん]|am meisten; Nummer eins|夏[なつ]が 一番[いちばん] 好[す]きです。|Den Sommer mag ich am liebsten.|Adverb
住む|住[す]む|wohnen|駅[えき]の 近[ちか]くに 住[す]んでいます。|Ich wohne in der Nähe des Bahnhofs.|Verb
名前|名前[なまえ]|Name|名前[なまえ]を 書[か]いてください。|Schreiben Sie bitte Ihren Namen.|Nomen
食べ物|食[た]べ 物[もの]|Essen, Lebensmittel|好[す]きな 食[た]べ 物[もの]は 何[なん]ですか。|Was ist dein Lieblingsessen?|Nomen
いつ|いつ|wann|いつ 来[き]ますか。|Wann kommst du?|Nomen
飲み物|飲[の]み 物[もの]|Getränk|飲[の]み 物[もの]を 買[か]います。|Ich kaufe ein Getränk.|Nomen
重い|重[おも]い|schwer|この 本[ほん]は 重[おも]いです。|Dieses Buch ist schwer.|Adjektiv
軽い|軽[かる]い|leicht (Gewicht)|この 車[くるま]は 軽[かる]いです。|Dieses Auto ist leicht.|Adjektiv
送る|送[おく]る|schicken, senden|友達[ともだち]に 本[ほん]を 送[おく]ります。|Ich schicke einem Freund ein Buch.|Verb
取る|取[と]る|nehmen, bekommen|その 本[ほん]を 取[と]ってください。|Reichen Sie mir bitte das Buch.|Verb
待つ|待[ま]つ|warten|駅[えき]で 友達[ともだち]を 待[ま]ちます。|Ich warte am Bahnhof auf einen Freund.|Verb
持つ|持[も]つ|haben, besitzen; halten|車[くるま]を 持[も]っています。|Ich besitze ein Auto.|Verb
気持ち|気持[きも]ち|Gefühl, Empfindung|友達[ともだち]の 気持[きも]ちが 分[わ]かります。|Ich verstehe die Gefühle meines Freundes.|Nomen
生きる|生[い]きる|leben|百[ひゃく] 年[ねん] 生[い]きる 人[ひと]もいます。|Manche Menschen leben hundert Jahre.|Verb
どちら|どちら|welche(r, s) (von zweien); wohin|どちらが 好[す]きですか。|Welches von beiden magst du lieber?|Nomen
先生|先生[せんせい]|Lehrer(in)|先生[せんせい]に 聞[き]きます。|Ich frage den Lehrer.|Nomen
大学|大学[だいがく]|Universität|大学[だいがく]に 行[い]きます。|Ich gehe zur Universität.|Nomen
学生|学生[がくせい]|Student(in), Schüler(in)|私[わたし]は 学生[がくせい]です。|Ich bin Student.|Nomen
大学生|大学生[だいがくせい]|Student(in) (an der Universität)|友達[ともだち]は 大学生[だいがくせい]です。|Mein Freund ist Student.|Nomen
学校|学校[がっこう]|Schule|学校[がっこう]は 駅[えき]の 近[ちか]くにあります。|Die Schule liegt in der Nähe des Bahnhofs.|Nomen
高校生|高校生[こうこうせい]|Oberschüler(in)|私[わたし]は 高校生[こうこうせい]です。|Ich bin Oberschüler.|Nomen
教える|教[おし]える|unterrichten, beibringen; mitteilen|先生[せんせい]が 漢字[かんじ]を 教[おし]えます。|Der Lehrer bringt uns Kanji bei.|Verb
勉強|勉強[べんきょう]|Lernen, Studium|夜[よる]、 家[いえ]で 勉強[べんきょう]します。|Abends lerne ich zu Hause.|Nomen (mit する)
強い|強[つよ]い|stark|その 人[ひと]は 体[からだ]が 強[つよ]いです。|Diese Person ist körperlich stark.|Adjektiv
どれ|どれ|welche(r, s)|先生[せんせい]の 本[ほん]はどれですか。|Welches ist das Buch des Lehrers?|Nomen
弱い|弱[よわ]い|schwach|私[わたし]は 体[からだ]が 弱[よわ]いです。|Ich bin körperlich schwach.|Adjektiv
引く|引[ひ]く|ziehen|子供[こども]の 手[て]を 引[ひ]いて 歩[ある]きます。|Ich führe das Kind an der Hand.|Verb
質問|質問[しつもん]|Frage|先生[せんせい]に 質問[しつもん]があります。|Ich habe eine Frage an den Lehrer.|Nomen (mit する)
難しい|難[むずか]しい|schwierig|漢字[かんじ]は 難[むずか]しいです。|Kanji sind schwierig.|Adjektiv
数|数[かず]|Zahl, Anzahl|人[ひと]の 数[かず]が 多[おお]いです。|Die Zahl der Leute ist groß.|Nomen
勝つ|勝[か]つ|gewinnen|昨日[きのう]、 友達[ともだち]に 勝[か]ちました。|Gestern habe ich gegen meinen Freund gewonnen.|Verb
負ける|負[ま]ける|verlieren|今日[きょう]は 友達[ともだち]に 負[ま]けました。|Heute habe ich gegen meinen Freund verloren.|Verb
本当に|本当[ほんとう]に|wirklich|この 本[ほん]は 本当[ほんとう]に 良[い]いです。|Dieses Buch ist wirklich gut.|Adverb
要る|要[い]る|brauchen, nötig sein|新[あたら]しい 本[ほん]が 要[い]ります。|Ich brauche ein neues Buch.|Verb
ドア|ドア|Tür|ドアを 開[あ]けてください。|Öffnen Sie bitte die Tür.|Nomen
時計|時計[とけい]|Uhr|新[あたら]しい 時計[とけい]を 買[か]いました。|Ich habe eine neue Uhr gekauft.|Nomen
払う|払[はら]う|bezahlen|店[みせ]で 金[かね]を 払[はら]います。|Ich bezahle im Laden.|Verb
切る|切[き]る|schneiden|食[た]べ 物[もの]を 小[ちい]さく 切[き]ります。|Ich schneide das Essen klein.|Verb
変える|変[か]える|ändern|行[い]く 日[ひ]を 変[か]えます。|Ich ändere den Tag, an dem ich gehe.|Verb
乗る|乗[の]る|einsteigen, fahren mit|駅[えき]で 電車[でんしゃ]に 乗[の]ります。|Am Bahnhof steige ich in den Zug.|Verb
着る|着[き]る|anziehen, tragen|新[あたら]しい 服[ふく]を 着[き]ます。|Ich ziehe neue Kleidung an.|Verb
立つ|立[た]つ|stehen, aufstehen|ドアの 前[まえ]に 立[た]ちます。|Ich stelle mich vor die Tür.|Verb
座る|座[すわ]る|sitzen, sich setzen|ここに 座[すわ]ってください。|Setzen Sie sich bitte hierher.|Verb
次|次[つぎ]|nächste(r, s)|次[つぎ]の 電車[でんしゃ]に 乗[の]ります。|Ich nehme den nächsten Zug.|Nomen
しゃべる|しゃべる|plaudern, reden|友達[ともだち]と 電車[でんしゃ]でしゃべります。|Ich plaudere im Zug mit einem Freund.|Verb
動く|動[うご]く|sich bewegen|車[くるま]が 動[うご]きません。|Das Auto bewegt sich nicht.|Verb
働く|働[はたら]く|arbeiten|私[わたし]は 店[みせ]で 働[はたら]いています。|Ich arbeite in einem Laden.|Verb
早い|早[はや]い|früh|今日[きょう]は 早[はや]く 帰[かえ]ります。|Heute gehe ich früh nach Hause.|Adjektiv
速い|速[はや]い|schnell|この 電車[でんしゃ]は 速[はや]いです。|Dieser Zug ist schnell.|Adjektiv
遅い|遅[おそ]い|langsam; spät|私[わたし]は 歩[ある]くのが 遅[おそ]いです。|Ich gehe langsam.|Adjektiv
始める|始[はじ]める|beginnen, anfangen (etwas)|勉強[べんきょう]を 始[はじ]めます。|Ich fange mit dem Lernen an.|Verb
始まる|始[はじ]まる|beginnen, anfangen|学校[がっこう]は 八[はち] 時[じ]に 始[はじ]まります。|Die Schule beginnt um acht Uhr.|Verb
終わる|終[お]わる|enden, fertig sein|仕事[しごと]が 終[お]わりました。|Die Arbeit ist zu Ende.|Verb
終わり|終[お]わり|Ende, Schluss|今日[きょう]の 仕事[しごと]は 終[お]わりです。|Für heute ist die Arbeit zu Ende.|Nomen
テーブル|テーブル|Tisch|テーブルの 上[うえ]に 本[ほん]があります。|Auf dem Tisch liegt ein Buch.|Nomen
去年|去年[きょねん]|letztes Jahr|去年[きょねん]、 車[くるま]を 買[か]いました。|Letztes Jahr habe ich ein Auto gekauft.|Nomen
紙|紙[かみ]|Papier|紙[かみ]に 名前[なまえ]を 書[か]きます。|Ich schreibe meinen Namen auf Papier.|Nomen
楽しむ|楽[たの]しむ|genießen|休[やす]みの 日[ひ]を 楽[たの]しみます。|Ich genieße den freien Tag.|Verb
楽しい|楽[たの]しい|vergnüglich, lustig|学校[がっこう]は 楽[たの]しいです。|Die Schule macht Spaß.|Adjektiv
歌う|歌[うた]う|singen|みんなで 歌[うた]います。|Wir singen alle zusammen.|Verb
欲しい|欲[ほ]しい|haben wollen|新[あたら]しい 時計[とけい]が 欲[ほ]しいです。|Ich möchte eine neue Uhr haben.|Adjektiv
色|色[いろ]|Farbe|好[す]きな 色[いろ]は 何[なん]ですか。|Was ist deine Lieblingsfarbe?|Nomen
茶色|茶色[ちゃいろ]|braun|茶色[ちゃいろ]の 車[くるま]を 買[か]いました。|Ich habe ein braunes Auto gekauft.|Nomen
直ぐ|直[す]ぐ|sofort, gleich|直[す]ぐ 行[い]きます。|Ich komme sofort.|Adverb
ゲーム|ゲーム|Spiel|友達[ともだち]とゲームをします。|Ich spiele mit einem Freund ein Spiel.|Nomen
書き直す|書[か]き 直[なお]す|neu schreiben, umschreiben|名前[なまえ]を 書[か]き 直[なお]します。|Ich schreibe den Namen neu.|Verb
直る|直[なお]る|repariert werden, wieder in Ordnung kommen|時計[とけい]が 直[なお]りました。|Die Uhr ist wieder in Ordnung.|Verb
線|線[せん]|Linie|紙[かみ]に 線[せん]を 引[ひ]きます。|Ich ziehe eine Linie auf dem Papier.|Nomen
曲がる|曲[ま]がる|abbiegen; sich biegen|次[つぎ]の 道[みち]を 右[みぎ]に 曲[ま]がります。|An der nächsten Straße biege ich rechts ab.|Verb
同じ|同[おな]じ|gleich, derselbe|友達[ともだち]と 同[おな]じ 本[ほん]を 買[か]いました。|Ich habe dasselbe Buch gekauft wie mein Freund.|な-Adjektiv
違う|違[ちが]う|anders sein; falsch sein|それは 違[ちが]います。|Das stimmt nicht.|Verb
図書館|図書館[としょかん]|Bibliothek|図書館[としょかん]で 本[ほん]を 読[よ]みます。|Ich lese in der Bibliothek ein Buch.|Nomen
泊まる|泊[と]まる|übernachten|友達[ともだち]の 家[いえ]に 泊[と]まります。|Ich übernachte bei einem Freund.|Verb
遊ぶ|遊[あそ]ぶ|spielen, sich vergnügen|子供[こども]が 友達[ともだち]と 遊[あそ]びます。|Das Kind spielt mit Freunden.|Verb
どうして|どうして|warum|どうして 来[き]ませんでしたか。|Warum bist du nicht gekommen?|Adverb
服|服[ふく]|Kleidung|新[あたら]しい 服[ふく]を 買[か]いました。|Ich habe neue Kleidung gekauft.|Nomen
お父さん|お 父[とう]さん|Vater|お 父[とう]さんは 元気[げんき]ですか。|Geht es deinem Vater gut?|Nomen
父|父[ちち]|(mein) Vater|父[ちち]は 車[くるま]が 好[す]きです。|Mein Vater mag Autos.|Nomen
お母さん|お 母[かあ]さん|Mutter|お 母[かあ]さんは 家[いえ]にいますか。|Ist deine Mutter zu Hause?|Nomen
母|母[はは]|(meine) Mutter|母[はは]は 店[みせ]で 働[はたら]いています。|Meine Mutter arbeitet in einem Laden.|Nomen
親|親[おや]|Eltern, Elternteil|親[おや]と 住[す]んでいます。|Ich wohne bei meinen Eltern.|Nomen
姉|姉[あね]|(meine) ältere Schwester|姉[あね]は 大学生[だいがくせい]です。|Meine ältere Schwester ist Studentin.|Nomen
お姉さん|お 姉[ねえ]さん|ältere Schwester|お 姉[ねえ]さんは 元気[げんき]ですか。|Geht es deiner älteren Schwester gut?|Nomen
妹|妹[いもうと]|jüngere Schwester|妹[いもうと]は 高校生[こうこうせい]です。|Meine jüngere Schwester ist Oberschülerin.|Nomen
おなか|おなか|Bauch, Magen|ご 飯[はん]を 食[た]べて、おなかが 大[おお]きくなりました。|Nach dem Essen ist mein Bauch dick geworden.|Nomen
兄|兄[あに]|(mein) älterer Bruder|彼[かれ]は 兄[あに]よりも 速[はや]く 走[はし]った。|Er lief schneller als sein Bruder.|Nomen
お兄さん|お 兄[にい]さん|älterer Bruder|お 兄[にい]さんの 背[せ]ってどれぐらいなの？|Wie groß ist dein Bruder?|Nomen
弟|弟[おとうと]|jüngerer Bruder|弟[おとうと]は 私[わたし]より 背[せ]が 高[たか]い。|Mein jüngerer Bruder ist größer als ich.|Nomen
娘|娘[むすめ]|Tochter; Mädchen|彼女[かのじょ]の 娘[むすめ]、 料理[りょうり]が 下手[へた]なんだ。|Ihre Tochter kann nicht kochen.|Nomen
息子|息子[むすこ]|Sohn|息子[むすこ]が 私[わたし]の 部屋[へや]へ 来[き]た。|Mein Sohn kam in mein Zimmer.|Nomen
若い|若[わか]い|jung|彼[かれ]らは 若[わか]くして 結婚[けっこん]した。|Sie haben geheiratet, als sie jung waren.|Adjektiv
彼女|彼女[かのじょ]|sie; feste Freundin|僕[ぼく]の 彼女[かのじょ]になって 欲[ほ]しい。|Ich möchte, dass du meine Freundin wirst.|Pronomen
彼|彼[かれ]|er; fester Freund|彼女[かのじょ]は 彼[かれ]より 三歳[さんさい] 年上[としうえ]です。|Sie ist drei Jahre älter als er.|Nomen
結婚|結婚[けっこん]|Heirat, Ehe|愛[あい]すればこそ 彼女[かのじょ]と 結婚[けっこん]したかった。|Eben weil ich sie liebte, wollte ich sie heiraten.|Nomen (mit する)
ミーティング|ミーティング|Besprechung, Meeting|トムがここに 到着[とうちゃく]したら、ミーティングを 始[はじ]めよう。|Lass uns das Meeting beginnen, nachdem Tom hier angekommen ist.|Nomen
自転車|自転車[じてんしゃ]|Fahrrad|ドアのそばにある 自転[じてん] 車[しゃ]は 私[わたし]のです。|Das Fahrrad neben der Tür ist meins.|Nomen
自分|自分[じぶん]|selbst, man selbst|彼女[かのじょ]は 自分[じぶん]でそれをやってみた。|Sie versuchte es selbst.|Nomen
ご主人|ご 主人[しゅじん]|(Ihr) Ehemann|ご 主人[しゅじん]はお 元気[げんき]ですか。|Geht es Ihrem Mann gut?|Nomen
答える|答[こた]える|antworten|何[なん]と 答[こた]えていいかわかりません。|Ich weiß nicht, wie ich auf diese Frage antworten soll.|Verb
別|別[べつ]|anders, ein anderer|別[べつ]の 人[ひと]と 結婚[けっこん]しとけばよかったわ。|Hätte ich doch bloß einen anderen geheiratet!|な-Adjektiv
病気|病気[びょうき]|Krankheit|私[わたし]は 彼[かれ]が 病気[びょうき]だと 思[おも]った。|Ich dachte, er wäre krank.|Nomen (mit する)
死ぬ|死[し]ぬ|sterben|私[わたし]は 死[し]んじゃうの？|Werde ich sterben?|Verb
痛い|痛[いた]い|schmerzhaft, wehtun|耳[みみ]が 痛[いた]いのです。|Ich habe Ohrenschmerzen.|Adjektiv
酒|酒[さけ]|Alkohol; Sake|お 酒[さけ]は 飲[の]みません。|Ich trinke keinen Alkohol.|Nomen
つける|つける|anmachen, einschalten|テレビつけてもいい？|Darf ich den Fernseher anschalten?|Verb
一杯|一杯[いっぱい]|voll|お 腹[なか]が 一杯[いっぱい]です。|Ich bin satt.|Adverb
飛ぶ|飛[と]ぶ|fliegen|痛[いた]いの 痛[いた]いの 飛[と]んでいけ！|Das Aua fliegt ... WEEEEEG!|Verb
飛行機|飛行機[ひこうき]|Flugzeug|飛行[ひこう] 機[き]はまもなく 見[み]えなくなった。|Das Flugzeug war bald außer Sicht.|Nomen
お願い|お 願[ねが]い|Bitte|ひとつお 願[ねが]いをしてもいいでしょうか。|Dürfte ich dich um einen Gefallen bitten?|Nomen (mit する)
続く|続[つづ]く|andauern, weitergehen|しばらく、 寂[さび]しい 日[ひ]が 続[つづ]きそうね。|Die einsamen Tage werden wohl noch eine Zeitlang so weitergehen.|Verb
日記|日記[にっき]|Tagebuch|ここ 数年間[すうねんかん] 英語[えいご]で 日記[にっき]を 付[つ]けてきたの。|Die letzten Jahre habe ich auf Englisch Tagebuch geführt.|Nomen
首|首[くび]|Hals|首[くび]が 少[すこ]し 痛[いた]いんだ。|Ich habe leichte Nackenschmerzen.|Nomen
頭|頭[あたま]|Kopf|彼女[かのじょ]は 頭[あたま]を 上[あ]げた。|Sie hob ihren Kopf.|Nomen
顔|顔[かお]|Gesicht|私[わたし]は 毎朝[まいあさ] 顔[かお]を 洗[あら]います。|Ich wasche mir jeden Morgen das Gesicht.|Nomen
あれ|あれ|das dort (drüben)|あれは 彼女[かのじょ]の 家[いえ]だ。|Das ist ihr Haus.|Nomen
感じる|感[かん]じる|fühlen, spüren|何[なに]か 感[かん]じる。|Ich fühle etwas.|Verb
探す|探[さが]す|suchen|仕事[しごと]を 探[さが]してるんだ。|Ich suche eine Arbeitsstelle.|Verb
落ちる|落[お]ちる|fallen, herunterfallen|彼[かれ]は 木[き]から 落[お]ちた。|Er ist vom Baum heruntergefallen.|Verb
お手洗い|お 手洗[てあら]い|Toilette|お 手洗[てあら]いはどこですか。|Wo ist die Toilette?|Nomen
冷たい|冷[つめ]たい|kalt (Dinge, bei Berührung)|何[なに]か 冷[つめ]たい 飲[の]み 物[もの]が 欲[ほ]しいです。|Ich möchte etwas Kaltes trinken.|Adjektiv
汚い|汚[きたな]い|schmutzig|トムの 部屋[へや]は 汚[きたな]い。|Toms Zimmer ist dreckig.|Adjektiv
太い|太[ふと]い|dick|石油[せきゆ]が 太[ふと]いパイプの 中[なか]を 流[なが]れた。|Das Erdöl floss durch ein dickes Rohr.|Adjektiv
曇る|曇[くも]る|sich bewölken|空[そら]が 曇[くも]ってきた。|Der Himmel zieht sich zu.|Verb
神|神[かみ]|Gott, Gottheit|私[わたし]は 神[かみ]を 信[しん]じます。|Ich glaube an Gott.|Nomen
まずい|まずい|schlecht schmeckend; ungünstig|まずいことになった。|Wir sind in Schwierigkeiten.|Adjektiv
建てる|建[た]てる|bauen, errichten|彼[かれ]は 新[あたら]しい 家[いえ]を 建[た]てた。|Er hat ein neues Haus gebaut.|Verb
置く|置[お]く|legen, stellen; lassen|それをテーブルの 上[うえ]に 置[お]きなさい。|Stell das auf den Tisch.|Verb
辺|辺[へん]|Gegend, Umgebung|ここら 辺[へん]には 見[み]るべきところがたくさんあります。|Es gibt hier in der Gegend viel zu besichtigen.|Nomen
黄色い|黄色[きいろ]い|gelb|母[はは]は 弟[おとうと]に 黄色[きいろ]い 傘[かさ]を 買[か]ってやった。|Meine Mutter hat meinem Bruder einen gelben Schirm gekauft.|Adjektiv
一緒に|一緒[いっしょ]に|zusammen|お 昼[ひる] 一緒[いっしょ]に 食[た]べない？|Wollen wir zusammen mittagessen?|Adverb
緑|緑[みどり]|Grün; Pflanzen|テーブルは 緑[みどり]です。|Der Tisch ist grün.|Nomen
易しい|易[やさ]しい|leicht, einfach|きのうのテストは 易[やさ]しかったです。|Der Test gestern war leicht.|Adjektiv
留学生|留学生[りゅうがくせい]|Austauschstudent(in)|留学[りゅうがく] 生[せい]の 方[ほう]ですか？|Sind Sie ein Austauschstudent?|Nomen
戻る|戻[もど]る|zurückkehren, umkehren|いつ 戻[もど]ってきたの？|Wann bist du zurückgekommen?|Verb
そば|そば|neben, in der Nähe|少女[しょうじょ]は 私[わたし]のそばに 座[すわ]った。|Das Mädchen saß neben mir.|Nomen
起きる|起[お]きる|aufstehen|起[お]きろ！ 起[お]きるんだ！|Los, hoch, aufstehen!|Verb
起こる|起[お]こる|geschehen, passieren|ここで 何[なに]が 起[お]こったと 思[おも]いますか。|Was ist deiner Meinung nach hier geschehen?|Verb
起こす|起[お]こす|wecken; aufrichten|明日[あした]の 朝[あさ]ぼくを 起[お]こすのを 忘[わす]れないでね。|Denk dran, mich morgen früh zu wecken!|Verb
起きる|起[お]きる|geschehen, sich ereignen|何[なに]が 起[お]きてるのかわかってる？|Verstehst du, was gerade geschieht?|Verb
寝る|寝[ね]る|schlafen, ins Bett gehen|すぐに 寝[ね]たほうがいい。|Du solltest besser sofort schlafen gehen.|Verb
細い|細[ほそ]い|dünn, schmal|彼女[かのじょ]の 腰[こし]は 細[ほそ]いです。|Sie hat schmale Hüften.|Adjektiv
載せる|載[の]せる|auflegen, daraufstellen|彼[かれ]は 帽子[ぼうし]を 頭[あたま]に 載[の]せた。|Er setzte sich eine Kappe auf den Kopf.|Verb
締める|締[し]める|festziehen, anschnallen|彼女[かのじょ]は 靴[くつ]のひもを 締[し]めた。|Sie schnürte sich die Schuhe.|Verb
甘い|甘[あま]い|süß|私[わたし]の 力[ちから]を 甘[あま]く 見[み]ないで。|Unterschätze nicht meine Macht!|Adjektiv
こっち|こっち|hier, hierher (umgangssprachlich)|こっちに 来[き]て 座[すわ]って。|Komm hierher und setz dich hin.|Pronomen
辛い|辛[から]い|scharf; salzig|気[き]をつけて。 辛[から]いよ。|Vorsicht! Es ist scharf.|Adjektiv
優しい|優[やさ]しい|freundlich, sanft|言葉[ことば]だけの 優[やさ]しさなんて 要[い]らない。|Freundlichkeit nur in Worten brauche ich nicht.|Adjektiv
夫|夫[おっと]|(mein) Ehemann|私[わたし]の 夫[おっと]はとても 料理[りょうり]が 上手[じょうず]です。|Mein Mann kann sehr gut kochen.|Nomen
妻|妻[つま]|(meine) Ehefrau|彼[かれ]は 私[わたし]の 妻[つま]の 知[し]り 合[あ]いだ。|Er ist ein Bekannter meiner Frau.|Nomen
誰|誰[だれ]|wer|誰[だれ]かから 電話[でんわ]があったの？|Hat jemand angerufen?|Nomen
愛する|愛[あい]する|lieben|世界[せかい]で 一番[いちばん] 愛[あい]してる。|Ich liebe dich mehr als alles andere auf der Welt.|Verb
笑う|笑[わら]う|lachen, lächeln|彼[かれ]は 子供[こども] 達[たち]を 笑[わら]わせた。|Er brachte die Kinder zum Lachen.|Verb
酸っぱい|酸[す]っぱい|sauer|レモンは 酸[す]っぱい。|Zitronen sind sauer.|Adjektiv
言葉|言葉[ことば]|Wort; Sprache|言葉[ことば]が 見[み]つからない。|Ich finde nicht die Worte.|Nomen
よう|よう|Art, Weise; scheinen|よう、 久[ひさ]しぶり。|Hey, lange nicht gesehen!|Nomen
呼ぶ|呼[よ]ぶ|rufen; nennen|タクシーを 呼[よ]んでもらえませんか。|Können Sie mir ein Taxi rufen?|Verb
胸|胸[むね]|Brust|心臓[しんぞう]は 胸[むね]の 中[なか]にある。|Das Herz befindet sich in der Brust.|Nomen
腰|腰[こし]|Hüfte, Kreuz|彼[かれ]はとても 腰[こし]が 低[ひく]い。|Er ist ein sehr bescheidener Mann.|Nomen
背|背[せ]|Körpergröße; Rücken|もっと 背[せ]が 高[たか]ければいいのになあ。|Ich wünschte, ich wäre größer.|Nomen
片仮名|片仮名[かたかな]|Katakana|名前[なまえ]を 片仮名[かたかな]で 書[か]いてください。|Schreiben Sie Ihren Namen bitte in Katakana.|Nomen
平仮名|平仮名[ひらがな]|Hiragana|平仮名[ひらがな]はもう 全部[ぜんぶ] 読[よ]めます。|Hiragana kann ich schon alle lesen.|Nomen
悲しい|悲[かな]しい|traurig|それはあまりにも 悲[かな]しい。|Das ist allzu traurig!|Adjektiv
美しい|美[うつく]しい|schön|何[なん]と 美[うつく]しい 花[はな]なのだろう。|Was für eine schöne Blume!|Adjektiv
授業|授業[じゅぎょう]|Unterricht|彼[かれ] 等[ら]は 授業[じゅぎょう] 中[ちゅう]だ。|Sie sind im Unterricht.|Nomen (mit する)
あそこ|あそこ|dort drüben|あそこで 待[ま]ってて。|Warte dort drüben.|Pronomen
手伝う|手伝[てつだ]う|helfen|コートを 着[き]るのを 手伝[てつだ]ってあげよう。|Ich helfe dir in deinen Mantel.|Verb
狭い|狭[せま]い|eng, klein (Raum)|日本[にほん]は 狭[せま]い 国[くに]です。|Japan ist ein kleines Land.|Adjektiv
触る|触[さわ]る|berühren, anfassen|それらの 本[ほん]は 触[さわ]らないでね。|Die Bücher da bitte nicht anfassen!|Verb
嫌い|嫌[きら]い|nicht mögen|悪[わる]い 子[こ]は 嫌[きら]いですよ。|Ungezogene Kinder mag ich nicht.|Adjektiv
浴びる|浴[あ]びる|nehmen (Dusche), sich übergießen|姉[あね]は 毎朝[まいあさ]シャワーを 浴[あ]びます。|Meine große Schwester duscht jeden Morgen.|Verb
渇く|渇[かわ]く|trocken werden; durstig sein|お 腹[なか]が 空[す]いたし、のども 渇[かわ]いた。|Ich habe Hunger und ich habe Durst.|Verb
髪の毛|髪[かみ]の 毛[け]|Haare (Kopfhaar)|彼女[かのじょ]の 髪[かみ]の 毛[け]は 長[なが]くて 美[うつく]しい。|Ihre Haare sind lang und wunderschön.|Nomen
肩|肩[かた]|Schulter|彼[かれ]は 手[て]を 私[わたし]の 肩[かた]に 置[お]いた。|Er legte seine Hand auf meine Schulter.|Nomen
鼻|鼻[はな]|Nase|彼[かれ]は 鼻[はな]が 高[たか]い。|Er hat eine lange Nase.|Nomen
おいしい|おいしい|lecker|僕[ぼく] 達[たち]はおいしい 料理[りょうり]に 満足[まんぞく]した。|Wir waren mit dem leckeren Essen zufrieden.|Adjektiv
腕|腕[うで]|Arm|これは 私[わたし]が 失[な]くした 腕[うで] 時計[とけい]だ。|Das ist die Armbanduhr, die ich verloren habe.|Nomen
掛ける|掛[か]ける|aufhängen; anlegen|コートはどこに 掛[か]けたの？|Wo hast du deinen Mantel hingehängt?|Verb
僕|僕[ぼく]|ich (von Männern und Jungen)|僕[ぼく]はどっちが 勝[か]っても 嬉[うれ]しいよ。|Wer auch immer gewinnt, ich werde glücklich sein.|Nomen
駄目|駄目[だめ]|nichts taugen, nicht gut|もう 一方[いっぽう]は 駄目[だめ]です。|Der andere funktioniert nicht.|な-Adjektiv
大丈夫|大丈夫[だいじょうぶ]|in Ordnung, kein Problem|どっちでも 大丈夫[だいじょうぶ]だと 思[おも]うよ。|Ich finde, es ist beides in Ordnung.|な-Adjektiv
風邪|風邪[かぜ]|Erkältung|子[こ]どもは 風邪[かぜ]を 引[ひ]きやすい。|Kinder erkälten sich leicht.|Nomen
奇麗|奇麗[きれい]|schön; sauber|奇麗[きれい]ではありません。|Es ist nicht schön.|な-Adjektiv
嬉しい|嬉[うれ]しい|froh, glücklich|彼女[かのじょ]は 嬉[うれ]しくないようだ。|Sie scheint nicht glücklich zu sein.|Adjektiv
なる|なる|Früchte tragen|明日[あした]はもっと 寒[さむ]くなるよ。|Morgen wird es noch kälter.|Verb
ため|ため|für, zugunsten; Zweck|私[わたし]は 病気[びょうき]のため 学校[がっこう]を 休[やす]んだ。|Ich war wegen Krankheit nicht in der Schule.|Nomen
より|より|mehr, noch|今年[ことし]は 去年[きょねん]より 雪[ゆき]が 多[おお]いかな。|Ob es dieses Jahr wohl mehr schneit als letztes Jahr?|Adverb
七|七[しち]|sieben|今夜[こんや] 七[しち] 時[じ]に、 電話[でんわ]するよ。|Ich rufe heute Abend um sieben an.|Nomen
九|九[く]|neun|九[く] 時[じ]に 会社[かいしゃ]に 着[つ]きました。|Um neun Uhr bin ich in der Firma angekommen.|Nomen
億|億[おく]|hundert Millionen|私[わたし]たちは 億[おく] 万[まん] 長者[ちょうじゃ]になりたい。|Wir wollen Milliardäre werden.|Nomen
寺|寺[てら]|buddhistischer Tempel|トムはお 寺[てら]へと 走[はし]っていった。|Tom lief zum Tempel.|Nomen
ドル|ドル|Dollar|私[わたし]は 彼[かれ]に 五[ご]ドルを 支払[しはら]った。|Ich zahlte ihm fünf Dollar.|Nomen
日|日[ひ]|Sonne; Tag|美[うつく]しく 晴[は]れわたった 日[ひ]だった。|Es war ein schöner Sonnentag.|Nomen
火|火[ひ]|Feuer|火[ひ]を 消[け]すのを 忘[わす]れるな。|Vergesst nicht, das Feuer auszumachen.|Nomen
木|木[き]|Baum; Holz|彼女[かのじょ]は 木[き]から 落[お]ちた。|Sie fiel vom Baum.|Nomen
金|金[きん]|Gold; Geld; Freitag|金[きん]が 欲[ほ]しいだけさ。|Ich will nur Geld.|Nomen
システム|システム|System|これはすごいシステムだと 思[おも]う。|Ich finde, das ist ein tolles System.|Nomen
十分|十分[じゅうぶん]|genug, ausreichend|私[わたし]の 学校[がっこう]は 駅[えき]から 歩[ある]いて 約[やく] 十[じゅう] 分[ぶん]のところにあります。|Meine Schule liegt etwa zehn Minuten zu Fuß vom Bahnhof entfernt.|な-Adjektiv
分|分[ぶん]|Anteil, Teil, Menge|三[さん] 分[ぶん]の 一[いち]は 二分[にぶん]の 一[いち]より 小[ちい]さい。|Ein Drittel ist weniger als ein Halb.|Nomen
分ける|分[わ]ける|teilen, aufteilen, sortieren|先生[せんせい]は 私[わたし]たちを 二[ふた]つのグループに 分[わ]けた。|Unser Lehrer teilte uns in zwei Gruppen ein.|Verb
分かれる|分[わ]かれる|sich teilen, auseinandergehen|道[みち]はここで 二[ふた]つに 分[わ]かれている。|Der Weg teilt sich hier.|Verb
コンピューター|コンピューター|Computer|ダンは 新[あたら]しいコンピューターを 買[か]った。|Dan hat sich einen neuen Computer gekauft.|Nomen
何か|何[なに]か|etwas, irgendetwas|何[なに]か 食[た]べ 物[もの]を 買[か]ってこなきゃ。|Ich muß etwas zu essen kaufen.|Nomen
何|何[なん]|was|何[なん] 人[にん] 子供[こども]が 欲[ほ]しい？|Wie viele Kinder willst du?|Nomen
先ず|先[ま]ず|zuerst|先[ま]ずは、 名前[なまえ]を 決[き]めないとね。|Zuerst müssen wir uns für einen Namen entscheiden.|Adverb
先月|先月[せんげつ]|letzten Monat|先月[せんげつ]は 何[なん] 冊[さつ] 本[ほん]を 読[よ]んだの？|Wie viele Bücher hast du letzten Monat gelesen?|Nomen
やる|やる|geben (an Tiere, Pflanzen, Jüngere)|これをやった 人[ひと]を 探[さが]してるんだ。|Ich suche den, der das getan hat.|Verb
先週|先週[せんしゅう]|letzte Woche|彼[かれ]らは 先週[せんしゅう] 来[き]た。|Die kamen letzte Woche.|Nomen
今まで|今[いま]まで|bis jetzt|今[いま]まで 僕[ぼく]は 外国[がいこく]に 行[い]ったことがないんだ。|Bis jetzt war ich noch nie im Ausland.|Adverb
来月|来月[らいげつ]|nächsten Monat|来月[らいげつ]お 会[あ]いしましょう。|Lass uns uns nächsten Monat treffen.|Nomen
来週|来週[らいしゅう]|nächste Woche|来週[らいしゅう]からテストが 始[はじ]まる。|Die Prüfungen fangen nächste Woche an.|Nomen
ロボット|ロボット|Roboter|君[きみ]がロボットではないってことは 分[わ]かる。|Es zeigt nur, dass du kein Roboter bist.|Nomen
行う|行[おこな]う|durchführen, veranstalten|私[わたし]も 行[おこな]った。|Ich ging auch.|Verb
行き|行[い]き|Hinweg, Hinfahrt|行[い]きは 電車[でんしゃ]で、 帰[かえ]りはバスでした。|Auf dem Hinweg fuhr ich mit dem Zug, auf dem Rückweg mit dem Bus.|Nomen
行き|行[ゆ]き|in Richtung, nach (Fahrtziel)|東京[とうきょう] 行[ゆ]きの 電車[でんしゃ]に 乗[の]りました。|Ich bin in den Zug nach Tōkyō gestiegen.|Nomen
帰り|帰[かえ]り|Rückweg, Heimweg|帰[かえ]りにパン 買[か]ってくるの 忘[わす]れないでよ。|Vergiss nicht, auf dem Heimweg Brot zu kaufen.|Nomen
ほとんど|ほとんど|fast; kaum|ほとんど 話[はな]せない。|Sie kann kaum sprechen.|Adverb
大きさ|大[おお]きさ|Größe|それは 卵[たまご]ぐらいの 大[おお]きさだった。|Es hatte ungefähr die Größe eines Eis.|Nomen
大分|大分[だいぶ]|ziemlich, beträchtlich|大分[だいぶ] 寒[さむ]くなりましたね。|Es ist ziemlich kalt geworden, nicht wahr?|Adverb
中|中[なか]|Inneres, in, Mitte|バスの 中[なか]で 彼[かれ]とよく 喋[しゃべ]ります。|Ich rede oft im Bus mit ihm.|Nomen
少年|少年[しょうねん]|Junge|少年[しょうねん]たちはみんな 同[おな]じ 年齢[ねんれい]だ。|Alle Jungen sind im gleichen Alter.|Nomen
パソコン|パソコン|Computer, PC|パソコンが 使[つか]えるのは 彼女[かのじょ]だけです。|Nur sie allein weiß, wie der Computer zu bedienen ist.|Nomen
少しも|少[すこ]しも|überhaupt nicht, kein bisschen|少[すこ]しも 心配[しんぱい]していない。|Ich mache mir nicht die geringsten Sorgen.|Adverb
少々|少々[しょうしょう]|ein wenig, etwas|タクシーを 拾[ひろ]うのに 少々[しょうしょう] 苦労[くろう]した。|Ich hatte ein wenig Schwierigkeiten, ein Taxi zu bekommen.|Adverb
多く|多[おお]く|viele; größtenteils|かなり 多[おお]くの 家[いえ]が 台風[たいふう]で 壊[こわ]された。|Es sind recht viele Häuser von dem Taifun zerstört worden.|Adverb
上がる|上[あ]がる|hinaufgehen, steigen|私達[わたくしたち]は 階段[かいだん]を 上[あ]がった。|Wir gingen die Treppe hinauf.|Verb
もう|もう|noch (ein), weitere(r, s)|もう 少[すこ]し 寝[ね]させてよ。|Lass mich noch etwas schlafen!|Adverb
上がる|上[あ]がる|nervös werden, Lampenfieber haben|熱[ねつ]が 上[あ]がってきましたね。|Dein Fieber ist gestiegen.|Verb
年上|年上[としうえ]|älter (als jemand)|私[わたし]の 方[ほう]が 彼[かれ]より 年上[としうえ]です。|Ich bin älter als er.|Nomen
上り|上[のぼ]り|Auffahrt, Aufstieg; Richtung Hauptstadt|上[のぼ]りのエスカレーターはどこですか？|Wo ist die Rolltreppe nach oben?|Nomen
下げる|下[さ]げる|senken, herunterdrehen|値段[ねだん]を 下[さ]げるべきだと 思[おも]います。|Ich denke, wir sollten den Preis senken.|Verb
プログラム|プログラム|Programm|プログラムをいただけますか。|Könnte ich ein Programm bekommen?|Nomen
下がる|下[さ]がる|sinken, fallen; herunterhängen|米[こめ]の 値段[ねだん]が 下[さ]がった。|Der Preis für Reis ist gefallen.|Verb
下りる|下[お]りる|hinuntergehen, aussteigen|彼女[かのじょ]は 屋根[やね]から 下[お]りた。|Sie kam vom Dach herunter.|Verb
下ろす|下[お]ろす|herunternehmen, herunterlassen|ちょっとお 金[かね] 下[お]ろしてくるね。|Ich hole schnell Geld.|Verb
下り|下[くだ]り|Abfahrt, Abstieg; Richtung stadtauswärts|ここの 下[くだ]りも 手掛[てが]かりがないので 危険[きけん]だ。|Der Abstieg hier ist auch gefährlich, da es kein Geländer gibt.|Nomen
よく|よく|gut, genau|彼[かれ]はよくなるのだろうか。|Ob er sich wieder erholt?|Adverb
年下|年下[としした]|jünger (als jemand)|彼女[かのじょ]は 彼[かれ]より 年下[としした]だ。|Sie ist jünger als er.|Nomen
下る|下[くだ]る|hinabgehen, hinunterfahren|彼[かれ]は 丘[おか]を 下[くだ]って 行[い]った。|Er ging den Hügel hinunter.|Verb
一方|一方[いっぽう]|eine Richtung, eine Seite; einerseits|母[かあ]さん、そこ 入[はい]っちゃだめだよ。そこ 一方[いっぽう] 通行[つうこう]だよ。|Nicht da langfahren, Mama! Das ist eine Einbahnstraße.|Nomen
方|方[かた]|Person (höflich)|駅[えき]への 行[い]き 方[かた]を 教[おし]えてもらえますか。|Könnten Sie mir sagen, wie ich zum Bahnhof komme?|Nomen
まま|まま|so wie es ist, unverändert|誰[だれ]がドアを 開[ひら]いたままにしておいたんだ？|Wer hat die Tür offen gelassen?|Nomen
二人|二人[ふたり]|zwei Personen|やっと 二人[ふたり]になれたね。|Endlich sind wir für uns zwei.|Nomen
大人しい|大人[おとな]しい|ruhig, brav, still|大人[おとな]しそうに 見[み]えても 男[おとこ]はみんな 狼[おおかみ]だからね。 覚[おぼ]えときな。|Auch wenn sie friedlich aussehen, Männer sind alle Wölfe. Merk dir das!|Adjektiv
人々|人々[ひとびと]|Leute, Menschen|人々[ひとびと]は 彼女[かのじょ]が 死[し]んだものだと 思[おも]った。|Die Leute dachten, sie wäre tot.|Nomen
一人で|一人[ひとり]で|allein|一人[ひとり]でここに 来[き]たのですか。|Bist du allein hergekommen?|Adverb
テレビ|テレビ|Fernseher, Fernsehen|それはテレビだよ。|Das ist ein Fernseher.|Nomen
外人|外人[がいじん]|Ausländer(in)|外人[がいじん]をからかうな。|Mach dich nicht über Ausländer lustig.|Nomen
外|外[そと]|draußen, außen|外[そと]が 暑[あつ]い 時[とき]に 料理[りょうり]するのは 好[す]きではない。|Ich koche nicht gerne, wenn es draußen heiß ist.|Nomen
休日|休日[きゅうじつ]|Feiertag, freier Tag|明日[あした]は 休日[きゅうじつ]です。|Morgen ist Feiertag.|Nomen
休み|休[やす]み|Pause, Ruhetag, Ferien|学校[がっこう]はいつ 休[やす]みになるのですか。|Wann beginnen die Ferien?|Nomen
ソフト|ソフト|Software|もう 一[ひと]つソフトクリームを 食[た]べようかな。|Ob ich wohl noch ein Softeis esse?|Nomen
力|力[ちから]|Kraft, Stärke|彼[かれ]は 私[わたし]より 力[ちから]が 強[つよ]い。|Er ist stärker als ich.|Nomen
協力|協力[きょうりょく]|Zusammenarbeit, Mithilfe|私[わたし]たちは 互[たが]いに 協力[きょうりょく]せざるを 得[え]なかった。|Wir mussten zusammenarbeiten.|Nomen (mit する)
人口|人口[じんこう]|Bevölkerung, Einwohnerzahl|メキシコの 人口[じんこう]は 日本[にほん]の 人口[じんこう]の 半分[はんぶん]です。|Die Einwohnerzahl Mexikos ist halb so groß wie die Japans.|Nomen
出口|出口[でぐち]|Ausgang|他[ほか]の 出口[でぐち]はありますか？|Gibt es noch einen Ausgang?|Nomen
ただ|ただ|kostenlos, gratis|ただ 今日[きょう]は 学校[がっこう]に 行[い]く 気[き]が 起[お]きないんだ。|Ich habe heute einfach keine Lust, zur Schule zu gehen.|Nomen
入り口|入[い]り 口[ぐち]|Eingang|私[わたし]は 入[い]り 口[ぐち]のところまで 行[い]った。|Ich ging bis zum Eingang.|Nomen
右手|右手[みぎて]|rechte Hand|質問[しつもん]があれば 右手[みぎて]を 挙[あ]げて 下[くだ]さい。|Wenn du eine Frage hast, hebe bitte die rechte Hand.|Nomen
左手|左手[ひだりて]|linke Hand|左手[ひだりて]が 痛[いた]いんだ。|Mir tut die linke Hand weh.|Nomen
下手|下手[へた]|ungeschickt, schlecht (in etwas)|彼[かれ]は 字[じ]が 下手[へた]だ。|Er hat eine schlechte Handschrift.|な-Adjektiv
これら|これら|diese (Plural)|これらのおもちゃはとても 人気[にんき]です。|Diese Spielzeuge sind sehr beliebt.|Nomen
足りる|足[た]りる|ausreichen, genügen|椅子[いす]は 足[た]りそうですか？|Gibt es genügend Stühle?|Verb
足す|足[た]す|hinzufügen, addieren|三[さん]に 二[に]を 足[た]すと 五[ご]になる。|Wenn man zu drei zwei addiert, ergibt das fünf.|Verb
山|山[やま]|Berg|明日天気[あしたてんき]がよければ、 山[やま]に 登[のぼ]るつもりです。|Wir wollen morgen auf den Berg, wenn’s schön ist.|Nomen
川|川[かわ]|Fluss, Bach|私[わたし]たちは 川[かわ]へ 行[い]った。|Wir gingen zum Fluss.|Nomen
いずれ|いずれ|irgendwann, früher oder später|いずれは 親[おや]の 跡[あと]を 継[つ]ぐんでしょう？|Früher oder später werde ich das Erbe meiner Eltern antreten.|Adverb
空く|空[あ]く|frei werden, leer sein|今週末[こんしゅうまつ] 空[あ]いてる？|Hast du dieses Wochenende frei?|Verb
空手|空手[からて]|Karate|趣味[しゅみ]は 空手[からて]と 書道[しょどう]です。|Meine Hobbys sind Karate und Kalligraphie.|Nomen
空|空[そら]|Himmel|空[そら]がだんだん 明[あか]るくなってきた。|Der Himmel hellte sich auf.|Nomen
海外|海外[かいがい]|Übersee, Ausland|彼[かれ]は 毎年[まいとし] 海外[かいがい]へ 行[い]く。|Er fährt jedes Jahr ins Ausland.|Nomen
あまり|あまり|nicht besonders (mit Verneinung)|あまりお 腹[なか]が 空[す]いてないんです。|Ich bin nicht allzu hungrig.|Adverb
海|海[うみ]|Meer|海[うみ]が 見[み]える 部屋[へや]がいいな。|Ich hätte gern ein Zimmer mit Meerblick.|Nomen
毎日|毎日[まいにち]|jeden Tag|毎日[まいにち] 学校[がっこう]へ 歩[ある]いていくよ。|Ich laufe jeden Tag zur Schule.|Nomen
毎年|毎年[まいとし]|jedes Jahr|私[わたし]は 毎年[まいとし] 風邪[かぜ]をひきます。|Ich bekomme jedes Jahr eine Erkältung.|Nomen
毎年|毎年[まいねん]|jedes Jahr|毎年[まいねん]、 多[おお]くの 外国人[がいこくじん]が 日本[にほん]を 訪[おとず]れます。|Viele Ausländer besuchen jedes Jahr Japan.|Nomen
なお|なお|außerdem, ferner; noch|かなり 多[おお]くの 人々[ひとびと]が 今[いま]なおそれを 信[しん]じている。|Ziemlich viele Menschen glauben das noch immer.|Adverb
毎週|毎週[まいしゅう]|jede Woche|毎週[まいしゅう]それをしてるんだ。|Ich mache das jede Woche.|Nomen
毎月|毎月[まいつき]|jeden Monat|毎月[まいつき] 何回[なんかい]ぐらい 映画[えいが]に 行[い]くんですか？|Wie oft gehst du jeden Monat ins Kino?|Nomen
石|石[いし]|Stein|なんで 石[いし]を 投[な]げたりするんだ。|Was wirfst du hier mit Steinen?|Nomen
田んぼ|田[た]んぼ|Reisfeld|言[い]いにくいけど、あそこ 田[た]んぼしかないよね。|Es ist schwer zu sagen, aber dort gibt es nur Reisfelder, oder?|Nomen
ほぼ|ほぼ|fast, beinahe|父[ちち]はほぼ 毎日[まいにち]、 仕事[しごと]に 行[い]く。|Mein Vater geht fast jeden Tag zur Arbeit.|Adverb
花|花[はな]|Blume, Blüte|テーブルの 上[うえ]に 花[はな]が 一本[いっぽん]あります。|Da steht eine Blume auf dem Tisch.|Nomen
林|林[はやし]|Wäldchen, Hain|林[はやし]の 中[なか]でいっぱい 虫[むし]にさされた。|Ich habe im Wald etliche Insektenstiche davongetragen.|Nomen
森|森[もり]|Wald|この 森[もり]には 鳥[とり]がたくさんいます。|In diesem Wald gibt es viele Vögel.|Nomen
子|子[こ]|Kind|トムってよくしゃべる 子[こ]だね。|Der Tom ist schon ein redseliges Kind!|Nomen
サービス|サービス|Service; Gratiszugabe|こちらはサービスでございます。|Das geht aufs Haus.|Nomen (mit する)
女の子|女[おんな]の 子[こ]|Mädchen|女[おんな]の 子[こ]たちは 食[た]べ 終[お]わったの？|Sind die Mädchen mit Essen fertig?|Nomen
男の子|男[おとこ]の 子[こ]|Junge|どっちの 男[おとこ]の 子[こ]がやったの？|Welcher der beiden Jungen hat das getan?|Nomen
私たち|私[わたし]たち|wir|私[わたし]たちの 家[いえ]へようこそ。|Willkommen bei uns zu Hause!|Nomen
達する|達[たっ]する|erreichen|彼女[かのじょ]は 目的[もくてき]を 達[たっ]した。|Sie hat ihr Ziel erreicht.|Verb
グループ|グループ|Gruppe|トムはグループから 歩[ある]いて 離[はな]れて 行[い]った。|Tom entfernte sich von der Gruppe.|Nomen
家|家[いえ]|Haus, Zuhause|家[いえ]に 帰[かえ]ったらすぐやるよ。|Ich werde mich gleich darum kümmern, wenn ich wieder zu Hause bin.|Nomen
家内|家内[かない]|meine Frau|家内[かない]は 今[いま]、 夕食[ゆうしょく]の 支度[したく]をしている。|Meine Frau bereitet gerade das Abendessen zu.|Nomen
客|客[きゃく]|Gast, Kunde|ジョンはお 客[きゃく]さんと 電話[でんわ]で 話[はな]した。|John redete telefonisch mit seinem Kunden.|Nomen
空気|空気[くうき]|Luft; Atmosphäre|月[つき]には 空気[くうき]がない。|Es gibt keine Luft auf dem Mond.|Nomen
ホテル|ホテル|Hotel|ホテルのプールが 利用[りよう]できるよ。|Wir können den Hotelpool benutzen.|Nomen
気に入る|気[き]に 入[い]る|gefallen, mögen|トムがここを 気[き]に 入[い]るとは 思[おも]えない。|Ich glaube nicht, dass es Tom hier gefallen wird.|Verb
人気|人気[にんき]|Beliebtheit|彼[かれ]はクラスの 人気[にんき] 者[もの]だ。|Er ist der Beliebteste in der Klasse.|Nomen
雨|雨[あめ]|Regen|雨[あめ]がやんでくれたらいいのに。|Ich wünschte, der Regen würde aufhören.|Nomen
雪|雪[ゆき]|Schnee|明日[あした]は 雪[ゆき]になると 思[おも]う。|Ich glaube, es schneit morgen.|Nomen
まとめる|まとめる|zusammenfassen, zusammenpacken, ordnen|まとめて 洗濯[せんたく]していいですか。|Darf ich gleich meine ganze Wäsche auf einmal waschen?|Verb
青い|青[あお]い|blau|空[そら]がなぜ 青[あお]いか 知[し]ってる？|Weißt du, warum der Himmel blau ist?|Adjektiv
青|青[あお]|Blau; Grün (Ampel)|私[わたし]が 一番[いちばん] 好[す]きな 色[いろ]は 青[あお]です。|Meine Lieblingsfarbe ist Blau.|Nomen
晴れ|晴[は]れ|schönes Wetter, heiter|明日[あした]は 晴[は]れかどうか 知[し]りたいな。|Wir möchten wissen, ob es morgen klares Wetter gibt.|Nomen
明らか|明[あき]らか|klar, offensichtlich|彼[かれ]が 病気[びょうき]だというのは 明[あき]らかなようだ。|Er ist offensichtlich krank.|Adjektiv
やはり|やはり|wie erwartet; doch, auch|彼[かれ]は 頭[あたま]がよいがやはり 嫌[きら]いだ。|Er ist intelligent, aber ich mag ihn trotzdem nicht.|Adverb
明るい|明[あか]るい|hell; fröhlich|外[そと]はまだ 明[あか]るいよ。|Es ist noch hell draußen.|Adjektiv
明日|明日[あした]|morgen|明日[あした]は 雨[あめ]になるのかな？|Ob es morgen wohl regnet?|Nomen
暗い|暗[くら]い|dunkel; düster|部屋[へや]の 中[なか]は 暗[くら]くて 寒[さむ]かった。|Es war dunkel und kalt in dem Raum.|Adjektiv
昨年|昨年[さくねん]|letztes Jahr|彼女[かのじょ]は 昨年[さくねん] 生[う]まれた。|Sie wurde letztes Jahr geboren.|Nomen
はっきり|はっきり|klar, deutlich|彼女[かのじょ]が 何[なん]と 言[い]ったのかははっきりしなかった。|Es war nicht klar, was sie sagte.|Adverb
一昨年|一昨年[おととし]|vorletztes Jahr|一昨年[おととし]、オーストラリアに 越[こ]してきました。|Vorletztes Jahr bin ich nach Australien gezogen.|Nomen
一昨日|一昨日[おととい]|vorgestern|トムは 一昨日[おととい]から 全[まった]く 寝[ね]ていない。|Tom hat seit vorgestern nicht mehr geschlafen.|Nomen
東|東[ひがし]|Osten|月[つき]は 東[ひがし]から 上[のぼ]る。|Der Mond geht im Osten auf.|Nomen
西|西[にし]|Westen|私[わたし]たちは、 西[にし]へ 行[い]く。|Wir gehen nach Westen.|Nomen
つまり|つまり|das heißt, kurz gesagt|つまり、 彼[かれ]はあなたが 好[す]きなのね。|Das heißt, er mag dich leiden, stimmt’s?|Adverb
南|南[みなみ]|Süden|鳥[とり]は 冬[ふゆ]になると 南[みなみ]へ 飛[と]んでいきます。|Vögel fliegen in den Süden, wenn es Winter wird.|Nomen
北|北[きた]|Norden|バスは 北[きた]へ 向[む]かっていた。|Der Bus fuhr in Richtung Norden.|Nomen
方向|方向[ほうこう]|Richtung|彼[かれ]はどっちの 方向[ほうこう]へ 行[い]きましたか。|In welche Richtung ist er gegangen?|Nomen
向かう|向[む]かう|sich zuwenden; unterwegs sein nach|彼女[かのじょ]は 明日[あした] 東京[とうきょう]に 向[む]かう。|Sie wird morgen nach Tokyo aufbrechen.|Verb
ビル|ビル|Gebäude, Hochhaus|風邪[かぜ]がひどいのはビル 風[ふう]のせいです。|Dass ich so schwer erkältet bin, liegt an dem Wind zwischen den Hochhäusern.|Nomen
向こう|向[む]こう|drüben, die andere Seite; Gegenseite|向[む]こうに 見[み]える 人[ひと]は 私[わたし]の 叔父[おじ]です。|Der Mann, den du dort drüben sehen kannst, ist mein Onkel.|Nomen
向く|向[む]く|sich wenden, schauen nach|彼[かれ]は 先生[せんせい]に 向[む]いてない。|Er taugt nicht zum Lehrer.|Verb
開く|開[あ]く|aufgehen, sich öffnen|店[みせ]が 開[あ]くのを 待[ま]ってるの。|Ich warte darauf, dass der Laden öffnet.|Verb
聞こえる|聞[き]こえる|zu hören sein|耳[みみ]が 聞[き]こえにくいんですか？|Hören Sie schlecht?|Verb
もちろん|もちろん|natürlich, selbstverständlich|もちろん 欲[ほ]しければとってもいいよ。|Natürlich kannst du es nehmen, wenn du es willst.|Adverb
年間|年間[ねんかん]|Zeitraum eines Jahres, pro Jahr|私[わたし]はここに 三[さん] 年間[ねんかん] 住[す]んでいる。|Ich wohne schon drei Jahre hier.|Nomen
この間|この 間[あいだ]|neulich, vor Kurzem|この 間[あいだ] 彼[かれ]に 会[あ]った。|Ich habe ihn neulich getroffen.|Nomen
間|間[あいだ]|Zwischenraum, zwischen|トムとの 間[あいだ]に 何[なに]かあったの？|Ist zwischen dir und Tom irgendetwas vorgefallen?|Nomen
人間|人間[にんげん]|Mensch|人間[にんげん] 見[み]た 目[め]だけじゃないよ。|Ein Mensch ist mehr als nur sein Aussehen.|Nomen
かつて|かつて|einst, früher|かつて、ここに 家[いえ]がありました。|Früher stand hier ein Haus.|Adverb
高さ|高[たか]さ|Höhe|高[たか]さはどれくらい？|Wie hoch ist es?|Nomen
最大|最大[さいだい]|größte(r, s), Maximum|東京[とうきょう]は 日本[にほん] 最大[さいだい]の 都市[とし]です。|Tōkyō ist die größte Stadt Japans.|Nomen
初めて|初[はじ]めて|zum ersten Mal|私[わたし]は 昨日[きのう] 初[はじ]めて 彼[かれ]に 会[あ]った。|Ich habe ihn gestern zum ersten Mal getroffen.|Adverb
最初|最初[さいしょ]|Anfang, zuerst|私[わたし]は 最初[さいしょ] 彼女[かのじょ]が 誰[だれ]かわからなかった。|Ich konnte sie zuerst nicht wiedererkennen.|Nomen
スポーツ|スポーツ|Sport|何[なに]かスポーツをしますか。|Betreibst du irgendwelche Sportarten?|Nomen
初め|初[はじ]め|Anfang, Beginn|初[はじ]めから 好[す]きでした。|Ich mochte ihn von Anfang an.|Nomen
今後|今後[こんご]|von nun an, künftig|今後[こんご] 話[はなし]をしよう。|Lass uns das nächste Mal reden.|Nomen
後|後[のち]|später, danach|晴[は]れ、 後[のち]くもりでしょう。|Erst sonnig, später wohl bewölkt.|Nomen
最後|最後[さいご]|letzte(r, s), Ende|私[わたし]はそれを 最後[さいご]に 彼女[かのじょ]と 会[あ]わなくなった。|Da habe ich mich zum letztenmal mit ihr getroffen.|Nomen
なぜ|なぜ|warum, weshalb|彼[かれ]はなぜ 休[やす]んだのかしら。|Ich frage mich, warum er nicht da war.|Adverb
明後日|明後日[あさって]|übermorgen|明後日[あさって]は、どっかに 行[い]くの？|Gehst du übermorgen irgendwohin?|Nomen
牛|牛[うし]|Rind, Kuh|彼[かれ]は 馬[うま]と 牛[うし]を 育[そだ]てている。|Er züchtet Pferde und Rinder.|Nomen
半分|半分[はんぶん]|Hälfte|今月[こんげつ]ももう 半分[はんぶん] 終[お]わっちゃったね。|Dieser Monat ist auch schon zur Hälfte rum.|Nomen
半年|半年[はんとし]|ein halbes Jahr|もし 半年[はんとし] 休[やす]みがあったら 何[なに]する？|Was fingest du an, wenn es ein halbes Jahr Urlaub gäbe?|Nomen
そのまま|そのまま|so wie es ist, unverändert|電話[でんわ]を 切[き]らずにそのまま 待[ま]ってください。|Nicht auflegen! Warten Sie!|Adverb
半月|半月[はんつき]|ein halber Monat|半月[はんつき]ほど 旅行[りょこう]に 出[で]かけます。|Ich verreise für etwa einen halben Monat.|Nomen
半日|半日[はんにち]|ein halber Tag|半日[はんにち]のツアーはありますか。|Gibt es Halbtagesausflüge?|Nomen
毎朝|毎朝[まいあさ]|jeden Morgen|彼[かれ]は 毎朝[まいあさ] 駅[えき]まで 走[はし]ります。|Er rennt allmorgendlich zum Bahnhof.|Nomen
今朝|今朝[けさ]|heute Morgen|今朝[けさ]は 早[はや]く 起[お]きたんだ。|Ich bin heute Morgen früh aufgestanden.|Nomen
もし|もし|falls, wenn|もし 誰[だれ]かが 私[わたし]たちを 見[み]てたらどうする？|Was machen wir, wenn uns jemand sieht?|Adverb
昼休み|昼休[ひるやす]み|Mittagspause|僕[ぼく]はあまりに 疲[つか]れていたので 昼休[ひるやす]みにひと 眠[ねむ]りした。|Ich habe während der Mittagspause ein wenig geschlafen, weil ich so müde war.|Nomen
昼前|昼前[ひるまえ]|am Vormittag, vor Mittag|郵便[ゆうびん]は 昼前[ひるまえ]に 来[く]る。|Die Post kommt am Vormittag.|Nomen
昼間|昼間[ひるま]|tagsüber|昼間[ひるま]は 祖母[そぼ]が 子供[こども]の 面倒[めんどう]を 見[み]てくれます。|Tagsüber passt Großmutter auf die Kinder auf.|Nomen
毎晩|毎晩[まいばん]|jeden Abend|私[わたし]は 毎晩[まいばん] 英語[えいご]を 勉強[べんきょう]する 習慣[しゅうかん]がある。|Ich habe die Gewohnheit, jeden Abend Englisch zu lernen.|Nomen
つもり|つもり|Absicht, Vorhaben|彼女[かのじょ]は 金持[かねも]ちと 結婚[けっこん]するつもりだ。|Sie will einen reichen Mann heiraten.|Nomen
今夜|今夜[こんや]|heute Abend, heute Nacht|今夜[こんや]は 十分[じゅうぶん]な 時間[じかん]がある。|Heute Abend haben wir jede Menge Zeit.|Nomen
昨夜|昨夜[ゆうべ]|gestern Abend, letzte Nacht|昨夜[ゆうべ]は 夕飯[ゆうはん]を 食[た]べなかった。|Ich habe gestern nichts zu Abend gegessen.|Nomen
夜中|夜中[よなか]|mitten in der Nacht|夜中[よなか] 過[す]ぎに 起[お]きました。|Wir wachten nach Mitternacht auf.|Nomen
夕方|夕方[ゆうがた]|früher Abend|今日[きょう]の 夕方[ゆうがた]にはお 届[とど]けできます。|Wir können es heute Abend liefern.|Nomen
やっと|やっと|endlich|やっと 二人[ふたり]っきりになれたね。|Endlich sind wir nur für uns zwei!|Adverb
昼食|昼食[ちゅうしょく]|Mittagessen|私[わたし]は 急[いそ]いで 昼食[ちゅうしょく]を 食[た]べた。|Ich aß hastig das Mittagessen.|Nomen
朝食|朝食[ちょうしょく]|Frühstück|朝食[ちょうしょく]に 何[なに]をとりましたか。|Was hast du zum Frühstück gegessen?|Nomen
夕食|夕食[ゆうしょく]|Abendessen|おいしい 夕食[ゆうしょく]をつくってあげるね。|Ich bereite dir ein schönes Abendessen zu.|Nomen
夕飯|夕飯[ゆうはん]|Abendessen|夕飯[ゆうはん]の 時間[じかん]ですよ。|Es ist Zeit für das Abendessen.|Nomen
ニュース|ニュース|Nachrichten|ニュース 見[み]ないの？|Siehst du keine Nachrichten?|Nomen
見方|見方[みかた]|Sichtweise, Betrachtungsweise|私[わたし]の 見[み] 方[かた]ではもう 少[すこ]し 待[ま]つほうがよさそうだ。|Nach meiner Ansicht wäre es besser, noch ein bisschen zu warten.|Nomen
花見|花見[はなみ]|Kirschblütenschau|花見[はなみ]をしに 来[き]ました。|Ich bin gekommen, um mir die Kirschblüten anzusehen.|Nomen
言い方|言[い]い 方[かた]|Ausdrucksweise, Art zu sprechen|何[なに]か 他[ほか]の 言[い]い 方[かた]はある？|Kann man das anders ausdrücken?|Nomen
話|話[はなし]|Gespräch, Geschichte|彼女[かのじょ]の 話[はなし]は 本当[ほんとう]かな？|Ist ihre Geschichte wahr?|Nomen
ずっと|ずっと|die ganze Zeit; viel (mehr)|私[わたし]は 駅[えき]までずっと 走[はし]った。|Ich bin den ganzen Weg zum Bahnhof gerannt.|Adverb
読み|読[よ]み|Lesen; Lesung; Einschätzung|「よくある 質問[しつもん]」はお 読[よ]みになりましたか？|Haben Sie die „Häufig gestellten Fragen“ gelesen?|Nomen
読み方|読[よ]み 方[かた]|Lesart, Lesung|誰[だれ]も 読[よ]み 方[かた]を 知[し]りませんでした。|Niemand wusste, wie man es liest.|Nomen
語る|語[かた]る|erzählen, reden|彼[かれ]はレポーターたちに 向[む]かって 語[かた]った。|Er drehte sich zu den Reportern und erzählte.|Verb
言語|言語[げんご]|Sprache|僕[ぼく]は 言語[げんご]を 勉強[べんきょう]するのが 好[す]きだ。|Ich lerne gerne Sprachen.|Nomen
ビデオ|ビデオ|Video|ビデオゲームが 大好[だいす]きです。|Ich liebe Videospiele.|Nomen
英語|英語[えいご]|Englisch|今日[きょう]の 午後[ごご]に 英語[えいご]の 試験[しけん]があります。|Heute Nachmittag gibt es einen Englischtest.|Nomen
文字|文字[もじ]|Schriftzeichen, Buchstabe|これはなんの 文字[もじ]ですか。|Was ist das für ein Buchstabe?|Nomen
ローマ字|ローマ 字[じ]|lateinische Schrift, Rōmaji|名前[なまえ]をローマ 字[じ]で 書[か]いてください。|Schreiben Sie Ihren Namen bitte in lateinischer Schrift.|Nomen
字|字[じ]|Schriftzeichen, Schrift|私[わたし]の 母[はは]は 字[じ]がきれいだ。|Meine Mutter hat eine schöne Handschrift.|Nomen
マンション|マンション|Eigentumswohnung, Wohnung (in einem größeren Wohnhaus)|食事付[しょくじつ]きの 学生[がくせい]マンションってありますか？|Gibt es ein Studentenwohnheim mit Kantine?|Nomen
書き方|書[か]き 方[かた]|Schreibweise|それの 書[か]き 方[かた] 知[し]ってるの？|Weißt du, wie man es schreibt?|Nomen
覚める|覚[さ]める|aufwachen|目[め]が 覚[さ]めたら 雪[ゆき]が 降[ふ]っていた。|Als ich aufwachte, schneite es.|Verb
覚ます|覚[さ]ます|aufwecken; (目を覚ます) aufwachen|目[め]を 覚[さ]ませよ！|Wach auf!|Verb
大会|大会[たいかい]|große Versammlung, Turnier, Wettbewerb|弁論[べんろん] 大会[たいかい]で 優勝[ゆうしょう]されておめでとうございます。|Herzlichen Glückwunsch zum ersten Preis im Redewettbewerb.|Nomen
しばらく|しばらく|eine Weile; lange nicht|私[わたし]たちはしばらく 休[やす]んだ。|Wir ruhten uns eine Weile aus.|Adverb
会話|会話[かいわ]|Gespräch, Unterhaltung|私[わたし]は 彼[かれ]との 会話[かいわ]を 楽[たの]しんだ。|Ich habe das Gespräch mit ihm genossen.|Nomen (mit する)
話し合う|話[はな]し 合[あ]う|besprechen, miteinander reden|話[はな]し 合[あ]うほどのことじゃないよ。|Es lohnt sich nicht, darüber zu reden.|Verb
合う|合[あ]う|passen|他[ほか]の 二[ふた]つの 訳[わけ]も 合[あ]ってないんだけど。|Die beiden anderen Übersetzungen passen auch nicht.|Verb
間に合う|間[ま]に 合[あ]う|rechtzeitig sein; ausreichen|学校[がっこう]に 間[ま]に 合[あ]わないよ。|Du wirst nicht rechtzeitig zur Schule kommen.|Verb
ガス|ガス|Gas|ガスを 消[け]しましたか。|Hast du das Gas abgedreht?|Nomen
会社|会社[かいしゃ]|Firma|最近[さいきん]、なぜ 会社[かいしゃ]に 顔[かお]を 見[み]せないの？|Warum zeigst du dich in letzter Zeit nicht in der Firma?|Nomen
社会|社会[しゃかい]|Gesellschaft|彼[かれ]は 社会[しゃかい]によかれと 思[おも]ってそれをした。|Er tat es zum Wohle der Gesellschaft.|Nomen
社員|社員[しゃいん]|Firmenangestellte(r)|彼女[かのじょ]はこの 会社[かいしゃ]の 正[せい] 社員[しゃいん]ではありません。|Sie ist keine feste Angestellte in dieser Firma.|Nomen
仕方|仕方[しかた]|Art und Weise, Methode|私[わたし]は 彼[かれ]の 質問[しつもん]の 仕方[しかた]をよく 知[し]っている。|Ich bin mit der Art, wie er Fragen stellt, vertraut.|Nomen
うまい|うまい|gut, geschickt|あなたはテニスがうまいそうですね。|Ich höre, dass du ein guter Tennisspieler wärst.|Adjektiv
食事|食事[しょくじ]|Mahlzeit, Essen|何時[なんじ]に 食事[しょくじ]をしましたか。|Wann hast du gegessen?|Nomen (mit する)
火事|火事[かじ]|Brand, Feuer|昨夜[ゆうべ] 近所[きんじょ]で 大[だい] 火事[かじ]があったんだ。|Letzte Nacht gab es in der Nachbarschaft einen großen Brand.|Nomen
大事|大事[だいじ]|wichtig, wertvoll|それが 一番[いちばん] 大事[だいじ]な 部分[ぶぶん]です。|Das ist der wichtigste Teil.|な-Adjektiv
事故|事故[じこ]|Unfall|本当[ほんとう]にそれは 事故[じこ]だったんですか？|War das wirklich ein Unfall?|Nomen
サラリーマン|サラリーマン|Angestellter (mit festem Gehalt)|彼[かれ]は 普通[ふつう]のサラリーマンだ。|Er ist ein normaler Büroangestellter.|Nomen
工事|工事[こうじ]|Bauarbeiten|大規模[だいきぼ]な 道路[どうろ] 工事[こうじ]が 始[はじ]まった。|Umfangreiche Straßenbauarbeiten haben begonnen.|Nomen (mit する)
工場|工場[こうじょう]|Fabrik|彼[かれ]は 工場[こうじょう]で 働[はたら]いている。|Er arbeitet in einer Fabrik.|Nomen
電話|電話[でんわ]|Telefon, Anruf|電話[でんわ] 借[か]りてもいい？|Darf ich mal dein Telefon benutzen?|Nomen (mit する)
電気|電気[でんき]|Strom; Licht|電気[でんき] 消[け]すの 忘[わす]れたかも。|Ich glaube, ich habe vergessen, das Licht auszuschalten.|Nomen
バス|バス|Bus|彼[かれ]はバスできました。|Er kam mit dem Bus.|Nomen
車|車[くるま]|Auto, Wagen|車[くるま]の 運転[うんてん]はしない 方[ほう]がいいよ。|Es wäre besser, wenn du kein Auto fahren würdest.|Nomen
駅員|駅員[えきいん]|Bahnhofsangestellte(r)|私[わたし]は 駅員[えきいん]に 切符[きっぷ]を 見[み]せました。|Ich zeigte dem Bahnhofsangestellten meine Fahrkarte.|Nomen
通り|通[とお]り|Straße, Durchgang|何人[なんにん]かが 通[とお]りを 渡[わた]ってくるのがわかる。|Ich kann einige Leute über die Straße gehen sehen.|Nomen
通る|通[とお]る|durchgehen, vorbeigehen, passieren|彼女[かのじょ]は 森[もり]の 中[なか]を 通[とお]るのが 怖[こわ]かった。|Sie fürchtete sich, durch den Wald zu gehen.|Verb
クラス|クラス|Klasse|私[わたし]は 私[わたし]たちのクラスの 中[なか]で 一番[いちばん] 背[せ]が 高[たか]い。|In unserer Klasse bin ich am größten.|Nomen
通う|通[かよ]う|regelmäßig hingehen, pendeln|どこの 高校[こうこう]に 通[かよ]ってるの？|Zu welchem Gymnasium gehst du?|Verb
交通事故|交通事故[こうつうじこ]|Verkehrsunfall|彼[かれ]は 交通[こうつう] 事故[じこ]に 遭[あ]った。|Er hatte einen Verkehrsunfall.|Nomen
水道|水道[すいどう]|Wasserleitung, Leitungswasser|昨日[きのう] 水道[すいどう]を 止[と]められた。|Gestern wurde die Wasserversorgung unterbrochen.|Nomen
車道|車道[しゃどう]|Fahrbahn|車道[しゃどう]を 歩[ある]くのは 危[あぶ]ないです。|Auf der Fahrbahn zu gehen ist gefährlich.|Nomen
トラック|トラック|Lastwagen|危[あぶ]ない！トラックが 来[く]るぞ！|Vorsicht! Ein Lastwagen kommt!|Nomen
道路|道路[どうろ]|Straße|これは 道路[どうろ] 地図[ちず]です。|Das ist eine Straßenkarte.|Nomen
土地|土地[とち]|Grundstück, Land|彼[かれ]は 土地[とち]をすべて 売[う]った。|Er hat sein ganzes Land verkauft.|Nomen
地図|地図[ちず]|Landkarte, Stadtplan|これは 地図[ちず]です。|Dies ist eine Landkarte.|Nomen
他|他[た]|andere, Sonstiges|その 他[た]の 質問[しつもん]はありますか。|Gibt es sonst noch Fragen?|Nomen
パーティー|パーティー|Party, Feier|パーティーが 大好[だいす]きなの。|Ich liebe Partys.|Nomen (mit する)
止める|止[と]める|anhalten, stoppen|彼[かれ]は 車[くるま]を 止[と]めた。|Er stoppte das Auto.|Verb
止まる|止[と]まる|stehen bleiben, anhalten|止[と]まらないと 撃[う]つぞ。|Bleib stehen, oder ich schieße.|Verb
止む|止[や]む|aufhören (Regen, Wind)|雨[あめ]が 止[や]むまで 待[ま]ちましょう。|Lass uns warten, bis der Regen aufhört.|Verb
歩道|歩道[ほどう]|Gehweg, Bürgersteig|歩道[ほどう]で 自転車[じてんしゃ]に 乗[の]ってはいけません。|Man sollte nicht auf dem Bürgersteig Fahrrad fahren.|Nomen
うまい|うまい|lecker (umgangssprachlich)|まだ 英語[えいご]でうまく 話[はな]せません。|Ich kann noch nicht gut Englisch sprechen.|Adjektiv
渡す|渡[わた]す|übergeben, hinüberreichen|彼[かれ]は 店員[てんいん]に 金[かね]を 渡[わた]した。|Er gab dem Verkäufer das Geld.|Verb
渡る|渡[わた]る|überqueren, hinübergehen|私[わたし] 達[たち]はボートで 川[かわ]を 渡[わた]った。|Wir haben den Fluss mit einem Boot überquert.|Verb
年度|年度[ねんど]|Geschäftsjahr, Schuljahr|来[らい] 年度[ねんど]は、 英語[えいご]を 教[おし]えます。|Im nächsten Schuljahr unterrichte ich Englisch.|Nomen
今度|今度[こんど]|dieses Mal; nächstes Mal|今度[こんど]くるときには 姉[あね]を 連[つ]れてきます。|Wenn ich das nächste Mal komme, bringe ich meine Schwester mit.|Nomen
ガラス|ガラス|Glas (Material)|ガラスは 割[わ]れやすいです。|Glas zerbricht leicht.|Nomen
何度|何度[なんど]|wie oft; wie viel Grad|今[いま]の 気温[きおん]は 何[なん] 度[ど]ですか？|Wieviel Grad haben wir?|Nomen
最近|最近[さいきん]|in letzter Zeit, neuerdings|彼[かれ]は 最近[さいきん] 飲[の]みすぎだ。|In letzter Zeit trinkt er zu viel.|Nomen
遠く|遠[とお]く|Ferne, weit weg|遠[とお]くに 山[やま]が 見[み]えます。|In der Ferne sieht man Berge.|Adverb
社長|社長[しゃちょう]|Firmenchef(in), Direktor(in)|社長[しゃちょう]は 外出中[がいしゅつちゅう]です。|Der Firmenchef ist außer Haus.|Nomen
コース|コース|Kurs; Strecke|世界史[せかいし]のコースを 取[と]ってるんだ。|Ich nehme an einem Kurs über Weltgeschichte teil.|Nomen
会長|会長[かいちょう]|Vorsitzende(r), Präsident(in)|私[わたし]は 多分[たぶん] 彼[かれ]を 私[わたし] 達[たち]の 会長[かいちょう]に 選[えら]びます。|Ich werde wahrscheinlich ihn zu unserem Vorsitzenden wählen.|Nomen
長さ|長[なが]さ|Länge|肩[かた]までの 長[なが]さでカットしてください。|Bitte kürzen Sie bis auf Schulterlänge.|Nomen
長男|長男[ちょうなん]|ältester Sohn|彼[かれ]は 長男[ちょうなん]です。|Er ist der älteste Sohn.|Nomen
長女|長女[ちょうじょ]|älteste Tochter|彼[かれ]が 一番[いちばん] 愛[あい]しているのは 彼女[かのじょ]の 長女[ちょうじょ]です。|Am meisten liebt er ihre älteste Tochter.|Nomen
アパート|アパート|Mietwohnung, Wohnhaus|いいアパートね。|Das ist aber eine tolle Wohnung!|Nomen
広がる|広[ひろ]がる|sich ausbreiten, sich erweitern|悪[わる]い 噂[うわさ]は 広[ひろ]がるのがはやい。|Schlechte Nachrichten verbreiten sich schnell.|Verb
広さ|広[ひろ]さ|Fläche, Weite|彼[かれ]の 部屋[へや]は 私[わたし]の 部屋[へや]の 倍[ばい]の 広[ひろ]さだ。|Sein Zimmer ist doppelt so groß wie meines.|Nomen
全体|全体[ぜんたい]|das Ganze, insgesamt|全体[ぜんたい] 的[てき]には、 賛成[さんせい]よ。|Im großen und ganzen stimme ich dir zu.|Nomen
全く|全[まった]く|völlig, überhaupt (nicht)|私[わたし]は 何[なに]が 起[お]こったのか 全[まった]く 分[わ]からなかった。|Mir war überhaupt nicht bewußt, was passiert war.|Adverb
レコード|レコード|Schallplatte; Rekord|私[わたし]はこれらのレコードのどれも 好[す]きではない。|Ich mag keine dieser Platten.|Nomen
安全|安全[あんぜん]|Sicherheit|安全[あんぜん] 運転[うんてん]してね。|Fahr sicher!|な-Adjektiv
一部|一部[いちぶ]|ein Teil|彼[かれ]の 話[はなし]の 一部[いちぶ]は 本当[ほんとう]だ。|Ein Teil seiner Geschichte ist wahr.|Nomen
部分|部分[ぶぶん]|Teil, Abschnitt|それは 部分[ぶぶん] 的[てき]な 成功[せいこう]でしかなかった。|Es war nur teilweise ein Erfolg.|Nomen
国内|国内[こくない]|Inland, im Land|アメリカへ 行[い]くくらいなら、 国内[こくない]にいるほうがましだ。|Bevor du nach Amerika gehst, kannst du genausogut in der Heimat bleiben.|Nomen
どんどん|どんどん|bum-bum (Klopfen); zügig, immer mehr|状況[じょうきょう]はどんどん 悪化[あっか]してます。|Die Situation verschlimmert sich zusehends.|Adverb
全国|全国[ぜんこく]|das ganze Land|ロシア 全国[ぜんこく]を 旅[たび]した。|Ich habe ganz Russland bereist.|Nomen
外国|外国[がいこく]|Ausland|私[わたし]は 外国[がいこく]に 行[い]きたい。|Ich möchte ins Ausland gehen.|Nomen
国会|国会[こっかい]|Parlament (Japans)|彼[かれ]は 国会[こっかい]の 中[なか]に 大勢[おおぜい]の 友人[ゆうじん]を 持[も]っている。|Er hat viele Freunde im Parlament.|Nomen
帰国|帰国[きこく]|Heimkehr ins eigene Land|ドイツからいつ 帰国[きこく]しましたか。|Wann bist du aus Deutschland zurückgekommen?|Nomen (mit する)
カメラ|カメラ|Kamera|カメラを 持[も]っていった。|Ich nahm meine Kamera mit.|Nomen
外国人|外国人[がいこくじん]|Ausländer(in)|明日[あした] 外国人[がいこくじん]の 友達[ともだち]と 会[あ]います。|Morgen treffe ich mich mit einem ausländischen Freund.|Nomen
外国語|外国語[がいこくご]|Fremdsprache|外国[がいこく] 語[ご]がとっても 楽[たの]しいと 分[わか]った。|Ich habe gemerkt, dass Fremdsprachen sehr viel Spaß machen.|Nomen
世界|世界[せかい]|Welt|彼女[かのじょ]は 世界[せかい] 的[てき]に 有名[ゆうめい]です。|Ihr Name ist auf der ganzen Welt bekannt.|Nomen
白|白[しろ]|Weiß|私[わたし]は 白[しろ]ワインよりも 赤[あか]ワインの 方[ほう]が 好[す]きだ。|Ich ziehe Rotwein Weißwein vor.|Nomen
テープ|テープ|Band, Kassette; Klebeband|明日[あした]までこのテープを 持[も]ってていいよ。|Du kannst diese Kassette bis morgen mitnehmen.|Nomen
黒い|黒[くろ]い|schwarz|それは 黒[くろ]くありませんか。|Ist es nicht schwarz?|Adjektiv
黒|黒[くろ]|Schwarz|黒[くろ]が 似合[にあ]ってるよ。|Schwarz steht dir.|Nomen
赤ちゃん|赤[あか]ちゃん|Baby|僕[ぼく]らの 赤[あか]ちゃんはまだ 話[はな]せない。|Unser Baby kann noch nicht sprechen.|Nomen
赤|赤[あか]|Rot|これは 赤[あか]ワインですか？|Ist das Rotwein?|Nomen
ビール|ビール|Bier|ビールありますか。|Haben Sie Bier?|Nomen
銀行|銀行[ぎんこう]|Bank|駅[えき]の 近[ちか]くに 銀行[ぎんこう]がありますか？|Gibt es in der Nähe des Bahnhofs eine Bank?|Nomen
銀|銀[ぎん]|Silber|かつて 日本[にほん]では 金[きん]は 銀[ぎん]よりも 価値[かち]が 低[ひく]かった。|Gold war in Japan einst weniger wert als Silber.|Nomen
地下鉄|地下鉄[ちかてつ]|U-Bahn|彼[かれ]らは 地下[ちか] 鉄[てつ]で 行[い]きました。|Sie fuhren mit der Untergrundbahn.|Nomen
牛肉|牛肉[ぎゅうにく]|Rindfleisch|牛肉[ぎゅうにく]は 高[たか]い。|Rindfleisch ist teuer.|Nomen
ページ|ページ|Seite|探[さが]してたページが 見[み]つからない。|Ich kann die Seite, nach der ich suchte, nicht finden.|Nomen
肉|肉[にく]|Fleisch|お 肉[にく]は 食[た]べられません。|Ich kann kein Fleisch essen.|Nomen
魚|魚[さかな]|Fisch|魚[さかな]は 音[おと]が 聞[き]こえると 思[おも]いますか。|Glaubst du, dass Fische hören können?|Nomen
分野|分野[ぶんや]|Gebiet, Bereich|代数[だいすう]は 数学[すうがく]の 一[いち] 分野[ぶんや]である。|Die Algebra ist ein Teilgebiet der Mathematik.|Nomen
野菜|野菜[やさい]|Gemüse|もっと 野菜[やさい]を 食[た]べた 方[ほう]がいいよ。|Du musst mehr Gemüse essen!|Nomen
グラフ|グラフ|Diagramm, Grafik|蓄積[ちくせき]されたデータを 表[ひょう]やグラフに 可視化[かしか]する。|Die gesammelten Daten werden in Tabellen und Diagrammen sichtbar gemacht.|Nomen
本屋|本屋[ほんや]|Buchhandlung|通[とお]りがけに 本屋[ほんや]によった。|Unterwegs bin ich bei einer Buchhandlung vorbeigegangen.|Nomen
八百屋|八百屋[やおや]|Gemüseladen|私[わたし]は 八百屋[やおや]の 外[そと]で 彼[かれ]に 出会[であ]った。|Ich habe ihn vor dem Gemüseladen getroffen.|Nomen
そば屋|そば 屋[や]|Soba-Restaurant|駅前[えきまえ]のそば 屋[や]で 昼[ひる]ご 飯[はん]を 食[た]べました。|Ich habe im Soba-Restaurant vor dem Bahnhof zu Mittag gegessen.|Nomen
たばこ屋|たばこ 屋[や]|Tabakladen|角[かど]のたばこ 屋[や]はもう 閉[し]まっています。|Der Tabakladen an der Ecke hat schon geschlossen.|Nomen
ポスト|ポスト|Briefkasten|手紙[てがみ]を 忘[わす]れずにポストに 入[い]れてください。|Vergiss bitte nicht, den Brief in den Briefkasten einzuwerfen!|Nomen
茶|茶[ちゃ]|Tee|お 茶[ちゃ]とコーヒーではどちらが 好[す]きですか。|Was mögen Sie lieber, Tee oder Kaffee?|Nomen
お茶|お 茶[ちゃ]|Tee (höflich)|ゆっくりしてお 茶[ちゃ]でも 飲[の]んでいきませんか。|Wollen Sie nicht noch zum Tee bleiben?|Nomen
茶わん|茶[ちゃ]わん|Reisschale, Teeschale|この 茶[ちゃ]わんはなんとすばらしいのでしょう。|Wie wunderschön diese Schale ist!|Nomen
味|味[あじ]|Geschmack|私[わたし]のお 気[き]に 入[い]りの 味[あじ]はチョコレートです。|Mein Lieblingsgeschmack ist Schokolade.|Nomen
テスト|テスト|Test, Prüfung|数学[すうがく]のテストはどうでしたか。|Wie war die Matheprüfung?|Nomen (mit する)
未来|未来[みらい]|Zukunft|未来[みらい]は 誰[だれ]にも 分[わ]からない。|Niemand kennt die Zukunft.|Nomen
週末|週末[しゅうまつ]|Wochenende|週末[しゅうまつ]に 仕事[しごと]するのは 好[す]きじゃないんだ。|Ich arbeite nicht gerne am Wochenende.|Nomen
料理|料理[りょうり]|Kochen; Gericht|私[わたし]はテニスより 料理[りょうり]のほうができます。|Ich koche besser, als ich Tennis spiele.|Nomen (mit する)
無理|無理[むり]|unmöglich, unzumutbar|俺[おれ]には 無理[むり]だ。|Das ist mir unmöglich.|な-Adjektiv
あちこち|あちこち|hier und da, überall|あちこちでそれを 捜[さが]した。|Ich habe überall danach gesucht.|Nomen
無くす|無[な]くす|verlieren; beseitigen|今日[きょう]ノートを 無[な]くしちゃったんだ。|Ich habe heute mein Notebook verloren.|Verb
無くなる|無[な]くなる|verschwinden, ausgehen, verloren gehen|金[かね]というものはすぐ 無[な]くなるものだ。|Geld ist schnell weg.|Verb
作文|作文[さくぶん]|Aufsatz|先生[せんせい]は 私[わたし]の 作文[さくぶん]を 見[み]てくれた。|Der Lehrer sah meinen Aufsatz durch.|Nomen
用いる|用[もち]いる|verwenden, gebrauchen|過去[かこ]の 動作[どうさ]については 過去形[かこけい]を 用[もち]います。|Man verwendet die Vergangenheitsform, um über Handlungen in der Vergangenheit zu sprechen.|Verb
ゴルフ|ゴルフ|Golf|テニスとゴルフが 好[す]きですね。|Ich spiele gerne Tennis und Golf.|Nomen
用事|用事[ようじ]|Besorgung, Angelegenheit|明日[あした]は 用事[ようじ]があります。|Ich muss morgen etwas erledigen.|Nomen
交通費|交通費[こうつうひ]|Fahrtkosten|交通費[こうつうひ]は 会社[かいしゃ]が 払[はら]います。|Die Fahrtkosten bezahlt die Firma.|Nomen
消える|消[き]える|ausgehen, erlöschen; verschwinden|火[ひ]が 消[き]えた。|Das Feuer ist ausgegangen.|Verb
消しゴム|消[け]しゴム|Radiergummi|消[け]しゴム 返[かえ]してよ。|Gib mir mein Radiergummi zurück!|Nomen
ラジオ|ラジオ|Radio|ラジオの 音[おと]が 大[おお]きすぎる。|Das Radio ist zu laut.|Nomen
売れる|売[う]れる|sich verkaufen, gefragt sein|甘[あま]いものはよく 売[う]れている。|Die Süßigkeiten verkaufen sich gut.|Verb
売り場|売[う]り 場[ば]|Verkaufsabteilung, Verkaufsstand|切符[きっぷ] 売[う]り 場[ば]はどこですか？|Wo ist der Fahrkartenschalter?|Nomen
店員|店員[てんいん]|Verkäufer(in)|トムは 店員[てんいん]の 名札[なふだ]をチラッと 見[み]た。|Tom warf einen Blick auf das Namensschild des Verkäufers.|Nomen
売店|売店[ばいてん]|Kiosk, Verkaufsstand|売店[ばいてん]で 聞[き]いてください。|Fragen Sie bitte am Kiosk.|Nomen
タクシー|タクシー|Taxi|タクシーで 行[い]くほうがいいと 思[おも]います。|Ich finde, du solltest mit dem Taxi fahren.|Nomen
商品|商品[しょうひん]|Ware, Produkt|大量生産[たいりょうせいさん]が 多[おお]くの 商品[しょうひん] 価格[かかく]を 下[さ]げた。|Massenproduktion hat die Preise vieler Waren gesenkt.|Nomen
作品|作品[さくひん]|Werk, Kunstwerk|彼[かれ]の 作品[さくひん]を 彼女[かのじょ]のと 比較[ひかく]してみよう。|Versuchen wir, seine Werke mit ihren zu vergleichen.|Nomen
販売|販売[はんばい]|Verkauf|販売[はんばい] 価格[かかく]が 赤[あか]で 書[か]いてあることに 気付[きづ]く。|Ich habe festgestellt, dass die Verkaufspreise in Rot geschrieben sind.|Nomen (mit する)
二階|二階[にかい]|erster Stock, Obergeschoss|二[に] 階[かい]の 部屋[へや]を 学生[がくせい]に 貸[か]した。|Sie haben das Zimmer im ersten Stock an einen Studenten vermietet.|Nomen
ゆっくり|ゆっくり|langsam, in Ruhe|ドアがゆっくりと 開[あ]いた。|Die Tür öffnete sich langsam.|Adverb
段階|段階[だんかい]|Stufe, Phase|現[げん] 段階[だんかい]では 何[なに]もお 話[はな]しできません。|Zum jetzigen Zeitpunkt kann ich nichts sagen.|Nomen
階段|階段[かいだん]|Treppe|なんて 狭[せま]い 階段[かいだん]なんだ！|Was für eine schmale Treppe!|Nomen
段々|段々[だんだん]|allmählich, nach und nach|年[とし]をとるにつれて 記憶力[きおくりょく]は 段々[だんだん] 衰[おとろ]える。|Je älter wir werden, desto mehr lässt unser Gedächtnisvermögen nach.|Adverb
値段|値段[ねだん]|Preis|金[きん]の 値段[ねだん]は 日[ひ]ごとに 変[か]わる。|Der Goldpreis ändert sich von Tag zu Tag.|Nomen
レストラン|レストラン|Restaurant|ここが 一番[いちばん] 初[はじ]めに 働[はたら]いたレストランよ。|Das ist das allererste Restaurant, in dem ich gearbeitet habe.|Nomen
価格|価格[かかく]|Preis|価格[かかく]は 需要[じゅよう]を 反映[はんえい]する。|Der Preis spiegelt die Nachfrage.|Nomen
合格|合格[ごうかく]|Bestehen (einer Prüfung)|彼[かれ]はきっと 今度[こんど]の 試験[しけん]に 合格[ごうかく]するだろう。|Ich bin sicher, er wird die nächste Prüfung bestehen.|Nomen (mit する)
夏休み|夏休[なつやす]み|Sommerferien|もうすぐ 夏休[なつやす]みです。|Bald sind Sommerferien.|Nomen
冬休み|冬休[ふゆやす]み|Winterferien|冬休[ふゆやす]み 何日[なんにち]から？|Wann gehen die Winterferien los?|Nomen
カード|カード|Karte, Kreditkarte|クリスマスカードって 何[なん] 枚[まい] 送[おく]った？|Wie viele Weihnachtskarten hast du verschickt?|Nomen
四季|四季[しき]|die vier Jahreszeiten|日本[にほん]には 四季[しき]があります。|In Japan gibt es vier Jahreszeiten.|Nomen
暑さ|暑[あつ]さ|Hitze|夏[なつ]の 暑[あつ]さにももう 慣[な]れました。|Auch an die Hitze des Sommers habe ich mich schon gewöhnt.|Nomen
熱|熱[ねつ]|Hitze; Fieber|どうも 熱[ねつ]がありそうだ。|Ich scheine Fieber zu haben.|Nomen
寒さ|寒[さむ]さ|Kälte|外[そと]は 身[み]を 切[き]るような 寒[さむ]さだった。|Draußen herrschte eine durchdringende Kälte.|Nomen
アルバイト|アルバイト|Nebenjob, Aushilfsjob|アルバイトをしてないから、お 金[かね]を 貯[た]められない。|Ich habe keine Arbeit und kann deshalb nie sparen.|Nomen (mit する)
暖める|暖[あたた]める|wärmen, aufwärmen|私[わたし]は 火[ひ]に 当[あ]たって 体[からだ]を 暖[あたた]めた。|Ich wärmte mich am Feuer.|Verb
暖まる|暖[あたた]まる|warm werden|風呂[ふろ]に 入[はい]って 暖[あたた]まった 方[ほう]がいいよ。|Es wäre besser, wenn du ein Bad nehmen und dich aufwärmen würdest.|Verb
温度|温度[おんど]|Temperatur|温度[おんど]が 下[さ]がる。|Die Temperatur fällt.|Nomen
気温|気温[きおん]|Lufttemperatur|気温[きおん]が 急[きゅう]に 下[さ]がった。|Die Lufttemperatur fiel plötzlich.|Nomen
コピー|コピー|Kopie|先生[せんせい]は 学生[がくせい]に 新聞[しんぶん]のコピーを 渡[わた]しました。|Der Lehrer gab den Schülern eine Kopie der Zeitung.|Nomen (mit する)
台|台[だい]|Gestell, Podest, Ständer|彼[かれ]は 私[わたし]を 実験[じっけん] 台[だい]に 使[つか]った。|Er benutzte mich als Versuchskaninchen.|Nomen
風|風[かぜ]|Wind|今朝[けさ]は 風[かぜ]が 強[つよ]いですね。|Heute Morgen ist es sehr windig, nicht?|Nomen
台風|台風[たいふう]|Taifun|台風[たいふう]のため 学校[がっこう]が 休[やす]みになった。|Wegen des Taifuns fiel die Schule aus.|Nomen
事情|事情[じじょう]|Umstände, Lage|事情[じじょう]は 後[あと]で 説明[せつめい]する。|Ich erkläre die Lage später.|Nomen
ぶつかる|ぶつかる|zusammenstoßen, anstoßen|車[くるま]がトラックに 激[はげ]しくぶつかった。|Das Auto stieß mit dem LKW zusammen.|Verb
情報|情報[じょうほう]|Information|情報[じょうほう]を 収集[しゅうしゅう]しなければならない。|Wir müssen Informationen sammeln.|Nomen
報告|報告[ほうこく]|Bericht, Meldung|あなたの 報告[ほうこく] 書[しょ]を 読[よ]みました。|Ich habe Ihren Bericht gelesen.|Nomen (mit する)
新聞|新聞[しんぶん]|Zeitung|今日[きょう]の 新聞[しんぶん]はどこ。|Wo ist die Zeitung von heute?|Nomen
新年|新年[しんねん]|Neujahr, neues Jahr|トムとメアリーは 新年[しんねん] 会[かい]で 知[し]り 合[あ]った。|Tom und Maria lernten sich auf einer Neujahrsfeier kennen.|Nomen
フィルム|フィルム|Film (für die Kamera)|カメラにフィルムを 入[い]れるのを 忘[わす]れた。|Ich habe vergessen, einen Film in die Kamera einzulegen.|Nomen
良い|良[よ]い|gut, passend|映画[えいが]は 良[よ]かったですか。|War der Film gut?|Adjektiv
中心|中心[ちゅうしん]|Zentrum, Mitte|彼[かれ]は 自分[じぶん]が 世界[せかい]の 中心[ちゅうしん]だと 思[おも]っている。|Er hält sich für den Mittelpunkt der Welt.|Nomen
安心|安心[あんしん]|Beruhigung, Erleichterung|それ 聞[き]いて 安心[あんしん]したよ。|Es beruhigt mich, das zu hören.|Nomen (mit する)
思い出す|思[おも]い 出[だ]す|sich erinnern, einfallen|だんだん 思[おも]い 出[だ]してきたぞ。|Ich fange an, mich daran zu erinnern.|Verb
デパート|デパート|Kaufhaus|母[はは]はデパートへ 買[か]い 物[もの]に 行[い]きました。|Mutter ging im Kaufhaus einkaufen.|Nomen
思い出|思[おも]い 出[で]|Erinnerung|友情[ゆうじょう]は 思[おも]い 出[で]よりも 長[なが]く 残[のこ]るものだ。|Freundschaft überdauert Erinnerungen.|Nomen
考え|考[かんが]え|Gedanke, Idee|いい 考[かんが]えがあります。|Ich habe eine gute Idee.|Nomen
解決|解決[かいけつ]|Lösung|解決[かいけつ] 策[さく]はきっと 見[み]つけられる。|Es kann bestimmt eine Lösung gefunden werden.|Nomen (mit する)
知らせる|知[し]らせる|mitteilen, benachrichtigen|誰[だれ]に 知[し]らせればいいですか。|Wen sollte ich in Kenntnis setzen?|Verb
ベッド|ベッド|Bett|どっちのベッドを 使[つか]いたい？|Welches Bett möchtest du?|Nomen
能力|能力[のうりょく]|Fähigkeit|話[はな]すことは 人間[にんげん]の 能力[のうりょく]の 一[ひと]つである。|Sprechen ist eine Fähigkeit des Menschen.|Nomen
可能|可能[かのう]|möglich|でも 可能[かのう] 性[せい]は 低[ひく]そうだね。|Aber die Möglichkeit scheint unwahrscheinlich.|な-Adjektiv
可|可[か]|erlaubt, möglich|数学[すうがく]は 何[なん]とか 可[か]を 取[と]った。|Ich habe in Mathe gerade so eine Vier geschafft.|Nomen
郵便|郵便[ゆうびん]|Post|郵便[ゆうびん]が 届[とど]いた。|Die Postsendung ist angekommen.|Nomen
コート|コート|Mantel|彼[かれ]は 上着[うわぎ]をコート 掛[か]けにかけた。|Er hängte seinen Mantel an den Haken.|Nomen
不便|不便[ふべん]|unpraktisch, unbequem|電話[でんわ]がないのは 不便[ふべん]だ。|Kein Telefon zu haben ist ungünstig.|な-Adjektiv
郵便屋さん|郵便屋[ゆうびんや]さん|Briefträger(in)|郵便[ゆうびん] 屋[や]さんはもう 来[き]ましたか。|War der Briefträger schon da?|Nomen
郵便局|郵便局[ゆうびんきょく]|Postamt|郵便[ゆうびん] 局[きょく]はどこですか。|Wo ist das Postamt?|Nomen
交番|交番[こうばん]|Polizeiwache (kleiner Polizeiposten)|交番[こうばん]はどこにあるかわかりますか。|Wissen Sie, wo die Polizeiwache ist?|Nomen
ノート|ノート|Heft, Notizbuch|これは 私[わたし]のノートです。|Das ist mein Notizbuch.|Nomen
番地|番地[ばんち]|Hausnummer, Grundstücksnummer|ここの 番地[ばんち]を 教[おし]えてください。|Sagen Sie mir bitte die Hausnummer hier.|Nomen
番号|番号[ばんごう]|Nummer|彼女[かのじょ]は 彼[かれ]に 名前[なまえ]と 電話[でんわ] 番号[ばんごう]を 教[おし]えた。|Sie gab ihm ihren Namen und ihre Telefonnummer.|Nomen
場所|場所[ばしょ]|Ort, Platz|荷物[にもつ]を 置[お]く 場所[ばしょ]を 空[あ]けてくれ。|Mach Platz für das Gepäck!|Nomen
近所|近所[きんじょ]|Nachbarschaft|彼[かれ]が 近所[きんじょ]に 越[こ]してきた。|Er ist in meine Nachbarschaft umgezogen.|Nomen
ワイン|ワイン|Wein|ワインは 葡萄[ぶどう]から 作[つく]られる。|Wein wird aus Trauben gemacht.|Nomen
台所|台所[だいどころ]|Küche|朝食[ちょうしょく]はいつも 台所[だいどころ]で 食[た]べるんですよ。|Ich frühstücke immer in der Küche.|Nomen
住所|住所[じゅうしょ]|Adresse|彼女[かのじょ]の 住所[じゅうしょ]を 彼[かれ]に 知[し]らせてはいけない。|Lass ihn nicht ihre Adresse wissen.|Nomen
便所|便所[べんじょ]|Toilette, Klo|生徒[せいと]はこの 便所[べんじょ]を 使[つか]ってはならない。|Schüler dürfen diese Toilette nicht benutzen.|Nomen
有名|有名[ゆうめい]|berühmt|彼[かれ]はたぶん 有名[ゆうめい]にならない。|Er wird wahrscheinlich nicht berühmt.|な-Adjektiv
おかしい|おかしい|seltsam, merkwürdig|何[なに]かおかしいと 思[おも]います。|Ich spüre, dass etwas nicht stimmt.|Adjektiv
名字|名字[みょうじ]|Familienname|自分[じぶん]の 名字[みょうじ]、 好[す]きよ。|Ich mag meinen Familiennamen.|Nomen
氏名|氏名[しめい]|voller Name|住所[じゅうしょ] 氏名[しめい]を 言[い]ってください。|Name und Adresse, bitte.|Nomen
各国|各国[かっこく]|jedes Land, die einzelnen Länder|各国[かっこく]にはそれぞれの 習慣[しゅうかん]がある。|Jedes Land hat seine eigenen Bräuche.|Nomen
町|町[まち]|Stadt, Ort|ここは 本当[ほんとう]にきれいな 町[まち]だなあ！|Diese Stadt ist wirklich schön!|Nomen
トイレ|トイレ|Toilette|トイレはどこにありますか。|Wo ist die Toilette?|Nomen
都市|都市[とし]|Stadt, Großstadt|ナポリは 絵[え]のように 美[うつく]しい 都市[とし]です。|Neapel ist eine malerische Stadt.|Nomen
都合|都合[つごう]|Umstände, Gelegenheit; passen|何時[なんじ]がご 都合[つごう]がいいですか。|Um wie viel Uhr würde es Ihnen passen?|Nomen
朝御飯|朝御飯[あさごはん]|Frühstück|朝御飯[あさごはん]ができています。|Das Frühstück ist fertig.|Nomen
買い物|買[か]い 物[もの]|Einkauf, Einkaufen|あなたは 毎日[まいにち] 買[か]い 物[もの]に 行[い]きますか。|Gehst du jeden Tag einkaufen?|Nomen (mit する)
キャンプ|キャンプ|Camping, Zeltlager|キャンプ 用品[ようひん]は 持[も]ってないよ。|Ich habe gar keine Campingausrüstung.|Nomen (mit する)
荷物|荷物[にもつ]|Gepäck, Paket|荷物[にもつ]は 何個[なんこ]ですか。|Wie viele Gepäckstücke haben Sie?|Nomen
品物|品物[しなもの]|Ware, Artikel|品物[しなもの]は 昨日[きのう] 入荷[にゅうか]しました。|Die Ware kam gestern an.|Nomen
見物|見物[けんぶつ]|Besichtigung|私[わたし] 達[たち]は 横浜[よこはま]を 見物[けんぶつ]した。|Wir besichtigten Yokohama.|Nomen (mit する)
物|物[もの]|Ding, Sache|甘[あま]い 物[もの] 好[す]きですか。|Magst du süße Sachen?|Nomen
プラスチック|プラスチック|Plastik, Kunststoff|これらの 箱[はこ]はプラスチック 製[せい]です。|Diese Schachteln sind aus Plastik.|Nomen
忘れ物|忘[わす]れ 物[もの]|vergessener Gegenstand, Fundsache|そのかばんは 忘[わす]れ 物[もの]なんだ。|Die Tasche ist vergessen worden.|Nomen
重さ|重[おも]さ|Gewicht|ポンドは 重[おも]さの 単位[たんい]である。|Ein Pfund ist eine Gewichtseinheit.|Nomen
配る|配[くば]る|verteilen, austeilen|僕[ぼく]たちにトランプを 配[くば]ってくれ。|Teile uns die Karten aus.|Verb
配達|配達[はいたつ]|Lieferung, Zustellung|新聞[しんぶん] 配達[はいたつ]の 少年[しょうねん]はどんな 天気[てんき]でも 新聞[しんぶん]を 配達[はいたつ]する。|Der Zeitungsjunge liefert die Zeitung bei jedem Wetter.|Nomen (mit する)
カラー|カラー|Farbe, farbig|カラーフィルムを 一本[いっぽん]ください。|Eine Rolle Farbfilm, bitte!|Nomen
心配|心配[しんぱい]|Sorge|テストの 結果[けっか]が 心配[しんぱい]だ。|Ich mache mir Sorgen wegen des Testergebnisses.|Nomen (mit する)
見送る|見送[みおく]る|verabschieden, zum Abschied begleiten|旅行[りょこう]には 行[い]きたいけど、 今回[こんかい]は 見送[みおく]ります。|Ich möchte schon gerne verreisen, aber diesmal blicke ich dir nur nach.|Verb
見送り|見送[みおく]り|Verabschiedung, Abschiedsbegleitung|彼[かれ]は 友達[ともだち]を 見送[みおく]りに 駅[えき]へ 行[い]って 来[き]たところだ。|Er kommt gerade vom Bahnhof, wo er seinen Freund verabschiedet hat.|Nomen (mit する)
受ける|受[う]ける|bekommen, annehmen; ablegen (Prüfung)|昨日[きのう] 彼女[かのじょ]は 入学試験[にゅうがくしけん]を 受[う]けた。|Gestern hat sie an der Aufnahmeprüfung teilgenommen.|Verb
ピアノ|ピアノ|Klavier|あなたはピアノをやるそうですね。|Ich habe gehört, du spielst Klavier.|Nomen
受け取る|受[う]け 取[と]る|erhalten, entgegennehmen; auffassen|お 手紙[てがみ]を 受[う]け 取[と]りました。|Ich habe einen Brief entgegengenommen.|Verb
取れる|取[と]れる|abgehen, sich lösen|良[よ]い 席[せき]が 取[と]れるように 早[はや]く 来[き]た。|Ich kam frühzeitig, um mir noch einen guten Platz zu sichern.|Verb
書き取る|書[か]き 取[と]る|aufschreiben, mitschreiben|今[いま]から 言[い]うことを 書[か]き 取[と]ってください。|Schreiben Sie, was ich Ihnen ansage!|Verb
届く|届[とど]く|ankommen, erreichen|荷物[にもつ]は 届[とど]きましたか。|Ist mein Gepäck angeliefert worden?|Verb
スキー|スキー|Ski, Skifahren|妹[いもうと]がスキーを 教[おし]えてほしいと 私[わたし]に 頼[たの]んできた。|Meine kleine Schwester bat mich, ihr das Skifahren beizubringen.|Nomen
届ける|届[とど]ける|zustellen, hinbringen; melden|私達[わたくしたち]は 彼[かれ]の 失踪[しっそう]を 届[とど]けた。|Wir meldeten sein Verschwinden.|Verb
持つ|持[も]つ|halten, haltbar sein|好[す]きなのを 持[も]って 行[い]っていいよ。|Nimm mit, welches du willst!|Verb
金持ち|金持[かねも]ち|reicher Mensch, reich|彼[かれ]は 金持[かねも]ちであったかのように 見[み]えた。|Er schien reich gewesen zu sein.|Nomen
持って行く|持[も]って 行[い]く|mitnehmen|何[なに]か 読[よ]む 物[もの]、 持[も]って 行[い]った 方[ほう]がいいかな？|Ob ich wohl etwas zu lesen mitnehme?|Verb
なかなか|なかなか|ziemlich; (mit Verneinung) einfach nicht|トムはなかなか 仕事[しごと]が 見[み]つからなかった。|Tom fand einfach keine Arbeit.|Adverb
持って来る|持[も]って 来[く]る|mitbringen|彼女[かのじょ]は 私[わたし]にお 茶[ちゃ]を 一杯[いっぱい] 持[も]って 来[き]ました。|Sie hat mir eine Tasse Tee gebracht.|Verb
打つ|打[う]つ|schlagen, treffen; sich stoßen|私[わたし]たちには 手[て]の 打[う]ちようが 無[な]いんです。|Da können wir nichts machen.|Verb
投げる|投[な]げる|werfen; aufgeben|石[いし]を 投[な]げて 窓[まど]を 割[わ]ったのは 誰[だれ]だ。|Wer hat das Fenster mit einem Stein eingeworfen?|Verb
生まれる|生[う]まれる|geboren werden, entstehen|ここが 彼[かれ]の 生[う]まれた 家[いえ]です。|Das hier ist das Haus, in dem er geboren wurde.|Verb
プール|プール|Schwimmbad|プールに 石[いし]を 投[な]げるな。|Schmeiß keine Steine ins Schwimmbecken.|Nomen
生む|生[う]む|gebären, zur Welt bringen|彼女[かのじょ]は 双子[ふたご]の 女[おんな]の 子[こ]を 生[う]んだ。|Sie brachte Zwillinge zur Welt, zwei Mädchen.|Verb
女性|女性[じょせい]|Frau, weiblich|彼女[かのじょ]は 強[つよ]い 女性[じょせい]です。|Sie ist eine starke Frau.|Nomen
生産|生産[せいさん]|Produktion, Herstellung|その 工場[こうじょう]は 綿製品[めんせいひん]を 生産[せいさん]する。|Diese Fabrik stellt Baumwollprodukte her.|Nomen (mit する)
お土産|お 土産[みやげ]|Mitbringsel, Souvenir|ホテル 内[ない]にお 土産[みやげ] 屋[や]さんはありますか？|Gibt es einen Souvenirladen in dem Hotel?|Nomen
ホーム|ホーム|Bahnsteig|彼女[かのじょ]はもう 少[すこ]しでホームから 落[お]ちそうだった。|Es sah aus, als würde sie gleich vom Bahnsteig fallen.|Nomen
生活|生活[せいかつ]|Leben, Alltag|音楽[おんがく]は 私[わたし] 達[たち]の 生活[せいかつ]を 楽[たの]しくする。|Musik erfüllt unser Leben mit Freude.|Nomen (mit する)
生徒|生徒[せいと]|Schüler(in)|数人[すうにん]の 生徒[せいと]が 風邪[かぜ]で 学校[がっこう]を 休[やす]んだ。|Einige Schüler fehlten wegen einer Grippe.|Nomen
中学|中学[ちゅうがく]|Mittelschule|彼[かれ]は 中学[ちゅうがく] 生[せい]になった。|Er kam in die Mittelstufe.|Nomen
入学|入学[にゅうがく]|Schuleintritt, Studienbeginn|もし 大学[だいがく]に 入学[にゅうがく]できたら、 経済学[けいざいがく]をやるつもりです。|Wenn ich an der Universität angenommen werde, habe ich vor, Wirtschaftswissenschaften zu studieren.|Nomen (mit する)
エレベーター|エレベーター|Aufzug|エレベーターはどこですか。|Wo ist der Aufzug?|Nomen
中学生|中学生[ちゅうがくせい]|Mittelschüler(in)|私[わたし]たちは 中学[ちゅうがく] 生[せい]です。|Wir sind Mittelstufenschüler.|Nomen
小学生|小学生[しょうがくせい]|Grundschüler(in)|最近[さいきん]の 小学[しょうがく] 生[せい]って 身長[しんちょう] 高[たか]いと 思[おも]わない？|Findest du nicht auch, dass die Grundschüler heutzutage ganz schön groß sind?|Nomen
見学|見学[けんがく]|Besichtigung (zu Lernzwecken)|どういう 所[ところ]を 見学[けんがく]したいですか。|Was für Orte möchten Sie besichtigen?|Nomen (mit する)
通学|通学[つうがく]|Schulweg, Schulbesuch|いつもバス 通学[つうがく]です。|Ich fahre immer mit dem Bus zur Schule.|Nomen (mit する)
メモ|メモ|Notiz, Memo|自分[じぶん]のメモを 見[み]た。|Ich betrachtete meine Notizen.|Nomen
高校|高校[こうこう]|Oberschule|彼[かれ]は 高校[こうこう]の 生徒[せいと]です。|Er ist ein Schüler der Oberschule.|Nomen
小学校|小学校[しょうがっこう]|Grundschule|あなたは 小[しょう] 学校[がっこう]に 通[かよ]っているの？|Gehst du zur Grundschule?|Nomen
中学校|中学校[ちゅうがっこう]|Mittelschule|父[ちち]は 中[ちゅう] 学校[がっこう]で 英語[えいご]を 教[おし]えています。|Mein Vater unterrichtet Englisch an einer Mittelschule.|Nomen
校長|校長[こうちょう]|Schulleiter(in)|私[わたし]たちの 学校[がっこう]の 校長[こうちょう] 先生[せんせい]はアメリカ 人[じん]です。|Unser Schulleiter ist Amerikaner.|Nomen
パン|パン|Brot|毎日[まいにち]パンを 食[た]べます。|Wir essen jeden Tag Brot.|Nomen
休校|休校[きゅうこう]|vorübergehende Schulschließung|雪[ゆき]のため 学校[がっこう]はその 日[ひ] 休校[きゅうこう]になった。|Wegen des Schnees fiel die Schule an diesem Tag aus.|Nomen (mit する)
教会|教会[きょうかい]|Kirche|むこうに 教会[きょうかい]が 見[み]えます。|Gegenüber kann man eine Kirche sehen.|Nomen
教育|教育[きょういく]|Bildung, Erziehung|彼[かれ]は 子供[こども]たちに 良[よ]い 教育[きょういく]を 受[う]けさせた。|Er gab seinen Kindern eine gute Erziehung.|Nomen (mit する)
育てる|育[そだ]てる|großziehen, aufziehen|私[わたし]は 祖母[そぼ]に 育[そだ]てられた。|Ich wurde von meiner Großmutter großgezogen.|Verb
びっくりする|びっくりする|erschrecken, überrascht sein|本当[ほんとう]にびっくりした？|Hast du dich wirklich erschrocken?|Verb
育つ|育[そだ]つ|aufwachsen, gedeihen|私[わたし]は 横浜[よこはま]で 育[そだ]った。|Ich bin in Yokohama aufgewachsen.|Verb
制度|制度[せいど]|System, Regelung|彼[かれ]らは 古[ふる]い 制度[せいど]を 廃止[はいし]した。|Sie schafften das alte System ab.|Nomen
強さ|強[つよ]さ|Stärke|彼[かれ]は 彼女[かのじょ]の 愛情[あいじょう]の 強[つよ]さに 圧倒[あっとう]された。|Er war von der Intensität ihrer Liebe überwältigt.|Nomen
取引|取引[とりひき]|Geschäft, Handel|俺[おれ]たちは 取引[とりひき]をした。|Wir haben einen Handel gemacht.|Nomen (mit する)
ズボン|ズボン|Hose|それは 僕[ぼく]のズボンです。|Das ist meine Hose.|Nomen
引き出し|引[ひ]き 出[だ]し|Schublade; Abhebung|それは 引[ひ]き 出[だ]しに 入[い]れておきました。|Ich habe es in die Schublade gesteckt.|Nomen
押さえる|押[お]さえる|festhalten, niederhalten|戸[と]を 押[お]さえてくれ。|Halte die Tür auf!|Verb
押し入れ|押[お]し 入[い]れ|Wandschrank|トムは 妹[いもうと]を 押[お]し 入[い]れに 閉[と]じ 込[こ]めた。|Tom sperrte seine Schwester in den Wandschrank ein.|Nomen
練習|練習[れんしゅう]|Übung, Training|バイオリンを 演奏[えんそう]するには、 多[おお]くの 練習[れんしゅう]が 必要[ひつよう]だ。|Geige spielen erfordert viel Übung.|Nomen (mit する)
おもちゃ|おもちゃ|Spielzeug|僕[ぼく]のおもちゃを 直[なお]して。|Reparier mein Spielzeug.|Nomen
習う|習[なら]う|lernen (bei jemandem)|私[わたし]たちは 学校[がっこう]で 英語[えいご]を 習[なら]います。|Wir lernen Englisch in der Schule.|Verb
慣れる|慣[な]れる|sich gewöhnen|ここでの 生活[せいかつ]にはすぐに 慣[な]れますよ。|An das Leben hier wirst du dich sofort gewöhnen.|Verb
習慣|習慣[しゅうかん]|Gewohnheit, Brauch|日記[にっき]をつけるのはよい 習慣[しゅうかん]です。|Tagebuch zu führen ist eine gute Angewohnheit.|
研究|研究[けんきゅう]|Forschung|彼女[かのじょ]は 研究[けんきゅう]に 夢中[むちゅう]だ。|Sie ist in ihre Forschung vertieft.|Nomen (mit する)
グラム|グラム|Gramm|肉[にく]を 二百[にひゃく]グラム 買[か]いました。|Ich habe zweihundert Gramm Fleisch gekauft.|Nomen
試験|試験[しけん]|Prüfung|私[わたし]は 試験[しけん]に 落[お]ちた。|Ich bin durch die Prüfung gefallen.|Nomen (mit する)
問題|問題[もんだい]|Problem; Aufgabe|これは 若[わか]い 人[ひと]たちが 解決[かいけつ]すべき 問題[もんだい]だ。|Das ist ein Problem, das junge Leute lösen müssen.|Nomen
簡単|簡単[かんたん]|einfach, leicht|やってみたら 簡単[かんたん]でした。|Als ich es versuchte, war es einfach.|な-Adjektiv
複雑|複雑[ふくざつ]|kompliziert|コンピューターは 複雑[ふくざつ]な 機械[きかい]だ。|Ein Computer ist eine komplexe Maschine.|な-Adjektiv
コーヒー|コーヒー|Kaffee|コーヒーが 足[た]りません。|Es ist nicht genug Kaffee da.|Nomen
数字|数字[すうじ]|Zahl, Ziffer|数字[すうじ]を 一[ひと]つ 選[えら]んで。|Wähle eine Zahl.|Nomen
数学|数学[すうがく]|Mathematik|私[わたし]は 数学[すうがく]を 勉強[べんきょう]する 必要[ひつよう]がある。|Ich muss Mathe studieren.|Nomen
数える|数[かぞ]える|zählen|空[そら]には 数[かぞ]え 切[き]れないほど 星[ほし]が 出[で]ている。|Es sind mehr Sterne am Himmel, als ich zählen kann.|Verb
今回|今回[こんかい]|dieses Mal|今回[こんかい]だけは 許[ゆる]してあげる。|Dieses eine Mal werde ich dir vergeben.|Nomen
テント|テント|Zelt|テントの 中[なか]で 寝[ね]るのには 慣[な]れてるよ。|Ich bin es gewohnt, in einem Zelt zu schlafen.|Nomen
回る|回[まわ]る|sich drehen, kreisen; herumgehen|世界[せかい]はお 前[まえ] 中心[ちゅうしん]に 回[まわ]ってるわけじゃないんだよ。|Die Welt dreht sich nicht um dich.|Verb
回す|回[まわ]す|drehen|ノブを 回[まわ]して、ドアをあけなさい。|Drehe den Knauf, und öffne die Tür!|Verb
個人|個人[こじん]|Einzelperson, Individuum|これは 私[わたし]の 個人[こじん] 的[てき]な 意見[いけん]です。|Das ist meine persönliche Auffassung.|Nomen
担当|担当[たんとう]|Zuständigkeit, zuständig|担当[たんとう] 者[しゃ]と 代[か]わります。|Ich verbinde Sie mit der zuständigen Person.|Nomen (mit する)
ボート|ボート|Boot|私[わたし]はボートが 欲[ほ]しい。|Ich möchte ein Boot.|Nomen
当たる|当[あ]たる|treffen, auftreffen|果物[くだもの]は 日[ひ]に 当[あ]たると 腐[くさ]る。|Früchte werden im Sonnenlicht schlecht.|Verb
当時|当時[とうじ]|damals|当時[とうじ]の 僕[ぼく]らにとっては 音楽[おんがく]が 全[すべ]てだった。|Damals bedeutete Musik alles für uns.|Nomen
本当|本当[ほんとう]|Wahrheit, wirklich|本当[ほんとう]にジュースいらないの？|Möchtest du wirklich keinen Saft?|Nomen
当然|当然[とうぜん]|selbstverständlich, natürlich|それって、 全[まった]くもって 当然[とうぜん]だよ。|Das ist völlig natürlich.|な-Adjektiv
ボール|ボール|Ball|ボールを 渡[わた]して。|Gib mir den Ball!|Nomen
全然|全然[ぜんぜん]|überhaupt (nicht)|全然[ぜんぜん] 疲[つか]れてません。|Ich bin gar nicht müde.|Adverb
方法|方法[ほうほう]|Methode, Weg|ほかに 方法[ほうほう]はありませんか。|Gibt es keine andere Methode?|Nomen
法律|法律[ほうりつ]|Gesetz|法律[ほうりつ]は 法律[ほうりつ]です。|Gesetz ist Gesetz.|Nomen
規則|規則[きそく]|Regel, Vorschrift|トムは 規則[きそく]を 分[わ]かってるのかな？|Kennt Tom die Regeln?|Nomen
オートバイ|オートバイ|Motorrad|オートバイを 修理[しゅうり]してもらいなさいよ。|Los, lass dir das Motorrad schon reparieren.|Nomen
経験|経験[けいけん]|Erfahrung|経験[けいけん]はありません。|Ich habe keine Erfahrung.|Nomen (mit する)
経つ|経[た]つ|vergehen (Zeit)|二[に] 時間[じかん]ぐらい 経[た]ったよ。|Es sind circa zwei Stunden rum.|Verb
経済|経済[けいざい]|Wirtschaft|彼[かれ]は 経済[けいざい]の 専門家[せんもんか]だ。|Er ist ein Experte in Sachen Wirtschaft.|Nomen
経営|経営[けいえい]|Unternehmensführung, Betrieb|大学[だいがく]では 経営[けいえい] 学[がく]を 専攻[せんこう]しました。|An der Universität habe ich Betriebswirtschaft als Hauptfach studiert.|Nomen (mit する)
ひどい|ひどい|schlimm, grausam|風邪[かぜ]がひどいのです。|Ich habe eine schlimme Erkältung.|Adjektiv
株|株[かぶ]|Aktie|彼[かれ]は 株[かぶ]に 投資[とうし]した。|Er hat in Aktien investiert.|Nomen
企業|企業[きぎょう]|Unternehmen|兄[あに]は 大[だい] 企業[きぎょう]に 就職[しゅうしょく]した。|Mein Bruder hat bei einer großen Firma angefangen.|Nomen
作業|作業[さぎょう]|Arbeit, Arbeitsvorgang|この 作業[さぎょう]は 私[わたし]ひとりではできない。|Ich schaffe diese Arbeit nicht allein.|Nomen (mit する)
産業|産業[さんぎょう]|Industrie, Wirtschaftszweig|彼[かれ]らは、 産業[さんぎょう]を 勉強[べんきょう]します。|Sie studieren Industrie.|Nomen
あなた|あなた|du, Sie|あなたがとても 忙[いそが]しいのは 知[し]ってます。|Ich weiß, dass Sie sehr beschäftigt sind.|Nomen
工業|工業[こうぎょう]|Industrie, verarbeitendes Gewerbe|日本[にほん]は 工業[こうぎょう] 化[か]の 結果[けっか] 急激[きゅうげき]な 変貌[へんぼう]を 遂[と]げた。|Japan hat infolge der Industrialisierung einen drastischen Wandel durchlaufen.|Nomen
商業|商業[しょうぎょう]|Handel|英語[えいご]は 商業[しょうぎょう]において 役立[やくだ]つ。|Englisch ist im Handel nützlich.|Nomen
利用|利用[りよう]|Nutzung, Benutzung|再[さい] 利用[りよう]するの？|Recycelst du?|Nomen (mit する)
便利|便利[べんり]|praktisch, bequem|これは 大変[たいへん] 便利[べんり]なものです。|Dies ist eine sehr nützliche Sache.|な-Adjektiv
スイッチ|スイッチ|Schalter|テレビのスイッチを 切[き]った。|Ich habe den Fernseher ausgeschaltet.|Nomen
技術|技術[ぎじゅつ]|Technik, Können|我々[われわれ]は 科学[かがく] 技術[ぎじゅつ]の 時代[じだい]に 住[す]んでいる。|Wir leben im Zeitalter der Technik.|Nomen
手術|手術[しゅじゅつ]|Operation|彼女[かのじょ]は 手術[しゅじゅつ]を 受[う]けることに 決[き]めた。|Sie beschloss, sich einer Operation zu unterziehen.|Nomen (mit する)
製造|製造[せいぞう]|Herstellung, Fertigung|その 工場[こうじょう]は 玩具[おもちゃ]を 製造[せいぞう]している。|Diese Fabrik stellt Spielzeug her.|Nomen (mit する)
必ず|必[かなら]ず|unbedingt, auf jeden Fall|必[かなら]ずやります。|Das mache ich auf jeden Fall.|Adverb
プレゼント|プレゼント|Geschenk|おじは 私[わたし]にプレゼントをくれた。|Mein Onkel hat mir ein Geschenk gemacht.|Nomen (mit する)
必要|必要[ひつよう]|nötig, notwendig|必要[ひつよう]なものは 明日[あした] 買[か]います。|Ich werde alles Nötige morgen kaufen.|な-Adjektiv
重要|重要[じゅうよう]|wichtig, wesentlich|それは 僕[ぼく]にとってはあまり 重要[じゅうよう]ではない。|Das ist mir nicht allzu wichtig.|な-Adjektiv
要求|要求[ようきゅう]|Forderung, Verlangen|彼[かれ]の 要求[ようきゅう]は 無理[むり]な 要求[ようきゅう]ではない。|Seine Forderungen sind angemessen.|Nomen (mit する)
目覚まし時計|目覚[めざ]まし 時計[どけい]|Wecker|目覚[めざ]まし 時計[どけい]って、あります？|Haben Sie Wecker?|Nomen
いつでも|いつでも|jederzeit, immer|いつでも 私[わたし]の 車[くるま]を 貸[か]してあげますよ。|Du kannst dir zu jeder Zeit meinen Wagen leihen.|Adverb
計算|計算[けいさん]|Rechnung, Berechnung|彼[かれ]は 計算[けいさん]が 得意[とくい]だ。|Er ist stark im Rechnen.|Nomen (mit する)
引き算|引[ひ]き 算[ざん]|Subtraktion|うちの 子[こ]、 引[ひ]き 算[ざん]が 苦手[にがて]なのよ。|Unser Kind ist schlecht im Subtrahieren.|Nomen (mit する)
足し算|足[た]し 算[ざん]|Addition|その 子[こ]は 足[た]し 算[ざん]の 仕方[しかた]さえ 知[し]らない。|Das Kind kann nicht einmal addieren.|Nomen (mit する)
交差点|交差点[こうさてん]|Kreuzung|交差[こうさ] 点[てん]で 事故[じこ]があった。|An der Kreuzung gab es einen Unfall.|Nomen
テニス|テニス|Tennis|いつテニスをしますか。|Wann spielst du Tennis?|Nomen (mit する)
割る|割[わ]る|teilen; zerbrechen (etwas)|彼女[かのじょ]は、 彼[かれ]が 窓[まど]ガラスを 割[わ]るのを 見[み]た。|Sie hat ihn das Fenster einschlagen gesehen.|Verb
割れる|割[わ]れる|zerbrechen, zerspringen|ガラスはすぐ 割[わ]れる。|Glas zerbricht leicht.|Verb
割り算|割[わ]り 算[ざん]|Division|何[なん]らかの 数字[すうじ]をゼロで 割[わ]り 算[ざん]すると 未定義[みていぎ]の 解[かい]になる。|Teilt man irgendeine Zahl durch null, ist das Ergebnis nicht definiert.|Nomen (mit する)
残る|残[のこ]る|übrig bleiben, bleiben|赤[あか]ワインが 一本[いっぽん]だけ 残[のこ]ってます。|Es ist nur noch eine Flasche Rotwein übrig.|Verb
こちら|こちら|hier, diese Richtung (höflich)|こちらの 方達[かたたち]って、あなたのお 友達[ともだち]？|Sind diese Herrschaften Ihre Freunde?|Nomen
残す|残[のこ]す|übrig lassen, hinterlassen|アイス 残[のこ]しといてね。|Lass etwas Eis übrig, ja?|Verb
返す|返[かえ]す|zurückgeben|彼[かれ]はお 金[かね]を 返[かえ]したと 思[おも]う。|Ich nehme an, dass er das Geld zurückgezahlt hat.|Verb
返事|返事[へんじ]|Antwort|彼[かれ]はまだ 返事[へんじ]をくれないんだ。|Er hat mir noch keine Antwort gegeben.|Nomen (mit する)
借りる|借[か]りる|ausleihen, sich borgen|あなたの 車[くるま]を 借[か]りてもいいですか。|Darf ich mir dein Auto ausleihen?|Verb
ボタン|ボタン|Knopf|ボタンが 取[と]れた。|Der Knopf ist abgegangen.|Nomen
貸す|貸[か]す|verleihen, vermieten|あなたのナイフを 貸[か]してくれませんか。|Würdest du mir dein Messer leihen?|Verb
貸し出す|貸[か]し 出[だ]す|ausleihen, verleihen|図書館[としょかん]は 本[ほん]を 無料[むりょう]で 貸[か]し 出[だ]しています。|Die Bibliothek verleiht Bücher kostenlos.|Verb
申し込む|申[もう]し 込[こ]む|sich anmelden, beantragen|トムはフランス 語[ご]コースに 申[もう]し 込[こ]んだ。|Tom meldete sich zu einem Französischkurs an.|Verb
期待|期待[きたい]|Erwartung|あまり 期待[きたい]されても 困[こま]ります。|Erwarte nicht zu viel.|Nomen (mit する)
おかしい|おかしい|komisch, lustig|すぐに 何[なに]かおかしいと 感[かん]じました。|Mir kam da gleich etwas komisch vor.|Adjektiv
期間|期間[きかん]|Zeitraum, Frist|できるだけ 長[ちょう] 期間[きかん] 滞在[たいざい]したいです。|Ich will so lange wie möglich bleiben.|Nomen
時期|時期[じき]|Zeit, Zeitpunkt, Saison|春[はる]は 木[き]を 植[う]える 時期[じき]です。|Frühling ist die Jahreszeit, um Bäume zu pflanzen.|Nomen
限る|限[かぎ]る|beschränkt sein auf|体[からだ]の 大[おお]きい 人[ひと]が 強[つよ]いとは 限[かぎ]らない。|Große Menschen sind nicht immer stark.|Verb
急ぐ|急[いそ]ぐ|sich beeilen|急[いそ]いで！バスが 来[く]るよ。|Beeil dich! Der Bus kommt.|Verb
コート|コート|Platz, Spielfeld (Tennis usw.)|テニスコートに 行[い]くの？|Gehst du zum Tennisplatz?|Nomen
急に|急[きゅう]に|plötzlich|急[きゅう]に 雨[あめ]が 降[ふ]り 始[はじ]めた。|Es begann plötzlich zu regnen.|Adverb
急|急[きゅう]|plötzlich, eilig; steil|天気[てんき]が 急[きゅう]に 変[か]わった。|Das Wetter schwang plötzlich um.|な-Adjektiv
急行|急行[きゅうこう]|Schnellzug, Express|急行[きゅうこう] 列車[れっしゃ]はありますか。|Gibt es einen Schnellzug?|Nomen
切れる|切[き]れる|gut schneiden; reißen; ablaufen, ausgehen|このナイフはよく 切[き]れます。|Dieses Messer schneidet gut.|Verb
ドラマ|ドラマ|Fernsehserie, Drama|最近[さいきん] 面白[おもしろ]いドラマが 少[すく]ない 気[き]がする。|In letzter Zeit gibt es kaum interessante Serien, habe ich das Gefühl.|Nomen
切手|切手[きって]|Briefmarke|外国[がいこく]の 切手[きって]を 持[も]ってますか。|Habt ihr ausländische Briefmarken?|Nomen
売り切れる|売[う]り 切[き]れる|ausverkauft werden|広告[こうこく]に 出[で]てたこの 商品[しょうひん]、もう 売[う]り 切[き]れましたか？|Ist das Produkt aus der Werbung schon ausverkauft?|Verb
売り切れ|売[う]り 切[き]れ|ausverkauft|切符[きっぷ]はすべて 売[う]り 切[き]れです。|Alle Tickets sind ausverkauft.|Nomen
大切|大切[たいせつ]|wichtig, wertvoll|平和[へいわ]ほど 大切[たいせつ]なものはない。|Nichts ist so wichtig wie Friede.|な-Adjektiv
ビザ|ビザ|Visum|ビザを 申請[しんせい]したんだ。|Ich habe ein Visum beantragt.|Nomen
切符|切符[きっぷ]|Fahrkarte, Ticket|これが 帰[かえ]りの 切符[きっぷ]だ。|Das ist meine Rückfahrkarte.|Nomen
入場券|入場券[にゅうじょうけん]|Eintrittskarte|入場[にゅうじょう] 券[けん]はいくらですか？|Wie viel kostet eine Eintrittskarte?|Nomen
家賃|家賃[やちん]|Miete|家賃[やちん]は 払[はら]った？|Hast du die Miete bezahlt?|Nomen
時代|時代[じだい]|Zeitalter, Epoche|どうやら 生[う]まれる 時代[じだい]を 間違[まちが]えたようだな。|Ich bin wohl im falschen Zeitalter geboren.|Nomen
ポケット|ポケット|Tasche (an Kleidung)|ポケットにお 金[かね]は 入[はい]ってないよ。|Ich habe kein Geld in der Tasche.|Nomen
代わる|代[か]わる|vertreten, ersetzen|ちょっと 運転[うんてん]を 代[か]わってくれないか。|Kannst du mal das Fahren für mich übernehmen?|Verb
代える|代[か]える|ersetzen, austauschen|古[ふる]い 電池[でんち]を 新[あたら]しいものに 代[か]えました。|Ich habe die alte Batterie durch eine neue ersetzt.|Verb
指|指[ゆび]|Finger; Zeh|私[わたし]はナイフで 指[ゆび]を 切[き]った。|Ich habe mir mit einem Messer in den Finger geschnitten.|Nomen
決定|決定[けってい]|Entscheidung, Beschluss|決定[けってい]はあなたに 任[まか]せる。|Ich überlasse dir die Entscheidung.|Nomen (mit する)
そろそろ|そろそろ|langsam, allmählich (es wird Zeit)|そろそろお 客[きゃく]が 来[く]る 時間[じかん]だ。|Allmählich müssten die Gäste kommen.|Adverb
一定|一定[いってい]|fest, bestimmt, gleichbleibend|一定[いってい]の 条件付[じょうけんつ]きで、 彼[かれ]の 提案[ていあん]に 賛成[さんせい]します。|Unter bestimmten Bedingungen stimme ich seinem Vorschlag zu.|Nomen (mit する)
定期券|定期券[ていきけん]|Zeitkarte, Monatskarte|バスの 定期[ていき] 券[けん]はお 持[も]ちですか？|Haben Sie eine Zeitkarte für den Bus?|Nomen
予定|予定[よてい]|Plan, Vorhaben|彼[かれ]は 明日[あした] 出発[しゅっぱつ]する 予定[よてい]だ。|Er plant, morgen aufzubrechen.|Nomen (mit する)
天気予報|天気予報[てんきよほう]|Wettervorhersage|天気[てんき] 予報[よほう]では 明日[あした]は 晴[は]れです。|Dem Wetterbericht zufolge soll es morgen heiter sein.|Nomen
ぶどう|ぶどう|Weintrauben|彼女[かのじょ]はぶどう 酒[しゅ]が 好[す]きだ。|Sie mag Wein.|Nomen
予習|予習[よしゅう]|Vorbereitung (auf den Unterricht)|授業[じゅぎょう]の 予習[よしゅう]をしてくるべきだったのに。|Ihr hättet euch auf die Stunde vorbereiten sollen.|Nomen (mit する)
予約|予約[よやく]|Reservierung|席[せき]を 予約[よやく]したいのですが。|Ich würde gerne einen Platz reservieren.|Nomen (mit する)
約束|約束[やくそく]|Versprechen, Verabredung|彼[かれ]は 誰[だれ]にも 言[い]わないと 私[わたし]に 約束[やくそく]した。|Er versprach mir, es niemandem zu sagen.|Nomen (mit する)
変わる|変[か]わる|sich ändern, wechseln|彼[かれ]は 相[あい] 変[か]わらずだ。|Er hat sich nicht geändert.|Verb
めったに|めったに|selten (mit Verneinung)|私[わたし]の 母[はは]は 夜[よる]めったにテレビを 見[み]ない。|Meine Mutter sieht des Abends selten fern.|Adverb
大変|大変[たいへん]|schlimm, ernst; sehr|彼女[かのじょ]は 大変[たいへん] 忙[いそが]しい。|Sie ist sehr beschäftigt.|な-Adjektiv
変|変[へん]|seltsam, komisch|彼[かれ]は 時々[ときどき] 変[へん]です。|Manchmal kann er ein seltsamer Junge sein.|な-Adjektiv
変化|変化[へんか]|Veränderung, Wandel|過去[かこ] 十[じゅう] 年間[ねんかん]に 多[おお]くの 変化[へんか]を 経験[けいけん]してきた。|Wir haben im Laufe des letzten Jahrzehnts viele Veränderungen erlebt.|Nomen (mit する)
強化|強化[きょうか]|Stärkung, Verstärkung|我々[われわれ]は 組織[そしき]を 強化[きょうか]しなくてはならん。|Wir müssen unsere Organisation stärken.|Nomen (mit する)
クリスマス|クリスマス|Weihnachten|クリスマスに 彼女[かのじょ]に 何[なに]か 買[か]ってあげたの？|Hast du etwas für sie zu Weihnachten gekauft?|Nomen
文化|文化[ぶんか]|Kultur|フランス 文化[ぶんか]が 好[す]きです。|Ich mag die französische Kultur.|Nomen
増える|増[ふ]える|zunehmen, mehr werden|これで 私[わたし]の 悩[なや]みが 増[ふ]える。|Das mehrt meine Probleme.|Verb
増やす|増[ふ]やす|vermehren, erhöhen|体重[たいじゅう]を 増[ふ]やしたいの？|Willst du Gewicht zulegen?|Verb
減る|減[へ]る|abnehmen, weniger werden|痛[いた]みが 少[すこ]し 減[へ]りました。|Der Schmerz hat ein wenig nachgelassen.|Verb
ネクタイ|ネクタイ|Krawatte|ネクタイが 曲[ま]がってるよ。|Deine Krawatte sitzt schief.|Nomen
減らす|減[へ]らす|verringern, reduzieren|体重[たいじゅう]を 減[へ]らすのは 簡単[かんたん]じゃないよ。|Abnehmen ist nicht leicht.|Verb
乗り物|乗[の]り 物[もの]|Fahrzeug, Verkehrsmittel|乗[の]り 物[もの]は 子供向[こどもむ]けである。|Die Fahrgeschäfte sind für Kinder gedacht.|Nomen
降りる|降[お]りる|aussteigen; herunterkommen|ここで 降[お]りましょう。|Lasst uns hier aussteigen.|Verb
降ろす|降[お]ろす|ausladen, absetzen|図書館[としょかん]で 私[わたし]を 降[お]ろしてくれますか。|Könnt ihr mich an der Bibliothek absetzen?|Verb
バイオリン|バイオリン|Geige|彼女[かのじょ]はバイオリンを 上手[じょうず]に 弾[ひ]きます。|Sie spielt gut Geige.|Nomen
降る|降[ふ]る|fallen (Regen, Schnee)|今日[きょう]は 雨[あめ] 降[ふ]ると 思[おも]う。|Ich glaube, heute gibt es Regen.|Verb
着く|着[つ]く|ankommen|駅[えき]に 着[つ]いたらすぐ 電話[でんわ]するよ。|Wenn ich am Bahnhof ankomme, rufe ich dich sofort an.|Verb
着物|着物[きもの]|Kimono; Kleidung|着物[きもの]は 着[き]ますか。|Ziehen Sie einen Kimono an?|Nomen
下着|下着[したぎ]|Unterwäsche|下着[したぎ]は 隠[かく]すものではなく 見[み]せるものである。|Unterwäsche ist nicht zum Verstecken, sondern zum Zeigen da.|Nomen
パスポート|パスポート|Reisepass|パスポートをお 願[ねが]いします。|Den Reisepass, bitte.|Nomen
上着|上着[うわぎ]|Jacke, Oberbekleidung|新[あたら]しい 上着[うわぎ]をもらった。|Ich habe eine neue Jacke bekommen.|Nomen
着せる|着[き]せる|anziehen (jemandem etwas)|ケイトは 人形[にんぎょう]に 服[ふく]を 着[き]せている。|Katrin zieht gerade ihre Puppe an.|Verb
脱ぐ|脱[ぬ]ぐ|ausziehen (Kleidung)|メアリーは 服[ふく]を 脱[ぬ]ぎ 始[はじ]めた。|Maria fing an, sich zu entkleiden.|Verb
立場|立場[たちば]|Standpunkt, Lage, Position|私[わたし]はそれを 止[と]める 立場[たちば]ではない。|Ich bin nicht in der Lage, dem ein Ende zu bereiten.|Nomen
バッグ|バッグ|Tasche|これはだれのバッグですか。|Wem gehört diese Tasche?|Nomen
目立つ|目立[めだ]つ|auffallen|トムは 目立[めだ]ちたいだけだよ。|Tom will einfach nur angeben.|Verb
立てる|立[た]てる|aufstellen, aufrichten; aufstellen (Plan)|次[つぎ]の 旅行計画[りょこうけいかく]を 立[た]てなきゃ。|Ich muss meine nächste Reise planen.|Verb
役に立つ|役[やく]に 立[た]つ|nützlich sein, helfen|あなたの 役[やく]に 立[た]ちたい。|Ich möchte dir helfen.|Verb
出席|出席[しゅっせき]|Anwesenheit, Teilnahme|先生[せんせい]は 出席[しゅっせき]を 取[と]った。|Der Lehrer überprüfte die Anwesenheit.|Nomen (mit する)
ゴム|ゴム|Gummi, Gummiband|ゴムのボールは 弾力性[だんりょくせい]があるから 弾[はず]む。|Da ein Gummiball Elastizität besitzt, prallt er zurück.|Nomen
席|席[せき]|Sitzplatz|私[わたし]の 席[せき]はどこですか。|Wo ist mein Sitzplatz?|Nomen
欠席|欠席[けっせき]|Abwesenheit, Fehlen|今日[きょう]は 二人[ふたり]の 生徒[せいと]が 欠席[けっせき]している。|Zwei Schüler fehlen heute.|Nomen (mit する)
次男|次男[じなん]|zweiter Sohn|次男[じなん]は 来年[らいねん]、 高校生[こうこうせい]になります。|Mein zweiter Sohn kommt nächstes Jahr auf die Oberschule.|Nomen
次女|次女[じじょ]|zweite Tochter|次女[じじょ]はまだ 小学生[しょうがくせい]です。|Meine zweite Tochter ist noch Grundschülerin.|Nomen
ギター|ギター|Gitarre|ギターが 欲[ほ]しいです。|Ich will eine Gitarre.|Nomen
運ぶ|運[はこ]ぶ|tragen, transportieren|彼[かれ]は 荷物[にもつ]を 運[はこ]んであげると 言[い]った。|Er bot an, mein Gepäck zu tragen.|Verb
運転|運転[うんてん]|Fahren, Steuern (eines Fahrzeugs)|お 母[かあ]さんは 車[くるま]を 運転[うんてん]できますか。|Kann deine Mutter Auto fahren?|Nomen (mit する)
運転手|運転手[うんてんしゅ]|Fahrer(in)|彼[かれ]はバスの 運転[うんてん] 手[しゅ]だ。|Er ist Busfahrer.|Nomen
転ぶ|転[ころ]ぶ|hinfallen, stürzen|女[おんな]の 子[こ]が 転[ころ]ぶのを 見[み]て、 私[わたし]は 思[おも]わず 駆[か]け 寄[よ]った。|Ich sah ein Mädchen stürzen und rannte unwillkürlich hin.|Verb
セーター|セーター|Pullover|彼女[かのじょ]はセーターを 着[き]た。|Sie hat ihren Pullover angezogen.|Nomen
移る|移[うつ]る|umziehen, wechseln, übergehen|ボストンに 移[うつ]ったんだ。|Ich bin nach Boston gezogen.|Verb
移す|移[うつ]す|verlegen, versetzen, verschieben|彼[かれ]は 約束[やくそく]を 実行[じっこう]に 移[うつ]した。|Er ließ seinem Versprechen Taten folgen.|Verb
動き|動[うご]き|Bewegung|私[わたし]はあの 木[き]の 後[うし]ろで 影[かげ]の 動[うご]きを 見[み]た。|Ich habe hinter dem Baum einen Schatten sich bewegen sehen!|Nomen
運動|運動[うんどう]|Bewegung, Sport|もっと 運動[うんどう]をする 必要[ひつよう]があります。|Du musst mehr Sport treiben.|Nomen (mit する)
やっぱり|やっぱり|wie gedacht, doch (umgangssprachlich)|買[か]い 物[もの]に 行[い]こうと 思[おも]ったけど、やっぱりやめた。|Ich wollte einkaufen gehen, aber ich habe es doch gelassen.|Adverb
活動|活動[かつどう]|Aktivität, Tätigkeit|私[わたし]たちは 活動[かつどう] 計画[けいかく]を 立[た]てました。|Wir haben einen Tätigkeitsplan aufgestellt.|Nomen (mit する)
動物|動物[どうぶつ]|Tier|好[す]きな 動物[どうぶつ]は 何[なん]ですか？|Was ist dein Lieblingstier?|Nomen
動かす|動[うご]かす|bewegen, in Gang setzen|彼[かれ]は 机[つくえ]を 右[みぎ]に 動[うご]かした。|Er bewegte den Tisch nach rechts.|Verb
不動産屋|不動産屋[ふどうさんや]|Immobilienmakler(in)|彼[かれ]は 不[ふ] 動産[どうさん] 屋[や]にもう 少[すこ]し 値引[ねび]きするよう 交渉[こうしょう]した。|Er verhandelte mit dem Immobilienhändler über einen kleinen Preisnachlass.|Nomen
カーテン|カーテン|Vorhang|カーテンの 後[うし]ろに 隠[かく]れよう。|Verstecken wir uns hinter dem Vorhang!|Nomen
早く|早[はや]く|früh, schnell, bald|明日[あした]は 早[はや]く 起[お]きないとダメよ。|Morgen mußt du früh aufstehen.|Adverb
早口|早口[はやくち]|schnelles Sprechen|弟[おとうと]はとても 早口[はやくち]だ。|Mein Bruder spricht sehr schnell.|Nomen
速さ|速[はや]さ|Geschwindigkeit|電光石火[でんこうせっか]の 速[はや]さで 走[はし]った。|Ich rannte so schnell wie der Blitz.|Nomen
速達|速達[そくたつ]|Eilzustellung, Expresspost|速達[そくたつ]でお 願[ねが]いします。|Per Eilpost, bitte.|Nomen
シャツ|シャツ|Hemd|お 気[き]に 入[い]りのシャツはないよ。|Ich habe kein Lieblingshemd.|Nomen
遅れる|遅[おく]れる|sich verspäten|急[いそ]いで 行[い]かないと 遅[おく]れるよ。|Wenn du dich nicht beeilst, verspätest du dich!|Verb
開始|開始[かいし]|Beginn, Start|試験[しけん]は 何時[なんじ] 開始[かいし]ですか？|Wann fängt die Prüfung an?|Nomen (mit する)
始めに|始[はじ]めに|am Anfang, zuerst|始[はじ]めに、 名前[なまえ]を 書[か]いてください。|Schreiben Sie bitte zuerst Ihren Namen.|Adverb
現在|現在[げんざい]|Gegenwart, jetzt|一般大衆[いっぱんたいしゅう]は 現在[げんざい]の 政府[せいふ]に 不満[ふまん]である。|Die Öffentlichkeit ist mit der gegenwärtigen Regierung unzufrieden.|Nomen
ナイフ|ナイフ|Messer|ナイフを 貸[か]してくれませんか。|Würdest du mir dein Messer leihen?|Nomen
実現|実現[じつげん]|Verwirklichung|彼[かれ]の 夢[ゆめ]が 実現[じつげん]した。|Sein Traum wurde wahr.|Nomen (mit する)
実施|実施[じっし]|Durchführung, Umsetzung|その 計画[けいかく]は 実施[じっし]された。|Der Plan wurde durchgeführt.|Nomen (mit する)
事実|事実[じじつ]|Tatsache|これは 証明済[しょうめいず]みの 事実[じじつ]だ。|Das ist eine bewiesene Tatsache.|Nomen
実行|実行[じっこう]|Ausführung, Umsetzung|彼[かれ]の 命令[めいれい]を 実行[じっこう]しなければならぬ。|Mir müssen seine Befehle ausführen.|Nomen (mit する)
バイク|バイク|Motorrad|私[わたし]のバイクに 乗[の]ってもいいですよ。|Du kannst eine Runde auf meinem Motorrad drehen.|Nomen
実験|実験[じっけん]|Experiment, Versuch|実験[じっけん]は 成功[せいこう]だった。|Das Experiment war ein Erfolg.|Nomen (mit する)
通過|通過[つうか]|Durchfahrt, Passieren|車[くるま]は 門[もん]を 通過[つうか]した。|Das Auto fuhr durch das Tor.|Nomen (mit する)
過ぎる|過[す]ぎる|vergehen, vorbeigehen; überschreiten|ケーキを 食[た]べ 過[す]ぎないようにね。|Iss nicht zu viel Kuchen.|Verb
昼過ぎ|昼過[ひるす]ぎ|früher Nachmittag, kurz nach Mittag|昼過[ひるす]ぎからはちょっと 忙[いそが]しくなるんだ。|Ab dem frühen Nachmittag habe ich ziemlich viel zu tun.|Nomen
いつか|いつか|irgendwann, eines Tages|いつかわかる 日[ひ]がくるさ。|Eines Tages wirst du es verstehen.|Adverb
過去|過去[かこ]|Vergangenheit|あなたの 過去[かこ]は 気[き]にしません。|Ihre Vergangenheit interessiert mich nicht.|Nomen
開発|開発[かいはつ]|Entwicklung, Erschließung|もう 誰[だれ]も 開発[かいはつ]に 関[かか]わってない。|Es beschäftigt sich niemand mehr mit der Weiterentwicklung.|Nomen (mit する)
発生|発生[はっせい]|Entstehung, Auftreten|伝染病[でんせんびょう]が 発生[はっせい]した。|Eine Epidemie brach aus.|Nomen (mit する)
発言|発言[はつげん]|Äußerung, Wortmeldung|私[わたし]の 発言[はつげん]を 取[と]り 消[け]します。|Ich nehme meine Äußerung zurück.|Nomen (mit する)
オレンジ|オレンジ|Orange|オレンジはレモンよりも 甘[あま]いんだよ。|Orangen sind süßer als Zitronen.|Nomen
発見|発見[はっけん]|Entdeckung|先日[せんじつ] 父[ちち]が 書[か]いた 本[ほん]を 発見[はっけん]した。|Ich habe neulich ein Buch, geschrieben von meinem Vater, entdeckt.|Nomen (mit する)
出発|出発[しゅっぱつ]|Abfahrt, Abreise|もっと 早[はや]く 出発[しゅっぱつ]するべきだった。|Wir hätten früher abfahren sollen.|Nomen (mit する)
発車|発車[はっしゃ]|Abfahrt (Zug, Bus)|電車[でんしゃ]は 後[ご] 五分[ごふん]で 発車[はっしゃ]します。|Der Zug fährt binnen fünf Minuten ab.|Nomen (mit する)
発表|発表[はっぴょう]|Bekanntgabe, Vortrag|選挙[せんきょ]の 結果[けっか]は 明日[あす] 発表[はっぴょう]される。|Das Ergebnis der Wahl wird morgen bekanntgegeben.|Nomen (mit する)
きつい|きつい|eng; hart, anstrengend|彼[かれ]はきつい 仕事[しごと]にも 慣[な]れている。|Er ist harte Arbeit gewohnt.|Adjektiv
表現|表現[ひょうげん]|Ausdruck|どちらの 表現[ひょうげん]をよく 使[つか]いますか？|Welchen Ausdruck verwendet man häufiger?|Nomen (mit する)
代表|代表[だいひょう]|Vertreter(in), Vertretung|彼女[かのじょ]はクラスを 代表[だいひょう]して 演説[えんぜつ]することになっている。|Sie soll stellvertretend für die Klasse eine Rede halten.|Nomen (mit する)
表|表[おもて]|Vorderseite, Außenseite; draußen|この 紙[かみ]はどちらが 表[おもて]だか 見分[みわ]けがつかない。|Ich kann nicht erkennen, welche Seite dieses Papiers die Vorderseite ist.|Nomen
表|表[ひょう]|Tabelle, Liste|予定[よてい] 表[ひょう]を 見[み]てみましょう。|Ich schaue in meinem Kalender nach.|Nomen
さっき|さっき|vorhin, eben|さっき 話[はな]してた 人[ひと] 誰[だれ]？|Wer war denn das, mit dem du eben gesprochen hast?|Adverb
手紙|手紙[てがみ]|Brief|彼[かれ]から 手紙[てがみ]がきた？|Ist ein Brief von ihm gekommen?|Nomen
絵|絵[え]|Bild, Gemälde, Zeichnung|私[わたし]は 彼[かれ]らの 絵[え]が 好[す]きです。|Ich mag ihre Bilder.|Nomen
雑誌|雑誌[ざっし]|Zeitschrift|彼[かれ]に 雑誌[ざっし]を 買[か]ってあげた。|Ich habe ihm eine Zeitschrift gekauft.|Nomen
音|音[おと]|Geräusch, Ton|これ 何[なん]の 音[おと]？|Was ist das für ein Geräusch?|Nomen
テキスト|テキスト|Lehrbuch, Text|トムからテキストを 受[う]け 取[と]ったよ。|Ich habe von Tom einen Text bekommen.|Nomen
音|音[おと]|Klang, Ton|これ 以上[いじょう]テレビの 音[おと]を 大[おお]きくしないでくれ。|Bitte stelle den Fernseher nicht noch lauter.|Nomen
音楽|音楽[おんがく]|Musik|彼[かれ]は 自分[じぶん]の 部屋[へや]で 音楽[おんがく]を 聴[き]いた。|Er hörte Musik in seinem Zimmer.|Nomen
薬|薬[くすり]|Medizin, Medikament|もう 薬[くすり]を 飲[の]みましたか？|Hast du die Medizin schon genommen?|Nomen
歌|歌[うた]|Lied|それが 私[わたし]のお 気[き]に 入[い]りの 歌[うた]だ。|Das ist mein Lieblingslied.|Nomen
ビニール|ビニール|Plastik (Folie), Vinyl|ビニール 袋[ふくろ]に 入[い]れてください。|Bitte tun Sie es in eine Plastiktüte.|Nomen
歌手|歌手[かしゅ]|Sänger(in)|好[す]きな 歌手[かしゅ]は 誰[だれ]ですか？|Wer ist dein Lieblingssänger?|Nomen
欲しがる|欲[ほ]しがる|haben wollen (bei anderen)|子供[こども]がお 菓子[かし]を 欲[ほ]しがっています。|Die Kinder wollen Süßigkeiten.|Verb
計画|計画[けいかく]|Plan, Vorhaben|彼[かれ]は 彼女[かのじょ]に 自分[じぶん]の 計画[けいかく]を 知[し]らせた。|Er unterrichtete sie über sein Vorhaben.|Nomen (mit する)
映画|映画[えいが]|Film|映画[えいが]はどうでしたか。|Wie hat dir der Film gefallen?|Nomen
りんご|りんご|Apfel|りんごが 木[き]から 落[お]ちた。|Ein Apfel fiel vom Baum.|Nomen
面白い|面白[おもしろ]い|interessant, lustig|面白[おもしろ]い 仕事[しごと]だったんでしょうね。|Es muss eine interessante Arbeit gewesen sein.|Adjektiv
写る|写[うつ]る|abgebildet sein, aufs Foto kommen|家族[かぞく] 全員[ぜんいん]が 写[うつ]ってる 写真[しゃしん]は、これ 一枚[いちまい]です。|Dieses Foto ist das einzige, auf dem die ganze Familie zu sehen ist.|Verb
写す|写[うつ]す|abschreiben, kopieren; fotografieren|トム、 数学[すうがく]の 宿題[しゅくだい] 写[うつ]させてくれない？|Würdest du mich deine Mathehausaufgaben abschreiben lassen, Tom?|Verb
写真|写真[しゃしん]|Foto|あなたの 写真[しゃしん]を 撮[と]ってもいいですか。|Darf ich dich fotografieren?|Nomen
アルバム|アルバム|Album|あなたのアルバムを 見[み]せてくれる？|Zeigst du mir dein Album?|Nomen
真っ赤|真[ま]っ 赤[か]|knallrot|彼[かれ]は 真[ま]っ 赤[か]になった。|Er wurde knallrot.|な-Adjektiv
真面目|真面目[まじめ]|ernsthaft, gewissenhaft|真面目[まじめ]におやり。|Sei ernst.|な-Adjektiv
真ん中|真[ま]ん 中[なか]|Mitte, genau in der Mitte|公園[こうえん]の 真[ま]ん 中[なか]には 池[いけ]がります。|In der Mitte des Parks ist ein Teich.|Nomen
真っ白|真[ま]っ 白[しろ]|schneeweiß|真[ま]っ 白[しろ]です。|Es ist vollkommen weiß.|な-Adjektiv
スカート|スカート|Rock|私[わたし]のスカートは 長[なが]すぎます。|Mein Rock ist zu lang.|Nomen
真っ暗|真[ま]っ 暗[くら]|stockdunkel|部屋[へや]は 真[ま]っ 暗[くら]だった。|Das Zimmer war stockfinster.|な-Adjektiv
真っ黒|真[ま]っ 黒[くろ]|pechschwarz|魚[さかな]が 真[ま]っ 黒[くろ]に 焦[こ]げた。|Der Fisch war schwarz angebrannt.|な-Adjektiv
真っ青|真[ま]っ 青[さお]|tiefblau; kreidebleich|空[そら]は 真[ま]っ 青[さお]だった。|Der Himmel war tiefblau.|な-Adjektiv
色々|色々[いろいろ]|verschieden, allerlei|彼女[かのじょ]は 色々[いろいろ]な 種類[しゅるい]の 花[はな]を 育[そだ]てている。|Sie züchtet Blumen verschiedenster Art.|な-Adjektiv
ペン|ペン|Stift, Füller|ペンを 貸[か]してもらえますか。|Leihst du mir deinen Füller?|Nomen
人形|人形[にんぎょう]|Puppe|それは 日本[にほん] 人形[にんぎょう]だ。|Das ist eine japanische Puppe.|Nomen
形|形[かたち]|Form, Gestalt|洗[あら]ったあと 引[ひ]っ 張[ぱ]って 形[かたち]にして。|Nach der Wäsche in Form bringen.|Nomen
大型|大型[おおがた]|groß, Großformat|大型[おおがた] 船[せん]が 漁船[ぎょせん]に 衝突[しょうとつ]しました。|Ein großes Schiff kollidierte mit einem Fischerboot.|Nomen
種類|種類[しゅるい]|Art, Sorte|どんな 種類[しゅるい]のビールがありますか。|Welche Biersorten haben Sie?|Nomen
おしゃべり|おしゃべり|Plaudern; gesprächig|彼[かれ]は 相[あい] 変[か]わらずおしゃべりだ。|Er ist redselig wie eh und je.|Nomen (mit する)
直す|直[なお]す|reparieren, korrigieren, heilen|テレビは 見[み]るより 直[なお]す 方[ほう]が 勉強[べんきょう]になる。|Man lernt mehr, wenn man einen Fernseher repariert, als wenn man nur davorsitzt.|Verb
真っ直ぐ|真[ま]っ 直[す]ぐ|geradeaus; aufrichtig|真[ま]っ 直[す]ぐ 行[い]きなさい。|Geh geradeaus.|Adverb
直接|直接[ちょくせつ]|direkt|彼[かれ]はあなたに 直接[ちょくせつ] 連絡[れんらく]すると 思[おも]います。|Er wird dich direkt kontaktieren, denke ich.|Adverb
角|角[かど]|Ecke, Kante|彼[かれ]は 角[かど]で 左[ひだり]に 曲[ま]がった。|An der Ecke bog er nach links ab.|Nomen
きっと|きっと|sicher, bestimmt|きっと 好[す]きになると 思[おも]います。|Ich bin mir sicher, dass du es mögen wirst.|Adverb
三角|三角[さんかく]|Dreieck|あの 子[こ]が 球面[きゅうめん] 三角[さんかく]を 書[か]きました。|Das Kind zeichnete ein Kugeldreieck.|Nomen
四角|四角[しかく]|Viereck, Quadrat|箱[はこ]の 形[かたち]は 普通[ふつう] 四角[しかく]です。|Eine Schachtel ist normalerweise viereckig.|な-Adjektiv
四角い|四角[しかく]い|viereckig, quadratisch|必要[ひつよう]なのは 四角[しかく]いテーブルで、 円卓[えんたく]ではない。|Wir benötigen einen viereckigen Tisch, keinen runden.|Adjektiv
四つ角|四[よ]つ 角[かど]|Straßenkreuzung|四[よ]つ 角[かど]は 二[ふた]つの 道[みち]が 十字[じゅうじ]に 交[まじ]わった 所[ところ]である。|Eine Kreuzung ist ein Ort, wo sich zwei Straßen kreuzen.|Nomen
メニュー|メニュー|Speisekarte, Menü|英語[えいご]のメニューはありますか？|Haben Sie eine englische Speisekarte?|Nomen
曲|曲[きょく]|Musikstück, Lied, Melodie|何[なん]ていう 曲[きょく]なの？|Wie heißt dieses Lied?|Nomen
曲げる|曲[ま]げる|biegen, beugen|右腕[みぎうで]を 曲[ま]げられません。|Ich kann meinen rechten Arm nicht beugen.|Verb
曲がり角|曲[ま]がり 角[かど]|Straßenecke, Biegung|この 道路[どうろ]は 急[きゅう]な 曲[ま]がり 角[かど]が 多[おお]い。|Diese Straße hat viele scharfe Kurven.|Nomen
同様|同様[どうよう]|gleich, ähnlich, ebenso wie|彼[かれ]はあなたと 同様[どうよう]に 野球[やきゅう]が 好[す]きです。|Er mag Baseball in gleicher Weise wie du.|な-Adjektiv
アイスクリーム|アイスクリーム|Eis, Eiscreme|僕[ぼく]にアイスクリームとっといてよ。|Lass mir von der Eiskrem etwas übrig.|Nomen
間違い|間違[まちが]い|Fehler, Irrtum|僕[ぼく]はテストでひどい 間違[まちが]いをした。|Ich habe einen ernsten Fehler bei dem Test gemacht.|Nomen
間違える|間違[まちが]える|sich irren, verwechseln, falsch machen|バスを 乗[の]り 間違[まちが]えた。|Ich bin in den falschen Bus gestiegen.|Verb
間違う|間違[まちが]う|falsch sein, sich irren|彼[かれ]は 間違[まちが]って 答[こた]えた。|Er gab die falsche Antwort.|Verb
似ている|似[に]ている|ähneln, ähnlich sein|地球[ちきゅう]の 形[かたち]はオレンジに 似[に]ている。|Die Erde ist orangenähnlich geformt.|Verb
おしゃれ|おしゃれ|schick, modisch|これはあまりおしゃれじゃない。|Das ist nicht sehr modisch.|Nomen (mit する)
以上|以上[いじょう]|mehr als, mindestens; oben genannt|もうこれ 以上[いじょう]は 食[た]べられない。|Ich kann nicht mehr essen.|Nomen
旅行|旅行[りょこう]|Reise|どこか 旅行[りょこう]に 行[い]きたい。|Ich habe Lust, zu verreisen.|Nomen (mit する)
大使館|大使館[たいしかん]|Botschaft (diplomatische Vertretung)|オランダ 大使[たいし] 館[かん]はどこですか？|Wo ist die niederländische Botschaft?|Nomen
旅館|旅館[りょかん]|japanisches Gasthaus (Ryokan)|私[わたし]は、それを 旅館[りょかん]に 持[も]って 帰[かえ]った。|Ich nahm es mit zurück ins Gasthaus.|Nomen
ジュース|ジュース|Saft, Erfrischungsgetränk|僕[ぼく]のりんごジュースはどこ？|Wo ist mein Apfelsaft?|Nomen
映画館|映画館[えいがかん]|Kino|映画[えいが] 館[かん] 内[ない]は 禁煙[きんえん]です。|Innerhalb des Kinos gilt Rauchverbot.|Nomen
宿題|宿題[しゅくだい]|Hausaufgaben|テレビを 見[み]た 後[あと]で 宿題[しゅくだい]するよ。|Nach dem Fernsehen mache ich die Hausaufgaben.|Nomen
泊める|泊[と]める|beherbergen, übernachten lassen|彼[かれ]は 私[わたし]を 一晩[ひとばん] 泊[と]めてくれた。|Er ließ mich eine Nacht bei sich übernachten.|Verb
遊び|遊[あそ]び|Spiel, Vergnügen|遊[あそ]びじゃないんだ。|Das ist kein Spiel!|Nomen
ゼロ|ゼロ|Null|一[いち]の 前[まえ]はゼロです。|Die Null kommt vor der Eins.|Nomen
洋服|洋服[ようふく]|(westliche) Kleidung|洋服[ようふく]を 定期的[ていきてき]に 買[か]う 余裕[よゆう]はありません。|Ich habe nicht genügend Geld, um mir regelmäßig Kleidung zu kaufen.|Nomen
教室|教室[きょうしつ]|Klassenzimmer; Kurs|教室[きょうしつ]は 生徒[せいと]でいっぱいだった。|Das Klassenzimmer war voll von Studenten.|Nomen
図書室|図書室[としょしつ]|Bibliotheksraum, Schulbibliothek|学校[がっこう]の 図書[としょ] 室[しつ]に 新[あたら]しい 本[ほん]が 入[はい]ったって 聞[き]いた。|Ich habe gehört, dass die Schulbibliothek neue Bücher bekommen hat.|Nomen
窓|窓[まど]|Fenster|窓[まど]を 開[あ]けっぱなしにしておいたの？|Hast du das Fenster offengelassen?|Nomen
ピンク|ピンク|Rosa, Pink|ピンクは 女[おんな]の 子[こ]のためにあるのよ。|Rosa ist für Mädchen.|Nomen
親しい|親[した]しい|vertraut, eng befreundet|トムとは 長年[ながねん]にわたって 親[した]しくしている。|Ich bin mit Tom schon seit langen Jahren befreundet.|Adjektiv
親切|親切[しんせつ]|freundlich, hilfsbereit|彼[かれ]はとても 親切[しんせつ]だった。|Er war sehr freundlich.|な-Adjektiv
不親切|不親切[ふしんせつ]|unfreundlich|彼[かれ]は 金持[かねも]ちだけれども、 不[ふ] 親切[しんせつ]だ。|Er ist reich, aber unfreundlich.|な-Adjektiv
家族|家族[かぞく]|Familie|これは 私[わたし]の 家族[かぞく]の 写真[しゃしん]です。|Das ist ein Bild von meiner Familie.|Nomen
グラス|グラス|Glas (Trinkglas)|白[しろ]ワインをグラスでお 願[ねが]いします。|Ich hätte gern ein Glas Weiswein.|Nomen
万歳|万歳[ばんざい]|Hurra! Banzai!|ウクライナ 万歳[ばんざい]！|Lang lebe die Ukraine!|Nomen (mit する)
二十歳|二十歳[はたち]|zwanzig Jahre alt|彼女[かのじょ]は 二十歳[はたち]のときに 最初[さいしょ]の 子供[こども]を 産[う]んだ。|Sie bekam ihr erstes Kind mit 20.|Nomen
姉さん|姉[ねえ]さん|große Schwester (Anrede)|お 姉[ねえ]さんはお 元気[げんき]ですか。|Wie geht es deiner Schwester?|Nomen
兄さん|兄[にい]さん|großer Bruder (Anrede)|あなたのお 兄[にい]さんは 車[くるま]を 運転[うんてん]できますか。|Kann Ihr Bruder Auto fahren?|Nomen
ダンス|ダンス|Tanz, Tanzen|ダンスは 好[す]きですか。|Tanzt du gerne?|Nomen (mit する)
兄弟|兄弟[きょうだい]|Geschwister, Brüder|私[わたし]たちは 兄弟[きょうだい]です。|Wir sind Brüder.|Nomen
業者|業者[ぎょうしゃ]|Firma, Fachbetrieb, Händler|我々[われわれ]は 価格[かかく]について 業者[ぎょうしゃ]と 相談[そうだん]がまとまった。|Wir haben uns mit dem Händler über den Preis geeinigt.|Nomen
若者|若者[わかもの]|junger Mensch, Jugend|多[おお]くの 日本[にほん]の 若者[わかもの]が 朝食[ちょうしょく]にパンを 食[た]べます。|Viele Jugendliche in Japan essen Brot zum Frühstück.|Nomen
彼ら|彼[かれ]ら|sie (Plural)|私[わたし]は 彼[かれ]らと 全[まった]く 関係[かんけい]がないんだ。|Mit denen habe ich überhaupt nichts zu tun.|Nomen
おじ|おじ|Onkel|あなたのおじさんは 何歳[なんさい]ですか。|Wie alt ist dein Onkel?|Nomen
結合|結合[けつごう]|Verbindung, Zusammenfügung|水素[すいそ]と 酸素[さんそ]が 結合[けつごう]して 水[みず]になるのです。|Wasserstoff und Sauerstoff verbinden sich und werden zu Wasser.|Nomen (mit する)
結果|結果[けっか]|Ergebnis|ただ 結果[けっか]を 待[ま]つのみだ。|Man kann nur die Ergebnisse abwarten.|Nomen
果物|果物[くだもの]|Obst|彼[かれ]は 果物[くだもの]しか 食[た]べない。|Er isst ausschließlich Obst.|Nomen
課題|課題[かだい]|Aufgabe, Problem|明日[あした]の 課題[かだい]は 何[なん]ですか。|Was ist die Aufgabe für morgen?|Nomen
サッカー|サッカー|Fußball|サッカーはテニスより 人気[にんき]があるんだ。|Fußball ist beliebter als Tennis.|Nomen
課|課[か]|Abteilung; Lektion|彼[かれ]は 企画[きかく] 課[か]で 働[はたら]いている。|Er arbeitet in der Planungsabteilung.|Nomen
効果|効果[こうか]|Wirkung, Effekt|薬[くすり]の 効果[こうか]は 消[き]えていた。|Der Effekt der Medizin war vergangen.|Nomen
自動車|自動車[じどうしゃ]|Auto, Kraftfahrzeug|彼女[かのじょ]は 自動[じどう] 車[しゃ] 事故[じこ]で 亡[な]くなった。|Sie kam bei einem Autounfall ums Leben.|Nomen
自然|自然[しぜん]|Natur|人間[にんげん]は 自然[しぜん]の 一部[いちぶ]である。|Der Mensch ist ein Teil der Natur.|Nomen
スープ|スープ|Suppe|なんておいしいスープなんだろう。|Was für eine köstliche Suppe!|Nomen
自然|自然[しぜん]|natürlich, von selbst|火[ひ]は 自然[しぜん]に 消[き]えた。|Das Feuer ging von selbst aus.|な-Adjektiv
自習|自習[じしゅう]|Selbststudium, Stillarbeit|自習[じしゅう] 時間[じかん]に 集中[しゅうちゅう]して 勉強[べんきょう]ができた。|In der Selbstlernzeit konnte ich konzentriert lernen.|Nomen (mit する)
理由|理由[りゆう]|Grund, Ursache|私[わたし]が 休[やす]んだ 理由[りゆう]は 病気[びょうき]だったからです。|Der Grund meiner Abwesenheit besteht darin, dass ich krank war.|Nomen
自由|自由[じゆう]|Freiheit, frei|やっと 自由[じゆう]になったよ。|Wir sind endlich frei.|な-Adjektiv
バナナ|バナナ|Banane|りんごとバナナとどちらがお 好[す]きですか？|Mögen Sie lieber Äpfel oder Bananen?|Nomen
信じる|信[しん]じる|glauben, vertrauen|もう 何[なに]を 信[しん]じればいいのか 分[わ]からない。|Ich weiß nicht mehr, was ich glauben soll.|Verb
信号|信号[しんごう]|Ampel, Signal|信号[しんごう]は 赤[あか]に 変[か]わった。|Die Ampel wurde rot.|Nomen
頼む|頼[たの]む|bitten; bestellen|彼[かれ]はビールを 一杯[いっぱい] 頼[たの]んだ。|Er hat ein Bier bestellt.|Verb
市民|市民[しみん]|Bürger(in)|彼[かれ]は 市民[しみん] 権[けん]を 奪[うば]われた。|Ihm wurden die Bürgerrechte aberkannt.|Nomen
うるさい|うるさい|laut, lästig|私[わたし]はうるさい 人[ひと]よりおとなしい 人[ひと]の 方[ほう]が 好[す]きだな。|Ich habe ruhige Leute lieber als laute.|Adjektiv
住民|住民[じゅうみん]|Einwohner(in), Anwohner(in)|住民[じゅうみん]たちは 騒音[そうおん]に 対[たい]して 苦情[くじょう]を 訴[うった]えた。|Die Bewohner beschwerten sich über den Lärm.|Nomen
主人|主人[しゅじん]|(mein) Ehemann; Hausherr, Wirt|主人[しゅじん]は 料理[りょうり]がとても 上手[じょうず]です。|Mein Mann kann sehr gut kochen.|Nomen
議員|議員[ぎいん]|Abgeordnete(r)|彼[かれ]は 議員[ぎいん]に 自分[じぶん]から 進[すす]んで 立候補[りっこうほ]した。|Er hat sich aus eigenem Antrieb als Abgeordneter zur Wahl gestellt.|Nomen
会議|会議[かいぎ]|Besprechung, Konferenz|会議[かいぎ]は 明日[あした] 開[ひら]かれる。|Die Besprechung findet morgen statt.|Nomen (mit する)
パトカー|パトカー|Streifenwagen|パトカーを 見[み]て 彼[かれ]は 逃[に]げた。|Er sah den Streifenwagen und floh.|Nomen
対する|対[たい]する|gegenüberstehen; betreffen, sich beziehen auf|彼[かれ]は 誰[だれ]に 対[たい]しても 腰[こし]が 低[ひく]い。|Er ist gegenüber jedermann bescheiden.|Verb
対立|対立[たいりつ]|Gegensatz, Konflikt|彼[かれ]はいつも 上司[じょうし]と 対立[たいりつ]している。|Er ist immer gegen die Meinung seines Vorgesetzten.|Nomen (mit する)
反対|反対[はんたい]|Gegenteil; Widerspruch, dagegen sein|もちろん、 戦争[せんそう]には 反対[はんたい]だ。|Ich bin natürlich gegen den Krieg.|Nomen (mit する)
答え|答[こた]え|Antwort, Lösung|彼[かれ]の 答[こた]えは 正確[せいかく]ではなかった。|Seine Antwort war nicht richtig.|Nomen
ハンバーガー|ハンバーガー|Hamburger|ハンバーガーを 二[に] 個[こ] 注文[ちゅうもん]した。|Ich habe zwei Hamburger bestellt.|Nomen
特に|特[とく]に|besonders|明日[あした]は 特[とく]に 何[なに]もすることがありません。|Ich habe morgen nichts Besonderes vor.|Adverb
特急|特急[とっきゅう]|Sonderexpress (Zug)|最近[さいきん]、 特急[とっきゅう]に 乗[の]りましたか。|Bist du in letzter Zeit mit einem Expresszug gefahren?|Nomen
特別|特別[とくべつ]|besonders, speziell|クリスマスは 特別[とくべつ]な 休日[きゅうじつ]だ。|Weihnachten ist ein besonderer Feiertag.|な-Adjektiv
別々|別々[べつべつ]|getrennt, einzeln|別々[べつべつ]に 包[つつ]んでください。|Einzeln verpacken, bitte!|な-Adjektiv
エスカレーター|エスカレーター|Rolltreppe|エスカレーターはどこですか？|Wo ist die Rolltreppe?|Nomen
別れる|別[わか]れる|sich trennen, auseinandergehen|彼女[かのじょ]ね、 彼[かれ]と 別[わか]れるつもりなのよ。|Sie will sich von ihm trennen.|Verb
一般|一般[いっぱん]|allgemein, gewöhnlich|子供[こども]は 一般[いっぱん]に 大人[おとな]よりも 体温[たいおん]が 高[たか]い。|Kinder haben im Allgemeinen eine höhere Körpertemperatur als Erwachsene.|Nomen
目的|目的[もくてき]|Zweck, Ziel|滞在[たいざい] 目的[もくてき]は 何[なん]ですか？|Was ist der Zweck Ihres Besuches?|Nomen
普通|普通[ふつう]|normal, gewöhnlich|朝[あさ]は 普通[ふつう] 何時[なんじ]に 起[お]きますか。|Wann stehst du normalerweise auf?|な-Adjektiv
タオル|タオル|Handtuch|乾[かわ]いたタオルを 持[も]ってきて。|Bring mir ein trockenes Handtuch!|Nomen
並ぶ|並[なら]ぶ|sich anstellen, in einer Reihe stehen|何時間[なんじかん]も 並[なら]ばなきゃいけなかった。|Ich musste stundenlang anstehen.|Verb
並べる|並[なら]べる|aufreihen, nebeneinanderstellen|メイドはテーブルにナイフとフォークを 並[なら]べた。|Das Hausmädchen arrangierte Messer und Gabeln auf dem Tisch.|Verb
平和|平和[へいわ]|Frieden|僕[ぼく]も『 戦争[せんそう]と 平和[へいわ]』は 読[よ]んでません。|Ich habe „Krieg und Frieden“ auch noch nicht gelesen.|な-Adjektiv
高等学校|高等学校[こうとうがっこう]|Oberschule|メアリーはカトリック 系[けい]の 高等[こうとう] 学校[がっこう]へ 行[い]きました。|Mary ist auf eine katholische Oberschule gegangen.|Nomen
パチンコ|パチンコ|Pachinko (japanisches Automatenspiel)|彼[かれ]がパチンコするなんて 絶対[ぜったい]にないよ。|Er würde ganz sicher niemals Pachinko spielen.|Nomen
病院|病院[びょういん]|Krankenhaus|彼[かれ]は 病院[びょういん]で 気[き]が 付[つ]いた。|Er kam im Krankenhaus wieder zu Bewusstsein.|Nomen
入院|入院[にゅういん]|Krankenhausaufenthalt, Einlieferung|入院[にゅういん]しなければいけませんか。|Muss ich ins Krankenhaus?|Nomen (mit する)
大学院|大学院[だいがくいん]|Graduiertenschule (Master, Promotion)|トムは 大学[だいがく] 院[いん] 生[せい]です。|Tom ist im Masterstudium.|Nomen
医者|医者[いしゃ]|Arzt, Ärztin|すぐに 医者[いしゃ]に 診[み]てもらった 方[ほう]がいいぞ。|Du solltest sofort zu einem Arzt gehen.|Nomen
みかん|みかん|Mandarine|彼[かれ]らはリンゴ、みかん、 卵[たまご]などを 売[う]っている。|Sie verkaufen Äpfel, Mandarinen, Eier und so weiter.|Nomen
お医者さん|お 医者[いしゃ]さん|Arzt, Ärztin (höflich)|彼女[かのじょ]はいいお 医者[いしゃ]さんなんだって。|Sie soll eine gute Ärztin sein.|Nomen
歯医者|歯医者[はいしゃ]|Zahnarzt, Zahnärztin|彼[かれ]は 歯[は] 医者[いしゃ]に 行[い]った。|Er ging zum Zahnarzt.|Nomen
歯|歯[は]|Zahn|目[め]には 目[め]を、 歯[は]には 歯[は]を。|Auge um Auge und Zahn um Zahn.|Nomen
歯ブラシ|歯[は]ブラシ|Zahnbürste|それは 僕[ぼく]の 歯[は]ブラシですか？|Ist das meine Zahnbürste?|Nomen
ケーキ|ケーキ|Kuchen, Torte|彼女[かのじょ]はケーキが 好[す]きだ。|Sie mag Kuchen.|Nomen
科学|科学[かがく]|Wissenschaft|科学[かがく]は 好[す]きではありません。|Ich mag keine Wissenschaft.|Nomen
教科書|教科書[きょうかしょ]|Lehrbuch, Schulbuch|これは 誰[だれ]の 教科[きょうか] 書[しょ]ですか。|Wem gehört dieses Lehrbuch?|Nomen
理科|理科[りか]|Naturkunde (Schulfach)|彼女[かのじょ]は 理科[りか]を 勉強[べんきょう]しなければなりません。|Sie muss Naturwissenschaften studieren.|Nomen
亡くなる|亡[な]くなる|sterben, verscheiden|私[わたし]の 両親[りょうしん]は 両方[りょうほう]とも 亡[な]くなりました。|Meine Eltern sind schon alle beide tot.|Verb
コップ|コップ|Becher, Glas|コップにはほとんど 水[みず]がありません。|Es ist kaum Wasser im Glas.|Nomen
忙しい|忙[いそが]しい|beschäftigt|今[いま] 忙[いそが]しいですよね？|Du bist gerade beschäftigt, oder?|Adjektiv
疲れる|疲[つか]れる|müde werden|今日[きょう]は 疲[つか]れたので 早[はや]く 寝[ね]た。|Ich war heute müde, also ging ich früh ins Bett.|Verb
禁煙|禁煙[きんえん]|Rauchverbot; das Rauchen aufgeben|禁煙[きんえん] 席[せき]をお 願[ねが]いします。|Ich hätte gerne einen Platz im Nichtraucherbereich.|Nomen (mit する)
酔っ払い|酔[よ]っ 払[ぱら]い|Betrunkene(r)|酔[よ]っ 払[ぱら]いが 階段[かいだん]から 落[お]ちたんだ。|Ein betrunkener Mann fiel die Treppe hinunter.|Nomen
ナイロン|ナイロン|Nylon|ナイロンストッキングはすぐ 伝線[でんせん]する。|Nylonstrümpfe bilden oft Laufmaschen.|Nomen
酔っ払う|酔[よ]っ 払[ぱら]う|sich betrinken|トムは 酔[よ]っ 払[ぱら]ってる。|Tom ist betrunken.|Verb
危ない|危[あぶ]ない|gefährlich|火[ひ]は 危[あぶ]ないんだよ。|Feuer ist gefährlich.|Adjektiv
危険|危険[きけん]|Gefahr, gefährlich|ここで 泳[およ]ぐのは 危険[きけん]だ。|Es ist gefährlich, hier zu schwimmen!|な-Adjektiv
存在|存在[そんざい]|Existenz, Dasein|神[かみ]の 存在[そんざい]を 信[しん]じますか。|Glauben Sie an die Existenz Gottes?|Nomen (mit する)
スーツ|スーツ|Anzug|彼[かれ]は 私[わたし]に 新[あたら]しいスーツを 作[つく]ってくれた。|Er hat mir einen neuen Anzug angefertigt.|Nomen
注目|注目[ちゅうもく]|Aufmerksamkeit, Beachtung|私[わたし]は 注目[ちゅうもく]を 集[あつ]めたかったわけではない。|Es ist nicht so, dass ich die Aufmerksamkeit auf mich lenken wollte.|Nomen (mit する)
注文|注文[ちゅうもん]|Bestellung|これは 私[わたし]が 注文[ちゅうもん]した 物[もの]ではありません。|Das ist aber nicht das, was ich bestellt habe.|Nomen (mit する)
意味|意味[いみ]|Bedeutung, Sinn|これはどういう 意味[いみ]だろう？|Was soll das denn bedeuten?|Nomen
意見|意見[いけん]|Meinung|あなたの 意見[いけん]はどうですか。|Wie ist deine Meinung?|Nomen
チケット|チケット|Ticket, Eintrittskarte|チケットは 飛[と]ぶように 売[う]れた。|Die Eintrittskarten gingen weg wie warme Semmeln.|Nomen
注意|注意[ちゅうい]|Vorsicht, Aufmerksamkeit; Ermahnung|車[くるま]を 運転[うんてん]する 時[とき]は 注意[ちゅうい]しなければならない。|Beim Autofahren muss man vorsichtig sein.|Nomen (mit する)
用意|用意[ようい]|Vorbereitung, Bereitstellung|彼[かれ]は 出発[しゅっぱつ]の 用意[ようい]をした。|Er bereitete sich auf die Abreise vor.|Nomen (mit する)
確か|確[たし]か|sicher, gewiss; wenn ich mich recht erinnere|彼[かれ]が 仕事[しごと]を 辞[や]めるのは 確[たし]かだと 思[おも]う。|Ich denke, es ist sicher, dass Tom kündigen wird.|な-Adjektiv
確認|確認[かくにん]|Bestätigung, Überprüfung|予約[よやく]の 再[さい] 確認[かくにん]をしたいのですが。|Ich würde gerne meine Reservierung bestätigen lassen.|Nomen (mit する)
チョコレート|チョコレート|Schokolade|チョコレートは 甘[あま]い。|Schokolade schmeckt süß.|Nomen
機能|機能[きのう]|Funktion|多分[たぶん]ね、それは 機能[きのう]しないよ。|Das wird wahrscheinlich nicht funktionieren.|Nomen (mit する)
ジェット機|ジェット 機[き]|Düsenflugzeug|そのジェット 機[き]は 稲光[いなびかり]より 速[はや]かった。|Jene Düsenflugzeuge waren schneller als der Blitz.|Nomen
機械|機械[きかい]|Maschine|その 機械[きかい]がなぜ 動[うご]かないのかわかった。|Ich habe herausgefunden, warum die Maschine nicht ging.|Nomen
材料|材料[ざいりょう]|Material, Zutat|その 小説家[しょうせつか]は 本[ほん]を 書[か]くために 材料[ざいりょう]を 集[あつ]めた。|Zum Schreiben seines Buches sammelte der Autor Material.|Nomen
チャンネル|チャンネル|Kanal, Programm (Fernsehen)|チャンネル 変[か]えてもいい？|Darf ich den Kanal wechseln?|Nomen
具体的|具体的[ぐたいてき]|konkret|具体[ぐたい] 的[てき]に 何[なに]が 問題[もんだい]だったんですか？|Was war konkret das Problem?|な-Adjektiv
基づく|基[もと]づく|beruhen auf, basieren auf|科学[かがく]は 観察[かんさつ]に 基[もと]づいている。|Wissenschaft beruht auf Beobachtung.|Verb
基本|基本[きほん]|Grundlage, Basis|基本[きほん] 的[てき]にあなたの 意見[いけん]に 賛成[さんせい]です。|Im Grunde genommen bin ich mit dir einer Meinung.|Nomen
基準|基準[きじゅん]|Maßstab, Kriterium, Norm|この 学校[がっこう]の 入学[にゅうがく] 基準[きじゅん]はとても 高[たか]い。|Die Aufnahmekriterien dieser Schule sind sehr hoch.|Nomen
つまらない|つまらない|langweilig; belanglos|あれは 本当[ほんとう]につまらなかったよ。|Das war wirklich langweilig.|Adjektiv
備える|備[そな]える|vorsorgen, sich wappnen; ausstatten|私[わたし]たちは 老後[ろうご]に 備[そな]えなければならない。|Wir müssen Vorsorge fürs Alter treffen.|Verb
準備|準備[じゅんび]|Vorbereitung|明日[あした]の 準備[じゅんび]はできた？|Ist für morgen alles vorbereitet?|Nomen (mit する)
設計|設計[せっけい]|Entwurf, Konstruktion|私[わたし]の 家[いえ]は 地震[じしん]に 堪[た]えるように 設計[せっけい]されている。|Mein Haus ist so konstruiert, dass es einem Erdbeben standhalten kann.|Nomen (mit する)
施設|施設[しせつ]|Einrichtung, Anlage|私[わたし] 達[たち]の 町[まち]には、すばらしいスポーツ 施設[しせつ]がある。|In unserer Stadt gibt es hervorragende Sporteinrichtungen.|Nomen
マッチ|マッチ|Streichholz|マッチありますか。|Haben Sie Streichhölzer?|Nomen
設ける|設[もう]ける|einrichten, schaffen, vorsehen|ホールは 仕切[しき]りを 設[もう]ける 前[まえ]は 千[せん] 人[にん] 収容[しゅうよう]できた。|Vor dem Aufstellen der Trennwände konnte die Halle tausend Menschen aufnehmen.|Verb
説明|説明[せつめい]|Erklärung|私[わたし]が 彼女[かのじょ]にそれを 説明[せつめい]します。|Ich werde es ihr erklären.|Nomen (mit する)
小説|小説[しょうせつ]|Roman|彼[かれ]は 毎日[まいにち] 小説[しょうせつ]を 読[よ]む。|Er liest jeden Tag Romane.|Nomen
公開|公開[こうかい]|Veröffentlichung, öffentliche Vorführung|個人情報[こじんじょうほう]を 公開[こうかい]しないのが 私[わたし]たちの 方針[ほうしん]です。|Wir geben grundsätzlich keine persönlichen Daten weiter.|Nomen (mit する)
いとこ|いとこ|Cousin, Cousine|私[わたし]のいとこは 私[わたし]より 少[すこ]し 年上[としうえ]です。|Mein Cousin ist etwas älter als ich es bin.|Nomen
公園|公園[こうえん]|Park|公園[こうえん]で 野球[やきゅう]をしてはいけないよ。|Spielt im Park kein Baseball!|Nomen
動物園|動物園[どうぶつえん]|Zoo|私[わたし]は 動物[どうぶつ] 園[えん]へ 行[い]った。|Ich bin zum Zoo gegangen.|Nomen
祭り|祭[まつ]り|Fest, Volksfest|多[おお]くの 人[ひと]が 祭[まつ]りを 見[み]るために 集[あつ]まった。|Eine große Ansammlung von Menschen kam zusammen, um sich das Fest anzusehen.|Nomen
国際|国際[こくさい]|international|彼[かれ]はちょうど 新[しん] 東京[とうきょう] 国際[こくさい] 空港[くうこう]に 着[つ]いたところです。|Er ist gerade am Neuen Internationalen Flughafen Tōkyō angekommen.|Nomen
ストーブ|ストーブ|Ofen, Heizgerät|ストーブちゃんと 消[け]した？|Hast du den Herd ausgestellt?|Nomen
実際|実際[じっさい]|tatsächlich, in Wirklichkeit|黒海[こっかい]の 水[みず]って、 実際[じっさい]に 黒[くろ]いの？|Ist das Wasser im Schwarzen Meer wirklich schwarz?|Adverb
飛行場|飛行場[ひこうじょう]|Flugplatz|私[わたし]は 彼[かれ]らを 見送[みおく]りに 飛行[ひこう] 場[じょう]まで 行[い]った。|Ich fuhr zum Flugplatz, um sie zu verabschieden.|Nomen
航空便|航空便[こうくうびん]|Luftpost|航空[こうくう] 便[びん]だといくらかかりますか。|Was kostet der Versand per Luftpost?|Nomen
船便|船便[ふなびん]|Seepost, Schiffsfracht|船便[ふなびん]だといくらになりますか。|Wie viel kostet es per Seepost?|Nomen
ガソリンスタンド|ガソリンスタンド|Tankstelle|この 辺[へん]にガソリンスタンドはありますか。|Ist hier in der Nähe eine Tankstelle?|Nomen
船|船[ふね]|Schiff, Boot|ずっと 遠[とお]くに 船[ふね]が 見[み]える。|Ich kann ein Schiff in der Ferne sehen.|Nomen
空港|空港[くうこう]|Flughafen|これは 空港[くうこう]の 写真[しゃしん]です。|Dies ist ein Foto vom Flughafen.|Nomen
港|港[みなと]|Hafen|水先案内人[みずさきあんないにん]は 船[ふね]を 港[みなと]に 誘導[ゆうどう]する。|Ein Lotse leitet das Schiff in den Hafen.|Nomen
島|島[しま]|Insel|島[しま]が 見[み]えてきた。|Die Insel kam in Sicht.|Nomen
デート|デート|Verabredung, Date|明日[あした]のデート、 何[なに] 着[き]て 行[い]けばいいと 思[おも]う？|Was soll ich zu der Verabredung morgen anziehen?|Nomen (mit する)
完成|完成[かんせい]|Fertigstellung, Vollendung|いつ 完成[かんせい]したのですか。|Wann wurde es fertiggestellt?|Nomen (mit する)
平成|平成[へいせい]|Heisei-Ära (1989–2019)|昭和[しょうわ]の 次[つぎ]は 平成[へいせい]です。|Auf die Shōwa-Zeit folgt die Heisei-Zeit.|Nomen
成功|成功[せいこう]|Erfolg|パーティーは 成功[せいこう]だったよ。|Die Party war ein großer Erfolg.|Nomen (mit する)
原因|原因[げんいん]|Ursache|何[なに]が 原因[げんいん]ですか。|Was ist die Ursache?|Nomen
ふすま|ふすま|Papierschiebetür (Fusuma)|静[しず]かにふすまを 開[あ]けました。|Ich habe leise die Papierschiebetür geöffnet.|Nomen
資金|資金[しきん]|Geldmittel, Kapital|私[わたし]たちは 資金[しきん]を 使[つか]い 果[は]たした。|Wir haben unsere Mittel aufgebraucht.|Nomen
投資|投資[とうし]|Investition|教育[きょういく]は 未来[みらい]への 投資[とうし]である。|Bildung ist eine Investition in die Zukunft.|Nomen (mit する)
願う|願[ねが]う|wünschen, hoffen, bitten|カードでお 願[ねが]いします。|Mit Karte, bitte.|Verb
正確|正確[せいかく]|genau, exakt|私[わたし]の 腕時計[うでどけい]は 正確[せいかく]だ。|Meine Armbanduhr geht genau.|な-Adjektiv
レモン|レモン|Zitrone|レモンは 苦[にが]い。|Zitronen sind sauer.|Nomen
正しい|正[ただ]しい|richtig, korrekt|どれが 正[ただ]しいと 思[おも]う？|Was denkst du, was ist richtig?|Adjektiv
正月|正月[しょうがつ]|Neujahr|今年[ことし]は 寝[ね] 正月[しょうがつ]になりそうだ。|Dieses Jahr werde ich die Neujahrsfeiertage wohl im Bett verbringen.|Nomen
正直|正直[しょうじき]|ehrlich, aufrichtig|私[わたし]には 彼[かれ]は 正直[しょうじき]なように 思[おも]える。|Er scheint mir ehrlich zu sein.|な-Adjektiv
異なる|異[こと]なる|sich unterscheiden, anders sein|あなたの 意見[いけん]は 私[わたし]のとは 全[まった]く 異[こと]なる。|Deine Meinung unterscheidet sich gänzlich von der meinen.|Verb
チーズ|チーズ|Käse|チーズはミルクから 作[つく]られる。|Käse wird aus Milch gemacht.|Nomen
通常|通常[つうじょう]|normalerweise, gewöhnlich|海外[かいがい]へ 旅行[りょこう]する 際[さい]には、 通常[つうじょう]、パスポートが 必要[ひつよう]である。|Bei Auslandsreisen benötigt man für gewöhnlich einen Reisepass.|Nomen
非常に|非常[ひじょう]に|sehr, äußerst|今回[こんかい]の 試験[しけん]は 非常[ひじょう]に 難[むずか]しかった。|Die Prüfung war diesmal äußerst schwer.|Adverb
調べる|調[しら]べる|nachschlagen, untersuchen, prüfen|彼[かれ]らは 水[みず]がどれぐらいきれいか 調[しら]べた。|Sie untersuchten, wie sauber das Wasser war.|Verb
強調|強調[きょうちょう]|Betonung, Hervorhebung|彼[かれ]は 都会生活[とかいせいかつ]の 便利[べんり]な 面[めん]を 強調[きょうちょう]した。|Er betonte die bequemen Seiten des Stadtlebens.|Nomen (mit する)
ドライブ|ドライブ|Autofahrt, Spazierfahrt|ドライブするのはどうですか。|Wie wäre es, wenn wir eine Spazierfahrt machen würden?|Nomen (mit する)
季節|季節[きせつ]|Jahreszeit|春[はる]は、 私[わたし]が 一番[いちばん] 好[す]きな 季節[きせつ]です。|Der Frühling ist meine Lieblingsjahreszeit.|Nomen
調査|調査[ちょうさ]|Untersuchung, Erhebung|その 調査[ちょうさ]は 進行中[しんこうちゅう]です。|Die Untersuchung ist im Gang.|Nomen (mit する)
提供|提供[ていきょう]|Bereitstellung, Angebot|私[わたし]たちは 彼[かれ]によい 仕事[しごと]を 提供[ていきょう]した。|Wir haben ihm eine gute Arbeit angeboten.|Nomen (mit する)
提案|提案[ていあん]|Vorschlag|彼[かれ]の 提案[ていあん]をどう 思[おも]いますか。|Was hältst du von seinem Vorschlag?|Nomen (mit する)
ラケット|ラケット|Schläger (Tennis usw.)|トムはラケットを 地面[じめん]に 置[お]いた。|Tom legte den Schläger auf den Boden.|Nomen
案内|案内[あんない]|Führung, Auskunft|観光[かんこう] 案内[あんない] 所[しょ]はどこですか。|Wo ist die Touristenauskunft?|Nomen (mit する)
示す|示[しめ]す|zeigen, anzeigen|地図[ちず]で 示[しめ]してもらえますか。|Kannst du es mir auf der Karte zeigen?|Verb
連れて行く|連[つ]れて 行[い]く|mitnehmen (eine Person)|彼[かれ]は 妹[いもうと]を 連[つ]れて 行[い]った。|Er nahm seine Schwester mit.|Verb
連れて来る|連[つ]れて 来[く]る|mitbringen (eine Person)|今度[こんど] 来[く]る 時[とき]には 妹[いもうと]を 連[つ]れて 来[き]ます。|Wenn ich das nächste Mal komme, bringe ich meine Schwester mit.|Verb
スチュワーデス|スチュワーデス|Flugbegleiterin, Stewardess|ジェーンは 若[わか]い 頃[ころ]スチュワーデスだった。|Jane war Stewardess, als sie jung war.|Nomen
続ける|続[つづ]ける|fortsetzen, weitermachen|彼[かれ]は 本[ほん]を 読[よ]み 続[つづ]けた。|Er las weiter.|Verb
相手|相手[あいて]|Gegenüber, Partner, Gegner|トムには 話[はな]し 相手[あいて]が 必要[ひつよう]だね。|Tom braucht einen Gesprächspartner.|Nomen
会談|会談[かいだん]|Gespräch, Unterredung (offiziell)|平和[へいわ] 会談[かいだん]は 今週[こんしゅう] 始[はじ]まる。|Friedensgespräche beginnen diese Woche.|Nomen (mit する)
相談|相談[そうだん]|Beratung, Besprechung|相談[そうだん]したいことがあるんだけど。|Ich habe etwas mit dir zu besprechen.|Nomen (mit する)
テープレコーダー|テープレコーダー|Tonbandgerät, Kassettenrekorder|そのテープレコーダーは 彼[かれ]の 声[こえ]を 録音[ろくおん]した。|Der Kassettenrekorder nahm seine Stimme auf.|Nomen
記者|記者[きしゃ]|Journalist(in), Reporter(in)|彼[かれ]は 大勢[おおぜい]の 新聞[しんぶん] 記者[きしゃ]にとり 囲[かこ]まれた。|Er wurde von einer großen Gruppe von Zeitungsreportern umringt.|Nomen
記録|記録[きろく]|Aufzeichnung; Rekord|彼[かれ]は 記録[きろく]を 破[やぶ]った。|Er hat den Rekord gebrochen.|Nomen (mit する)
録音|録音[ろくおん]|Tonaufnahme|彼[かれ]の 演説[えんぜつ]を 録音[ろくおん]しておかねばならない。|Ihr müsst seine Rede aufnehmen.|Nomen (mit する)
登る|登[のぼ]る|besteigen, hinaufklettern|晴[は]れたので、 私[わたし]たちは 富士山[ふじさん]に 登[のぼ]り 始[はじ]めた。|Weil schönes Wetter war, machten wir uns auf, den Fuji zu besteigen.|Verb
ひげ|ひげ|Bart|私[わたし]のひげはのびるのが 速[はや]い。|Mein Bart wächst schnell.|Nomen
関する|関[かん]する|betreffen, sich beziehen auf|私[わたし]に 関[かん]して 言[い]えば、 何[なん]の 質問[しつもん]もありません。|Was mich betrifft, so habe ich keine Frage.|Verb
関連|関連[かんれん]|Zusammenhang, Bezug|喫煙[きつえん]と 肺[はい]がんには 関連[かんれん] 性[せい]がある。|Es besteht ein Zusammenhang zwischen dem Rauchen und Lungenkrebs.|Nomen (mit する)
関係|関係[かんけい]|Beziehung, Verhältnis|人間[にんげん] 関係[かんけい]はとても 複雑[ふくざつ]だ。|Menschliche Beziehungen sind sehr komplex.|Nomen (mit する)
状況|状況[じょうきょう]|Lage, Situation|難[むずか]しい 状況[じょうきょう]です。|Das ist eine schwierige Situation.|Nomen
ぐっすり|ぐっすり|tief und fest (schlafen)|ぐっすり 寝[ね]ました。|Ich konnte gut schlafen.|Adverb
状態|状態[じょうたい]|Zustand|彼[かれ]の 健康[けんこう] 状態[じょうたい]はよくない。|Sein Gesundheitszustand ist nicht gut.|Nomen
治る|治[なお]る|heilen, gesund werden|かぜが 治[なお]らない。|Ich werde meine Erkältung nicht los.|Verb
政治|政治[せいじ]|Politik|政治[せいじ] 家[か]になりたいです。|Ich will Politikerin werden.|Nomen
治す|治[なお]す|heilen, kurieren|彼[かれ]は 私[わたし]の 病気[びょうき]を 治[なお]した。|Er hat meine Krankheit kuriert.|Verb
ソース|ソース|Soße, Worcestersoße|ここのソースは 舐[な]めてみるとちょっと 塩[しょ]っぱい。|Wenn man diese Soße probiert, ist sie ein bisschen salzig.|Nomen
政府|政府[せいふ]|Regierung|政府[せいふ]は 農業[のうぎょう]にもっと 投資[とうし]するべきだ。|Die Regierung sollte mehr Geld in Landwirtschaft investieren.|Nomen
党|党[とう]|Partei|彼[かれ]は 党[とう]の 主導権[しゅどうけん]を 握[にぎ]った。|Er übernahm die Führung der Partei.|Nomen
対策|対策[たいさく]|Maßnahme, Gegenmaßnahme|徹底的[てっていてき]な 安全[あんぜん] 対策[たいさく]が 実施[じっし]された。|Es wurden weitreichende Sicherheitsmaßnahmen in Kraft gesetzt.|Nomen
政策|政策[せいさく]|Politik, politische Maßnahme|私[わたし]は 政府[せいふ]の 教育[きょういく] 政策[せいさく]には 賛成[さんせい]できません。|Ich bin mit der Bildungspolitik der Regierung nicht einverstanden.|Nomen
タイプライター|タイプライター|Schreibmaschine|タイプライターの 調子[ちょうし]がおかしい。|Mit meiner Schreibmaschine stimmt etwas nicht.|Nomen
選ぶ|選[えら]ぶ|wählen, auswählen|どれでも 好[す]きな 本[ほん]を 選[えら]んでもいいよ。|Du darfst jedes Buch wählen, das du magst.|Verb
選手|選手[せんしゅ]|Sportler(in), Spieler(in)|彼[かれ]はテニスの 選手[せんしゅ]になりたいんだよ。|Er möchte ein Tennisspieler werden.|Nomen
選挙|選挙[せんきょ]|Wahl (politisch)|あなたは 選挙[せんきょ]で 誰[だれ]に 投票[とうひょう]しましたか。|Für wen hast du bei der Wahl gestimmt?|Nomen (mit する)
候補|候補[こうほ]|Kandidat(in), Kandidatur|彼[かれ]はアメリカ 大統領[だいとうりょう] 候補[こうほ] 者[しゃ]の 一人[ひとり]である。|Er ist einer der Kandidaten für die amerikanischen Präsidentschaftswahlen.|Nomen
トマト|トマト|Tomate|トマトは 野菜[やさい]で、 果物[くだもの]ではない。|Tomaten sind Gemüse, kein Obst.|Nomen
首相|首相[しゅしょう]|Premierminister(in)|首相[しゅしょう]は 危篤[きとく]だとささやかれている。|Man munkelt, der Premierminister sei ernsthaft krank.|Nomen
首都|首都[しゅと]|Hauptstadt|イタリアの 首都[しゅと]はローマです。|Die Hauptstadt von Italien ist Rom.|Nomen
改革|改革[かいかく]|Reform|私[わたし]はドイツ 語[ご]の 正書法[せいしょほう] 改革[かいかく]に 賛成[さんせい]です。|Ich bin für eine Reform der deutschen Rechtschreibung.|Nomen (mit する)
革|革[かわ]|Leder|トムは 革[かわ]ベルトを 買[か]いたいんだ。|Tom will sich einen Ledergürtel kaufen.|Nomen
バター|バター|Butter|トムはパンにバターを 塗[ぬ]った。|Tom bestrich sich das Brot mit Butter.|Nomen
命令|命令[めいれい]|Befehl, Anordnung|彼[かれ]の 依頼[いらい]は 命令[めいれい]に 等[ひと]しかった。|Seine Bitte kam einem Befehl gleich.|Nomen (mit する)
番組|番組[ばんぐみ]|Sendung, Programm|あなたのお 気[き]に 入[い]りのテレビ 番組[ばんぐみ]は 何[なん]ですか。|Was ist deine Lieblingssendung im Fernsehen?|Nomen
組み立てる|組[く]み 立[た]てる|zusammenbauen, montieren|僕[ぼく]は 機械[きかい]を 組[く]み 立[た]てるのが 好[す]きだ。|Ich mag es, Maschinen zusammenzubauen.|Verb
組織|組織[そしき]|Organisation; Gewebe|この 会社[かいしゃ]は 立派[りっぱ]な 組織[そしき]をもっている。|Diese Firma hat eine hervorragende Organisation.|Nomen (mit する)
バレーボール|バレーボール|Volleyball|バレーボールをしよう。|Spielen wir Volleyball!|Nomen
進める|進[すす]める|voranbringen, vorantreiben|私[わたし]は 時計[とけい]の 針[はり]を 進[すす]めた。|Ich stellte den Uhrzeiger vor.|Verb
進む|進[すす]む|vorwärtsgehen, vorankommen|明日[あした]は 気[き]が 進[すす]まないな。|Ich freue mich nicht auf morgen.|Verb
進学|進学[しんがく]|Übergang an eine höhere Schule|大学[だいがく]には 進学[しんがく]しないことに 決[き]めました。|Ich habe beschlossen, nicht zu studieren.|Nomen (mit する)
拡大|拡大[かくだい]|Vergrößerung, Ausweitung|サハラ 砂漠[さばく]は 拡大[かくだい]しています。|Die Sahara breitet sich aus.|Nomen (mit する)
おかず|おかず|Beilage, Gericht zum Reis|今日[きょう]のおかずはご 飯[はん]が 進[すす]むなあ。|Bei der heutigen Beilage isst man gleich mehr Reis.|Nomen
責任|責任[せきにん]|Verantwortung|事故[じこ]の 責任[せきにん]は 君[きみ]にあった。|Du warst für den Unfall verantwortlich.|Nomen
辞める|辞[や]める|kündigen, aufhören (Stelle)|仕事[しごと]を 辞[や]めるつもりですか。|Wollen Sie kündigen?|Verb
辞書|辞書[じしょ]|Wörterbuch|それは 私[わたし]の 辞書[じしょ]です。|Das ist mein Wörterbuch.|Nomen
通勤|通勤[つうきん]|Pendeln, Arbeitsweg|私[わたし]は 毎日[まいにち] 車[くるま]で 通勤[つうきん]している。|Ich fahre jeden Tag mit dem Auto zur Arbeit.|Nomen (mit する)
カレンダー|カレンダー|Kalender|壁[かべ]にカレンダーを 掛[か]けといたよ。|Ich habe den Kalender an die Wand gehängt.|Nomen
勤める|勤[つと]める|angestellt sein, arbeiten bei|私[わたし]の 父[ちち]は 銀行[ぎんこう]に 勤[つと]めている。|Mein Vater arbeitet bei einer Bank.|Verb
事務所|事務所[じむしょ]|Büro, Geschäftsstelle|彼[かれ]は 私[わたし]の 事務[じむ] 所[しょ]に 昨日[きのう] 来[き]た。|Er ist gestern in mein Büro gekommen.|Nomen
事務室|事務室[じむしつ]|Büroraum|入学願書[にゅうがくがんしょ]は 直接[ちょくせつ] 学校[がっこう]の 事務[じむ] 室[しつ]に 送[おく]って 下[くだ]さい。|Schicken Sie den Aufnahmeantrag direkt zum Büro der Schule.|Nomen
従来|従来[じゅうらい]|bisher, herkömmlich|彼[かれ]らは 従来[じゅうらい]の 生活[せいかつ]スタイルを 捨[す]てたくなかった。|Sie wollten ihren alten Lebensstil nicht aufgeben.|Nomen
ハンドバッグ|ハンドバッグ|Handtasche|このハンドバッグは 誰[だれ]のですか。|Wessen Handtasche ist das?|Nomen
成績|成績[せいせき]|Leistung, Noten|彼[かれ]はいつも 成績[せいせき]がクラスで 一番[いちばん]だ。|Seine Noten sind immer die besten in der Klasse.|Nomen
集める|集[あつ]める|sammeln|何[なに]か 集[あつ]めていますか。|Sammelst du etwas?|Verb
集まる|集[あつ]まる|sich versammeln, zusammenkommen|クラブの 会員[かいいん]は 会議室[かいぎしつ]に 集[あつ]まった。|Die Clubmitglieder versammelten sich im Konferenzraum.|Verb
採用|採用[さいよう]|Einstellung, Anstellung; Übernahme|それが 私[わたし]を 採用[さいよう]した 理由[りゆう]ですか？|Haben Sie mich deshalb eingestellt?|Nomen (mit する)
ベル|ベル|Klingel, Glocke|彼[かれ]はドアベルを 鳴[な]らした。|Er klingelte an der Tür.|Nomen
給料|給料[きゅうりょう]|Gehalt, Lohn|昨日[きのう]、 給料[きゅうりょう]をもらったよ。|Ich habe gestern meinen Lohn erhalten.|Nomen
卒業|卒業[そつぎょう]|Schulabschluss, Studienabschluss|彼[かれ]は 学校[がっこう]を 卒業[そつぎょう]したあと、ロンドンへ 行[い]った。|Nachdem er die Schule beendet hatte, ging er nach London.|Nomen (mit する)
就職|就職[しゅうしょく]|Stellenantritt, Arbeitssuche|トムはやっと 就職[しゅうしょく]できた。|Tom hat endlich Arbeit gefunden.|Nomen (mit する)
退院|退院[たいいん]|Entlassung aus dem Krankenhaus|彼女[かのじょ]は 来週[らいしゅう] 退院[たいいん]できるでしょうか。|Wird sie nächste Woche in der Lage sein, das Krankenhaus zu verlassen?|Nomen (mit する)
インク|インク|Tinte|インクで 書[か]かなければだめですか。|Muss ich mit Tinte schreiben?|Nomen
契約|契約[けいやく]|Vertrag|契約[けいやく]したの？|Hast du den Vertrag unterschrieben?|Nomen (mit する)
交渉|交渉[こうしょう]|Verhandlung|メキシコ 政府[せいふ]は 交渉[こうしょう]を 拒否[きょひ]した。|Die Regierung von Mexiko weigerte sich, zu verhandeln.|Nomen (mit する)
事件|事件[じけん]|Vorfall, Fall, Kriminalfall|彼[かれ]は 事件[じけん]を 最初[さいしょ]から 再調査[さいちょうさ]しようと 思[おも]った。|Er plante, den Fall noch einmal neu aufzurollen.|Nomen
条件|条件[じょうけん]|Bedingung|そちらの 条件[じょうけん]を 受[う]け 入[い]れましょう。|Wir werden eure Bedingungen annehmen.|Nomen
クーラー|クーラー|Klimaanlage|クーラーつけすぎ。|Du hast zu oft die Klimaanlage am Laufen.|Nomen
参加|参加[さんか]|Teilnahme|参加[さんか]できなくて 残念[ざんねん]です。|Schade, dass ich nicht teilnehmen kann.|Nomen (mit する)
増加|増加[ぞうか]|Zunahme, Anstieg|輸入量[ゆにゅうりょう]の 急激[きゅうげき]な 増加[ぞうか]に 我々[われわれ]は 驚[おどろ]いた。|Wir waren überrascht über den drastischen Anstieg der Importmenge.|Nomen (mit する)
加える|加[くわ]える|hinzufügen|母[はは]はサラダに 塩[しお]を 加[くわ]えるのを 忘[わす]れた。|Meine Mutter hat vergessen, zum Salat Salz hinzuzufügen.|Verb
加工|加工[かこう]|Verarbeitung, Bearbeitung|ミルクはバターに 加工[かこう]される。|Milch wird zu Butter verarbeitet.|Nomen (mit する)
ミルク|ミルク|Milch, Babymilch|コーヒーにミルクを 入[い]れた。|Er hat Milch in seinen Kaffee getan.|Nomen
比べる|比[くら]べる|vergleichen|太陽[たいよう]に 比[くら]べると 地球[ちきゅう]は 小[ちい]さい。|Im Vergleich zur Sonne ist die Erde klein.|Verb
批判|批判[ひはん]|Kritik|それをして 批判[ひはん]を 浴[あ]びた。|Man hat mich deswegen kritisiert.|Nomen (mit する)
評価|評価[ひょうか]|Bewertung, Wertschätzung|評価[ひょうか] 後[あと]、 結果[けっか]を 至急[しきゅう]にお 送[おく]りします。|Nach der Bewertung werden wir Ihnen die Ergebnisse so bald wie möglich zusenden.|Nomen (mit する)
対象|対象[たいしょう]|Zielgruppe, Gegenstand|彼[かれ]は 研究[けんきゅう]の 対象[たいしょう]を 広[ひろ]げた。|Er erweiterte seinen Forschungsgegenstand.|Nomen
サラダ|サラダ|Salat|天[てん]ぷらより、サラダの 方[ほう]が 体[からだ]にいいよ。|Salat ist gesünder als Tempura.|Nomen
故障|故障[こしょう]|Defekt, Panne|時計[とけい]がどこか 故障[こしょう]しているらしい。|Die Uhr scheint irgendwo defekt zu sein.|Nomen (mit する)
修理|修理[しゅうり]|Reparatur|私[わたし]は 息子[むすこ]にドアを 修理[しゅうり]させた。|Ich habe meinen Sohn die Tür reparieren lassen.|Nomen (mit する)
乗り換える|乗[の]り 換[か]える|umsteigen|次[つぎ]の 駅[えき]で 乗[の]り 換[か]えます。|Wir steigen am nächsten Bahnhof um.|Verb
乗り換え|乗[の]り 換[か]え|Umsteigen|次[つぎ]の 駅[えき]で 乗[の]り 換[か]えですよ。|An der nächsten Station müssen Sie umsteigen.|Nomen (mit する)
おじさん|おじさん|Onkel; Mann mittleren Alters|今週[こんしゅう]、 僕[ぼく]のおじさんが 家[いえ]に 泊[と]まってるんだ。|Diese Woche übernachtet mein Onkel bei uns.|Nomen
換える|換[か]える|wechseln, austauschen|彼[かれ]は 円[えん]をドルと 換[か]えた。|Er wechselte Yen in Dollar.|Verb
着替える|着替[きが]える|sich umziehen|外[そと]で 着替[きが]えるのは 恥[は]ずかしんだよ。|Sich draußen umziehen ist peinlich.|Verb
被る|被[かぶ]る|aufsetzen, tragen (auf dem Kopf)|トムは、 夏[なつ]はいっつも 帽子[ぼうし]を 被[かぶ]ってるよ。|Im Sommer trägt Tom immer einen Hut.|Verb
破る|破[やぶ]る|zerreißen; brechen (Versprechen, Regel)|彼[かれ]は 約束[やくそく]を 破[やぶ]るような 男[おとこ]ではない。|Er ist kein Mann, der seine Versprechen bricht.|Verb
ベルト|ベルト|Gürtel|トムは 革[かわ]のベルトが 買[か]いたいんだ。|Tom will sich einen Ledergürtel kaufen.|Nomen
破れる|破[やぶ]れる|reißen, zerreißen|彼[かれ]の 記録[きろく]は 誰[だれ]も 破[やぶ]れない。|Niemand kann seinen Rekord brechen.|Verb
壊す|壊[こわ]す|kaputt machen, zerstören|昨日[きのう]、 窓[まど]を 壊[こわ]したのは 誰[だれ]ですか。|Wer hat das Fenster gestern kaputt gemacht?|Verb
壊れる|壊[こわ]れる|kaputtgehen|彼[かれ]は 壊[こわ]れたカメラを 見[み]つけた。|Er hat eine kaputte Kamera gefunden.|Verb
救急車|救急車[きゅうきゅうしゃ]|Krankenwagen|救急[きゅうきゅう] 車[しゃ]が 必要[ひつよう]ですか。|Braucht ihr einen Krankenwagen?|Nomen
ラーメン|ラーメン|Ramen (Nudelsuppe)|ラーメン 食[た]べたい。|Ich hätte Lust auf Ramen.|Nomen
助ける|助[たす]ける|helfen, retten|彼女[かのじょ]は 私[わたし]を 助[たす]けてくれると 思[おも]う。|Ich denke, dass sie mir helfen wird.|Verb
立派|立派[りっぱ]|großartig, vortrefflich, stattlich|彼[かれ]は 立派[りっぱ]な 青年[せいねん]だ。|Er ist ein stattlicher junger Mann.|な-Adjektiv
警察|警察[けいさつ]|Polizei|彼女[かのじょ]は 警察[けいさつ]に 逮捕[たいほ]された。|Sie wurde von der Polizei festgenommen.|Nomen
管理|管理[かんり]|Verwaltung, Kontrolle|彼[かれ]は 時間[じかん]を 管理[かんり]するのがとても 上手[じょうず]だ。|Er kann seine Zeit sehr gut einteilen.|Nomen (mit する)
ライター|ライター|Feuerzeug|ライターをお 持[も]ちですか。|Haben Sie ein Feuerzeug?|Nomen
盗む|盗[ぬす]む|stehlen|パスポートを 盗[ぬす]まれました。|Man hat mir meinen Pass gestohlen.|Verb
殺す|殺[ころ]す|töten|殺[ころ]してはならない。|Du sollst nicht töten.|Verb
逮捕|逮捕[たいほ]|Verhaftung|彼[かれ]はお 金[かね]を 盗[ぬす]んで 逮捕[たいほ]された。|Er wurde festgenommen, weil er Geld gestohlen hatte.|Nomen (mit する)
逃げる|逃[に]げる|fliehen, weglaufen|彼[かれ]が 逃[に]げるのを 見[み]ました。|Ich sah ihn weglaufen.|Verb
ワイシャツ|ワイシャツ|Oberhemd (weißes Hemd)|あなたが 一番[いちばん] 好[す]きなワイシャツを 選[えら]んでください。|Suchen Sie sich das Hemd aus, das Ihnen am besten gefällt.|Nomen
戦争|戦争[せんそう]|Krieg|ほとんどの 人[ひと]は 戦争[せんそう]が 嫌[きら]いだ。|Die meisten Menschen hassen den Krieg.|Nomen (mit する)
競争|競争[きょうそう]|Wettbewerb, Konkurrenz|競争[きょうそう]は 激[はげ]しくなった。|Der Wettbewerb ist heftig geworden.|Nomen (mit する)
混む・込む|混[こ]む・ 込[こ]む|voll sein, überfüllt sein|朝[あさ]の 電車[でんしゃ]はとても 混[こ]みます。|Die Züge am Morgen sind sehr voll.|Verb
大統領|大統領[だいとうりょう]|Präsident(in) (eines Staates)|彼[かれ]は 大統領[だいとうりょう]に 選[えら]ばれた。|Er ist zum Präsidenten gewählt worden.|Nomen
シャワー|シャワー|Dusche|シャワーにするわ。|Ich gehe duschen.|Nomen
捨てる|捨[す]てる|wegwerfen; aufgeben|彼[かれ]は 望[のぞ]みを 捨[す]てた。|Er hat die Hoffnung aufgegeben.|Verb
拾う|拾[ひろ]う|aufheben, finden|彼[かれ]は 床[ゆか]からハンカチを 拾[ひろ]った。|Er hob ein Taschentuch vom Boden auf.|Verb
池|池[いけ]|Teich|今日[きょう]は 池[いけ]にたくさんの 水[みず]があります。|Heute ist viel Wasser im Teich.|Nomen
電池|電池[でんち]|Batterie|電池[でんち]が 切[き]れた。|Die Batterie ist leer.|Nomen
うどん|うどん|Udon (dicke Weizennudeln)|うどんでも 食[た]べませんか？|Wollen wir vielleicht Udon essen?|Nomen
深い|深[ふか]い|tief|私[わたし]は 彼[かれ]の 話[はなし]に 深[ふか]く 感動[かんどう]した。|Seine Worte haben mich tief bewegt.|Adjektiv
深さ|深[ふか]さ|Tiefe|湖[みずうみ]の 深[ふか]さはどのくらいですか。|Wie tief ist der See?|Nomen
浅い|浅[あさ]い|flach, seicht; oberflächlich|その 池[いけ]は 泳[およ]ぐには 浅[あさ]すぎる。|Der Teich ist zum Schwimmen zu flach.|Adjektiv
落とす|落[お]とす|fallen lassen, verlieren|私[わたし] 達[たち]は 命[いのち]を 落[お]とす 危険[きけん]がある。|Wir laufen Gefahr, das Leben zu verlieren.|Verb
ごみ|ごみ|Müll, Abfall|ごみを 外[そと]に 出[だ]して。|Bring den Müll nach draußen.|Nomen
泳ぐ|泳[およ]ぐ|schwimmen|とても 暑[あつ]かったので 私[わたし] 達[たち]は 泳[およ]ぎに 行[い]った。|Weil es so heiß war, gingen wir schwimmen.|Verb
水泳|水泳[すいえい]|Schwimmen|水泳[すいえい]は 好[す]きですか？|Schwimmst du gerne?|Nomen (mit する)
流れる|流[なが]れる|fließen, strömen; laufen (Musik)|谷[たに]の 間[あいだ]を 川[かわ]が 流[なが]れている。|Ein Fluss fließt durch das Tal.|Verb
流行る|流行[はや]る|in Mode sein, beliebt sein|最近[さいきん]はどんな 歌[うた]が 流行[はや]ってるの？|Was für Lieder sind in letzter Zeit angesagt?|Verb
スーパーマーケット|スーパーマーケット|Supermarkt|ここら 辺[へん]にスーパーマーケットってある？|Gibt es hier irgendwo einen Supermarkt?|Nomen
洗う|洗[あら]う|waschen|もう 手[て]は 洗[あら]った？|Hast du dir schon die Hände gewaschen?|Verb
洗面所|洗面所[せんめんじょ]|Waschraum, Bad|洗面所[せんめんじょ]はどこですか？|Wo ist der Waschraum?|Nomen
油|油[あぶら]|Öl|鍋[なべ]に 油[あぶら] 入[い]れた？|Hast du Öl in die Pfanne gegeben?|Nomen
沈む|沈[しず]む|sinken, untergehen|太陽[たいよう]は 西[にし]に 沈[しず]みます。|Die Sonne geht im Westen unter.|Verb
ハンカチ|ハンカチ|Taschentuch|彼[かれ]はハンカチで 手[て]をふいた。|Er wischte sich seine Hände mit einem Taschentuch ab.|Nomen
久しぶり|久[ひさ]しぶり|nach langer Zeit, lange nicht|大変[たいへん]お 久[ひさ]しぶりです。|Ewig nicht mehr gesehen!|な-Adjektiv
氷|氷[こおり]|Eis|氷[こおり]が 薄[うす]すぎてスケートができません。|Das Eis ist zu dünn fürs Schlittschuhlaufen.|Nomen
冷える|冷[ひ]える|kalt werden, abkühlen|料理[りょうり]が 冷[ひ]えてます。|Das Essen ist kalt.|Verb
冷やす|冷[ひ]やす|kühlen, abkühlen (etwas)|暑[あつ]い 時[とき]は、 首[くび]の 後[うし]ろを 冷[ひ]やすといいんだって。|Wenn es heiß ist, soll es gut sein, sich den Nacken zu kühlen.|Verb
ビデオテープ|ビデオテープ|Videokassette|私[わたし]はビデオテープを 買[か]います。|Ich kaufe ein Video.|Nomen
冷める|冷[さ]める|abkühlen, erkalten|愛[あい]が 冷[さ]めると、 欠点[けってん]が 多[おお]く 目[め]に 付[つ]いてくる。|Wenn die Liebe abkühlt, fallen viele Makel erst ins Auge.|Verb
凍る|凍[こお]る|gefrieren|お 肉[にく] 凍[こお]ってるよ。|Das Fleisch ist gefroren.|Verb
冷蔵庫|冷蔵庫[れいぞうこ]|Kühlschrank|冷蔵[れいぞう] 庫[こ]には 何[なに]が 入[はい]ってるの？|Was hast du in deinem Kühlschrank?|Nomen
涼しい|涼[すず]しい|kühl, erfrischend|今朝[けさ]は 昨日[きのう]の 朝[あさ]よりもずっと 涼[すず]しかった。|Heute morgen war es viel kühler als gestern morgen.|Adjektiv
ぶらぶら|ぶらぶら|umherschlendern, herumhängen|彼[かれ]らは 海岸[かいがん]をぶらぶらと 歩[ある]いた。|Sie schlenderten am Strand entlang.|Adverb
汚す|汚[よご]す|schmutzig machen|いくつかの 工場[こうじょう]は 環境[かんきょう]を 汚[よご]す。|Eine Vielzahl an Fabriken verschmutzt die Umwelt.|Verb
汚れ|汚[よご]れ|Schmutz, Fleck|石鹸[せっけん]は 汚[よご]れを 落[お]とす 特性[とくせい]がある。|Seife hat die spezielle Eigenschaft, Schmutz zu entfernen.|Nomen
汚れる|汚[よご]れる|schmutzig werden|私[わたし]の 服[ふく]は 油[あぶら]で 汚[よご]れていた。|Meine Kleidung war mit Öl verschmutzt.|Verb
景色|景色[けしき]|Landschaft, Aussicht|これらの 木[き]で 景色[けしき]が 見[み]えない。|Diese Bäume behindern die Sicht auf die Landschaft.|Nomen
アナウンサー|アナウンサー|Ansager(in), Nachrichtensprecher(in)|アナウンサーは 英語[えいご]を 話[はな]した。|Der Nachrichtensprecher sprach Englisch.|Nomen
影響|影響[えいきょう]|Einfluss, Auswirkung|テレビが 社会[しゃかい]に 与[あた]える 影響[えいきょう]は 大[おお]きい。|Der Einfluss des Fernsehens auf die Gesellschaft ist groß.|Nomen (mit する)
光る|光[ひか]る|leuchten, glänzen|湖[みずうみ]は 明[あか]るい 日[ひ]の 光[ひかり]を 受[う]けて 光[ひか]っていた。|Der See glänzte im hellen Sonnenlicht.|Verb
太る|太[ふと]る|dick werden, zunehmen|太[ふと]りすぎだったの？|Warst du zu dick?|Verb
太陽|太陽[たいよう]|Sonne|太陽[たいよう]が 出[で]てきた。|Die Sonne kam hervor.|Nomen
スプーン|スプーン|Löffel|トムはまだスプーンが 使[つか]えない。|Mit einem Löffel kann Tom noch nicht umgehen.|Nomen
星|星[ほし]|Stern|夏[なつ]には 夜[よる]たくさんの 星[ほし]が 見[み]えます。|Im Sommer sind nachts viele Sterne sichtbar.|Nomen
地球|地球[ちきゅう]|Erde (Planet)|私[わたし]は 地球[ちきゅう] 上[じょう]で 一番[いちばん] 幸[しあわ]せな 男[おとこ]だ。|Ich bin der glücklichste Mann auf Erden!|Nomen
野球|野球[やきゅう]|Baseball|野球[やきゅう]は 好[す]きじゃないの？|Magst du Baseball nicht?|Nomen
雲|雲[くも]|Wolke|空[そら]には 一片[いっぺん]の 雲[くも]もなかった。|Nicht eine einzige Wolke war am Himmel.|Nomen
ブラウス|ブラウス|Bluse|そのブラウスを 見[み]せて 下[くだ]さい。|Kann ich diese Bluse mal sehen, bitte?|Nomen
曇り|曇[くも]り|Bewölkung, bewölkt|曇[くも]り 時々[ときどき] 雨[あめ]でした。|Es war bewölkt und regnete hin und wieder.|Nomen
地震|地震[じしん]|Erdbeben|昨夜[ゆうべ]、 地震[じしん]を 感[かん]じましたか。|Haben Sie das Erdbeben von letzter Nacht mitbekommen?|Nomen
震える|震[ふる]える|zittern|私[わたし]は 手[て]が 震[ふる]えるのを 感[かん]じた。|Ich fühlte, wie meine Hände zitterten.|Verb
振る|振[ふ]る|schwenken, schütteln, winken|私[わたし]は 首[くび]を 横[よこ]に 振[ふ]った。|Ich schüttelte den Kopf.|Verb
リボン|リボン|Schleife, Band|女[おんな]の 子[こ]は 髪[かみ]に 黄色[きいろ]いリボンをつけていた。|Das Mädchen trug gelbe Schleifen im Haar.|Nomen
揺れる|揺[ゆ]れる|schwanken, wackeln|家[いえ]が 揺[ゆ]れるのを 感[かん]じた。|Ich fühlte, wie das Haus wackelte.|Verb
神社|神社[じんじゃ]|Shintō-Schrein|京都[きょうと]には 多[おお]くの 神社[じんじゃ]がある。|In Kyoto gibt es viele Schreine.|Nomen
秘密|秘密[ひみつ]|Geheimnis|それは 秘密[ひみつ]にしておいた 方[ほう]がいい。|Es ist besser, das geheimzuhalten.|な-Adjektiv
厳しい|厳[きび]しい|streng, hart|父[ちち]は 私[わたし]にはとても 厳[きび]しい。|Mein Vater ist sehr streng zu mir.|Adjektiv
いかが|いかが|wie (höflich)|ビールもう 一杯[いっぱい]いかがですか？|Willst du noch ein Glas Bier?|Adverb
年寄り|年寄[としよ]り|alter Mensch|お 年寄[としよ]りは 大切[たいせつ]にしなさい。|Behandle alte Menschen mit Respekt!|Nomen
歴史|歴史[れきし]|Geschichte (Historie)|私[わたし]は 歴史[れきし]が 好[す]きだ。|Ich mag Geschichte.|Nomen
世紀|世紀[せいき]|Jahrhundert|世紀[せいき]の 変[か]わり 目[め]に 子供[こども]たちはまだ 工場[こうじょう]で 働[はたら]いていた。|Um die Jahrhundertwende arbeiteten noch immer Kinder in Fabriken.|Nomen
建設|建設[けんせつ]|Bau, Errichtung|新[あたら]しい 校舎[こうしゃ]が 建設[けんせつ] 中[ちゅう]です。|Ein neues Schulgebäude ist in Bau.|Nomen (mit する)
ステレオ|ステレオ|Stereoanlage|自分[じぶん]のステレオを 持[も]っています。|Ich habe eine eigene Stereoanlage.|Nomen
建物|建物[たてもの]|Gebäude|高[たか]い 建物[たてもの]がそこに 立[た]っている。|Dort steht ein großes Gebäude.|Nomen
建つ|建[た]つ|gebaut werden, stehen (Gebäude)|口[くち]では 大阪[おおさか]の 城[しろ]も 建[た]つ。|Das ist leichter gesagt als getan.|Verb
構成|構成[こうせい]|Aufbau, Zusammensetzung|自分[じぶん]のウェブサイトの 構成[こうせい]を 変[か]えた。|Ich habe das Layout meiner Website geändert.|Nomen (mit する)
構造|構造[こうぞう]|Struktur, Bauweise|脳[のう]の 構造[こうぞう]は 複雑[ふくざつ]だ。|Die Struktur des Gehirns ist komplex.|Nomen
フォーク|フォーク|Gabel|フォークがありません。|Es fehlt eine Gabel.|Nomen
橋|橋[はし]|Brücke|橋[はし]は 修理中[しゅうりちゅう]です。|Die Brücke wird gerade repariert.|Nomen
柱|柱[はしら]|Säule, Pfosten|柱[はしら]にナイフが 突[つ]き 刺[さ]さっていた。|In der Säule steckte ein Messer.|Nomen
位置|位置[いち]|Lage, Position|地図[ちず]で 町[まち]の 位置[いち]を 見[み]つけた。|Ich habe die Lage der Stadt auf der Karte ausfindig gemacht.|Nomen (mit する)
離婚|離婚[りこん]|Scheidung|どちらかといえば 彼[かれ]とは 離婚[りこん]したい。|Ich möchte mich lieber von ihm scheiden lassen.|Nomen (mit する)
おば|おば|Tante|叔母[おば]さんには 三[さん] 人[にん]の 子供[こども]がいる。|Meine Tante hat drei Kinder.|Nomen
停車|停車[ていしゃ]|Halt (eines Fahrzeugs)|次[つぎ]の 停車[ていしゃ] 駅[えき]はどこですか。|Was ist der nächste Halt?|Nomen (mit する)
バス停|バス 停[てい]|Bushaltestelle|バス 停[てい]はどこにありますか。|Wo steht die Bushaltestelle?|Nomen
周辺|周辺[しゅうへん]|Umgebung, Umkreis|北極圏[ほっきょくけん]とは 北極[ほっきょく] 周辺[しゅうへん]の 地域[ちいき]の 事[こと]である。|Die Arktis ist das Gebiet im Umkreis um den Nordpol.|Nomen
隣|隣[となり]|nebenan, Nachbar|先月[せんげつ] 隣[となり]の 町[まち]にデパートができました。|Letzten Monat wurde in der Nachbarstadt ein Kaufhaus fertiggestellt.|Nomen
きらきら|きらきら|glitzernd, funkelnd|星[ほし]のようにキラキラした 目[め]だね。|Deine Augen funkeln wie die Sterne.|Adverb
黄色|黄色[きいろ]|Gelb|私[わたし]は 黄色[きいろ]が 好[す]きです。|Mir gefällt die Farbe Gelb.|Nomen
横|横[よこ]|Seite, quer; Breite|右[みぎ]を 下[した]にして 横[よこ]になってください。|Legen Sie sich auf die rechte Seite!|Nomen
横書き|横書[よこが]き|waagerechte Schreibweise|この 手紙[てがみ]は 横書[よこが]きで 書[か]きました。|Diesen Brief habe ich in waagerechter Schreibweise geschrieben.|Nomen
判断|判断[はんだん]|Urteil, Beurteilung|彼[かれ]は 判断[はんだん]が 正確[せいかく]だ。|Er ist in seiner Beurteilung präzise.|Nomen (mit する)
どうぞ|どうぞ|bitte (anbietend)|ケーキをどうぞ。|Bitte nehmen Sie sich doch Kuchen.|Adverb
断る|断[ことわ]る|ablehnen, absagen|断[ことわ]ることができませんでした。|Ich konnte nicht ablehnen.|Verb
横断歩道|横断歩道[おうだんほどう]|Zebrastreifen, Fußgängerüberweg|あなたは 横断[おうだん] 歩道[ほどう]ではもっと 注意[ちゅうい]すべきだ。|Du solltest am Zebrastreifen vorsichtiger sein.|Nomen
大幅|大幅[おおはば]|erheblich, drastisch|給料[きゅうりょう]が 大幅[おおはば]に 上[あ]がったんだ。|Mein Gehalt ist deutlich gestiegen.|Adverb
訪れる|訪[おとず]れる|besuchen, aufsuchen|いつかエジプトを 訪[おとず]れたいと 思[おも]っています。|Ich möchte irgendwann einmal Ägypten besuchen.|Verb
ネックレス|ネックレス|Halskette|あなたが 失[な]くしていたネックレスの 一部[いちぶ]を 見[み]つけました。|Ich habe das fehlende Glied deiner Halskette gefunden.|Nomen
訪ねる|訪[たず]ねる|besuchen, aufsuchen|彼[かれ]らは 時々[ときどき] 私[わたし]を 訪[たず]ねて 来[き]た。|Sie besuchten mich gelegentlich.|Verb
冷房|冷房[れいぼう]|Klimaanlage, Kühlung|冷房[れいぼう]のある 部屋[へや]が 欲[ほ]しいです。|Ich hätte gern ein Zimmer mit Klimaanlage.|Nomen (mit する)
暖房|暖房[だんぼう]|Heizung|暖房[だんぼう]が 故障[こしょう]しています。|Die Heizung funktioniert nicht.|Nomen (mit する)
文房具|文房具[ぶんぼうぐ]|Schreibwaren|学校[がっこう]で 使[つか]うノートや 文房[ぶんぼう] 具[ぐ]を 新[あたら]しく 買[か]った。|Ich habe neue Hefte und Schreibwaren für die Schule gekauft.|Nomen
パジャマ|パジャマ|Schlafanzug|パジャマのまま 朝食[ちょうしょく]を 食[た]べた。|Ich frühstückte im Schlafanzug.|Nomen
諸国|諸国[しょこく]|verschiedene Länder|貿易[ぼうえき]は 諸国[しょこく]の 発展[はってん]を 促進[そくしん]する。|Handel fördert die Entwicklung aller Länder.|Nomen
緑色|緑色[みどりいろ]|Grün (Farbe)|緑色[みどりいろ]のはありますか。|Gibt es ein Grünes?|Nomen
貿易|貿易[ぼうえき]|Außenhandel|私[わたし]は 将来[しょうらい]、 外国[がいこく] 貿易[ぼうえき]をやりたい。|Ich möchte in der Zukunft im Außenhandel tätig sein.|Nomen (mit する)
輸入|輸入[ゆにゅう]|Import, Einfuhr|これはドイツからの 輸入[ゆにゅう] 車[しゃ]です。|Dies ist ein aus Deutschland importiertes Auto.|Nomen (mit する)
ボールペン|ボールペン|Kugelschreiber|ボールペンで 書[か]いてください。|Schreiben Sie mit Kugelschreiber.|Nomen
輸出|輸出[ゆしゅつ]|Export, Ausfuhr|武器[ぶき]の 輸出[ゆしゅつ]が 禁止[きんし]された。|Die Ausfuhr von Waffen war verboten.|Nomen (mit する)
指輪|指輪[ゆびわ]|Ring (Schmuck)|指輪[ゆびわ]はどこにも 見[み]つからなかった。|Der Ring war nirgendwo zu finden.|Nomen
往復|往復[おうふく]|Hin- und Rückweg|往復[おうふく] 切符[きっぷ]を 買[か]いましたか。|Hast du eine Rückfahrkarte gekauft?|Nomen
復習|復習[ふくしゅう]|Wiederholung (des Lernstoffs)|試験[しけん]に 備[そな]えて 歴史[れきし]を 復習[ふくしゅう]しなさい。|Schau dir nochmal Geschichte an, um dich auf den Test vorzubereiten.|Nomen (mit する)
すいか|すいか|Wassermelone|夏[なつ]はスイカに 限[かぎ]る！|Im Sommer gibt es doch nichts Schöneres als eine Wassermelone!|Nomen
繰り返す|繰[く]り 返[かえ]す|wiederholen|彼女[かのじょ]は 同[おな]じ 間違[まちが]いを 繰[く]り 返[かえ]している。|Sie macht immer wieder dieselben Fehler.|Verb
留学|留学[りゅうがく]|Auslandsstudium|私[わたし]は 来年[らいねん] 留学[りゅうがく]するつもりです。|Ich habe vor, nächstes Jahr zum Studieren ins Ausland zu gehen.|Nomen (mit する)
停留所|停留所[ていりゅうじょ]|Haltestelle|バスの 停留所[ていりゅうじょ]はどこですか。|Wo steht die Bushaltestelle?|Nomen
書留|書留[かきとめ]|Einschreiben|これを 書留[かきとめ]でお 願[ねが]いします。|Verschicken Sie das bitte per Einschreiben.|Nomen
そちら|そちら|dort, dorthin (bei Ihnen)|トムがそちらに 行[い]きます。|Tom wird dort sein.|Nomen
守る|守[まも]る|schützen; einhalten|彼[かれ]は 約束[やくそく]を 守[まも]る 人[ひと]だ。|Er hält sein Wort.|Verb
留守|留守[るす]|nicht zu Hause, abwesend|父[ちち]は 留守[るす]にしています。|Mein Vater ist nicht zu Hause.|Nomen
住宅|住宅[じゅうたく]|Wohnhaus, Wohnung|政府[せいふ]は 住宅[じゅうたく] 問題[もんだい]を 解決[かいけつ]するために 何[なん]の 手段[しゅだん]も 取[と]らなかった。|Die Regierung hat keine Anstalten gemacht, die Wohnungsnot zu lösen.|Nomen
自宅|自宅[じたく]|das eigene Zuhause|彼[かれ]は 自宅[じたく]に 手紙[てがみ]を 出[だ]した。|Er hat einen Brief nach Hause abgesandt.|Nomen
そば|そば|Soba (Buchweizennudeln)|私[わたし] 達[たち]は 海[うみ]のすぐそばに 住[す]んでいた。|Wir wohnten direkt am Meer.|Nomen
お宅|お 宅[たく]|Ihr Zuhause (höflich); Sie|お 宅[たく]まで 車[くるま]でお 送[おく]りしましょう。|Ich werde dich mit dem Auto nach Hause bringen.|Nomen
早起き|早起[はやお]き|frühes Aufstehen|私[わたし]の 父[ちち]は 早起[はやお]きだ。|Mein Vater ist Frühaufsteher.|Nomen (mit する)
昼寝|昼寝[ひるね]|Mittagsschlaf|よくお 昼寝[ひるね]するの？|Machst du oft Mittagsschlaf?|Nomen (mit する)
静か|静[しず]か|ruhig, still|ここは 夜[よる]は 静[しず]かです。|Hier ist es nachts ruhig.|な-Adjektiv
どっち|どっち|welche(r, s) (von zweien, umgangssprachlich)|赤[あか]いシャツと 青[あお]いシャツどっちが 好[す]き？|Welches Hemd ist dir lieber, das rote oder das blaue?|Nomen
暇|暇[ひま]|freie Zeit; frei haben|ところで 今日[きょう]の 午後[ごご]はお 暇[ひま]ですか。|Übrigens, haben Sie heute Nachmittag frei?|Nomen
趣味|趣味[しゅみ]|Hobby|私[わたし]の 趣味[しゅみ]はゴルフだ。|Mein Hobby ist Golfen.|Nomen
両方|両方[りょうほう]|beide|両方[りょうほう]とも 可能[かのう]です。|Beides ist möglich.|Nomen
両替|両替[りょうがえ]|Geldwechsel|両替[りょうがえ]は 承[うけたまわ]っておりません。|Wir bieten keinen Währungsumtausch an.|Nomen (mit する)
バスケットボール|バスケットボール|Basketball|彼[かれ]はバスケットボールがうまい。|Er spielt gut Basketball.|Nomen
両親|両親[りょうしん]|Eltern|それをご 両親[りょうしん]に 見[み]せましたか。|Hast du es deinen Eltern gezeigt?|Nomen
片道|片道[かたみち]|einfache Fahrt|往復[おうふく] 旅行[りょこう]？ 片道[かたみち]だけです。|Hin- und Rückfahrt? Nur Hinfahrt.|Nomen
内側|内側[うちがわ]|Innenseite|戸[と]は 内側[うちがわ]から 鍵[かぎ]がかけられていた。|Die Tür war von innen verschlossen.|Nomen
向こう側|向[む]こう 側[がわ]|die andere Seite, gegenüber|通[とお]りの 向[む]こう 側[がわ]に 教会[きょうかい]がある。|Auf der anderen Straßenseite steht eine Kirche.|Nomen
サンドイッチ|サンドイッチ|Sandwich|私[わたし]たちはサンドイッチやケーキなどを 食[た]べた。|Wir aßen Sandwiches, Kuchen und so weiter.|Nomen
外側|外側[そとがわ]|Außenseite|壁[かべ]は 内側[うちがわ]が 白[しろ]くて 外側[そとがわ]は 緑[みどり]である。|Die Wand ist nach innen hin weiß und nach außen hin grün.|Nomen
左側|左側[ひだりがわ]|linke Seite|お 出口[でぐち]は 左側[ひだりがわ]です。|Der Ausgang ist links.|Nomen
右側|右側[みぎがわ]|rechte Seite|心臓[しんぞう]が 右側[みぎがわ]にあれば 異常[いじょう]だ。|Es ist abnorm, das Herz auf der rechten Seite zu haben.|Nomen
裏|裏[うら]|Rückseite, hinten|封筒[ふうとう]の 裏[うら]に 彼[かれ]の 住所[じゅうしょ]を 書[か]いてしまった。|Ich habe seine Adresse auf die Rückseite des Briefumschlags geschrieben.|Nomen
にこにこ|にこにこ|lächelnd, strahlend|写真[しゃしん]に 写[うつ]っている 人[ひと]は 皆[みな]にこにこしている。|Alle auf der Fotografie lächeln.|Adverb
裏返す|裏返[うらがえ]す|umdrehen, wenden|ベストを 裏返[うらがえ]さなくちゃ。 表裏[ひょうり] 逆[ぎゃく]ですよ。|Du hast deine Weste auf links, dreh sie mal um!|Verb
週刊誌|週刊誌[しゅうかんし]|Wochenzeitschrift|彼[かれ]は 座[すわ]って 週刊[しゅうかん] 誌[し]を 読[よ]んでいた。|Er saß da und las eine Wochenzeitschrift.|Nomen
朝刊|朝刊[ちょうかん]|Morgenausgabe (Zeitung)|朝刊[ちょうかん]はどこにある？|Wo ist die Morgenzeitung?|Nomen
夕刊|夕刊[ゆうかん]|Abendausgabe (Zeitung)|選挙[せんきょ]の 結果[けっか]は 夕刊[ゆうかん]に 載[の]るでしょう。|Die Wahlergebnisse werden in der Abendausgabe stehen.|Nomen
ウール|ウール|Wolle|彼[かれ]はウールのセーターを 着[き]ている。|Er trägt einen Pulli aus Wolle.|Nomen
詳しい|詳[くわ]しい|ausführlich, genau; sich auskennen|もう 少[すこ]し 詳[くわ]しく 説明[せつめい]してもらえませんか？|Könntest du das genauer erläutern?|Adjektiv
細かい|細[こま]かい|fein, klein; detailliert|細[こま]かいお 金[かね]がないんだよ。|Ich habe kein Kleingeld.|Adjektiv
細か|細[こま]か|fein, klein, detailliert|彼女[かのじょ]は 細[こま]かな 雪[ゆき]が 湖面[こめん]に 降[ふ]るのを 眺[なが]めていた。|Sie sah feinen Schnee auf die Oberfläche des Sees fallen.|な-Adjektiv
積もる|積[つ]もる|sich anhäufen, liegen bleiben (Schnee)|塵[ちり]も 積[つ]もれば 山[やま]となる。|Auch Staub wird, wenn er sich sammelt, zu einem Berg.|Verb
コーラ|コーラ|Cola|コーヒーよりコーラの 方[ほう]が 好[す]きだ。|Ich trinke lieber Cola als Kaffee.|Nomen
訳|訳[やく]|Übersetzung|フランス 語[ご] 訳[やく]はありますか？|Gibt es eine französische Übersetzung?|Nomen
訳す|訳[やく]す|übersetzen|トムの 書[か]く 文章[ぶんしょう]はとても 訳[やく]しにくい。|Die Sätze, die Tom schreibt, sind überaus schwer zu übersetzen.|Verb
検討|検討[けんとう]|Prüfung, Erwägung|トムとメアリーは 離婚[りこん]を 検討[けんとう]している。|Tom und Marie denken über eine Scheidung nach.|Nomen (mit する)
塗る|塗[ぬ]る|streichen, auftragen|トムはパンにバターを 塗[ぬ]っている。|Tom streicht sich Butter aufs Brot.|Verb
トイレットペーパー|トイレットペーパー|Toilettenpapier|トイレットペーパーがありません。|Es ist kein Toilettenpapier da.|Nomen
付く|付[つ]く|haften, anhaften; dabei sein|顔[かお]にインクが 付[つ]いてるよ。|Du hast Tinte im Gesicht.|Verb
付ける|付[つ]ける|anbringen, befestigen, dazugeben|気[き]を 付[つ]けろ、 道路[どうろ]に 穴[あな]があるぞ。|Pass auf, da ist ein Loch in der Straße.|Verb
受け付ける|受[う]け 付[つ]ける|annehmen, entgegennehmen|電話[でんわ]でも 受[う]け 付[つ]けていますよ。|Wir nehmen auch telefonisch Bestellungen an.|Verb
片付ける|片付[かたづ]ける|aufräumen, erledigen|机[つくえ]の 上[うえ]を 片付[かたづ]けよう。|Lass uns den Schreibtisch aufräumen.|Verb
どなた|どなた|wer (höflich)|失礼[しつれい]ですがどなたでしょうか。|Entschuldigen Sie, aber wer sind Sie?|Nomen
受付|受付[うけつけ]|Empfang, Anmeldung|一時間[いちじかん]ぐらいの 間[あいだ]、 私[わたし]の 代[か]わりに 受付[うけつけ]をやってください。|Bitte übernimm etwa eine Stunde lang für mich am Empfang.|Nomen
近付く|近付[ちかづ]く|sich nähern|彼[かれ]らは 旅行者[りょこうしゃ]に 近付[ちかづ]いていって 金[かね]をくれと 頼[たの]んだ。|Sie näherten sich den Reisenden und baten sie um Geld.|Verb
片付く|片付[かたづ]く|aufgeräumt werden, erledigt werden|仕事[しごと]はほぼ 片付[かたづ]いた。|Die Arbeit ist fast erledigt.|Verb
気を付ける|気[き]を 付[つ]ける|aufpassen, achtgeben|気[き]を 付[つ]けないと 凍[こお]った 階段[かいだん]で 滑[すべ]って 転[ころ]ぶよ。|Wenn du nicht aufpasst, rutschst du auf der vereisten Treppe aus und fällst.|Verb
ハイキング|ハイキング|Wandern|ぼくたちは 明日[あした]ハイキングに 行[い]く 予定[よてい]なんだ。|Wir haben vor, morgen wandern zu gehen.|Nomen (mit する)
貼る|貼[は]る|kleben, aufkleben|手紙[てがみ]に 切手[きって]を 貼[は]るのを 忘[わす]れるな。|Vergiss nicht, eine Briefmarke auf den Brief zu kleben.|Verb
記念日|記念日[きねんび]|Gedenktag, Jahrestag|私[わたし]たちは 昨日[きのう]、 十[じゅう] 年[ねん] 目[め]の 結婚記念日[けっこんきねんび]を 祝[いわ]った。|Wir feierten gestern den zehnten Jahrestag unserer Hochzeit.|Nomen
残念|残念[ざんねん]|schade, bedauerlich|天気[てんき]が 悪[わる]くて 残念[ざんねん]だ。|Schade, dass das Wetter so schlecht ist!|な-Adjektiv
例えば|例[たと]えば|zum Beispiel|例[たと]えば、これはペンです。|Zum Beispiel ist das hier ein Stift.|Adverb
ハム|ハム|Schinken|朝食[ちょうしょく]にハムはいかがですか？|Wie wäre es mit Schinken zum Frühstück?|Nomen
例文|例文[れいぶん]|Beispielsatz|例文[れいぶん]を 削除[さくじょ]するにはどうしたら 良[よ]いですか？|Wie lösche ich einen Beispielsatz?|Nomen
例|例[れい]|Beispiel|別[べつ]の 例[れい]をあげてください。|Gib mir ein anderes Beispiel.|Nomen
余る|余[あま]る|übrig bleiben|日本[にほん]では 米[こめ]が、ヨーロッパではワインが 余[あま]っている。|In Japan gibt es einen Überschuss an Reis, in Europa an Wein.|Verb
除く|除[のぞ]く|ausschließen, entfernen|天気[てんき]を 除[のぞ]けば、 楽[たの]しいピクニックでした。|Abgesehen vom Wetter war es ein schönes Picknick.|Verb
ボーイフレンド|ボーイフレンド|Freund (Partner)|彼女[かのじょ]はボーイフレンドと 別[わか]れるつもりだ。|Sie hat vor, sich von ihrem Freund zu trennen.|Nomen
削る|削[けず]る|abschaben, spitzen; kürzen|君[きみ]の 鉛筆[えんぴつ]は 削[けず]る 必要[ひつよう]がある。|Deine Bleistifte müssen angespitzt werden.|Verb
遅刻|遅刻[ちこく]|Verspätung, Zuspätkommen|誰一人[だれひとり] 遅刻[ちこく]しなかった。|Keiner verspätete sich.|Nomen (mit する)
緩い|緩[ゆる]い|locker, weit|このボタンは 緩[ゆる]い。|Dieser Knopf ist locker.|Adjektiv
苦しい|苦[くる]しい|qualvoll, schwer, beklemmend|良薬[りょうやく] 口[くち]に 苦[くる]し。|Eine gute Arznei ist bitter.|Adjektiv
アイロン|アイロン|Bügeleisen|アイロンがけは 好[す]きじゃないんだ。|Ich bügele nicht gern.|Nomen
苦い|苦[にが]い|bitter|この 薬[くすり]は 苦[にが]い。|Dieses Medikament schmeckt bitter.|Adjektiv
苦手|苦手[にがて]|schwach in etwas; nicht liegen|私[わたし]は 水泳[すいえい]が 苦手[にがて]です。|Ich kann nicht gut schwimmen.|な-Adjektiv
困る|困[こま]る|in Schwierigkeiten sein, ratlos sein|彼[かれ]はお 金[かね]に 非常[ひじょう]に 困[こま]っていた。|Er war in finanziellen Schwierigkeiten.|Verb
貧乏|貧乏[びんぼう]|Armut, arm|彼女[かのじょ]は 貧乏[びんぼう]ではない。|Sie ist nicht arm.|な-Adjektiv
カレーライス|カレーライス|Curryreis|私[わたし]はカレーライスが 好[す]きだ。|Ich mag Curryreis.|Nomen
不幸|不幸[ふこう]|Unglück; Trauerfall|彼女[かのじょ]は 不幸[ふこう]らしい。|Sie sieht unglücklich aus.|な-Adjektiv
幸せ|幸[しあわ]せ|Glück, glücklich|彼[かれ]はいつも 幸[しあわ]せです。|Er ist immer glücklich.|な-Adjektiv
塩|塩[しお]|Salz|塩[しお]は 残[のこ]っていない。|Es ist kein Salz mehr da.|Nomen
塩辛い|塩辛[しおから]い|salzig|この 梅干[うめぼ]し、 塩辛[しおから]いね。|Diese Umeboshi sind aber salzig.|Adjektiv
キャッシュカード|キャッシュカード|Geldkarte, Bankkarte|キャッシュカードでお 金[かね]を 下[お]ろしました。|Ich habe mit der Bankkarte Geld abgehoben.|Nomen
砂糖|砂糖[さとう]|Zucker|彼[かれ]はコーヒーに 少[すこ]し 砂糖[さとう]を 加[くわ]えた。|Er gab etwas Zucker in den Kaffee.|Nomen
規模|規模[きぼ]|Größe, Umfang, Maßstab|どれくらいの 規模[きぼ]の 会社[かいしゃ]なの？|Wie groß ist die Firma?|Nomen
農業|農業[のうぎょう]|Landwirtschaft|彼[かれ]には 農業[のうぎょう]の 経験[けいけん]がありますか。|Hat er landwirtschaftliche Erfahrung?|Nomen
濃い|濃[こ]い|kräftig, dick, dunkel (Farbe, Geschmack)|彼女[かのじょ]は 化粧[けしょう]が 濃[こ]い。|Sie ist stark geschminkt.|Adjektiv
イヤリング|イヤリング|Ohrringe|イヤリングを 片方[かたほう] 失[な]くしたんです。|Ich habe einen Ohrring verloren.|Nomen
薄い|薄[うす]い|dünn; schwach, hell (Farbe, Geschmack)|私[わたし]の 新[あたら]しい 電話[でんわ]は 前[まえ]のより 薄[うす]い。|Mein neues Handy ist dünner als mein altes.|Adjektiv
厚い|厚[あつ]い|dick (flache Dinge)|彼女[かのじょ]の 厚[あつ] 化粧[けしょう]が 嫌[いや]らしい。|Ihr dick aufgetragenes Makeup ist widerlich.|Adjektiv
厚さ|厚[あつ]さ|Dicke|氷[こおり]の 厚[あつ]さは、 歩[ある]くのに 十分[じゅうぶん]な 厚[あつ]さです。|Das Eis ist so dick, dass man darauf gehen kann.|Nomen
迫る|迫[せま]る|drängen; näher rücken|時間[じかん]が 迫[せま]っている。|Die Zeit drängt.|Verb
ガールフレンド|ガールフレンド|Freundin (Partnerin)|私[わたし]にはガールフレンドが 一人[ひとり]もいない。|Ich habe keine einzige Freundin.|Nomen
伸びる|伸[の]びる|wachsen, länger werden, sich dehnen|身長[しんちょう]ってどうやったら 伸[の]びるんだろう。|Wie kann man sich nur größer machen?|Verb
引っ越す|引[ひ]っ 越[こ]す|umziehen|トムは 引[ひ]っ 越[こ]したいんだよ。|Tom will umziehen.|Verb
越える|越[こ]える|überqueren, überschreiten|トムは 国境[こっきょう]を 越[こ]えてフランスに 入[はい]った。|Tom überschritt die Grenze nach Frankreich.|Verb
引っ越し|引[ひ]っ 越[こ]し|Umzug|引[ひ]っ 越[こ]しは 週末[しゅうまつ]に 行[おこな]われる。|Der Umzug wird am Wochenende stattfinden.|Nomen (mit する)
カセットテープ|カセットテープ|Kassette|カセットテープを 買[か]うつもりです。|Ich habe vor, Kassetten zu kaufen.|Nomen
追い越す|追[お]い 越[こ]す|überholen|完全[かんぜん]に 追[お]い 越[こ]されたな。|Ich wurde komplett überholt.|Verb
上昇|上昇[じょうしょう]|Anstieg|物価[ぶっか]が 上昇[じょうしょう]している。|Die Preise steigen.|Nomen (mit する)
改札口|改札口[かいさつぐち]|Fahrkartensperre|改札口[かいさつぐち]で 切符[きっぷ]をお 見[み]せください。|Zeigen Sie bitte Ihre Fahrkarte an der Sperre vor.|Nomen
失礼|失礼[しつれい]|Unhöflichkeit; Entschuldigung; sich verabschieden|お 話[はな] 中[ちゅう] 失礼[しつれい]します。|Entschuldigen Sie, dass ich Sie unterbreche.|Nomen (mit する)
かゆい|かゆい|juckend|目[め]がかゆいです。|Mir jucken die Augen.|Adjektiv
お礼|お 礼[れい]|Dank, Dankeschön|直接[ちょくせつ]お 礼[れい]が 言[い]いたかったです。|Ich wollte Ihnen persönlich danken.|Nomen (mit する)
謝る|謝[あやま]る|sich entschuldigen|彼女[かのじょ]に 謝[あやま]ったほうがいいですよ。|Du solltest dich besser bei ihr entschuldigen.|Verb
注射|注射[ちゅうしゃ]|Spritze, Injektion|私[わたし]は 注射[ちゅうしゃ] 器[き]を 見[み]るまでは 平気[へいき]だった。|Ich war ruhig, bis ich die Spritze sah.|Nomen (mit する)
程度|程度[ていど]|Grad, Ausmaß|私[わたし]の 兄[あに]は 車[くるま]がかえる 程度[ていど]のお 金[かね]を 持[も]っています。|Mein Bruder ist reich genug, um sich ein Auto zu kaufen.|Nomen
ぐらぐら|ぐらぐら|wackelnd, schwankend|テーブルがぐらぐらするよ。|Der Tisch wackelt.|Adverb
誘う|誘[さそ]う|einladen, auffordern|彼[かれ]らは 僕[ぼく]をトランプに 誘[さそ]った。|Sie haben mich zum Kartenspielen eingeladen.|Verb
導入|導入[どうにゅう]|Einführung|会社[かいしゃ]は 時差[じさ] 通勤[つうきん]を 導入[どうにゅう]しようとしています。|Die Firma will gestaffelte Arbeitszeiten einführen.|Nomen (mit する)
努力|努力[どりょく]|Anstrengung, Bemühung|彼[かれ]はタバコをやめようと 努力[どりょく]している。|Er bemüht sich, mit dem Rauchen aufzuhören.|Nomen (mit する)
怒る|怒[おこ]る|wütend werden; schimpfen|私[わたし]は 彼女[かのじょ]を 怒[おこ]らせてしまった。|Ich habe sie wütend gemacht.|Verb
ジャム|ジャム|Marmelade|イチゴは 加工[かこう]されてジャムになります。|Erdbeeren werden zu Marmelade verarbeitet.|Nomen
独身|独身[どくしん]|ledig, alleinstehend|彼[かれ]は 生涯[しょうがい] 独身[どくしん]のままだった。|Er blieb sein ganzes Leben lang alleinstehend.|Nomen
占める|占[し]める|einnehmen, ausmachen|本[ほん]が 彼[かれ]の 部屋[へや]の 大部分[だいぶぶん]を 占[し]めている。|Bücher nehmen einen Großteil des Platzes in seinem Zimmer ein.|Verb
処理|処理[しょり]|Bearbeitung, Erledigung|私[わたし]の 注文[ちゅうもん]が 処理[しょり]されているかどうか 調[しら]べてもらえますか。|Könnten Sie bitte überprüfen, ob meine Bestellung bearbeitet wird?|Nomen (mit する)
紹介|紹介[しょうかい]|Vorstellung, Empfehlung|いい 女[おんな]の 子[こ] 紹介[しょうかい]してやろう。|Ich werde dir ein nettes Mädchen vorstellen.|Nomen (mit する)
スリッパ|スリッパ|Hausschuhe|猫[ねこ]が 僕[ぼく]のスリッパの 上[うえ]で 寝[ね]てるんだ。|Die Katze schläft auf meinen Hausschuhen.|Nomen
招く|招[まね]く|einladen, herbeiwinken|私[わたし]たちは 彼[かれ]を 家[いえ]に 招[まね]いた。|Wir haben ihn zu uns nach Hause eingeladen.|Verb
招待|招待[しょうたい]|Einladung|だれを 招待[しょうたい]したらいいのかしら。|Ich frage mich, wen ich einladen soll.|Nomen (mit する)
夫婦|夫婦[ふうふ]|Ehepaar|私[わたし] 達[たち]は 夫婦[ふうふ]です。|Wir sind ein Ehepaar.|Nomen
奥|奥[おく]|das Innere, hinten|奥[おく] 様[さま]はお 料理[りょうり]がお 上手[じょうず]ですか。|Ist deine Frau eine gute Köchin?|Nomen
トランプ|トランプ|Spielkarten|テレビを 見[み]ないでトランプをしようよ。|Lasst uns Karten spielen, anstatt Fernsehen zu schauen.|Nomen (mit する)
奥さん|奥[おく]さん|(Ihre) Ehefrau, verheiratete Frau|彼[かれ]の 奥[おく]さんは 外国人[がいこくじん]らしい。|Seine Frau scheint Ausländerin zu sein.|Nomen
皆さん|皆[みな]さん|Sie alle, alle Anwesenden|皆[みな]さんお 静[しず]かに。|Bitte seid alle ruhig.|Nomen
皆様|皆様[みなさま]|Sie alle (sehr höflich)|ご 家族[かぞく]の 皆[みな] 様[さま]おかわりありませんか。|Geht es allen in Ihrer Familie gut?|Nomen
誰か|誰[だれ]か|jemand|誰[だれ]かがピアノを 弾[ひ]いている。|Jemand spielt Klavier.|Nomen
よろしい|よろしい|gut, in Ordnung (höflich)|来週[らいしゅう] 休[やす]みを 取[と]ってもよろしいでしょうか。|Wäre es in Ordnung, wenn ich mir nächste Woche Urlaub nähme?|Adjektiv
国籍|国籍[こくせき]|Staatsangehörigkeit|私[わたし]はフランス 国籍[こくせき]ですが、 出身[しゅっしん]はベトナムです。|Ich bin französischer Staatsbürger, komme aber aus Vietnam.|Nomen
愛|愛[あい]|Liebe|子供[こども]には 愛[あい]が 必要[ひつよう]だ。|Kinder brauchen Liebe.|Nomen (mit する)
可愛い|可愛[かわい]い|süß, niedlich|可愛[かわい]くなりたい。|Ich will niedlich werden.|Adjektiv
恋人|恋人[こいびと]|Freund(in), Geliebte(r)|彼女[かのじょ]は 私[わたし]の 恋人[こいびと]だ。|Sie ist meine Freundin.|Nomen
ラッシュアワー|ラッシュアワー|Hauptverkehrszeit|もうすぐラッシュアワーの 時間帯[じかんたい]に 入[はい]る。|Gleich beginnt die Hauptverkehrszeit.|Nomen
誕生日|誕生日[たんじょうび]|Geburtstag|誕生日[たんじょうび]って 大事[だいじ]だと 思[おも]う？|Findest du, dass Geburtstage wichtig sind?|Nomen
祝日|祝日[しゅくじつ]|Feiertag|祝日[しゅくじつ]も 仕事[しごと]をする 時[とき]があります。|Manchmal arbeite ich auch feiertags.|Nomen
お祝い|お 祝[いわ]い|Feier, Glückwunsch|私[わたし]は 彼[かれ]に 成功[せいこう]のお 祝[いわ]いを 述[の]べた。|Ich gratulierte ihm zu seinem Erfolg.|Nomen (mit する)
夢|夢[ゆめ]|Traum|私[わたし]は 昨夜[ゆうべ]いやな 夢[ゆめ]を 見[み]た。|Letzte Nacht hatte ich einen schlechten Traum.|Nomen
カップ|カップ|Tasse, Messbecher|あなた、 私[わたし]のカップから 飲[の]んでますよ。|Du trinkst aus meiner Tasse.|Nomen
泣く|泣[な]く|weinen|赤[あか]ちゃんが 泣[な]き 始[はじ]めた。|Das Baby begann zu weinen.|Verb
涙|涙[なみだ]|Träne|メアリーの 目[め]は 涙[なみだ]でいっぱいだった。|Maries Augen waren gefüllt mit Tränen.|Nomen
喜ぶ|喜[よろこ]ぶ|sich freuen|生徒[せいと] 達[たち]は 喜[よろこ]んでいるが、 先生[せんせい] 達[たち]は 違[ちが]う。|Die Schüler freuen sich, die Lehrer jedoch nicht.|Verb
恥ずかしい|恥[は]ずかしい|peinlich, verlegen|生[い]きてるのが 恥[は]ずかしくなってきた。|Inzwischen ist es mir peinlich zu leben.|Adjektiv
スケート|スケート|Schlittschuhlaufen|今日[きょう]はスケートをしに 行[い]きません。|Ich gehe heute nicht Schlittschuhlaufen.|Nomen
弁当|弁当[べんとう]|Lunchbox, Bentō|普通[ふつう]のお 弁当[べんとう]にしてね。|Mach eine normale Lunchbox, ok?|Nomen
看護婦|看護婦[かんごふ]|Krankenschwester|ホテルに 医者[いしゃ]か 看護[かんご] 婦[ふ]はいますか。|Gibt es in diesem Hotel einen Arzt oder eine Krankenschwester?|Nomen
患者|患者[かんじゃ]|Patient(in)|患者[かんじゃ]の 状況[じょうきょう]は 日[ひ]ごとに 変化[へんか]する。|Der Zustand des Patienten wechselt von Tag zu Tag.|Nomen
述べる|述[の]べる|äußern, darlegen|彼[かれ]は 何[なに]がそこで 起[お]こったかを 正確[せいかく]に 述[の]べた。|Er beschrieb präzise, was dort geschehen war.|Verb
たくさん|たくさん|viel, viele|父[ちち]は 本[ほん]をたくさん 持[も]ってるんです。|Mein Vater hat viele Bücher.|Adverb
訴える|訴[うった]える|verklagen; appellieren, klagen über|彼女[かのじょ]は 彼[かれ]を 訴[うった]えた。|Sie hat ihn verklagt.|Verb
迷う|迷[まよ]う|sich verirren; unschlüssig sein|私[わたし]たちは 森[もり]の 中[なか]で 道[みち]に 迷[まよ]った。|Wir verirrten uns im Wald.|Verb
迷惑|迷惑[めいわく]|Belästigung, Unannehmlichkeit|ご 迷惑[めいわく]をおかけしまして 申[もう]し 訳[わけ]ありません。|Es tut mir sehr leid, Sie belästigt zu haben.|Nomen (mit する)
地域|地域[ちいき]|Region, Gebiet|町[まち]の 他[ほか]の 地域[ちいき]では 争[あらそ]いが 続[つづ]いた。|In anderen Teilen der Stadt gingen die Kämpfe weiter.|Nomen
ピクニック|ピクニック|Picknick|ピクニックの 日[ひ]がやってきた。|Der Tag des Picknicks ist gekommen.|Nomen
政権|政権[せいけん]|Regierungsmacht, Regierung|政権[せいけん]のたらい 回[まわ]しは 反対[はんたい]だ。|Ich bin dagegen, dass politische Macht einfach von einer Person zur anderen weitergereicht wird.|Nomen
贈る|贈[おく]る|schenken|生徒[せいと]たちは 先生[せんせい]に 金時計[きんどけい]を 贈[おく]った。|Die Schüler überreichten ihrem Lehrer eine goldene Uhr als Geschenk.|Verb
贈り物|贈[おく]り 物[もの]|Geschenk|妻[つま]への 贈[おく]り 物[もの]を 探[さが]しているんです。|Ich suche ein Geschenk für meine Frau.|Nomen
与える|与[あた]える|geben, verleihen, zufügen|医者[いしゃ]は 彼女[かのじょ]にそれを 与[あた]えた。|Die Ärztin hat ihr das gegeben.|Verb
あちら|あちら|dort drüben, dorthin (höflich)|あちらに 着[つ]いたら 手紙[てがみ]をください。|Schreib mir, wenn du angekommen bist.|Nomen
貯金|貯金[ちょきん]|Ersparnisse, Sparen|新[あたら]しい 自転車[じてんしゃ]が 欲[ほ]しいのなら 貯金[ちょきん]しなさい。|Falls du ein neues Fahrrad willst, dann spare dafür!|Nomen (mit する)
預ける|預[あず]ける|anvertrauen, in Verwahrung geben|私[わたし]の 手荷物[てにもつ]はどこに 預[あず]けるのですか。|Wo kann ich mein Handgepäck abgeben?|Verb
預かる|預[あず]かる|in Verwahrung nehmen, aufbewahren|この 荷物[にもつ]を 四[よ] 時[じ]まで 預[あず]かってください。|Bitte bewahre dieses Gepäck bis 4 Uhr auf.|Verb
得意|得意[とくい]|Stärke, gut können|あなたは 数学[すうがく]が 得意[とくい]ですか。|Bist du gut in Mathematik?|な-Adjektiv
どきどき|どきどき|Herzklopfen haben, aufgeregt sein|彼[かれ]は 心臓[しんぞう]がどきどき 打[う]っているのを 感[かん]じた。|Er fühlte sein Herz schnell schlagen.|Adverb
燃える|燃[も]える|brennen|これは 燃[も]えません。|Das brennt nicht.|Verb
焼ける|焼[や]ける|gebraten werden, verbrennen|町[まち]は 見渡[みわた]す 限[かぎ]りの 焼[や]け 野原[のはら]であった。|Die Stadt war, soweit das Auge reichte, eine Brandwüste.|Verb
すき焼き|すき 焼[や]き|Sukiyaki (Rindfleischeintopf)|すき 焼[や]きはどんな 材料[ざいりょう]を 使[つか]うのですか。|Was sind die Zutaten für Sukiyaki?|Nomen
焼く|焼[や]く|braten, grillen, backen; verbrennen|クッキー 焼[や]こうよ。|Lass uns Kekse backen!|Verb
まあまあ|まあまあ|ganz ordentlich, so lala|トムが 子供[こども]だった 頃[ころ]、まあまあ 可愛[かわい]かった。|Als Kind war Tom schon ganz süß.|Adjektiv
乾く|乾[かわ]く|trocknen, trocken werden|私[わたし]のシャツはまだ 乾[かわ]いていないの。|Mein Hemd ist noch nicht trocken.|Verb
乾杯|乾杯[かんぱい]|Prost; Anstoßen|ご 健康[けんこう]を 祝[しゅく]して 乾杯[かんぱい]。|Prost!|Nomen (mit する)
乾かす|乾[かわ]かす|trocknen (etwas)|髪[かみ] 乾[かわ]かした？|Hast du deine Haare getrocknet?|Verb
新幹線|新幹線[しんかんせん]|Shinkansen (Hochgeschwindigkeitszug)|私[わたし]は 新[しん] 幹線[かんせん]から 見[み]える 景色[けしき]が 大好[だいす]きです。|Ich liebe die Landschaft, die man vom Shinkansen aus sehen kann.|Nomen
マフラー|マフラー|Schal|メアリーはトムにマフラーを 編[あ]んでいる。|Maria strickt Tom einen Schal.|Nomen
素晴らしい|素晴[すば]らしい|wunderbar, großartig|私[わたし]は 彼[かれ]の 運転[うんてん]の 技術[ぎじゅつ]は 素晴[すば]らしいと 思[おも]う。|Ich bewundere seine Fahrkünste.|Adjektiv
海岸|海岸[かいがん]|Küste, Strand|海岸[かいがん]への 行[い]き 方[かた]を 教[おし]えてください。|Wie komme ich zum Strand?|Nomen
家庭|家庭[かてい]|Familie, Zuhause|私[わたし]は 仕事[しごと]より 家庭[かてい]のほうが 大事[だいじ]だ。|Meine Familie ist mir wichtiger als meine Karriere.|Nomen
庭|庭[にわ]|Garten|庭[にわ]は 家[いえ]の 前[まえ]にあります。|Der Garten ist vor dem Haus.|Nomen
アクセサリー|アクセサリー|Schmuck, Accessoires|この 服[ふく]にはどんなアクセサリーを 付[つ]けるの？|Was für Accessoires trägst du zu dieser Kleidung?|Nomen
桜|桜[さくら]|Kirschbaum, Kirschblüte|すごい！もう 桜[さくら]が 咲[さ]いてるよ。|O wie schön! Die Kirschbäume blühen schon!|Nomen
咲く|咲[さ]く|blühen|庭[にわ]の 花[はな]は 春[はる]に 咲[さ]きます。|Die Blumen im Garten blühen im Frühling.|Verb
吹く|吹[ふ]く|wehen, blasen; (Blasinstrument) spielen|冷[つめ]たい 風[かぜ]が 冬[ふゆ]ごとに 激[はげ]しく 吹[ふ]く。|Kalte Winde blasen jeden Winter kräftig.|Verb
散歩|散歩[さんぽ]|Spaziergang|私[わたし]たちは 公園[こうえん]を 散歩[さんぽ]した。|Wir gingen im Park spazieren.|Nomen (mit する)
あくび|あくび|Gähnen|トムはあくびをしないようにした。|Tom gab sich Mühe, nicht zu gähnen.|Nomen (mit する)
植える|植[う]える|pflanzen|母[はは]は 庭[にわ]に 花[はな]を 植[う]えるのに 忙[いそが]しい。|Meine Mutter ist damit beschäftigt, im Garten Blumen zu pflanzen.|Verb
屋根|屋根[やね]|Dach|私[わたし]の 家[いえ]の 屋根[やね]は 赤[あか]い。|Das Dach meines Hauses ist rot.|Nomen
黒板|黒板[こくばん]|Tafel|黒板[こくばん]が 必[かなら]ずしも 黒[くろ]いとは 限[かぎ]らない。|Tafeln sind nicht immer schwarz.|Nomen
掲示板|掲示板[けいじばん]|Anschlagbrett, Schwarzes Brett|掲示[けいじ] 板[ばん]を 荒[あ]らす 人[ひと]の 精神状態[せいしんじょうたい]がわかりません。|Ich weiß einfach nicht, was in den Köpfen von Leuten, die in Foren herumtrollen, vorgeht.|Nomen
からから|からから|ausgetrocknet, völlig trocken|お 腹[なか]はぺこぺこだし、のどはからからだ。|Ich habe einen Bärenhunger, und meine Kehle ist ganz ausgetrocknet.|Adjektiv
草|草[くさ]|Gras, Unkraut|夏[なつ]には 草[くさ]がよく 伸[の]びる。|Im Sommer wächst das Gras gut.|Nomen
葉|葉[は]|Blatt (einer Pflanze)|葉[は]の 色[いろ]が 変[か]わり 始[はじ]めた。|Die Blätter haben begonnen, sich zu verfärben.|Nomen
絵葉書|絵葉書[えはがき]|Ansichtskarte|フランスから 絵葉書[えはがき]が 届[とど]いた。|Aus Frankreich ist eine Ansichtskarte angekommen.|Nomen
葉書|葉書[はがき]|Postkarte|トムが 葉書[はがき]を 送[おく]ってきたんだ。|Tom hat mir eine Postkarte geschickt.|Nomen
ふらふら|ふらふら|schwankend, schwindlig|今日[きょう]はちょっとふらふらする。|Ich fühle mich heute ein bisschen schwach.|Adverb
吸う|吸[す]う|einatmen, saugen; rauchen|タバコを 吸[す]うのは 健康[けんこう]に 良[よ]くない。|Rauchen ist nicht gut für die Gesundheit.|Verb
普及|普及[ふきゅう]|Verbreitung|英語[えいご]は 全国[ぜんこく]に 普及[ふきゅう]した。|Das Englische verbreitete sich im ganzen Land.|Nomen (mit する)
胃|胃[い]|Magen|先生[せんせい]、 胃[い]が 痛[いた]いのですが。|Herr Doktor, mein Magen schmerzt.|Nomen
皿|皿[さら]|Teller|台所[だいどころ]から 何[なん] 枚[まい]かお 皿[さら] 持[も]ってきて。|Bring Teller aus der Küche mit!|Nomen
こぼす|こぼす|verschütten|誰[だれ]がソーダをこぼしたの？|Wer hat das Sodawasser verschüttet?|Verb
血|血[ち]|Blut|床[ゆか]は 血[ち]だらけだった。|Überall auf dem Boden war Blut.|Nomen
内容|内容[ないよう]|Inhalt|話[はな]し 方[かた]よりも 話[はな]す 内容[ないよう]の 方[ほう]が 大事[だいじ]です。|Was man sagt, ist wichtiger, als wie man es sagt.|Nomen
背景|背景[はいけい]|Hintergrund|彼[かれ]が 背景[はいけい]を 説明[せつめい]してくれる。|Er wird uns die Hintergründe erklären.|Nomen
骨|骨[ほね]|Knochen|彼[かれ]は 犬[いぬ]に 骨[ほね]をやった。|Er hat dem Hund einen Knochen gegeben.|Nomen
ランチ|ランチ|Mittagessen, Lunch|ランチ 食[た]べに 出[で]かけてくる。|Ich gehe etwas zu Mittag essen.|Nomen
滑る|滑[すべ]る|rutschen, gleiten|床[ゆか] 滑[すべ]りやすいから 気[き]をつけてね。|Pass auf, der Boden ist rutschig.|Verb
折れる|折[お]れる|brechen, abknicken; nachgeben|本当[ほんとう]に 骨[ほね]の 折[お]れる 仕事[しごと]だった。|Das war wirklich Knochenarbeit.|Verb
折る|折[お]る|brechen, knicken, falten|彼[かれ]はスキーで 足[あし]を 折[お]った。|Er hat sich beim Skilaufen das Bein gebrochen.|Verb
健康|健康[けんこう]|Gesundheit, gesund|私[わたし]たちにとって 健康[けんこう]は 一番[いちばん] 大切[たいせつ]なものです。|Die Gesundheit ist für uns das Wichtigste.|な-Adjektiv
レシート|レシート|Kassenbon, Quittung|レシートはまだお 持[も]ちですか？|Haben Sie den Bon noch?|Nomen
珍しい|珍[めずら]しい|selten, ungewöhnlich|有名[ゆうめい] 人[じん]と 偶然[ぐうぜん] 会[あ]うのは 珍[めずら]しい。|Man trifft nur selten zufällig eine Berühmtheit.|Adjektiv
撮る|撮[と]る|aufnehmen (Foto, Film)|ここで 写真[しゃしん]を 撮[と]ってもいいでしょうか。|Darf ich hier fotografieren?|Verb
再び|再[ふたた]び|wieder, erneut|森[もり]の 中[なか]は 再[ふたた]び 静[しず]かになった。|Es wurde wieder still im Wald.|Adverb
再来年|再来年[さらいねん]|übernächstes Jahr|再来[さらい] 年[ねん]、 国[くに]へ 帰[かえ]ります。|Übernächstes Jahr kehre ich in mein Heimatland zurück.|Nomen
チョーク|チョーク|Kreide|チョークを 一本[いっぽん] 下[くだ]さい。|Gib mir bitte ein Stück Kreide.|Nomen
再来月|再来月[さらいげつ]|übernächsten Monat|再来月[さらいげつ]、 引[ひ]っ 越[こ]す 予定[よてい]です。|Übernächsten Monat will ich umziehen.|Nomen
再来週|再来週[さらいしゅう]|übernächste Woche|また 再来[さらい] 週[しゅう]。|Bis übernächste Woche.|Nomen
放送|放送[ほうそう]|Sendung, Ausstrahlung|その 番組[ばんぐみ]は 昨日[きのう]ラジオで 放送[ほうそう]された。|Die Sendung kam gestern im Radio.|Nomen (mit する)
装置|装置[そうち]|Vorrichtung, Gerät, Apparatur|これは 電気[でんき]を 作[つく]る 装置[そうち]だ。|Dieser Apparat produziert Elektrizität.|Nomen
ティッシュ|ティッシュ|Papiertaschentuch|ティッシュを 持[も]ってきて。|Bring mir die Taschentücher.|Nomen
仮名|仮名[かな]|Kana (japanische Silbenschrift)|名前[なまえ]を 仮名[かな]で 書[か]いてください。|Schreiben Sie Ihren Namen bitte in Kana.|Nomen
送り仮名|送[おく]り 仮名[がな]|Kana-Endung (nach einem Kanji)|この 漢字[かんじ]、 送[おく]り 仮名[がな]が 間違[まちが]ってるよ。|Bei diesem Kanji ist das Okurigana falsch.|Nomen
鏡|鏡[かがみ]|Spiegel|彼女[かのじょ]は 鏡[かがみ]で 自分[じぶん]の 姿[すがた]を 見[み]た。|Sie sah sich im Spiegel.|Nomen
悲しむ|悲[かな]しむ|trauern, betrübt sein|彼女[かのじょ]は 喜[よろこ]んだり 悲[かな]しんだりした。|Bald freute sie sich, dann war sie wieder traurig.|Verb
ノック|ノック|Klopfen|彼[かれ]がノックしたのかどうか 分[わ]かりません。|Ich weiß nicht, ob er geklopft hat.|Nomen (mit する)
固い|固[かた]い|hart, fest; stur|トムは 頭[あたま]が 固[かた]い。|Tom ist stur.|Adjektiv
美術館|美術館[びじゅつかん]|Kunstmuseum|美術[びじゅつ] 館[かん]は 何時[なんじ]に 閉[し]まりますか？|Um wieviel Uhr schließt die Kunsthalle?|Nomen
美人|美人[びじん]|schöne Frau|彼[かれ]の 妹[いもうと]は 二人[ふたり]とも 美人[びじん]です。|Seine Schwestern sind alle beide schöne Frauen.|Nomen
美容院|美容院[びよういん]|Friseursalon|彼女[かのじょ]は 美容[びよう] 院[いん]を 経営[けいえい]している。|Sie betreibt einen Schönheitssalon.|Nomen
よろしく|よろしく|gut, angemessen; schöne Grüße|お 父[とう] 様[さま]にもよろしくお 伝[つた]えください。|Grüßen Sie Ihren Herrn Vater!|Adverb
博物館|博物館[はくぶつかん]|Museum|博物[はくぶつ] 館[かん]はどこにありますか。|Wo ist das Museum?|Nomen
開催|開催[かいさい]|Veranstaltung, Abhaltung|お 祭[まつ]りは 今年[ことし]も 例年[れいねん] 通[とお]り 開催[かいさい]された。|Die Feierlichkeiten fanden auch in diesem Jahr wieder wie üblich statt.|Nomen (mit する)
特徴|特徴[とくちょう]|Merkmal, Besonderheit|礼儀[れいぎ] 正[ただ]しいのが 彼[かれ]の 特徴[とくちょう]であった。|Er zeichnete sich durch Höflichkeit aus.|Nomen
許す|許[ゆる]す|erlauben; verzeihen|許[ゆる]してなんて 言[い]ってないよ。|Ich bitte ja gar nicht um Verzeihung.|Verb
がらがら|がらがら|ganz leer (Raum, Fahrzeug)|公園[こうえん]はがらがらだ。|Der Park ist völlig leer.|Adjektiv
免許証|免許証[めんきょしょう]|Führerschein, Lizenz|免許[めんきょ] 証[しょう]を 見[み]せてください。|Bitte zeigen Sie mir Ihren Führerschein.|Nomen
教師|教師[きょうし]|Lehrer(in), Lehrkraft|彼[かれ]は 教師[きょうし]に 向[む]いていない。|Er taugt nicht zum Lehrer.|Nomen
教授|教授[きょうじゅ]|Professor(in)|教授[きょうじゅ]をお 願[ねが]いしたいのですが。|Wäre es möglich, den Herrn Professor zu sprechen?|Nomen
伝える|伝[つた]える|übermitteln, ausrichten, überliefern|お 母[かあ]さんによろしくお 伝[つた]えください。|Bitte bestellen Sie Ihrer Mutter schöne Grüße von mir.|Verb
ぎらぎら|ぎらぎら|grell, gleißend|熱帯[ねったい]の 太陽[たいよう]は 容赦[ようしゃ]なくぎらぎら 照[て]り 付[つ]けた。|Die tropische Sonne schien erbarmungslos grell.|Adverb
鳥|鳥[とり]|Vogel|鳥[とり]になれたらいいのになぁ。|Ich bin kein Vogel, aber ich wäre gern einer.|Nomen
鳴る|鳴[な]る|klingeln, ertönen|家[いえ]に 着[つ]くとすぐ 電話[でんわ]が 鳴[な]った。|Ich war kaum im Haus, als das Telefon klingelte.|Verb
鳴く|鳴[な]く|rufen, zwitschern, miauen (Tierlaute)|毎朝[まいあさ]、ニワトリが 鳴[な]きます。|Jeden Morgen kräht der Hahn.|Verb
声|声[こえ]|Stimme|あなたの 声[こえ]が 聞[き]けてうれしいわ。|Ich freue mich, deine Stimme zu hören.|Nomen
そっち|そっち|dort (bei dir, umgangssprachlich)|そっちの 天気[てんき]は？|Wie ist das Wetter dort?|Nomen
卵|卵[たまご]|Ei|それは 卵[たまご]のように 見[み]える。|Das sieht wie ein Ei aus.|Nomen
犬|犬[いぬ]|Hund|うちの 犬[いぬ]がどこかへ 行[い]ってしまった。|Unser Hund ist entlaufen.|Nomen
馬|馬[うま]|Pferd|彼[かれ]は 馬[うま]から 落[お]ちた。|Er fiel vom Pferd.|Nomen
駐車場|駐車場[ちゅうしゃじょう]|Parkplatz|お 客[きゃく] 様[さま] 用[よう]の 駐車[ちゅうしゃ] 場[じょう]があります。|Wir haben einen Kundenparkplatz.|Nomen
ピンポン|ピンポン|Tischtennis|ピンポンは 卓球[たっきゅう]とも 呼[よ]ばれている。|Pingpong wird auch Tischtennis genannt.|Nomen (mit する)
騒ぐ|騒[さわ]ぐ|lärmen, Krach machen|彼[かれ]は 私[わたし] 達[たち]に 騒[さわ]がないように 頼[たの]んだ。|Er bat uns, keinen Lärm zu machen.|Verb
刺す|刺[さ]す|stechen|蚊[か]にたくさん 刺[さ]されました。|Ich habe viele Mückenstiche.|Verb
刺身|刺身[さしみ]|Sashimi (roher Fisch in Scheiben)|スコットさんの 姉[あね]が 刺身[さしみ]を 作[つく]るのが 好[す]きです。|Scotts Schwester macht gerne Sashimi.|Nomen
激しい|激[はげ]しい|heftig, stark|雨[あめ]が 激[はげ]しく 降[ふ]り 始[はじ]めた。|Es begann heftig zu regnen.|Adjektiv
ぺこぺこ|ぺこぺこ|sehr hungrig|朝[あさ]ごはんから 何[なに]も 食[た]べてなくてお 腹[なか]ぺこぺこだよ。|Ich habe seit dem Frühstück nichts gegessen und bin daher sehr hungrig.|Adjektiv
驚く|驚[おどろ]く|überrascht sein, erschrecken|先生[せんせい]は 驚[おどろ]いているようだった。|Unser Lehrer schien überrascht zu sein.|Verb
倒れる|倒[たお]れる|umfallen, zusammenbrechen|休[やす]み 取[と]らないと 倒[たお]れちゃうよ。|Nimmst du keinen Urlaub, wirst du zusammenbrechen.|Verb
倒す|倒[たお]す|umwerfen, zu Fall bringen, besiegen|多[おお]くの 木[き]が 台風[たいふう]で 倒[たお]された。|Viele Bäume wurden vom Taifun umgeworfen.|Verb
傾向|傾向[けいこう]|Tendenz, Neigung|彼[かれ]は 怠[なま]ける 傾向[けいこう]がある。|Er hat eine Neigung zur Faulheit.|Nomen
ぺらぺら|ぺらぺら|fließend (sprechen)|トムは 日本語[にほんご]がぺらぺらだ。|Tom spricht fließend Japanisch.|な-Adjektiv
柔道|柔道[じゅうどう]|Judo|柔道[じゅうどう]では 力[ちから]より 技[わざ]のほうが 大切[たいせつ]である。|Beim Jūdō ist Technik wichtiger als Stärke.|Nomen
柔らかい|柔[やわ]らかい|weich|この 柔[やわ]らかい 毛布[もうふ]は 赤[あか]ちゃんにちょうどいい。|Diese weiche Decke ist genau richtig für Babys.|Adjektiv
柔らか|柔[やわ]らか|weich, sanft|彼女[かのじょ]は 柔[やわ]らかな 口調[くちょう]で 話[はな]しました。|Sie sprach mit sanfter Stimme.|な-Adjektiv
主張|主張[しゅちょう]|Behauptung, Standpunkt|トムは 主張[しゅちょう]した。|Tom bestand darauf.|Nomen (mit する)
レインコート|レインコート|Regenmantel|黄色[きいろ]いレインコートを 着[き]ている 女[おんな]の 子[こ]はだれですか。|Wer ist das Mädchen, das den gelben Regenmantel trägt?|Nomen
引っ張る|引[ひ]っ 張[ぱ]る|ziehen, zerren|トムはメアリーの 髪[かみ]の 毛[け]を 引[ひ]っ 張[ぱ]っている。|Tom zieht Maria an den Haaren.|Verb
突き当たる|突[つ]き 当[あ]たる|stoßen auf; ans Ende (einer Straße) kommen|急[いそ]いだあまり 私[わたし]はだれか 人[ひと]に 突[つ]き 当[あ]たった。|In meiner Eile stieß ich mit jemandem zusammen.|Verb
突き当たり|突[つ]き 当[あ]たり|Ende einer Straße|突[つ]き 当[あ]たりに 郵便局[ゆうびんきょく]があります。|Am Ende der Straße gibt es ein Postamt.|Nomen
壁|壁[かべ]|Wand, Mauer|私[わたし]の 祖父[そふ]の 写真[しゃしん]が 壁[かべ]にかかっている。|An der Wand hängt ein Bild meines Großvaters.|Nomen
アイス|アイス|Eis (zum Essen)|冬[ふゆ]にアイスなんか 食[た]べたくない。|Im Winter will ich kein Eis essen.|Nomen
弾く|弾[ひ]く|spielen (Saiten- und Tasteninstrument)|私[わたし]はピアノを 弾[ひ]きます。|Ich spiele Klavier.|Verb
丸い|丸[まる]い|rund|私[わたし]たちは 丸[まる]いテーブルを 買[か]った。|Wir haben einen runden Tisch gekauft.|Adjektiv
丸|丸[まる]|Kreis, Kugel|トムは 丸[まる] 一日[いちにち]、 学校[がっこう]にいた。|Tom war den ganzen Tag in der Schule.|Nomen
攻撃|攻撃[こうげき]|Angriff|敵[てき]の 攻撃[こうげき]は 夜明[よあ]けに 止[や]んだ。|Die Angriffe des Feindes endeten bei Tagesanbruch.|Nomen (mit する)
いつごろ|いつごろ|ungefähr wann|休憩[きゅうけい]はいつごろですか。|Wann ist die Pause?|Nomen
絶対に|絶対[ぜったい]に|absolut, unbedingt|私[わたし]は 絶対[ぜったい]に 一人[ひとり]では 飲[の]みません。|Ich trinke nie allein.|Adverb
消防車|消防車[しょうぼうしゃ]|Feuerwehrauto|消防[しょうぼう] 車[しゃ]はすぐにやって 来[き]た。|Das Feuerwehrauto kam sofort.|Nomen
嫌|嫌[いや]|unangenehm, nicht mögen|彼[かれ]の 話[はな]し 方[かた]が 嫌[いや]なの。|Ich mag seine Sprechweise nicht.|な-Adjektiv
大嫌い|大嫌[だいきら]い|hassen, überhaupt nicht mögen|私[わたし]は 政治[せいじ]が 大嫌[だいきら]いだ。|Ich hasse Politik.|な-Adjektiv
ウィスキー|ウィスキー|Whisky|ウィスキーを 飲[の]みますか。|Trinken Sie Whisky?|Nomen
大抵|大抵[たいてい]|meistens, gewöhnlich|大抵[たいてい]ここで 朝[あさ]ごはんを 食[た]べてるよ。|Ich frühstücke meistens hier.|Adverb
大勢|大勢[おおぜい]|viele Leute, große Gruppe|大勢[おおぜい]の 方[ほう]が 楽[たの]しいよ。|Zu vielen ist’s fröhlicher.|Nomen
姿|姿[すがた]|Gestalt, Erscheinung|彼[かれ]はまだ 姿[すがた]を 見[み]せない。|Er ist noch nicht erschienen.|Nomen
姿勢|姿勢[しせい]|Haltung, Einstellung|彼[かれ]はまっすぐな 姿勢[しせい]で 立[た]っていた。|Er stand in aufrechter Haltung da.|Nomen
エアメール|エアメール|Luftpost|彼女[かのじょ]は 手紙[てがみ]をエアメールで 送[おく]った。|Sie schickte den Brief per Luftpost.|Nomen
恐ろしい|恐[おそ]ろしい|schrecklich, furchtbar|ああ、 何[なん]て 恐[おそ]ろしい。|Ach, wie schrecklich!|Adjektiv
怖い|怖[こわ]い|furchterregend; Angst haben|彼女[かのじょ]は 暗[くら]いところが 怖[こわ]い。|Sie hat Angst vor der Dunkelheit.|Adjektiv
糸|糸[いと]|Faden, Garn|赤[あか]い 糸[いと]と 白[しろ]い 糸[いと]、どっちがいいですか。|Welcher ist der bessere Faden: der rote oder der weiße?|Nomen
孫|孫[まご]|Enkel(in)|孫[まご]が 明日[あした] 来[く]るんですよ。|Mein Enkel kommt morgen vorbei.|Nomen
シャープペンシル|シャープペンシル|Druckbleistift|シャープペンシルの 芯[しん]を 替[か]えるのが、なぜかちょっと 楽[たの]しい。|Die Mine eines Druckbleistifts zu wechseln macht irgendwie ein bisschen Spaß.|Nomen
木綿|木綿[もめん]|Baumwolle|彼[かれ]らの 主[しゅ]たる 輸出品[ゆしゅつひん]は 織物[おりもの]であり、 特[とく]に 絹[きぬ]と 木綿[もめん]である。|Ihre Hauptexportprodukte sind Textilien, besonders Seide und Baumwolle.|Nomen
偉い|偉[えら]い|großartig, bedeutend, ranghoch|すみません、 偉[えら]そうなことを 言[い]ってしまいました。|Entschuldige, dass ich so etwas Wichtigtuerisches gesagt habe.|Adjektiv
爪|爪[つめ]|Nagel, Kralle|その 猫[ねこ]は 爪[つめ]を 隠[かく]している。|Diese Katze versteckt ihre Krallen.|Nomen
机|机[つくえ]|Schreibtisch|机[つくえ]の 引[ひ]き 出[だ]しが 開[あ]いている。|Die Schreibtischschublade ist offen.|Nomen
セロテープ|セロテープ|Klebefilm, Tesafilm|セロテープ 持[も]ってきてくれる？|Bringst du mir bitte das Klebeband?|Nomen
棚|棚[たな]|Regal|棚[たな]の 上[うえ]の 箱[はこ]に 手[て]が 届[とど]きますか。|Kommst du an den Karton auf dem Regal?|Nomen
本棚|本棚[ほんだな]|Bücherregal|彼[かれ]は 彼女[かのじょ]に 本棚[ほんだな]を 作[つく]ってやった。|Er hat ihr ein Bücherregal gebaut.|Nomen
方針|方針[ほうしん]|Kurs, Richtlinie|私[わたし]たちの 方針[ほうしん]を 変[か]えるべきだと 思[おも]う。|Ich denke, wir müssen unseren Kurs ändern.|Nomen
釣る|釣[つ]る|angeln|私[わたし]は 昨日[きのう] 大[おお]きな 魚[さかな]を 釣[つ]った。|Gestern habe ich einen großen Fisch gefangen.|Verb
やけど|やけど|Verbrennung, Brandwunde|彼女[かのじょ]は 右手[みぎて]をやけどした。|Sie hat sich an der rechten Hand verbrannt.|Nomen (mit する)
お釣り|お 釣[つ]り|Wechselgeld|ごめん、お 釣[つ]りが 無[な]い。|Tut mir leid, ich habe kein Kleingeld.|Nomen
鍵|鍵[かぎ]|Schlüssel; Schloss|家[いえ]の 中[なか]のドアはどれも 鍵[かぎ]がかかっている。|Jede Tür im Haus ist abgeschlossen.|Nomen
鍋|鍋[なべ]|Topf|夏[なつ]に 鍋[なべ]なんか 食[た]べたくない。|Im Sommer will ich keinen Eintopf essen.|Nomen
寿司|寿司[すし]|Sushi|お 寿司[すし]って 食[た]べたことある？|Hast du schon einmal Sushi gegessen?|Nomen
アイスコーヒー|アイスコーヒー|Eiskaffee|アイスコーヒーを 持[も]ってきて。|Bring mir einen Eiskaffee.|Nomen
泥棒|泥棒[どろぼう]|Dieb, Einbrecher|目[め]が 覚[さ]めると 部屋[へや]に 泥棒[どろぼう]がいた。|Als ich aufwachte, war ein Einbrecher in meinem Zimmer.|Nomen (mit する)
湯|湯[ゆ]|heißes Wasser; Bad|お 湯[ゆ]が 出[で]ません。|Es gibt kein heißes Wasser.|Nomen
沸く|沸[わ]く|kochen, sieden|お 湯[ゆ]が 沸[わ]き 始[はじ]めた。|Das Wasser hat angefangen zu kochen.|Verb
沸かす|沸[わ]かす|zum Kochen bringen, erhitzen|トムはお 湯[ゆ]の 沸[わ]かし 方[かた]も 知[し]らない。|Tom kann noch nicht einmal Wasser kochen.|Verb
あっち|あっち|dort drüben, dorthin (umgangssprachlich)|あっちの 店[みせ]も 見[み]てみよう。|Lass uns auch in den Laden dort gehen.|Nomen
洗濯機|洗濯機[せんたくき]|Waschmaschine|洗濯[せんたく] 機[き]のスイッチ 入[い]れるの 忘[わす]れてた。|Ich habe vergessen, die Waschmaschine einzuschalten.|Nomen
洗濯|洗濯[せんたく]|Wäschewaschen, Wäsche|洗濯[せんたく] 物[もの] 入[い]れてきて。|Hole die Wäsche herein!|Nomen (mit する)
濡れる|濡[ぬ]れる|nass werden|服[ふく]が 濡[ぬ]れちゃったから 脱[ぬ]いだんだよ。|Weil meine Kleidung nass geworden war, habe ich sie ausgezogen.|Verb
喫茶店|喫茶店[きっさてん]|Café|あそこの 喫茶[きっさ] 店[てん]でコーヒーでも 飲[の]もう。|Lass uns in dem Café dort eine Tasse Kaffee trinken!|Nomen
あんなに|あんなに|so sehr, derart (wie jener)|あんなに 早[はや]く 起[お]きなければよかった。|Ich hätte nicht so früh aufstehen sollen.|Adverb
怠ける|怠[なま]ける|faulenzen, vernachlässigen|彼[かれ]は 勉強[べんきょう]を 怠[なま]けている。|Er vernachlässigt sein Studium.|Verb
一生懸命|一生懸命[いっしょうけんめい]|mit aller Kraft, eifrig|彼[かれ]は 一生[いっしょう] 懸命[けんめい] 働[はたら]く。|Er arbeitet mit ganzer Kraft.|Adverb
休憩|休憩[きゅうけい]|Pause|ちょっと 休憩[きゅうけい]したい 気分[きぶん]だ。|Ich hab' Lust auf eine kleine Pause.|Nomen (mit する)
天井|天井[てんじょう]|Zimmerdecke|天井[てんじょう]に 手[て]が 届[とど]きますか。|Kannst du an die Zimmerdecke fassen?|Nomen
いたずら|いたずら|Streich, Unfug|彼[かれ]は 友達[ともだち]にいたずらをした。|Er spielte seinem Freund einen Streich.|Nomen (mit する)
納豆|納豆[なっとう]|Nattō (vergorene Sojabohnen)|リサは 納豆[なっとう]を 食[た]べたことがあると 私[わたし]に 言[い]った。|Lisa sagte mir, sie habe Nattō gegessen.|Nomen
化粧|化粧[けしょう]|Make-up, Schminken|彼女[かのじょ]は 毎朝[まいあさ] 化粧[けしょう]をする。|Sie schminkt sich jeden Morgen.|Nomen (mit する)
畑|畑[はたけ]|Feld, Acker|彼[かれ]の 家族[かぞく]は 畑[はたけ]で 働[はたら]いている。|Seine Familie arbeitet auf dem Acker.|Nomen
炊く|炊[た]く|kochen (Reis)|炊飯器[すいはんき]でご 飯[はん]を 炊[た]くよ。|Wir kochen Reis mit dem Reiskocher.|Verb
ウェートレス|ウェートレス|Kellnerin|ウェートレスが 水[みず]を 持[も]ってきました。|Die Kellnerin brachte Wasser.|Nomen
自炊|自炊[じすい]|selbst kochen|私[わたし]は 自炊[じすい]に 慣[な]れている。|Ich bin es gewohnt, für mich selbst zu kochen.|Nomen (mit する)
灰皿|灰皿[はいざら]|Aschenbecher|灰皿[はいざら]を 割[わ]ってしまいました。|Mir ist der Aschenbecher kaputtgegangen.|Nomen
灰|灰[はい]|Asche|すべては 燃[も]えて 灰[はい]となった。|Alles verbrannte zu Asche.|Nomen
灰色|灰色[はいいろ]|Grau|夜中[よなか]の 猫[ねこ]はどれも 灰色[はいいろ]。|Nachts sind alle Katzen grau.|Nomen
おばさん|おばさん|Tante; Frau mittleren Alters|私[わたし]の 叔母[おば]さんがクリスマスに 本[ほん]をくれました。|Meine Tante schenkte mir zu Weihnachten ein Buch.|Nomen
西暦|西暦[せいれき]|westliche Zeitrechnung, n. Chr.|西暦[せいれき]で 生[う]まれた 年[とし]を 書[か]いてください。|Schreiben Sie Ihr Geburtsjahr bitte nach westlicher Zeitrechnung.|Nomen
毛|毛[け]|Haar, Fell, Wolle|猫[ねこ]の 毛[け]だらけね。|Alles voller Katzenhaare.|Nomen
髪|髪[かみ]|Haare (Kopfhaar)|僕[ぼく]の 髪[かみ]は 長[なが]くなり 過[す]ぎた。|Meine Haare sind zu lang geworden.|Nomen
舌|舌[した]|Zunge|舌[した]を 出[だ]してください。|Bitte strecken Sie Ihre Zunge heraus.|Nomen
くし|くし|Kamm|これは 木[き]のくしです。|Dies ist ein Holzkamm.|Nomen
臭い|臭[くさ]い|stinkend, übelriechend|君[きみ]の 靴下[くつした] 臭[くさ]いよ。|Deine Socken stinken.|Adjektiv
匂い|匂[にお]い|Geruch, Duft|雨[あめ]は 嫌[きら]いだけど、 雨[あめ]の 匂[にお]いは 好[す]き。|Ich mag zwar keinen Regen, doch der Geruch gefällt mir.|Nomen
居る|居[い]る|da sein, sich befinden (Lebewesen)|周囲[しゅうい]には 誰[だれ]も 居[い]なかった。|In der Umgebung befand sich niemand.|Verb
履く|履[は]く|anziehen, tragen (Schuhe, Hose)|すぐに 靴[くつ]を 履[は]いた。|Ich habe sofort meine Schuhe angezogen.|Verb
クリーニング|クリーニング|Reinigung|そのカーテンはクリーニングをする 必要[ひつよう]がある。|Der Vorhang muss mal zur Reinigung.|Nomen (mit する)
戸|戸[と]|Tür|戸[と]を 叩[たた]く 音[おと]がした。|Ich hörte ein Klopfen an der Tür.|Nomen
扇風機|扇風機[せんぷうき]|Ventilator|暑[あつ]かったので 扇風[せんぷう] 機[き]をつけた。|Da es heiß war, schaltete ich den Ventilator an.|Nomen
豚|豚[ぶた]|Schwein|トムに 豚[ぶた]ちゃんの 貯金箱[ちょきんばこ]を 買[か]ってあげたいと 思[おも]ってるの。|Ich möchte Tom ein Sparschweinchen kaufen.|Nomen
豚肉|豚肉[ぶたにく]|Schweinefleisch|普通[ふつう]、 豚肉[ぶたにく]は 牛肉[ぎゅうにく]よりも 安[やす]いよ。|Schwein ist gewöhnlich billiger als Rind.|Nomen
ごちそう|ごちそう|Festessen, Leckerbissen|ごちそうさまでした。|Es war lecker.|Nomen
鶏|鶏[にわとり]|Huhn, Hahn|鶏[にわとり]が 先[さき]か、 卵[たまご]が 先[さき]か。|Was war zuerst da: das Huhn oder das Ei?|Nomen
腕時計|腕時計[うでどけい]|Armbanduhr|私[わたし]は 腕時計[うでどけい]を 買[か]った。|Ich habe eine Armbanduhr gekauft.|Nomen
お菓子|お 菓子[かし]|Süßigkeiten, Gebäck|いろいろなお 菓子[かし]があった。|Es gab verschiedene Süßigkeiten.|Nomen
お辞儀|お 辞儀[じぎ]|Verbeugung|彼女[かのじょ]は 私[わたし]に 丁寧[ていねい]にお 辞儀[じぎ]をしました。|Sie verbeugte sich höflich vor mir.|Nomen (mit する)
ごちそうする|ごちそうする|einladen (zum Essen), bewirten|寿司[すし]をご 馳走[ちそう]します。|Ich lade dich zum Sushiessen ein.|Verb
寝坊|寝坊[ねぼう]|Verschlafen; Langschläfer(in)|僕[ぼく]は 寝坊[ねぼう]して 学校[がっこう]に 遅刻[ちこく]した。|Ich verschlief und kam zu spät zur Schule.|Nomen (mit する)
旗|旗[はた]|Fahne, Flagge|通[とお]りは 旗[はた]で 飾[かざ]られていた。|Die Straßen waren mit Fahnen geschmückt.|Nomen
鉛筆|鉛筆[えんぴつ]|Bleistift|鉛筆[えんぴつ]をなくしてしまった。|Ich habe meinen Bleistift verloren.|Nomen
万年筆|万年筆[まんねんひつ]|Füllfederhalter|新[あたら]しい 万[まん] 年[ねん] 筆[ひつ]をなくしてしまった。|Ich habe meinen neuen Füller verloren.|Nomen
こぼれる|こぼれる|überlaufen, verschüttet werden|コーヒーがこぼれましたよ。|Ihr Kaffee ist übergelaufen.|Verb
箱|箱[はこ]|Schachtel, Kiste|この 箱[はこ]を 開[あ]けてください。|Öffnen Sie bitte diese Schachtel.|Nomen
本箱|本箱[ほんばこ]|Bücherschrank|彼[かれ]は 本箱[ほんばこ]を 作[つく]るために 材木[ざいもく]を 少[すこ]し 買[か]っている。|Er kauft etwas Holz, um ein Bücherregal zu bauen.|Nomen
手袋|手袋[てぶくろ]|Handschuhe|みんな 手袋[てぶくろ]してたんだ。|Alle trugen Handschuhe.|Nomen
袋|袋[ふくろ]|Tüte, Beutel, Sack|同[おな]じ 袋[ふくろ]の 中[なか]にそれ 全部[ぜんぶ]が 入[はい]ってたの？|War das alles in derselben Tüte?|Nomen
こんなに|こんなに|so sehr, derart (wie dies)|どうして 帰[かえ]りがこんなに 遅[おそ]くなったの。|Warum bist du so spät nach Hause gekommen?|Adverb
財布|財布[さいふ]|Portemonnaie, Geldbeutel|財布[さいふ]とパスポートがなくなってます。|Mein Portemonnaie und mein Reisepass sind weg.|Nomen
毛布|毛布[もうふ]|Wolldecke|枕[まくら]と 毛布[もうふ]を 下[くだ]さい。|Ein Kopfkissen und eine Bettdecke bitte!|Nomen
布団|布団[ふとん]|Futon, Bettzeug|朝[あさ]になると 布団[ふとん]を 片[かた]づけます。|Morgens verstauen wir den Futon.|Nomen
小包|小包[こづつみ]|Päckchen, Paket|彼[かれ]は 小包[こづつみ]を 右脇[みぎわき]に 抱[かか]えている。|Er trägt ein Paket unter dem rechten Arm.|Nomen
ざあざあ|ざあざあ|in Strömen (Regen)|朝[あさ]から 雨[あめ]がざあざあ 降[ふ]ってるから、どこにも 行[い]きたくない。|Weil es seit heute Morgen in Strömen regnet, habe ich keine Lust irgendwohin zu gehen.|Adverb
包む|包[つつ]む|einwickeln, einpacken|プレゼント 用[よう]に 包[つつ]んでもらえますか。|Können Sie es bitte als Geschenk einpacken?|Verb
飾る|飾[かざ]る|schmücken, ausstellen|彼女[かのじょ]は 壁[かべ]を 絵[え]で 飾[かざ]った。|Sie schmückte die Wand mit Bildern.|Verb
手帳|手帳[てちょう]|Notizbuch, Taschenkalender|そろそろ 新[あたら]しい 手帳[てちょう]を 用意[ようい]する 時期[じき]だ。|Es wird langsam Zeit, einen neuen Taschenkalender zu besorgen.|Nomen
電話帳|電話帳[でんわちょう]|Telefonbuch|電話[でんわ] 帳[ちょう]はどこ？|Wo ist das Telefonbuch?|Nomen
ジャガイモ|ジャガイモ|Kartoffel|ジャガイモはいつ 日本[にほん]に 伝[つた]えられたのですか。|Wann wurde die Kartoffel in Japan eingeführt?|Nomen
牛乳|牛乳[ぎゅうにゅう]|Milch|牛乳[ぎゅうにゅう]は 私[わたし]たちを 強[つよ]くしてくれます。|Milch macht uns stark.|Nomen
玄関|玄関[げんかん]|Hauseingang, Flur|だれか 玄関[げんかん]に 来[き]てるよ。|Da ist jemand an der Tür.|Nomen
眼鏡|眼鏡[めがね]|Brille|彼[かれ]は 眼鏡[めがね]をかけていた。|Er trug eine Brille.|Nomen
眠い|眠[ねむ]い|müde, schläfrig|今日[きょう]もとても 眠[ねむ]い。|Ich bin heute auch müde.|Adjektiv
ソファー|ソファー|Sofa|ソファーを 買[か]いたいのですが。|Wir würden gerne ein Sofa kaufen.|Nomen
眠る|眠[ねむ]る|schlafen|もう 少[すこ]し 眠[ねむ]りたい。|Ich möchte noch ein bisschen schlafen.|Verb
封筒|封筒[ふうとう]|Briefumschlag|封筒[ふうとう]が 必要[ひつよう]だ。|Ich brauche einen Briefumschlag.|Nomen
出掛ける|出掛[でか]ける|ausgehen, weggehen|私[わたし]は 一日中[いちにちじゅう] 出掛[でか]けていた。|Ich war einen ganzen Tag außer Haus.|Verb
掛かる|掛[か]かる|hängen; dauern, kosten|効果[こうか]が 表[あらわ]れるまで 少[すこ]し 時間[じかん]が 掛[か]かります。|Es dauert etwas, bis sich die Wirkung bemerkbar macht.|Verb
たばこ|たばこ|Tabak, Zigarette|たばこを 止[と]めることができればなあ。|Ich wünschte, ich könnte mit dem Rauchen aufhören.|Nomen
掛け算|掛[か]け 算[ざん]|Multiplikation|子供[こども]たちは 掛[か]け 算[ざん]を 暗記[あんき]している。|Die Kinder lernen das Einmaleins auswendig.|Nomen (mit する)
拍手|拍手[はくしゅ]|Applaus, Händeklatschen|私[わたし]たちは 拍手[はくしゅ]した。|Wir klatschten in die Hände.|Nomen (mit する)
掃除|掃除[そうじ]|Putzen, Saubermachen|私[わたし]は 掃除[そうじ]や 洗濯[せんたく]をするのが 嫌[いや]です。|Ich hasse es, sauberzumachen und Wäsche zu waschen.|Nomen (mit する)
掃く|掃[は]く|fegen, kehren|お 前[まえ]は 床[ゆか]を 掃[は]きさえすればよい。|Du musst nichts weiter tun, als den Boden zu fegen.|Verb
ちょうど|ちょうど|genau, gerade|ちょうど 今[いま]は 忙[いそが]しい。|Ich bin gerade beschäftigt.|Adverb
掃除機|掃除機[そうじき]|Staubsauger|掃除[そうじ] 機[き]を 貸[か]してもらえますか。|Darf ich den Staubsauger benutzen?|Nomen
握る|握[にぎ]る|greifen, festhalten; (Sushi) formen|どうして 私[わたし]の 手[て]を 握[にぎ]っているの？|Warum hältst du meine Hände?|Verb
握手|握手[あくしゅ]|Händedruck|握手[あくしゅ]しようぜ！|Reichen wir uns die Hände!|Nomen (mit する)
迎える|迎[むか]える|abholen, empfangen, begrüßen|駅[えき]に 迎[むか]えに 来[き]てくれませんか。|Kannst du mich vom Bahnhof abholen?|Verb
ちょっと|ちょっと|ein bisschen, einen Moment|もうちょっと 詳[くわ]しく 聞[き]かせて。|Erzähl mir ein bisschen mehr darüber.|Adverb
お巡りさん|お 巡[まわ]りさん|Polizist(in) (freundlich)|道[みち]に 迷[まよ]ったらお 巡[まわ]りさんに 尋[たず]ねなさい。|Falls du dich verirrst, frag einen Polizisten!|Nomen
幾つ|幾[いく]つ|wie viele; wie alt|空[そら]には 幾[いく]つも 星[ほし]が 見[み]えた。|Viele Sterne waren am Himmel zu sehen.|Nomen
幾ら|幾[いく]ら|wie viel (Preis)|急行[きゅうこう]の 料金[りょうきん]は 幾[いく]らですか。|Wie viel kostet ein Ticket für den Expresszug?|Nomen
冗談|冗談[じょうだん]|Scherz, Witz|冗談[じょうだん]のつもりで 言[い]ったんです。|Das sollte ein Witz sein.|Nomen
つく|つく|an sein, eingeschaltet sein|僕[ぼく]がついてるからね。|Ich werde immer für dich dasein.|Verb
穴|穴[あな]|Loch|これに 穴[あな]が 開[ひら]いています。|Das hat ein Loch.|Nomen
寂しい|寂[さび]しい|einsam, traurig|私[わたし]はとても 寂[さび]しい。|Ich bin sehr einsam.|Adjektiv
丁寧|丁寧[ていねい]|höflich, sorgfältig|彼女[かのじょ]は 私[わたし]に 丁寧[ていねい]に 頭[あたま]を 下[さ]げた。|Sie verbeugte sich höflich vor mir.|な-Adjektiv
可哀相|可哀相[かわいそう]|bedauernswert, arm|雨[あめ]の 中[なか]で 待[ま]っている 犬[いぬ]が 可哀相[かわいそう]です。|Der Hund, der im Regen wartet, tut mir leid.|な-Adjektiv
てんぷら|てんぷら|Tempura (frittierte Speisen im Teigmantel)|天[てん]ぷらの 作[つく]りかたを 本[ほん]で 読[よ]みました。|Ich las in einem Buch, wie man Tempura kocht.|Nomen
怪我|怪我[けが]|Verletzung|彼[かれ]は 交通事故[こうつうじこ]で 怪我[けが]をした。|Er wurde bei einem Verkehrsunfall verletzt.|Nomen (mit する)
我慢|我慢[がまん]|Geduld, Aushalten|私[わたし]の 我慢[がまん]も 限界[げんかい]だ。|Ich bin am Ende meiner Geduld.|Nomen (mit する)
幼稚園|幼稚園[ようちえん]|Kindergarten|僕[ぼく]の 妹[いもうと]は 幼稚[ようち] 園[えん]に 通[かよ]っている。|Meine kleine Schwester geht in den Kindergarten.|Nomen
隠れる|隠[かく]れる|sich verstecken, verschwinden|ドアのところに 隠[かく]れて。|Versteck dich hinter der Tür!|Verb
とんとん|とんとん|klopf-klopf (leichtes Klopfen)|彼女[かのじょ]は 指[ゆび]でテーブルをとんとんたたいた。|Sie trommelte mit den Fingern auf den Tisch.|Adverb
日陰|日陰[ひかげ]|Schatten (schattiger Platz)|日陰[ひかげ]で 一休[ひとやす]みしよう。|Ruhen wir uns im Schatten etwas aus!|Nomen
随分|随分[ずいぶん]|ziemlich, außerordentlich|今日[きょう]は 随分[ずいぶん] 気持[きも]ちのいい 天気[てんき]だ。|Heute ist das Wetter wirklich angenehm.|Adverb
頑張る|頑張[がんば]る|sich anstrengen, durchhalten|うちの 子[こ]、 早起[はやお]きしようと 頑張[がんば]ってるの。|Meine Kinder bemühen sich sehr, früh aufzustehen.|Verb
頃|頃[ころ]|Zeit (ungefähr), um … herum|彼[かれ]は 昼[ひる] 頃[ころ]まで 姿[すがた]を 見[み]せなかった。|Erst um die Mittagszeit herum ließ er sich blicken.|Nomen
にんじん|にんじん|Karotte|ウサギはニンジンが 好[す]きなんですよ。|Kaninchen mögen Karotten.|Nomen
この頃|この 頃[ごろ]|in letzter Zeit, heutzutage|この 頃[ごろ]の 子[こ]は、 学校[がっこう]で 水泳[すいえい]を 習[なら]います。|Heutzutage lernen die Kinder in der Schule schwimmen.|Nomen
消防署|消防署[しょうぼうしょ]|Feuerwache|消防[しょうぼう] 署[しょ]は 警察署[けいさつしょ]の 隣[となり]にあります。|Die Feuerwache ist neben dem Polizeirevier.|Nomen
尋ねる|尋[たず]ねる|fragen, sich erkundigen|お 尋[たず]ねしたいことがあります。|Ich hätte eine Frage.|Verb
缶詰|缶詰[かんづめ]|Konserve, Dosennahrung|彼[かれ]は 缶詰[かんづめ]をあけているうちに 指[ゆび]を 切[き]った。|Er hat sich beim Öffnen einer Konservendose in den Finger geschnitten.|Nomen
ぬるい|ぬるい|lauwarm|ぬるいコーヒーは、 好[す]きじゃないんだ。|Ich mag keinen lauwarmen Kaffee.|Adjektiv
缶|缶[かん]|Dose, Büchse|缶[かん]を 開[あ]けてもいいですか。|Ist es in Ordnung, wenn ich eine Dose öffne?|Nomen
腐る|腐[くさ]る|verfaulen, verderben|何[なに]か 腐[くさ]った 臭[くさ]いがします。|Irgendetwas riecht hier verdorben.|Verb
豆腐|豆腐[とうふ]|Tofu|豆腐[とうふ]はお 酒[さけ]のいいつまみになります。|Tofu passt gut zu Sake.|Nomen
床|床[ゆか]|Fußboden|彼[かれ]は 床[ゆか]に 座[すわ]っていた。|Er saß auf dem Fußboden.|Nomen
パーセント|パーセント|Prozent|この 組織[そしき]は 百[ひゃく]パーセント 寄付[きふ]に 頼[たよ]っている。|Diese Organisation ist zu hundert Prozent auf Spenden angewiesen.|Nomen
床屋|床屋[とこや]|Friseur (für Herren)|昨日[きのう] 床屋[とこや]で 髪[かみ]を 切[き]ってもらったんだ。|Ich habe mir gestern beim Frisör die Haare schneiden lassen.|Nomen
畳|畳[たたみ]|Tatami (Reisstrohmatte)|彼[かれ]は 畳[たたみ]の 上[うえ]に 大[だい]の 字[じ]になった。|Er hat auf der Tatami-Matte alle viere von sich gestreckt.|Nomen
畳む|畳[たた]む|falten, zusammenlegen|彼女[かのじょ]はハンカチをきちんと 畳[たた]んだ。|Sie faltete ordentlich ihr Taschentuch.|Verb
干す|干[ほ]す|trocknen, zum Trocknen aufhängen|トムが 洗濯物[せんたくもの]を 干[ほ]すの 手伝[てつだ]ってあげて。|Bitte hilf Tom, die Wäsche aufzuhängen!|Verb
ひざ|ひざ|Knie|彼[かれ]は 腰[こし]からひざにかけてびしょ 濡[ぬ]れになった。|Er benässte sich von der Hüfte bis zu den Knien.|Nomen
帽子|帽子[ぼうし]|Hut, Mütze|二人[ふたり]とも 帽子[ぼうし]をかぶっている。|Beide haben Mützen auf.|Nomen
是非|是非[ぜひ]|unbedingt, auf jeden Fall|是非[ぜひ]ともそうしてください。|Das solltest du unbedingt so tun.|Adverb
敬語|敬語[けいご]|Höflichkeitssprache (Keigo)|敬語[けいご]というのは 日本語[にほんご]の 一番[いちばん] 難[むずか]しいところだと 思[おも]います。|Die höfliche Sprache ist, denke ich, im Japanischen das Schwierigste.|Nomen
尊敬|尊敬[そんけい]|Respekt, Achtung|私[わたし] 達[たち]は 先生[せんせい]を 尊敬[そんけい]しています。|Wir haben Achtung vor unserem Lehrer.|Nomen (mit する)
ひじ|ひじ|Ellbogen|彼女[かのじょ]は 両膝[りょうひざ]に 肘[ひじ]をのせた。|Sie stützte ihre Ellbogen auf ihren Knien auf.|Nomen
敷く|敷[し]く|auslegen, ausbreiten|床[ゆか]にカーペットを 敷[し]いた。|Sie legten Teppich auf dem Fußboden aus.|Verb
雷|雷[かみなり]|Donner, Gewitter|遠[とお]くで 雷[かみなり]が 鳴[な]ったのが 聞[き]こえた。|Ich hörte ein fernes Donnern.|Nomen
零|零[れい]|Null|彼女[かのじょ]さ、 夜中[よなか]の 零[れい] 時[じ]に 電話[でんわ]してきたんだよ。|Sie hat mich um null Uhr mitten in der Nacht angerufen.|Nomen
仕舞う|仕舞[しま]う|wegräumen, verstauen|彼女[かのじょ]はタオルをきれいにたたみ、それを 物入[ものい]れに 仕舞[しま]った。|Sie faltete die Handtücher ordentlich und räumte sie in den Schrank.|Verb
ひも|ひも|Schnur, Band, Schnürsenkel|彼女[かのじょ]は 財布[さいふ]のひもをしっかり 締[し]めていた。|Sie hielt den Geldbeutel fest verschnürt.|Nomen
踊る|踊[おど]る|tanzen|踊[おど]るのが 大[だい]っ 嫌[きら]い。|Ich hasse es zu tanzen.|Verb
踊り|踊[おど]り|Tanz|私[わたし]の 彼女[かのじょ]は 踊[おど]りがうまい。|Meine Freundin kann gut tanzen.|Nomen
踏む|踏[ふ]む|treten auf|なんか 変[へん]なもの 踏[ふ]んじゃった。|Ich bin auf irgendwas Komisches getreten.|Verb
踏切|踏切[ふみきり]|Bahnübergang|警報機[けいほうき]が 鳴[な]っているときは 絶対[ぜったい]に 踏切[ふみきり]を 渡[わた]らないでください。|Überqueren Sie den Bahnübergang bitte nicht, wenn das Warnsignal läutet!|Nomen
まく|まく|streuen, säen|庭[にわ]に 花[はな]の 種[たね]をまきました。|Ich habe im Garten Blumensamen gesät.|Verb
蹴る|蹴[け]る|treten, kicken|彼女[かのじょ]はドアを 蹴[け]った。|Sie hat gegen die Tür getreten.|Verb
食堂|食堂[しょくどう]|Speisesaal, Kantine, Lokal|食堂[しょくどう]がまだ 開[ひら]いてるかどうか、 誰[だれ]か 知[し]ってる？|Weiß einer, ob die Kantine noch offen hat?|Nomen
猫|猫[ねこ]|Katze|猫[ねこ]はテーブルの 上[うえ]に 座[すわ]っている。|Die Katze sitzt auf dem Tisch.|Nomen
文章|文章[ぶんしょう]|Text, Satz, Schreibstil|トムは 文章[ぶんしょう]がうまい。|Tom kann gut schreiben.|Nomen
やかん|やかん|Wasserkessel|薬缶[やかん]のお 湯[ゆ]が 沸[わ]いている。|Der Teekessel kocht.|Nomen
丈夫|丈夫[じょうぶ]|robust, kräftig, haltbar|彼[かれ]は 丈夫[じょうぶ]で 健康[けんこう]そうに 見[み]える。|Er scheint kerngesund zu sein.|な-Adjektiv
又|又[また]|wieder; außerdem|必[かなら]ず 又[また]の 機会[きかい]が 来[く]る。|Es gibt immer ein nächstes Mal.|Adverb
お祖父さん|お 祖父[じい]さん|Großvater|お 祖父[じい]さんがかなり 老衰[ろうすい]している。|Großvater ist ziemlich altersschwach.|Nomen
お祖母さん|お 祖母[ばあ]さん|Großmutter|お 祖母[ばあ]さんに 何[なに]かがいるかどうかと 聞[き]くために 電話[でんわ]をします。|Ich rufe meine Großmutter an, um zu fragen, ob sie etwas braucht.|Nomen
ようこそ|ようこそ|willkommen|サンフランシスコへようこそ。|Willkommen in San Francisco!|Adverb
祖父|祖父[そふ]|(mein) Großvater|彼[かれ]は 祖父[そふ]を 怖[こわ]がっている。|Er hat Angst vor seinem Großvater.|Nomen
祖母|祖母[そぼ]|(meine) Großmutter|祖母[そぼ]もすっかり 歳[とし]をとった。|Meine Großmutter ist sehr alt geworden.|Nomen
邪魔|邪魔[じゃま]|Störung, Hindernis, im Weg|邪魔[じゃま]して 悪[わる]かったね。|Es tut mir leid, dass ich euch gestört habe.|な-Adjektiv
風邪薬|風邪薬[かぜぐすり]|Erkältungsmittel|風邪薬[かぜぐすり]で 駄目[だめ]なら 医者[いしゃ]に 行[い]きなよ。|Wenn das Erkältungsmittel nicht hilft, geh zum Arzt.|Nomen
ウェーター|ウェーター|Kellner|ウェーターにメニューを 頼[たの]みました。|Ich habe den Kellner um die Speisekarte gebeten.|Nomen
風呂屋|風呂屋[ふろや]|öffentliches Badehaus|火事[かじ]は 風呂屋[ふろや]からでた。|Das Feuer brach im Badehaus aus.|Nomen
風呂|風呂[ふろ]|Bad, Badewanne|お 風呂[ふろ]の 用意[ようい]ができました。|Ihr Bad steht bereit.|Nomen
昭和|昭和[しょうわ]|Shōwa-Ära (1926–1989)|僕[ぼく]は 昭和[しょうわ] 生[う]まれです。|Ich bin in der Shōwa-Zeit geboren.|Nomen
紫|紫[むらさき]|Violett, Lila|青[あお]と 赤[あか]を 混[ま]ぜると 紫[むらさき]になる。|Wenn man Blau und Rot mischt, erhält man Violett.|Nomen
そんなに|そんなに|so sehr, derart (wie das)|そんなに 変[か]わった？|Habe ich mich so sehr verändert?|Adverb
紅茶|紅茶[こうちゃ]|Schwarztee|これはなかなかおいしい 紅茶[こうちゃ]だ。|Dies ist ein sehr guter Schwarztee.|Nomen
梅雨|梅雨[つゆ]|Regenzeit (Frühsommer)|梅雨[つゆ]に 入[はい]りましたね。|Die Regenzeit hat angefangen.|Nomen
桃|桃[もも]|Pfirsich|欲[ほ]しいだけ 桃[もも]を 持[も]っていって。|Nimm nur so viele Pfirsiche mit, wie du magst!|Nomen
遭う|遭[あ]う|geraten in, erleben (Unangenehmes)|彼[かれ]は 危険[きけん]な 目[め]に 遭[あ]った。|Er geriet in eine gefährliche Lage.|Verb
枕|枕[まくら]|Kopfkissen|枕[まくら]を 下[くだ]さい。|Ein Kissen, bitte.|Nomen
嘘|嘘[うそ]|Lüge|彼女[かのじょ]の 話[はなし]は 嘘[うそ]だと 思[おも]いますか。|Glauben Sie, ihre Geschichte sei eine Lüge?|Nomen
遠慮|遠慮[えんりょ]|Zurückhaltung; dankend verzichten|おタバコはご 遠慮[えんりょ] 下[くだ]さい。|Bitte nicht rauchen!|Nomen (mit する)
叱る|叱[しか]る|schimpfen, tadeln|彼[かれ]は 母親[ははおや]に 叱[しか]られた。|Er wurde von seiner Mutter ausgeschimpft.|Verb
傘|傘[かさ]|Regenschirm|傘[かさ]を 無[な]くしてしまった。|Ich habe meinen Regenschirm verloren.|Nomen
お嬢さん|お 嬢[じょう]さん|junge Dame; (Ihre) Tochter|お 嬢[じょう]さん、 背[せ]が 高[たか]いですね。|Ihre Tochter ist aber groß.|Nomen
年賀状|年賀状[ねんがじょう]|Neujahrskarte|友達[ともだち]に 年賀[ねんが] 状[じょう]を 出[だ]すのを 忘[わす]れてた。|Ich habe vergessen, meinen Freunden eine Neujahrskarte zu schicken.|Nomen
賑やか|賑[にぎ]やか|belebt, lebhaft|今日[きょう]の 商店街[しょうてんがい]はかなり 賑[にぎ]やかな 感[かん]じだね。|In der Einkaufsstraße ist heute ganz schön viel los.|な-Adjektiv
蚊|蚊[か]|Stechmücke|蚊[か]に 噛[か]まれたところが 痒[かゆ]い。|Der Mückenstich juckt.|Nomen
拭く|拭[ふ]く|abwischen, abtrocknen|トムはバスタオルで 体[からだ]を 拭[ふ]いた。|Tom trocknete sich mit dem Badetuch ab.|Verb
挨拶|挨拶[あいさつ]|Gruß, Begrüßung|彼[かれ]は 挨拶[あいさつ]の 仕方[しかた]も 知[し]らない。|Er weiß nicht einmal, wie man Leute richtig begrüßt.|Nomen (mit する)
伴う|伴[ともな]う|begleiten, einhergehen mit|権力[けんりょく]には 責任[せきにん]が 伴[ともな]う。|Macht trägt Verantwortung mit sich.|Verb
巻く|巻[ま]く|wickeln, aufrollen|メアリーが 頭[あたま]にタオルを 巻[ま]いてシャワーから 出[で]てきました。|Maria kam mit um den Kopf gewickeltem Handtuch aus der Dusche.|Verb
靴|靴[くつ]|Schuhe|靴[くつ]を 脱[ぬ]いでから 家[いえ]には 入[はい]ってください。|Bitte vor dem Betreten des Hauses die Schuhe ausziehen!|Nomen
靴下|靴下[くつした]|Socken, Strümpfe|靴下[くつした]に 穴[あな]が 開[あ]いているよ。|Du hast ein Loch in deiner Socke.|Nomen
磨く|磨[みが]く|putzen, polieren|毎日[まいにち] 歯[は]は 磨[みが]いてます。|Ich putze mir jeden Tag die Zähne.|Verb
歯磨き|歯磨[はみが]き|Zähneputzen; Zahnpasta|トムは 歯磨[はみが]きをしている。|Tom putzt sich die Zähne.|Nomen
廊下|廊下[ろうか]|Flur, Korridor|廊下[ろうか]は 滑[すべ]りやすいので、 足元[あしもと]に 気[き]を 付[つ]けなさい。|Pass auf! Auf dem Flur kann man leicht ausrutschen.|Nomen
瓶|瓶[びん]|Flasche|使用[しよう]する 前[まえ]に 瓶[びん]を 振[ふ]ってください。|Flasche vor Gebrauch schütteln.|Nomen
褒める|褒[ほ]める|loben|君[きみ]をいくら 褒[ほ]めても 褒[ほ]め 切[き]れない。|Ich kann dich nicht genug loben.|Verb
元旦|元旦[がんたん]|Neujahrstag (1. Januar)|一[いち] 年[ねん]の 計[けい]は 元旦[がんたん]にあり。|Der Plan für das ganze Jahr entsteht am Neujahrstag.|Nomen
袖|袖[そで]|Ärmel|右[みぎ]の 袖[そで]をあげてください。|Bitte krempeln Sie Ihren rechten Ärmel hoch.|Nomen
長袖|長袖[ながそで]|lange Ärmel, langärmlig|これらは 長袖[ながそで]です。|Die hier haben lange Ärmel.|Nomen
半袖|半袖[はんそで]|kurze Ärmel, kurzärmlig|半袖[はんそで]で 寒[さむ]くないんですか？|Ist Ihnen mit den kurzen Ärmeln nicht zu kalt?|Nomen
馬鹿|馬鹿[ばか]|Dummkopf; dumm|私[わたし]はけんかするような 馬鹿[ばか]じゃない。|Ich bin nicht so dumm zu streiten.|な-Adjektiv
凄い|凄[すご]い|unglaublich, gewaltig, toll|アムステルダムって 凄[すご]いね！|Amsterdam ist schon ’ne Wucht!|Adjektiv
剃る|剃[そ]る|rasieren|今朝[けさ]、ひげ 剃[そ]った？|Hast du dich heute morgen rasiert?|Verb
喧嘩|喧嘩[けんか]|Streit, Schlägerei|喧嘩[けんか]はやめてください。|Hört auf zu streiten, bitte!|Nomen (mit する)
叩く|叩[たた]く|schlagen, klopfen|あんたが 叩[たた]いた 腕[うで]のとこ、 超[ちょう] 痛[いた]いんだけど。|Ich hab große Schmerzen an dem Arm, an dem du mich geschlagen hast.|Verb
噛む|噛[か]む|beißen, kauen|爪[つめ]を 噛[か]むのはよしなさい。|Hör auf, an deinen Nägeln zu kauen.|Verb
味噌汁|味噌汁[みそしる]|Misosuppe|ご 飯[はん]と 味噌[みそ] 汁[しる]は 合[あ]う。|Reis und Misosuppe passen gut zusammen.|Nomen
姪|姪[めい]|Nichte|メアリーは 私[わたし]の 姪[めい]です。|Mary ist meine Nichte.|Nomen
苺|苺[いちご]|Erdbeere|苺[いちご]は 今[いま]がシーズンだ。|Er ist gerade Erdbeerzeit.|Nomen
茄子|茄子[なす]|Aubergine|今日[きょう]のお 昼[ひる]は、 茄子[なす]なんだ。|Heute Mittag gibt es Aubergine.|Nomen
逢う|逢[あ]う|treffen, begegnen|本当[ほんとう]に 逢[あ]いたいの。|Ich möchte dich wirklich treffen.|Verb
椅子|椅子[いす]|Stuhl|こちらの 椅子[いす]にお 掛[か]けください。|Setz dich bitte auf diesen Stuhl.|Nomen
痩せる|痩[や]せる|abnehmen, dünn werden|彼女[かのじょ]はとても 痩[や]せたがっている。|Sie will unbedingt abnehmen.|Verb
箸|箸[はし]|Essstäbchen|箸[はし]の 正[ただ]しい 持[も]ち 方[かた]って 知[し]ってる？|Weißt du, wie man Essstäbchen richtig hält?|Nomen
糊|糊[のり]|Kleber, Leim|彼[かれ]はメモをドアに 糊[のり]で 貼[は]った。|Er klebte die Notiz mit Kleber an die Tür.|Nomen
醤油|醤油[しょうゆ]|Sojasoße|トム、そこの 醤油[しょうゆ] 取[と]って。|Tom, reich mir mal die Sojasauce dort!|Nomen
鋏|鋏[はさみ]|Schere|美容師[びようし]にとって 鋏[はさみ]は、 大切[たいせつ]な 仕事[しごと] 道具[どうぐ]です。|Für einen Friseur ist die Schere ein wichtiges Arbeitswerkzeug.|Nomen
鞄|鞄[かばん]|Tasche, Aktentasche|これは 私[わたし]の 鞄[かばん]ではない。|Das ist nicht meine Tasche.|Nomen
顎|顎[あご]|Kiefer, Kinn|笑[わら]いすぎて、 顎[あご]がはずれそうになった。|Ich lachte so heftig, dass ich mir fast den Kiefer ausrenkte.|Nomen
飴|飴[あめ]|Bonbon|飴[あめ]がほしい。|Ich will ein Bonbon.|Nomen
石鹸|石鹸[せっけん]|Seife|石鹸[せっけん]がありません。|Es ist keine Seife da.|Nomen
一時|一時[いちじ]|vorübergehend, eine Zeit lang|私[わたし]は 八[はち] 時[じ]から 十[じゅう] 一[いち] 時[じ]まで 勉強[べんきょう]します。|Ich lerne von acht bis elf.|Adverb
月日|月日[がっぴ]|Datum; Zeit (Tage und Monate)|生年月日[せいねんがっぴ]を 教[おし]えてくださいますか？|Würden Sie mir bitte Ihr Geburtsdatum nennen?|Nomen
金もうけ|金[かね]もうけ|Geldverdienen|人生[じんせい]の 目的[もくてき]は 金[かね]もうけをすることだけではない。|Der Sinn des Lebens besteht nicht nur darin, Geld zu verdienen.|Nomen (mit する)
先に|先[さき]に|vorher, zuerst, voraus|用[よう]がありますので 先[さき]に 行[い]ってください。|Bitte gehe voraus, da ich noch etwas zu tun habe.|Adverb
先日|先日[せんじつ]|neulich, vor einigen Tagen|私[わたし] 達[たち]は 先日[せんじつ] 英語[えいご]の 先生[せんせい]をたずねた。|Wir haben neulich unseren Englischlehrer besucht.|Nomen
今日|今日[こんにち]|heute, heutzutage|ぼくは 今日[こんにち] 学校[がっこう]で 笑[わら]われてしまった。|Ich wurde heute in der Schule ausgelacht.|Nomen
今ごろ|今[いま]ごろ|um diese Zeit, jetzt (erst)|昨日[きのう]の 今[いま]ごろは 何[なに]してた？|Was hast du gestern um diese Zeit gemacht?|Nomen
ケース|ケース|Hülle, Kasten; Fall|彼[かれ]はバナナケースを 買[か]った。|Er hat eine Bananendose gekauft.|Nomen
今にも|今[いま]にも|jeden Augenblick|それは 今[いま]にも 起[お]こるかもしれない。|Das kann jeden Moment geschehen.|Adverb
今に|今[いま]に|bald, eines Tages|今[いま]にも 雨[あめ]が 降[ふ]りそうだ。|Bald wird es regnen.|Adverb
行き来|行[い]き 来[き]|Kommen und Gehen, Verkehr miteinander|バスはほとんど 空席[くうせき]のまま 行[い]き 来[き]していた。|Die Busse fuhren fast leer hin und her.|Nomen (mit する)
行|行[ぎょう]|Zeile|上[うえ]から 三[み]つ 目[め]の 行[ぎょう]を 読[よ]んでください。|Lesen Sie bitte die dritte Zeile von oben.|Nomen
帰す|帰[かえ]す|nach Hause schicken|先生[せんせい]は 生徒[せいと]を 早[はや]く 家[いえ]に 帰[かえ]しました。|Der Lehrer schickte die Schüler früh nach Hause.|Verb
大いに|大[おお]いに|sehr, tüchtig|彼女[かのじょ]は 英語[えいご]に 大[おお]いに 興味[きょうみ]がある。|Sie interessiert sich sehr für Englisch.|Adverb
大げさ|大[おお]げさ|übertrieben|小[ちい]さいことを 大[おお]げさに 騒[さわ]ぐ。|Er macht aus einer Mücke einen Elefanten.|Adjektiv
イメージ|イメージ|Image, Vorstellung|イメージできる？|Kannst du dir das vorstellen?|Nomen (mit する)
大水|大水[おおみず]|Hochwasser, Überschwemmung|大水[おおみず]のため 人々[ひとびと]は 立[た]ち 退[の]いた。|Die Menschen wurden wegen des Hochwassers evakuiert.|Nomen
水中|水中[すいちゅう]|im Wasser, unter Wasser|魚[さかな]は 水中[すいちゅう]でなければ 生[い]きられない。|Fische können außerhalb des Wassers nicht leben.|Nomen
小|小[しょう]|klein, Größe S|君[きみ]、 小[しょう] 学校[がっこう]に 行[い]ってるの？|Gehst du zur Grundschule?|Nomen
少なくとも|少[すく]なくとも|mindestens, wenigstens|少[すく]なくとも 仕事[しごと]は 済[す]んだよ。|Wenigstens ist die Arbeit getan.|Adverb
少々|少々[しょうしょう]|ein wenig, Kleinigkeit|少々[しょうしょう]お 待[ま]ち 下[くだ]さい。|Warten Sie bitte einen Moment!|Nomen
上がる|上[あ]がる|fertig werden, abgeschlossen sein|物価[ぶっか]は 上[あ]がり 続[つづ]けるだろう。|Die Preise werden weiter steigen.|
上がる|上[あ]がる|essen, trinken (respektvoll)|靴[くつ]を 脱[ぬ]いでから 家[いえ]に 上[あ]がってください。|Bitte vor dem Betreten des Hauses die Schuhe ausziehen!|Verb
せい|せい|Schuld, Ursache|ごめんなさい。 私[わたし]のせいです。|Entschuldigung! Es ist alles meine Schuld.|Nomen
上|上[じょう]|das Obere, Beste (Qualitätsstufe)|それは 道徳[どうとく] 上[じょう]の 問題[もんだい]だ。|Das ist eine Frage der Moral.|Nomen
上|上[かみ]|die Obrigkeit, die da oben|お 上[かみ]の 決[き]めたことには 逆[さか]らえません。|Dem, was die Obrigkeit beschlossen hat, kann man sich nicht widersetzen.|Nomen
下さる|下[くだ]さる|geben (respektvoll)|お 茶[ちゃ]をもう 少[すこ]し 下[くだ]さい。|Geben Sie mir bitte noch etwas Tee.|Verb
下水|下水[げすい]|Abwasser, Kanalisation|下水[げすい]が 完全[かんぜん]に 詰[つ]まっている。|Die Abwasserleitung ist verstopft.|Nomen
上下|上下[じょうげ]|Oberteil und Unterteil|彼[かれ]は 首[くび]を 上下[じょうげ]に 振[ふ]った。|Er schüttelte seinen Kopf auf und ab.|Nomen (mit する)
上下|上下[うえした]|oben und unten|この 絵[え]は 上下[うえした]が 逆[ぎゃく]です。|Bei diesem Bild sind oben und unten vertauscht.|Nomen
下|下[げ]|unten, untere Stufe|この 小説[しょうせつ]は 上[うえ]と 下[げ]に 分[わ]かれています。|Dieser Roman ist in einen ersten und einen zweiten Band geteilt.|Nomen
左右|左右[さゆう]|links und rechts|彼[かれ]は 左右[さゆう]を 見[み]た。|Er sah nach links und rechts.|Nomen
いつも|いつも|immer; wie gewöhnlich|朝[あさ]ごはんはいつもパンを 食[た]べます。|Ich esse zum Frühstück immer Brot.|Nomen
四方|四方[しほう]|alle Richtungen, ringsum|彼[かれ]らは 四方[しほう]へ 逃[に]げた。|Sie flohen in alle Richtungen.|Nomen
方々|方々[かたがた]|Personen, Herrschaften (höflich)|多[おお]くの 方々[かたがた]に 届[とど]けることができた。|Ich konnte es vielen Menschen zukommen lassen.|Nomen
大人|大人[おとな]|Erwachsener, erwachsen|彼女[かのじょ]は 大人[おとな]になったら 有名[ゆうめい]な 医者[いしゃ]になった。|Als Erwachsene wurde sie zu einer berühmten Ärztin.|Adjektiv
外出|外出[がいしゅつ]|Ausgehen, außer Haus|雪[ゆき]のため 私[わたし]は 外出[がいしゅつ]できなかった。|Wegen des Schnees konnte ich nicht aus dem Haus.|Nomen (mit する)
内|内[うち]|das Innere, innerhalb|明[あか]るい 内[うち]にテントを 張[は]ってしまおう。|Bauen wir das Zelt auf, solange es noch hell ist.|Nomen
週休|週休[しゅうきゅう]|freie Tage pro Woche|私[わたし]たちは 週休[しゅうきゅう] 二日[ふつか] 制[せい] 確立[かくりつ]を 目指[めざ]している。|Wir streben die Einführung der Fünftagewoche an.|Nomen
一体|一体[いったい]|überhaupt, um alles in der Welt|これは 一体[いったい] 何[なん]なんだ？|Was in aller Welt ist das?|Adverb
きっかけ|きっかけ|Anlass, Auslöser|ヴァイオリンを 始[はじ]めたきっかけは 何[なん]ですか？|Was war der Anlass dafür, dass du angefangen hast, Geige zu spielen?|Nomen
出力|出力[しゅつりょく]|Ausgabe, Leistung (technisch)|ディスクと 出力[しゅつりょく] 紙[かみ]をかばんに 詰[つ]めて 下[くだ]さい。|Bitte packen Sie die Disketten und die Ausdrucke in die Tasche.|Nomen (mit する)
火力|火力[かりょく]|Heizkraft, Hitze (der Flamme)|火力[かりょく]とお 鍋[なべ]と 貝[かい]の 種類[しゅるい]によるわ。|Das hängt von der Hitze, dem Topf und der Muschelart ab.|Nomen
水力|水力[すいりょく]|Wasserkraft|この 国[くに]は 水力[すいりょく]で 電気[でんき]を 作[つく]っています。|Dieses Land erzeugt Strom aus Wasserkraft.|Nomen
口げんか|口[くち]げんか|Wortgefecht, Streit|彼[かれ]はいつも 妻[つま]と 口[くち]げんかをする。|Er streitet sich ständig mit seiner Frau.|Nomen (mit する)
大手|大手[おおて]|Großunternehmen, führende Firma|大手[おおて] 銀行[ぎんこう]の 大半[たいはん]がこの 制度[せいど]を 導入[どうにゅう]している。|Die Mehrheit der Großbanken führt dieses System ein.|Nomen
足下|足下[あしもと]|zu Füßen, der Boden unter den Füßen|暗[くら]いので 足下[あしもと]に 気[き]をつけてください。|Es ist dunkel, achten Sie bitte darauf, wohin Sie treten.|Nomen
火山|火山[かざん]|Vulkan|火山[かざん]を 見[み]たいよ。|Ich will einen Vulkan sehen.|Nomen
すっかり|すっかり|ganz, völlig|トムはすっかり 疲[つか]れきっていた。|Tom war völlig erschöpft.|Adverb
小川|小川[おがわ]|Bach|小川[おがわ] 夫人[ふじん]はたいへんテニスが 上手[じょうず]です。|Frau Ogawa spielt ausgesprochen gut Tennis.|Nomen
空中|空中[くうちゅう]|in der Luft|ボールは 空中[くうちゅう] 高[たか]く 跳[は]ね 上[あ]がった。|Der Ball sprang hoch in die Luft.|Nomen
空ける|空[あ]ける|leeren, frei machen|彼女[かのじょ]は 風船[ふうせん]に 穴[あな]を 空[あ]けた。|Sie hat ein Loch in den Luftballon gemacht.|Verb
空っぽ|空[から]っぽ|leer|棚[たな]は 空[から]っぽです。|Die Regale sind leer.|な-Adjektiv
空き|空[あ]き|freier Platz, Lücke|トムは 娘[むすめ]の 部屋[へや]でビールの 空[あ]き 缶[かん]を 見[み]つけた。|Tom hat im Zimmer seiner Tochter eine leere Bierdose gefunden.|Nomen
空|空[から]|leer, Leere|この 箱[はこ]は 空[から]です。|Diese Schachtel ist leer.|Nomen
海水|海水[かいすい]|Meerwasser|彼[かれ]らは 海水[かいすい]から 塩[しお]を 取[と]る 計画[けいかく]を 立[た]てた。|Sie entwarfen einen Plan, aus Meerwasser Salz zu gewinnen.|Nomen
海上|海上[かいじょう]|auf See|たくさんの 船[ふね]が 海上[かいじょう]を 走[はし]っている。|Viele Schiffe fahren auf dem Meer.|Nomen
シリーズ|シリーズ|Serie, Reihe|このシリーズの 本[ほん]は 全部[ぜんぶ] 読[よ]みました。|Die Bücher dieser Reihe habe ich alle gelesen.|Nomen
水田|水田[すいでん]|Reisfeld (unter Wasser)|津波[つなみ]が 水田[すいでん]を 押[お]し 流[なが]し、 町[まち]は 浸水[しんすい]しました。|Tsunamis fegten durch Reisfelder und überfluteten die Städte.|Nomen
森林|森林[しんりん]|Wald, Waldgebiet|私[わたし]は 森林[しんりん]の 中[なか]で 道[みち]に 迷[まよ]った。|Ich habe mich im Wald verirrt.|Nomen
男らしい|男[おとこ]らしい|männlich, mannhaft|男[おとこ]らしく 言[い]おうと 思[おも]ったら、どう 言[い]えばいいの？|Wie kann man das maskuliner sagen?|Adjektiv
女らしい|女[おんな]らしい|weiblich, feminin|彼女[かのじょ]はとても 女[おんな]らしい。|Sie ist sehr feminin.|Adjektiv
少女|少女[しょうじょ]|Mädchen|彼[かれ]はかわいい 少女[しょうじょ]を 見[み]た。|Er sah ein hübsches Mädchen.|Nomen
女子|女子[じょし]|Mädchen, Frau|一般[いっぱん]に 男子[だんし]の 方[ほう]が 女子[じょし]より 背[せ]が 高[たか]い。|Jungen sind in der Regel größer als Mädchen.|Nomen
好む|好[この]む|mögen, bevorzugen|猫[ねこ]は 肉[にく]より 魚[さかな]を 好[この]む。|Katzen mögen lieber Fisch als Fleisch.|Verb
エイズ|エイズ|Aids|エイズウイルスの 拡散[かくさん]は 恐[おそ]るべき 速[はや]さで 進[すす]んでいる。|Die Ausbreitung des Aids-Virus schreitet mit erschreckender Geschwindigkeit voran.|Nomen
好み|好[この]み|Geschmack, Vorliebe|人[ひと]の 好[この]みは 異[こと]なる。|Geschmäcker sind verschieden.|Nomen
上達|上達[じょうたつ]|Fortschritt, Verbesserung (im Können)|私[わたし]のテニスは 少[すこ]しも 上達[じょうたつ]していない。|Mein Tennis macht nicht die geringsten Fortschritte.|Nomen (mit する)
一家|一家[いっか]|Familie, Haushalt|彼女[かのじょ]が 一家[いっか]を 支[ささ]えている。|Sie unterstützt die Familie.|Nomen
家出|家出[いえで]|Weglaufen von zu Hause|彼[かれ]は 家出[いえで]をした。|Er lief von zu Hause weg.|Nomen (mit する)
大家|大家[おおや]|Vermieter(in)|大家[おおや]さんは 家賃[やちん]をあげたいそうだ。|Der Vermieter sagte, dass er die Miete erhöhen will.|Nomen
元来|元来[がんらい]|ursprünglich, von Natur aus|彼[かれ]は 元来[がんらい]、 体[からだ]が 強[つよ]くありません。|Er ist von Natur aus körperlich nicht kräftig.|Adverb
元日|元日[がんじつ]|Neujahrstag|元日[がんじつ]は 何[なに]するの？|Was machst du am Neujahrstag?|Nomen
エンジン|エンジン|Motor|僕[ぼく]はエンジンをかけたままにしておいた。|Ich habe den Motor laufen lassen.|Nomen
お中元|お 中元[ちゅうげん]|Sommergeschenk (zur Jahresmitte)|今年[ことし]のお 中元[ちゅうげん]どうする？|Was machen wir dieses Jahr mit den Sommergeschenken?|Nomen
天の川|天[あま]の 川[がわ]|Milchstraße|荒海[あらうみ]や 佐渡[さど]に 横[よこ]たふ 天[あま]の 川[がわ]。|Oh, das raue Meer. Über Sado fließet hin der Fluss des Himmels.|Nomen
気分|気分[きぶん]|Stimmung, Befinden|よく 眠[ねむ]ったらだいぶ 気分[きぶん]がよくなった。|Nachdem ich gut geschlafen hatte, fühlte ich mich viel besser.|Nomen
元気|元気[げんき]|Lebenskraft, Munterkeit|彼女[かのじょ]は 元気[げんき]な 赤[あか]ちゃんを 産[う]みました。|Sie schenkte einem gesunden Kind das Leben.|Nomen
気体|気体[きたい]|Gas (Aggregatzustand)|水[みず]は 温[あたた]められると、 気体[きたい]になる。|Wenn Wasser erhitzt wird, wandelt es sich in Gas um.|Nomen
気力|気力[きりょく]|Willenskraft, Energie|それをする 気力[きりょく]はない。|Ich habe nicht die Kraft dazu.|Nomen
大雨|大雨[おおあめ]|starker Regen|大阪[おおさか]は 大雨[おおあめ]だった。|Es hat in Ōsaka stark geregnet.|Nomen
クラス|クラス|Klasse (Kategorie)|新[あたら]しいクラスはいかがですか。|Wie ist deine neue Klasse?|Nomen
小雨|小雨[こさめ]|Nieselregen|小雨[こさめ]が 降[ふ]り 出[だ]した。|Es hat angefangen zu nieseln.|Nomen
雨天|雨天[うてん]|Regenwetter|雨天[うてん]の 場合[ばあい]にはお 電話[でんわ] 下[くだ]さい。|Rufen Sie mich bitte an, falls es regnet.|Nomen
大雪|大雪[おおゆき]|starker Schneefall|昨年[さくねん]の 今[いま]ごろは 大雪[おおゆき]だった。|Letztes Jahr um diese Zeit lag viel Schnee.|Nomen
青年|青年[せいねん]|junger Mann, Jugendlicher|彼[かれ]はすてきな 青年[せいねん]です。|Er ist ein schöner junger Mann.|Nomen
青空|青空[あおぞら]|blauer Himmel|今日[きょう]は 雲[くも] 一[ひと]つない 青空[あおぞら]だね。|Heute haben wir aber einen wolkenlosen, blauen Himmel!|Nomen
明日|明日[あす]|morgen (förmlich)|明日[あす]は 忙[いそが]しい 日[ひ]になりそうだ。|Morgen scheint viel anzustehen.|Nomen
明ける|明[あ]ける|anbrechen (Tag), zu Ende gehen|やっと 梅雨[つゆ]が 明[あ]けそうね。|Die Regenzeit scheint sich endlich dem Ende zuzuneigen.|Verb
明かり|明[あ]かり|Licht, Beleuchtung|たった 今[いま] 明[あ]かりが 消[き]えた。|Das Licht ist gerade ausgegangen.|Nomen
スピード|スピード|Geschwindigkeit, Tempo|運転手[うんてんしゅ]はスピードを 上[あ]げた。|Der Fahrer erhöhte die Geschwindigkeit.|Nomen
明け方|明[あ]け 方[がた]|Morgengrauen|僕[ぼく]らは 明[あ]け 方[がた]に 起[お]きるために 早[はや]く 寝[ね]た。|Wir gingen früh schlafen, um im Morgengrauen aufzustehen.|Nomen
一昨年|一昨年[いっさくねん]|vorletztes Jahr|一昨[いっさく] 年[ねん]、ボストンに 越[こ]してきたんだ。|Vorletztes Jahr bin ich nach Boston gezogen.|Nomen
一昨日|一昨日[いっさくじつ]|vorgestern|一昨日[いっさくじつ]あなたの 手紙[てがみ]を 受[う]け 取[と]りました。|Ich habe vorgestern deinen Brief bekommen.|Nomen
昨日|昨日[さくじつ]|gestern|昨日[さくじつ]は 一日中[いちにちじゅう] 働[はたら]いていた。|Ich habe gestern den ganzen Tag gearbeitet.|Nomen
向上|向上[こうじょう]|Verbesserung, Steigerung|生活水準[せいかつすいじゅん]の 向上[こうじょう]が 急務[きゅうむ]である。|Es besteht dringender Bedarf an verbesserten Lebensbedingungen.|Nomen (mit する)
一向に|一向[いっこう]に|überhaupt (nicht)|私[わたし]はそれで 一向[いっこう]に 構[かま]いません。|Das macht mir überhaupt nichts aus.|Adverb
開き|開[あ]き|Öffnung; Abstand, Unterschied|この 窓[まど]は 開[あ]きが 悪[わる]いです。|Dieses Fenster lässt sich schlecht öffnen.|Nomen
いかに|いかに|wie, wie sehr|それは、いかにも 彼[かれ]らしい。|Das ist wirklich typisch für ihn.|Adverb
聞かす|聞[き]かす|hören lassen, erzählen, vorlesen|同[おな]じことをこうたびたび 聞[き]かされるといやになる。|Ich bin es satt, so oft dasselbe zu hören.|Verb
聞き手|聞[き]き 手[て]|Zuhörer(in)|彼女[かのじょ]はとてもいい 聞[き]き 手[て]です。|Sie ist eine sehr gute Zuhörerin.|Nomen
客間|客間[きゃくま]|Gästezimmer, Empfangszimmer|客間[きゃくま]には 誰[だれ]もいない。|Im Gästezimmer ist niemand.|Nomen
間|間[かん]|Zeitraum, während|この 三日[みっか] 間[かん]、 雨[あめ]が 降[ふ]っています。|Seit drei Tagen regnet es.|Nomen
空間|空間[くうかん]|Raum, Platz|宇宙[うちゅう] 空間[くうかん]には 空気[くうき]がない。|Im Weltraum gibt es keine Luft.|Nomen
円高|円高[えんだか]|starker Yen, Yen-Aufwertung|円高[えんだか]ドル 安[やす]だ。|Der Yen ist stark und der Dollar schwach.|Nomen
最高|最高[さいこう]|höchste(r, s), beste(r, s); großartig|両親[りょうしん]は 息子[むすこ]に 最高[さいこう]の 教育[きょういく]を 受[う]けさせたいと 思[おも]っている。|Die Eltern wollen, dass ihr Sohn die beste Ausbildung bekommt.|Nomen
スタート|スタート|Start|私[わたし]たちはとてもいいスタートを 切[き]りました。|Wir hatten einen sehr guten Start.|Nomen (mit する)
最低|最低[さいてい]|niedrigste(r, s), schlechteste(r, s)|これは 今[いま]まで 読[よ]んだ 中[なか]で 最低[さいてい]の 本[ほん]だ。|Das ist das schlechteste Buch, das ich je gelesen habe.|Nomen
最小|最小[さいしょう]|kleinste(r, s), Minimum|被害[ひがい]は 最小[さいしょう] 限[げん]に 食[く]い 止[と]められた。|Der Schaden wurde auf ein Minimum begrenzt.|Nomen
最上|最上[さいじょう]|beste(r, s), höchste(r, s)|最後[さいご]に 笑[わら]う 者[もの]の 笑[わら]いが 最上[さいじょう]。|Wer zuletzt lacht, lacht am besten.|Nomen
最中|最中[さいちゅう]|mitten in, gerade während|私[わたし]は 講義[こうぎ]の 最中[さいちゅう]にぐっすり 眠[ねむ]ってしまった。|Ich schlief mitten in der Vorlesung ein.|Nomen
初日|初日[しょにち]|erster Tag, Eröffnungstag|学校[がっこう] 初日[しょにち]はどうだった？|Wie war dein erster Schultag?|Nomen
お前|お 前[まえ]|du (rau, vertraut)|お 前[まえ]は 人[ひと]を 信[しん]じすぎだよ。|Du schenkst den Menschen zu viel Vertrauen.|Nomen
前後|前後[ぜんご]|vor und nach; ungefähr|腕[うで]を 前後[ぜんご]に 振[ふ]りなさい。|Lass die Arme vor- und zurückschwingen.|Nomen
後方|後方[こうほう]|hinten, rückwärtiger Teil|バスの 後方[こうほう]へお 詰[つ]め 願[ねが]います。|Bitte rücken Sie im Bus nach hinten durch.|Nomen
セット|セット|Set, Satz|チェスセットが 欲[ほ]しいな。|Ich hätte gern ein Schachspiel.|Nomen (mit する)
後ろ向き|後[うし]ろ 向[む]き|rückwärts, nach hinten gewandt|女優[じょゆう]は 後[うし]ろ 向[む]きに 舞台[ぶたい]から 落[お]ちた。|Die Schauspielerin fiel rücklings von der Bühne.|Nomen
明々後日|明々後日[しあさって]|in drei Tagen (überübermorgen)|会議[かいぎ]は 明々後日[しあさって]に 延期[えんき]された。|Die Besprechung wurde auf überübermorgen verschoben.|Nomen
後半|後半[こうはん]|zweite Hälfte|社長[しゃちょう]の 挨拶[あいさつ]が 長[なが]くて 式[しき]の 後半[こうはん]が 押[お]せ 押[お]せになってしまった。|Die Begrüßungsrede des Firmenchefs war so lang, dass die zweite Hälfte der Feier sehr unruhig wurde.|Nomen
朝日|朝日[あさひ]|Morgensonne|明日[あした] 早[はや]く 起[お]きれば、 朝日[あさひ]がみられますよ。|Wenn du morgen früh aufstehst, kannst du die aufgehende Sonne sehen.|Nomen
昨晩|昨晩[さくばん]|gestern Abend|昨晩[さくばん]、 私[わたし]の 車[くるま]が 盗[ぬす]まれた。|Mir wurde gestern Abend mein Auto gestohlen.|Nomen
昨夜|昨夜[さくや]|gestern Abend, letzte Nacht|昨夜[さくや]からずっと 雨[あめ]が 降[ふ]り 続[つづ]いている。|Es regnet schon seit gestern Abend.|Nomen
食う|食[く]う|essen, fressen (derb)|働[はたら]かざるものは 食[く]うべからず。|Wer nicht arbeitet, der soll auch nicht essen.|Verb
アップ|アップ|Nahaufnahme; Steigerung|給料[きゅうりょう]のアップを 期待[きたい]しています。|Ich hoffe auf eine Gehaltserhöhung.|Nomen (mit する)
外食|外食[がいしょく]|auswärts essen|私[わたし]はいつも 外食[がいしょく]なんです。|Ich esse immer auswärts.|Nomen (mit する)
食パン|食[しょく]パン|Toastbrot, Kastenweißbrot|トムは 食[しょく]パンにバターを 塗[ぬ]った。|Tom strich sich Butter auf eine Scheibe Brot.|Nomen
一見|一見[いっけん]|auf den ersten Blick|彼女[かのじょ]は 一見[いっけん] 正直[しょうじき]そうに 見[み]える。|Sie ist anscheinend eine ehrliche Frau.|Adverb
言い出す|言[い]い 出[だ]す|zu sprechen anfangen, vorbringen|突然[とつぜん] 長女[ちょうじょ]が「 飴[あめ]がほしい」と 言[い]い 出[だ]しました。|Plötzlich erhob die älteste Tochter ihre Stimme und sagte: „Ich möchte Bonbons.“|Verb
外来語|外来語[がいらいご]|Lehnwort, Fremdwort|最近[さいきん]の 日本語[にほんご]って、 外来[がいらい] 語[ご]が 多[おお]いよね。|Das heutige Japanisch hat viele Lehnwörter, nicht wahr?|Nomen
英文|英文[えいぶん]|englischer Text|英文[えいぶん]と 時制[じせい]が 合[あ]っていません。|Das Tempus passt nicht zum englischen Satz.|Nomen
漢語|漢語[かんご]|sinojapanisches Wort|漢語[かんご]はもともと 外来語[がいらいご]です。|Sino-japanische Wörter sind ursprünglich Lehnwörter.|Nomen
エネルギー|エネルギー|Energie|何[なん]というエネルギーの 浪費[ろうひ]だ。|Was für eine Energieverschwendung!|Nomen
下書き|下書[したが]き|Entwurf, Rohfassung|私[わたし]はスピーチの 下書[したが]きを 書[か]いています。|Ich schreibe einen Entwurf der Rede.|Nomen (mit する)
後書き|後書[あとが]き|Nachwort|本[ほん]を 読[よ]む 前[まえ]に 後書[あとが]きを 読[よ]みました。|Bevor ich das Buch las, habe ich das Nachwort gelesen.|Nomen
覚え|覚[おぼ]え|Erinnerung, Auffassungsgabe|彼[かれ]は 仕事[しごと]の 覚[おぼ]えが 早[はや]いです。|Er lernt bei der Arbeit schnell dazu.|Nomen
開会|開会[かいかい]|Eröffnung (einer Veranstaltung)|開会[かいかい] 式[しき]は 予定通[よていどお]りに 行[おこな]われた。|Die Eröffnungsfeier fand wie geplant statt.|Nomen (mit する)
会|会[かい]|Treffen, Verein, Versammlung|どこで 会[かい]が 開[ひら]かれるか 教[おし]えてください。|Sag mir, wo das Treffen stattfinden wird.|Nomen
合わせる|合[あ]わせる|anpassen, zusammenfügen|眼鏡[めがね]を 目[め]に 合[あ]わせなくてはいけない。|Du musst deine Brille an deine Augen anpassen lassen.|Verb
合わす|合[あ]わす|zusammenfügen, mischen|お 金[かね]を 全部[ぜんぶ] 合[あ]わしても 足[た]りないだろう。|Selbst wenn wir das ganze Geld zusammenlegen, wird es wohl nicht reichen.|Verb
社会人|社会人[しゃかいじん]|Berufstätige(r), Mitglied der Gesellschaft|社会人[しゃかいじん]になっても 何[なん]らかの 形[かたち]で 音楽[おんがく]は 続[つづ]けたいと 思[おも]ってます。|Auch wenn ich mit dem Arbeiten anfangen muss, will ich auf jeden Fall mit der Musik, in irgendeiner Form, weitermachen.|Nomen
かえって|かえって|im Gegenteil, eher noch|彼[かれ]は 休養[きゅうよう]するどころか、かえっていつもより 仕事[しごと]に 励[はげ]んだ。|Statt auszuspannen, arbeitete er ganz im Gegenteil noch eifriger als sonst.|Adverb
会員|会員[かいいん]|Mitglied|私[わたし]は 会員[かいいん]ではない。|Ich bin kein Mitglied.|Nomen
一員|一員[いちいん]|ein Mitglied, Angehörige(r)|私[わたし]は 水泳部[すいえいぶ]の 一員[いちいん]だ。|Ich bin Mitglied im Schwimmverein.|Nomen
仕上げ|仕上[しあ]げ|Fertigstellung, letzter Schliff|今[いま]、 最後[さいご]の 仕上[しあ]げをするところです。|Ich verpasse dem Ganzen gerade den letzten Schliff.|Nomen (mit する)
仕上げる|仕上[しあ]げる|fertigstellen|明日[あした]までに 仕上[しあ]げる 必要[ひつよう]はありません。|Du brauchst es nicht bis morgen fertigzumachen.|Verb
人事|人事[じんじ]|Personalwesen|もしもし、 人事[じんじ] 課[か]ですか？|Hallo! Ist da die Personalabteilung?|Nomen
行事|行事[ぎょうじ]|Veranstaltung, Ereignis|これは 重要[じゅうよう]な 行事[ぎょうじ]です。|Dies ist ein wichtiges Ereignis.|Nomen
事|事[こと]|Sache, Angelegenheit|沢山[たくさん]の 本[ほん]を 読[よ]む 事[こと]は 良[よ]いことである。|Eine Menge Bücher lesen ist eine gute Sache.|Nomen
コンクリート|コンクリート|Beton|コンクリートは 中[なか]に 鋼鉄[こうてつ]の 棒[ぼう]を 入[い]れる 事[こと]で 補強[ほきょう]される。|Beton wird durch das Einsetzen von Stahlstangen verstärkt.|Nomen
家事|家事[かじ]|Hausarbeit|私[わたし]は 一日中[いちにちじゅう] 家事[かじ]で 忙[いそが]しいのよ。|Ich bin den ganzen Tag mit der Hausarbeit beschäftigt.|Nomen
人工|人工[じんこう]|künstlich|人工[じんこう] 言語[げんご]なんか 勉強[べんきょう]して 何[なん]になるの？|Was bringt es, eine Kunstsprache zu lernen?|Nomen
会場|会場[かいじょう]|Veranstaltungsort, Saal|私[わたし]たちは 会場[かいじょう]の 後[うし]ろに 座[すわ]った。|Wir setzten uns in den hinteren Teil des Saals.|Nomen
出場|出場[しゅつじょう]|Teilnahme (an einem Wettbewerb)|彼[かれ]はその 競技[きょうぎ]の 出場[しゅつじょう] 資格[しかく]を 失[うしな]った。|Er wurde vom Wettbewerb disqualifiziert.|Nomen (mit する)
車内|車内[しゃない]|im Wagen, im Zug|氷[こおり]のような 冷気[れいき]が 車内[しゃない]に 忍[しの]び 込[こ]んできた。|Eisige Kälte kroch in den Wagen.|Nomen
下車|下車[げしゃ]|Aussteigen|次[つぎ]の 駅[えき]で 下車[げしゃ]します。|Ich steige beim nächsten Bahnhof aus.|Nomen (mit する)
駅前|駅前[えきまえ]|vor dem Bahnhof, Bahnhofsvorplatz|駅前[えきまえ]には 銀行[ぎんこう]がある。|Es gibt eine Bank vor dem Bahnhof.|Nomen
いよいよ|いよいよ|endlich, nun wirklich; immer mehr|いよいよ 彼女[かのじょ]の 番[ばん]になった。|Schließlich war sie an der Reihe.|Adverb
外交|外交[がいこう]|Diplomatie, Außenpolitik|トムって 外交[がいこう] 的[てき]だよね。|Tom ist schon diplomatisch.|Nomen
交わす|交[か]わす|austauschen, wechseln|彼[かれ]らはあいさつを 交[か]わした。|Sie tauschten Grüße aus.|Verb
交通|交通[こうつう]|Verkehr|私[わたし]の 兄[あに]は 交通[こうつう] 事故[じこ]でけがをした。|Mein Bruder ist bei dem Verkehrsunfall verletzt worden.|Nomen (mit する)
大通り|大通[おおどお]り|Hauptstraße|私[わたし]は 大通[おおどお]りをずっと 一人[ひとり]で 歩[ある]いた。|Ich ging die ganze Zeit allein die Hauptstraße entlang.|Nomen
書道|書道[しょどう]|Kalligraphie|書道[しょどう]って、 得意[とくい]？|Bist du gut in Kalligrafie?|Nomen
十字路|十字路[じゅうじろ]|Kreuzung|その 十字[じゅうじ] 路[ろ]に 着[つ]いた 時[とき]タクシーはスピードを 落[お]とした。|Als wir an der Kreuzung ankamen, wurde das Taxi langsamer.|Nomen
空き地|空[あ]き 地[ち]|unbebautes Grundstück|彼女[かのじょ]は 空[あ]き 地[ち]に 駐車[ちゅうしゃ]した。|Sie parkte auf einem unbebauten Grundstück.|Nomen
オリンピック|オリンピック|Olympische Spiele|トムはテレビでオリンピックを 見[み]ています。|Tom sieht sich gerade im Fernsehen die Olympischen Spiele an.|Nomen
図|図[ず]|Abbildung, Zeichnung, Plan|新[しん] 企画[きかく]は 図[ず]にあたった。|Der neue Plan funktionierte gut.|Nomen
合図|合図[あいず]|Zeichen, Signal|父[ちち]は 私[わたし]に 部屋[へや]を 出[で]ていくようにと 手[て]で 合図[あいず]した。|Vater signalisierte mir mit der Hand, das Zimmer zu verlassen.|Nomen (mit する)
行き止まり|行[い]き 止[ど]まり|Sackgasse|行[い]き 止[ど]まりだ。|Das ist eine Sackgasse.|Nomen
初歩|初歩[しょほ]|Anfangsgründe, erste Schritte|まず 初歩[しょほ]から 勉強[べんきょう]しましょう。|Lernen wir zunächst die Anfangsgründe.|Nomen
高度|高度[こうど]|hochentwickelt; große Höhe|その 会社[かいしゃ]では 高度[こうど]な 専門性[せんもんせい]が 要求[ようきゅう]されます。|Bei dieser Firma wird hochgradige Expertise verlangt.|な-Adjektiv
一度に|一度[いちど]に|auf einmal, gleichzeitig|一[いち] 度[ど]に 二[ふた]つのことはできないよ。|Ich kann nicht zwei Sachen gleichzeitig machen.|Adverb
遠足|遠足[えんそく]|Ausflug (Schule)|明日[あした] 雨[あめ]が 降[ふ]れば、 遠足[えんそく]はありません。|Falls es morgen regnet, findet kein Ausflug statt.|Nomen
駅長|駅長[えきちょう]|Bahnhofsvorsteher(in)|日本[にほん]には 猫[ねこ]が 駅長[えきちょう]を 務[つと]める 駅[えき]がある。|In Japan gibt es Bahnhöfe mit einer Katze als Vorsteher.|Nomen
ストップ|ストップ|Stopp, Halt|ストップって 言[い]ってね。|Sag „Stopp“, ja?|Nomen (mit する)
全員|全員[ぜんいん]|alle Mitglieder, alle|私[わたし]たちは 全員[ぜんいん] 疲[つか]れていた。|Wir waren alle müde.|Nomen
全て|全[すべ]て|alles, sämtlich|私[わたし]たちは 全[すべ]てを 見[み]ていた。|Wir haben alles gesehen.|Adverb
外部|外部[がいぶ]|Außenseite, außerhalb, Außenstehende|外部[がいぶ]からの 圧力[あつりょく]がますます 強[つよ]くなってきている。|Der Druck von außen wird immer stärker.|Nomen
一部分|一部分[いちぶぶん]|ein Teil, Teilstück|時[とき]とは、 永遠[えいえん]の 一[いち] 部分[ぶぶん]である。|Die Zeit ist ein Teil der Ewigkeit.|Nomen
国家|国家[こっか]|Staat, Nation|シンガポールは 都市[とし] 国家[こっか]だ。|Singapur ist ein Stadtstaat.|Nomen
国々|国々[くにぐに]|Länder, Nationen|英語[えいご]はたくさんの 国々[くにぐに]で 話[はな]されている。|Englisch wird in vielen Ländern gesprochen.|Nomen
国外|国外[こくがい]|außer Landes, Ausland|犯人[はんにん]は 国外[こくがい]に 追放[ついほう]された。|Der Verbrecher wurde ins Ausland verbannt.|Nomen
きちんと|きちんと|ordentlich, genau|教室[きょうしつ]の 机[つくえ]をきちんとならべなさい。|Stellt die Tische im Klassenzimmer ordentlich auf!|Adverb
出国|出国[しゅっこく]|Ausreise|あなたが 出国[しゅっこく]するまでお 預[あず]かりします。|Wir bewahren es auf, bis Sie ausreisen.|Nomen (mit する)
国土|国土[こくど]|Staatsgebiet, Land|アメリカは 国土[こくど]が 広[ひろ]く、 人々[ひとびと]はよく 移動[いどう]する。|Amerika hat ein weites Staatsgebiet, und die Menschen ziehen oft um.|Nomen
国語|国語[こくご]|Landessprache; Japanisch (Schulfach)|あなたは 英語[えいご]と 国語[こくご]どちらが 好[す]きですか。|Was sagt dir mehr zu – das Englische oder das Japanische?|Nomen
国交|国交[こっこう]|diplomatische Beziehungen|それ 以来[いらい]カナダとイランの 国交[こっこう]は 断絶[だんぜつ]している。|Die diplomatischen Beziehungen zwischen Kanada und dem Iran sind seitdem abgebrochen.|Nomen
国道|国道[こくどう]|Nationalstraße|戦後[せんご] 国道[こくどう]のほとんどが 補修[ほしゅう]を 緊急[きんきゅう]に 必要[ひつよう]とされた。|Nach dem Krieg mussten die meisten Nationalstraßen dringend ausgebessert werden.|Nomen
世間|世間[せけん]|die Welt, die Leute, Öffentlichkeit|あの 子[こ]ってちょっと 世間[せけん] 知[し]らずよね。|Sie ist ein bisschen weltfremd.|Nomen
世話|世話[せわ]|Pflege, Betreuung, Fürsorge|子供[こども]たちのお 世話[せわ]を 手伝[てつだ]ってくれない？|Würdest du mir helfen, auf die Kinder aufzupassen?|Nomen (mit する)
クラブ|クラブ|Club, Verein, AG|私[わたし]はテニスクラブに 所属[しょぞく]しています。|Ich bin Mitglied im Tennisverein.|Nomen
出世|出世[しゅっせ]|beruflicher Aufstieg, Karriere|彼[かれ]は 出世[しゅっせ]して 最後[さいご]には 大統領[だいとうりょう]になった。|Er machte Karriere und wurde schließlich Präsident.|Nomen (mit する)
青白い|青白[あおじろ]い|blass, bleich|君[きみ]は 大変[たいへん] 青白[あおじろ]い 顔[かお]をしている。|Du siehst sehr blass aus.|Adjektiv
黒字|黒字[くろじ]|schwarze Zahlen, Überschuss|今月[こんげつ]は 黒字[くろじ]である。|Diesen Monat schreiben wir schwarze Zahlen.|Nomen
赤道|赤道[せきどう]|Äquator|その 船[ふね]は 昨日[きのう] 赤道[せきどう]を 越[こ]えた。|Das Schiff hat gestern den Äquator überquert.|Nomen
赤字|赤字[あかじ]|rote Zahlen, Defizit|商売[しょうばい]は 赤字[あかじ]だ。|Das Geschäft ist in den roten Zahlen.|Nomen
国鉄|国鉄[こくてつ]|Japanische Staatsbahn (bis 1987)|昔[むかし]、この 線[せん]は 国鉄[こくてつ]でした。|Früher gehörte diese Strecke der Staatsbahn.|Nomen
私鉄|私鉄[してつ]|Privatbahn|会社[かいしゃ]まで 私鉄[してつ]で 通[かよ]っています。|Ich fahre mit der Privatbahn zur Arbeit.|Nomen
家屋|家屋[かおく]|Haus, Gebäude|木造[もくぞう] 家屋[かおく]は 簡単[かんたん]に 燃[も]える。|Holzhäuser fangen leicht Feuer.|Nomen
じっと|じっと|still, regungslos; unverwandt|皆[みな]さんじっとしていてください。|Seid bitte alle still.|Adverb
屋上|屋上[おくじょう]|Dach, Dachterrasse|青空[あおぞら]を 見[み]たくなったら、 屋上[おくじょう]に 行[い]きます。|Wenn ich den blauen Himmel sehen möchte, steige ich aufs Dach.|Nomen
味わう|味[あじ]わう|schmecken, genießen, kosten|彼[かれ]は 苦[にが]い 経験[けいけん]を 味[あじ]わった。|Er machte eine bittere Erfahrung.|Verb
地味|地味[じみ]|schlicht, unauffällig|地味[じみ]な 生活[せいかつ]はそれほど 悪[わる]くはありません。|Ein schlichtes Leben ist gar nicht so schlecht.|な-Adjektiv
月末|月末[げつまつ]|Monatsende|私[わたし]は 月末[げつまつ]にコンピュータを 息子[むすこ]にプレゼントするつもりです。|Ich habe vor, meinem Sohn am Ende des Monats einen Rechner zu schenken.|Nomen
末っ子|末[すえ]っ 子[こ]|jüngstes Kind|私[わたし]は 末[すえ]っ 子[こ]です。|Ich bin das jüngste Kind.|Nomen
末|末[すえ]|Ende; nach, am Ende von|長[なが]い 闘病生活[とうびょうせいかつ]の 末[すえ]、 夫[おっと]が 亡[な]くなりました。|Mein Mann ist nach langer Krankheit verstorben.|Nomen
飲料水|飲料水[いんりょうすい]|Trinkwasser|飲料[いんりょう] 水[すい]はどこにありますか？|Wo gibt es Trinkwasser?|Nomen
コンサート|コンサート|Konzert|コンサートにはたくさんの 人[ひと]がいた。|Es waren viele Leute auf dem Konzert.|Nomen
食料|食料[しょくりょう]|Lebensmittel, Proviant|彼女[かのじょ]は 近所[きんじょ]の 食料[しょくりょう] 品[ひん] 店[てん]で 買[か]い 物[もの]をする。|Sie kauft in einem Lebensmittelgeschäft in der Nachbarschaft ein.|Nomen
見解|見解[けんかい]|Ansicht, Auffassung|それが 私[わたし]の 見解[けんかい]だ。|Das ist meine Ansicht.|Nomen
有りのまま|有[あ]りのまま|so wie es ist, ungeschminkt|有[あ]りのままの 気持[きも]ちを 話[はな]してください。|Erzählen Sie bitte, was Sie wirklich empfinden.|な-Adjektiv
作家|作家[さっか]|Schriftsteller(in)|私[わたし]は 作家[さっか]になるつもりだ。|Mein Ziel ist es, Schriftsteller zu werden.|Nomen
使用|使用[しよう]|Benutzung, Verwendung|私[わたし]たちは 多[おお]くの 水[みず]を 使用[しよう]する。|Wir verwenden viel Wasser.|Nomen (mit する)
作用|作用[さよう]|Wirkung, Einwirkung|この 薬[くすり]の 副[ふく] 作用[さよう]は 何[なん]ですか？|Welche Nebenwirkungen hat dieses Medikament?|Nomen (mit する)
使用人|使用人[しようにん]|Hausangestellte(r), Bedienstete(r)|犬[いぬ]には 主人[しゅじん]がいて、 猫[ねこ]には 使用[しよう] 人[にん]がいる。|Hunde haben Herrchen, Katzen aber Knechte.|Nomen
いけない|いけない|nicht gut; nicht dürfen|学校[がっこう]に 遅刻[ちこく]してはいけない。|Du darfst nicht zu spät zur Schule kommen.|Adjektiv
私用|私用[しよう]|private Angelegenheit, Privatgebrauch|私用[しよう]の 新[あたら]しい 傘[かさ]を 買[か]おっと。|Ich kaufe mir einen neuen Regenschirm für mich selbst.|Nomen
会費|会費[かいひ]|Mitgliedsbeitrag, Teilnahmegebühr|年[ねん] 会費[かいひ]はいくらですか。|Wie hoch ist der Jahresbeitrag?|Nomen
国費|国費[こくひ]|Staatskosten|彼[かれ]は 国費[こくひ]で 留学[りゅうがく]しました。|Er hat auf Staatskosten im Ausland studiert.|Nomen
食費|食費[しょくひ]|Kosten für Essen|彼女[かのじょ]は 収入[しゅうにゅう]の 大部分[だいぶぶん]を 食費[しょくひ]に 使[つか]う。|Den größten Teil ihres Einkommens gibt sie fürs Essen aus.|Nomen
私費|私費[しひ]|eigene Kosten|私費[しひ]で 旅行[りょこう]した。|Ich bin auf eigene Kosten gereist.|Nomen
消費|消費[しょうひ]|Konsum, Verbrauch|日本[にほん]は 紙[かみ]を 大量[たいりょう]に 消費[しょうひ]する。|Japan verbraucht viel Papier.|Nomen (mit する)
消火|消火[しょうか]|Feuerlöschen|彼[かれ]らは 消火[しょうか]にあたった。|Sie bekämpften das Feuer.|Nomen (mit する)
売り上げ|売[う]り 上[あ]げ|Umsatz, Erlös|売[う]り 上[あ]げが 減少[げんしょう]しています。|Der Umsatz geht zurück.|Nomen
あらかじめ|あらかじめ|im Voraus, vorher|やってみる 前[まえ]にあらかじめ 考[かんが]える。|Bevor ich es versuche, denke ich vorher darüber nach.|Adverb
売り出す|売[う]り 出[だ]す|auf den Markt bringen, zum Verkauf anbieten|それはまだ 売[う]り 出[だ]し 中[ちゅう]ですか？|Wird das noch verkauft?|Verb
書店|書店[しょてん]|Buchhandlung|そのデパートの 前[まえ]に 書店[しょてん]がある。|Vor dem Kaufhaus befindet sich eine Buchhandlung.|Nomen
開店|開店[かいてん]|Ladenöffnung, Geschäftseröffnung|何時[なんじ]に 開店[かいてん]しますか。|Um wie viel Uhr macht das Geschäft auf?|Nomen (mit する)
小売店|小売店[こうりてん]|Einzelhandelsgeschäft|零細[れいさい] 小売[こうり] 店[てん]などは 新[しん] 年度[ねんど]には 利益[りえき]を 上[あ]げるでしょう。|Kleine Einzelhandelsgeschäfte werden im neuen Geschäftsjahr wohl Gewinn machen.|Nomen
商社|商社[しょうしゃ]|Handelsfirma|私[わたし]は 商社[しょうしゃ]で 働[はたら]いています。|Ich arbeite bei einer Handelsfirma.|Nomen
商店|商店[しょうてん]|Laden, Geschäft|近[ちか]くに 商店[しょうてん] 街[がい]がありますよ。|In der Nähe gibt es eine Einkaufsstraße.|Nomen
商売|商売[しょうばい]|Geschäft, Handel, Gewerbe|彼[かれ]は 商売[しょうばい]の 経験[けいけん]がある。|Er hat geschäftliche Erfahrungen.|Nomen (mit する)
しばしば|しばしば|oft, häufig|彼[かれ]はしばしば 父[ちち]の 車[くるま]を 運転[うんてん]する。|Er fährt oft das Auto seines Vaters.|Adverb
商人|商人[しょうにん]|Kaufmann, Händler(in)|ブラウンさんは 羊毛[ようもう]を 扱[あつか]う 商人[しょうにん]です。|Herr Braun ist Wollhändler.|Nomen
食品|食品[しょくひん]|Lebensmittel|この 近所[きんじょ]には 食品[しょくひん] 店[てん]はない。|In dieser Gegend gibt es kein Lebensmittelgeschäft.|Nomen
品|品[しな]|Ware, Artikel; Qualität|同[おな]じような 品[しな]がまだ 何[なん] 点[てん]かありますよ。|Wir haben noch jede Menge gleichartiger Waren.|Nomen
上品|上品[じょうひん]|elegant, vornehm|彼女[かのじょ]は 行儀[ぎょうぎ]が 極[きわ]めて 上品[じょうひん]である。|Ihre Manieren sind außerordentlich kultiviert.|な-Adjektiv
下品|下品[げひん]|vulgär, ordinär|彼[かれ]は 怒[おこ]るといつも 下品[げひん]な 言葉[ことば]を 使[つか]う。|Wenn er zornig wird, benutzt er immer vulgäre Ausdrücke.|Adjektiv
手段|手段[しゅだん]|Mittel, Weg, Maßnahme|英語[えいご]は 伝達[でんたつ]の 手段[しゅだん]だ。|Die englische Sprache ist ein Mittel der Kommunikation.|Nomen
一段と|一段[いちだん]と|noch mehr, um eine Stufe|あら、 一段[いちだん]と 可愛[かわい]くなったわね。|Da schau mal her! Du bist ja noch ein bisschen hübscher geworden!|Adverb
ショック|ショック|Schock|彼[かれ]の 話[はなし]を 聞[き]いて、 彼女[かのじょ]はショックを 受[う]けた。|Was sie von ihm hörte, schockte sie.|な-Adjektiv
値|値[あたい]|Wert, Preis|彼[かれ]の 意見[いけん]は 聞[き]くに 値[あたい]しない。|Seine Ansichten sind es nicht wert, gehört zu werden.|Nomen
値する|値[あたい]する|wert sein, verdienen|私[わたし]は 生[い]きるに 値[あたい]しない 人間[にんげん]だ。|Ich bin ein Mensch, der es nicht verdient hat zu leben.|Verb
価値|価値[かち]|Wert|私[わたし]には 生[い]きる 価値[かち]がない。|Ich bin es nicht wert zu leben.|Nomen
高価|高価[こうか]|teuer, kostspielig|これは 私[わたし]が 見[み]た 中[なか]で 一番[いちばん] 高価[こうか]な 靴[くつ]だ。|Das sind die teuersten Schuhe, die ich je gesehen habe.|な-Adjektiv
人格|人格[じんかく]|Charakter, Persönlichkeit|彼[かれ]は 二重[にじゅう] 人格[じんかく] 者[しゃ]だ。|Er hat eine gespaltene Persönlichkeit.|Nomen
格好|格好[かっこう]|Aussehen, Erscheinung, Form|格好[かっこう]つけるな。|Gib nicht so an.|Nomen (mit する)
青春|青春[せいしゅん]|Jugend(zeit)|俺[おれ]の 青春[せいしゅん]を 返[かえ]せ！|Gib mir meine Jugend zurück!|Nomen
アンテナ|アンテナ|Antenne|アンテナレベルが 下[さ]がってる 可能[かのう] 性[せい]がある。|Möglicherweise ist der Empfang der Antenne schwächer geworden.|Nomen
春分|春分[しゅんぶん]|Frühlings-Tagundnachtgleiche|イースターは、 春分[しゅんぶん] 後[ご]の 最初[さいしょ]の 満月[まんげつ]の 次[つぎ]の 日曜日[にちようび]に 祝[いわ]われる。|Ostern wird am Sonntag nach dem ersten Frühlingsvollmond gefeiert.|Nomen
初夏|初夏[しょか]|Frühsommer|初夏[しょか]の 風[かぜ]は 気持[きも]ちがいいです。|Der Wind im Frühsommer ist angenehm.|Nomen
秋分|秋分[しゅうぶん]|Herbst-Tagundnachtgleiche|秋分[しゅうぶん]の 日[ひ]は、 今年[ことし]は 金曜日[きんようび]に 当[あ]たります。|Die Herbst-Tagundnachtgleiche fällt dieses Jahr auf einen Freitag.|Nomen
春夏秋冬|春夏秋冬[しゅんかしゅうとう]|die vier Jahreszeiten, das ganze Jahr|日本[にほん]には 春夏秋冬[しゅんかしゅうとう]があります。|In Japan gibt es die vier Jahreszeiten.|Nomen
夏季|夏季[かき]|Sommer, Sommersaison|夏季[かき]は 店[みせ]が 早[はや]く 閉[し]まります。|In der Sommersaison schließt der Laden früher.|Nomen
寒気|寒気[さむけ]|Frösteln, Schüttelfrost|外[そと]へ 出[で]ると 寒気[さむけ]がした。|Mir war kalt, als ich hinausging.|Nomen
暖か|暖[あたた]か|warm, mild|陽気[ようき]が 暖[あたた]かでやがて 果樹[かじゅ]の 花[はな]が 咲[さ]くだろう。|Bei dem warmen Wetter werden die Obstbäume bald blühen.|Adjektiv
高温|高温[こうおん]|hohe Temperatur|高温[こうおん] 多湿[たしつ]を 避[さ]けて 保存[ほぞん]してください。|Kühl und trocken lagern.|Nomen
あえて|あえて|bewusst, es wagen|今日[きょう]、あなたにあえて、 嬉[うれ]しいです。|Ich freue mich, dass ich mich heute mit dir treffen konnte.|Adverb
温暖|温暖[おんだん]|mild, warm (Klima)|島[しま]の 天候[てんこう]はとても 温暖[おんだん]です。|Das Wetter auf der Insel ist sehr mild.|な-Adjektiv
北風|北風[きたかぜ]|Nordwind|北風[きたかぜ]は 一日中[いちにちじゅう] 吹[ふ]き 続[つづ]けた。|Der Nordwind wehte den ganzen Tag.|Nomen
秋風|秋風[あきかぜ]|Herbstwind|秋風[あきかぜ]に 舞[ま]う 木[こ]の 葉[は]のようだ。|Es ist wie ein Blatt, das im Herbstwind tanzt.|Nomen
情熱|情熱[じょうねつ]|Leidenschaft|トムは、 音楽[おんがく]に 情熱[じょうねつ]を 注[そそ]いでいます。|Tom widmet seine Leidenschaft der Musik.|Nomen
広告|広告[こうこく]|Werbung, Anzeige|新聞[しんぶん] 広告[こうこく]を 見[み]て 来[き]ました。|Ich bin auf Ihre Anzeige in der Zeitung hin gekommen.|Nomen (mit する)
新た|新[あら]た|neu|他[た] 言語[げんご]を 学[まな]ぶことは、 新[あら]たな 世界[せかい]を 知[し]ることを 意味[いみ]する。|Eine weitere Sprache lernen heißt eine neue Welt entdecken.|Adjektiv
新聞社|新聞社[しんぶんしゃ]|Zeitungsverlag|どちらの 新聞[しんぶん] 社[しゃ]にお 勤[つと]めですか。|Bei welcher Zeitung arbeiten Sie?|Nomen
カバー|カバー|Hülle, Umschlag, Abdeckung|本[ほん]にカバーをかけました。|Ich habe das Buch in einen Umschlag eingeschlagen.|Nomen (mit する)
新人|新人[しんじん]|Neuling, Berufsanfänger(in)|やっぱり 新人[しんじん]さんは 初々[ういうい]しくていいね。|Es ist doch wirklich schön, wenn die Neulinge noch so naiv sind, oder?|Nomen
最悪|最悪[さいあく]|das Schlimmste, schlimmstenfalls|最悪[さいあく]の 場合[ばあい]を 考[かんが]えておこう。|Lass uns über das Schlimmste, das passieren könnte, nachdenken.|な-Adjektiv
悪用|悪用[あくよう]|Missbrauch|彼[かれ]は 公金[こうきん]を 悪用[あくよう]したかどで 逮捕[たいほ]された。|Er wurde wegen Veruntreuung öffentlicher Gelder verhaftet.|Nomen
悪|悪[あく]|das Böse|子供[こども]に 善[ぜん]と 悪[あく]を 教[おし]えます。|Man bringt Kindern Gut und Böse bei.|Nomen
悪女|悪女[あくじょ]|böse Frau, Femme fatale|その 映画[えいが]の 主人公[しゅじんこう]は 悪女[あくじょ]です。|Die Hauptfigur dieses Films ist eine Femme fatale.|Nomen
心理|心理[しんり]|Psychologie, Gemütszustand|私[わたし]には 少年[しょうねん]の 心理[しんり]がわからない。|Ich verstehe nichts von der Psychologie Heranwachsender.|Nomen
心|心[こころ]|Herz, Gemüt, Seele|人間[にんげん]は 心[こころ]と 体[からだ]から 成[な]っている。|Der Mensch besteht aus Seele und Körper.|Nomen
ジャーナリスト|ジャーナリスト|Journalist(in)|ジャーナリストになりたいんです。|Ich möchte ein Journalist werden.|Nomen
思い|思[おも]い|Gedanke, Gefühl, Wunsch|トムは 友達[ともだち]の 前[まえ]で 私[わたし]に 恥[は]ずかしい 思[おも]いをさせた。|Tom hat mich vor meinen Freunden blamiert.|Nomen
思わず|思[おも]わず|unwillkürlich, unbewusst|思[おも]わず 大[おお]きな 声[こえ]を 出[だ]してしまいました。|Unwillkürlich habe ich laut aufgeschrien.|Adverb
思いがけない|思[おも]いがけない|unerwartet|宝石[ほうせき]は 思[おも]いがけない 場所[ばしょ]で 見[み]つかった。|Der Edelstein wurde an einem unerwarteten Ort gefunden.|Adjektiv
思いやり|思[おも]いやり|Rücksichtnahme, Mitgefühl|あなたは 思[おも]いやりがない。|Du bist rücksichtslos.|Nomen
決して|決[けっ]して|niemals, auf keinen Fall|トムは 決[けっ]して 自分[じぶん]の 仕事[しごと]の 話[はなし]をしない。|Tom redet niemals über seine Arbeit.|Adverb
決心|決心[けっしん]|Entschluss|彼[かれ]はそこへ 行[い]く 決心[けっしん]をした。|Er entschloss sich dort hinzugehen.|Nomen (mit する)
決まり|決[き]まり|Regel, Festlegung|ナイフとフォークの 使[つか]い 方[かた]には 決[き]まりがある。|Es gibt eine Regel für den Gebrauch von Messern und Gabeln.|Nomen
知り合う|知[し]り 合[あ]う|sich kennenlernen|どうやって 彼女[かのじょ]と 知[し]り 合[あ]ったの？|Wie hast du sie kennengelernt?|Verb
スタイル|スタイル|Stil; Figur|彼女[かのじょ]はスタイルがいい。|Sie hat eine gute Figur.|Nomen
知れる|知[し]れる|bekannt werden, herauskommen|来週[らいしゅう]には 凍[こお]るかも 知[し]れない。|Nächste Woche wird es vielleicht Frost geben.|Verb
知り合い|知[し]り 合[あ]い|Bekannte(r)|私[わたし]は 彼[かれ]と 知[し]り 合[あ]いです。|Ich bin mit ihm bekannt.|Nomen
知らせ|知[し]らせ|Nachricht, Mitteilung|今日[きょう]はとても 残念[ざんねん]なお 知[し]らせがあります。|Heute habe ich eine sehr bedauerliche Nachricht.|Nomen
知らず知らず|知[し]らず 知[し]らず|unbemerkt, ohne es zu merken|知[し]らず 知[し]らずのうちに 眠[ねむ]っていました。|Ohne es zu merken, war ich eingeschlafen.|Adverb
才能|才能[さいのう]|Talent, Begabung|彼[かれ]には 多[おお]くの 才能[さいのう]がある。|Er hat viele Begabungen.|Nomen
小便|小便[しょうべん]|Urin, Pinkeln|子供[こども]が 小便[しょうべん]をしたいと 言[い]っています。|Das Kind sagt, es muss Pipi machen.|Nomen (mit する)
局|局[きょく]|Amt, Behörde; Sender|郵便[ゆうびん] 局[きょく]へ 行[い]く 道[みち]を 教[おし]えて 下[くだ]さい。|Sagen Sie mir bitte, wie ich zur Post komme!|Nomen
インタビュー|インタビュー|Interview|トムにインタビューしたい。|Ich würde Tom gerne befragen.|Nomen (mit する)
住まい|住[す]まい|Wohnung, Wohnsitz|ここにどれくらいお 住[す]まいですか。|Wie lange wohnen Sie schon hier?|Nomen
氏|氏[し]|Herr, Frau (förmlich, nach dem Namen)|フォード 氏[し]に 電話[でんわ]するのを 忘[わす]れてた。|Ich habe vergessen, Herrn Ford anzurufen.|Nomen
人名|人名[じんめい]|Personenname|人名[じんめい]の 漢字[かんじ]は 読[よ]み 方[かた]が 難[むずか]しいです。|Die Kanji in Personennamen sind schwer zu lesen.|Nomen
国名|国名[こくめい]|Ländername|地図[ちず]で 国名[こくめい]を 調[しら]べました。|Ich habe auf der Karte den Ländernamen nachgesehen.|Nomen
各地|各地[かくち]|verschiedene Orte, überall im Land|続[つづ]いて 日本[にほん] 各地[かくち]からのニュースをお 伝[つた]えします。|Es folgen Nachrichten aus allen Teilen Japans.|Nomen
県|県[けん]|Präfektur|私[わたし]の 両親[りょうしん]は 愛知[あいち] 県[けん]で 生[う]まれた。|Meine Eltern sind in der Präfektur Aichi geboren.|Nomen
市内|市内[しない]|im Stadtgebiet|市[し] 内[ない]に 滞在[たいざい]する 予定[よてい]です。|Ich habe vor, in der Stadt zu bleiben.|Nomen
シーズン|シーズン|Saison|野球[やきゅう]シーズンが 始[はじ]まった。|Die Baseball-Saison hat angefangen.|Nomen
市長|市長[しちょう]|Bürgermeister(in)|私[わたし]たちは 彼女[かのじょ]を 市長[しちょう]に 選[えら]んだ。|Wir wählten sie zur Bürgermeisterin.|Nomen
市場|市場[いちば]|Markt, Marktplatz|母[はは]は 毎日[まいにち] 市場[いちば]に 買[か]い 物[もの]に 行[い]く。|Meine Mutter geht jeden Tag zum Einkauf auf den Markt.|Nomen
市場|市場[しじょう]|Markt (wirtschaftlich)|私[わたし]は 市場[しじょう]に 行[い]きます。|Ich gehe auf den Markt.|Nomen
市外|市外[しがい]|außerhalb der Stadt|市外[しがい]へ 行[い]くバスはどこから 出[で]ていますか。|Wo fahren die Busse ab, die aus der Stadt hinausfahren?|Nomen
市|市[し]|Stadt (Verwaltungseinheit)|京都[きょうと] 市[し]の 地図[ちず]を 持[も]っていますか。|Haben Sie einen Stadtplan von Kyoto?|Nomen
下町|下町[したまち]|Altstadtviertel, Viertel der einfachen Leute|ここはしがない 下町[したまち]の 店[みせ]です。|Das ist nur ein bescheidener Laden in der Altstadt.|Nomen
区分|区分[くぶん]|Einteilung, Abschnitt|我[わ]が 家[や]の 大[おお]きな 土地[とち]を 子供[こども]たちのために 公平[こうへい]に 区分[くぶん]する。|Wir teilen das große Grundstück unserer Familie gerecht unter den Kindern auf.|Nomen (mit する)
区|区[く]|Stadtbezirk|ロシアや 中国[ちゅうごく]は 多[おお]くの 自治[じち] 区[く]を 持[も]ちます。|Russland und China haben viele autonome Regionen.|Nomen
アイデア|アイデア|Idee|彼[かれ]らは 私[わたし]のアイデアを 盗[ぬす]んだ。|Die haben meine Idee gestohlen!|Nomen
様々|様々[さまざま]|verschieden, vielfältig|日本[にほん]は 海外[かいがい]から 様々[さまざま]な 原材料[げんざいりょう]を 輸入[ゆにゅう]している。|Japan importiert verschiedene Rohstoffe aus dem Ausland.|Adjektiv
出荷|出荷[しゅっか]|Versand, Auslieferung|品物[しなもの]は 昨日[きのう] 出荷[しゅっか]されました。|Die Ware wurde gestern verschickt.|Nomen (mit する)
人物|人物[じんぶつ]|Person, Persönlichkeit|彼[かれ]はとても 重要[じゅうよう]な 人物[じんぶつ]です。|Er ist eine sehr wichtige Person.|Nomen
見物人|見物人[けんぶつにん]|Zuschauer(in), Schaulustige(r)|彼[かれ]が 飛行機[ひこうき]に 乗[の]り 込[こ]むと、 見物[けんぶつ] 人[にん]が 集[あつ]まってきた。|Als er in das Flugzeug stieg, versammelten sich Schaulustige.|Nomen
入れ物|入[い]れ 物[もの]|Behälter|そこのガラスの 入[い]れ 物[もの]、 取[と]ってくれる？|Reichst du mir den Glasbehälter dort?|Nomen
作物|作物[さくもつ]|Feldfrucht, Ernte|作物[さくもつ]は 厳[きび]しい 寒[さむ]さにやられた。|Die Ernte fiel der bitteren Kälte zum Opfer.|Nomen
食物|食物[しょくもつ]|Nahrung|食物[しょくもつ]は 胃[い]の 中[なか]で 消化[しょうか]される。|Nahrung wird im Magen verdaut.|Nomen
いかにも|いかにも|wirklich, ganz wie|遅刻[ちこく]するのはいかにも 彼[かれ]らしい。|Zu spät zu kommen ist wirklich typisch für ihn.|Adverb
書物|書物[しょもつ]|Buch, Schrift|書物[しょもつ]は 人生[じんせい]の 楽[たの]しみを 増[ふ]やす。|Bücher mehren die Freuden des Lebens.|Nomen
重ねる|重[かさ]ねる|stapeln; wiederholen|彼[かれ]はさらに 約束[やくそく]を 重[かさ]ねて 逃[のが]れようとした。|Er wollte mich wieder mit weiteren Versprechen vertrösten.|Verb
重なる|重[かさ]なる|sich überlagern, zusammenfallen|彼女[かのじょ]は 昨年[さくねん] 不幸[ふこう]なことが 重[かさ]なった。|Letztes Jahr haben sich bei ihr die Unglücke gehäuft.|Verb
重大|重大[じゅうだい]|schwerwiegend, wichtig|それは 重大[じゅうだい]な 間違[まちが]いではない。|Das ist kein schwerwiegender Fehler.|Adjektiv
重み|重[おも]み|Gewicht, Bedeutung|彼[かれ]の 意見[いけん]には 重[おも]みがある。|Seine Meinungen haben Gewicht.|Nomen
重たい|重[おも]たい|schwer|彼女[かのじょ]は 体重[たいじゅう]が 重[おも]たかったが 上手[じょうず]に 踊[おど]った。|Obwohl sie eine schwere Frau war, tanzte sie sehr gut.|Adjektiv
気軽|気軽[きがる]|unbeschwert, ohne Umstände|何[なに]かあったら、 気軽[きがる]に 声[こえ]をかけてね。|Wenn es irgendetwas gibt, melde dich einfach.|な-Adjektiv
いきなり|いきなり|plötzlich, unvermittelt|びっくりした！いきなり 後[うし]ろから 脅[おびや]かさないでよ！|Hab ich mich erschreckt! Schleich dich doch nicht so von hinten an!|Adverb
重量|重量[じゅうりょう]|Gewicht|申[もう]し 訳[わけ]ありませんが、 重量[じゅうりょう] 超過[ちょうか] 料[りょう]をお 支払[しはら]いください。|Es tut mir leid, Sie müssen für das Übergewicht bezahlen.|Nomen
少量|少量[しょうりょう]|kleine Menge|このビンの 中[なか]には 少量[しょうりょう]のウイスキーがある。|Es ist ein wenig Whiskey in dieser Flasche.|Nomen
小量|小量[しょうりょう]|kleine Menge|塩[しお]を 小量[しょうりょう] 入[い]れてください。|Geben Sie bitte eine kleine Menge Salz hinzu.|Nomen
受け入れる|受[う]け 入[い]れる|annehmen, aufnehmen, akzeptieren|私[わたし]のことを 受[う]け 入[い]れて 欲[ほ]しいだけです。|Ich will einfach nur von dir akzeptiert werden.|Verb
受け止める|受[う]け 止[と]める|auffangen; auffassen|何[なん]でもかんでもそう 深刻[しんこく]に 受[う]け 止[と]めるな。|Nimm nicht alles so ernst.|Verb
受かる|受[う]かる|bestehen (Prüfung)|トムには 試験[しけん]に 受[う]かってほしいな。|Ich hoffe, Tom schafft die Prüfung.|Verb
受け取り|受[う]け 取[と]り|Empfang, Quittung|招待状[しょうたいじょう]お 受[う]け 取[と]りをお 知[し]らせください。|Bitte bestätigen Sie den Erhalt der Einladung.|Nomen
いつまでも|いつまでも|für immer, ewig|いつまでも 友達[ともだち]でいようね。|Lasst uns für immer Freunde bleiben!|Adverb
聞き取り|聞[き]き 取[と]り|Hörverstehen|大阪[おおさか]の 方言[ほうげん]は 聞[き]き 取[と]り 難[にく]い。|Es ist schwer, den Dialekt von Osaka zu verstehen.|Nomen
書き取り|書[か]き 取[と]り|Diktat, Schreibübung|今日[きょう]は 漢字[かんじ]の 書[か]き 取[と]りがある。|Heute haben wir ein Kanji-Diktat.|Nomen
受け持つ|受[う]け 持[も]つ|zuständig sein, betreuen|田中[たなか] 先生[せんせい]は 三年生[さんねんせい]を 受[う]け 持[も]っています。|Herr Tanaka betreut die dritte Klasse.|Verb
打ち上げる|打[う]ち 上[あ]げる|abschießen, in die Luft schießen|彼[かれ]らはロケットを 打[う]ち 上[あ]げた。|Sie haben eine Rakete gestartet.|Verb
打ち合わせ|打[う]ち 合[あ]わせ|Vorbesprechung, Absprache|打[う]ち 合[あ]わせはいつ 始[はじ]まりますか？|Wann beginnt die Besprechung?|Nomen (mit する)
打ち明ける|打[う]ち 明[あ]ける|anvertrauen, offen gestehen|トムはメアリーに 秘密[ひみつ]を 打[う]ち 明[あ]けた。|Tom offenbarte Maria ein Geheimnis.|Verb
打ち合わせる|打[う]ち 合[あ]わせる|absprechen, vorher besprechen|その 仕事[しごと]をブラウン 氏[し]と 打[う]ち 合[あ]わせた。|Ich habe diese Arbeit mit Herrn Brown abgesprochen.|Verb
打ち消し|打[う]ち 消[け]し|Verneinung, Dementi|彼[かれ]はうわさを 打[う]ち 消[け]したわよ。|Er hat das Gerücht dementiert.|Nomen
しっかり|しっかり|fest, zuverlässig, tüchtig|彼[かれ]は 私[わたし]の 手[て]をしっかりと 握[にぎ]った。|Er hielt fest meine Hand.|Adverb
市役所|市役所[しやくしょ]|Rathaus, Stadtverwaltung|駅[えき]へ 行[い]く 途中[とちゅう]で 市[し] 役所[やくしょ]の 前[まえ]を 通[とお]った。|Ich bin auf dem Weg zum Bahnhof am Rathaus vorbeigekommen.|Nomen
区役所|区役所[くやくしょ]|Bezirksamt|豊島[としま] 区[く] 役所[やくしょ]までどのくらいかかりますか。|Wie lange dauert es, um zur Toshima Bezirksverwaltung zu gehen?|Nomen
重役|重役[じゅうやく]|Vorstandsmitglied, leitende(r) Angestellte(r)|昨日[きのう]の 重役[じゅうやく] 会[かい]は 大成功[だいせいこう]だった。|Die gestrige Vorstandssitzung war ein großer Erfolg.|Nomen
生じる|生[しょう]じる|entstehen; hervorrufen|事故[じこ]は 不注意[ふちゅうい]から 生[しょう]じる。|Unfälle entstehen aus Unachtsamkeit.|Verb
人生|人生[じんせい]|(menschliches) Leben|以前[いぜん]とは 人生[じんせい] 観[かん]も 変[か]わった。|Ich sehe das Leben jetzt anders als früher.|Nomen
生まれ|生[う]まれ|Geburt, Herkunft|私[わたし]は 大阪[おおさか] 生[う]まれです。|Ich wurde in Osaka geboren.|Nomen
一生|一生[いっしょう]|das ganze Leben, lebenslang|あなたのご 親切[しんせつ]は 一生[いっしょう] 忘[わす]れません。|Ich werde Ihre Freundlichkeit mein ganzes Leben lang nicht vergessen.|Nomen
アンケート|アンケート|Umfrage, Fragebogen|アンケートの 項目[こうもく]が 多[おお]すぎる。|Der Fragebogen hat zu viele Punkte.|Nomen
生み出す|生[う]み 出[だ]す|hervorbringen, schaffen|観光[かんこう]が 多[おお]くの 新[あたら]しい 仕事[しごと]を 生[う]み 出[だ]した。|Der Tourismus hat viele neue Arbeitsplätze geschaffen.|Verb
生き方|生[い]き 方[かた]|Lebensweise|実[じつ]を 言[い]うと、 私[わたし]は 彼[かれ]の 生[い]き 方[かた]は 好[す]きではない。|Ehrlich gesagt gefällt mir sein Lebenswandel nicht.|Nomen
生かす|生[い]かす|nutzen, zur Geltung bringen|彼[かれ]はうまく 自分[じぶん]の 才能[さいのう]を 生[い]かしている。|Er macht das Beste aus seinem Talent.|Verb
生き物|生[い]き 物[もの]|Lebewesen|火星[かせい]には 生[い]き 物[もの]がいるのだろうか。|Ob es wohl Lebewesen auf dem Mars gibt?|Nomen
生け花|生[い]け 花[ばな]|Ikebana, Blumensteckkunst|生[い]け 花[ばな]を 習[なら]いたいんです。|Ich möchte Ikebana lernen.|Nomen
生年月日|生年月日[せいねんがっぴ]|Geburtsdatum|あなたの 生年月日[せいねんがっぴ]を 書[か]きなさい。|Schreiben Sie Ihr Geburtsdatum.|Nomen
生理|生理[せいり]|Menstruation, Periode|生理[せいり]がありません。|Ich habe keine Menstruation.|Nomen
スケジュール|スケジュール|Zeitplan, Terminplan|彼女[かのじょ]は 自分[じぶん]のスケジュールを 彼[かれ]のに 合[あ]わせた。|Sie passte ihren Terminplan dem seinen an.|Nomen
生まれつき|生[う]まれつき|von Geburt an, von Natur aus|彼女[かのじょ]には 生[う]まれつきの 気品[きひん]がある。|Sie ist von Natur aus elegant.|Adverb
生|生[せい]|Leben, Dasein|彼[かれ]らはみんな 大学[だいがく] 生[せい]です。|Das sind alles Studenten.|Nomen
生物|生物[せいぶつ]|Lebewesen, Organismus|月[つき]に 生物[せいぶつ]はいない。|Es gibt keine Lebewesen auf dem Mond.|Nomen
生き生きと|生[い]き 生[い]きと|lebhaft, voller Leben|彼[かれ]は 生[い]き 生[い]きとした 想像力[そうぞうりょく]を 持[も]っている。|Er besitzt eine lebendige Einbildungskraft.|Adverb
性能|性能[せいのう]|Leistung, Leistungsfähigkeit (eines Geräts)|電気自動車[でんきじどうしゃ]の 性能[せいのう]はよくなっている。|Die Leistung der E-Autos ist inzwischen gut.|Nomen
性格|性格[せいかく]|Charakter, Wesen|彼女[かのじょ]はすっかり 性格[せいかく]が 変[か]わってしまった。|Ihr Charakter hat sich vollkommen geändert.|Nomen
性|性[せい]|Geschlecht; Natur, Eigenschaft|お 前[まえ]が 間違[まちが]ってるって 可能[かのう] 性[せい]はある？|Ist es möglich, dass du dich irrst?|Nomen
国産|国産[こくさん]|einheimisch, aus eigener Produktion|我々[われわれ] 消費者[しょうひしゃ]は 国産[こくさん] 品[ひん]をもっと 買[か]わなければならない。|Wir Verbraucher müssen mehr einheimische Produkte kaufen.|Nomen
ガソリン|ガソリン|Benzin|ガソリンはこちらの 負担[ふたん]ですか。|Soll ich die Benzinkosten übernehmen?|Nomen
産地|産地[さんち]|Anbaugebiet, Herkunftsort|その 地方[ちほう]はお 茶[ちゃ]の 産地[さんち]です。|Diese Gegend ist ein Anbaugebiet für Tee.|Nomen
出産|出産[しゅっさん]|Geburt, Entbindung|いとこは 来月[らいげつ] 出産[しゅっさん]の 予定[よてい]です。|Meine Cousine erwartet nächsten Monat ihr Kind.|Nomen (mit する)
活用|活用[かつよう]|Nutzung; Flexion (Grammatik)|休憩[きゅうけい]は 短[みじか]いから 十分[じゅうぶん]に 活用[かつよう]しなさい。|Da die Pause kurz ist, solltest du sie gut ausnutzen.|Nomen (mit する)
活字|活字[かつじ]|Druckschrift, Drucktype|この 大[おお]きな 活字[かつじ]は 眼[め]に 楽[らく]だ。|Diese große Schrift ist angenehm fürs Auge.|Nomen
学会|学会[がっかい]|Fachgesellschaft, wissenschaftliche Tagung|盛田[もりた] 教授[きょうじゅ]は 化学[かがく] 学会[がっかい]で 司会[しかい]を 務[つと]めた。|Professor Morita leitete das Treffen der chemischen Gesellschaft.|Nomen
学年|学年[がくねん]|Schuljahr, Jahrgang|学年[がくねん] 末[まつ]の 大掃除[おおそうじ]で、クラスが 協力[きょうりょく]し 合[あ]った。|Beim Großputz am Ende des Schuljahres half die ganze Klasse zusammen.|Nomen
工学|工学[こうがく]|Ingenieurwissenschaften|僕[ぼく]は 大学[だいがく]で 工学[こうがく]を 専攻[せんこう]するつもりだ。|Ich habe vor, an der Universität Ingenieurwissenschaften zu studieren.|Nomen
カット|かっと|Schnitt, Schneiden|カットの 予約[よやく]をしたいんですけど。|Ich möchte einen Termin zum Haareschneiden.|Nomen (mit する)
学長|学長[がくちょう]|Universitätspräsident(in), Rektor(in)|学長[がくちょう]は 生徒[せいと]たちに 次[つぎ]の 通[とお]りに 講演[こうえん]した。|Der Rektor hielt vor den Studenten folgende Rede.|Nomen
語学|語学[ごがく]|Sprachenlernen, Sprachstudium|メグは 語学[ごがく]の 才能[さいのう]がある。|Meg hat eine Begabung für Sprachen.|Nomen
工学部|工学部[こうがくぶ]|ingenieurwissenschaftliche Fakultät|兄[あに]は 工学部[こうがくぶ]の 学生[がくせい]です。|Mein älterer Bruder studiert an der ingenieurwissenschaftlichen Fakultät.|Nomen
学費|学費[がくひ]|Studiengebühren, Schulgeld|学費[がくひ]の 半分[はんぶん]は 父[ちち]に 頼[たの]むつもりです。|Um die Hälfte der Studiengebühren will ich meinen Vater bitten.|Nomen
学部|学部[がくぶ]|Fakultät|あの 人[ひと] 何[なん] 学部[がくぶ]だっけ？|Zu welcher Fakultät gehört der noch mal?|Nomen
学力|学力[がくりょく]|schulische Leistungsfähigkeit|将来[しょうらい]のキャリアに 備[そな]えて 語[ご] 学力[がくりょく]を 伸[の]ばしている。|Ich verbessere meine Sprachkenntnisse für meine spätere Laufbahn.|Nomen
休学|休学[きゅうがく]|Beurlaubung vom Studium|トムは 休学[きゅうがく]にはならなかった。|Tom wurde nicht vom Unterricht beurlaubt.|Nomen (mit する)
スター|スター|Star|クラベスターとギズモは 猫[ねこ]です。|Klabaster und Gizmo sind Katzen.|Nomen
教員|教員[きょういん]|Lehrkraft|皆[みな]さんは 教員[きょういん]なんですか？|Sind Sie alle Lehrer?|Nomen
キリスト教|キリスト 教[きょう]|Christentum|キリスト 教[きょう]はアブラハムの 宗教[しゅうきょう]の 一[ひと]つです。|Das Christentum ist eine der abrahamitischen Religionen.|Nomen
イスラム教|イスラム 教[きょう]|Islam|トムはキリスト 教[きょう]からイスラム 教[きょう]に 改宗[かいしゅう]した。|Tom konvertierte vom Christentum zum Islam.|Nomen
教わる|教[おそ]わる|unterrichtet werden, lernen (von jemandem)|私[わたし]は 外国語[がいこくご]を 二[ふた]つ 教[おそ]わっている。|Ich lerne zwei Fremdsprachen.|Verb
教え|教[おし]え|Lehre, Unterweisung|聖書[せいしょ]には、 賢[かしこ]い 教[おし]えがたくさん 見付[みつ]かります。|In der Bibel finden sich viele weise Lehren.|Nomen
制御|制御[せいぎょ]|Steuerung, Kontrolle|ジムは 怒[いか]りを 制御[せいぎょ]することができた。|Jim konnte seine Wut unterdrücken.|Nomen (mit する)
強力|強力[きょうりょく]|stark, leistungsfähig|日本[にほん]は 経済的[けいざいてき]に 強力[きょうりょく]な 国家[こっか]になった。|Japan ist wirtschaftlich zu einer starken Nation geworden.|な-Adjektiv
強制|強制[きょうせい]|Zwang|トムは 私[わたし]に 箱[はこ]を 開[あ]けるよう 強制[きょうせい]した。|Tom zwang mich, die Schachtel zu öffnen.|Nomen (mit する)
カメラマン|カメラマン|Fotograf(in), Kameramann|彼[かれ]は 大学[だいがく] 卒業後[そつぎょうご]カメラマンになった。|Nach seinem Universitätsabschluss wurde er Kameramann.|Nomen
最強|最強[さいきょう]|stärkste(r, s)|トムが 最強[さいきょう]。|Tom ist der Stärkste.|Nomen
心強い|心強[こころづよ]い|beruhigend, ermutigend|助[たす]けてくれる 人[ひと]がいると 心強[こころづよ]いです。|Es ist beruhigend, wenn man jemanden hat, der einem hilft.|Adjektiv
強引|強引[ごういん]|aufdringlich, mit Gewalt|与党[よとう]は 強引[ごういん]に 税制[ぜいせい] 法案[ほうあん]を 通過[つうか]させた。|Die Regierungspartei drückte mit Gewalt den Entwurf des Steuergesetzes durch.|Adjektiv
引用|引用[いんよう]|Zitat|この 引用[いんよう]はどこから 持[も]ってきたの？|Woher stammt dieses Zitat?|Nomen (mit する)
字引|字引[じびき]|Wörterbuch|彼[かれ]は 生[い]き 字引[じびき]と 呼[よ]ばれている。|Man nennt ihn ein wandelndes Wörterbuch.|Nomen
学習|学習[がくしゅう]|Lernen|彼女[かのじょ]は 教[おし]え 方[かた]を 学習[がくしゅう]の 遅[おそ]い 生徒[せいと]に 合[あ]わせた。|Sie passte ihre Lehrmethoden an die Schüler mit langsamem Lerntempo an.|Nomen (mit する)
試合|試合[しあい]|Spiel, Wettkampf|きょうの 試合[しあい]はどうでしたか。|Wie war das Spiel heute?|Nomen (mit する)
アルコール|アルコール|Alkohol|彼女[かのじょ]はアルコール 中毒[ちゅうどく]だ。|Sie ist Alkoholikerin.|Nomen
試みる|試[こころ]みる|versuchen|それでも 私[わたし]は 試[こころ]みた。|Ich habe es dennoch versucht.|Verb
受験|受験[じゅけん]|Ablegen einer Prüfung|私[わたし]は 受験[じゅけん] 勉強[べんきょう]に 専念[せんねん]するつもりです。|Ich werde mich mit voller Konzentration für die Aufnahmeprüfungen vorbereiten.|Nomen (mit する)
性質|性質[せいしつ]|Wesen, Eigenschaft|油[あぶら]は 水[みず]に 浮[う]く 性質[せいしつ]がある。|Öl hat die Eigenschaft, auf Wasser zu schwimmen.|Nomen
悪質|悪質[あくしつ]|bösartig, heimtückisch|悪質[あくしつ]な 嫌[いや]がらせでした。|Es war eine bösartige Schikane.|な-Adjektiv
質|質[しつ]|Qualität|量[りょう]より 質[しつ]が 重要[じゅうよう]だ。|Qualität ist wichtiger als Quantität.|Nomen
学問|学問[がくもん]|Wissenschaft, Gelehrsamkeit|言語学[げんごがく]は 言語[げんご]を 記述[きじゅつ]しようとする 学問[がくもん]である。|Linguistik ist eine Wissenschaft, die versucht, Sprache zu beschreiben.|Nomen (mit する)
有り難い|有[あ]り 難[がた]い|dankenswert, willkommen|お 手伝[てつだ]いいただければたいへん 有[あ]り 難[がた]いと 思[おも]います。|Ich wäre Ihnen sehr dankbar, wenn Sie mir helfen könnten.|Adjektiv
せめて|せめて|wenigstens, zumindest|せめてあと 十分[じゅっぷん] 待[ま]ってくれませんか。|Kannst du nicht wenigstens noch zehn Minuten warten?|Adverb
重点|重点[じゅうてん]|Schwerpunkt|討論[とうろん]での 重点[じゅうてん]は 失業[しつぎょう] 問題[もんだい]であった。|Schwerpunkt der Diskussion war die Arbeitslosigkeit.|Nomen
弱点|弱点[じゃくてん]|Schwachpunkt|数学[すうがく]は 彼女[かのじょ]の 弱点[じゃくてん]です。|Mathematik ist ihre Schwachstelle.|Nomen
少数|少数[しょうすう]|kleine Anzahl, Minderheit|我々[われわれ]は 少数[しょうすう] 民族[みんぞく]の 権利[けんり]を 守[まも]らなければならない。|Wir müssen uns für Minderheitenrechte einsetzen.|Nomen
小数|小数[しょうすう]|Dezimalzahl, Dezimalstelle|次[つぎ]の 分数[ぶんすう]を 小数[しょうすう]に 直[なお]しなさい。|Wandele die folgenden Bruchzahlen in Dezimalzahlen um!|Nomen
回路|回路[かいろ]|Schaltkreis|男[おとこ]の 人[ひと]の 思考[しこう] 回路[かいろ]って 分[わ]かんない。|Ich kann die Denkweise von Männern nicht nachvollziehen.|Nomen
回数|回数[かいすう]|Häufigkeit, Anzahl der Male|最近[さいきん] 遅刻[ちこく]の 回数[かいすう]が 増[ふ]えている。|In letzter Zeit kommst du häufiger zu spät.|Nomen
前回|前回[ぜんかい]|letztes Mal|前回[ぜんかい]パンを 焼[や]いたのはいつ？|Wann hast du das letzte Mal Brot gebacken?|Nomen
ストレス|ストレス|Stress|彼女[かのじょ]はストレスに 対処[たいしょ]できない。|Sie kann nicht mit Stress umgehen.|Nomen
後回し|後回[あとまわ]し|Aufschieben, Hintanstellen|食事[しょくじ]は 後回[あとまわ]しにしよう。|Verschieben wir das Essen auf später.|Nomen
個性|個性[こせい]|Individualität, Persönlichkeit|彼女[かのじょ]は 個性[こせい]が 強[つよ]い。|Sie hat eine starke Persönlichkeit.|Nomen
個々|個々[ここ]|einzeln, jede(r, s) für sich|個々[ここ]の 戦闘[せんとう]にはみな 勝[か]っても 戦争[せんそう]に 負[ま]けることがある。|Man kann jede einzelne Schlacht gewinnen und trotzdem den Krieg verlieren.|Nomen
勝手|勝手[かって]|eigenmächtig, egoistisch|トムが 自分[じぶん] 勝手[かって]だとは 思[おも]わないよ。|Ich halte Tom nicht für egoistisch.|Adjektiv
決勝|決勝[けっしょう]|Finale, Endspiel|決勝[けっしょう] 戦[せん]はそれほど 興奮[こうふん]する 試合[しあい]ではなかった。|Das Endspiel war nicht sehr spannend.|Nomen
勝ち|勝[か]ち|Sieg|試合[しあい]は 彼[かれ]の 勝[か]ちに 終[お]わった。|Das Spiel endete für ihn mit einem Sieg.|Nomen
勝負|勝負[しょうぶ]|Wettkampf, Entscheidung|人生[じんせい]とは、チェスの 一[いち] 勝負[しょうぶ]のようなもの。|Das Leben ist wie ein Schachspiel.|Nomen (mit する)
担ぐ|担[かつ]ぐ|auf der Schulter tragen|彼[かれ]は 肩[かた]に 銃[じゅう]を 担[かつ]いだ。|Er trug ein Gewehr auf seiner Schulter.|Verb
コード|コード|Kabel, Schnur|彼[かれ]は 機械[きかい]にコードをつないだ。|Er hat das Kabel an die Maschine angeschlossen.|Nomen
当てる|当[あ]てる|treffen; erraten; gewinnen (Los)|彼[かれ]は 胸[むね]に 手[て]を 当[あ]てた。|Er legte die Hand aufs Herz.|Verb
当たり前|当[あ]たり 前[まえ]|selbstverständlich, natürlich|当[あ]たり 前[まえ]のこと 言[い]うなよ。|Sag' das nicht, als wäre es selbstverständlich!|な-Adjektiv
見当|見当[けんとう]|Schätzung, Ahnung|何時[なんじ]なのか 見当[けんとう]もつかない。|Ich habe keine Ahnung, wie spät es ist.|Nomen
当たり|当[あ]たり|Treffer, Erfolg|一人[ひとり] 当[あ]たりの 生産性[せいさんせい]はどれくらいですか？|Wie hoch ist die Produktivität pro Person?|Nomen
規制|規制[きせい]|Regulierung, Beschränkung|食事[しょくじ]は 規制[きせい] 正[ただ]しくとりなさい。|Ihr müsst regelmäßig essen.|Nomen (mit する)
経費|経費[けいひ]|Kosten, Ausgaben|彼女[かのじょ]は 自分[じぶん]の 経費[けいひ]を 減[へ]らそうとしている。|Sie versuchte, ihre Ausgaben zu senken.|Nomen
済む|済[す]む|erledigt sein, zu Ende gehen|夕食[ゆうしょく]を 済[す]ませたら 出[で]かけるよ。|Ich gehe nach dem Abendessen raus.|Verb
コーチ|コーチ|Trainer(in), Coach|トムはコーチです。|Tom ist ein Trainer.|Nomen (mit する)
済ませる|済[す]ませる|erledigen, hinter sich bringen|私[わたし]は 週末[しゅうまつ]までに 済[す]ませなければならない 仕事[しごと]がたくさんある。|Ich habe bis zum Wochenende noch viel Arbeit zu erledigen.|Verb
済ます|済[す]ます|erledigen, abschließen|電話[でんわ]で 済[す]まそうと 思[おも]いました。|Ich dachte, ich könnte es per Telefon erledigen.|Verb
株式|株式[かぶしき]|Aktie(n)|株式[かぶしき]は 一晩[ひとばん]のうちに 下[さ]がった。|Die Aktie sank über Nacht.|Nomen
式|式[しき]|Zeremonie, Feier|私[わたし]は 昨日[きのう]、 結婚[けっこん] 式[しき]でスピーチをしました。|Ich hielt auf der Hochzeitsfeier gestern eine Ansprache.|Nomen
業界|業界[ぎょうかい]|Branche|この 業界[ぎょうかい]ではもう 年[とし]をとりすぎている。|Ich bin zu alt für diese Welt.|Nomen
営業|営業[えいぎょう]|Vertrieb; Geschäftsbetrieb|営業[えいぎょう] 時間[じかん]は 何時[いつ]から 何時[なんじ]までですか？|Wie sind die Öffnungszeiten?|Nomen (mit する)
休業|休業[きゅうぎょう]|Betriebsruhe, geschlossen|多[おお]くの 会社[かいしゃ]が 休業[きゅうぎょう]した。|Viele Firmen stellten den Betrieb vorübergehend ein.|Nomen (mit する)
ステージ|ステージ|Bühne|ジョンはステージで 何[なに]を 歌[うた]いましたか。|Was hat John auf der Bühne gesungen?|Nomen
事業|事業[じぎょう]|Unternehmen, Projekt, Geschäft|彼女[かのじょ]は 自分[じぶん]の 事業[じぎょう]で 偉大[いだい]な 成功[せいこう]を 収[おさ]めた。|Sie erreichte einen großen Erfolg in ihrem Geschäft.|Nomen
金利|金利[きんり]|Zinsen, Zinssatz|高[こう] 金利[きんり]で 金[かね]を 借[か]りた。|Wir haben das Geld bei einem hohen Zinssatz geliehen.|Nomen
利く|利[き]く|wirken, funktionieren|メアリーはとても 気[き]が 利[き]くよね。|Maria ist sehr aufgeweckt.|Verb
収入|収入[しゅうにゅう]|Einkommen|今[いま]の 収入[しゅうにゅう]に 満足[まんぞく]している。|Ich bin mit meinem jetzigen Einkommen zufrieden.|Nomen
芸術|芸術[げいじゅつ]|Kunst|これは 芸術[げいじゅつ]なの？|Ist das Kunst?|Nomen
製品|製品[せいひん]|Erzeugnis, Produkt|これらの 製品[せいひん]は 同[おな]じ 品質[ひんしつ]です。|Diese Produkte sind von gleicher Qualität.|Nomen
製作|製作[せいさく]|Herstellung, Produktion (Film, Werk)|新[あたら]しいポスターを 製作[せいさく]した。|Wir haben ein neues Plakat angefertigt.|Nomen (mit する)
作製|作製[さくせい]|Anfertigung, Herstellung|地図[ちず]を 作製[さくせい]する 仕事[しごと]をしています。|Ich arbeite in der Anfertigung von Landkarten.|Nomen (mit する)
アドバイス|アドバイス|Rat, Ratschlag|彼[かれ]のアドバイスのおかげで、 私[わたし]は 成功[せいこう]した。|Dank seines Ratschlages hatte ich Erfolg.|Nomen (mit する)
必ずしも|必[かなら]ずしも|nicht unbedingt, nicht immer|夢[ゆめ]は 必[かなら]ずしも 実現[じつげん]しないものだ。|Träume werden nicht immer wahr.|Adverb
求人|求人[きゅうじん]|Stellenangebot|彼[かれ]は 丁寧[ていねい]に 求人[きゅうじん]の 依頼[いらい]を 断[ことわ]った。|Er lehnte höflich die Arbeitsstelle ab.|Nomen (mit する)
額|額[がく]|Bilderrahmen|彼[かれ]は 額[がく]の 汗[あせ]を 拭[ぬぐ]った。|Er wischte sich den Schweiß von der Stirn.|Nomen
金額|金額[きんがく]|Geldbetrag|あなたが 使[つか]った 金額[きんがく]は 全部[ぜんぶ]でいくらですか。|Wie hoch ist der Betrag, den Sie insgesamt ausgegeben haben?|Nomen
計|計[けい]|Summe, insgesamt|温度[おんど] 計[けい]は 温度[おんど]を 測[はか]る 器具[きぐ]です。|Ein Thermometer ist ein Instrument zum Messen der Temperatur.|Nomen
合計|合計[ごうけい]|Gesamtsumme|合計[ごうけい]でいくらですか。|Wie viel macht das insgesamt?|Nomen (mit する)
家計|家計[かけい]|Haushaltskasse, Haushaltsbudget|妻[つま]が 家計[かけい] 簿[ぼ]をつけています。|Meine Frau führt das Haushaltsbuch.|Nomen
アルミニウム|アルミニウム|Aluminium|アルミニウム、マグネシウム、シリコンなどの 粉末[ふんまつ]が 爆発[ばくはつ]する。|Aluminium-, Magnesium-, Silikon- und ähnlicher Staub kann explodieren.|Nomen
会計|会計[かいけい]|Rechnung, Bezahlen; Buchhaltung|お 会計[かいけい]お 願[ねが]いします。|Ich hätte gern die Rechnung.|Nomen
寒暖計|寒暖計[かんだんけい]|Thermometer|寒暖[かんだん] 計[けい]は 零下[れいか]に 下[さ]がった。|Das Thermometer fiel unter null.|Nomen
差|差[さ]|Unterschied, Differenz|それは 大変[たいへん]な 差[さ]である。|Das macht einen enormen Unterschied.|Nomen
格差|格差[かくさ]|Kluft, Gefälle|裕福[ゆうふく]な 人々[ひとびと]と 貧[まず]しい 人々[ひとびと]との 格差[かくさ]はますます 広[ひろ]がっている。|Die Kluft zwischen den Reichen und den Armen wächst.|Nomen
差し出す|差[さ]し 出[だ]す|hinstrecken, einreichen|彼女[かのじょ]は 手[て]を 差[さ]し 出[だ]した。|Sie streckte die Hand aus.|Verb
時差|時差[じさ]|Zeitunterschied|時差[じさ]ボケで 辛[つら]い。|Der Zeitzonenunterschied macht mir zu schaffen.|Nomen
差す|差[さ]す|aufspannen (Schirm)|雲[くも]が 晴[は]れて 陽[ひ]が 差[さ]し 始[はじ]めた。|Die Wolken verzogen sich, und die Sonne begann zu scheinen.|Verb
オーケストラ|オーケストラ|Orchester|学校[がっこう]のオーケストラに 入[はい]るつもりなのだ。|Ich habe vor, ins Schulorchester einzutreten.|Nomen
差し上げる|差[さ]し 上[あ]げる|geben (bescheiden)|シーガル 先生[せんせい]の 電話番号[でんわばんごう]を 差[さ]し 上[あ]げます。|Ich werde Ihnen die Telefonnummer von Dr. Shiegal geben.|Verb
学割|学割[がくわり]|Studentenrabatt|学割[がくわり]で 切符[きっぷ]を 安[やす]く 買[か]いました。|Mit Studentenrabatt habe ich die Fahrkarte günstig gekauft.|Nomen
時間割り|時間割[じかんわ]り|Stundenplan|新[あたら]しい 時間割[じかんわ]りをもらいました。|Ich habe den neuen Stundenplan bekommen.|Nomen
残業|残業[ざんぎょう]|Überstunden|恐縮[きょうしゅく]だが、 残業[ざんぎょう]してもらわないと。|Es tut mir schrecklich leid, aber Sie müssen Überstunden machen.|Nomen (mit する)
残暑|残暑[ざんしょ]|Spätsommerhitze|残暑[ざんしょ] 厳[きび]しい 折[おり]いかがお 過[す]ごしでしょうか。|Wie geht es Ihnen in dieser drückenden Spätsommerhitze?|Nomen
支店|支店[してん]|Filiale, Zweigstelle|新[あたら]しい 支店[してん]が 来月[らいげつ]シカゴに 開店[かいてん]する。|Eine neue Filiale wird nächsten Monat in Chicago eröffnet.|Nomen
支持|支持[しじ]|Unterstützung, Rückhalt|僕[ぼく]は 彼[かれ]を 支持[しじ]した。|Ich unterstützte ihn.|Nomen (mit する)
支出|支出[ししゅつ]|Ausgaben|今月[こんげつ]は 支出[ししゅつ]を 切[き]りつめなければならない。|Ich muss diesen Monat meine Ausgaben reduzieren.|Nomen (mit する)
おじさん|おじさん|Mann mittleren Alters; Onkel|私[わたし]はおじさんの 家[いえ]に 行[い]ったことがない。|Ich war niemals beim Haus meines Onkels.|Nomen
支配|支配[しはい]|Herrschaft, Kontrolle|支配[しはい] 人[にん]さんにお 会[あ]いしたいのですが。|Ich möchte den Manager sprechen.|Nomen (mit する)
収支|収支[しゅうし]|Einnahmen und Ausgaben|何[なん]とか 収支[しゅうし]が 合[あ]えばいいんだが。|Hoffentlich gleichen sich Einnahmen und Ausgaben irgendwie aus.|Nomen
支度|支度[したく]|Vorbereitung, Fertigmachen|朝食[ちょうしょく]の 支度[したく]をしなければならないんです。|Ich muss Frühstück machen.|Nomen (mit する)
支える|支[ささ]える|stützen, unterstützen|彼[かれ]の 給料[きゅうりょう]は 安[やす]すぎて 一家[いっか]を 支[ささ]えていけない。|Sein Lohn ist zu gering, um seine Familie zu unterstützen.|Verb
支社|支社[ししゃ]|Zweigniederlassung|弊社[へいしゃ]の 支社[ししゃ]は 全国[ぜんこく]にあります。|Unsere Firma hat Zweigstellen im ganzen Land.|Nomen
支払う|支払[しはら]う|bezahlen|誰[だれ]かがそれを 支払[しはら]わなければいけない。|Irgend jemand muß das bezahlen.|Verb
支払い|支払[しはら]い|Zahlung|彼[かれ]は 借金[しゃっきん]の 支払[しはら]いを 要求[ようきゅう]した。|Er forderte die Bezahlung der Schuld.|Nomen (mit する)
コンクール|コンクール|Wettbewerb|まもなく 音楽[おんがく]コンクールがあります。|Wir werden bald einen Musikwettbewerb haben.|Nomen
言い返す|言[い]い 返[かえ]す|erwidern, Widerworte geben|言[い]い 返[かえ]すことが 目的[もくてき]になってる。|Das Widersprechen ist zum Selbstzweck geworden.|Verb
返る|返[かえ]る|zurückkehren, zurückkommen|汚[きたな]い 行為[こうい]の 報[むく]いは 必[かなら]ず 自分[じぶん]に 返[かえ]ってくる。|Wer andern eine Grube gräbt, fällt selbst hinein.|Verb
借り|借[か]り|Schuld, Geliehenes|彼[かれ]には 大[おお]きな 借[か]りがあります。|Ich stehe tief in seiner Schuld.|Nomen
借金|借金[しゃっきん]|Schulden|ぼくは 借金[しゃっきん]で 首[くび]が 回[まわ]らないよ。|Ich stecke bis über die Ohren in Schulden.|Nomen (mit する)
貸し出し|貸[か]し 出[だ]し|Ausleihe, Verleih|金利[きんり]が 低下[ていか]したので 銀行[ぎんこう] 貸[か]し 出[だ]しが 増加[ぞうか]している。|Da der Zinssatz gesunken ist, steigt die Anzahl der Bankdarlehen.|Nomen (mit する)
貸し|貸[か]し|Darlehen; etwas guthaben|彼[かれ]には 一[ひと]つ 貸[か]しがあります。|Bei ihm habe ich noch etwas gut.|Nomen
申請|申請[しんせい]|Antrag|もうパスポートを 申請[しんせい]しましたか。|Hast du schon einen Reisepass beantragt?|Nomen (mit する)
アマチュア|アマチュア|Amateur(in)|彼[かれ]はアマチュアにすぎない。|Er ist nur ein Amateur.|Nomen
込める|込[こ]める|hineinlegen, erfüllen mit|私[わたし]は 心[こころ]を 込[こ]めて 話[はな]した。|Ich sprach offenherzig.|Verb
打ち込む|打[う]ち 込[こ]む|sich hingeben, sich vertiefen|自分[じぶん]の 事[こと]に 打[う]ち 込[こ]みなさい。|Stecke deine Nase nicht in fremde Angelegenheiten.|Verb
思い込む|思[おも]い 込[こ]む|fest glauben, überzeugt sein|メアリーはトムに 好[す]かれてるって 思[おも]い 込[こ]んでるんだ。|Maria ist davon überzeugt, Tom zu gefallen.|Verb
初期|初期[しょき]|Anfangsphase, Frühstadium|病気[びょうき]はまだ 初期[しょき]の 段階[だんかい]です。|Die Krankheit befindet sich noch im Anfangsstadium.|Nomen
学期|学期[がっき]|Schulhalbjahr, Semester|新[しん] 学期[がっき]だし 何[なに]か 新[あたら]しいこと 始[はじ]めたいな。|Es ist das neue Semester; da will ich etwas Neues anfangen!|Nomen
後期|後期[こうき]|zweite Hälfte (eines Zeitraums), Wintersemester|後期[こうき]が 終[お]わった。|Das zweite Semester ist zu Ende.|Nomen
前期|前期[ぜんき]|erste Hälfte (eines Zeitraums); voriges Halbjahr|前期[ぜんき]の 試験[しけん]は 来週[らいしゅう]です。|Die Prüfungen des ersten Halbjahres sind nächste Woche.|Nomen
きつい|きつい|hart, streng, scharf|彼女[かのじょ]はきつい 言[い]い 方[かた]をする 人[ひと]だ。|Sie hat eine scharfe Zunge.|Adjektiv
期日|期日[きじつ]|Termin, Fälligkeitstag|試験[しけん] 期日[きじつ]を 照会[しょうかい]してみる 必要[ひつよう]がある。|Wir müssen uns nach dem Prüfungstermin erkundigen.|Nomen
新学期|新学期[しんがっき]|neues Schulhalbjahr, neues Semester|新[しん] 学期[がっき]が 始[はじ]まっちゃった。|Das neue Semester hat angefangen.|Nomen
限り|限[かぎ]り|Grenze; soweit, solange|生[い]きてる 限[かぎ]りは、 働[はたら]かなければならない。|Solange wir leben, müssen wir arbeiten.|Nomen
制限|制限[せいげん]|Beschränkung, Begrenzung|制限[せいげん] 速度[そくど]ってある？|Gibt es eine Geschwindigkeitsbegrenzung?|Nomen (mit する)
限界|限界[げんかい]|Grenze, Limit|彼女[かのじょ]は 自分[じぶん]の 限界[げんかい]を 知[し]っている。|Sie kennt ihre Grenzen.|Nomen
期限|期限[きげん]|Frist|出来[でき]る 限[かぎ]り 期限[きげん] 内[ない]に 終[お]えるようにやってみます。|Ich versuche es nach Möglichkeit innerhalb der Frist fertigzustellen.|Nomen
限度|限度[げんど]|Grenze, Obergrenze|人間[にんげん]の 進歩[しんぽ]には 限度[げんど]がない。|Es gibt keine Grenze für menschlichen Fortschritt.|Nomen
大急ぎ|大急[おおいそ]ぎ|große Eile|彼[かれ]は 大急[おおいそ]ぎでオフィスを 去[さ]った。|Er verließ das Büro in großer Eile.|な-Adjektiv
コーナー|コーナー|Ecke; Abteilung, Stand|いつコーナーを 曲[ま]がるかはむずかしい 問題[もんだい]です。|Wann man um die Ecke biegt, ist eine schwierige Frage.|Nomen
急用|急用[きゅうよう]|dringende Angelegenheit|急用[きゅうよう]で 彼[かれ]は 来[く]る 事[こと]が 出来[でき]なかった。|Aufgrund einer wichtigen Angelegenheit konnte er nicht kommen.|Nomen
一切|一切[いっさい]|überhaupt (nicht); alles|トムはアルコールを 一切[いっさい] 飲[の]まない。|Tom trinkt nie Alkohol.|Adverb
区切る|区切[くぎ]る|abteilen, unterteilen|時間[じかん]を 区切[くぎ]って 集中[しゅうちゅう]して 取[と]り 組[く]むと、 効率[こうりつ]は 大[おお]きく 向上[こうじょう]する。|Wenn man die Zeit einteilt und konzentriert arbeitet, steigt die Effizienz deutlich.|Verb
思い切って|思[おも]い 切[き]って|entschlossen, kurzerhand|彼女[かのじょ]は 思[おも]い 切[き]って 彼[かれ]にたずねた。|Sie fragte ihn entschlossen.|Adverb
品切れ|品切[しなぎ]れ|ausverkauft, nicht vorrätig|あいにく 品切[しなぎ]れになってしまったんですが。|Leider ist es ausverkauft.|Nomen
思い切り|思[おも]い 切[き]り|nach Herzenslust, mit aller Kraft|思[おも]い 切[き]り 泣[な]いてよ。|Weine, so viel du willst.|Adverb
切れ|切[き]れ|Schärfe, Schneidfähigkeit|この 包丁[ほうちょう]は 切[き]れがいいです。|Dieses Küchenmesser schneidet gut.|Nomen
ぎりぎり|ぎりぎり|gerade noch, knapp|彼[かれ]は 最後[さいご]の 電車[でんしゃ]にぎりぎり 間[ま]に 合[あ]った。|Er hat den letzten Zug gerade noch erreicht.|Adverb
券|券[けん]|Karte, Schein, Ticket|航空[こうくう] 券[けん]はどこで 受[う]け 取[と]ればいいですか？|Wo kann ich meine Flugkarte abholen?|Nomen
回数券|回数券[かいすうけん]|Mehrfahrtenkarte|回数[かいすう] 券[けん]を 下[くだ]さい。|Eine Mehrfahrtenkarte bitte.|Nomen
世代|世代[せだい]|Generation|彼[かれ]らは 年上[としうえ]の 世代[せだい]と 何[なん]の 共通点[きょうつうてん]もない。|Sie haben keinerlei Gemeinsamkeiten mit der älteren Generation.|Nomen
代わり|代[か]わり|Ersatz, anstelle von|お 金[かね]は 健康[けんこう]の 代[か]わりにはならない。|Geld ist kein Ersatz für die Gesundheit.|Nomen
近代|近代[きんだい]|Neuzeit, Moderne|近代[きんだい] 技術[ぎじゅつ]は 多[おお]くの 物[もの]を 与[あた]えてくれる。|Die moderne Technik beschert uns vielerlei.|Nomen
古代|古代[こだい]|Altertum, Antike|ローマは 古代[こだい] 建築[けんちく]で 有名[ゆうめい]だ。|Rom ist für seine antiken Gebäude bekannt.|Nomen
代わる代わる|代[か]わる 代[が]わる|abwechselnd, der Reihe nach|私[わたし]たちは 代[か]わる 代[が]わる 寝[ね]た。|Wir schliefen abwechselnd.|Adverb
ウサギ|ウサギ|Hase, Kaninchen|ウサギはどうして 耳[みみ]が 長[なが]いんですか？|Warum haben Kaninchen lange Löffel?|Nomen
指す|指[さ]す|zeigen auf, hindeuten|後指[うしろゆび]を 指[さ]すのはやめたまえ。|Unterlasse es, anderen übel nachzureden!|Verb
小指|小指[こゆび]|kleiner Finger, kleiner Zeh|足[あし]の 小指[こゆび]が 痛[いた]むんだ。|Ich habe Schmerzen in meinem kleinen Zeh.|Nomen
安定|安定[あんてい]|Stabilität, Ausgeglichenheit|卸売物価[おろしうりぶっか]は 基本的[きほんてき]に 安定[あんてい]している。|Die Großhandelspreise sind im Wesentlichen stabil.|Nomen (mit する)
規定|規定[きてい]|Bestimmung, Vorschrift|小麦[こむぎ]の 輸入禁止[ゆにゅうきんし]が 法律[ほうりつ]で 規定[きてい]された。|Das Einfuhrverbot für Weizen wurde gesetzlich festgelegt.|Nomen (mit する)
定める|定[さだ]める|festlegen, bestimmen|それは 法律[ほうりつ]が 定[さだ]めていることである。|Das ist gesetzlich festgelegt.|Verb
指定|指定[してい]|Bestimmung, Festlegung, Reservierung|別[べつ]の 日[ひ]をご 指定[してい]いただけませんか。|Könnten Sie bitte einen anderen Tag bestimmen?|Nomen (mit する)
悪化|悪化[あっか]|Verschlechterung|午後[ごご]には 天候[てんこう]が 悪化[あっか]します。|Am Nachmittag verschlechtert sich das Wetter.|Nomen (mit する)
化学|化学[かがく]|Chemie|化学[かがく]が 嫌[きら]いだ。|Ich hasse Chemie.|Nomen
グラウンド|グラウンド|Sportplatz|あなたはグラウンドに 着[つ]いていますか？|Bist du schon auf dem Sportplatz angekommen?|Nomen
消化|消化[しょうか]|Verdauung|チーズは 簡単[かんたん]に 消化[しょうか]しない。|Käse ist nicht einfach zu verdauen.|Nomen (mit する)
更に|更[さら]に|außerdem, noch mehr|私[わたし]は 退学[たいがく]する 事[こと]を 考[かんが]えたが 更[さら]に 考[かんが]え 直[なお]して 止[や]めた。|Ich dachte daran, die Schule zu verlassen, aber dann überlegte ich es mir nochmal und gab den Gedanken auf.|Adverb
今更|今更[いまさら]|jetzt noch, zu spät|今更[いまさら] 泣[な]いても 仕方[しかた]がない。|Weinen bringt jetzt auch nichts mehr.|Adverb
急増|急増[きゅうぞう]|sprunghafter Anstieg|旅行会社[りょこうがいしゃ]の 収益[しゅうえき]が 急増[きゅうぞう]した。|Die Gewinne der Reisegesellschaften stiegen gewaltig.|Nomen (mit する)
減少|減少[げんしょう]|Abnahme, Rückgang|赤字[あかじ]は 徐々[じょじょ]に 減少[げんしょう]している。|Das Defizit sinkt allmählich.|Nomen (mit する)
乗車券|乗車券[じょうしゃけん]|Fahrkarte|乗車[じょうしゃ] 券[けん]が 見[み]つからない。|Ich finde meine Fahrkarte nicht.|Nomen
乗車|乗車[じょうしゃ]|Einsteigen, Mitfahren|ご 乗車[じょうしゃ] 願[ねが]います！|Bitte einsteigen!|Nomen (mit する)
さっぱり|さっぱり|überhaupt (nicht); erfrischt, klar|私[わたし]はゴルフのやり 方[かた]はさっぱりわからない。|Ich weiß überhaupt nicht, wie man Golf spielt.|Adverb
乗客|乗客[じょうきゃく]|Fahrgast, Passagier(in)|かなり 多[おお]くの 乗客[じょうきゃく]が 船[ふね]に 乗[の]っていた。|Es waren eine Menge Passagiere an Bord des Schiffes.|Nomen
雨降り|雨降[あめふ]り|Regen, Regenwetter|昨日[きのう]は 雨降[あめふ]りでした。|Gestern hat es geregnet.|Nomen
税金|税金[ぜいきん]|Steuer(n)|私[わたし]は 税金[ぜいきん]についてあなたの 意見[いけん]に 賛成[さんせい]です。|Ich stimme deinen Ansichten zur Steuer zu.|Nomen
税|税[ぜい]|Steuer, Abgabe|価格[かかく]には 消費[しょうひ] 税[ぜい]は 含[ふく]まれていません。|Im Preis ist keine Mehrwertsteuer enthalten.|Nomen
私立|私立[しりつ]|privat (Schule usw.)|私立[しりつ] 大学[だいがく]の 数[かず]が 増[ふ]えた。|Die Zahl der privaten Universitäten ist gestiegen.|Nomen
市立|市立[しりつ]|städtisch|私[わたし]は 市[し] 立[りつ] 図書館[としょかん]で 本[ほん]を 借[か]りています。|Ich leihe mir Bücher in der Stadtbibliothek aus.|Nomen
県立|県立[けんりつ]|von der Präfektur getragen|妹[いもうと]は 県立[けんりつ]の 高校[こうこう]に 通[かよ]っています。|Meine jüngere Schwester besucht eine Oberschule der Präfektur.|Nomen
シャッター|シャッター|Rollladen; Verschluss (Kamera)|シャッター 開[あ]けるの 忘[わす]れてた。|Ich habe vergessen, den Rollladen zu öffnen.|Nomen
国立|国立[こくりつ]|staatlich, national|この 国立[こくりつ] 公園[こうえん]には 景色[けしき]のいい 所[ところ]がたくさんある。|In diesem Nationalpark gibt es viele landschaftlich schöne Stellen.|Nomen
座席|座席[ざせき]|Sitzplatz|座席[ざせき]のシートベルトをお 締[し]めください。|Bitte schnallen Sie sich an.|Nomen
客席|客席[きゃくせき]|Zuschauerplatz, Fahrgastsitz|観客席[かんきゃくせき]の 最前列[さいぜんれつ]に 席[せき]を 予約[よやく]したわ。|Ich habe Plätze in der ersten Reihe der Zuschauerränge reserviert.|Nomen
欠点|欠点[けってん]|Fehler, Schwäche|自分[じぶん]の 欠点[けってん]は 忘[わす]れがちなものである。|Man neigt dazu, seine eigenen Fehler zu vergessen.|Nomen
欠ける|欠[か]ける|abbrechen, fehlen|彼[かれ]は 常識[じょうしき]に 欠[か]けている。|Es fehlt ihm an Hausverstand.|Verb
欠く|欠[か]く|ermangeln, fehlen lassen|水[みず]は 生[い]きるうえで 欠[か]くべからざるものだ。|Wasser ist für das Leben unverzichtbar.|Verb
次回|次回[じかい]|nächstes Mal|次回[じかい]は 一人[ひとり]でするよ。|Nächstesmal mache ich es allein.|Nomen
運用|運用[うんよう]|Verwaltung, Anlage, Betrieb|もう 少[すこ]し 諸[しょ] 規則[きそく]の 弾力的[だんりょくてき] 運用[うんよう]はできないか。|Kannst du die Regeln nicht ein wenig flexibler anwenden?|Nomen (mit する)
スピーカー|スピーカー|Lautsprecher|彼女[かのじょ]はいわば 歩[ある]くスピーカーだ。|Sie ist gleichsam ein wandelnder Lautsprecher.|Nomen
運営|運営[うんえい]|Leitung, Betrieb|経済[けいざい]をうまく 運営[うんえい]できる 政府[せいふ]は 少[すく]ない。|Nur wenige Regierungen können die Wirtschaft gut lenken.|Nomen (mit する)
運賃|運賃[うんちん]|Fahrpreis|運賃[うんちん]はいくらですか？|Wie hoch ist der Fahrpreis?|Nomen
運|運[うん]|Glück, Schicksal|彼[かれ]は 運[うん]が 良[よ]かった。|Er hatte Glück.|Nomen
運送|運送[うんそう]|Transport, Spedition|父[ちち]は 運送[うんそう]の 会社[かいしゃ]で 働[はたら]いています。|Mein Vater arbeitet bei einer Spedition.|Nomen (mit する)
回転|回転[かいてん]|Drehung, Rotation|月[つき]は 地球[ちきゅう]の 回[まわ]りを 回転[かいてん]している。|Der Mond dreht sich um die Erde.|Nomen (mit する)
転がる|転[ころ]がる|rollen, sich wälzen|転[ころ]がる 石[いし]に 苔[こけ]むさず。|Ein rollender Stein setzt kein Moos an.|Verb
転がす|転[ころ]がす|rollen, wälzen (etwas)|子供[こども]たちが 大[おお]きな 雪[ゆき]の 玉[たま]を 転[ころ]がしていた。|Die Kinder rollten einen großen Schneeball.|Verb
セールスマン|セールスマン|Vertreter, Verkäufer (im Außendienst)|私[わたし]はセールスマンと 間違[まちが]われた。|Ich wurde für einen Vertreter gehalten.|Nomen
移転|移転[いてん]|Umzug, Verlegung|掲示板[けいじばん]を 新[あたら]しいサーバーに 移転[いてん]しました。|Ich habe das Forum auf einen neuen Server verlegt.|Nomen (mit する)
移動|移動[いどう]|Fortbewegung, Ortswechsel|彼[かれ]は 机[つくえ]を 右[みぎ]に 移動[いどう]させた。|Er bewegte den Tisch nach rechts.|Nomen (mit する)
行動|行動[こうどう]|Handlung, Verhalten|彼女[かのじょ]の 行動[こうどう]は 若[わか]い 娘[むすめ]としては 異常[いじょう]です。|Ihr Verhalten ist unnormal für ein junges Mädchen.|Nomen (mit する)
運動会|運動会[うんどうかい]|Sportfest|雨天[うてん]の 場合[ばあい]は 運動[うんどう] 会[かい]を 中止[ちゅうし]する。|Wenn es regnet, wird das Sportfest abgesagt.|Nomen
運動場|運動場[うんどうじょう]|Sportplatz, Schulhof|ケイトは 今[いま] 運動[うんどう] 場[じょう]で 走[はし]っている。|Kate läuft gerade auf dem Sportplatz.|Nomen
運動場|運動場[うんどうじょう]|Sportplatz, Schulhof|彼[かれ]は 運動[うんどう] 場[じょう]を 横切[よこぎ]った。|Er überquerte den Sportplatz.|Nomen
高速|高速[こうそく]|hohe Geschwindigkeit; Autobahn|高速[こうそく] 道路[どうろ]が 渋滞[じゅうたい]している。|Auf der Autobahn gibt es Stau.|Nomen
おしゃべり|おしゃべり|Plaudern, Geplauder|彼[かれ]らはおしゃべりを 止[や]めました。|Sie hörten auf zu reden.|Nomen
急速|急速[きゅうそく]|rasch, rasant|その 市場[しじょう]は 急速[きゅうそく]に 拡大[かくだい]している。|Der Markt befindet sich in rapider Expansion.|Adjektiv
高速道路|高速道路[こうそくどうろ]|Autobahn|新[あたら]しい 高速[こうそく] 道路[どうろ]でドライブを 楽[たの]しんだ。|Wir genossen die Fahrt auf der neuen Autobahn.|Nomen
早速|早速[さっそく]|sofort, umgehend|早速[さっそく]には 返事[へんじ]をしかねます。|Eine sofortige Antwort kann ich nicht geben.|Adverb
時速|時速[じそく]|Stundengeschwindigkeit|この 電車[でんしゃ]は 時速[じそく] 三百[さんびゃく]キロで 走[はし]ります。|Dieser Zug fährt mit dreihundert Kilometern pro Stunde.|Nomen
全速力|全速力[ぜんそくりょく]|volle Geschwindigkeit|彼[かれ]は 全[ぜん] 速力[そくりょく]で 走[はし]った。|Er rannte so schnell, wie er konnte.|Nomen
遅れ|遅[おく]れ|Verspätung, Rückstand|彼[かれ]は 速[はや]く 走[はし]って 遅[おく]れを 取[と]り 戻[もど]した。|Indem er schnell rannte, holte er die Verspätung wieder auf.|Nomen
遅らす|遅[おく]らす|verzögern, verschieben|出発[しゅっぱつ]を 一時間[いちじかん] 遅[おく]らすことにしました。|Wir haben beschlossen, die Abfahrt um eine Stunde zu verschieben.|Verb
カラオケ|カラオケ|Karaoke|今日[きょう]トムたちとカラオケ 行[い]くんだけど 来[こ]ない？|Ich gehe mit Tom und den anderen heute zum Karaoke. Kommst du mit?|Nomen
終える|終[お]える|beenden, abschließen|仕事[しごと]を 終[お]えたら 電話[でんわ]します。|Wenn die Arbeit beendet ist, werde ich anrufen.|Verb
最終|最終[さいしゅう]|letzte(r, s), abschließend|明日[あした]が 最終日[さいしゅうび]だと 思[おも]うと 寂[さび]しいなあ。|Ich bin irgendwie traurig, wenn ich daran denke, dass morgen der letzte Tag ist.|Nomen
終点|終点[しゅうてん]|Endstation|東海道線[とうかいどうせん]は 東京[とうきょう]が 終点[しゅうてん]だ。|Letzter Halt der Tōkaidō-Linie ist Tōkyō.|Nomen
始終|始終[しじゅう]|ständig, die ganze Zeit|植物[しょくぶつ]の 種子[しゅし]は 始終[しじゅう] 呼吸[こきゅう]している。|Die Samen einer Pflanze atmen durchgehend.|Adverb
終電|終電[しゅうでん]|letzter Zug|僕[ぼく]は 終電[しゅうでん]にぎりぎりのところで 間[ま]に 合[あ]った。|Ich habe den letzten Zug gerade noch erreicht.|Nomen
現地|現地[げんち]|vor Ort, am Ort des Geschehens|大洪水[だいこうずい]で 現地[げんち]の 交通網[こうつうもう]が 麻痺[まひ]した。|Wegen starkem Hochwasser kam der lokale Verkehr zum Stillstand.|Nomen
現代|現代[げんだい]|Gegenwart, moderne Zeit|私[わたし]は 現代[げんだい] 美術[びじゅつ]には 全[まった]く 興味[きょうみ]がない。|Ich interessiere mich nicht für moderne Kunst.|Nomen
現金|現金[げんきん]|Bargeld|現金[げんきん]を 盗[ぬす]まれた。|Mir wurde mein Bargeld gestohlen.|な-Adjektiv
こっそり|こっそり|heimlich, verstohlen|彼[かれ]は 僕[ぼく]に 彼女[かのじょ]の 写真[しゃしん]をこっそり 見[み]せてくれた。|Er zeigte mir heimlich ein Bild von ihr.|Adverb
現れる|現[あらわ]れる|erscheinen, auftauchen|きっと 彼女[かのじょ]はもうすぐ 現[あらわ]れるよ。|Ich bin mir sicher, dass sie bald auftauchen wird.|Verb
現場|現場[げんば]|Schauplatz, Einsatzort, Baustelle|警察[けいさつ]が 事故[じこ] 現場[げんば]に 着[つ]いた。|Die Polizei erreichte den Unfallort.|Nomen
現住所|現住所[げんじゅうしょ]|jetzige Adresse|あなたの 現[げん] 住所[じゅうしょ]を 教[おし]えてください。|Bitte sag mir deine jetzige Adresse.|Nomen
現す|現[あらわ]す|zeigen, zum Vorschein bringen|彼女[かのじょ]は 姿[すがた]を 現[あらわ]さなかった。|Sie hat sich nicht blicken lassen.|Verb
現れ|現[あらわ]れ|Ausdruck, Zeichen|それは 彼女[かのじょ]の 期待[きたい]の 現[あらわ]れです。|Das ist ein Ausdruck ihrer Erwartungen.|Nomen
在学|在学[ざいがく]|Eingeschriebensein (an Schule, Uni)|彼[かれ]の 息子[むすこ]は 今[いま] 大学[だいがく]に 在学[ざいがく] 中[ちゅう]です。|Sein Sohn studiert zurzeit an der Universität.|Nomen (mit する)
現実|現実[げんじつ]|Wirklichkeit, Realität|それは 非[ひ] 現実[げんじつ] 的[てき]だ。|Das ist nicht realistisch.|Nomen
ジョギング|ジョギング|Jogging|父[ちち]は 毎朝[まいあさ]ジョギングする。|Mein Vater joggt jeden Morgen.|Nomen (mit する)
実は|実[じつ]は|eigentlich, um ehrlich zu sein|実[じつ]はハンバーガー、 苦手[にがて]なんだ。|Ich mag eigentlich keine Hamburger.|
実用|実用[じつよう]|praktischer Gebrauch|パソコンを 持[も]つことは 実用[じつよう] 的[てき]です。|Es ist praktisch, einen Laptop zu haben.|Nomen
実力|実力[じつりょく]|wirkliches Können|すみません、 自分[じぶん]の 実力[じつりょく]を 過信[かしん]してました。|Tut mir leid, ich habe meine Fähigkeiten überschätzt.|Nomen
実習|実習[じっしゅう]|Praktikum, praktische Übung|私[わたし]は 実習[じっしゅう]をします。|Ich mache ein Praktikum.|Nomen (mit する)
実物|実物[じつぶつ]|der echte Gegenstand, Original|写真[しゃしん]だけではなく、 実物[じつぶつ]を 見[み]ることも 大切[たいせつ]です。|Es ist wichtig, nicht nur Fotos, sondern auch das Original zu sehen.|Nomen
実に|実[じつ]に|wirklich, wahrhaftig|彼女[かのじょ]は 実[じつ]にいい 子[こ]だ。|Sie ist wirklich ein gutes Mädchen.|Adverb
過ごす|過[す]ごす|verbringen (Zeit)|彼女[かのじょ]は 音楽会[おんがくかい]で 楽[たの]しく 過[す]ごした。|Sie verbrachte eine gute Zeit in dem Konzert.|Verb
あれこれ|あれこれ|dies und das, allerlei|彼[かれ]はいつもあれこれと 文句[もんく]をつける。|Er beschwert sich ständig über dies und jenes.|Nomen
経過|経過[けいか]|Verlauf, Ablauf|約[やく] 二[に] 時間[じかん] 経過[けいか]しました。|Es sind circa zwei Stunden rum.|Nomen (mit する)
過ち|過[あやま]ち|Fehler, Vergehen|私[わたし]は 重大[じゅうだい]な 過[あやま]ちを 犯[おか]した。|Ich habe einen schweren Fehler gemacht.|Nomen
去る|去[さ]る|weggehen, verlassen|私[わたし]は 彼[かれ]が 去[さ]っていくのではないかと 思[おも]った。|Ich hatte den Verdacht, dass er mich verlassen würde.|Verb
活発|活発[かっぱつ]|lebhaft, rege|明日[あした]から 梅雨前線[ばいうぜんせん]が 活発[かっぱつ]になります。|Ab morgen kommt die Wetterfront der Regenzeit bei uns an.|な-Adjektiv
始発|始発[しはつ]|erste Abfahrt (des Tages)|始発[しはつ]は 何時[なんじ]に 出[で]ますか。|Wann fährt der erste Zug ab?|Nomen
表す|表[あらわ]す|ausdrücken, darstellen|彼女[かのじょ]はにっこり 笑[わら]って 感謝[かんしゃ]の 気持[きも]ちを 表[あらわ]した。|Mit einem Lächeln brachte sie ihre Dankbarkeit zum Ausdruck.|Verb
言い表わす|言[い]い 表[あら]わす|in Worte fassen|彼女[かのじょ]は 自分[じぶん]の 気持[きも]ちを 言[い]い 表[あら]わす 言葉[ことば]に 当惑[とうわく]した。|Ihr fehlten die Worte, um ihre Gefühle auszudrücken.|Verb
絵本|絵本[えほん]|Bilderbuch|絵本[えほん]は 子供[こども]たちの 頭[あたま]を 啓発[けいはつ]する。|Bilderbücher regen den Geist von Kindern an.|Nomen
およそ|およそ|ungefähr, etwa|私[わたし]は 毎日[まいにち]およそ 二[に] 時間[じかん] 勉強[べんきょう]する。|Ich lerne jeden Tag ungefähr zwei Stunden.|Adverb
雑音|雑音[ざつおん]|Störgeräusch, Lärm|雑音[ざつおん]で 何[なに]も 聞[き]こえません。|Ich kann vor lauter Rauschen nichts verstehen.|Nomen
足音|足音[あしおと]|Geräusch von Schritten|外[そと]で 足音[あしおと]が 聞[き]こえる。|Ich höre Schritte draußen.|Nomen
音読み|音読[おんよ]み|On-Lesung (sinojapanische Lesung)|この 漢字[かんじ]の 音読[おんよ]みは 何[なん]ですか。|Wie lautet die On-Lesung dieses Kanji?|Nomen (mit する)
五十音|五十音[ごじゅうおん]|die 50-Laute-Tafel (japanisches Silbenalphabet)|氏名[しめい]は 五十[ごじゅう] 音[おん] 順[じゅん]です。|Die Namen sind japanisch geordnet.|Nomen
気楽|気楽[きらく]|unbeschwert, sorglos|子供[こども]の 頃[ころ]は、もっとお 気楽[きらく]な 人生[じんせい]だったんだけどな。|Als Kind war es doch ein unbesorgteres Leben.|な-Adjektiv
行楽|行楽[こうらく]|Ausflug, Vergnügungsfahrt|行楽[こうらく]シーズンの 京都[きょうと]は 人[ひと]でいっぱい。|In der Ausflugssaison ist Kyōto voller Menschen.|Nomen
薬指|薬指[くすりゆび]|Ringfinger|薬指[くすりゆび]を 曲[ま]げずに、 小指[こゆび]だけを 曲[ま]げれる？|Kannst du den kleinen Finger beugen, ohne dass sich der Ringfinger dabei beugt?|Nomen
サークル|サークル|Zirkel, Hochschulgruppe|大学[だいがく]でテニスのサークルに 入[はい]りました。|An der Uni bin ich einer Tennisgruppe beigetreten.|Nomen
食欲|食欲[しょくよく]|Appetit|食欲[しょくよく]がありません。|Ich habe keinen Appetit.|Nomen
映る|映[うつ]る|sich spiegeln, zu sehen sein|窓[まど]に 映[うつ]る 景色[けしき]が、 少[すこ]しずつ 流[なが]れていく。|Die Landschaft, die sich im Fenster spiegelt, zieht langsam vorbei.|Verb
映す|映[うつ]す|spiegeln, projizieren|一本[いっぽん]の 高[たか]い 木[き]が 水面[すいめん]に 長[なが]い 影[かげ]を 映[うつ]している。|Ein hoher Baum wirft einen langen Schatten auf die Wasseroberfläche.|Verb
企画|企画[きかく]|Planung, Projekt|彼女[かのじょ]はこの 企画[きかく]で 重要[じゅうよう]な 役割[やくわり]を 演[えん]じた。|Sie spielte in diesem Projekt eine wichtige Rolle.|Nomen (mit する)
画家|画家[がか]|Maler(in)|彼[かれ]は 画家[がか]だ。|Er ist Maler.|Nomen
区画|区画[くかく]|Parzelle, Abschnitt|彼女[かのじょ]はここから 数[すう] 区画[くかく] 離[はな]れた 所[ところ]に 住[す]んでいる。|Sie wohnt ein paar Häuserblocks von hier entfernt.|Nomen
画面|画面[がめん]|Bildschirm|画面[がめん]もうちょっと 明[あか]るくできますか？|Könnten Sie den Bildschirm etwas heller stellen?|Nomen
キリスト|キリスト|Christus|キリストは 多[おお]くの 奇跡[きせき]を 行[おこな]ったと 信[しん]じられている。|Man glaubt, dass Christus viele Wunder vollbracht hat.|Nomen
地面|地面[じめん]|Erdboden|何[なに]かが 地面[じめん]に 落[お]ちる 音[おと]が 聞[き]こえた。|Ich hörte, dass etwas auf den Boden fiel.|Nomen
水面|水面[すいめん]|Wasseroberfläche|ナルキッソスは 水面[すいめん]に 映[うつ]った 自分[じぶん]の 姿[すがた]に 恋[こい]をした。|Narziss verliebte sich in sein eigenes Spiegelbild im Wasser.|Nomen
一面|一面[いちめん]|die ganze Fläche; eine Seite|彼[かれ]はドア 一[いち] 面[めん] 緑色[りょくしょく]で 塗[ぬ]りたくった。|Er strich die ganze Tür grün an.|Nomen
真実|真実[しんじつ]|Wahrheit|あなたには 真実[しんじつ]を 話[はな]したほうがいいですね。|Ich täte besser daran, dir die Wahrheit zu sagen.|Nomen
真理|真理[しんり]|Wahrheit (philosophisch)|真理[しんり] 愛[あい]ちゃんは 今[いま] 風呂[ふろ]に 入[はい]ってるところなの。|Maria badet gerade.|Nomen
金色|金色[きんいろ]|goldfarben|ドアには 大[おお]きな 金色[きんいろ]の 星[ほし]がついていました。|An der Tür war ein großer, goldener Stern.|Nomen
形式|形式[けいしき]|Form, Format|彼[かれ]はそれを 小説[しょうせつ]の 形式[けいしき]で 表[あらわ]した。|Er drückte dies in Form eines Romanes aus.|Nomen
小型|小型[こがた]|klein, Kleinformat|トムは 今[いま]までに 小型[こがた] 車[しゃ]の 購入[こうにゅう]を 考[かんが]えたことがあるのだろうか。|Ob Tom wohl bis jetzt schon einmal über den Kauf eines Kleinwagens nachgedacht hat?|Nomen
あっさり|あっさり|leicht, schlicht; ohne Umschweife|彼女[かのじょ]はあっさりと 答[こた]えた。|Sie antwortete mit Leichtigkeit.|Adverb
型|型[かた]|Modell, Typ, Form|これがちょうど 私[わたし]の 欲[ほ]しい 型[かた]の 車[くるま]だ。|Genau so ein Auto will ich haben.|Nomen
一種|一種[いっしゅ]|eine Art von|厳密[げんみつ]に 言[い]えば、 竹[たけ]は 草[くさ]の 一種[いっしゅ]である。|Um genau zu sein, Bambus ist eine Art von Gras.|Nomen
各種|各種[かくしゅ]|verschiedene Arten, allerlei|海[うみ]は 各種[かくしゅ]の 資源[しげん]を 与[あた]えてくれる。|Das Meer schenkt uns Rohstoffe aller Art.|Nomen
一種|一種[いっしゅ]|eine Art, gewissermaßen|電子[でんし]とは 素粒子[そりゅうし]の 一種[いっしゅ]である。|Ein Elektron ist ein Elementarteilchen.|Adverb
人種|人種[じんしゅ]|Menschenrasse, Ethnie|アメリカには 様々[さまざま]な 人種[じんしゅ]の 人[ひと]が 住[す]んでいる。|In Amerika leben Menschen vieler verschiedener Rassen.|Nomen
種目|種目[しゅもく]|Disziplin, Posten, Sparte|テコンドーは、オリンピック 種目[しゅもく]のひとつです。|Taekwondo ist eine der olympischen Disziplinen.|Nomen
人類|人類[じんるい]|Menschheit|人類[じんるい]の 未来[みらい]が 心配[しんぱい]だ。|Ich fürchte um die Zukunft der Menschheit.|Nomen
せっせと|せっせと|fleißig, emsig|動物達[どうぶつたち]はせっせと 木[こ]の 実[み]を 集[あつ]めていた。|Emsig lasen die Tiere Nüsse auf.|Adverb
書類|書類[しょるい]|Unterlagen, Dokumente|僕[ぼく]はいつも 書類[しょるい]を 見[み]ている。|Ich sehe mir immer die Dokumente an.|Nomen
接近|接近[せっきん]|Annäherung|嵐[あらし]が 接近[せっきん]していると 発表[はっぴょう]された。|Ein herannahender Sturm wurde angekündigt.|Nomen (mit する)
間接|間接[かんせつ]|indirekt|税[ぜい]は 直接[ちょくせつ] 税[ぜい]と 間接[かんせつ] 税[ぜい]からなっている。|Steuern bestehen aus direkten und indirekten Steuern.|Nomen
接する|接[せっ]する|in Kontakt kommen, angrenzen|フランスはイタリアと 国境[こっきょう]を 接[せっ]している。|Frankreich grenzt an Italien.|Verb
角度|角度[かくど]|Winkel|別[べつ]の 角度[かくど]から 問題[もんだい]を 見[み]ると 役[やく]に 立[た]つかもしれない。|Vielleicht hilft es, das Problem von einem anderen Blickwinkel zu betrachten.|Nomen
三角形|三角形[さんかくけい]|Dreieck|「 三角[さんかく] 形[けい]」を 定義[ていぎ]するのは 難[むずか]しいです。|Es ist schwierig „Dreieck“ zu definieren.|Nomen
曲線|曲線[きょくせん]|Kurve, gekrümmte Linie|紙[かみ]に 曲線[きょくせん]をかきました。|Ich habe eine gekrümmte Linie auf das Papier gezeichnet.|Nomen
カタログ|カタログ|Katalog|カタログを 送[おく]ってください。|Schicken Sie mir bitte einen Katalog.|Nomen
作曲|作曲[さっきょく]|Komposition (Musik)|ロシアの 作曲[さっきょく] 家[か]では 誰[だれ]が 一番[いちばん] 好[す]き？|Welcher russische Komponist gefällt dir am besten?|Nomen (mit する)
共通|共通[きょうつう]|Gemeinsamkeit, gemeinsam|彼[かれ]と 私[わたし]には 共通[きょうつう] 点[てん]が 何[なに]もない。|Ich habe nichts mit ihm gemeinsam.|Nomen (mit する)
共通語|共通語[きょうつうご]|gemeinsame Sprache, Verkehrssprache|英語[えいご]は 世界[せかい] 共通[きょうつう] 語[ご]のようなものだ。|Englisch ist gewissermaßen die gemeinsame Sprache der Welt.|Nomen
共同|共同[きょうどう]|gemeinsam, Zusammenarbeit|彼[かれ]らは 共同[きょうどう] 声明[せいめい]に 同意[どうい]した。|Sie einigten sich auf eine gemeinsame Erklärung.|Nomen (mit する)
合同|合同[ごうどう]|gemeinsam, vereint|合同[ごうどう] 企業[きぎょう] 説明会[せつめいかい]では、 多[おお]くの 企業[きぎょう]の 話[はなし]を 一度[いちど]に 聞[き]ける。|Auf einer gemeinsamen Firmenmesse kann man viele Unternehmen auf einmal kennenlernen.|Nomen (mit する)
一同|一同[いちどう]|alle (Anwesenden)|おばあちゃんが 突然[とつぜん] 死[し]んで 家族[かぞく] 一同[いちどう] 驚[おどろ]いた。|Omas plötzlicher Tod überraschte die ganze Familie.|Nomen
以前|以前[いぜん]|früher, zuvor|以前[いぜん]ほど 金持[かねも]ちではない。|Ich bin nicht mehr so reich wie früher.|Nomen
ジャズ|ジャズ|Jazz|私[わたし]はジャズが 好[す]きです。|Ich mag Jazz.|Nomen
以下|以下[いか]|unter, weniger als; im Folgenden|以下[いか]に 掲[かか]げる 人[ひと]が 合格[ごうかく]です。|Die folgenden Personen haben den Test bestanden.|Nomen
以降|以降[いこう]|ab, seit|それ 以降[いこう] 彼[かれ]は 辛[から]い 一生[いっしょう]を 送[おく]った。|Seitdem lebt er ein strenges Leben.|Nomen
以来|以来[いらい]|seit, seitdem|クリスマス 以来[いらい]、ずいぶん 太[ふと]ってしまった。|Seit Weihnachten bin ich ganz schön dick geworden.|Nomen
以後|以後[いご]|von nun an, danach|それ 以後[いご] 彼女[かのじょ]に 会[あ]っていません。|Seitdem habe ich sie nicht mehr gesehen.|Nomen
下宿|下宿[げしゅく]|Untermiete, Pension|私[わたし]は 下宿[げしゅく]しています。|Ich wohne zur Untermiete.|Nomen (mit する)
漢和|漢和[かんわ]|chinesisch-japanisch|漢和[かんわ] 辞典[じてん]で 漢字[かんじ]の 意味[いみ]を 調[しら]べたの。|Ich habe die Bedeutung des Kanji im Kanji-Wörterbuch nachgeschlagen.|Nomen
英和|英和[えいわ]|englisch-japanisch|本棚[ほんだな]に 英和[えいわ] 辞典[じてん]がありますか。|Steht im Bücherregal ein englisch-japanisches Wörterbuch?|Nomen
西洋|西洋[せいよう]|der Westen, das Abendland|それらは 西洋[せいよう]の 風呂[ふろ]よりずっといいです。|Sie sind viel besser als die Bäder im Westen.|Nomen
サイン|サイン|Unterschrift, Autogramm; Zeichen|サインしてから 送[おく]ってよ。|Unterschreibe erst, bevor du es abschickst!|Nomen (mit する)
海洋|海洋[かいよう]|Ozean, Meer|最近[さいきん] 変[か]わった 海洋[かいよう] 生物[せいぶつ]が 発見[はっけん]された。|Kürzlich wurde ein seltsames Meereslebewesen entdeckt.|Nomen
西洋人|西洋人[せいようじん]|Mensch aus dem Westen|西洋人[せいようじん]と 話[はな]すときには 気[き]をつけなければいけない。|Wenn man mit Menschen aus dem Westen spricht, muss man aufpassen.|Nomen
制服|制服[せいふく]|Uniform|一部[いちぶ]の 学生[がくせい]は 制服[せいふく]を 着[き]るのを 嫌[いや]がります。|Einem Teil der Schüler behagt es nicht, eine Schuluniform zu tragen.|Nomen
室内|室内[しつない]|im Zimmer, drinnen|室内[しつない]にいるよりも 外[そと]に 出[で]かけたいかな。|Ich würde lieber rausgehen statt drinnen zu bleiben.|Nomen
親子|親子[おやこ]|Eltern und Kind|核家族[かくかぞく]は 親子[おやこ]のよりよい 会話[かいわ]を 可能[かのう]にする。|Die Kernfamilie ermöglicht bessere Gespräche zwischen Eltern und Kindern.|Nomen
親類|親類[しんるい]|Verwandte|遠[とお]くの 親類[しんるい]より 近[ちか]くの 他人[たにん]。|Ein guter Nachbar ist besser als ein Bruder in der Ferne.|Nomen
親しむ|親[した]しむ|vertraut werden mit|彼[かれ]は 親[した]しみやすい 人[ひと]だ。|Er ist ein zugänglicher Mensch.|Verb
ごまかす|ごまかす|täuschen, sich herausreden|トムは 帳簿[ちょうぼ]をごまかしていた。|Tom frisierte die Bücher.|Verb
親切|親切[しんせつ]|Freundlichkeit|彼女[かのじょ]は 親切[しんせつ]にも、 市内[しない]を 案内[あんない]してくれた。|Sie war so freundlich, mir die Stadt zu zeigen.|Nomen
親友|親友[しんゆう]|enge(r) Freund(in)|彼女[かのじょ]は 私[わたし]の 親友[しんゆう]です。|Sie ist eine gute Freundin von mir.|Nomen
親指|親指[おやゆび]|Daumen|針[はり]で 親指[おやゆび]を 突[つ]いてしまった。|Ich habe mich mit der Nadel in den Daumen gestochen.|Nomen
親しみ|親[した]しみ|Vertrautheit, Zuneigung|彼女[かのじょ]は 彼[かれ]に 親[した]しみを 込[こ]めた 手紙[てがみ]を 書[か]き、 彼[かれ]の 援助[えんじょ]に 感謝[かんしゃ]した。|Sie schrieb ihm einen herzlichen Brief und bedankte sich für seine Hilfe.|Nomen
水族館|水族館[すいぞくかん]|Aquarium (Einrichtung)|その 水族[すいぞく] 館[かん]では、 小[ちい]さな 魚[さかな]たちが 泳[およ]いでいる。|In diesem Aquarium schwimmen viele kleine Fische.|Nomen
歳末|歳末[さいまつ]|Jahresende|歳末[さいまつ]は 店[みせ]がとてもこみます。|Am Jahresende sind die Geschäfte sehr voll.|Nomen
姉妹|姉妹[しまい]|Schwestern|私[わたし]ね、 三[さん] 姉妹[しまい]の 末[すえ]っ 子[こ]なんだ。|Ich bin die Jüngste von drei Schwestern.|Nomen
インテリ|インテリ|Intellektuelle(r), gebildet|あの 本[ほん]の 読者[どくしゃ]たちは 自分[じぶん]のことをインテリだと 思[おも]っている。|Die Leser dieses Buches halten sich für Intellektuelle.|Nomen
次第に|次第[しだい]に|allmählich, nach und nach|風[かぜ]は 次第[しだい]におさまった。|Der Wind legte sich allmählich.|Adverb
次第|次第[しだい]|sobald; je nach|そこにつき 次第[しだい] 便[たよ]りをください。|Schicke mir eine Nachricht, sobald du angekommen bist.|Nomen
息|息[いき]|Atem|やわらかな 息[いき]が 聞[き]こえる。|Ich kann einen sanften Atem hören.|Nomen
休息|休息[きゅうそく]|Ruhepause, Erholung|私[わたし]たちは 昼[ひる]は 働[はたら]き、 夜[よる]は 休息[きゅうそく]する。|Wir arbeiten am Tag und ruhen in der Nacht.|Nomen (mit する)
消費者|消費者[しょうひしゃ]|Verbraucher(in)|ふつう、 消費[しょうひ] 者[しゃ]は 質[しつ]より 量[りょう]をとる。|Verbraucher ziehen gewöhnlich Menge der Qualität vor.|Nomen
学者|学者[がくしゃ]|Wissenschaftler(in), Gelehrte(r)|トムって 学者[がくしゃ] 肌[はだ]だよね。|Tom ist ein Gelehrter.|Nomen
後者|後者[こうしゃ]|der/die/das Letztere|後者[こうしゃ]の 方[ほう]が 前者[ぜんしゃ]よりもいいよ。|Letzteres ist besser als Ersteres.|Nomen
作者|作者[さくしゃ]|Verfasser(in), Autor(in)|この 小説[しょうせつ]の 作者[さくしゃ]はだれだと 思[おも]いますか。|Was glaubst du, wer der Autor dieses Romans ist?|Nomen
いちいち|いちいち|einzeln, bei jeder Kleinigkeit|いちいちうるさいな！|Sei nicht so pingelig!|Adverb
前者|前者[ぜんしゃ]|der/die/das Erstere|前者[ぜんしゃ]より 後者[こうしゃ]の 方[ほう]がいい。|Letzteres ist besser als Ersteres.|Nomen
結局|結局[けっきょく]|schließlich, letzten Endes|結局[けっきょく]なにも 起[お]こらなかった。|Letztlich ist nichts passiert.|Adverb
新婚|新婚[しんこん]|frisch verheiratet|あの 二人[ふたり]は、 新婚[しんこん]さんなのよ。|Die beiden da sind frisch vermählt.|Nomen
婚約|婚約[こんやく]|Verlobung|私[わたし]は 彼女[かのじょ]と 婚約[こんやく] 中[ちゅう]だ。|Ich bin mit ihr verlobt.|Nomen (mit する)
課長|課長[かちょう]|Abteilungsleiter(in), Sektionsleiter(in)|彼女[かのじょ]は 課長[かちょう]に 話[はな]しかけた。|Sie sprach den Abteilungsleiter an.|Nomen
効く|効[き]く|wirken, helfen|バスはエアコンが 効[き]いていた。|Der Bus war klimatisiert.|Verb
効力|効力[こうりょく]|Wirkung, Gültigkeit|その 法律[ほうりつ]にはもはや 効力[こうりょく]はない。|Das Gesetz ist nicht mehr in Kraft.|Nomen
ストライキ|ストライキ|Streik|ストライキは 国民経済[こくみんけいざい]に 影響[えいきょう]を 与[あた]えた。|Der Streik wirkte sich auf die Volkswirtschaft aus.|Nomen
効き目|効[き]き 目[め]|Wirkung, Wirksamkeit|薬[くすり]の 効[き]き 目[め]がだんだんなくなってきた。|Die Wirkung der Medizin nahm allmählich ab.|Nomen
自動|自動[じどう]|automatisch|これは 自動[じどう]ドアです。|Das ist eine automatische Tür.|Nomen
自国|自国[じこく]|das eigene Land|彼[かれ]は 自国[じこく]に 大[おお]きな 影響[えいきょう]を 与[あた]えている。|Er übt einen großen Einfluss auf sein Land aus.|Nomen
各自|各自[かくじ]|jede(r) einzelne, jeweils selbst|各自[かくじ] 運転[うんてん]するときは 気[き]をつけなければいけない。|Jeder Einzelne muss beim Fahren vorsichtig sein.|Nomen
自然に|自然[しぜん]に|natürlich, von selbst|君[きみ]はもっと 自然[しぜん]に 話[はな]す 方[ほう]がよい。|Du solltest natürlicher sprechen.|Adverb
経由|経由[けいゆ]|über, via|彼[かれ]はパリ 経由[けいゆ]でロンドンへ 行[い]った。|Er ist über Paris nach London gekommen.|Nomen (mit する)
自信|自信[じしん]|Selbstvertrauen|人[ひと]はほめられると、 自信[じしん]を 持[も]つものだ。|Wenn man jemanden lobt, steigert das sein Selbstvertrauen.|Nomen
あんまり|あんまり|nicht besonders (umgangssprachlich); zu sehr|今日[きょう]はあんまり 暑[あつ]くないね。|Heute ist es nicht allzu heiß.|Adverb
信用|信用[しんよう]|Vertrauen, Glaubwürdigkeit|私[わたし]は 誰[だれ]も 信用[しんよう]しない。|Ich vertraue niemandem.|Nomen (mit する)
信頼|信頼[しんらい]|Vertrauen, Verlass|彼[かれ]は 信頼[しんらい]できる 人[ひと]です。|Er ist jemand, auf den man sich verlassen kann.|Nomen (mit する)
依頼|依頼[いらい]|Bitte, Auftrag|彼女[かのじょ]は 私[わたし]の 依頼[いらい]を 断[ことわ]った。|Sie lehnte meine Bitte ab.|Nomen (mit する)
人民|人民[じんみん]|das Volk|我々[われわれ]が 人民[じんみん]だ。|Wir sind das Volk.|Nomen
国民|国民[こくみん]|Volk, Staatsbürger|私[わたし]たちは 保守的[ほしゅてき]な 国民[こくみん]だ。|Wir sind ein konservatives Volk.|Nomen
主要|主要[しゅよう]|hauptsächlich, wichtigste(r, s)|鉱業[こうぎょう]はチリの 主要[しゅよう]な 収入源[しゅうにゅうげん]の 一[ひと]つである。|Der Bergbau ist eine der Haupteinnahmequellen Chiles.|な-Adjektiv
主に|主[おも]に|hauptsächlich, vor allem|日本人[にほんじん]は 以前[いぜん]は 主[おも]に 米[こめ]を 主食[しゅしょく]としていた。|Japaner haben sich früher hauptsächlich von Reis ernährt.|Adverb
主役|主役[しゅやく]|Hauptrolle|私[わたし]の 妹[いもうと]が 主役[しゅやく]を 演[えん]じた。|Meine jüngere Schwester spielte die Hauptrolle.|Nomen
うるさい|うるさい|lästig, nörglerisch; laut|隣[となり]の 部屋[へや]がうるさいのです。|Es ist laut nebenan.|Adjektiv
主体|主体[しゅたい]|Subjekt, tragende Kraft|学生[がくせい]は 自分[じぶん]の 主体[しゅたい] 性[せい]を 見失[みうしな]ってはならない。|Studenten dürfen ihre Eigenständigkeit nicht aus den Augen verlieren.|Nomen
主題|主題[しゅだい]|Thema, Hauptthema|これらの 本[ほん]を 主題[しゅだい] 別[べつ]に 分類[ぶんるい]してください。|Bitte ordnen Sie diese Bücher nach Themen.|Nomen
自主|自主[じしゅ]|Eigeninitiative, Selbstständigkeit|山火事[やまかじ]の 後[あと]なので 今年[ことし]の 花火大会[はなびたいかい]は 自主[じしゅ] 的[てき]に 中止[ちゅうし]を 決定[けってい]しました。|Wegen des Waldbrands haben wir das diesjährige Feuerwerk aus eigenem Entschluss abgesagt.|Nomen
主食|主食[しゅしょく]|Grundnahrungsmittel|たいていの 日本人[にほんじん]は 米[こめ]を 主食[しゅしょく]にしている。|Die meisten Japaner ernähren sich hauptsächlich von Reis.|Nomen
主|主[おも]|hauptsächlich, Haupt-|この 店[みせ]の 主[おも]な 客[きゃく]は 学生[がくせい]です。|Die Kunden dieses Ladens sind hauptsächlich Studenten.|Adjektiv
主義|主義[しゅぎ]|Prinzip, Grundsatz, -ismus|彼[かれ]はずっと 自分[じぶん]の 主義[しゅぎ]に 忠実[ちゅうじつ]である。|Er ist seinen Prinzipien treu geblieben.|Nomen
共産主義|共産主義[きょうさんしゅぎ]|Kommunismus|私[わたし]の 生[い]きているうちに 共産[きょうさん] 主義[しゅぎ]が 効力[こうりょく]を 持[も]つことは 無[な]いだろう。|Der Kommunismus wird nie erreicht werden, solange ich lebe.|Nomen
カーブ|カーブ|Kurve|彼[かれ]は 右[みぎ]に 急[きゅう]カーブした。|Er bog scharf nach rechts ab.|Nomen (mit する)
義理|義理[ぎり]|Pflichtgefühl, moralische Verpflichtung|彼女[かのじょ]の 義理[ぎり]の 父[ちち]は 厳[きび]しいです。|Ihr Schwiegervater ist streng.|Nomen
議会|議会[ぎかい]|Parlament, Rat|議会[ぎかい]が 最初[さいしょ]に 生[う]まれたのはいつだか 知[し]っていますか。|Wissen Sie, wann das Parlament zum ersten Mal einberufen wurde?|Nomen
協議|協議[きょうぎ]|Beratung, Verhandlung|貿易赤字[ぼうえきあかじ]について 慎重[しんちょう]に 協議[きょうぎ]しなければならない。|Wir müssen uns wegen des Handelsdefizites sorgfältig beraten.|Nomen (mit する)
議長|議長[ぎちょう]|Vorsitzende(r), Präsident(in)|彼[かれ]は 議長[ぎちょう]に 選[えら]ばれた。|Er wurde zum Vorsitzenden gewählt.|Nomen
議題|議題[ぎだい]|Tagesordnungspunkt, Thema|会議[かいぎ]の 議題[ぎだい]が 配布[はいふ]された。|Die Tagesordnung der Sitzung wurde verteilt.|Nomen
議論|議論[ぎろん]|Diskussion, Debatte|議論[ぎろん]を 続[つづ]けましょう。|Lasst uns die Diskussion fortsetzen.|Nomen (mit する)
結論|結論[けつろん]|Schlussfolgerung, Ergebnis|トムとビルは 別々[べつべつ]に 考[かんが]えて 同[おな]じ 結論[けつろん]に 達[たっ]した。|Tom und Bill gelangten unabhängig voneinander zur selben Schlussfolgerung.|Nomen (mit する)
ガイド|ガイド|Führer(in), Reiseleitung|ガイドが 私[わたし]たちをホテルまで 案内[あんない]してくれた。|Der Fremdenführer brachte uns bis zum Hotel.|Nomen (mit する)
言論|言論[げんろん]|Rede, Meinungsäußerung|言論[げんろん]の 自由[じゆう]が 制限[せいげん]されている 国[くに]もある。|Ebenfalls gibt es Länder, in denen die freie Rede eingeschränkt ist.|Nomen
世論|世論[せろん]|öffentliche Meinung|政治家[せいじか]は 世論[せろん]を 考慮[こうりょ]に 入[い]れるべきである。|Politiker sollten die öffentliche Meinung in Betracht ziehen.|Nomen
違反|違反[いはん]|Verstoß|トムはスピード 違反[いはん]で 逮捕[たいほ]された。|Tom ist wegen zu schnellen Fahrens festgenommen worden.|Nomen (mit する)
応じる|応[おう]じる|entsprechen, eingehen auf|あなたの 要求[ようきゅう]に 応[おう]じることはできない。|Ich kann auf Ihre Forderung nicht eingehen.|Verb
応用|応用[おうよう]|Anwendung|彼女[かのじょ]は 授業[じゅぎょう]で 学[まな]んだことをその 実験[じっけん]に 応用[おうよう]した。|In dem Versuch wandte sie das im Unterricht Gelernte an.|Nomen (mit する)
一応|一応[いちおう]|vorläufig, für alle Fälle|一応[いちおう] 聞[き]いとくけど、 明日[あした]は 制服[せいふく]だよね？|Morgen müssen wir doch Uniform tragen, oder?|Adverb
回答|回答[かいとう]|Antwort, Beantwortung|質問[しつもん]への 回答[かいとう]を 見[み]るには、 質問[しつもん]をクリックしてください。|Klicken Sie auf die Frage, um sich die Antwort anzeigen zu lassen.|Nomen (mit する)
かえる|かえる|Frosch|カエルが 水[みず]の 中[なか]から 出[で]てきた。|Ein Frosch kam aus dem Wasser.|Nomen
解答|解答[かいとう]|Lösung, Antwort (auf eine Aufgabe)|練習問題[れんしゅうもんだい]の 解答[かいとう]は 巻末[かんまつ]にまとめてあります。|Die Lösungen zu den Übungsaufgaben sind am Ende des Buches zusammengestellt.|Nomen (mit する)
区別|区別[くべつ]|Unterscheidung|トムは 高価[こうか]なワインと 安[やす]いワインの 区別[くべつ]がつかない。|Tom kann teuren Wein nicht von billigem unterscheiden.|Nomen (mit する)
差別|差別[さべつ]|Diskriminierung|彼[かれ]は 人種[じんしゅ] 差別[さべつ]と 戦[たたか]った。|Er kämpfte gegen die Rassendiskriminierung.|Nomen (mit する)
性別|性別[せいべつ]|Geschlecht|国籍[こくせき]や 性別[せいべつ]または 職業[しょくぎょう]などで 人[ひと]を 差別[さべつ]してはいけない。|Man darf Menschen nicht wegen ihrer Nationalität, ihres Geschlechtes oder Berufes diskriminieren.|Nomen
一般に|一般[いっぱん]に|im Allgemeinen|一般[いっぱん]に 女子[じょし]よりも 男子[だんし]の 方[ほう]が 足[あし]が 速[はや]い。|Im Allgemeinen können Jungen schneller laufen als Mädchen.|Adverb
経済的|経済的[けいざいてき]|wirtschaftlich, sparsam|彼[かれ]は 経済[けいざい] 的[てき]に 自立[じりつ]した。|Er ist finanziell unabhängig geworden.|Adjektiv
自主的|自主的[じしゅてき]|eigenständig, freiwillig|彼[かれ]は 自主的[じしゅてき]に 勉強[べんきょう]を 始[はじ]めました。|Er hat aus eigenem Antrieb angefangen zu lernen.|Adjektiv
合理的|合理的[ごうりてき]|rational, vernünftig|これは 合理[ごうり] 的[てき]だ。|Das ist vernünftig.|Adjektiv
ずれる|ずれる|verrutschen, abweichen|ちょっとずれてるよ。|Das ist ein bisschen verrutscht.|Verb
形式的|形式的[けいしきてき]|formal, formell|それは 形式的[けいしきてき]な 質問[しつもん]です。|Das ist eine rein formale Frage.|Adjektiv
実用的|実用的[じつようてき]|praktisch, zweckmäßig|彼女[かのじょ]は 私[わたし]に 実用[じつよう] 的[てき]なアドバイスをしてくれた。|Sie gab mir einen praktischen Ratschlag.|Adjektiv
女性的|女性的[じょせいてき]|weiblich, feminin|中[なか]には 女性[じょせい] 的[てき]であると 言[い]うよりも 男性的[だんせいてき]に 見[み]える 女性[じょせい]もいる。|Manche Frauen wirken eher männlich als weiblich.|Adjektiv
水平|水平[すいへい]|waagerecht, horizontal|水平[すいへい] 線[せん]に 船[ふね]が 見[み]えますか。|Siehst du ein Schiff am Horizont?|な-Adjektiv
水平線|水平線[すいへいせん]|Horizont (über dem Meer)|太陽[たいよう]が 水平[すいへい] 線[せん]の 下[した]に 沈[しず]んだ。|Die Sonne versank am Horizont.|Nomen
高等|高等[こうとう]|höher, hochentwickelt|彼[かれ]は 高等[こうとう] 学校[がっこう]の 生徒[せいと]ではありません。|Er ist kein Schüler der Oberschule.|な-Adjektiv
上等|上等[じょうとう]|erstklassig, hochwertig|これは 上等[じょうとう]なワインだ。|Das ist ein hervorragender Wein.|な-Adjektiv
オーバー|オーバー|übertrieben; darüber hinaus|オーバーのクリーニング 代[だい]はいくらですか。|Was kostet die Reinigung eines Mantels?|Nomen (mit する)
急病|急病[きゅうびょう]|plötzliche Erkrankung|急病[きゅうびょう]のために 彼[かれ]はそこへ 行[い]くことができなかった。|Wegen einer plötzlichen Erkrankung konnte er nicht dorthin gehen.|Nomen
医学|医学[いがく]|Medizin (Wissenschaft)|彼女[かのじょ]は 医学[いがく] 生[せい]でした。|Sie war Medizinstudentin.|Nomen
科学者|科学者[かがくしゃ]|Wissenschaftler(in)|彼[かれ]は 科学[かがく] 者[しゃ]です。|Er ist Wissenschaftler.|Nomen
科目|科目[かもく]|Fach, Schulfach|一番[いちばん] 好[す]きな 科目[かもく]は、 数学[すうがく]です。|Mein Lieblingsfach ist Mathematik.|Nomen
学科|学科[がっか]|Fach, Fachbereich|英語[えいご]は 私[わたし]の 好[す]きな 学科[がっか]になった。|Englisch ist mein Lieblingsfach geworden.|Nomen
外科|外科[げか]|Chirurgie|外科[げか]へ 行[い]ってください。|Gehen Sie bitte in die chirurgische Abteilung.|Nomen
歯科|歯科[しか]|Zahnmedizin|将来[しょうらい]は 歯科[しか] 医[い]になりたいと 思[おも]っています。|In Zukunft möchte ich Zahnarzt werden.|Nomen
エアコン|エアコン|Klimaanlage|うちの 車[くるま]にはエアコンが 付[つ]いている。|Unser Auto hat eine Klimaanlage.|Nomen
自然科学|自然科学[しぜんかがく]|Naturwissenschaften|物理学[ぶつりがく]は 基礎的[きそてき]な 自然[しぜん] 科学[かがく]である。|Physik ist eine grundlegende Naturwissenschaft.|Nomen
人文科学|人文科学[じんぶんかがく]|Geisteswissenschaften|歴史学[れきしがく]は 人文[じんぶん] 科学[かがく]の 一部[いちぶ] 門[もん]である。|Die Geschichtswissenschaften sind ein Zweig der Geisteswissenschaften.|Nomen
社会科学|社会科学[しゃかいかがく]|Sozialwissenschaften|その 大学[だいがく]の 課程[かてい]は 自然科学[しぜんかがく]と 社会[しゃかい] 科学[かがく]から 成[な]り 立[た]っている。|Der Lehrplan dieser Universität besteht aus Naturwissenschaften und Sozialwissenschaften.|Nomen
死|死[し]|Tod|彼[かれ]の 死[し]から 一[いち] 年[ねん]が 経過[けいか]した。|Ein Jahr ist seit seinem Tod vergangen.|Nomen
死者|死者[ししゃ]|Tote(r), Todesopfer|その 事故[じこ]では 乗客[じょうきゃく]には 死者[ししゃ]はなかった。|Es gab bei dem Unfall keine Toten unter den Fahrgästen.|Nomen
死体|死体[したい]|Leiche|トムは 海岸[かいがん]で 死体[したい]を 発見[はっけん]した。|Tom entdeckte am Strand eine Leiche.|Nomen
生死|生死[せいし]|Leben und Tod|彼[かれ]は 生死[せいし]の 境[さかい]をさ 迷[まよ]った。|Er schwebte an der Grenze zwischen Leben und Tod.|Nomen
死亡|死亡[しぼう]|Tod, Ableben|死亡[しぼう] 者[しゃ] 数[すう]は 増[ふ]え 続[つづ]けています。|Der Zahl der Toten nimmt immer weiter zu.|Nomen (mit する)
しょっちゅう|しょっちゅう|ständig, andauernd|彼[かれ]はしょっちゅう 私[わたし]にお 金[かね]を 借[か]りていた。|Er hat ständig Geld von mir geliehen.|Adverb
痛み|痛[いた]み|Schmerz|すぐに 痛[いた]みはとれます。|Die Schmerzen verschwinden bald.|Nomen
痛む|痛[いた]む|schmerzen, wehtun|胃[い]が 痛[いた]みますか。|Hast du Bauchschmerzen?|Verb
禁止|禁止[きんし]|Verbot|彼女[かのじょ]は 今[いま] 外出[がいしゅつ] 禁止[きんし]です。|Ihr ist jetzt verboten, nach draußen zu gehen.|Nomen (mit する)
禁じる|禁[きん]じる|verbieten|君[きみ]の 喫煙[きつえん]を 禁[きん]じる。|Ich verbiete dir zu rauchen.|Verb
煙|煙[けむり]|Rauch|火[ひ]のないところに 煙[けむり]は 立[た]たぬ。|Kein Rauch ohne Feuer.|Nomen
酒屋|酒屋[さかや]|Spirituosenladen|私[わたし]は 酒屋[さかや]でビールを 一本[いっぽん] 買[か]った。|Ich habe im Spirituosenladen eine Flasche Bier gekauft.|Nomen
禁酒|禁酒[きんしゅ]|Alkoholverzicht|彼[かれ]は 禁酒[きんしゅ]、 禁煙[きんえん]した。|Er hat dem Rauchen und Trinken abgeschworen.|Nomen (mit する)
スタンド|スタンド|Stehlampe, Tischlampe; Tribüne|一[いち]キロ 先[さき]に、ガソリンスタンドがあります。|Einen Kilometer weiter gibt es eine Tankstelle.|Nomen
険しい|険[けわ]しい|steil; finster (Miene)|私[わたし]たちは 険[けわ]しい 山[やま]を 登[のぼ]った。|Wir erklommen den steilen Berg.|Adjektiv
証券|証券[しょうけん]|Wertpapier|私[わたし]は 証券[しょうけん] 会社[かいしゃ]で 働[はたら]いています。|Ich arbeite bei einer Wertpapierfirma.|Nomen
証明|証明[しょうめい]|Beweis, Nachweis|それを 証明[しょうめい]できますか？|Können Sie das beweisen?|Nomen (mit する)
生存|生存[せいぞん]|Überleben, Existenz|しかし 生存[せいぞん] 者[しゃ] 達[たち]は、その 事実[じじつ]を 知[し]らなかった。|Jedoch wussten die Überlebenden nichts von dieser Tatsache.|Nomen (mit する)
ご存じ|ご 存[ぞん]じ|wissen, kennen (respektvoll)|ご 存[ぞん]じのように、ベルリンはドイツの 首都[しゅと]です。|Wie Sie wissen, ist Berlin die Hauptstadt Deutschlands.|Nomen
合意|合意[ごうい]|Einigung, Übereinkunft|彼[かれ]らは 彼[かれ]を 会長[かいちょう]に 選[えら]ぶことで 合意[ごうい]した。|Sie einigten sich darauf, ihn als Vorsitzenden zu wählen.|Nomen (mit する)
意向|意向[いこう]|Absicht, Wille|彼[かれ]は 意向[いこう]を 遠回[とおまわ]しに 言[い]った。|Er deutete seine Absicht an.|Nomen
がっかり|がっかり|enttäuscht sein|がっかりしないで。|Seid nicht enttäuscht.|Adverb
意欲|意欲[いよく]|Motivation, Tatendrang|最近[さいきん] 何[なん]に 対[たい]しても 意欲[いよく]が 湧[わ]きません。|In letzter Zeit habe ich zu nichts Antrieb.|Nomen
決意|決意[けつい]|Entschlossenheit, Entschluss|父[ちち]は 禁煙[きんえん]を 決意[けつい]した。|Vater entschloss sich, mit dem Rauchen aufzuhören.|Nomen (mit する)
意図|意図[いと]|Absicht, Ziel|彼[かれ]は 意図[いと] 的[てき]に 窓[まど]を 割[わ]った。|Er zerbrach das Fenster absichtlich.|Nomen (mit する)
意外|意外[いがい]|unerwartet, überraschend|結果[けっか]は 意外[いがい]だった？|Waren die Ergebnisse überraschend?|な-Adjektiv
意義|意義[いぎ]|Bedeutung, Sinn|有[ゆう] 意義[いぎ]な 回答[かいとう]とは、 新[あら]たな 疑問[ぎもん]を 生[う]むようなそれである。|Antworten sind nur dann nützlich, wenn sie neue Fragen aufwerfen.|Nomen
好意|好意[こうい]|Zuneigung, Wohlwollen|ジョンとアンは 互[たが]いに 好意[こうい]を 持[も]っている。|John und Ann mögen sich.|Nomen
意地悪|意地悪[いじわる]|boshaft, gemein|あなたのこと、 意地[いじ] 悪[わる]だって 思[おも]ったことはないけどね。|Ich habe dich nie für gemein gehalten.|Nomen (mit する)
確保|確保[かくほ]|Sicherung, Sicherstellung|彼[かれ]は 組織[そしき]の 透明[とうめい] 性[せい]を 確保[かくほ]しました。|Er stellte die Tranzparenz der Organisation sicher.|Nomen (mit する)
スライド|スライド|Schieben; Dia, Folie|次[つぎ]のスライドをお 願[ねが]いします。|Die nächste Folie, bitte.|Nomen (mit する)
確立|確立[かくりつ]|Etablierung, Aufbau|学問[がくもん]の 体系[たいけい]が 確立[かくりつ]して 初[はじ]めて 応用[おうよう]が 進展[しんてん]する。|Erst wenn das System einer Wissenschaft fest etabliert ist, kommt ihre Anwendung voran.|Nomen (mit する)
確定|確定[かくてい]|Festlegung, endgültige Entscheidung|彼[かれ]がアメリカに 行[い]くのは、 確定[かくてい]している。|Es steht fest, dass er nach Amerika geht.|Nomen (mit する)
確実|確実[かくじつ]|sicher, zuverlässig|我々[われわれ]は 確実[かくじつ]に 席[せき]が 取[と]れるように 早[はや]く 出[で]かけた。|Wir sind früh losgegangen, um uns Sitzplätze zu sichern.|Adjektiv
確信|確信[かくしん]|feste Überzeugung|私[わたし]は 娘[むすめ]が 試験[しけん]に 合格[ごうかく]することを 確信[かくしん]している。|Ich bin davon überzeugt, dass meine Tochter die Prüfung bestehen wird.|Nomen (mit する)
効率|効率[こうりつ]|Effizienz|勉強[べんきょう]は 効率[こうりつ] 的[てき]にしなくてはいけない。|Du musst effizient studieren.|Nomen
確率|確率[かくりつ]|Wahrscheinlichkeit|彼[かれ]が 回復[かいふく]する 確率[かくりつ]はあるにしても 極[きわ]めて 少[すく]ない。|Die Wahrscheinlichkeit, dass er sich erholt, ist äußerst gering, wenn es sie überhaupt gibt.|Nomen
軽率|軽率[けいそつ]|leichtfertig, unbedacht|軽率[けいそつ]な 行動[こうどう]はするな。|Handle nicht leichtsinnig.|Adjektiv
おっしゃる|おっしゃる|sagen (respektvoll)|全[まった]くおっしゃる 通[とお]りです。|Sie haben absolut recht.|Verb
機会|機会[きかい]|Gelegenheit|今[いま]までそれを 使[つか]う 機会[きかい]がなかった。|Ich hatte bisher nie Gelegenheit, es zu benutzen.|Nomen
危機|危機[きき]|Krise|人々[ひとびと]が 危機[きき]は 去[さ]ったと 言[い]っています。|Die Leute sagen, dass die Krise vorbei ist.|Nomen
機長|機長[きちょう]|Flugkapitän(in)|機長[きちょう]よりご 挨拶[あいさつ] 申[もう]し 上[あ]げます。|Hier spricht Ihr Flugkapitän.|Nomen
時機|時機[じき]|günstiger Zeitpunkt|あなたの 昇進[しょうしん]は 時機[じき]を 得[え]た、 当然[とうぜん]なものだと 思[おも]います。|Ich finde, deine Beförderung kam genau zur richtigen Zeit und ist wohlverdient.|Nomen
楽器|楽器[がっき]|Musikinstrument|トムは 楽器[がっき] 屋[や]さんで 働[はたら]いてるんだよ。|Tom arbeitet in einem Musikinstrumentenladen.|Nomen
食器|食器[しょっき]|Geschirr|食器[しょっき] 用[よう] 洗剤[せんざい]で 手[て]がかぶれました。|Ich habe an den Händen durch Geschirrspülmittel einen Hautausschlag bekommen.|Nomen
器用|器用[きよう]|geschickt, fingerfertig|彼[かれ]は 手先[てさき]が 不[ぶ] 器用[きよう]だ。|Er ist ungeschickt.|な-Adjektiv
クラシック|クラシック|klassische Musik, Klassik|トムはクラシック 音楽[おんがく]が 好[す]きだ。|Tom ist ein Freund klassischer Musik.|な-Adjektiv
受話器|受話器[じゅわき]|Telefonhörer|彼女[かのじょ]は 黙[だま]って 受話[じゅわ] 器[き]を 置[お]いた。|Sie legte schweigend den Hörer auf.|Nomen
器|器[うつわ]|Gefäß, Schale; Format (einer Person)|料理[りょうり]をきれいな 器[うつわ]に 入[い]れました。|Ich habe das Essen in eine schöne Schale gegeben.|Nomen
消火器|消火器[しょうかき]|Feuerlöscher|台所[だいどころ]に 消火器[しょうかき]が 置[お]いてあります。|In der Küche steht ein Feuerlöscher.|Nomen
器械|器械[きかい]|Gerät, Apparat|彼[かれ]は 器械[きかい] 運動[うんどう]が 得意[とくい]だ。|Er ist gut im Geräteturnen.|Nomen
取材|取材[しゅざい]|Recherche, Berichterstattung|記者[きしゃ]は 事件[じけん]の 取材[しゅざい]をしました。|Der Reporter recherchierte über den Vorfall.|Nomen (mit する)
材木|材木[ざいもく]|Bauholz|近頃[ちかごろ]はよい 材木[ざいもく]を 見[み]つけるのが 難[むずか]しいですね。|Heutzutage ist es schwer, gutes Bauholz zu finden.|Nomen
具合|具合[ぐあい]|Zustand, Befinden|彼女[かのじょ]は 彼[かれ]の 体[からだ]の 具合[ぐあい]をとても 心配[しんぱい]している。|Sie macht sich über seinen Gesundheitszustand viele Sorgen.|Nomen
さっと|さっと|rasch, flink|さっとシャワー 浴[あ]びてくる。|Ich gehe schnell duschen.|Adverb
器具|器具[きぐ]|Gerät, Utensil|今日[きょう]は 暖房[だんぼう] 器具[きぐ]を 使[つか]っていません。|Ich verwende heute das Heizgerät nicht.|Nomen
家具|家具[かぐ]|Möbel|彼女[かのじょ]は 部屋[へや]に 美[うつく]しい 家具[かぐ]を 備[そな]えた。|Sie richtete das Zimmer mit schönen Möbeln ein.|Nomen
雨具|雨具[あまぐ]|Regenkleidung, Regenzeug|雨具[あまぐ]をお 持[も]ちになりましたか。|Haben Sie Regenkleidung bei sich?|Nomen
基地|基地[きち]|Stützpunkt, Basis|昨日[きのう]、 彼[かれ]は 基地[きち]に 帰[かえ]らなかった。|Er ist gestern nicht zur Basis zurückgekehrt.|Nomen
水準|水準[すいじゅん]|Niveau, Standard|統計[とうけい]は 我々[われわれ]の 生活[せいかつ] 水準[すいじゅん]が 向上[こうじょう]したことを 示[しめ]している。|Die Statistiken zeigen, dass unser Lebensstandard gestiegen ist.|Nomen
基準|基準[きじゅん]|Norm, Maßstab|他[ほか]に 基準[きじゅん]がないから 評価[ひょうか]に 個人差[こじんさ]がある。|Da es keinen anderen Maßstab gibt, fällt die Bewertung von Person zu Person verschieden aus.|Nomen
準急|準急[じゅんきゅう]|Eilzug (hält öfter als der Express)|この 駅[えき]には 準急[じゅんきゅう]が 止[と]まります。|An diesem Bahnhof hält der Eilzug.|Nomen
設立|設立[せつりつ]|Gründung|彼[かれ]はその 学校[がっこう]を 設立[せつりつ]した。|Er hat diese Schule gegründet.|Nomen (mit する)
キャンセル|キャンセル|Stornierung, Absage|予約[よやく]をキャンセルできますか？|Können Sie meine Reservierung stornieren?|Nomen (mit する)
設備|設備[せつび]|Ausstattung, Einrichtung|この 建物[たてもの]には、スプリンクラー 設備[せつび]がある。|In diesem Gebäude gibt es eine Sprinkleranlage.|Nomen (mit する)
説|説[せつ]|Theorie, Ansicht|あなたがなんと 言[い]おうと、 私[わたし]はやはりその 説[せつ]が 正[ただ]しいと 思[おも]う。|Egal was du sagst, ich denke trotzdem, dass diese Ansicht stimmt.|Nomen
解説|解説[かいせつ]|Erläuterung, Kommentar|彼[かれ]の 解説[かいせつ]がわかった 人[ひと]はほとんどいなかった。|Kaum jemand verstand seine Erläuterung.|Nomen (mit する)
社説|社説[しゃせつ]|Leitartikel|今朝[けさ]の 新聞[しんぶん]の 社説[しゃせつ]を 読[よ]みましたか。|Hast du heute Morgen den Leitartikel in der Zeitung gelesen?|Nomen
学説|学説[がくせつ]|wissenschaftliche Theorie|生命[せいめい]の 起源[きげん]については 数多[かずおお]くの 学説[がくせつ]がある。|Über die Entstehung des Lebens gibt es viele wissenschaftliche Theorien.|Nomen
公式|公式[こうしき]|offiziell; Formel|数学[すうがく]はただ 公式[こうしき]を 暗記[あんき]すればいいというものではない。|Mathematik ist nicht einfach das Auswendiglernen von Formeln.|な-Adjektiv
公共|公共[こうきょう]|öffentlich, Allgemeinheit|トムは 公共[こうきょう] 交通機関[こうつうきかん]を 利用[りよう]する。|Tom nutzt die öffentlichen Verkehrsmittel.|Nomen
シーツ|シーツ|Bettlaken|母[はは]はベッドに 綺麗[きれい]なシーツを 敷[し]いた。|Meine Mutter hat mein Bett mit einem sauberen Laken bezogen.|Nomen
公平|公平[こうへい]|Gerechtigkeit, Fairness|人生[じんせい]は 公平[こうへい]ではないよね？|Das Leben ist ungerecht, stimmt’s?|な-Adjektiv
公立|公立[こうりつ]|öffentlich (von Staat oder Gemeinde getragen)|公立[こうりつ] 学校[がっこう]の 教師[きょうし]をしています。|Ich bin Lehrer an einer öffentlichen Schule.|Nomen
学園|学園[がくえん]|Lehranstalt, Schule|学校[がっこう]では 学園[がくえん] 音楽祭[おんがくさい]の 準備[じゅんび]をしています。|In der Schule bereiten wir das Musikfest der Lehranstalt vor.|Nomen
祭日|祭日[さいじつ]|Feiertag|今度[こんど]の 祭日[さいじつ]は 日曜日[にちようび]と 重[かさ]なります。|Der nächste Feiertag fällt auf einen Sonntag.|Nomen
国際的|国際的[こくさいてき]|international|国連[こくれん]は 一[ひと]つの 国際[こくさい] 的[てき] 機能[きのう]である。|Die Vereinten Nationen sind eine internationale Organisation.|Adjektiv
国際化|国際化[こくさいか]|Internationalisierung|社会[しゃかい]の 国際化[こくさいか]が 進[すす]んでいます。|Die Internationalisierung der Gesellschaft schreitet voran.|Nomen (mit する)
交際|交際[こうさい]|Umgang, Beziehung, Bekanntschaft|交際[こうさい]を 続[つづ]けましょう。|Bleiben wir in Verbindung.|Nomen (mit する)
かかる|かかる|bekommen, sich zuziehen (Krankheit)|時間[じかん]かかりそうだよ。|Das wird sicher ein Weilchen dauern.|Verb
際|際[さい]|Gelegenheit, Fall, wenn|英語[えいご]を 話[はな]す 際[さい]は 間違[まちが]いをするのを 恐[おそ]れてはいけません。|Hab keine Angst davor, Fehler zu machen, wenn du Englisch sprichst.|Nomen
航空|航空[こうくう]|Luftfahrt|日本[にほん]に 帰[かえ]る 航空[こうくう] 券[けん]はお 持[も]ちですか？|Haben Sie einen Rückflugschein nach Japan?|Nomen
航空機|航空機[こうくうき]|Flugzeug, Luftfahrzeug|航空[こうくう] 機[き]のチケットは 高[たか]いですか。|Sind Flugtickets teuer?|Nomen
航空券|航空券[こうくうけん]|Flugticket|帰[かえ]りの 航空[こうくう] 券[けん]はありますか。|Haben Sie einen Rückflugschein?|Nomen
完全|完全[かんぜん]|vollständig, vollkommen|彼[かれ]は 完全[かんぜん]に 間違[まちが]っている。|Er irrt sich vollkommen.|な-Adjektiv
成長|成長[せいちょう]|Wachstum|リンゴの 木[き]が 種[たね]から 成長[せいちょう]するとは 知[し]らなかった。|Ich wusste nicht, dass Apfelbäume aus Samen wachsen.|Nomen (mit する)
成立|成立[せいりつ]|Zustandekommen, Abschluss|交渉[こうしょう]が 不[ふ] 成立[せいりつ]に 終[お]わった。|Die Verhandlungen endeten ergebnislos.|Nomen (mit する)
形成|形成[けいせい]|Bildung, Formung|教育[きょういく]は 人格[じんかく]の 形成[けいせい]を 助[たす]ける。|Erziehung hilft dabei, den Charakter zu formen.|Nomen (mit する)
コック|コック|Koch, Köchin|私[わたし]はコックです。|Ich bin ein Koch.|Nomen
結成|結成[けっせい]|Gründung, Bildung (einer Gruppe)|ボート 競技[きょうぎ]に 参加[さんか]する 為[ため]に 新[しん]チームが 結成[けっせい]された。|Ein neues Team wurde gegründet, um an dem Bootrennen teilzunehmen.|Nomen (mit する)
成果|成果[せいか]|Ergebnis, Erfolg|努力[どりょく]したが 何[なん]の 成果[せいか]も 得[え]られなかった。|Ich habe mich zwar angestrengt, aber keinerlei Resultat erzielt.|Nomen
賛成|賛成[さんせい]|Zustimmung|賛成[さんせい]はできません。|Ich kann Ihnen nicht zustimmen.|Nomen (mit する)
合成|合成[ごうせい]|Synthese, Zusammensetzung|この 心霊写真[しんれいしゃしん]、よくできているけど、ただの 合成[ごうせい] 写真[しゃしん]だよ。|Dieses Geisterfoto ist gut gemacht, aber es ist bloß eine Fotomontage.|Nomen (mit する)
成人|成人[せいじん]|Erwachsene(r), Volljährige(r)|その 映画[えいが]は 成人[せいじん] 向[む]きだ。|Das ist ein Film für Erwachsene.|Nomen (mit する)
成年|成年[せいねん]|Volljährigkeit|娘[むすめ]は 今年[ことし] 成年[せいねん]になる。|Meine Tochter wird dieses Jahr volljährig.|Nomen
失う|失[うしな]う|verlieren|失[うしな]うものは 何[なに]もない。|Ich habe nichts zu verlieren.|Verb
えび|えび|Garnele, Krabbe|エビが 食[た]べたいですか。|Möchtest du Garnelen essen?|Nomen
失業|失業[しつぎょう]|Arbeitslosigkeit, Verlust der Stelle|もしさぁ、 失業[しつぎょう]したらどうする？|Was tätest du, wenn du deine Arbeit verlörest?|Nomen (mit する)
失敗|失敗[しっぱい]|Misserfolg, Fehler|彼[かれ]らは 彼[かれ]の 失敗[しっぱい]を 笑[わら]った。|Sie lachten über seinen Fehler.|Nomen (mit する)
勝敗|勝敗[しょうはい]|Sieg oder Niederlage|勝敗[しょうはい]は 問題[もんだい]ではない。|Sieg oder Niederlage spielt keine Rolle.|Nomen
原則|原則[げんそく]|Grundsatz, Prinzip|例外[れいがい]は 原則[げんそく]のある 証拠[しょうこ]。|Ausnahmen bestätigen die Regel.|Nomen
原料|原料[げんりょう]|Rohstoff|私[わたし] 達[たち]は 原料[げんりょう]をマレーシアから 仕入[しい]れている。|Wir kaufen das Material in Malaysia ein.|Nomen
原理|原理[げんり]|Prinzip, Grundgesetz|仏教[ぶっきょう]の 原理[げんり]に 従[したが]って 行動[こうどう]するのは 難[むずか]しいですか。|Ist es schwer, nach den Grundsätzen des Buddhismus zu handeln?|Nomen
原子力|原子力[げんしりょく]|Atomkraft, Kernenergie|原子[げんし] 力[りょく]エネルギーを 平和[へいわ]のために 利用[りよう]することができる。|Die Energie aus Atomkraft kann zu friedlichen Zwecken genutzt werden.|Nomen
グリーン|グリーン|Grün|グリーンは 私[わたし]が 一番[いちばん] 好[す]きな 色[いろ]です。|Grün ist meine Lieblingsfarbe.|Nomen
高原|高原[こうげん]|Hochebene, Hochland|高原[こうげん]を 散歩[さんぽ]するのは 楽[たの]しい。|Auf der Hochebene spazieren zu gehen ist angenehm.|Nomen
資料|資料[しりょう]|Unterlagen, Material, Daten|彼女[かのじょ]は 本[ほん]を 書[か]くための 資料[しりょう]を 集[あつ]めています。|Sie ist dabei, Material für ein Buch zu sammeln.|Nomen
資産|資産[しさん]|Vermögen|彼[かれ]は 資産[しさん] 家[か]だ。|Er ist ein wohlhabender Mann.|Nomen
資格|資格[しかく]|Qualifikation, Befähigung|私[わたし]に 生[い]きる 資格[しかく]なんてないのよ。|Ich habe es nicht verdient zu leben.|Nomen
資本主義|資本主義[しほんしゅぎ]|Kapitalismus|彼[かれ]らは 資本[しほん] 主義[しゅぎ]にピリオドを 打[う]ち 社会主義[しゃかいしゅぎ] 社会[しゃかい]を 建設[けんせつ]した。|Sie machten dem Kapitalismus ein Ende und bauten eine sozialistische Gesellschaft auf.|Nomen
資源|資源[しげん]|Ressourcen, Rohstoffquellen|限[かぎ]りある 水[みず] 資源[しげん]を 大切[たいせつ]にしましょう。|Gehen wir sparsam mit unserem begrenzten Wasservorrat um!|Nomen
願書|願書[がんしょ]|Bewerbungsformular, Antrag|あなたの 願書[がんしょ]に 最近[さいきん]の 写真[しゃしん]を 貼[は]りなさい。|Kleben Sie ein aktuelles Foto auf Ihren Antrag.|Nomen
正式|正式[せいしき]|förmlich, offiziell|彼[かれ]は 全[まった]くと 云[い]ってよいほど、 正式[せいしき]な 教育[きょういく]を 受[う]けたことがない。|Er hatte so gut wie keine ordentliche Schulbildung.|な-Adjektiv
ジーパン|ジーパン|Jeans|もうちょい 痩[や]せないと 今[いま]まで 穿[は]いてたジーパンがきつい。|Ich muss ein wenig abnehmen. Meine alten Jeans passen mir nicht mehr!|Nomen
正面|正面[しょうめん]|Vorderseite, Front|正面[しょうめん] 近[ちか]くの 席[せき]に 座[すわ]りたいのですが。|Ich hätte gerne einen Sitzplatz weiter vorne.|Nomen
正午|正午[しょうご]|Mittag (12 Uhr)|私[わたし]たちは 毎日[まいにち] 正午[しょうご]に 昼食[ちゅうしょく]を 食[た]べます。|Wir essen jeden Tag um 12 Uhr zu Mittag.|Nomen
正義|正義[せいぎ]|Gerechtigkeit|正義[せいぎ]が 行動[こうどう]によって 表[あらわ]される。|Gerechtigkeit wird durch Taten zum Ausdruck gebracht.|Nomen
正門|正門[せいもん]|Haupttor, Haupteingang|タクシーが 正門[せいもん]のところへきて 止[と]まった。|Ein Taxi fuhr am Haupttor vor und hielt.|Nomen
正解|正解[せいかい]|richtige Antwort|正解[せいかい]に 印[しるし]をつけてください。|Bitte kreuzen Sie die richtige Antwort an.|Nomen (mit する)
正方形|正方形[せいほうけい]|Quadrat|正[せい] 方形[ほうけい]には 四[よっ]つの 辺[へん]がある。|Ein Quadrat hat vier Seiten.|Nomen
正|正[せい]|richtig; Original (eines Dokuments)|書類[しょるい]は 正[せい]と 副[ふく]の 二枚[にまい]が 必要[ひつよう]です。|Von dem Dokument braucht man zwei Exemplare, Original und Kopie.|Nomen
ジャーナリズム|ジャーナリズム|Journalismus|彼[かれ]はジャーナリズム 界[かい]の 大物[おおもの]です。|Er ist eine große Nummer in der Welt des Journalismus.|Nomen
正座|正座[せいざ]|förmlicher Kniesitz|ずっと 正座[せいざ]してたからか、 足[あし]がしびれちゃって。|Ich hab so lange auf den Fersen gesessen, bis meine Beine taub geworden sind.|Nomen (mit する)
正当|正当[せいとう]|berechtigt, rechtmäßig|君[きみ]がそのようなことを 考[かんが]える 正当[せいとう]な 理由[りゆう]はない。|Es gibt keinen berechtigten Grund für dich, so zu denken.|な-Adjektiv
異性|異性[いせい]|das andere Geschlecht|私[わたし]の 彼氏[かれし]、 異性[いせい]の 友達[ともだち]が 多[おお]いのよね。|Mein Freund ist mit vielen Frauen befreundet.|Nomen
異常|異常[いじょう]|ungewöhnlich, abnorm|今年[ことし]の 夏[なつ]は 異常[いじょう]に 暑[あつ]い。|Dieser Sommer ist ungewöhnlich heiß.|な-Adjektiv
正常|正常[せいじょう]|normal, Normalzustand|全[すべ]てが 正常[せいじょう]に 戻[もど]りつつある。|Alles normalisiert sich wieder.|な-Adjektiv
意識|意識[いしき]|Bewusstsein|彼[かれ]は 病院[びょういん]で 意識[いしき]を 回復[かいふく]した。|Er kam im Krankenhaus wieder zu Bewusstsein.|Nomen (mit する)
常識|常識[じょうしき]|gesunder Menschenverstand, Allgemeinwissen|常識[じょうしき]のある 人[ひと]ならば、このようなことは 決[けっ]してしないだろう。|Jemand mit einem gesunden Menschenverstand würde so etwas niemals machen.|Nomen
スピーチ|スピーチ|Rede, Ansprache|いいスピーチでしたね。|Das war eine gute Rede.|Nomen
調べ|調[しら]べ|Untersuchung, Ermittlung|この 文[ぶん]は 俳句[はいく]の 調[しら]べ 持[も]つ 文[ぶん]よ。|Dieses ist ein Satz, der so viele Silben zählt wie ein Haiku.|Nomen
好調|好調[こうちょう]|gut in Form, gut laufend|彼女[かのじょ] 好調[こうちょう]ですね。|Bei ihr läuft es gut, nicht wahr?|な-Adjektiv
下調べ|下調[したしら]べ|Voruntersuchung, Vorbereitung|店[みせ]の 下調[したしら]べのため 会社帰[かいしゃがえ]りに 寄[よ]ることにした。|Ich beschloss, auf dem Heimweg von der Arbeit vorbeizuschauen, um den Laden vorab zu erkunden.|Nomen (mit する)
整備|整備[せいび]|Wartung, Instandhaltung|整備[せいび] 士[し]ではないんですね？|Sie sind kein Mechaniker, oder?|Nomen (mit する)
整理|整理[せいり]|Ordnen, Aufräumen|ぼくは 出[で]かける 前[まえ]に 自分[じぶん]の 本[ほん]を 整理[せいり]する 時間[じかん]がない。|Ich habe keine Zeit, meine Bücher zu ordnen, bevor ich gehe.|Nomen (mit する)
節約|節約[せつやく]|Sparen, Einsparung|私[わたし]たちは 時間[じかん]とお 金[かね]を 節約[せつやく]したほうがよい。|Wir sollten uns die Zeit und das Geld lieber sparen.|Nomen (mit する)
検査|検査[けんさ]|Untersuchung, Kontrolle|お 医者[いしゃ]さんが、 私[わたし]の 脳[のう]を 検査[けんさ]したの。|Der Arzt untersuchte mein Gehirn.|Nomen (mit する)
ああ|ああ|so, derart (wie jenes)|男[おとこ]の 人[ひと]がああいうことやるの 嫌[きら]いだわ。|Ich hasse es, wenn Männer das machen.|Adverb
案|案[あん]|Vorschlag, Plan, Entwurf|あなたにはもっとよい 案[あん]を 提案[ていあん]してほしい。|Ich möchte, dass du einen besseren Plan vorschlägst.|Nomen
案外|案外[あんがい]|unerwartet, wider Erwarten|ピクニックは 案外[あんがい]つまらなかった。|Das Picknick war wider Erwarten langweilig.|Adverb
案の定|案[あん]の 定[じょう]|wie befürchtet, erwartungsgemäß|案[あん]の 定[じょう]、 彼[かれ]は 第一位[だいいちい]になった。|Wie erwartet wurde er Erster.|Adverb
国連|国連[こくれん]|Vereinte Nationen|国連[こくれん]は 地球[ちきゅう]の 平和[へいわ]を 保[たも]つために 努力[どりょく]しています。|Die Vereinten Nationen bemühen sich, den Frieden auf Erden zu bewahren.|Nomen
接続|接続[せつぞく]|Verbindung, Anschluss|インターネットの 接続[せつぞく]が 遮断[しゃだん]された。|Meine Internetverbindung wurde unterbrochen.|Nomen (mit する)
外相|外相[がいしょう]|Außenminister(in)|外相[がいしょう]は、 戦争[せんそう]は 避[さ]けられないと 言[い]った。|Der Außenminister sagte, der Krieg sei unvermeidlich.|Nomen
真相|真相[しんそう]|der wahre Sachverhalt|僕[ぼく]に 真相[しんそう]を 話[はな]してくれ。|Sag mir die Wahrheit.|Nomen
相変わらず|相変[あいか]わらず|wie immer, unverändert|相[あい] 変[か]わらずまだ 寒[さむ]い。|Es ist immer noch so kalt wie eh und je.|Adverb
アクセント|アクセント|Akzent, Betonung|アクセントで 彼[かれ]がドイツ 人[じん]だとわかる。|Man kann an seinem Akzent erkennen, dass er Deutscher ist.|Nomen
雑談|雑談[ざつだん]|Plauderei|彼[かれ]はコーヒーを 飲[の]みながら 彼女[かのじょ]と 雑談[ざつだん]した。|Er trank Kaffee und plauderte mit ihr.|Nomen (mit する)
記事|記事[きじ]|Artikel (Zeitung)|記事[きじ]を 一[ひと]つ 書[か]きたい。|Ich will einen Artikel schreiben.|Nomen
記号|記号[きごう]|Zeichen, Symbol|発音[はつおん] 記号[きごう]が 読[よ]めますか？|Kannst du Lautschrift lesen?|Nomen
記入|記入[きにゅう]|Eintragen, Ausfüllen|ボールペンでご 記入[きにゅう]ください。|Schreiben Sie bitte mit einem Kugelschreiber.|Nomen (mit する)
暗記|暗記[あんき]|Auswendiglernen|これを 暗記[あんき]しなさい。|Lern das auswendig!|Nomen (mit する)
記憶|記憶[きおく]|Erinnerung, Gedächtnis|彼[かれ]は 記憶[きおく]を 失[うしな]った。|Er hat sein Gedächtnis verloren.|Nomen (mit する)
関心|関心[かんしん]|Interesse|彼[かれ]らは 政治[せいじ]には 無[む] 関心[かんしん]だ。|Die interessieren sich nicht für Politik.|Nomen
コマーシャル|コマーシャル|Werbespot|テレビ 番組[ばんぐみ]にはコマーシャルが 入[はい]る。|In Fernsehsendungen wird Werbung eingeblendet.|Nomen
税関|税関[ぜいかん]|Zoll (Behörde)|税関[ぜいかん]はどこですか。|Wo ist das Zollamt?|Nomen
関節|関節[かんせつ]|Gelenk|気温[きおん]が 下[さ]がると 関節[かんせつ]が 痛[いた]むんだ。|Wenn die Temperatur sinkt, tun mir die Gelenke weh.|Nomen
関わる|関[かか]わる|zu tun haben mit, betreffen|もう 誰[だれ]とも 関[かか]わりたくない。|Ich will mit niemandem mehr was zu tun haben.|Verb
機関|機関[きかん]|Organ, Einrichtung; Antrieb|国会[こっかい]は 日本[にほん]の 主要[しゅよう] 統治[とうち] 機関[きかん]である。|Das Parlament ist das Hauptregierungsorgan in Japan.|Nomen
係|係[かかり]|Zuständige(r), Verantwortliche(r)|係[かかり] 活動[かつどう]のアイデアをクラス 全員[ぜんいん]で 考[かんが]えた。|Die ganze Klasse überlegte sich Ideen für die Klassendienste.|Nomen
現状|現状[げんじょう]|gegenwärtiger Zustand|現状[げんじょう]では、これ 以上[いじょう]の 値引[ねび]きはいたしかねます。|In der gegenwärtigen Lage können wir Ihnen keinen weiteren Preisnachlass gewähren.|Nomen
事態|事態[じたい]|Lage, Situation|事態[じたい]はきわめて 深刻[しんこく]です。|Die Lage ist äußerst brenzlig.|Nomen
しつこい|しつこい|hartnäckig, aufdringlich|しつこいせきが 出[で]て、なかなか 治[なお]りません。|Ich habe einen hartnäckigen Husten, er geht und geht nicht weg.|Adjektiv
実態|実態[じったい]|tatsächlicher Zustand|会社[かいしゃ]の 実態[じったい]を 調[しら]べました。|Wir haben den tatsächlichen Zustand der Firma untersucht.|Nomen
行政|行政[ぎょうせい]|Verwaltung|府県[ふけん]はフランスや 日本[にほん]の 行政[ぎょうせい] 区域[くいき]である。|Präfekturen sind Verwaltungsbezirke in Frankreich und Japan.|Nomen
政治家|政治家[せいじか]|Politiker(in)|大[おお]きくなったら、 政治[せいじ] 家[か]になりたいです。|Wenn ich einmal groß bin, möchte ich Politiker werden.|Nomen
治まる|治[おさ]まる|sich legen, nachlassen|頭痛[ずつう]が 治[おさ]まらないんだよ。|Meine Kopfschmerzen gehen nicht weg.|Verb
政党|政党[せいとう]|politische Partei|彼[かれ]はその 政党[せいとう]の 指導[しどう] 権[けん]をにぎった。|Er übernahm die Führung der politischen Partei.|Nomen
策|策[さく]|Maßnahme, Plan|彼[かれ]がよい 解決[かいけつ] 策[さく]を 思[おも]いついた。|Ihm fiel eine gute Lösung ein.|Nomen
挙げる|挙[あ]げる|anführen, nennen; erheben|意見[いけん]がある 人[ひと]は 手[て]を 挙[あ]げてください。|Wer eine Meinung hat, der hebe die Hand.|Verb
気候|気候[きこう]|Klima|ここの 気候[きこう]は 私[わたし]には 合[あ]わない。|Das Klima hier bekommt mir nicht.|Nomen
しゃがむ|しゃがむ|sich hinhocken|体[からだ]を 捻[ひね]ってから 下[した]までしゃがみます。|Nachdem Sie Ihren Körper gedreht haben, gehen Sie bis ganz tief in die Knie.|Verb
補う|補[おぎな]う|ergänzen, ausgleichen|あなたの 食事[しょくじ]にはビタミンを 補[おぎな]うほうがよい。|Du solltest deine Ernährung um Vitamine ergänzen.|Verb
足首|足首[あしくび]|Fußknöchel|彼[かれ]は 転[ころ]んで 足首[あしくび]を 捻挫[ねんざ]した。|Er stolperte und verstauchte sich den Knöchel.|Nomen
首脳|首脳[しゅのう]|Staats- oder Regierungschef(in), Spitze|彼[かれ]らは 遅[おそ]くまで 首脳[しゅのう] 会談[かいだん]を 続[つづ]けた。|Sie setzten die Gipfelkonferenz bis spät in die Nacht fort.|Nomen
頭|頭[かしら]|Oberhaupt, Anführer|彼[かれ]は 大工[だいく]の 頭[かしら]です。|Er ist der Anführer der Zimmerleute.|Nomen
頭痛|頭痛[ずつう]|Kopfschmerzen|頭痛[ずつう]が 無[な]くなった。|Meine Kopfschmerzen sind weg.|Nomen
顔色|顔色[かおいろ]|Gesichtsfarbe, Miene|日[ひ]に 当[あ]たって 彼[かれ]の 顔色[かおいろ]はよくなった。|Das Sonnenlicht verbesserte seine Gesichtsfarbe.|Nomen
朝顔|朝顔[あさがお]|Prunkwinde|庭[にわ]に 朝顔[あさがお]の 花[はな]が 咲[さ]きました。|Im Garten haben die Prunkwinden geblüht.|Nomen
コンテスト|コンテスト|Wettbewerb|彼女[かのじょ]は 美人[びじん]コンテストに 参加[さんか]した。|Sie nahm an einem Schönheitswettbewerb teil.|Nomen
改正|改正[かいせい]|Änderung, Novellierung (Gesetz)|法律[ほうりつ]が 改正[かいせい]された。|Das Gesetz wurde geändert.|Nomen (mit する)
改良|改良[かいりょう]|Verbesserung, Veredelung|改良[かいりょう]が 進[すす]むとパンはどんどんおいしくなる。|Je weiter die Verbesserung voranschreitet, desto leckerer wird das Brot.|Nomen (mit する)
改める|改[あらた]める|ändern, verbessern|悪[わる]い 習慣[しゅうかん]を 改[あらた]めるのは 難[むずか]しいです。|Es ist schwer, schlechte Angewohnheiten loszuwerden.|Verb
改造|改造[かいぞう]|Umbau, Umbildung|父[ちち]は 車庫[しゃこ]を 書斎[しょさい]に 改造[かいぞう]した。|Mein Vater baute die Garage in ein Arbeitszimmer um.|Nomen (mit する)
改めて|改[あらた]めて|erneut, noch einmal|改[あらた]めて、ありがとう。|Noch einmal danke!|Adverb
改まる|改[あらた]まる|sich erneuern, sich ändern|長年[ながねん]の 習慣[しゅうかん]はなかなか 改[あらた]まらない。|Langjährige Gewohnheiten ändern sich nicht so leicht.|Verb
革命|革命[かくめい]|Revolution|産業[さんぎょう] 革命[かくめい]はイギリスで 最初[さいしょ]に 起[お]こった。|Die industrielle Revolution ereignete sich zuerst in England.|Nomen
キャベツ|キャベツ|Kohl, Weißkohl|キャベツとレタスって 何[なに]が 違[ちが]うの？|Was ist denn der Unterschied zwischen Weißkohl und Kopfsalat?|Nomen
生命|生命[せいめい]|Leben|私[わたし]たちは 生命[せいめい]を 失[うしな]う 危険[きけん]があった。|Wir waren in Gefahr, ums Leben zu kommen.|Nomen
命|命[いのち]|Leben|彼[かれ]は 交通事故[こうつうじこ]で 命[いのち]を 失[うしな]った。|Er verlor sein Leben bei einem Verkehrsunfall.|Nomen
運命|運命[うんめい]|Schicksal|あなたは 運命[うんめい]を 信[しん]じますか？|Glaubst du an das Schicksal?|Nomen
組合|組合[くみあい]|Gewerkschaft, Verband|組合[くみあい]と 会社[かいしゃ]は 新[あたら]しい 契約[けいやく]で 合意[ごうい]した。|Die Gewerkschaft und die Firma einigten sich auf einen neuen Vertrag.|Nomen
仕組み|仕組[しく]み|Aufbau, Mechanismus|経済学[けいざいがく]は 経済[けいざい]の 仕組[しく]みを 研究[けんきゅう]する 学問[がくもん]である。|Die Wirtschaftswissenschaft erforscht, wie die Wirtschaft funktioniert.|Nomen
組|組[くみ]|Klasse, Gruppe|イスの 下[した]にひと 組[くみ]の 手袋[てぶくろ]を 見[み]つけた。|Ich habe unter dem Stuhl ein Paar Handschuhe gefunden.|Nomen
組む|組[く]む|sich zusammentun; verschränken|トムはベンチに 座[すわ]って 足[あし]を 組[く]んだ。|Tom setzte sich auf eine Bank und schlug die Beine übereinander.|Verb
組み合わせる|組[く]み 合[あ]わせる|kombinieren, zusammenstellen|数[すう]を 表[あらわ]す 文字[もじ]と 演算子[えんざんし]を 組[く]み 合[あ]わせたものを 式[しき]と 呼[よ]びます。|Eine Kombination aus Zeichen für Zahlen und Rechenzeichen nennt man eine Formel.|Verb
アイドル|アイドル|Idol, Popstar|また 新[あたら]しいアイドルが 出[で]てきた。|Schon wieder ist ein neues Idol aufgetaucht.|Nomen
組み込む|組[く]み 込[こ]む|einbauen, integrieren|モデムはコンピューターの 中[なか]に 組[く]み 込[こ]まれた。|Das Modem war in den Computer eingebaut.|Verb
組み合わせ|組[く]み 合[あ]わせ|Kombination, Zusammenstellung|意外[いがい]と 面白[おもしろ]い 組[く]み 合[あ]わせかもね。|Das ist vielleicht eine überraschend interessante Kombination.|Nomen
織物|織物[おりもの]|Gewebe, Textilien|私[わたし]はその 山[やま]に 手[て]を 入[い]れて 柔[やわ]らかい 織物[おりもの]に 触[ふ]れた。|Ich steckte meine Hand in den Haufen und fühlte einen weichen Stoff.|Nomen
進出|進出[しんしゅつ]|Vorstoß, Expansion|私[わたし] 達[たち]は 決勝戦[けっしょうせん]に 進出[しんしゅつ]した。|Wir sind ins Finale eingezogen.|Nomen (mit する)
進行|進行[しんこう]|Fortgang, Verlauf|競技[きょうぎ]は 予定[よてい]どおりに 進行[しんこう]した。|Der Wettbewerb verlief wie geplant.|Nomen (mit する)
進歩|進歩[しんぽ]|Fortschritt|彼女[かのじょ]は 進歩[しんぽ]している。|Sie macht Fortschritte.|Nomen (mit する)
前進|前進[ぜんしん]|Vorwärtsbewegung, Vormarsch|彼[かれ]らは 川[かわ]まで 前進[ぜんしん]した。|Sie rückten bis zum Fluss vor.|Nomen (mit する)
からかう|からかう|necken, aufziehen|お 年寄[としよ]りをからかってはいけません。|Man macht sich nicht über alte Leute lustig!|Verb
進路|進路[しんろ]|Kurs, Laufbahn|私[わたし]たちは 進路[しんろ]を 変[か]えてきた。|Wir haben unseren Kurs geändert.|Nomen
行進|行進[こうしん]|Marsch, Umzug|少年[しょうねん]たちは 楽[たの]しそうに 歌[うた]いながら 行進[こうしん]を 続[つづ]けた。|Die Jungen marschierten fröhlich singend weiter.|Nomen (mit する)
推進|推進[すいしん]|Förderung, Vorantreiben|最先端[さいせんたん]のイノベーションを 推進[すいしん]する。|Wir treiben modernste Innovationen voran.|Nomen (mit する)
主任|主任[しゅにん]|Leiter(in), Verantwortliche(r)|学年[がくねん] 主任[しゅにん]の 先生[せんせい]が、 廊下[ろうか]で 声[こえ]をかけてくれた。|Der Jahrgangsleiter sprach mich auf dem Flur an.|Nomen
辞任|辞任[じにん]|Rücktritt|もう 怒[いか]りは 納[おさ]まりましたが、 辞任[じにん]します。|Mein Zorn ist verraucht, aber ich kündige.|Nomen (mit する)
お世辞|お 世辞[せじ]|Schmeichelei, Kompliment|私[わたし] 達[たち]は 彼女[かのじょ]の 料理[りょうり]にお 世辞[せじ]を 言[い]った。|Wir machten ihr Komplimente für ihr Essen.|Nomen
委員会|委員会[いいんかい]|Ausschuss, Komitee|委員[いいん] 会[かい]は 十[じゅう] 名[めい]で 構成[こうせい]されている。|Der Ausschuss hat zehn Mitglieder.|Nomen
すっきり|すっきり|erfrischt, klar, aufgeräumt|散歩[さんぽ]して 頭[あたま]をすっきりさせてくるよ。|Ich gehe spazieren, um den Kopf frei zu bekommen.|Adverb
委員|委員[いいん]|Ausschussmitglied|彼[かれ]は 委員[いいん]に 選[えら]ばれました。|Er wurde in den Ausschuss gewählt.|Nomen
出勤|出勤[しゅっきん]|zur Arbeit gehen, Dienstantritt|朝[あさ] 食前[しょくぜん]に 出勤[しゅっきん]するなんていかにも 彼[かれ]らしい。|Es ist wirklich typisch für ihn, schon vor dem Frühstück zur Arbeit zu gehen.|Nomen (mit する)
勤勉|勤勉[きんべん]|Fleiß, fleißig|勤勉[きんべん]は 成功[せいこう]への 道[みち]だ。|Fleiß ist der Weg zum Erfolg.|な-Adjektiv
勤務|勤務[きんむ]|Dienst, Arbeit|勤務[きんむ] 中[ちゅう]はタバコを 吸[す]わない 方[ほう]がいいよ。|Es ist besser, wenn du während des Dienstes nicht rauchst.|Nomen (mit する)
義務|義務[ぎむ]|Pflicht|あなたを 助[たす]けるのが 私[わたし]の 義務[ぎむ]です。|Es ist meine Pflicht, dir zu helfen.|Nomen
事務|事務[じむ]|Büroarbeit|いつでも 事務[じむ] 所[しょ]にいらしてください。|Besuchen Sie jederzeit unsere Firma.|Nomen
公務員|公務員[こうむいん]|Beamte(r), Angestellte(r) im öffentlichen Dienst|私[わたし]は 公務[こうむ] 員[いん]です。|Ich bin Beamter.|Nomen
あいにく|あいにく|leider, unglücklicherweise|あいにく 雨[あめ]が 降[ふ]った。|Leider regnete es.|Adverb
事務員|事務員[じむいん]|Bürokraft|聴衆[ちょうしゅう]の 中[なか]には 学生[がくせい]、 教師[きょうし]、 事務[じむ] 員[いん]などがいた。|Im Publikum waren Schüler, Lehrer, Angestellte usw.|Nomen
従う|従[したが]う|folgen, gehorchen|彼女[かのじょ]の 意見[いけん]に 従[したが]うほうがいい。|Du solltest ihrer Ansicht besser folgen.|Verb
従業員|従業員[じゅうぎょういん]|Beschäftigte(r), Mitarbeiter(in)|今日[きょう]は 従業[じゅうぎょう] 員[いん]たちを 早[はや]く 家[いえ]に 帰[かえ]らせよう。|Wir wollen die Angestellten heute früher in den Feierabend entlassen.|Nomen
雇用|雇用[こよう]|Beschäftigung, Anstellung|残念[ざんねん]ながら、 完全[かんぜん] 雇用[こよう]はもう 当然[とうぜん]の 事[こと]ではなくなっている。|Leider ist eine Vollbeschäftigung schon keine Selbstverständlichkeit mehr.|Nomen (mit する)
実績|実績[じっせき]|Leistung, Erfolgsbilanz|彼[かれ]は 実業家[じつぎょうか]として 良[よ]い 実績[じっせき]をあげている。|Er hat als Geschäftsmann gute Erfolge vorzuweisen.|Nomen
業績|業績[ぎょうせき]|Leistung, Ergebnis|あなたの 最大[さいだい]の 業績[ぎょうせき]は 何[なん]だと 思[おも]いますか。|Was sehen Sie als Ihre größte Errungenschaft an?|Nomen
応募|応募[おうぼ]|Bewerbung, Teilnahmeantrag|彼女[かのじょ]は 販売員[はんばいいん]としての 仕事[しごと]に 応募[おうぼ]した。|Sie hat sich auf eine Stelle als Verkäuferin beworben.|Nomen (mit する)
集中|集中[しゅうちゅう]|Konzentration|もう 疲[つか]れて、 集中[しゅうちゅう] 力[りょく]がなくなりました。|Ich bin müde und kann mich nicht mehr konzentrieren.|Nomen (mit する)
おばさん|おばさん|Frau mittleren Alters; Tante|彼[かれ]の 叔母[おば]さんは 若[わか]く 見[み]える。|Seine Tante sieht jung aus.|Nomen
集合|集合[しゅうごう]|Versammeln, Treffen|集合[しゅうごう] 場所[ばしょ]はどこですか？|Wo ist der Treffpunkt?|Nomen (mit する)
集まり|集[あつ]まり|Zusammenkunft; Beteiligung|遠[とお]い 親戚[しんせき]の 集[あつ]まりに 参加[さんか]すると、 居[い] 場所[ばしょ]がないよ。|Wenn ich an einem Treffen entfernter Verwandter teilnehmen, fühle ich mich überhaupt nicht zugehörig.|Nomen
収集|収集[しゅうしゅう]|Sammeln, Sammlung|私[わたし]は 趣味[しゅみ]で 切手[きって]を 収集[しゅうしゅう]しています。|Ich sammle Briefmarken als Hobby.|Nomen (mit する)
採算|採算[さいさん]|Rentabilität|この 企画[きかく]は 採算[さいさん]が 取[と]れないかもしれない。|Dieses Projekt lohnt sich vielleicht nicht.|Nomen
採点|採点[さいてん]|Benotung, Korrektur|私[わたし] 達[たち]の 先生[せんせい]は 試験[しけん]の 採点[さいてん]をしている。|Unser Lehrer benotet gerade die Klassenarbeit.|Nomen (mit する)
供給|供給[きょうきゅう]|Versorgung, Angebot|価格[かかく]は 需要[じゅよう]と 供給[きょうきゅう]によって 決[き]まる。|Preise werden durch Angebot und Nachfrage festgelegt.|Nomen (mit する)
月給|月給[げっきゅう]|Monatsgehalt|日本[にほん]では、 月給[げっきゅう]です。|In Japan wird der Lohn monatlich gezahlt.|Nomen
ジャンプ|ジャンプ|Sprung|トムは 高[たか]くジャンプしてボールを 取[と]った。|Tom ist hoch gesprungen und hat den Ball gefangen.|Nomen (mit する)
時給|時給[じきゅう]|Stundenlohn|給料[きゅうりょう]は 時給[じきゅう] 制[せい]なんだ。|Ich werde nach Stundenlohn bezahlt.|Nomen
需要|需要[じゅよう]|Nachfrage|日本[にほん]では 米[こめ]の 需要[じゅよう]が 大[おお]きい。|In Japan gibt es eine große Nachfrage nach Reis.|Nomen
就任|就任[しゅうにん]|Amtsantritt|彼[かれ]は 大統領[だいとうりょう]に 就任[しゅうにん]した。|Er trat sein Amt als Präsident an.|Nomen (mit する)
職員|職員[しょくいん]|Mitarbeiter(in), Personal|職員[しょくいん]の 選考[せんこう]に 関[かん]する 規則[きそく]を 次[つぎ]のように 定[さだ]める。|Die Regeln in Bezug auf die Auswahl von Mitarbeitern sind wie folgt festgelegt.|Nomen
職場|職場[しょくば]|Arbeitsplatz|ここがトムの 職場[しょくば]なの？|Ist das hier Toms Arbeitsplatz?|Nomen
職業|職業[しょくぎょう]|Beruf|彼[かれ]の 職業[しょくぎょう]は 医者[いしゃ]です。|Er ist Arzt von Beruf.|Nomen
条約|条約[じょうやく]|Vertrag (zwischen Staaten), Abkommen|条約[じょうやく]は 原水爆[げんすいばく]の 使用[しよう]を 禁止[きんし]している。|Das Abkommen verbietet die Anwendung von Atom- und Wasserstoffbomben.|Nomen
あちらこちら|あちらこちら|hier und da, überall|ライターをあちらこちら 探[さが]したが 見[み]つからなかった。|Ich habe mein Feuerzeug überall gesucht, konnte es aber nicht finden.|Nomen
参考|参考[さんこう]|Nachschlagen, Orientierung|とても 参考[さんこう]になります。|Das hilft mir sehr.|Nomen
参議院|参議院[さんぎいん]|Oberhaus (des japanischen Parlaments)|今週[こんしゅう]は 参議[さんぎ] 院[いん] 選挙[せんきょ]が 開[ひら]かれる。|Diese Woche findet die Oberhauswahl statt.|Nomen
お参り|お 参[まい]り|Tempel- oder Schreinbesuch|元旦[がんたん]には 近所[きんじょ]の 神社[じんじゃ]にお 参[まい]りする 人[ひと]が 多[おお]い。|Viele Leute statten dem nächstgelegenen Shintoschrein zu Neujahr einen Besuch ab.|Nomen (mit する)
参考書|参考書[さんこうしょ]|Nachschlagewerk, Lernhilfe|参考[さんこう] 書[しょ]を 見[み]たいのですが。|Ich würde mir gern die Nachschlagewerke ansehen.|Nomen
加わる|加[くわ]わる|hinzukommen, sich anschließen|彼女[かのじょ]は 私[わたし]たちの 会話[かいわ]に 加[くわ]わらなかった。|Sie hat sich nicht an unserer Unterhaltung beteiligt.|Verb
いい加減|いい 加減[かげん]|verantwortungslos, schlampig; angemessen|いい 加減[かげん] 布団[ふとん]から 出[で]なさい。|Jetzt komm endlich aus dem Bett!|な-Adjektiv
追う|追[お]う|verfolgen, nachjagen|彼[かれ]は 警察[けいさつ]に 追[お]われている。|Er wird von der Polizei gesucht.|Verb
追い出す|追[お]い 出[だ]す|hinauswerfen, vertreiben|町[まち]は 征服[せいふく]されて、 彼[かれ]は 追[お]い 出[だ]された。|Die Stadt wurde erobert und er aus ihr vertrieben.|Verb
いつのまにか|いつのまにか|unbemerkt, ehe man sich versieht|いつのまにか 夏[なつ]も 過[す]ぎてしまった。|Unversehens ist auch der Sommer vorbei.|Adverb
感じ|感[かん]じ|Gefühl, Eindruck|いつも 眠[ねむ]い 感[かん]じがします。|Ich fühle mich immerzu schläfrig.|Nomen
感情|感情[かんじょう]|Gefühl, Emotion|誰[だれ]にだって、 感情[かんじょう]ってものがある。|Jeder hat Gefühle.|Nomen
感覚|感覚[かんかく]|Sinn, Empfindung|犬[いぬ]はにおいの 感覚[かんかく]が 鋭[するど]い。|Hunde haben einen scharfen Geruchssinn.|Nomen
感動|感動[かんどう]|Rührung, Ergriffenheit|とても 感動[かんどう]したわ。|Ich war gerührt.|Nomen (mit する)
実感|実感[じっかん]|echtes Empfinden, Bewusstwerden|生[い]きていることを 実感[じっかん]する。|Ich spüre richtig, dass ich lebe.|Nomen (mit する)
感心|感心[かんしん]|Bewunderung|彼[かれ]の 勇気[ゆうき]に 感心[かんしん]せずにはいられなかった。|Sein Mut rang mir Bewunderung ab.|Nomen (mit する)
思想|思想[しそう]|Gedanke, Ideologie, Denken|言葉[ことば]がなければ、 思想[しそう]はないであろう。|Wenn es keine Sprache gäbe, gäbe es keine Gedanken.|Nomen
おごる|おごる|einladen, spendieren|一杯[いっぱい]おごりましょう。|Ich gebe dir ein Getränk aus.|Verb
感想|感想[かんそう]|Eindruck, Gedanken (zu etwas)|『 赤毛[あかげ]のアン』の 本[ほん]を 読[よ]んだ 感想[かんそう]を 聞[き]かせてください。|Erzähl mal von deinen Eindrücken, die du hattest, als du das Buch „Anne auf Green Gables“ gelesen hast.|Nomen
空想|空想[くうそう]|Fantasie, Tagtraum|空想[くうそう]はしばしば 芸術[げいじゅつ]の 母[はは]になる。|Fantasie ist oft die Mutter der Kunst.|Nomen (mit する)
現像|現像[げんぞう]|Entwicklung (eines Films)|このフィルムの 現像[げんぞう]と 焼付[やきつ]けをお 願[ねが]いします。|Bitte entwickeln und drucken Sie diesen Film.|Nomen (mit する)
現象|現象[げんしょう]|Phänomen, Erscheinung|虹[にじ]は 自然[しぜん] 現象[げんしょう]である。|Ein Regenbogen ist ein Naturphänomen.|Nomen
気象|気象[きしょう]|Wetter, Wetterlage|環境汚染[かんきょうおせん]は、 異常[いじょう] 気象[きしょう]を 誘発[ゆうはつ]している。|Umweltverschmutzung führt zu abnormen Wetterlagen.|Nomen
障子|障子[しょうじ]|Papierschiebetür (Shōji)|壁[かべ]に 耳[みみ]あり、 障子[しょうじ]に 目[め]あり。|Die Wände haben Ohren, die Türen haben Augen.|Nomen
修正|修正[しゅうせい]|Korrektur, Änderung|間違[まちが]いを 修正[しゅうせい]しました。|Der Fehler wurde korrigiert.|Nomen (mit する)
おやつ|おやつ|Zwischenmahlzeit, Nachmittagssnack|トムならおやつをもらいに 台所[だいどころ]に 行[い]ったよ。|Tom ist in die Küche gegangen, um sich eine Kleinigkeit für zwischendurch geben zu lassen.|Nomen
傷|傷[きず]|Wunde, Kratzer|腕[うで]の 傷[きず]は 跡[あと]を 残[のこ]した。|Die Wunde am Arm hinterließ eine Narbe.|Nomen
傷める|傷[いた]める|verletzen, beschädigen|彼[かれ]は 氷[こおり]の 上[うえ]で 転[ころ]んで 脚[あし]を 傷[いた]めた。|Er rutschte auf dem Eis aus und verletzte sich das Bein.|Verb
交換|交換[こうかん]|Austausch, Tausch|電話番号[でんわばんごう] 交換[こうかん]しようよ。|Lass uns Telefonnummern tauschen!|Nomen (mit する)
言い換える|言[い]い 換[か]える|anders ausdrücken, umformulieren|言[い]い 換[か]えれば、 彼[かれ]は 私[わたし]たちを 裏切[うらぎ]った。|Anders ausgedrückt: Er hat uns verraten.|Verb
着替え|着替[きが]え|Wechselkleidung, Umziehen|彼女[かのじょ]は 娘[むすめ]の 着替[きが]えを 手伝[てつだ]いました。|Sie half ihrer Tochter beim Umziehen.|Nomen (mit する)
交替|交替[こうたい]|Ablösung, Wechsel|私[わたし] 達[たち]は 交替[こうたい]で 部屋[へや]を 掃除[そうじ]した。|Wir haben abwechselnd das Zimmer sauber gemacht.|Nomen (mit する)
火災|火災[かさい]|Brand, Feuersbrunst|私[わたし]の 家[いえ]には 火災[かさい] 保険[ほけん]がかけてある。|Mein Haus hat eine Feuerversicherung.|Nomen
災難|災難[さいなん]|Unglück, Missgeschick|彼[かれ]はかろうじて 災難[さいなん]を 免[まぬが]れた。|Er entkam nur knapp einem Unglück.|Nomen
ごろごろ|ごろごろ|grollend, rumpelnd; herumliegend|雷[かみなり]が 今[いま]にも 落[お]ちそうな 激[はげ]しい 音[おと]でごろごろと 鳴[な]った。|Der Donner grollte furchtbar, als würde er jeden Augenblick herabfahren.|Adverb
障害|障害[しょうがい]|Hindernis, Störung; Behinderung|彼[かれ]には 精神[せいしん] 障害[しょうがい]が 有[あ]る。|Er ist geistig behindert.|Nomen
災害|災害[さいがい]|Katastrophe, Unglück|地震[じしん]や 洪水[こうずい]は 自然[しぜん] 災害[さいがい]です。|Erdbeben und Hochwasser sind Naturkatastrophen.|Nomen
公害|公害[こうがい]|Umweltverschmutzung|産業化[さんぎょうか]は 往々[おうおう]にして 公害[こうがい]を 伴[ともな]うものだ。|Industrialisierung bringt häufig Umweltverschmutzung mit sich.|Nomen
水害|水害[すいがい]|Hochwasserschaden|トムは 水害[すいがい] 保険[ほけん]に 入[はい]ってないんだよ。|Tom hat keine Versicherung gegen Hochwasserschäden.|Nomen
害|害[がい]|Schaden|コーヒーは 胃[い]に 害[がい]を 与[あた]える。|Kaffee trinken ist nicht gut für den Magen.|Nomen (mit する)
被せる|被[かぶ]せる|bedecken, überziehen|彼[かれ]は 車[くるま]にカバーを 被[かぶ]せた。|Er zog eine Abdeckung über sein Auto.|Verb
救う|救[すく]う|retten, helfen|トムを 救[すく]うにはどうすればいいのですか。|Wie können wir Tom retten?|Verb
シューズ|シューズ|Schuhe, Sportschuhe|私[わたし]はこちらのシューズを 選[えら]びました。|Ich habe mir diese Schuhe ausgesucht.|Nomen
救い|救[すく]い|Rettung, Trost|『トムとメアリー』は 最後[さいご]まで 救[すく]いのない 暗[くら]い 話[はなし]だった。|„Tom und Mary“ war eine düstere Geschichte ohne jede Rettung bis zum Schluss.|Nomen
助手|助手[じょしゅ]|Assistent(in), Helfer(in)|彼[かれ]はよい 助手[じょしゅ]を 必要[ひつよう]としている。|Er benötigt gute Assistenten.|Nomen
救助|救助[きゅうじょ]|Rettung, Bergung|迷子[まいご]の 少年[しょうねん]は 救助[きゅうじょ] 隊[たい]が 来[く]るまで 何[なん]とか 頑張[がんば]りました。|Der verirrte Junge hielt durch, bis die Rettungsmannschaft kam.|Nomen (mit する)
支援|支援[しえん]|Unterstützung, Hilfe|皆[みな]さまのご 支援[しえん]にお 礼[れい]を 申[もう]し 上[あ]げたいと 思[おも]います。|Ich möchte Ihnen allen für Ihre Unterstützung danken!|Nomen (mit する)
援助|援助[えんじょ]|Hilfe, Unterstützung|父[ちち]が 金銭的[きんせんてき] 援助[えんじょ]をしてくれます。|Mein Vater unterstützt mich finanziell.|Nomen (mit する)
応援|応援[おうえん]|Anfeuern, Unterstützung|あなたに 応援[おうえん]をお 願[ねが]いしたくてここに 来[き]ました。|Ich bin gekommen, weil ich Sie um Unterstützung bitten wollte.|Nomen (mit する)
小遣い|小遣[こづか]い|Taschengeld|今月[こんげつ]のお 小遣[こづか]いもう 全部[ぜんぶ] 使[つか]っちゃった。|Ich habe bereits mein ganzes Taschengeld für diesen Monat ausgegeben.|Nomen
キス|キス|Kuss|彼女[かのじょ]は 彼[かれ]にキスを 返[かえ]した。|Sie hat seinen Kuss erwidert.|Nomen (mit する)
警告|警告[けいこく]|Warnung, Verwarnung|彼女[かのじょ]は 私[わたし]の 警告[けいこく]をすべて 無視[むし]した。|Sie hat alle meine Warnungen ignoriert.|Nomen (mit する)
警官|警官[けいかん]|Polizist(in)|彼[かれ]のような 警官[けいかん]は 大嫌[だいきら]いだ。|Ich hasse solche Polizisten wie ihn.|Nomen
管|管[かん]|Rohr, Röhre|管[かん]から 水[みず]が 吹[ふ]き 出[だ]した。|Aus dem Rohr spritzte Wasser heraus.|Nomen
犯す|犯[おか]す|begehen (Verbrechen); vergewaltigen|彼[かれ]は 間違[まちが]いを 犯[おか]すことを 恐[おそ]れている。|Er hat Angst, einen Fehler zu begehen.|Verb
強盗|強盗[ごうとう]|Raub, Räuber|強盗[ごうとう]が 昨夜[ゆうべ] 銀行[ぎんこう]を 襲[おそ]った。|Letzte Nacht hat ein Räuber die Bank überfallen.|Nomen
自殺|自殺[じさつ]|Selbstmord|彼[かれ]は 自殺[じさつ]をした。|Er hat sich selbst umgebracht.|Nomen (mit する)
殺人|殺人[さつじん]|Mord, Tötung|昨年[さくねん]は 殺人[さつじん] 事件[じけん]が 多[おお]かった。|Letztes Jahr gab es viele Morde.|Nomen
くるくる|くるくる|sich drehend, im Kreis herum|彼[かれ]は 言[い]うことがくるくる 変[か]わる。|Er ändert ständig, was er sagt.|Adverb
奪う|奪[うば]う|rauben, entreißen|彼[かれ]は 私[わたし]からお 金[かね]を 奪[うば]った。|Er hat mir Geld gestohlen.|Verb
戦後|戦後[せんご]|Nachkriegszeit|トムは 戦後[せんご] 世代[せだい]の 出[で]です。|Tom gehört der Nachkriegsgeneration an.|Nomen
作戦|作戦[さくせん]|Taktik, Strategie|次[つぎ]の 試合[しあい]の 作戦[さくせん] 会議[かいぎ]をするぞ。|Wir halten eine Strategiebesprechung für das nächste Spiel ab.|Nomen
戦場|戦場[せんじょう]|Schlachtfeld, Front|負傷兵[ふしょうへい] 達[たち]は 戦場[せんじょう]に 取[と]り 残[のこ]された。|Die verletzten Soldaten wurden auf dem Schlachtfeld zurückgelassen.|Nomen
戦前|戦前[せんぜん]|Vorkriegszeit|戦前[せんぜん]、ヨーロッパへ 行[い]きました。|Vor dem Krieg bin ich nach Europa gereist.|Nomen
戦死|戦死[せんし]|Tod im Krieg|トムの 息子[むすこ]は 二人[ふたり]とも 戦死[せんし]した。|Toms Söhne fielen beide im Krieg.|Nomen (mit する)
争い|争[あらそ]い|Streit, Konflikt|ポスト 争[あらそ]いは 厳[きび]しい。|Der Kampf um den Posten ist hart.|Nomen
争う|争[あらそ]う|streiten, wetteifern|私[わたし]は 争[あらそ]うためにここにいるのではありません。|Ich bin nicht zum Kämpfen hier.|Verb
サボる|サボる|schwänzen, blaumachen|学校[がっこう]サボったことある？|Hast du schon mal die Schule geschwänzt?|Verb
競技|競技[きょうぎ]|Wettkampf, Sportart|その 競技[きょうぎ] 場[じょう]にはバスで 行[い]けるよ。|Die Sportanlage ist mit dem Bus erreichbar.|Nomen (mit する)
混雑|混雑[こんざつ]|Gedränge, Überfüllung|食堂[しょくどう]は 混雑[こんざつ]していた。|Die Kantine war brechend voll.|Nomen (mit する)
混乱|混乱[こんらん]|Verwirrung, Chaos|頭[あたま]が 混乱[こんらん]している。|Ich bin verwirrt.|Nomen (mit する)
捜す|捜[さが]す|suchen, fahnden nach|私[わたし]は 自分[じぶん]のカメラを 捜[さが]しています。|Ich suche meine Kamera.|Verb
索引|索引[さくいん]|Register, Index|その 本[ほん]には 索引[さくいん]がついていますか。|Hat das Buch ein Register?|Nomen
落ち着く|落[お]ち 着[つ]く|sich beruhigen, zur Ruhe kommen|まあまあ、 落[お]ち 着[つ]けよ。|Hey, hey, beruhige dich.|Verb
落ち着き|落[お]ち 着[つ]き|Gelassenheit, Ruhe|彼[かれ]がなにを 言[い]おうと 落[お]ち 着[つ]きを 失[うしな]ってはいけない。|Verliere nicht die Fassung, gleich, was er auch sagen möge!|Nomen
ショッピング|ショッピング|Einkaufen, Shopping|私[わたし]は 一人[ひとり]ではショッピングに 行[い]きたくない。|Ich will nicht alleine einkaufen gehen.|Nomen (mit する)
落とし物|落[お]とし 物[もの]|Fundsache, verlorener Gegenstand|一番[いちばん] 近[ちか]い 落[お]とし 物[もの]カウンターはどこですか？|Wo ist das nächste Fundbüro?|Nomen
交流|交流[こうりゅう]|Austausch, Begegnung|トムは 社会的[しゃかいてき] 交流[こうりゅう]が 苦手[にがて]だ。|Gesellschaftlicher Umgang fällt Tom schwer.|Nomen (mit する)
一流|一流[いちりゅう]|erstklassig|トムは 一流[いちりゅう] 大学[だいがく] 出[で]だ。|Tom hat an einer erstklassigen Universität studiert.|Nomen
上流|上流[じょうりゅう]|Oberlauf; Oberschicht|橋[はし]の 上流[じょうりゅう]に 私[わたし]はボートを 見[み]た。|Flussaufwärts von der Brücke sah ich ein Boot.|Nomen
下流|下流[かりゅう]|Unterlauf; Unterschicht|川[かわ]の 下流[かりゅう]には 村[むら]が 広[ひろ]がっていた。|Am Unterlauf des Flusses lag ein Dorf.|Nomen
海流|海流[かいりゅう]|Meeresströmung|海流[かいりゅう]に 変化[へんか]が 起[お]きたのだろうか。|Ob sich die Meeresströmung verändert hat?|Nomen
三流|三流[さんりゅう]|drittklassig|三流[さんりゅう]のクラブで 歌[うた]うとは 彼女[かのじょ]も 成[な]り 下[さ]がったものだ。|Sie ist tief gesunken, wenn sie in einem drittklassigen Club singt.|Nomen
スマート|スマート|elegant, gewandt; schlank|トムとメアリーは、スマートホームに 住[す]んでいます。|Tom und Maria wohnen in einem „schlauen Haus“.|Adjektiv
洪水|洪水[こうずい]|Hochwasser, Überschwemmung|洪水[こうずい]の 後[あと] 町[まち]は 住[す]む 人[ひと]がいなくなった。|Die Stadt war nach dem Hochwasser menschenleer.|Nomen
崩れる|崩[くず]れる|einstürzen, zusammenbrechen|本[ほん]の 山[やま]は 今[いま]にも 崩[くず]れそうに 見[み]える。|Der Bücherberg wirkt, als stünde er kurz vor dem Kollaps.|Verb
崩す|崩[くず]す|zerstören, aus dem Gleichgewicht bringen|彼[かれ]はバランスを 崩[くず]して 倒[たお]れた。|Er verlor das Gleichgewicht und fiel hin.|Verb
水洗|水洗[すいせん]|Wasserspülung|今[いま]はほとんどのトイレが 水洗[すいせん]ですよ。|Heute haben fast alle Toiletten eine Wasserspülung.|Nomen (mit する)
洗い物|洗[あら]い 物[もの]|Abwasch|洗[あら]い 物[もの]お 願[ねが]いしてもいい？|Würdest du abwaschen?|Nomen
石油|石油[せきゆ]|Erdöl|石油[せきゆ]はたいへん 私[わたし]たちの 生活[せいかつ]に 役立[やくだ]つ。|Erdöl ist sehr nützlich für unser Leben.|Nomen
油絵|油絵[あぶらえ]|Ölgemälde, Ölmalerei|彼女[かのじょ]は 油絵[あぶらえ]を 始[はじ]めた。|Sie hat angefangen, Ölgemälde zu malen.|Nomen
浮かぶ|浮[う]かぶ|schwimmen, treiben; auftauchen|白[しろ]い 雲[くも]が 青空[あおぞら]に 浮[う]かんでいる。|Eine weiße Wolke treibt am blauen Himmel.|Verb
ずらり|ずらり|in einer langen Reihe|玄関[げんかん]に 靴[くつ]がずらりと 並[なら]んでいたな。|Im Eingangsbereich waren die Schuhe ordentlich aufgereiht.|Adverb
浮かべる|浮[う]かべる|schwimmen lassen; zeigen (Miene)|彼女[かのじょ]は 目[め]に 涙[なみだ]を 浮[う]かべて 話[はな]した。|Sie erzählte mit tränenfeuchten Augen.|Verb
浮く|浮[う]く|schwimmen, obenauf treiben|木[き]は 浮[う]くが 鉄[てつ]は 沈[しず]む。|Holz schwimmt, aber Eisen sinkt nach unten.|Verb
沈める|沈[しず]める|versenken|彼[かれ]らは 古[ふる]い 船[ふね]を 海[うみ]に 沈[しず]めました。|Sie versenkten das alte Schiff im Meer.|Verb
将来|将来[しょうらい]|Zukunft|私[わたし]は 将来[しょうらい]テレビのアナウンサーになりたい。|Ich möchte in Zukunft ein Nachrichtensprecher im Fernsehen werden.|Nomen
永遠|永遠[えいえん]|Ewigkeit|永遠[えいえん]の 愛[あい]なんてあるわけないじゃん。|Ewige Liebe gibt es nicht.|な-Adjektiv
永久|永久[えいきゅう]|Ewigkeit, Dauer|私[わたし]は 永久[えいきゅう]に 生[い]きたいのです。|Ich will für immer leben.|な-Adjektiv
河口|河口[かこう]|Flussmündung|河口[かこう]の 近[ちか]くに 小[ちい]さな 町[まち]があります。|In der Nähe der Flussmündung liegt eine kleine Stadt.|Nomen
いらっしゃる|いらっしゃる|kommen, gehen, da sein (respektvoll)|先生[せんせい]がいらっしゃったよ。|Unser Lehrer ist gekommen.|Verb
冷ます|冷[さ]ます|abkühlen lassen|ちょっと 冷[さ]まして、 熱[あつ]いうちは 食[た]べないように。|Lass es etwas abkühlen! Iss es nicht, solange es noch heiß ist!|Verb
車庫|車庫[しゃこ]|Garage|私[わたし]は 車庫[しゃこ] 付[つ]きの 家[いえ]を 借[か]りた。|Ich mietete ein Haus mit Garage.|Nomen
金庫|金庫[きんこ]|Tresor, Safe|金庫[きんこ]はどこにありますか？|Wo ist der Tresor?|Nomen
心臓|心臓[しんぞう]|Herz (Organ)|心臓[しんぞう]の 構造[こうぞう]については 中学[ちゅうがく]で 習[なら]う。|Wir lernen den Aufbau des Herzens in der Mittelschule.|な-Adjektiv
軽快|軽快[けいかい]|leichtfüßig, beschwingt|軽快[けいかい]な 音楽[おんがく]が 流[なが]れています。|Es läuft beschwingte Musik.|Adjektiv
快い|快[こころよ]い|angenehm, wohltuend|快[こころよ]い 笑顔[えがお]で 彼女[かのじょ]は 私[わたし]に 挨拶[あいさつ]した。|Sie begrüßte mich mit einem freundlichen Lächeln.|Adjektiv
快晴|快晴[かいせい]|heiteres, wolkenloses Wetter|今日[きょう]は 快晴[かいせい]だ。|Es ist heute schön.|Nomen
ウナギ|ウナギ|Aal|網[あみ]にウナギがかかったよ。|Ich hatte einen Aal im Netz.|Nomen
最適|最適[さいてき]|am besten geeignet, optimal|贈[おく]り 物[もの]としても 最適[さいてき]です。|Es eignet sich auch bestens als Geschenk.|な-Adjektiv
指摘|指摘[してき]|Hinweis, Aufzeigen|先生[せんせい]は、 生徒[せいと]の 間違[まちが]いを 指摘[してき]した。|Der Lehrer wies die Schüler auf ihre Fehler hin.|Nomen (mit する)
湿度|湿度[しつど]|Luftfeuchtigkeit|暖[あたた]かく 湿度[しつど]の 高[たか]い 天候[てんこう]は、 犯罪[はんざい] 数[すう]を 増加[ぞうか]させる。|Feuchtwarmes Wetter erhöht die Zahl der Verbrechen.|Nomen
湿っぽい|湿[しめ]っぽい|feucht, klamm; trübsinnig|シャツまだ 湿[しめ]っぽいよ。|Das Hemd ist noch feucht.|Adjektiv
湿気|湿気[しっけ]|Feuchtigkeit|夏[なつ]はとても 湿気[しっけ]が 多[おお]いんです。|Im Sommer ist die Luftfeuchtigkeit sehr hoch.|Nomen
湿る|湿[しめ]る|feucht werden|洗濯物[せんたくもの]はまだ 湿[しめ]っている。|Die Wäsche ist immer noch feucht.|Verb
汚染|汚染[おせん]|Verschmutzung, Verseuchung|人々[ひとびと]は 水道水[すいどうすい]の 汚染[おせん]に 苦[くる]しんでいる。|Die Menschen leiden unter der Verseuchung des Leitungswassers.|Nomen (mit する)
景気|景気[けいき]|Konjunktur, Wirtschaftslage|景気[けいき]がよくなっている。|Die Wirtschaft verbessert sich.|Nomen
ガード|ガード|Leitplanke, Schutzgeländer|車[くるま]がガードにぶつかりました。|Das Auto ist gegen die Leitplanke geprallt.|Nomen
影|影[かげ]|Schatten, Silhouette|彼女[かのじょ]は 自分[じぶん]の 影[かげ]におびえる。|Sie hat Angst vor ihrem Schatten.|Nomen
境界|境界[きょうかい]|Grenze, Grenzlinie|彼[かれ]らは 境界[きょうかい]を 越[こ]えてスペインに 入[はい]った。|Sie überschritten die Grenze und invadierten Spanien.|Nomen
環境|環境[かんきょう]|Umwelt, Umgebung|子供[こども]には 幸福[こうふく]な 家庭[かてい] 環境[かんきょう]が 必要[ひつよう]だ。|Kinder brauchen eine glückliche Familienumgebung.|Nomen
国境|国境[こっきょう]|Staatsgrenze|スポーツは 国境[こっきょう]を 越[こ]える。|Sport kennt keine Grenzen.|Nomen
境|境[さかい]|Grenze|ドイツはフランスと 境[さかい]を 接[せっ]している。|Deutschland grenzt an Frankreich.|Nomen
観察|観察[かんさつ]|Beobachtung|その 男[おとこ]の 子[こ]は 一日中[いちにちじゅう] 鳥[とり]を 観察[かんさつ]していた。|Der Junge beobachtete die Vögel den ganzen Tag lang.|Nomen (mit する)
外観|外観[がいかん]|äußeres Erscheinungsbild|外観[がいかん]はあてにならない。|Der Schein trügt.|Nomen
かぼちゃ|かぼちゃ|Kürbis|なんて 大[おお]きなかぼちゃなんだ！|Was für ein großer Kürbis!|Nomen
客観的|客観的[きゃっかんてき]|objektiv|客観[きゃっかん] 的[てき]な 歴史[れきし]は 存在[そんざい]するだろうか。|Gibt es objektive Geschichte?|Adjektiv
主観|主観[しゅかん]|Subjektivität, subjektive Sicht|彼[かれ]の 文章[ぶんしょう]はとても 主観[しゅかん] 的[てき]だ。|Seine Texte sind sehr subjektiv.|Nomen
主観的|主観的[しゅかんてき]|subjektiv|それは 主観的[しゅかんてき]な 意見[いけん]です。|Das ist eine subjektive Meinung.|Adjektiv
観客|観客[かんきゃく]|Zuschauer(in), Publikum|野球場[やきゅうじょう]は 興奮[こうふん]した 観客[かんきゃく]でいっぱいだった。|Das Baseballstadion war voll von aufgeregten Zuschauern.|Nomen
観光|観光[かんこう]|Sightseeing, Tourismus|観光[かんこう] 案内所[あんないじょ]はどこですか？|Wo ist die Touristeninformation?|Nomen
観測|観測[かんそく]|Beobachtung, Messung|夜空[よぞら]を 観測[かんそく]するために 望遠鏡[ぼうえんきょう]を 購入[こうにゅう]した。|Ich habe mir ein Teleskop gekauft, um den Nachthimmel zu beobachten.|Nomen (mit する)
推測|推測[すいそく]|Vermutung|いずれにしてもあなたの 推測[すいそく]は 間違[まちが]っている。|Auf jeden Fall ist deine Annahme falsch.|Nomen (mit する)
クイズ|クイズ|Quiz|彼[かれ]にとってそのクイズに 答[こた]えることは 簡単[かんたん]だった。|Es war einfach für ihn, die Quizfrage zu beantworten.|Nomen
宇宙|宇宙[うちゅう]|Weltall, Universum|宇宙[うちゅう]も 地球[ちきゅう]も 永久[えいきゅう]に 存在[そんざい]するとは 限[かぎ]らない。|Das Universum und die Erde werden nicht unbedingt ewig existieren.|Nomen
衛星|衛星[えいせい]|Satellit|彼[かれ]らは 明日[あした]、 人工[じんこう] 衛星[えいせい]を 発射[はっしゃ]するつもりです。|Sie planen, morgen einen Satelliten ins All zu schießen.|Nomen
衛生|衛生[えいせい]|Hygiene|難民[なんみん]キャンプの 衛生[えいせい] 状態[じょうたい]はひどいものだった。|Die hygienischen Verhältnisse im Flüchtlingslager waren schrecklich.|Nomen
衛生的|衛生的[えいせいてき]|hygienisch|このレストランはとても 衛生的[えいせいてき]です。|Dieses Restaurant ist sehr hygienisch.|Adjektiv
球|球[きゅう]|Kugel, Ball|地球[ちきゅう]は 大[おお]きな 球[きゅう]の 形[かたち]をしています。|Die Erde hat die Form einer großen Kugel.|Nomen
震度|震度[しんど]|Erdbebenstärke (japanische Skala)|昨日[きのう]の 地震[じしん]は 震度[しんど] 四[よん]でした。|Das gestrige Erdbeben hatte die Stärke vier.|Nomen
振動|振動[しんどう]|Vibration, Schwingung|このハイテク 枕[まくら]ね、いびきをかくと 振動[しんどう]するのよ。|Dieses Hightech-Kissen vibriert, wenn man schnarcht.|Nomen (mit する)
クリーム|クリーム|Creme; Sahne|コーヒーにクリームはいかがですか。|Nimmst du Sahne in den Kaffee?|Nomen
神経|神経[しんけい]|Nerven; Feingefühl|トムは 神経[しんけい] 科[か] 医[い]です。|Tom ist Nervenarzt.|Nomen
神様|神様[かみさま]|Gott, Gottheit (ehrerbietig)|神[かみ] 様[さま]はどこにでもいるよ。|Gott ist überall.|Nomen
神道|神道[しんとう]|Shintō, Shintoismus|神道[しんとう]は 日本[にほん]の 古[ふる]い 宗教[しゅうきょう]です。|Shintō ist eine alte Religion Japans.|Nomen
精神|精神[せいしん]|Geist, Psyche|トムは 精神[せいしん] 科[か] 医[い]をしている。|Tom ist Psychiater.|Nomen
精算|精算[せいさん]|Abrechnung, Nachzahlung|ご 精算[せいさん] 前[まえ]の 商品[しょうひん]のトイレへのお 持[も]ち 込[こ]みはご 遠慮[えんりょ]ください。|Bitte nehmen Sie keine unbezahlten Waren mit auf die Toiletten!|Nomen (mit する)
厳重|厳重[げんじゅう]|streng, scharf|道路[どうろ] 法規[ほうき]は 厳重[げんじゅう]に 守[まも]らなければならない。|Die Verkehrsregeln müssen streng eingehalten werden.|Adjektiv
貴重|貴重[きちょう]|wertvoll, kostbar|時間[じかん]ほど 貴重[きちょう]な 物[もの]はない。|Nichts ist so wertvoll wie Zeit.|な-Adjektiv
貴重品|貴重品[きちょうひん]|Wertsachen|貴重[きちょう] 品[ひん]は 金庫[きんこ]にしまっておきなさい。|Schließe deine Wertgegenstände im Safe ein.|Nomen
ぐるぐる|ぐるぐる|im Kreis herum, rundherum|犬[いぬ]は 木[き]の 周[まわ]りをぐるぐる 回[まわ]った。|Der Hund rannte um und um den Baum herum.|Adverb
跡|跡[あと]|Spur, Überrest|城[しろ]の 跡[あと]は 今[いま]は 公園[こうえん]になっている。|Die Burgruine ist jetzt ein Park.|Nomen
足跡|足跡[あしあと]|Fußspur|ヒマラヤ 山中[さんちゅう]で 雪男[ゆきおとこ]の 足跡[あしあと]が 発見[はっけん]されたらしい。|Im Himalaya sollen Yetifußspuren entdeckt worden sein.|Nomen
好奇心|好奇心[こうきしん]|Neugier|私[わたし]は 好奇[こうき] 心[しん]からそこへ 行[い]った。|Aus Neugier ging ich dorthin.|Nomen
奇跡|奇跡[きせき]|Wunder|あなたは 奇跡[きせき]を 信[しん]じますか？|Glauben Sie an Wunder?|Nomen
奇数|奇数[きすう]|ungerade Zahl|奇数[きすう]と 偶数[ぐうすう]は 交互[こうご]に 現[あらわ]れる。|Ungerade Zahlen wechseln sich mit geraden ab.|Nomen
経歴|経歴[けいれき]|Werdegang, Lebenslauf|彼女[かのじょ]は 素晴[すば]らしい 経歴[けいれき]を 持[も]っている。|Sie hat einen beachtlichen Lebenslauf.|Nomen
学歴|学歴[がくれき]|Bildungsweg, Schulbildung|給料[きゅうりょう]は、 経験[けいけん]と 学歴[がくれき]に 基[もと]づいて 決[き]まります。|Das Gehalt richtet sich nach Erfahrung und Bildungsweg.|Nomen
さぞ|さぞ|sicherlich, gewiss (vermutend)|もし 彼[かれ]が 死[し]んだらさぞ 悲[かな]しむだろう。|Zweifellos wäre ich traurig, wenn er sterben würde.|Adverb
王|王[おう]|König|彼[かれ]らは 王[おう]が 死[し]んだのを 秘密[ひみつ]にしておいた。|Sie behielten es für sich, dass der König tot war.|Nomen
王様|王様[おうさま]|König (ehrerbietig)|大[おお]きくなったら 王[おう] 様[さま]になりたい。|Wenn ich groß bin, will ich ein König sein.|Nomen
建築|建築[けんちく]|Bau, Architektur|トムには 建築[けんちく] 家[か]の 兄[あに]がいる。|Tom hat einen Bruder, der Architekt ist.|Nomen (mit する)
新築|新築[しんちく]|Neubau|家[いえ]を 新築[しんちく] 中[ちゅう]です。|Wir bauen gerade ein neues Haus.|Nomen (mit する)
構想|構想[こうそう]|Konzept, Entwurf|彼女[かのじょ]が 建設的[けんせつてき]な 構想[こうそう]を 持[も]つ。|Sie hat konstruktive Vorstellungen.|Nomen (mit する)
構える|構[かま]える|einrichten, eröffnen; eine Haltung einnehmen|彼[かれ]は 大通[おおどお]りに 店[みせ]を 構[かま]えている。|Er betreibt einen Laden an der Hauptstraße.|Verb
結構|結構[けっこう]|nein danke; in Ordnung|私[わたし]は 結構[けっこう]お 酒[さけ]に 強[つよ]いんです。|Ich kann einiges an Alkohol vertragen.|Adjektiv
サングラス|サングラス|Sonnenbrille|彼[かれ]はいつもサングラスをしています。|Er trägt immer eine Sonnenbrille.|Nomen
結構|結構[けっこう]|ziemlich, recht|それは、 結構[けっこう]すごいことだよね。|Das ist schon ein Hammer, was?|Adverb
構う|構[かま]う|sich kümmern um, etwas ausmachen|君[きみ]が 構[かま]わないなら、もうしばらく 居[い]るよ。|Wenn es dir nichts ausmacht, dann bleibe ich noch ein wenig.|Verb
位|位[くらい]|Rang, Stellung|どれ 位[くらい]かかりますか。|Wie lange wird es dauern?|Nomen
設置|設置[せっち]|Aufstellung, Einrichtung|モーションセンサーを 設置[せっち]しました。|Ich habe Bewegungsmelder angebracht.|Nomen (mit する)
距離|距離[きょり]|Entfernung, Abstand|空港[くうこう]までどれくらい 距離[きょり]がありますか。|Wie weit ist der Flughafen entfernt?|Nomen
一周|一周[いっしゅう]|eine Runde, Umrundung|世界[せかい]を 一周[いっしゅう]したいんだ。|Ich möchte um die Welt reisen.|Nomen (mit する)
辺り|辺[あた]り|Umgebung, Gegend|ポストを 探[さが]して 辺[あた]りを 見回[みまわ]した。|Ich sah mich in der Umgebung um, um einen Briefkasten zu finden.|Nomen
周囲|周囲[しゅうい]|Umgebung; Umfang|あいにく 周囲[しゅうい]に 誰[だれ]もいなかった。|Leider befand sich niemand in der Umgebung.|Nomen
きっちり|きっちり|genau, exakt|彼女[かのじょ]は 入[はい]ってからきっちりドアを 閉[し]めた。|Sie schloss die Tür fest hinter sich, nachdem sie hereingekommen war.|Adverb
囲む|囲[かこ]む|umgeben, einkreisen|日本[にほん]は 海[うみ]に 囲[かこ]まれている。|Japan ist von Meer umgeben.|Verb
横断|横断[おうだん]|Überquerung|彼[かれ]は 道路[どうろ]を 横断[おうだん]した。|Er überquerte die Straße.|Nomen (mit する)
継続|継続[けいぞく]|Fortsetzung, Fortdauer|それを 継続[けいぞく]することにしたんだ。|Ich habe beschlossen, damit weiterzumachen.|Nomen (mit する)
欧米|欧米[おうべい]|Europa und Amerika, der Westen|医学[いがく]では 日本[にほん]は 欧米[おうべい]に 追[お]いつきました。|In der Medizin hat Japan zu Europa und Amerika aufgeschlossen.|Nomen
州|州[しゅう]|Bundesstaat, Provinz|アメリカでは 州[しゅう]によって 法律[ほうりつ]が 違[ちが]う。|In Amerika sind die Gesetze je nach Bundesstaat verschieden.|Nomen
陸|陸[おか]|Land, Festland|船[ふね]から 陸[おか]が 見[み]えました。|Vom Schiff aus war Land zu sehen.|Nomen
極めて|極[きわ]めて|äußerst, überaus|毎日[まいにち] 練習[れんしゅう]することが 極[きわ]めて 重要[じゅうよう]です。|Es ist äußerst wichtig, jeden Tag zu üben.|Adverb
きゅうり|きゅうり|Gurke|きゅうりのサラダが 大好[だいす]きなんだ。|Ich liebe Gurkensalat.|Nomen
消極的|消極的[しょうきょくてき]|passiv, zurückhaltend|彼[かれ]の 消極[しょうきょく] 的[てき]な 態度[たいど]が 私[わたし]の 努力[どりょく]を 全部[ぜんぶ] 無駄[むだ]にした。|Seine passive Einstellung machte all meine Bemühungen zunichte.|Adjektiv
極端|極端[きょくたん]|extrem|それはちょっと 極端[きょくたん]じゃないですか。|Ist das nicht ein bisschen extrem?|な-Adjektiv
最先端|最先端[さいせんたん]|modernster Stand, Spitze|振[ふ]り 返[かえ]ってみれば 時代[じだい]の 最[さい] 先端[せんたん]を 行[おこな]ってたんだな。|Im Rückblick waren wir der Zeit weit voraus.|Nomen
一緒|一緒[いっしょ]|zusammen, gemeinsam|今日[きょう]は 一緒[いっしょ]に 何[なに]をしよう？|Was wollen wir heute zusammen machen?|Nomen (mit する)
外貨|外貨[がいか]|Fremdwährung, Devisen|どこで 外貨[がいか]の 交換[こうかん]をすることができますか。|Wo kann ich Devisen umtauschen?|Nomen
貨物|貨物[かもつ]|Fracht|その 航空会社[こうくうがいしゃ]は 貨物[かもつ]のみを 扱[あつか]っている。|Diese Fluggesellschaft wickelt nur Fracht ab.|Nomen
車輪|車輪[しゃりん]|Rad (eines Fahrzeugs)|一輪車[いちりんしゃ]は 車輪[しゃりん]がひとつしかありません。|Ein Einrad hat nur ein Rad.|Nomen
すっと|すっと|erleichtert; glatt, gerade|カタツムリがすっと 角[つの]を 出[だ]した。|Die Schnecke streckte schnell ihre Fühler aus.|Adverb
回復|回復[かいふく]|Erholung, Wiederherstellung|彼[かれ]は 健康[けんこう]が 回復[かいふく]した。|Er kam wieder auf die Beine.|Nomen (mit する)
渋い|渋[しぶ]い|herb, zusammenziehend; dezent|彼[かれ]は 妻[つま]の 無駄遣[むだづか]いに 渋[しぶ]い 顔[かお]をする。|Er macht wegen der Verschwendungssucht seiner Frau ein mürrisches Gesicht.|Adjektiv
渋滞|渋滞[じゅうたい]|Stau, Verzögerung|彼女[かのじょ]は 交通[こうつう] 渋滞[じゅうたい]のために 遅[おく]れた。|Sie kam wegen eines Verkehrsstaus zu spät.|Nomen (mit する)
一帯|一帯[いったい]|ganze Gegend, Umkreis|雨[あめ]があたり 一帯[いったい]に 降[ふ]っている。|In der ganzen Gegend regnet es.|Nomen
帯|帯[おび]|Gürtel (für Kimono), Obi|彼女[かのじょ]の 着物[きもの]と 帯[おび]の 取[と]り 合[あ]わせはおつだね。|Die Kombination ihres Kimonos und Obi-Gürtels ist doch elegant, oder?|Nomen
温帯|温帯[おんたい]|gemäßigte Zone|我々[われわれ]のところの 気候[きこう]は 温帯[おんたい] 性[せい]です。|Das Klima bei uns ist gemäßigt.|Nomen
守備|守備[しゅび]|Verteidigung, Abwehr|守備[しゅび] 隊[たい]は 降伏[こうふく]を 強[し]いられた。|Die Garnison wurde zum Aufgeben gezwungen.|Nomen (mit する)
帰宅|帰宅[きたく]|Heimkehr, Nachhausekommen|父[ちち]が 帰宅[きたく]する 前[まえ]に 眠[ねむ]ってしまった。|Ich schlief ein, bevor mein Vater heimkam.|Nomen (mit する)
すらすら|すらすら|fließend, mühelos|彼[かれ]は 英語[えいご]をすらすら 話[はな]す。|Er spricht fließend Englisch.|Adverb
住宅地|住宅地[じゅうたくち]|Wohngebiet|工場[こうじょう]は 住宅[じゅうたく] 地域[ちいき]にはふさわしくない。|Eine Fabrik passt nicht in ein Wohngebiet.|Nomen
宛先|宛先[あてさき]|Empfängeradresse|封筒[ふうとう]の 宛先[あてさき]、 書[か]き 間違[まちが]えちゃった。|Ich habe die Adresse auf dem Briefumschlag falsch geschrieben.|Nomen
宛名|宛名[あてな]|Name des Empfängers, Anschrift|郵便[ゆうびん]の 宛名[あてな]ははっきり 正確[せいかく]に。|Bitte schreiben Sie die Postanschrift deutlich und korrekt auf.|Nomen
後戻り|後戻[あともど]り|Umkehren, Rückschritt|もう 後戻[あともど]りはできないよ。|Jetzt gibt es kein Zurück mehr.|Nomen (mit する)
起こす|起[お]こす|verursachen, auslösen|事故[じこ]を 起[お]こしたのはトムなんだ。|Tom hat den Unfall verursacht.|Verb
起源|起源[きげん]|Ursprung|宇宙[うちゅう]の 起源[きげん]はおそらく 永遠[えいえん]に 説明[せつめい]されないだろう。|Der Ursprung des Universums wird wahrscheinlich bis in alle Ewigkeit nicht erklärt werden.|Nomen
起き上がる|起[お]き 上[あ]がる|sich aufrichten, aufstehen|ベッドから 急[きゅう]に 起[お]き 上[あ]がると、よくめまいがしますか？|Wird Ihnen oft schwindlig, wenn Sie schnell vom Bett aufstehen?|Verb
うろうろ|うろうろ|umherirrend, herumlungernd|今日[きょう] 一日[いちにち] 当[あ]ても 無[な]くうろうろした。|Ich bin den ganzen Tag ziellos herumgewandert.|Adverb
寝室|寝室[しんしつ]|Schlafzimmer|寝室[しんしつ]で 物音[ものおと]が 聞[き]こえた。|Im Schlafzimmer war ein Geräusch zu hören.|Nomen
静まる|静[しず]まる|still werden, sich legen|風[かぜ]が 静[しず]まった。|Der Wind hat sich beruhigt.|Verb
休暇|休暇[きゅうか]|Urlaub|休暇[きゅうか]はどうでしたか。|Wie war dein Urlaub?|Nomen
片手|片手[かたて]|eine Hand|卵[たまご]を 片手[かたて]で 割[わ]れる？|Kannst du mit einer Hand ein Ei aufschlagen?|Nomen
片方|片方[かたほう]|eine Seite, eines (von zweien)|もう 片方[かたほう]の 靴[くつ]はどこにあるの？|Wo ist dein anderer Schuh?|Nomen
片側|片側[かたがわ]|eine Seite|その 人[ひと]は 部屋[へや]の 片側[かたがわ]から 違[ちが]う 側[がわ]に 歩[ある]いた。|Sie ging von der einen Seite des Zimmers auf die andere.|Nomen
裏切る|裏切[うらぎ]る|verraten|彼[かれ]は 裏切[うらぎ]った。|Er übte Verrat.|Verb
おまけ|おまけ|Zugabe, Gratisbeigabe; Rabatt|おまけに 雨[あめ]まで 降[ふ]っていた。|Obendrein regnete es auch noch.|Nomen (mit する)
裏口|裏口[うらぐち]|Hintertür, Hintereingang|彼[かれ]は 裏口[うらぐち] 入学[にゅうがく]した。|Er hat sich durch ein Hintertürchen die Aufnahme in die Universität verschafft.|Nomen
裏返し|裏返[うらがえ]し|auf links gedreht, verkehrt herum|右[みぎ]の 靴下[くつした]が 裏返[うらがえ]しだよ。|Deine rechte Socke ist auf links.|Nomen (mit する)
裏門|裏門[うらもん]|Hintertor|学校[がっこう]の 裏門[うらもん]から 入[はい]りました。|Ich bin durch das Hintertor der Schule hineingegangen.|Nomen
裏表|裏表[うらおもて]|Vorder- und Rückseite; verkehrt herum|トムは 裏表[うらおもて]があるから 気[き]をつけた 方[ほう]がいいよ。|Tom hat zwei Gesichter. Pass also besser auf!|Nomen
項目|項目[こうもく]|Punkt, Posten, Rubrik|これは 何[なん]の 項目[こうもく]に 入[はい]るか。|Unter welche Rubrik fällt das?|Nomen
印象|印象[いんしょう]|Eindruck|第一[だいいち] 印象[いんしょう]が 大事[だいじ]である。|Der erste Eindruck ist wichtig.|Nomen
印|印[しるし]|Zeichen, Markierung|これはほんの 些細[ささい]な 感謝[かんしゃ]の 印[しるし]です。|Das hier ist nur ein kleines Zeichen meiner Dankbarkeit.|Nomen
クッキー|クッキー|Keks|クッキーを 全部[ぜんぶ] 食[た]べてしまったのはだぁれ？|Wer hat die ganzen Kekse gegessen?|Nomen
印刷|印刷[いんさつ]|Druck, Drucken|モノクロ 印刷[いんさつ]よりカラー 印刷[いんさつ]の 方[ほう]が 高[たか]い。|Farbdrucke sind teurer als Schwarzweißdrucke.|Nomen (mit する)
週刊|週刊[しゅうかん]|wöchentlich erscheinend|トムは 駅[えき]で 週刊[しゅうかん] 誌[し]を 買[か]った。|Tom kaufte am Bahnhof eine Wochenzeitschrift.|Nomen
月刊|月刊[げっかん]|monatlich erscheinend|あなたは 月刊[げっかん] 雑誌[ざっし]を 何[なに]か 取[と]っていますか。|Haben Sie irgendeine Monatszeitschrift abonniert?|Nomen
出版|出版[しゅっぱん]|Veröffentlichung, Herausgabe|あなたの 新[あたら]しい 小説[しょうせつ]はいつ 出版[しゅっぱん]されますか？|Wann wird Ihr neuer Roman veröffentlicht?|Nomen (mit する)
出版社|出版社[しゅっぱんしゃ]|Verlag|その 出版[しゅっぱん] 社[しゃ]が 僕[ぼく]の 企画[きかく]にチャンスをくれた。|Der Verlag gab meinem Plan eine Chance.|Nomen
詳細|詳細[しょうさい]|Einzelheiten, Details|トムは 問題[もんだい]を 詳細[しょうさい]に 説明[せつめい]した。|Tom erläuterte das Problem detailliert.|な-Adjektiv
心細い|心細[こころぼそ]い|verzagt, einsam und unsicher|君[きみ]がいないと 心細[こころぼそ]い。|Ohne dich fühle ich mich hilflos.|Adjektiv
掲示|掲示[けいじ]|Aushang, Bekanntmachung|掲示[けいじ]の 前[まえ]に 何人[なんにん]かの 人[ひと]が 立[た]っていました。|Mehrere Leute standen vor dem Aushang.|Nomen (mit する)
コンセント|コンセント|Steckdose|テレビのコンセントを 挿[さ]して。|Steck den Fernseher in die Steckdose.|Nomen
積極的|積極的[せっきょくてき]|aktiv, engagiert|彼女[かのじょ]は 婦人[ふじん] 解放運動[かいほううんどう]で 積極[せっきょく] 的[てき]な 役割[やくわり]をした。|Sie spielte eine aktive Rolle in der Frauenemanzipation.|Adjektiv
言い訳|言[い]い 訳[わけ]|Ausrede, Rechtfertigung|彼[かれ]は 言[い]い 訳[わけ]を 始[はじ]めた。|Er fing an, sich zu rechtfertigen.|Nomen (mit する)
誤り|誤[あやま]り|Fehler, Irrtum|誤[あやま]りを 直[なお]せ。|Korrigier die Fehler.|Nomen
誤る|誤[あやま]る|einen Fehler machen, sich irren|彼[かれ]らは 誤[あやま]ったに 違[ちが]いない。|Sie haben zweifellos einen Fehler gemacht.|Verb
誤解|誤解[ごかい]|Missverständnis|あなたは 私[わたし]を 誤解[ごかい]しているようです。|Es scheint, dass du mich missverstanden hast.|Nomen (mit する)
気付く|気付[きづ]く|bemerken, merken|もっと 早[はや]く 気付[きづ]けばよかったなあ。|Wenn ich das doch nur eher bemerkt hätte!|Verb
くっ付く|くっ 付[つ]く|kleben, haften|ガムが 靴[くつ]にくっ 付[つ]きました。|Ein Kaugummi ist an meinem Schuh kleben geblieben.|Verb
ずるい|ずるい|hinterlistig, unfair|それはずるい！あなた、 鏡[かがみ]で 私[わたし]のカードを 見[み]たでしょ！|Das ist gemein! Du hast meine Karten doch im Spiegel gesehen!|Adjektiv
追い付く|追[お]い 付[つ]く|einholen|すぐに 追[お]い 付[つ]くから 先[さき]に 行[い]ってて。|Geh schon mal vor! Ich komm’ gleich nach.|Verb
顔付き|顔付[かおつ]き|Gesichtsausdruck, Miene|彼[かれ]は 優[やさ]しい 顔付[かおつ]きをしている。|Er hat einen freundlichen Gesichtsausdruck.|Nomen
思い付く|思[おも]い 付[つ]く|auf eine Idee kommen, einfallen|いい 考[かんが]えを 思[おも]い 付[つ]いたんだよ。|Mir ist eine gute Idee eingefallen.|Verb
後片付け|後片付[あとかたづ]け|Aufräumen (danach)|料理[りょうり]は 好[す]きなんだけど 後[あと] 片付[かたづ]けが 嫌[いや]なんだよね。|Ich koche zwar gern, doch das anschließende Aufräumen hasse ich.|Nomen (mit する)
傷付く|傷付[きずつ]く|verletzt werden, gekränkt sein|トムが 言[い]ったことに 私[わたし]は 本当[ほんとう]に 傷付[きずつ]いた。|Was Tom gesagt hat, hat mich wirklich verletzt.|Verb
傷付ける|傷付[きずつ]ける|verletzen, kränken|彼[かれ]の 感情[かんじょう]を 傷付[きずつ]けたくはない。|Ich möchte nicht seine Gefühle verletzen.|Verb
くっ付ける|くっ 付[つ]ける|ankleben, aneinanderdrücken|机[つくえ]を 二[ふた]つくっ 付[つ]けて 使[つか]いましょう。|Schieben wir zwei Tische zusammen und benutzen sie so.|Verb
せっかち|せっかち|ungeduldig, hastig|妹[いもうと]はせっかちだからよく 忘[わす]れ 物[もの]をする。|Meine jüngere Schwester ist voreilig und lässt oft Dinge liegen.|な-Adjektiv
言付ける|言付[ことづ]ける|ausrichten lassen|友達[ともだち]に 母[はは]へのお 礼[れい]を 言付[ことづ]けました。|Ich habe meiner Mutter über einen Freund meinen Dank ausrichten lassen.|Verb
金属|金属[きんぞく]|Metall|金[きん]は 貴[き] 金属[きんぞく]だ。|Gold ist ein Edelmetall.|Nomen
所属|所属[しょぞく]|Zugehörigkeit|君[きみ]はどのクラブに 所属[しょぞく]していますか。|Zu welchem Club gehörst du?|Nomen (mit する)
大蔵省|大蔵省[おおくらしょう]|Finanzministerium (alte Bezeichnung)|大蔵[おおくら] 省[しょう]の 役人[やくにん]は 景気回復[けいきかいふく]への 信頼[しんらい]をより 高[たか]めようとしました。|Beamte des Finanzministeriums versuchten, das Vertrauen in den Aufschwung zu stärken.|Nomen
外務省|外務省[がいむしょう]|Außenministerium|私[わたし]の 父[ちち]は 外務[がいむ] 省[しょう]に 勤[つと]めている。|Mein Vater arbeitet im Außenministerium.|Nomen
帰省|帰省[きせい]|Heimfahrt (in den Heimatort)|彼女[かのじょ]は 今月[こんげつ]の 終[お]わりに 帰省[きせい]します。|Sie kehrt Ende des Monats heim.|Nomen (mit する)
省略|省略[しょうりゃく]|Auslassung, Abkürzung|レポートのこの 部分[ぶぶん]は 省略[しょうりゃく]できますよ。|Diesen Teil des Berichts kann man weglassen.|Nomen (mit する)
概念|概念[がいねん]|Begriff, Konzept|数学[すうがく] 教師[きょうし]が 偏微分[へんびぶん]の 概念[がいねん]について 説明[せつめい]した。|Der Mathematiklehrer erläuterte den Begriff der partiellen Ableitung.|Nomen
うちわ|うちわ|runder Fächer|暑[あつ]いのでうちわで 顔[かお]をあおぎました。|Weil es heiß war, habe ich mir mit dem Fächer Luft zugefächelt.|Nomen
記念|記念[きねん]|Andenken, Gedenken|アメリカ 旅行[りょこう]のよい 記念[きねん]になりました。|Das wird eine gute Erinnerung an meine Reise durch die Vereinigten Staaten sein.|Nomen (mit する)
信念|信念[しんねん]|Überzeugung, Glaube|私[わたし]は 勤勉[きんべん]の 重要[じゅうよう] 性[せい]に 対[たい]する 信念[しんねん]を 持[も]っている。|Ich bin von der Wichtigkeit des Fleißes überzeugt.|Nomen
順調|順調[じゅんちょう]|reibungslos, gut laufend|今[いま]のところ 順調[じゅんちょう]だ。|So weit, so gut.|な-Adjektiv
順|順[じゅん]|Reihenfolge|生徒[せいと]たちは 順[じゅん]に 答[こた]えていった。|Die Schüler gaben der Reihe nach Antwort.|Nomen
順番|順番[じゅんばん]|Reihenfolge, an der Reihe|順番[じゅんばん]をお 待[ま]ち 下[くだ]さい。|Bitte warten Sie, bis Sie an der Reihe sind.|Nomen
順位|順位[じゅんい]|Rangfolge, Platzierung|おまえってほんとに 正[ただ]しい 優先[ゆうせん] 順位[じゅんい]がわかってないな。|Du hast wirklich nicht die richtigen Prioritäten!|Nomen
順々に|順々[じゅんじゅん]に|der Reihe nach|少年[しょうねん]たちは 皆[みな] 順々[じゅんじゅん]に 話[はな]した。|Die Jungen sprachen alle der Reihe nach.|Adverb
うっかり|うっかり|versehentlich, aus Unachtsamkeit|電車[でんしゃ]に 傘[かさ]を 忘[わす]れていくとは、うっかりだったね。|Das war doch aus Versehen, dass du deinen Schirm im Zug vergessen hast.|Adverb
順序|順序[じゅんじょ]|Reihenfolge, Ablauf|誰[だれ]も 事件[じけん]の 順序[じゅんじょ]を 思[おも]い 出[だ]すことができなかった。|Niemand konnte sich an die Reihenfolge der Ereignisse erinnern.|Nomen
逆|逆[ぎゃく]|umgekehrt, entgegengesetzt|彼[かれ]は 私[わたし]が 頼[たの]んだことの 逆[ぎゃく]をやった。|Er hat das Gegenteil von dem getan, worum ich ihn gebeten hatte.|な-Adjektiv
逆らう|逆[さか]らう|sich widersetzen, zuwiderhandeln|彼[かれ]の 意向[いこう]に 逆[さか]らうな。|Widersetze dich nicht seinem Vorhaben.|Verb
逆さ|逆[さか]さ|verkehrt herum, auf dem Kopf|誰[だれ]もその 絵[え]が 逆[さか]さにかかっていることに 気[き]がつかなかった。|Niemand hat bemerkt, dass das Bild verkehrt herum hing.|な-Adjektiv
逆さま|逆[さか]さま|verkehrt herum, umgekehrt|何[なに]もかも 逆[さか]さまだ。|Alles steht auf dem Kopf.|な-Adjektiv
行列|行列[ぎょうれつ]|Schlange, Reihe (von Menschen)|激安[げきやす]の 玉子[たまご]を 買[か]うために 行列[ぎょうれつ]に 並[なら]ぶことにした。|Ich beschloß, mich anzustellen, um superbillige Eier zu kaufen.|Nomen (mit する)
整列|整列[せいれつ]|Aufstellung in Reih und Glied|軍隊[ぐんたい]は 戦闘[せんとう]の 配置[はいち]で 整列[せいれつ]していた。|Die Truppen standen in Schlachtordnung aufgereiht.|Nomen (mit する)
くだらない|くだらない|belanglos, albern|くだらない 話[はなし]はもうたくさんだ。|Ich habe genug von deinem dummen Geschwätz.|Adjektiv
実例|実例[じつれい]|konkretes Beispiel|彼[かれ]は 私[わたし]に 実例[じつれい]をあたえてくれた。|Er hat mir ein Beispiel gegeben.|Nomen
余り|余[あま]り|Rest, Überbleibsel|余[あま]り 心配[しんぱい]しなくていいよ。|Du brauchst dir keine allzu großen Sorgen zu machen.|Adverb
削減|削減[さくげん]|Kürzung, Abbau|経費[けいひ]を 削減[さくげん]する 必要[ひつよう]があります。|Wir müssen die Kosten senken.|Nomen (mit する)
削除|削除[さくじょ]|Löschung, Streichung|それを 削除[さくじょ]できると 思[おも]います。|Ich denke, das kann gelöscht werden.|Nomen (mit する)
既に|既[すで]に|schon, bereits|既[すで]に 会[あ]ったことがあるような 気[き]がします。|Es kommt mir so vor, als wären wir uns schon einmal begegnet.|Adverb
既製|既製[きせい]|fertig, von der Stange|このスーツは 既製[きせい]のものです。|Dieser Anzug ist von der Stange.|Nomen
深刻|深刻[しんこく]|ernst, schwerwiegend|かなり 深刻[しんこく]なようだ。|Es scheint ernst zu sein.|Adjektiv
刻む|刻[きざ]む|fein schneiden, hacken; einprägen|少年[しょうねん]は 木[き]に 自分[じぶん]の 名前[なまえ]を 刻[きざ]んだ。|Der Junge schnitzte seinen Namen in den Baum.|Verb
ずうずうしい|ずうずうしい|unverschämt, dreist|ずうずうしいことを 言[い]うな。|Sag nicht so unverschämte Sachen.|Adjektiv
時刻|時刻[じこく]|Uhrzeit|ご 出発[しゅっぱつ]の 時刻[じこく]をお 知[し]らせ 下[くだ]さい。|Bitte teilen Sie mir Ihre Abfahrtszeit mit.|Nomen
締め切り|締[し]め 切[き]り|Abgabetermin, Anmeldeschluss|締[し]め 切[き]り 期限[きげん]を 過[す]ぎてから 彼女[かのじょ]はレポートを 提出[ていしゅつ]した。|Sie gab ihr Referat ab, nachdem der Abgabetermin abgelaufen war.|Nomen
締め切る|締[し]め 切[き]る|schließen, die Frist beenden|ラスト・オーダーは 締[し]め 切[き]らせていただきました。|Die letzte Bestellrunde ist bereits geschlossen.|Verb
締まる|締[し]まる|sich festziehen, straff werden|我々[われわれ]は 玄関[げんかん]が 締[し]まっているのが 分[わ]かった。|Wir stellten fest, dass die Haustür verschlossen war.|Verb
栄える|栄[さか]える|blühen, gedeihen|その 町[まち]は 栄[さか]えているようだった。|Die Stadt schien zu blühen.|Verb
栄養|栄養[えいよう]|Nährstoffe, Ernährung|もうちょっと 栄養[えいよう]バランス 気[き]にした 方[ほう]がいいんじゃない？|Meinst du nicht, dass es besser wäre, etwas mehr auf eine ausgewogene Ernährung zu achten?|Nomen
教養|教養[きょうよう]|Bildung, Kultiviertheit|トムは 教養[きょうよう]がある。|Tom ist wohlerzogen.|Nomen
すやすや|すやすや|friedlich (schlafend)|赤[あか]ちゃんは 母親[ははおや]の 腕[うで]の 中[なか]ですやすやと 眠[ねむ]っていた。|Das Baby schlief friedlich in den Armen seiner Mutter.|Adverb
休養|休養[きゅうよう]|Erholung, Ruhe|医者[いしゃ]は 彼[かれ]に 休養[きゅうよう]するように 命令[めいれい]した。|Der Arzt gab ihm Anweisung, sich zu erholen.|Nomen (mit する)
苦しむ|苦[くる]しむ|leiden|誰[だれ]かが 苦[くる]しんでいると 嬉[うれ]しくなるのはなぜ？|Warum freust du dich, wenn ein anderer leidet?|Verb
苦情|苦情[くじょう]|Beschwerde, Reklamation|彼女[かのじょ]は 支配人[しはいにん]にサービスが 悪[わる]いと 苦情[くじょう]を 言[い]った。|Sie beschwerte sich beim Manager, dass der Service schlecht sei.|Nomen
苦心|苦心[くしん]|Mühe, große Anstrengung|苦心[くしん]の 甲斐[かい]があった。|Die Mühe hat sich gelohnt.|Nomen (mit する)
苦しみ|苦[くる]しみ|Leid, Qual|彼女[かのじょ]は 自分[じぶん]の 苦[くる]しみを 誇張[こちょう]して 話[はな]した。|Sie übertrieb ihre Leiden.|Nomen
苦痛|苦痛[くつう]|Schmerz, Qual|彼[かれ]は 苦痛[くつう]のあまり 声[こえ]を 上[あ]げた。|Er schrie vor Schmerzen.|Nomen
苦しめる|苦[くる]しめる|quälen, zu schaffen machen|良心[りょうしん]が 彼[かれ]を 苦[くる]しめた。|Er hatte Gewissensbisse.|Verb
セルフサービス|セルフサービス|Selbstbedienung|食堂[しょくどう]はセルフサービスでした。|In der Kantine war Selbstbedienung.|Nomen
苦労|苦労[くろう]|Mühsal, Sorgen|苦労[くろう]や 心配[しんぱい]が 彼女[かのじょ]の 心[こころ]を 一杯[いっぱい]にしていた。|Ihr Herz war voller Mühsal und Kummer.|Nomen (mit する)
勤労|勤労[きんろう]|Arbeit, Erwerbstätigkeit|勤労[きんろう]によって 日本[にほん]は 今日[こんにち]の 日本[にほん]になった。|Durch harte Arbeit ist Japan zu dem geworden, was es heute ist.|Nomen (mit する)
過労|過労[かろう]|Überarbeitung|彼[かれ]は 過労[かろう]のせいで 死[し]んだ。|Er starb an Überanstrengung.|Nomen
困難|困難[こんなん]|Schwierigkeit|トムは 経済的[けいざいてき]に 困難[こんなん]な 状況[じょうきょう]だった。|Tom war in finanziellen Schwierigkeiten.|Nomen (mit する)
甘える|甘[あま]える|sich verwöhnen lassen, sich anlehnen an|人[ひと]の 好意[こうい]に 甘[あま]えてはいけない。|Nutze die Freundlichkeit anderer Menschen nicht aus.|Verb
甘やかす|甘[あま]やかす|verwöhnen, verhätscheln|子供[こども]を 甘[あま]やかすな。|Verhätschel dein Kind nicht.|Verb
辛い|辛[から]い|hart, streng (Bewertung)|あの 先生[せんせい]は 点[てん]が 辛[から]いです。|Dieser Lehrer benotet streng.|Adjektiv
アルファベット|アルファベット|Alphabet|名前[なまえ]はすべてアルファベット 順[じゅん]で 載[の]っています。|Alle Namen sind in alphabetischer Reihenfolge aufgelistet.|Nomen
幸い|幸[さいわ]い|Glück; zum Glück|幸[さいわ]い 誰[だれ]もけがをしなかった。|Zum Glück wurde niemand verletzt.|な-Adjektiv
幸運|幸運[こううん]|Glück, glücklicher Zufall|彼[かれ]が 成功[せいこう]したのは 幸運[こううん]のおかげである。|Seinen Erfolg hat er Glück zu verdanken.|な-Adjektiv
幸福|幸福[こうふく]|Glück, Glückseligkeit|私[わたし]たちは 幸福[こうふく]です。|Wir sind glücklich.|な-Adjektiv
砂|砂[すな]|Sand|目[め]に 砂[すな]が 入[はい]りました。|Ich habe Sand ins Auge bekommen.|Nomen
砂漠|砂漠[さばく]|Wüste|砂漠[さばく]でひとりで 暮[く]らすとは 彼女[かのじょ]も 勇気[ゆうき]があるね。|Sie hat Mut, daß sie allein in der Wüste lebt.|Nomen
漁業|漁業[ぎょぎょう]|Fischerei|その 島[しま]には 漁業[ぎょぎょう]を 営[いとな]む 人[ひと]たちが 住[す]んでいた。|Auf der Insel lebten Menschen, die Fischerei betrieben.|Nomen
薄暗い|薄暗[うすぐら]い|dämmrig, halbdunkel|薄暗[うすぐら]い 照明[しょうめい]の 中[なか]で、 彼女[かのじょ]の 顔[かお]がはっきり 見[み]えなかった。|Im dämmrigen Licht war ihr Gesicht nicht deutlich zu sehen.|Adjektiv
薄める|薄[うす]める|verdünnen|このジュースは 水[みず]で 薄[うす]めて 飲[の]みます。|Diesen Saft trinkt man mit Wasser verdünnt.|Verb
いびき|いびき|Schnarchen|いびきをかいたことがある？|Hast du schon mal geschnarcht?|Nomen
薄着|薄着[うすぎ]|leichte Kleidung|薄着[うすぎ]し 過[す]ぎだよ。|Du bist sehr dünn gekleidet.|Nomen (mit する)
厚着|厚着[あつぎ]|dicke Kleidung|彼[かれ]はいつも 厚着[あつぎ]している。|Er trägt immer warme Kleidung.|Nomen (mit する)
圧力|圧力[あつりょく]|Druck|彼[かれ]は 私[わたし]に 圧力[あつりょく]をかけた。|Er hat Druck auf mich ausgeübt.|Nomen
気圧|気圧[きあつ]|Luftdruck|例[たと]えば、 温度計[おんどけい]や 気圧[きあつ] 計[けい]などの 計器[けいき]は 器具[きぐ]です。|Zum Beispiel sind Messgeräte wie das Thermometer oder das Barometer Instrumente.|Nomen
高気圧|高気圧[こうきあつ]|Hochdruck (Wetter)|明日[あした]は 高気圧[こうきあつ]におおわれて 晴[は]れるでしょう。|Morgen wird es unter Hochdruckeinfluss wohl sonnig.|Nomen
縮小|縮小[しゅくしょう]|Verkleinerung, Verringerung|君[きみ]は 軍備[ぐんび] 縮小[しゅくしょう]を 支持[しじ]すべきだ。|Du solltest für Abrüstung plädieren.|Nomen (mit する)
越す|越[こ]す|überschreiten, überwinden|来[こ]られたい 方[かた]はどなたでもお 越[こ]しください。|Jeder, der kommen möchte, ist herzlich eingeladen!|Verb
いやらしい|いやらしい|widerlich, anzüglich|なんていやらしい 男[おとこ]でしょう。|Was für ein widerlicher Typ.|Adjektiv
追い抜く|追[お]い 抜[ぬ]く|überholen|あの 車[くるま]に 追[お]い 抜[ぬ]かれた。|Ich wurde von dem Auto dort überholt.|Verb
札|札[さつ]|Geldschein|財布[さいふ]に 千円[せんえん]の 札[さつ]が 一枚[いちまい]あります。|Im Portemonnaie ist ein Tausend-Yen-Schein.|Nomen
改札|改札[かいさつ]|Fahrkartenkontrolle, Sperre|改札[かいさつ] 口[ぐち]まで 来[き]たのに 引[ひ]き 返[かえ]すことになった。|Ich war schon bis zur Fahrkartensperre gekommen und musste trotzdem umkehren.|Nomen (mit する)
感謝|感謝[かんしゃ]|Dankbarkeit, Dank|君[きみ]は 彼[かれ]に 感謝[かんしゃ]すべきだ。|Du solltest dich bei ihm bedanken.|Nomen (mit する)
月謝|月謝[げっしゃ]|monatliches Unterrichtsgeld|ピアノの 月謝[げっしゃ]ちょうだい。|Gib mir das Geld für die Klavierstunden.|Nomen
射す|射[さ]す|hereinscheinen (Sonne)|木[き]が 多[おお]すぎると 家[いえ]に 光[ひかり]が 射[さ]さない。|Bei zu vielen Bäumen fällt kein Licht ins Haus.|Verb
過程|過程[かてい]|Prozess, Verlauf|それが 文化的[ぶんかてき] 過程[かてい]である。|Das ist ein kultureller Prozess.|Nomen
イントネーション|イントネーション|Intonation, Satzmelodie|英語[えいご]を 話[はな]す 時[とき]は、もっとイントネーションに 注意[ちゅうい]しなさい。|Achte beim Englischsprechen mehr auf die Satzmelodie.|Nomen
課程|課程[かてい]|Lehrgang, Curriculum|しっかりと 大学[だいがく]の 課程[かてい]を 終[お]えました。|Ich habe das Studium an der Universität ordentlich abgeschlossen.|Nomen
行程|行程[こうてい]|Strecke, Reiseverlauf|我々[われわれ]は 旅行[りょこう]の 最後[さいご]の 行程[こうてい]を 歩[ある]かなければならなかった。|Die letzte Etappe der Reise mussten wir zu Fuß gehen.|Nomen
先程|先程[さきほど]|vorhin, vor Kurzem (höflich)|先程[さきほど]、どういうわけかマイクが 入[はい]りませんでした。|Aus irgendeinem Grund hat das Mikrofon gerade nicht funktioniert.|Nomen
優れる|優[すぐ]れる|überlegen sein, hervorragend sein|彼[かれ]は 数学[すうがく]が 優[すぐ]れている。|In Mathematik ist er sehr gut.|Verb
女優|女優[じょゆう]|Schauspielerin|彼女[かのじょ]は 有名[ゆうめい]な 女優[じょゆう]だそうだ。|Sie soll eine berühmte Schauspielerin sein.|Nomen
透き通る|透[す]き 通[とお]る|durchsichtig sein, klar sein|青[あお]く 透[す]き 通[とお]る 海[うみ]に、 魚[さかな]の 影[かげ]が 揺[ゆ]れていた。|Im blauen, durchsichtigen Meer schwankten die Schatten der Fische.|Verb
指導|指導[しどう]|Anleitung, Führung|彼女[かのじょ]は 彼[かれ]よりも 優[すぐ]れた 指導[しどう] 者[しゃ]だ。|Sie ist eine bessere Führungskraft als er.|Nomen (mit する)
希望|希望[きぼう]|Hoffnung, Wunsch|彼[かれ]はすべての 希望[きぼう]を 失[うしな]った。|Er verlor jede Hoffnung.|Nomen (mit する)
がたがた|がたがた|klappernd, wackelig|車[くるま]はがたがた 揺[ゆ]れた。|Das Auto ruckelte heftig.|Adjektiv
失望|失望[しつぼう]|Enttäuschung|私[わたし]は 彼女[かのじょ]に 失望[しつぼう]した。|Ich bin von ihr enttäuscht.|Nomen (mit する)
意志|意志[いし]|Wille|意志[いし]ある 所[ところ]に 道[みち]あり。|Wo ein Wille ist, ist auch ein Weg.|Nomen
志す|志[こころざ]す|anstreben, sich zum Ziel setzen|彼女[かのじょ]は 女優[じょゆう]になることを 志[こころざ]した。|Sie hatte vor, Schauspielerin zu werden.|Verb
怒り|怒[いか]り|Wut, Zorn|彼女[かのじょ]の 顔[かお]は 怒[いか]りで 真[ま]っ 赤[か]だった。|Ihr Gesicht war vor Zorn knallrot.|Nomen
自身|自身[じしん]|selbst|自分[じぶん] 自身[じしん]を 知[し]ることは 非常[ひじょう]に 難[むずか]しい。|Es ist sehr schwierig, sich selbst zu kennen.|Nomen
出身|出身[しゅっしん]|Herkunft, stammen aus|あなたはボストン 出身[しゅっしん]だと 思[おも]っていました。|Ich war der Meinung, Sie stammten aus Boston.|Nomen
全身|全身[ぜんしん]|der ganze Körper|私[わたし]は 全身[ぜんしん]が 痛[いた]い。|Mein ganzer Körper schmerzt.|Nomen
カンニング|カンニング|Schummeln, Abschreiben (bei Prüfungen)|テストでカンニングをしたことがありますか。|Hast du schon einmal während einer Prüfung betrogen?|Nomen (mit する)
身長|身長[しんちょう]|Körpergröße|身長[しんちょう]はどれくらいですか。|Wie groß bist du?|Nomen
心身|心身[しんしん]|Körper und Geist|青年時代[せいねんじだい]は 心身[しんしん]の 発達[はったつ]が 著[いちじる]しい。|In der Jugendzeit ist die geistige und körperliche Entwicklung bemerkenswert.|Nomen
受け身|受[う]け 身[み]|Passivität; Passiv (Grammatik)|テレビは 精神[せいしん]を 受[う]け 身[み]の 状態[じょうたい]にして 置[お]くという 点[てん]で 有害[ゆうがい]である。|Fernsehen ist insofern schädlich, als es den Geist in einem passiven Zustand hält.|Nomen
証拠|証拠[しょうこ]|Beweis|証拠[しょうこ]がありません。|Es gibt keinen Beweis.|Nomen
照明|照明[しょうめい]|Beleuchtung|すべての 照明[しょうめい]が 消[き]えた。|Die gesamte Beleuchtung ging aus.|Nomen (mit する)
工夫|工夫[くふう]|Einfall, Kniff, Tüfteln|食[た]べる 前[まえ]にひと 工夫[くふう]！|Vor dem Essen noch ein kleiner Kniff!|Nomen (mit する)
主婦|主婦[しゅふ]|Hausfrau|私[わたし]は 主婦[しゅふ]です。|Ich bin Hausfrau.|Nomen
あぐら|あぐら|Schneidersitz|トムは 床[ゆか]にあぐらをかいている。|Tom sitzt im Schneidersitz auf dem Boden.|Nomen
産婦人科|産婦人科[さんふじんか]|Gynäkologie und Geburtshilfe|最近[さいきん]、 産[さん] 婦人[ふじん] 科[か]の 不足[ふそく]が 問題[もんだい]になっているね。|In letzter Zeit ist der Mangel an Frauenärzten ein Problem geworden.|Nomen
奥様|奥様[おくさま]|(Ihre) Ehefrau, gnädige Frau|奥[おく] 様[さま]によろしくお 伝[つた]えください。|Grüßen Sie Ihre Frau!|Nomen
お互い|お 互[たが]い|einander, gegenseitig|お 互[たが]いに 気[き]をつけようね。|Passen wir aufeinander auf!|Nomen
交互|交互[こうご]|abwechselnd|彼[かれ]らは 交互[こうご]に 車[くるま]を 運転[うんてん]した。|Sie fuhren abwechselnd das Auto.|Nomen
高齢|高齢[こうれい]|hohes Alter|日本[にほん]は 高齢[こうれい] 化[か] 社会[しゃかい]に 対処[たいしょ]しようとしています。|Japan versucht Maßnahmen gegen die überalternde Gesellschaft zu finden.|Nomen
愛情|愛情[あいじょう]|Liebe, Zuneigung|子供[こども]には 愛情[あいじょう]が 必要[ひつよう]だ。|Ein Kind braucht Liebe.|Nomen
可愛らしい|可愛[かわい]らしい|niedlich, reizend|可愛[かわい]らしい 名前[なまえ]だこと。|Das ist ein süßer Name.|Adjektiv
可愛がる|可愛[かわい]がる|liebhaben, verhätscheln|トムの 両親[りょうしん]は、 私[わたし]を 可愛[かわい]がってくれます。|Toms Eltern sind liebevoll zu mir.|Verb
いやいや|いやいや|widerwillig|彼[かれ]はいやいや 彼女[かのじょ]に 会[あ]いに 行[い]った。|Widerwillig ging er sie besuchen.|Adverb
恋|恋[こい]|Liebe, Verliebtheit|彼女[かのじょ]は 若[わか]い 芸術家[げいじゅつか]と 恋[こい]に 落[お]ちた。|Sie verliebte sich in einen jungen Künstler.|Nomen
失恋|失恋[しつれん]|Liebeskummer, unglückliche Liebe|彼[かれ]は 失恋[しつれん]のために 傷心[しょうしん]した。|Er hatte wegen Liebeskummer ein gebrochenes Herz.|Nomen (mit する)
恋する|恋[こい]する|lieben, verliebt sein|彼[かれ]は 彼女[かのじょ]に 恋[こい]してると 思[おも]うよ。|Ich glaube, er ist in sie verliebt.|Verb
延長|延長[えんちょう]|Verlängerung|宿泊[しゅくはく]をもう 一晩[ひとばん] 延長[えんちょう]できますか。|Kann ich mein Hotelzimmer um eine Nacht verlängern?|Nomen (mit する)
延期|延期[えんき]|Verschiebung, Aufschub|決定[けってい]は 延期[えんき]された。|Die Entscheidung wurde verschoben.|Nomen (mit する)
祝う|祝[いわ]う|feiern, gratulieren|友人[ゆうじん] 達[たち]が 私[わたし]の 成功[せいこう]を 祝[いわ]ってくれた。|Meine Freunde gratulierten mir zu meinem Erfolg.|Verb
祝い|祝[いわ]い|Feier, Glückwunsch(geschenk)|ケイトはまず 誕生日[たんじょうび]のお 祝[いわ]いをすることはない。|Kate wird wohl ihren Geburtstag nicht feiern.|Nomen
ウエスト|ウエスト|Taille|ウエスト 夫妻[ふさい]は 新婚旅行[しんこんりょこう] 中[ちゅう]です。|Herr und Frau West sind in den Flitterwochen.|Nomen
純粋|純粋[じゅんすい]|rein, unverfälscht|その 子[こ]は 純粋[じゅんすい]な 心[こころ]を 持[も]っていた。|Das Kind hatte ein reines Herz.|な-Adjektiv
慎重|慎重[しんちょう]|vorsichtig, umsichtig|彼[かれ]の 発言[はつげん]は 慎重[しんちょう]だった。|Seine Bemerkungen waren vorsichtig.|な-Adjektiv
笑顔|笑顔[えがお]|lächelndes Gesicht, Lächeln|笑顔[えがお]で 迎[むか]えてくれました。|Er hat mich lächelnd empfangen.|Nomen
大喜び|大喜[おおよろこ]び|große Freude|トムは 大喜[おおよろこ]びでした。|Tom war ganz aus dem Häuschen.|Nomen (mit する)
看護|看護[かんご]|Krankenpflege|私[わたし]は 看護[かんご] 婦[ふ]になりたい。|Ich will Krankenschwester werden.|Nomen (mit する)
看病|看病[かんびょう]|Pflege (eines Kranken)|彼女[かのじょ]は 病気[びょうき]の 母[はは]を 看病[かんびょう]している。|Sie pflegt ihre kranke Mutter.|Nomen (mit する)
肯定|肯定[こうてい]|Bejahung, Zustimmung|トムは 噂[うわさ]を 肯定[こうてい]も 否定[ひてい]もしなかった。|Tom hat die Gerüchte weder bejaht noch verneint.|Nomen (mit する)
オルガン|オルガン|Orgel|オルガンは 弾[ひ]けますか？|Können Sie Orgel spielen?|Nomen
記述|記述[きじゅつ]|Beschreibung, Darstellung|彼[かれ]は 何[なに]が 起[お]こったのか 正確[せいかく]に 記述[きじゅつ]した。|Er beschrieb genau, was passiert war.|Nomen (mit する)
裁判|裁判[さいばん]|Gerichtsverfahren, Prozess|裁判[さいばん]はお 金[かね]がかかる。|Gerechtigkeit ist teuer.|Nomen (mit する)
裁判所|裁判所[さいばんしょ]|Gericht (Gebäude, Institution)|最高[さいこう] 裁判[さいばん] 所[しょ]は 皇居[こうきょ]の 近[ちか]くにある。|Der Oberste Gerichtshof befindet sich in der Nähe des Kaiserpalastes.|Nomen
訴え|訴[うった]え|Klage, Appell|彼[かれ]は 僕[ぼく]の 訴[うった]えを 聞[き]こうとしなかった。|Er wollte meine Klage nicht anhören.|Nomen
区域|区域[くいき]|Zone, Bezirk|彼女[かのじょ]は 禁煙[きんえん] 区域[くいき]を 広[ひろ]げたいと 思[おも]っている。|Sie möchte die Nichtraucherzone erweitern.|Nomen
疑い|疑[うたが]い|Verdacht, Zweifel|君[きみ]の 正直[しょうじき]なのを 決[けっ]して 疑[うたが]いはしない。|Ich zweifle keinen Moment an deiner Ehrlichkeit.|Nomen
疑問|疑問[ぎもん]|Frage, Zweifel|誰[だれ]も 私[わたし]の 疑問[ぎもん]に 答[こた]えてくれなかった。|Niemand hat mir auf meine Frage geantwortet.|Nomen
からから|からから|schallend (lachen)|地面[じめん]が 日[ひ]に 焼[や]けて、からからに 乾[かわ]いて 固[かた]くなった。|Der Boden wurde von der Sonne gebrannt, trocknete völlig aus und wurde hart.|Adverb
疑う|疑[うたが]う|zweifeln, verdächtigen|私[わたし]は 彼[かれ]の 話[はなし]を 疑[うたが]っている。|Ich bezweifle seine Geschichte.|Verb
疑わしい|疑[うたが]わしい|zweifelhaft, verdächtig|彼[かれ]が 来[く]るかは 疑[うたが]わしい。|Es ist fraglich, ob er kommt.|Adjektiv
著しい|著[いちじる]しい|auffallend, beträchtlich|両者[りょうしゃ]の 間[あいだ]には 著[いちじる]しい 違[ちが]いがある。|Es gibt einen auffallenden Unterschied zwischen den beiden.|Adjektiv
著す|著[あらわ]す|verfassen, schreiben (ein Buch)|有名[ゆうめい] 作家[さっか]はまたベストセラー 書[しょ]を 著[あらわ]した。|Der berühmte Schriftsteller hat wieder einen Bestseller verfasst.|Verb
権利|権利[けんり]|Recht, Anspruch|トムには 知[し]る 権利[けんり]がある。|Tom hat ein Recht, das zu wissen.|Nomen
権力|権力[けんりょく]|Macht, Autorität|王[おう]は 権力[けんりょく]を 奪[うば]われた。|Dem König wurde die Macht entrissen.|Nomen
人権|人権[じんけん]|Menschenrechte|誰[だれ]もあなたの 人権[じんけん]を 奪[うば]うことはできない。|Niemand kann dir deine Menschenrechte entziehen.|Nomen
棄権|棄権[きけん]|Verzicht, Aufgabe, Stimmenthaltung|今度[こんど]の 選挙[せんきょ]は 棄権[きけん]するつもりだ。|Bei der nächsten Wahl werde ich mich enthalten.|Nomen (mit する)
きっちん|きっちん|Küche|きっちんで 料理[りょうり]を 作[つく]っています。|Ich koche gerade in der Küche.|Nomen
侵す|侵[おか]す|verletzen, eindringen in (Rechte, Gebiet)|憲法[けんぽう]を 侵[おか]してはならない。|Die Verfassung darf nicht verletzt werden.|Verb
行為|行為[こうい]|Handlung, Tat|君[きみ]が 自分[じぶん]の 行為[こうい]を 後悔[こうかい]するときがくるだろう。|Die Zeit wird kommen, da du deine Tat bereuen wirst.|Nomen
賞|賞[しょう]|Preis, Auszeichnung|彼[かれ]には 特別[とくべつ] 賞[しょう]が 与[あた]えられた。|Ihm wurde ein Sonderpreis verliehen.|Nomen
賞品|賞品[しょうひん]|Preis (Sachgewinn)|先生[せんせい]はジョンに 賞品[しょうひん]を 与[あた]えた。|Der Lehrer gab John einen Preis.|Nomen
観賞|観賞[かんしょう]|Betrachtung, Zier-|この 部屋[へや]の 隅[すみ]に 観賞[かんしょう] 植物[しょくぶつ]を 置[お]きたいんです。|In diese Zimmerecke möchte ich eine Zierpflanze stellen.|Nomen (mit する)
財政|財政[ざいせい]|Staatsfinanzen, Finanzlage|我々[われわれ]は 財政[ざいせい] 的[てき] 援助[えんじょ]を 彼[かれ]に 頼[たよ]ることが 出来[でき]る。|Wir können uns in Fragen finanzieller Unterstützung auf ihn verlassen.|Nomen
財産|財産[ざいさん]|Vermögen, Besitz|彼[かれ]は 全[ぜん] 財産[ざいさん]を 失[うしな]った。|Er verlor all seine Besitztümer.|Nomen
くしゃくしゃ|くしゃくしゃ|zerknittert, zerknüllt|顔[かお]が 涙[なみだ]でくしゃくしゃになった。|Sein Gesicht war von Tränen ganz verzerrt.|Adverb
金融|金融[きんゆう]|Finanzwesen|ご 存知[ぞんじ]のように、 東京[とうきょう]は 世界[せかい]の 金融[きんゆう]の 中心地[ちゅうしんち]だ。|Wie Sie wissen, ist Tōkyō eines der Finanzzentren der Welt.|Nomen
間隔|間隔[かんかく]|Abstand, Zwischenraum|バスはどれくらいの 間隔[かんかく]で 走[はし]っていますか。|In welchen Abständen fahren die Busse?|Nomen
終了|終了[しゅうりょう]|Ende, Beendigung|会議[かいぎ]は 終了[しゅうりょう]しました。|Die Konferenz endete.|Nomen (mit する)
完了|完了[かんりょう]|Abschluss, Vollendung|もうすぐ 準備[じゅんび] 完了[かんりょう]です。|Die Vorbereitungen sind gleich abgeschlossen.|Nomen (mit する)
修了|修了[しゅうりょう]|Abschluss (eines Kurses)|私[わたし]は 高校[こうこう]の 全[ぜん] 課程[かてい]を 修了[しゅうりょう]した。|Ich habe den gesamten Lehrgang der Oberschule abgeschlossen.|Nomen (mit する)
承認|承認[しょうにん]|Genehmigung, Anerkennung|私[わたし]はあなたの 計画[けいかく]を 承認[しょうにん]できない。|Ich kann Ihren Plan nicht genehmigen.|Nomen (mit する)
承知|承知[しょうち]|Einverständnis, Kenntnis|父[ちち]は 私[わたし]が 外国[がいこく]へ 行[い]くことを 承知[しょうち]した。|Mein Vater war damit einverstanden, dass ich ins Ausland gehe.|Nomen (mit する)
けち|けち|geizig, Geizhals|他人[たにん]のやることにけちをつけるのは 簡単[かんたん]である。|Es ist einfach, den Arbeitsfehler beim Anderen zu suchen.|な-Adjektiv
納める|納[おさ]める|entrichten, zahlen (Steuer, Gebühr)|私[わたし]たちは 税金[ぜいきん]を 納[おさ]めなければならない。|Wir müssen Steuern zahlen.|Verb
説得|説得[せっとく]|Überredung, Überzeugen|私[わたし]たちは 彼[かれ]を 説得[せっとく]するのに 失敗[しっぱい]した。|Wir haben es nicht geschafft, ihn zu überreden.|Nomen (mit する)
所得|所得[しょとく]|Einkommen|所得[しょとく] 税[ぜい]や 法人税[ほうじんぜい]は 直接[ちょくせつ] 税[ぜい]として 納[おさ]める。|Einkommensteuer und Körperschaftsteuer werden als direkte Steuern gezahlt.|Nomen
得る|得[え]る|erlangen, bekommen|彼[かれ]は 会社[かいしゃ]で 重要[じゅうよう]な 地位[ちい]を 得[え]た。|Er hat in der Firma einen wichtigen Posten bekommen.|Verb
乾燥|乾燥[かんそう]|Trocknung, Trockenheit|唇[くちびる]は 乾燥[かんそう]してますか？|Haben Sie trockene Lippen?|Nomen (mit する)
幹部|幹部[かんぶ]|Führungskraft, Vorstand|彼[かれ]はその 問題[もんだい]について 幹部[かんぶ]の 何人[なんにん]かと 協議[きょうぎ]した。|Er beriet sich mit mehreren Vorstandsmitgliedern über das Problem.|Nomen
酸素|酸素[さんそ]|Sauerstoff|月[つき]には 酸素[さんそ]がない。|Auf dem Mond gibt es keinen Sauerstoff.|Nomen
素直|素直[すなお]|aufrichtig, folgsam, unverstellt|素直[すなお]にお 話[はなし]になっても 大丈夫[だいじょうぶ]です。|Du kannst offen mit mir sprechen.|Adjektiv
ざらざら|ざらざら|rau, körnig|猫[ねこ]の 舌[した]はざらざらしている。|Die Zunge einer Katze ist rau.|Nomen
水素|水素[すいそ]|Wasserstoff|水[みず]は 酸素[さんそ]と 水素[すいそ]に 分解[ぶんかい]できる。|Wasser lässt sich in Sauerstoff und Wasserstoff zerlegen.|Nomen
素早い|素早[すばや]い|flink, schnell|彼[かれ]は 新聞[しんぶん]を 手[て]に 取[と]ると 素早[すばや]く 目[め]を 走[はし]らせた。|Er nahm die Zeitung in die Hand und überflog sie schnell.|Adjektiv
石炭|石炭[せきたん]|Kohle|一週間[いっしゅうかん] 分[ぶん]の 石炭[せきたん]を 使[つか]ってしまった。|Wir haben unsere Kohleration für diese Woche aufgebraucht.|Nomen
岩|岩[いわ]|Fels|彼[かれ]らの 船[ふね]は 岩[いわ]にぶつかった。|Ihr Schiff ist gegen einen Felsen gefahren.|Nomen
岸|岸[きし]|Ufer|ボートは 岸[きし]の 近[ちか]くを 進[すす]んだ。|Das Boot fuhr nahe am Ufer entlang.|Nomen
校庭|校庭[こうてい]|Schulhof|彼[かれ]らは 校庭[こうてい]でしゃべっていた。|Sie unterhielten sich auf dem Schulhof.|Nomen
解散|解散[かいさん]|Auflösung, Auseinandergehen|国会[こっかい]は 解散[かいさん]された。|Das Parlament wurde aufgelöst.|Nomen (mit する)
スモッグ|スモッグ|Smog|今日[きょう]は、スモッグがひどかった。|Der Smog war heute sehr stark.|Nomen
植物|植物[しょくぶつ]|Pflanze|植物[しょくぶつ]や 生[い]き 物[もの]は 持[も]っていませんね？|Sie haben keine Pflanzen oder Tiere dabei, oder?|Nomen
植民地|植民地[しょくみんち]|Kolonie|ナイジェリアはかつてイギリスの 植民[しょくみん] 地[ち]であった。|Nigeria war früher mal eine britische Kolonie.|Nomen
植木|植木[うえき]|Gartenpflanze, Topfpflanze|植木[うえき] 屋[や]さんに 木[き]を 何[なん] 本[ぼん]か 植[う]えてもらった。|Ich ließ den Gärtner einige Bäume pflanzen.|Nomen
植物園|植物園[しょくぶつえん]|botanischer Garten|トムとメアリーは 植物[しょくぶつ] 園[えん]で 会[あ]った。|Tom und Mary trafen sich im botanischen Garten.|Nomen
根拠|根拠[こんきょ]|Grundlage, Begründung|これらの 主張[しゅちょう]には 科学的[かがくてき]な 根拠[こんきょ]がない。|Diese Behauptungen entbehren einer wissenschaftlichen Grundlage.|Nomen
根本|根本[こんぽん]|Wurzel, Grundlage|政府[せいふ]は 根本[こんぽん] 的[てき]な 変革[へんかく]をしなければならない。|Die Regierung muss grundlegende Reformen durchführen.|Nomen
板|板[いた]|Brett|板[いた]にくぎを 打[う]ち 込[こ]んだ。|Er schlug Nägel in das Brett.|Nomen
すり|すり|Taschendieb|私[わたし]はすりにやられた。|Ich bin Opfer eines Taschendiebs geworden.|Nomen
看板|看板[かんばん]|Schild, Ladenschild|看板[かんばん]には「 犬[いぬ]に 注意[ちゅうい]」と 書[か]いてあった。|Auf dem Schild stand: „Vorsicht vor dem Hunde!“|Nomen
草花|草花[くさばな]|Blumen und Gräser|彼[かれ]が 住[す]んでいる 町[まち]の 通[とお]りには、 草花[くさばな]も 木[き]もありませんでした。|In der Stadt, wo er wohnte, gab es an den Straßen weder Blumen noch Bäume.|Nomen
草木|草木[くさき]|Pflanzen und Bäume|雨[あめ]が 降[ふ]らなかったせいで 草木[くさき]が 枯[か]れてしまった。|Weil es nicht regnete, sind die Pflanzen verdorrt.|Nomen
言葉遣い|言葉遣[ことばづか]い|Ausdrucksweise, Wortwahl|言葉遣[ことばづか]いの 綺麗[きれい]な 人[ひと]が 好[す]きです。|Ich mag Menschen, die sich gepflegt ausdrücken.|Nomen
落ち葉|落[お]ち 葉[ば]|gefallenes Laub|庭[にわ]は 落[お]ち 葉[ば]で 覆[おお]われていた。|Der Garten war mit abgefallenem Laub bedeckt.|Nomen
木の葉|木[こ]の 葉[は]|Laub, Blätter eines Baumes|秋[あき]になると 木[こ]の 葉[は]の 色[いろ]が 変[か]わる。|Das Laub der Bäume verfärbt sich im Herbst.|Nomen
書き言葉|書[か]き 言葉[ことば]|Schriftsprache|書[か]き 言葉[ことば]と 話[はな]し 言葉[ことば]の 違[ちが]いを 意識[いしき]する。|Man achtet auf den Unterschied zwischen Schriftsprache und gesprochener Sprache.|Nomen
吸収|吸収[きゅうしゅう]|Aufnahme, Absorption|黒[くろ]い 紙[かみ]は、 光[ひかり]を 吸収[きゅうしゅう]する。|Schwarze Stoffe absorbieren Licht.|Nomen (mit する)
おにぎり|おにぎり|Reisbällchen (Onigiri)|最近[さいきん]はツナマヨおにぎり。|In letzter Zeit esse ich nur Onigiri mit Thunfisch und Mayo.|Nomen
呼吸|呼吸[こきゅう]|Atmung|普通[ふつう]に 呼吸[こきゅう]して。|Atmet normal.|Nomen (mit する)
吸い込む|吸[す]い 込[こ]む|einatmen, einsaugen|乾[かわ]いた 砂[すな]は 水[みず]を 吸[す]い 込[こ]む。|Trockener Sand absorbiert Wasser.|Verb
及ぶ|及[およ]ぶ|reichen bis, sich erstrecken auf|彼[かれ]の 研究[けんきゅう]は 広範囲[こうはんい]に 及[およ]んでいる。|Seine Forschung umfasst einen weiten Bereich.|Verb
扱う|扱[あつか]う|behandeln, umgehen mit; führen (Ware)|私[わたし]は 彼[かれ]を 自分[じぶん]の 息子[むすこ]のように 扱[あつか]った。|Ich habe ihn wie meinen eigenen Sohn behandelt.|Verb
高級|高級[こうきゅう]|erstklassig, Luxus-|トムとメアリーは 高級[こうきゅう]ホテルに 宿泊[しゅくはく]した。|Tom und Maria logierten in einem Luxushotel.|な-Adjektiv
級|級[きゅう]|Stufe, Grad, Klasse|日本語[にほんご] 検定[けんてい]の 二[に] 級[きゅう]に 受[う]かった。|Ich habe die 2. Stufe der Japanisch-Prüfung bestanden.|Nomen
上級|上級[じょうきゅう]|Oberstufe, fortgeschritten|トムは 上級[じょうきゅう]のスノーボーダーだ。|Tom ist ein ziemlich guter Gleitbrettfahrer.|Nomen
かみそり|かみそり|Rasiermesser, Rasierer|この 電気[でんき]かみそりは 買[か]う 前[まえ]に 試[ため]してみるべきだった。|Ich hätte diesen elektrischen Rasierer vor dem Kauf ausprobieren sollen.|Nomen
初級|初級[しょきゅう]|Anfängerstufe|これは 初級[しょきゅう]の 教科書[きょうかしょ]です。|Das ist ein Lehrbuch für Anfänger.|Nomen
血管|血管[けっかん]|Blutgefäß|血[ち]は 血管[けっかん]の 中[なか]を 流[なが]れる。|Blut fließt durch Blutgefäße.|Nomen
出血|出血[しゅっけつ]|Blutung|出血[しゅっけつ]が 止[と]まりません。|Es hört nicht auf, zu bluten.|Nomen (mit する)
液体|液体[えきたい]|Flüssigkeit|水[みず]は 液体[えきたい]である。|Wasser ist eine Flüssigkeit.|Nomen
血液|血液[けつえき]|Blut|あなたの 血液[けつえき] 型[がた]は 何[なん]ですか。|Welche Blutgruppe haben Sie?|Nomen
液|液[えき]|Flüssigkeit, Lösung|誰[だれ]か 修正[しゅうせい] 液[えき] 持[も]ってない？|Hat jemand einen Tipp-Ex?|Nomen
背中|背中[せなか]|Rücken|背中[せなか]が 少[すこ]し 痛[いた]いんです。|Ich hab einen leichten Schmerz im Rücken.|Nomen
がやがや|がやがや|lärmend, durcheinanderredend|教室[きょうしつ]の 中[なか]ががやがやしています。|Im Klassenzimmer herrscht lautes Stimmengewirr.|Adverb
背広|背広[せびろ]|Anzug (Herren)|私[わたし]は 新[あたら]しい 背広[せびろ]を 買[か]った。|Ich habe mir einen neuen Anzug gekauft.|Nomen
骨折|骨折[こっせつ]|Knochenbruch|骨折[こっせつ]したことはありますか。|Hast du dir schon einmal einen Knochen gebrochen?|Nomen (mit する)
健全|健全[けんぜん]|gesund, heil|健全[けんぜん]な 関係[かんけい]のようだね。|Das klingt nach einer gesunden Beziehung.|Adjektiv
健康|健康[けんこう]|Gesundheit|喫煙[きつえん]は 健康[けんこう]に 影響[えいきょう]する。|Rauchen wirkt sich auf die Gesundheit aus.|Nomen
診断|診断[しんだん]|Diagnose|健康[けんこう] 診断[しんだん]を 受[う]けたんだよ。|Ich wurde medizinisch untersucht.|Nomen (mit する)
診察|診察[しんさつ]|ärztliche Untersuchung|医者[いしゃ]は 患者[かんじゃ]たちを 診察[しんさつ]した。|Der Arzt untersuchte die Patienten.|Nomen (mit する)
医療|医療[いりょう]|medizinische Versorgung|彼[かれ]らはもっと 調[しら]べるよう 医療[いりょう] 専門家[せんもんか]に 頼[たの]んだ。|Sie baten einen Fachmediziner, weitere Untersuchungen anzustellen.|Nomen
きょろきょろ|きょろきょろ|sich unruhig umsehend|トムは 誰[だれ]が 話[はな]してるのかを 見[み]ようと、きょろきょろした。|Tom sah sich suchend um, um zu sehen, wer da sprach.|Adverb
気の毒|気[き]の 毒[どく]|bedauernswert|彼女[かのじょ]は 気[き]の 毒[どく]な 状態[じょうたい]だった。|Sie war in einem bedauernswerten Zustand.|な-Adjektiv
消毒|消毒[しょうどく]|Desinfektion|けがをした 所[ところ]を 消毒[しょうどく]しました。|Ich habe die verletzte Stelle desinfiziert.|Nomen (mit する)
症状|症状[しょうじょう]|Symptom|よくこういう 症状[しょうじょう]が 起[お]きますか。|Treten diese Symptome häufig auf?|Nomen
清書|清書[せいしょ]|Reinschrift|作文[さくぶん]を 清書[せいしょ]する 必要[ひつよう]はありません。|Du brauchst den Aufsatz nicht ins Reine zu schreiben.|Nomen (mit する)
清潔|清潔[せいけつ]|Sauberkeit, sauber|彼[かれ]は 清潔[せいけつ]なズボンを 履[は]いていた。|Er trug eine saubere Hose.|な-Adjektiv
監督|監督[かんとく]|Regisseur(in); Aufsicht, Trainer(in)|あの 監督[かんとく]は 批判[ひはん]に 対[たい]して 敏感[びんかん]だ。|Dieser Regisseur reagiert dünnhäutig auf Kritik.|Nomen (mit する)
撮影|撮影[さつえい]|Aufnahme (Foto, Film), Dreh|私[わたし]の 趣味[しゅみ]は 写真[しゃしん] 撮影[さつえい]です。|Mein Hobby ist das Fotografieren.|Nomen (mit する)
描く|描[えが]く|zeichnen, malen; schildern|誰[だれ]が 描[えが]いたんですか？|Wer hat es gezeichnet?|Verb
くしゃみ|くしゃみ|Niesen|くしゃみが 止[と]まりません。|Ich kann nicht aufhören zu niesen.|Nomen
活躍|活躍[かつやく]|aktive Rolle, Glanzleistung|彼女[かのじょ]は 今[いま]も 第一線[だいいっせん]で 活躍[かつやく]している。|Sie engagiert sich immer noch an vorderster Front.|Nomen (mit する)
再開|再開[さいかい]|Wiederaufnahme, Wiedereröffnung|彼[かれ]は 短[みじか]い 休息[きゅうそく]の 後[あと]、 仕事[しごと]を 再開[さいかい]した。|Er fing nach einer kurzen Pause wieder an, zu arbeiten.|Nomen (mit する)
再生|再生[さいせい]|Wiedergabe; Wiederbelebung|私[わたし]たちは 新聞[しんぶん]の 再生[さいせい] 利用[りよう]を 始[はじ]めました。|Wir haben begonnen, Zeitungen zu recyclen.|Nomen (mit する)
再会|再会[さいかい]|Wiedersehen|昔[むかし]の 恋人[こいびと]に 再会[さいかい]してみたい。|Ich sähe gerne noch einmal meine alte Liebe wieder.|Nomen (mit する)
編む|編[あ]む|stricken, flechten|母[はは]は 私[わたし]にセーターを 編[あ]んでくれた。|Meine Mutter hat mir einen Pullover gestrickt.|Verb
解放|解放[かいほう]|Befreiung, Freilassung|彼[かれ]の 言葉[ことば]で 彼女[かのじょ]は 不安[ふあん]から 解放[かいほう]された。|Durch seine Worte wurde sie von ihrer Angst befreit.|Nomen (mit する)
開放|開放[かいほう]|Öffnung (für alle)|試験中[しけんちゅう]は、 全[すべ]てのドア 及[およ]び 窓[まど]を 開放[かいほう]してください。|Während der Prüfung bitte alle Türen und Fenster offenlassen!|Nomen (mit する)
ぐずぐず|ぐずぐず|trödelnd, zaudernd|ぐずぐずしないで。|Trödel nicht!|Adverb
重視|重視[じゅうし]|großen Wert legen auf|私[わたし]は 彼[かれ]の 意見[いけん]をあまり 重視[じゅうし]しない。|Ich lege keinen großen Wert auf seine Meinung.|Nomen (mit する)
視点|視点[してん]|Blickwinkel, Standpunkt|これは 十分[じゅうぶん] 根拠[こんきょ]のある 視点[してん]だ。|Das ist ein gut begründeter Standpunkt.|Nomen
近視|近視[きんし]|Kurzsichtigkeit|近視[きんし]なんですか？|Sind Sie kurzsichtig?|Nomen
衣類|衣類[いるい]|Kleidungsstücke|男性用[だんせいよう]の 衣類[いるい]はゆったりしている。|Herrenbekleidung ist weit geschnitten.|Nomen
衣服|衣服[いふく]|Kleidung|冬[ふゆ]は 暖[あたた]かい 衣服[いふく]を 着[き]なさい。|Trage im Winter warme Kleidung.|Nomen
衣料|衣料[いりょう]|Kleidung, Textilien|彼[かれ]は 衣料[いりょう] 品[ひん] 業界[ぎょうかい]で 本当[ほんとう]にうまく 成功[せいこう]した。|Er hatte in der Bekleidungsbranche wirklich großen Erfolg.|Nomen
衣食住|衣食住[いしょくじゅう]|Kleidung, Nahrung und Wohnen|衣[い] 食[しょく] 住[じゅう]は 生活[せいかつ]の 基本[きほん]です。|Kleidung, Nahrung und Wohnung sind die Grundlagen der Existenz.|Nomen
くすぐったい|くすぐったい|kitzelig; es kitzelt|彼女[かのじょ]の 息[いき]が 髪[かみ]に 当[あ]たってくすぐったかった。|Mein Haar hat mich gekitzelt, als ihr Atem es streifte.|Adjektiv
仮に|仮[かり]に|angenommen, vorläufig|仮[かり]にそれが 本当[ほんとう]だとしましょう。|Nehmen wir einmal an, das stimmt.|Adverb
仮定|仮定[かてい]|Annahme, Hypothese|それが 真実[しんじつ]であると 仮定[かてい]しよう。|Lass uns annehmen, dass das wahr ist.|Nomen (mit する)
仮|仮[かり]|vorläufig, provisorisch|これは 仮[かり]の 名前[なまえ]です。|Das ist ein vorläufiger Name.|Nomen
仮名遣い|仮名遣[かなづか]い|Kana-Rechtschreibung|祖父[そふ]は 古[ふる]い 仮名遣[かなづか]いで 書[か]くことがあるの。|Mein Großvater schreibt manchmal in der alten Kana-Rechtschreibung.|Nomen
演説|演説[えんぜつ]|Rede, Ansprache|彼[かれ]は 演説[えんぜつ]した。|Er hielt eine Rede.|Nomen (mit する)
公演|公演[こうえん]|öffentliche Aufführung, Gastspiel|公演[こうえん]はお 楽[たの]しみいただけましたか？|Hat Ihnen die Vorstellung gefallen?|Nomen (mit する)
演じる|演[えん]じる|spielen, darstellen (Rolle)|誰[だれ]がお 姫様[ひめさま]の 役[やく]を 演[えん]じるの。|Wer verkörpert die Rolle der Prinzessin?|Verb
出演|出演[しゅつえん]|Auftritt, Mitwirkung|トムは 舞台[ぶたい]に 上[あ]がって 次[つぎ]の 出演[しゅつえん] 者[しゃ]を 紹介[しょうかい]した。|Tom ging auf die Bühne und sagte den nächsten Künstler an.|Nomen (mit する)
くたびれる|くたびれる|müde werden, sich abnutzen|くたびれた。 寝[ね]るね。|Ich bin kaputt. Ich geh’ schlafen.|Verb
劇|劇[げき]|Theaterstück|彼女[かのじょ]は 初[はじ]めて 劇[げき]に 出[で]た。|Sie spielte das erste Mal in einem Theaterstück mit.|Nomen
劇場|劇場[げきじょう]|Theater (Gebäude)|今夜[こんや]は 劇場[げきじょう]にいくつもりですか。|Gehen Sie heute Abend ins Theater?|Nomen
演劇|演劇[えんげき]|Schauspiel, Theater|演劇[えんげき]、 映画[えいが]などを 見[み]るのがお 好[す]きですか。|Siehst du gern Theaterstücke, Filme und dergleichen?|Nomen
喜劇|喜劇[きげき]|Komödie|私[わたし]は 劇場[げきじょう]で 喜劇[きげき]を 見[み]るのが 好[す]きだ。|Ich sehe mir im Theater gern Komödien an.|Nomen
悲しみ|悲[かな]しみ|Trauer, Kummer|彼女[かのじょ]は 涙[なみだ]ひとつこぼさずに 悲[かな]しみに 耐[た]えた。|Sie ertrug ihre Trauer, ohne eine einzige Träne zu vergießen.|Nomen
集団|集団[しゅうだん]|Gruppe, Kollektiv|子供[こども]たちが 集団[しゅうだん]で 遊[あそ]んでいた。|Die Kinder spielten in einer Gruppe.|Nomen
固定|固定[こてい]|Befestigung, Fixierung|固定[こてい] 電話[でんわ]を 使[つか]うことはほとんどありません。|Wir benutzen kaum Festnetz.|Nomen (mit する)
いらいら|いらいら|gereizt, nervös|君[きみ]は 僕[ぼく]にとてもいらいらしている。|Du bist so ungeduldig mit mir.|Adjektiv
固める|固[かた]める|härten, festigen|基礎[きそ]を 固[かた]めることは 大切[たいせつ]です。|Es ist wichtig, die Grundlagen zu stärken.|Verb
固まる|固[かた]まる|fest werden, erstarren|皆[みな]、 恐怖[きょうふ]で 固[かた]まった。|Alle erstarrten vor Schreck.|Verb
固体|固体[こたい]|Festkörper|水[みず]は 凍[こお]ると 固体[こたい]になる。|Wasser wird fest, wenn es gefriert.|Nomen
固有|固有[こゆう]|eigen, charakteristisch|言語[げんご]は 人間[にんげん] 固有[こゆう]の 性質[せいしつ]である。|Sprache ist eine dem Menschen eigene Fähigkeit.|な-Adjektiv
主催|主催[しゅさい]|Veranstaltung, Ausrichtung|パーティーは 主催[しゅさい] 者[しゃ]のスピーチで 終[お]わった。|Die Feier endete mit einer Rede des Veranstalters.|Nomen (mit する)
促す|促[うなが]す|drängen, anregen|彼[かれ]は 彼女[かのじょ]に 注意[ちゅうい]して 運転[うんてん]するようにと 促[うなが]した。|Er mahnte sie, vorsichtig zu fahren.|Verb
催促|催促[さいそく]|Mahnung, Drängen|まさかリアルに 借金[しゃっきん]の 催促[さいそく]だったの？|Das war doch nicht etwa wirklich eine Mahnung wegen Schulden?|Nomen (mit する)
エチケット|エチケット|Etikette, Anstandsregeln|それはエチケットの 問題[もんだい]だ。|Das ist eine Frage der Etikette.|Nomen
古典|古典[こてん]|Klassiker, klassische Literatur|彼[かれ]は 古典[こてん]の 教育[きょういく]を 受[う]けている。|Er ist ein Mann von klassischer Bildung.|Nomen
辞典|辞典[じてん]|Wörterbuch|トムは 中日[ちゅうにち] 辞典[じてん]を 買[か]った。|Tom hat sich ein chinesisch-japanisches Wörterbuch gekauft.|Nomen
殊に|殊[こと]に|besonders, vor allem|ロックは 殊[こと]に 若者[わかもの]に 人気[にんき]だ。|Rockmusik ist besonders bei jungen Leuten beliebt.|Adverb
象徴|象徴[しょうちょう]|Symbol|虹[にじ]は 希望[きぼう]の 象徴[しょうちょう]になった。|Der Regenbogen ist zu einem Symbol der Hoffnung geworden.|Nomen (mit する)
微か|微[かす]か|schwach, kaum wahrnehmbar|少年[しょうねん]は 容貌[ようぼう]が 父親[ちちおや]に 微[かす]かに 似[に]ていた。|Der Junge ähnelte seinem Vater im Aussehen ein wenig.|Adjektiv
ご免|ご 免[めん]|Entschuldigung|もう 数学[すうがく]なんてご 免[めん]だよ。|Von Mathe habe ich jetzt wirklich genug.|Nomen
許可|許可[きょか]|Erlaubnis, Genehmigung|許可[きょか]なく 劇場[げきじょう] 内[ない]で 写真[しゃしん]を 撮[と]ることはできません。|Ohne Erlaubnis ist das Fotografieren im Theater nicht gestattet.|Nomen (mit する)
訓練|訓練[くんれん]|Training, Übung|彼[かれ]は 厳[きび]しい 訓練[くんれん]に 耐[た]えられません。|Er kann das strenge Training nicht aushalten.|Nomen (mit する)
かっと|かっと|aufbrausend, in Wut geraten|トムはかっとなったことがない。|Tom verliert nie die Fassung.|Adverb
訓読み|訓読[くんよ]み|Kun-Lesung (japanische Lesung)|この 漢字[かんじ]の 訓読[くんよ]みを 教[おし]えてください。|Sagen Sie mir bitte die Kun-Lesung dieses Kanji.|Nomen (mit する)
訓|訓[くん]|japanische Lesung eines Kanji|この 漢字[かんじ]には 音[おん]と 訓[くん]があります。|Dieses Kanji hat eine On- und eine Kun-Lesung.|Nomen
助詞|助詞[じょし]|Partikel (Grammatik)|日本語[にほんご]の 助詞[じょし]は 難[むずか]しいです。|Die Partikeln des Japanischen sind schwierig.|Nomen
形容詞|形容詞[けいようし]|Adjektiv|これらの 形容[けいよう] 詞[し]は 全部[ぜんぶ]が 積極的[せっきょくてき]です。|Das sind alles positive Adjektive.|Nomen
上司|上司[じょうし]|Vorgesetzte(r), Chef(in)|彼[かれ]は 上司[じょうし]とウマが 合[あ]わない。|Mit seinem Chef ist er sich nicht grün.|Nomen
司会|司会[しかい]|Moderation, Leitung (einer Veranstaltung)|その 会議[かいぎ]は 森[もり] 首相[しゅしょう]が 司会[しかい]をした。|Die Konferenz wurde von Premierminister Mori geleitet.|Nomen (mit する)
購入|購入[こうにゅう]|Kauf, Anschaffung|家[いえ]を 購入[こうにゅう]したいのですが。|Ich möchte ein Haus kaufen.|Nomen (mit する)
がらがら|がらがら|gurgelnd; ratternd|声[こえ]、がらがらだけど 大丈夫[だいじょうぶ]？|Deine Stimme ist ganz heiser, alles in Ordnung?|Adverb
講演|講演[こうえん]|Vortrag|講演[こうえん]の 内容[ないよう]は 多岐[たき]に 渡[わた]っていた。|Der Inhalt des Vortrages umfasste ein weites Themenfeld.|Nomen (mit する)
講義|講義[こうぎ]|Vorlesung|講義[こうぎ]ってもう 終[お]わった？|Ist die Vorlesung schon vorbei?|Nomen (mit する)
休講|休講[きゅうこう]|Ausfall einer Vorlesung|この 授業[じゅぎょう]は 明日[あした] 休講[きゅうこう]です。|Diese Vorlesung fällt morgen aus.|Nomen (mit する)
医師|医師[いし]|Arzt, Ärztin|彼[かれ]の 職業[しょくぎょう]は 医師[いし]だ。|Er ist Arzt von Beruf.|Nomen
講師|講師[こうし]|Dozent(in), Referent(in)|正確[せいかく]に 言[い]うと 私[わたし]は 大学[だいがく] 講師[こうし]です。|Genau gesagt bin ich Dozent an einer Universität.|Nomen
技師|技師[ぎし]|Techniker(in), Ingenieur(in)|彼[かれ]は 有能[ゆうのう]な 技師[ぎし]です。|Er ist ein fähiger Ingenieur.|Nomen
師走|師走[しわす]|Dezember (alter Name)|師走[しわす]に 入[はい]りました。|Der Dezember ist da.|Nomen
かんかん|かんかん|wutentbrannt|ジェーンはカンカンだった。|Jane war wütend.|Adverb
お手伝い|お 手伝[てつだ]い|Hilfe; Haushaltshilfe|台所[だいどころ]って、お 手伝[てつだ]いがいる？|Brauchst du in der Küche Hilfe?|Nomen (mit する)
小鳥|小鳥[ことり]|kleiner Vogel|猫[ねこ]は 小鳥[ことり]に 忍[しの]び 寄[よ]った。|Die Katze schlich sich an den Vogel heran.|Nomen
大声|大声[おおごえ]|laute Stimme|父[ちち]はいつも 大声[おおごえ]で 話[はな]す。|Mein Vater spricht immer mit sehr lauter Stimme.|Nomen
歌声|歌声[うたごえ]|Gesang, Singstimme|彼女[かのじょ]はすてきな 歌声[うたごえ]を 耳[みみ]にし、ふと 足[あし]をとめた。|Als ich ihren wunderbaren Gesang hörte, blieb ich unwillkürlich stehen.|Nomen
騒ぎ|騒[さわ]ぎ|Lärm, Aufruhr|ちょっと、 一体[いったい]この 騒[さわ]ぎは 何[なん]？|Moment mal, was ist das für ein Aufruhr?|Nomen
騒がしい|騒[さわ]がしい|laut, lärmend|教室[きょうしつ]で 騒[さわ]がしくしてはいけません。|Im Klassenzimmer darf man keinen Lärm machen.|Adjektiv
飼う|飼[か]う|halten (Tiere)|私[わたし]は 犬[いぬ]を 飼[か]っている。|Ich habe einen Hund.|Verb
これまで|これまで|bis jetzt, bisher|これまでは 順調[じゅんちょう]だよ。|So weit, so gut.|Nomen
刺さる|刺[さ]さる|stecken, stecken bleiben|タイヤに 釘[くぎ]が 刺[さ]さっていたのを 見[み]つけた。|Wir sahen, dass ein Nagel im Reifen steckte.|Verb
急激|急激[きゅうげき]|plötzlich, rapide|世界[せかい]の 人口[じんこう]は 急激[きゅうげき]に 増加[ぞうか]している。|Die Weltbevölkerung wächst drastisch.|な-Adjektiv
刺激|刺激[しげき]|Reiz, Anregung|刺激[しげき] 的[てき]な 町[まち]だよ、ニューヨークは。|New York ist schon eine reizvolle Stadt.|Nomen (mit する)
感激|感激[かんげき]|tiefe Rührung, Begeisterung|トムは 感激[かんげき]するだろう。|Tom wird begeistert sein.|Nomen (mit する)
興味|興味[きょうみ]|Interesse|あなたは 音楽[おんがく]に 興味[きょうみ]がありますか。|Interessierst du dich für Musik?|Nomen
興奮|興奮[こうふん]|Aufregung, Erregung|私[わたし]の 体[からだ]は 興奮[こうふん]で 震[ふる]えた。|Mein Körper schauderte vor Aufregung.|Nomen (mit する)
驚き|驚[おどろ]き|Überraschung, Staunen|私[わたし]は 驚[おどろ]きのあまり 口[くち]もきけなかった。|Ich war zu erstaunt, um zu sprechen.|Nomen
驚かす|驚[おどろ]かす|überraschen, erschrecken|彼[かれ]の 英語力[えいごりょく]には 本当[ほんとう]に 驚[おどろ]かされる。|Seine Englischfertigkeiten überraschen mich wirklich.|Verb
じめじめ|じめじめ|feucht, klamm|じめじめした 天気[てんき]が 続[つづ]くと、 気分[きぶん]まで 滅入[めい]る。|Wenn das Wetter weiter so trüb bleibt, geht meine Stimmung auch in den Keller.|Adverb
至る|至[いた]る|gelangen zu, führen zu|幸[さいわ]い、 火事[かじ]は 大事[だいじ]に 至[いた]らぬ 内[うち]に 消[け]し 止[と]められた。|Glücklicherweise konnte das Feuer gelöscht werden, bevor es einen größeren Schaden anrichtete.|Verb
至る所|至[いた]る 所[ところ]|überall|彼[かれ]は 至[いた]る 所[ところ]で 歓迎[かんげい]された。|Er wurde überall freundlich aufgenommen.|Nomen
至急|至急[しきゅう]|dringend, eilig|今[いま]すぐいるんだ、 大[だい] 至急[しきゅう]お 願[ねが]い！|Ich benötige es sofort, bitte beeilen Sie sich!|Nomen
一致|一致[いっち]|Übereinstimmung|彼女[かのじょ]の 行動[こうどう]は 言[い]うことと 一致[いっち]している。|Sagen und Tun stimmen bei ihr überein.|Nomen (mit する)
致す|致[いた]す|tun (bescheiden)|どう 致[いた]しまして。|Nichts zu danken.|Verb
傾く|傾[かたむ]く|sich neigen|太陽[たいよう]が 西[にし]に 傾[かたむ]いた。|Die Sonne neigte sich nach Westen.|Verb
傾ける|傾[かたむ]ける|neigen, schräg stellen|私[わたし]は 彼女[かのじょ]の 話[はなし]に 耳[みみ]を 傾[かたむ]けた。|Ich schenkte ihrer Erzählung Gehör.|Verb
じろじろ|じろじろ|anstarrend, musternd|誰[だれ]かをじろじろ 見[み]ることは 失礼[しつれい]なことです。|Es ist unhöflich, jemanden anzustarren.|Adverb
坂|坂[さか]|Hang, Steigung|私[わたし]たちは 険[けわ]しい 坂[さか]を 登[のぼ]った。|Wir stiegen den steilen Abhang hinauf.|Nomen
狭まる|狭[せば]まる|enger werden|川幅[かわはば]はこの 地点[ちてん]で 急[きゅう]に 狭[せば]まっています。|Der Fluss wird an dieser Stelle plötzlich enger.|Verb
狭める|狭[せば]める|verengen, einengen|ウインドウを 狭[せば]めてもレイアウトが 崩[くず]れない 方法[ほうほう]を 教[おし]えて 下[くだ]さい。|Bitte bringen Sie mir die Vorgehensweise bei, bei der das Layout nicht kaputtgeht, wenn man Fenster verkleinert.|Verb
徐行|徐行[じょこう]|langsames Fahren, Schrittgeschwindigkeit|車[くるま]に 徐行[じょこう]するようにと 合図[あいず]した。|Ich gab dem Auto ein Zeichen, langsam zu fahren.|Nomen (mit する)
硬さ|硬[かた]さ|Härte|この 石[いし]の 硬[かた]さを 調[しら]べてみましょう。|Untersuchen wir einmal die Härte dieses Steins.|Nomen
柔軟|柔軟[じゅうなん]|flexibel, geschmeidig|私[わたし] 達[たち]の 考[かんが]えには 柔軟[じゅうなん] 性[せい]がある。|Unser Denken ist flexibel.|Adjektiv
緊急|緊急[きんきゅう]|dringend, Not-|緊急[きんきゅう]の 時[とき]は 私[わたし]に 連絡[れんらく]すればいいからね。|Wenn es dringend ist, melde dich bei mir, ja?|な-Adjektiv
あり|あり|Ameise|猫[ねこ]に 九生[きゅうせい]あり。|Eine Katze hat neun Leben.|Nomen
緊張|緊張[きんちょう]|Anspannung, Nervosität|彼[かれ]は 目[め]に 見[み]えて 緊張[きんちょう]していた。|Er war sichtlich nervös.|Nomen (mit する)
拡張|拡張[かくちょう]|Erweiterung, Ausbau|公園[こうえん]は 川[かわ]の 所[ところ]まで 拡張[かくちょう]された。|Der Park wurde bis zum Fluss erweitert.|Nomen (mit する)
出張|出張[しゅっちょう]|Dienstreise|彼[かれ]はニューヨーク 出張[しゅっちょう]に 行[い]ってるよ。|Er ist auf Dienstreise in New York.|Nomen (mit する)
衝突|衝突[しょうとつ]|Zusammenstoß, Konflikt|そんなトラックに 衝突[しょうとつ]したら 大変[たいへん]だ。|Ein Zusammenstoß mit so einem Laster wäre echt schlimm.|Nomen (mit する)
煙突|煙突[えんとつ]|Schornstein|煙突[えんとつ]から 煙[けむり]が 立[た]っていた。|Aus dem Schornstein stieg Rauch auf.|Nomen
避ける|避[さ]ける|meiden, ausweichen|注意[ちゅうい] 深[ふか]く 運転[うんてん]すれば、 事故[じこ]は 避[さ]けられます。|Wenn du vorsichtig fährst, kannst du Unfälle vermeiden.|Verb
軍事|軍事[ぐんじ]|Militärwesen, militärisch|ミャンマーは 軍事[ぐんじ] 独裁政権[どくさいせいけん]に 支配[しはい]されている。|Myanmar wird von einer Militärdiktatur regiert.|Nomen
軍|軍[ぐん]|Armee, Militär|この 近[ちか]くに 軍[ぐん]の 基地[きち]がある。|In der Nähe gibt es eine Militärbasis.|Nomen
あいづち|あいづち|bestätigende Zwischenlaute (beim Zuhören)|彼[かれ]はすぐに 相[あい]づちを 打[う]った。|Er gab sofort eine zustimmende Antwort.|Nomen
自衛隊|自衛隊[じえいたい]|Selbstverteidigungsstreitkräfte (Japans)|政府[せいふ]が 自衛[じえい] 隊[たい]に 沖縄[おきなわ]への 災害派遣[さいがいはけん]を 要請[ようせい]した。|Die Regierung bat das Militär eine Katastrophen-Truppe nach Okinawa zu schicken.|Nomen
軍隊|軍隊[ぐんたい]|Armee, Truppen|軍隊[ぐんたい]がいっぱい 来[き]てる。|Es kommen eine Menge Truppen.|Nomen
核|核[かく]|Kern; Atomkern|核[かく] 戦争[せんそう]は 人類[じんるい]を 滅亡[めつぼう]させるだろう。|Ein Atomkrieg würde den Untergang der Menschheit bedeuten.|Nomen
結核|結核[けっかく]|Tuberkulose|最近[さいきん]、 肺[はい] 結核[けっかく]を 患[わずら]う 人[ひと]はほとんどいない。|In letzter Zeit leidet fast niemand an Lungentuberkulose.|Nomen
専攻|専攻[せんこう]|Hauptfach, Spezialisierung|大学[だいがく]では 何[なに]を 専攻[せんこう]されましたか。|Was war Ihr Hauptfach an der Universität?|Nomen (mit する)
攻める|攻[せ]める|angreifen|敵[てき]が 後方[こうほう]から 攻[せ]めてきた。|Der Feind griff von hinten an.|Verb
撃つ|撃[う]つ|schießen|動[うご]くな 撃[う]つぞ。|Keine Bewegung, oder ich schieße.|Verb
かちかち|かちかち|steinhart, festgefroren|聞[き]こえる 音[おと]は 時計[とけい]のカチカチという 音[おと]だけだった。|Nur das Ticken der Uhr war zu hören.|Adjektiv
暴れる|暴[あば]れる|toben, randalieren|お 酒[さけ]を 飲[の]んで 暴[あば]れる 人[ひと]とは 一緒[いっしょ]に 飲[の]みに 行[い]きたくない。|Mit jemandem, der unter Alkoholeinfluss gewalttätig wird, möchte ich nicht trinken gehen.|Verb
襲う|襲[おそ]う|überfallen, angreifen|犬[いぬ]に 襲[おそ]われたことある？|Bist du schon einmal von einem Hund angegriffen worden?|Verb
絶対|絶対[ぜったい]|absolut, auf jeden Fall|他[ほか]の 人[ひと]には 絶対[ぜったい] 言[い]わないでね。|Das darfst du auf keinen Fall den anderen erzählen.|Adverb
気絶|気絶[きぜつ]|Ohnmacht|ショックで 気絶[きぜつ]していたらしいよ。|Er soll vor Schreck ohnmächtig geworden sein.|Nomen (mit する)
消防|消防[しょうぼう]|Brandbekämpfung, Feuerwehr|私[わたし]の 夢[ゆめ]は 消防[しょうぼう] 士[し]になる 事[こと]だ。|Mein Traum ist es, Feuerwehrmann zu sein.|Nomen
嫌う|嫌[きら]う|nicht mögen, verabscheuen|トムに 嫌[きら]われてる 理由[りゆう]が 分[わ]からないのよね。|Es ist mir unersichtlich, warum Tom mich nicht leiden mag.|Verb
嫌がる|嫌[いや]がる|Abneigung zeigen, nicht wollen|彼女[かのじょ]は 彼[かれ]と 結婚[けっこん]するのを 嫌[いや]がっている。|Es widerstrebt ihr, ihn zu heiraten.|Verb
くたくた|くたくた|völlig erschöpft|一日中[いちにちじゅう] 立[た]ちっぱなしだったのでくたくただ。|Ich bin völlig fertig, weil ich den ganzen Tag nur gestanden habe.|Adjektiv
機嫌|機嫌[きげん]|Laune, Stimmung|彼[かれ]は 今[いま] 機嫌[きげん]が 悪[わる]い。|Er hat schlechte Laune.|Nomen
好き嫌い|好[す]き 嫌[きら]い|Vorlieben und Abneigungen|好[す]き 嫌[きら]い 言[い]わないで 全部[ぜんぶ] 食[た]べなさい。|"Mag ich nicht" gibt es nicht. Hier wird alles gegessen, was auf den Teller kommt.|Nomen
抗議|抗議[こうぎ]|Protest|群集[ぐんしゅう]は 人種差別[じんしゅさべつ]に 対[たい]して 抗議[こうぎ]した。|Die Gruppe protestierte gegen Rassendiskriminierung.|Nomen (mit する)
素敵|素敵[すてき]|wunderbar, reizend|私[わたし] 達[たち]はスウェーデンで 素敵[すてき]な 休日[きゅうじつ]を 送[おく]った。|Wir hatten einen wunderschönen Urlaub in Schweden.|Adjektiv
脅かす|脅[おど]かす|erschrecken, bedrohen|脅[おど]かすなよ。|Erschreck mich nicht so.|Verb
権威|権威[けんい]|Autorität, Kapazität|彼[かれ]は 経済学[けいざいがく]の 権威[けんい]です。|Er ist eine Koryphäe in den Wirtschaftswissenschaften.|Nomen
威張る|威張[いば]る|sich aufspielen, angeben|そこ 威張[いば]るところじゃないよね？|Das ist doch nichts, womit man angeben sollte, oder?|Verb
情勢|情勢[じょうせい]|Lage, Verhältnisse|社会[しゃかい] 情勢[じょうせい]に 対[たい]する 不安感[ふあんかん]が 広[ひろ]まっている。|Verunsicherung in Bezug auf die soziale Lage breitet sich aus.|Nomen
こしょう|こしょう|Pfeffer|もう 少[すこ]しこしょうを 利[き]かせなさい。|Tu noch etwas Pfeffer hinein.|Nomen
勢力|勢力[せいりょく]|Einfluss, Macht|彼[かれ]の 勢力[せいりょく]は 国中[くにじゅう]に 及[およ]んでいる。|Sein Einfluss erstreckte sich über das ganze Land.|Nomen
勢い|勢[いきお]い|Schwung, Wucht|台風[たいふう]が 勢[いきお]いを 増[ま]した。|Die Kraft des Taifuns nahm zu.|Nomen
恐れ|恐[おそ]れ|Furcht; Gefahr, Risiko|嵐[あらし]になる 恐[おそ]れがあります。|Es besteht die Gefahr, dass ein Sturm aufzieht.|Nomen
恐れる|恐[おそ]れる|fürchten|彼[かれ]は 死[し]ぬのを 恐[おそ]れている。|Er fürchtet sich vor dem Tod.|Verb
恐らく|恐[おそ]らく|wahrscheinlich, vermutlich|会議[かいぎ]は 恐[おそ]らく 無[な]くなるよ。|Die Konferenz wird vermutlich abgesagt.|Adverb
怖がる|怖[こわ]がる|sich fürchten, Angst zeigen|彼[かれ]は 死[し]ぬのを 怖[こわ]がっている。|Er fürchtet sich vor dem Tod.|Verb
巨大|巨大[きょだい]|riesig, gewaltig|彼[かれ]は 巨大[きょだい]な 家[いえ]に 住[す]んでいる。|Er lebt in einem riesigen Haus.|な-Adjektiv
すべすべ|すべすべ|glatt, samtig|その 肉[にく]はすべすべして 柔[やわ]らかい。|Das Fleisch ist glatt und zart.|Adverb
拒否|拒否[きょひ]|Ablehnung, Weigerung|彼女[かのじょ]が 拒否[きょひ]したらどうしよう。|Was mache ich, wenn sie ablehnt?|Nomen (mit する)
系列|系列[けいれつ]|Unternehmensgruppe, Reihe|この 二[ふた]つの 会社[かいしゃ]は 同[おな]じ 系列[けいれつ]です。|Diese beiden Firmen gehören zur selben Unternehmensgruppe.|Nomen
系統|系統[けいとう]|System, Abstammungslinie|電気[でんき] 系統[けいとう]に 欠点[けってん]があります。|Es gibt einen Fehler im elektrischen System.|Nomen
子孫|子孫[しそん]|Nachkomme|もし 核戦争[かくせんそう]になったら、われわれの 子孫[しそん]はどうなるのでしょう。|Was wird aus unseren Nachfahren, wenn es zu einem Atomkrieg kommen sollte?|Nomen
絹|絹[きぬ]|Seide|私[わたし]は 父[ちち]に 絹[きぬ]のネクタイをあげた。|Ich schenkte meinem Vater eine Seidenkrawatte.|Nomen
維持|維持[いじ]|Erhaltung, Aufrechterhaltung|人[ひと]の 心[こころ]は 分[わ]からないものだから、いい 関係[かんけい]を 維持[いじ]するのは 難[むずか]しい。|Weil man nicht weiß, was in einem Menschen vorgeht, fällt es schwer, eine gute Beziehung aufrechtzuerhalten.|Nomen (mit する)
紳士|紳士[しんし]|Gentleman, Herr|彼[かれ]はどこから 見[み]ても 紳士[しんし]だ。|Er ist in jeder Hinsicht ein Gentleman.|Nomen
せっかく|せっかく|mit Mühe, extra|折角[せっかく]ここまで 歩[ある]いてきたのに、お 店[みせ] 閉[し]まってた。|Jetzt bin ich extra hierhergekommen, und der Laden hat geschlossen.|Adverb
偉大|偉大[いだい]|großartig, bedeutend|彼[かれ]は 偉大[いだい]な 科学者[かがくしゃ]だ。|Er ist ein großartiger Wissenschaftler.|Adjektiv
刀|刀[かたな]|Schwert|彼[かれ]は 鋼[はがね]を 鍛[きた]えて 刀[かたな]を 作[つく]った。|Er schmiedete den Stahl und fertigte ein Schwert an.|Nomen
孤独|孤独[こどく]|Einsamkeit, einsam|彼女[かのじょ]は 孤独[こどく]を 感[かん]じた。|Sie fühlte sich einsam.|な-Adjektiv
事柄|事柄[ことがら]|Angelegenheit, Sachverhalt|これは 重大[じゅうだい]な 事柄[ことがら]だと 考[かんが]えられている。|Das gilt als eine schwerwiegende Angelegenheit.|Nomen
柄|柄[がら]|Muster (auf Stoff)|この 着物[きもの]は 柄[がら]がきれいです。|Dieser Kimono hat ein schönes Muster.|Nomen
柄|柄[え]|Griff, Stiel|この 包丁[ほうちょう]は 柄[え]が 長[なが]いです。|Dieses Küchenmesser hat einen langen Griff.|Nomen
枝|枝[えだ]|Ast, Zweig|枝[えだ]は 雪[ゆき]の 重[おも]みで 曲[ま]がった。|Der Zweig bog sich unter dem Gewicht des Schnees.|Nomen
あきれる|あきれる|fassungslos sein, entgeistert sein|彼女[かのじょ]の 無責任[むせきにん]さには 呆[あき]れてしまう。|Ihre Verantwortungslosigkeit verblüfft mich.|Verb
枯れる|枯[か]れる|verwelken, absterben|スモッグは 植物[しょくぶつ]が 枯[か]れる 原因[げんいん]となる。|Smog führt dazu, dass Pflanzen eingehen.|Verb
木枯らし|木枯[こが]らし|kalter Spätherbstwind|木枯[こが]らしが 吹[ふ]いて、 急[きゅう]に 寒[さむ]くなりました。|Der kalte Spätherbstwind wehte, und es wurde plötzlich kalt.|Nomen
詩|詩[し]|Gedicht, Lyrik|彼女[かのじょ]はたくさんの 詩[し]を 書[か]いた。|Sie schrieb viele Gedichte.|Nomen
詩人|詩人[しじん]|Dichter(in)|彼女[かのじょ]は 詩人[しじん]ではなく 小説家[しょうせつか]だ。|Sie ist nicht eine Dichterin, sondern eine Romanschriftstellerin.|Nomen
誠実|誠実[せいじつ]|Aufrichtigkeit, redlich|彼[かれ]が 誠実[せいじつ]だとは 思[おも]わない。|Ich glaube nicht, dass er aufrichtig ist.|な-Adjektiv
盛ん|盛[さか]ん|blühend, rege|彼[かれ]はまだ 元気[げんき] 盛[さか]んだ。|Er ist immer noch voller Energie.|Adjektiv
謙遜|謙遜[けんそん]|Bescheidenheit|謙遜[けんそん]している 場合[ばあい]じゃないよ。|Jetzt ist nicht die Zeit für Bescheidenheit.|Nomen (mit する)
兼ねる|兼[か]ねる|zugleich sein, verbinden|私[わたし]は 勉強[べんきょう]と 遊[あそ]びを 兼[か]ねている 仕事[しごと]につきたい。|Ich möchte eine Arbeit, die Lernen und Vergnügen verbindet.|Verb
あだな|あだな|Spitzname|彼[かれ]のあだ 名[な]は 言[い]い 得[え]て 妙[みょう]だよね。|Sein Spitzname passt perfekt zu ihm.|Nomen
鋭い|鋭[するど]い|scharf, spitz|あなたはとても 鋭[するど]い。|Du bist sehr scharfsinnig.|Adjektiv
鎖|鎖[くさり]|Kette|犬[いぬ]が 噛[か]み 付[つ]かないように 鎖[くさり]で 繋[つな]いだ 方[ほう]がいいですよ。|Du solltest den Hund besser anketten, damit er nicht beißt.|Nomen
鑑賞|鑑賞[かんしょう]|Kunstgenuss, Betrachtung (von Kunst)|趣味[しゅみ]は 音楽[おんがく] 鑑賞[かんしょう]です。|Mein Hobby ist Musikhören.|Nomen (mit する)
印鑑|印鑑[いんかん]|Namensstempel, Siegel|こちらに 印鑑[いんかん]かサインをお 願[ねが]いします。|Bitte hier stempeln oder unterschreiben.|Nomen
鐘|鐘[かね]|Glocke|教会[きょうかい]の 鐘[かね]が 鳴[な]っている。|Die Kirchenglocken läuten.|Nomen
寿命|寿命[じゅみょう]|Lebensdauer|蝶[ちょう]の 寿命[じゅみょう]は 三日[みっか]です。|Die Lebensdauer eines Schmetterlings beträgt 3 Tage.|Nomen
海水浴|海水浴[かいすいよく]|Baden im Meer|海水[かいすい] 浴[よく]はとても 楽[たの]しい。|Im Meer zu baden macht großen Spaß.|Nomen (mit する)
あふれる|あふれる|überlaufen, überquellen|彼[かれ]は 熱意[ねつい]にあふれている。|Er strotzt vor Enthusiasmus.|Verb
沿岸|沿岸[えんがん]|Küste, Küstengebiet|船[ふね]は 沿岸[えんがん]に 向[む]かって 急[いそ]いで 進[すす]んだ。|Das Schiff fuhr eilig auf die Küste zu.|Nomen
砂浜|砂浜[すなはま]|Sandstrand|数人[すうにん]の 子供[こども]が 砂浜[すなはま]で 遊[あそ]んでいる。|Viele Kinder spielen am Sandstrand.|Nomen
沖|沖[おき]|offene See, vor der Küste|風[かぜ]がやんだら 沖[おき]まで 船[ふね]を 出[だ]そう。|Wenn der Wind nachlässt, fahren wir mit dem Boot aufs offene Meer hinaus.|Nomen
泉|泉[いずみ]|Quelle|村[むら]の 真[ま]ん 中[なか]には、 泉[いずみ]があります。|In der Mitte des Dorfes gibt es eine Quelle.|Nomen
温泉|温泉[おんせん]|heiße Quelle, Thermalbad|日本[にほん]にはたくさんの 温泉[おんせん]がある。|In Japan gibt es viele heiße Quellen.|Nomen
澄む|澄[す]む|klar werden, rein sein|少女[しょうじょ]は 澄[す]んだ 声[こえ]をしている。|Das Mädchen hat eine klare Stimme.|Verb
叫び|叫[さけ]び|Schrei, Aufschrei|私[わたし] 達[たち]は 彼女[かのじょ]の 叫[さけ]びに 驚[おどろ]いた。|Wir erschraken über ihren Schrei.|Nomen
いか|いか|Tintenfisch|この 指輪[ゆびわ]、いかほどですか？|Was kostet dieser Ring?|Nomen
叫ぶ|叫[さけ]ぶ|schreien, rufen|彼女[かのじょ]が 叫[さけ]ぶのを 聞[き]いた。|Wir hörten sie schreien.|Verb
喫煙|喫煙[きつえん]|Rauchen|あなたは 喫煙[きつえん]に 反対[はんたい]ですか。|Sind Sie gegen das Rauchen?|Nomen (mit する)
懸ける|懸[か]ける|aufs Spiel setzen, einsetzen|彼女[かのじょ]は 命[いのち]を 懸[か]けて 子供[こども]を 守[まも]ろうとした。|Sie versuchte, ihr Kind unter Einsatz ihres Lebens zu schützen.|Verb
恩|恩[おん]|Dankesschuld, Güte|ご 恩[おん]は 一生[いっしょう] 忘[わす]れません。|Ich werde Ihre Freundlichkeit, so lange ich lebe, nicht vergessen.|Nomen
市街|市街[しがい]|Stadtgebiet, Straßen der Stadt|その 市街[しがい] 地図[ちず]をもう 一度[いちど]よく 見[み]て 下[くだ]さい。|Schaut noch einmal gut den Stadtplan an.|Nomen
粉|粉[こな]|Pulver, Mehl|私[わたし]たちは 小麦[こむぎ]をひいて 粉[こな]にする。|Wir mahlen Weizen zu Mehl.|Nomen
小麦|小麦[こむぎ]|Weizen|麺[めん]はふつう 小麦粉[こむぎこ]から 作[つく]られる。|Nudeln werden normalerweise aus Weizenmehl hergestellt.|Nomen
小麦粉|小麦粉[こむぎこ]|Weizenmehl|パンは 小麦粉[こむぎこ]で 作[つく]られる。|Brot wird aus Mehl gemacht.|Nomen
いつのまに|いつのまに|wann eigentlich, unbemerkt|いつのまにかデータがなくなってる。|Unbemerkt sind die Daten verschwunden.|Adverb
大麦|大麦[おおむぎ]|Gerste|大麦[おおむぎ]と 小麦[こむぎ]を 一目[ひとめ] 見[み]て 見分[みわ]けられますか。|Kannst du Gerste und Weizen auf den ersten Blick unterscheiden?|Nomen
炊事|炊事[すいじ]|Kochen, Küchenarbeit|私[わたし]は 炊事[すいじ]が 全然[ぜんぜん]できない。|Ich kann überhaupt nicht kochen.|Nomen (mit する)
暦|暦[こよみ]|Kalender|壁[かべ]に 新[あたら]しい 暦[こよみ]をかけました。|Ich habe einen neuen Kalender an die Wand gehängt.|Nomen
皮|皮[かわ]|Haut, Schale, Leder|モモの 皮[かわ]は 傷[いた]みやすい。|Die Haut eines Pfirsichs ist verletztlich.|Nomen
毛皮|毛皮[けがわ]|Pelz, Fell|これってミンクの 毛皮[けがわ]なの？|Ist das der Pelz von einem Nerz?|Nomen
毛糸|毛糸[けいと]|Wolle, Wollgarn|彼女[かのじょ]は 毛糸[けいと]でセーターを 編[あ]んでいる。|Sie strickt einen Pullover aus Wolle.|Nomen
尾|尾[お]|Schwanz|私[わたし]の 犬[いぬ]が 尾[お]を 振[ふ]っている。|Mein Hund wedelt mit dem Schwanz.|Nomen
インフレーション|インフレーション|Inflation|インフレーションで 物[もの]の 値段[ねだん]が 上[あ]がりました。|Durch die Inflation sind die Preise gestiegen.|Nomen
白髪|白髪[しらが]|weißes Haar, graues Haar|店[みせ]の 外[そと]では 白髪[しらが]の 男性[だんせい]がアコーディオンを 弾[ひ]いていました。|Vor dem Laden spielte ein Mann mit weißem Haar Ziehharmonika.|Nomen
耳鼻科|耳鼻科[じびか]|HNO (Hals-Nasen-Ohren-Heilkunde)|日曜日[にちようび]にあるパーティで、 耳鼻[じび] 科[か] 医[い]をしてる 方[かた]と 会[あ]いました。|Am Sonntag traf ich auf einer Party einen Hals-Nasen-Ohrenarzt.|Nomen
唇|唇[くちびる]|Lippe|あなたの 唇[くちびる]きれいね。|Du hast schöne Lippen.|Nomen
解釈|解釈[かいしゃく]|Auslegung, Interpretation|彼[かれ]の 言葉[ことば]をどう 解釈[かいしゃく]していいのか 分[わ]からない。|Ich weiß nicht, wie ich seine Worte deuten soll.|Nomen (mit する)
居間|居間[いま]|Wohnzimmer|居間[いま]の 電気[でんき]は 消[け]したの？|Hast du im Wohnzimmer das Licht ausgemacht?|Nomen
居る|居[お]る|da sein (bescheiden)|父[ちち]は 今[いま]、 家[いえ]に 居[お]りません。|Mein Vater ist im Moment nicht zu Hause.|Verb
一層|一層[いっそう]|noch mehr, umso mehr|よい 天気[てんき]だったので 私[わたし] 達[たち]は 一層[いっそう] 楽[たの]しかった。|Durch das gute Wetter waren wir umso besser gelaunt.|Adverb
ウィークエンド|ウィークエンド|Wochenende|ウィークエンドは 家族[かぞく]と 過[す]ごします。|Das Wochenende verbringe ich mit meiner Familie.|Nomen
高層|高層[こうそう]|Hochhaus-; hohe Luftschicht|その 高層[こうそう]ビルの 上[うえ]からは 町[まち]がよく 見[み]える。|Oben auf dem Wolkenkratzer kann man die Stadt gut betrachten.|Nomen
覆う|覆[おお]う|bedecken, verhüllen|丘[おか]は 雪[ゆき]に 覆[おお]われていた。|Der Hügel war mit Schnee bedeckt.|Verb
戸籍|戸籍[こせき]|Familienregister|彼女[かのじょ]はまだ 夫[おっと]の 戸籍[こせき]に 入[はい]っていない。|Sie ist noch nicht in das Familienregister ihres Mannes eingetragen.|Nomen
ガラス戸|ガラス 戸[ど]|Glastür|ガラス 戸[ど]を 開[あ]けて 庭[にわ]に 出[で]ました。|Ich öffnete die Glastür und ging in den Garten hinaus.|Nomen
新鮮|新鮮[しんせん]|frisch|これらの 卵[たまご]が 全部[ぜんぶ] 新鮮[しんせん]というわけではない。|Nicht alle diese Eier sind frisch.|Adjektiv
鮮やか|鮮[あざ]やか|leuchtend, lebhaft (Farbe)|鮮[あざ]やかな 色[いろ]を 使[つか]っているのが 彼[かれ]の 絵[え]の 特徴[とくちょう]だ。|Die Verwendung heller Farben ist ein Charakteristikum seiner Bilder.|Adjektiv
群集|群集[ぐんしゅう]|Menschenmenge|群集[ぐんしゅう]が 大統領[だいとうりょう]を 見送[みおく]りに 空港[くうこう]に 群[むら]がった。|Die Menge versammelte sich am Flughafen, um den Präsidenten zu verabschieden.|Nomen (mit する)
郡|郡[ぐん]|Landkreis|これは 豊能[とよの] 郡[ぐん]の 地図[ちず]です。|Dies ist eine Karte des Landkreises Toyono.|Nomen
うがい|うがい|Gurgeln|うがいはしたの？|Hast du gegurgelt?|Nomen (mit する)
君|君[きみ]|du (unter Männern, zu Jüngeren)|君[きみ]がショックを 受[う]けてるのは 知[し]ってるよ。|Ich weiß, dass du unter Schock stehst.|Nomen
脂|脂[あぶら]|Fett (tierisch)|肌[はだ]が 脂[あぶら]っぽいのです。|Ich habe fettige Haut.|Nomen
脂肪|脂肪[しぼう]|Fett, Fettgewebe|脂肪[しぼう] 分[ぶん]は 減[へ]らしたほうがいいですね。|Den Fettanteil sollten Sie besser verringern.|Nomen
胃腸|胃腸[いちょう]|Magen und Darm|トムは 胃腸[いちょう]が 弱[よわ]い。|Tom hat einen schwachen Magen.|Nomen
肝心|肝心[かんじん]|entscheidend, wesentlich|何事[なにごと]も 最初[さいしょ]が 肝心[かんじん]だよな。|Bei allen Dingen ist der Anfang entscheidend.|な-Adjektiv
山脈|山脈[さんみゃく]|Gebirge, Gebirgskette|アルプス 山脈[さんみゃく]はヨーロッパの 中央[ちゅうおう]にある。|Die Alpen liegen mitten in Europa.|Nomen
暮らす|暮[く]らす|leben, seinen Alltag verbringen|両親[りょうしん]は 田舎[いなか]で 気楽[きらく]に 暮[く]らしています。|Meine Eltern führen ein sorgloses Leben auf dem Lande.|Verb
うきうき|うきうき|beschwingt, in freudiger Erwartung|寒[さむ]さの 後[あと]の 暖[あたた]かさで 我々[われわれ]はうきうきした。|Die Wärme nach der Kälte machte uns ganz beschwingt.|Adverb
暮らし|暮[く]らし|Leben, Lebensunterhalt|彼[かれ]らは 貧[まず]しい 暮[く]らしをしている。|Sie leben in Armut.|Nomen
暮れ|暮[く]れ|Jahresende; Abenddämmerung|薄[うす] 暮[く]れが 迫[せま]った。|Die Abenddämmerung rückte heran.|Nomen
暮れる|暮[く]れる|dunkel werden, zu Ende gehen|日[ひ]が 暮[く]れてからは 外出[がいしゅつ]してはいけません。|Geh nicht nach Anbruch der Dunkelheit aus dem Haus.|Verb
お歳暮|お 歳暮[せいぼ]|Geschenk zum Jahresende|お 歳暮[せいぼ]は 日本[にほん] 独自[どくじ]の 習慣[しゅうかん]の 一[ひと]つである。|Jahresendgeschenke sind einer der Bräuche, die es nur in Japan gibt.|Nomen
芝生|芝生[しばふ]|Rasen|私[わたし]の 犬[いぬ]はよく 芝生[しばふ]の 上[うえ]で 横[よこ]になる。|Mein Hund legt sich oft auf den Rasen.|Nomen
茎|茎[くき]|Stängel|その 茎[くき]は 君[きみ]の 小指[こゆび]よりやや 太[ふと]い。|Der Stängel ist etwas dicker als dein kleiner Finger.|Nomen
推薦|推薦[すいせん]|Empfehlung|このレストランは 推薦[すいせん]できます。|Ich kann dieses Restaurant empfehlen.|Nomen (mit する)
うつむく|うつむく|den Kopf senken, zu Boden blicken|みんなうつむいてる。|Alle blicken zu Boden.|Verb
荒れる|荒[あ]れる|stürmisch sein, verwildern|村[むら]への 道路[どうろ]はとても 荒[あ]れています。|Die Straße zum Dorf ist sehr holprig.|Verb
荒い|荒[あら]い|wild, unbeherrscht; verschwenderisch|彼[かれ]は 運転[うんてん]が 荒[あら]い。|Er fährt sehr wild.|Adjektiv
荒い|荒[あら]い|rau, grob, heftig|彼女[かのじょ]は 言葉使[ことばづか]いが 荒[あら]い。|Sie hat eine grobe Ausdrucksweise.|Adjektiv
荒す|荒[あら]す|verwüsten, durchwühlen|動物[どうぶつ]が 畑[はたけ]を 荒[あら]しました。|Tiere haben das Feld verwüstet.|Verb
慌ただしい|慌[あわ]ただしい|hektisch, geschäftig|慌[あわ]ただしい 場所[ばしょ]だな。|Was für ein hektischer Ort.|Adjektiv
慌てる|慌[あわ]てる|in Hast geraten, die Fassung verlieren|彼女[かのじょ]は 慌[あわ]てて 部屋[へや]を 出[で]ていった。|Sie verließ Hals über Kopf ihr Zimmer.|Verb
儀式|儀式[ぎしき]|Zeremonie, Ritual|それはとても 伝統的[でんとうてき]な 儀式[ぎしき]だった。|Es war eine sehr traditionelle Zeremonie.|Nomen
うなずく|うなずく|nicken|彼[かれ]は 私[わたし]のいるのに 気[き]づいてうなずいた。|Er bemerkte meine Anwesenheit und nickte mir zu.|Verb
行儀|行儀[ぎょうぎ]|Manieren, Benehmen|彼女[かのじょ]は 息子[むすこ]に 家[いえ]で 行儀[ぎょうぎ]よくするように 言[い]った。|Sie sagte ihrem Sohn, er solle sich zu Hause gut benehmen.|Nomen
犠牲|犠牲[ぎせい]|Opfer|彼[かれ]は 健康[けんこう]を 犠牲[ぎせい]にして 仕事[しごと]を 仕上[しあ]げた。|Er hat die Arbeit unter Aufopferung seiner Gesundheit fertiggestellt.|Nomen
赤ん坊|赤[あか]ん 坊[ぼう]|Baby, Säugling|赤[あか]ん 坊[ぼう]はよく 転[ころ]ぶ。|Babys fallen oft um.|Nomen
お坊さん|お 坊[ぼう]さん|buddhistischer Mönch|トムって、お 坊[ぼう]さんなんだよね？|Tom ist doch Mönch, oder?|Nomen
国旗|国旗[こっき]|Nationalflagge|これは 日本[にほん]の 国旗[こっき]です。|Das ist die Fahne von Japan.|Nomen
筋肉|筋肉[きんにく]|Muskel|心臓[しんぞう]は 筋肉[きんにく]でできている。|Das Herz besteht aus Muskeln.|Nomen
筋道|筋道[すじみち]|Logik, roter Faden|私[わたし]は 彼[かれ]の 議論[ぎろん]の 筋道[すじみち]がわからなくなった。|Ich habe den roten Faden in seiner Argumentation verloren.|Nomen
筋|筋[すじ]|Sehne, Muskel; Handlungsstrang|トムの 要求[ようきゅう]は 筋[すじ]が 通[とお]ってるよ。|Was Tom fordert, ist vernünftig.|Nomen
おだてる|おだてる|schmeicheln, Honig ums Maul schmieren|彼[かれ]をおだてても 何[なに]も 出[で]ませんよ。|Auch wenn du ihm schmeichelst, springt nichts dabei heraus.|Verb
裂ける|裂[さ]ける|reißen, aufplatzen|釘[くぎ]で 彼[かれ]の 上着[うわぎ]が 裂[さ]けた。|Seine Jacke riss an einem Nagel ein.|Verb
座布団|座布団[ざぶとん]|Sitzkissen|座布団[ざぶとん]に 座[すわ]ってください。|Setzen Sie sich bitte auf das Sitzkissen.|Nomen
自己|自己[じこ]|das Selbst, selbst|私[わたし]って 自己[じこ] 中[ちゅう]だな。|Ich bin selbstsüchtig.|Nomen
抱える|抱[かか]える|in den Armen tragen; haben (Probleme)|トムは、 深刻[しんこく]な 問題[もんだい]を 抱[かか]えている。|Tom hat ein ernstes Problem.|Verb
抱く|抱[いだ]く|umarmen; hegen (Gefühl, Ziel)|私[わたし]は 疑問[ぎもん]を 抱[いだ]いた。|Ich hatte Zweifel.|Verb
句|句[く]|Phrase, Satzglied; Vers|私[わたし]は 単語[たんご]や 句[く]をたくさん 覚[おぼ]えなければならない。|Ich muss viele Wörter und Wendungen auswendig lernen.|Nomen
慣用句|慣用句[かんようく]|Redewendung|ことわざや 慣用[かんよう] 句[く]を 学[まな]んで 表現[ひょうげん]の 幅[はば]を 広[ひろ]げる。|Man lernt Sprichwörter und Redewendungen, um seinen Ausdruck zu erweitern.|Nomen
かかと|かかと|Ferse; Absatz|アキレスはかかとを 除[のぞ]いては 不死身[ふじみ]だった。|Achilles war außer an seiner Ferse unverwundbar.|Nomen
下旬|下旬[げじゅん]|letztes Monatsdrittel|下旬[げじゅん]はいつも 閉店[へいてん]セールやってる。|Gegen Monatsende gibt es immer Räumungsverkauf.|Nomen
上旬|上旬[じょうじゅん]|erstes Monatsdrittel|来月[らいげつ]の 上旬[じょうじゅん]に 旅行[りょこう]します。|Anfang nächsten Monats verreise ich.|Nomen
飽きる|飽[あ]きる|überdrüssig werden, genug haben|僕[ぼく]はテレビを 見[み]るのに 飽[あ]きたよ。|Ich habe es satt, fern zu sehen.|Verb
飾り|飾[かざ]り|Schmuck, Dekoration|ケーキの 飾[かざ]りがきらきらしていてすごく 綺麗[きれい]だ。|Die Verzierung der Torte glitzert und ist wunderschön.|Nomen
餌|餌[えさ]|Futter, Köder|彼[かれ]は、 犬[いぬ]に 餌[えさ]をやるのを 忘[わす]れてしまった。|Er hat vergessen dem Hund Futter zu geben.|Nomen
旧|旧[きゅう]|alt, ehemalig|旧[きゅう] 大統領[だいとうりょう]の 死亡[しぼう]が 報告[ほうこく]されました。|Der Tod des ehemaligen Präsidenten wurde gemeldet.|Nomen
育児|育児[いくじ]|Kinderbetreuung, Kindererziehung|育児[いくじ]のために 仕事[しごと]を 辞[や]めようと 考[かんが]えたことはありますか？|Hast du schon mal überlegt, für die Kindererziehung den Job zu kündigen?|Nomen
がさがさ|がさがさ|raschelnd; rau, trocken|草[くさ]むらでガサガサと 音[おと]がしたと 思[おも]ったら、 猫[ねこ]が 飛[と]び 出[だ]してきた。|Gerade als ich dachte, dass es im Gebüsch raschelt, kam eine Katze herausgesprungen.|Adverb
小児科|小児科[しょうにか]|Kinderheilkunde, Kinderarzt|トムは 小児[しょうに] 科[か] 医[い]ではありません。|Tom ist kein Kinderarzt.|Nomen
姓名|姓名[せいめい]|voller Name|あなたの 姓名[せいめい]を 教[おし]えてください。|Nennen Sie mir bitte Ihren vollen Namen.|Nomen
姓|姓[せい]|Familienname|彼女[かのじょ]は 結婚[けっこん] 前[まえ]スミス 姓[せい]だった。|Sie war vor ihrer Heirat eine Schmidt.|Nomen
幼い|幼[おさな]い|klein, jung; kindlich|幼[おさな]かった 頃[ころ]は、よく 人形[にんぎょう]と 遊[あそ]んでいました。|Als ich klein war, habe ich oft mit Puppen gespielt.|Adjektiv
眼科|眼科[がんか]|Augenheilkunde, Augenarzt|私[わたし]は 眼科[がんか] 医[い]です。|Ich bin Augenarzt.|Nomen
近眼|近眼[きんがん]|Kurzsichtigkeit|十[じゅう] 人[にん]に 一人[ひとり]は 近眼[きんがん]である。|Eine von zehn Personen ist kurzsichtig.|Nomen
居眠り|居眠[いねむ]り|Einnicken, Nickerchen|授業中[じゅぎょうちゅう]、 居眠[いねむ]りしてた。|Ich habe im Unterricht gepennt.|Nomen (mit する)
一瞬|一瞬[いっしゅん]|ein Augenblick|それは、 一瞬[いっしゅん]で 変[か]わりました。|In einem einzigen Augenblick hat es sich verändert.|Nomen
かじる|かじる|knabbern, anbeißen|痛[いた]い 痛[いた]い 痛[いた]い！ 僕[ぼく]の 耳[みみ]かじらないでよ！|Aua! Knabbere mir nicht am Ohr!|Verb
瞬間|瞬間[しゅんかん]|Augenblick, Moment|彼[かれ]らは 目[め]と 目[め]が 合[あ]った 瞬間[しゅんかん]に 恋[こい]に 落[お]ちた。|Sie verliebten sich in dem Moment, als sich ihre Augen trafen.|Nomen
睡眠|睡眠[すいみん]|Schlaf|睡眠[すいみん]をとったほうがいい。|Es wäre besser schlafen zu gehen.|Nomen (mit する)
垂直|垂直[すいちょく]|senkrecht, vertikal|彼[かれ]は 紙[かみ]のうえに 垂直[すいちょく]な 線[せん]を 何[なん] 本[ほん]か 引[ひ]いた。|Er zog einige senkrechte Linien auf das Papier.|な-Adjektiv
心掛ける|心掛[こころが]ける|beherzigen, sich bemühen um|常[つね]に 前向[まえむ]きでいようと 心掛[こころが]けているんだ。|Ich bemühe mich, immer positiv zu bleiben.|Verb
腰掛ける|腰掛[こしか]ける|sich hinsetzen|彼[かれ]はベッドに 腰掛[こしか]けた。|Er saß auf dem Bett.|Verb
追い掛ける|追[お]い 掛[か]ける|hinterherlaufen, verfolgen|犬[いぬ]がボールを 追[お]い 掛[か]けています。|Der Hund läuft dem Ball hinterher.|Verb
腰掛け|腰掛[こしか]け|Hocker, Sitzgelegenheit|彼[かれ]はベンチに 腰掛[こしか]けタバコを 吸[す]った。|Er setzte sich auf eine Bank und rauchte eine Zigarette.|Nomen
がぶがぶ|がぶがぶ|gluckernd, in großen Schlucken|彼[かれ]は 水[みず]をがぶがぶ 飲[の]みました。|Er trank das Wasser in großen Schlucken.|Adverb
お目に掛かる|お 目[め]に 掛[か]かる|treffen (bescheiden)|お 初[はつ]にお 目[め]に 掛[か]かります。|Es ist mir eine Ehre, Sie zum ersten Mal zu treffen.|Verb
拝む|拝[おが]む|anbeten, verehren|毎日[まいにち]、 拝[おが]んでます。|Ich bete täglich.|Verb
括弧|括弧[かっこ]|Klammer|括弧[かっこ]に 当[あ]てはまる 単語[たんご]を 答[こた]えなさい。|Nenne das Wort, das in die Klammer passt.|Nomen (mit する)
指揮|指揮[しき]|Leitung, Dirigieren, Kommando|トムは 世界的[せかいてき]に 有名[ゆうめい]な 指揮[しき] 者[しゃ]です。|Tom ist ein weltberühmter Dirigent.|Nomen (mit する)
輝く|輝[かがや]く|strahlen, glänzen|太陽[たいよう]が 輝[かがや]いている。|Die Sonne strahlt.|Verb
抑える|抑[おさ]える|unterdrücken, zurückhalten|私[わたし]は 怒[いか]りを 抑[おさ]えることが 出来[でき]なかった。|Ich konnte meine Wut nicht unterdrücken.|Verb
信仰|信仰[しんこう]|Glaube|彼[かれ]らは 信仰[しんこう]の 自由[じゆう]のために 戦[たたか]った。|Sie kämpften für die Religionsfreiheit.|Nomen (mit する)
からす|からす|Krähe, Rabe|屋根[やね]の 上[うえ]にいる 鳥[とり]はからすです。|Der Vogel auf dem Dach ist eine Krähe.|Nomen
偶然|偶然[ぐうぜん]|Zufall, zufällig|それはまったく 偶然[ぐうぜん]に 起[お]こった。|Das ist ganz zufällig passiert.|な-Adjektiv
偶数|偶数[ぐうすう]|gerade Zahl|偶数[ぐうすう] 掛[か]ける 奇数[きすう]は 偶数[ぐうすう]、 奇数[きすう] 掛[か]ける 奇数[きすう]は 奇数[きすう]。|Gerade mal ungerade ergibt gerade, ungerade mal ungerade ergibt ungerade.|Nomen
隅|隅[すみ]|Ecke, Winkel|トムは 部屋[へや]の 隅[すみ]に 立[た]っている。|Tom steht in der Ecke des Zimmers.|Nomen
城|城[しろ]|Burg, Schloss|あれは 古[ふる]いお 城[しろ]です。|Das ist eine alte Burg.|Nomen
栽培|栽培[さいばい]|Anbau, Zucht (Pflanzen)|トムは 庭[にわ]で 苺[いちご]を 栽培[さいばい]している。|Tom baut in seinem Garten Erdbeeren an.|Nomen (mit する)
警戒|警戒[けいかい]|Wachsamkeit, Vorsicht|警戒[けいかい]が 必要[ひつよう]だ。|Wachsamkeit ist nötig.|Nomen (mit する)
幾ら|幾[いく]ら|wie sehr auch, egal wie viel|保険料[ほけんりょう]は 幾[いく]らですか。|Wie hoch ist die Versicherungsprämie?|Adverb
伺う|伺[うかが]う|fragen, hören, besuchen (bescheiden)|お 名前[なまえ]をお 伺[うかが]いしてもよろしいですか。|Darf ich Sie nach Ihrem Namen fragen?|Verb
がん|がん|Krebs (Krankheit)|父[ちち]はがんで 死[し]んだ。|Mein Vater starb an Krebs.|Nomen
後悔|後悔[こうかい]|Reue, Bedauern|私[わたし]は 教員[きょういん]になったことを 後悔[こうかい]している。|Ich bereue, Lehrerin geworden zu sein.|Nomen (mit する)
悔しい|悔[くや]しい|ärgerlich, frustrierend|決勝戦[けっしょうせん]で 負[ま]けるほど 悔[くや]しいものはない。|Nichts ist bedauerlicher, als im Finale zu verlieren.|Adjektiv
俺|俺[おれ]|ich (rau, männlich)|俺[おれ]のサングラスはお 前[まえ]のより 新[あたら]しいよ。|Meine Sonnenbrille ist neuer als deine.|Nomen
相撲|相撲[すもう]|Sumo (japanisches Ringen)|君[きみ]は 相撲[すもう]に 詳[くわ]しいね。|Du kennst dich ja gut mit Sumō aus.|Nomen
偏る|偏[かたよ]る|einseitig sein, unausgewogen sein|今日[きょう]は 私[わたし]は 受講[じゅこう]する 講義[こうぎ]はすべて 午前中[ごぜんちゅう]に 偏[かたよ]っている。|Alle Vorlesungen, in die ich heute gehe, sind am Vormittag.|Verb
一遍に|一遍[いっぺん]に|auf einmal, zugleich|一遍[いっぺん]に 二[ふた]つのことはできないよ。|Zwei Dinge auf einmal kann ich nicht tun.|Adverb
宗教|宗教[しゅうきょう]|Religion|宗教[しゅうきょう]と 哲学[てつがく]は 何[なに]が 違[ちが]うのですか？|Wie unterscheiden sich Religion und Philosophie?|Nomen
ぎっしり|ぎっしり|dicht gepackt, vollgestopft|彼[かれ]は 棚[たな]に 本[ほん]をぎっしり 詰[つ]め 込[こ]んだ。|Er zwängte die Bücher in das Regal.|Adverb
審議|審議[しんぎ]|Beratung, Erörterung|事件[じけん]を 審議[しんぎ]したのはどの 裁判官[さいばんかん]ですか。|Welcher Richter hat den Fall angehört?|Nomen (mit する)
憲法|憲法[けんぽう]|Verfassung|思想[しそう]の 自由[じゆう]は 憲法[けんぽう]で 保証[ほしょう]されている。|Gedankenfreiheit wird durch die Verfassung garantiert.|Nomen
衰える|衰[おとろ]える|schwächer werden, nachlassen|私[わたし]は 体力[たいりょく]が 衰[おとろ]えた。|Meine Kraft hat nachgelassen.|Verb
惜しむ|惜[お]しむ|bedauern; geizen mit|社長[しゃちょう]は 我々[われわれ]の 給料[きゅうりょう]を 少[すこ]しあげることすら 惜[お]しんだ。|Unser Chef gewährte uns selbst die kleinste Lohnerhöhung nur ungern.|Verb
惜しい|惜[お]しい|schade, knapp daneben|これはまだ 捨[す]てるには 惜[お]しい。|Es ist noch zu schade zum Wegwerfen.|Adjektiv
恨み|恨[うら]み|Groll, Hass|君[きみ]にはなんの 恨[うら]みもない。|Ich hege keinerlei Groll gegen dich.|Nomen
恨む|恨[うら]む|grollen, übel nehmen|セーラは 恨[うら]むような 女[おんな]の 子[こ]ではないだろうが。|Sarah ist wohl kein Mädchen von der nachtragenden Sorte.|Verb
ぎゅうぎゅう|ぎゅうぎゅう|dicht gedrängt, vollgequetscht|エレベーターの 中[なか]でぎゅうぎゅう 詰[つ]めになった。|Im Aufzug standen wir dicht gedrängt.|Adverb
覚悟|覚悟[かくご]|Bereitschaft, innere Vorbereitung|トムは 死[し]を 覚悟[かくご]していなかった。|Tom war noch nicht bereit zu sterben.|Nomen
怪しい|怪[あや]しい|verdächtig, zweifelhaft|彼[かれ]が 怪[あや]しい。|Er sieht verdächtig aus.|Adjektiv
怪しむ|怪[あや]しむ|Verdacht schöpfen, misstrauen|警察[けいさつ]は 彼[かれ]を 怪[あや]しんでいることがトムは 分[わ]かる。|Tom merkt, dass die Polizei ihn verdächtigt.|Verb
自慢|自慢[じまん]|Stolz, Prahlen|彼女[かのじょ]は 料理[りょうり]がうまいと 自慢[じまん]している。|Sie prahlt damit, eine gute Köchin zu sein.|Nomen (mit する)
食卓|食卓[しょくたく]|Esstisch|母[はは]は 食卓[しょくたく]の 準備[じゅんび]をした。|Die Mutter deckte den Tisch.|Nomen
歓迎|歓迎[かんげい]|Willkommen, Empfang|来[き]たい 人[ひと]は 誰[だれ]でも 歓迎[かんげい]するよ。|Jeder, der kommen möchte, ist willkommen!|Nomen (mit する)
勧める|勧[すす]める|empfehlen, raten|彼[かれ]は 早[はや]く 出発[しゅっぱつ]することを 勧[すす]めた。|Er empfahl, früh aufzubrechen.|Verb
ぎょうざ|ぎょうざ|Gyōza (gefüllte Teigtaschen)|子供[こども]が 楽[たの]しそうにギョウザを 包[つつ]んでいる。|Das Kind füllt mit sichtlichem Spaß Gyōza.|Nomen
焦点|焦点[しょうてん]|Brennpunkt, Fokus|顕微鏡[けんびきょう]の 焦点[しょうてん]を 合[あ]わせなさい。|Stell den Fokus des Mikroskops ein.|Nomen
焦る|焦[あせ]る|ungeduldig werden, in Hast geraten|焦[あせ]らなくてもいいですよ。|Du brauchst dich nicht beeilen.|Verb
焦げる|焦[こ]げる|anbrennen|何[なに]かが 焦[こ]げてる 匂[にお]いがする。|Irgendwas riecht angebrannt.|Verb
英雄|英雄[えいゆう]|Held(in)|私[わたし]は 英雄[えいゆう]などではない。|Ich bin kein Held.|Nomen
雄|雄[おす]|Männchen (Tier)|この 犬[いぬ]は 雄[おす]です。|Dieser Hund ist ein Männchen.|Nomen
獲得|獲得[かくとく]|Erwerb, Gewinn|我々[われわれ]は 平和[へいわ]を 獲得[かくとく]するよう 努力[どりょく]すべきだ。|Wir müssen versuchen, Frieden zu erlangen.|Nomen (mit する)
収穫|収穫[しゅうかく]|Ernte|普通[ふつう]、 我[わ]が 家[や]では 収穫[しゅうかく] 感謝祭[かんしゃさい]の 時[とき]に 七面鳥[しちめんちょう]を 食[た]べます。|Bei uns in der Familie gibt es zum Erntedankfest gewöhnlich Truthahn.|Nomen (mit する)
稲|稲[いね]|Reispflanze|農夫[のうふ] 達[たち]は 稲[いね]を 植[う]えていた。|Die Bauern pflanzten Reis.|Nomen
きれ|きれ|Stoffstück, Stoffrest|余[あま]ったきれで 袋[ふくろ]を 作[つく]りました。|Aus dem übrigen Stoffrest habe ich einen Beutel gemacht.|Nomen
稼ぐ|稼[かせ]ぐ|verdienen (Geld)|お 金[かね]を 稼[かせ]ぎたいならアメリカが 一番[いちばん]だ。|Es ist wundervoll in Amerika zu sein, wenn man hier ist, um Geld zu verdienen.|Verb
原稿用紙|原稿用紙[げんこうようし]|Manuskriptpapier (mit Kästchen)|原稿用紙[げんこうようし]に 作文[さくぶん]を 書[か]きました。|Ich habe den Aufsatz auf Manuskriptpapier geschrieben.|Nomen
穏やか|穏[おだ]やか|ruhig, friedlich, mild|トムはとても 穏[おだ]やかだった。|Tom war sehr ruhig.|Adjektiv
隠す|隠[かく]す|verstecken, verbergen|どこに 隠[かく]されているんですか？|Wo ist es versteckt?|Verb
お陰|お 陰[かげ]|Dank, dank (jemandem)|事故[じこ]のお 陰[かげ]で 私[わたし]は 注意[ちゅうい] 深[ふか]くなった。|Durch den Unfall bin ich vorsichtig geworden.|Nomen
陰|陰[かげ]|Schatten; im Verborgenen|カーテンの 陰[かげ]に 隠[かく]れているのは 誰[だれ]？|Wer versteckt sich hinter dem Vorhang?|Nomen
塊|塊[かたまり]|Klumpen, Brocken|飴[あめ]は 糖分[とうぶん]の 塊[かたまり]だ。|Ein Bonbon ist ein reiner Zuckerklumpen.|Nomen
くすぐる|くすぐる|kitzeln|トムはメアリーをくすぐった。|Tom kitzelte Maria.|Verb
卑しい|卑[いや]しい|gierig, niedrig, gemein|彼[かれ]は 卑[いや]しい 振舞[ふるま]いをした。|Er hatte ein vulgäres Verhalten.|Adjektiv
砕く|砕[くだ]く|zerkleinern, zerschlagen|愛[あい]は 人[ひと]の 心[こころ]を 砕[くだ]くこともできるのさ。|Liebe kann einem auch das Herz brechen.|Verb
砕ける|砕[くだ]ける|zerbrechen, zersplittern|重[おも]みで 氷[こおり]が 砕[くだ]けた。|Das Eis zerbrach unter dem Gewicht.|Verb
基礎|基礎[きそ]|Grundlage, Fundament|数学[すうがく]はすべての 科学[かがく]の 基礎[きそ]である。|Mathematik ist die Grundlage aller Wissenschaften.|Nomen
貝|貝[かい]|Muschel|砂浜[すなはま]でいろんな 貝[かい]を 拾[ひろ]うのは 実[じつ]に 楽[たの]しい。|Es macht wirklich Spaß, am Strand unterschiedliche Muscheln zu sammeln.|Nomen
賢い|賢[かしこ]い|klug, gescheit|彼女[かのじょ]はとても 賢[かしこ]い 人[ひと]だ。|Sie ist sehr klug.|Adjektiv
頻りに|頻[しき]りに|häufig, unablässig|彼[かれ]は 頻[しき]りに 時計[とけい]を 見[み]ています。|Er schaut unablässig auf die Uhr.|Adverb
げらげら|げらげら|schallend, laut (lachen)|みんなげらげら 笑[わら]いました。|Alle lachten schallend.|Adverb
頑固|頑固[がんこ]|stur, eigensinnig|頑固[がんこ]な 人[ひと]が 好[す]きじゃない。|Ich mag keine sturen Menschen.|な-Adjektiv
頂く|頂[いただ]く|bekommen; essen (bescheiden)|昼食[ちゅうしょく]にサンドイッチを 頂[いただ]いたよ。|Ich habe zum Mittagessen ein Butterbrot gegessen.|Verb
一斉に|一斉[いっせい]に|gleichzeitig, alle auf einmal|彼[かれ]らは 一斉[いっせい]に 立[た]ち 上[あ]がった。|Sie standen alle gleichzeitig auf.|Adverb
洗剤|洗剤[せんざい]|Waschmittel, Reinigungsmittel|誤[あやま]って 洗剤[せんざい]を 飲[の]んでしまいました。|Er trank aus Versehen Reinigungsmittel.|Nomen
真剣|真剣[しんけん]|ernst, ernsthaft|真剣[しんけん]だったの？|Meintest du das ernst?|Adjektiv
刑務所|刑務所[けいむしょ]|Gefängnis|刑務[けいむ] 所[しょ]にいる 人[ひと]を 訪[たず]ねたことはありますか？|Hast du schon einmal jemanden im Gefängnis besucht?|Nomen
刑事|刑事[けいじ]|Kriminalbeamter, Kommissar(in)|男[おとこ]は 刑事[けいじ]に 銃[じゅう]を 向[む]けた。|Der Mann richtete eine Pistole auf die Kriminalbeamten.|Nomen
強烈|強烈[きょうれつ]|heftig, intensiv|トムは 突然[とつぜん] 強烈[きょうれつ]な 眠気[ねむけ]に 襲[おそ]われた。|Tom wurde plötzlich von großer Müdigkeit befallen.|Adjektiv
ゴールデンウィーク|ゴールデンウィーク|Goldene Woche (Feiertagswoche Anfang Mai)|ついにゴールデンウィークに 突入[とつにゅう]しました！|Endlich hat die Goldene Woche begonnen!|Nomen
獣|獣[けもの]|wildes Tier, Bestie|人間[にんげん]は、 考[かんが]え、 話[はな]すことができるという 点[てん]で、 獣[けもの]と 違[ちが]う。|Der Mensch unterscheidet sich vom Tier dadurch, dass er denken und sprechen kann.|Nomen
駆ける|駆[か]ける|rennen, galoppieren|少年[しょうねん]が 私[わたし]に 向[む]かって 駆[か]けてきた。|Ein Junge kam auf mich zugelaufen.|Verb
駆け足|駆[か]け 足[あし]|Laufschritt|トムは 駆[か]け 足[あし]で 階段[かいだん]を 上[のぼ]っていった。|Tom rannte die Treppe hinauf.|Nomen (mit する)
丘|丘[おか]|Hügel|海[うみ]の 近[ちか]くに 低[ひく]い 丘[おか]がある。|Da ist ein kleiner Hügel in Meeresnähe.|Nomen
官庁|官庁[かんちょう]|Behörde, Amt|彼[かれ]は 官庁[かんちょう]で 相当[そうとう]な 職[しょく]についている。|Er hat eine recht gute Stelle in einer Behörde.|Nomen
県庁|県庁[けんちょう]|Präfekturverwaltung|山梨県[やまなしけん]の 県庁[けんちょう] 所在地[しょざいち]は 甲府[こうふ] 市[し]です。|Die Hauptstadt der Präfektur Yamanashi ist Kōfu.|Nomen
擦る|擦[こす]る|reiben|手[て]を 擦[こす]って 温[あたた]めました。|Ich rieb mir die Hände, um sie zu wärmen.|Verb
こたつ|こたつ|Kotatsu (beheizter Tisch mit Decke)|最近[さいきん] 寒[さむ]くなってきたので、そろそろこたつを 出[だ]そうか 迷[まよ]っている。|Da es in letzter Zeit kalt geworden ist, überlege ich, ob ich bald den Kotatsu herausholen soll.|Nomen
汗|汗[あせ]|Schweiß|なんで 汗[あせ]が 目[め]に 入[はい]ると 痛[いた]いの？|Warum tut es weh, wenn Schweiß in die Augen kommt?|Nomen
軸|軸[じく]|Achse|彼[かれ]は 軸[じく]のような 重要[じゅうよう]な 役割[やくわり]を 演[えん]じた。|Er spielte eine wichtige Rolle, wie eine Achse.|Nomen
後輩|後輩[こうはい]|Jüngere(r) (in Schule, Firma)|トムは 高校[こうこう]の 後輩[こうはい]です。|Tom ist auf der Oberschule unter mir.|Nomen
香り|香[かお]り|Duft|このお 茶[ちゃ]は 香[かお]りがいい。|Dieser Tee duftet gut.|Nomen
香水|香水[こうすい]|Parfüm|香水[こうすい]が 強[つよ]すぎるよ。|Dein Parfum ist zu stark.|Nomen
合唱|合唱[がっしょう]|Chor, Chorgesang|パーティーは 合唱[がっしょう]で 終[お]わった。|Die Party endete mit einem Chorlied.|Nomen (mit する)
結晶|結晶[けっしょう]|Kristall, Kristallisation|彼[かれ]は 海水[かいすい]から 塩[しお]を 結晶[けっしょう]させて 取[と]り 出[だ]した。|Er extrahierte Salz aus Meerwasser durch Kristallisierung.|Nomen (mit する)
ことわざ|ことわざ|Sprichwort|日本[にほん]にも 同様[どうよう]のことわざがありますか。|Gibt es auch in Japan ein solches Sprichwort?|Nomen
敬う|敬[うやま]う|ehren, achten|両親[りょうしん]は 私[わたし]に 年寄[としよ]りを 敬[うやま]うように 言[い]った。|Meine Eltern sagten mir, ich solle ältere Menschen achten.|Verb
座敷|座敷[ざしき]|Tatami-Zimmer, Gästezimmer (japanisch)|客[きゃく]を 座敷[ざしき]に 案内[あんない]しました。|Ich führte den Gast ins Tatami-Zimmer.|Nomen
敷金|敷金[しききん]|Kaution|敷金[しききん]は 必要[ひつよう]ですか。|Ist eine Kaution nötig?|Nomen
劣る|劣[おと]る|unterlegen sein, schlechter sein|私[わたし]は 数学[すうがく]では 彼[かれ]より 劣[おと]っている。|Ich bin ihm in Mathematik unterlegen.|Verb
勘定|勘定[かんじょう]|Rechnung, Bezahlung|お 勘定[かんじょう]して 下[くだ]さい。|Die Rechnung bitte!|Nomen (mit する)
勘|勘[かん]|Intuition, Gespür|調[しら]べればわかるだろうがまずは 勘[かん]で 答[こた]えてみよう。|Wenn man es nachschlägt, weiß man die Antwort sofort, jedoch zuerst sollte man es mithilfe von Intuition versuchen zu beantworten.|Nomen
勘違い|勘違[かんちが]い|Missverständnis, Irrtum|彼女[かのじょ]が 会[あ]いにくるだろうと 思[おも]ったのは 彼[かれ]の 勘違[かんちが]いだった。|Es war ein Irrtum seinerseits zu glauben, dass sie sich mit ihm träfe.|Nomen (mit する)
霧|霧[きり]|Nebel|霧[きり]の 他[ほか]には 何[なに]も 見[み]えなかった。|Außer Nebel konnte ich nichts sehen.|Nomen
これから|これから|von jetzt an, künftig|これからは 安心[あんしん]して 眠[ねむ]れます。|Jetzt kann ich wieder beruhigt schlafen.|Nomen
霜|霜[しも]|Raureif, Frost|ゆうべ 霜[しも]が 降[お]りた。|Letzte Nacht gab es Frost.|Nomen
公衆|公衆[こうしゅう]|Öffentlichkeit|公衆[こうしゅう] 電話[でんわ]はどこですか。|Wo ist ein öffentliches Telefon?|Nomen
衆議院|衆議院[しゅうぎいん]|Unterhaus (des japanischen Parlaments)|衆議[しゅうぎ] 院[いん]の 少数派[しょうすうは]の 議席[ぎせき]は、 急速[きゅうそく]にむしばまれてきています。|Die Sitze der Minderheit im Unterhaus schwinden rasch dahin.|Nomen
観衆|観衆[かんしゅう]|Zuschauer, Publikum|歌手[かしゅ]が 登場[とうじょう]すると 観衆[かんしゅう]は 歓声[かんせい]を 上[あ]げた。|Als der Sänger die Bühne betrat, brach das Publikum in Jubel aus.|Nomen
群衆|群衆[ぐんしゅう]|Menschenmenge|彼[かれ]は 群衆[ぐんしゅう]の 中[なか]に 姿[すがた]を 消[け]した。|Er verschwand in der Menschenmenge.|Nomen
暑中見舞い|暑中見舞[しょちゅうみま]い|Sommergruß (Karte in der heißen Zeit)|暑中[しょちゅう] 見舞[みま]いをみんなに 書[か]いた。|Ich habe allen Sommergrüße geschrieben.|Nomen
お仕舞い|お 仕舞[しま]い|Schluss, Ende|話[はなし]はこれでお 仕舞[しま]いです。|Damit ist die Geschichte zu Ende.|Nomen
さす|さす|eingießen, einträufeln; ölen|いま 蚊[か]に 刺[さ]された。|Ich bin gerade von einer Mücke gestochen worden.|Verb
金銭|金銭[きんせん]|Geld|優[すぐ]れた 教育[きょういく]の 価値[かち]は 金銭[きんせん]でははかれない。|Den Wert einer guten Erziehung kann man nicht in Geld messen.|Nomen
児童|児童[じどう]|Kind, Schulkind|図書館[としょかん]にはたくさんの 児童[じどう] 書[しょ]がある。|In der Bibliothek gibt es viele Kinderbücher.|Nomen
埋める|埋[う]める|vergraben, zuschütten|犬[いぬ]はよく 骨[ほね]を 地面[じめん]に 埋[う]める。|Hunde vergraben oft Knochen.|Verb
埋める|埋[うず]める|füllen, ausfüllen|彼女[かのじょ]は 枕[まくら]に 顔[かお]を 埋[うず]めました。|Sie vergrub ihr Gesicht im Kissen.|Verb
墨|墨[すみ]|Tusche|書道[しょどう]の 時間[じかん]に、 墨[すみ]をこぼしてしまった。|In der Kalligrafiestunde habe ich Tusche verschüttet.|Nomen
講堂|講堂[こうどう]|Aula, Hörsaal|ぼくたちが 講堂[こうどう]に 入[はい]るとすぐ 式[しき]が 始[はじ]まった。|Kaum hatten wir die Aula betreten, begann die Feier.|Nomen
奨学金|奨学金[しょうがくきん]|Stipendium|奨学[しょうがく] 金[きん]をもらいました。|Ich habe ein Stipendium bekommen.|Nomen
ＪＲ|ＪＲ[じぇいあーる]|JR (Japan Railways)|東京[とうきょう]までＪＲで 行[い]きます。|Ich fahre mit JR bis Tōkyō.|Nomen
狂う|狂[くる]う|verrückt werden; falsch gehen|彼[かれ]は 気[き]が 狂[くる]った。|Er wurde verrückt.|Verb
猿|猿[さる]|Affe|猿[さる]ってかわいいと 思[おも]う？|Findest du Affen süß?|Nomen
地獄|地獄[じごく]|Hölle|天国[てんごく]と 地獄[じごく]って 本当[ほんとう]にあるの？|Gibt es Himmel und Hölle wirklich?|Nomen
章|章[しょう]|Kapitel|第一[だいいち] 章[しょう]から 始[はじ]めましょう。|Lasst uns mit Kapitel 1 beginnen.|Nomen
頑丈|頑丈[がんじょう]|robust, stabil|彼[かれ]は 頑丈[がんじょう]で 健康[けんこう]そうに 見[み]える。|Er wirkt robust und gesund.|な-Adjektiv
親戚|親戚[しんせき]|Verwandte(r)|彼[かれ]は 彼女[かのじょ]の 遠[とお]い 親戚[しんせき]だ。|Er ist entfernt mit ihr verwandt.|Nomen
祈る|祈[いの]る|beten, wünschen|幸運[こううん]を 祈[いの]ります。|Ich wünsche dir viel Glück.|Verb
しびれる|しびれる|taub werden, einschlafen (Glieder)|右手[みぎて]がしびれます。|Meine rechte Hand ist taub.|Verb
祈り|祈[いの]り|Gebet|よくモスクでお 祈[いの]りをしてたよ。|Ich habe oft in der Moschee gebetet.|Nomen
襟|襟[えり]|Kragen|襟[えり]に 染[し]みがついてますよ。|Du hast einen Fleck am Kragen.|Nomen
先祖|先祖[せんぞ]|Vorfahren, Ahnen|彼[かれ]の 先祖[せんぞ]はアイルランドからそこに 行[い]った。|Seine Vorfahren kamen aus Irland dorthin.|Nomen
粗筋|粗筋[あらすじ]|Handlung, Inhaltsangabe|物語[ものがたり]の 粗筋[あらすじ]を 説明[せつめい]してもらえますか？|Könnten Sie mir die Handlung der Geschichte in groben Zügen erklären?|Nomen
酢|酢[す]|Essig|お 酢[す]と 油[あぶら]を 持[も]ってきてください。|Bringen Sie mir bitte Essig und Öl.|Nomen
郊外|郊外[こうがい]|Vorort, Stadtrand|私[わたし] 達[たち]は 郊外[こうがい]に 住[す]んでいる。|Wir leben in der Vorstadt.|Nomen
近郊|近郊[きんこう]|Umland, nähere Umgebung (einer Stadt)|彼[かれ]は 東京[とうきょう] 近郊[きんこう]に 住[す]んでいる。|Er wohnt in der Umgebung von Tōkyō.|Nomen
邪魔|邪魔[じゃま]|Störung, Hindernis|だれにも 私[わたし]の 邪魔[じゃま]をさせないで。|Niemand soll mich stören!|Nomen (mit する)
じゃぶじゃぶ|じゃぶじゃぶ|platschend, mit viel Wasser|子供[こども]が 川[かわ]でじゃぶじゃぶ 遊[あそ]んでいます。|Die Kinder spielen platschend im Fluss.|Adverb
お年玉|お 年玉[としだま]|Neujahrsgeld (für Kinder)|それはいわゆる「お 年玉[としだま]」でした。|Das war ein sogenanntes o-toshidama.|Nomen
改善|改善[かいぜん]|Verbesserung|状況[じょうきょう]は 改善[かいぜん]の 余地[よち]がある。|Die Situation lässt Raum für Verbesserung.|Nomen (mit する)
親善|親善[しんぜん]|Freundschaft, gute Beziehungen|これからも 両国[りょうこく]の 親善[しんぜん]を 深[ふか]めましょう。|Lassen Sie uns die Freundschaft zwischen unseren beiden Ländern weiter vertiefen.|Nomen
網|網[あみ]|Netz|少年[しょうねん]はその 鳥[とり]を 網[あみ]で 捕[つか]まえた。|Der Junge fing den Vogel mit einem Netz.|Nomen
縛る|縛[しば]る|binden, fesseln|彼[かれ]は 約束[やくそく]に 縛[しば]られている。|Er ist durch sein Versprechen gebunden.|Verb
絞る|絞[しぼ]る|auswringen, auspressen; eingrenzen|彼女[かのじょ]はタオルを 固[かた]く 絞[しぼ]った。|Sie wrang das Handtuch aus.|Verb
紺|紺[こん]|Dunkelblau, Marineblau|医者[いしゃ]は 紺[こん]のスーツの 上[うえ]に 白衣[はくい]を 着[き]ていた。|Der Arzt trug über einem dunkelblauen Anzug einen weißen Kittel.|Nomen
じゃんじゃん|じゃんじゃん|ununterbrochen, in rauen Mengen|さあ 今日[きょう]はじゃんじゃん 飲[の]もうぜ！|Los, heute trinken wir, was das Zeug hält!|Adverb
紅葉|紅葉[こうよう]|Herbstlaub, Herbstfärbung|秋[あき]になると 山[やま] 全体[ぜんたい]が 紅葉[こうよう]する。|Im Herbst wird der ganze Berg rot.|Nomen (mit する)
口紅|口紅[くちべに]|Lippenstift|学校[がっこう]で 口紅[くちべに]を 付[つ]けちゃいけないよ。|Du sollst in der Schule keinen Lippenstift tragen.|Nomen
梅|梅[うめ]|Pflaume (Ume), Pflaumenblüte|梅[うめ] 一輪[いちりん] 一輪[いちりん]ほどの 暖[あたた]かさ。|Blüte um Blüte mehren die Pflaumenblüten die Frühlingswärme.|Nomen
梅干|梅干[うめぼし]|eingelegte Salzpflaume (Umeboshi)|初[はじ]めて 食[た]べる 梅干[うめぼし]の 味[あじ]は、どう？|Wie schmeckt dir deine erste eingelegte Pflaume?|Nomen
巣|巣[す]|Nest, Bau|巣[す]に 返[かえ]してあげて。|Leg es ins Nest zurück.|Nomen
囲碁|囲碁[いご]|Go (Brettspiel)|いつの 頃[ころ]からか、 父[ちち]は 囲碁[いご]をかじるようになった。|Irgendwann hat mein Vater angefangen, sich ein wenig mit Go zu beschäftigen.|Nomen
嘘つき|嘘[うそ]つき|Lügner(in)|嘘[うそ]つきは 嫌[きら]いです。|Ich hasse Lügner.|Nomen
しわ|しわ|Falte, Runzel|トムは 額[がく]にしわがいくつかでき 始[はじ]めた。|Es zeigen sich erste Falten auf Toms Stirn.|Nomen
考慮|考慮[こうりょ]|Berücksichtigung, Erwägung|彼[かれ]の 提案[ていあん]は 考慮[こうりょ]する 価値[かち]があると 思[おも]う。|Ich denke, sein Vorschlag ist der Erwägung wert.|Nomen (mit する)
癖|癖[くせ]|Angewohnheit, Eigenart|彼[かれ]は 食事[しょくじ] 中[ちゅう]に 新聞[しんぶん]を 読[よ]む 癖[くせ]がある。|Er hat die Angewohnheit, beim Essen Zeitung zu lesen.|Nomen
下痢|下痢[げり]|Durchfall|昨日[きのう]から 下痢[げり]が 続[つづ]いているんです。|Ich habe schon seit gestern Durchfall.|Nomen (mit する)
崖|崖[がけ]|Klippe, Steilhang|崖[がけ]からバスは 落[お]ちていった。|Der Bus stürzte über die Klippe.|Nomen
嵐|嵐[あらし]|Sturm|今[いま]にも 嵐[あらし]になりそうだ。|Es scheint ein Sturm aufzuziehen.|Nomen
海峡|海峡[かいきょう]|Meerenge|彼[かれ]はイギリス 海峡[かいきょう]を 泳[およ]ぎ 渡[わた]った 唯一[ゆいいつ]のアメリカ 人[じん]だ。|Er ist der einzige Amerikaner, der den Ärmelkanal durchschwommen hat.|Nomen
噂|噂[うわさ]|Gerücht, Klatsch|噂[うわさ]はすぐに 広[ひろ]まった。|Das Gerücht verbreitete sich sofort.|Nomen (mit する)
田舎|田舎[いなか]|Land, Provinz; Heimatort|私[わたし]たちは 夏[なつ]の 間[あいだ]は 田舎[いなか]で 暮[く]らします。|Während des Sommers leben wir auf dem Land.|Nomen
ずるがしこい|ずるがしこい|gerissen, verschlagen|ドイツ 人[じん]はとてもずる 賢[がしこ]い。|Die Deutschen sind sehr raffiniert.|Adjektiv
校舎|校舎[こうしゃ]|Schulgebäude|新[あたら]しい 校舎[こうしゃ]は 村[むら]の 誇[ほこ]りだ。|Das neue Schulgebäude ist der Stolz des ganzen Dorfes.|Nomen
お嬢さん|お 嬢[じょう]さん|junge Dame; (Ihre) Tochter|お 嬢[じょう]さんの 結婚式[けっこんしき]はいつなんですか？|Wann ist die Hochzeit Ihrer Tochter?|Nomen
娯楽|娯楽[ごらく]|Unterhaltung, Vergnügen|トランプは 人気[にんき]のある 娯楽[ごらく]だ。|Kartenspielen ist ein beliebter Zeitvertreib.|Nomen
生涯|生涯[しょうがい]|das ganze Leben, Lebenszeit|生涯[しょうがい]で 一番[いちばん]の 間違[まちが]いです。|Es war der größte Fehler meines Lebens.|Nomen
汽車|汽車[きしゃ]|Zug (Dampfzug, Fernzug)|すぐに 出発[しゅっぱつ]すれば 汽車[きしゃ]に 間[ま]に 合[あ]うだろう。|Wenn du dich gleich auf den Weg machst, erwischst du den Zug sicher noch.|Nomen
賭ける|賭[か]ける|wetten, einsetzen|賭[か]けてもいいよ。|Darauf würde ich wetten.|Verb
蛍光灯|蛍光灯[けいこうとう]|Leuchtstoffröhre|そこの 蛍光[けいこう] 灯[とう]を 交換[こうかん]しないといけない。|Die Leuchtstoffröhre dort muss ich austauschen.|Nomen
せいぜい|せいぜい|höchstens, bestenfalls|ここから 歩[ある]いてせいぜい 十分[じゅうぶん]のところです。|Es sind von hier höchstens zehn Minuten zu Fuß.|Adverb
車掌|車掌[しゃしょう]|Schaffner(in)|大人[おとな]になったら、 車掌[しゃしょう]になりたい。|Wenn ich groß bin, möchte ich Zugbegleiter werden.|Nomen
芋|芋[いも]|Kartoffel, Knolle|紅[くれない] 芋[いも]のケーキを 食[た]べましたね。|Du hast den Kuchen aus lila Süßkartoffeln gegessen, nicht wahr?|Nomen
菊|菊[きく]|Chrysantheme|菊[きく]はよい 香[かお]りがする。|Chrysanthemen duften gut.|Nomen
軽蔑|軽蔑[けいべつ]|Verachtung|彼女[かのじょ]は 彼[かれ]を 軽蔑[けいべつ]した。|Sie verachtete ihn.|Nomen (mit する)
揚げる|揚[あ]げる|frittieren|彼[かれ]はたこを 揚[あ]げた。|Er ließ einen Drachen steigen.|Verb
諦める|諦[あきら]める|aufgeben|すぐに 諦[あきら]めて 昼寝[ひるね]をするかも 知[し]れない。|Es kann sein, dass ich bald aufgebe und stattdessen ein Nickerchen mache.|Verb
演奏|演奏[えんそう]|Musikdarbietung, Spiel|何[なに]か 楽器[がっき]は 演奏[えんそう]できますか。|Spielen Sie ein Instrument?|Nomen (mit する)
ぜいたく|ぜいたく|Luxus, Verschwendung|テレビは、 昔[むかし]ぜいたく 品[ひん]だった。|Einmal war das Fernsehen ein Luxusartikel.|Nomen (mit する)
窮屈|窮屈[きゅうくつ]|eng, beengt|人間関係[にんげんかんけい]が 窮屈[きゅうくつ]に 感[かん]じる 時[とき]ってありませんか？|Kommen dir zwischenmenschliche Beziehungen nicht auch manchmal beengend vor?|Adjektiv
貨幣|貨幣[かへい]|Geld, Währung, Münze|貨幣[かへい]は 銀行[ぎんこう] 制度[せいど]を 通[つう]じて 流通[りゅうつう]する。|Geld läuft über das Bankensystem um.|Nomen
真珠|真珠[しんじゅ]|Perle|その 真珠[しんじゅ]は 本物[ほんもの]？それとも 偽物[にせもの]？|Sind das echte Perlen oder falsche?|Nomen
故郷|故郷[こきょう]|Heimat, Geburtsort|雪[ゆき]を 見[み]ると 故郷[こきょう]を 思[おも]い 出[だ]す。|Schnee erinnert mich an meine Heimatstadt.|Nomen
花瓶|花瓶[かびん]|Blumenvase|花瓶[かびん]を 水[みず]で 満[み]たした。|Ich habe die Blumenvase mit Wasser gefüllt.|Nomen
一旦|一旦[いったん]|einmal, erst einmal|列車[れっしゃ]は 一旦[いったん] 停車[ていしゃ]した。|Der Zug hielt kurz an.|Adverb
乞食|乞食[こじき]|Bettler(in)|彼[かれ]は 金持[かねも]ちのくせに 乞食[こじき]のような 生活[せいかつ]をしている。|Obwohl er reich ist, lebt er wie ein Bettler.|Nomen
亀|亀[かめ]|Schildkröte|亀[かめ]には 歯[は]が 無[な]いです。|Schildkröten haben keine Zähne.|Nomen
がくんと|がくんと|abrupt, schlagartig (abfallend)|逆立[さかだ]ちをした 時[とき]に 首[くび]がガクンとなりました。|Beim Handstand ist mir der Nacken mit einem Ruck weggeknickt.|Adverb
羨ましい|羨[うらや]ましい|beneidenswert, neidisch|あなたがとても 羨[うらや]ましい。|Ich beneide dich sehr.|Adjektiv
漕ぐ|漕[こ]ぐ|rudern; in die Pedale treten|交替[こうたい]でボートを 漕[こ]ごうよ。|Wechseln wir uns mit dem Rudern ab!|Verb
稽古|稽古[けいこ]|Übung, Training (traditionelle Künste)|彼女[かのじょ]は 稽古[けいこ]を 休[やす]んだ。|Sie hat die Übungsstunde ausfallen lassen.|Nomen (mit する)
歌舞伎|歌舞伎[かぶき]|Kabuki (traditionelles Theater)|歌舞伎[かぶき]って 知[し]ってる？|Sagt dir Kabuki etwas?|Nomen
囁く|囁[ささや]く|flüstern|トムはメアリーの 耳[みみ]に 何[なに]かを 囁[ささや]いた。|Tom flüsterte Maria etwas ins Ohr.|Verb
咳|咳[せき]|Husten|トムはまた 咳[せき]をしている。|Tom hustet schon wieder.|Nomen
噛み付く|噛[か]み 付[つ]く|zubeißen, sich festbeißen|その 犬[いぬ]は 私[わたし]に 噛[か]み 付[つ]こうとした。|Der Hund hat nach mir geschnappt.|Verb
きらりと|きらりと|aufblitzend, funkelnd|指輪[ゆびわ]がきらりと 光[ひか]りました。|Der Ring blitzte funkelnd auf.|Adverb
屑|屑[くず]|Abfall, Krümel, Fussel|床[ゆか]にパンの 屑[くず]が 落[お]ちています。|Auf dem Boden liegen Brotkrümel.|Nomen
紙屑|紙屑[かみくず]|Papierabfall|紙屑[かみくず]はごみ 箱[ばこ]に 捨[す]ててください。|Werfen Sie Papierabfall bitte in den Mülleimer.|Nomen
掻く|掻[か]く|kratzen|彼[かれ]は 頭[あたま]を 掻[か]く 癖[くせ]がある。|Er hat die Angewohnheit, sich am Kopf zu kratzen.|Verb
掻き回す|掻[か]き 回[まわ]す|umrühren; durcheinanderbringen|スープをスプーンで 掻[か]き 回[まわ]しました。|Ich habe die Suppe mit dem Löffel umgerührt.|Verb
憧れ|憧[あこが]れ|Sehnsucht, Schwärmerei|同時通訳[どうじつうやく]が 彼女[かのじょ]の 憧[あこが]れだ。|Sie träumt davon, Simultandolmetscherin zu werden.|Nomen
憧れる|憧[あこが]れる|sich sehnen nach, schwärmen für|トムに 憧[あこが]れている。|Ich bewundere Tom.|Verb
溺れる|溺[おぼ]れる|ertrinken|溺[おぼ]れているトムの 犬[いぬ]を 助[たす]けたんだ。|Ich habe Toms Hund vor dem Ertrinken gerettet.|Verb
ごくんと|ごくんと|mit einem Schluck|薬[くすり]をごくんと 飲[の]みました。|Ich habe die Medizin mit einem Schluck genommen.|Adverb
御無沙汰|御無沙汰[ごぶさた]|langes Nichtmelden|長[なが]いこと 御無沙汰[ごぶさた]いたしました。|Ich habe lange nichts von mir hören lassen.|Nomen (mit する)
汲む|汲[く]む|schöpfen (Wasser)|バケツに 水[みず]を 汲[く]んでくるよ。|Ich hole einen Eimer Wasser.|Verb
苛め|苛[いじ]め|Mobbing, Schikane|学校[がっこう]での 苛[いじ]めは 大[おお]きな 問題[もんだい]です。|Mobbing an Schulen ist ein großes Problem.|Nomen
苛める|苛[いじ]める|quälen, schikanieren|弟[おとうと]を 苛[いじ]めてはいけません。|Du darfst deinen kleinen Bruder nicht quälen.|Verb
曖昧|曖昧[あいまい]|vage, unklar|私[わたし]にはその 意味[いみ]がいまだに 曖昧[あいまい]だ。|Die Bedeutung ist mir immer noch unklar.|Adjektiv
大晦日|大晦日[おおみそか]|Silvester|大晦日[おおみそか]には 何[なに]か 特別[とくべつ]なことをするの？|Machst du zu Silvester irgendwas Besonderes?|Nomen
臆病|臆病[おくびょう]|Feigheit, ängstlich|彼[かれ]は 臆病[おくびょう] 者[もの]にすぎない。|Er ist nichts weiter als ein Feigling.|な-Adjektiv
車椅子|車椅子[くるまいす]|Rollstuhl|車[くるま] 椅子[いす]の 女性[じょせい]、スーパーに 立[た]てこもる。|Frau im Rollstuhl verschanzt sich im Supermarkt.|Nomen
柿|柿[かき]|Kaki (Frucht, Baum)|最後[さいご]に 柿[かき]を 食[た]べたのっていつ？|Wann hast du zuletzt eine Kaki gegessen?|Nomen
お詫び|お 詫[わ]び|Entschuldigung, Abbitte|先日[せんじつ]のことをお 詫[わ]びしたいと 思[おも]います。|Ich möchte mich für neulich entschuldigen.|Nomen (mit する)
釘|釘[くぎ]|Nagel (Metallstift)|釘[くぎ]を 踏[ふ]んじゃった。|Ich bin auf einen Nagel getreten.|Nomen
錆びる|錆[さ]びる|rosten|雨[あめ]にぬれると、 自転車[じてんしゃ]は 錆[さ]びます。|Wenn es nass wird, rostet ein Fahrrad.|Verb
爽やか|爽[さわ]やか|erfrischend, frisch|適度[てきど]な 運動[うんどう]をすれば、 心身[しんしん] 共[とも]に 爽[さわ]やかになれますよ。|Moderater Sport erfrischt Körper und Geist.|Adjektiv
雀|雀[すずめ]|Spatz|庭[にわ]に 雀[すずめ]が 三[さん] 羽[わ] 来[き]ました。|In den Garten sind drei Spatzen gekommen.|Nomen
甥|甥[おい]|Neffe|トムはメアリーの 孫[まご]じゃなくて 甥[おい]ですよ。|Tom ist nicht Marias Enkel, sondern ihr Neffe.|Nomen
嗅ぐ|嗅[か]ぐ|riechen an, schnuppern|彼[かれ]は 納豆[なっとう]の 匂[にお]いを 嗅[か]ぐと 気分[きぶん]が 悪[わる]くなる。|Ihm wird schlecht, wenn er Nattō riecht.|Verb
炒める|炒[いた]める|anbraten, pfannenrühren|「 焼[や]く」のと「 炒[いた]める」のって、 何[なに]が 違[ちが]うの？|Was ist der Unterschied zwischen „braten“ und „anbraten“?|Verb
一まず|一[ひと]まず|fürs Erste, zunächst einmal|一[ひと]まず 家[いえ]に 帰[かえ]りましょう。|Gehen wir fürs Erste nach Hause.|Adverb
万一|万一[まんいち]|für den Fall der Fälle, falls doch|万一[まんいち] 明日[あした] 雨[あめ]が 降[ふ]ったら、 私[わたし]たちはバスで 行[い]くよ。|Falls es morgen regnen sollte, fahren wir mit dem Bus.|Adverb
日ごろ|日[ひ]ごろ|gewöhnlich, im Alltag|日[ひ]ごろからよく 運動[うんどう]しています。|Ich bewege mich im Alltag viel.|Adverb
日ソ|日[にっ]ソ|japanisch-sowjetisch|日[にっ]ソの 関係[かんけい]について 本[ほん]を 読[よ]みました。|Ich habe ein Buch über die japanisch-sowjetischen Beziehungen gelesen.|Nomen
日|日[にち]|Japan (in Zusammensetzungen)|クリスマスまであと 何[なん] 日[にち]ありますか。|Wie viele Tage sind es noch bis Weihnachten?|Nomen
データ|データ|Daten|データはしばしば 不正確[ふせいかく]だ。|Die Daten sind oft ungenau.|Nomen
日時|日時[にちじ]|Datum und Uhrzeit|日時[にちじ]を 決[き]めて 一緒[いっしょ]にランチを 食[た]べよう！|Machen wir einen Tag und eine Uhrzeit aus, um zu Mittag zu essen!|Nomen
日日|日日[ひにち]|Datum; Anzahl der Tage|旅行[りょこう]の 日日[ひにち]を 決[き]めましょう。|Legen wir das Datum der Reise fest.|Nomen
日々|日々[ひび]|täglich, Tag für Tag|多[おお]くの 人[ひと]が 日々[ひび]の 生活[せいかつ]について 書[か]いている。|Viele schreiben über ihren Alltag.|Nomen
三日月|三日月[みかづき]|Mondsichel|夜[よる]の 空[そら]に 三日月[みかづき]が 出[で]ています。|Am Nachthimmel steht die Mondsichel.|Nomen
月日|月日[つきひ]|Zeit, die Monate und Tage|その 二[ふた]つの 事件[じけん]の 間[あいだ]には 何年[なんねん]もの 月日[つきひ]が 経[た]っている。|Zwischen den beiden Vorfällen sind viele Jahre vergangen.|Nomen
ただ|ただ|nur, bloß|私[わたし]はただ 確認[かくにん]しただけよ。|Ich wollte bloß sichergehen.|Adverb
土|土[つち]|Erde, Boden|種[たね]の 上[うえ]に 少[すこ]し 土[つち]をかぶせなさい。|Bedecken Sie die Samen mit ein bisschen Erde.|Nomen
年月|年月[としつき]|Jahre, lange Zeit|年月[としつき]が 経[た]った。|Jahre vergingen.|Nomen
年月日|年月日[ねんがっぴ]|Datum (Jahr, Monat, Tag)|製造年月日[せいぞうねんがっぴ]はふたに 表示[ひょうじ]されています。|Das Herstellungsdatum ist auf dem Deckel angegeben.|Nomen
年月|年月[ねんげつ]|Jahre, lange Zeit|年月[ねんげつ]が 過[す]ぎるのは 早[はや]い。|Die Jahre vergehen schnell.|Nomen
年々|年々[ねんねん]|von Jahr zu Jahr|学生[がくせい]の 数[かず]は 年々[ねんねん] 減少[げんしょう]している。|Die Zahl der Studenten nimmt von Jahr zu Jahr ab.|Adverb
もっとも|もっとも|berechtigt, einleuchtend|彼[かれ]の 話[はなし]はもっともらしく 聞[き]こえる。|Seine Geschichte klingt glaubwürdig.|Adjektiv
何か|何[なに]か|etwas, irgendetwas|彼[かれ]について 何[なに]か 聞[き]いた？|Hast du etwas über ihn gehört?|Adverb
何とか|何[なん]とか|irgendwie, auf die eine oder andere Weise|彼[かれ]は 何[なん]とか 授業[じゅぎょう]に 間[ま]に 合[あ]った。|Er schaffte es rechtzeitig zur Vorlesung.|Adverb
何より|何[なに]より|vor allem, das Allerbeste|何[なに]よりもまず、 食事[しょくじ]に 気[き]をつけなさい。|Achte vor allem auf deine Ernährung.|Nomen
何と|何[なん]と|was für ein; tatsächlich, man staune|お 名前[なまえ]は 何[なん]とおっしゃいましたか。|Wie war noch mal dein Name?|Adverb
何となく|何[なん]となく|irgendwie, ohne bestimmten Grund|何[なん]となくはわかりました。|So ungefähr habe ich es verstanden.|Adverb
何だか|何[なん]だか|irgendwie|今日[きょう]は 何[なん]だか 車[くるま]の 調子[ちょうし]が 悪[わる]い。|Heute funktioniert das Auto irgendwie nicht gut.|Adverb
メーカー|メーカー|Hersteller|日本[にほん]メーカーだけど 製造[せいぞう]は 海外[かいがい]。|Der Hersteller ist japanisch, aber produziert wird im Ausland.|Nomen
何で|何[なん]で|warum, wieso|何[なん]で 目[め]が 覚[さ]めたの？|Warum bist du aufgewacht?|Adverb
何十|何十[なんじゅう]|mehrere Dutzend|空[そら]には 何十[なんじゅう] 億[おく]もの 星[ほし]がある。|Es gibt Milliarden von Sternen im Himmel.|Nomen
何て|何[なん]て|was für ein, wie (Ausruf)|彼[かれ]が 何[なん]て 言[い]ったか、 当[あ]ててみて。|Ratet mal, was er mir erzählt hat.|Adverb
何しろ|何[なに]しろ|jedenfalls, wie dem auch sei|何[なに]しろ 時間[じかん]がありません。|Jedenfalls haben wir keine Zeit.|Adverb
何千|何千[なんぜん]|mehrere Tausend|何千[なんぜん] 人[にん]もの 外国人[がいこくじん]が 毎年[まいとし] 日本[にほん]を 訪[おとず]れる。|Tausende Ausländer besuchen Japan jedes Jahr.|Nomen
レベル|レベル|Niveau, Stufe|このクラスはレベルが 高[たか]いです。|Diese Klasse hat ein hohes Niveau.|Nomen
何百|何百[なんびゃく]|mehrere Hundert|何百[なんびゃく] 人[にん]もの 人[ひと]がそこにいた。|Es gab dort mehrere hundert Menschen.|Nomen
やって来る|やって 来[く]る|herkommen, daherkommen|やっと 春[はる]がやって 来[き]ました。|Endlich ist der Frühling gekommen.|Verb
来日|来日[らいにち]|Besuch in Japan, Ankunft in Japan|初[はじ]めて 来日[らいにち]したのはいつだったの？|Wann bist du zum ersten Mal nach Japan gekommen?|Nomen (mit する)
日帰り|日帰[ひがえ]り|Tagesausflug|彼[かれ]は 日帰[ひがえ]り 旅行[りょこう]に 行[い]った。|Er hat einen Tagesausflug gemacht.|Nomen (mit する)
大して|大[たい]して|nicht besonders (mit Verneinung)|私[わたし]は 彼[かれ]の 能力[のうりょく]を 大[たい]して 信頼[しんらい]していない。|Ich habe nicht viel Vertrauen in seine Fähigkeiten.|Adverb
むしろ|むしろ|eher, vielmehr|問題[もんだい]は 費用[ひよう]よりもむしろ 時間[じかん]だ。|Das Problem ist eher die Zeit als die Kosten.|Adverb
大金|大金[たいきん]|große Geldsumme|トムに 大金[たいきん]をあげた。|Ich habe Tom viel Geld gegeben.|Nomen
大|大[だい]|groß, Größe L|私[わたし]たちは 大[だい] 都市[とし]に 住[す]んでいる。|Wir leben in der Großstadt.|Nomen
日中|日中[にっちゅう]|tagsüber|私[わたし]は 仕事[しごと]に 行[い]かないで 一日中[いちにちじゅう] 家[いえ]にいた。|Ich bin den ganzen Tag zu Hause geblieben, statt arbeiten zu gehen.|Nomen
日中|日中[にっちゅう]|Japan und China, japanisch-chinesisch|トムは 日中[にっちゅう] 辞典[じてん]を 買[か]った。|Tom hat sich ein japanisch-chinesisches Wörterbuch gekauft.|Nomen
中年|中年[ちゅうねん]|mittleres Alter|彼女[かのじょ]は 中年[ちゅうねん]デブだ。|Sie ist eine Dicke mittleren Alters.|Nomen
中|中[ちゅう]|Mitte, mittlere Größe|彼女[かのじょ]は 四六[しろく] 時[じ] 中[ちゅう] 男[おとこ]の 子[こ]のことを 考[かんが]えている。|Sie denkt den lieben langen Tag an Jungs.|Nomen
ますます|ますます|immer mehr, zunehmend|天気[てんき]はますます 悪[わる]くなっていった。|Das Wetter wurde immer schlechter.|Adverb
年中|年中[ねんじゅう]|das ganze Jahr über|当店[とうてん]は 年中[ねんじゅう] 無休[むきゅう]です。|Wir haben das ganze Jahr über geöffnet.|Adverb
大小|大小[だいしょう]|Größe (groß und klein)|道路上[どうろじょう]の 大小[だいしょう]の 石[いし]に 気[き]をつけなさい。|Achte auf die großen und kleinen Steine auf der Straße.|Nomen
多少|多少[たしょう]|ein wenig, etwas|多少[たしょう]のお 金[かね]はあるよ。|Ich habe etwas Geld.|Adverb
ぶら下がる|ぶら 下[さ]がる|herabhängen, baumeln|テーブルの 上[うえ]にはランプがぶら 下[さ]がっていた。|Über dem Tisch hing eine Lampe.|Verb
ぶら下げる|ぶら 下[さ]げる|hängen lassen, baumeln lassen|彼[かれ]は 首[くび]にカメラをぶら 下[さ]げているね。|Er hat eine Kamera um den Hals hängen.|Verb
モデル|モデル|Modell, Vorbild|彼女[かのじょ]はモデルだったそうだ。|Sie soll ein Model gewesen sein.|Nomen
下|下[もと]|unter (Leitung, Einfluss)|彼[かれ]は 木[き]の 下[もと]で 寝[ね]ていました。|Er schlief unter einem Baum.|Nomen
やり方|やり 方[かた]|Vorgehensweise, Art etwas zu tun|やり 方[かた]を 教[おし]えてください。|Zeigen Sie mir bitte, wie ich es tun soll.|Nomen
方々|方々[ほうぼう]|überall, an vielen Stellen|方々[ほうぼう]を 探[さが]しましたが、 見[み]つかりませんでした。|Ich habe überall gesucht, aber es nicht gefunden.|Nomen
行方|行方[ゆくえ]|Verbleib, Aufenthaltsort|トムは 行方[ゆくえ] 不明[ふめい]になった。|Tom ist verschwunden.|Nomen
一人一人|一人一人[ひとりひとり]|jede(r) Einzelne|子供[こども]たちの 一人一人[ひとりひとり]が、 全力[ぜんりょく]を 尽[つ]くしている。|Jedes der Kinder gibt sein bestes.|Nomen
もたらす|もたらす|bringen, herbeiführen|教育[きょういく]は 進歩[しんぽ]をもたらす 力[ちから]だ。|Bildung ist eine Kraft, die Fortschritt mit sich bringt.|Verb
日の入り|日[ひ]の 入[い]り|Sonnenuntergang|こんなに 美[うつく]しい 日[ひ]の 入[い]りを 見[み]たことがありますか。|Haben Sie jemals so einen schönen Sonnenuntergang gesehen?|Nomen
出入り|出入[でい]り|Ein- und Ausgehen|失敗[しっぱい]してると 指摘[してき]したら 出入[でい]り 禁止[きんし]になった。|Als ich auf den Fehler hinwies, bekam ich Hausverbot.|Nomen (mit する)
出来上がる|出来上[できあ]がる|fertig werden|料理[りょうり]がやっと 出来上[できあ]がりました。|Das Essen ist endlich fertig geworden.|Verb
人出|人出[ひとで]|Menschenandrang|大勢[おおぜい]の 人出[ひとで]ですよ。|Es sind sehr viele Leute unterwegs.|Nomen
日の出|日[ひ]の 出[で]|Sonnenaufgang|日[ひ]の 出[で]は 物理学者[ぶつりがくしゃ]には 観察[かんさつ] 不[ふ] 可能[かのう]である。|Der Sonnenaufgang ist für den Physiker unbeobachtbar.|Nomen
それぞれ|それぞれ|jeweils, jede(r) für sich|人[ひと]それぞれに 世界観[せかいかん]あります。|Jeder hat seine eigene Weltsicht.|Adverb
出来上がり|出来上[できあ]がり|Fertigstellung, Ergebnis|これらの 写真[しゃしん]は、たいへんよく 出来上[できあ]がりました。|Diese Fotos sind sehr gut geworden.|Nomen
出来るだけ|出来[でき]るだけ|möglichst, so … wie möglich|君[きみ]は 出来[でき]るだけ 早[はや]く 出発[しゅっぱつ]すべきだ。|Du solltest so bald wie möglich anfangen.|Adverb
外す|外[はず]す|abnehmen, entfernen|彼[かれ]は 眼鏡[めがね]を 外[はず]した。|Er nahm seine Brille ab.|Verb
外れる|外[はず]れる|abgehen, sich lösen; danebengehen|一番[いちばん] 上[うえ]のボタン、 外[はず]れてるよ。|Dein oberster Knopf ist offen.|Verb
外れ|外[はず]れ|Niete, Fehlschlag|結果[けっか]はかなり 期待外[きたいはず]れだった。|Das Ergebnis war eher enttäuschend.|Nomen
その内|その 内[うち]|bald, demnächst|彼[かれ]は 数[すう] 台[だい]のピアノを 弾[ひ]き、その 内[うち]の 一台[いちだい]を 選[えら]んだ。|Er spielte auf mehreren Klavieren und wählte eines davon aus.|Adverb
トップ|トップ|Spitze, Erste(r)|彼女[かのじょ]は 試験[しけん]にトップで 合格[ごうかく]した。|Sie hat die Prüfung mit Spitzenleistungen bestanden.|Nomen
本来|本来[ほんらい]|ursprünglich, eigentlich|競争[きょうそう]は 本来[ほんらい] 悪[わる]いものではない。|Konkurrenz ist nicht von Grund auf schlecht.|Adverb
本人|本人[ほんにん]|die Person selbst, der/die Betreffende|彼[かれ] 本人[ほんにん]がやってきた。|Er kam persönlich.|Nomen
本年|本年[ほんねん]|dieses Jahr (förmlich)|本年[ほんねん]もよろしくお 願[ねが]いします。|Auch dieses Jahr freue ich mich auf gute Zusammenarbeit.|Nomen
本日|本日[ほんじつ]|heute (förmlich)|本日[ほんじつ]の 営業[えいぎょう]は 終了[しゅうりょう]いたしました。|Heute haben wir bereits geschlossen.|Nomen
休める|休[やす]める|ausruhen lassen, schonen|明日[あした]って、 仕事[しごと] 休[やす]める？|Kannst du dir morgen freinehmen?|Verb
ブーム|ブーム|Boom, Trend|小型車[こがたしゃ]のブームは 終[お]わろうとしている。|Der Kleinwagen-Boom geht zu Ende.|Nomen
一休み|一休[ひとやす]み|kurze Pause|一休[ひとやす]みしませんか。|Wollen wir nicht mal eine Pause machen?|Nomen (mit する)
大体|大体[だいたい]|im Großen und Ganzen; überhaupt|ぼくは 大体[だいたい] 用意[ようい]ができた。|Ich bin im Großen und Ganzen mit den Vorbereitungen fertig.|Adverb
入力|入力[にゅうりょく]|Eingabe|トムはパスワードを 入力[にゅうりょく]した。|Tom gab sein Passwort ein.|Nomen (mit する)
体力|体力[たいりょく]|Körperkraft, Ausdauer|体力[たいりょく] 的[てき]にも 精神的[せいしんてき]にももっと 強[つよ]くなりたい。|Ich möchte körperlich und seelisch stärker werden.|Nomen
目上|目上[めうえ]|Höhergestellte, Ältere|目上[めうえ]の 人[ひと]には 礼儀[れいぎ] 正[ただ]しくしなければならない。|Höhergestellten gegenüber muss man höflich sein.|Nomen
ようやく|ようやく|endlich, mit Mühe|夕方[ゆうがた]ごろになってようやく 雨[あめ]があがった。|Gegen Abend hörte es endlich auf zu regnen.|Adverb
目方|目方[めかた]|Gewicht|塩[しお]は 目方[めかた]で 売[う]られる。|Salz wird nach Gewicht verkauft.|Nomen
目下|目下[めした]|Untergebene, Jüngere|目下[めした]のところこれで 間[ま]に 合[あ]うでしょう。|Fürs Erste wird das wohl reichen.|Nomen
目下|目下[もっか]|zurzeit, im Augenblick|問題[もんだい]の 人物[じんぶつ]は 目下[もっか]アメリカに 滞在中[たいざいちゅう]である。|Die fragliche Person hält sich gegenwärtig in Amerika auf.|Nomen
出入り口|出入[でい]り 口[ぐち]|Ein- und Ausgang|出入[でい]り 口[ぐち]は 開[あ]けたままになっていた。|Der Ein- und Ausgang stand offen.|Nomen
一口|一口[ひとくち]|ein Bissen, ein Schluck|一口[ひとくち] 食[た]べてもいいですか。|Kann ich einen Bissen haben?|Nomen
人手|人手[ひとで]|Arbeitskräfte, helfende Hände|人手[ひとで]が 必要[ひつよう]なんです。|Ich brauche helfende Hände.|Nomen
チーム|チーム|Team, Mannschaft|どちらのチームが 試合[しあい]に 勝[か]ったんですか。|Welches Team hat das Spiel gewonnen?|Nomen
手入れ|手入[てい]れ|Pflege, Instandhaltung|彼女[かのじょ]はいつも 庭[にわ]の 手入[てい]れをしている。|Sie gärtnert immer.|Nomen (mit する)
手本|手本[てほん]|Vorbild, Vorlage|彼女[かのじょ]は 私[わたし]たちにとって 素晴[すば]らしいお 手本[てほん]でした。|Sie war für uns ein ausgezeichnetes Vorbild.|Nomen
手足|手足[てあし]|Hände und Füße, Gliedmaßen|木[き]にとっては 枝[えだ]は 人間[にんげん]の 手足[てあし]に 相当[そうとう]する。|Äste sind für Bäume das, was für uns Arme und Beine sind.|Nomen
田|田[た]|Reisfeld|父[ちち]は 毎日[まいにち]、 田[た]で 働[はたら]いています。|Mein Vater arbeitet jeden Tag auf dem Reisfeld.|Nomen
花火|花火[はなび]|Feuerwerk|暗[くら]くなったらすぐに 花火[はなび]がはじまるよ。|Sobald es dunkel wird, beginnt das Feuerwerk.|Nomen
タイプ|タイプ|Typ, Art|彼[かれ]のようなタイプの 男性[だんせい]は 嫌[きら]いだ。|Männer wie ihn mag ich nicht.|Nomen
男女|男女[だんじょ]|Männer und Frauen|男女[だんじょ] 関係[かんけい]なく、 行[い]くべきでしょうね。|Sie sollten gehen, ungeachtet dessen, ob sie Männer oder Frauen sind.|Nomen
男子|男子[だんし]|Junge, junger Mann|男子[だんし]ってよく 分[わ]かんないや。|Ich verstehe Jungen nicht wirklich.|Nomen
私|私[わたくし]|ich (förmlich)|私[わたくし]が 戻[もど]ってくるまで 一緒[いっしょ]にいてあげて。|Bleib, bis ich wieder da bin, bei ihr!|Nomen
友人|友人[ゆうじん]|Freund(in)|私[わたし]の 友人[ゆうじん]がここにいないのは 残念[ざんねん]だ。|Es ist schade, dass mein Freund nicht hier ist.|Nomen
友|友[とも]|Freund, Gefährte|持[も]つべきものは 友[とも]よ 友[とも]！|Was man braucht, sind Freunde.|Nomen
ビジネス|ビジネス|Geschäft, Business|私[わたし]たちはビジネスホテルに 泊[と]まりました。|Wir haben in einem Business-Hotel übernachtet.|Nomen
元|元[もと]|Ursprung; ehemalig|それじゃあ 元[もと]も 子[こ]もないじゃないか。|Das bedeutet dann, dass ich alles verloren habe.|Nomen
手元|手元[てもと]|zur Hand, bei sich|いつでも 使[つか]えるようにその 辞書[じしょ]を 手元[てもと]に 置[お]いておきなさい。|Leg dir das Wörterbuch so zurecht, dass du es immer zur Hand hast.|Nomen
元々|元々[もともと]|ursprünglich, von Haus aus|駄目[だめ]で 元々[もともと]だよ。|Wenn es nicht klappt, haben wir nichts verloren.|Adverb
天|天[てん]|Himmel|天[てん]にも 昇[のぼ]るような 気持[きも]ちです。|Ich fühle mich wie im Himmel.|Nomen
本気|本気[ほんき]|Ernst, ernst gemeint|本気[ほんき]で 会社[かいしゃ] 辞[や]めること 考[かんが]えてるの？|Denkst du ernsthaft darüber nach, deine Arbeit aufzugeben?|な-Adjektiv
明日|明日[みょうにち]|morgen (förmlich)|私[わたし]たちは、 明日[みょうにち] 数学[すうがく]の 授業[じゅぎょう]があります。|Morgen haben wir Mathematikunterricht.|Nomen
ネットワーク|ネットワーク|Netzwerk|情報[じょうほう]はネットワークを 通[つう]じて 急速[きゅうそく]に 広[ひろ]がるようになった。|Informationen verbreiten sich inzwischen rasch über das Netzwerk.|Nomen
東西|東西[とうざい]|Ost und West|これは 古今[ここん] 東西[とうざい]に 通[つう]ずる 真理[しんり]である。|Das ist eine Wahrheit, die zu allen Zeiten und überall gilt.|Nomen
南西|南西[なんせい]|Südwesten|風[かぜ]は 南西[なんせい]から 吹[ふ]いています。|Der Wind weht aus Südwesten.|Nomen
南東|南東[なんとう]|Südosten|今年[ことし]の 恵方[えほう]は 東[ひがし] 南東[なんとう]です。|Die Glücksrichtung dieses Jahres ist Ostsüdost.|Nomen
南北|南北[なんぼく]|Nord und Süd|南北[なんぼく] 戦争[せんそう]はいつ 始[はじ]まったのかしら。|Wann der amerikanische Bürgerkrieg wohl begonnen hat?|Nomen
北西|北西[ほくせい]|Nordwesten|エクアドルは 南米[なんべい]の 北西[ほくせい] 部[ぶ]に 位置[いち]する 国[くに]である。|Ecuador ist ein Land im Nordwesten Südamerikas.|Nomen
やや|やや|ein wenig, etwas|経済[けいざい]はやや 不景気[ふけいき]だ。|Die Wirtschaft ist etwas schwach.|Adverb
北東|北東[ほくとう]|Nordosten|北東[ほくとう] 方向[ほうこう]に 土地[とち]が 低[ひく]く 横[よこ]たわっていた。|Nach Nordosten hin lag das Land tief.|Nomen
向ける|向[む]ける|richten auf, wenden zu|私[わたし]はカメラを 彼女[かのじょ]に 向[む]けた。|Ich richtete die Kamera auf sie.|Verb
向き|向[む]き|Richtung, Ausrichtung; geeignet für|人[ひと]にはそれぞれ 向[む]き 不向[ふむ]きがある。|Jeder hat Dinge, die ihm liegen und die ihm nicht liegen.|Nomen
向かい|向[む]かい|gegenüber|店[みせ]は 銀行[ぎんこう]の 向[む]かいにある。|Der Laden ist gegenüber der Bank.|Nomen
入門|入門[にゅうもん]|Eintritt (als Schüler), Einführung|彼女[かのじょ]は 園芸[えんげい]の 入門[にゅうもん] 書[しょ]を 読[よ]んでいる。|Sie liest ein Einführungsbuch über Gartenbau.|Nomen
デモ|デモ|Demonstration|デモの 最中[さいちゅう] 秘密警察[ひみつけいさつ]が 人込[ひとご]みの 中[なか]を 動[うご]きまわった。|Während der Demonstration bewegte sich die Geheimpolizei durch die Menschenmenge.|Nomen
門|門[もん]|Tor|狭[せま]き 門[もん]より 入[はい]れ。|Gehet ein durch die enge Pforte.|Nomen
開ける|開[ひら]ける|sich öffnen, sich weiten; sich entwickeln|山[やま]を 越[こ]えると、 目[め]の 前[まえ]に 海[うみ]が 開[ひら]けました。|Hinter dem Berg öffnete sich vor uns das Meer.|Verb
中間|中間[ちゅうかん]|Mitte, dazwischen|体育祭[たいいくさい]も 終[お]わったし、 次[つぎ]は 中間[ちゅうかん]テストかあ。|Das Sportfest ist schon vorbei, als nächstes die Zwischenklausuren...|Nomen
手間|手間[てま]|Mühe, Aufwand|お 手間[てま]をおかけしました。|Entschuldigen Sie die Umstände.|Nomen
間|間[ま]|Zwischenraum, Pause; Zimmer|目[め]を 閉[と]じて 少[すこ]しの 間[ま] 長椅子[ながいす]に 横[よこ]になってなさい。|Legen Sie sich eine Weile auf die Bank und schließen Sie die Augen.|Nomen
ワープロ|ワープロ|Textverarbeitungsgerät|ワープロを 買[か]いたい。|Ich will mir ein Textverarbeitungsprogramm zulegen.|Nomen
高まる|高[たか]まる|steigen, zunehmen|社会不安[しゃかいふあん]の 兆候[ちょうこう]が 高[たか]まりつつある。|Anzeichen sozialer Unsicherheit nehmen immer mehr zu.|Verb
高める|高[たか]める|erhöhen, steigern|集中力[しゅうちゅうりょく]を 高[たか]め、 効率的[こうりつてき]に 作業[さぎょう]を 進[すす]める。|Man steigert die Konzentration und arbeitet effizient weiter.|Verb
安っぽい|安[やす]っぽい|billig wirkend|彼女[かのじょ]の 服[ふく]はとても 安[やす]っぽい 生地[きじ]でできていた。|Ihr Kleid war aus einem sehr billig wirkenden Stoff.|Adjektiv
低下|低下[ていか]|Sinken, Rückgang|金利[きんり]が 低下[ていか]したことが 自動車[じどうしゃ]の 市場[しじょう]を 刺激[しげき]した。|Fallende Zinssätze haben den Automarkt stimuliert.|Nomen (mit する)
低|低[てい]|niedrig|今日[きょう]の 気温[きおん]は 高[こう]から 低[てい]に 変[か]わります。|Die Temperatur wechselt heute von hoch zu niedrig.|Nomen
最も|最[もっと]も|am meisten, höchst|彼[かれ]は 私[わたし]が 最[もっと]も 尊敬[そんけい]している 小説家[しょうせつか]だ。|Er ist der von mir am meisten verehrte Romancier.|Adverb
メンバー|メンバー|Mitglied|彼[かれ]はもう 私[わたし] 達[たち]のクラブのメンバーではない。|Er ist nicht mehr Mitglied in unserem Klub.|Nomen
月初め|月初[つきはじ]め|Monatsanfang|月初[つきはじ]めは 仕事[しごと]が 忙[いそが]しいです。|Am Monatsanfang habe ich viel Arbeit.|Nomen
前年|前年[ぜんねん]|Vorjahr|前年[ぜんねん]の 総[そう] 所得金額[しょとくきんがく]はいくらでしょうか。|Wie hoch war das Gesamteinkommen im Vorjahr?|Nomen
前方|前方[ぜんぽう]|vorn, voraus|前方[ぜんぽう]に 赤[あか]い 車[くるま]が 見[み]える。|Ich sehe ein rotes Auto vor mir.|Nomen
手前|手前[てまえ]|diesseits, davor|手前[てまえ]にひいて 開[あ]けてください。|Zieh es auf.|Nomen
前向き|前向[まえむ]き|nach vorn gewandt; positiv, konstruktiv|前向[まえむ]きに 考[かんが]えよう。|Lass uns positiv denken.|な-Adjektiv
ハードウェア|ハードウェア|Hardware|今回[こんかい]の 通信障害[つうしんしょうがい]はハードウェアの 故障[こしょう]が 原因[げんいん]だ。|Ursache der jetzigen Verbindungsstörung ist ein Defekt der Hardware.|Nomen
人前|人前[ひとまえ]|vor anderen Leuten, in der Öffentlichkeit|人前[ひとまえ]で 歌[うた]を 歌[うた]ったことはありますか？|Haben Sie schon einmal vor Leuten gesungen?|Nomen
前もって|前[まえ]もって|im Voraus|前[まえ]もって 予約[よやく]しておく 事[こと]が 必要[ひつよう]です。|Wir müssen im Voraus reservieren.|Adverb
出前|出前[でまえ]|Essenslieferung|今晩[こんばん]はすしの 出前[でまえ]を 頼[たの]みましょう。|Bestellen wir heute Abend Sushi nach Hause.|Nomen
前半|前半[ぜんはん]|erste Hälfte|前半[ぜんはん] 彼[かれ]らは 押[お]せ 押[お]せムードとなった。|In der ersten Hälfte waren sie in der Offensive.|Nomen
半ば|半[なか]ば|Mitte, Hälfte|始[はじ]めよければ 半[なか]ば 成功[せいこう]。|Gut begonnen ist halb gewonnen.|Nomen
マスコミ|マスコミ|Massenmedien|マスコミが 報道[ほうどう]しなかったのはなぜ？|Warum haben die Massenmedien nicht davon berichtet?|Nomen
半年|半年[はんとし]|ein halbes Jahr|長[なが]いようで 短[みじか]い 半年[はんとし]だったな。|Anfangs schien das Halbjahr lang und ging doch ganz schnell zu Ende.|Nomen
明朝|明朝[みょうちょう]|morgen früh|私[わたし]たちは 明朝[みょうちょう] 早[はや]く 出発[しゅっぱつ]しなければならない。|Wir müssen morgen früh aufbrechen.|Nomen
晩年|晩年[ばんねん]|späte Lebensjahre|晩年[ばんねん]のトムはボストンで 過[す]ごした。|Tom verbrachte die letzten Jahre seines Lebens in Boston.|Nomen
夜間|夜間[やかん]|Nacht, nachts|彼女[かのじょ]は 夜間[やかん] 学校[がっこう]に 通[かよ]っている。|Sie geht zur Abendschule.|Nomen
夜空|夜空[よぞら]|Nachthimmel|トムは 夜空[よぞら]を 見上[みあ]げた。|Tom blickte zum Nachthimmel auf.|Nomen
夜明け|夜明[よあ]け|Tagesanbruch|私[わたし]たちは 夜明[よあ]けに 起[お]きた。|Wir standen im Morgengrauen auf.|Nomen
やがて|やがて|bald, nach einer Weile|秘密[ひみつ]はやがて 明[あき]らかになるだろう。|Das Geheimnis wird wohl bald herauskommen.|Adverb
月夜|月夜[つきよ]|Mondnacht|子供[こども]たちは 月夜[つきよ]に 踊[おど]るひなぎくを 見[み]ることができませんでした。|Die Kinder konnten die Gänseblümchen nicht sehen, die in der Mondnacht tanzten.|Nomen
夜|夜[よ]|Nacht (literarisch)|幾[いく] 夜[よ]も 眠[ねむ]れない 夜[よる]を 過[す]ごしたようです。|Er scheint viele schlaflose Nächte verbracht zu haben.|Nomen
七夕|七夕[たなばた]|Tanabata (Sternenfest am 7. Juli)|七夕[たなばた]は 七[しち] 月[がつ]に 祝[いわ]う。|Tanabata feiert man im Juli.|Nomen
夕日|夕日[ゆうひ]|Abendsonne|きれいな 夕日[ゆうひ]だね。|Eine schöne Abendsonne!|Nomen
飲み水|飲[の]み 水[みず]|Trinkwasser|飲[の]み 水[みず]ではありません。|Das ist kein Trinkwasser.|Nomen
わずか|わずか|gering, wenig, nur|今[いま] 絹[きぬ]にはわずかな 需要[じゅよう]しかない。|Es gibt im Moment nur eine geringe Nachfrage nach Seide.|な-Adjektiv
飯|飯[めし]|gekochter Reis; Essen (derb)|今[いま] 帰[かえ]って 飯[めし] 食[く]った。|Ich bin gerade heimgekommen und habe gegessen.|Nomen
見上げる|見上[みあ]げる|hinaufblicken|彼[かれ]は 夜空[よぞら]を 見上[みあ]げた。|Er blickte hinauf zum nächtlichen Himmel.|Verb
見下ろす|見下[みお]ろす|hinunterblicken|私[わたし]は 海[うみ]を 見下[みお]ろした。|Ich schaute hinunter zum Meer.|Verb
見出し|見出[みだ]し|Überschrift, Schlagzeile|辞書[じしょ]の 見出[みだ]しは、アルファベット 順[じゅん]です。|Die Stichwörter im Wörterbuch sind alphabetisch geordnet.|Nomen
見本|見本[みほん]|Muster, Probe|彼[かれ]らは 依頼[いらい]に 応[おう]じて 見本[みほん]を 送[おく]った。|Sie schickten mir entsprechend meiner Bitte ein Muster.|Nomen
パターン|パターン|Muster, Schema|これ 意外[いがい]と 本人[ほんにん]は 気付[きづ]いてないパターン。|Das ist so ein Fall, den der Betroffene erstaunlicherweise selbst nicht bemerkt.|Nomen
見つめる|見[み]つめる|anstarren, unverwandt ansehen|あなたを 見[み]つめている 男性[だんせい]は 知[し]り 合[あ]いですか。|Kennst du den Mann, der dich da anstarrt?|Verb
見晴らし|見晴[みは]らし|Aussicht, Ausblick|この 部屋[へや]からは 町[まち]の 見晴[みは]らしがよい。|Von diesem Zimmer aus hat man einen guten Blick auf die Stadt.|Nomen
月見|月見[つきみ]|Mondschau|明日[あした]、 月見[つきみ]の 会[かい]があるだろう。|Morgen findet wohl eine Mondschau statt.|Nomen
よそ見|よそ 見[み]|Wegsehen, Unaufmerksamkeit|そこの 男子[だんし]、 授業中[じゅぎょうちゅう]によそ 見[み]しない！|Ihr Jungs da, im Unterricht wird nicht weggeschaut!|Nomen (mit する)
見かけ|見[み]かけ|Aussehen, äußerer Anschein|見[み]かけで 判断[はんだん]するな。|Urteile nicht nach dem Aussehen!|Nomen
方言|方言[ほうげん]|Dialekt|これはスコットランドの 方言[ほうげん]で 書[か]かれた 詩[し]です。|Das ist ein Gedicht in schottischem Dialekt.|Nomen
ついに|ついに|endlich, schließlich|ついに 私[わたし]たちは 村[むら]に 着[つ]いた。|Schließlich kamen wir im Dorf an.|Adverb
一言|一言[ひとこと]|ein Wort, kurze Bemerkung|たったの 一言[ひとこと]も 彼[かれ]は 言[い]わなかった。|Er sprach nicht ein einziges Wort.|Nomen
文明|文明[ぶんめい]|Zivilisation|愛[あい]は 文明[ぶんめい]の 奇跡[きせき]だ。|Liebe ist das Wunder der Zivilisation.|Nomen
本文|本文[ほんぶん]|Haupttext, Text|この 情報[じょうほう]は 注釈[ちゅうしゃく]ではなく 本文[ほんぶん]で 扱[あつか]うべきだ。|Du solltest diese Information im Haupttext behandeln, nicht in den Anmerkungen.|Nomen
文|文[ぶん]|Satz, Text|文法的[ぶんぽうてき]に 誤[あやま]りがある 文[ぶん]を 選[えら]びなさい。|Wähle den Satz mit falscher Grammatik aus.|Nomen
読書|読書[どくしょ]|Lesen (von Büchern)|私[わたし]の 趣味[しゅみ]は 読書[どくしょ]だ。|Mein Steckenpferd ist das Lesen.|Nomen (mit する)
まるで|まるで|ganz wie, geradezu; völlig|私[わたし]はまるで 招[まね]かれざる 客[きゃく]のような 気[き]がした。|Ich kam mir geradezu wie ein unerwünschter Besucher vor.|Adverb
読み書き|読[よ]み 書[か]き|Lesen und Schreiben|彼[かれ]は 読[よ]み 書[か]きができる。|Er kann lesen und schreiben.|Nomen
目覚ましい|目覚[めざ]ましい|bemerkenswert, glänzend|彼[かれ]は 人生[じんせい]で 目覚[めざ]ましい 成功[せいこう]を 得[え]た。|Er hatte im Leben bemerkenswerten Erfolg.|Adjektiv
見覚え|見覚[みおぼ]え|Wiedererkennen, bekannt vorkommen|ほとんどの 名前[なまえ]に 見覚[みおぼ]えがない。|Die meisten Namen kommen mir nicht bekannt vor.|Nomen
目覚まし|目覚[めざ]まし|Wachwerden; Wecker|目覚[めざ]ましが 鳴[な]らなかったんだよ。|Mein Wecker hat nicht geklingelt.|Nomen
閉会|閉会[へいかい]|Schluss (einer Veranstaltung)|誰[だれ]もそれ 以上[いじょう] 言[い]わなかったので、 閉会[へいかい]した。|Da niemand mehr etwas sagte, wurde die Sitzung geschlossen.|Nomen (mit する)
どんどん|どんどん|zügig, immer weiter|遠慮[えんりょ]しないでどんどん 食[た]べな。|Nur keine Hemmungen – hau rein!|Adverb
出会う|出会[であ]う|begegnen, kennenlernen|あなた 達[たち]はどうやって 出会[であ]ったの？|Wie habt ihr euch kennengelernt?|Verb
話し合い|話[はな]し 合[あ]い|Besprechung, Aussprache|我々[われわれ]は 真剣[しんけん]な 話[はな]し 合[あ]いを 始[はじ]めた。|Wir begannen eine ernsthafte Unterhaltung.|Nomen
見合い|見合[みあ]い|arrangiertes Kennenlernen (zur Heirat)|お 見合[みあ]いと 出会[であ]い 系[けい]サイトって 何[なに]が 違[ちが]うの？|Was ist der Unterschied zwischen Heiratsvermittlung und einer Datingseite?|Nomen (mit する)
間に合わせる|間[ま]に 合[あ]わせる|sich behelfen, auskommen mit|結婚式[けっこんしき]に 間[ま]に 合[あ]わせるべくタクシーに 乗[の]った。|Ich nahm ein Taxi, um es rechtzeitig zur Hochzeit zu schaffen.|Verb
本社|本社[ほんしゃ]|Zentrale, Hauptsitz|トムはボストン 本社[ほんしゃ]に 転勤[てんきん]になった。|Tom wurde in die Zentrale nach Boston versetzt.|Nomen
それほど|それほど|so sehr, derart|それほど 大変[たいへん]じゃなかったでしょ？|Das war doch gar nicht so schlimm, oder?|Adverb
入社|入社[にゅうしゃ]|Eintritt in eine Firma|入社[にゅうしゃ]して 何年[なんねん] 目[め]？|Im wievielten Jahr bist du in der Firma?|Nomen (mit する)
満足|満足[まんぞく]|Zufriedenheit|結果[けっか]には 満足[まんぞく]してますか？|Bist du mit dem Ergebnis zufrieden?|Nomen (mit する)
満たす|満[み]たす|füllen, erfüllen|彼女[かのじょ]は 自分[じぶん]のバッグをりんごで 満[み]たした。|Sie füllte ihre Tasche mit Äpfeln.|Verb
満ちる|満[み]ちる|voll werden; zunehmen (Mond)|人生[じんせい]は 冒険[ぼうけん]に 満[み]ちている。|Das Leben ist voller Abenteuer.|Verb
満員|満員[まんいん]|voll besetzt|すべてのバスは 満員[まんいん]です。|Alle Busse sind voll.|Nomen
満月|満月[まんげつ]|Vollmond|今夜[こんや]は 満月[まんげつ]が 見[み]られる。|Heute Abend kann man den Vollmond sehen.|Nomen
もはや|もはや|schon; nicht mehr|宇宙旅行[うちゅうりょこう]はもはや 夢[ゆめ]ではない。|Reisen durch den Weltraum sind kein Traum mehr.|Adverb
出来事|出来事[できごと]|Ereignis, Vorfall|去年[きょねん]の 夏[なつ]の 出来事[できごと]は 忘[わす]れられないよ。|Ich kann die Ereignisse des letzten Sommers nicht vergessen.|Nomen
見事|見事[みごと]|prächtig, hervorragend|彼[かれ]は 陸上競技[りくじょうきょうぎ] 会[かい]で 見事[みごと]な 成績[せいせき]をあげた。|Er erbrachte beim Leichtathletikwettbewerb hervorragende Leistungen.|な-Adjektiv
大工|大工[だいく]|Zimmermann|私[わたし]のおじいちゃんは 大工[だいく]です。|Mein Großvater ist Zimmermann.|Nomen
場|場[ば]|Ort, Gelegenheit, Anlass|彼[かれ]の 演説[えんぜつ]はその 場[ば]にふさわしいものだった。|Seine Ausdrucksweise war dem Anlaß angemessen.|Nomen
入場|入場[にゅうじょう]|Eintritt, Einzug|入場[にゅうじょう] 料[りょう]はいくらですか。|Wie teuer ist der Eintritt?|Nomen (mit する)
デザイン|デザイン|Design|どっちかって 言[い]うと、こっちのデザインがいいな。|Wenn du mich fragen würdest, würde ich sagen, dass ich das Design mag.|Nomen (mit する)
電力|電力[でんりょく]|elektrische Energie, Strom|その 川[かわ]は 町[まち]に 電力[でんりょく]を 供給[きょうきゅう]する。|Der Fluss versorgt die Stadt mit Elektrizität.|Nomen
電子|電子[でんし]|Elektron; elektronisch|電子[でんし] 書籍[しょせき]は 紙[かみ]の 本[ほん]に 取[と]って 代[か]わると 思[おも]いますか？|Denkst du, dass elektronische Bücher diejenigen aus Papier ersetzen werden?|Nomen
交じる|交[ま]じる|sich mischen unter|父[ちち]の 髪[かみ]に 白髪[はくはつ]が 交[ま]じるようになった。|In das Haar meines Vaters mischen sich inzwischen weiße Haare.|Verb
交わる|交[まじ]わる|verkehren mit, Umgang haben|朱[しゅ]に 交[まじ]われば 赤[あか]くなる。|Wer mit Zinnober umgeht, der wird rot davon.|Verb
交ぜる|交[ま]ぜる|untermischen, einbeziehen|ご 飯[はん]に 麦[むぎ]を 交[ま]ぜて 炊[た]きました。|Ich habe Gerste unter den Reis gemischt und gekocht.|Verb
ファン|ファン|Fan|トムの 大[だい]ファンなの。|Ich bin ein großer Bewunderer von Tom.|Nomen
交ざる|交[ま]ざる|sich mischen|白[しろ]い 花[はな]の 中[なか]に 赤[あか]い 花[はな]が 交[ま]ざっています。|Unter die weißen Blumen haben sich rote gemischt.|Verb
交わる|交[まじ]わる|sich kreuzen|二[ふた]つの 通[とお]りがここで 交[まじ]わる。|Die beiden Straßen kreuzen sich hier.|Verb
見通し|見通[みとお]し|Aussicht, Prognose; Durchblick|見通[みとお]しは 否定的[ひていてき]だった。|Die Aussichten sind negativ.|Nomen
通じる|通[つう]じる|durchgehen, führen zu; verstanden werden|これは 駅[えき]へ 通[つう]じる 道[みち]ですか。|Ist das die Straße, die zum Bahnhof führt?|Verb
通す|通[とお]す|durchlassen, hindurchführen|彼[かれ]は 本[ほん]を 読[よ]み 通[とお]した。|Er hat das Buch durchgelesen.|Verb
通行|通行[つうこう]|Durchgang, Verkehr|ここでは 右側[みぎがわ] 通行[つうこう]です。|Hier herrscht Rechtsverkehr.|Nomen
なさる|なさる|tun (respektvoll)|明日[あした]までいなさい。|Bleiben Sie bis morgen!|Verb
人通り|人通[ひとどお]り|Fußgängerverkehr|夜[よる]は 人通[ひとどお]りが 無[な]くなった。|Nachts war niemand mehr auf den Straßen.|Nomen
一通り|一通[ひととお]り|einmal ganz, im Großen und Ganzen|私[わたし]は 生[い]け 花[ばな]を 一通[ひととお]りは 習[なら]いました。|Die Grundlagen des Blumensteckens habe ich einmal durchgenommen.|Adverb
通路|通路[つうろ]|Gang, Durchgang|通路[つうろ]に 物[もの]を 置[お]くな。|Stell deine Sachen nicht in den Durchgang.|Nomen
地上|地上[ちじょう]|über der Erde, oberirdisch|木[こ]の 葉[は]が 地上[ちじょう]に 落[お]ちた。|Die Blätter fielen auf den Boden.|Nomen
地|地[ち]|Boden, Gegend, Ort|船[ふね]は 無事[ぶじ]に 目的[もくてき] 地[ち]に 着[つ]いた。|Das Schiff erreichte zwischenfallsfrei den Zielort.|Nomen
まとまる|まとまる|zusammenkommen, sich einigen|彼[かれ]らは 協力[きょうりょく]して 働[はたら]くことに 意見[いけん]がまとまった。|Sie einigten sich darauf, zusammenzuarbeiten.|Verb
地下道|地下道[ちかどう]|Unterführung|駅[えき]まで 地下道[ちかどう]を 通[とお]って 行[い]きます。|Ich gehe durch die Unterführung zum Bahnhof.|Nomen
地下|地下[ちか]|Untergeschoss, unterirdisch|条約[じょうやく]は 地下[ちか]での 核実験[かくじっけん]を 禁止[きんし]していなかった。|Der Vertrag verbot keine unterirdischen Atomversuche.|Nomen
地方|地方[ちほう]|Gegend, Region; Provinz|東北[とうほく] 地方[ちほう]は 旅行[りょこう]する 価値[かち]があります。|Es rentiert sich, in die Tohoku Region zu reisen.|Nomen
図る|図[はか]る|anstreben, planen|彼[かれ]らと 協力[きょうりょく]して 世界平和[せかいへいわ]を 図[はか]る。|Gemeinsam mit ihnen setze ich mich für den Weltfrieden ein.|Verb
図書|図書[としょ]|Bücher|彼女[かのじょ]は 図書[としょ] 館[かん]に 本[ほん]を 返[かえ]した。|Sie gab das Buch in der Bücherei zurück.|Nomen
ルール|ルール|Regel|ここには 超[ちょう] 厳[きび]しいルールがあるんだ。|Wir haben hier sehr strenge Regeln.|Nomen
他方|他方[たほう]|die andere Seite; andererseits|片方[かたほう]の 本[ほん]は 薄[うす]く、 他方[たほう]は 厚[あつ]い。|Das eine Buch ist dünn, das andere dick.|Nomen
他人|他人[たにん]|andere Leute, Fremde(r)|他人[たにん]を 軽蔑[けいべつ]してはいけない。|Du darfst andere Menschen nicht geringschätzen.|Nomen
中止|中止[ちゅうし]|Abbruch, Absage|ハイキングは 中止[ちゅうし]にしたほうがいいわね。|Wir sollten die Wanderung besser absagen.|Nomen (mit する)
通行止め|通行止[つうこうど]め|Straßensperrung|長野[ながの]への 道路[どうろ]は、 通行止[つうこうど]めになっている。|Die Straße nach Nagano ist für den Verkehr gesperrt.|Nomen
見渡す|見渡[みわた]す|überblicken, den Blick schweifen lassen|見渡[みわた]す 限[かぎ]り 砂[すな] 以外[いがい] 何[なに]も 見[み]えなかった。|So weit ich blicken konnte, sah ich nichts außer Sand.|Verb
二度と|二度[にど]と|nie wieder|二[に] 度[ど]と 学校[がっこう]に 遅刻[ちこく]するなよ。|Komm nie wieder zu spät zur Schule!|Adverb
ヘリコプター|ヘリコプター|Hubschrauber|ヘリコプターの 操縦[そうじゅう] 方法[ほうほう]は 分[わ]かります。|Ich kann Hubschrauber fliegen.|Nomen
度々|度々[たびたび]|oft, wiederholt|彼女[かのじょ]は 彼[かれ]のもとを 度々[たびたび] 訪[たず]ねるが、 長居[ながい]することはない。|Sie besucht ihn häufiger, doch verweilt nie lange.|Adverb
この度|この 度[たび]|diesmal, bei diesem Anlass|私[わたし]この 度[たび] 一身上[いっしんじょう]の 都合[つごう]でやめさせていただきます。|Ich möchte aus persönlichen Gründen aufhören.|Nomen
毎度|毎度[まいど]|jedes Mal|毎度[まいど]、またいらっしゃい。|Kommen Sie jedes Mal gerne wieder.|Nomen
間近|間近[まぢか]|ganz nah, unmittelbar bevorstehend|入学試験[にゅうがくしけん]が 間近[まぢか]に 迫[せま]っていた。|Die Aufnahmeprüfung rückte näher.|な-Adjektiv
近道|近道[ちかみち]|Abkürzung|彼[かれ]は 近道[ちかみち]をした。|Er nahm eine Abkürzung.|Nomen
ともかく|ともかく|jedenfalls, wie dem auch sei|冗談[じょうだん]はともかく、 頭痛[ずつう]は 医者[いしゃ]に 診[み]てもらうべきだ。|Spaß beiseite: mit deinen Kopfschmerzen solltest du mal zum Arzt!|Adverb
長年|長年[ながねん]|viele Jahre, langjährig|彼[かれ]の 長年[ながねん]の 望[のぞ]みが 実現[じつげん]した。|Sein langjähriger Wunsch ging in Erfüllung.|Nomen
年長|年長[ねんちょう]|älter, der/die Älteste|私[わたし]はクラスの 中[なか]で 最[さい] 年長[ねんちょう]である。|Ich bin die Älteste in meiner Klasse.|な-Adjektiv
長らく|長[なが]らく|lange Zeit|長[なが]らくお 待[ま]たせして 申[もう]し 訳[わけ]ありません。|Entschuldigen Sie, dass ich Sie so lange habe warten lassen.|Adverb
長話|長話[ながばなし]|langes Gespräch|彼[かれ]の 長話[ながばなし]には 飽[あ]き 飽[あ]きした。|Sein endloses Gerede langweilt mich.|Nomen (mit する)
短大|短大[たんだい]|Kurzuniversität (zweijähriges College)|姉[あね]は 短大[たんだい]を 卒業[そつぎょう]しました。|Meine ältere Schwester hat die Kurzuniversität abgeschlossen.|Nomen
つい|つい|unwillkürlich, aus Versehen|彼[かれ]はついさっき 出[で]かけた。|Er ist gerade rausgegangen.|Adverb
短気|短気[たんき]|Jähzorn, ungeduldig|子供[こども]に 対[たい]して 短気[たんき]を 起[お]こしてはいけない。|Du solltest nicht ungeduldig mit Kindern sein.|な-Adjektiv
広げる|広[ひろ]げる|ausbreiten, entfalten|地図[ちず]をテーブルに 広[ひろ]げて 話[はな]し 合[あ]おう。|Lass uns die Karte auf dem Tisch ausbreiten und darüber reden.|Verb
広場|広場[ひろば]|Platz, freier Platz|広場[ひろば]には 誰[だれ]もいない。|Der Platz ist menschenleer.|Nomen
広まる|広[ひろ]まる|sich verbreiten|うわさは 町中[まちじゅう]に 広[ひろ]まった。|Das Gerücht verbreitete sich in der Stadt.|Verb
広める|広[ひろ]める|verbreiten|旅行[りょこう]は 人[ひと]の 視野[しや]を 広[ひろ]める。|Reisen erweitert den Horizont.|Verb
トンネル|トンネル|Tunnel|汽車[きしゃ]はトンネルを 通[とお]り 抜[ぬ]けた。|Der Zug durchquerte einen Tunnel.|Nomen
全力|全力[ぜんりょく]|ganze Kraft, volle Leistung|トムは 全力[ぜんりょく]で 走[はし]った。|Tom rannte aus voller Kraft.|Nomen
部門|部門[ぶもん]|Bereich, Sparte, Kategorie|彼[かれ]は 企画[きかく] 部門[ぶもん]に 属[ぞく]している。|Er gehört zur Planungsabteilung.|Nomen
本部|本部[ほんぶ]|Hauptquartier, Zentrale|県警察[けんけいさつ] 本部[ほんぶ] 長[ちょう]は 警察官[けいさつかん]の 綱紀[こうき]を 正[ただ]そうとした。|Der Polizeipräsident der Präfektur versuchte, die Disziplin innerhalb der Polizei zu verbessern.|Nomen
部長|部長[ぶちょう]|Abteilungsleiter(in)|部長[ぶちょう]から 記念品[きねんひん]を 頂[いただ]きました。|Ich habe vom Abteilungsleiter ein Andenken bekommen.|Nomen
内部|内部[ないぶ]|das Innere, intern|地球[ちきゅう]は 内部[ないぶ]に 大[おお]きな 磁石[じしゃく]を 持[も]ったボールのようなものである。|Die Erde ist wie ein Ball mit einem großen Magneten im Innern.|Nomen
部下|部下[ぶか]|Untergebene(r), Mitarbeiter(in)|彼[かれ]は 部下[ぶか]に 当[あ]たり 散[ち]らした。|Er lässt seinen Ärger an seinen Untergebenen aus.|Nomen
バランス|バランス|Gleichgewicht, Ausgewogenheit|トムはバランスを 崩[くず]して 転[ころ]んだ。|Tom verlor das Gleichgewicht und fiel hin.|Nomen
大部分|大部分[だいぶぶん]|der größte Teil|参加者[さんかしゃ]の 大[だい] 部分[ぶぶん]は 女性[じょせい]だった。|Die meisten Teilnehmer waren Frauen.|Nomen
大国|大国[たいこく]|Großmacht, großes Land|スイスは 鉄道[てつどう] 大国[たいこく]です。|Die Schweiz ist eine große Eisenbahnnation.|Nomen
入国|入国[にゅうこく]|Einreise|これが 入国[にゅうこく]カードですか。|Ist das hier die Einreisekarte?|Nomen (mit する)
本国|本国[ほんごく]|Heimatland|彼[かれ]の 音楽[おんがく]は 本国[ほんごく]では 人気[にんき]がなかった。|In seinem Heimatland war seine Musik nicht beliebt.|Nomen
天国|天国[てんごく]|Himmel, Paradies|どうすれば 天国[てんごく]に 行[い]けるのでしょうか。|Wie kann ich in den Himmel kommen?|Nomen
どうしても|どうしても|unbedingt, um jeden Preis|どうしてもイタリアへ 行[い]きたい。|Ich will unbedingt nach Italien.|Adverb
世の中|世[よ]の 中[なか]|die Welt, die Gesellschaft|厳[きび]しい 世[よ]の 中[なか]だなあ。|Es ist eine unbarmherzige Welt.|Nomen
中世|中世[ちゅうせい]|Mittelalter|中世[ちゅうせい]ヨーロッパの 歴史[れきし]に 興味[きょうみ]があります。|Ich interessiere mich für mittelalterliche europäische Geschichte.|Nomen
世|世[よ]|Welt, Öffentlichkeit; Zeitalter|俺様[おれさま]は 世[よ]にも 美[うつく]しいユニコーン 様[さま]でござるぞ。|Ich bin das schönste Einhorn der Welt.|Nomen
明白|明白[めいはく]|offensichtlich, eindeutig|君[きみ]が 嘘[うそ]をついたということは 明白[めいはく]だ。|Es ist offensichtlich, dass du gelogen hast.|な-Adjektiv
鉄道|鉄道[てつどう]|Eisenbahn|トムは 鉄道[てつどう] 模型[もけい]のことしか 頭[あたま]にない。|Tom hat nichts außer seiner Modelleisenbahn im Kopf.|Nomen
どうか|どうか|bitte (inständig)|どうか 許[ゆる]して 下[くだ]さい。|Bitte, vergib mir!|Adverb
鉄|鉄[てつ]|Eisen|鉄[てつ]は 熱[ねつ]をよく 伝[つた]える。|Eisen leitet Wärme recht gut.|Nomen
肉体|肉体[にくたい]|Körper, Leib|肉体[にくたい]は 死[し]すべきものである。|Der Körper ist sterblich.|Nomen
白菜|白菜[はくさい]|Chinakohl|こんなにあった 白菜[はくさい]が、 煮[に]るとこれっぽっちになる。|So viel Chinakohl, und nach dem Kochen bleibt nur so wenig übrig.|Nomen
日米|日米[にちべい]|Japan und die USA|現在[げんざい]の 日米[にちべい] 貿易摩擦[ぼうえきまさつ]の 原因[げんいん]は 何[なん]であると 思[おも]いますか。|Was ist Ihrer Meinung nach die Ursache der derzeitigen Handelsspannungen zwischen Japan und den USA?|Nomen
味方|味方[みかた]|Verbündete(r), auf jemandes Seite|トムは 俺[おれ]らの 味方[みかた]だよな。|Tom ist doch auf unserer Seite, oder?|Nomen
年末|年末[ねんまつ]|Jahresende|今年[ことし]の 年末[ねんまつ] 年始[ねんし]は、 家[いえ]でのんびり 過[す]ごすわ。|Dieses Jahr verbringe ich den Jahreswechsel entspannt zu Hause.|Nomen
プロ|プロ|Profi|あなたはプロで、 私[わたし]はアマチュア。|Du bist Profi, und ich bin Amateur.|Nomen
末|末[まつ]|Ende (eines Zeitraums)|結婚式[けっこんしき]は 十[じゅう] 月[がつ] 末[まつ]に 行[おこな]われる。|Die Hochzeit wird Ende Oktober stattfinden.|Nomen
料金|料金[りょうきん]|Gebühr, Preis|子供[こども]のいる 家族[かぞく]はみな 特別[とくべつ] 料金[りょうきん]です。|Alle Familien mit Kindern zahlen einen Sonderpreis.|Nomen
地理|地理[ちり]|Geografie, Ortskenntnis|地理[ちり]には 弱[よわ]いんだ。|In Geographie habe ich Schwächen.|Nomen
理解|理解[りかい]|Verständnis, Verstehen|私[わたし]は 君[きみ]の 言[い]う 事[こと]が 理解[りかい]できない。|Ich verstehe nicht was du sagst.|Nomen (mit する)
解く|解[と]く|lösen, auflösen|私[わたし]はその 問題[もんだい]を 解[と]いてみた。|Ich versuchte, das Problem zu lösen.|Verb
チャンス|チャンス|Chance, Gelegenheit|チャンスはあると 思[おも]う？|Denkst du, dass wir eine Chance haben?|Nomen
分解|分解[ぶんかい]|Zerlegung|トムは 時計[とけい]を 分解[ぶんかい]した。|Tom zerlegte die Uhr.|Nomen (mit する)
解ける|解[と]ける|sich lösen, gelöst werden|これはあまりに 難[むずか]しい 問題[もんだい]なので 私[わたし]には 解[と]けない。|Dieses Problem ist zu schwer, als dass ich es lösen könnte.|Verb
有力|有力[ゆうりょく]|einflussreich, aussichtsreich|事故[じこ]は 新[あたら]しい 安全対策[あんぜんたいさく]のための 有力[ゆうりょく]な 根拠[こんきょ]となった。|Der Unfall wurde zu einem gewichtigen Argument für neue Sicherheitsmaßnahmen.|な-Adjektiv
有する|有[ゆう]する|haben, besitzen (förmlich)|すべての 人[ひと]は 対等[たいとう]の 権利[けんり]を 有[ゆう]する。|Alle Menschen besitzen die gleichen Rechte.|Verb
有料|有料[ゆうりょう]|gebührenpflichtig|配達[はいたつ]は 有料[ゆうりょう]ですか。|Ist die Lieferung kostenpflichtig?|Nomen
どうも|どうも|irgendwie; wirklich (Dank, Entschuldigung)|それはご 親切[しんせつ]にどうも。|Das ist wirklich nett von Ihnen.|Adverb
無理|無理[むり]|Unmögliches, Überanstrengung|若[わか]いからってあんまり 無理[むり]しちゃだめだよ。|Überanstrenge dich nicht, auch wenn du jung bist.|Nomen
無料|無料[むりょう]|kostenlos|それは 無料[むりょう]です。|Das ist kostenlos.|Nomen
無事|無事[ぶじ]|wohlbehalten, ohne Zwischenfall|彼[かれ]が 無事[ぶじ]だと 聞[き]いて 私[わたし]は、 安心[あんしん]した。|Ich war beruhigt, als ich hörte, dass es ihm gut geht.|Adverb
無口|無口[むくち]|wortkarg, schweigsam|彼[かれ]は 観察[かんさつ]が 鋭[するど]いがとても 無口[むくち]だ。|Er hat eine scharfe Beobachtungsgabe, aber ist sehr einsilbig.|な-Adjektiv
間も無く|間[ま]も 無[な]く|bald, in Kürze|間[ま]も 無[な]く 電車[でんしゃ]が 来[き]ます。|Der Zug kommt in Kürze.|Adverb
無言|無言[むごん]|Schweigen, wortlos|みんな 無言[むごん]になって 時計[とけい]を 見[み]だした。|Alle verstummten und begannen, auf die Uhr zu sehen.|Nomen
ハード|ハード|hart, anstrengend|パソコンのハードドライブって、 何[なん]？|Was ist die Festplatte eines Computers?|Adjektiv
無茶|無茶[むちゃ]|unvernünftig, waghalsig|無茶[むちゃ]しなければよかった。|Ich hätte es nicht übertreiben sollen.|な-Adjektiv
無理やり|無理[むり]やり|mit Gewalt, gegen den Willen|彼[かれ]は 無理[むり]やり 部屋[へや]に 入[はい]った。|Er drang gewaltsam in das Zimmer ein.|Adverb
作り上げる|作[つく]り 上[あ]げる|fertigstellen; erfinden, ausdenken|彼[かれ]の 性格[せいかく]は 子供時代[こどもじだい]に 作[つく]り 上[あ]げられた。|Sein Charakter wurde in der Kindheit geformt.|Verb
作り話|作[つく]り 話[ばなし]|erfundene Geschichte|これは 作[つく]り 話[ばなし]なの？|Ist das eine erfundene Geschichte?|Nomen
大使|大使[たいし]|Botschafter(in)|大使[たいし]は 戻[もど]りました。|Der Botschafter ist zurückgekehrt.|Nomen
マイナス|マイナス|Minus; Nachteil|経済[けいざい]はマイナス 成長[せいちょう]を 記録[きろく]した。|Die Wirtschaft verzeichnete ein Minuswachstum.|Nomen (mit する)
使い道|使[つか]い 道[みち]|Verwendungszweck|彼[かれ]は 金[かね]の 使[つか]い 道[みち]に 困[こま]っている。|Er weiß nicht, wofür er sein Geld verwenden soll.|Nomen
使い|使[つか]い|Besorgung, Botengang|私[わたし]は 魔法[まほう] 使[つか]いなんかではありません。|Ich bin kein Zauberer.|Nomen
用|用[よう]|Angelegenheit, Anliegen|スープ 用[よう]のお 皿[さら]ある？|Gibt es Suppenteller?|Nomen
無用|無用[むよう]|unnötig, nutzlos|心配[しんぱい]ご 無用[むよう]！|Keine Sorge!|な-Adjektiv
費用|費用[ひよう]|Kosten|費用[ひよう]は 最低[さいてい] 一万円[いちまんえん]です。|Die Kosten betragen mindestens 10000 Yen.|Nomen
とにかく|とにかく|jedenfalls, auf jeden Fall|とにかく 明日[あした] 電話[でんわ]するよ。|Ich rufe dich morgen auf jeden Fall an.|Adverb
費やす|費[つい]やす|aufwenden, verbrauchen|彼[かれ]は 全財産[ぜんざいさん]を 車[くるま]に 費[つい]やした。|Er hat sein ganzes Geld in sein Auto gesteckt.|Verb
安売り|安売[やすう]り|Ausverkauf, Sonderangebot|自分[じぶん]を 安売[やすう]りしてはいけない。|Du darfst dich nicht unter Wert verkaufen.|Nomen (mit する)
売買|売買[ばいばい]|Kauf und Verkauf, Handel|彼[かれ]は 革製品[かわせいひん]の 売買[ばいばい]をしている。|Er handelt mit Lederwaren.|Nomen (mit する)
閉店|閉店[へいてん]|Ladenschluss|何時[なんじ] 閉店[へいてん]ですか。|Wann schließt der Laden?|Nomen (mit する)
本店|本店[ほんてん]|Hauptgeschäft, Stammhaus|本店[ほんてん]は 警察[けいさつ]の 手入[てい]れを 受[う]けた。|Im Hauptgeschäft gab es eine Razzia der Polizei.|Nomen
パイプ|パイプ|Rohr; Pfeife|彼[かれ]はパイプをくわえてそこに 座[すわ]っていた。|Er saß dort mit einer Pfeife im Mund.|Nomen
部品|部品[ぶひん]|Teil, Ersatzteil|車[くるま]の 部品[ぶひん]は、 高[たか]い。|Autoteile sind teuer.|Nomen
日用品|日用品[にちようひん]|Dinge des täglichen Bedarfs|日用[にちよう] 品[ひん]の 値段[ねだん]が 上[あ]がった。|Die Preise für Artikel des täglichen Bedarfs sind gestiegen.|Nomen
段|段[だん]|Stufe; Rang|この 階段[かいだん]は 段[だん]が 高[たか]いです。|Diese Treppe hat hohe Stufen.|Nomen
値上がり|値上[ねあ]がり|Preisanstieg|タバコが 値上[ねあ]がりするたびに、 禁煙[きんえん]を 試[こころ]みる 人[ひと]は 多[おお]い。|Immer wenn sich der Preis für Zigaretten erhöht, probieren viele Menschen mit dem Rauchen aufzuhören.|Nomen (mit する)
値上げ|値上[ねあ]げ|Preiserhöhung|市役所[しやくしょ] 前[まえ]のパン 屋[や]さんが 値上[ねあ]げしてた。|Der Bäcker vor dem Rathaus hat seine Preise erhöht.|Nomen (mit する)
値下がり|値下[ねさ]がり|Preisrückgang|電気料金[でんきりょうきん]が 値下[ねさ]がりした。|Die Strompreise sind gesunken.|Nomen (mit する)
たちまち|たちまち|im Nu, augenblicklich|雪[ゆき]はたちまち 消[き]えてしまった。|Der Schnee war schneller weg, als man gucken konnte.|Adverb
値下げ|値下[ねさ]げ|Preissenkung|値下[ねさ]げしてもこれは 高[たか]すぎる。|Selbst mit Preissenkung ist das zu teuer.|Nomen (mit する)
地価|地価[ちか]|Grundstückspreis|日本[にほん]の 地価[ちか]はとても 高[たか]い。|Die Bodenpreise in Japan sind sehr hoch.|Nomen
体格|体格[たいかく]|Körperbau, Statur|彼女[かのじょ]は 華奢[きゃしゃ]な 体格[たいかく]だ。|Sie hat einen zarten Körperbau.|Nomen
冬季|冬季[とうき]|Wintersaison|ホテルは、 冬季[とうき]は 休業[きゅうぎょう]します。|Das Hotel ist in der Wintersaison geschlossen.|Nomen
熱する|熱[ねっ]する|erhitzen; heiß werden|彼女[かのじょ]は 水[みず]を 熱[ねっ]している。|Sie erhitzt das Wasser.|Verb
プラス|プラス|Plus, Vorteil|こうしたら 君[きみ]のプラスになる。|Wenn du das so machst, ist das ein Plus für dich.|Nomen (mit する)
低温|低温[ていおん]|niedrige Temperatur|金属[きんぞく]は 低温[ていおん]になると 脆[もろ]くなることがあります。|Metalle können bei niedrigen Temperaturen spröde werden.|Nomen
体温|体温[たいおん]|Körpertemperatur|母[はは]は 私[わたし]の 体温[たいおん]を 計[はか]った。|Meine Mutter hat meine Körpertemperatur gemessen.|Nomen
友情|友情[ゆうじょう]|Freundschaft|友情[ゆうじょう]より 大切[たいせつ]なものなんてないよ。|Nichts ist kostbarer als die Freundschaft.|Nomen
人情|人情[にんじょう]|Menschlichkeit, Mitgefühl|トムは 義理[ぎり]・ 人情[にんじょう]に 厚[あつ]い。|Tom hat viel Pflichtgefühl und Mitmenschlichkeit.|Nomen
情けない|情[なさ]けない|erbärmlich, beschämend|自分[じぶん]の 行動[こうどう]を 思[おも]い 出[だ]すと 情[なさ]けないよ。|Wenn ich an meine Taten denke, fühle ich mich erbärmlich.|Adjektiv
リード|リード|Führung, Vorsprung|彼女[かのじょ]が 二[に]メートルリードしている。|Sie führt mit zwei Metern Vorsprung.|Nomen (mit する)
報道|報道[ほうどう]|Berichterstattung, Nachrichten|新聞[しんぶん]はそのニュースを 報道[ほうどう]しなかった。|Die Zeitungen haben von dieser Neuigkeit nicht berichtet.|Nomen (mit する)
電報|電報[でんぽう]|Telegramm|電報[でんぽう]でお 知[し]らせ 下[くだ]さい。|Informieren Sie mich per Telegramm!|Nomen
中古|中古[ちゅうこ]|gebraucht, aus zweiter Hand|トムはトラックの 中古[ちゅうこ] 車[しゃ]を 買[か]った。|Tom hat einen gebrauchten Lkw gekauft.|Nomen
古本|古本[ふるほん]|gebrauchtes Buch|私[わたし]は 古本[ふるほん] 屋[や]で 偶然[ぐうぜん] 珍[めずら]しい 本[ほん]を 見[み]つけた。|Ich bin in einem Antiquariat zufällig auf ein seltenes Buch gestoßen.|Nomen
昔|昔[むかし]|früher, alte Zeiten|私[わたし]は 昔[むかし]ほど 健康[けんこう]ではない。|Ich bin nicht mehr so gesund wie früher.|Nomen
悪口|悪口[わるくち]|üble Nachrede, Lästern|人[ひと]の 悪口[わるくち]を 言[い]うな。|Sprich nicht schlecht über andere.|Nomen
たとえ|たとえ|selbst wenn|たとえ 雨[あめ]が 降[ふ]っても 行[い]かなければならない。|Ich muß gehen, selbst wenn es regnet.|Adverb
熱心|熱心[ねっしん]|Eifer, eifrig|彼女[かのじょ]は 熱心[ねっしん]に 勉強[べんきょう]する。|Sie lernt sehr eifrig.|な-Adjektiv
良心|良心[りょうしん]|Gewissen|彼女[かのじょ]は 良心[りょうしん]にはじるところがなかった。|Sie hatte ein reines Gewissen.|Nomen
内心|内心[ないしん]|im Innersten, insgeheim|政治家[せいじか]は 決[けっ]して 内心[ないしん]を 見[み]せない。|Politiker zeigen nie, was sie im Innersten denken.|Nomen
用心|用心[ようじん]|Vorsicht|用心[ようじん]しなさい。|Sei vorsichtig!|Nomen (mit する)
忘年会|忘年会[ぼうねんかい]|Jahresabschlussfeier|私[わたし]、 今夜[こんや]の 忘年[ぼうねん] 会[かい]には 参加[さんか]しないつもりなの。|Ich habe vor, heute Abend nicht zur Jahresabschlussfeier zu gehen.|Nomen
なるべく|なるべく|möglichst, so … wie möglich|なるべくゆっくり 話[はな]してもらえますか。|Könnten Sie bitte möglichst langsam sprechen?|Adverb
度忘れ|度忘[どわす]れ|plötzliches Entfallen, Blackout|私[わたし]は 彼女[かのじょ]の 名前[なまえ]を 度忘[どわす]れした。|Ihr Name ist mir entfallen.|Nomen (mit する)
知事|知事[ちじ]|Gouverneur(in)|知事[ちじ]に 立候補[りっこうほ]するおつもりですか？|Wollen Sie als Bürgermeister kandidieren?|Nomen
未知|未知[みち]|unbekannt|未知[みち]の 語[ご]に 出会[であ]った 時[とき]には、 辞書[じしょ]で 調[しら]べなければならない。|Wenn du unbekannten Wörtern begegnest, musst du sie im Wörterbuch nachschlagen.|Nomen
通知|通知[つうち]|Benachrichtigung, Mitteilung|次[つぎ]の 会議[かいぎ]の 通知[つうち]がドアに 掲示[けいじ]されていた。|Eine Mitteilung über die nächste Sitzung war an der Tür ausgehängt.|Nomen (mit する)
無知|無知[むち]|Unwissenheit|君[きみ]の 無知[むち]には 感心[かんしん]するよ。|Ich bewundere deine Ignoranz.|な-Adjektiv
テーマ|テーマ|Thema|それが 私[わたし]の 論文[ろんぶん]のテーマでした。|Das war das Thema meines Aufsatzes.|Nomen
知人|知人[ちじん]|Bekannte(r)|彼[かれ]には 知人[ちじん]は 多[おお]いが 友人[ゆうじん]は 少[すく]ない。|Er hat viele Bekannte, aber nur wenige Freunde.|Nomen
天才|天才[てんさい]|Genie|彼女[かのじょ]は 天才[てんさい]です。|Sie ist ein Genie.|Nomen
本能|本能[ほんのう]|Instinkt|鳥[とり]は 本能[ほんのう] 的[てき]に 飛[と]ぶことを 覚[おぼ]える。|Vögel lernen instinktiv zu fliegen.|Nomen
有能|有能[ゆうのう]|fähig, tüchtig|彼[かれ]は 有能[ゆうのう]な 弁護士[べんごし]だ。|Er ist ein fähiger Anwalt.|な-Adjektiv
知能|知能[ちのう]|Intelligenz|人間[にんげん]は 人工[じんこう] 知能[ちのう]と 何[なに]が 違[ちが]いますか？|Was unterscheidet einen Menschen von einer KI?|Nomen
無能|無能[むのう]|unfähig|彼[かれ]は 医者[いしゃ]として 無能[むのう]だ。|Als Arzt ist er unfähig.|な-Adjektiv
ムード|ムード|Stimmung, Atmosphäre|トムはムードメーカーだった。|Tom war der Stimmungsmacher.|Nomen
能|能[のう]|Nō (klassisches japanisches Theater)|能[のう]ある 鷹[たか]は 爪[つめ]を 隠[かく]す。|Ein geschickter Falke verbirgt seine Krallen.|Nomen
能|能[のう]|Fähigkeit, Können|私[わたし]は 能[のう]に 興味[きょうみ]を 持[も]つアメリカ 人[じん]に 会[あ]いました。|Ich habe einen Amerikaner getroffen, der sich für das Nō-Theater interessiert.|Nomen
不安|不安[ふあん]|Unruhe, Sorge|彼女[かのじょ]は 電車[でんしゃ]に 間[ま]に 合[あ]わないかもしれないと 不安[ふあん]だった。|Sie hatte Sorge, den Zug nicht mehr zu erwischen.|な-Adjektiv
不満|不満[ふまん]|Unzufriedenheit|私[わたし]は 不満[ふまん]です。|Ich bin unzufrieden.|な-Adjektiv
不足|不足[ふそく]|Mangel, Knappheit|彼[かれ]は 経験[けいけん] 不足[ふそく]だね。|Es mangelt ihm an Erfahrung, nicht?|Nomen (mit する)
どく|どく|aus dem Weg gehen, Platz machen|すみません、ちょっとどいてください。|Entschuldigung, gehen Sie bitte kurz zur Seite.|Verb
不可能|不可能[ふかのう]|unmöglich|次[つぎ]に 何[なに]が 起[お]きるか 知[し]る 事[こと]は 不[ふ] 可能[かのう]だ。|Es ist unmöglich zu wissen, was als nächstes passieren wird.|な-Adjektiv
不十分|不十分[ふじゅうぶん]|unzureichend|読書[どくしょ]には 不[ふ] 十分[じゅうぶん]な 明[あ]かりである。|Das Licht reicht nicht zum Lesen.|な-Adjektiv
不明|不明[ふめい]|unklar, unbekannt|彼女[かのじょ]は 事故[じこ]の 後[あと] 丸一日[まるいちにち] 意識[いしき] 不明[ふめい]だった。|Sie war nach dem Unfall einen ganzen Tag lang bewusstlos.|な-Adjektiv
不良|不良[ふりょう]|schlecht, mangelhaft; Halbstarker|トムは 体調[たいちょう] 不良[ふりょう]で 欠席[けっせき]です。|Tom ist nicht gekommen, weil er in schlechter körperlicher Verfassung ist.|な-Adjektiv
不合格|不合格[ふごうかく]|Nichtbestehen, Durchfallen|トムは 今日[きょう]の 試験[しけん]で 不[ふ] 合格[ごうかく]だった。|Tom hat die heutige Prüfung nicht bestanden.|Nomen
マーケット|マーケット|Markt|妻[つま]は 食品[しょくひん]を 買[か]いに 毎日[まいにち] 村[むら]のマーケットに 出[で]かける。|Meine Frau geht jeden Tag zum Dorfmarkt, um Lebensmittel zu kaufen.|Nomen
不通|不通[ふつう]|Unterbrechung (Verkehr, Verbindung)|電話[でんわ]は 不通[ふつう]なの。|Das Telefon funktioniert nicht.|Nomen
便り|便[たよ]り|Nachricht, Brief|彼[かれ]から 便[たよ]りはあった？|Ist ein Brief von ihm gekommen?|Nomen
大便|大便[だいべん]|Stuhlgang, Kot|病院[びょういん]で 大便[だいべん]の 検査[けんさ]をした。|Im Krankenhaus wurde mein Stuhlgang untersucht.|Nomen (mit する)
番|番[ばん]|an der Reihe; Wache|今度[こんど]は 私[わたし]が 運転[うんてん]する 番[ばん]よ。|Nächstes Mal bin ich mit dem Fahren an der Reihe.|Nomen
長所|長所[ちょうしょ]|Stärke, Vorzug|私[わたし]の 長所[ちょうしょ]って 何[なん]だと 思[おも]う？|Worin sähest du meine Stärken?|Nomen
ファッション|ファッション|Mode|トムはファッションセンスが 全[まった]くない。|Tom hat überhaupt keinen Sinn für Mode.|Nomen
短所|短所[たんしょ]|Schwäche, Nachteil|誰[だれ]にでも 長所[ちょうしょ]と 短所[たんしょ]がある。|Jeder hat seine Stärken und Schwächen.|Nomen
所々|所々[ところどころ]|hier und da, stellenweise|その 習慣[しゅうかん]は 今[いま]なお 日本[にほん]の 所々[ところどころ]で 行[おこな]われている。|Dieser Brauch wird noch heute an manchen Orten in Japan gepflegt.|Nomen
名|名[な]|Name; Ruf|彼女[かのじょ]の 名[な]は 世界中[せかいじゅう]で 知[し]られています。|Ihr Name ist auf der ganzen Welt bekannt.|Nomen
名人|名人[めいじん]|Meister(in), Könner(in)|彼[かれ]はうそつきの 名人[めいじん]だ。|Er ist ein Meister im Lügen.|Nomen
地名|地名[ちめい]|Ortsname|最初[さいしょ]、 北海道[ほっかいどう]の 地名[ちめい]かと 思[おも]った。|Zuerst dachte ich, es sei ein Ortsname auf Hokkaidō.|Nomen
名所|名所[めいしょ]|Sehenswürdigkeit, berühmter Ort|スイスには 名所[めいしょ]が 多[おお]い。|In der Schweiz gibt es viele Sehenswürdigkeiten.|Nomen
ブレーキ|ブレーキ|Bremse|ブレーキがきかなかった。|Die Bremse funktionierte nicht.|Nomen
町外れ|町外[まちはず]れ|Stadtrand|私[わたし] 達[たち]は、 町外[まちはず]れの 小[ちい]さなホテルに 泊[と]まった。|Wir übernachteten in einem kleinen Hotel am Stadtrand.|Nomen
町中|町中[まちなか]|in der Stadt, Innenstadt|噂[うわさ]は 町中[まちなか]に 広[ひろ]まった。|Das Gerücht verbreitete sich in der ganzen Stadt.|Nomen
村|村[むら]|Dorf|これは 私[わたし]の 父[ちち]が 生[う]まれた 村[むら]です。|Dies ist das Dorf, in dem mein Vater geboren wurde.|Nomen
都内|都内[とない]|im Stadtgebiet von Tokio|都内[とない]のホテルに 泊[と]まりました。|Ich habe in einem Hotel im Stadtgebiet von Tōkyō übernachtet.|Nomen
都心|都心[としん]|Stadtzentrum|本当[ほんとう]に 都心[としん]に 引[ひ]っ 越[こ]ししたいのか？|Bist du dir sicher, dass du in die Innenstadt ziehen willst?|Nomen
ミス|ミス|Fehler|注意[ちゅうい]すればするほど、ミスをしなくなる。|Je umsichtiger du bist, desto weniger Fehler machst du.|Nomen (mit する)
都|都[と]|Präfektur Tokio (Verwaltungseinheit)|ロンドンはもはや 霧[きり]の 都[と]ではない。|London ist nicht mehr die Hauptstadt des Nebels.|Nomen
都会|都会[とかい]|Großstadt|都会[とかい]では 空気[くうき]が 汚染[おせん]されている。|In Großstädten ist die Luft verschmutzt.|Nomen
都|都[みやこ]|Hauptstadt, Metropole|奈良[なら]はとても 古[ふる]い 都[みやこ]です。|Nara ist eine sehr alte Hauptstadt.|Nomen
様子|様子[ようす]|Zustand, Aussehen, Anschein|彼[かれ]の 様子[ようす]から 見[み]て 病気[びょうき]だということが 解[わか]る。|Man sieht ihm an, dass er krank ist.|Nomen
物価|物価[ぶっか]|Preise, Preisniveau|物価[ぶっか]が 下[さ]がった。|Die Preise sind gefallen.|Nomen
ヨット|ヨット|Segelboot, Jacht|ヨットはブイを 回[まわ]った。|Die Jacht umsegelte eine Boje.|Nomen
物体|物体[ぶったい]|Objekt, Körper|その 物体[ぶったい]の 表面[ひょうめん]はかなり 粗[あら]い。|Die Oberfläche des Objekts ist ziemlich rau.|Nomen
本物|本物[ほんもの]|das Echte, Original|今[いま]までに 本物[ほんもの]の 牛[うし]を 見[み]たことがない。|Bisher habe ich nie eine echte Kuh gesehen.|Nomen
物理|物理[ぶつり]|Physik|彼[かれ]は 物理[ぶつり] 学者[がくしゃ]だ。|Er ist Physiker.|Nomen
物事|物事[ものごと]|Dinge, Angelegenheiten|物事[ものごと]をあるがままに 受[う]け 取[と]れ。|Nimm die Dinge, wie sie kommen.|Nomen
名物|名物[めいぶつ]|Spezialität, berühmtes Erzeugnis|この 地方[ちほう]の 名物[めいぶつ] 料理[りょうり]がありますか。|Gibt es eine Spezialität dieser Gegend?|Nomen
物知り|物知[ものし]り|kenntnisreicher Mensch|彼[かれ]はいつも 物知[ものし]り 顔[かお]で 話[はな]す。|Er redet immer mit Besserwissermiene.|Nomen
なかなか|なかなか|ziemlich, recht|このテレビ 番組[ばんぐみ]はなかなか 面白[おもしろ]い。|Diese Fernsehsendung ist recht interessant.|Adverb
物覚え|物覚[ものおぼ]え|Merkfähigkeit, Gedächtnis|物覚[ものおぼ]えが 悪[わる]くなってきてね。|Mein Gedächtnis lässt langsam nach.|Nomen
体重|体重[たいじゅう]|Körpergewicht|体重[たいじゅう]が 増[ふ]えたんだ。|Ich hab zugenommen.|Nomen
手軽|手軽[てがる]|einfach, unkompliziert|歩[ある]くことは 最[もっと]も 手軽[てがる]な 健康法[けんこうほう]だ。|Gehen ist die einfachste Methode, gesund zu bleiben.|Adjektiv
多量|多量[たりょう]|große Menge|機械[きかい]は 多量[たりょう]の 電気[でんき]を 消費[しょうひ]する。|Maschinen verbrauchen eine große Menge an elektrischer Energie.|Nomen
量る|量[はか]る|wiegen, abmessen|今日[きょう]から 毎日[まいにち] 体重[たいじゅう] 量[はか]ることにした。|Ich habe mich entschlossen, mich von heute an jeden Tag zu wiegen.|Verb
ロック|ロック|Rock (Musik)|私[わたし]はロックが 好[す]きです。|Ich mag Rock.|Nomen
量|量[りょう]|Menge|ここの 交通[こうつう] 量[りょう]は 増[ふ]えた。|Das Verkehrsaufkommen ist hier sehr hoch.|Nomen
大量|大量[たいりょう]|große Menge, Masse|彼女[かのじょ]は 小麦粉[こむぎこ]と 油[あぶら]を 大量[たいりょう]に 買[か]い 込[こ]んだ。|Sie hat eine große Menge Mehl und Öl eingekauft.|Nomen
年配|年配[ねんぱい]|fortgeschrittenes Alter, älter|年配[ねんぱい]の 方[ほう]が 好[す]きです。|Ich mag ältere Leute.|Nomen
送金|送金[そうきん]|Überweisung, Geldsendung|トムはメアリーに 送金[そうきん]しました。|Tom hat Maria Geld geschickt.|Nomen (mit する)
郵送|郵送[ゆうそう]|Postversand|価格[かかく]には 郵送[ゆうそう] 料[りょう]が 含[ふく]まれている。|Im Preis ist das Porto enthalten.|Nomen (mit する)
わざわざ|わざわざ|extra, eigens|わざわざお 見送[みおく]りありがとうございます。|Danke, dass Sie extra gekommen sind, um mich zu verabschieden.|Adverb
取り上げる|取[と]り 上[あ]げる|aufgreifen; wegnehmen|会議[かいぎ]で 彼[かれ]の 提案[ていあん]が 取[と]り 上[あ]げられた。|Seine Vorschläge sind in der Sitzung angenommen worden.|Verb
取り入れる|取[と]り 入[い]れる|aufnehmen, übernehmen; einbringen|洗濯物[せんたくもの]を 中[なか]へ 取[と]り 入[い]れて 下[くだ]さい。|Hole bitte die Wäsche rein.|Verb
取り決め|取[と]り 決[き]め|Vereinbarung, Abmachung|この 取[と]り 決[き]めは 一時的[いちじてき]なものでしかない。|Diese Übereinkunft ist nur vorübergehend.|Nomen
取れる|取[と]れる|geerntet werden, gefangen werden|私[わたし]は 忙[いそが]しくて 休暇[きゅうか]が 取[と]れない。|Ich habe keine Zeit für Urlaub.|Verb
取り消す|取[と]り 消[け]す|stornieren, zurücknehmen|取[と]り 消[け]します。|Ich nehme alles zurück, was ich gesagt habe.|Verb
取消し|取消[とりけ]し|Stornierung, Widerruf|予約[よやく]の 取消[とりけ]しは 電話[でんわ]でお 願[ねが]いします。|Stornierungen der Reservierung bitte telefonisch.|Nomen (mit する)
パイロット|パイロット|Pilot(in)|私[わたし]の 夢[ゆめ]はパイロットになることです。|Es ist mein Traum, Pilot zu werden.|Nomen
取り出す|取[と]り 出[だ]す|herausnehmen|メアリーは 卵[たまご]を 一[ひと]つずつ 取[と]り 出[だ]した。|Maria nahm die Eier einzeln heraus.|Verb
届け|届[とど]け|Meldung, Anzeige (bei einer Behörde)|市役所[しやくしょ]に 届[とど]けを 出[だ]しました。|Ich habe im Rathaus eine Meldung eingereicht.|Nomen
待ち合わせ|待[ま]ち 合[あ]わせ|Verabredung, Treffen|どこで 待[ま]ち 合[あ]わせしましょうか。|Wo treffen wir uns?|Nomen (mit する)
待ち遠しい|待[ま]ち 遠[どお]しい|sehnlich erwartet, kaum erwarten können|明日[あした]が 待[ま]ち 遠[どお]しいよ。|Ich bin gespannt auf morgen.|Adjektiv
待ち合わせる|待[ま]ち 合[あ]わせる|sich verabreden, sich treffen|待[ま]ち 合[あ]わせ 場所[ばしょ]どこにする？|Wo wollen wir uns treffen?|Verb
どうやら|どうやら|anscheinend, offenbar|どうやらトムはメアリーのことが 嫌[きら]いらしい。|Offenbar mag Tom Maria nicht.|Adverb
持ち物|持[も]ち 物[もの]|persönliche Sachen, Besitz|持[も]ち 物[もの]をまとめなさい。|Pack deine Sachen!|Nomen
長持ち|長持[ながも]ち|lange halten, Haltbarkeit|これはあまり 長持[ながも]ちしません。|Das hält nicht sehr lange.|Nomen (mit する)
値打ち|値打[ねう]ち|Wert|この 本[ほん]は 読[よ]む 値打[ねう]ちがあるとおもう。|Ich denke, dass dieses Buch es wert ist, gelesen zu werden.|Nomen
投書|投書[とうしょ]|Leserbrief, Zuschrift|投書[とうしょ]は 視聴者[しちょうしゃ]からの 唯一[ゆいいつ]の 声[こえ]です。|Zuschriften sind die einzige Stimme unserer Zuschauer.|Nomen (mit する)
役所|役所[やくしょ]|Amt, Behörde|あれが 市[し] 役所[やくしょ]だろう。|Das muss das Rathaus sein.|Nomen
ふと|ふと|plötzlich, zufällig|私[わたし]の 見[み]たことを 話[はな]そうかなとふと 思[おも]った。|Plötzlich fragte ich mich, ob ich über das Gesehene sprechen sollte.|Adverb
役人|役人[やくにん]|Beamte(r)|税関[ぜいかん]の 役人[やくにん]は 箱[はこ]を 検査[けんさ]した。|Der Zollbeamte untersuchte die Kisten.|Nomen
役目|役目[やくめ]|Aufgabe, Pflicht|そのことを 決[き]めるのは 君[きみ]の 役目[やくめ]だ。|Es ist deine Aufgabe, dies zu entscheiden.|Nomen
役|役[やく]|Rolle; Amt|何[なに]かお 役[やく]に 立[た]てることはありますか？|Kann ich behilflich sein?|Nomen
生える|生[は]える|wachsen, sprießen|月[つき]に 草[くさ]は 生[は]えていない。|Auf dem Mond wächst kein Gras.|Verb
長生き|長生[ながい]き|langes Leben|たいていの 国[くに]では 女性[じょせい]は 男性[だんせい]より 長生[ながい]きだ。|In den meisten Ländern leben Frauen länger als Männer.|Nomen (mit する)
ベテラン|ベテラン|erfahrene Kraft, alter Hase|彼[かれ]はベテランのドライバーだ。|Er ist ein erfahrener Fahrer.|Nomen
生やす|生[は]やす|wachsen lassen|トムは 口[くち]ひげを 生[は]やした。|Tom hat sich einen Schnurrbart wachsen lassen.|Verb
生|生[なま]|roh, frisch|これ、 生[なま]で 食[た]べても 大丈夫[だいじょうぶ]？|Kann man das roh essen?|な-Adjektiv
無生物|無生物[むせいぶつ]|unbelebtes Ding|石[いし]や 水[みず]は 無生物[むせいぶつ]です。|Steine und Wasser sind unbelebte Dinge.|Nomen
男性|男性[だんせい]|Mann, männlich|彼女[かのじょ]はきのう 背[せ]の 高[たか]い 男性[だんせい]を 見[み]ました。|Gestern hat sie einen großen Mann gesehen.|Nomen
理性|理性[りせい]|Vernunft|人間[にんげん]は 理性[りせい]の 動物[どうぶつ]である。|Der Mensch ist ein vernunftbegabtes Tier.|Nomen
ボーナス|ボーナス|Bonus, Sonderzahlung|ボーナスをもらった。|Ich habe einen Bonus bekommen.|Nomen
土産|土産[みやげ]|Mitbringsel, Souvenir|お 土産[みやげ] 何[なに] 買[か]ったの？|Was für ein Souvenir hast du gekauft?|Nomen
徒歩|徒歩[とほ]|zu Fuß|私[わたし]はいつも 徒歩[とほ]で 通学[つうがく]している。|Ich gehe immer zu Fuß zur Schule.|Nomen
学ぶ|学[まな]ぶ|lernen, studieren|教[おし]える 事[こと]は 学[まな]ぶ 事[こと]である。|Lehren heißt lernen.|Verb
文学|文学[ぶんがく]|Literatur|私[わたし]は 君[きみ]ほど 文学[ぶんがく]には 興味[きょうみ]がない。|Ich interessiere mich nicht so sehr für Literatur wie du.|Nomen
体育|体育[たいいく]|Sportunterricht, Leibeserziehung|僕[ぼく]は 体育[たいいく]の 授業中[じゅぎょうちゅう]に 怪我[けが]をした。|Ich habe mich im Sportunterricht verletzt.|Nomen
そっくり|そっくり|zum Verwechseln ähnlich; vollständig|お 姉[ねえ]さんにそっくりだね。|Du siehst deiner Schwester sehr ähnlich.|Adjektiv
体制|体制[たいせい]|System, Ordnung|反[はん] 体制[たいせい] 派[は]はすべて 旧体制[きゅうたいせい]のもとで 粛清[しゅくせい]されました。|Unter dem alten Regime wurden alle Regimegegner beseitigt.|Nomen
強まる|強[つよ]まる|stärker werden|夜[よる]になると 歯[は]の 痛[いた]みがいっそう 強[つよ]まる。|Nachts werden die Zahnschmerzen noch stärker.|Verb
強める|強[つよ]める|verstärken|活動家[かつどうか]たちは 反対運動[はんたいうんどう]を 強[つよ]めています。|Die Aktivisten verstärken ihre Protestbewegung.|Verb
力強い|力強[ちからづよ]い|kraftvoll; beruhigend|間近[まぢか]に 迫[せま]った 景気回復[けいきかいふく]は、 急速[きゅうそく]で 力強[ちからづよ]いものだろう。|Der bevorstehende Aufschwung dürfte schnell und kräftig ausfallen.|Adjektiv
強気|強気[つよき]|forsch, selbstsicher|あまり 強気[つよき]になるなよ。|Sei nicht zu forsch.|な-Adjektiv
レンズ|レンズ|Linse, Brillenglas|高[たか]くついても、メガネのレンズは 薄[うす]い 方[ほう]が 好[す]きだな。|Wenn sie auch teurer sind, gefallen mir Brillen mit dünnen Gläsern doch besser.|Nomen
弱まる|弱[よわ]まる|schwächer werden|あらしの 勢[いきお]いが 弱[よわ]まった。|Der Sturm legte sich.|Verb
弱める|弱[よわ]める|abschwächen|すみません、 冷房[れいぼう]をちょっと 弱[よわ]めていただけませんか？|Entschuldigen Sie. Könnten Sie die Klimaanlage wohl etwas schwächer stellen?|Verb
弱る|弱[よわ]る|schwach werden; in Verlegenheit sein|私[わたし]の 母[はは]は 長[なが]い 病気[びょうき]でとても 弱[よわ]っていた。|Meine Mutter war nach langer Krankheit sehr schwach.|Verb
弱み|弱[よわ]み|Schwachstelle|俺[おれ]が 弱[よわ]みを 見[み]せられるのはトムだけだよ。|Der Einzige, dem gegenüber ich Schwäche zeigen kann, ist Tom.|Nomen
弱気|弱気[よわき]|zaghaft, mutlos|負[ま]けてから 彼[かれ]は 弱気[よわき]になりました。|Seit der Niederlage ist er mutlos geworden.|な-Adjektiv
引き受ける|引[ひ]き 受[う]ける|übernehmen, annehmen|彼[かれ]の 息子[むすこ]が 工場[こうじょう]の 経営[けいえい]を 引[ひ]き 受[う]けた。|Sein Sohn übernahm die Leitung der Fabrik.|Verb
ペース|ペース|Tempo|彼[かれ]は 速[はや]いペースで 歩[ある]いた。|Er ging in schnellem Tempo.|Nomen
引き上げる|引[ひ]き 上[あ]げる|hochziehen, bergen; anheben|彼[かれ]らは 船[ふね]を 岸[きし]に 引[ひ]き 上[あ]げた。|Sie zogen ihr Boot auf den Strand.|Verb
引き出す|引[ひ]き 出[だ]す|herausholen, hervorlocken; abheben|私[わたし]は 封筒[ふうとう]を 開[あ]けて 手紙[てがみ]を 引[ひ]き 出[だ]した。|Ich öffnete den Umschlag und zog den Brief heraus.|Verb
引き取る|引[ひ]き 取[と]る|übernehmen, zu sich nehmen|私[わたし]はそれを 引[ひ]き 取[と]らなかった。|Ich habe es nicht abgeholt.|Verb
値引き|値引[ねび]き|Preisnachlass|価格[かかく]を 値引[ねび]きする 店[みせ]もあります。|Manche Geschäfte geben einen Preisnachlass.|Nomen (mit する)
長引く|長引[ながび]く|sich in die Länge ziehen|今年[ことし]の 梅雨[つゆ]は 長引[ながび]きそうですね。|Dieses Jahr scheint sich die Regenzeit aber hinzuziehen.|Verb
マラソン|マラソン|Marathon|彼[かれ]は 風邪[かぜ]のためマラソン 参加[さんか]をあきらめました。|Wegen seiner Erkältung gab er es auf, am Marathon teilzunehmen.|Nomen
引きずる|引[ひ]きずる|schleifen, hinter sich herziehen|彼[かれ]は 足[あし]を 引[ひ]きずって 歩[ある]いた。|Er zog beim Gehen ein Bein nach.|Verb
引き分け|引[ひ]き 分[わ]け|Unentschieden|雨[あめ]のため、 野球[やきゅう]の 試合[しあい]は 引[ひ]き 分[わ]けになった。|Das Baseballspiel wurde wegen des Regens als unentschieden gewertet.|Nomen
引き止める|引[ひ]き 止[と]める|zurückhalten, aufhalten|引[ひ]き 止[と]めても 無駄[むだ]だ。|Es ist zwecklos, mich aufhalten zu wollen.|Verb
見習う|見習[みなら]う|sich ein Beispiel nehmen, nachahmen|姉[ねえ]さんを 見習[みなら]いなさい。|Nimm dir ein Beispiel an deiner Schwester!|Verb
慣れ|慣[な]れ|Gewöhnung, Routine|トムはテレビ 慣[な]れしている。|Tom ist das Fernsehen gewohnt.|Nomen
よほど|よほど|sehr, in hohem Maße|よほど 変[へん]なことでも 言[い]ったんじゃない？|Du hast wohl etwas ziemlich Seltsames gesagt, oder?|Adverb
慣らす|慣[な]らす|gewöhnen|先生[せんせい]は 子供[こども]らを 学校[がっこう]に 慣[な]らすように 努力[どりょく]した。|Der Lehrer bemühte sich, die Schüler an die Schule zu gewöhnen.|Verb
入試|入試[にゅうし]|Aufnahmeprüfung|彼女[かのじょ]は 入試[にゅうし]を 前[まえ]にして 神経質[しんけいしつ]になっていた。|Vor der Aufnahmeprüfung war sie nervös.|Nomen
試す|試[ため]す|ausprobieren, testen|試[ため]してみたいな。|Das würde ich gerne einmal ausprobieren.|Verb
試し|試[ため]し|Versuch, Probe|試[ため]しに 左手[ひだりて]で 書[か]いてみた。|Ich habe versucht, mit links zu schreiben.|Nomen
体験|体験[たいけん]|Erlebnis, persönliche Erfahrung|私[わたし]の 両親[りょうしん]の 世代[せだい]は 戦争[せんそう]を 体験[たいけん]していた。|Die Generation meiner Eltern hat den Krieg erlebt.|Nomen (mit する)
物質|物質[ぶっしつ]|Stoff, Substanz|彼[かれ]らは 物質[ぶっしつ] 的[てき]にも 精神的[せいしんてき]にも 彼[かれ]を 支[ささ]えた。|Sie unterstützten ihn sowohl materiell als auch geistig.|Nomen
ラグビー|ラグビー|Rugby|トムはラグビーの 試合中[しあいちゅう]に 左[ひだり] 足首[あしくび]を 骨折[こっせつ]した。|Tom hat sich während eines Rugby-Spiels den linken Knöchel gebrochen.|Nomen
品質|品質[ひんしつ]|Qualität (von Waren)|こちらはあちらよりはるかに 品質[ひんしつ]が 良[よ]いです。|Das hier hat eine viel bessere Qualität als das.|Nomen
本質|本質[ほんしつ]|Wesen, Kern|本質[ほんしつ] 的[てき]には 何[なに]も 変[か]わっていない。|Im Wesentlichen hat sich nichts geändert.|Nomen
問う|問[と]う|fragen; zur Bedingung machen|試合[しあい]は 晴雨[せいう]を 問[と]わず 行[おこな]われます。|Das Spiel wird stattfinden, ob bei Regen oder Sonnenschein.|Verb
問い合わせる|問[と]い 合[あ]わせる|anfragen, sich erkundigen|観光案内所[かんこうあんないじょ]に 問[と]い 合[あ]わせてください。|Wenden Sie sich bitte ans Fremdenverkehrsbüro!|Verb
問い|問[と]い|Frage|以下[いか]の 問[と]いに 英語[えいご]で 答[こた]えよ。|Beantworte die folgenden Fragen auf Englisch.|Nomen
ラッシュ|ラッシュ|Andrang, Stoßzeit|東京[とうきょう]のラッシュ 時[じ]は、 交通量[こうつうりょう]が 多[おお]い。|Zu den Stoßzeiten herrscht in Tokio ein sehr hohes Verkehrsaufkommen.|Nomen
問屋|問屋[とんや]|Großhandel, Großhändler|この 店[みせ]は 問屋[とんや]から 品物[しなもの]を 買[か]っています。|Dieser Laden bezieht seine Ware vom Großhändler.|Nomen
話題|話題[わだい]|Gesprächsthema; viel besprochen|私[わたし]は 話題[わだい]を 変[か]えようとした。|Ich habe versucht, das Thema zu wechseln.|Nomen
題名|題名[だいめい]|Titel|彼女[かのじょ]は 私[わたし]が 題名[だいめい]を 知[し]らない 歌[うた]を 歌[うた]った。|Sie sang ein Lied, dessen Titel ich nicht kenne.|Nomen
題|題[だい]|Titel, Thema|「 友情[ゆうじょう]」という 題[だい]で 作文[さくぶん]を 書[か]きなさい。|Schreibt einen Aufsatz mit dem Titel „Freundschaft“.|Nomen
単語|単語[たんご]|Wort, Vokabel|単語[たんご] 帳[ちょう] 作[つく]るのって 意味[いみ]あると 思[おも]う？|Hältst du es für sinnvoll, ein Vokabelheft anzulegen?|Nomen
ロープ|ロープ|Seil|ロープにつかまりなさい。|Halt dich am Seil fest!|Nomen
単に|単[たん]に|bloß, einfach nur|彼[かれ]は 単[たん]に 冗談[じょうだん]としてそれを 言[い]った。|Er hat das bloß als Scherz gesagt.|Adverb
地点|地点[ちてん]|Punkt, Stelle|道路[どうろ]はこの 地点[ちてん]で 右[みぎ]にカーブしている。|An dieser Stelle macht die Straße eine Kurve nach rechts.|Nomen
満点|満点[まんてん]|volle Punktzahl|トムは 化学[かがく]で 満点[まんてん]を 取[と]った。|Tom hatte in Chemie die volle Punktzahl.|Nomen
点|点[てん]|Punkt|明[あき]らかにこれが 最[もっと]も 重要[じゅうよう]な 点[てん]です。|Offensichtlich ist das der wichtigste Punkt.|Nomen
多数|多数[たすう]|große Anzahl, Mehrheit|家[いえ]の 前[まえ]に 多数[たすう]の 車[くるま]が 駐車[ちゅうしゃ]している。|Vor dem Haus stehen eine Menge Autos.|Nomen
ダム|ダム|Staudamm|ダムには 水[みず]がたくさんたまってますか？|Hat sich viel Wasser in dem Damm gesammelt?|Nomen
複数|複数[ふくすう]|mehrere; Plural|一度[いちど]に 複数[ふくすう]の 仕事[しごと]をこなすのは 得意[とくい]ではありません。|Ich kann nicht gut mehrere Aufgaben gleichzeitig erledigen.|Nomen
無数|無数[むすう]|unzählig|宇宙[うちゅう]には 無数[むすう]の 星[ほし]がある。|Es gibt unzählig viele Sterne im Universum.|な-Adjektiv
日数|日数[にっすう]|Anzahl der Tage|長[なが]い 日数[にっすう]ではなかったが、そこに 滞在[たいざい]された。|Es waren nicht viele Tage, aber sie hielten sich dort auf.|Nomen
点数|点数[てんすう]|Punktzahl, Note|彼女[かのじょ]は 英語[えいご]の 点数[てんすう]がよい。|Sie bekommt in Englisch gute Noten.|Nomen
単数|単数[たんすう]|Singular, Einzahl|今日[きょう]は、 一般動詞[いっぱんどうし]の 三人称[さんにんしょう] 単数[たんすう] 現在[げんざい]について 説明[せつめい]します。|Heute erkläre ich die dritte Person Singular Präsens der Vollverben.|Nomen
手数|手数[てすう]|Mühe, Umstände|手数[てすう] 料[りょう]はいくらですか。|Wie hoch ist die Bearbeitungsgebühr?|Nomen
ダウン|ダウン|Ausfall, Absturz; unten|彼女[かのじょ]は 風邪[かぜ]でダウンした。|Er liegt mit einer Erkältung flach.|Nomen (mit する)
人数|人数[にんずう]|Personenzahl|私[わたし]の 家族[かぞく]は 大[だい] 人数[にんずう]だ。|Ich habe eine große Familie.|Nomen
回り|回[まわ]り|Umgebung, um … herum|人々[ひとびと]が 我々[われわれ]の 回[まわ]りに 集[あつ]まった。|Die Leute versammelten sich um uns herum.|Nomen
回り道|回[まわ]り 道[みち]|Umweg|彼[かれ]らはぐるっと 回[まわ]り 道[みち]をしてやってきた。|Sie kamen auf einem großen Umweg her.|Nomen
枚数|枚数[まいすう]|Anzahl (von Blättern, flachen Dingen)|コピーの 枚数[まいすう]を 数[かぞ]えてください。|Zählen Sie bitte die Anzahl der Kopien.|Nomen
負け|負[ま]け|Niederlage|彼[かれ]は 負[ま]けを 認[みと]めた。|Er räumte seine Niederlage ein.|Nomen
トレーニング|トレーニング|Training|彼[かれ]は 筋肉[きんにく]をつけるためにトレーニングしている。|Er trainiert, um Muskeln aufzubauen.|Nomen (mit する)
負担|負担[ふたん]|Last, Kostenübernahme|私[わたし]の 問題[もんだい]であなたに 負担[ふたん]をかけたくない。|Ich will Sie nicht mit meinen Problemen belasten.|Nomen (mit する)
分担|分担[ぶんたん]|Aufteilung (von Aufgaben)|タクシー 代[だい]は 君[きみ]と 分担[ぶんたん]しよう。|Die Taxikosten teilen wir uns.|Nomen (mit する)
当初|当初[とうしょ]|Anfang, ursprünglich|当初[とうしょ]から 好[す]きでしたよ。|Ich mochte ihn von Anfang an.|Nomen
当局|当局[とうきょく]|die zuständigen Behörden|この 建物[たてもの]に 入[はい]るには 当局[とうきょく]の 許可[きょか]を 得[え]る 必要[ひつよう]がある。|Dieses Gebäude darf nur mit Genehmigung der zuständigen Behörden betreten werden.|Nomen
当日|当日[とうじつ]|der betreffende Tag, am Tag selbst|何[なん]の 問題[もんだい]も 解決[かいけつ]されないまま 当日[とうじつ]を 迎[むか]えた。|Der Tag kam, ohne dass irgendein Problem gelöst war.|Nomen
そっと|そっと|sanft, leise, behutsam|トムはそっとドアを 開[あ]けました。|Tom öffnete leise die Tür.|Adverb
手当て|手当[てあ]て|Zulage; ärztliche Versorgung|これとは 別[べつ]に 特別[とくべつ] 手当[てあ]てがつく。|Zusätzlich dazu gibt es eine Sonderzulage.|Nomen (mit する)
当分|当分[とうぶん]|vorerst, einstweilen|当分[とうぶん]の 間[あいだ]は 柔軟[じゅうなん]な 戦術[せんじゅつ]を 取[と]るべきだ。|Wir sollten im Moment eine flexible Taktik anwenden.|Adverb
当人|当人[とうにん]|der/die Betreffende selbst|当人[とうにん]のいないところで 悪口[わるぐち]を 言[い]うべきでない。|Man sollte nicht schlecht über jemanden reden, wenn der Betreffende nicht dabei ist.|Nomen
当番|当番[とうばん]|Dienst, Diensthabende(r)|学校[がっこう]では 毎週[まいしゅう] 掃除[そうじ] 当番[とうばん]が 決[き]まっている。|In der Schule wird jede Woche festgelegt, wer Putzdienst hat.|Nomen
日当たり|日当[ひあ]たり|Sonneneinstrahlung, sonnige Lage|我[わ]が 家[や]のリビングって、 日当[ひあ]たりがいいんだ。|Unser Wohnzimmer ist schön sonnig.|Nomen
天然|天然[てんねん]|natürlich, Natur-|オーストラリアは 天然[てんねん] 資源[しげん]が 豊[ゆた]かである。|Australien ist reich an natürlichen Ressourcen.|Nomen
マーク|マーク|Zeichen, Logo|マークが 私[わたし]の 本[ほん]を 持[も]っている。|Mark hat mein Buch.|Nomen (mit する)
文法|文法[ぶんぽう]|Grammatik|文法[ぶんぽう]が 嫌[きら]いです。|Ich hasse Grammatik.|Nomen
法学部|法学部[ほうがくぶ]|juristische Fakultät|僕[ぼく]も 法学[ほうがく] 部[ぶ] 行[い]けばよかったな。|Ich hätte auch Jura studieren sollen.|Nomen
法|法[ほう]|Gesetz, Recht|すべての 人[ひと]は 法[ほう]の 前[まえ]に 平等[びょうどう]です。|Vor dem Gesetz sind alle gleich.|Nomen
法則|法則[ほうそく]|Gesetzmäßigkeit, Regel|今日[きょう]はオームの 法則[ほうそく]に 関[かん]する 実験[じっけん]を 行[おこな]います。|Heute führen wir ein Experiment in Bezug auf das Ohmsche Gesetz durch.|Nomen
不規則|不規則[ふきそく]|unregelmäßig|生理[せいり]が 不[ふ] 規則[きそく]です。|Meine Periode kommt unregelmäßig.|な-Adjektiv
たった|たった|nur, bloß|たった 今[いま] 雨[あめ]が 降[ふ]り 始[はじ]めた。|Es hat gerade angefangen zu regnen.|Adverb
経る|経[へ]る|durchlaufen; vergehen|年月[としつき]を 経[へ]て 物事[ものごと]がどう 変[か]わっていくか 見[み]るのは 面白[おもしろ]そうだ。|Es wäre lustig zu sehen, wie die Dinge sich im Lauf der Jahre ändern.|Verb
有利|有利[ゆうり]|vorteilhaft, günstig|コンピューターが 使[つか]えるのは 有利[ゆうり]である。|Es ist von Vorteil, Computer bedienen zu können.|な-Adjektiv
不利|不利[ふり]|Nachteil, ungünstig|判決[はんけつ]は 政府[せいふ]に 不利[ふり]だった。|Die Regierung hatte bei dem Urteil das Nachsehen.|な-Adjektiv
利口|利口[りこう]|klug, schlau|彼女[かのじょ]はとても 利口[りこう]だ。|Sie ist sehr klug.|な-Adjektiv
利子|利子[りし]|Zinsen|その 老婆[ろうば]は 三分[さんぶん]の 利子[りし]で 金[かね]を 貸[か]す。|Die alte Frau verleiht Geld zu einem Zinssatz von drei Prozent.|Nomen
たまたま|たまたま|zufällig|私[わたし] 達[たち]はたまたま 駅[えき]で 出会[であ]ったんだ。|Wir trafen uns zufällig am Bahnhof.|Adverb
左利き|左利[ひだりき]き|Linkshänder(in), linkshändig|トムは 左利[ひだりき]きだが、 字[じ]を 書[か]くときは 右手[みぎて]だ。|Tom ist Linkshänder, schreibt aber mit rechts.|Nomen
利益|利益[りえき]|Gewinn, Nutzen|彼[かれ]は 自分[じぶん]の 利益[りえき]のために 行動[こうどう]している。|Er handelt eigennützig.|Nomen
有益|有益[ゆうえき]|nützlich, gewinnbringend|馬[うま]は 有益[ゆうえき]な 動物[どうぶつ]である。|Pferde sind nützliche Tiere.|な-Adjektiv
買収|買収[ばいしゅう]|Aufkauf, Übernahme; Bestechung|投資家[とうしか]グループは 企業[きぎょう] 買収[ばいしゅう]を 企[くわだ]てています。|Eine Investorengruppe will das Unternehmen aufkaufen.|Nomen (mit する)
年収|年収[ねんしゅう]|Jahreseinkommen|年収[ねんしゅう]はおいくらですか？|Wie hoch ist Ihr Jahreseinkommen?|Nomen
木造|木造[もくぞう]|aus Holz gebaut|日本[にほん]の 家[いえ]はたいてい 木造[もくぞう]である。|Die meisten japanischen Häuser sind aus Holz.|Nomen
テンポ|テンポ|Tempo|テンポのいい 映画[えいが]が 好[す]きです。|Ich mag Filme mit flottem Tempo.|Nomen
必然|必然[ひつぜん]|zwangsläufig, unvermeidlich|それは 必然[ひつぜん] 的[てき]に 延期[えんき]しなければならない。|Es muss notwendigerweise verschoben werden.|Nomen
要する|要[よう]する|erfordern, benötigen|明白[めいはく]すぎて 証明[しょうめい]を 要[よう]しない。|Es ist so offensichtlich, dass es keinen Beweis benötigt.|Verb
不要|不要[ふよう]|unnötig, nicht mehr gebraucht|小屋[こや]をきれいにして 不要[ふよう]のものを 捨[す]てなさい。|Mach die Hütte sauber und schmeiß alles weg, was du nicht brauchst.|な-Adjektiv
要するに|要[よう]するに|kurz gesagt|要[よう]するに 知[し]らないし 知[し]りたくもない。|Kurz gesagt: ich weiß es nicht und will es auch nicht wissen.|Adverb
不必要|不必要[ふひつよう]|unnötig, überflüssig|君[きみ]の 論文[ろんぶん]から 不[ふ] 必要[ひつよう]な 語[ご]を 削除[さくじょ]した 方[ほう]がよろしい。|Verwende in deinem Aufsatz besser keine unnötigen Ausdrücke.|な-Adjektiv
プラン|プラン|Plan|私[わたし]たちは 彼[かれ]のプランに 賛成[さんせい]した。|Wir stimmten seinem Plan zu.|Nomen
要点|要点[ようてん]|Hauptpunkt, Kernpunkt|それでは 要点[ようてん]をノートにまとめてください。|Also dann, macht euch zu den wichtigsten Punkten bitte Notizen.|Nomen
求める|求[もと]める|verlangen, suchen, wünschen|幸福[こうふく]を 求[もと]める 権利[けんり]は 誰[だれ]にもある。|Jeder hat das Recht, sein Glück zu suchen.|Verb
要請|要請[ようせい]|Ersuchen, Bitte|ただの 要請[ようせい]で 強制[きょうせい]ではない。|Es ist nur eine Bitte, kein Zwang.|Nomen (mit する)
額|額[ひたい]|Stirn|額[ひたい]に 汗[あせ]をかいています。|Ich habe Schweiß auf der Stirn.|Nomen
計る|計[はか]る|messen (Zeit, Menge)|まず 体温[たいおん]を 計[はか]りましょう。|Messen wir erst einmal Ihre Temperatur!|Verb
ほっと|ほっと|erleichtert|トムはほっとしたようだ。|Tom sieht erleichtert aus.|Adverb
体温計|体温計[たいおんけい]|Fieberthermometer|看護婦[かんごふ]は 体温[たいおん] 計[けい]で 彼[かれ]の 体温[たいおん]を 計[はか]った。|Die Krankenschwester maß seine Temperatur mit einem Fieberthermometer.|Nomen
日差し|日差[ひざ]し|Sonnenlicht, Sonnenstrahlen|今日[きょう]は 日差[ひざ]しの 割[わり]に 肌寒[はださむ]い 一日[いちにち]でした。|Dafür, dass die Sonne schien, war es heute recht kühl.|Nomen
物差し|物差[ものさ]し|Lineal; Maßstab|物差[ものさ]しを 使[つか]って 線[せん]を 引[ひ]きなさい。|Zieh die Linie mit einem Lineal.|Nomen
役割|役割[やくわり]|Rolle, Aufgabe|あなたは 役割[やくわり]を 果[は]たしさえすればよい。|Du musst nur eine Rolle spielen.|Nomen
割合|割合[わりあい]|Verhältnis, Anteil|貴社[きしゃ]の 製品[せいひん]の 海外市場[かいがいしじょう]の 割合[わりあい]はどのくらいですか。|Wie hoch ist der Anteil der Auslandsmärkte bei Ihren Produkten?|Adverb
なるほど|なるほど|ach so, verstehe|なるほどね。|Ich verstehe.|Adverb
割り当て|割[わ]り 当[あ]て|Zuteilung|自分[じぶん]の 仕事[しごと]の 割[わ]り 当[あ]ては 終[お]わりましたか。|Haben Sie Ihr Arbeitskontingent erledigt?|Nomen
割り当てる|割[わ]り 当[あ]てる|zuteilen, zuweisen|私[わたし]に 新[あたら]しい 部屋[へや]が 割[わ]り 当[あ]てられた。|Mir wurde ein neues Zimmer zugewiesen.|Verb
割り引く|割[わ]り 引[び]く|Rabatt geben, abziehen|トムはもっと 割[わ]り 引[び]いて 欲[ほ]しかったんだ。|Tom wollte einen größeren Rabatt.|Verb
割に|割[わり]に|verhältnismäßig, ziemlich|祖父[そふ]は 年[とし]の 割[わり]にはまだ 元気[げんき]である。|Für sein Alter ist Großvater noch immer in rüstiger Verfassung.|Adverb
割り|割[わ]り|Rate, Verhältnis|トムって、 卵[たまご]の 片手[かたて] 割[わ]りができるんだよ。|Tom kann mit einer Hand ein Ei aufschlagen.|Nomen
割り引き|割[わ]り 引[び]き|Rabatt, Ermäßigung|学生[がくせい]は 割[わ]り 引[び]きがあります。|Für Studenten gibt es eine Ermäßigung.|Nomen (mit する)
バイト|バイト|Nebenjob (kurz)|パン 屋[や]のバイトまだやってるの？|Arbeitest du noch immer Teilzeit beim Bäcker?|Nomen (mit する)
割合に|割合[わりあい]に|verhältnismäßig, relativ|今日[きょう]は 割合[わりあい]に 暖[あたた]かいです。|Heute ist es verhältnismäßig warm.|Adverb
残り|残[のこ]り|Rest|残[のこ]りを 持[も]って 来[き]てください。|Bring bitte den Rest her!|Nomen
残らず|残[のこ]らず|restlos, ausnahmslos|秘密[ひみつ]を 残[のこ]らず 打[う]ち 明[あ]けなさい。|Verrate mir restlos deine Geheimnisse.|Adverb
払い|払[はら]い|Zahlung, offene Rechnung|分割[ぶんかつ] 払[はら]いでよろしいですか。|Kann ich das auf Raten zahlen?|Nomen
引き返す|引[ひ]き 返[かえ]す|umkehren|今[いま]は 引[ひ]き 返[かえ]すには 遅[おそ]すぎる。|Es ist jetzt zu spät zum Umdrehen.|Verb
ぶつける|ぶつける|anstoßen, gegen etwas schlagen|トムは 車[くるま]の 天井[てんじょう]に 頭[あたま]をぶつけた。|Tom ist mit dem Kopf gegen das Autodach gestoßen.|Verb
取り返す|取[と]り 返[かえ]す|zurückholen, zurückgewinnen|彼女[かのじょ]は 私[わたし]に 貸[か]したコートを 取[と]り 返[かえ]した。|Sie nahm den Mantel, den sie mir geliehen hatte, wieder an sich.|Verb
申し出る|申[もう]し 出[で]る|anbieten, sich melden|私[わたし]は 彼女[かのじょ]にお 金[かね]を 貸[か]そうと 申[もう]し 出[で]た。|Ich erbot mich, ihr Geld zu leihen.|Verb
申し上げる|申[もう]し 上[あ]げる|sagen, mitteilen (bescheiden)|これは 申[もう]し 上[あ]げた 方[ほう]がよいでしょう。|Ich könnte dir das jetzt sagen.|Verb
申す|申[もう]す|sagen, heißen (bescheiden)|トムと 申[もう]します。|Ich heiße Tom.|Verb
持ち込む|持[も]ち 込[こ]む|hineinbringen, mitbringen|このバッグは 機内[きない]に 持[も]ち 込[こ]みたいんですが。|Dürfte ich diese Tasche wohl mit ins Flugzeug nehmen?|Verb
タイヤ|タイヤ|Reifen|タイヤの 空気[くうき]が 抜[ぬ]けてるよ。|Der Reifen ist platt.|Nomen
見込み|見込[みこ]み|Aussicht, Erwartung|彼[かれ]が 勝[か]つ 見込[みこ]みはかなりある。|Er hat gute Aussichten zu gewinnen.|Nomen
申し込み|申[もう]し 込[こ]み|Anmeldung, Antrag|事前[じぜん]の 申[もう]し 込[こ]みは 必要[ひつよう]ありません。|Eine Anmeldung im Vorhinein ist nicht notwendig.|Nomen
払い込む|払[はら]い 込[こ]む|einzahlen|彼[かれ]はそのお 金[かね]を 口座[こうざ]に 払[はら]い 込[こ]んだ。|Er zahlte das Geld auf sein Konto ein.|Verb
飲み込む|飲[の]み 込[こ]む|hinunterschlucken; begreifen|蛇[へび]が 蛙[かわず]を 飲[の]み 込[こ]んだ。|Die Schlange verschlang einen Frosch.|Verb
割り込む|割[わ]り 込[こ]む|sich hineindrängen, sich vordrängeln|列[れつ]に 割[わ]り 込[こ]んでくる 人[ひと]、 大[だい]っ 嫌[きら]い！|Ich hasse Vordrängler.|Verb
引っ込む|引[ひ]っ 込[こ]む|sich zurückziehen, zurückgehen|引[ひ]っ 込[こ]んでて！|Halt dich da raus!|Verb
マイク|マイク|Mikrofon|トムはマイクを 握[にぎ]ると 人格[じんかく]が 変[か]わる。|Sobald Tom ein Mikrophon in die Hand nimmt, verändert sich sein Wesen.|Nomen
人込み|人込[ひとご]み|Menschengedränge|この 人込[ひとご]みを 見[み]ると 東京[とうきょう]の 通[とお]りを 思[おも]い 出[だ]す。|Wenn ich diese Menschenmenge sehe, erinnere ich mich an die Straßen von Tokio.|Nomen
長期|長期[ちょうき]|langer Zeitraum, langfristig|試験[しけん]がすんだら 長期[ちょうき] 休暇[きゅうか]をとるつもりだ。|Ich habe vor, einen langen Urlaub zu nehmen, sobald ich die Prüfungen abgeschlossen habe.|Nomen
短期|短期[たんき]|kurzer Zeitraum, kurzfristig|喫煙[きつえん]による 短期[たんき] 的[てき]な 影響[えいきょう]の 方[ほう]が 分[わ]かり 易[やす]いと 思[おも]う 人[ひと]もいる。|Manche finden die kurzfristigen Folgen des Rauchens leichter zu verstehen.|Nomen
短期大学|短期大学[たんきだいがく]|Kurzuniversität (zweijähriges College)|妹[いもうと]は 短期大学[たんきだいがく]に 通[かよ]っています。|Meine jüngere Schwester besucht eine Kurzuniversität.|Nomen
有限|有限[ゆうげん]|begrenzt, endlich|我々[われわれ]の 会社[かいしゃ]は 有限[ゆうげん] 会社[かいしゃ]だ。|Unsere Firma ist eine Gesellschaft mit beschränkter Haftung.|な-Adjektiv
ゆとり|ゆとり|Spielraum, Muße|彼[かれ]には 結婚[けっこん]するゆとりはない。|Er kann es sich nicht leisten zu heiraten.|Nomen
無限|無限[むげん]|unendlich, grenzenlos|宇宙[うちゅう]は 無限[むげん]だ。|Das Universum ist grenzenlos.|な-Adjektiv
無制限|無制限[むせいげん]|unbegrenzt|この 切符[きっぷ]は 一日[いちにち]、 無制限[むせいげん]に 使[つか]えます。|Diese Fahrkarte kann man einen Tag lang unbegrenzt benutzen.|な-Adjektiv
値切る|値切[ねぎ]る|herunterhandeln, feilschen|彼女[かのじょ]は 値切[ねぎ]るのがうまいんだ。|Sie kann gut feilschen.|Verb
前売り券|前売[まえう]り 券[けん]|Vorverkaufskarte|前売[まえう]り 券[けん]をここで 取[と]り 扱[あつか]っていますか。|Verkaufen Sie hier Karten im Vorverkauf?|Nomen
年代|年代[ねんだい]|Zeitalter, Generation; Jahrzehnt|私[わたし]は 年代[ねんだい] 物[ぶつ]の 切手[きって]を 持[も]っている。|Ich habe eine sehr alte Briefmarke.|Nomen
ぼんやり|ぼんやり|vage, geistesabwesend|遠[とお]くにぼんやりした 明[あ]かりが 見[み]えた。|In der Ferne war ein schwaches Licht zu sehen.|Adjektiv
代金|代金[だいきん]|Preis, Rechnungsbetrag|このコンピューターの 代金[だいきん]はどのように 支払[しはら]いましたか。|Wie hast du diesen Rechner bezahlt?|Nomen
目指す|目指[めざ]す|anstreben, zum Ziel haben|どこの 大学[だいがく] 目指[めざ]してるの？|Welche Universität hast du dir als Ziel genommen?|Verb
指差す|指差[ゆびさ]す|mit dem Finger zeigen|人[ひと]を 指差[ゆびさ]してはいけません。|Zeig nicht mit dem Finger auf andere Leute!|Verb
人差し指|人差[ひとさ]し 指[ゆび]|Zeigefinger|人差[ひとさ]し 指[ゆび]が 痛[いた]い。|Mir tut der Zeigefinger weh.|Nomen
中指|中指[なかゆび]|Mittelfinger|中指[なかゆび]が 一番[いちばん] 長[なが]いです。|Der Mittelfinger ist der längste.|Nomen
定年|定年[ていねん]|Altersgrenze, Ruhestandsalter|定年[ていねん]って、 何歳[なんさい]？|Mit wie vielen Jahren geht man in Rente?|Nomen
たまらない|たまらない|unerträglich; unwiderstehlich|トムは 自分[じぶん]の 仕事[しごと]が 嫌[いや]でたまらないんだ。|Tom hasst seine Arbeit.|Adjektiv
不安定|不安定[ふあんてい]|instabil, unsicher|格差社会[かくさしゃかい]の 拡大[かくだい]は、 社会[しゃかい]の 不[ふ] 安定[あんてい] 化[か]を 招[まね]く 要因[よういん]の 一[ひと]つだ。|Die wachsende soziale Ungleichheit ist einer der Faktoren, die eine Gesellschaft instabil machen.|な-Adjektiv
定員|定員[ていいん]|zulässige Personenzahl, Kapazität|ボートは 定員[ていいん]オーバーでバランスを 失[うしな]った。|Das Boot verlor das Gleichgewicht, da zu viele Personen an Bord waren.|Nomen
定期|定期[ていき]|regelmäßig, feste Frist|私[わたし] 達[たち]は 定期[ていき] 的[てき]に 集[あつ]まることにしている。|Wir haben es uns zur Gewohnheit gemacht, uns regelmäßig zu versammeln.|Nomen
定価|定価[ていか]|Festpreis, Listenpreis|定価[ていか]で 売[う]ってる 店[みせ]なんて、ここらじゃ 見[み]たことない。|Einen Laden, der zum Listenpreis verkauft, habe ich hier in der Gegend noch nie gesehen.|Nomen
未定|未定[みてい]|noch nicht festgelegt|計画[けいかく]はまだ 未定[みてい]である。|Der Plan ist noch nicht festgelegt.|Nomen
モーター|モーター|Motor|モーターについては 何[なに]も 問題[もんだい]がない。|Mit dem Motor ist alles in Ordnung.|Nomen
定食|定食[ていしょく]|Menü, Tagesgericht (Set)|日替[ひが]わり 定食[ていしょく]にしませんか。|Wie wär's mit dem Tagesgericht?|Nomen
定休日|定休日[ていきゅうび]|regulärer Ruhetag|本日[ほんじつ]は 定休日[ていきゅうび]です。|Heute ist Ruhetag.|Nomen
予算|予算[よさん]|Budget, Etat|予算[よさん]は 均衡[きんこう]がとれていなければならない。|Das Budget muss ausgeglichen sein.|Nomen
予報|予報[よほう]|Vorhersage|天気[てんき]は 科学的[かがくてき]に 予報[よほう]される。|Das Wetter wird wissenschaftlich vorhergesagt.|Nomen (mit する)
予言|予言[よげん]|Prophezeiung, Vorhersage|すべてがトムの 予言[よげん] 通[とお]りに 進[すす]んでいる。|Alles verläuft so, wie Tom es vorhergesagt hat.|Nomen (mit する)
まして|まして|geschweige denn, umso mehr|彼[かれ]は 数学[すうがく]がほとんど 分[わ]かってないのに、ましてや 化学[かがく]なんて。|Er versteht kaum etwas von Mathematik, geschweige denn von Chemie.|Adverb
束|束[たば]|Bündel, Bund|彼[かれ]は 小枝[こえだ]を 束[たば]にした。|Er band die Zweige zu Bündeln zusammen.|Nomen
花束|花束[はなたば]|Blumenstrauß|彼[かれ]が 花束[はなたば]をプレゼントしてくれたの。|Er überreichte mir einen Blumenstrauß.|Nomen
変更|変更[へんこう]|Änderung|予約[よやく]を 変更[へんこう]したいのですが。|Ich möchte gerne meine Reservierung ändern.|Nomen (mit する)
夜更かし|夜更[よふ]かし|langes Aufbleiben|昨日[きのう] 夜更[よふ]かししなきゃよかった。|Ich hätte gestern nicht bis spät in die Nacht aufbleiben sollen.|Nomen (mit する)
増す|増[ま]す|zunehmen, anwachsen|風[かぜ]が 勢[いきお]いを 増[ま]し 始[はじ]めた。|Der Wind wurde stärker.|Verb
ピストル|ピストル|Pistole|彼[かれ]はピストルを 取[と]ろうと 手[て]を 伸[の]ばした。|Er streckte seine Hand aus, um nach der Pistole zu greifen.|Nomen
増大|増大[ぞうだい]|Zunahme, Vergrößerung|人間[にんげん]の 欲望[よくぼう]は、 持[も]てば 持[も]つほどますます 増大[ぞうだい]する。|Je mehr der Mensch besitzt, desto größer wird seine Gier.|Nomen (mit する)
増減|増減[ぞうげん]|Zu- und Abnahme|この 数年[すうねん]、 体重[たいじゅう]は 増減[ぞうげん]していません。|Mein Gewicht hat in den letzten Jahren weder zu- noch abgenommen.|Nomen (mit する)
乗り出す|乗[の]り 出[だ]す|sich hinauslehnen; sich aufmachen, in Angriff nehmen|人類[じんるい]は 宇宙[うちゅう]に 乗[の]り 出[だ]すことに 成功[せいこう]した。|Der Menschheit ist es gelungen, in den Weltraum aufzubrechen.|Verb
乗り込む|乗[の]り 込[こ]む|einsteigen, an Bord gehen|乗客[じょうきゃく]はみんな、 船[ふね]に 乗[の]り 込[こ]んだ。|Die Passagiere gingen alle an Bord des Schiffes.|Verb
乗り降り|乗[の]り 降[お]り|Ein- und Aussteigen|私[わたし]たちは、ここでバスを 乗[の]り 降[お]りします。|Hier steigen wir in den Bus ein und aus.|Nomen (mit する)
着ける|着[つ]ける|anlegen, vorfahren (Fahrzeug)|時間通[じかんどお]りには 着[つ]けないよ。|Du wirst nicht rechtzeitig da sein.|Verb
たっぷり|たっぷり|reichlich, ausgiebig|時間[じかん]はたっぷりあります。|Wir haben reichlich Zeit.|Adverb
水着|水着[みずぎ]|Badeanzug, Badehose|私[わたし]ね、 水着[みずぎ] 持[も]ってないの。|Ich habe keinen Badeanzug.|Nomen
役立つ|役立[やくだ]つ|nützlich sein|石[せっ]けんは 泥[どろ]を 落[お]とすのに 役立[やくだ]つ。|Seife ist nützlich, um Schmutz zu entfernen.|Verb
立ち上がる|立[た]ち 上[あ]がる|aufstehen, sich erheben|彼[かれ]は 怒[おこ]ったときに 立[た]ち 上[あ]がる 癖[くせ]がある。|Er hat die Angewohnheit, sich zu erheben, wenn er wütend ist.|Verb
中立|中立[ちゅうりつ]|Neutralität|彼[かれ]は 話[はな]し 合[あ]いでは 中立[ちゅうりつ]の 立場[たちば]をとった。|Er nahm bei der Besprechung einen neutralen Standpunkt ein.|Nomen (mit する)
都立|都立[とりつ]|von der Präfektur Tokio getragen|弟[おとうと]は 都立[とりつ]の 高校[こうこう]に 入[はい]りました。|Mein jüngerer Bruder ist auf eine Oberschule der Präfektur Tōkyō gekommen.|Nomen
つくづく|つくづく|zutiefst, aus tiefstem Herzen|英語[えいご]って 難[むずか]しいなぁって、つくづく 思[おも]う。|Ich finde wirklich, dass Englisch schwer ist.|Adverb
立て込む|立[た]て 込[こ]む|dicht gedrängt stehen; viel los sein|今[いま]、 立[た]て 込[こ]んでます。|Ich habe gerade sehr viel zu tun.|Verb
夕立|夕立[ゆうだち]|abendlicher Regenschauer|昨日[きのう]、 家[いえ]に 帰[かえ]る 途中[とちゅう]、 夕立[ゆうだち]にあいました。|Ich geriet gestern auf dem Heimweg in einen Schauer.|Nomen
立ち止まる|立[た]ち 止[ど]まる|stehen bleiben|立[た]ち 止[ど]まるな。|Bleiben Sie nicht stehen.|Verb
着席|着席[ちゃくせき]|Platznehmen|どうぞご 着席[ちゃくせき]ください、みなさん。|Nehmen Sie bitte Platz, meine Damen und Herren.|Nomen (mit する)
次々に|次々[つぎつぎ]に|nacheinander, einer nach dem anderen|次々[つぎつぎ]に 動物[どうぶつ]が 死[し]んだ。|Die Tiere starben eines nach dem anderen.|Adverb
どうせ|どうせ|sowieso, ohnehin|友達[ともだち]なんか 要[い]らない。だってどうせ 裏切[うらぎ]られるだけだもん。|Ich brauche keine Freunde. Die hintergehen mich ja doch nur.|Adverb
次ぐ|次[つ]ぐ|folgen auf, an zweiter Stelle stehen|アマゾン 川[かわ]は、ナイル 川[かわ]に 次[つ]いで 世界[せかい]で 二番目[にばんめ]に 長[なが]い 川[かわ]だ。|Der Amazonas ist der zweitlängste Fluss der Welt nach dem Nil.|Verb
取り次ぐ|取[と]り 次[つ]ぐ|weiterleiten, ausrichten|電話[でんわ]を 社長[しゃちょう]に 取[と]り 次[つ]ぎました。|Ich habe den Anruf an den Firmenchef weitergeleitet.|Verb
目次|目次[もくじ]|Inhaltsverzeichnis|目次[もくじ]って、どこにあるんだろう？|Wo ist denn das Inhaltsverzeichnis?|Nomen
不運|不運[ふうん]|Pech, Unglück|彼[かれ]は、 不運[ふうん]な 人[ひと]です。|Er ist ein Pechvogel.|な-Adjektiv
動向|動向[どうこう]|Trend, Entwicklung|新聞[しんぶん]は 世[よ]の 動向[どうこう]を 左右[さゆう]する。|Zeitungen beeinflussen die Entwicklungen in der Gesellschaft.|Nomen
動作|動作[どうさ]|Bewegung, Handgriff|彼[かれ]は 動作[どうさ]が 鈍[にぶ]い。|Er bewegt sich schwerfällig.|Nomen
リズム|リズム|Rhythmus|あの 歌[うた]のゆっくりしたリズムが 好[す]きです。|Mir gefällt der langsame Rhythmus dieses Liedes.|Nomen
動力|動力[どうりょく]|Antriebskraft|そのボートは 動力[どうりょく]にモーターを 使用[しよう]している。|Das Boot nutzt einen Motor als Antrieb.|Nomen
働き|働[はたら]き|Arbeit, Leistung; Funktion|働[はたら]きに 出[で]る 代[か]わりに 一日中[いちにちじゅう] 家[いえ]にいた。|Ich blieb den ganzen Tag zu Hause, anstatt zur Arbeit zu gehen.|Nomen
早朝|早朝[そうちょう]|früher Morgen|早朝[そうちょう]、 戦車[せんしゃ]による 戦闘[せんとう]が 始[はじ]まった。|Am frühen Morgen begann die Panzerschlacht.|Nomen
早める|早[はや]める|vorverlegen, beschleunigen|私[わたし]は 埋[う]め 合[あ]わせをするために 運転[うんてん]を 早[はや]めた。|Ich fuhr schneller, um die verlorene Zeit auszugleichen.|Verb
早まる|早[はや]まる|voreilig sein; früher werden|早[はや]まっちゃダメだ。|Nichts überstürzen.|Verb
ハンドル|ハンドル|Lenkrad|米国車[べいこくしゃ]のハンドルは 左側[ひだりがわ]にある。|Lenkräder sind in amerikanischen Autos auf der linken Seite.|Nomen
速度|速度[そくど]|Geschwindigkeit|彼[かれ]は 光[ひかり]の 速度[そくど]を 計算[けいさん]した。|Er berechnete die Lichtgeschwindigkeit.|Nomen
速達便|速達便[そくたつびん]|Eilsendung|速達[そくたつ] 便[びん]でお 願[ねが]いします。|Per Eilzustellung bitte!|Nomen
乗り遅れる|乗[の]り 遅[おく]れる|verpassen (Zug, Bus)|バスに 乗[の]り 遅[おく]れたんだよ。|Ich habe den Bus verpasst.|Verb
始め|始[はじ]め|Anfang|始[はじ]めから 終[お]わりまで 読[よ]みました。|Ich habe es von Anfang bis Ende gelesen.|Nomen
始まり|始[はじ]まり|Beginn|税金[ぜいきん]を 払[はら]ったら 実生活[じっせいかつ]の 始[はじ]まりだ。|Das Leben beginnt, wenn man Steuern zahlt.|Nomen
プリント|プリント|Ausdruck, Abzug; Arbeitsblatt|先生[せんせい]は 生徒[せいと]たちにプリントを 配布[はいふ]した。|Der Lehrer teilte seinen Schülern den Ausdruck aus.|Nomen (mit する)
年始|年始[ねんし]|Jahresanfang|年末[ねんまつ] 年始[ねんし]は、 家族[かぞく] 水[みず] 入[はい]らずで 過[す]ごしました。|Den Jahreswechsel habe ich im engsten Familienkreis verbracht.|Nomen
不在|不在[ふざい]|Abwesenheit|彼女[かのじょ]の 家[いえ]に 行[い]ったが 不在[ふざい]だった。|Ich bin zu ihr nach Hause gegangen, doch sie war nicht da.|Nomen
実る|実[みの]る|Früchte tragen, reifen|彼[かれ]の 努力[どりょく]が 実[みの]った。|Seine Bemühungen trugen Früchte.|Verb
実|実[み]|Frucht, Beere, Nuss|この 木[き]には 赤[あか]い 実[み]がなります。|Dieser Baum trägt rote Früchte.|Nomen
通り過ぎる|通[とお]り 過[す]ぎる|vorbeigehen, vorbeifahren|バスは 止[と]まらずに 通[とお]り 過[す]ぎていった。|Der Bus fuhr, ohne zu halten, vorbei.|Verb
発売|発売[はつばい]|Verkaufsstart, Markteinführung|先月[せんげつ]、 僕[ぼく]の 叔父[おじ]の 会社[かいしゃ]が 新製品[しんせいひん]を 発売[はつばい]しました。|Die Firma meines Onkels hat letzten Monat ein neues Produkt auf den Markt gebracht.|Nomen (mit する)
まぶしい|まぶしい|blendend, grell|太陽[たいよう]がまぶしい。|Die Sonne scheint grell.|Adjektiv
発つ|発[た]つ|abreisen, aufbrechen|いつここを 発[た]ちますか。|Wann wirst du hier abreisen?|Verb
発行|発行[はっこう]|Herausgabe, Ausgabe|これは 今日[きょう] 発行[はっこう]の 朝日新聞[あさひしんぶん]ですか。|Ist dies die heutige Ausgabe der Asahi Shimbun?|Nomen (mit する)
発達|発達[はったつ]|Entwicklung, Fortschritt|彼[かれ]の 精神[せいしん]の 発達[はったつ]は 遅[おそ]かった。|Seine geistige Entwicklung hinkte hinterher.|Nomen (mit する)
発明|発明[はつめい]|Erfindung|なんと 素晴[すば]らしい 発明[はつめい]だろう。|Was für eine wunderbare Erfindung!|Nomen (mit する)
発電|発電[はつでん]|Stromerzeugung|原子力[げんしりょく]が 発電[はつでん]に 使[つか]われている。|Atomkraft wird zur Stromerzeugung verwendet.|Nomen (mit する)
よそ|よそ|anderswo, fremd|うちの 猫[ねこ]はよその 猫[ねこ]と 喧嘩[けんか]した。|Meine Katze hatte einen Kampf mit einer anderen Katze.|Nomen
発電所|発電所[はつでんしょ]|Kraftwerk|そこは、 変電所[へんでんしょ]じゃなくて 発電[はつでん] 所[しょ]だよ。|Das ist kein Umspannwerk, sondern ein Kraftwerk.|Nomen
発熱|発熱[はつねつ]|Fieber; Wärmeentwicklung|発熱[はつねつ]は 病気[びょうき]の 兆候[ちょうこう]です。|Fieber ist ein Anzeichen für eine Krankheit.|Nomen (mit する)
表情|表情[ひょうじょう]|Gesichtsausdruck, Mimik|彼女[かのじょ]は 悲[かな]しそうな 表情[ひょうじょう]をしていた。|Sie hatte einen traurigen Gesichtsausdruck.|Nomen
用紙|用紙[ようし]|Formular, Blatt|用紙[ようし]に 自分[じぶん]の 名[な]を 記入[きにゅう]した。|Ich habe auf dem Formular meinen eigenen Namen eingetragen.|Nomen
表紙|表紙[ひょうし]|Buchdeckel, Titelseite|父[ちち]は 表紙[ひょうし]の 取[と]れた 古[ふる]い 辞書[じしょ]を 使[つか]っています。|Mein Vater benutzt ein ganz altes Wörterbuch, bei dem der Einband schon abgefallen ist.|Nomen
つぐ|つぐ|eingießen, einschenken|お 茶[ちゃ]をつぎましょうか。|Soll ich Ihnen Tee einschenken?|Verb
白紙|白紙[はくし]|leeres Blatt; Nullpunkt|トムは 答案[とうあん]を 白紙[はくし]で 提出[ていしゅつ]した。|Tom gab bei der Klausur ein leeres Blatt ab.|Nomen
音|音[ね]|Ton, Klang (von Insekten, Glocken)|庭[にわ]から 虫[むし]の 音[ね]が 聞[き]こえます。|Aus dem Garten hört man das Zirpen der Insekten.|Nomen
発音|発音[はつおん]|Aussprache|どうか 発音[はつおん]で 誤[あやま]りがあったら 直[なお]してください。|Verbessere mich bitte, wenn meine Aussprache falsch ist.|Nomen (mit する)
物音|物音[ものおと]|Geräusch|僕[ぼく]は 異常[いじょう]な 物音[ものおと]を 聞[き]いた。|Ich habe ein seltsames Geräusch gehört.|Nomen
楽しみ|楽[たの]しみ|Freude, Vorfreude|私[わたし]は 彼[かれ]から 便[たよ]りが 来[く]るのを 楽[たの]しみに 待[ま]っている。|Ich warte mit Freude darauf, Nachricht von ihm zu erhalten.|Nomen
ディスコ|ディスコ|Disco|トムはディスコミュージックが 好[す]きだ。|Tom mag Diskomusik.|Nomen
楽|楽[らく]|leicht, bequem, angenehm|楽[らく]になさってください。|Machen Sie es sich bequem.|な-Adjektiv
薬品|薬品[やくひん]|Arzneimittel, Chemikalie|この 化学[かがく] 薬品[やくひん]は 紙[かみ]を 白[しろ]くするために 用[もち]いられる。|Diese Chemikalie wird verwendet, um Papier zu bleichen.|Nomen
薬局|薬局[やっきょく]|Apotheke|一番[いちばん] 近[ちか]い 薬局[やっきょく]はどこにありますか。|Wo ist denn die nächste Apotheke?|Nomen
目薬|目薬[めぐすり]|Augentropfen|目薬[めぐすり]をください。|Ich hätte gerne Augentropfen.|Nomen
欲|欲[よく]|Begierde, Gier|彼[かれ]は 権力[けんりょく] 欲[よく]の 強[つよ]い 人間[にんげん]だ。|Er ist ein machtgieriger Mensch.|Nomen
欲求|欲求[よっきゅう]|Bedürfnis, Verlangen|君[きみ]は 仕事[しごと]に 欲求[よっきゅう] 不満[ふまん]を 感[かん]じている。|Du bist über deine Arbeit frustriert.|Nomen (mit する)
ぴったり|ぴったり|genau passend, perfekt|彼女[かのじょ]は 私[わたし]の 好[この]みにぴったり 合[あ]ったネクタイをくれた。|Sie schenkte mir eine Krawatte, die genau meinem Geschmack entsprach.|な-Adjektiv
表面|表面[ひょうめん]|Oberfläche|地球[ちきゅう]の 表面[ひょうめん]の 約[やく] 三分[さんぶん]の 一[いち]が 陸地[りくち]である。|Ungefähr ein Drittel der Oberfläche der Erde ist Land.|Nomen
場面|場面[ばめん]|Szene, Situation|劇[げき]のこっけいな 場面[ばめん]はやり 過[す]ぎであった。|Die komischen Szenen des Stückes waren übertrieben.|Nomen
面する|面[めん]する|liegen an, gegenüberliegen|私[わたし]の 部屋[へや]は 通[とお]りに 面[めん]している。|Ich habe ein Zimmer zur Straße hin.|Verb
方面|方面[ほうめん]|Richtung, Gegend; Gebiet|兄[あに]はあなたと 同[おな]じ 方面[ほうめん]の 仕事[しごと]をしています。|Mein Bruder ist auf dem gleichen Gebiet tätig wie Sie.|Nomen
半面|半面[はんめん]|eine Hälfte, eine Seite|彼[かれ]は 優[やさ]しい 半面[はんめん]、 厳[きび]しいところもあります。|Er ist einerseits freundlich, hat aber auch strenge Seiten.|Nomen
まさか|まさか|doch wohl nicht, niemals (ungläubig)|まさかトムに 会[あ]うとは 思[おも]わなかった。|Dass ich ausgerechnet Tom begegnen würde, hätte ich nicht gedacht.|Adverb
面|面[めん]|Fläche, Seite, Aspekt|私[わたし]は 彼[かれ]に 面[めん]と 向[む]かって 臆病者[おくびょうもの]といってやった。|Ich habe ihm ins Gesicht gesagt, dass er ein Feigling ist.|Nomen
真っ先|真[ま]っ 先[さき]|allererste(r), als Erstes|少年[しょうねん]は 家[いえ]に 帰[かえ]ると 真[ま]っ 先[さき]に 母[はは]にそのことを 告[つ]げた。|Der Junge erzählte es zuallererst seiner Mutter, als er nach Hause kam.|Nomen
真夏|真夏[まなつ]|Hochsommer|明日[あした]は 真夏日[まなつび]になりそうだって。|Sieht aus, als ob morgen ein hochsommerlicher Tag werden würde.|Nomen
真夜中|真夜中[まよなか]|Mitternacht, tiefe Nacht|トムは 真[ま] 夜中[よなか]についた。|Tom ist um Mitternacht angekommen.|Nomen
真っ最中|真[ま]っ 最中[さいちゅう]|mittendrin|家[いえ]に 帰[かえ]ると、お 父[とう]さんとお 母[かあ]さんが 喧嘩[けんか]の 真[ま]っ 最中[さいちゅう]でした。|Als ich nach Hause kam, stritten sich mein Vater und meine Mutter gerade.|Nomen
どっと|どっと|schlagartig, mit einem Mal|彼[かれ]らはみなどっと 笑[わら]った。|Sie lachten alle auf einmal los.|Adverb
真心|真心[まごころ]|Aufrichtigkeit, von ganzem Herzen|彼女[かのじょ]は 彼[かれ]に 真心[まごころ]こめて 感謝[かんしゃ]しました。|Sie dankte ihm von ganzem Herzen.|Nomen
無色|無色[むしょく]|farblos|水[みず]は 無色[むしょく]です。|Wasser ist farblos.|Nomen
ばら色|ばら 色[いろ]|Rosenrot, rosig|ピンクとばら 色[いろ]は 似[に]た 色[いろ]だ。|Pink und Rosenrot sind ähnliche Farben.|Nomen
水色|水色[みずいろ]|Hellblau|頭上[ずじょう]の 空[そら]は 濃[こ]い 水色[みずいろ]だった。|Der Himmel droben war tiefblau.|Nomen
長方形|長方形[ちょうほうけい]|Rechteck|長[ちょう] 方形[ほうけい]の 対辺[たいへん]は 平行[へいこう]である。|Die gegenüberliegenden Seiten eines Rechtecks sind parallel.|Nomen
地形|地形[ちけい]|Geländeform, Topografie|この 辺[あた]りは 地形[ちけい]が 複雑[ふくざつ]です。|In dieser Gegend ist das Gelände kompliziert.|Nomen
もうける|もうける|Gewinn machen, verdienen|彼[かれ]は 株[かぶ]でお 金[かね]をもうけました。|Er hat mit Aktien Geld verdient.|Verb
種|種[たね]|Samen, Kern|農業家[のうぎょうか]が 小麦[こむぎ]の 種[たね]を 畑[はたけ]に 撒[ま]いた。|Der Bauer streute Weizensamen auf das Feld.|Nomen
分類|分類[ぶんるい]|Klassifizierung, Einteilung|分類[ぶんるい]の 仕方[しかた]によって 結果[けっか]の 見[み]え 方[かた]が 大[おお]きく 変[か]わる。|Je nach Art der Einteilung sieht das Ergebnis ganz anders aus.|Nomen (mit する)
直前|直前[ちょくぜん]|unmittelbar vor|試合[しあい]の 直前[ちょくぜん]にはいつもあがっています。|Kurz vor einem Spiel bin ich immer aufgeregt.|Nomen
直ちに|直[ただ]ちに|sofort, unverzüglich|彼女[かのじょ]は 仕事[しごと]が 終[お]わって 直[ただ]ちに 事務所[じむしょ]を 出[で]た。|Sobald sie die Arbeit beendet hatte, verließ sie das Büro.|Adverb
見直す|見直[みなお]す|überdenken; eine bessere Meinung bekommen|犬[いぬ]を 見[み]てたんだけど、 見直[みなお]すと 猫[ねこ]になってた。|Ich betrachtete einen Hund; als ich aber erneut hinsah, war eine Katze draus geworden.|Verb
ゆったり|ゆったり|bequem, weit, geräumig|私[わたし]たちはゆったりと 腰[こし]を 下[お]ろしていた。|Wir haben uns bequem hingesetzt.|Adverb
直後|直後[ちょくご]|unmittelbar nach|きみが 出[で]かけた 直後[ちょくご]に 彼[かれ]が 訪[たず]ねてきた。|Gleich nachdem du gegangen warst, kam er zu Besuch.|Nomen
立ち直る|立[た]ち 直[なお]る|sich erholen, wieder auf die Beine kommen|離婚[りこん]から 立[た]ち 直[なお]るには 時間[じかん]がかかる。|Es braucht Zeit, über eine Scheidung hinwegzukommen.|Verb
やり直し|やり 直[なお]し|Neumachen, Wiederholung|またやり 直[なお]しですか。|Muss ich es schon wieder neu machen?|Nomen
やり直す|やり 直[なお]す|noch einmal machen|彼[かれ]は 心機一転[しんきいってん]やり 直[なお]した。|Er hat noch mal ganz neu angefangen.|Verb
直通|直通[ちょくつう]|direkte Verbindung, Durchwahl|私[わたし] 達[たち]は 大阪[おおさか]からロサンゼルスまで 直通[ちょくつう]で 飛[と]んでいった。|Wir flogen nonstop von Osaka nach Los Angeles.|Nomen (mit する)
ちっとも|ちっとも|kein bisschen, überhaupt nicht|今日[きょう]はちっとも 風[かぜ]がない。|Heute gibt es überhaupt keinen Wind.|Adverb
面接|面接[めんせつ]|Vorstellungsgespräch|面接[めんせつ]はうまくいった？|Ist das Vorstellungsgespräch gut verlaufen?|Nomen (mit する)
無線|無線[むせん]|Funk, drahtlos|パイロットは 無線[むせん]で 空港[くうこう]と 情報[じょうほう]を 交換[こうかん]する。|Piloten kommunizieren mit dem Flughafen per Funk.|Nomen
線路|線路[せんろ]|Gleis, Schiene|線路[せんろ]の 上[うえ]に 鉄片[てっぺん]があったために 列車[れっしゃ]は 脱線[だっせん]した。|Durch ein Stück Eisen, das auf den Gleisen lag, ist der Zug entgleist.|Nomen
直線|直線[ちょくせん]|gerade Linie|定規[じょうぎ]は 直線[ちょくせん]を 引[ひ]くのに 役立[やくだ]つ。|Lineale sind praktisch, um gerade Linien zu ziehen.|Nomen
電線|電線[でんせん]|Stromleitung|電線[でんせん]は 電力[でんりょく]を 伝[つた]えるために 使用[しよう]されます。|Stromleitungen dienen dazu, Elektrizität zu übertragen.|Nomen
脱線|脱線[だっせん]|Entgleisung; Abschweifen|汽車[きしゃ]が 脱線[だっせん]した。|Der Zug entgleiste.|Nomen (mit する)
ドレス|ドレス|Kleid|きれいなドレスですね。|Das ist aber ein hübsches Kleid!|Nomen
白線|白線[はくせん]|weiße Linie|白線[はくせん]の 内側[うちがわ]でお 待[ま]ちください。|Bitte warten Sie hinter der weißen Linie.|Nomen
方角|方角[ほうがく]|Himmelsrichtung, Richtung|私[わたし]たちは 間違[まちが]った 方角[ほうがく]に 進[すす]んでいるのではないかと 思[おも]う。|Ich fürchte, wir gehen in die falsche Richtung.|Nomen
直角|直角[ちょっかく]|rechter Winkel|これらの 線[せん]は 直角[ちょっかく]に 交[まじ]わる。|Diese Linien kreuzen sich im rechten Winkel.|Nomen
町角|町角[まちかど]|Straßenecke|町角[まちかど]で 恐[おそ]ろしい 事故[じこ]が 起[お]きた。|An der Straßenecke ist ein schrecklicher Unfall passiert.|Nomen
真四角|真四角[ましかく]|genau quadratisch|真四角[ましかく]な 紙[かみ]を 用意[ようい]してください。|Legen Sie bitte ein genau quadratisches Blatt Papier bereit.|な-Adjektiv
パンク|パンク|Reifenpanne|彼女[かのじょ]の 車[くるま]は 家[いえ]に 帰[かえ]る 途中[とちゅう]でパンクした。|Sie hatte auf dem Nachhauseweg eine Reifenpanne.|Nomen (mit する)
共に|共[とも]に|zusammen, gemeinsam; beide|水[みず]と 石油[せきゆ]は 共[とも]に 液体[えきたい]である。|Wasser und Öl sind beide Flüssigkeiten.|Adverb
同時|同時[どうじ]|gleichzeitig|私[わたし]たち 二人[ふたり]はほとんど 同時[どうじ]に 笑[わら]い 始[はじ]めた。|Wir fingen beide fast gleichzeitig an zu lächeln.|Nomen
同一|同一[どういつ]|identisch, derselbe|意見[いけん]と 事実[じじつ]を 同一[どういつ] 視[し]してはいけない。|Meinungen und Tatsachen darf man nicht gleichsetzen.|な-Adjektiv
同情|同情[どうじょう]|Mitgefühl, Mitleid|彼[かれ]を 見[み]るといつでもつい 同情[どうじょう]してしまうんです。|Immer wenn ich ihn sehe, kann ich nicht anders, als Mitleid mit ihm zu haben.|Nomen (mit する)
同性|同性[どうせい]|gleiches Geschlecht|同性[どうせい] 愛[あい] 者[しゃ]ですが 何[なに]か？それが 犯罪[はんざい]だとでも？|Und was macht es, wenn ich schwul bin? Ist das ein Verbrechen?|Nomen
のんびり|のんびり|gemächlich, entspannt|こっちの 人[ひと]はのんびりしてるね。|Die Leute hier leben ein entspanntes Leben.|Adverb
違いない|違[ちが]いない|zweifellos, ganz sicher|彼[かれ]らはそれをはじめからずっと 知[し]っていたに 違[ちが]いない。|Sie müssen es die ganze Zeit über gewusst haben.|Adjektiv
人違い|人違[ひとちが]い|Personenverwechslung|人違[ひとちが]いだと 思[おも]います。|Ich glaube, Sie verwechseln mich.|Nomen (mit する)
見違える|見違[みちが]える|kaum wiedererkennen|すごい、 見違[みちが]えたよ。|Wow, ich hätte dich fast nicht wiedererkannt.|Verb
違い|違[ちが]い|Unterschied|友達[ともだち]と 恋人[こいびと]の 違[ちが]いって 何[なん]なんだろう。|Was ist wohl der Unterschied zwischen einem Freund und einem Freund?|Nomen
似る|似[に]る|ähneln|ご 両親[りょうしん]のどちらに 似[に]ていると 思[おも]いますか。|Ähnelst du eher deinem Vater oder deiner Mutter? Was denkst du?|Verb
はめる|はめる|anstecken, anziehen (Ring, Handschuh)|彼[かれ]は 手袋[てぶくろ]をはめている。|Er hat Handschuhe an.|Verb
似合う|似合[にあ]う|gut stehen, passen|この 帽子[ぼうし]は 彼女[かのじょ]に 似合[にあ]うだろう。|Dieser Hut wird ihr gut stehen.|Verb
似せる|似[に]せる|nachahmen, angleichen|本物[ほんもの]に 似[に]せて 作[つく]りました。|Ich habe es dem Original nachgebildet.|Verb
旅|旅[たび]|Reise|彼[かれ]は 旅[たび]をする 事[こと]に 慣[な]れています。|Er ist es gewohnt zu reisen.|Nomen (mit する)
旅客|旅客[りょかく]|Reisende(r), Passagier(in)|旅客[りょかく]は 歩道橋[ほどうきょう]を 使[つか]って 路線[ろせん]を 渡[わた]ってください。|Die Passagiere müssen die Füßgängerbrücke benutzen, um zu den Gleisen zu gelangen.|Nomen
旅費|旅費[りょひ]|Reisekosten|旅費[りょひ]はせいぜい 千[せん]ドルだろう。|Die Reise wird maximal 1.000 $ kosten.|Nomen
和らげる|和[やわ]らげる|mildern, lindern|この 薬[くすり]は 筋肉痛[きんにくつう]を 和[やわ]らげる。|Dieses Medikament lindert Muskelschmerzen.|Verb
ふた|ふた|Deckel|彼女[かのじょ]は 箱[はこ]のふたを 開[あ]けた。|Sie nahm den Deckel von der Schachtel.|Nomen
和語|和語[わご]|ursprünglich japanisches Wort|「やま」は 和語[わご]です。|„Yama“ ist ein ursprünglich japanisches Wort.|Nomen
和風|和風[わふう]|japanischer Stil|梅酒[うめしゅ]はね、 梅[うめ]で 作[つく]る 和風[わふう]リキュールのことだよ。|Umeshu ist japanischer Pflaumenwein.|Nomen
和食|和食[わしょく]|japanisches Essen|私[わたし]は 和食[わしょく]で 育[そだ]った。|Ich bin mit japanischem Essen aufgewachsen.|Nomen
和やか|和[なご]やか|friedlich, harmonisch|彼[かれ]らは 和[なご]やかに 食事[しょくじ]をした。|Sie aßen in friedlicher Stimmung.|Adjektiv
和らぐ|和[やわ]らぐ|sich mildern, nachlassen|暑[あつ]さが 和[やわ]らいできました。|Langsam lässt die Hitze nach.|Verb
レポート|レポート|Bericht, Hausarbeit|彼[かれ]のレポートに 目[め]を 通[とお]しているところです。|Ich werfe gerade einen Blick auf seinen Bericht.|Nomen (mit する)
和式|和式[わしき]|japanische Art|和式[わしき]のトイレは 使[つか]ったことがありません。|Eine Toilette japanischer Art habe ich noch nie benutzt.|Nomen
和英|和英[わえい]|japanisch-englisch|私[わたし]は 和英[わえい] 辞書[じしょ]が 必要[ひつよう]だ。|Ich brauche ein Wörterbuch „Japanisch-Englisch“.|Nomen
東洋|東洋[とうよう]|der Orient, Ostasien|西洋[せいよう]が 東洋[とうよう]から 見習[みなら]うべきことって 何[なに]があると 思[おも]う？|Worin, glaubst du, könnte sich der Westen ein Beispiel an Ostasien nehmen?|Nomen
洋風|洋風[ようふう]|westlicher Stil|私[わたし]は 洋風[ようふう]の 家[いえ]に 住[す]んでいます。|Ich wohne in einem Haus im westlichen Stil.|Nomen
洋画|洋画[ようが]|westlicher Film; westliche Malerei|週末[しゅうまつ]は 洋画[ようが]を 見[み]に 行[い]きます。|Am Wochenende gehe ich einen westlichen Film ansehen.|Nomen
マネー|マネー|Geld, Finanzen|不景気[ふけいき]というより、マネーゲームが 破綻[はたん]しただけだろ？|Das ist doch weniger eine Rezession, da ist bloß das Geldspiel zusammengebrochen, oder?|Nomen
洋式|洋式[ようしき]|westliche Art|私[わたし]は 洋式[ようしき]のホテルに 泊[と]まりたい。|Ich möchte in einem Hotel im westlichen Stil übernachten.|Nomen
洋食|洋食[ようしょく]|westliches Essen|私[わたし]は 洋食[ようしょく]はあまり 好[す]きではない。|Westliche Küche mag ich nicht allzusehr.|Nomen
洋間|洋間[ようま]|Zimmer im westlichen Stil|この 家[いえ]には 洋間[ようま]が 二[ふた]つあります。|Dieses Haus hat zwei Zimmer im westlichen Stil.|Nomen
和服|和服[わふく]|japanische Kleidung, Kimono|洋服[ようふく]は 和服[わふく]より 働[はたら]きやすい。|Es ist einfacher in westlicher Kleidung zu arbeiten, als in japanischer.|Nomen
待合室|待合室[まちあいしつ]|Wartezimmer, Wartesaal|彼[かれ]は 待合[まちあい] 室[しつ]に 座[すわ]っています。|Er sitzt im Wartezimmer.|Nomen
和室|和室[わしつ]|Zimmer im japanischen Stil|和室[わしつ]が 好[す]きな 英国人[えいこくじん]もいると 言[い]われます。|Man sagt, dass manche Engländer japanische Zimmer mögen.|Nomen
もろい|もろい|brüchig, zerbrechlich|彼女[かのじょ]は 情[じょう]にもろい。|Sie lässt sich leicht rühren.|Adjektiv
洋室|洋室[ようしつ]|Zimmer im westlichen Stil|洋室[ようしつ]と 和室[わしつ]のどちらがいいですか。|Was ist Ihnen lieber, ein westliches oder ein japanisches Zimmer?|Nomen
窓口|窓口[まどぐち]|Schalter (Bank, Amt)|予約[よやく]はどの 窓口[まどぐち]でできますか。|An welchem Schalter kann ich reservieren?|Nomen
父母|父母[ふぼ]|Vater und Mutter, Eltern|ケンは 父母[ふぼ]がけんかしたときはいつも 母[はは]の 味方[みかた]をする。|Wenn seine Eltern streiten, hält Ken immer zu seiner Mutter.|Nomen
母親|母親[ははおや]|Mutter|彼[かれ]の 母親[ははおや]は 大変[たいへん] 重[おも]い 病気[びょうき]だそうだ。|Seine Mutter soll schwer krank sein.|Nomen
父親|父親[ちちおや]|Vater|私[わたし]には 父親[ちちおや]が 先生[せんせい]をしている 友達[ともだち]がいる。|Ich habe einen Freund, dessen Vater Lehrer ist.|Nomen
ユーモア|ユーモア|Humor|彼[かれ]はユーモアが 分[わ]かる。|Er hat Sinn für Humor.|Nomen
父兄|父兄[ふけい]|Eltern, Erziehungsberechtigte|明日[あした]は 父兄[ふけい]の 集[あつ]まりがあります。|Morgen gibt es ein Treffen der Eltern.|Nomen
第一|第一[だいいち]|an erster Stelle, das Wichtigste|第[だい] 一[いち] 印象[いんしょう]って 重要[じゅうよう]だよ。|Der erste Eindruck ist wichtig.|Nomen
利息|利息[りそく]|Zinsen|彼[かれ]は 利息[りそく]を 付[つ]けて 借金[しゃっきん] 払[はら]いをした。|Er zahlte die Schulden inklusive Zinsen.|Nomen
若々しい|若々[わかわか]しい|jugendlich, frisch|彼女[かのじょ]は 相[あい] 変[か]わらず 若々[わかわか]しい。|Sie ist nach wie vor jugendlich.|Adjektiv
読者|読者[どくしゃ]|Leser(in)|こういう 本[ほん]は 若[わか]い 読者[どくしゃ] 向[む]きではない。|Solch ein Buch ist nicht für junge Leser gedacht.|Nomen
バック|バック|rückwärts; Hintergrund|彼[かれ]は 車[くるま]をバックさせて 車庫[しゃこ]に 入[い]れた。|Er fuhr im Rückwärtsgang in die Garage.|Nomen (mit する)
歩行者|歩行者[ほこうしゃ]|Fußgänger(in)|自動車[じどうしゃ]を 運転[うんてん]するときは、 歩行[ほこう] 者[しゃ]に 気[き]をつけなさい。|Pass auf Fußgänger auf, wenn du Auto fährst!|Nomen
文学者|文学者[ぶんがくしゃ]|Literat(in), Literaturwissenschaftler(in)|彼[かれ]は 彼[かれ]の 時代[じだい]の 有名[ゆうめい]な 文学[ぶんがく] 者[しゃ]の 一人[ひとり]だった。|Er war einer der berühmten Literaten seiner Zeit.|Nomen
歩行者天国|歩行者天国[ほこうしゃてんごく]|autofreie Straße (für Fußgänger)|日曜日[にちようび]、この 通[とお]りは 歩行者天国[ほこうしゃてんごく]になります。|Sonntags wird diese Straße zur Fußgängerzone.|Nomen
者|者[もの]|Person, jemand (bescheiden)|他[ほか]にけがをした 者[もの]はいないか。|Wurde sonst noch jemand verletzt?|Nomen
結ぶ|結[むす]ぶ|binden, verbinden, schließen|靴[くつ]の 紐[ひも]を 結[むす]びなさい。|Binde deine Schuhe.|Verb
結び|結[むす]び|Abschluss, Schluss|リボン 結[むす]びできる？|Kannst du eine Schleife binden?|Nomen
そびえる|そびえる|emporragen|富士山[ふじさん]は 雲[くも]の 上[うえ]にそびえていた。|Der Fuji ragte über die Wolken empor.|Verb
未婚|未婚[みこん]|unverheiratet|トムは 未婚[みこん]だった。|Tom war unverheiratet.|Nomen
果たす|果[は]たす|erfüllen, vollbringen|彼女[かのじょ]は 義務[ぎむ]を 果[は]たした。|Sie hat ihre Pflicht erfüllt.|Verb
果たして|果[は]たして|wirklich, tatsächlich; wie erwartet|そのうわさは 果[は]たして 本当[ほんとう]だろうか。|Könnte das Gerücht wahr sein?|Adverb
日課|日課[にっか]|tägliche Routine|朝[あさ] 食前[しょくぜん]に 新聞[しんぶん]を 読[よ]むのが 私[わたし]の 日課[にっか]です。|Es gehört zu meiner täglichen Routine, vor dem Frühstück die Zeitung zu lesen.|Nomen
有効|有効[ゆうこう]|gültig, wirksam|私[わたし]は 有効[ゆうこう]なビザを 持[も]っていたので、 入国[にゅうこく]を 許可[きょか]された。|Da ich ein gültiges Visum hatte, wurde mir die Einreise erlaubt.|な-Adjektiv
タレント|タレント|Fernsehpersönlichkeit|彼[かれ]は 学者[がくしゃ]というよりもむしろテレビタレントである。|Er ist eher eine Fernsehberühmtheit als ein Wissenschaftler.|Nomen
無効|無効[むこう]|ungültig, unwirksam|無理矢理[むりやり]サインをさせられたのなら、その 契約[けいやく]は 無効[むこう]です。|Der Vertrag ist ungültig, wenn Sie zur Unterschrift gezwungen wurden.|な-Adjektiv
自ら|自[みずか]ら|selbst, persönlich|父[ちち]はいつも「 天[てん]は 自[みずか]ら 助[たす]くる 者[もの]を 助[たす]く」と 言[い]っていました。|Mein Vater pflegte zu sagen: „Der Himmel hilft dem, der sich selbst hilft.“|Adverb
不自然|不自然[ふしぜん]|unnatürlich|不[ふ] 自然[しぜん]すぎて 笑[わら]っちゃう。|Das ist so unnatürlich, da kann ich nur lachen.|な-Adjektiv
不自由|不自由[ふじゆう]|Unbequemlichkeit, Einschränkung|私[わたし]は 何[なに] 不[ふ] 自由[じゆう]なく 暮[く]らしている。|Ich lebe komfortabel.|Nomen (mit する)
通信|通信[つうしん]|Kommunikation, Nachrichtenübermittlung|電話[でんわ]はひとつの 通信[つうしん] 手段[しゅだん]である。|Das Telefon ist ein Kommunikationsmittel.|Nomen (mit する)
たまに|たまに|gelegentlich, ab und zu|たまには 頭[あたま]を 使[つか]えよ。|Benutz gelegentlich mal deinen Kopf.|Adverb
頼る|頼[たよ]る|sich verlassen auf, angewiesen sein auf|あまり 人[ひと]に 頼[たよ]るな。|Verlass dich nicht zu sehr auf andere Leute.|Verb
頼み|頼[たの]み|Bitte, Anliegen|彼[かれ]は 彼[かれ]らの 頼[たの]みに 耳[みみ]を 貸[か]さなかった。|Er schenkte den Bitten jener kein Gehör.|Nomen
頼もしい|頼[たの]もしい|verlässlich, vertrauenerweckend|彼[かれ]は 頼[たの]もしい 男[おとこ]だ。|Er ist ein zuverlässiger Mann.|Adjektiv
民間|民間[みんかん]|privat, zivil (nicht staatlich)|今度[こんど]の 税金[ぜいきん]は 全[すべ]ての 民間[みんかん] 企業[きぎょう]に 適用[てきよう]される。|Diese Steuer wird bei allen Privatunternehmen veranschlagt.|Nomen
民族|民族[みんぞく]|Volk, Ethnie|我々[われわれ]は 平和[へいわ]を 愛[あい]する 民族[みんぞく]である。|Wir sind ein friedliebendes Volk.|Nomen
ペンキ|ペンキ|Farbe, Anstrichfarbe|この 家[いえ]はペンキを 塗[ぬ]る 必要[ひつよう]がある。|Dieses Haus muss gestrichen werden.|Nomen
持ち主|持[も]ち 主[ぬし]|Besitzer(in)|彼[かれ]は 強[つよ]い 体[からだ]の 持[も]ち 主[ぬし]だ。|Er nennt einen starken Körper sein Eigen.|Nomen
民主|民主[みんしゅ]|Demokratie, demokratisch|いつ 民主[みんしゅ] 主義[しゅぎ]は 生[う]まれましたか。|Wann wurde die Demokratie geboren?|Nomen
家主|家主[やぬし]|Hausbesitzer(in), Vermieter(in)|家主[やぬし]は 彼[かれ]がドアを 赤[あか]く 塗[ぬ]ることを 許[ゆる]してくれない。|Der Vermieter erlaubt ihm nicht, die Tür rot zu streichen.|Nomen
定義|定義[ていぎ]|Definition|ジャズの 定義[ていぎ]って 何[なん]ですか？|Was ist denn die Definition von Jazz?|Nomen (mit する)
不思議|不思議[ふしぎ]|rätselhaft, wundersam|それは 不思議[ふしぎ]な 事件[じけん]だった。|Es war eine seltsame Angelegenheit.|な-Adjektiv
理論|理論[りろん]|Theorie|彼[かれ]の 理論[りろん]を 理解[りかい]するのは 難[むずか]しい。|Es ist schwer, seine Theorie zu verstehen.|Nomen
ベンチ|ベンチ|Bank (Sitzbank)|ベンチに 座[すわ]りなさい。|Setz dich auf die Bank!|Nomen
論理|論理[ろんり]|Logik|トムの 論理[ろんり]にはついていけない。|Ich kann Toms Logik nicht folgen.|Nomen
論文|論文[ろんぶん]|Abhandlung, Abschlussarbeit|トムは 昨日[きのう] 卒業[そつぎょう] 論文[ろんぶん]を 提出[ていしゅつ]した。|Tom hat gestern seine Abschlussarbeit abgegeben.|Nomen
論じる|論[ろん]じる|erörtern, diskutieren|彼女[かのじょ]は 単[たん]に 議論[ぎろん]のために 論[ろん]じる。|Sie diskutiert nur um des Diskutierens willen.|Verb
無論|無論[むろん]|selbstverständlich|彼[かれ]は 英語[えいご]は 無論[むろん]のこと、フランス 語[ご]も 話[はな]します。|Neben Französisch spricht er natürlich auch Englisch.|Adverb
世論|世論[よろん]|öffentliche Meinung|世論[よろん]はその 計画[けいかく]を 強[つよ]く 支持[しじ]した。|Die öffentliche Meinung unterstützte das Projekt stark.|Nomen
めいめい|めいめい|jede(r) für sich|めいめいが 自分[じぶん]の 荷物[にもつ]を 持[も]って 行[い]った。|Jeder trug sein eigenes Gepäck.|Adverb
論|論[ろん]|Argument, Theorie, Ansicht|進化[しんか] 論[ろん]は 私[わたし]の 想像[そうぞう]できる 範囲[はんい]を 超[こ]えている。|Die Evolutionstheorie ist jenseits meines Vorstellungsvermögens.|Nomen
反発|反発[はんぱつ]|Widerstand, Auflehnung|そういう 言葉[ことば]は 反発[はんぱつ]を 呼[よ]ぶだろう。|Solche Worte werden wohl Widerstand hervorrufen.|Nomen (mit する)
反映|反映[はんえい]|Widerspiegelung|新聞[しんぶん]は 世論[よろん]を 反映[はんえい]する。|Die Zeitung spiegelt die öffentliche Meinung wider.|Nomen (mit する)
反論|反論[はんろん]|Gegenargument, Widerspruch|彼[かれ]は 私[わたし]の 陳述[ちんじゅつ]に 反論[はんろん]した。|Er widersprach meiner Aussage.|Nomen (mit する)
反する|反[はん]する|widersprechen, verstoßen gegen|君[きみ]は 若[わか]い、それに 反[はん]し 私[わたし]はかなり 年[とし]をとっている。|Du bist jung; ich hingegen bin sehr alt.|Verb
どうにか|どうにか|irgendwie, mit Mühe|彼[かれ]はどうにか 赤字[あかじ]を 出[だ]さずにすんだ。|Er kam mit Mühe und Not über die Runden.|Adverb
反則|反則[はんそく]|Foul, Regelverstoß|彼[かれ]は 反則[はんそく]をして 退場[たいじょう]になりました。|Er beging ein Foul und wurde vom Platz gestellt.|Nomen (mit する)
対話|対話[たいわ]|Dialog, Gespräch|思考[しこう]とは、 自[みずか]らの 心[こころ]と 対話[たいわ]することである。|Denken heißt, mit dem eigenen Herzen ein Gespräch zu führen.|Nomen (mit する)
対|対[つい]|Paar, Gegenstück|この 茶[ちゃ]わんは 二[ふた]つで 対[つい]になっています。|Diese beiden Teeschalen bilden ein Paar.|Nomen
対応|対応[たいおう]|Reaktion, Umgang; Entsprechung|彼[かれ]は 弁護士[べんごし]だからそれなりに 対応[たいおう]しなければならない。|Er ist Anwalt und muss entsprechend behandelt werden.|Nomen (mit する)
反応|反応[はんのう]|Reaktion|それは、 良[よ]い 反応[はんのう]です。|Das ist eine gute Antwort.|Nomen (mit する)
問答|問答[もんどう]|Fragen und Antworten, Wortwechsel|問答[もんどう] 無用[むよう]！さっさとやれ！|Keine Diskussion! Mach es einfach sofort!|Nomen (mit する)
ちゃんと|ちゃんと|ordentlich, richtig|ちゃんと 聞[き]いてる？|Hörst du richtig zu?|Adverb
特定|特定[とくてい]|bestimmt; Feststellung, Identifizierung|体重[たいじゅう] 増加[ぞうか]は 特定[とくてい]の 精神[せいしん] 薬[やく]によくある 副作用[ふくさよう]である。|Gewichtszunahme ist eine häufige Nebenwirkung bestimmter Psychopharmaka.|Nomen
特色|特色[とくしょく]|Besonderheit, Eigenart|日本[にほん]には 多[おお]くのはっきりとした 特色[とくしょく]がある。|Japan hat viele charakteristische Merkmale.|Nomen
特有|特有[とくゆう]|eigentümlich, typisch für|これは 日本[にほん] 特有[とくゆう]の 習慣[しゅうかん]だ。|Das ist ein Brauch, der sich nur in Japan findet.|Adjektiv
別に|別[べつ]に|nicht besonders (mit Verneinung); getrennt|別[べつ]にそこまで 安[やす]くもないよ。|Es ist nicht besonders günstig.|Adverb
別れ|別[わか]れ|Abschied, Trennung|みんなからお 別[わか]れのプレゼントをもらった。|Ich habe ein Abschiedsgeschenk von allen bekommen.|Nomen
のどか|のどか|friedlich, beschaulich|何[なん]てのどかな 昼下[ひるさ]がりなんだろう。|Was für ein milder früher Nachmittag!|Adjektiv
送別|送別[そうべつ]|Verabschiedung|トムの 送別[そうべつ] 会[かい]に 行[い]くの？|Gehst du zu Toms Abschiedsfeier?|Nomen (mit する)
送別会|送別会[そうべつかい]|Abschiedsfeier|ジョーンズ 氏[し]のために 送別[そうべつ] 会[かい]が 開[ひら]かれた。|Für Herrn Jones wurde eine Abschiedsparty veranstaltet.|Nomen
専門家|専門家[せんもんか]|Fachmann, Expertin|専門[せんもん] 家[か]に 聞[き]いて。|Frag einen Fachmann.|Nomen
専門|専門[せんもん]|Fachgebiet|これは、 私[わたし]の 専門[せんもん] 外[がい]だ。|Das liegt außerhalb meines Fachgebiets.|Nomen
専用|専用[せんよう]|ausschließlich für, eigens für|自分[じぶん] 専用[せんよう]の 机[つくえ]が 欲[ほ]しいな。|Ich will einen eigenen Schreibtisch.|Nomen
メロディー|メロディー|Melodie|このメロディーを 聴[き]くと 私[わたし]は 学生時代[がくせいじだい]を 思[おも]い 出[だ]す。|Wenn ich diese Melodie höre, muss ich an meine Studienzeit denken.|Nomen
全般|全般[ぜんぱん]|allgemein, das Ganze|全般[ぜんぱん] 的[てき]に 彼女[かのじょ]はとても 信頼[しんらい]のおける 人間[にんげん]だ。|Im Allgemeinen ist sie eine sehr zuverlässige Person.|Nomen
本格的|本格的[ほんかくてき]|richtig, ernsthaft, authentisch|本格[ほんかく] 的[てき]に 雨[あめ]が 降[ふ]り 出[だ]した。|Es begann, richtig zu regnen.|Adjektiv
全面的|全面的[ぜんめんてき]|umfassend, uneingeschränkt|彼[かれ]の 能力[のうりょく]を 全面的[ぜんめんてき]に 信頼[しんらい]している。|Ich habe volles Vertrauen in seine Fähigkeiten.|Adjektiv
論理的|論理的[ろんりてき]|logisch|人間[にんげん]は 非[ひ] 論理[ろんり] 的[てき]です。|Die Menschen sind unlogisch.|Adjektiv
知的|知的[ちてき]|intellektuell, geistig|知的[ちてき]な 会話[かいわ]が 好[す]きです。|Ich mag intellektuelle Gespräche.|Adjektiv
目的地|目的地[もくてきち]|Reiseziel, Bestimmungsort|彼[かれ]らは 目的[もくてき] 地[ち]へ 向[む]かってまっすぐ 進[すす]んだ。|Sie gingen geradewegs auf ihr Ziel zu.|Nomen
リットル|リットル|Liter|一[いち] 立方[りっぽう]メートルは 千[せん]リットルにあたる。|Ein Kubikmeter entspricht 1000 Litern.|Nomen
文化的|文化的[ぶんかてき]|kulturell|沖縄[おきなわ]は 他[ほか]の 日本[にほん]と 文化[ぶんか] 的[てき]に 異[こと]なる。|Okinawa unterscheidet sich kulturell vom restlichen Japan.|Adjektiv
男性的|男性的[だんせいてき]|männlich, maskulin|あなたは 一般的[いっぱんてき]にどのような 言動[げんどう]を 男性[だんせい] 的[てき]であると 考[かんが]えますか？|Welche Art von Verhalten halten Sie im Allgemeinen für typisch männlich?|Adjektiv
普段|普段[ふだん]|gewöhnlich, im Alltag|普段[ふだん]は 起[お]きるのが 遅[おそ]いんだ。|Ich stehe gewöhnlich spät auf.|Adverb
並み|並[な]み|durchschnittlich, gewöhnlich|彼[かれ]は 並[な]みの 学生[がくせい]ではない。|Er ist kein gewöhnlicher Student.|Nomen
並木|並木[なみき]|Baumreihe, Allee|桜[さくら]の 並木[なみき] 道[みち]があるわよ。|Dort gibt es eine Allee mit Kirschbäumen.|Nomen
わざと|わざと|absichtlich|彼[かれ]はわざとそうしたのではなかった。|Er hat es nicht absichtlich gemacht.|Adverb
平面|平面[へいめん]|Ebene, Fläche|地図[ちず]は 平面[へいめん]にかかれています。|Eine Landkarte ist auf einer ebenen Fläche gezeichnet.|Nomen
平気|平気[へいき]|unbekümmert, gelassen|トムは 平気[へいき]で 嘘[うそ]をつく。|Tom lügt hemmungslos.|Adjektiv
平ら|平[たい]ら|flach, eben|人々[ひとびと]はかつて 世界[せかい]は 平[たい]らだと 信[しん]じていた。|Früher glaubten die Leute, die Erde wäre flach.|Adjektiv
平行|平行[へいこう]|parallel|平行[へいこう] 線[せん]は 交差[こうさ]しません。|Parallele Linien schneiden sich nicht.|Nomen (mit する)
不平|不平[ふへい]|Unzufriedenheit, Klage|物価[ぶっか]が 高[たか]いと 不平[ふへい]を 言[い]う 主婦[しゅふ]が 多[おお]い。|Viele Hausfrauen beklagen sich, dass die Preise hoch seien.|な-Adjektiv
とっくに|とっくに|schon längst|列車[れっしゃ]は、とっくに 着[つ]いてるよ。|Der Zug ist längst angekommen.|Adverb
地平線|地平線[ちへいせん]|Horizont (über dem Land)|太陽[たいよう]が 地平[ちへい] 線[せん]の 下[した]に 沈[しず]みつつある。|Die Sonne versinkt am Horizont.|Nomen
平野|平野[へいや]|Ebene, Flachland|私[わたし]たちは 山[やま]の 上[うえ]から 平野[へいや]を 見下[みお]ろした。|Vom Berg aus blickten wir auf die Ebene hinab.|Nomen
平たい|平[ひら]たい|flach|古代人[こだいじん]たちは 地球[ちきゅう]は 平[ひら]たいと 信[しん]じていた。|Die Völker des Altertums glaubten, die Erde sei flach.|Adjektiv
平方|平方[へいほう]|Quadrat-|この 部屋[へや]は 三十[さんじゅう] 平方[へいほう]メートルあります。|Dieses Zimmer hat dreißig Quadratmeter.|Nomen
平日|平日[へいじつ]|Wochentag, Werktag|商店街[しょうてんがい]は 平日[へいじつ]ひっそりしている。|Einkaufsstraßen sind werktags sehr ruhig.|Nomen
ベスト|ベスト|das Beste|三[さん] 人[にん]の 候補者[こうほしゃ]の 中[なか]ではスミス 氏[し]がベストだと 思[おも]います。|Von den drei Kandidaten ist Mr. Smith meines Erachtens der beste.|Nomen
平均|平均[へいきん]|Durchschnitt|君[きみ]の 作文[さくぶん]は 平均[へいきん]よりも 上[うえ]だ。|Dein englischer Aufsatz liegt über dem Durchschnitt.|Nomen (mit する)
等しい|等[ひと]しい|gleich, so gut wie|君[きみ]の 言葉[ことば]はほとんど 屈辱[くつじょく]に 等[ひと]しい。|Deine Worte gleichen fast einer Demütigung.|Adjektiv
平等|平等[びょうどう]|Gleichheit, gleich behandelt|すべての 人[ひと]は 神[かみ]の 前[まえ]では 平等[びょうどう]である。|Vor Gott sind alle Menschen gleich.|な-Adjektiv
同等|同等[どうとう]|gleichwertig|男[おとこ]と 女[おんな]は 同等[どうとう]だと 切[せつ]に 感[かん]じる。|Ich empfinde zutiefst, dass Mann und Frau gleichgestellt sind.|Nomen
対等|対等[たいとう]|gleichberechtigt, auf Augenhöhe|お 母[かあ]さんと 対等[たいとう]になりたかった。|Er wollte mit seiner Mutter auf Augenhöhe sein.|な-Adjektiv
不平等|不平等[ふびょうどう]|ungleich, ungerecht|日本[にほん]の 結婚[けっこん] 制度[せいど]は 男[おとこ]に 不利[ふり]な 男女[だんじょ] 不[ふ] 平等[びょうどう] 条約[じょうやく]だと 思[おも]います。|Ich finde, das japanische Ehesystem ist ein ungleicher Vertrag zum Nachteil der Männer.|な-Adjektiv
ワンピース|ワンピース|Kleid (einteilig)|このワンピースはいくらですか。|Was kostet dieser Einteiler?|Nomen
病室|病室[びょうしつ]|Krankenzimmer|病室[びょうしつ]では 静[しず]かにしてください。|Seien Sie im Krankenzimmer bitte leise.|Nomen
病人|病人[びょうにん]|Kranke(r)|彼[かれ]はまるで 病人[びょうにん]のような 顔色[かおいろ]をしている。|Er sieht krank aus.|Nomen
内科|内科[ないか]|Innere Medizin|内科[ないか]はどこですか。|Wo ist die Innere Medizin?|Nomen
必死|必死[ひっし]|verzweifelt, mit aller Kraft|彼女[かのじょ]は 必死[ひっし]になって 戦[たたか]い 続[つづ]ける 彼[かれ]を 見[み]ていた。|Sie sah zu, wie er aus Leibeskräften weiterkämpfte.|な-Adjektiv
病死|病死[びょうし]|Tod durch Krankheit|祖父[そふ]は 三[さん] 年[ねん] 前[まえ]に 病死[びょうし]しました。|Mein Großvater ist vor drei Jahren an einer Krankheit gestorben.|Nomen (mit する)
ダイヤモンド|ダイヤモンド|Diamant|それって、 本物[ほんもの]のダイヤモンド？|Ist das ein echter Diamant?|Nomen
必死に|必死[ひっし]に|verzweifelt, mit aller Kraft|トムは 必死[ひっし]に 逃[に]げた。|Tom rannte um sein Leben.|Adverb
亡くす|亡[な]くす|verlieren (durch Tod)|トムは 幼[おさな]くして 両親[りょうしん]を 亡[な]くした。|Toms Eltern starben, als er noch ein Kind war.|Verb
多忙|多忙[たぼう]|sehr beschäftigt|たとえ 多忙[たぼう]でも 彼[かれ]は 来[く]るだろう。|Selbst wenn er sehr beschäftigt ist, wird er trotzdem kommen.|な-Adjektiv
疲れ|疲[つか]れ|Müdigkeit, Erschöpfung|お 疲[つか]れでしょうね。|Du bist bestimmt müde.|Nomen
立ち入り禁止|立[た]ち 入[い]り 禁止[きんし]|Betreten verboten|立[た]ち 入[い]り 禁止[きんし]。|Eintritt verboten!|Nomen
ナンバー|ナンバー|Nummer; Kennzeichen|お 名前[なまえ]とフライトナンバーをお 願[ねが]いします。|Ihr Name und Ihre Flugnummer, bitte.|Nomen
日本酒|日本酒[にほんしゅ]|Sake (japanischer Reiswein)|日本酒[にほんしゅ]は 飲[の]めません。|Ich vertrage keinen japanischen Reiswein.|Nomen
酔う|酔[よ]う|betrunken werden; seekrank werden|私[わたし]は 少[すこ]し 酔[よ]っている。|Ich bin ein bisschen betrunken.|Verb
保つ|保[たも]つ|bewahren, erhalten|名声[めいせい]を 保[たも]つことは 難[むずか]しい。|Es ist schwer, sich seinen Ruf zu bewahren.|Verb
保険|保険[ほけん]|Versicherung|旅行[りょこう] 保険[ほけん]には 入[はい]ってますか？|Sind Sie reiseversichert?|Nomen
保証|保証[ほしょう]|Garantie|保証[ほしょう]は 一年間[いちねんかん]です。|Es gibt ein Jahr lang Garantie.|Nomen (mit する)
保証人|保証人[ほしょうにん]|Bürge, Bürgin|彼[かれ]が 借金[しゃっきん]の 保証[ほしょう] 人[にん]になってくれた。|Er hat für meine Schulden gebürgt.|Nomen
とうとう|とうとう|schließlich, endlich|とうとう 私[わたし]の 姉[あね]は 婚約[こんやく]した。|Endlich hat sich meine Schwester verlobt.|Adverb
保存|保存[ほぞん]|Aufbewahrung, Speichern|彼[かれ]らは 果物[くだもの]を 保存[ほぞん]するために 缶詰[かんづ]めにした。|Sie machten die Früchte in Dosen ein, um sie aufzubewahren.|Nomen (mit する)
存じる|存[ぞん]じる|wissen, denken (bescheiden)|その 話[はなし]はよく 存[ぞん]じています。|Diese Geschichte ist mir gut bekannt.|Verb
注ぐ|注[そそ]ぐ|eingießen; zufließen|彼[かれ]にビールを 一杯[いっぱい] 注[そそ]いであげてください。|Bitte gieß ihm ein Glas Bier ein.|Verb
注|注[ちゅう]|Anmerkung|脚注[きゃくちゅう]とはページの 下部[かぶ]の 注[ちゅう]をいう。|Fußnoten sind Bemerkungen, die an der Seite unten stehen.|Nomen
同意|同意[どうい]|Zustimmung, Einverständnis|彼女[かのじょ]は 家賃[やちん]の 半分[はんぶん]を 払[はら]うのに 同意[どうい]した。|Sie war einverstanden, die Hälfte der Miete zu übernehmen.|Nomen (mit する)
とんでもない|とんでもない|unerhört, ganz und gar nicht|とんでもない！|Das ist nicht möglich!|Adjektiv
無意味|無意味[むいみ]|sinnlos|それはまったく 無[む] 意味[いみ]だ。|Das ist völlig sinnlos.|な-Adjektiv
不注意|不注意[ふちゅうい]|Unachtsamkeit|今回[こんかい]は 君[きみ]の 不[ふ] 注意[ちゅうい]を 許[ゆる]しましょう。|Diesmal werde ich noch über deine Unachtsamkeit hinwegsehen.|な-Adjektiv
生意気|生意気[なまいき]|frech, vorlaut|生[なま] 意気[いき]を 言[い]うんじゃない。|Sei nicht so frech zu mir.|な-Adjektiv
確かめる|確[たし]かめる|überprüfen, sich vergewissern|トムは 時計[とけい]を 確[たし]かめた。|Tom überprüfte, wie spät es war.|Verb
明確|明確[めいかく]|klar, eindeutig|明確[めいかく]な 返事[へんじ]が 欲[ほ]しい。|Ich möchte eine klare Antwort haben.|な-Adjektiv
にこやか|にこやか|freundlich lächelnd|トムはいつもにこやかだね。|Tom lächelt immer.|Adjektiv
不確か|不確[ふたし]か|unsicher, ungewiss|彼[かれ]は 自分[じぶん]の 未来[みらい]について 不確[ふたし]かだ。|Er ist unsicher was seine Zukunft angeht.|な-Adjektiv
認可|認可[にんか]|Genehmigung, Zulassung|それは 政府[せいふ]の 認可[にんか]が 必要[ひつよう]です。|Dafür ist eine Genehmigung der Regierung nötig.|Nomen (mit する)
認める|認[みと]める|anerkennen, zugeben, erlauben|いびきをかくことは 認[みと]めるよ・・・。|Ich muss zugeben, dass ich schnarche.|Verb
率|率[りつ]|Rate, Quote|カナダでは 犯罪[はんざい] 率[りつ]が 低下[ていか]してきている。|Die Kriminalitätsrate in Kanada sinkt.|Nomen
率直|率直[そっちょく]|offen, freimütig|私[わたし]は 率直[そっちょく]に 意見[いけん]を 述[の]べる 人[ひと]を 尊敬[そんけい]します。|Ich achte Leute, die offen ihre Meinung aussprechen.|Adjektiv
能率|能率[のうりつ]|Effizienz|日本[にほん]の 電話網[でんわもう]は 非常[ひじょう]に 能率[のうりつ] 的[てき]にできている。|Das japanische Telefonnetz ist äußerst effizient.|Nomen
ロッカー|ロッカー|Schließfach, Spind|学生[がくせい]たちはめいめい 個人用[こじんよう]のロッカーがある。|Jeder Student hat sein eigenes Schließfach.|Nomen
旅客機|旅客機[りょかくき]|Passagierflugzeug|旅客[りょかく] 機[き]がアメリカに 向[む]けて 出発[しゅっぱつ]した。|Ein Passagierflugzeug ist nach Amerika gestartet.|Nomen
不器用|不器用[ぶきよう]|ungeschickt, unbeholfen|彼女[かのじょ]は 不[ぶ] 器用[きよう]である。|Sie ist unbeholfen.|な-Adjektiv
道具|道具[どうぐ]|Werkzeug, Gerät|それを 開[あ]ける 道具[どうぐ]が 必要[ひつよう]です。|Wir brauchen ein Werkzeug, um es damit zu öffnen.|Nomen
予備|予備[よび]|Reserve, Ersatz|予備[よび]の 枕[まくら]をください。|Ich hätte gern ein zusätzliches Kissen.|Nomen
説く|説[と]く|erklären, predigen|彼[かれ]は 私[わたし] 達[たち]に 健康[けんこう]の 重要[じゅうよう] 性[せい]を 説[と]いた。|Er legte uns dar, wie wichtig die Gesundheit ist.|Verb
プライド|プライド|Stolz|質問[しつもん]をすることは 彼[かれ]のプライドが 許[ゆる]さない。|Sein Stolz erlaubt es ihm nicht, Fragen zu stellen.|Nomen
不公平|不公平[ふこうへい]|ungerecht, unfair|そんなの 不[ふ] 公平[こうへい]じゃない？|Findest du das nicht ungerecht?|な-Adjektiv
遊園地|遊園地[ゆうえんち]|Freizeitpark|今日[きょう]はどこへ 行[い]こうか？ 遊園[ゆうえん] 地[ち]？それとも 映画[えいが]でも 見[み]る？|Wohin sollen wir heute gehen, in einen Vergnügungspark? Oder sollen wir einen Film schauen?|Nomen
保育園|保育園[ほいくえん]|Kinderkrippe, Kita|しげみちゃんを 保育[ほいく] 園[えん]に 迎[むか]えに 行[い]ってもらえる？|Könntest du Shigemi von der Kinderkrippe abholen?|Nomen
飛び出す|飛[と]び 出[だ]す|hinausspringen, hervorschießen|トムは 左右[さゆう]を 見[み]ずに 道路[どうろ]に 飛[と]び 出[だ]した。|Tom rannte hinaus auf die Straße ohne nach rechts und links zu schauen.|Verb
飛ばす|飛[と]ばす|fliegen lassen; überspringen|退屈[たいくつ]な 章[しょう]を 飛[と]ばして 読[よ]む。|Ich überspringe die langweiligen Kapitel beim Lesen.|Verb
ママ|ママ|Mama|ママとパパは 今日[きょう]は 何[なに]したの？|Was haben Papa und Mama heute gemacht?|Nomen
飛び上がる|飛[と]び 上[あ]がる|aufspringen, hochfliegen|私[わたし]は 驚[おどろ]いて 飛[と]び 上[あ]がった。|Ich sprang erschrocken auf.|Verb
飛び下りる|飛[と]び 下[お]りる|hinunterspringen|猫[ねこ]が 屋根[やね]から 飛[と]び 下[お]りました。|Die Katze ist vom Dach hinuntergesprungen.|Verb
飛び込む|飛[と]び 込[こ]む|hineinspringen|私[わたし]は 川[かわ]に 頭[あたま]から 飛[と]び 込[こ]んだ。|Ich sprang kopfüber in den Fluss.|Verb
飛行|飛行[ひこう]|Flug|飛行[ひこう] 時間[じかん]はどれくらいですか。|Wie lange dauert der Flug?|Nomen (mit する)
船長|船長[せんちょう]|Kapitän(in)|私[わたし]たちは 船長[せんちょう]の 命令[めいれい]を 厳密[げんみつ]に 実行[じっこう]した。|Wir führten den Befehl des Kapitäns präzise aus.|Nomen
よける|よける|ausweichen; beiseiteräumen|家[いえ]のない 人[ひと]たちは 冷[つめ]たいにわか 雨[あめ]をよける 場所[ばしょ]を 探[さが]した。|Die Obdachlosen suchten einen Ort, um dem kalten Regenschauer auszuweichen.|Verb
風船|風船[ふうせん]|Luftballon|トムは 風船[ふうせん]をふくらませた。|Tom blies den Ballon auf.|Nomen
半島|半島[はんとう]|Halbinsel|朝鮮[ちょうせん] 半島[はんとう]を 訪[おとず]れたことがありますか。|Haben Sie schon einmal die koreanische Halbinsel besucht?|Nomen
島|島[とう]|Insel|マウイ 島[とう]がお 勧[すす]めです。|Ich empfehle die Insel Maui.|Nomen
不完全|不完全[ふかんぜん]|unvollständig, unvollkommen|彼[かれ]の 計画[けいかく]はまだ 不[ふ] 完全[かんぜん]な 点[てん]が 多[おお]い。|Sein Plan ist in vielen Punkten noch unvollständig.|な-Adjektiv
達成|達成[たっせい]|Erreichen (eines Ziels)|彼女[かのじょ]は 目的[もくてき]を 達成[たっせい]した。|Sie hat ihr Ziel erreicht.|Nomen (mit する)
成り立つ|成[な]り 立[た]つ|bestehen aus, zustande kommen|委員会[いいんかい]は 教師[きょうし]と 親[おや]から 成[な]り 立[た]っている。|Das Komitee besteht aus Lehrern und Eltern.|Verb
バッジ|バッジ|Abzeichen|誰[だれ]か 僕[ぼく]のバッジ 見[み]なかった？|Hat jemand mein Abzeichen gesehen?|Nomen
未成年|未成年[みせいねん]|Minderjährige(r)|彼女[かのじょ]はまだ 未[み] 成年[せいねん]だ。|Sie ist noch minderjährig.|Nomen
敗れる|敗[やぶ]れる|besiegt werden, unterliegen|私[わたし]たちは 試合[しあい]に 敗[やぶ]れた。|Wir haben das Spiel verloren.|Verb
野原|野原[のはら]|Feld, Wiese|ここは 昔[むかし]は 野原[のはら]だったのだが、 今[いま]ではスーパーになっている。|Früher war hier ein Feld, jetzt steht da ein Supermarkt.|Nomen
原|原[はら]|Ebene, Feld|広[ひろ]い 原[はら]で 馬[うま]が 走[はし]っています。|Auf dem weiten Feld laufen Pferde.|Nomen
要因|要因[よういん]|Hauptursache, Faktor|健康[けんこう]は 幸福[こうふく]の 重要[じゅうよう]な 要因[よういん]だ。|Gesundheit ist ein wesentlicher Faktor zum Glück.|Nomen
ピン|ピン|Nadel, Haarnadel|髪[かみ]をピンでとめました。|Ich habe mein Haar mit einer Haarnadel festgesteckt.|Nomen
因る|因[よ]る|beruhen auf, verursacht sein durch|事故[じこ]は 不注意[ふちゅうい]に 因[よ]るものでした。|Der Unfall war auf Unachtsamkeit zurückzuführen.|Verb
物資|物資[ぶっし]|Güter, Hilfsgüter|物資[ぶっし]を 移動[いどう]させ 戦争[せんそう]に 備[そな]える。|Man verlegt Güter und bereitet sich auf den Krieg vor.|Nomen
願い|願[ねが]い|Wunsch, Bitte|一[ひと]つお 願[ねが]いがあるんだ。|Ich habe eine Bitte.|Nomen
不正|不正[ふせい]|Unrecht, Betrug|不正[ふせい]には 抗議[こうぎ]せざるをえない。|Gegen Ungerechtigkeit muss man protestieren.|な-Adjektiv
大正|大正[たいしょう]|Taishō-Ära (1912–1926)|祖母[そぼ]は 大正[たいしょう]に 生[う]まれました。|Meine Großmutter wurde in der Taishō-Zeit geboren.|Nomen
まあ|まあ|na ja, nun|まあ、 見[み]てろよ。|Wart’s nur ab!|Ausruf
正に|正[まさ]に|genau, wahrhaftig|俺[おれ]が 欲[ほ]しいのは 正[まさ]にそれだよ。|Genau das ist es, was ich will.|Adverb
常に|常[つね]に|stets, immer|医学[いがく]は 常[つね]に 進歩[しんぽ]している。|Die medizinische Wissenschaft schreitet stets voran.|Adverb
日常|日常[にちじょう]|Alltag, alltäglich|私[わたし]はアメリカの 日常[にちじょう] 生活[せいかつ]について 学[まな]びたい。|Ich möchte etwas über das amerikanische Alltagsleben lernen.|Nomen
知識|知識[ちしき]|Wissen, Kenntnisse|大学教育[だいがくきょういく]は 知識[ちしき]を 広[ひろ]げるためのものだ。|Die Universitätsbildung ist dazu da, das Wissen zu erweitern.|Nomen
認識|認識[にんしき]|Erkenntnis, Wahrnehmung, Auffassung|世界[せかい]は 彼[かれ]を 認識[にんしき]していなかった。|Die Welt erkannte ihn nicht.|Nomen (mit する)
無意識|無意識[むいしき]|unbewusst|無[む] 意識[いしき]にしちゃってたの。|Ich habe es unbewusst getan.|Adverb
むなしい|むなしい|leer, vergeblich|彼[かれ]のいない 人生[じんせい]はむなしい。|Mein Leben ist leer ohne ihn.|Adjektiv
非難|非難[ひなん]|Kritik, Vorwurf|彼[かれ]の 行動[こうどう]は 非難[ひなん]の 余地[よち]が 無[な]い。|Es gibt keinen Raum für Kritik an seinem Verhalten.|Nomen (mit する)
非常|非常[ひじょう]|Notfall; außerordentlich|昨日[きのう]、 天気[てんき]が 非常[ひじょう]によかった。|Gestern war das Wetter außerordentlich schön.|な-Adjektiv
非常識|非常識[ひじょうしき]|ohne Anstand, unvernünftig|彼[かれ]は 非[ひ] 常識[じょうしき]だ。|Ihm fehlt jeder Anstand.|な-Adjektiv
非常口|非常口[ひじょうぐち]|Notausgang|非常[ひじょう] 口[ぐち]はどこにありますか。|Wo ist der Notausgang?|Nomen
調子|調子[ちょうし]|Verfassung, Form; Ton|彼[かれ]は 体[からだ]の 調子[ちょうし]がよい。|Er ist körperlich in guter Verfassung.|Nomen
ついで|ついで|bei der Gelegenheit, nebenbei|買[か]い 物[もの]ついでにでもお 寄[よ]りください。|Bitte schauen Sie mal bei Gelegenheit vorbei, wenn Sie einkaufen gehen oder ähnliches.|Nomen
調和|調和[ちょうわ]|Harmonie, Einklang|日本人[にほんじん]は 自然[しぜん]と 調和[ちょうわ]して 暮[く]らす。|Die Japaner leben in Harmonie mit der Natur.|Nomen (mit する)
体調|体調[たいちょう]|körperliche Verfassung|私[わたし]は 体調[たいちょう]が 悪[わる]い。|Ich bin in schlechter Verfassung.|Nomen
単調|単調[たんちょう]|eintönig, monoton|ここに 来[き]てから 生活[せいかつ]は 非常[ひじょう]に 単調[たんちょう]です。|Seit ich hier bin, ist mein Leben sehr eintönig.|な-Adjektiv
調味料|調味料[ちょうみりょう]|Würzmittel, Gewürz|ちょっと 高[たか]い 調味[ちょうみ] 料[りょう] 使[つか]うと、やっぱ 違[ちが]う。|Wenn man etwas teurere Gewürze benutzt, merkt man doch den Unterschied.|Nomen
調整|調整[ちょうせい]|Abstimmung, Regulierung|音楽[おんがく]のボリュームを 調整[ちょうせい]したいのですが。|Ich möchte die Lautstärke der Musik einstellen.|Nomen (mit する)
バケツ|バケツ|Eimer|バケツの 底[そこ]に 穴[あな]があいてるよ。|Ein Loch ist im Eimer.|Nomen
整える|整[ととの]える|ordnen, herrichten|髪[かみ]を 整[ととの]えないと。|Ich muss meine Haare zurechtmachen.|Verb
整う|整[ととの]う|geordnet sein, bereit sein|すべてきちんと 整[ととの]っている。|Alles ist ordentlich hergerichtet.|Verb
調節|調節[ちょうせつ]|Regulierung, Einstellung|音量[おんりょう] 調節[ちょうせつ]はどこでやるの？|Wo kann man die Lautstärke einstellen?|Nomen (mit する)
提出|提出[ていしゅつ]|Einreichung, Abgabe|今日[きょう]レポートを 提出[ていしゅつ]しなければならない。|Ich muss heute den Bericht einreichen.|Nomen (mit する)
前提|前提[ぜんてい]|Voraussetzung, Prämisse|その 前提[ぜんてい]が 妥当[だとう]かどうかよく 考[かんが]えるべきだ。|Wir sollten darüber nachdenken, ob die Annahme gültig ist oder nicht.|Nomen
答案|答案[とうあん]|Prüfungsbogen, Lösungsblatt|トムは 白紙[はくし]の 答案[とうあん]を 出[だ]した。|Tom hat einen leeren Prüfungsbogen abgegeben.|Nomen
はっと|はっと|aufschreckend, plötzlich gewahr werdend|彼[かれ]には 本当[ほんとう]にはっとさせられた。|Er hat mich wirklich aufschrecken lassen.|Adverb
投票|投票[とうひょう]|Abstimmung, Stimmabgabe|大統領選挙[だいとうりょうせんきょ]で 誰[だれ]に 投票[とうひょう]しますか。|Für wen stimmst du bei der Präsidentschaftswahl?|Nomen (mit する)
目標|目標[もくひょう]|Ziel|私[わたし]の 目標[もくひょう]は 医者[いしゃ]になることです。|Mein Ziel ist es, Ärztin zu werden.|Nomen
標準|標準[ひょうじゅん]|Standard, Norm|君[きみ]は 標準[ひょうじゅん] 英語[えいご]を 学[まな]ばなくてはいけない。|Du musst standardkonformes Englisch lernen.|Nomen
連れる|連[つ]れる|mitnehmen, in Begleitung haben|映画[えいが]にいくなのなら 妹[いもうと]も 連[つ]れていきなさい。|Wenn du ins Kino gehst, nimm deine Schwester mit.|Verb
連日|連日[れんじつ]|Tag für Tag, mehrere Tage hintereinander|トムは 連日[れんじつ]の 猛暑[もうしょ]で 食欲[しょくよく]をなくしていた。|Wegen der über Tage anhaltenden Hitze hatte Tom keinen Appetit.|Nomen
まずい|まずい|ungeschickt, schlecht; ungünstig|早[はや]く 言[い]い 訳[わけ]を 考[かんが]えないとまずい 事[こと]になる。|Wenn dir nicht schnell eine Ausrede einfällt, wird es ungemütlch werden.|Adjektiv
連休|連休[れんきゅう]|mehrere freie Tage hintereinander|来週[らいしゅう]の 月曜[げつよう]と 火曜[かよう]は 連休[れんきゅう]だ。|Nächste Woche Montag und Dienstag sind zusammenhängende Feiertage.|Nomen
連れ|連[つ]れ|Begleitung, Begleiter(in)|彼[かれ]は 犬[いぬ] 一匹[いっぴき]だけを 連[つ]れとして 旅[たび]をした。|Er reiste mit nur einem Hund als Begleiter.|Nomen
連絡|連絡[れんらく]|Kontakt, Benachrichtigung; Anschluss|彼[かれ]と 連絡[れんらく]がとれましたか。|Könntest du ihn kontaktieren?|Nomen (mit する)
手続き|手続[てつづ]き|Verfahren, Formalitäten|彼[かれ]に 手続[てつづ]きを 説明[せつめい]した。|Ich erklärte ihm den Vorgang.|Nomen
連続|連続[れんぞく]|Fortsetzung, Aufeinanderfolge|彼[かれ]の 生涯[しょうがい]は 長[なが]い 失敗[しっぱい]の 連続[れんぞく]だった。|Sein Leben war eine lange Reihe von Fehlschlägen.|Nomen (mit する)
もしも|もしも|falls, wenn je|もしも、 職[しょく]を 失[うしな]ったらどうする？|Was tätest du, wenn du deine Arbeit verlörest?|Adverb
続々|続々[ぞくぞく]|in rascher Folge, einer nach dem anderen|劇場[げきじょう]から 続々[ぞくぞく]と 人[ひと]が 出[で]てきた。|Aus dem Theater strömten nach und nach die Leute.|Adverb
続き|続[つづ]き|Fortsetzung|夢[ゆめ]の 続[つづ]きは 覚[おぼ]えてない。|Was im Traum als nächstes geschah, daran kann ich mich nicht erinnern.|Nomen
長続き|長続[ながつづ]き|lange anhalten, von Dauer sein|長続[ながつづ]きしないってこともちゃんと 分[わ]かってた。|Mir war auch klar, dass es nicht von Dauer sein würde.|Nomen (mit する)
相場|相場[そうば]|Marktpreis, Kurs|この 辺[あた]りの 家賃[やちん]の 相場[そうば]を 調[しら]べました。|Ich habe mich nach den üblichen Mietpreisen in dieser Gegend erkundigt.|Nomen
相当|相当[そうとう]|entsprechen; ziemlich, beträchtlich|地図[ちず] 上[じょう]の 太[ふと]い 線[せん]は 道路[どうろ]に 相当[そうとう]する。|Die breiten Linien auf der Karte entsprechen Straßen.|Nomen (mit する)
やかましい|やかましい|laut, lärmend; pingelig|彼女[かのじょ]は 自分[じぶん]の 着[き]るものにはやかましい。|Sie ist wählerisch darin, was sie anzieht.|Adjektiv
相応しい|相応[ふさわ]しい|passend, angemessen|彼[かれ]はリーダーに 相応[ふさわ]しい 人[ひと]です。|Er ist der Richtige für die Rolle des Anführers.|Adjektiv
対談|対談[たいだん]|Zwiegespräch, Interview|私[わたし]たちは 老人[ろうじん]と 楽[たの]しく 対談[たいだん]した。|Wir führten ein angenehmes Gespräch mit dem alten Mann.|Nomen (mit する)
録画|録画[ろくが]|Videoaufzeichnung|録画[ろくが]しても、どうせ 観[み]ないんだろうなあ。|Selbst wenn ich es aufnehme, sehe ich es mir wahrscheinlich sowieso nicht an.|Nomen (mit する)
録音テープ|録音[ろくおん]テープ|Tonband|会議[かいぎ]の 録音[ろくおん]テープを 聞[き]きました。|Ich habe mir das Tonband der Besprechung angehört.|Nomen
登場|登場[とうじょう]|Auftritt, Erscheinen|この 本[ほん]の 登場[とうじょう] 人物[じんぶつ]では 誰[だれ]が 好[す]き？|Wer ist eure Lieblingsfigur in diesem Buch?|Nomen (mit する)
登録|登録[とうろく]|Registrierung, Anmeldung|そのページ、お 気[き]に 入[い]り 登録[とうろく]してるよ。|Die Seite hat bei mir ein Lesezeichen bekommen.|Nomen (mit する)
バット|バット|Schläger (Baseball)|トムがバットを 地面[じめん]に 置[お]いたんだ。|Tom legte den Schläger auf den Boden.|Nomen
登山|登山[とざん]|Bergsteigen|登山[とざん]に 興味[きょうみ]があるんですよ。|Ich interessiere mich fürs Bergsteigen.|Nomen (mit する)
登校|登校[とうこう]|Schulbesuch, zur Schule gehen|彼[かれ]はバスで 登校[とうこう]する。|Er fährt mit dem Bus zur Schule.|Nomen (mit する)
山登り|山登[やまのぼ]り|Bergwandern|明日[あした]は 山登[やまのぼ]りに 行[い]ってきます。|Morgen gehe ich bergsteigen.|Nomen (mit する)
無関心|無関心[むかんしん]|Gleichgültigkeit, Desinteresse|君[きみ]は 周囲[しゅうい]の 人[ひと]に 無[む] 関心[かんしん]すぎるよ。|Du bist den Menschen in deiner Umgebung gegenüber zu gleichgültig.|な-Adjektiv
無関係|無関係[むかんけい]|ohne Zusammenhang, unbeteiligt|これは 我々[われわれ]の 問題[もんだい]とは 全[まった]く 無[む] 関係[かんけい]かもしれない。|Vielleicht hat das gar nichts mit unserem Problem zu tun.|な-Adjektiv
マナー|マナー|Manieren|テーブルマナーは 国[くに]によって 異[こと]なる。|Tischmanieren unterscheiden sich von Land zu Land.|Nomen
不況|不況[ふきょう]|Rezession, Flaute|長[なが]い 不況[ふきょう]の 後[あと]で 景気[けいき]はやっと 上向[うわむ]きになっている。|Nach einer langen Rezession geht es mit der Geschäftslage endlich wieder aufwärts.|Nomen
態度|態度[たいど]|Haltung, Verhalten|私[わたし]は 彼[かれ]の 失礼[しつれい]な 態度[たいど]に 我慢[がまん]できなかった。|Ich ertrug sein unhöfliches Verhalten nicht.|Nomen
明治|明治[めいじ]|Meiji-Ära (1868–1912)|その 法律[ほうりつ]は 明治[めいじ] 時代[じだい]に 制定[せいてい]された。|Das Gesetz wurde in der Meiji-Zeit erlassen.|Nomen
府|府[ふ]|Stadtpräfektur (Osaka, Kyoto)|大阪[おおさか]は 府[ふ]で、 県[けん]ではありません。|Ōsaka ist eine Stadtpräfektur und keine gewöhnliche Präfektur.|Nomen
府立|府立[ふりつ]|von der Präfektur getragen (Osaka, Kyoto)|彼[かれ]は 府立[ふりつ]の 高校[こうこう]を 卒業[そつぎょう]しました。|Er hat eine Oberschule der Stadtpräfektur abgeschlossen.|Nomen
ばらばら|ばらばら|verstreut, getrennt, auseinander|彼女[かのじょ]は 手紙[てがみ]をばらばらに 引[ひ]き 裂[さ]いた。|Sie hat den Brief in tausend Stücke gerissen.|Adverb
野党|野党[やとう]|Oppositionspartei|政府[せいふ]はすべての 野党[やとう]を 抑圧[よくあつ]しようとした。|Die Regierung versuchte, alle Oppositionsparteien zu unterdrücken.|Nomen
当選|当選[とうせん]|Wahlsieg; Gewinn (Los)|次[つぎ]の 選挙[せんきょ]では 彼[かれ]が 当選[とうせん]するだろう。|Er wird die nächste Wahl wahrscheinlich gewinnen.|Nomen (mit する)
入選|入選[にゅうせん]|Auswahl, Annahme (bei einem Wettbewerb)|彼[かれ]の 絵[え]が 入選[にゅうせん]した。|Sein Bild wurde für die Ausstellung ausgewählt.|Nomen (mit する)
選択|選択[せんたく]|Auswahl, Wahl|選択[せんたく]の 余地[よち]はないの？|Gibt es keine andere Wahl?|Nomen (mit する)
天候|天候[てんこう]|Wetter, Witterung|悪[あく] 天候[てんこう]のため、 私[わたし]たちは 出発[しゅっぱつ]できなかった。|Aufgrund des schlechten Wetters konnten wir nicht aufbrechen.|Nomen
手首|手首[てくび]|Handgelenk|私[わたし]は 転[ころ]んだ 瞬間[しゅんかん]に 手首[てくび]を 折[お]ったことが 分[わ]かった。|Als ich hingefallen war, wusste ich noch im selben Augenblick, dass ich mir das Handgelenk gebrochen hatte.|Nomen
プラットホーム|プラットホーム|Bahnsteig|プラットホームにはとても 多[おお]くの 人[ひと]がいた。|Es standen jede Menge Leute auf dem Bahnsteig.|Nomen
脳|脳[のう]|Gehirn|脳[のう]は 頭[あたま]の 中[なか]にある。|Das Gehirn befindet sich im Kopfe.|Nomen
悩む|悩[なや]む|sich quälen, Sorgen haben|私[わたし]の 悩[なや]み 聞[き]いてもらってもいいですか？|Könnte ich mit Ihnen über Sorgen reden, die ich habe?|Verb
悩み|悩[なや]み|Sorge, Kummer|私[わたし]には 悩[なや]みなど 何[なに]もない。|Ich habe keinerlei Sorgen.|Nomen
先頭|先頭[せんとう]|Spitze, vorderste Stelle|我々[われわれ]の 車[くるま]は 速[はや]く、じきにほかの 車[くるま]の 先頭[せんとう]に 立[た]った。|Unser Auto war schnell und kam sofort an die Spitze aller Autos.|Nomen
命じる|命[めい]じる|befehlen, anordnen|社長[しゃちょう]は 彼[かれ]に 出張[しゅっちょう]を 命[めい]じました。|Der Firmenchef ordnete für ihn eine Dienstreise an.|Verb
まぐろ|まぐろ|Thunfisch|マグロの 漁獲量[ぎょかくりょう]は 減[へ]ってきている。|Der Ertrag an Thunfisch geht zurück.|Nomen
領土|領土[りょうど]|Territorium, Staatsgebiet|彼[かれ]らは 帝国[ていこく]の 領土[りょうど]を 広[ひろ]げた。|Sie erweiterten das Territorium ihres Reiches.|Nomen
領事館|領事館[りょうじかん]|Konsulat|領事[りょうじ] 館[かん]で 働[はたら]いています。|Ich arbeite im Konsulat.|Nomen
領収書|領収書[りょうしゅうしょ]|Quittung|領収[りょうしゅう] 書[しょ]がほしいのですが。|Ich hätte gerne eine Quittung.|Nomen
取り組む|取[と]り 組[く]む|sich auseinandersetzen mit, in Angriff nehmen|彼女[かのじょ]はその 問題[もんだい]に 取[と]り 組[く]んでいる。|Sie setzt sich mit dem Problem auseinander.|Verb
任せる|任[まか]せる|überlassen, anvertrauen|あなたにすべて 任[まか]せます。|Ich überlasse alles dir.|Verb
ろくに|ろくに|kaum, nicht richtig (mit Verneinung)|昨夜[ゆうべ]はろくに 眠[ねむ]れなかった。|Ich habe letzte Nacht nicht gut geschlafen.|Adverb
担任|担任[たんにん]|Klassenleitung, Klassenlehrer(in)|誰[だれ]が 彼[かれ]らのクラスの 担任[たんにん]になるのだろうか。|Wer wird ihre Klasse übernehmen?|Nomen (mit する)
無責任|無責任[むせきにん]|Verantwortungslosigkeit|彼女[かのじょ]は 私[わたし]を 無[む] 責任[せきにん]だと 非難[ひなん]した。|Sie warf mir vor, verantwortungslos zu sein.|な-Adjektiv
転勤|転勤[てんきん]|Versetzung (an einen anderen Ort)|転勤[てんきん]を 楽[たの]しみにしています。|Ich freue mich auf meine Versetzung.|Nomen (mit する)
勤め先|勤[つと]め 先[さき]|Arbeitsstelle, Arbeitgeber|彼[かれ]の 勤[つと]め 先[さき]はどこですか。|Wo arbeitet er?|Nomen
勤め|勤[つと]め|Arbeit, Dienst|どちらにお 勤[つと]めですか。|Für wen arbeiten Sie?|Nomen
務める|務[つと]める|ausüben, fungieren als|その 会合[かいごう]で 私[わたし]は 通訳[つうやく]を 務[つと]めた。|Ich fungierte als Dolmetscher bei der Sitzung.|Verb
つまむ|つまむ|mit den Fingern greifen; naschen|何[なに]かつまむものある？|Haben wir etwas zum knabbern?|Verb
任務|任務[にんむ]|Auftrag, Mission|彼[かれ]は 任務[にんむ]を 完了[かんりょう]した。|Er führte seinen Auftrag aus.|Nomen
務め|務[つと]め|Pflicht, Aufgabe|毎日[まいにち]の 務[つと]めを 怠[おこた]るな。|Vernachlässige nicht deine täglichen Pflichten.|Nomen
雇う|雇[やと]う|anstellen, beschäftigen|女性[じょせい]は 男性[だんせい]よりも 低[ひく]い 給料[きゅうりょう]で 雇[やと]われている。|Frauen werden zu einem geringeren Lohn beschäftigt als Männer.|Verb
募集|募集[ぼしゅう]|Anwerbung, Ausschreibung|うちのバスケット 部[ぶ]は 背[せ]の 高[たか]い 男子[だんし]を 募集[ぼしゅう]している。|Unsere Basketballmannschaft sucht große Jungen.|Nomen (mit する)
採る|採[と]る|sammeln, pflücken; einstellen|トムが 花[はな]を 採[と]ったんだ。|Tom pflückte Blumen.|Verb
ボーイ|ボーイ|Kellner, Page|ベルボーイがお 部屋[へや]にご 案内[あんない]します。|Der Hotelpage führt Sie zu Ihrem Zimmer.|Nomen
就く|就[つ]く|antreten (Stelle), sich begeben an|彼女[かのじょ]は 有望[ゆうぼう]な 仕事[しごと]に 就[つ]いている。|Sie hat eine aussichtsreiche Arbeitsstelle.|Verb
退職|退職[たいしょく]|Ausscheiden aus dem Beruf, Kündigung|結婚[けっこん] 退職[たいしょく]しました。|Ich habe gekündigt, um zu heiraten.|Nomen (mit する)
退学|退学[たいがく]|Schulabgang, Abbruch|私[わたし]は 高校[こうこう]を 退学[たいがく]になった。|Ich bin in der Oberstufe von der Schule geflogen.|Nomen (mit する)
早退|早退[そうたい]|früher gehen (Schule, Arbeit)|先生[せんせい]は 早退[そうたい]の 許可[きょか]をくれた。|Der Lehrer hat mir erlaubt, früher nach Hause zu gehen.|Nomen (mit する)
理屈|理屈[りくつ]|Logik, Argument; Ausrede|彼[かれ]の 説明[せつめい]はまったく 理屈[りくつ]に 合[あ]わない。|Seine Erklärung ist total unlogisch.|Nomen
ホット|ホット|heiß (Getränk)|ホットチョコレート 欲[ほ]しい 人[ひと]ー？|Wer will heiße Schokolade?|Nomen
退屈|退屈[たいくつ]|langweilig|眠[ねむ]い 時[とき]や 退屈[たいくつ]な 時[とき]にはあくびが 出[で]る。|Man gähnt, wenn man müde oder gelangweilt ist.|Nomen (mit する)
用件|用件[ようけん]|Anliegen, Angelegenheit|どのようなご 用件[ようけん]でいらっしゃいましたか。|Wegen welcher Angelegenheit sind Sie gekommen?|Nomen
参る|参[まい]る|gehen, kommen (bescheiden)|明朝[みょうちょう] 必[かなら]ず 参[まい]ります。|Ich komme auf jeden Fall morgen früh.|Verb
惨め|惨[みじ]め|elend, erbärmlich|息子[むすこ]の 惨[みじ]めな 暮[く]らしを 見[み]て 彼[かれ]の 胸[むね]は 痛[いた]んだ。|Es schmerzte ihn, die erbärmlichen Lebensumstände seines Sohnes zu sehen.|Adjektiv
追加|追加[ついか]|Ergänzung, Zusatz|これらの 番号[ばんごう]を 追加[ついか]できますか？|Kannst du diese Nummern hinzufügen?|Nomen (mit する)
まし|まし|besser (als nichts), vorzuziehen|遅[おそ]くともやらないよりはまし。|Besser spät als nie.|Adjektiv
比率|比率[ひりつ]|Verhältnis, Anteil|このクラスは 男女[だんじょ]の 比率[ひりつ]が 同[おな]じです。|In dieser Klasse ist das Verhältnis von Jungen und Mädchen gleich.|Nomen
対比|対比[たいひ]|Kontrast, Gegenüberstellung|私[わたし]はよく 兄[あに]と 対比[たいひ]される。|Ich werde oft meinem älteren Bruder gegenübergestellt.|Nomen (mit する)
見比べる|見比[みくら]べる|vergleichend ansehen|彼[かれ]らは 新[あたら]しい 車[くるま]と 古[ふる]い 車[くるま]を 見比[みくら]べた。|Sie verglichen das neue Auto mit dem alten.|Verb
比較的|比較的[ひかくてき]|verhältnismäßig|彼女[かのじょ]は 比較[ひかく] 的[てき] 早口[はやくち]だ。|Sie spricht relativ schnell.|Adverb
比較|比較[ひかく]|Vergleich|君[きみ]の 答[こた]えを 先生[せんせい]のと 比較[ひかく]せよ。|Vergleiche deine Antworten mit denen des Lehrers.|Nomen (mit する)
判決|判決[はんけつ]|Gerichtsurteil|政府[せいふ]に 厳[きび]しい 判決[はんけつ]が 出[で]た。|Es ist ein scharfes Urteil gegen die Regierung gefällt worden.|Nomen
ぱっと|ぱっと|plötzlich, mit einem Schlag|春[はる]の 訪[おとず]れとともにつぼみはぱっと 花[はな] 咲[さ]く。|Die Knospen erblühen mit einem Mal, wenn es Frühling wird.|Adverb
判子|判子[はんこ]|Namensstempel|私[わたし]たちの 生活[せいかつ]には 判子[はんこ]が 必需品[ひつじゅひん]です。|Der Namensstempel ist ein unerlässlicher Gegenstand in unserem Leben.|Nomen
評判|評判[ひょうばん]|Ruf, Ansehen|彼[かれ]は 評判[ひょうばん]がよい。|Er hat einen guten Ruf.|Nomen
批評|批評[ひひょう]|Kritik, Rezension|率直[そっちょく]に 言[い]うと、 彼[かれ]は 作家[さっか]というよりはむしろ 批評[ひひょう] 家[か]だ。|Um ehrlich zu sein, ist er weniger ein Autor als vielmehr ein Kritiker.|Nomen (mit する)
反感|反感[はんかん]|Abneigung, Widerwille|いらぬ 反感[はんかん]を 買[か]っても 損[そん]なだけよ。|Sich unnötig Abneigung zuzuziehen bringt nur Nachteile.|Nomen
予想|予想[よそう]|Erwartung, Vorhersage|それは 予想[よそう] 通[とお]りでした。|Es lief genau so, wie wir es erwartet hatten.|Nomen (mit する)
つなぐ|つなぐ|verbinden, anschließen|スミスさんにつないでもらえますか。|Bitte verbinden Sie mich mit Herrn Smith.|Verb
理想|理想[りそう]|Ideal|理想[りそう]を 絵[え]に 描[か]いたような 男性[だんせい]だった。|Er war wie das Abbild des idealen Mannes.|Nomen
想像|想像[そうぞう]|Vorstellung, Fantasie|月[つき]の 表面[ひょうめん]を 歩[ある]いているところを 想像[そうぞう]できますか。|Kannst du dir vorstellen, auf dem Mond zu gehen?|Nomen (mit する)
象|象[ぞう]|Elefant|象[ぞう]は 巨大[きょだい]な 動物[どうぶつ]である。|Elefanten sind riesige Tiere.|Nomen
抽象的|抽象的[ちゅうしょうてき]|abstrakt|あなたの 説明[せつめい]は 私[わたし]には 抽象[ちゅうしょう] 的[てき]すぎます。|Ihre Erklärung ist mir zu abstrakt.|Adjektiv
保障|保障[ほしょう]|Gewährleistung, Sicherung|平等[びょうどう]は 憲法[けんぽう]で 保障[ほしょう]されている。|Die Gleichheit ist durch die Verfassung garantiert.|Nomen (mit する)
ひょっとしたら|ひょっとしたら|vielleicht, womöglich|ひょっとしたらしないほうが 良[よ]かったかもしれない。|Vielleicht hätte ich das besser nicht tun sollen.|Adverb
負傷|負傷[ふしょう]|Verletzung, Verwundung|彼[かれ]は 事故[じこ]で 負傷[ふしょう]した。|Er wurde bei dem Unfall verletzt.|Nomen (mit する)
変換|変換[へんかん]|Umwandlung, Konvertierung|変換[へんかん]にはかなりの 時間[じかん]がかかる。|Die Umwandlung dauert ziemlich lange.|Nomen (mit する)
取り替える|取[と]り 替[か]える|auswechseln, ersetzen|別[べつ]の 物[もの]と 取[と]り 替[か]えてください。|Bitte ersetzen Sie es durch ein anderes.|Verb
立て替える|立[た]て 替[か]える|auslegen, vorstrecken (Geld)|昼[ひる]ご 飯[はん]の 代金[だいきん]を 立[た]て 替[か]えました。|Ich habe das Geld für das Mittagessen ausgelegt.|Verb
天災|天災[てんさい]|Naturkatastrophe|地震[じしん]や 洪水[こうずい]は 天災[てんさい]です。|Erdbeben und Hochwasser sind Naturkatastrophen.|Nomen
有害|有害[ゆうがい]|schädlich|喫煙[きつえん]は 健康[けんこう]に 有害[ゆうがい]だ。|Rauchen ist schädlich für die Gesundheit.|な-Adjektiv
ひとりでに|ひとりでに|von selbst, von allein|戸[と]はひとりでに 開[あ]いた。|Die Tür öffnete sich automatisch.|Adverb
無害|無害[むがい]|unschädlich, harmlos|細菌[さいきん]はただの 小[ちい]さい 細胞[さいぼう]で、 無害[むがい]です。|Bakterien sind nur winzige Zellen, harmlos.|な-Adjektiv
被害|被害[ひがい]|Schaden|屋根[やね]は 嵐[あらし]の 被害[ひがい]を 受[う]けました。|Das Dach wurde durch den Sturm beschädigt.|Nomen
破る|破[やぶ]る|besiegen, schlagen|私[わたし]は 封筒[ふうとう]を 破[やぶ]って 開[あ]けた。|Ich riss den Umschlag auf.|Verb
破壊|破壊[はかい]|Zerstörung|地震[じしん]で 破壊[はかい]された 家[いえ]が 多[おお]いです。|Es wurden viele Häuser durch das Erdbeben zerstört.|Nomen (mit する)
助かる|助[たす]かる|gerettet werden; eine Hilfe sein|私[わたし]は 危[あぶ]ないところを 助[たす]かりました。|Ich bin mit knapper Not entkommen.|Verb
ひねる|ひねる|drehen, verdrehen|足首[あしくび]をひねった。|Ich bin mit dem Fuß umgeknickt.|Verb
派手|派手[はで]|auffällig, grell, spektakulär|派手[はで]な 靴[くつ]を 履[は]いた 男[おとこ]の 子[こ]なら 見[み]たよ。|Einen Jungen mit auffälligen Schuhen habe ich gesehen.|Adjektiv
派出所|派出所[はしゅつじょ]|Polizeiposten, Außenstelle|駅[えき]の 前[まえ]に 派出所[はしゅつじょ]があります。|Vor dem Bahnhof gibt es einen Polizeiposten.|Nomen
派遣|派遣[はけん]|Entsendung|彼女[かのじょ]は 派遣[はけん] 社員[しゃいん]です。|Sie ist Leiharbeiterin.|Nomen (mit する)
犯人|犯人[はんにん]|Täter(in)|犯人[はんにん]はカナダ 人[じん]の 男[おとこ]だった。|Der Täter war ein Kanadier.|Nomen
犯罪|犯罪[はんざい]|Verbrechen, Kriminalität|彼女[かのじょ]は 犯罪[はんざい]を 犯[おか]した。|Sie beging ein Verbrechen.|Nomen
ひび|ひび|Riss, Sprung|カップにひびが 入[はい]ってるんだよ。|Die Tasse hat einen Sprung.|Nomen
罪|罪[つみ]|Verbrechen, Schuld, Sünde|彼女[かのじょ]は 罪[つみ]を 犯[おか]した。|Sie beging ein Verbrechen.|Nomen
盗難|盗難[とうなん]|Diebstahl|盗難[とうなん]の 届[とどけ]をだしたいのですけど。|Ich möchte einen Diebstahl melden.|Nomen
捕まる|捕[つか]まる|gefasst werden, gefangen werden|泥棒[どろぼう]が 捕[つか]まってよかった。|Es ist gut, dass der Dieb gefasst wurde.|Verb
捕まえる|捕[つか]まえる|fangen, festnehmen|トムは 私[わたし]より 多[おお]くの 魚[さかな]を 捕[つか]まえた。|Tom hat mehr Fische als ich gefangen.|Verb
逃げ出す|逃[に]げ 出[だ]す|ausreißen, davonlaufen|彼[かれ]は 警官[けいかん]を 見[み]ると 逃[に]げ 出[だ]した。|Als er den Polizisten sah, lief er davon.|Verb
逃がす|逃[に]がす|entkommen lassen, freilassen|少女[しょうじょ]は 鳥[とり]を 逃[に]がしてやった。|Das Mädchen ließ den Vogel entkommen.|Verb
やっつける|やっつける|fertigmachen, erledigen|今日[きょう]こそ、 溜[た]まった 家事[かじ]をやっつけるぞ。|Heute erledige ich endlich die liegen gebliebene Hausarbeit.|Verb
逃げ道|逃[に]げ 道[みち]|Fluchtweg, Ausweg|逃[に]げ 道[みち]がない。|Es gibt keinen Ausweg.|Nomen
戦う|戦[たたか]う|kämpfen|彼[かれ]らは 戦[たたか]っている。|Die kämpfen.|Verb
挑戦|挑戦[ちょうせん]|Herausforderung, Versuch|僕[ぼく]らは 一度[いちど]もそれに 挑戦[ちょうせん]したことがない。|Das haben wir nie versucht.|Nomen (mit する)
敗戦|敗戦[はいせん]|verlorene Schlacht, Niederlage|敗戦[はいせん]のうわさが 広[ひろ]まった。|Gerüchte über die Niederlage im Krieg verbreiteten sich.|Nomen (mit する)
戦い|戦[たたか]い|Kampf, Schlacht|戦[たたか]いは 終[お]わった。|Der Kampf ist vorbei.|Nomen
レントゲン|レントゲン|Röntgenaufnahme|レントゲン 写真[しゃしん]は 二本[にほん]の 骨折[こっせつ]した 指[ゆび]を 映[うつ]し 出[だ]していた。|Die Röntgenaufnahme zeigte zwei gebrochene Finger.|Nomen
大戦|大戦[たいせん]|Weltkrieg, großer Krieg|私[わたし]の 祖父[そふ]は、 第二次[だいにじ] 世界[せかい] 大戦[たいせん]で 亡[な]くなりました。|Mein Großvater ist im Zweiten Weltkrieg gestorben.|Nomen
混ぜる|混[ま]ぜる|mischen, verrühren|油[あぶら]と 水[みず]を 混[ま]ぜる 事[こと]は 出来[でき]ない。|Man kann Öl und Wasser nicht vermischen.|Verb
混ざる|混[ま]ざる|sich vermischen|油[あぶら]と 水[みず]は 混[ま]ざらないんだ。|Öl und Wasser vermischen sich nicht.|Verb
混じる|混[ま]じる|sich mischen, beigemischt sein|未来[みらい]のことを 考[かんが]えると、 不安[ふあん]と 希望[きぼう]が 入[い]り 混[ま]じる。|Wenn ich an die Zukunft denke, mischen sich Sorge und Hoffnung.|Verb
乱れる|乱[みだ]れる|in Unordnung geraten|恋人[こいびと]の 死[し]の 知[し]らせに 彼女[かのじょ]の 心[こころ]は 乱[みだ]れた。|Die Nachricht vom Tode des Geliebten stürzte ihr Herz in Aufruhr.|Verb
パンツ|パンツ|Hose; Unterhose|なんでパンツをはかなきゃいけないの？|Warum muss man ein Unterhöschen tragen?|Nomen
乱す|乱[みだ]す|durcheinanderbringen, stören|恋人[こいびと]の 死[し]の 知[し]らせに 彼女[かのじょ]は 大[おお]いに 心[こころ]を 乱[みだ]した。|Die Nachricht vom Tod ihres Geliebten brachte sie völlig aus der Fassung.|Verb
統合|統合[とうごう]|Zusammenlegung, Integration|天皇[てんのう]は 国民[こくみん]の 統合[とうごう]の 象徴[しょうちょう]である。|Der Tenno ist das Symbol der Einheit des Volkes.|Nomen (mit する)
統一|統一[とういつ]|Vereinheitlichung, Einheit|彼[かれ]の 持[も]ち 物[もの]はすべて 黒[くろ]で 統一[とういつ]されている。|Seine Sachen sind alle einheitlich in Schwarz gehalten.|Nomen (mit する)
統計|統計[とうけい]|Statistik|統計[とうけい]によれば 世界[せかい]の 人口[じんこう]は 増加[ぞうか]している。|Statistiken zufolge nimmt die Weltbevölkerung zu.|Nomen (mit する)
総会|総会[そうかい]|Hauptversammlung|彼[かれ]らは 貿易[ぼうえき] 問題[もんだい]についての 特別[とくべつ] 総会[そうかい]を 開催[かいさい]した。|Sie hielten eine Sondervollversammlung zu Handelsfragen ab.|Nomen
むける|むける|sich schälen, sich lösen (Haut)|彼[かれ]はいつも 未来[みらい]に 目[め]をむけている。|Er blickt immer in die Zukunft.|Verb
総合|総合[そうごう]|Zusammenfassung, umfassend|彼[かれ]も 大人[おとな]になって、 物事[ものごと]を 総合[そうごう] 的[てき]な 視野[しや]で 見[み]られるようになった。|Als er erwachsen wurde, lernte er, Dinge von einem breiteren Blickwinkel aus zu sehen.|Nomen (mit する)
総理|総理[そうり]|Premierminister(in)|総理[そうり]は 辞職[じしょく]しなければならなかった。|Der Ministerpräsident musste zurücktreten.|Nomen
総数|総数[そうすう]|Gesamtzahl|生徒[せいと]の 総数[そうすう]はいくらですか？|Wie hoch ist die Gesamtzahl der Schüler?|Nomen
捜査|捜査[そうさ]|polizeiliche Ermittlung|警察[けいさつ]は 捜査[そうさ]を 進[すす]めている。|Die Polizei treibt die Ermittlungen voran.|Nomen (mit する)
湖|湖[みずうみ]|See|月[つき]の 光[ひかり]が 湖[みずうみ]を 照[て]らしていた。|Mondlicht erhellte den See.|Nomen
深める|深[ふか]める|vertiefen|我々[われわれ]は 親睦[しんぼく]を 深[ふか]めた。|Wir haben unsere Freundschaft vertieft.|Verb
ぶつぶつ|ぶつぶつ|murmelnd, murrend|さっきからブツブツと 何[なに] 言[い]ってるの？|Was nörgelst du hier die ganze Zeit?|Adverb
深まる|深[ふか]まる|sich vertiefen|夕闇[ゆうやみ]が 次第[しだい]に 深[ふか]まっていった。|Die Abenddämmerung setzte allmählich ein.|Verb
注意深い|注意深[ちゅういぶか]い|aufmerksam, umsichtig|僕[ぼく]は 注意[ちゅうい] 深[ぶか]い。|Ich bin vorsichtig.|Adjektiv
段落|段落[だんらく]|Absatz (im Text)|この 段落[だんらく]の 意味[いみ] 分[わ]かる？|Verstehst du den Sinn dieses Absatzes?|Nomen
見落とす|見落[みお]とす|übersehen|何[なに]か 見落[みお]としていますか？|Übersehe ich etwas?|Verb
落第|落第[らくだい]|Durchfallen, Sitzenbleiben|誰[だれ]も 落第[らくだい]しなかった。|Niemand ist durchgefallen.|Nomen (mit する)
ぶるぶる|ぶるぶる|zitternd, bibbernd|メアリーの 携帯[けいたい]がブルブルした。|Marias Telefon brummte.|Adverb
波|波[なみ]|Welle|今日[きょう]は 波[なみ]が 高[たか]い。|Die Wellen sind heute hoch.|Nomen
流れ|流[なが]れ|Strömung, Fluss, Verlauf|彼[かれ]らは 流[なが]れに 逆[さか]らって 泳[およ]いだ。|Sie schwammen gegen die Strömung.|Nomen
流通|流通[りゅうつう]|Umlauf, Vertrieb, Distribution|その 新製品[しんせいひん]は 従来[じゅうらい]の 流通[りゅうつう]チャンネルでは 販売[はんばい]されない。|Das neue Produkt wird nicht über die bisherigen Vertriebswege verkauft.|Nomen (mit する)
流す|流[なが]す|fließen lassen, wegspülen; vergießen|もう 過去[かこ]のことは 水[みず]に 流[なが]したいんだ。|Ich möchte die Vergangenheit gerne hinter uns lassen.|Verb
中流|中流[ちゅうりゅう]|Mittellauf; Mittelschicht|彼[かれ]は 中流[ちゅうりゅう] 階級[かいきゅう]の 出[で]だ。|Er kommt aus dem Mittelstand.|Nomen
ボリューム|ボリューム|Lautstärke; Menge|ボリュームを 下[さ]げてください。|Drehe bitte die Lautstärke herunter!|Nomen
二流|二流[にりゅう]|zweitklassig|彼女[かのじょ]はせいぜい 二流[にりゅう]の 歌手[かしゅ]だ。|Sie ist bestenfalls eine zweitklassige Sängerin.|Nomen
流行|流行[はやり]|Mode, Trend|これが 今年[ことし]の 流行[はやり]です。|Das ist die Mode dieses Jahres.|Nomen
流行|流行[りゅうこう]|Mode, Trend|彼女[かのじょ]は 流行[りゅうこう]に 敏感[びんかん]である。|Sie ist modebewusst.|Nomen (mit する)
洗面|洗面[せんめん]|Gesichtwaschen|朝[あさ] 起[お]きて、まず 洗面[せんめん]をします。|Nach dem Aufstehen wasche ich mir zuerst das Gesicht.|Nomen
手洗い|手洗[てあら]い|Händewaschen; Toilette|ちょっとお 手洗[てあら]いに 行[い]ってきます。|Ich geh nur kurz auf die Toilette.|Nomen
洗面器|洗面器[せんめんき]|Waschschüssel|洗面[せんめん] 器[き]の 水[みず]がかちかちに 凍[こお]った。|Das Wasser in der Waschschüssel ist steinhart gefroren.|Nomen
ちり|ちり|Staub|棚[たな]の 上[うえ]にちりがたまっています。|Auf dem Regal hat sich Staub angesammelt.|Nomen
沈没|沈没[ちんぼつ]|Untergang (eines Schiffes)|船[ふね]は 乗務員[じょうむいん] 全員[ぜんいん]を 乗[の]せたまま 沈没[ちんぼつ]した。|Das Schiff sank mit Mann und Maus.|Nomen (mit する)
冷え込む|冷[ひ]え 込[こ]む|stark abkühlen|冬[ふゆ]はかなり 冷[ひ]え 込[こ]みます。|Im Winter wird es ziemlich kalt.|Verb
冷やかす|冷[ひ]やかす|aufziehen, necken|人前[ひとまえ]で 彼[かれ]を 冷[ひ]やかすなんて 君[きみ]は 意地悪[いじわる]だ。|Es ist gemein von dir, dich in der Öffentlichkeit über ihn lustig zu machen.|Verb
冷凍|冷凍[れいとう]|Einfrieren, Tiefkühlen|冷凍[れいとう] 食品[しょくひん]はおいしくなってきてる。|Tiefkühlkost ist leckerer geworden.|Nomen (mit する)
内臓|内臓[ないぞう]|innere Organe|胃[い]は 内臓[ないぞう]の 一[ひと]つである。|Der Magen ist eines der inneren Organe.|Nomen
はげる|はげる|abblättern; kahl werden|ペンキがすぐはげてしまう。|Die Farbe blättert schnell ab.|Verb
適用|適用[てきよう]|Anwendung (einer Regel)|この 法律[ほうりつ]はすべての 人[ひと]に 適用[てきよう]される。|Dieses Gesetz gilt für jeden.|Nomen (mit する)
適切|適切[てきせつ]|passend, angemessen|彼[かれ]の 意見[いけん]は 適切[てきせつ]だと 思[おも]った。|Ich fand seine Meinung angemessen.|Adjektiv
適応|適応[てきおう]|Anpassung|彼[かれ]は 新[あたら]しい 環境[かんきょう]に 適応[てきおう]できなかった。|Er konnte sich den neuen Gegebenheiten nicht anpassen.|Nomen (mit する)
適する|適[てき]する|geeignet sein, passen|彼[かれ]は 彼女[かのじょ]に 劣[おと]らずその 仕事[しごと]に 適[てき]している。|Er ist nicht weniger qualifizert für die Stelle als sie.|Verb
適当|適当[てきとう]|passend, geeignet; nach Gutdünken|私[わたし]の 意見[いけん]では 全[まった]く 不[ふ] 適当[てきとう]です。|Meiner Meinung nach ist es absolut unangemessen.|な-Adjektiv
パパ|パパ|Papa|パパどこに 行[い]くの？|Papa, wohin gehst du?|Nomen
適度|適度[てきど]|maßvoll, angemessen|適度[てきど]な 運動[うんどう]をすると 我々[われわれ]は 快適[かいてき]に 感[かん]じる。|Wenn wir moderat Sport treiben, fühlen wir uns behaglich.|な-Adjektiv
染める|染[そ]める|färben|髪[かみ]の 毛[け] 染[そ]め 続[つづ]けるのめんどくさくなってきた。|Ich habe keine Lust mehr, mir ständig die Haare nachzufärben.|Verb
廃止|廃止[はいし]|Abschaffung|我々[われわれ]は 死刑[しけい]を 廃止[はいし]すべきである。|Wir sollten die Todesstrafe abschaffen.|Nomen (mit する)
風景|風景[ふうけい]|Landschaft, Szenerie|田舎[いなか]の 風景[ふうけい]は 変[か]わってしまった。|Das Bild auf dem Land hat sich geändert.|Nomen
不景気|不景気[ふけいき]|Konjunkturflaute, Rezession|無数[むすう]の 小企業[しょうきぎょう]が 不[ふ] 景気[けいき]のときに 倒産[とうさん]した。|Unzählbar viele kleine Unternehmen sind in der Rezession bankrott gegangen.|な-Adjektiv
響く|響[ひび]く|hallen, klingen; nachwirken|あんまり 単位[たんい] 落[お]とすと 就活[しゅうかつ]に 響[ひび]くよ。|Wenn du zu wenig Punkte bekommst, hat das Einfluss auf deine Arbeitsplatzsuche.|Verb
つかむ|つかむ|greifen, packen|だれかが 私[わたし]の 腕[うで]をつかんだ。|Jemand packte mich am Arm.|Verb
日光|日光[にっこう]|Sonnenlicht|動物[どうぶつ]も 植物[しょくぶつ]も、 一般[いっぱん]に 考[かんが]えられている 以上[いじょう]に 日光[にっこう]を 必要[ひつよう]とする。|Sowohl Tiere als auch Pflanzen brauchen die Sonne mehr, als man allgemein denkt.|Nomen
光|光[ひかり]|Licht|光[ひかり]は 音[おと]よりもずっと 速[はや]く 進[すす]む。|Licht ist viel schneller als der Schall.|Nomen
測定|測定[そくてい]|Messung|速度[そくど]を 測定[そくてい]する 方法[ほうほう]はいくつかある。|Es gibt mehrere Methoden, die Geschwindigkeit zu messen.|Nomen (mit する)
測る|測[はか]る|messen (Länge, Höhe)|われわれはその 川[かわ]の 深[ふか]さを 測[はか]った。|Wir haben die Tiefe des Flusses gemessen.|Verb
陽気|陽気[ようき]|heiter, fröhlich; Witterung|彼女[かのじょ]はいつも 陽気[ようき]だ。|Sie ist immer fröhlich.|な-Adjektiv
もったいない|もったいない|verschwenderisch, zu schade|あなたは 彼女[かのじょ]にはもったいないわ。|Dich hat sie nicht verdient.|Adjektiv
プロ野球|プロ 野球[やきゅう]|Profibaseball|トムはプロ 野球[やきゅう] 選手[せんしゅ]です。|Tom ist Profibaseballspieler.|Nomen
電球|電球[でんきゅう]|Glühbirne|エジソンが 電球[でんきゅう]を 発明[はつめい]した。|Edison hat die Glühbirne erfunden.|Nomen
振り返る|振[ふ]り 返[かえ]る|zurückblicken, sich umdrehen|過[す]ぎたことを 振[ふ]り 返[かえ]ってはいけない。|Schaue nicht auf deine Vergangenheit zurück.|Verb
振り向く|振[ふ]り 向[む]く|sich umdrehen|彼女[かのじょ]は 彼[かれ]の 声[こえ]を 聞[き]いて 振[ふ]り 向[む]いた。|Sie wandte sich um, als sie seine Stimme hörte.|Verb
振り|振[ふ]り|Schwung, Schwingen|私[わたし]の 犬[いぬ]はよく 寝[ね]た 振[ふ]りをする。|Mein Hund tut oft so, als würde er schlafen.|Nomen
ふざける|ふざける|herumalbern, Unsinn machen|ふざけるにもほどがある！|Auch Herumalbern hat seine Grenzen!|Verb
秘書|秘書[ひしょ]|Sekretär(in)|彼[かれ]は 社長[しゃちょう]の 個人[こじん] 秘書[ひしょ]だ。|Er ist der Privatsekretär des Chefs.|Nomen
密か|密[ひそ]か|heimlich|密[ひそ]かに 想[おも]いを 寄[よ]せている 人[ひと]がいると 聞[き]いたよ。|Ich hörte, jemand sei heimlich in dich verliebt.|Adjektiv
貴い|貴[とうと]い|kostbar, wertvoll|良[よ]き 素質[そしつ]ほど 貴[とうと]いものはない。|Es gibt nichts, das wertvoller ist als eine gute Veranlagung.|Adjektiv
追跡|追跡[ついせき]|Verfolgung|刑事[けいじ]たちは 彼[かれ]を 追跡[ついせき]した。|Die Kriminalbeamten verfolgten ihn.|Nomen (mit する)
寄せる|寄[よ]せる|heranrücken, nähern; sammeln|テーブルを 壁[かべ]の 方[ほう]へ 寄[よ]せてください。|Bitte stellen Sie den Tisch an die Wand.|Verb
だるい|だるい|schlapp, matt|体[からだ] 全体[ぜんたい]がだるいです。|Mein ganzer Körper fühlt sich matt an.|Adjektiv
寄る|寄[よ]る|vorbeischauen; sich nähern|ちょっと 寄[よ]ってかない？|Komm doch auf ein Weilchen vorbei!|Verb
近寄る|近寄[ちかよ]る|sich nähern, herantreten|誰[だれ]も 彼[かれ]には 近寄[ちかよ]らなかった。|Niemand näherte sich ihm.|Verb
寄り道|寄[よ]り 道[みち]|Abstecher|ぶらぶら 寄[よ]り 道[みち]していこうよ。|Lass uns gemütlich einen Abstecher machen.|Nomen (mit する)
寄り集まる|寄[よ]り 集[あつ]まる|zusammenkommen, sich versammeln|村[むら]の 人[ひと]が 広場[ひろば]に 寄[よ]り 集[あつ]まりました。|Die Dorfbewohner kamen auf dem Platz zusammen.|Verb
歴史的|歴史的[れきしてき]|historisch|文学作品[ぶんがくさくひん]の 中[なか]には 歴史[れきし] 的[てき] 背景[はいけい]が 色[いろ] 濃[こ]く 反映[はんえい]されていることが 多[おお]い。|In literarischen Werken spiegelt sich oft stark der historische Hintergrund wider.|Adjektiv
宝石|宝石[ほうせき]|Edelstein, Juwel|彼女[かのじょ]は 宝石[ほうせき]で 身[み]を 飾[かざ]った。|Sie schmückte sich mit Edelsteinen.|Nomen
ちぎる|ちぎる|zerreißen, abreißen|パンを 小[ちい]さくちぎって 食[た]べました。|Ich habe das Brot in kleine Stücke gerissen und gegessen.|Verb
建て前|建[た]て 前[まえ]|offizielle Haltung, Fassade|それは 建[た]て 前[まえ]で、 本当[ほんとう]の 気持[きも]ちは 違[ちが]います。|Das ist nur die offizielle Haltung, in Wirklichkeit denkt er anders.|Nomen
単位|単位[たんい]|Einheit (Maß); Leistungspunkt|時間[じかん]の 単位[たんい]は 何[なに]か。|Was ist die Maßeinheit für Zeit?|Nomen
地位|地位[ちい]|Stellung, Rang|この 地域[ちいき]では 医者[いしゃ]の 地位[ちい]がかなり 高[たか]い。|Die Stellung der Ärzte in diesem Bezirk ist recht hoch.|Nomen
分離|分離[ぶんり]|Trennung, Abspaltung|マヨネーズの 油[あぶら]は 分離[ぶんり]することがある。|Das Öl in der Mayonnaise kann sich absetzen.|Nomen (mit する)
離れる|離[はな]れる|sich entfernen, weggehen|海[うみ]からどれぐらい 離[はな]れてるの？|Wie weit sind wir vom Meer entfernt?|Verb
ねぎ|ねぎ|Lauchzwiebel|じゃが 芋[いも]と 人参[にんじん]とネギを 入[い]れました。|Ich habe Kartoffeln, Karotten und Lauch hineingegeben.|Nomen
離す|離[はな]す|trennen, loslassen|ロープを 離[はな]しなさい。|Lass das Seil los!|Verb
停電|停電[ていでん]|Stromausfall|停電[ていでん]があった。|Der Strom ist ausgefallen.|Nomen (mit する)
停止|停止[ていし]|Stillstand, Einstellung|列車[れっしゃ]は 滑[なめ]らかに 停止[ていし]した。|Der Zug hielt sanft an.|Nomen (mit する)
範囲|範囲[はんい]|Bereich, Umfang|彼[かれ]は 勢力[せいりょく] 範囲[はんい]を 広[ひろ]げようとした。|Er versuchte, seinen Einflussbereich zu erweitern.|Nomen
隣り合う|隣[とな]り 合[あ]う|nebeneinanderliegen|うちと 彼[かれ]の 家[いえ]は 隣[とな]り 合[あ]っている。|Unser Haus und seines liegen nebeneinander.|Verb
びしょびしょ|びしょびしょ|klatschnass|シャツがびしょびしょだね。|Dein Hemd ist ja klatschnass.|な-Adjektiv
横切る|横切[よこぎ]る|überqueren, quer hindurchgehen|公園[こうえん]を 横切[よこぎ]って 歩[ある]いた。|Ich durchquerte den Park.|Verb
横顔|横顔[よこがお]|Profil, Seitenansicht des Gesichts|品[しな]の 良[よ]い 横顔[よこがお]が、さみしそうだった。|Ihr edles Profil wirkte einsam.|Nomen
中断|中断[ちゅうだん]|Unterbrechung|彼[かれ]らは 昼食[ちゅうしょく]のため 会議[かいぎ]を 中断[ちゅうだん]した。|Sie unterbrachen die Sitzung für ein Mittagessen.|Nomen (mit する)
断水|断水[だんすい]|Unterbrechung der Wasserversorgung|断水[だんすい]しました。|Das Wasser wurde abgestellt.|Nomen (mit する)
油断|油断[ゆだん]|Unachtsamkeit, Nachlässigkeit|油断[ゆだん]は 禁物[きんもつ]だよ。|Wir dürfen uns keine Nachlässigkeiten erlauben.|Nomen (mit する)
断定|断定[だんてい]|eindeutige Feststellung|昨晩[さくばん]の 火事[かじ]は 放火[ほうか]と 断定[だんてい]された。|Der Brand letzte Nacht wurde für Brandstiftung befunden.|Nomen (mit する)
バーゲン|バーゲン|Sonderverkauf, Schlussverkauf|後[あと] 二日[ふつか]でバーゲンがなくなる。|In zwei Tagen ist der Schlussverkauf vorbei.|Nomen
継ぐ|継[つ]ぐ|übernehmen, erben, fortführen|私[わたし]は 父[ちち]の 仕事[しごと]を 継[つ]いだ。|Ich habe den Beruf meines Vaters übernommen.|Verb
中継|中継[ちゅうけい]|Übertragung, Liveschaltung|そのコンサートは 生[なま] 中継[ちゅうけい]された。|Das Konzert wurde live übertragen.|Nomen (mit する)
幅広い|幅広[はばひろ]い|breit, umfassend|彼[かれ]の 旅行[りょこう]は 幅広[はばひろ]く 回数[かいすう]も 多[おお]い。|Seine Reisen sind weit gefächert und zahlreich.|Adjektiv
幅|幅[はば]|Breite|幅[はば]の 広[ひろ]い 川[かわ]はゆっくりと 流[なが]れる。|Der breite Fluss fließt langsam.|Nomen
大陸|大陸[たいりく]|Kontinent, Festland|鉄[てつ]のカーテンがヨーロッパ 大陸[たいりく]におりた。|Der eiserne Vorhang senkte sich über den europäischen Kontinent.|Nomen
メーター|メーター|Zähler, Messgerät; Meter|メーターの 数字[すうじ]を 読[よ]んでください。|Lesen Sie bitte die Zahl auf dem Zähler ab.|Nomen
着陸|着陸[ちゃくりく]|Landung|宇宙船[うちゅうせん]は 完璧[かんぺき]な 着陸[ちゃくりく]をした。|Das Raumschiff machte eine perfekte Landung.|Nomen (mit する)
離陸|離陸[りりく]|Start, Abheben|悪天候[あくてんこう]のため 飛行機[ひこうき]は 離陸[りりく]できないだろう。|Aufgrund des schlechten Wetters wird das Flugzeug bestimmt nicht abheben.|Nomen (mit する)
内陸|内陸[ないりく]|Binnenland|彼[かれ]は 中国[ちゅうごく]の 内陸[ないりく]を 旅行[りょこう]しました。|Er reiste durch das Binnenland Chinas.|Nomen
陸上|陸上[りくじょう]|an Land, Festland; Leichtathletik|陸上[りくじょう] 競技会[きょうぎかい]は 大雨[おおあめ]のため 中止[ちゅうし]になった。|Der Leichtathletikwettbewerb wurde wegen starkem Regen abgesagt.|Nomen
陸|陸[りく]|Land, Festland|遠[とお]くに 陸[りく]が 見[み]えた。|In der Ferne war Land zu sehen.|Nomen
もしかすると|もしかすると|möglicherweise, vielleicht|もしかすると 彼[かれ]が 来[く]るかも。|Vielleicht kommt er ja.|Adverb
南極|南極[なんきょく]|Südpol|探検隊[たんけんたい]は 南極[なんきょく]への 出発[しゅっぱつ]を 延期[えんき]した。|Die Expeditionsgruppe verschob ihren Aufbruch zum Südpol.|Nomen
北極|北極[ほっきょく]|Nordpol|彼[かれ]らは 北極[ほっきょく] 探検[たんけん]に 出[で]かけた。|Sie brachen zu einer Expedition zum Nordpol auf.|Nomen
先端|先端[せんたん]|Spitze, vorderes Ende|表面[ひょうめん]に 現[あらわ]れているのは 氷山[ひょうざん]の 先端[せんたん]に 過[す]ぎない。|Was an der Oberfläche auftaucht ist nichts als die Spitze des Eisberges.|Nomen
端|端[はし]|Rand, Ende, Kante|私[わたし]はプラットホームの 端[はし]で 彼[かれ]にあった。|Ich traf ihn am Ende des Bahnsteigs.|Nomen
訪問|訪問[ほうもん]|Besuch|お 客[きゃく]さんの 訪問[ほうもん]を 受[う]けました。|Ich wurde von einem Kunden besucht.|Nomen (mit する)
女房|女房[にょうぼう]|(meine) Frau (umgangssprachlich)|去年[きょねん]、 女房[にょうぼう]に 死[し]なれたんだよ。|Letztes Jahr ist mir meine Frau gestorben.|Nomen
ちぎれる|ちぎれる|abreißen, zerreißen|荷物[にもつ] 重[おも]すぎて 腕[うで]ちぎれるかと 思[おも]った。|Das Gepäck war so schwer, dass ich glaubte, es risse mir die Arme ab.|Verb
内緒|内緒[ないしょ]|Geheimnis, im Vertrauen|内緒[ないしょ]にしておいてください。|Halte es bitte geheim!|Nomen
百貨店|百貨店[ひゃっかてん]|Kaufhaus|たいていの 物[もの]は 百貨[ひゃっか] 店[てん]で 買[か]います。|Das meiste kaufe ich im Kaufhaus.|Nomen
輸送|輸送[ゆそう]|Transport, Beförderung|商品[しょうひん]は 船[ふね]で 輸送[ゆそう]された。|Die Waren wurden mit dem Schiff transportiert.|Nomen (mit する)
復活|復活[ふっかつ]|Wiederbelebung, Comeback|病気[びょうき]から 復活[ふっかつ]しました。|Ich habe mich von der Krankheit erholt und bin wieder da.|Nomen (mit する)
操作|操作[そうさ]|Bedienung, Handhabung|私[わたし]はこのコンピューターの 操作[そうさ]の 仕方[しかた]がわからない。|Ich weiß nicht, wie man den Computer bedient.|Nomen (mit する)
にっこり|にっこり|lächelnd, strahlend|カメラの 方[ほう]を 向[む]いてにっこりして 下[くだ]さい。|Bitte lächeln Sie in die Kamera.|Adverb
体操|体操[たいそう]|Gymnastik, Turnen|ぼくは 毎日[まいにち]、 体操[たいそう]をします。|Ich mache jeden Tag Sport.|Nomen
縦|縦[たて]|Länge, senkrecht, längs|体積[たいせき]を 計算[けいさん]するなら、 縦[たて]と 横[よこ]と 深[ふか]さを 掛[か]ければよい。|Um das Volumen zu berechnen, muss man die Länge mit der Breite multiplizieren und dann mit der Tiefe.|Nomen
操縦|操縦[そうじゅう]|Steuern, Lenken|彼[かれ]は 彼[かれ]らに 船[ふね]の 操縦[そうじゅう] 法[ほう]を 教[おし]えた。|Er lehrte sie, wie man Schiffe steuert.|Nomen (mit する)
縦書き|縦書[たてが]き|senkrechte Schreibweise|日本[にほん]の 小説[しょうせつ]は 縦書[たてが]きが 多[おお]いです。|Japanische Romane sind meistens senkrecht geschrieben.|Nomen
滞在|滞在[たいざい]|Aufenthalt|パリに 滞在[たいざい] 中[ちゅう]、 私[わたし]は 彼[かれ]にあった。|Ich traf ihn während eines Parisaufenthaltes.|Nomen (mit する)
ぱいなっぷる|ぱいなっぷる|Ananas|ぱいなっぷるは 甘[あま]くておいしいです。|Ananas ist süß und lecker.|Nomen
地帯|地帯[ちたい]|Zone, Gebiet|最近[さいきん]は 安全[あんぜん] 地帯[ちたい]が 必[かなら]ずしも 安全[あんぜん]ではない。|Heutzutage ist eine Sicherheitszone nicht unbedingt sicher.|Nomen
熱帯|熱帯[ねったい]|Tropen|この 種[しゅ]の 植物[しょくぶつ]は 熱帯[ねったい] 地方[ちほう]にのみ 育[そだ]ちます。|Diese Pflanzenart wächst nur in tropischen Regionen.|Nomen
保守|保守[ほしゅ]|Bewahrung, Wartung; konservativ|イギリス 人[じん]は 保守[ほしゅ] 的[てき]だと 言[い]われている。|Man sagt, dass die Engländer konservativ sind.|Nomen (mit する)
見守る|見守[みまも]る|wachen über, aufmerksam beobachten|彼[かれ]は 子供[こども]たちが 泳[およ]いでいるのを 見守[みまも]った。|Er passte auf, während die Kinder schwammen.|Verb
留守番|留守番[るすばん]|Haushüten|トム、 買[か]い 物[もの]に 行[い]くよ。 留守[るす] 番[ばん]しといてね。|Tom, ich fahre einkaufen. Hüte das Haus!|Nomen
ぱんだ|ぱんだ|Panda|動物園[どうぶつえん]でぱんだを 見[み]ました。|Im Zoo habe ich einen Panda gesehen.|Nomen
戻す|戻[もど]す|zurückbringen, zurückstellen|済[す]んだら 戻[もど]してください。|Wenn du fertig bist, bring's zurück.|Verb
取り戻す|取[と]り 戻[もど]す|zurückgewinnen|我々[われわれ]はそれを 取[と]り 戻[もど]したい。|Wir wollen es uns zurückholen.|Verb
払い戻す|払[はら]い 戻[もど]す|zurückerstatten|払[はら]い 戻[もど]してください。|Ich hätte gerne eine Kostenerstattung.|Verb
寝かす|寝[ね]かす|schlafen legen|味付[あじつ]けしたモモ 肉[にく]を 冷蔵庫[れいぞうこ]で 一晩[ひとばん] 寝[ね]かします。|Das gewürzte Schenkelfleisch lässt man über Nacht im Kühlschrank ruhen.|Verb
寝過ごす|寝過[ねす]ごす|verschlafen|私[わたし]は 寝過[ねす]ごしてバスに 乗[の]れなかった。|Ich habe verschlafen und den Bus verpasst.|Verb
早寝|早寝[はやね]|frühes Zubettgehen|早寝[はやね]は 嫌[きら]いなんだ。|Ich gehe nicht gerne früh ins Bett.|Nomen (mit する)
びっしょり|びっしょり|durchnässt, triefend|彼[かれ]は 汗[あせ]びっしょりだった。|Er war schweißgebadet.|Adverb
寝かせる|寝[ね]かせる|schlafen legen, hinlegen|そろそろ 子供[こども]たちを 寝[ね]かせてもよい 時間[じかん]だ。|Es ist langsam Zeit, die Kinder ins Bett zu bringen.|Verb
寝転ぶ|寝転[ねころ]ぶ|sich hinlegen, sich ausstrecken|草[くさ]の 上[うえ]に 寝転[ねころ]んで 空[そら]を 見[み]ました。|Ich legte mich ins Gras und schaute in den Himmel.|Verb
冷静|冷静[れいせい]|ruhig, besonnen|彼[かれ]は 危険[きけん]を 前[まえ]にしても 冷静[れいせい]だった。|Selbst im Angesicht der Gefahr blieb er ruhig.|な-Adjektiv
両者|両者[りょうしゃ]|beide Seiten, beide Parteien|両者[りょうしゃ]の 間[あいだ]には 歴然[れきぜん]とした 違[ちが]いがある。|Zwischen den beiden gibt es einen enormen Unterschied.|Nomen
両立|両立[りょうりつ]|Vereinbarkeit, beides zugleich schaffen|バイトと 勉強[べんきょう] 両立[りょうりつ]できないならバイト 辞[や]めたら？|Wenn du nicht gleichzeitig arbeiten und lernen kannst, wie wäre es dann, wenn du mit dem Arbeiten aufhören würdest?|Nomen (mit する)
ペンチ|ペンチ|Zange|車[くるま]にペンチがあるよ。|Im Auto habe ich eine Zange.|Nomen
両手|両手[りょうて]|beide Hände|花瓶[かびん]は 両手[りょうて]で 持[も]ちなさい。|Halte die Vase in beiden Händen.|Nomen
両面|両面[りょうめん]|beide Seiten (einer Fläche)|盾[たて]の 両面[りょうめん]を 見[み]よ。|Besieh dir den Schild von beiden Seiten.|Nomen
側面|側面[そくめん]|Seitenfläche, Seite|さらにまた、その 話[はなし]にはもうひとつの 側面[そくめん]がある。|Außerdem hat die Geschichte noch eine andere Seite.|Nomen
両側|両側[りょうがわ]|beide Seiten (links und rechts)|道[みち]の 両側[りょうがわ]に 桜[さくら]がある。|Auf beiden Straßenseiten sind Kirschbäume.|Nomen
要項|要項[ようこう]|wichtige Punkte, Richtlinien|入学試験[にゅうがくしけん]の 要項[ようこう]を 読[よ]みました。|Ich habe die Richtlinien für die Aufnahmeprüfung gelesen.|Nomen
モダン|モダン|modern|モダンジャズは 私[わたし]の 趣味[しゅみ]に 合[あ]わない。|Moderner Jazz ist nicht mein Geschmack.|な-Adjektiv
目印|目印[めじるし]|Erkennungszeichen, Orientierungspunkt|そこに 行[い]く 道[みち]がわかるように、 近[ちか]くの 目印[めじるし]を 教[おし]えて 下[くだ]さい。|Bitte nennen Sie mir ein paar Orientierungspunkte in der Nähe, damit ich den Weg finden kann.|Nomen
細長い|細長[ほそなが]い|lang und schmal|細長[ほそなが]い 箱[はこ]にペンを 入[い]れました。|Ich habe den Stift in eine lange, schmale Schachtel gelegt.|Adjektiv
載る|載[の]る|abgedruckt werden, stehen (in)|リストには 何人[なんにん]の 生徒[せいと]が 載[の]ってるんですか？|Wie viele Schüler stehen auf der Liste?|Verb
積む|積[つ]む|aufladen, stapeln, anhäufen|トランクには 何[なに]が 積[つ]んであるんですか？|Was hast du im Kofferraum?|Verb
面積|面積[めんせき]|Fläche|カナダの 面積[めんせき]はアメリカ 合衆国[がっしゅうこく]の 面積[めんせき]より 大[おお]きい。|Die Fläche Kanadas ist größer als die der USA.|Nomen
翻訳|翻訳[ほんやく]|Übersetzung|詩[し]を 別[べつ]の 言語[げんご]に 翻訳[ほんやく]するのは 難[むずか]しい。|Es ist schwierig, ein Gedicht in eine andere Sprache zu übersetzen.|Nomen (mit する)
リクエスト|リクエスト|Wunsch, Anfrage|トムは 私[わたし]がリクエストした 歌[うた]を 歌[うた]った。|Tom sang das Lied, um das ich ihn gebeten hatte.|Nomen (mit する)
通訳|通訳[つうやく]|Dolmetschen, Dolmetscher(in)|彼[かれ]は 私[わたし]の 通訳[つうやく]をつとめてくれた。|Er dolmetschte für mich.|Nomen (mit する)
申し訳ない|申[もう]し 訳[わけ]ない|unverzeihlich; es tut mir leid|申[もう]し 訳[わけ]ないけど、できません。|Es tut mir leid, aber das ist unmöglich.|Adjektiv
訳|訳[わけ]|Grund, Umstand|たまに 訳[わけ]もなくイライラすることってない？|Bist du auch manchmal ohne Grund gereizt?|Nomen
申し訳|申[もう]し 訳[わけ]|Entschuldigung, Rechtfertigung|遅[おく]れて 申[もう]し 訳[わけ]ありません。|Entschuldigen Sie die Verspätung.|Nomen
訂正|訂正[ていせい]|Korrektur, Berichtigung|彼[かれ]はいくつか 訂正[ていせい]をした。|Er nahm ein paar Korrekturen vor.|Nomen (mit する)
ビーチ|ビーチ|Strand|ビーチに 行[い]きましょう。|Gehen wir zum Strand!|Nomen
討論|討論[とうろん]|Debatte, Diskussion|政治[せいじ]について 討論[とうろん]しよう。|Lass uns über Politik reden.|Nomen (mit する)
添える|添[そ]える|beifügen, dazulegen|残念[ざんねん]ながらご 希望[きぼう]には 添[そ]えません。|Leider können wir Ihrer Bitte nicht entsprechen.|Verb
添う|添[そ]う|begleiten; entsprechen|彼[かれ]は 私[わたし] 達[たち]の 期待[きたい]に 添[そ]うことが 出来[でき]なかった。|Es gelang ihm nicht, unseren Erwartungen gerecht zu werden.|Verb
付近|付近[ふきん]|Umgebung, Nähe|僕[ぼく]の 友達[ともだち]ね、スイスとドイツの 国境[こっきょう] 付近[ふきん]に 住[す]んでるんだ。|Meine Freundin wohnt an der schweizerisch-deutschen Grenze.|Nomen
付き合い|付[つ]き 合[あ]い|Umgang, Bekanntschaft; Mitmachen aus Höflichkeit|付[つ]き 合[あ]いがいやなわけではないが 疲[つか]れているのだ。|Es ist nicht so, dass ich diese Beziehung leid bin, aber ich bin erschöpft.|Nomen
ビタミン|ビタミン|Vitamin|トムはビタミン 剤[ざい]を 飲[の]む 必要[ひつよう]はないと 判断[はんだん]した。|Tom urteilte, dass es nicht nottue, Vitaminpräparate einzunehmen.|Nomen
付け加える|付[つ]け 加[くわ]える|hinzufügen|彼[かれ]はそんなことは 信[しん]じないと 付[つ]け 加[くわ]えた。|Er fügte hinzu, dass er es nicht glaube.|Verb
付き合う|付[つ]き 合[あ]う|verkehren mit, zusammen sein; begleiten|いつから 付[つ]き 合[あ]ってるの？|Wie lange seid ihr schon zusammen?|Verb
名付ける|名付[なづ]ける|benennen, einen Namen geben|彼[かれ]は 息子[むすこ]をジェームズと 名付[なづ]けました。|Er nannte seinen Sohn James.|Verb
付録|付録[ふろく]|Beilage, Anhang|詳[くわ]しくは 別冊[べっさつ] 付録[ふろく]をご 覧[らん]ください。|Näheres entnehmen Sie bitte der beiliegenden Sonderbeilage.|Nomen
近付ける|近付[ちかづ]ける|näher heranbringen|子供[こども]たちを 薬[くすり]に 近付[ちかづ]けるな。|Lass Kinder nicht in die Nähe von Medikamenten.|Verb
付け足す|付[つ]け 足[た]す|ergänzen, anfügen|「すぐ 帰[かえ]ってくるから」と 彼[かれ]は 付[つ]け 足[た]した。|„Ich bin gleich wieder da“, fügte er hinzu.|Verb
フライパン|フライパン|Bratpfanne|そのフライパンくっつきやすいから 注意[ちゅうい]してね。|In der Bratpfanne setzt sich leicht alles an. Pass also auf, ja?|Nomen
日付け|日付[ひづ]け|Datum|手紙[てがみ]に 日付[ひづ]けを 書[か]きました。|Ich habe das Datum auf den Brief geschrieben.|Nomen
付属|付属[ふぞく]|Zubehör, Angliederung|カメラを 付属[ふぞく] 品[ひん] 付[つ]きで 買[か]った。|Ich habe eine Kamera mit Zubehör gekauft.|Nomen (mit する)
属する|属[ぞく]する|gehören zu|それらの 国[くに]は 以前[いぜん]フランスに 属[ぞく]していた。|Jene Länder gehörten ehemals zu Frankreich.|Verb
反省|反省[はんせい]|Selbstkritik, Reue|彼[かれ]は 自分[じぶん]の 過[あやま]ちを 反省[はんせい]した。|Er dachte über seine Fehler nach.|Nomen (mit する)
省く|省[はぶ]く|weglassen, einsparen|機械[きかい]は 多[おお]くの 人手[ひとで]を 省[はぶ]く。|Maschinen ersetzen einen Großteil menschlicher Arbeit.|Verb
まあまあ|まあまあ|na, na (beschwichtigend)|彼[かれ]のことは、まあまあ 好[す]きかな。|In gewisser Weise mag ich ihn.|Adverb
略す|略[りゃく]す|abkürzen, auslassen|名前[なまえ]を 略[りゃく]さずに 書[か]きなさい。|Schreiben Sie Ihren Namen, ohne ihn abzukürzen.|Verb
略|略[りゃく]|Abkürzung|これは 何[なん]の 略[りゃく]ですか？|Wofür ist das die Abkürzung?|Nomen
大概|大概[たいがい]|meistens, im Allgemeinen|冗談[じょうだん]も 大概[たいがい]にしろ！|Treib es mit deinen Scherzen nicht zu weit!|Adverb
含める|含[ふく]める|einschließen, einbeziehen|短所[たんしょ]も 含[ふく]め、 彼[かれ]のことが 好[す]きなの。|Ich mag ihn, seine Schwächen eingeschlossen.|Verb
含む|含[ふく]む|enthalten|朝食[ちょうしょく]は 価格[かかく]に 含[ふく]まれていますか？|Ist das Frühstück im Preis mit inbegriffen?|Verb
たこ|たこ|Oktopus, Krake|すし 屋[や]でたこを 食[た]べました。|Im Sushi-Restaurant habe ich Oktopus gegessen.|Nomen
道順|道順[みちじゅん]|Wegbeschreibung, Route|地図[ちず]がありさえすれば、 道順[みちじゅん]を 教[おし]えてさし 上[あ]げられるのですが。|Wenn ich bloß eine Karte hätte, könnte ich Ihnen den Weg zeigen.|Nomen
列車|列車[れっしゃ]|Zug|急[いそ]がないと 列車[れっしゃ]に 乗[の]り 遅[おく]れますよ。|Beeilen Sie sich! Sonst verpassen Sie noch den Zug.|Nomen
列島|列島[れっとう]|Inselkette, Archipel|日本[にほん] 列島[れっとう]は 酷暑[こくしょ]に 苛[さいな]まれている。|Die japanische Inselkette wird von einer schrecklichen Hitzewelle heimgesucht.|Nomen
列|列[れつ]|Reihe, Schlange|一[いち] 列[れつ]に 並[なら]んで 下[くだ]さい。|Bitte stellen Sie sich in einer Reihe auf.|Nomen
例外|例外[れいがい]|Ausnahme|すべての 規則[きそく]には 例外[れいがい]がある。|Jede Regel hat eine Ausnahme.|Nomen
デザート|デザート|Nachtisch, Dessert|デザートとしてりんごが 出[だ]された。|Als Nachtisch wurden Äpfel serviert.|Nomen
比例|比例[ひれい]|Verhältnis, Proportion|供給[きょうきゅう]は 需要[じゅよう]に 比例[ひれい]する。|Angebot ist proportional zur Nachfrage.|Nomen (mit する)
用例|用例[ようれい]|Anwendungsbeispiel|私[わたし]は 辞書[じしょ]をつくる 目的[もくてき]で 用例[ようれい]を 集[あつ]めた。|Ich habe Verwendungsbeispiele gesammelt, um ein Wörterbuch zu erstellen.|Nomen
例える|例[たと]える|vergleichen mit, gleichnishaft darstellen|人生[じんせい]はしばしば 旅[たび]に 例[たと]えられる。|Das Leben wird oft mit einer Reise verglichen.|Verb
例題|例題[れいだい]|Beispielaufgabe|君[きみ]のワークブックの 最初[さいしょ]の 例題[れいだい]をしなさい。|Mach die erste Beispielaufgabe in deinem Arbeitsheft.|Nomen
例年|例年[れいねん]|ein gewöhnliches Jahr, wie jedes Jahr|今年[ことし]は 例年[れいねん]より 桜[さくら]は 早[はや]いだろう。|Dieses Jahr blüht die Kirsche früher als gewöhnlich.|Nomen
例え|例[たと]え|Vergleich, Gleichnis|彼[かれ]の 話[はなし]は 例[たと]えが 分[わ]かりやすいです。|Die Vergleiche in seinen Erklärungen sind leicht verständlich.|Nomen
とっさに|とっさに|im ersten Augenblick, auf Anhieb|とっさに 名前[なまえ]が 出[で]てきませんでした。|Auf Anhieb fiel mir der Name nicht ein.|Adverb
余地|余地[よち]|Spielraum, Raum|もはや 疑[うたが]いの 余地[よち]はない。|Es gibt keinen Raum für Zweifel mehr.|Nomen
余計|余計[よけい]|überflüssig, unnötig; umso mehr|トムがまた 余計[よけい]なこと 言[い]わなければいいんだけど。|Es wäre schön, wenn Tom nicht wieder etwas Überflüssiges sagen würde.|な-Adjektiv
余分|余分[よぶん]|Überschuss, zusätzlich|余分[よぶん]の 時間[じかん]がたくさんある。|Es ist mehr als genug Zeit.|な-Adjektiv
途中|途中[とちゅう]|unterwegs, mittendrin|お 話[はなし]の 途中[とちゅう]ですみません。|Entschuldigen Sie, dass ich Sie unterbreche.|Nomen
用途|用途[ようと]|Verwendungszweck|何[なん]の 用途[ようと]で 使[つか]うのかわからん。|Ich weiß nicht, wofür man das verwendet.|Nomen
ぬるぬる|ぬるぬる|glitschig, schleimig|カエルはぬるぬるしてる。|Frösche sind glitschig.|Adverb
中途|中途[ちゅうと]|auf halbem Weg, mittendrin|中途[ちゅうと] 半端[はんぱ]なことはしたくない。|Ich möchte keine halben Sachen machen.|Nomen
取り締まり|取[と]り 締[し]まり|Kontrolle, Durchgreifen|警察[けいさつ]は 違法駐車[いほうちゅうしゃ]の 取[と]り 締[し]まりを 始[はじ]めた。|Die Polizei hat begonnen, gegen Falschparker vorzugehen.|Nomen
取り締まる|取[と]り 締[し]まる|kontrollieren, durchgreifen gegen|暴力[ぼうりょく]を 取[と]り 締[し]まるのは、 政府[せいふ]の 責任[せきにん]である。|Gegen Gewalt vorzugehen ist Aufgabe der Regierung.|Verb
緩める|緩[ゆる]める|lockern|輸入[ゆにゅう] 規制[きせい]は 最近[さいきん]だいぶ 緩[ゆる]められた。|Die Importbeschränkungen sind in letzter Zeit stark aufgelockert worden.|Verb
緩やか|緩[ゆる]やか|sanft, gemächlich, locker|その 土地[とち]は 川[かわ]に 向[む]かって 緩[ゆる]やかに 傾斜[けいしゃ]している。|Das Land neigt sich sanft zum Fluss hinab.|Adjektiv
のろい|のろい|langsam, träge|この 電車[でんしゃ]はのろいです。|Dieser Zug ist langsam.|Adjektiv
緩む|緩[ゆる]む|sich lockern, nachlassen|あともう 少[すこ]しっていうところで 気[き]が 緩[ゆる]んだんだろうなあ。|Kurz vor dem Ziel hat wohl die Anspannung nachgelassen.|Verb
養う|養[やしな]う|ernähren, unterhalten; pflegen|彼[かれ]には 養[やしな]うべき 家族[かぞく]がいる。|Er hat eine Familie, die er ernähren muss.|Verb
豊か|豊[ゆた]か|reich, üppig|彼[かれ]は 商売[しょうばい]の 経験[けいけん]が 豊[ゆた]かだった。|Er hatte reiche geschäftliche Erfahrungen.|Adjektiv
富む|富[と]む|reich sein an|日本[にほん]は 天然資源[てんねんしげん]に 富[と]んでいない。|Japan ist nicht reich an Bodenschätzen.|Verb
豊富|豊富[ほうふ]|reichlich, reich an|彼[かれ]は 商売[しょうばい] 経験[けいけん]が 豊富[ほうふ]だった。|Er hatte reiche geschäftliche Erfahrungen.|な-Adjektiv
目茶苦茶|目茶苦茶[めちゃくちゃ]|chaotisch, haarsträubend|その 目茶苦茶[めちゃくちゃ]な 状態[じょうたい]をいったいどうしたらいいのだ。|Was soll ich bloß mit diesem heillosen Durcheinander anfangen?|な-Adjektiv
ぴょんぴょん|ぴょんぴょん|hüpfend, hopsend|とてもうれしそうにぴょんぴょん 跳[は]ねて 出[で]ていった。|Er hüpfte ganz vergnügt hinaus.|Adverb
労働者|労働者[ろうどうしゃ]|Arbeiter(in)|労働[ろうどう] 者[しゃ]たちが 労働条件[ろうどうじょうけん]に 不平[ふへい]を 言[い]っている。|Die Arbeiter klagen über die Arbeitsbedingungen.|Nomen
労働|労働[ろうどう]|Arbeit|父[ちち]はかつて 貧[まず]しい 労働[ろうどう] 者[しゃ]だった。|Mein Vater war früher ein armer Arbeiter.|Nomen (mit する)
疲労|疲労[ひろう]|Erschöpfung, Ermüdung|夜[よる] 眠[ねむ]れなくて 彼[かれ]は 疲労[ひろう]して 顔色[かおいろ]が 悪[わる]かった。|Da er nachts nicht schlafen konnte, war er erschöpft und sah bleich aus.|Nomen (mit する)
労力|労力[ろうりょく]|Arbeitsaufwand, Mühe|その 機械[きかい]で、あなたは 多[おお]くの 時間[じかん]と 労力[ろうりょく]を 節約[せつやく]できます。|Das Gerät wird Ihnen viel Zeit und Arbeit ersparen.|Nomen
貧しい|貧[まず]しい|arm, dürftig|私[わたし]は 貧[まず]しい 男[おとこ]です。|Ich bin ein armer Mann.|Adjektiv
ブラシ|ブラシ|Bürste|歯[は]ブラシはどこですか。|Wo ist die Zahnbürste?|Nomen
乏しい|乏[とぼ]しい|knapp, dürftig|彼[かれ]の 地理学[ちりがく]の 知識[ちしき]は 乏[とぼ]しい。|Seine Geographiekenntnisse sind unzureichend.|Adjektiv
貧乏人|貧乏人[びんぼうにん]|armer Mensch|人[ひと]は 金持[かねも]ちか 貧乏[びんぼう] 人[にん]かによって 物[もの]の 見[み] 方[かた]が 違[ちが]う。|Reiche und arme Menschen haben eine andere Sichtweise.|Nomen
辛い|辛[つら]い|hart, schmerzlich, schwer zu ertragen|トムは 辛[つら]い 人生[じんせい]を 送[おく]った。|Tom führte ein schweres Leben.|Adjektiv
不幸せ|不幸[ふしあわ]せ|Unglück, unglücklich|戦争[せんそう]はみんなを 不幸[ふしあわ]せにする。|Der Krieg macht alle unglücklich.|な-Adjektiv
福祉|福祉[ふくし]|Wohlfahrt, Sozialwesen|彼[かれ]は 福祉[ふくし]を 受[う]けて 生活[せいかつ]する 人[ひと]たちを 軽蔑[けいべつ]した。|Er verachtete Menschen, die von der Wohlfahrt leben.|Nomen
マヨネーズ|マヨネーズ|Mayonnaise|マヨネーズは 楽器[がっき]？|Ist Mayonnaise ein Instrument?|Nomen
模様|模様[もよう]|Muster; Anzeichen, Lage|空[そら] 模様[もよう]から 判断[はんだん]すると、 雪[ゆき]が 降[ふ]りそうだ。|Dem Aussehen des Himmels nach zu urteilen, wird es schneien.|Nomen
模範|模範[もはん]|Vorbild, Muster|トムは 模範[もはん] 囚[しゅう]だった。|Tom war ein Mustergefangener.|Nomen
農民|農民[のうみん]|Bauern, Landbevölkerung|農民[のうみん]は 政府[せいふ]に 対[たい]して 反乱[はんらん]を 起[お]こした。|Die Bauern zettelten einen Aufstand gegen die Regierung an.|Nomen
農家|農家[のうか]|Bauernhof, Bauernfamilie|谷[たに]には 農家[のうか]が 点在[てんざい]していた。|Im Tal lagen mehrere Bauernhäuser verstreut.|Nomen
農村|農村[のうそん]|Bauerndorf|日本[にほん]の 農村[のうそん] 風景[ふうけい]は 大[おお]きく 変[か]わったといわれています。|Man sagt, die Situation japanischer Bauerndörfer habe sich stark verändert.|Nomen
低気圧|低気圧[ていきあつ]|Tiefdruckgebiet|台風[たいふう]は 温帯[おんたい] 低[てい] 気圧[きあつ]に 変[か]わりました。|Der Taifun hat sich in ein außertropisches Tiefdruckgebiet verwandelt.|Nomen
だらしない|だらしない|schlampig, nachlässig|それ 以来[いらい] 彼[かれ]はだらしない 生活[せいかつ]をしてきた。|Seither führt er ein Lotterleben.|Adjektiv
短縮|短縮[たんしゅく]|Verkürzung|彼[かれ]らは 労働時間[ろうどうじかん]の 短縮[たんしゅく]を 要求[ようきゅう]している。|Sie fordern eine Verkürzung der Arbeitszeit.|Nomen (mit する)
縮める|縮[ちぢ]める|verkürzen, verkleinern|すさんだ 生活[せいかつ]を 送[おく]るのは、 命[いのち]を 縮[ちぢ]めるようなものだ。|Ein zügelloses Leben zu führen heißt, das eigene Leben zu verkürzen.|Verb
縮む|縮[ちぢ]む|schrumpfen, einlaufen|セーターは 洗[あら]ったら 縮[ちぢ]んだんだ。|Der Pullover ist beim Waschen eingelaufen.|Verb
縮み|縮[ちぢ]み|Schrumpfen, Einlaufen|このシャツは 洗[あら]っても 縮[ちぢ]みが 少[すく]ないです。|Dieses Hemd läuft auch beim Waschen kaum ein.|Nomen
縮まる|縮[ちぢ]まる|kürzer werden, sich verringern|二人[ふたり]の 差[さ]が 少[すこ]しずつ 縮[ちぢ]まりました。|Der Abstand zwischen den beiden wurde nach und nach kleiner.|Verb
とうもろこし|とうもろこし|Mais|農夫[のうふ]は 春[はる]にとうもろこしの 種[たね]をまく。|Der Landwirt pflanzt im Frühling Mais.|Nomen
伸ばす|伸[の]ばす|strecken, verlängern, wachsen lassen|彼女[かのじょ]は 鞄[かばん]に 手[て]を 伸[の]ばした。|Sie streckte die Hand nach der Tasche aus.|Verb
引き伸ばす|引[ひ]き 伸[の]ばす|vergrößern, in die Länge ziehen|写真[しゃしん]を 大[おお]きく 引[ひ]き 伸[の]ばすと 粒子[りゅうし]が 粗[あら]くなる。|Wenn man ein Foto stark vergrößert, wird die Körnung grob.|Verb
追伸|追伸[ついしん]|Postskriptum, PS|追伸[ついしん] 愛[あい]してます。|PS: Ich liebe dich.|Nomen
倍|倍[ばい]|doppelt, -fach|彼[かれ]の 年齢[ねんれい]は 彼女[かのじょ]の 倍[ばい]である。|Er ist doppelt so alt wie sie.|Nomen
超過|超過[ちょうか]|Überschreitung|収入[しゅうにゅう]を 超過[ちょうか]して 支出[ししゅつ]をするな。|Gib nicht mehr aus, als du einnimmst.|Nomen (mit する)
ひらひら|ひらひら|flatternd, schwebend|ヒラヒラと 桜[さくら]の 花[はな]が 舞[ま]っている。もうお 花見[はなみ]の 季節[きせつ]も 終[お]わりだな。|Flatternd tanzen die Kirschblüten. Die Zeit der Blütenschau ist damit wohl schon zu Ende.|Adverb
乗り越える|乗[の]り 越[こ]える|überwinden, hinübersteigen|彼[かれ]は 大変[たいへん]な 努力[どりょく]をして 障害[しょうがい]を 乗[の]り 越[こ]えた。|Er überwand die Hindernisse unter großen Mühen.|Verb
乗り越し|乗[の]り 越[こ]し|Fahrt über das Ziel hinaus|帰宅[きたく]の 途中[とちゅう] 電車[でんしゃ]の 中[なか]で 居眠[いねむ]りをして、 乗[の]り 越[こ]してしまった。|Auf dem Heimweg bin ich im Zug eingenickt und zu weit gefahren.|Nomen (mit する)
乗り越す|乗[の]り 越[こ]す|über das Ziel hinausfahren|考[かんが]え 事[ごと]をしてたら、 乗[の]り 越[こ]してしまった。|In Gedanken versunken bin ich über meine Haltestelle hinausgefahren.|Verb
抜ける|抜[ぬ]ける|herausfallen, ausscheiden; hindurchgehen|ひどい 風邪[かぜ]がまだ 抜[ぬ]けない。|Ich bin meine schlimme Erkältung noch nicht losgeworden.|Verb
抜く|抜[ぬ]く|herausziehen; auslassen; überholen|歯[は]を 抜[ぬ]いてもらったんだ。|Man hat mir einen Zahn gezogen.|Verb
ぽかぽか|ぽかぽか|wohlig warm|ぽかぽかと 暖[あたた]かい。|Es ist angenehm warm.|Adverb
昇る|昇[のぼ]る|aufgehen, aufsteigen|陽[ひ]が 昇[のぼ]らないうちに 出発[しゅっぱつ]しよう。|Lass uns abreisen, bevor die Sonne aufgeht.|Verb
膨らむ|膨[ふく]らむ|anschwellen, sich aufblähen|ケーキが 膨[ふく]らまなかったらどうするの？|Was ist, wenn der Kuchen nicht aufgeht?|Verb
膨れる|膨[ふく]れる|anschwellen, voll werden|たくさん 食[た]べたので 腹[はら]が 膨[ふく]れた。|Ich habe viel gegessen, mein Bauch ist ganz voll.|Verb
札|札[ふだ]|Schild, Etikett, Zettel|かばんに 名前[なまえ]の 札[ふだ]を 付[つ]けました。|Ich habe ein Namensschild an der Tasche befestigt.|Nomen
名札|名札[なふだ]|Namensschild|名札[なふだ]は 付[つ]けてたの？|Hast du ein Namensschild getragen?|Nomen
礼|礼[れい]|Dank; Verbeugung; Höflichkeit|私[わたし]は 手伝[てつだ]ってくれたお 礼[れい]に 彼[かれ]に 一杯[いっぱい]おごった。|Zum Dank für seine Hilfe lud ich ihn auf ein Gläschen ein.|Nomen
よる|よる|abhängen von, beruhen auf|死[し]によって 人間[にんげん]の 限[かぎ]りある 人生[じんせい]は 終[お]わる。|Der Tod beendet die begrenzte Existenz des Menschen.|Verb
反射|反射[はんしゃ]|Reflexion, Spiegelung|鏡[かがみ]は 光[ひかり]を 反射[はんしゃ]する。|Ein Spiegel reflektiert Licht.|Nomen (mit する)
日程|日程[にってい]|Zeitplan, Terminplan|日程[にってい]は 後日[ごじつ] 決定[けってい]いたします。|Das Datum wird später festgelegt werden.|Nomen
程|程[ほど]|Maß, Grad, Grenze|家[いえ] 程[ほど] 良[よ]いところはない。|Trautes Heim, Glück allein!|Nomen
優勝|優勝[ゆうしょう]|Sieg, Meisterschaft|誰[だれ]が 優勝[ゆうしょう]すると 思[おも]う？|Wer, glaubst du, wird gewinnen?|Nomen (mit する)
優秀|優秀[ゆうしゅう]|hervorragend, ausgezeichnet|彼[かれ]は 若[わか]いけれども、 優秀[ゆうしゅう]な 医者[いしゃ]である。|Obwohl er jung ist, ist er ein hervorragender Arzt.|な-Adjektiv
だぶだぶ|だぶだぶ|schlabberig, viel zu weit|彼[かれ]はだぶだぶの 上衣[うわぎ]を 着[き]ていた。|Er trug eine viel zu weite Jacke.|Adjektiv
透明|透明[とうめい]|durchsichtig, transparent|トムが 今日[きょう] 透明[とうめい] 人間[にんげん]を 見[み]たんだって。|Tom sagte, dass er heute den Unsichtbaren gesehen hat.|な-Adjektiv
半導体|半導体[はんどうたい]|Halbleiter|半[はん] 導体[どうたい] 供給[きょうきゅう]が 厳[きび]しいとは 予想[よそう]できなかった。|Dass Halbleiter so knapp werden würden, war nicht vorherzusehen.|Nomen
導く|導[みちび]く|führen, leiten|先生[せんせい]は 生徒[せいと]を 正[ただ]しい 道[みち]に 導[みちび]きます。|Ein Lehrer führt seine Schüler auf den richtigen Weg.|Verb
望む|望[のぞ]む|wünschen, hoffen; überblicken|すべての 国[くに]が 世界平和[せかいへいわ]を 望[のぞ]んでいる。|Jedes Land wünscht sich den Weltfrieden.|Verb
望ましい|望[のぞ]ましい|wünschenswert|結果[けっか]は 望[のぞ]ましいものではなかった。|Das Ergebnis war nicht wünschenswert.|Adjektiv
つるつる|つるつる|glatt, rutschig|肌[はだ]がつるつるだね。|Deine Haut ist ja ganz glatt.|Adverb
要望|要望[ようぼう]|Wunsch, Forderung|彼[かれ]はついに 私[わたし]の 要望[ようぼう]に 従[したが]った。|Er kam endlich meinen Forderungen nach.|Nomen (mit する)
望み|望[のぞ]み|Wunsch, Hoffnung|成功[せいこう]の 望[のぞ]みはあまりない。|Es gibt nur wenig Hoffnung auf Erfolg.|Nomen
有望|有望[ゆうぼう]|vielversprechend|彼[かれ]は 有望[ゆうぼう]な 青年[せいねん]です。|Er ist ein vielversprechender Junge.|な-Adjektiv
欲望|欲望[よくぼう]|Begierde, Verlangen|彼女[かのじょ]は 金[かね]に 対[たい]して 異常[いじょう]なほど 欲望[よくぼう]を 持[も]っていた。|Sie hatte ein ungewöhnliches Verlangen nach Geld.|Nomen
待ち望む|待[ま]ち 望[のぞ]む|sehnlich erwarten|われわれはそのパーティーを 待[ま]ち 望[のぞ]んでいた。|Wir freuten uns auf die Party.|Verb
努める|努[つと]める|sich bemühen|彼[かれ]は 世界政府[せかいせいふ]という 考[かんが]えの 普及[ふきゅう]に 努[つと]めた。|Er setzte sich nachhaltig für die Idee einer Weltregierung ein.|Verb
トースト|トースト|Toast|私[わたし]はトーストにジャムを 薄[うす]く 塗[ぬ]るのが 好[す]きです。|Ich bestreiche meinen Toast gern dünn mit Marmelade.|Nomen
独立|独立[どくりつ]|Unabhängigkeit, Selbstständigkeit|彼女[かのじょ]は 両親[りょうしん]から 独立[どくりつ]している。|Sie ist unabhängig von ihren Eltern.|Nomen (mit する)
独特|独特[どくとく]|eigentümlich, einzigartig|この 花[はな]は 独特[どくとく]の 香[かお]りがする。|Diese Blumen haben einen einzigartigen Geruch.|Adjektiv
独り言|独[ひと]り 言[ごと]|Selbstgespräch|どうして 独[ひと]り 言[ごと]を 言[い]ってるの？|Warum führst du Selbstgespräche?|Nomen
身|身[み]|Körper, die eigene Person|彼女[かのじょ]は 娘[むすめ]の 身[み] 支度[したく]を 手伝[てつだ]った。|Sie half ihrer Tochter beim Anziehen.|Nomen
中身|中身[なかみ]|Inhalt|トムは 財布[さいふ]の 中身[なかみ]を 見[み]せてくれた。|Tom zeigte mir den Inhalt seines Geldbeutels.|Nomen
どきっと|どきっと|erschrocken, zusammenzuckend|急[きゅう]に 名前[なまえ]を 呼[よ]ばれてどきっとしました。|Als plötzlich mein Name gerufen wurde, zuckte ich zusammen.|Adverb
身近|身近[みぢか]|nah, vertraut|身近[みぢか]にいないと 忘[わす]れ 去[さ]られる。|Wer nicht in der Nähe ist, wird vergessen.|な-Adjektiv
身の回り|身[み]の 回[まわ]り|die eigenen Sachen, das tägliche Umfeld|彼女[かのじょ]の 身[み]の 回[まわ]りの 世話[せわ]をする 人[ひと]がいない。|Sie hat niemanden, der sich um sie kümmert.|Nomen
身なり|身[み]なり|Kleidung, äußere Erscheinung|彼女[かのじょ]はきちんとした 身[み]なりをしていた。|Sie war gut angezogen.|Nomen
身振り|身振[みぶ]り|Geste, Gebärde|僕[ぼく]たちは 身振[みぶ]り 手振[てぶ]りで 話[はなし]をした。|Wir unterhielten uns mit Händen und Füßen.|Nomen
独占|独占[どくせん]|Monopol, Alleinbesitz|同社[どうしゃ]は 国[くに]のタバコ 業[ぎょう]を 独占[どくせん]している。|Die Firma hält in der Tabakindustrie des Landes ein Monopol.|Nomen (mit する)
のろのろ|のろのろ|im Schneckentempo|前[まえ]の 車[くるま]がのろのろでいらいらする。|Das Auto vor mir kriecht dahin, das nervt.|Adverb
仲良く|仲良[なかよ]く|einträchtig, in gutem Einvernehmen|仲良[なかよ]くできないの？|Könnt ihr euch nicht vertragen?|Adverb
仲良し|仲良[なかよ]し|gute(r) Freund(in), dicke Freunde|トムとメアリーは 大[だい]の 仲良[なかよ]しです。|Tom und Maria sind dicke Freunde.|Nomen
仲直り|仲直[なかなお]り|Versöhnung|私[わたし]たちは 仲直[なかなお]りした。|Wir begruben das Kriegsbeil.|Nomen (mit する)
仲|仲[なか]|Verhältnis, Beziehung (zueinander)|私[わたし]と 彼[かれ]は 仲[なか]がいい。|Ich habe ein gutes Verhältnis zu ihm.|Nomen
仲間|仲間[なかま]|Kamerad(in), Gefährte, Kollege|彼[かれ]は 会社[かいしゃ]の 仲間[なかま]です。|Er ist ein Arbeitskollege.|Nomen
仲人|仲人[なこうど]|Ehevermittler(in), Trauzeuge|あの 夫婦[ふうふ]は 私[わたし]たちの 仲人[なこうど]です。|Dieses Ehepaar hat unsere Ehe vermittelt.|Nomen
ぴかぴか|ぴかぴか|blitzblank, funkelnd|よし、 今日[きょう]は 床[ゆか]をぴかぴかに 磨[みが]くぞ。|Fein, heute wird der Boden glänzend geschrubbt.|Adverb
照らす|照[て]らす|beleuchten, bescheinen|彼[かれ]とは 学生時代[がくせいじだい]から 肝胆[かんたん] 相[あい] 照[て]らす 仲[なか]だよ。|Er ist schon seit der Studentenzeit mein unzertrennlicher Freund.|Verb
照る|照[て]る|scheinen (Sonne)|太陽[たいよう]は 明[あか]るく 照[て]っている。|Hell leuchtet die Sonne.|Verb
夫人|夫人[ふじん]|Ehefrau, Frau (höflich, nach dem Namen)|ウッド 夫人[ふじん]はたいへん 料理[りょうり]が 上手[じょうず]でした。|Frau Wood war eine sehr gute Köchin.|Nomen
婦人|婦人[ふじん]|Frau, Dame|私[わたし]は 老[ろう] 婦人[ふじん]に 席[せき]を 譲[ゆず]った。|Ich überließ meinen Platz der alten Dame.|Nomen
夫妻|夫妻[ふさい]|Ehepaar, Herr und Frau|ジョーンズ 夫妻[ふさい]は 娘[むすめ]を 愛[あい]している。|Herr und Frau Jones lieben ihre Tochter.|Nomen
ぺこぺこ|ぺこぺこ|katzbuckelnd, unterwürfig|お 腹[なか]がぺこぺこです。|Ich habe einen Bärenhunger.|Adverb
相互|相互[そうご]|gegenseitig|我々[われわれ]の 相互[そうご] 理解[りかい]が 必要[ひつよう]である。|Wir müssen einander verstehen.|Nomen
互い|互[たが]い|einander, gegenseitig|お 互[たが]いに 連絡[れんらく]を 取[と]りましょう。|Bleiben wir miteinander in Verbindung!|Nomen
皆|皆[みな]|alle|彼[かれ]は 皆[みな]に 知[し]られている。|Ihn kennen alle.|Nomen
我々|我々[われわれ]|wir (förmlich)|悪天候[あくてんこう]のため 我々[われわれ]は 出発[しゅっぱつ]できなかった。|Durch das schlechte Wetter kamen wir nicht weg.|Nomen
我が国|我[わ]が 国[くに]|unser Land|彼[かれ]は 我[わ]が 国[くに]の 法律[ほうりつ]に 違反[いはん]した。|Er hat die Gesetze unseres Landes übertreten.|Nomen
ぺらぺら|ぺらぺら|dünn, labberig|英語[えいご]をペラペラにしゃべりたい。|Ich will fließend Englisch sprechen.|Adjektiv
我が家|我[わ]が 家[や]|unser Zuhause, mein Heim|トムは 我[わ]が 家[や]の 長男[ちょうなん]です。|Tom ist unser ältester Sohn.|Nomen
年齢|年齢[ねんれい]|Alter|私[わたし]は 同[おな]じ 年齢[ねんれい]です。|Ich bin im gleichen Alter.|Nomen
恋愛|恋愛[れんあい]|Liebe, Liebesbeziehung|幸[しあわ]せな 恋愛[れんあい]がしたい。|Ich möchte mich mal glücklich verlieben.|Nomen (mit する)
初恋|初恋[はつこい]|erste Liebe|初恋[はつこい]を 忘[わす]れることはないと 言[い]われている。|Die erste Liebe vergisst man nie, so heißt es.|Nomen
誕生|誕生[たんじょう]|Geburt|明日[あした]は 私[わたし]の 誕生日[たんじょうび]だ。|Morgen habe ich Geburtstag.|Nomen (mit する)
ほこり|ほこり|Staub|家具[かぐ]はすべてほこりをかぶっていた。|Die ganzen Möbel waren voller Staub.|Nomen
延びる|延[の]びる|sich verlängern, verschoben werden|夏休[なつやす]みが 延[の]びたので 子供[こども] 達[たち]は 喜[よろこ]んだ。|Die Kinder freuten sich über die Verlängerung der Sommerferien.|Verb
延ばす|延[の]ばす|verlängern, verschieben|今日[きょう]できることは 明日[あした]に 延[の]ばすな。|Was du heute kannst besorgen, das verschiebe nicht auf morgen.|Verb
引き延ばす|引[ひ]き 延[の]ばす|in die Länge ziehen, hinauszögern|彼[かれ]は 演説[えんぜつ]を 引[ひ]き 延[の]ばして 時[とき]を 稼[かせ]ごうとした。|Er versuchte, Zeit zu gewinnen, indem er seine Rede in die Länge zog.|Verb
単純|単純[たんじゅん]|einfach, schlicht|これは 単純[たんじゅん]すぎる 質問[しつもん]でしょうね。|Das ist wohl eine zu einfache Frage.|な-Adjektiv
夢中|夢中[むちゅう]|vertieft, hingerissen|彼女[かのじょ]は 詩[し]を 書[か]くのに 夢中[むちゅう]になっていた。|Sie war vertieft darin, ein Gedicht zu schreiben.|な-Adjektiv
泣き顔|泣[な]き 顔[がお]|verweintes Gesicht|子供[こども]の 泣[な]き 顔[がお]を 見[み]るのはつらいです。|Es fällt schwer, das verweinte Gesicht eines Kindes zu sehen.|Nomen
ポット|ポット|Kanne, Thermoskanne|ポットにお 湯[ゆ]はありますか？|Ist heißes Wasser in der Kanne?|Nomen
笑い|笑[わら]い|Lachen|笑[わら]い 死[し]ぬかと 思[おも]ったよ。|Ich hätte mich totlachen können.|Nomen
喜び|喜[よろこ]び|Freude|喜[よろこ]びも 悲[かな]しみもいつまでも 続[つづ]くことはない。|Weder Freude noch Traurigkeit dauern ewig.|Nomen
喜ばす|喜[よろこ]ばす|erfreuen|私[わたし]は 彼[かれ]を 喜[よろこ]ばすためにそうした。|Ich tat es, weil ich ihn erfreuen wollte.|Verb
恥|恥[はじ]|Schande, Scham|立聞[たちぎ]きをする 者[もの]は 自分[じぶん]の 恥[はじ]を 聞[き]くことになる。|Der Lauscher an der Wand hört seine eigene Schand’.|Nomen
弁論|弁論[べんろん]|Rede, Plädoyer|大学生[だいがくせい]である 姉[あね]は、 弁論[べんろん] 大会[たいかい]で 優勝[ゆうしょう]した。|Meine Schwester, eine Studentin, hat beim Redewettbewerb gewonnen.|Nomen (mit する)
ミュージック|ミュージック|Musik|彼[かれ]はカントリー・ミュージックが 好[す]きだ。|Er mag Country-Musik.|Nomen
保護|保護[ほご]|Schutz|彼女[かのじょ]は 警察[けいさつ]に 保護[ほご]を 求[もと]めた。|Sie bat die Polizei um Schutz.|Nomen (mit する)
弁護|弁護[べんご]|Verteidigung, Fürsprache|私[わたし]は 弁護[べんご] 士[し]になろうと 決心[けっしん]した。|Ich beschloss, Anwalt zu werden.|Nomen (mit する)
保護者|保護者[ほごしゃ]|Erziehungsberechtigte(r), Beschützer(in)|私[わたし]はきみの 保護[ほご] 者[しゃ]のつもりだ。|Ich sehe mich als deinen Erziehungsberechtigten.|Nomen
同士|同士[どうし]|untereinander, einander (gleichartig)|男[おとこ] 同士[どうし]にしては 変[へん]に 仲[なか]がいいね。|Für Männer verstehen die sich ja seltsam gut miteinander.|Nomen
弁護士|弁護士[べんごし]|Rechtsanwalt, Rechtsanwältin|彼女[かのじょ]は 弁護[べんご] 士[し]になりたいって。|Sie will Rechtsanwältin werden.|Nomen
ロマンチック|ロマンチック|romantisch|男子[だんし]より 女子[じょし]の 方[ほう]がロマンチックよ。|Mädchen sind romantischer als Jungen.|Adjektiv
否定|否定[ひてい]|Verneinung, Ablehnung|否定[ひてい] 形[けい]ってさぁ、 訳[やく]すの 難[むずか]しんだよ。|Verneinungen sind schwer zu übersetzen.|Nomen (mit する)
総裁|総裁[そうさい]|Präsident(in) (einer Bank, Partei)|小泉[こいずみ]が 与党[よとう] 自民党[じみんとう]の 新[しん] 総裁[そうさい]に 選出[せんしゅつ]された。|Koizumi ist zum neuen Vorsitzenden der regierenden japanischen Liberaldemokratischen Partei gewählt worden.|Nomen
迷信|迷信[めいしん]|Aberglaube|多[おお]くの 迷信[めいしん]がまだ 信[しん]じられている。|An viele Aberglauben wird immer noch geglaubt.|Nomen
迷子|迷子[まいご]|verirrtes Kind, Verirrte(r)|私[わたし]たちは 霧[きり]の 中[なか]で 迷子[まいご]になった。|Wir verirrten uns im Nebel.|Nomen
領域|領域[りょういき]|Gebiet, Bereich|世論[よろん]は 政治[せいじ]の 領域[りょういき]で 重要[じゅうよう]な 役割[やくわり]を 演[えん]ずる。|Die öffentliche Meinung spielt im politischen Bereich eine wichtige Rolle.|Nomen
謎|謎[なぞ]|Rätsel, Geheimnis|なぜ 彼[かれ]が 自殺[じさつ]をしたかはいまだに 謎[なぞ]である。|Warum er sich umgebracht hat, ist noch immer ein Rätsel.|Nomen
わくわく|わくわく|aufgeregt, voller Vorfreude|わくわくしてた？|Warst du aufgeregt?|Adverb
著者|著者[ちょしゃ]|Autor(in), Verfasser(in)|この 本[ほん]の 著者[ちょしゃ]は 誰[だれ]ですか。|Wer ist der Autor dieses Buches?|Nomen
著書|著書[ちょしょ]|Werk, Buch (eines Autors)|私[わたし]たちは 彼[かれ]の 著書[ちょしょ]の 発行[はっこう]を 期待[きたい]している。|Wir erwarten die Veröffentlichung seines Buches.|Nomen
偽物|偽物[にせもの]|Fälschung, Imitat|偽物[にせもの]にご 注意[ちゅうい]。|Gib auf Fälschungen acht!|Nomen
ノーベル賞|ノーベル 賞[しょう]|Nobelpreis|彼女[かのじょ]は、ノーベル 賞[しょう]をとった 後[あと]も 相[あい] 変[か]わらず 控[ひか]え 目[め]である。|Nachdem sie den Nobelpreis erhalten hatte, blieb sie bescheiden wie zuvor.|Nomen
文化財|文化財[ぶんかざい]|Kulturgut|この 建物[たてもの]は 国[くに]の 文化[ぶんか] 財[ざい]です。|Dieses Gebäude ist ein nationales Kulturgut.|Nomen
わさび|わさび|Wasabi (japanischer Meerrettich)|このすしはわさびがよく 効[き]いている。|Bei diesem Sushi kommt gut der Wasabigeschmack durch.|Nomen
預金|預金[よきん]|Bankeinlage, Guthaben|一般的[いっぱんてき]に 言[い]って、 預金[よきん]は 増加[ぞうか]している。|Allgemein gesagt steigen die Spareinlagen.|Nomen (mit する)
納得|納得[なっとく]|Einsehen, Überzeugtsein|彼[かれ]は 彼女[かのじょ]に 間違[まちが]いを 納得[なっとく]させられなかった。|Er konnte sie nicht von ihrem Fehler überzeugen.|Nomen (mit する)
不得意|不得意[ふとくい]|Schwäche, nicht gut können|私[わたし]は 英語[えいご]が 不[ふ] 得意[とくい]だった。|In Englisch war ich schwach.|な-Adjektiv
得する|得[とく]する|profitieren, einen Vorteil haben|早[はや]く 予約[よやく]すると 得[とく]します。|Wer früh reserviert, hat einen Vorteil.|Verb
得|得[とく]|Vorteil, Gewinn|人[ひと]の 悪口[わるぐち]を 言[い]っても 何[なん]の 得[とく]にもならない。|Du hast nichts davon, schlecht über andere zu reden.|な-Adjektiv
チキン|チキン|Hähnchen|それじゃ、 僕[ぼく]はチキンをもらいましょう。|Dann nehme ich Hühnchen.|Nomen
損|損[そん]|Verlust, Nachteil|あいつの 損[そん]を 埋[う]めてやらなくちゃならないんだ。|Ich muss seinen Verlust ausgleichen.|Nomen (mit する)
損害|損害[そんがい]|Schaden, Verlust|損害[そんがい]は 百万[ひゃくまん]ドルにのぼる。|Der Verlust beläuft sich auf eine Millionen Dollar.|Nomen
損する|損[そん]する|Verlust machen, draufzahlen|機能[きのう]はいいのにデザインで 損[そん]してる。|Die Funktionen sind gut, aber durch das Design verliert es.|Verb
燃料|燃料[ねんりょう]|Brennstoff, Kraftstoff|この 暖房装置[だんぼうそうち]は 石油[せきゆ]を 燃料[ねんりょう]とする。|Diese Heizvorrichtung verwendet Erdöl als Brennstoff.|Nomen
燃やす|燃[も]やす|verbrennen|古[ふる]い 本[ほん]は 燃[も]やしたよ。|Ich habe die alten Bücher verbrannt.|Verb
日焼け|日焼[ひや]け|Sonnenbräune, Sonnenbrand|彼女[かのじょ]の 肌[はだ]はすぐ 日焼[ひや]けする。|Ihre Haut bekommt schnell einen Sonnenbrand.|Nomen (mit する)
とじる|とじる|abheften, binden|口[くち]を 開[あ]けて 目[め]を 閉[と]じなさい。|Mach den Mund auf und die Augen zu!|Verb
焼き肉|焼[や]き 肉[にく]|gegrilltes Fleisch (Yakiniku)|トムとメアリーは、 韓国[かんこく] 風[ふう] 焼[や]き 肉[にく] 屋[や]さんに 行[い]きました。|Tom und Maria sind in ein koreanisches Grillhaus gegangen.|Nomen
夕焼け|夕焼[ゆうや]け|Abendrot|夕焼[ゆうや]けがあると 翌日[よくじつ]は 晴[は]れることが 多[おお]い。|Abendrot verheißt oft schönes Wetter.|Nomen
焼きそば|焼[や]きそば|gebratene Nudeln (Yakisoba)|美味[おい]しい 焼[や]きそばパンを 食[た]べたいです。|Ich möchte ein leckeres Brötchen mit gebratenen Nudeln essen.|Nomen
幹|幹[みき]|Baumstamm|この 木[き]は 幹[みき]がとても 太[ふと]いです。|Dieser Baum hat einen sehr dicken Stamm.|Nomen
分散|分散[ぶんさん]|Streuung, Verteilung|その 会社[かいしゃ]はいろいろな 国[くに]に 投資[とうし]を 分散[ぶんさん]しているね。|Die Firma verteilt ihre Investitionen auf verschiedene Länder.|Nomen (mit する)
にやにや|にやにや|grinsend|ニヤニヤしちゃって 何様[なにさま]かしら？|Was grinst du so, für wen hältst du dich?|Adverb
散らばる|散[ち]らばる|verstreut liegen|ガラスの 破片[はへん]が、 道路[どうろ] 一面[いちめん]に 散[ち]らばってたよ。|Die Straße war mit Glassplittern übersät.|Verb
散る|散[ち]る|abfallen (Blüten), sich zerstreuen|気[き]が 散[ち]るからテレビを 消[け]してくれ。|Stell den Fernseher aus! Ich kann mich nicht konzentrieren.|Verb
散らかる|散[ち]らかる|unordentlich sein, herumliegen|彼[かれ]の 部屋[へや]は 散[ち]らかっていた。|Sein Zimmer war unaufgeräumt.|Verb
散らかす|散[ち]らかす|unordentlich machen, verstreuen|弟[おとうと]の 部屋[へや]は 散[ち]らかしっぱなしにしてある。|Das Zimmer meines jüngeren Bruders bleibt ständig unaufgeräumt.|Verb
田植え|田植[たう]え|Reispflanzen|私[わたし]たちは 田植[たう]えをしました。|Wir haben Reis gepflanzt.|Nomen (mit する)
ばら|ばら|Rose|庭[にわ]に 赤[あか]いばらが 咲[さ]いています。|Im Garten blühen rote Rosen.|Nomen
根|根[ね]|Wurzel|根[ね]に 持[も]ってないって。|Ich bin nicht nachtragend.|Nomen
大根|大根[だいこん]|Daikon-Rettich|大根[だいこん]は 人参[にんじん]より 高[たか]いかもしれない。|Rettiche könnten teurer als Karotten sein.|Nomen
まな板|まな 板[いた]|Schneidebrett|調理台[ちょうりだい]の 保護[ほご]と 切[き]り 易[やす]さを 考[かんが]えて、いつもまな 板[いた]を 使[つか]ってます。|Um die Arbeitsfläche zu schonen und leichter zu schneiden, benutze ich immer ein Schneidebrett.|Nomen
ほうれん草|ほうれん 草[そう]|Spinat|ほうれん 草[そう]をのこさずにたべなさい。|Iss deinen Spinat ganz auf.|Nomen
話し言葉|話[はな]し 言葉[ことば]|gesprochene Sprache|パターソン 博士[はかせ]はココに 話[はな]し 言葉[ことば]も 使[つか]っている。|Dr. Patterson verwendet bei Koko auch gesprochene Sprache.|Nomen
パンティー|パンティー|Slip, Damenunterhose|デパートで 新[あたら]しいパンティーを 買[か]いました。|Im Kaufhaus habe ich einen neuen Slip gekauft.|Nomen
葉っぱ|葉[は]っぱ|Blatt (umgangssprachlich)|葉[は]っぱが 全部[ぜんぶ] 散[ち]ってしまった。|Die Blätter sind alle abgefallen.|Nomen
呼び出す|呼[よ]び 出[だ]す|herbeirufen, einbestellen|どうぞ 彼[かれ]を 電話口[でんわぐち]に 呼[よ]び 出[だ]してください。|Rufen Sie ihn bitte ans Telefon.|Verb
取り扱う|取[と]り 扱[あつか]う|handhaben, führen (Ware)|統計学[とうけいがく]は 事実[じじつ]を 表[あらわ]す 数[かず]を 取[と]り 扱[あつか]うものである。|Die Statistik beschäftigt sich mit Zahlen, die die Realität repräsentieren.|Verb
取り扱い|取[と]り 扱[あつか]い|Handhabung, Umgang|取[と]り 扱[あつか]いに 気[き]を 付[つ]けて。|Vorsicht bei der Handhabung.|Nomen
同級生|同級生[どうきゅうせい]|Klassenkamerad(in)|私[わたし]たちは 同級[どうきゅう] 生[せい]です。|Wir sind Klassenkameraden.|Nomen
中級|中級[ちゅうきゅう]|Mittelstufe|私[わたし]の 英語[えいご]レベルは、 中級[ちゅうきゅう]です。|Mein Englisch ist auf mittlerem Niveau.|Nomen
ふわふわ|ふわふわ|flauschig, fluffig|雪[ゆき]は 柔[やわ]らかくてふわふわしてた。|Der Schnee war weich und flauschig.|Adjektiv
腹|腹[はら]|Bauch|彼[かれ]は 息子[むすこ]に 腹[はら]を 立[た]てていた。|Er war wütend auf seinen Sohn.|Nomen
腹一杯|腹一杯[はらいっぱい]|sich satt essen, voller Bauch|家[いえ]に 帰[かえ]って 朝食[ちょうしょく]を 腹[はら] 一杯[いっぱい]に 食[た]べた。|Ich ging nach Hause und aß mich beim Frühstück richtig satt.|Adverb
肺|肺[はい]|Lunge|スモッグは 健全[けんぜん]な 肺[はい]を 冒[おか]すもとである。|Smog greift gesunde Lungen an.|Nomen
溶ける|溶[と]ける|schmelzen, sich auflösen|砂糖[さとう]は 水[みず]に 溶[と]ける。|Zucker löst sich in Wasser.|Verb
溶かす|溶[と]かす|schmelzen, auflösen (etwas)|ポップコーンに 溶[と]かしバターをかけてください。|Gießen Sie geschmolzene Butter über den Puffmais.|Verb
まずい|まずい|ungünstig, unangenehm|技術[ぎじゅつ]はすごいのに 見[み]せ 方[かた]がまずい。|Die Technik ist großartig, aber die Präsentation ist ungeschickt.|Adjektiv
容易|容易[ようい]|leicht, einfach|勝[か]つのは 容易[ようい]ではない。|Es ist nicht leicht zu gewinnen.|な-Adjektiv
容器|容器[ようき]|Behälter|禁[きん]じられた 蝿[はえ]の 容器[ようき]を 触[さわ]っちゃいけません。|Berühre nicht den Behälter mit den verbotenen Fliegen.|Nomen
滑らか|滑[なめ]らか|glatt, geschmeidig|彼女[かのじょ]の 肌[はだ]は 滑[なめ]らかです。|Ihre Haut ist glatt.|Adjektiv
分析|分析[ぶんせき]|Analyse|状況[じょうきょう]をどう 分析[ぶんせき]しますか。|Wie analysieren Sie die Situation?|Nomen (mit する)
保健|保健[ほけん]|Gesundheitspflege|学校[がっこう]の 保健[ほけん] 室[しつ]で 少[すこ]し 休[やす]ませてもらった。|Ich durfte mich im Krankenzimmer der Schule ein wenig ausruhen.|Nomen
もむ|もむ|kneten, massieren|父[ちち]の 肩[かた]をもんであげました。|Ich habe meinem Vater die Schultern massiert.|Verb
診る|診[み]る|untersuchen (ärztlich)|医者[いしゃ]に 診[み]てもらった 方[ほう]がいいよ。|Du solltest dich besser von einem Arzt untersuchen lassen.|Verb
治療|治療[ちりょう]|medizinische Behandlung|彼女[かのじょ]は 彼[かれ]の 骨折[こっせつ]した 足[あし]の 治療[ちりょう]をした。|Sie behandelte sein gebrochenes Bein.|Nomen (mit する)
毒|毒[どく]|Gift|砂糖[さとう]って、 毒[どく]なの？|Ist Zucker Gift?|Nomen
中毒|中毒[ちゅうどく]|Vergiftung; Sucht|私[わたし]はテレビ 中毒[ちゅうどく]です。|Ich bin TV-süchtig.|Nomen (mit する)
有毒|有毒[ゆうどく]|giftig|かつてトマトは 有毒[ゆうどく]だと 信[しん]じられていたことがあった。|Man hat einmal geglaubt, dass Tomaten giftig sind.|な-Adjektiv
ばい菌|ばい 菌[きん]|Bakterien, Keime|手[て]を 洗[あら]ってばい 菌[きん]を 落[お]としましょう。|Waschen wir uns die Hände, um die Keime zu entfernen.|Nomen
センター|センター|Zentrum, Zentrale|ショッピングセンターはどこですか。|Wo ist das Einkaufszentrum?|Nomen
不潔|不潔[ふけつ]|unsauber, unhygienisch|不潔[ふけつ]は 病気[びょうき]を 生[う]み 出[だ]す。|Dreck gebiert Krankheiten.|な-Adjektiv
編集|編集[へんしゅう]|Redaktion, Bearbeitung|その 編集[へんしゅう] 者[しゃ]と 発行者[はっこうしゃ]はふたりとも 私[わたし]のいとこです。|Sowohl der Redakteur als auch der Verleger sind meine Cousins.|Nomen (mit する)
追放|追放[ついほう]|Verbannung, Ausweisung|汚職政治家[おしょくせいじか]を 追放[ついほう]せよ。|Weg mit den korrupten Politikern.|Nomen (mit する)
放射能|放射能[ほうしゃのう]|Radioaktivität|「 放射[ほうしゃ] 能[のう]」というのは 化学[かがく]の 用語[ようご]だ。|„Radioaktivität“ ist ein Begriff aus der Chemie.|Nomen
放す|放[はな]す|loslassen, freilassen|彼[かれ]はロープを 放[はな]した。|Er ließ das Seil los.|Verb
ぞんざい|ぞんざい|grob, nachlässig, unhöflich|彼[かれ]は 引[ひ]き 出[だ]しに 物[もの]をぞんざいに 押[お]し 込[こ]んだ。|Er stopfte seine Sachen achtlos in die Schublade.|Adjektiv
放る|放[ほう]る|werfen; liegen lassen|子供[こども]は 放[ほう]っておいても 育[そだ]つものだ。|Kinder werden auch groß, wenn man sie in Ruhe lässt.|Verb
無視|無視[むし]|Ignorieren, Missachtung|彼[かれ]は 僕[ぼく]の 忠告[ちゅうこく]を 無視[むし]した。|Er ignorierte meinen Ratschlag.|Nomen (mit する)
服装|服装[ふくそう]|Kleidung, Aufmachung|彼女[かのじょ]は 服装[ふくそう]にかまわない。|Sie legt nicht viel Wert auf ihre Kleidung.|Nomen
振り仮名|振[ふ]り 仮名[がな]|Lesehilfe in Kana (Furigana)|振[ふ]り 仮名[がな]はどうやって 付[つ]けますか？|Wie fügt man Furigana hinzu?|Nomen
銅|銅[どう]|Kupfer|銅[どう]はよく 電気[でんき]を 通[とお]す。|Kupfer leitet Elektrizität gut.|Nomen
たんす|たんす|Kommode, Kleiderschrank|昨日[きのう]、たんすを 買[か]いました。|Gestern habe ich eine Kommode gekauft.|Nomen
悲劇|悲劇[ひげき]|Tragödie|悲劇[ひげき]は 突然[とつぜん] 起[お]こった。|Die Tragödie geschah plötzlich.|Nomen
団体|団体[だんたい]|Gruppe, Verband, Organisation|彼女[かのじょ]には 私[わたし]たちの 団体[だんたい]での 重要[じゅうよう]な 役割[やくわり]があります。|Sie spielt in unserer Organisation eine wichtige Rolle.|Nomen
団地|団地[だんち]|Wohnsiedlung|団地[だんち]も 昔[むかし]と 変[か]わっていなかった。|Auch die Wohnsiedlung hatte sich gegenüber früher nicht verändert.|Nomen
美術|美術[びじゅつ]|bildende Kunst|現代[げんだい] 美術[びじゅつ]に 興味[きょうみ]はある？|Interessierst du dich für moderne Kunst?|Nomen
博士|博士[はくし]|Doktor (akademischer Grad)|彼[かれ]らは 私[わたし]を 博士[はくし]という 肩書[かたが]きで 呼[よ]んだ。|Sie sprachen mich mit "Doktor" an.|Nomen
博士|博士[はかせ]|Doktor; Gelehrter, Experte|ホワイト 博士[はかせ]が 我々[われわれ]の 通訳[つうやく]をして 下[くだ]さった。|Doktor Weiß hat für uns gedolmetscht.|Nomen
チェンジ|チェンジ|Wechsel|イメージチェンジをしたい。|Ich möchte einen Imagewechsel vornehmen.|Nomen (mit する)
展開|展開[てんかい]|Entwicklung, Entfaltung|予想通[よそうどお]りの 展開[てんかい]になりましたね。|Es ist ja genau wie erwartet gelaufen.|Nomen (mit する)
発展|発展[はってん]|Entwicklung, Aufschwung|経済[けいざい] 発展[はってん]はアフリカでは 重要[じゅうよう]である。|Die wirtschaftliche Entwicklung ist wichtig für Afrika.|Nomen (mit する)
催す|催[もよお]す|veranstalten; verspüren|彼女[かのじょ]は 来週[らいしゅう]パーティーを 催[もよお]す。|Sie wird nächste Woche eine Party veranstalten.|Verb
催し|催[もよお]し|Veranstaltung|町[まち]で 夏[なつ]の 催[もよお]しがあります。|In der Stadt gibt es eine Sommerveranstaltung.|Nomen
典型的|典型的[てんけいてき]|typisch|彼[かれ]は 典型[てんけい] 的[てき]な 仕事人間[しごとにんげん]だね。|Er ist ein typischer Workaholic.|Adjektiv
つかまる|つかまる|sich festhalten|私[わたし]は 彼[かれ]の 手[て]にしっかりとつかまった。|Ich habe seine Hand fest umklammert.|Verb
典型|典型[てんけい]|Musterbeispiel, Prototyp|彼[かれ]らは 典型[てんけい] 的[てき]な 若者[わかもの]だ。|Das sind typische Jungspunde.|Nomen
百科事典|百科事典[ひゃっかじてん]|Enzyklopädie|彼[かれ]はいわゆる 歩[ある]く 百科[ひゃっか] 事典[じてん]だ。|Er ist sozusagen ein wandelndes Lexikon.|Nomen
特殊|特殊[とくしゅ]|speziell, besonders|特殊[とくしゅ]な 才能[さいのう]を 与[あた]えられた 動物[どうぶつ]もいる。|Manche Tiere besitzen spezielle Fähigkeiten.|Adjektiv
微妙|微妙[びみょう]|heikel, feinsinnig, kaum merklich|私[わたし]はかなり 微妙[びみょう]な 立場[たちば]にある。|Ich bin in einer ziemlich heiklen Lage.|な-Adjektiv
免税|免税[めんぜい]|Steuerbefreiung, zollfrei|ここは 免税[めんぜい] 店[てん]ですか。|Ist das hier ein Duty-free-Laden?|Nomen (mit する)
つながり|つながり|Verbindung, Zusammenhang|高齢者[こうれいしゃ]の 孤独死[こどくし]は、 社会[しゃかい]のつながりの 希薄[きはく] 化[か]を 象徴[しょうちょう]している。|Der einsame Tod alter Menschen steht dafür, dass die Verbindungen in der Gesellschaft schwächer werden.|Nomen
免許|免許[めんきょ]|Lizenz, Führerschein|やっと 免許[めんきょ]が 取[と]れました。|Ich erlangte endlich einen Führerschein.|Nomen
動詞|動詞[どうし]|Verb|不規則[ふきそく] 動詞[どうし]の 勉強[べんきょう]は 好[す]きではない。|Ich lerne nicht gerne unregelmäßige Verben.|Nomen
名詞|名詞[めいし]|Substantiv, Nomen|公共[こうきょう]の 場[ば]で 固有[こゆう] 名詞[めいし]を 出[だ]す 時[とき]は、 次[つぎ]の 点[てん]に 注意[ちゅうい]しましょう。|Wenn man in der Öffentlichkeit Eigennamen nennt, sollte man auf Folgendes achten.|Nomen
副詞|副詞[ふくし]|Adverb|副詞[ふくし]は 何[なに]を 修飾[しゅうしょく]するでしょう？|Was bestimmen Adverbien näher?|Nomen
代名詞|代名詞[だいめいし]|Pronomen|中学生[ちゅうがくせい]が 英語[えいご]を 学[まな]ぶ 際[さい]の 最[さい] 難関[なんかん]の 一[ひと]つが 関係[かんけい] 代[だい] 名詞[めいし]です。|Eine der größten Hürden, der Mittelschüler beim Englischlernen begegnen, sind Relativpronomen.|Nomen
つながる|つながる|verbunden sein, zusammenhängen|すべてつながったよ！|Jetzt passt alles zusammen!|Verb
伝統|伝統[でんとう]|Tradition|これは 家族[かぞく]の 伝統[でんとう]です。|Das ist eine Familientradition.|Nomen
伝わる|伝[つた]わる|überliefert werden, sich verbreiten|悪[わる]い 噂[うわさ]はすぐに 伝[つた]わるからね。|Schlechte Nachrichten verbreiten sich schnell.|Verb
伝説|伝説[でんせつ]|Legende, Sage|伝説[でんせつ]では、 彼女[かのじょ]は 人魚[にんぎょ]だったと 言[い]われる。|In der Legende heißt es, sie wäre eine Meerjungfrau gewesen.|Nomen
手伝い|手伝[てつだ]い|Hilfe, Helfer(in)|お 手伝[てつだ]いしましょうか。|Soll ich dir helfen?|Nomen
伝言|伝言[でんごん]|mündliche Nachricht|伝言[でんごん]が 届[とど]いております。|Sie haben eine Nachricht.|Nomen (mit する)
伝染|伝染[でんせん]|Ansteckung, Übertragung|風邪[かぜ]は 伝染[でんせん]する。|Erkältungen sind ansteckend.|Nomen (mit する)
つばめ|つばめ|Schwalbe|つばめが 空[そら]を 飛[と]んでいる。|Schwalben fliegen am Himmel.|Nomen
焼き鳥|焼[や]き 鳥[とり]|Yakitori (gegrillte Hähnchenspieße)|仕事[しごと]の 後[あと]で 焼[や]き 鳥[とり]を 食[た]べに 行[い]きました。|Nach der Arbeit sind wir Yakitori essen gegangen.|Nomen
鳴らす|鳴[な]らす|läuten, ertönen lassen|私[わたし]に 用[よう]があるときはベルを 鳴[な]らして 下[くだ]さい。|Läuten Sie, wenn Sie mich brauchen.|Verb
悲鳴|悲鳴[ひめい]|Schrei, Aufschrei|悲鳴[ひめい]が 聞[き]こえなかったか？|Hast du nicht den Schrei gehört?|Nomen
笑い声|笑[わら]い 声[ごえ]|Gelächter|子供[こども]の 明[あか]るい 笑[わら]い 声[ごえ]が 森[もり]の 中[なか]に 広[ひろ]がった。|Heiteres Kinderlachen erfüllte den Wald.|Nomen
泣き声|泣[な]き 声[ごえ]|Weinen, weinerliche Stimme|子供[こども]の 泣[な]き 声[ごえ]が 遠[とお]くから 聞[き]こえてくる。|Aus der Ferne hört man das Weinen eines Kindes.|Nomen
つぶやく|つぶやく|murmeln|その 内気[うちき]な 生徒[せいと]は、 自分[じぶん]の 答[こた]えをつぶやいた。|Der schüchterne Schüler murmelte seine Antwort.|Verb
話し声|話[はな]し 声[ごえ]|Stimmen, Gespräch (hörbar)|隣[となり]の 部屋[へや]で 誰[だれ]かの 話[はな]し 声[ごえ]が 聞[き]こえる。|Ich kann jemanden im Nebenraum sprechen hören.|Nomen
駐車|駐車[ちゅうしゃ]|Parken|ここに 駐車[ちゅうしゃ]してはいけません。|Du darfst hier nicht parken.|Nomen (mit する)
騒音|騒音[そうおん]|Lärm|私[わたし]は 騒音[そうおん]になれている。|Ich bin an den Lärm gewöhnt.|Nomen
騒動|騒動[そうどう]|Aufruhr, Tumult|ひと 騒動[そうどう] 起[お]こしてやります。|Ich werde für einigen Aufruhr sorgen.|Nomen
騒々しい|騒々[そうぞう]しい|laut, lärmend|そんなに 騒々[そうぞう]しく 階段[かいだん]を 駆[か]け 下[お]りるな。|Renn nicht so laut die Treppe hinunter!|Adjektiv
つぶる|つぶる|schließen (Augen)|いいって 言[い]うまで 目[め]つぶってて。|Lass die Augen geschlossen, bis ich sage, dass du sie öffnen kannst.|Verb
名刺|名刺[めいし]|Visitenkarte|彼[かれ]は 名刺[めいし]を 出[だ]した。|Er zeigte seine Visitenkarte.|Nomen
到着|到着[とうちゃく]|Ankunft|タクシーが 到着[とうちゃく]した。|Das Taxi ist da.|Nomen (mit する)
到達|到達[とうたつ]|Erreichen, Gelangen|ついに 彼[かれ]らはその 山[やま]の 頂上[ちょうじょう]に 到達[とうたつ]した。|Letztendlich erreichten sie die Spitze des Berges.|Nomen (mit する)
倒産|倒産[とうさん]|Konkurs, Insolvenz|彼[かれ]らは 会社[かいしゃ]の 倒産[とうさん]を 彼[かれ]のせいにした。|Sie machten ihn für den Konkurs der Firma verantwortlich.|Nomen (mit する)
面倒|面倒[めんどう]|lästig, mühsam; Fürsorge|まあ 面倒[めんどう]ければまたすぐやめるんだろうけど。|Aber wenn es mir lästig wird, höre ich bestimmt gleich wieder auf.|な-Adjektiv
斜め|斜[なな]め|schräg, diagonal|彼[かれ]は 帽子[ぼうし]を 斜[なな]めにかぶっていた。|Er hat seinen Hut schief aufgesetzt.|な-Adjektiv
つぼみ|つぼみ|Knospe|つぼみがほころび 始[はじ]めた。|Die Knospen begannen sich zu öffnen.|Nomen
柔らかい|柔[やわ]らかい|weich, sanft|赤[あか]ん 坊[ぼう]は 柔[やわ]らかい 肌[はだ]をしている。|Babys haben eine zarte Haut.|Adjektiv
張る|張[は]る|spannen; verspannt sein|彼女[かのじょ]は 見栄[みえ]を 張[は]っているだけだよ。|Sie gibt nur an.|Verb
張り切る|張[は]り 切[き]る|voller Eifer sein, sich ins Zeug legen|今日[きょう]は 遠足[えんそく]なので、うちの 子[こ]は 張[は]り 切[き]って 出[で]かけた。|Weil heute Ausflug ist, ist unser Kind voller Eifer losgezogen.|Verb
欲張り|欲張[よくば]り|Gier, gierig|欲張[よくば]りすぎると、あとで 痛[いた]い 目[め]にあうよね。|Wenn man zu gierig ist, rächt sich das später.|な-Adjektiv
突然|突然[とつぜん]|plötzlich|事故[じこ]は 突然[とつぜん]に 起[お]きた。|Der Unfall geschah plötzlich.|Adverb
つまずく|つまずく|stolpern|彼女[かのじょ]は 石[いし]につまずいた。|Sie ist über einen Stein gestolpert.|Verb
突っ込む|突[つ]っ 込[こ]む|hineinstecken, hineinstoßen; hineinrasen|私[わたし]はポケットに 手[て]を 突[つ]っ 込[こ]んだ。|Ich steckte meine Hände in die Taschen.|Verb
突く|突[つ]く|stoßen, stechen|テーブルにひじを 突[つ]くのはやめなさい。|Hör auf, deine Ellbogen auf dem Tisch abzustützen.|Verb
追突|追突[ついとつ]|Auffahrunfall|彼女[かのじょ]の 車[くるま]はバスに 追突[ついとつ]した。|Ihr Auto fuhr auf einen Bus auf.|Nomen (mit する)
触れる|触[ふ]れる|berühren, in Berührung kommen|ボタンに 触[ふ]れるな！|Berühren Sie diesen Knopf nicht!|Verb
避難|避難[ひなん]|Evakuierung, Zuflucht|我々[われわれ]は 避難[ひなん] 民[みん]に 毛布[もうふ]を 与[あた]えた。|Wir versorgten die Flüchtlinge mit Decken.|Nomen (mit する)
ツル|ツル|Kranich|「 鶴[つる]は 千[せん] 年[ねん] 生[い]きるのよ」とチズコは 言[い]った。|„Ein Kranich lebt tausend Jahre!“ sagte Chizuko.|Nomen
墜落|墜落[ついらく]|Absturz|飛行機[ひこうき]が 山[やま]に 墜落[ついらく]した。|Das Flugzeug stürzte in den Bergen ab.|Nomen (mit する)
兵士|兵士[へいし]|Soldat(in)|ここで 多[おお]くの 兵士[へいし]たちが 死[し]んだ。|Hier wurden viele Soldaten getötet.|Nomen
兵器|兵器[へいき]|Waffe, Kriegsgerät|条約[じょうやく]は 化学[かがく] 兵器[へいき]の 使用[しよう]を 禁止[きんし]している。|Der Vertrag verbietet den Gebrauch chemischer Waffen.|Nomen
兵隊|兵隊[へいたい]|Soldat, Truppe|兵隊[へいたい]が 町[まち]への 道[みち]を 封鎖[ふうさ]した。|Soldaten blockierten den Weg zur Stadt.|Nomen
武器|武器[ぶき]|Waffe|武器[ぶき]の 輸出[ゆしゅつ]は 禁止[きんし]されていた。|Die Ausfuhr von Waffen war verboten.|Nomen
武士|武士[ぶし]|Samurai, Krieger|昔[むかし]、 武士[ぶし]は 刀[かたな]を 持[も]っていました。|Früher trugen die Samurai Schwerter.|Nomen
でこぼこ|でこぼこ|uneben, holprig|月[つき]の 表面[ひょうめん]はでこぼこだ。|Die Oberfläche des Mondes ist uneben.|Nomen (mit する)
弾|弾[たま]|Kugel, Geschoss|ピストルの 弾[たま]が 彼[かれ]の 足[あし]を 貫通[かんつう]した。|Eine Pistolenkugel durchschlug sein Bein.|Nomen
弾む|弾[はず]む|federn, hüpfen; in Schwung kommen|彼[かれ]の 胸[むね]は 期待[きたい]に 弾[はず]んだ。|Sein Herz pochte voller Erwartung.|Verb
日の丸|日[ひ]の 丸[まる]|Sonnenbanner (japanische Flagge)|その 日[ひ]、 日[ひ]の 丸[まる]の 旗[はた]がはためいていた。|An jenem Tage wehte die Fahne der aufgehenden Sonne im Wind.|Nomen
真ん丸|真[ま]ん 丸[まる]|kreisrund|卵[たまご]は、 真[ま]ん 丸[まる]ではなく 楕円[だえん]です。|Ein Ei ist nicht kugelrund, sondern oval.|な-Adjektiv
爆発|爆発[ばくはつ]|Explosion|爆発[ばくはつ]の 原因[げんいん]は 何[なん]だったの？|Was war der Grund für die Explosion?|Nomen (mit する)
てのひら|てのひら|Handfläche|私[わたし]はひざを 曲[ま]げずに 両方[りょうほう]の 手[て]のひらを 床[ゆか]に 付[つ]けることができる。|Ich kann meine Handflächen auf den Boden setzen, ohne meine Knie zu beugen.|Nomen
爆弾|爆弾[ばくだん]|Bombe|敵[てき]は 工場[こうじょう]に 爆弾[ばくだん]を 落[お]とした。|Der Feind warf Bomben über der Fabrik ab.|Nomen
暴落|暴落[ぼうらく]|Kurssturz, Preisverfall|株式市場[かぶしきしじょう]は 暴落[ぼうらく]した。|Der Aktienmarkt ist eingebrochen.|Nomen (mit する)
暴力|暴力[ぼうりょく]|Gewalt|暴力[ぼうりょく]はどこにでもある。|Gewalt ist allgegenwärtig.|Nomen
乱暴|乱暴[らんぼう]|Gewalttätigkeit, Grobheit|道具[どうぐ]を 乱暴[らんぼう]に 扱[あつか]うな。|Geh nicht so grob mit dem Werkzeug um!|Nomen (mit する)
絶えず|絶[た]えず|unaufhörlich, ständig|彼[かれ]は 私[わたし]を 絶[た]えず 侮辱[ぶじょく]して 怒[おこ]らせた。|Er beleidigt und ärgert mich ununterbrochen.|Adverb
とがる|とがる|spitz sein|彼[かれ]の 鉛筆[えんぴつ]は 先[さき]がとがっている。|Sein Bleistift hat eine scharfe Spitze.|Verb
滅びる|滅[ほろ]びる|untergehen, zugrunde gehen|肉体[にくたい]は 滅[ほろ]びるが 霊魂[れいこん]は 不滅[ふめつ]である。|Der Körper stirbt, aber die Seele ist unsterblich.|Verb
防ぐ|防[ふせ]ぐ|verhindern, abwehren|彼女[かのじょ]は 寒気[かんき]を 防[ふせ]ぐために 厚[あつ]いコートを 着[き]ていた。|Sie trug einen dicken Mantel gegen die Kälte.|Verb
防衛|防衛[ぼうえい]|Verteidigung|トムは 正当[せいとう] 防衛[ぼうえい]でメアリーを 射[う]ったと 主張[しゅちょう]した。|Tom behauptet, Maria aus Notwehr erschossen zu haben.|Nomen (mit する)
防止|防止[ぼうし]|Verhütung, Verhinderung|これは 有効[ゆうこう]な 犯罪[はんざい] 防止[ぼうし] 対策[たいさく]だ。|Das ist eine wirksame Maßnahme zur Verhinderung von Verbrechen.|Nomen (mit する)
予防|予防[よぼう]|Vorbeugung|予防[よぼう] 接種[せっしゅ]を 受[う]けとかなきゃ。|Ich muss eine Schutzimpfung bekommen.|Nomen (mit する)
とんかつ|とんかつ|paniertes Schweineschnitzel (Tonkatsu)|昼[ひる]ご 飯[はん]にとんかつを 食[た]べました。|Zu Mittag habe ich Tonkatsu gegessen.|Nomen
防火|防火[ぼうか]|Brandschutz|私[わたし]たちは 昨日[きのう] 防火[ぼうか] 訓練[くんれん]をした。|Wir hatten gestern eine Brandschutzübung.|Nomen
妨害|妨害[ぼうがい]|Behinderung, Störung|彼[かれ]は 君[きみ]の 仕事[しごと]を 妨害[ぼうがい]する 意図[いと]など 持[も]っていない。|Er hat nicht die Absicht, deine Arbeit zu behindern.|Nomen (mit する)
不機嫌|不機嫌[ふきげん]|schlechte Laune|彼女[かのじょ]は 不[ふ] 機嫌[きげん]だった。|Sie hatte schlechte Laune.|な-Adjektiv
徹夜|徹夜[てつや]|die Nacht durchmachen|私[わたし]はよく 徹夜[てつや]する。|Ich bleibe oft die ganze Nacht wach.|Nomen
底|底[そこ]|Boden, Grund|グラスの 底[そこ]に 少[すこ]しワインが 残[のこ]っている。|Am Boden des Glases gibt es noch einen Weinrest.|Nomen
徹底的|徹底的[てっていてき]|gründlich, konsequent|私[わたし]はそれを 徹底[てってい] 的[てき]に 調[しら]べた。|Ich habe es gründlich untersucht.|Adjektiv
どんなに|どんなに|wie sehr|君[きみ]は 私[わたし]がどんなに 心配[しんぱい]しているかを 知[し]らない。|Du weißt gar nicht, wie sehr ich mich sorge.|Adverb
到底|到底[とうてい]|auf keinen Fall, unmöglich (mit Verneinung)|彼[かれ]の 部屋[へや]は 小[こ] 奇麗[きれい]とは 到底[とうてい] 言[い]えない。|Man kann keinesfalls sagen, dass sein Zimmer sauber sei.|Adverb
抵抗|抵抗[ていこう]|Widerstand|抵抗[ていこう]がある。|Es gibt Widerstand.|Nomen (mit する)
敵|敵[てき]|Feind, Gegner|彼[かれ]らは 敵[てき]に 向[む]かって 進[すす]んだ。|Sie rückten zum Gegner vor.|Nomen
態勢|態勢[たいせい]|Bereitschaft, Aufstellung|大型[おおがた] 台風[たいふう]への 万全[ばんぜん]の 態勢[たいせい]が 整[ととの]いました。|Alles ist bestens vorbereitet für den großen Taifun.|Nomen
体系|体系[たいけい]|System, Aufbau|情報[じょうほう]を 体系[たいけい] 的[てき]に 管理[かんり]しておく。|Man verwaltet die Informationen systematisch.|Nomen
なめる|なめる|lecken; unterschätzen|猫[ねこ]は 足[あし]の 先[さき]をなめていた。|Die Katze leckte sich die Pfoten.|Verb
理系|理系[りけい]|naturwissenschaftliche Richtung|お 前[まえ]は 文系[ぶんけい]の 方[ほう]が 合[あ]ってるよ。 理系[りけい]は 向[む]いてないと 思[おも]う。|Dir liegen die Geisteswissenschaften mehr. Ich finde nicht, dass du dich für die exakten Wissenschaften eignest.|Nomen
文系|文系[ぶんけい]|geisteswissenschaftliche Richtung|私[わたし]は 文系[ぶんけい]の 学生[がくせい]です。|Ich studiere ein geisteswissenschaftliches Fach.|Nomen
綿|綿[めん]|Baumwolle|綿[めん]は 水[みず]を 吸収[きゅうしゅう]する。|Baumwolle nimmt Wasser auf.|Nomen
繁栄|繁栄[はんえい]|Wohlstand, Blüte|国家[こっか]の 繁栄[はんえい]は 市民[しみん]の 手[て]にかかっている。|Der Wohlstand eines Landes liegt in den Händen seiner Bürger.|Nomen (mit する)
日韓|日韓[にっかん]|Japan und Südkorea|彼氏[かれし]は 宿敵[しゅくてき] 韓国[かんこく] 出身[しゅっしん]。 彼[かれ]とは 日韓[にっかん] 戦[せん]は 見[み]ません！|Mein Freund stammt aus dem Land des Erzrivalen Korea. Mit ihm zusammen sehe ich kein japanisch-koreanisches Spiel an.|Nomen
にらむ|にらむ|anstarren, böse ansehen|彼[かれ]は 私[わたし]をにらんだ。|Er starrte mich finster an.|Verb
耐える|耐[た]える|aushalten, standhalten|彼女[かのじょ]は 最後[さいご]まで 耐[た]えた。|Sie hielt bis zum Ende aus.|Verb
矢印|矢印[やじるし]|Pfeil (Zeichen)|矢印[やじるし]は 進行方向[しんこうほうこう]を 示[しめ]しています。|Der Pfeil zeigt die Richtung an, in die man gehen muss.|Nomen
爪切り|爪切[つめき]り|Nagelknipser|爪切[つめき]りが 見当[みあ]たらないんだよ。|Ich finde den Nagelknipser nicht.|Nomen
枠|枠[わく]|Rahmen, Kasten|彼[かれ]はドア 枠[わく]の 下[した]に 立[た]った。|Er stand unter dem Türrahmen.|Nomen
棒|棒[ぼう]|Stab, Stock|彼[かれ]は 犬[いぬ]を 棒[ぼう]でたたいた。|Er schlug den Hund mit einem Stock.|Nomen
人柄|人柄[ひとがら]|Wesen, Charakter|私[わたし]は 人柄[ひとがら]で 人[ひと]を 判断[はんだん]するように 心[こころ]がけている。|Ich bin stets bemüht, einen Menschen nach seinem Charakter zu beurteilen.|Nomen
ねずみ|ねずみ|Maus, Ratte|ねずみが 鳴[な]いた。|Die Maus piepste.|Nomen
詰める|詰[つ]める|hineinstopfen, packen|彼[かれ]はびんに 水[みず]を 詰[つ]めた。|Er füllte die Flasche mit Wasser.|Verb
詰まる|詰[つ]まる|verstopft sein, vollgestopft sein|そんなに 急[いそ]いで 食[た]べると 喉[のど]に 詰[つ]まるよ。|Wenn du so schlingst, bleibt es dir im Halse stecken!|Verb
譲る|譲[ゆず]る|überlassen, abtreten; nachgeben|若者[わかもの]は 老人[ろうじん]に 席[せき]を 譲[ゆず]るべきだ。|Junge Menschen sollten alten den Sitz überlassen.|Verb
誠に|誠[まこと]に|wirklich, aufrichtig (förmlich)|遅[おく]れまして、 誠[まこと]に 申[もう]し 訳[わけ]ありません。|Ich bitte inständigst, meine Verspätung zu entschuldigen!|Adverb
盛り上げる|盛[も]り 上[あ]げる|in Stimmung bringen, anheizen|トムはパーティーの 盛[も]り 上[あ]げ 役[やく]だった。|Tom war es, der bei der Feier für Stimmung sorgte.|Verb
のぞく|のぞく|hineinschauen, spähen|その 箱[はこ]をのぞいてはいけない。|Schau nicht in die Schachtel!|Verb
盛り上がる|盛[も]り 上[あ]がる|in Stimmung kommen; sich aufwölben|地震[じしん]のおかげで 地面[じめん]が 盛[も]り 上[あ]がる。|Durch das Erdbeben wölbt sich der Boden auf.|Verb
盛る|盛[も]る|aufhäufen, füllen (Schale)|お 刺身[さしみ]を 盛[も]るお 皿[さら]は、どれにする？|Auf welchem Teller sollen wir das Sashimi anrichten?|Verb
針|針[はり]|Nadel|彼女[かのじょ]は 糸[いと]を 通[とお]した 針[はり]で 縫[ぬ]います。|Sie näht mit Nadel und Faden.|Nomen
釣り|釣[つ]り|Angeln|私[わたし]たちは 湖[みずうみ]へ 釣[つ]りに 行[い]った。|Wir sind zum Angeln an den See gefahren.|Nomen
釣り合い|釣[つ]り 合[あ]い|Gleichgewicht, Ausgewogenheit|彼[かれ]のぜいたくぶりは 収入[しゅうにゅう]と 不[ふ] 釣[つ]り 合[あ]いである。|Sein luxuriöser Lebensstil steht in einem Missverhältnis zu seinem Einkommen.|Nomen
のんき|のんき|sorglos, unbekümmert|彼女[かのじょ]はのんきだ。|Sie ist lässig.|な-Adjektiv
釣り合う|釣[つ]り 合[あ]う|im Gleichgewicht sein, zusammenpassen|仕事[しごと]の 量[りょう]と 賃金[ちんぎん]が 釣[つ]り 合[あ]っていない。|Die Menge an Arbeit und der Lohn stehen nicht im Gleichgewicht zueinander.|Verb
鈍い|鈍[にぶ]い|stumpf, träge, langsam|彼[かれ]は 感覚[かんかく]が 鈍[にぶ]い。|Er hat stumpfe Sinne.|Adjektiv
鈍感|鈍感[どんかん]|unsensibel, begriffsstutzig|相[あい] 変[か]わらず 鈍感[どんかん]だね、 君[きみ]は。|Du bist unsensibel wie eh und je.|な-Adjektiv
谷|谷[たに]|Tal|私[わたし]の 人生[じんせい]、 山[やま]あり 谷[たに]あり。|In meinem Leben gibt es Höhen und Tiefen.|Nomen
余裕|余裕[よゆう]|Spielraum, Reserve, Gelassenheit|彼[かれ]は 新[あたら]しい 車[くるま]を 買[か]う 余裕[よゆう]がありません。|Er kann es sich nicht leisten, ein neues Auto zu kaufen.|Nomen
入浴|入浴[にゅうよく]|Baden|今日[きょう]はシャワーも 入浴[にゅうよく]も 控[ひか]えてください。|Duschen und Baden mögen Sie heute bitte unterlassen.|Nomen (mit する)
はえ|はえ|Fliege|ハエを 捕[つか]まえたよ。|Ich habe die Fliege gefangen.|Nomen
沿う|沿[そ]う|entlanglaufen, folgen|私[わたし]たちは 海岸[かいがん]に 沿[そ]って 歩[ある]いた。|Wir gingen am Strand entlang.|Verb
浜|浜[はま]|Strand|子供[こども]たちは 浜[はま]で 遊[あそ]ぶのが 大好[だいす]きです。|Kinder lieben es, am Strand zu spielen.|Nomen
浜辺|浜辺[はまべ]|Strand, Küste|子供[こども] 達[たち]は 浜辺[はまべ]で 遊[あそ]ぶのが 好[す]きだ。|Kinder spielen gerne am Strand.|Nomen
湾|湾[わん]|Bucht, Golf|湾[わん]にはたくさんのボートと 人[ひと]がいる。|Die Bucht ist voller Boote und Menschen.|Nomen
潜る|潜[もぐ]る|tauchen; hineinkriechen|深[ふか]く 潜[もぐ]れば 潜[もぐ]るほど、 水[みず]は 冷[つめ]たくなる。|Je tiefer man taucht, umso kälter wird das Wasser.|Verb
ばかばかしい|ばかばかしい|albern, lächerlich|ばかばかしいとしか 言[い]いようがない。|Man kann es nur absurd nennen.|Adjektiv
冷淡|冷淡[れいたん]|kalt, gleichgültig|彼女[かのじょ]は 私[わたし]に 冷淡[れいたん]だ。|Sie ist mir gegenüber kaltherzig.|な-Adjektiv
泥|泥[どろ]|Schlamm|トムの 手[て]は 泥[どろ]だらけだった。|Toms Hände waren ganz schmutzig.|Nomen
濁る|濁[にご]る|trüb werden|川[かわ]は 泥[どろ]で 濁[にご]っていた。|Der Fluss war vom Schlamm trübe.|Verb
湯飲み|湯飲[ゆの]み|Teebecher|壊[こわ]れた 湯飲[ゆの]みの 補充[ほじゅう]をした。|Ich habe die zerbrochenen Teeschalen ersetzt.|Nomen
湯気|湯気[ゆげ]|Dampf|薬缶[やかん]から 湯気[ゆげ]が 立[た]っている。|Der Wasserkessel dampft.|Nomen
はかり|はかり|Waage|荷物[にもつ]をはかりの 上[うえ]にのせてください。|Legen Sie das Gepäck bitte auf die Waage.|Nomen
漏れる|漏[も]れる|auslaufen, durchsickern|カーテンから 光[ひかり]が 漏[も]れる。|Es kommt Licht durch die Vorhänge.|Verb
漏らす|漏[も]らす|durchsickern lassen, verraten|彼[かれ]は 彼女[かのじょ]の 秘密[ひみつ]を 彼[かれ]の 友人[ゆうじん]に 漏[も]らした。|Er hat seinen Freunden ihr Geheimnis verraten.|Verb
漏る|漏[も]る|undicht sein, lecken|雨[あめ]が 降[ふ]ると 必[かなら]ず 屋根[やね]から 雨水[あまみず]が 漏[も]る。|Immer wenn es regnet, tropft Regenwasser durch das Dach.|Verb
濡らす|濡[ぬ]らす|nass machen|彼[かれ]はタオルを 水[みず]で 濡[ぬ]らした。|Er befeuchtete sein Handtuch mit Wasser.|Verb
溝|溝[みぞ]|Graben, Rille|彼[かれ]はジャンプして 溝[みぞ]を 越[こ]えた。|Er ist über einen Graben gesprungen.|Nomen
はしご|はしご|Leiter|はしごを 登[のぼ]るときは 注意[ちゅうい]しなさい。|Pass auf, wenn du die Leiter hochgehst.|Nomen
吐く|吐[は]く|ausspucken, erbrechen; ausstoßen|彼[かれ]は 飲[の]んだ 分[ぶん]だけ 吐[は]いてしまった。|Er erbrach nur so viel wie er getrunken hatte.|Verb
嘆く|嘆[なげ]く|klagen, jammern|こぼれたミルクを 嘆[なげ]いても 無駄[むだ]だ。|Was geschehen ist, ist geschehen.|Verb
虫歯|虫歯[むしば]|kariöser Zahn, Karies|どうも 虫歯[むしば]のようです。|Ich glaube, ich habe einen fauligen Zahn.|Nomen
虫|虫[むし]|Insekt, Käfer, Wurm|彼女[かのじょ]は 虫[むし]が 大嫌[だいきら]いだ。|Sie hasst Insekten.|Nomen
忠実|忠実[ちゅうじつ]|treu, getreu|犬[いぬ]は 忠実[ちゅうじつ]な 動物[どうぶつ]です。|Hunde sind treue Tiere.|な-Adjektiv
忠告|忠告[ちゅうこく]|Rat, Ermahnung|ご 忠告[ちゅうこく]に 従[したが]います。|Ich werde Ihren Rat befolgen.|Nomen (mit する)
はだし|はだし|barfuß|子供[こども]がはだしで 走[はし]っています。|Die Kinder laufen barfuß.|Nomen
恵まれる|恵[めぐ]まれる|gesegnet sein, begünstigt sein|彼女[かのじょ]はよい 息子[むすこ]たちに 恵[めぐ]まれている。|Sie ist mit guten Söhnen gesegnet.|Verb
道徳|道徳[どうとく]|Moral, Ethik|彼[かれ]は 不[ふ] 道徳[どうとく]な 男[おとこ]だ。|Er ist ein unmoralischer Mann.|Nomen
直径|直径[ちょっけい]|Durchmesser|円周[えんしゅう]から 直径[ちょっけい]を 求[もと]めることは 可能[かのう]ですか？|Kann man aus dem Kreisumfang den Durchmesser bestimmen?|Nomen
半径|半径[はんけい]|Radius|この 円[えん]の 半径[はんけい]は 五[ご]センチです。|Der Radius dieses Kreises beträgt fünf Zentimeter.|Nomen
丼|丼[どんぶり]|große Schale; Reisschalengericht|彼[かれ]はご 飯[はん]を 丼[どんぶり]で 食[た]べたよ。|Er hat den Reis aus einer großen Schale gegessen.|Nomen
バツ|バツ|Kreuz (Zeichen für falsch)|間違[まちが]った 答[こた]えにバツを 付[つ]けました。|Ich habe die falschen Antworten mit einem Kreuz markiert.|Nomen
豆|豆[まめ]|Bohne, Erbse|君[きみ]に 豆[まめ]を 煮[に]てあげよう。|Ich koche dir Bohnen.|Nomen
粒|粒[つぶ]|Korn, Tropfen|ご 飯[はん]の 一[いち] 粒[つぶ]たりとも 無駄[むだ]にするな！|Verschwende nicht ein einziges Reiskorn!|Nomen
麦|麦[むぎ]|Getreide (Weizen, Gerste)|ライ 麦[むぎ]パンは、ライ 麦[むぎ]の 粉[こな]を 使[つか]って 作[つく]るパンです。|Roggenbrot ist Brot, das aus Roggenmehl hergestellt wird.|Nomen
田畑|田畑[たはた]|Felder und Reisfelder|村[むら]の 周[まわ]りには 田畑[たはた]が 広[ひろ]がっています。|Rund um das Dorf erstrecken sich Felder und Reisfelder.|Nomen
灯油|灯油[とうゆ]|Kerosin, Heizöl|灯油[とうゆ]の 販売[はんばい] 車[しゃ]が 来[き]た。|Der Verkaufswagen für Heizöl ist gekommen.|Nomen
はねる|はねる|anfahren; springen, spritzen|もう 少[すこ]しでトラックにはねられるところだった。|Ich wäre fast von einem LKW überfahren worden.|Verb
電灯|電灯[でんとう]|elektrisches Licht, Lampe|どうか 電灯[でんとう]を 消[け]して 下[くだ]さい。|Schalte bitte das Licht aus.|Nomen
炎|炎[ほのお]|Flamme|火山[かざん]が 炎[ほのお]と 煙[けむり]を 噴[ふ]き 出[だ]している。|Der Vulkan spuckt Flammen und Rauch.|Nomen
皮肉|皮肉[ひにく]|Ironie, Sarkasmus|彼女[かのじょ]は 彼[かれ]の 皮肉[ひにく]に 気付[きづ]くことだろう。|Sie wird doch wohl seine Ironie bemerken.|な-Adjektiv
皮膚|皮膚[ひふ]|Haut|私[わたし]の 皮膚[ひふ]は 日焼[ひや]けしやすい。|Meine Haut wird in der Sonne schnell braun.|Nomen
臭い|臭[にお]い|Geruch, Gestank|台所[だいどころ]から 変[へん]な 臭[にお]いがします。|Aus der Küche kommt ein seltsamer Geruch.|Nomen
生臭い|生臭[なまぐさ]い|nach rohem Fisch riechend|まな 板[いた]が 生臭[なまぐさ]いです。|Das Schneidebrett riecht nach Fisch.|Adjektiv
はれる|はれる|anschwellen|泣[な]くと、 目[め]が 腫[は]れるのが 嫌[いや]なのよ。|Ich mag’s nicht, dass beim Weinen meine Augen anschwellen.|Verb
臭う|臭[にお]う|riechen, stinken|この 辺[へん] 臭[にお]うんだけど。|Hier in der Gegend stinkt’s.|Verb
面倒臭い|面倒臭[めんどうくさ]い|lästig, mühsam|面倒[めんどう] 臭[くさ]いよ。|Das ist mir zu lästig.|Adjektiv
匂う|匂[にお]う|duften, riechen|春[はる]になれば 花[はな]が 甘[あま]く 咲[さ]き 匂[にお]う。|Wenn es Frühling wird, blühen die Blumen und duften süß.|Verb
同居|同居[どうきょ]|Zusammenwohnen|キムはケンと 同居[どうきょ]している。|Kim lebt zusammen mit Ken.|Nomen (mit する)
掘る|掘[ほ]る|graben|彼[かれ]らは 穴[あな]を 掘[ほ]っている。|Sie graben ein Loch.|Verb
ひく|ひく|überfahren|猫[ねこ]が 車[くるま]にひかれました。|Eine Katze wurde von einem Auto überfahren.|Verb
塀|塀[へい]|Zaun, Mauer|彼[かれ]は 塀[へい]に 梯子[はしご]を 掛[か]けた。|Er lehnte die Leiter an den Zaun.|Nomen
大層|大層[たいそう]|sehr, außerordentlich|ロシア 語[ご]は 大層[たいそう] 学[まな]びにくい。|Russisch ist überaus schwer zu lernen.|Adverb
履歴|履歴[りれき]|Verlauf, Werdegang|彼[かれ]の 履歴[りれき]についてはほとんど 知[し]られていない。|Über seinen Werdegang ist fast nichts bekannt.|Nomen
履歴書|履歴書[りれきしょ]|Lebenslauf|履歴[りれき] 書[しょ]はこの 封筒[ふうとう]に 入[い]れて 人事部[じんじぶ]に 提出[ていしゅつ]して 下[くだ]さい。|Bitte stecken Sie den Lebenslauf in diesen Briefumschlag und geben Sie ihn in der Personalabteilung ab.|Nomen
履物|履物[はきもの]|Schuhwerk|玄関[げんかん]で 履物[はきもの]を 脱[ぬ]いでください。|Ziehen Sie im Eingang bitte Ihre Schuhe aus.|Nomen
ヒント|ヒント|Hinweis, Tipp|彼[かれ]は 私[わたし]にヒントをくれた。|Er gab mir einen Hinweis.|Nomen
戸棚|戸棚[とだな]|Schrank|私[わたし]は 戸棚[とだな]を 覗[のぞ]いた。|Ich warf einen Blick in den Schrank.|Nomen
扉|扉[とびら]|Tür, Torflügel|電車[でんしゃ]の 扉[とびら]に 足[あし]を 挟[はさ]まれたんだよ。|Mein Fuß wurde in der Zugtür eingeklemmt.|Nomen
羽根|羽根[はね]|Feder|この 扇風機[せんぷうき]の 羽根[はね]、 折[お]れてるよ。|Der Flügel dieses Ventilators ist gebrochen.|Nomen
翌日|翌日[よくじつ]|der folgende Tag|私[わたし]たちは 翌日[よくじつ] 日光[にっこう]を 訪[おとず]れた。|Wir besuchten Nikko am nächsten Tag.|Nomen
翌朝|翌朝[よくあさ]|der folgende Morgen|翌朝[よくあさ]になって 初[はじ]めて 大陸[たいりく]が 見[み]えた。|Erst am nächsten Morgen war Land in Sicht.|Nomen
翌年|翌年[よくねん]|das folgende Jahr|翌年[よくねん]、 第一次[だいいちじ] 世界大戦[せかいたいせん]が 始[はじ]まりました。|Im folgenden Jahr brach der Erste Weltkrieg aus.|Nomen
ファックス|ファックス|Fax|ファックスの 送[おく]り 方[かた]が 分[わ]からない。|Ich weiß nicht, wie man ein Fax schickt.|Nomen
群れ|群[む]れ|Schar, Herde, Schwarm|鳥[とり]の 群[む]れが 空[そら] 高[たか]く 飛[と]んでいるのを 見[み]ました。|Ich habe einen Schwarm Vögel hoch am Himmel fliegen gesehen.|Nomen
殴る|殴[なぐ]る|schlagen, prügeln|お 前[まえ]の 顔[かお]を 殴[なぐ]りたい。|Ich will dir in die Fresse schlagen.|Verb
要旨|要旨[ようし]|Kernaussage, Zusammenfassung|以下[いか]は 大統領[だいとうりょう]の 演説[えんぜつ]の 要旨[ようし]だ。|Das Folgende ist eine Zusammenfassung der Ansprache des Präsidenten.|Nomen
肌|肌[はだ]|Haut|肌[はだ]が 乾燥[かんそう]しています。|Ich habe trockene Haut.|Nomen
肌着|肌着[はだぎ]|Unterwäsche|彼[かれ]は 肌着[はだぎ]を 裏返[うらがえ]しに 着[き]た。|Er trug sein Unterhemd verkehrt herum.|Nomen
ふもと|ふもと|Fuß eines Berges|彼[かれ]の 家[いえ]は 富士山[ふじさん]の 麓[ふもと]にある。|Sein Haus steht am Fuße des Fuji.|Nomen
肌色|肌色[はだいろ]|Hautfarbe, hautfarben|肌色[はだいろ]のストッキングを 買[か]いました。|Ich habe hautfarbene Strumpfhosen gekauft.|Nomen
腸|腸[ちょう]|Darm|腸[ちょう]の 調子[ちょうし]が 悪[わる]かったので 学校[がっこう]を 休[やす]んだ。|Weil mein Darm Probleme machte, bin ich nicht zur Schule gegangen.|Nomen
大胆|大胆[だいたん]|kühn, gewagt|その 人達[ひとたち]は 大胆[だいたん]な 発想[はっそう]をすべきだ。|Die Leute sollten kühne Ideen haben.|な-Adjektiv
幕|幕[まく]|Vorhang (Bühne)|幕[まく]があがった。|Der Vorhang ging auf.|Nomen
夕暮れ|夕暮[ゆうぐ]れ|Abenddämmerung|その 校舎[こうしゃ]は 夕暮[ゆうぐ]れの 中[なか]にきらきらと 輝[かがや]いていた。|Das Schulgebäude erstrahlte gleißend in der Abenddämmerung.|Nomen
フルーツ|フルーツ|Obst, Frucht|フルーツジュースはいかがですか？|Möchtest du Fruchtsaft?|Nomen
墓|墓[はか]|Grab|彼[かれ]らは 墓[はか]を 掘[ほ]った。|Sie hoben ein Grab aus.|Nomen
墓地|墓地[ぼち]|Friedhof|若[わか]い 頃[ころ] 墓地[ぼち]をよく 歩[ある]いたものだ。|In jungen Jahren bin ich oft über den Friedhof gegangen.|Nomen
墓参り|墓参[はかまい]り|Grabbesuch|私[わたし]は 父[ちち]の 墓参[はかまい]りをした。|Ich habe das Grab meines Vaters besucht.|Nomen (mit する)
芽|芽[め]|Keim, Spross|種[たね]が 芽[め]を 出[だ]すには 空気[くうき]と 水[みず]が 必要[ひつよう]である。|Um zu keimen, brauchen Samen Luft und Wasser.|Nomen
葬式|葬式[そうしき]|Beerdigung, Trauerfeier|彼[かれ]の 葬式[そうしき]には 出[で]なかった。|Ich war nicht auf seiner Beerdigung.|Nomen
へそ|へそ|Bauchnabel|コアラにはどうしておへそがないの？|Warum haben Koalas keinen Bauchnabel?|Nomen
礼儀|礼儀[れいぎ]|Höflichkeit, Anstand|礼儀[れいぎ]は 今日[きょう]、 以前[いぜん]ほど 守[まも]られていない。|Höflichkeit wird heutzutage nicht mehr so geschätzt wie früher.|Nomen
憎む|憎[にく]む|hassen|未[いま]だにあなたのことを 憎[にく]んでいます。|Ich hasse dich immer noch.|Verb
憎しみ|憎[にく]しみ|Hass|恋[こい]は 盲目[もうもく]。 憎[にく]しみもまたしかり。|Liebe ist blind und so auch der Hass.|Nomen
憎らしい|憎[にく]らしい|abscheulich, ärgerlich|トムのことが 憎[にく]らしいけど、でも 愛[あい]してるの。|Ich hasse Tom, aber ich liebe ihn auch.|Adjektiv
憎い|憎[にく]い|verhasst|憎[にく]い 憎[にく]いは 可愛[かわい]いの 裏[うら]。|Das Hässliche verbirgt sich hinter dem Süßen.|Adjektiv
仏|仏[ほとけ]|Buddha|寺[てら]で 仏[ほとけ]に 手[て]を 合[あ]わせました。|Im Tempel legte ich vor dem Buddha die Hände zusammen.|Nomen
べたべた|べたべた|klebrig; aneinanderklebend (Paar)|彼[かれ]は 壁[かべ] 一面[いちめん]にポスターをべたべた 張[は]った。|Er klebte die ganze Wand dicht an dicht mit Postern zu.|Adjektiv
仏教|仏教[ぶっきょう]|Buddhismus|彼[かれ]は 仏教[ぶっきょう]からキリスト 教[きょう]へ 改宗[かいしゅう]した。|Er konvertierte vom Buddhismus zum Christentum.|Nomen
坊さん|坊[ぼう]さん|buddhistischer Mönch|お 坊[ぼう]さんが 突然[とつぜん] 大声[おおごえ]で 笑[わら]い 出[だ]し、 厳粛[げんしゅく]な 雰囲気[ふんいき]を 台無[だいな]しにした。|Plötzlich brach der Mönch in lautes Gelächter aus und verdarb so die ernste Atmosphäre.|Nomen
竹|竹[たけ]|Bambus|庭[にわ]に 竹[たけ]が 生[は]えている。|Im Garten wächst Bambus.|Nomen
筆者|筆者[ひっしゃ]|Verfasser(in)|筆者[ひっしゃ]が 何[なに]を 言[い]おうとしているのかわからない。|Ich verstehe nicht, was der Verfasser sagen will.|Nomen
筆記試験|筆記試験[ひっきしけん]|schriftliche Prüfung|学生[がくせい]たちはアンフェアな 筆記[ひっき] 試験[しけん]に 抗議[こうぎ]した。|Die Studenten protestierten gegen die unfaire Klausur.|Nomen
ほうき|ほうき|Besen|彼女[かのじょ]はほうきで 部屋[へや]を 掃除[そうじ]する。|Sie fegt das Zimmer mit einem Besen.|Nomen
筆記用具|筆記用具[ひっきようぐ]|Schreibzeug|ペンや 鉛筆[えんぴつ]は 筆記[ひっき] 用[よう] 具[ぐ]である。|Stifte und Bleistifte sind Schreibgeräte.|Nomen
筆|筆[ふで]|Pinsel (zum Schreiben)|彼女[かのじょ]は 筆[ふで] 不精[ぶしょう]だ。|Sie ist eine schlechte Korrespondentin.|Nomen
笛|笛[ふえ]|Flöte, Pfeife|警官[けいかん]は 笛[ふえ]を 吹[ふ]いて 車[くるま]に 止[と]まるよう 合図[あいず]した。|Der Polizist blies die Trillerpfeife und gab dem Auto ein Zeichen, anzuhalten.|Nomen
名簿|名簿[めいぼ]|Namensliste|名簿[めいぼ]に 私[わたし]の 名前[なまえ]も 追加[ついか]してください。|Bitte setz meinen Namen auch auf die Liste.|Nomen
分裂|分裂[ぶんれつ]|Spaltung|イングランドはかつて 内乱[ないらん]で 分裂[ぶんれつ]したことがあった。|England war einst von einem Bürgerkrieg zerrissen.|Nomen (mit する)
ポスター|ポスター|Plakat, Poster|ポスターは 即刻[そっこく] 壁[かべ]から 撤去[てっきょ]された。|Das Poster wurde sofort von der Wand entfernt.|Nomen
布|布[ぬの]|Stoff, Tuch|この 布[ぬの]はあれよりも 質[しつ]がいいですよ。|Dieser Stoff ist qualitativ besser als jener.|Nomen
包丁|包丁[ほうちょう]|Küchenmesser|私[わたし]の 妻[つま]は、 包丁[ほうちょう]を 使[つか]っているときに、 指[ゆび]を 切[き]った。|Meine Frau hat sich beim Gebrauch eines Küchenmessers in den Finger geschnitten.|Nomen
包帯|包帯[ほうたい]|Verband, Binde|医者[いしゃ]は 私[わたし]の 傷[きず]に 包帯[ほうたい]をした。|Der Arzt verband meine Wunde.|Nomen (mit する)
包み|包[つつ]み|Paket, Päckchen|包[つつ]みを 開[あ]けて 下[くだ]さい。|Öffnen Sie bitte das Paket!|Nomen
包み紙|包[つつ]み 紙[がみ]|Einwickelpapier, Geschenkpapier|包[つつ]み 紙[がみ]は 食[た]べちゃダメよ。|Das Einwickelpapier darfst du nicht essen.|Nomen
抱く|抱[だ]く|in den Armen halten|母親[ははおや]が 赤[あか]ちゃんを 抱[だ]いています。|Die Mutter hält das Baby im Arm.|Verb
ほどく|ほどく|aufbinden, lösen|私[わたし]は 靴[くつ]の 紐[ひも]をほどいた。|Ich habe meine Schnürsenkel aufgebunden.|Verb
文句|文句[もんく]|Beschwerde, Nörgelei|彼[かれ]は 部屋[へや]が 蒸[む]し 暑[あつ]すぎると 文句[もんく]を 言[い]った。|Er beschwerte sich, dass es in dem Zimmer zu schwül sei.|Nomen
中旬|中旬[ちゅうじゅん]|mittleres Monatsdrittel|来月[らいげつ]の 中旬[ちゅうじゅん]に 帰国[きこく]します。|Mitte nächsten Monats kehre ich in mein Land zurück.|Nomen
平凡|平凡[へいぼん]|gewöhnlich, durchschnittlich|彼[かれ]はまったく 平凡[へいぼん]な 男[おとこ]だ。|Er ist ein ganz gewöhnlicher Mann.|な-Adjektiv
通帳|通帳[つうちょう]|Sparbuch|貯金[ちょきん] 通帳[つうちょう]に 残[のこ]っていた 金[かね]で 利子[りし]がついた。|Zu dem auf meinem Sparbuch übriggebliebenen Geld kamen Zinsen hinzu.|Nomen
妊娠|妊娠[にんしん]|Schwangerschaft|彼女[かのじょ]は 妊娠[にんしん]している。|Sie ist schwanger.|Nomen (mit する)
ほほ|ほほ|Wange|彼女[かのじょ]のほほは 赤[あか]くなりました。|Ihre Wangen wurden rot.|Nomen
同姓|同姓[どうせい]|gleicher Familienname|私[わたし]は 自分[じぶん]と 同姓[どうせい] 同名[どうめい]の 女性[じょせい]を 知[し]っている。|Ich kenne eine Frau, die den gleichen Vor- und Nachnamen wie ich hat.|Nomen
嫁|嫁[よめ]|Braut, Schwiegertochter|あなたのお 嫁[よめ]さんになりたかった。|Ich wäre gerne deine Frau geworden.|Nomen
花嫁|花嫁[はなよめ]|Braut|花嫁[はなよめ]はたいへん 美[うつく]しく 見[み]えた。|Die Braut sah sehr hübsch aus.|Nomen
花婿|花婿[はなむこ]|Bräutigam|花婿[はなむこ]はとてもうれしそうでした。|Der Bräutigam sah sehr glücklich aus.|Nomen
幼児|幼児[ようじ]|Kleinkind|幼児[ようじ]は 無料[むりょう]で 入[い]れます。|Kleinkinder haben freien Eintritt.|Nomen
ほほえむ|ほほえむ|lächeln|彼女[かのじょ]は 私[わたし]に 向[む]かって、 恥[は]ずかしそうにほほえんだ。|Sie lächelte mir schüchtern zu.|Verb
眠たい|眠[ねむ]たい|schläfrig|眠[ねむ]たいときに 勉強[べんきょう]するのは 時間[じかん]の 無駄[むだ]だ。|In müdem Zustand zu lernen ist Zeitverschwendung.|Adjektiv
眠り|眠[ねむ]り|Schlaf|彼[かれ]は 深[ふか]い 眠[ねむ]りに 落[お]ちた。|Er sank in einen tiefen Schlaf.|Nomen
眺める|眺[なが]める|betrachten, hinausschauen|何時間[なんじかん]も 海[うみ]を 眺[なが]めた。|Ich betrachtete stundenlang das Meer.|Verb
眺め|眺[なが]め|Aussicht, Ausblick|なんて 美[うつく]しい 眺[なが]めでしょう。|Welch schöner Ausblick!|Nomen
同封|同封[どうふう]|Beilegen (in einem Brief)|ご 要望[ようぼう]に 従[したが]って 私[わたし]の 写真[しゃしん]を 同封[どうふう]します。|Wie gewünscht lege ich ein Foto von mir bei.|Nomen (mit する)
封|封[ふう]|Siegel, Verschluss|封[ふう]も 開[あ]けずに 送[おく]り 返[かえ]してきやがった。|Sie hat es zurückgeschickt, ohne auch nur das Siegel zu öffnen.|Nomen
まく|まく|säen, streuen|畑[はたけ]に 種[しゅ]をまく 季節[きせつ]です。|Es ist die Jahreszeit, in der man auf dem Feld sät.|Verb
呼び掛ける|呼[よ]び 掛[か]ける|ansprechen, aufrufen|先生[せんせい]は 生徒[せいと]に 大[おお]きな 声[こえ]で 呼[よ]び 掛[か]けました。|Der Lehrer sprach die Schüler mit lauter Stimme an.|Verb
引っ掛かる|引[ひ]っ 掛[か]かる|hängen bleiben; hereinfallen|私[わたし]は 釘[くぎ]に 引[ひ]っ 掛[か]かって 上着[うわぎ]を 破[やぶ]ってしまった。|Ich habe mir meine Jacke an einem Nagel aufgerissen.|Verb
話し掛ける|話[はな]し 掛[か]ける|ansprechen|子供[こども]に 話[はな]し 掛[か]けたが 逃[に]げちゃった。|Ich habe das Kind angesprochen, aber letztendlich ist es leider weggelaufen.|Verb
通り掛かる|通[とお]り 掛[か]かる|zufällig vorbeikommen|ちょうどそこを 通[とお]り 掛[か]かった 人[ひと]が 助[たす]けてくれました。|Jemand, der gerade dort vorbeikam, hat mir geholfen.|Verb
引っ掛ける|引[ひ]っ 掛[か]ける|einhaken, hängen bleiben mit|その 選手[せんしゅ]はハードルに 足[あし]を 引[ひ]っ 掛[か]けたんだ。|Der Sportler blieb mit dem Fuß an der Hürde hängen.|Verb
まとめ|まとめ|Zusammenfassung|論文[ろんぶん]のまとめを 書[か]いています。|Ich schreibe die Zusammenfassung der Abhandlung.|Nomen
寄り掛かる|寄[よ]り 掛[か]かる|sich anlehnen|トムはメアリーの 肩[かた]に 寄[よ]り 掛[か]かった。|Tom lehnte sich an Marys Schulter.|Verb
措置|措置[そち]|Maßnahme|政府[せいふ]はインフレに 対[たい]するために 強硬[きょうこう]な 措置[そち]をとった。|Die Regierung ergriff entschlossene Maßnahmen gegen die Inflation.|Nomen (mit する)
拝見|拝見[はいけん]|ansehen, lesen (bescheiden)|切符[きっぷ]を 拝見[はいけん]いたします。|Ich würde gerne Ihre Fahrkarten sehen.|Nomen (mit する)
控える|控[ひか]える|sich zurückhalten, einschränken; notieren|甘[あま]い 飲[の]み 物[もの]を 控[ひか]えてください。|Halten Sie sich bei süßen Getränken zurück!|Verb
控え室|控[ひか]え 室[しつ]|Warteraum, Aufenthaltsraum|ここはお 客[きゃく] 様[さま] 用[よう]の 控[ひか]え 室[しつ]です。|Das ist der Warteraum für Gäste.|Nomen
まね|まね|Nachahmung|子供[こども]じみたまねはよしなさい。|Sei nicht so kindisch.|Nomen (mit する)
握り締める|握[にぎ]り 締[し]める|fest umklammern|彼女[かのじょ]はため 息[いき]をついて 両手[りょうて]をしっかり 握[にぎ]り 締[し]めた。|Sie seufzte und presste beide Hände fest zusammen.|Verb
揃う|揃[そろ]う|vollzählig sein, beisammen sein|みんな 揃[そろ]って 海[うみ]に 飛[と]び 込[こ]んだ。|Alle sprangen gemeinsam ins Meer.|Verb
揃える|揃[そろ]える|vervollständigen, gleichmäßig ausrichten|基本的[きほんてき]な 道具[どうぐ]を 揃[そろ]えるだけで 十万[じゅうまん] 超[こ]える。|Schon die grundlegende Ausrüstung zusammenzustellen kostet über hunderttausend.|Verb
出迎え|出迎[でむか]え|Abholung, Empfang|彼女[かのじょ]は 私[わたし]に 駅[えき]で 出迎[でむか]えるように 頼[たの]みました。|Sie bat mich, sie am Bahnhof abzuholen.|Nomen
迎え|迎[むか]え|Abholen|私[わたし]は 駅[えき]に 彼[かれ]を 迎[むか]えに 行[い]きます。|Ich werde ihn am Bahnhof abholen.|Nomen
まねる|まねる|nachahmen|オウムは 人[ひと]の 声[こえ]を 真似[まね]ることができる。|Papageien können menschliche Stimmen nachahmen.|Verb
遂げる|遂[と]げる|vollbringen, erreichen|科学[かがく]は 今世紀[こんせいき]になって 急速[きゅうそく]な 進歩[しんぽ]を 遂[と]げた。|Die Wissenschaft hat in diesem Jahrhundert rasche Fortschritte gemacht.|Verb
巡る|巡[めぐ]る|umhergehen, bereisen; kreisen um|お 城[しろ]を 巡[めぐ]るのが 趣味[しゅみ]です。|Mein Hobby ist es, Burgen zu besichtigen.|Verb
待遇|待遇[たいぐう]|Behandlung, Arbeitsbedingungen|彼[かれ]は 従業員[じゅうぎょういん]によい 待遇[たいぐう]をしている。|Er behandelt seine Angestellten gut.|Nomen
俳句|俳句[はいく]|Haiku (Kurzgedicht)|俳句[はいく]は 季節[きせつ]と 関連[かんれん]が 深[ふか]い。|Haikus haben einen starken Bezug zu den Jahreszeiten.|Nomen
俳優|俳優[はいゆう]|Schauspieler(in)|彼[かれ]は 有名[ゆうめい]な 俳優[はいゆう]になりました。|Er ist ein berühmter Schauspieler geworden.|Nomen
敏感|敏感[びんかん]|empfindlich, sensibel|目[め]が 光[ひかり]に 対[たい]してすごく 敏感[びんかん]なのです。|Meine Augen sind sehr lichtempfindlich.|な-Adjektiv
まぶた|まぶた|Augenlid|今朝[けさ] 目[め]が 覚[さ]めたら、まぶたがくっついて 開[ひら]かなかったのですか？|Waren Ihre Augen heute Morgen verklebt, als Sie aufgewacht sind?|Nomen
倣う|倣[なら]う|nachahmen, sich richten nach|先生[せんせい]の 書[か]き 方[かた]に 倣[なら]って 字[じ]を 書[か]きました。|Ich habe die Schriftzeichen nach dem Vorbild des Lehrers geschrieben.|Verb
寮|寮[りょう]|Wohnheim|私[わたし]の 大学[だいがく]には 寮[りょう]があります。|An meiner Uni gibt es Wohnheime.|Nomen
偏見|偏見[へんけん]|Vorurteil|外国人労働者[がいこくじんろうどうしゃ]に 偏見[へんけん]は 持[も]っていません。|Ich habe keine Vorurteile gegen ausländische Arbeiter.|Nomen
何遍|何遍[なんべん]|wie viele Male; viele Male|この 映画[えいが]は 何遍[なんべん]も 見[み]ました。|Diesen Film habe ich viele Male gesehen.|Nomen
宣伝|宣伝[せんでん]|Werbung|彼[かれ]らはテレビで 新製品[しんせいひん]を 宣伝[せんでん]した。|Sie warben im Fernsehen für das neue Produkt.|Nomen (mit する)
まれ|まれ|selten|彼女[かのじょ]がひとりで 映画[えいが]に 行[い]くことは、たとえあってもまれである。|Sie geht selten, wenn überhaupt, alleine ins Kino.|Adjektiv
展覧会|展覧会[てんらんかい]|Ausstellung|その 展覧[てんらん] 会[かい]は 今[いま] 開催中[かいさいちゅう]です。|Die Ausstellung ist jetzt eröffnet.|Nomen
総理大臣|総理大臣[そうりだいじん]|Premierminister(in)|総理[そうり] 大臣[だいじん]が 昨日[きのう] 辞職[じしょく]した。|Der Premierminister ist gestern zurückgetreten.|Nomen
大臣|大臣[だいじん]|Minister(in)|彼[かれ]は 大臣[だいじん]に 出世[しゅっせ]した。|Er stieg zum Minister auf.|Nomen
臨む|臨[のぞ]む|teilnehmen an, gegenübertreten; liegen an|絶対[ぜったい]に 負[ま]けないという 強[つよ]い 気持[きも]ちで 試合[しあい]に 臨[のぞ]んだ。|Ich ging mit dem festen Willen in das Spiel, auf keinen Fall zu verlieren.|Verb
臨時|臨時[りんじ]|vorübergehend, außerplanmäßig|番組[ばんぐみ]の 途中[とちゅう]ですが、ここで 臨時[りんじ]ニュースをお 伝[つた]えします。|Wir unterbrechen diese Sendung für eine sehr wichtige Meldung.|Nomen
ミスプリント|ミスプリント|Druckfehler|ミスプリントのないような 本[ほん]はほとんどない。|Es gibt kaum Bücher ohne Druckfehler.|Nomen
内閣|内閣[ないかく]|Kabinett (Regierung)|新[しん] 内閣[ないかく]についてどう 思[おも]いますか。|Was halten Sie vom neuen Kabinett?|Nomen
闘う|闘[たたか]う|kämpfen, ringen mit|トムはガンと 闘[たたか]っている。|Tom kämpft gegen den Krebs.|Verb
派閥|派閥[はばつ]|Clique, Fraktion|この 会社[かいしゃ]には 派閥[はばつ]があります。|In dieser Firma gibt es Cliquen.|Nomen
懐かしい|懐[なつ]かしい|wehmütig stimmend, lieb und vertraut|この 歌[うた]、 懐[なつ]かしいな。|Ach, dieses Lied stimmt mich ganz wehmütig.|Adjektiv
噴火|噴火[ふんか]|Vulkanausbruch|その 火山[かざん]は 突然[とつぜん] 噴火[ふんか]し、 多[おお]くの 人[ひと]が 亡[な]くなった。|Der Vulkan brach plötzlich aus, was viele Menschen das Leben kostete.|Nomen (mit する)
噴水|噴水[ふんすい]|Springbrunnen|駅[えき]の 前[まえ]に 噴水[ふんすい]があります。|Vor dem Bahnhof gibt es einen Springbrunnen.|Nomen
むく|むく|schälen|授業[じゅぎょう]をしながらジャガイモの 皮[かわ]をむく 先生[せんせい]もいる。|Einige Lehrer schälen Kartoffeln während des Unterrichtens.|Verb
不愉快|不愉快[ふゆかい]|unangenehm, verstimmt|これ 以上[いじょう]に 不[ふ] 愉快[ゆかい]なことはない。|Es gibt nichts Unangenehmeres.|な-Adjektiv
愉快|愉快[ゆかい]|vergnüglich, lustig|なんて 愉快[ゆかい]な 話[はなし]でしょう！|Was für eine fröhliche Geschichte!|な-Adjektiv
漫画|漫画[まんが]|Manga, Comic|人生[じんせい]で 大切[たいせつ]なことはすべて 漫画[まんが]から 学[まな]んだ。|Alle wichtigen Dinge über das Leben habe ich aus Mangas gelernt.|Nomen
電卓|電卓[でんたく]|Taschenrechner|電卓[でんたく]は 使[つか]ってもいいですか？|Dürfen wir einen Taschenrechner benutzen?|Nomen
雄大|雄大[ゆうだい]|großartig, majestätisch|それは 実[じつ]に 雄大[ゆうだい]な 眺[なが]めだ。|Das ist ein wirklich großartiger Anblick.|Adjektiv
めくる|めくる|umblättern, umdrehen|本[ほん]のページをめくる。|Ich blättere die Buchseite um.|Verb
雌|雌[めす]|Weibchen (Tier)|ココは 雌[めす]のゴリラである。|Koko ist ein weiblicher Gorilla.|Nomen
幼稚|幼稚[ようち]|kindisch, unreif|誰[だれ]だよ、こんな 幼稚[ようち]な 記事[きじ] 書[か]いたの。|Wer war es, der diesen kindischen Beitrag verfasst hat?|な-Adjektiv
名称|名称[めいしょう]|Bezeichnung, Name|ここの 正式[せいしき] 名称[めいしょう]は 何[なん]ですか？|Wie lautet die offizielle Bezeichnung dieses Ortes?|Nomen
秩序|秩序[ちつじょ]|Ordnung|私[わたし]たちは 法[ほう]と 秩序[ちつじょ]を 維持[いじ]しなければならない。|Wir müssen Recht und Ordnung wahren.|Nomen
物陰|物陰[ものかげ]|Versteck, im Schatten von etwas|二人[ふたり]は 物陰[ものかげ]に 隠[かく]れた。|Die beiden versteckten sich im Verborgenen.|Nomen
めでたい|めでたい|erfreulich, glückverheißend|明[あ]けましておめでとう。|Glückliches neues Jahr!|Adjektiv
魅力|魅力[みりょく]|Reiz, Anziehungskraft|彼女[かのじょ]の 魅力[みりょく]は 言葉[ことば]では 表現[ひょうげん]できない。|Ihr Liebreiz lässt sich nicht in Worte fassen.|Nomen
醜い|醜[みにく]い|hässlich|嫉妬[しっと]は 人間[にんげん]の 一番[いちばん] 醜[みにく]い 感情[かんじょう]だと 思[おも]う。|Den Neid halte ich für das hässlichste menschliche Gefühl.|Adjektiv
悪賢い|悪賢[わるがしこ]い|gerissen, hinterlistig|あの 政治家[せいじか]は 悪賢[わるがしこ]い。|Dieser Politiker ist gerissen.|Adjektiv
頂上|頂上[ちょうじょう]|Gipfel|私[わたし] 達[たち]は 富士山[ふじさん]の 頂上[ちょうじょう]まで 登[のぼ]った。|Wir erklommen den Gipfel des Berges Fuji.|Nomen
近頃|近頃[ちかごろ]|in letzter Zeit|この 鶏[にわとり]は 近頃[ちかごろ]ちっとも 卵[たまご]を 産[う]まない。|Diese Henne legt in letzter Zeit überhaupt keine Eier.|Nomen
矛盾|矛盾[むじゅん]|Widerspruch|それは 矛盾[むじゅん]だらけだ。|Das ist voller Widersprüche.|Nomen (mit する)
もうかる|もうかる|Gewinn abwerfen, sich lohnen|何[なに]も 賭[か]けなければ、 何[なに]ももうからない。|Wer nichts einsetzt, verdient auch nichts.|Verb
倉庫|倉庫[そうこ]|Lager, Lagerhaus|倉庫[そうこ]のドアの 鍵[かぎ]をかけ 忘[わす]れたのは 誰[だれ]なの？|Wer hat vergessen, das Lager abzuschließen?|Nomen
創立|創立[そうりつ]|Gründung|学校[がっこう]の 創立[そうりつ] 百[ひゃく] 年[ねん]を 祝[いわ]った。|Wir feierten das hundertjährige Bestehen der Schule.|Nomen (mit する)
罰金|罰金[ばっきん]|Geldstrafe|駐車違反[ちゅうしゃいはん]の 罰金[ばっきん]は 高[たか]い。|Das Bußgeld für widerrechtliches Parken ist hoch.|Nomen
罰する|罰[ばっ]する|bestrafen|彼[かれ]は 罰[ばっ]せられるだろう。|Er wird bestimmt bestraft.|Verb
罰|罰[ばつ]|Strafe|僕[ぼく]は 罰[ばつ]を 受[う]けるだろう。|Ich werde wohl bestraft werden.|Nomen
もうけ|もうけ|Gewinn, Verdienst|もうけの 部分[ぶぶん]を 除[のぞ]いて 君[きみ]の 意見[いけん]に 賛成[さんせい]です。|Abgesehen vom Teil über den Gewinn stimme ich dir zu.|Nomen
老人|老人[ろうじん]|alter Mensch|昔[むかし]ある 村[むら]に 一人[ひとり]の 老人[ろうじん]が 住[す]んでいました。|Es war einmal ein alter Mann, der in einem Dorf lebte.|Nomen
煮る|煮[に]る|kochen, schmoren|煮[に]るなり 焼[や]くなり、 好[す]きにしてくれ。|Mach doch, was du willst!|Verb
煮える|煮[に]える|gar werden, kochen|タマネギはジャガイモよりはやく 煮[に]える。|Zwiebeln werden schneller gar als Kartoffeln.|Verb
蒸し暑い|蒸[む]し 暑[あつ]い|schwül|昨日[きのう]は 蒸[む]し 暑[あつ]かった？|War es gestern schwül?|Adjektiv
黙る|黙[だま]る|schweigen, verstummen|黙[だま]って 言[い]うことを 聞[き]け！|Schweig, und hör zu, was ich sage!|Verb
もしかしたら|もしかしたら|vielleicht, möglicherweise|もしかしたら 夕飯[ゆうはん]には 間[ま]に 合[あ]わないかも。|Ich schaffe es vielleicht nicht, rechtzeitig zum Abendessen dazusein.|Adverb
無駄|無駄[むだ]|nutzlos, Verschwendung|僕[ぼく]が 時間[じかん]を 無駄[むだ]にしてるって 思[おも]ってる？|Denkst du, dass ich unnütz meine Zeit verschwende?|な-Adjektiv
無駄遣い|無駄遣[むだづか]い|Geldverschwendung|私[わたし]はお 金[かね]を 無駄遣[むだづか]いするつもりはない。|Ich werde mein Geld nicht verschwenden.|Nomen (mit する)
沸騰|沸騰[ふっとう]|Sieden, Kochen|沸騰[ふっとう]している 湯[ゆ]に 塩[しお]を 入[い]れなさい。|Gib Salz in das kochende Wasser.|Nomen (mit する)
返却|返却[へんきゃく]|Rückgabe|本[ほん]を 返却[へんきゃく]しましたか。|Hast du die Bücher zurückgegeben?|Nomen (mit する)
庁|庁[ちょう]|Amt, Behörde|彼[かれ]の 公式[こうしき]の 肩書[かたが]きは 環境[かんきょう] 庁[ちょう] 長官[ちょうかん]です。|Sein offizieller Titel ist „Generaldirektor der nationalen Umweltbehörde“.|Nomen
もてる|もてる|beliebt sein (beim anderen Geschlecht)|トムが 正[ただ]しいのか 確信[かくしん]が 持[も]てない。|Ich bin mir nicht sicher, ob Tom recht hat.|Verb
都庁|都庁[とちょう]|Rathaus der Präfektur Tokio|「 都庁[とちょう] 舎[しゃ]でもらえますよ」と 係員[かかりいん]が 付[つ]け 加[くわ]えた。|"Sie können es bei der Stadtverwaltung bekommen.", fügte der Angestellte hinzu.|Nomen
府庁|府庁[ふちょう]|Präfekturverwaltung (Osaka, Kyoto)|書類[しょるい]を 府庁[ふちょう]に 出[だ]しました。|Ich habe die Unterlagen bei der Präfekturverwaltung eingereicht.|Nomen
摩擦|摩擦[まさつ]|Reibung, Spannungen|私[わたし]は 彼女[かのじょ]が 貿易[ぼうえき] 摩擦[まさつ]について 話[はな]すと 思[おも]う。|Ich glaube, sie wird über Handelsspannungen sprechen.|Nomen (mit する)
先輩|先輩[せんぱい]|Ältere(r) (in Schule, Firma), Senior|お 父[とう]さんと 話[はな]してると、やっぱ 人生[じんせい]の 先輩[せんぱい]だなあって 思[おも]う。|Wenn ich mit Papa rede, merke ich doch, dass er viel mehr Lebenserfahrung hat als ich.|Nomen
冒険|冒険[ぼうけん]|Abenteuer|彼[かれ]は 冒険[ぼうけん]が 好[す]きです。|Er mag Abenteuer.|Nomen (mit する)
牧場|牧場[ぼくじょう]|Weide, Viehfarm|牛[うし]が 牧場[ぼくじょう]で 草[くさ]を 食[た]べている。|Die Kühe essen auf der Weide Gras.|Nomen
ゆでる|ゆでる|kochen (in Wasser)|卵[たまご]は 硬[かた]くゆでてください。|Bitte die Eier kochen, bis sie hart sind.|Verb
取り敢えず|取[と]り 敢[あ]えず|fürs Erste, vorerst|取[と]り 敢[あ]えずビールをください。|Fürs Erste ein Bier, bitte.|Adverb
勇気|勇気[ゆうき]|Mut|君[きみ]の 勇気[ゆうき]には 感心[かんしん]する。|Ich bewundere deinen Mut.|Nomen
勇敢|勇敢[ゆうかん]|tapfer, mutig|彼[かれ]はたいへん 勇敢[ゆうかん]だ。|Er ist sehr tapfer.|な-Adjektiv
励ます|励[はげ]ます|ermutigen, aufmuntern|うまく 励[はげ]ましてあげられなくてごめん。|Entschuldige, dass ich dich nicht richtig aufmuntern kann!|Verb
露|露[つゆ]|Tau|朝[あさ]、 草[くさ]に 露[つゆ]が 付[つ]いていました。|Am Morgen lag Tau auf dem Gras.|Nomen
よける|よける|ausweichen|車[くるま]が 来[き]たので、 急[いそ]いでよけました。|Weil ein Auto kam, bin ich schnell ausgewichen.|Verb
零下|零下[れいか]|unter null (Grad)|温度計[おんどけい]は 零下[れいか] 三度[さんど]を 示[しめ]している。|Das Thermometer zeigt drei Grad unter null.|Nomen
雰囲気|雰囲気[ふんいき]|Atmosphäre, Stimmung|雰囲気[ふんいき]を 壊[こわ]さないで。|Mach nicht die Stimmung kaputt.|Nomen
盆地|盆地[ぼんち]|Talkessel, Becken|河川[かせん]の 盆地[ぼんち]には 普通[ふつう] 肥沃[ひよく]な 農地[のうち]がある。|In einem Flussbecken findet sich üblicherweise ergiebiges Ackerland.|Nomen
盆|盆[ぼん]|Bon-Fest (Totengedenken im Sommer)|お 盆[ぼん] 期間中[きかんちゅう]は 駅[えき]はとても 混雑[こんざつ]する。|Während des Obon-Festes gibt es auf den Bahnhöfen viel Gedränge.|Nomen
盆|盆[ぼん]|Tablett|覆水[ふくすい]、 盆[ぼん]に 返[かえ]らず。|Was passiert ist, ist passiert.- Geschehen ist geschehen.|Nomen
よこす|よこす|herschicken, herübergeben|彼女[かのじょ]は 私[わたし]の 手紙[てがみ]にすぐ 返事[へんじ]をよこした。|Sie hat mir sofort eine Antwort auf meinen Brief zukommen lassen.|Verb
大衆|大衆[たいしゅう]|die breite Masse, das Volk|彼[かれ]らの 小[ちい]さな 抗議[こうぎ]が 大衆[たいしゅう]デモに 発展[はってん]した。|Ihr kleiner Protest entwickelte sich zu einer Massendemonstration.|Nomen
舞台|舞台[ぶたい]|Bühne; Schauplatz|彼[かれ]は 舞台[ぶたい]の 上[うえ]にたっている。|Er steht auf der Bühne.|Nomen
見舞う|見舞[みま]う|einen Kranken besuchen|日本[にほん]は 毎年[まいとし] 台風[たいふう]に 見舞[みま]われる。|Japan wird jedes Jahr von Taifunen heimgesucht.|Verb
見舞い|見舞[みま]い|Krankenbesuch|息子[むすこ]がときどき 私[わたし]の 見舞[みま]いにきてくれた。|Mein Sohn stattete mir ab und zu einen Krankenbesuch ab.|Nomen
盆踊り|盆踊[ぼんおど]り|Bon-Tanz|トムに「 一緒[いっしょ]に 盆踊[ぼんおど]りに 行[い]こう」って 誘[さそ]われちゃった。|Tom hat mich gefragt, ob wir zusammen zum Bon-Tanz gehen.|Nomen
跳ねる|跳[は]ねる|springen, hüpfen|トム、 油[あぶら]が 跳[は]ねると 危[あぶ]ないから、あっちに 行[い]ってなさい。|Tom, geh da rüber, es ist gefährlich, wenn das Öl spritzt.|Verb
よす|よす|aufhören, sein lassen|テニスをするのはよしましょう。|Lass uns aufhören, Tennis zu spielen.|Verb
銭湯|銭湯[せんとう]|öffentliches Badehaus|近[ちか]くの 銭湯[せんとう]によく 行[い]きます。|Ich gehe oft ins öffentliche Badehaus in der Nähe.|Nomen
古里|古里[ふるさと]|Heimat, Heimatort|夏休[なつやす]みに 古里[ふるさと]へ 帰[かえ]ります。|In den Sommerferien fahre ich in meine Heimat.|Nomen
狙う|狙[ねら]う|zielen auf, es abgesehen haben auf|私[わたし] 達[たち]はみんな 成功[せいこう]を 狙[ねら]っている。|Wir alle wollen gewinnen.|Verb
彫る|彫[ほ]る|schnitzen, gravieren|トムがカボチャを 彫[ほ]ったんだ。|Tom schnitzte sich einen Kürbis zurecht.|Verb
中央|中央[ちゅうおう]|Mitte, Zentrum|駅[えき]は 市[し]の 中央[ちゅうおう]にある。|Der Bahnhof befindet sich im Stadtzentrum.|Nomen
レクリエーション|レクリエーション|Freizeitgestaltung, Erholung|スキーをすることは 良[よ]いレクリエーションである。|Skifahren ist eine gute Erholung.|Nomen
双子|双子[ふたご]|Zwillinge|私[わたし]にはそっくりの 双子[ふたご]がいます。|Ich habe einen Zwillingsbruder, der genauso aussieht wie ich.|Nomen
裸|裸[はだか]|Nacktheit, nackt|子供[こども]たちは 裸[はだか]で 泳[およ]いでいた。|Die Kinder sind nackt geschwommen.|Nomen
祖先|祖先[そせん]|Vorfahr, Ahn|私[わたし]たちは 祖先[そせん]をうやまうべきだ。|Wir sollten unsere Vorfahren ehren.|Nomen
報酬|報酬[ほうしゅう]|Vergütung, Honorar|その 仕事[しごと]の 報酬[ほうしゅう]をもらった 覚[おぼ]えがない。|Ich kann mich nicht daran erinnern, für die Arbeit bezahlt worden zu sein.|Nomen
無邪気|無邪気[むじゃき]|unschuldig, arglos|寝[ね]ている 赤[あか]ん 坊[ぼう]の 無邪気[むじゃき]な 顔[かお]ほどかわいいものはない。|Nichts ist niedlicher als das unschuldige Gesicht eines schlafenden Babys.|な-Adjektiv
ろうそく|ろうそく|Kerze|ケンがろうそくに 火[ひ]をつけた。|Ken zündete die Kerzen an.|Nomen
玉ねぎ|玉[たま]ねぎ|Zwiebel|私[わたし]は 玉[たま]ねぎの 味[あじ]が 嫌[きら]いだ。|Zwiebeln schmecken mir nicht.|Nomen
玉|玉[たま]|Kugel, Perle|ガリレオは 二[ふた]つの 鉄[てつ]の 玉[たま]を 塔[とう]のてっぺんから 落[お]とした。|Galileo ließ zwei Kugeln aus Eisen von der Spitze des Turms fallen.|Nomen
天皇|天皇[てんのう]|Kaiser (Japans), Tennō|天皇[てんのう]は 国家[こっか]の 象徴[しょうちょう]である。|Der Kaiser ist das Symbol der Nation.|Nomen
風呂場|風呂場[ふろば]|Badezimmer|風呂場[ふろば]はどこですか。|Wo ist das Badezimmer?|Nomen
班|班[はん]|Gruppe, Trupp|班[はん]のメンバーと 協力[きょうりょく]して、 発表[はっぴょう] 資料[しりょう]を 完成[かんせい]させた。|Zusammen mit den Mitgliedern meiner Gruppe habe ich die Unterlagen für das Referat fertiggestellt.|Nomen
召し上がる|召[め]し 上[あ]がる|essen, trinken (respektvoll)|お 茶[ちゃ]を 召[め]し 上[あ]がりませんか。|Möchten Sie nicht etwas Tee trinken?|Verb
わがまま|わがまま|Eigensinn, Egoismus|息子[むすこ]にわがままさせてはいけないよ。|Du darfst deinen Sohn nicht so eigensinnig sein lassen.|な-Adjektiv
哲学|哲学[てつがく]|Philosophie|私[わたし]は、 大学[だいがく]で 哲学[てつがく]を 専攻[せんこう]しました。|Mein Hauptfach an der Uni war Philosophie.|Nomen
綱|綱[つな]|Tau, dickes Seil|二人[ふたり]の 子供[こども]は 綱[つな]が 切[き]れるまで 引[ひ]っ 張[ぱ]りあった。|Die zwei Kinder zogen am Seil, bis es riss.|Nomen
縄|縄[なわ]|Seil, Strick|泥棒[どろぼう]を 見[み]て 縄[なわ]をなう。|Das Seil erst flechten, wenn man den Dieb schon gesehen hat.|Nomen
縫う|縫[ぬ]う|nähen|これを 手[て]で 縫[ぬ]ったんですか。|Hast du dies von Hand genäht?|Verb
虹|虹[にじ]|Regenbogen|今朝[けさ] 出[で]てた 虹[にじ]みた？|Hast du den Regenbogen heute Morgen gesehen?|Nomen
わく|わく|hervorquellen, aufsteigen (Gefühl)|お 風呂[ふろ] 沸[わ]いたわよ。|Ich bin mit dem Baden fertig.|Verb
梅雨明け|梅雨明[つゆあ]け|Ende der Regenzeit|今年[ことし]は 梅雨明[つゆあ]けが 遅[おそ]かった。|Die Regenzeit ist dieses Jahr spät zu Ende gegangen.|Nomen (mit する)
梅雨入り|梅雨入[つゆい]り|Beginn der Regenzeit|もうすぐ 梅雨入[つゆい]りだ。|Die Regenzeit steht kurz bevor.|Nomen (mit する)
欄|欄[らん]|Spalte, Feld (im Formular)|あ、 郵便番号[ゆうびんばんごう]の 欄[らん]に 電話番号[でんわばんごう] 書[か]いちゃった。|Oh, ich habe die Telefonnummer aus Versehen in die Spalte der Postleitzahl geschrieben.|Nomen
栓抜き|栓抜[せんぬ]き|Flaschenöffner|栓抜[せんぬ]きどこだろう？|Wo ist bloß der Flaschenöffner?|Nomen
峠|峠[とうげ]|Bergpass|患者[かんじゃ]さんは 峠[とうげ]を 越[こ]しました。|Der Patient ist über den Berg.|Nomen
ばからしい|ばからしい|unsinnig, dumm|なんか 馬鹿[ばか]らしくなっちゃった。|Das kommt mir auf einmal albern vor.|Adjektiv
婆さん|婆[ばあ]さん|alte Frau, Oma|あのお 婆[ばあ]さんは 誰[だれ]ですか？|Wer ist diese alte Frau?|Nomen
漬ける|漬[つ]ける|einlegen, marinieren|私[わたし]のおばあちゃん、 漬物[つけもの]を 漬[つ]けるのが 上手[じょうず]なんだよ。|Meine Oma kann sehr gut Gemüse einlegen.|Verb
漬け物|漬[つ]け 物[もの]|eingelegtes Gemüse|ご 飯[はん]と 漬[つ]け 物[もの]を 食[た]べました。|Ich habe Reis und eingelegtes Gemüse gegessen.|Nomen
潰す|潰[つぶ]す|zerdrücken, zerquetschen|時間[じかん]を 潰[つぶ]そうとしていた。|Ich versuchte, die Zeit totzuschlagen.|Verb
潰れる|潰[つぶ]れる|zerdrückt werden; pleitegehen|梱包[こんぽう]は 潰[つぶ]れてたけど、 中身[なかみ]は 無事[ぶじ]だったよ。|Die Verpackung war zerdrückt, aber der Inhalt war unversehrt.|Verb
なぜか|なぜか|aus irgendeinem Grund|私[わたし]はなぜか 答[こた]えられなかった。|Aus irgendeinem Grunde konnte ich nicht antworten.|Adverb
年賀|年賀[ねんが]|Neujahrsglückwunsch|年賀[ねんが] 状[じょう]を 書[か]くのは 日本[にほん]の 習慣[しゅうかん]である。|Neujahrskarten schreiben ist eine japanische Tradition.|Nomen
賑わう|賑[にぎ]わう|belebt sein, voller Menschen sein|海水浴場[かいすいよくじょう]は 海水浴[かいすいよく] 客[きゃく]で 賑[にぎ]わっていた。|Am Badestrand wimmelte es von Badegästen.|Verb
蛇|蛇[へび]|Schlange|空[そら]から 見[み]ると 川[かわ]は 巨大[きょだい]な 蛇[へび]のように 見[み]えた。|Vom Himmel aus gesehen, mutete der Fluss wie eine gewaltige Schlange an.|Nomen
華やか|華[はな]やか|prächtig, glanzvoll|彼女[かのじょ]はとても 華[はな]やかだね。|Sie sieht hinreißend aus.|Adjektiv
挟む|挟[はさ]む|einklemmen, dazwischenstecken|彼[かれ]は 会話[かいわ]の 最中[さいちゅう]に 口[くち]を 挟[はさ]むことがよくある。|Er redet oft mitten im Gespräch dazwischen.|Verb
塔|塔[とう]|Turm, Pagode|遠[とお]くに 塔[とう]が 見[み]えた。|In der Ferne sahen wir den Turm.|Nomen
にわかに|にわかに|plötzlich, unvermittelt|にわかに 雨[あめ]が 降[ふ]ってきた。|Plötzlich fing es an zu regnen.|Adverb
誓う|誓[ちか]う|schwören, geloben|あなたを 待[ま]つと 誓[ちか]います。|Ich schwöre, dass ich auf dich warten werde.|Verb
慰める|慰[なぐさ]める|trösten|トムはメアリーを 慰[なぐさ]めている。|Tom tröstet Maria.|Verb
朗らか|朗[ほが]らか|heiter, fröhlich|彼[かれ]はいつも 朗[ほが]らかだ。|Er ist immer heiter.|Adjektiv
蝶蝶|蝶蝶[ちょうちょう]|Schmetterling|花[はな]の 上[うえ]に 蝶蝶[ちょうちょう]がとまっています。|Auf der Blume sitzt ein Schmetterling.|Nomen
鳩|鳩[はと]|Taube|屋根[やね]に 白[しろ]い 鳩[はと]がとまってるよ。|Auf dem Dach sitzt eine weiße Taube.|Nomen
ぴたりと|ぴたりと|schlagartig; genau passend|男[おとこ]はぴたりと 止[と]まった。|Der Mann blieb abrupt stehen.|Adverb
雛祭|雛祭[ひなまつり]|Puppenfest (Mädchenfest am 3. März)|三[さん] 月[がつ] 三日[みっか]は 雛祭[ひなまつり]です。|Am dritten März ist das Puppenfest.|Nomen
物凄い|物凄[ものすご]い|gewaltig, ungeheuer|外[そと]で 物凄[ものすご]い 音[おと]がしました。|Draußen gab es ein gewaltiges Geräusch.|Adjektiv
喉|喉[のど]|Kehle, Hals|骨[ほね]が 喉[のど]にささった。|Der Knochen blieb mir im Hals stecken.|Nomen
唾|唾[つば]|Speichel, Spucke|シンガポールでは 道路[どうろ]に 唾[つば]を 吐[つ]くのは 犯罪[はんざい]です。|In Singapur ist es ein Verbrechen, auf die Straße zu spucken.|Nomen
吠える|吠[ほ]える|bellen|突然[とつぜん] 犬[いぬ]が 吠[ほ]え 出[だ]した。|Plötzlich fing ein Hund an zu bellen.|Verb
ぴょんと|ぴょんと|mit einem Satz, hopp|笛[ふえ]の 音[おと]がなるとウサギのキッドが 早速[さっそく]ぴょんと 跳[は]ねた。|Als die Flöte ertönte, machte der Hase Kid sofort einen Satz.|Adverb
吊るす|吊[つ]るす|aufhängen|私[わたし]はシャツを 吊[つ]るしている。|Ich hänge meine Hemden auf.|Verb
味噌|味噌[みそ]|Miso (Sojabohnenpaste)|母[はは]が 味噌[みそ] 汁[しる]の 作[つく]り 方[かた]を 教[おし]えてくれた。|Meine Mutter hat mir beigebracht, wie man Misosuppe kocht.|Nomen
塞がる|塞[ふさ]がる|sich schließen, versperrt sein|道路[どうろ]は 倒[たお]れた 木[き]で 塞[ふさ]がっていた。|Die Straße war durch einen umgefallenen Baum blockiert.|Verb
塞ぐ|塞[ふさ]ぐ|verschließen, versperren|工事[こうじ]が 通[とお]りへの 進路[しんろ]を 塞[ふさ]いだ。|Die Bauarbeiten versperrten den Weg zur Straße.|Verb
撫でる|撫[な]でる|streicheln|波[なみ]が 静[しず]かに 砂浜[すなはま]を 撫[な]でていた。|Die Wellen strichen sanft über den Sandstrand.|Verb
卑怯|卑怯[ひきょう]|feige, unfair|卑怯[ひきょう]なまねしないでよ。|Sei nicht so feige und hinterhältig.|な-Adjektiv
ひらりと|ひらりと|leicht, flatternd|猫[ねこ]がひらりと 塀[へい]に 飛[と]び 上[あ]がりました。|Die Katze sprang leichtfüßig auf die Mauer.|Adverb
溜め息|溜[た]め 息[いき]|Seufzer|彼[かれ]は 大仰[おおぎょう]な 溜[た]め 息[いき]をつき、ドアノブに 手[て]をかけた。|Er stieß einen übertriebenen Seufzer aus und legte seine Hand an den Türknauf.|Nomen
溜まる|溜[た]まる|sich ansammeln|やっと 溜[た]まってた 家事[かじ]が 終[お]わったわ。|Endlich ist die angestaute Hausarbeit erledigt.|Verb
溜める|溜[た]める|ansammeln, aufstauen|彼[かれ]は 海外旅行[かいがいりょこう]のため 金[かね]を 溜[た]めている。|Er spart Geld für eine Überseereise.|Verb
海苔|海苔[のり]|Nori (getrockneter Seetang)|海苔[のり]って、 身体[しんたい]にいいの？|Ist Nori gesund?|Nomen
遥か|遥[はる]か|weit entfernt, fern|遥[はる]か 遠[とお]くに 住[す]んでいます。|Ich wohne ganz weit weg.|Adjektiv
もうじき|もうじき|bald, gleich|クリスマスはもうじきです。|Bald ist Weihnachten.|Adverb
股|股[また]|Schritt, Schenkelansatz|自転車[じてんしゃ]の 乗[の]り 過[す]ぎで 股[また]が 痛[いた]いです。|Vom vielen Radfahren tut mir der Schritt weh.|Nomen
焚く|焚[た]く|Feuer machen, anzünden|寒[さむ]かったので、 私[わたし]たちは 火[ひ]を 焚[た]きました。|Weil es kalt war, machten wir ein Feuer.|Verb
明瞭|明瞭[めいりょう]|klar, deutlich|この 文[ぶん]の 意味[いみ]は 不[ふ] 明瞭[めいりょう]だ。|Die Bedeutung dieses Satzes ist unklar.|な-Adjektiv
眉|眉[まゆ]|Augenbraue|トムは 眉[まゆ]をひそめた。|Tom runzelte die Stirn.|Nomen
眉毛|眉毛[まゆげ]|Augenbrauen|眉毛[まゆげ]って 一体[いったい] 何[なん]のためにあるんだろう？|Wozu gibt es eigentlich Augenbrauen?|Nomen
やたらに|やたらに|übermäßig, wahllos|上役[うわやく]にやたらにぺこぺこするな。|Krieche nicht ständig vor deinem Vorgesetzten.|Adverb
割り箸|割[わ]り 箸[ばし]|Einweg-Essstäbchen|和食[わしょく]のレストランへ 行[い]くたびに、 割[わ]り 箸[ばし]を 家[いえ]へもって 帰[かえ]ります。|Jedes Mal, wenn ich in ein japanisches Restaurant gehe, nehme ich die Einwegstäbchen mit nach Hause.|Nomen
蛋白質|蛋白質[たんぱくしつ]|Eiweiß, Protein|肉[にく]や 魚[さかな]には 蛋白質[たんぱくしつ]が 多[おお]いです。|Fleisch und Fisch enthalten viel Eiweiß.|Nomen
蜂|蜂[はち]|Biene, Wespe|蜂[はち]に 刺[さ]されました。|Mich hat eine Biene gestochen.|Nomen
頂戴|頂戴[ちょうだい]|Bekommen; gib mir bitte|塩[しお]をこちらに 頂戴[ちょうだい]。|Gibst du mir bitte mal das Salz?|Nomen (mit する)
初詣で|初詣[はつもう]で|erster Schreinbesuch im neuen Jahr|初詣[はつもう]でとは 新年[しんねん]に 神社[じんじゃ]にお 参[まい]りすることです。|Als „Hatsumōde“ bezeichnet man den Besuch im Schrein zu Neujahr.|Nomen (mit する)
詫びる|詫[わ]びる|sich entschuldigen|重[かさ]ねてお 詫[わ]び 申[もう]し 上[あ]げます。|Ich bitte noch einmal um Entschuldigung!|Verb
頬|頬[ほお]|Wange|彼[かれ]の 頬[ほお]は 真[ま]っ 赤[か]だった。|Er hatte ganz rote Wangen.|Nomen
餅|餅[もち]|Mochi (Reiskuchen)|彼[かれ]は 餅[もち]をすっかり 食[た]べたわけではない。|Er hat die Reisküchlein nicht komplett aufgegessen.|Nomen
騙す|騙[だま]す|täuschen, betrügen|騙[だま]すならもっと 上手[じょうず]に 騙[だま]してよ。|Wenn du mich hinters Licht führen willst, musst du dir schon mehr Mühe geben.|Verb
便箋|便箋[びんせん]|Briefpapier|便箋[びんせん]をください。|Geben Sie mir bitte Briefpapier.|Nomen`;
