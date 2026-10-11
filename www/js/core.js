/* Standard-Deck: 5999 Wörter mit Beispielsatz, nach Häufigkeit geordnet (Reihenfolge des „Optimized-Voc-Index“).
   Wörter und Sätze: geteiltes Anki-Deck „Core 2k/6k Optimized Japanese Vocabulary“ (AnkiWeb 1237389412), ursprünglich aus den
   Core-2000/6000-Listen von iKnow! (Cerego). Die deutschen Bedeutungen und Satzübersetzungen sind maschinell erstellt und nicht gegengelesen.
   Format je Zeile: Wort|Lesung (Furigana als 漢字[かな])|Bedeutung|Beispielsatz|Übersetzung|Wortart */
const CORE_RAW = `それ|それ|das (da)|それはとってもいい 話[はなし]だ。|Das ist eine wirklich schöne Geschichte.|Pronomen
一つ|一[ひと]つ|eins, ein Stück|それを 一[ひと]つください。|Geben Sie mir bitte eins davon.|Nomen
一|一[いち]|eins|一[いち]から 始[はじ]めましょう。|Fangen wir von vorne an.|Nomen
二|二[に]|zwei|その 人[ひと]には 二[に] 回会[かい あ]った。|Ich habe diese Person zweimal getroffen.|Nomen
二つ|二[ふた]つ|zwei (Stück)|ソフトクリームを 二[ふた]つください。|Zwei Softeis, bitte.|Nomen
三|三[さん]|drei|彼女[かのじょ]は 三[さん] 人[にん]の 子供[こども]の 母親[ははおや]だ。|Sie ist Mutter von drei Kindern.|Nomen
三つ|三[みっ]つ|drei (Stück)|コップを 三[みっ]つ 買[か]いました。|Ich habe drei Gläser gekauft.|Nomen
四つ|四[よっ]つ|vier (Stück)|私[わたし]は 腕時計[うでどけい]を 四[よっ]つ 持[も]っています。|Ich besitze vier Armbanduhren.|Nomen
四|四[し]・四[よん]|vier|四[し] 月[がつ]に 大学[だいがく]に 入学[にゅうがく]しました。|Im April habe ich mein Studium an der Universität begonnen.|Nomen
これ|これ|dies (hier)|これをください。|Das hier, bitte.|Nomen
四|四[よん]|vier|ハワイは 四[よん] 回目[かいめ]です。|Ich bin zum vierten Mal auf Hawaii.|Nomen
五つ|五[いつ]つ|fünf (Stück)|桃[もも]を 五[いつ]つください。|Fünf Pfirsiche, bitte.|Nomen
五|五[ご]|fünf|五[ご] 人[にん]で 旅行[りょこう]に 行[い]きました。|Wir sind zu fünft verreist.|Nomen
六つ|六[むっ]つ|sechs (Stück); sechs Jahre alt|息子[むすこ]は 六[むっ]つになりました。|Mein Sohn ist sechs geworden.|Nomen
六|六[ろく]|sechs|彼[かれ]には 子供[こども]が 六[ろく] 人[にん]います。|Er hat sechs Kinder.|Nomen
七|七[なな]|sieben|バナナが 七[なな] 本[ほん]あります。|Da sind sieben Bananen.|Nomen
七つ|七[なな]つ|sieben (Stück); sieben Jahre alt|この 子[こ]は 今年[ことし] 七[なな]つになります。|Dieses Kind wird dieses Jahr sieben.|Nomen
八|八[はち]|acht|りんごを 八[はち] 個[こ]ください。|Acht Äpfel, bitte.|Nomen
八つ|八[やっ]つ|acht (Stück)|あの 家[いえ]には 時計[とけい]が 八[やっ]つあります。|In dem Haus dort gibt es acht Uhren.|Nomen
なる|なる|werden|彼[かれ]は 医者[いしゃ]になりました。|Er ist Arzt geworden.|Verb
九|九[きゅう]|neun|野球[やきゅう]は 九[きゅう] 人[にん]で 1[ひと]チームです。|Beim Baseball besteht eine Mannschaft aus neun Leuten.|Nomen
九つ|九[ここの]つ|neun (Stück); neun Jahre alt|娘[むすめ]は 明日[あす] 九[ここの]つになります。|Meine Tochter wird morgen neun.|Nomen
十|十[じゅう]|zehn|その 子[こ]は 指[ゆび]で 十[じゅう] 数[かぞ]えました。|Das Kind zählte mit den Fingern bis zehn.|Nomen
百|百[ひゃく]|hundert|私[わたし]の 祖母[そぼ]は 百[ひゃく] 才[さい]です。|Meine Großmutter ist hundert Jahre alt.|Nomen
千|千[せん]|tausend|千[せん] 円貸[えん か]してください。|Leih mir bitte tausend Yen.|Nomen
万|万[まん]|zehntausend|この 靴[くつ]は 1[いち] 万[まん] 円[えん]です。|Diese Schuhe kosten zehntausend Yen.|Nomen
円|円[えん]|Kreis|そこに 大[おお]きな 円[えん]を 描[か]いて。|Zeichne dort einen großen Kreis.|Nomen
円|円[えん]|Yen|カレーライスは 700[ななひゃく] 円[えん]です。|Der Curryreis kostet 700 Yen.|Nomen
時|時[とき]|Zeit|時[とき]の 経[た]つのは 早[はや]い。|Die Zeit vergeht schnell.|Nomen
する|する|tun, machen|友達[ともだち]と 一緒[いっしょ]に 宿題[しゅくだい]をした。|Ich habe mit einem Freund zusammen Hausaufgaben gemacht.|Verb
時々|時々[ときどき]|manchmal|彼[かれ]は 時々[ときどき] 遅刻[ちこく]します。|Er kommt manchmal zu spät.|Adverb
日|日[にち]|Tag|私[わたし]たちは 先月11[せんげつ じゅういち] 日[にち]に 結婚[けっこん]しました。|Wir haben am 11. des letzten Monats geheiratet.|Nomen
六日|六日[むいか]|sechs Tage; der 6. (des Monats)|六日[むいか] 前[まえ]に 日本[にほん]に 帰[かえ]ってきました。|Ich bin vor sechs Tagen nach Japan zurückgekommen.|Nomen
三日|三日[みっか]|drei Tage; der 3. (des Monats)|手紙[てがみ]が 届[とど]くのに 三日[みっか]かかりました。|Es hat drei Tage gedauert, bis der Brief ankam.|Nomen
五日|五日[いつか]|fünf Tage; der 5. (des Monats)|五月[ごがつ] 五日[いつか]は 祝日[しゅくじつ]です|Der 5. Mai ist ein Feiertag.|Nomen
八日|八日[ようか]|acht Tage; der 8. (des Monats)|八日[ようか]からイギリスに 行[い]きます。|Ab dem Achten bin ich in England.|Nomen
二十日|二十日[はつか]|zwanzig Tage; der 20. (des Monats)|来月[らいげつ]の 二十日[はつか]は 弟[おとうと]の 誕生日[たんじょうび]です。|Am 20. nächsten Monats hat mein kleiner Bruder Geburtstag.|Nomen
二日|二日[ふつか]|zwei Tage; der 2. (des Monats)|私[わたし]は 二日[ふつか] 待[ま]った。|Ich habe zwei Tage gewartet.|Nomen
九日|九日[ここのか]|neun Tage; der 9. (des Monats)|九日[ここのか]に 荷物[にもつ]が 届[とど]きます。|Das Paket kommt am Neunten an.|Nomen
ところ|ところ|Ort, Stelle; bei jemandem|私[わたし]は 友達[ともだち]のところに 泊[と]まった。|Ich habe bei einem Freund übernachtet.|Nomen
一日|一日[ついたち]|der 1. (des Monats)|来月[らいげつ]の 一日[ついたち]は 空[あ]いていますか。|Hast du am Ersten des nächsten Monats Zeit?|Nomen
十日|十日[とおか]|zehn Tage; der 10. (des Monats)|十日[とおか] 後[ご]に 帰[かえ]ります。|Ich komme in zehn Tagen zurück.|Nomen
七日|七日[なのか]|sieben Tage; der 7. (des Monats)|先月[せんげつ]の 七日[なのか]に 孫[まご]が 生[う]まれました。|Am Siebten des letzten Monats wurde mein Enkelkind geboren.|Nomen
四日|四日[よっか]|vier Tage; der 4. (des Monats)|新学期[しんがっき]は 来月[らいげつ]の 四日[よっか]からです。|Das neue Schulhalbjahr beginnt am Vierten des nächsten Monats.|Nomen
月|月[つき]|Mond|今夜[こんや]は 月[つき]がとてもきれいです。|Der Mond ist heute Abend sehr schön.|Nomen
水|水[みず]|Wasser|水[みず]を 一杯[いっぱい]ください。|Ein Glas Wasser, bitte.|Nomen
金|金[かね]|Geld|これはかなり 金[かね]がかかった。|Das hat ziemlich viel Geld gekostet.|Nomen
日曜日|日曜日[にちようび]|Sonntag|日曜日[にちようび]は 海[うみ]に 行[い]きました。|Am Sonntag sind wir ans Meer gefahren.|Nomen
土曜日|土曜日[どようび]|Samstag|土曜日[どようび]の 夜[よる]はクラブに 行[い]きます。|Samstagabend gehe ich in einen Club.|Nomen
やる|やる|tun, machen (umgangssprachlich)|一緒[いっしょ]に 宿題[しゅくだい]をやろう。|Lass uns zusammen Hausaufgaben machen.|Verb
金曜日|金曜日[きんようび]|Freitag|金曜日[きんようび]の 夜[よる]は 友達[ともだち]と 出[で]かけます。|Freitagabends gehe ich mit Freunden aus.|Nomen
月曜日|月曜日[げつようび]|Montag|月曜日[げつようび]に 会[あ]いましょう。|Treffen wir uns am Montag.|Nomen
木曜日|木曜日[もくようび]|Donnerstag|木曜日[もくようび]は 仕事[しごと]が 休[やす]みです。|Donnerstags habe ich frei.|Nomen
曜日|曜日[ようび]|Wochentag|曜日[ようび]を 間違[まちが]えました。|Ich habe mich im Wochentag geirrt.|Nomen
火曜日|火曜日[かようび]|Dienstag|火曜日[かようび]に 会議[かいぎ]があります。|Am Dienstag ist eine Besprechung.|Nomen
水曜日|水曜日[すいようび]|Mittwoch|水曜日[すいようび]はバイトがあります。|Mittwochs habe ich meinen Nebenjob.|Nomen
週|週[しゅう]|Woche|その 次[つぎ]の 週[しゅう]は 空[あ]いてますか。|Hast du in der Woche darauf Zeit?|Nomen
年|年[とし]|Jahr; Alter|新[あたら]しい 年[とし]が 始[はじ]まりました。|Ein neues Jahr hat begonnen.|Nomen
分かる|分[わ]かる|verstehen|質問[しつもん]の 意味[いみ]は 分[わ]かりましたか。|Hast du verstanden, was die Frage bedeutet?|Verb
そう|そう|so, auf diese Weise|私[わたし]もそう 思[おも]います。|Das denke ich auch.|Adverb
何|何[なに]|was|夕食[ゆうしょく]には 何[なに]を 食[た]べたいですか。|Was möchtest du zum Abendessen essen?|Nomen
先|先[さき]|voraus, zuerst; vorn|お 先[さき]にどうぞ。|Bitte, nach Ihnen.|Nomen
今年|今年[ことし]|dieses Jahr|今年[ことし]はイタリアに 旅行[りょこう]したい。|Dieses Jahr möchte ich nach Italien reisen.|Nomen
今|今[いま]|jetzt|彼[かれ]は 今[いま]、 勉強[べんきょう]しています。|Er lernt gerade.|Adverb
今日|今日[きょう]|heute|今日[きょう]は 仕事[しごと]がありません。|Heute habe ich keine Arbeit.|Nomen
今月|今月[こんげつ]|diesen Monat|今月[こんげつ]はとても 忙[いそが]しい。|Diesen Monat bin ich sehr beschäftigt.|Nomen
今週|今週[こんしゅう]|diese Woche|今週[こんしゅう]は 日本語[にほんご]のテストがあります。|Diese Woche ist ein Japanischtest.|Nomen
来る|来[く]る|kommen|彼[かれ]は 昼過[ひるす]ぎに 来[き]ます。|Er kommt am frühen Nachmittag.|Verb
来年|来年[らいねん]|nächstes Jahr|来年[らいねん] 一緒[いっしょ]に 旅行[りょこう]しましょう。|Lass uns nächstes Jahr zusammen verreisen.|Nomen
もう|もう|schon; (nicht) mehr|彼[かれ]はもう 帰[かえ]りました。|Er ist schon nach Hause gegangen.|Adverb
行く|行[い]く|gehen, fahren|日曜日[にちようび]は 図書館[としょかん]に 行[い]きます。|Sonntags gehe ich in die Bibliothek.|Verb
帰る|帰[かえ]る|zurückkehren, nach Hause gehen|家[うち]に 帰[かえ]ろう。|Lass uns nach Hause gehen.|Verb
大きい|大[おお]きい|groß|あの 大[おお]きい 建物[たてもの]は 何[なん]ですか。|Was ist das für ein großes Gebäude dort?|Adjektiv
小さい|小[ちい]さい|klein|小[ちい]さい 花[はな]が 咲[さ]いています。|Kleine Blumen blühen.|Adjektiv
少ない|少[すく]ない|wenig|今年[ことし]は 雨[あめ]が 少[すく]ないです。|Dieses Jahr gibt es wenig Regen.|Adjektiv
少し|少[すこ]し|ein bisschen, ein wenig|少[すこ]し 疲[つか]れました。|Ich bin ein bisschen müde.|Adverb
多い|多[おお]い|viel, zahlreich|京都[きょうと]にはお 寺[てら]が 多[おお]い。|In Kyoto gibt es viele Tempel.|Adjektiv
多分|多分[たぶん]|wahrscheinlich, vielleicht|彼女[かのじょ]は 多分[たぶん] 家[いえ]で 寝[ね]ています。|Sie schläft wahrscheinlich zu Hause.|Adverb
上げる|上[あ]げる|heben, hochlegen; erhöhen|彼[かれ]は 荷物[にもつ]をあみだなに 上[あ]げた。|Er legte das Gepäck auf die Gepäckablage.|Verb
よく|よく|oft|彼女[かのじょ]はよく 旅行[りょこう]に 行[い]きます。|Sie verreist oft.|Adverb
上る|上[のぼ]る|hinaufgehen, hinaufsteigen|猫[ねこ]が 屋根[やね]に 上[のぼ]っている。|Die Katze ist auf das Dach geklettert.|Verb
上|上[うえ]|oben, über|上[うえ]を 向[む]いて。|Schau nach oben.|Nomen
下|下[した]|unten, unter|財布[さいふ]は 机[つくえ]の 下[した]にあった。|Das Portemonnaie lag unter dem Schreibtisch.|Nomen
右|右[みぎ]|rechts|右[みぎ]のポケットにハンカチが 入[はい]っています。|In der rechten Tasche ist ein Taschentuch.|Nomen
左|左[ひだり]|links|そこを 左[ひだり]に 曲[ま]がってください。|Biegen Sie dort bitte links ab.|Nomen
方|方[ほう]|Richtung, Seite|彼[かれ]は 私[わたし]の 方[ほう]を 見[み]ました。|Er sah in meine Richtung.|Nomen
大人|大人[おとな]|Erwachsener|お 酒[さけ]は 大人[おとな]になってから。|Alkohol gibt es erst, wenn man erwachsen ist.|Nomen
人|人[ひと]|Mensch, Person|彼[かれ]は 優[やさ]しい 人[ひと]です。|Er ist ein freundlicher Mensch.|Nomen
一人|一人[ひとり]|eine Person; allein|そこには 私[わたし] 一人[ひとり]しかいなかった。|Ich war ganz allein dort.|Nomen
どう|どう|wie|あなたはどう 思[おも]いますか。|Was denkst du?|Adverb
入れる|入[い]れる|hineintun, hineinlegen|彼[かれ]はかばんに 手帳[てちょう]を 入[い]れた。|Er steckte den Terminkalender in die Tasche.|Verb
入る|入[はい]る|hineingehen, eintreten|寒[さむ]いので 中[なか]に 入[はい]ってください。|Es ist kalt, kommen Sie bitte herein.|Verb
出る|出[で]る|hinausgehen, verlassen|今朝[けさ]は 早[はや]く 家[いえ]を 出[で]ました。|Heute Morgen habe ich früh das Haus verlassen.|Verb
出来る|出来[でき]る|können; fertig werden|彼女[かのじょ]はイタリア 語[ご]が 出来[でき]ます。|Sie kann Italienisch.|Verb
出す|出[だ]す|herausnehmen, herausholen|彼[かれ]はかばんから 教科書[きょうかしょ]を 出[だ]した。|Er holte das Lehrbuch aus der Tasche.|Verb
本|本[ほん]|Buch; Zählwort für lange Dinge|本[ほん]を １冊買[いっさつ か]いました。|Ich habe ein Buch gekauft.|Nomen
休む|休[やす]む|freinehmen, fehlen; sich ausruhen|明日[あした]、 会社[かいしゃ]を 休[やす]みます。|Morgen nehme ich mir in der Firma frei.|Verb
体|体[からだ]|Körper; Gesundheit|私[わたし]は 体[からだ]が 丈夫[じょうぶ]だ。|Ich habe einen robusten Körper.|Nomen
目|目[め]|Auge|彼女[かのじょ]は 青[あお]い 目[め]をしています。|Sie hat blaue Augen.|Nomen
どこ|どこ|wo|あの 本[ほん]をどこに 置[お]きましたか。|Wo hast du das Buch hingelegt?|Nomen
口|口[くち]|Mund|口[くち]を 大[おお]きく 開[あ]けてください。|Machen Sie den Mund bitte weit auf.|Nomen
耳|耳[みみ]|Ohr; Gehör|彼女[かのじょ]は 耳[みみ]がよく 聞[き]こえません。|Sie hört nicht gut.|Nomen
上手|上手[じょうず]|geschickt, gut (in etwas)|妹[いもうと]は 歌[うた]が 上手[じょうず]です。|Meine kleine Schwester kann gut singen.|な-Adjektiv
手|手[て]|Hand|分[わ]かった 人[ひと]は 手[て]を 上[あ]げてください。|Wer es verstanden hat, hebt bitte die Hand.|Nomen
足|足[あし]|Bein, Fuß|彼[かれ]は 足[あし]が 長[なが]い。|Er hat lange Beine.|Nomen
空く|空[す]く|leer sein, frei sein|レストランは 空[す]いていました。|Das Restaurant war leer.|Verb
男|男[おとこ]|Mann|男[おとこ]の 人[ひと]が 私[わたし]たちに 話[はな]しかけた。|Ein Mann hat uns angesprochen.|Nomen
女|女[おんな]|Frau|店員[てんいん]は 若[わか]い 女[おんな]の 人[ひと]でした。|Die Verkäuferin war eine junge Frau.|Nomen
子供|子供[こども]|Kind|電車[でんしゃ]で 子供[こども]が 騒[さわ]いでいた。|Im Zug haben Kinder Lärm gemacht.|Nomen
あげる|あげる|geben, schenken|この 本[ほん]、あなたにあげます。|Dieses Buch schenke ich dir.|Verb
好き|好[す]き|mögen, gern haben|私[わたし]はワインが 好[す]きです。|Ich mag Wein.|な-Adjektiv
大好き|大好[だいす]き|sehr mögen, lieben|私[わたし]は 犬[いぬ]が 大好[だいす]きだ。|Ich liebe Hunde.|Adjektiv
私|私[わたし]|ich|私[わたし]が 行[い]きましょう。|Ich werde gehen.|Nomen
友達|友達[ともだち]|Freund(in)|私[わたし]には 友達[ともだち]がたくさんいます。|Ich habe viele Freunde.|Nomen
家|家[うち]|Haus, Zuhause|家[うち]に 遊[あそ]びに 来[き]てください。|Komm mich doch zu Hause besuchen.|Nomen
気|気[き]|Geist, Gemüt, Stimmung|彼[かれ]は 意外[いがい]に 気[き]が 小[ちい]さい。|Er ist überraschend ängstlich.|Nomen
元気|元気[げんき]|gesund, munter|おかげさまで 元気[げんき]です。|Danke, mir geht es gut.|Adjektiv
天気|天気[てんき]|Wetter|今日[きょう]はいい 天気[てんき]ですね。|Heute ist schönes Wetter, nicht wahr?|Nomen
晴れる|晴[は]れる|sich aufklären, sonnig werden|明日[あした]は 晴[は]れるといいですね。|Hoffentlich wird es morgen sonnig.|Verb
こう|こう|so, auf diese Art|こう 小[ちい]さい 字[じ]は 読[よ]めない。|So kleine Schrift kann ich nicht lesen.|Adverb
昨日|昨日[きのう]|gestern|昨日[きのう]、 友達[ともだち]に 会[あ]った。|Gestern habe ich einen Freund getroffen.|Nomen
開ける|開[あ]ける|öffnen, aufmachen|窓[まど]を 開[あ]けてください。|Mach bitte das Fenster auf.|Verb
開く|開[ひら]く|aufschlagen, öffnen; aufgehen|32[さんじゅうに]ページを 開[ひら]いてください。|Schlagt bitte Seite 32 auf.|Verb
閉じる|閉[と]じる|schließen, zumachen (Buch, Augen)|教科書[きょうかしょ]を 閉[と]じてください。|Schließt bitte eure Lehrbücher.|Verb
閉める|閉[し]める|schließen, zumachen (Tür, Fenster)|ちゃんとドアを 閉[し]めてよ。|Mach die Tür richtig zu.|Verb
閉まる|閉[し]まる|geschlossen sein, zugehen|お 店[みせ]はもう 閉[し]まっていました。|Der Laden hatte schon zu.|Verb
聞く|聞[き]く|hören; fragen|彼女[かのじょ]はラジオを 聞[き]いています。|Sie hört Radio.|Verb
時間|時間[じかん]|Zeit; Stunde|今[いま]は 時間[じかん]がありません。|Jetzt habe ich keine Zeit.|Nomen
高い|高[たか]い|hoch; teuer|これがこの 町[まち]で 一番[いちばん] 高[たか]いビルです。|Das ist das höchste Gebäude dieser Stadt.|Adjektiv
くれる|くれる|(mir) geben|友達[ともだち]が 誕生日[たんじょうび]プレゼントをくれた。|Ein Freund hat mir ein Geburtstagsgeschenk gegeben.|Verb
安い|安[やす]い|billig, günstig|この 服[ふく]はとても 安[やす]かった。|Diese Kleidung war sehr billig.|Adjektiv
低い|低[ひく]い|niedrig; klein (Körpergröße)|彼[かれ]は 背[せ]が 低[ひく]い。|Er ist klein.|Adjektiv
前|前[まえ]|vorn, vor; früher|その 店[みせ]の 前[まえ]で 会[あ]いましょう。|Treffen wir uns vor dem Laden.|Nomen
後|後[あと]|nach, danach|仕事[しごと]の 後[あと]、 映画[えいが]を 見[み]た。|Nach der Arbeit habe ich einen Film gesehen.|Adverb
後ろ|後[うし]ろ|hinten, hinter|後[うし]ろを 向[む]いて。|Dreh dich um.|Nomen
午後|午後[ごご]|Nachmittag|明日[あす]の 午後[ごご]、お 客様[きゃくさま]が 来[く]る。|Morgen Nachmittag kommt ein Gast.|Nomen
午前|午前[ごぜん]|Vormittag|午前[ごぜん] 9時[くじ]のニュースです。|Hier sind die Nachrichten von 9 Uhr vormittags.|Nomen
朝|朝[あさ]|Morgen|気持[きも]ちのいい 朝[あさ]です。|Es ist ein angenehmer Morgen.|Nomen
昼|昼[ひる]|Mittag, Tag (tagsüber)|私[わたし]は 昼[ひる]のドラマを 毎日見[まいにち み]ます。|Ich sehe mir jeden Tag die Mittagsserien an.|Nomen
かなり|かなり|ziemlich|彼[かれ]はかなり 英語[えいご]が 上手[じょうず]です。|Er kann ziemlich gut Englisch.|Adverb
晩|晩[ばん]|Abend|晩[ばん]ご 飯[はん]は 食[た]べましたか。|Hast du schon zu Abend gegessen?|Nomen
今晩|今晩[こんばん]|heute Abend|今晩[こんばん]のパーティーは 何時[なんじ]からですか。|Um wie viel Uhr beginnt die Party heute Abend?|Nomen
夜|夜[よる]|Nacht, Abend|きのうの 夜[よる]は 家[いえ]にいました。|Gestern Abend war ich zu Hause.|Nomen
食べる|食[た]べる|essen|昨日[きのう]タイカレーを 食[た]べました。|Gestern habe ich Thai-Curry gegessen.|Verb
飲む|飲[の]む|trinken|友達[ともだち]とお 酒[さけ]を 飲[の]んでいます。|Ich trinke gerade mit einem Freund Alkohol.|Verb
ご飯|ご 飯[はん]|gekochter Reis; Mahlzeit|私[わたし]はパンよりご 飯[はん]が 好[す]きだ。|Ich mag Reis lieber als Brot.|Nomen
買う|買[か]う|kaufen|郵便局[ゆうびんきょく]で 切手[きって]を 買[か]いました。|Ich habe auf der Post Briefmarken gekauft.|Verb
見る|見[み]る|sehen, ansehen|私[わたし]は 絵[え]を 見[み]るのが 好[す]きです。|Ich sehe mir gern Bilder an.|Verb
見せる|見[み]せる|zeigen|その 写真[しゃしん]を 見[み]せてください。|Zeigen Sie mir bitte das Foto.|Verb
もっと|もっと|mehr, noch mehr|もっと 近[ちか]くに 来[き]てください。|Komm bitte näher.|Adverb
見つける|見[み]つける|finden|新[あたら]しい 仕事[しごと]を 見[み]つけました。|Ich habe eine neue Arbeit gefunden.|Verb
見える|見[み]える|zu sehen sein, sichtbar sein|ここから 富士山[ふじさん]がよく 見[み]えます。|Von hier aus sieht man den Fuji gut.|Verb
見つかる|見[み]つかる|gefunden werden|メガネが 見[み]つかりません。|Ich kann meine Brille nicht finden.|Verb
言う|言[い]う|sagen|上司[じょうし]が「 一杯[いっぱい]、 飲[の]もう。」と 言[い]った。|Mein Chef sagte: „Trinken wir einen.“|Verb
話す|話[はな]す|sprechen, erzählen|母[はは]と 電話[でんわ]で 話[はな]しました。|Ich habe mit meiner Mutter telefoniert.|Verb
読む|読[よ]む|lesen|彼女[かのじょ]は 雑誌[ざっし]を 読[よ]んでいます。|Sie liest eine Zeitschrift.|Verb
漢字|漢字[かんじ]|Kanji (chinesisches Schriftzeichen)|漢字[かんじ]は 中国[ちゅうごく]から 来[き]ました。|Die Kanji kamen aus China.|Nomen
書く|書[か]く|schreiben|彼[かれ]に 手紙[てがみ]を 書[か]きました。|Ich habe ihm einen Brief geschrieben.|Verb
覚える|覚[おぼ]える|sich merken, lernen|妹[いもうと]は 平仮名[ひらがな]を 全部[ぜんぶ] 覚[おぼ]えました。|Meine kleine Schwester hat alle Hiragana gelernt.|Verb
そこ|そこ|dort, da|そこに 座[すわ]ってください。|Setzen Sie sich bitte dorthin.|Pronomen
会う|会[あ]う|treffen|また 会[あ]いましょう。|Lass uns uns wiedersehen.|Verb
仕事|仕事[しごと]|Arbeit, Beruf|3月[さんがつ]は 仕事[しごと]が 忙[いそが]しい。|Im März habe ich viel zu tun.|Nomen
場合|場合[ばあい]|Fall, Situation|分[わ]からない 場合[ばあい]は 私[わたし]に 聞[き]いてください。|Falls Sie etwas nicht verstehen, fragen Sie mich bitte.|Nomen
車|車[くるま]|Auto|弟[おとうと]が 車[くるま]を 買[か]った。|Mein kleiner Bruder hat ein Auto gekauft.|Nomen
電車|電車[でんしゃ]|Zug, Bahn|私[わたし]は 電車[でんしゃ]で 通学[つうがく]しています。|Ich fahre mit dem Zug zur Schule.|Nomen
駅|駅[えき]|Bahnhof|駅[えき]はどこですか。|Wo ist der Bahnhof?|Nomen
道|道[みち]|Straße, Weg|この 道[みち]を 真[ま]っ 直[す]ぐ 行[い]くと 駅[えき]です。|Wenn Sie diese Straße geradeaus gehen, kommen Sie zum Bahnhof.|Nomen
他|他[ほか]|andere(r, s)|他[ほか]に 方法[ほうほう]がありません。|Es gibt keine andere Möglichkeit.|Nomen
止める|止[や]める|aufhören, lassen|話[はな]すのを 止[や]めてください。|Hören Sie bitte auf zu reden.|Verb
ここ|ここ|hier|ここに 本[ほん]があります。|Hier ist ein Buch.|Pronomen
歩く|歩[ある]く|zu Fuß gehen, laufen|駅[えき]まで 歩[ある]きましょう。|Gehen wir zu Fuß zum Bahnhof.|Verb
走る|走[はし]る|rennen, laufen|彼[かれ]は 毎晩3[まいばん さん]キロ 走[はし]っています。|Er läuft jeden Abend drei Kilometer.|Verb
近く|近[ちか]く|in der Nähe|駅[えき]の 近[ちか]くで 食事[しょくじ]をした。|Ich habe in der Nähe des Bahnhofs gegessen.|Adverb
近い|近[ちか]い|nah|駅[えき]はここから 近[ちか]いです。|Der Bahnhof ist nah von hier.|Adjektiv
近く|近[ちか]く|Nähe, Umgebung|私[わたし]の 家[いえ]は 駅[えき]の 近[ちか]くです。|Mein Haus ist in der Nähe des Bahnhofs.|Nomen
遠い|遠[とお]い|weit, fern|家[いえ]から 学校[がっこう]までは 遠[とお]いです。|Von zu Hause bis zur Schule ist es weit.|Adjektiv
長い|長[なが]い|lang|彼女[かのじょ]の 髪[かみ]はとても 長[なが]い。|Ihre Haare sind sehr lang.|Adjektiv
短い|短[みじか]い|kurz|彼[かれ]は 足[あし]が 短[みじか]い。|Er hat kurze Beine.|Adjektiv
広い|広[ひろ]い|weit, geräumig|彼[かれ]の 家[いえ]はとても 広[ひろ]い。|Sein Haus ist sehr geräumig.|Adjektiv
もらう|もらう|bekommen|彼女[かのじょ]からプレゼントをもらいました。|Ich habe von ihr ein Geschenk bekommen.|Verb
全部|全部[ぜんぶ]|alles, ganz|それ、 全部[ぜんぶ]ください。|Das alles, bitte.|Adverb
国|国[くに]|Land|私[わたし]の 国[くに]について 少[すこ]しお 話[はなし]しましょう。|Lassen Sie mich ein wenig von meinem Land erzählen.|Nomen
白い|白[しろ]い|weiß|彼[かれ]は 歯[は]が 白[しろ]い。|Er hat weiße Zähne.|Adjektiv
赤い|赤[あか]い|rot|赤[あか]いバラを 買[か]いました。|Ich habe eine rote Rose gekauft.|Adjektiv
部屋|部屋[へや]|Zimmer|私[わたし]の 部屋[へや]は 2階[にかい]にあります。|Mein Zimmer ist im ersten Stock.|Nomen
米|米[こめ]|Reis (ungekocht)|日本人[にほんじん]はお 米[こめ]が 大好[だいす]きです。|Japaner lieben Reis.|Nomen
未だ|未[ま]だ|noch (nicht)|宿題[しゅくだい]は 未[ま]だ 終[お]わっていません。|Ich bin mit den Hausaufgaben noch nicht fertig.|Adverb
有る|有[あ]る|da sein, es gibt; haben|私[わたし]の 机[つくえ]の 上[うえ]に 書類[しょるい]がたくさん 有[あ]ります。|Auf meinem Schreibtisch liegen viele Unterlagen.|Verb
無い|無[な]い|nicht da sein, es gibt nicht|ここには 何[なに]も 無[な]い。|Hier gibt es nichts.|Adjektiv
とても|とても|sehr|この 本[ほん]はとてもおもしろい。|Dieses Buch ist sehr interessant.|Adverb
作る|作[つく]る|machen, herstellen|今[いま]、 朝[あさ]ご 飯[はん]を 作[つく]っています。|Ich mache gerade Frühstück.|Verb
使う|使[つか]う|benutzen|このパソコンを 使[つか]ってください。|Benutzen Sie bitte diesen Computer.|Verb
消す|消[け]す|ausmachen, löschen|昼間[ひるま]は 電気[でんき]を 消[け]してください。|Machen Sie tagsüber bitte das Licht aus.|Verb
売る|売[う]る|verkaufen|彼[かれ]は 家[いえ]を 売[う]った。|Er hat das Haus verkauft.|Verb
店|店[みせ]|Laden, Geschäft|私[わたし]はこの 店[みせ]によく 来[き]ます。|Ich komme oft in diesen Laden.|Nomen
春|春[はる]|Frühling|今年[ことし]の 春[はる]は 暖[あたた]かいね。|Dieser Frühling ist warm, nicht wahr?|Nomen
夏|夏[なつ]|Sommer|私[わたし]は 夏[なつ]が 大好[だいす]き。|Ich liebe den Sommer.|Nomen
秋|秋[あき]|Herbst|彼女[かのじょ]は 秋[あき]に 結婚[けっこん]します。|Sie heiratet im Herbst.|Nomen
冬|冬[ふゆ]|Winter|カナダの 冬[ふゆ]はとても 寒[さむ]いです。|Die Winter in Kanada sind sehr kalt.|Nomen
みんな|みんな|alle|みんなにお 菓子[かし]をあげましょう。|Geben wir allen ein paar Süßigkeiten.|Nomen
暑い|暑[あつ]い|heiß (Wetter, Luft)|今日[きょう]はとても 暑[あつ]い。|Heute ist es sehr heiß.|Adjektiv
熱い|熱[あつ]い|heiß (Dinge, bei Berührung)|このスープはとても 熱[あつ]い。|Diese Suppe ist sehr heiß.|Adjektiv
寒い|寒[さむ]い|kalt (Wetter, Luft)|この 部屋[へや]は 寒[さむ]いです。|In diesem Zimmer ist es kalt.|Adjektiv
暖かい|暖[あたた]かい|warm|このコートはとても 暖[あたた]かい。|Dieser Mantel ist sehr warm.|Adjektiv
新しい|新[あたら]しい|neu|彼[かれ]の 車[くるま]は 新[あたら]しい。|Sein Auto ist neu.|Adjektiv
古い|古[ふる]い|alt (Dinge)|私[わたし]は 古[ふる]い 車[くるま]が 好[す]きです。|Ich mag alte Autos.|Adjektiv
良い|良[い]い|gut|彼女[かのじょ]は 良[い]い 友達[ともだち]です。|Sie ist eine gute Freundin.|Adjektiv
悪い|悪[わる]い|schlecht|たばこは 体[からだ]に 悪[わる]い。|Zigaretten sind schlecht für den Körper.|Adjektiv
思う|思[おも]う|denken, meinen|私[わたし]もそう 思[おも]います。|Das denke ich auch.|Verb
いつも|いつも|immer|彼女[かのじょ]はいつも 元気[げんき]だ。|Sie ist immer voller Energie.|Adverb
忘れる|忘[わす]れる|vergessen; liegen lassen|約束[やくそく]を 忘[わす]れないでください。|Vergiss bitte dein Versprechen nicht.|Verb
考える|考[かんが]える|nachdenken, überlegen|よく 考[かんが]えてください。|Denken Sie bitte gut nach.|Verb
決める|決[き]める|entscheiden, festlegen|帰国[きこく]することに 決[き]めました。|Ich habe beschlossen, in mein Heimatland zurückzukehren.|Verb
決まる|決[き]まる|entschieden werden, feststehen|旅行[りょこう]の 日程[にってい]が 決[き]まりました。|Der Reiseplan steht fest.|Verb
知る|知[し]る|wissen, kennen|誰[だれ]もその 話[はなし]を 知[し]らない。|Niemand kennt diese Geschichte.|Verb
一番|一番[いちばん]|am meisten; Nummer eins|彼[かれ]はクラスで 一番[いちばん] 背[せ]が 高[たか]い。|Er ist der Größte in der Klasse.|Adverb
住む|住[す]む|wohnen|彼[かれ]は 会社[かいしゃ]の 近[ちか]くに 住[す]んでいる。|Er wohnt in der Nähe der Firma.|Verb
名前|名前[なまえ]|Name|あなたの 名前[なまえ]を 教[おし]えてください。|Sagen Sie mir bitte Ihren Namen.|Nomen
食べ物|食[た]べ 物[もの]|Essen, Lebensmittel|日本[にっぽん]の 食[た]べ 物[もの]はとても 美味[おい]しいです。|Japanisches Essen ist sehr lecker.|Nomen
いつ|いつ|wann|彼女[かのじょ]はいつ 来[き]ますか。|Wann kommt sie?|Nomen
飲み物|飲[の]み 物[もの]|Getränk|何[なに]か 飲[の]み 物[もの]が 欲[ほ]しいな。|Ich hätte gern etwas zu trinken.|Nomen
重い|重[おも]い|schwer|このかばんは 重[おも]いです。|Diese Tasche ist schwer.|Adjektiv
軽い|軽[かる]い|leicht (Gewicht)|この 靴[くつ]はとても 軽[かる]い。|Diese Schuhe sind sehr leicht.|Adjektiv
送る|送[おく]る|schicken, senden|彼[かれ]の 家[いえ]に 荷物[にもつ]を 送[おく]りました。|Ich habe ein Paket zu ihm nach Hause geschickt.|Verb
取る|取[と]る|nehmen, bekommen|テストでいい 点[てん]を 取[と]った。|Ich habe im Test eine gute Note bekommen.|Verb
待つ|待[ま]つ|warten|あなたが 来[く]るのを 待[ま]っています。|Ich warte darauf, dass du kommst.|Verb
持つ|持[も]つ|haben, besitzen; halten|私[わたし]は 車[くるま]を 持[も]っています。|Ich habe ein Auto.|Verb
気持ち|気持[きも]ち|Gefühl, Empfindung|彼[かれ]の 気持[きも]ちが 分[わ]からない。|Ich verstehe seine Gefühle nicht.|Nomen
生きる|生[い]きる|leben|皆一生懸命[みんな いっしょうけんめい] 生[い]きている。|Alle leben, so gut sie können.|Verb
どちら|どちら|welche(r, s) (von zweien); wohin|肉[にく]と 魚[さかな]とどちらが 好[す]きですか。|Was magst du lieber, Fleisch oder Fisch?|Nomen
先生|先生[せんせい]|Lehrer(in)|私[わたし]は 日本語[にほんご]の 先生[せんせい]になりたいです。|Ich möchte Japanischlehrer werden.|Nomen
大学|大学[だいがく]|Universität|大学[だいがく]に 行[い]ってもっと 勉強[べんきょう]したいです。|Ich möchte an die Universität gehen und mehr lernen.|Nomen
学生|学生[がくせい]|Student(in), Schüler(in)|彼[かれ]は 真面目[まじめ]な 学生[がくせい]です。|Er ist ein ernsthafter Student.|Nomen
大学生|大学生[だいがくせい]|Student(in) (an der Universität)|姉[あね]は 大学生[だいがくせい]です。|Meine große Schwester ist Studentin.|Nomen
学校|学校[がっこう]|Schule|学校[がっこう]は 8時半[はちじはん]に 始[はじ]まります。|Die Schule beginnt um halb neun.|Nomen
高校生|高校生[こうこうせい]|Oberschüler(in)|私[わたし]の 弟[おとうと]は 高校生[こうこうせい]です。|Mein kleiner Bruder ist Oberschüler.|Nomen
教える|教[おし]える|unterrichten, beibringen; mitteilen|彼[かれ]は 数学[すうがく]を 教[おし]えています。|Er unterrichtet Mathematik.|Verb
勉強|勉強[べんきょう]|Lernen, Studium|私[わたし]は 日本語[にほんご]を 勉強[べんきょう]しています。|Ich lerne Japanisch.|Nomen (mit する)
強い|強[つよ]い|stark|今日[きょう]は 風[かぜ]が 強[つよ]い。|Heute weht ein starker Wind.|Adjektiv
どれ|どれ|welche(r, s)|この 中[なか]でどれが 好[す]きですか。|Welches davon magst du?|Nomen
弱い|弱[よわ]い|schwach|その 子[こ]は 体[からだ]が 少[すこ]し 弱[よわ]い。|Das Kind ist körperlich etwas schwach.|Adjektiv
引く|引[ひ]く|ziehen|このドアは 引[ひ]いてください。|Diese Tür bitte ziehen.|Verb
質問|質問[しつもん]|Frage|質問[しつもん]のある 方[かた]はどうぞ。|Wer Fragen hat, bitte sehr.|Nomen (mit する)
難しい|難[むずか]しい|schwierig|この 本[ほん]は 難[むずか]しいですね。|Dieses Buch ist schwierig, nicht wahr?|Adjektiv
数|数[かず]|Zahl, Anzahl|グラスの 数[かず]が 足[た]りません。|Die Gläser reichen nicht.|Nomen
勝つ|勝[か]つ|gewinnen|今日[きょう]はヤンキースが 勝[か]った。|Heute haben die Yankees gewonnen.|Verb
負ける|負[ま]ける|verlieren|私[わたし]たちのチームはその 試合[しあい]で 負[ま]けた。|Unsere Mannschaft hat das Spiel verloren.|Verb
本当に|本当[ほんとう]に|wirklich|あなたが 本当[ほんとう]に 好[す]きです。|Ich mag dich wirklich.|Adverb
要る|要[い]る|brauchen, nötig sein|予約[よやく]は 要[い]りません。|Eine Reservierung ist nicht nötig.|Verb
ドア|ドア|Tür|ドアを 開[あ]けてください。|Mach bitte die Tür auf.|Nomen
時計|時計[とけい]|Uhr|時計[とけい]を 見[み]たらちょうど 3時[さんじ]だった。|Als ich auf die Uhr sah, war es genau drei.|Nomen
払う|払[はら]う|bezahlen|私[わたし]が 払[はら]いましょう。|Ich zahle.|Verb
切る|切[き]る|schneiden|この 紙[かみ]を 半分[はんぶん]に 切[き]ってください。|Schneiden Sie dieses Papier bitte in der Mitte durch.|Verb
変える|変[か]える|ändern|旅行[りょこう]の 日程[にってい]を 変[か]えました。|Ich habe den Reiseplan geändert.|Verb
乗る|乗[の]る|einsteigen, fahren mit|駅[えき]からはタクシーに 乗[の]ってください。|Nehmen Sie vom Bahnhof bitte ein Taxi.|Verb
着る|着[き]る|anziehen, tragen|今日[きょう]はスーツを 着[き]ています。|Heute trage ich einen Anzug.|Verb
立つ|立[た]つ|stehen, aufstehen|彼[かれ]はステージに 立[た]った。|Er stand auf der Bühne.|Verb
座る|座[すわ]る|sitzen, sich setzen|私[わたし]は 窓側[まどがわ]の 席[せき]に 座[すわ]った。|Ich habe mich auf einen Fensterplatz gesetzt.|Verb
次|次[つぎ]|nächste(r, s)|次[つぎ]はいつ 会[あ]いましょうか。|Wann treffen wir uns das nächste Mal?|Nomen
しゃべる|しゃべる|plaudern, reden|彼女[かのじょ]はよくしゃべるね。|Sie redet viel, nicht wahr?|Verb
動く|動[うご]く|sich bewegen|動[うご]かないで 。|Nicht bewegen!|Verb
働く|働[はたら]く|arbeiten|姉[あね]は 銀行[ぎんこう]で 働[はたら]いています。|Meine große Schwester arbeitet bei einer Bank.|Verb
早い|早[はや]い|früh|まだ 学校[がっこう]へ 行[い]くには 早[はや]い 時間[じかん]です。|Es ist noch zu früh, um zur Schule zu gehen.|Adjektiv
速い|速[はや]い|schnell|彼[かれ]は 走[はし]るのが 速[はや]い。|Er läuft schnell.|Adjektiv
遅い|遅[おそ]い|langsam; spät|前[まえ]の 車[くるま]はとても 遅[おそ]い。|Das Auto vor uns ist sehr langsam.|Adjektiv
始める|始[はじ]める|beginnen, anfangen (etwas)|テストを 始[はじ]めてください。|Beginnen Sie bitte mit dem Test.|Verb
始まる|始[はじ]まる|beginnen, anfangen|新[あたら]しい 仕事[しごと]が 始[はじ]まりました。|Meine neue Arbeit hat angefangen.|Verb
終わる|終[お]わる|enden, fertig sein|会議[かいぎ]は 4時[よじ]に 終[お]わります。|Die Besprechung endet um vier Uhr.|Verb
終わり|終[お]わり|Ende, Schluss|夏休[なつやす]みももう 終[お]わりだ。|Die Sommerferien sind auch schon vorbei.|Nomen
テーブル|テーブル|Tisch|新[あたら]しいテーブルを 買[か]いました。|Ich habe einen neuen Tisch gekauft.|Nomen
去年|去年[きょねん]|letztes Jahr|私[わたし]は 去年[きょねん]フランスへ 行[い]った。|Letztes Jahr bin ich nach Frankreich gefahren.|Nomen
紙|紙[かみ]|Papier|紙[かみ]と 鉛筆[えんぴつ]はありますか。|Hast du Papier und einen Bleistift?|Nomen
楽しむ|楽[たの]しむ|genießen|今日[きょう]は 一人[ひとり]の 時間[じかん]を 楽[たの]しみたい。|Heute möchte ich die Zeit für mich allein genießen.|Verb
楽しい|楽[たの]しい|vergnüglich, lustig|彼[かれ]はとても 楽[たの]しい 人[ひと]です。|Er ist ein sehr unterhaltsamer Mensch.|Adjektiv
歌う|歌[うた]う|singen|私[わたし]たちは 大[おお]きな 声[こえ]で 歌[うた]いました。|Wir haben laut gesungen.|Verb
欲しい|欲[ほ]しい|haben wollen|僕[ぼく]は 新[あたら]しい 靴[くつ]が 欲[ほ]しいです。|Ich möchte neue Schuhe.|Adjektiv
色|色[いろ]|Farbe|すてきな 色[いろ]のセーターですね。|Der Pullover hat eine schöne Farbe.|Nomen
茶色|茶色[ちゃいろ]|braun|彼女[かのじょ]は 茶色[ちゃいろ]の 靴[くつ]を 履[は]いています。|Sie trägt braune Schuhe.|Nomen
直ぐ|直[す]ぐ|sofort, gleich|直[す]ぐ 行[い]きます。|Ich komme sofort.|Adverb
ゲーム|ゲーム|Spiel|私[わたし]たちはビデオゲームをした。|Wir haben ein Videospiel gespielt.|Nomen
書き直す|書[か]き 直[なお]す|neu schreiben, umschreiben|この 書類[しょるい]を 書[か]き 直[なお]してください。|Schreiben Sie dieses Dokument bitte neu.|Verb
直る|直[なお]る|repariert werden, wieder in Ordnung kommen|クーラーはまだ 直[なお]りません。|Die Klimaanlage ist noch nicht repariert.|Verb
線|線[せん]|Linie|赤[あか]い 線[せん]を 2本引[に ほん ひ]いて 下[くだ]さい。|Ziehen Sie bitte zwei rote Linien.|Nomen
曲がる|曲[ま]がる|abbiegen; sich biegen|そこを 左[ひだり]に 曲[ま]がってください。|Biegen Sie dort bitte links ab.|Verb
同じ|同[おな]じ|gleich, derselbe|彼[かれ]の 日本語[にほんご]のレベルは 私[わたし]と 同[おな]じ 位[くらい]だ。|Sein Japanisch ist etwa auf dem gleichen Niveau wie meins.|な-Adjektiv
違う|違[ちが]う|anders sein; falsch sein|答[こた]えが 違[ちが]います。|Die Antwort ist falsch.|Verb
図書館|図書館[としょかん]|Bibliothek|図書館[としょかん]で 料理[りょうり]の 本[ほん]を 借[か]りた。|Ich habe in der Bibliothek ein Kochbuch ausgeliehen.|Nomen
泊まる|泊[と]まる|übernachten|今日[きょう]はこのホテルに 泊[と]まります。|Heute übernachte ich in diesem Hotel.|Verb
遊ぶ|遊[あそ]ぶ|spielen, sich vergnügen|子供[こども]たちが 公園[こうえん]で 遊[あそ]んでいる。|Die Kinder spielen im Park.|Verb
どうして|どうして|warum|どうして 泣[な]いているの。|Warum weinst du?|Adverb
服|服[ふく]|Kleidung|昨日[きのう]、 新[あたら]しい 服[ふく]を 買[か]った。|Gestern habe ich neue Kleidung gekauft.|Nomen
お父さん|お 父[とう]さん|Vater|お 父[とう]さんは 会社員[かいしゃいん]です。|Mein Vater ist Angestellter.|Nomen
父|父[ちち]|(mein) Vater|私[わたし]は 父[ちち]が 大好[だいす]きです。|Ich habe meinen Vater sehr gern.|Nomen
お母さん|お 母[かあ]さん|Mutter|お 母[かあ]さんによろしくお 伝[つた]えください。|Grüßen Sie bitte Ihre Mutter von mir.|Nomen
母|母[はは]|(meine) Mutter|昨日[きのう]、 母[はは]と 話[はなし]をしました。|Gestern habe ich mit meiner Mutter gesprochen.|Nomen
親|親[おや]|Eltern, Elternteil|親[おや]の 愛[あい]は 有[あ]り 難[がた]い。|Für die Liebe der Eltern kann man dankbar sein.|Nomen
姉|姉[あね]|(meine) ältere Schwester|姉[あね]は 大学生[だいがくせい]です。|Meine große Schwester ist Studentin.|Nomen
お姉さん|お 姉[ねえ]さん|ältere Schwester|昨日[きのう]、あなたのお 姉[ねえ]さんに 会[あ]ったよ。|Gestern habe ich deine große Schwester getroffen.|Nomen
妹|妹[いもうと]|jüngere Schwester|私[わたし]の 妹[いもうと]は 小学生[しょうがくせい]です。|Meine kleine Schwester ist Grundschülerin.|Nomen
おなか|おなか|Bauch, Magen|おなかが 空[す]きました。|Ich habe Hunger.|Nomen
兄|兄[あに]|(mein) älterer Bruder|兄[あに]は 水泳[すいえい]が 得意[とくい]です。|Mein großer Bruder kann gut schwimmen.|Nomen
お兄さん|お 兄[にい]さん|älterer Bruder|あなたのお 兄[にい]さんは 何歳?[なんさい]|Wie alt ist dein großer Bruder?|Nomen
弟|弟[おとうと]|jüngerer Bruder|弟[おとうと]は 野球[やきゅう]が 好[す]きです。|Mein kleiner Bruder mag Baseball.|Nomen
娘|娘[むすめ]|Tochter; Mädchen|私[わたし]の 娘[むすめ]はアメリカにいます。|Meine Tochter ist in Amerika.|Nomen
息子|息子[むすこ]|Sohn|うちの 息子[むすこ]は 大学1年生[だいがく いちねんせい]です。|Unser Sohn ist im ersten Jahr an der Universität.|Nomen
若い|若[わか]い|jung|彼[かれ]はまだ 若[わか]いです。|Er ist noch jung.|Adjektiv
彼女|彼女[かのじょ]|sie; feste Freundin|彼女[かのじょ]は OL[おーえる]です。|Sie ist Büroangestellte.|Pronomen
彼|彼[かれ]|er; fester Freund|彼[かれ]は 私[わたし]の 上司[じょうし]です。|Er ist mein Vorgesetzter.|Nomen
結婚|結婚[けっこん]|Heirat, Ehe|彼女[かのじょ]は 来月[らいげつ] 結婚[けっこん]します。|Sie heiratet nächsten Monat.|Nomen (mit する)
ミーティング|ミーティング|Besprechung, Meeting|朝9時[あさ 9 じ]からミーティングが 始[はじ]まった。|Die Besprechung begann um 9 Uhr morgens.|Nomen
自転車|自転車[じてんしゃ]|Fahrrad|毎日[まいにち]、 駅[えき]まで 自転車[じてんしゃ]で 行[い]きます。|Ich fahre jeden Tag mit dem Fahrrad zum Bahnhof.|Nomen
自分|自分[じぶん]|selbst, man selbst|宿題[しゅくだい]は 自分[じぶん]でやりなさい。|Mach deine Hausaufgaben selbst.|Nomen
ご主人|ご 主人[しゅじん]|(Ihr) Ehemann|ご 主人[しゅじん]はお 元気[げんき]ですか。|Wie geht es Ihrem Mann?|Nomen
答える|答[こた]える|antworten|私[わたし]の 質問[しつもん]に 答[こた]えてください。|Beantworten Sie bitte meine Frage.|Verb
別|別[べつ]|anders, ein anderer|別[べつ]の 本[ほん]も 見[み]せてください。|Zeigen Sie mir bitte auch ein anderes Buch.|な-Adjektiv
病気|病気[びょうき]|Krankheit|祖父[そふ]が 病気[びょうき]になった。|Mein Großvater ist krank geworden.|Nomen (mit する)
死ぬ|死[し]ぬ|sterben|犬[いぬ]が 病気[びょうき]で 死[し]にました。|Unser Hund ist an einer Krankheit gestorben.|Verb
痛い|痛[いた]い|schmerzhaft, wehtun|今日[きょう]は 頭[あたま]が 痛[いた]いです。|Heute habe ich Kopfschmerzen.|Adjektiv
酒|酒[さけ]|Alkohol; Sake|彼女[かのじょ]は 酒[さけ]に 強[つよ]い。|Sie verträgt viel Alkohol.|Nomen
つける|つける|anmachen, einschalten|電気[でんき]をつけてください。|Mach bitte das Licht an.|Verb
一杯|一杯[いっぱい]|voll|プールは 人[ひと]で 一杯[いっぱい]です。|Das Schwimmbad ist voller Menschen.|Adverb
飛ぶ|飛[と]ぶ|fliegen|鳥[とり]が 飛[と]んでいます。|Ein Vogel fliegt.|Verb
飛行機|飛行機[ひこうき]|Flugzeug|息子[むすこ]は 飛行機[ひこうき]のおもちゃが 好[す]きです。|Mein Sohn mag Spielzeugflugzeuge.|Nomen
お願い|お 願[ねが]い|Bitte|お 願[ねが]いがあります。|Ich habe eine Bitte.|Nomen (mit する)
続く|続[つづ]く|andauern, weitergehen|工事[こうじ]は 3月[さんがつ]まで 続[つづ]きます。|Die Bauarbeiten dauern bis März.|Verb
日記|日記[にっき]|Tagebuch|私[わたし]は 毎日[まいにち]、 日記[にっき]を 付[つ]けています。|Ich schreibe jeden Tag Tagebuch.|Nomen
首|首[くび]|Hals|きりんの 首[くび]は 長[なが]い。|Der Hals der Giraffe ist lang.|Nomen
頭|頭[あたま]|Kopf|今朝[けさ]から 頭[あたま]が 痛[いた]い。|Seit heute Morgen habe ich Kopfschmerzen.|Nomen
顔|顔[かお]|Gesicht|彼[かれ]はタオルで 顔[かお]を 拭[ふ]きました。|Er wischte sich mit einem Handtuch das Gesicht ab.|Nomen
あれ|あれ|das dort (drüben)|あれは 何[なん]ですか。|Was ist das dort?|Nomen
感じる|感[かん]じる|fühlen, spüren|膝[ひざ]に 痛[いた]みを 感[かん]じます。|Ich spüre einen Schmerz im Knie.|Verb
探す|探[さが]す|suchen|彼[かれ]は 郵便局[ゆうびんきょく]を 探[さが]していました。|Er suchte das Postamt.|Verb
落ちる|落[お]ちる|fallen, herunterfallen|猿[さる]も 木[き]から 落[お]ちる。|Auch Affen fallen mal vom Baum.|Verb
お手洗い|お 手洗[てあら]い|Toilette|お 手洗[てあら]いはどこですか。|Wo ist die Toilette?|Nomen
冷たい|冷[つめ]たい|kalt (Dinge, bei Berührung)|冷[つめ]たい 飲[の]み 物[もの]をください。|Ein kaltes Getränk, bitte.|Adjektiv
汚い|汚[きたな]い|schmutzig|彼[かれ]の 部屋[へや]はとても 汚[きたな]い。|Sein Zimmer ist sehr schmutzig.|Adjektiv
太い|太[ふと]い|dick|彼女[かのじょ]は 足[あし]が 太[ふと]い。|Sie hat dicke Beine.|Adjektiv
曇る|曇[くも]る|sich bewölken|明日[あす]は 昼頃[ひるごろ]から 曇[くも]るでしょう。|Morgen wird es wohl ab Mittag bewölkt sein.|Verb
神|神[かみ]|Gott, Gottheit|彼[かれ]は 神[かみ]を 信[しん]じている。|Er glaubt an Gott.|Nomen
まずい|まずい|schlecht schmeckend; ungünstig|ここの 料理[りょうり]はまずい。|Das Essen hier schmeckt nicht.|Adjektiv
建てる|建[た]てる|bauen, errichten|私[わたし]たちは 来年[らいねん]、 家[いえ]を 建[た]てます。|Wir bauen nächstes Jahr ein Haus.|Verb
置く|置[お]く|legen, stellen; lassen|彼[かれ]はかばんをいすの 上[うえ]に 置[お]きました。|Er stellte die Tasche auf den Stuhl.|Verb
辺|辺[へん]|Gegend, Umgebung|彼[かれ]はこの 辺[へん]に 住[す]んでいます。|Er wohnt hier in der Gegend.|Nomen
黄色い|黄色[きいろ]い|gelb|彼女[かのじょ]に 黄色[きいろ]いバラを 買[か]いました。|Ich habe ihr gelbe Rosen gekauft.|Adjektiv
一緒に|一緒[いっしょ]に|zusammen|一緒[いっしょ]に 帰[かえ]りましょう。|Gehen wir zusammen nach Hause.|Adverb
緑|緑[みどり]|Grün; Pflanzen|この 町[まち]には 緑[みどり]がたくさんあります。|In dieser Stadt gibt es viel Grün.|Nomen
易しい|易[やさ]しい|leicht, einfach|この 問題[もんだい]はかなり 易[やさ]しいです。|Diese Aufgabe ist ziemlich leicht.|Adjektiv
留学生|留学生[りゅうがくせい]|Austauschstudent(in)|彼[かれ]は 留学生[りゅうがくせい]です。|Er ist Austauschstudent.|Nomen
戻る|戻[もど]る|zurückkehren, umkehren|今[いま]、 会社[かいしゃ]に 戻[もど]ります。|Ich gehe jetzt in die Firma zurück.|Verb
そば|そば|neben, in der Nähe|そばにいて 下[くだ]さい。|Bleib bitte bei mir.|Nomen
起きる|起[お]きる|aufstehen|私[わたし]は 毎朝6時[まいあさ ろくじ]に 起[お]きます。|Ich stehe jeden Morgen um sechs Uhr auf.|Verb
起こる|起[お]こる|geschehen, passieren|町[まち]で 大事件[だいじけん]が 起[お]こりました。|In der Stadt ist etwas Schlimmes passiert.|Verb
起こす|起[お]こす|wecken; aufrichten|明日[あす]、 6時[ろくじ]に 起[お]こしてください。|Wecken Sie mich bitte morgen um sechs Uhr.|Verb
起きる|起[お]きる|geschehen, sich ereignen|近所[きんじょ]で 盗難事件[とうなん じけん]が 起[お]きました。|In der Nachbarschaft hat es einen Diebstahl gegeben.|Verb
寝る|寝[ね]る|schlafen, ins Bett gehen|もう 寝[ね]よう。|Gehen wir schlafen.|Verb
細い|細[ほそ]い|dünn, schmal|彼女[かのじょ]は 指[ゆび]が 細[ほそ]いですね。|Sie hat schmale Finger.|Adjektiv
載せる|載[の]せる|auflegen, daraufstellen|皿[さら]にケーキを 載[の]せました。|Ich habe den Kuchen auf den Teller gelegt.|Verb
締める|締[し]める|festziehen, anschnallen|彼[かれ]はシートベルトを 締[し]めた。|Er hat den Sicherheitsgurt angelegt.|Verb
甘い|甘[あま]い|süß|このイチゴは 甘[あま]い。|Diese Erdbeere ist süß.|Adjektiv
こっち|こっち|hier, hierher (umgangssprachlich)|こっちに 来[き]て 下[くだ]さい。|Komm bitte hierher.|Pronomen
辛い|辛[から]い|scharf; salzig|彼[かれ]は 辛[から]いものが 好[す]きです。|Er mag scharfes Essen.|Adjektiv
優しい|優[やさ]しい|freundlich, sanft|彼[かれ]はとても 優[やさ]しい 人[ひと]です。|Er ist ein sehr freundlicher Mensch.|Adjektiv
夫|夫[おっと]|(mein) Ehemann|私[わたし]の 夫[おっと]はサラリーマンです。|Mein Mann ist Angestellter.|Nomen
妻|妻[つま]|(meine) Ehefrau|今日[きょう]は 妻[つま]の 誕生日[たんじょうび]だ。|Heute hat meine Frau Geburtstag.|Nomen
誰|誰[だれ]|wer|誰[だれ]と 会[あ]ってみたいですか。|Wen würdest du gern einmal treffen?|Nomen
愛する|愛[あい]する|lieben|私[わたし]は 家族[かぞく]を 愛[あい]しています。|Ich liebe meine Familie.|Verb
笑う|笑[わら]う|lachen, lächeln|赤[あか]ん 坊[ぼう]が 笑[わら]っています。|Das Baby lacht.|Verb
酸っぱい|酸[す]っぱい|sauer|このぶどうは 酸[す]っぱいです。|Diese Trauben sind sauer.|Adjektiv
言葉|言葉[ことば]|Wort; Sprache|この 言葉[ことば]の 意味[いみ]が 分[わ]かりません。|Ich verstehe die Bedeutung dieses Wortes nicht.|Nomen
よう|よう|Art, Weise; scheinen|彼女[かのじょ]は 眠[ねむ]いようです。|Sie scheint müde zu sein.|Nomen
呼ぶ|呼[よ]ぶ|rufen; nennen|ウェイターを 呼[よ]びましょう。|Rufen wir den Kellner.|Verb
胸|胸[むね]|Brust|胸[むね]に 少[すこ]し 痛[いた]みがあります。|Ich habe leichte Schmerzen in der Brust.|Nomen
腰|腰[こし]|Hüfte, Kreuz|昨日[きのう]から 腰[こし]が 痛[いた]い。|Seit gestern tut mir das Kreuz weh.|Nomen
背|背[せ]|Körpergröße; Rücken|彼女[かのじょ]は 背[せ]が 高[たか]い。|Sie ist groß.|Nomen
片仮名|片仮名[かたかな]|Katakana|お 名前[なまえ]を 片仮名[かたかな]で 書[か]いてください。|Schreiben Sie Ihren Namen bitte in Katakana.|Nomen
平仮名|平仮名[ひらがな]|Hiragana|私[わたし]は 平仮名[ひらがな]を 全部読[ぜんぶ よ]めます。|Ich kann alle Hiragana lesen.|Nomen
悲しい|悲[かな]しい|traurig|その 映画[えいが]はとても 悲[かな]しかった。|Der Film war sehr traurig.|Adjektiv
美しい|美[うつく]しい|schön|この 絵[え]は 美[うつく]しいです。|Dieses Bild ist schön.|Adjektiv
授業|授業[じゅぎょう]|Unterricht|今日[きょう]は 日本語[にほんご]の 授業[じゅぎょう]があります。|Heute habe ich Japanischunterricht.|Nomen (mit する)
あそこ|あそこ|dort drüben|あそこにバス 停[てい]があります。|Dort drüben ist eine Bushaltestelle.|Pronomen
手伝う|手伝[てつだ]う|helfen|私[わたし]が 手伝[てつだ]いましょう。|Ich helfe Ihnen.|Verb
狭い|狭[せま]い|eng, klein (Raum)|私[わたし]の 部屋[へや]は 狭[せま]いです。|Mein Zimmer ist klein.|Adjektiv
触る|触[さわ]る|berühren, anfassen|絵[え]に 触[さわ]らないでください。|Bitte berühren Sie das Bild nicht.|Verb
嫌い|嫌[きら]い|nicht mögen|私[わたし]はタバコが 嫌[きら]いです。|Ich mag keine Zigaretten.|Adjektiv
浴びる|浴[あ]びる|nehmen (Dusche), sich übergießen|私[わたし]は 朝[あさ]、シャワーを 浴[あ]びます。|Ich dusche morgens.|Verb
渇く|渇[かわ]く|trocken werden; durstig sein|喉[のど]が 渇[かわ]きました。|Ich habe Durst.|Verb
髪の毛|髪[かみ]の 毛[け]|Haare (Kopfhaar)|髪[かみ]の 毛[け]が 伸[の]びたね。|Deine Haare sind gewachsen.|Nomen
肩|肩[かた]|Schulter|肩[かた]が 凝[こ]りました。|Meine Schultern sind verspannt.|Nomen
鼻|鼻[はな]|Nase|鼻[はな]がかゆいです。|Meine Nase juckt.|Nomen
おいしい|おいしい|lecker|このケーキはおいしいね。|Dieser Kuchen ist lecker, nicht wahr?|Adjektiv
腕|腕[うで]|Arm|彼[かれ]の 腕[うで]は 太[ふと]い。|Er hat kräftige Arme.|Nomen
掛ける|掛[か]ける|aufhängen; anlegen|夫[おっと]の 服[ふく]をハンガーに 掛[か]けた。|Ich habe die Kleidung meines Mannes auf einen Bügel gehängt.|Verb
僕|僕[ぼく]|ich (von Männern und Jungen)|僕[ぼく]は 学生[がくせい]です。|Ich bin Student.|Nomen
駄目|駄目[だめ]|nichts taugen, nicht gut|彼[かれ]は 駄目[だめ]な 男[おとこ]だ。|Er ist ein Taugenichts.|な-Adjektiv
大丈夫|大丈夫[だいじょうぶ]|in Ordnung, kein Problem|大丈夫[だいじょうぶ]ですか。|Ist alles in Ordnung?|な-Adjektiv
風邪|風邪[かぜ]|Erkältung|私[わたし]は 風邪[かぜ]を 引[ひ]きました。|Ich habe mich erkältet.|Nomen
奇麗|奇麗[きれい]|schön; sauber|彼女[かのじょ]はとても 奇麗[きれい]だ。|Sie ist sehr schön.|な-Adjektiv
嬉しい|嬉[うれ]しい|froh, glücklich|彼[かれ]に 会[あ]えて 嬉[うれ]しかった。|Ich habe mich gefreut, ihn zu treffen.|Adjektiv
なる|なる|Früchte tragen|柿[かき]の 木[き]に 実[み]がたくさんなっています。|Am Kakibaum hängen viele Früchte.|Verb
ため|ため|für, zugunsten; Zweck|これは 医者[いしゃ]のためのサイトです。|Das ist eine Website für Ärzte.|Nomen
より|より|mehr, noch|これから、より 一層努力[いっそう どりょく]します。|Von jetzt an werde ich mich noch mehr anstrengen.|Adverb
七|七[しち]|sieben|そのグループのメンバーは 全部[ぜんぶ]で 七[しち] 人[にん]だ。|Die Gruppe hat insgesamt sieben Mitglieder.|Nomen
九|九[く]|neun|私[わたし]は 九[く] 月[がつ]に 行[い]く 予定[よてい]です。|Ich habe vor, im September zu fahren.|Nomen
億|億[おく]|hundert Millionen|世界人口[せかい じんこう]は 65[ろくじゅうご] 億[おく] 人[にん]だ。|Die Weltbevölkerung beträgt 6,5 Milliarden Menschen.|Nomen
寺|寺[てら]|buddhistischer Tempel|あそこに 古[ふる]いお 寺[てら]があります。|Dort drüben steht ein alter Tempel.|Nomen
ドル|ドル|Dollar|この 服[ふく]は 300[さんびゃく]ドルしました。|Diese Kleidung hat 300 Dollar gekostet.|Nomen
日|日[ひ]|Sonne; Tag|夏[なつ]は 日[ひ]が 長[なが]い。|Im Sommer sind die Tage lang.|Nomen
火|火[ひ]|Feuer|火[ひ]を 消[け]して。|Mach das Feuer aus.|Nomen
木|木[き]|Baum; Holz|台風[たいふう]で 木[き]が 倒[たお]れた。|Durch den Taifun ist ein Baum umgestürzt.|Nomen
金|金[きん]|Gold; Geld; Freitag|彼女[かのじょ]は 金[きん]のネックレスをしています。|Sie trägt eine goldene Halskette.|Nomen
システム|システム|System|全[すべ]てのシステムが 停止[ていし]した。|Alle Systeme sind ausgefallen.|Nomen
十分|十分[じゅうぶん]|genug, ausreichend|お 金[かね]はまだ 十分[じゅうぶん]あります。|Wir haben noch genug Geld.|な-Adjektiv
分|分[ぶん]|Anteil, Teil, Menge|このケーキはあなたの 分[ぶん]です。|Dieses Stück Kuchen ist deins.|Nomen
分ける|分[わ]ける|teilen, aufteilen, sortieren|お 菓子[かし]をみんなで 分[わ]けました。|Wir haben die Süßigkeiten unter allen aufgeteilt.|Verb
分かれる|分[わ]かれる|sich teilen, auseinandergehen|グループの 中[なか]で 意見[いけん]が 分[わ]かれました。|In der Gruppe gingen die Meinungen auseinander.|Verb
コンピューター|コンピューター|Computer|新[あたら]しいコンピューターを 買[か]った。|Ich habe einen neuen Computer gekauft.|Nomen
何か|何[なに]か|etwas, irgendetwas|道[みち]に 何[なに]か 落[お]ちています。|Auf der Straße liegt etwas.|Nomen
何|何[なん]|was|質問[しつもん]は 何[なん]ですか。|Wie lautet die Frage?|Nomen
先ず|先[ま]ず|zuerst|帰[かえ]ったら 先[ま]ず 手[て]を 洗[あら]いましょう。|Wenn du nach Hause kommst, wasch dir zuerst die Hände.|Adverb
先月|先月[せんげつ]|letzten Monat|先月[せんげつ]、 友達[ともだち]の 結婚式[けっこんしき]があった。|Letzten Monat war die Hochzeit eines Freundes.|Nomen
やる|やる|geben (an Tiere, Pflanzen, Jüngere)|犬[いぬ]にえさをやった。|Ich habe dem Hund Futter gegeben.|Verb
先週|先週[せんしゅう]|letzte Woche|先週[せんしゅう]は 海[うみ]に 行[い]った。|Letzte Woche war ich am Meer.|Nomen
今まで|今[いま]まで|bis jetzt|今[いま]までどこにいたのですか。|Wo warst du bis jetzt?|Adverb
来月|来月[らいげつ]|nächsten Monat|来月[らいげつ]から 大学生[だいがくせい]になります。|Ab nächstem Monat bin ich Student.|Nomen
来週|来週[らいしゅう]|nächste Woche|続[つづ]きは 来週[らいしゅう]やりましょう。|Machen wir nächste Woche weiter.|Nomen
ロボット|ロボット|Roboter|彼[かれ]はロボットの 研究[けんきゅう]をしています。|Er forscht über Roboter.|Nomen
行う|行[おこな]う|durchführen, veranstalten|その 会社[かいしゃ]は 来月[らいげつ]、キャンペーンを 行[おこな]う。|Die Firma führt nächsten Monat eine Kampagne durch.|Verb
行き|行[い]き|Hinweg, Hinfahrt|行[い]きは 新幹線[しんかんせん]で 行[い]った。|Auf dem Hinweg bin ich mit dem Shinkansen gefahren.|Nomen
行き|行[ゆ]き|in Richtung, nach (Fahrtziel)|東京[とうきょう] 行[ゆ]きの 列車[れっしゃ]に 乗[の]った。|Ich bin in den Zug nach Tokio gestiegen.|Nomen
帰り|帰[かえ]り|Rückweg, Heimweg|仕事[しごと]の 帰[かえ]りにビールを 飲[の]んだ。|Auf dem Heimweg von der Arbeit habe ich ein Bier getrunken.|Nomen
ほとんど|ほとんど|fast; kaum|お 金[かね]がほとんどありません。|Ich habe kaum Geld.|Adverb
大きさ|大[おお]きさ|Größe|この 大[おお]きさの 封筒[ふうとう]が 欲[ほ]しいのですが。|Ich hätte gern einen Umschlag in dieser Größe.|Nomen
大分|大分[だいぶ]|ziemlich, beträchtlich|大分[だいぶ]ピアノが 上手[うま]くなりました。|Du bist am Klavier schon ziemlich gut geworden.|Adverb
中|中[なか]|Inneres, in, Mitte|財布[さいふ]は 引[ひ]き 出[だ]しの 中[なか]にあります。|Das Portemonnaie ist in der Schublade.|Nomen
少年|少年[しょうねん]|Junge|少年[しょうねん]たちがサッカーをしている。|Die Jungen spielen Fußball.|Nomen
パソコン|パソコン|Computer, PC|彼[かれ]はパソコンを 2台持[にだい も]っています。|Er hat zwei Computer.|Nomen
少しも|少[すこ]しも|überhaupt nicht, kein bisschen|あなたは 少[すこ]しも 悪[わる]くない。|Du hast überhaupt keine Schuld.|Adverb
少々|少々[しょうしょう]|ein wenig, etwas|塩[しお]を 少々[しょうしょう] 入[い]れてください。|Geben Sie bitte ein wenig Salz dazu.|Adverb
多く|多[おお]く|viele; größtenteils|毎年[まいとし] 多[おお]くの 人[ひと]が 海外[かいがい]へ 旅行[りょこう]する。|Jedes Jahr reisen viele Menschen ins Ausland.|Adverb
上がる|上[あ]がる|hinaufgehen, steigen|私[わたし]たちは ２階[にかい]に 上[あ]がった。|Wir sind in den ersten Stock hinaufgegangen.|Verb
もう|もう|noch (ein), weitere(r, s)|コーヒーをもう 一杯[いっぱい]ください。|Noch eine Tasse Kaffee, bitte.|Adverb
上がる|上[あ]がる|nervös werden, Lampenfieber haben|彼[かれ]は 人前[ひとまえ]だと 上[あ]がってしまう。|Vor anderen Leuten wird er nervös.|Verb
年上|年上[としうえ]|älter (als jemand)|彼[かれ]は 私[わたし]より 年上[としうえ]です。|Er ist älter als ich.|Nomen
上り|上[のぼ]り|Auffahrt, Aufstieg; Richtung Hauptstadt|これは 上[のぼ]り 電車[でんしゃ]です。|Das ist der Zug stadteinwärts.|Nomen
下げる|下[さ]げる|senken, herunterdrehen|少[すこ]し 音量[おんりょう]を 下[さ]げてください。|Dreh die Lautstärke bitte etwas herunter.|Verb
プログラム|プログラム|Programm|受付[うけつけ]でプログラムを 受[う]け 取[と]った。|Ich habe am Empfang ein Programmheft bekommen.|Nomen
下がる|下[さ]がる|sinken, fallen; herunterhängen|やっと 熱[ねつ]が 下[さ]がった。|Das Fieber ist endlich gesunken.|Verb
下りる|下[お]りる|hinuntergehen, aussteigen|そこの 階段[かいだん]を 下[お]りてください。|Gehen Sie bitte die Treppe dort hinunter.|Verb
下ろす|下[お]ろす|herunternehmen, herunterlassen|棚[たな]からその 箱[はこ]を 下[お]ろしてください。|Nehmen Sie bitte die Schachtel vom Regal herunter.|Verb
下り|下[くだ]り|Abfahrt, Abstieg; Richtung stadtauswärts|もうすぐ 下[くだ]りの 電車[でんしゃ]が 発車[はっしゃ]します。|Der Zug stadtauswärts fährt gleich ab.|Nomen
よく|よく|gut, genau|よく 答[こた]えが 分[わ]かりましたね。|Du hast die Antwort aber gut herausgefunden.|Adverb
年下|年下[としした]|jünger (als jemand)|彼[かれ]は 奥[おく]さんより 年下[としした]です。|Er ist jünger als seine Frau.|Nomen
下る|下[くだ]る|hinabgehen, hinunterfahren|小[ちい]さな 船[ふね]が 川[かわ]を 下[くだ]っています。|Ein kleines Boot fährt den Fluss hinunter.|Verb
一方|一方[いっぽう]|eine Richtung, eine Seite; einerseits|ここは 一方[いっぽう] 通行[つうこう]です。|Das hier ist eine Einbahnstraße.|Nomen
方|方[かた]|Person (höflich)|次[つぎ]の 方[かた]、どうぞ。|Der Nächste, bitte.|Nomen
まま|まま|so wie es ist, unverändert|電気[でんき]がついたままですよ。|Das Licht ist noch an.|Nomen
二人|二人[ふたり]|zwei Personen|今日[きょう]は 妻[つま]と 二人[ふたり]で 食事[しょくじ]をします。|Heute esse ich mit meiner Frau zu zweit.|Nomen
大人しい|大人[おとな]しい|ruhig, brav, still|私[わたし]の 彼女[かのじょ]はとても 大人[おとな]しいです。|Meine Freundin ist sehr ruhig.|Adjektiv
人々|人々[ひとびと]|Leute, Menschen|あの 村[むら]の 人々[ひとびと]はとても 親切[しんせつ]です。|Die Leute in dem Dorf sind sehr freundlich.|Nomen
一人で|一人[ひとり]で|allein|今日[きょう]は 一人[ひとり]で 映画[えいが]を 見[み]ます。|Heute sehe ich mir allein einen Film an.|Adverb
テレビ|テレビ|Fernseher, Fernsehen|私[わたし]はテレビをあまり 見[み]ません。|Ich sehe nicht viel fern.|Nomen
外人|外人[がいじん]|Ausländer(in)|この 町[まち]には 外人[がいじん]が 少[すく]ない。|In dieser Stadt gibt es wenige Ausländer.|Nomen
外|外[そと]|draußen, außen|外[そと]は 暑[あつ]いよ。|Draußen ist es heiß.|Nomen
休日|休日[きゅうじつ]|Feiertag, freier Tag|休日[きゅうじつ]は 家[いえ]でよくテレビを 見[み]ます。|An freien Tagen sehe ich zu Hause oft fern.|Nomen
休み|休[やす]み|Pause, Ruhetag, Ferien|木曜日[もくようび]は 仕事[しごと]が 休[やす]みです。|Donnerstags habe ich frei.|Nomen
ソフト|ソフト|Software|このソフトで 日本語[にほんご]を 勉強[べんきょう]することができます。|Mit dieser Software kann man Japanisch lernen.|Nomen
力|力[ちから]|Kraft, Stärke|お 相撲[すもう]さんは、みんな 力[ちから] 持[も]ちだ。|Sumoringer sind alle sehr kräftig.|Nomen
協力|協力[きょうりょく]|Zusammenarbeit, Mithilfe|このプロジェクトにはみんなの 協力[きょうりょく]が 必要[ひつよう]です。|Für dieses Projekt ist die Mithilfe aller nötig.|Nomen (mit する)
人口|人口[じんこう]|Bevölkerung, Einwohnerzahl|その 国[くに]の 人口[じんこう]はどのくらいですか。|Wie viele Einwohner hat das Land?|Nomen
出口|出口[でぐち]|Ausgang|出口[でぐち]はあそこです。|Der Ausgang ist dort drüben.|Nomen
ただ|ただ|kostenlos, gratis|この 温泉[おんせん]はただです。|Diese heiße Quelle ist kostenlos.|Nomen
入り口|入[い]り 口[ぐち]|Eingang|入[い]り 口[ぐち]は 向[む]こうです。|Der Eingang ist dort drüben.|Nomen
右手|右手[みぎて]|rechte Hand|私[わたし]は 右手[みぎて]で 字[じ]を 書[か]きます。|Ich schreibe mit der rechten Hand.|Nomen
左手|左手[ひだりて]|linke Hand|彼女[かのじょ]は 左手[ひだりて]で 字[じ]を 書[か]く。|Sie schreibt mit der linken Hand.|Nomen
下手|下手[へた]|ungeschickt, schlecht (in etwas)|私[わたし]は 歌[うた]が 下手[へた]だ。|Ich kann schlecht singen.|な-Adjektiv
これら|これら|diese (Plural)|今日[きょう]はこれらの 問題[もんだい]について 話[はな]し 合[あ]います。|Heute sprechen wir über diese Probleme.|Nomen
足りる|足[た]りる|ausreichen, genügen|お 金[かね]が 足[た]りなくて 買[か]えなかった。|Ich hatte nicht genug Geld und konnte es nicht kaufen.|Verb
足す|足[た]す|hinzufügen, addieren|母[はは]は 味噌汁[みそしる]に 水[みず]を 足[た]した。|Meine Mutter hat Wasser in die Misosuppe nachgegossen.|Verb
山|山[やま]|Berg|山[やま]の 空気[くうき]はきれいだ。|Die Bergluft ist rein.|Nomen
川|川[かわ]|Fluss, Bach|小[ちい]さな 川[かわ]を 渡[わた]りました。|Ich habe einen kleinen Bach überquert.|Nomen
いずれ|いずれ|irgendwann, früher oder später|いずれまたお 会[あ]いしましょう。|Sehen wir uns irgendwann wieder.|Adverb
空く|空[あ]く|frei werden, leer sein|後[うし]ろの 席[せき]が 空[あ]いています。|Der Platz hinten ist frei.|Verb
空手|空手[からて]|Karate|彼[かれ]は 空手[からて]を 習[なら]っています。|Er lernt Karate.|Nomen
空|空[そら]|Himmel|空[そら]が 真[ま]っ 青[さお]です。|Der Himmel ist tiefblau.|Nomen
海外|海外[かいがい]|Übersee, Ausland|彼[かれ]は 海外[かいがい]での 生活[せいかつ]が 長[なが]いです。|Er hat lange im Ausland gelebt.|Nomen
あまり|あまり|nicht besonders (mit Verneinung)|このビールはあまり 美味[おい]しくありません。|Dieses Bier schmeckt nicht besonders.|Adverb
海|海[うみ]|Meer|海[うみ]は 広[ひろ]くて 大[おお]きい。|Das Meer ist weit und groß.|Nomen
毎日|毎日[まいにち]|jeden Tag|私[わたし]たちは 毎日[まいにち] 散歩[さんぽ]をします。|Wir gehen jeden Tag spazieren.|Nomen
毎年|毎年[まいとし]|jedes Jahr|私[わたし]は 毎年[まいとし]、 海外旅行[かいがい りょこう]に 行[い]きます。|Ich reise jedes Jahr ins Ausland.|Nomen
毎年|毎年[まいねん]|jedes Jahr|毎年[まいねん] 給料[きゅうりょう]が 上[あ]がる。|Mein Gehalt steigt jedes Jahr.|Nomen
なお|なお|außerdem, ferner; noch|なお、 雨[あめ]の 場合[ばあい]は 中止[ちゅうし]です。|Bei Regen fällt es übrigens aus.|Adverb
毎週|毎週[まいしゅう]|jede Woche|私[わたし]は 毎週[まいしゅう] 母[はは]に 電話[でんわ]をします。|Ich rufe jede Woche meine Mutter an.|Nomen
毎月|毎月[まいつき]|jeden Monat|私[わたし]は 毎月[まいつき] 貯金[ちょきん]をしています。|Ich spare jeden Monat Geld.|Nomen
石|石[いし]|Stein|私[わたし]は 石[いし]につまづいた。|Ich bin über einen Stein gestolpert.|Nomen
田んぼ|田[た]んぼ|Reisfeld|この 辺[へん]は 田[た]んぼがたくさんあります。|In dieser Gegend gibt es viele Reisfelder.|Nomen
ほぼ|ほぼ|fast, beinahe|仕事[しごと]がほぼ 終[お]わりました。|Die Arbeit ist fast fertig.|Adverb
花|花[はな]|Blume, Blüte|きれいな 花[はな]が 咲[さ]きました。|Schöne Blumen sind aufgeblüht.|Nomen
林|林[はやし]|Wäldchen, Hain|私[わたし]たちは 林[はやし]の 中[なか]に 入[はい]っていった。|Wir gingen in das Wäldchen hinein.|Nomen
森|森[もり]|Wald|私[わたし]は 森[もり]を 歩[ある]くのが 好[す]きです。|Ich gehe gern im Wald spazieren.|Nomen
子|子[こ]|Kind|その 子[こ]は 日本語[にほんご]が 分[わ]からない。|Das Kind versteht kein Japanisch.|Nomen
サービス|サービス|Service; Gratiszugabe|この 店[みせ]はサービスがいい。|In diesem Laden ist der Service gut.|Nomen (mit する)
女の子|女[おんな]の 子[こ]|Mädchen|あの 女[おんな]の 子[こ]を 知[し]っていますか。|Kennst du das Mädchen dort?|Nomen
男の子|男[おとこ]の 子[こ]|Junge|男[おとこ]の 子[こ]たちがサッカーをしている。|Die Jungen spielen Fußball.|Nomen
私たち|私[わたし]たち|wir|私[わたし]たちは 来月結婚[らいげつ けっこん]します。|Wir heiraten nächsten Monat.|Nomen
達する|達[たっ]する|erreichen|気温[きおん]は 35度[さんじゅうごど]に 達[たっ]した。|Die Temperatur erreichte 35 Grad.|Verb
グループ|グループ|Gruppe|店[みせ]に 学生[がくせい]のグループが 来[き]た。|Eine Gruppe Studenten kam in den Laden.|Nomen
家|家[いえ]|Haus, Zuhause|ここが 私[わたし]の 家[いえ]です。|Das hier ist mein Haus.|Nomen
家内|家内[かない]|meine Frau|家内[かない]は 九州出身[きゅうしゅう しゅっしん]です。|Meine Frau stammt aus Kyushu.|Nomen
客|客[きゃく]|Gast, Kunde|その 店[みせ]は 若[わか]い 客[きゃく]が 多[おお]いです。|Der Laden hat viele junge Kunden.|Nomen
空気|空気[くうき]|Luft; Atmosphäre|ここは 空気[くうき]がきれいです。|Hier ist die Luft sauber.|Nomen
ホテル|ホテル|Hotel|今[いま]ホテルに 着[つ]きました。|Ich bin gerade im Hotel angekommen.|Nomen
気に入る|気[き]に 入[い]る|gefallen, mögen|新[あたら]しい 靴[くつ]がとても 気[き]に 入[い]りました。|Meine neuen Schuhe gefallen mir sehr.|Verb
人気|人気[にんき]|Beliebtheit|このバンドはとても 人気[にんき]があるよ。|Diese Band ist sehr beliebt.|Nomen
雨|雨[あめ]|Regen|雨[あめ]が 降[ふ]っています。|Es regnet.|Nomen
雪|雪[ゆき]|Schnee|クリスマスに 雪[ゆき]が 降[ふ]りました。|An Weihnachten hat es geschneit.|Nomen
まとめる|まとめる|zusammenfassen, zusammenpacken, ordnen|彼女[かのじょ]は 荷物[にもつ]をまとめて 出[で]て 行[い]った。|Sie packte ihre Sachen und ging.|Verb
青い|青[あお]い|blau|ここの 海[うみ]はとても 青[あお]い。|Das Meer hier ist sehr blau.|Adjektiv
青|青[あお]|Blau; Grün (Ampel)|私[わたし]の 好[す]きな 色[いろ]は 青[あお]です。|Meine Lieblingsfarbe ist Blau.|Nomen
晴れ|晴[は]れ|schönes Wetter, heiter|明日[あす]の 天気[てんき]は 晴[は]れです。|Morgen wird das Wetter heiter.|Nomen
明らか|明[あき]らか|klar, offensichtlich|明[あき]らかに 彼[かれ]が 悪[わる]い。|Er ist eindeutig im Unrecht.|Adjektiv
やはり|やはり|wie erwartet; doch, auch|彼[かれ]はやはり 遅刻[ちこく]しました。|Er kam wie erwartet zu spät.|Adverb
明るい|明[あか]るい|hell; fröhlich|彼女[かのじょ]は 明[あか]るい 性格[せいかく]です。|Sie hat ein fröhliches Wesen.|Adjektiv
明日|明日[あした]|morgen|明日[あした]、 会社[かいしゃ]を 休[やす]みます。|Morgen nehme ich mir in der Firma frei.|Nomen
暗い|暗[くら]い|dunkel; düster|東[ひがし]の 空[そら]が 暗[くら]いです。|Der Himmel im Osten ist dunkel.|Adjektiv
昨年|昨年[さくねん]|letztes Jahr|昨年[さくねん]は 地震[じしん]が 多[おお]い 年[とし]でした。|Letztes Jahr gab es viele Erdbeben.|Nomen
はっきり|はっきり|klar, deutlich|今日[きょう]は 山[やま]がはっきり 見[み]える。|Heute sieht man die Berge deutlich.|Adverb
一昨年|一昨年[おととし]|vorletztes Jahr|一昨年[おととし] 初[はじ]めて 京都[きょうと]へ 旅行[りょこう]しました。|Vorletztes Jahr bin ich zum ersten Mal nach Kyoto gereist.|Nomen
一昨日|一昨日[おととい]|vorgestern|一昨日[おととい] 彼[かれ]から 電話[でんわ]がありました。|Vorgestern hat er angerufen.|Nomen
東|東[ひがし]|Osten|東[ひがし]の 空[そら]が 暗[くら]いです。|Der Himmel im Osten ist dunkel.|Nomen
西|西[にし]|Westen|太陽[たいよう]は 西[にし]に 沈[しず]みます。|Die Sonne geht im Westen unter.|Nomen
つまり|つまり|das heißt, kurz gesagt|つまり、あなたは 何[なに]も 知[し]らないのですね。|Das heißt, du weißt gar nichts.|Adverb
南|南[みなみ]|Süden|私[わたし]の 家[いえ]は 町[まち]の 南[みなみ]にあります。|Mein Haus liegt im Süden der Stadt.|Nomen
北|北[きた]|Norden|ロシアは 日本[にっぽん]の 北[きた]にあります。|Russland liegt nördlich von Japan.|Nomen
方向|方向[ほうこう]|Richtung|あの 人[ひと]たちは 皆[みな]、 同[おな]じ 方向[ほうこう]を 見[み]ている。|Die Leute dort schauen alle in dieselbe Richtung.|Nomen
向かう|向[む]かう|sich zuwenden; unterwegs sein nach|今[いま]、 会社[かいしゃ]に 向[む]かっています。|Ich bin gerade auf dem Weg in die Firma.|Verb
ビル|ビル|Gebäude, Hochhaus|私[わたし]の 会社[かいしゃ]はあのビルの 8階[はちかい]です。|Meine Firma ist im siebten Stock des Gebäudes dort.|Nomen
向こう|向[む]こう|drüben, die andere Seite; Gegenseite|友達[ともだち]は 向[む]こうにいます。|Mein Freund ist dort drüben.|Nomen
向く|向[む]く|sich wenden, schauen nach|こっちを 向[む]いてください。|Schau bitte hierher.|Verb
開く|開[あ]く|aufgehen, sich öffnen|電車[でんしゃ]のドアが 開[あ]きました。|Die Zugtür ging auf.|Verb
聞こえる|聞[き]こえる|zu hören sein|隣[となり]の 部屋[へや]からテレビの 音[おと]が 聞[き]こえる。|Aus dem Nebenzimmer hört man den Fernseher.|Verb
もちろん|もちろん|natürlich, selbstverständlich|もちろん 一緒[いっしょ]に 行[い]きます。|Natürlich komme ich mit.|Adverb
年間|年間[ねんかん]|Zeitraum eines Jahres, pro Jahr|年間[ねんかん] 5万人[ごまんにん]がここを 訪[おとず]れます。|Pro Jahr kommen 50.000 Besucher hierher.|Nomen
この間|この 間[あいだ]|neulich, vor Kurzem|この 間[あいだ] 彼女[かのじょ]に 会[あ]った。|Neulich habe ich sie getroffen.|Nomen
間|間[あいだ]|Zwischenraum, zwischen|雲[くも]の 間[あいだ]から 月[つき]が 出[で]た。|Zwischen den Wolken kam der Mond hervor.|Nomen
人間|人間[にんげん]|Mensch|人間[にんげん]の 心[こころ]は 複雑[ふくざつ]です。|Das Herz des Menschen ist kompliziert.|Nomen
かつて|かつて|einst, früher|かつて 私[わたし]が 学生[がくせい]だった 頃[ころ]のことです。|Das war damals, als ich noch Student war.|Adverb
高さ|高[たか]さ|Höhe|富士山[ふじさん]の 高[たか]さは 3,776[さんぜんななひゃく-ななじゅうろく]メートルです。|Der Fuji ist 3.776 Meter hoch.|Nomen
最大|最大[さいだい]|größte(r, s), Maximum|これは 世界[せかい] 最大[さいだい]の 船[ふね]です。|Das ist das größte Schiff der Welt.|Nomen
初めて|初[はじ]めて|zum ersten Mal|東京[とうきょう]に 来[く]るのは 初[はじ]めてです。|Ich bin zum ersten Mal in Tokio.|Adverb
最初|最初[さいしょ]|Anfang, zuerst|5[ご]ページの 最初[さいしょ]を 見[み]てください。|Schauen Sie bitte auf den Anfang von Seite 5.|Nomen
スポーツ|スポーツ|Sport|あなたは 何[なに]かスポーツをしていますか。|Treibst du irgendeinen Sport?|Nomen
初め|初[はじ]め|Anfang, Beginn|初[はじ]めは 上手[うま]くできませんでした。|Am Anfang konnte ich es nicht gut.|Nomen
今後|今後[こんご]|von nun an, künftig|今後[こんご]ともよろしくお 願[ねが]いします。|Auch künftig auf gute Zusammenarbeit.|Nomen
後|後[のち]|später, danach|後[のち]に 彼[かれ]は 総理大臣[そうり だいじん]になりました。|Später wurde er Premierminister.|Nomen
最後|最後[さいご]|letzte(r, s), Ende|今日[きょう]が 夏休[なつやす]み 最後[さいご]の 日[ひ]だ。|Heute ist der letzte Tag der Sommerferien.|Nomen
なぜ|なぜ|warum, weshalb|なぜ 来[こ]なかったの。|Warum bist du nicht gekommen?|Adverb
明後日|明後日[あさって]|übermorgen|明後日[あさって]は 休日[きゅうじつ]です。|Übermorgen ist ein Feiertag.|Nomen
牛|牛[うし]|Rind, Kuh|牛[うし]が 草[くさ]を 食[た]べています。|Die Kuh frisst Gras.|Nomen
半分|半分[はんぶん]|Hälfte|お 菓子[かし]を 友達[ともだち]に 半分[はんぶん]あげた。|Ich habe einem Freund die Hälfte der Süßigkeiten gegeben.|Nomen
半年|半年[はんとし]|ein halbes Jahr|日本[にっぽん]に 来[き]て 半年[はんとし]になります。|Ich bin seit einem halben Jahr in Japan.|Nomen
そのまま|そのまま|so wie es ist, unverändert|そのままお 待[ま]ちください。|Bitte warten Sie einen Moment.|Adverb
半月|半月[はんつき]|ein halber Monat|半月[はんつき] 前[まえ]に 日本[にほん]に 来[き]ました。|Ich bin vor einem halben Monat nach Japan gekommen.|Nomen
半日|半日[はんにち]|ein halber Tag|今日[きょう]は 半日[はんにち]だけ 仕事[しごと]だ。|Heute arbeite ich nur einen halben Tag.|Nomen
毎朝|毎朝[まいあさ]|jeden Morgen|私[わたし]は 毎朝[まいあさ]ジョギングをします。|Ich jogge jeden Morgen.|Nomen
今朝|今朝[けさ]|heute Morgen|今朝[けさ]から 頭[あたま]が 痛[いた]い。|Seit heute Morgen habe ich Kopfschmerzen.|Nomen
もし|もし|falls, wenn|もし 雨[あめ]が 降[ふ]ったら、 行[い]きません。|Falls es regnet, gehe ich nicht.|Adverb
昼休み|昼休[ひるやす]み|Mittagspause|昼休[ひるやす]みに 公園[こうえん]に 行[い]った。|In der Mittagspause bin ich in den Park gegangen.|Nomen
昼前|昼前[ひるまえ]|am Vormittag, vor Mittag|昼前[ひるまえ]に 会議[かいぎ]があった。|Am Vormittag war eine Besprechung.|Nomen
昼間|昼間[ひるま]|tagsüber|昼間[ひるま]は 仕事[しごと]で 忙[いそが]しいです。|Tagsüber bin ich mit der Arbeit beschäftigt.|Nomen
毎晩|毎晩[まいばん]|jeden Abend|姉[あね]は 毎晩[まいばん] 日記[にっき]を 書[か]いています。|Meine große Schwester schreibt jeden Abend Tagebuch.|Nomen
つもり|つもり|Absicht, Vorhaben|明日[あした]からタバコを 止[や]めるつもりです。|Ich habe vor, ab morgen mit dem Rauchen aufzuhören.|Nomen
今夜|今夜[こんや]|heute Abend, heute Nacht|今夜[こんや]は 月[つき]がとてもきれいです。|Der Mond ist heute Abend sehr schön.|Nomen
昨夜|昨夜[ゆうべ]|gestern Abend, letzte Nacht|昨夜[ゆうべ]、 流[なが]れ 星[ぼし]を 見[み]ました。|Gestern Abend habe ich Sternschnuppen gesehen.|Nomen
夜中|夜中[よなか]|mitten in der Nacht|夜中[よなか]に 電話[でんわ]がありました。|Mitten in der Nacht kam ein Anruf.|Nomen
夕方|夕方[ゆうがた]|früher Abend|夕方[ゆうがた]そちらに 着[つ]きます。|Ich komme am frühen Abend bei Ihnen an.|Nomen
やっと|やっと|endlich|やっと 仕事[しごと]が 終[お]わりました。|Endlich bin ich mit der Arbeit fertig.|Adverb
昼食|昼食[ちゅうしょく]|Mittagessen|昼食[ちゅうしょく]に 寿司[すし]を 食[た]べました。|Zum Mittagessen habe ich Sushi gegessen.|Nomen
朝食|朝食[ちょうしょく]|Frühstück|朝食[ちょうしょく]に 納豆[なっとう]を 食[た]べました。|Zum Frühstück habe ich Nattō gegessen.|Nomen
夕食|夕食[ゆうしょく]|Abendessen|夕食[ゆうしょく]は 7時[しちじ]です。|Abendessen gibt es um sieben Uhr.|Nomen
夕飯|夕飯[ゆうはん]|Abendessen|夕飯[ゆうはん]は 寿司[すし]でした。|Zum Abendessen gab es Sushi.|Nomen
ニュース|ニュース|Nachrichten|夜[よる]のニュースを 見[み]ましたか。|Hast du die Abendnachrichten gesehen?|Nomen
見方|見方[みかた]|Sichtweise, Betrachtungsweise|彼[かれ]に 対[たい]する 見方[みかた]が 変[か]わりました。|Meine Sicht auf ihn hat sich geändert.|Nomen
花見|花見[はなみ]|Kirschblütenschau|友達[ともだち]と 花見[はなみ]をしました。|Ich war mit Freunden bei der Kirschblütenschau.|Nomen
言い方|言[い]い 方[かた]|Ausdrucksweise, Art zu sprechen|そんな 言[い]い 方[かた]をしてはいけません。|So darfst du das nicht sagen.|Nomen
話|話[はなし]|Gespräch, Geschichte|あなたの 話[はなし]は 面白[おもしろ]いね。|Deine Geschichte ist interessant.|Nomen
ずっと|ずっと|die ganze Zeit; viel (mehr)|父[ちち]は 休[やす]みの 日[ひ]はずっとテレビを 見[み]ている。|An freien Tagen sieht mein Vater die ganze Zeit fern.|Adverb
読み|読[よ]み|Lesen; Lesung; Einschätzung|母[はは]に 読[よ]み 書[か]きを 習[なら]いました。|Lesen und Schreiben habe ich von meiner Mutter gelernt.|Nomen
読み方|読[よ]み 方[かた]|Lesart, Lesung|この 漢字[かんじ]の 読[よ]み 方[かた]を 教[おし]えてください。|Sagen Sie mir bitte, wie man dieses Kanji liest.|Nomen
語る|語[かた]る|erzählen, reden|今夜[こんや]は 大[おお]いに 語[かた]りましょう。|Reden wir heute Abend ausgiebig.|Verb
言語|言語[げんご]|Sprache|彼[かれ]はアジアの 言語[げんご]を 研究[けんきゅう]している。|Er erforscht die Sprachen Asiens.|Nomen
ビデオ|ビデオ|Video|私[わたし]はその 番組[ばんぐみ]をビデオに 撮[と]った。|Ich habe die Sendung auf Video aufgenommen.|Nomen
英語|英語[えいご]|Englisch|あなたは 英語[えいご]が 話[はな]せますか。|Kannst du Englisch sprechen?|Nomen
文字|文字[もじ]|Schriftzeichen, Buchstabe|壁[かべ]に 文字[もじ]が 書[か]いてあった。|An der Wand stand etwas geschrieben.|Nomen
ローマ字|ローマ 字[じ]|lateinische Schrift, Rōmaji|ローマ 字[じ]で 名前[なまえ]を 書[か]いてください。|Schreiben Sie Ihren Namen bitte in lateinischen Buchstaben.|Nomen
字|字[じ]|Schriftzeichen, Schrift|もっと 大[おお]きく 字[じ]を 書[か]いてください。|Schreiben Sie bitte größer.|Nomen
マンション|マンション|Eigentumswohnung, Wohnung (in einem größeren Wohnhaus)|彼[かれ]はマンションに 住[す]んでいます。|Er wohnt in einer Wohnung.|Nomen
書き方|書[か]き 方[かた]|Schreibweise|彼[かれ]はその 漢字[かんじ]の 書[か]き 方[かた]が 分[わ]からない。|Er weiß nicht, wie man dieses Kanji schreibt.|Nomen
覚める|覚[さ]める|aufwachen|今朝[けさ]は 6時[ろくじ]に 目[め]が 覚[さ]めた。|Heute Morgen bin ich um sechs Uhr aufgewacht.|Verb
覚ます|覚[さ]ます|aufwecken; (目を覚ます) aufwachen|子供[こども]が 目[め]を 覚[さ]ました。|Das Kind ist aufgewacht.|Verb
大会|大会[たいかい]|große Versammlung, Turnier, Wettbewerb|夏[なつ]には 川辺[かわべ]で 花火[はなび] 大会[たいかい]があります。|Im Sommer gibt es am Flussufer ein Feuerwerk.|Nomen
しばらく|しばらく|eine Weile; lange nicht|そこでしばらく 休[やす]んでいます。|Er ruht sich dort eine Weile aus.|Adverb
会話|会話[かいわ]|Gespräch, Unterhaltung|親子[おやこ]の 会話[かいわ]は 大切[たいせつ]です。|Gespräche zwischen Eltern und Kindern sind wichtig.|Nomen (mit する)
話し合う|話[はな]し 合[あ]う|besprechen, miteinander reden|私[わたし]たちはよく 話[はな]し 合[あ]いました。|Wir haben ausführlich miteinander gesprochen.|Verb
合う|合[あ]う|passen|この 靴[くつ]は 私[わたし]の 足[あし]に 合[あ]っている。|Diese Schuhe passen mir.|Verb
間に合う|間[ま]に 合[あ]う|rechtzeitig sein; ausreichen|授業[じゅぎょう]に 間[ま]に 合[あ]いました。|Ich habe es rechtzeitig zum Unterricht geschafft.|Verb
ガス|ガス|Gas|地震[じしん]でガスが 止[と]まった。|Wegen des Erdbebens wurde das Gas abgestellt.|Nomen
会社|会社[かいしゃ]|Firma|彼[かれ]は 小[ちい]さな 会社[かいしゃ]に 勤[つと]めています。|Er arbeitet in einer kleinen Firma.|Nomen
社会|社会[しゃかい]|Gesellschaft|これは 大[おお]きな 社会[しゃかい] 問題[もんだい]になっている。|Das ist zu einem großen gesellschaftlichen Problem geworden.|Nomen
社員|社員[しゃいん]|Firmenangestellte(r)|彼[かれ]は 優秀[ゆうしゅう]な 社員[しゃいん]です。|Er ist ein hervorragender Mitarbeiter.|Nomen
仕方|仕方[しかた]|Art und Weise, Methode|ファイルのダウンロードの 仕方[しかた]が 分[わ]かりません。|Ich weiß nicht, wie man die Datei herunterlädt.|Nomen
うまい|うまい|gut, geschickt|彼[かれ]は 野球[やきゅう]がうまい。|Er spielt gut Baseball.|Adjektiv
食事|食事[しょくじ]|Mahlzeit, Essen|今日[きょう]は 上司[じょうし]と 食事[しょくじ]をする。|Heute esse ich mit meinem Chef.|Nomen (mit する)
火事|火事[かじ]|Brand, Feuer|火事[かじ]です。 119番[ひゃくじゅうきゅうばん]に 電話[でんわ]してください。|Es brennt! Rufen Sie bitte die 119 an.|Nomen
大事|大事[だいじ]|wichtig, wertvoll|お 体[からだ]をお 大事[だいじ]に。|Geben Sie gut auf sich acht.|な-Adjektiv
事故|事故[じこ]|Unfall|彼[かれ]は 事故[じこ]で 怪我[けが]をしました。|Er wurde bei dem Unfall verletzt.|Nomen
サラリーマン|サラリーマン|Angestellter (mit festem Gehalt)|父[ちち]はサラリーマンです。|Mein Vater ist Angestellter.|Nomen
工事|工事[こうじ]|Bauarbeiten|工事[こうじ]の 音[おと]がうるさい。|Der Baulärm ist laut.|Nomen (mit する)
工場|工場[こうじょう]|Fabrik|彼[かれ]は 食品[しょくひん] 工場[こうじょう]で 働[はたら]いています。|Er arbeitet in einer Lebensmittelfabrik.|Nomen
電話|電話[でんわ]|Telefon, Anruf|あとで 電話[でんわ]します。|Ich rufe später an.|Nomen (mit する)
電気|電気[でんき]|Strom; Licht|電気[でんき]をつけてください。|Mach bitte das Licht an.|Nomen
バス|バス|Bus|バスで 行[い]こう。|Fahren wir mit dem Bus.|Nomen
車|車[くるま]|Auto, Wagen|この 道[みち]は 車[くるま]が 多[おお]い。|Auf dieser Straße fahren viele Autos.|Nomen
駅員|駅員[えきいん]|Bahnhofsangestellte(r)|駅員[えきいん]に 聞[き]きましょう。|Fragen wir einen Bahnhofsangestellten.|Nomen
通り|通[とお]り|Straße, Durchgang|この 通[とお]りはにぎやかですね。|Diese Straße ist belebt, nicht wahr?|Nomen
通る|通[とお]る|durchgehen, vorbeigehen, passieren|毎日[まいにち]、この 道[みち]を 通[とお]ります。|Ich gehe jeden Tag diese Straße entlang.|Verb
クラス|クラス|Klasse|この 学校[がっこう]は1クラス30 人[にん]です。|An dieser Schule hat eine Klasse 30 Schüler.|Nomen
通う|通[かよ]う|regelmäßig hingehen, pendeln|私[わたし]はジムに 通[かよ]っています。|Ich gehe regelmäßig ins Fitnessstudio.|Verb
交通事故|交通事故[こうつうじこ]|Verkehrsunfall|彼[かれ]は 交通事故[こうつうじこ]を 起[お]こした。|Er hat einen Verkehrsunfall verursacht.|Nomen
水道|水道[すいどう]|Wasserleitung, Leitungswasser|東京[とうきょう]は 水道[すいどう]の 水[みず]が 不味[まず]い。|In Tokio schmeckt das Leitungswasser nicht.|Nomen
車道|車道[しゃどう]|Fahrbahn|車道[しゃどう]の 工事[こうじ]が 始[はじ]まりました。|Die Bauarbeiten an der Fahrbahn haben begonnen.|Nomen
トラック|トラック|Lastwagen|トラックを 運転[うんてん]できますか。|Kannst du Lastwagen fahren?|Nomen
道路|道路[どうろ]|Straße|この 道路[どうろ]は 3年前[さんねんまえ]にできました。|Diese Straße wurde vor drei Jahren fertiggestellt.|Nomen
土地|土地[とち]|Grundstück, Land|ここは 父[ちち]の 土地[とち]です。|Das hier ist das Grundstück meines Vaters.|Nomen
地図|地図[ちず]|Landkarte, Stadtplan|地図[ちず]を 見[み]て 来[き]てください。|Schauen Sie bitte auf die Karte und kommen Sie her.|Nomen
他|他[た]|andere, Sonstiges|留学生[りゅうがくせい]はアジア 人[じん]が 多[おお]く、その 他[た]は 3割[さんわり]です。|Unter den Austauschstudenten sind viele Asiaten, die anderen machen 30 Prozent aus.|Nomen
パーティー|パーティー|Party, Feier|明日[あした]、うちでパーティーを 開[ひら]きます。|Morgen gebe ich bei mir zu Hause eine Party.|Nomen (mit する)
止める|止[と]める|anhalten, stoppen|車[くるま]を 止[と]めて。|Halt das Auto an.|Verb
止まる|止[と]まる|stehen bleiben, anhalten|今朝[けさ]、 事故[じこ]で 電車[でんしゃ]が 止[と]まりました。|Heute Morgen standen die Züge wegen eines Unfalls still.|Verb
止む|止[や]む|aufhören (Regen, Wind)|雨[あめ]が 止[や]みました。|Der Regen hat aufgehört.|Verb
歩道|歩道[ほどう]|Gehweg, Bürgersteig|歩道[ほどう]を 歩[ある]きましょう。|Gehen wir auf dem Gehweg.|Nomen
うまい|うまい|lecker (umgangssprachlich)|うまい 寿司屋[すしや]を 見[み]つけたよ。|Ich habe einen guten Sushi-Laden entdeckt.|Adjektiv
渡す|渡[わた]す|übergeben, hinüberreichen|彼[かれ]に 手紙[てがみ]を 渡[わた]しました。|Ich habe ihm den Brief übergeben.|Verb
渡る|渡[わた]る|überqueren, hinübergehen|私[わたし]たちは 歩[ある]いて 橋[はし]を 渡[わた]った。|Wir sind zu Fuß über die Brücke gegangen.|Verb
年度|年度[ねんど]|Geschäftsjahr, Schuljahr|売[う]り 上[あ]げは 年度[ねんど]によって 違[ちが]います。|Der Umsatz ist je nach Geschäftsjahr unterschiedlich.|Nomen
今度|今度[こんど]|dieses Mal; nächstes Mal|今度[こんど]はどこに 行[い]きたいですか。|Wohin möchtest du diesmal fahren?|Nomen
ガラス|ガラス|Glas (Material)|クリスタルガラスの 花瓶[かびん]を 買[か]いました。|Ich habe eine Vase aus Kristallglas gekauft.|Nomen
何度|何度[なんど]|wie oft; wie viel Grad|あの 店[みせ]には 何度[なんど]も 行[い]きました。|In dem Laden war ich schon viele Male.|Nomen
最近|最近[さいきん]|in letzter Zeit, neuerdings|それは 最近[さいきん] 話題[わだい]の 本[ほん]ですね。|Das ist das Buch, über das in letzter Zeit alle reden.|Nomen
遠く|遠[とお]く|Ferne, weit weg|遠[とお]くに 船[ふね]が 見[み]えます。|In der Ferne sieht man ein Schiff.|Adverb
社長|社長[しゃちょう]|Firmenchef(in), Direktor(in)|おばは 小[ちい]さな 会社[かいしゃ]の 社長[しゃちょう]です。|Meine Tante ist Chefin einer kleinen Firma.|Nomen
コース|コース|Kurs; Strecke|私[わたし]は 日本語[にほんご]コースを 取[と]っています。|Ich belege einen Japanischkurs.|Nomen
会長|会長[かいちょう]|Vorsitzende(r), Präsident(in)|初[はじ]めに 会長[かいちょう]が 挨拶[あいさつ]した。|Zu Beginn sprach der Vorsitzende ein Grußwort.|Nomen
長さ|長[なが]さ|Länge|このケーブルの 長[なが]さは 1[いち]メートルです。|Dieses Kabel ist einen Meter lang.|Nomen
長男|長男[ちょうなん]|ältester Sohn|彼[かれ]の 長男[ちょうなん]は 8才[はっさい]です。|Sein ältester Sohn ist acht Jahre alt.|Nomen
長女|長女[ちょうじょ]|älteste Tochter|うちの 長女[ちょうじょ]は 10歳[じゅっさい]です。|Unsere älteste Tochter ist zehn.|Nomen
アパート|アパート|Mietwohnung, Wohnhaus|彼[かれ]はアパートに 住[す]んでいます。|Er wohnt in einer Mietwohnung.|Nomen
広がる|広[ひろ]がる|sich ausbreiten, sich erweitern|留学[りゅうがく]してから 私[わたし]の 世界[せかい]が 広[ひろ]がった。|Seit meinem Auslandsstudium hat sich meine Welt erweitert.|Verb
広さ|広[ひろ]さ|Fläche, Weite|その 家[いえ]の 広[ひろ]さはどれ 位[くらい]ですか。|Wie groß ist das Haus?|Nomen
全体|全体[ぜんたい]|das Ganze, insgesamt|全体[ぜんたい]の 80[はちじゅっ]パーセントが 完成[かんせい]しました。|80 Prozent des Ganzen sind fertig.|Nomen
全く|全[まった]く|völlig, überhaupt (nicht)|私[わたし]には 全[まった]く 分[わ]かりません。|Ich verstehe das überhaupt nicht.|Adverb
レコード|レコード|Schallplatte; Rekord|ジャズのレコードをかけました。|Ich habe eine Jazzplatte aufgelegt.|Nomen
安全|安全[あんぜん]|Sicherheit|安全[あんぜん]が 第一[だいいち]です。|Sicherheit geht vor.|な-Adjektiv
一部|一部[いちぶ]|ein Teil|計画[けいかく]を 一部[いちぶ] 変更[へんこう]しましょう。|Ändern wir den Plan teilweise.|Nomen
部分|部分[ぶぶん]|Teil, Abschnitt|この 部分[ぶぶん]は 問題[もんだい]ないです。|Dieser Teil ist unproblematisch.|Nomen
国内|国内[こくない]|Inland, im Land|この 携帯電話[けいたい でんわ]が 使[つか]えるのは 国内[こくない]だけです。|Dieses Handy kann man nur im Inland benutzen.|Nomen
どんどん|どんどん|bum-bum (Klopfen); zügig, immer mehr|ドアをどんどんとたたいた。|Ich habe kräftig an die Tür geklopft.|Adverb
全国|全国[ぜんこく]|das ganze Land|次[つぎ]は 全国[ぜんこく]のお 天気[てんき]です。|Als Nächstes das Wetter im ganzen Land.|Nomen
外国|外国[がいこく]|Ausland|母[はは]はまだ 外国[がいこく]に 行[い]ったことがありません。|Meine Mutter war noch nie im Ausland.|Nomen
国会|国会[こっかい]|Parlament (Japans)|国会[こっかい]が 再開[さいかい]した。|Das Parlament ist wieder zusammengetreten.|Nomen
帰国|帰国[きこく]|Heimkehr ins eigene Land|彼[かれ]は 帰国[きこく]しました。|Er ist in sein Land zurückgekehrt.|Nomen (mit する)
カメラ|カメラ|Kamera|カメラが 壊[こわ]れた。|Die Kamera ist kaputtgegangen.|Nomen
外国人|外国人[がいこくじん]|Ausländer(in)|日本[にほん]に 住[す]む 外国人[がいこくじん]が 増[ふ]えています。|Die Zahl der in Japan lebenden Ausländer nimmt zu.|Nomen
外国語|外国語[がいこくご]|Fremdsprache|外国語[がいこくご]を 習[なら]うのは 難[むずか]しい。|Eine Fremdsprache zu lernen ist schwer.|Nomen
世界|世界[せかい]|Welt|私[わたし]は 世界[せかい] 旅行[りょこう]をしたい。|Ich möchte eine Weltreise machen.|Nomen
白|白[しろ]|Weiß|白[しろ]は 雪[ゆき]の 色[いろ]です。|Weiß ist die Farbe des Schnees.|Nomen
テープ|テープ|Band, Kassette; Klebeband|彼女[かのじょ]はその 会話[かいわ]をテープに 録音[ろくおん]した。|Sie hat das Gespräch auf Band aufgenommen.|Nomen
黒い|黒[くろ]い|schwarz|彼女[かのじょ]は 黒[くろ]いドレスを 着[き]ています。|Sie trägt ein schwarzes Kleid.|Adjektiv
黒|黒[くろ]|Schwarz|黒[くろ]のボールペンはありますか。|Haben Sie einen schwarzen Kugelschreiber?|Nomen
赤ちゃん|赤[あか]ちゃん|Baby|ベッドで 赤[あか]ちゃんが 眠[ねむ]っています。|Das Baby schläft im Bett.|Nomen
赤|赤[あか]|Rot|信号[しんごう]が 赤[あか]に 変[か]わりました。|Die Ampel ist auf Rot gesprungen.|Nomen
ビール|ビール|Bier|夏[なつ]はビールがとても 美味[おい]しい。|Im Sommer schmeckt Bier besonders gut.|Nomen
銀行|銀行[ぎんこう]|Bank|銀行[ぎんこう]は 3時[さんじ]まで 開[あ]いています。|Die Bank hat bis drei Uhr geöffnet.|Nomen
銀|銀[ぎん]|Silber|彼[かれ]は 銀[ぎん]メダルを 取[と]った。|Er hat die Silbermedaille gewonnen.|Nomen
地下鉄|地下鉄[ちかてつ]|U-Bahn|私[わたし]は 地下鉄[ちかてつ]で 通勤[つうきん]しています。|Ich fahre mit der U-Bahn zur Arbeit.|Nomen
牛肉|牛肉[ぎゅうにく]|Rindfleisch|夕食[ゆうしょく]に 牛肉[ぎゅうにく]を 買[か]った。|Ich habe fürs Abendessen Rindfleisch gekauft.|Nomen
ページ|ページ|Seite|32[さんじゅうに]ページを 開[ひら]いてください。|Schlagt bitte Seite 32 auf.|Nomen
肉|肉[にく]|Fleisch|肉[にく]が 焼[や]けました。|Das Fleisch ist durch.|Nomen
魚|魚[さかな]|Fisch|肉[にく]と 魚[さかな]とどちらが 好[す]きですか。|Was magst du lieber, Fleisch oder Fisch?|Nomen
分野|分野[ぶんや]|Gebiet, Bereich|音楽[おんがく]は 彼[かれ]の 得意[とくい]な 分野[ぶんや]です。|Musik ist sein Spezialgebiet.|Nomen
野菜|野菜[やさい]|Gemüse|私[わたし]は 毎日[まいにち]たくさん 野菜[やさい]を 食[た]べます。|Ich esse jeden Tag viel Gemüse.|Nomen
グラフ|グラフ|Diagramm, Grafik|彼[かれ]は 売上[うりあげ]をグラフにした。|Er hat die Umsätze als Diagramm dargestellt.|Nomen
本屋|本屋[ほんや]|Buchhandlung|駅前[えきまえ]に 本屋[ほんや]があります。|Vor dem Bahnhof gibt es eine Buchhandlung.|Nomen
八百屋|八百屋[やおや]|Gemüseladen|八百屋[やおや]でみかんを 買[か]いました。|Ich habe im Gemüseladen Mandarinen gekauft.|Nomen
そば屋|そば 屋[や]|Soba-Restaurant|昼[ひる]はそば 屋[や]に 行[い]きました。|Mittags war ich in einem Soba-Restaurant.|Nomen
たばこ屋|たばこ 屋[や]|Tabakladen|私[わたし]はたばこ 屋[や]でライターを 買[か]った。|Ich habe im Tabakladen ein Feuerzeug gekauft.|Nomen
ポスト|ポスト|Briefkasten|手紙[てがみ]をポストに 入[い]れました。|Ich habe den Brief in den Briefkasten geworfen.|Nomen
茶|茶[ちゃ]|Tee|私[わたし]たちは 毎日[まいにち]お 茶[ちゃ]を 飲[の]みます。|Wir trinken jeden Tag Tee.|Nomen
お茶|お 茶[ちゃ]|Tee (höflich)|お 茶[ちゃ]を 入[い]れましょうか。|Soll ich Tee machen?|Nomen
茶わん|茶[ちゃ]わん|Reisschale, Teeschale|茶[ちゃ]わんにご 飯[はん]をよそいました。|Ich habe Reis in die Schale gefüllt.|Nomen
味|味[あじ]|Geschmack|この 料理[りょうり]は 味[あじ]が 薄[うす]い。|Dieses Gericht ist fade.|Nomen
テスト|テスト|Test, Prüfung|テストを 始[はじ]めてください。|Beginnen Sie bitte mit dem Test.|Nomen (mit する)
未来|未来[みらい]|Zukunft|未来[みらい]は 誰[だれ]にも 分[わ]からない。|Die Zukunft kennt niemand.|Nomen
週末|週末[しゅうまつ]|Wochenende|週末[しゅうまつ]は 家[うち]でゆっくりします。|Am Wochenende entspanne ich mich zu Hause.|Nomen
料理|料理[りょうり]|Kochen; Gericht|母[はは]は 料理[りょうり]が 得意[とくい]です。|Meine Mutter kann gut kochen.|Nomen (mit する)
無理|無理[むり]|unmöglich, unzumutbar|5時[ごじ]までに 家[いえ]に 帰[かえ]るのは 無理[むり]です。|Bis fünf Uhr zu Hause zu sein ist unmöglich.|な-Adjektiv
あちこち|あちこち|hier und da, überall|私[わたし]たちは 朝[あさ]からあちこち 散歩[さんぽ]しました。|Wir sind seit dem Morgen hier und da spazieren gegangen.|Nomen
無くす|無[な]くす|verlieren; beseitigen|今日[きょう]、 鍵[かぎ]を 無[な]くしました。|Heute habe ich meinen Schlüssel verloren.|Verb
無くなる|無[な]くなる|verschwinden, ausgehen, verloren gehen|もうお 金[かね]が 無[な]くなりました。|Ich habe schon kein Geld mehr.|Verb
作文|作文[さくぶん]|Aufsatz|日本語[にほんご]で 作文[さくぶん]を 書[か]きました。|Ich habe einen Aufsatz auf Japanisch geschrieben.|Nomen
用いる|用[もち]いる|verwenden, gebrauchen|彼[かれ]はその 詩[し]を 用[もち]いて 自分[じぶん]の 気持[きも]ちを 伝[つた]えた。|Er drückte seine Gefühle mit diesem Gedicht aus.|Verb
ゴルフ|ゴルフ|Golf|兄[あに]はゴルフを 始[はじ]めました。|Mein großer Bruder hat mit Golf angefangen.|Nomen
用事|用事[ようじ]|Besorgung, Angelegenheit|父[ちち]は 用事[ようじ]で 出掛[でか]けています。|Mein Vater ist wegen einer Besorgung unterwegs.|Nomen
交通費|交通費[こうつうひ]|Fahrtkosten|会社[かいしゃ]までの 交通費[こうつうひ]は 一ヶ月8,000円[いっかげつ はっせんえん]です。|Die Fahrtkosten zur Firma betragen 8.000 Yen im Monat.|Nomen
消える|消[き]える|ausgehen, erlöschen; verschwinden|突然[とつぜん]、 電気[でんき]が 消[き]えた。|Plötzlich ging das Licht aus.|Verb
消しゴム|消[け]しゴム|Radiergummi|消[け]しゴムを 貸[か]して 下[くだ]さい。|Leih mir bitte deinen Radiergummi.|Nomen
ラジオ|ラジオ|Radio|彼女[かのじょ]はラジオを 聞[き]いています。|Sie hört Radio.|Nomen
売れる|売[う]れる|sich verkaufen, gefragt sein|今年[ことし]の 夏[なつ]はクーラーがよく 売[う]れた。|Diesen Sommer haben sich Klimaanlagen gut verkauft.|Verb
売り場|売[う]り 場[ば]|Verkaufsabteilung, Verkaufsstand|くつ 売[う]り 場[ば]はどこですか。|Wo ist die Schuhabteilung?|Nomen
店員|店員[てんいん]|Verkäufer(in)|あの 店員[てんいん]はとても 親切[しんせつ]です。|Der Verkäufer dort ist sehr freundlich.|Nomen
売店|売店[ばいてん]|Kiosk, Verkaufsstand|駅[えき]の 売店[ばいてん]で 雑誌[ざっし]を 買[か]った。|Ich habe am Bahnhofskiosk eine Zeitschrift gekauft.|Nomen
タクシー|タクシー|Taxi|タクシーを 呼[よ]んでください。|Rufen Sie bitte ein Taxi.|Nomen
商品|商品[しょうひん]|Ware, Produkt|この 商品[しょうひん]はよく 売[う]れている。|Dieses Produkt verkauft sich gut.|Nomen
作品|作品[さくひん]|Werk, Kunstwerk|この 絵[え]はゴッホの 作品[さくひん]だ。|Dieses Bild ist ein Werk von van Gogh.|Nomen
販売|販売[はんばい]|Verkauf|前売券[まえうりけん]は 窓口[まどぐち]で 販売[はんばい]しています。|Vorverkaufskarten werden am Schalter verkauft.|Nomen (mit する)
二階|二階[にかい]|erster Stock, Obergeschoss|兄[あに]は 二階[にかい]にいます。|Mein großer Bruder ist oben im ersten Stock.|Nomen
ゆっくり|ゆっくり|langsam, in Ruhe|もっとゆっくり 話[はな]してください。|Sprechen Sie bitte langsamer.|Adverb
段階|段階[だんかい]|Stufe, Phase|この 段階[だんかい]では、 決断[けつだん]するのはまだ 早[はや]い。|In dieser Phase ist es für eine Entscheidung noch zu früh.|Nomen
階段|階段[かいだん]|Treppe|私[わたし]たちは 駅[えき]の 階段[かいだん]をかけ 上[あ]がった。|Wir rannten die Bahnhofstreppe hinauf.|Nomen
段々|段々[だんだん]|allmählich, nach und nach|段々[だんだん] 仕事[しごと]が 楽[たの]しくなってきました。|Die Arbeit macht mir allmählich mehr Spaß.|Adverb
値段|値段[ねだん]|Preis|このベルトの 値段[ねだん]は 2500円[にせんごひゃくえん]でした。|Dieser Gürtel hat 2.500 Yen gekostet.|Nomen
レストラン|レストラン|Restaurant|レストランでインド 料理[りょうり]を 食[た]べました。|Ich habe im Restaurant indisch gegessen.|Nomen
価格|価格[かかく]|Preis|ガソリンの 価格[かかく]がどんどん 上[あ]がっている。|Der Benzinpreis steigt immer weiter.|Nomen
合格|合格[ごうかく]|Bestehen (einer Prüfung)|娘[むすめ]が 入学試験[にゅうがく しけん]に 合格[ごうかく]しました。|Meine Tochter hat die Aufnahmeprüfung bestanden.|Nomen (mit する)
夏休み|夏休[なつやす]み|Sommerferien|今日[きょう]が 夏休[なつやす]み 最後[さいご]の 日[ひ]だ。|Heute ist der letzte Tag der Sommerferien.|Nomen
冬休み|冬休[ふゆやす]み|Winterferien|冬休[ふゆやす]みにお 祖父[じい]ちゃんの 家[うち]に 行[い]きます。|In den Winterferien fahre ich zu meinem Opa.|Nomen
カード|カード|Karte, Kreditkarte|支払[しはら]いはカードでお 願[ねが]いします。|Ich möchte bitte mit Karte zahlen.|Nomen
四季|四季[しき]|die vier Jahreszeiten|日本[にほん]には 四季[しき]がある。|In Japan gibt es vier Jahreszeiten.|Nomen
暑さ|暑[あつ]さ|Hitze|今年[ことし]の 夏[なつ]は 暑[あつ]さが 厳[きび]しい。|Die Hitze ist diesen Sommer heftig.|Nomen
熱|熱[ねつ]|Hitze; Fieber|昨日[きのう]の 夜[よる]、 熱[ねつ]が 出[で]ました。|Gestern Abend habe ich Fieber bekommen.|Nomen
寒さ|寒[さむ]さ|Kälte|今日[きょう]は 厳[きび]しい 寒[さむ]さになるでしょう。|Heute wird es wohl bitterkalt.|Nomen
アルバイト|アルバイト|Nebenjob, Aushilfsjob|兄[あに]はアルバイトをしています。|Mein großer Bruder hat einen Nebenjob.|Nomen (mit する)
暖める|暖[あたた]める|wärmen, aufwärmen|今[いま]、 車[くるま]を 暖[あたた]めています。|Ich lasse gerade das Auto warmlaufen.|Verb
暖まる|暖[あたた]まる|warm werden|まだ 部屋[へや]が 暖[あたた]まらない。|Das Zimmer ist noch nicht warm.|Verb
温度|温度[おんど]|Temperatur|今[いま]、 部屋[へや]の 温度[おんど]は 25度[にじゅうごど]だ。|Im Zimmer sind es gerade 25 Grad.|Nomen
気温|気温[きおん]|Lufttemperatur|今日[きょう]の 気温[きおん]は 26度[にじゅうろくど]です。|Heute sind es 26 Grad.|Nomen
コピー|コピー|Kopie|会議[かいぎ]で 書類[しょるい]のコピーを 配[くば]った。|In der Besprechung habe ich Kopien der Unterlagen verteilt.|Nomen (mit する)
台|台[だい]|Gestell, Podest, Ständer|そこにちょうど 良[い]い 台[だい]がある。|Dort steht ein Podest, das genau passt.|Nomen
風|風[かぜ]|Wind|今日[きょう]は 風[かぜ]が 強[つよ]いです。|Heute ist der Wind stark.|Nomen
台風|台風[たいふう]|Taifun|台風[たいふう]が 近[ちか]づいている。|Ein Taifun nähert sich.|Nomen
事情|事情[じじょう]|Umstände, Lage|あなたの 事情[じじょう]はよく 分[わ]かりました。|Ich habe Ihre Lage gut verstanden.|Nomen
ぶつかる|ぶつかる|zusammenstoßen, anstoßen|車[くるま]が 電柱[でんちゅう]にぶつかった。|Das Auto ist gegen einen Strommast gefahren.|Verb
情報|情報[じょうほう]|Information|学生[がくせい]たちはインターネットでいろいろな 情報[じょうほう]を 集[あつ]めた。|Die Studenten sammelten im Internet allerlei Informationen.|Nomen
報告|報告[ほうこく]|Bericht, Meldung|昨日[きのう]の 会議[かいぎ]について 報告[ほうこく]があります。|Es gibt einen Bericht über die gestrige Besprechung.|Nomen (mit する)
新聞|新聞[しんぶん]|Zeitung|今日[きょう]の 新聞[しんぶん]、どこに 置[お]いた?|Wo hast du die Zeitung von heute hingelegt?|Nomen
新年|新年[しんねん]|Neujahr, neues Jahr|新年[しんねん] 明[あ]けましておめでとうございます。|Frohes neues Jahr!|Nomen
フィルム|フィルム|Film (für die Kamera)|旅行[りょこう]のためにたくさんフィルムを 買[か]った。|Ich habe für die Reise viele Filme gekauft.|Nomen
良い|良[よ]い|gut, passend|彼[かれ]は 良[よ]いところだけを 強調[きょうちょう]した。|Er hob nur die guten Seiten hervor.|Adjektiv
中心|中心[ちゅうしん]|Zentrum, Mitte|ここが 建物[たてもの]の 中心[ちゅうしん]です。|Hier ist die Mitte des Gebäudes.|Nomen
安心|安心[あんしん]|Beruhigung, Erleichterung|それを 聞[き]いて 安心[あんしん]しました。|Ich war erleichtert, das zu hören.|Nomen (mit する)
思い出す|思[おも]い 出[だ]す|sich erinnern, einfallen|大切[たいせつ]な 用事[ようじ]を 思[おも]い 出[だ]しました。|Mir ist etwas Wichtiges eingefallen, das ich erledigen muss.|Verb
デパート|デパート|Kaufhaus|私[わたし]はデパートで 靴[くつ]を 買[か]った。|Ich habe im Kaufhaus Schuhe gekauft.|Nomen
思い出|思[おも]い 出[で]|Erinnerung|旅行[りょこう]で 楽[たの]しい 思[おも]い 出[で]ができました。|Auf der Reise habe ich schöne Erinnerungen gesammelt.|Nomen
考え|考[かんが]え|Gedanke, Idee|それは 良[い]い 考[かんが]えです。|Das ist eine gute Idee.|Nomen
解決|解決[かいけつ]|Lösung|トラブルがやっと 解決[かいけつ]した。|Das Problem ist endlich gelöst.|Nomen (mit する)
知らせる|知[し]らせる|mitteilen, benachrichtigen|皆[みんな]に 会議[かいぎ]の 日[ひ]にちを 知[し]らせた。|Ich habe allen den Termin der Besprechung mitgeteilt.|Verb
ベッド|ベッド|Bett|彼[かれ]はベッドで 寝[ね]ています。|Er schläft im Bett.|Nomen
能力|能力[のうりょく]|Fähigkeit|彼[かれ]は 能力[のうりょく]のある 社員[しゃいん]です。|Er ist ein fähiger Mitarbeiter.|Nomen
可能|可能[かのう]|möglich|20[にじゅっ]キロのダイエットは 可能[かのう]だと 思[おも]いますか。|Glaubst du, dass es möglich ist, 20 Kilo abzunehmen?|な-Adjektiv
可|可[か]|erlaubt, möglich|このアルバイトは「 学生[がくせい] 可[か]」ですね。|Dieser Nebenjob ist also auch für Studenten erlaubt.|Nomen
郵便|郵便[ゆうびん]|Post|さっき 郵便[ゆうびん]が 届[とど]きました。|Vorhin ist die Post gekommen.|Nomen
コート|コート|Mantel|寒[さむ]かったのでコートを 着[き]た。|Es war kalt, deshalb habe ich einen Mantel angezogen.|Nomen
不便|不便[ふべん]|unpraktisch, unbequem|私[わたし]の 家[いえ]は 駅[えき]から 遠[とお]くて 不便[ふべん]です。|Mein Haus liegt weit vom Bahnhof und ist unpraktisch.|な-Adjektiv
郵便屋さん|郵便屋[ゆうびんや]さん|Briefträger(in)|郵便屋[ゆうびんや]さんはもう 来[き]ましたか。|War der Briefträger schon da?|Nomen
郵便局|郵便局[ゆうびんきょく]|Postamt|郵便局[ゆうびんきょく]で 切手[きって]を 買[か]いました。|Ich habe auf der Post Briefmarken gekauft.|Nomen
交番|交番[こうばん]|Polizeiwache (kleiner Polizeiposten)|あそこの 交番[こうばん]で 道[みち]を 聞[き]きましょう。|Fragen wir dort drüben an der Polizeiwache nach dem Weg.|Nomen
ノート|ノート|Heft, Notizbuch|ノートを 開[ひら]いてください。|Schlagt bitte eure Hefte auf.|Nomen
番地|番地[ばんち]|Hausnummer, Grundstücksnummer|その 建物[たてもの]の 番地[ばんち]は 分[わ]かりますか。|Kennen Sie die Hausnummer des Gebäudes?|Nomen
番号|番号[ばんごう]|Nummer|この 番号[ばんごう]に 電話[でんわ]してください。|Rufen Sie bitte diese Nummer an.|Nomen
場所|場所[ばしょ]|Ort, Platz|会社[かいしゃ]の 場所[ばしょ]を 教[おし]えてください。|Sagen Sie mir bitte, wo die Firma ist.|Nomen
近所|近所[きんじょ]|Nachbarschaft|近所[きんじょ]にカナダ 人[じん]が 住[す]んでいる。|In der Nachbarschaft wohnt ein Kanadier.|Nomen
ワイン|ワイン|Wein|ワインを 少[すこ]し 飲[の]みました。|Ich habe ein wenig Wein getrunken.|Nomen
台所|台所[だいどころ]|Küche|お 母[かあ]さんは 台所[だいどころ]にいます。|Mama ist in der Küche.|Nomen
住所|住所[じゅうしょ]|Adresse|この 住所[じゅうしょ]に 行[い]ってください。|Fahren Sie bitte zu dieser Adresse.|Nomen
便所|便所[べんじょ]|Toilette, Klo|便所[べんじょ]はそこです。|Die Toilette ist dort.|Nomen
有名|有名[ゆうめい]|berühmt|ボルドーはワインの 生産[せいさん]で 有名[ゆうめい]だ。|Bordeaux ist für seinen Weinbau berühmt.|な-Adjektiv
おかしい|おかしい|seltsam, merkwürdig|彼[かれ]の 様子[ようす]がおかしい。|Er benimmt sich seltsam.|Adjektiv
名字|名字[みょうじ]|Familienname|あなたの 名字[みょうじ]は 何[なん]ですか。|Wie ist Ihr Familienname?|Nomen
氏名|氏名[しめい]|voller Name|ここに 住所[じゅうしょ]と 氏名[しめい]を 書[か]いてください。|Schreiben Sie hier bitte Adresse und Namen hin.|Nomen
各国|各国[かっこく]|jedes Land, die einzelnen Länder|各国[かっこく]の 代表[だいひょう]がニューヨークに 集[あつ]まった。|Die Vertreter der einzelnen Länder kamen in New York zusammen.|Nomen
町|町[まち]|Stadt, Ort|あの 町[まち]は 緑[みどり]を 増[ふ]やしています。|Die Stadt dort vergrößert ihre Grünflächen.|Nomen
トイレ|トイレ|Toilette|トイレを 掃除[そうじ]しましたか。|Hast du die Toilette geputzt?|Nomen
都市|都市[とし]|Stadt, Großstadt|東京[とうきょう]は 日本一大[にほんいち おお]きな 都市[とし]です。|Tokio ist die größte Stadt Japans.|Nomen
都合|都合[つごう]|Umstände, Gelegenheit; passen|今日[きょう]は 都合[つごう]が 悪[わる]くて 行[い]けません。|Heute passt es mir nicht, ich kann nicht kommen.|Nomen
朝御飯|朝御飯[あさごはん]|Frühstück|七時[しちじ]に 朝御飯[あさごはん]を 食[た]べました。|Ich habe um sieben Uhr gefrühstückt.|Nomen
買い物|買[か]い 物[もの]|Einkauf, Einkaufen|母[はは]は 買[か]い 物[もの]に 出[で]かけています。|Meine Mutter ist einkaufen gegangen.|Nomen (mit する)
キャンプ|キャンプ|Camping, Zeltlager|友達[ともだち]とキャンプに 行[い]った。|Ich war mit Freunden zelten.|Nomen (mit する)
荷物|荷物[にもつ]|Gepäck, Paket|彼[かれ]の 家[いえ]に 荷物[にもつ]を 送[おく]りました。|Ich habe ein Paket zu ihm nach Hause geschickt.|Nomen
品物|品物[しなもの]|Ware, Artikel|その 店[みせ]は 色々[いろいろ]な 品物[しなもの]を 売[う]っている。|Der Laden verkauft allerlei Waren.|Nomen
見物|見物[けんぶつ]|Besichtigung|皆[みんな]で 東京[とうきょう] 見物[けんぶつ]をした。|Wir haben alle zusammen Tokio besichtigt.|Nomen (mit する)
物|物[もの]|Ding, Sache|彼女[かのじょ]の 家[いえ]には 物[もの]がたくさんあります。|In ihrem Haus gibt es viele Sachen.|Nomen
プラスチック|プラスチック|Plastik, Kunststoff|このカップはプラスチックです。|Dieser Becher ist aus Plastik.|Nomen
忘れ物|忘[わす]れ 物[もの]|vergessener Gegenstand, Fundsache|学校[がっこう]に 忘[わす]れ 物[もの]をしました。|Ich habe etwas in der Schule vergessen.|Nomen
重さ|重[おも]さ|Gewicht|この 荷物[にもつ]の 重[おも]さを 計[はか]ってください。|Wiegen Sie bitte dieses Gepäckstück.|Nomen
配る|配[くば]る|verteilen, austeilen|会議[かいぎ]で 書類[しょるい]を 配[くば]った。|In der Besprechung habe ich die Unterlagen verteilt.|Verb
配達|配達[はいたつ]|Lieferung, Zustellung|彼[かれ]は 新聞[しんぶん] 配達[はいたつ]をしている。|Er trägt Zeitungen aus.|Nomen (mit する)
カラー|カラー|Farbe, farbig|カラーコピーは 一枚幾[いちまい いく]らですか。|Was kostet eine Farbkopie?|Nomen
心配|心配[しんぱい]|Sorge|明日[あす]のプレゼンテーションが 心配[しんぱい]だ。|Ich mache mir Sorgen wegen der Präsentation morgen.|Nomen (mit する)
見送る|見送[みおく]る|verabschieden, zum Abschied begleiten|彼[かれ]が 外国[がいこく]に 行[い]くのを 見送[みおく]りました。|Ich habe ihn verabschiedet, als er ins Ausland ging.|Verb
見送り|見送[みおく]り|Verabschiedung, Abschiedsbegleitung|駅[えき]に 友人[ゆうじん]の 見送[みおく]りに 行[い]きました。|Ich bin zum Bahnhof gefahren, um einen Freund zu verabschieden.|Nomen (mit する)
受ける|受[う]ける|bekommen, annehmen; ablegen (Prüfung)|彼[かれ]は 就職試験[しゅうしょく しけん]を 受[う]けた。|Er hat eine Einstellungsprüfung abgelegt.|Verb
ピアノ|ピアノ|Klavier|昔[むかし]、ピアノを 習[なら]っていました。|Früher habe ich Klavier gelernt.|Nomen
受け取る|受[う]け 取[と]る|erhalten, entgegennehmen; auffassen|彼[かれ]からメールを 受[う]け 取[と]りました。|Ich habe eine E-Mail von ihm bekommen.|Verb
取れる|取[と]れる|abgehen, sich lösen|シャツのボタンが 取[と]れた。|Ein Hemdknopf ist abgegangen.|Verb
書き取る|書[か]き 取[と]る|aufschreiben, mitschreiben|話[はな]しのポイントを 書[か]き 取[と]った。|Ich habe die wichtigsten Punkte des Gesprächs mitgeschrieben.|Verb
届く|届[とど]く|ankommen, erreichen|昨日[きのう]、 父[ちち]から 手紙[てがみ]が 届[とど]いた。|Gestern kam ein Brief von meinem Vater.|Verb
スキー|スキー|Ski, Skifahren|冬[ふゆ]はよくスキーに 行[い]きます。|Im Winter gehe ich oft Ski fahren.|Nomen
届ける|届[とど]ける|zustellen, hinbringen; melden|これを 彼[かれ]に 届[とど]けてください。|Bringen Sie das bitte zu ihm.|Verb
持つ|持[も]つ|halten, haltbar sein|この 車[くるま]はよく 持[も]っているね。|Dieses Auto hält sich wirklich gut.|Verb
金持ち|金持[かねも]ち|reicher Mensch, reich|彼[かれ]は 金持[かねも]ちです。|Er ist reich.|Nomen
持って行く|持[も]って 行[い]く|mitnehmen|水[みず]を 持[も]って 行[い]きましょう。|Nehmen wir Wasser mit.|Verb
なかなか|なかなか|ziemlich; (mit Verneinung) einfach nicht|荷物[にもつ]がなかなか 届[とど]きません。|Das Paket kommt einfach nicht an.|Adverb
持って来る|持[も]って 来[く]る|mitbringen|そのいすを 持[も]って 来[き]てください。|Bringen Sie bitte den Stuhl dort her.|Verb
打つ|打[う]つ|schlagen, treffen; sich stoßen|転[ころ]んでひざを 打[う]ちました。|Ich bin hingefallen und habe mir das Knie gestoßen.|Verb
投げる|投[な]げる|werfen; aufgeben|ボールをこっちに 投[な]げてください。|Wirf den Ball bitte hierher.|Verb
生まれる|生[う]まれる|geboren werden, entstehen|姉夫婦[あね ふうふ]に 男[おとこ]の 子[こ]が 生[う]まれました。|Meine Schwester und ihr Mann haben einen Jungen bekommen.|Verb
プール|プール|Schwimmbad|私[わたし]は 夏休[なつやす]みにプールに 行[い]った。|In den Sommerferien bin ich ins Schwimmbad gegangen.|Nomen
生む|生[う]む|gebären, zur Welt bringen|うちのネコが 子猫[こねこ]を 生[う]みました。|Unsere Katze hat Junge bekommen.|Verb
女性|女性[じょせい]|Frau, weiblich|そのパーティーに 女性[じょせい]は 何人来[なんにん き]ますか。|Wie viele Frauen kommen zu der Party?|Nomen
生産|生産[せいさん]|Produktion, Herstellung|ボルドーはワインの 生産[せいさん]で 有名[ゆうめい]だ。|Bordeaux ist für seinen Weinbau berühmt.|Nomen (mit する)
お土産|お 土産[みやげ]|Mitbringsel, Souvenir|父[ちち]はお 土産[みやげ]にお 菓子[かし]を 買[か]ってきた。|Mein Vater hat als Mitbringsel Süßigkeiten gekauft.|Nomen
ホーム|ホーム|Bahnsteig|もうすぐこのホームに 電車[でんしゃ]が 来[き]ます。|Gleich fährt an diesem Bahnsteig ein Zug ein.|Nomen
生活|生活[せいかつ]|Leben, Alltag|日本[にほん]での 生活[せいかつ]は 楽[たの]しいです。|Das Leben in Japan macht Spaß.|Nomen (mit する)
生徒|生徒[せいと]|Schüler(in)|このクラスの 生徒[せいと]は 30人[さんじゅうにん]です。|Diese Klasse hat 30 Schüler.|Nomen
中学|中学[ちゅうがく]|Mittelschule|息子[むすこ]は 中学[ちゅうがく]に 通[かよ]っています。|Mein Sohn geht in die Mittelschule.|Nomen
入学|入学[にゅうがく]|Schuleintritt, Studienbeginn|妹[いもうと]は 九月[くがつ]にアメリカの 大学[だいがく]に 入学[にゅうがく]します。|Meine kleine Schwester beginnt im September ein Studium an einer amerikanischen Universität.|Nomen (mit する)
エレベーター|エレベーター|Aufzug|エレベーターで 下[した]に 降[お]りましょう。|Fahren wir mit dem Aufzug nach unten.|Nomen
中学生|中学生[ちゅうがくせい]|Mittelschüler(in)|息子[むすこ]は 中学生[ちゅうがくせい]です。|Mein Sohn ist Mittelschüler.|Nomen
小学生|小学生[しょうがくせい]|Grundschüler(in)|うちの 息子[むすこ]は 来年[らいねん]、 小学生[しょうがくせい]になります。|Unser Sohn kommt nächstes Jahr in die Grundschule.|Nomen
見学|見学[けんがく]|Besichtigung (zu Lernzwecken)|今日[きょう]、 工場[こうじょう]の 見学[けんがく]に 行[い]きました。|Heute haben wir eine Fabrik besichtigt.|Nomen (mit する)
通学|通学[つうがく]|Schulweg, Schulbesuch|毎朝[まいあさ]、 通学[つうがく]に 1時間[いちじかん]かかる。|Der Schulweg dauert jeden Morgen eine Stunde.|Nomen (mit する)
メモ|メモ|Notiz, Memo|メモを 取[と]ってください。|Machen Sie sich bitte Notizen.|Nomen
高校|高校[こうこう]|Oberschule|妹[いもうと]は 高校[こうこう]に 通[かよ]っています。|Meine kleine Schwester geht in die Oberschule.|Nomen
小学校|小学校[しょうがっこう]|Grundschule|家[いえ]の 近[ちか]くに 小学校[しょうがっこう]があります。|In der Nähe meines Hauses gibt es eine Grundschule.|Nomen
中学校|中学校[ちゅうがっこう]|Mittelschule|息子[むすこ]の 中学校[ちゅうがっこう]は 家[いえ]から 5分[ごふん]です。|Die Mittelschule meines Sohnes ist fünf Minuten von zu Hause entfernt.|Nomen
校長|校長[こうちょう]|Schulleiter(in)|あの 人[ひと]は 高校[こうこう]の 校長[こうちょう]だ。|Er ist Leiter einer Oberschule.|Nomen
パン|パン|Brot|朝[あさ]ご 飯[はん]にはいつもパンを 食[た]べる。|Zum Frühstück esse ich immer Brot.|Nomen
休校|休校[きゅうこう]|vorübergehende Schulschließung|学校[がっこう]は 今週[こんしゅう]は 休校[きゅうこう]です。|Die Schule ist diese Woche geschlossen.|Nomen (mit する)
教会|教会[きょうかい]|Kirche|私[わたし]たちは 教会[きょうかい]で 結婚式[けっこんしき]をしました。|Wir haben in einer Kirche geheiratet.|Nomen
教育|教育[きょういく]|Bildung, Erziehung|彼[かれ]は 海外[かいがい]で 教育[きょういく]を 受[う]けました。|Er hat seine Ausbildung im Ausland erhalten.|Nomen (mit する)
育てる|育[そだ]てる|großziehen, aufziehen|彼女[かのじょ]は 三人[さんにん]の 子[こ]を 育[そだ]てました。|Sie hat drei Kinder großgezogen.|Verb
びっくりする|びっくりする|erschrecken, überrascht sein|大[おお]きな 音[おと]にびっくりしました。|Ich bin bei dem lauten Geräusch erschrocken.|Verb
育つ|育[そだ]つ|aufwachsen, gedeihen|野菜[やさい]がよく 育[そだ]っている。|Das Gemüse wächst gut.|Verb
制度|制度[せいど]|System, Regelung|来年[らいねん]から 新[あたら]しい 制度[せいど]が 始[はじ]まります。|Ab nächstem Jahr gilt eine neue Regelung.|Nomen
強さ|強[つよ]さ|Stärke|風[かぜ]の 強[つよ]さに 驚[おどろ]きました。|Ich war überrascht, wie stark der Wind war.|Nomen
取引|取引[とりひき]|Geschäft, Handel|私[わたし]たちは 中国[ちゅうごく]の 会社[かいしゃ]と 取引[とりひき]しています。|Wir machen Geschäfte mit einer chinesischen Firma.|Nomen (mit する)
ズボン|ズボン|Hose|ズボンが 汚[よご]れた。|Meine Hose ist schmutzig geworden.|Nomen
引き出し|引[ひ]き 出[だ]し|Schublade; Abhebung|財布[さいふ]は 引[ひ]き 出[だ]しの 中[なか]にあります。|Das Portemonnaie ist in der Schublade.|Nomen
押さえる|押[お]さえる|festhalten, niederhalten|ドアを 押[お]さえてください。|Halten Sie bitte die Tür fest.|Verb
押し入れ|押[お]し 入[い]れ|Wandschrank|布団[ふとん]を 押[お]し 入[い]れにしまいました。|Ich habe den Futon in den Wandschrank geräumt.|Nomen
練習|練習[れんしゅう]|Übung, Training|娘[むすめ]は 今[いま]、バイオリンを 練習[れんしゅう]しています。|Meine Tochter übt gerade Geige.|Nomen (mit する)
おもちゃ|おもちゃ|Spielzeug|赤[あか]ちゃんが 自動車[じどうしゃ]のおもちゃで 遊[あそ]んでいる。|Das Baby spielt mit einem Spielzeugauto.|Nomen
習う|習[なら]う|lernen (bei jemandem)|彼[かれ]は 空手[からて]を 習[なら]っています。|Er lernt Karate.|Verb
慣れる|慣[な]れる|sich gewöhnen|新[あたら]しい 家[いえ]にはもう 慣[な]れましたか。|Hast du dich schon an das neue Haus gewöhnt?|Verb
習慣|習慣[しゅうかん]|Gewohnheit, Brauch|毎朝[まいあさ]コーヒーを 飲[の]むのが 習慣[しゅうかん]です。|Ich habe die Gewohnheit, jeden Morgen Kaffee zu trinken.|
研究|研究[けんきゅう]|Forschung|彼[かれ]は 何年[なんねん]も 地震[じしん]の 研究[けんきゅう]をしている。|Er erforscht seit vielen Jahren Erdbeben.|Nomen (mit する)
グラム|グラム|Gramm|ひき 肉[にく]を 200[にひゃく]グラムください。|200 Gramm Hackfleisch, bitte.|Nomen
試験|試験[しけん]|Prüfung|明日[あした]の 試験[しけん]、 頑張[がんば]ってね。|Viel Erfolg bei der Prüfung morgen.|Nomen (mit する)
問題|問題[もんだい]|Problem; Aufgabe|問題[もんだい]が 一[ひと]つあります。|Es gibt ein Problem.|Nomen
簡単|簡単[かんたん]|einfach, leicht|この 料理[りょうり]はとても 簡単[かんたん]です。|Dieses Gericht ist ganz einfach.|な-Adjektiv
複雑|複雑[ふくざつ]|kompliziert|このプログラムはとても 複雑[ふくざつ]です。|Dieses Programm ist sehr kompliziert.|な-Adjektiv
コーヒー|コーヒー|Kaffee|私[わたし]は 毎朝[まいあさ]コーヒーを 飲[の]みます。|Ich trinke jeden Morgen Kaffee.|Nomen
数字|数字[すうじ]|Zahl, Ziffer|数字[すうじ]は 苦手[にがて]です。|Mit Zahlen tue ich mich schwer.|Nomen
数学|数学[すうがく]|Mathematik|兄[あに]は 数学[すうがく]の 先生[せんせい]です。|Mein großer Bruder ist Mathematiklehrer.|Nomen
数える|数[かぞ]える|zählen|いすの 数[かず]を 数[かぞ]えてください。|Zählen Sie bitte die Stühle.|Verb
今回|今回[こんかい]|dieses Mal|まあ 今回[こんかい]は 許[ゆる]してあげよう。|Na gut, dieses Mal verzeihe ich dir.|Nomen
テント|テント|Zelt|みんなでテントを 張[は]りました。|Wir haben alle zusammen das Zelt aufgebaut.|Nomen
回る|回[まわ]る|sich drehen, kreisen; herumgehen|月[つき]は 地球[ちきゅう]のまわりを 回[まわ]っています。|Der Mond kreist um die Erde.|Verb
回す|回[まわ]す|drehen|ねじは 左[ひだり]に 回[まわ]すと 外[はず]れます。|Die Schraube löst sich, wenn man sie nach links dreht.|Verb
個人|個人[こじん]|Einzelperson, Individuum|これは 私[わたし] 個人[こじん]の 意見[いけん]です。|Das ist meine persönliche Meinung.|Nomen
担当|担当[たんとう]|Zuständigkeit, zuständig|私[わたし]はセールスを 担当[たんとう]しています。|Ich bin für den Verkauf zuständig.|Nomen (mit する)
ボート|ボート|Boot|池[いけ]でボートに 乗[の]りました。|Ich bin auf dem Teich Boot gefahren.|Nomen
当たる|当[あ]たる|treffen, auftreffen|ボールが 彼[かれ]の 頭[あたま]に 当[あ]たった。|Der Ball traf ihn am Kopf.|Verb
当時|当時[とうじ]|damals|彼女[かのじょ]は 当時[とうじ]、まだ 3才[さんさい]だった。|Sie war damals erst drei Jahre alt.|Nomen
本当|本当[ほんとう]|Wahrheit, wirklich|その 話[はなし]は 本当[ほんとう]ですか。|Ist die Geschichte wahr?|Nomen
当然|当然[とうぜん]|selbstverständlich, natürlich|彼女[かのじょ]が 怒[おこ]るのも 当然[とうぜん]だ。|Es ist nur natürlich, dass sie wütend ist.|な-Adjektiv
ボール|ボール|Ball|彼[かれ]はボールを 投[な]げた。|Er hat den Ball geworfen.|Nomen
全然|全然[ぜんぜん]|überhaupt (nicht)|この 本[ほん]は 全然[ぜんぜん] 面白[おもしろ]くなかった。|Dieses Buch war überhaupt nicht interessant.|Adverb
方法|方法[ほうほう]|Methode, Weg|いい 方法[ほうほう]を 思[おも]いつきました。|Mir ist eine gute Methode eingefallen.|Nomen
法律|法律[ほうりつ]|Gesetz|新[あたら]しい 法律[ほうりつ]ができた。|Ein neues Gesetz ist in Kraft getreten.|Nomen
規則|規則[きそく]|Regel, Vorschrift|あの 会社[かいしゃ]の 規則[きそく]は 厳[きび]しいです。|Die Vorschriften in der Firma sind streng.|Nomen
オートバイ|オートバイ|Motorrad|彼[かれ]はオートバイに 乗[の]っている。|Er fährt Motorrad.|Nomen
経験|経験[けいけん]|Erfahrung|今日[きょう]の 試合[しあい]はいい 経験[けいけん]になりました。|Das heutige Spiel war eine gute Erfahrung.|Nomen (mit する)
経つ|経[た]つ|vergehen (Zeit)|あれから 14年[じゅうよねん]が 経[た]ちました。|Seitdem sind 14 Jahre vergangen.|Verb
経済|経済[けいざい]|Wirtschaft|大学[だいがく]で 経済[けいざい]を 勉強[べんきょう]しました。|Ich habe an der Universität Wirtschaft studiert.|Nomen
経営|経営[けいえい]|Unternehmensführung, Betrieb|我[わ]が 社[しゃ]の 経営[けいえい]はうまくいっています。|Die Geschäfte unserer Firma laufen gut.|Nomen (mit する)
ひどい|ひどい|schlimm, grausam|妹[いもうと]とひどい 喧嘩[けんか]をした。|Ich hatte einen schlimmen Streit mit meiner kleinen Schwester.|Adjektiv
株|株[かぶ]|Aktie|最近[さいきん] 株[かぶ]を 始[はじ]めました。|Ich habe vor Kurzem mit Aktien angefangen.|Nomen
企業|企業[きぎょう]|Unternehmen|彼女[かのじょ]はアメリカの 企業[きぎょう]で 働[はたら]いています。|Sie arbeitet bei einem amerikanischen Unternehmen.|Nomen
作業|作業[さぎょう]|Arbeit, Arbeitsvorgang|作業[さぎょう]するにはもっと 広[ひろ]いスペースが 必要[ひつよう]だ。|Zum Arbeiten braucht man mehr Platz.|Nomen (mit する)
産業|産業[さんぎょう]|Industrie, Wirtschaftszweig|日本[にほん]の 自動車[じどうしゃ] 産業[さんぎょう]は 世界的[せかいてき]に 有名[ゆうめい]だ。|Japans Autoindustrie ist weltweit bekannt.|Nomen
あなた|あなた|du, Sie|この 本[ほん]、あなたにあげます。|Dieses Buch schenke ich dir.|Nomen
工業|工業[こうぎょう]|Industrie, verarbeitendes Gewerbe|そこは 工業[こうぎょう] 都市[とし]だ。|Das ist eine Industriestadt.|Nomen
商業|商業[しょうぎょう]|Handel|この 町[まち]では 商業[しょうぎょう]が 盛[さか]んだ。|In dieser Stadt blüht der Handel.|Nomen
利用|利用[りよう]|Nutzung, Benutzung|私[わたし]はよく 図書館[としょかん]を 利用[りよう]します。|Ich nutze oft die Bibliothek.|Nomen (mit する)
便利|便利[べんり]|praktisch, bequem|インターネットはとても 便利[べんり]です。|Das Internet ist sehr praktisch.|な-Adjektiv
スイッチ|スイッチ|Schalter|彼[かれ]はカーラジオのスイッチを 入[い]れた。|Er hat das Autoradio eingeschaltet.|Nomen
技術|技術[ぎじゅつ]|Technik, Können|彼[かれ]は 非常[ひじょう]に 高[たか]い 技術[ぎじゅつ]を 持[も]っている。|Er verfügt über ein sehr hohes technisches Können.|Nomen
手術|手術[しゅじゅつ]|Operation|父[ちち]は 胸[むね]の 手術[しゅじゅつ]をした。|Mein Vater wurde an der Brust operiert.|Nomen (mit する)
製造|製造[せいぞう]|Herstellung, Fertigung|この 工場[こうじょう]ではエアコンを 製造[せいぞう]しています。|In dieser Fabrik werden Klimaanlagen hergestellt.|Nomen (mit する)
必ず|必[かなら]ず|unbedingt, auf jeden Fall|必[かなら]ずシートベルトを 着[つ]けて 下[くだ]さい。|Legen Sie bitte unbedingt den Sicherheitsgurt an.|Adverb
プレゼント|プレゼント|Geschenk|誕生日[たんじょうび]にプレゼントをもらいました。|Ich habe zum Geburtstag Geschenke bekommen.|Nomen (mit する)
必要|必要[ひつよう]|nötig, notwendig|私[わたし]にはたくさんのお 金[かね]が 必要[ひつよう]だ。|Ich brauche viel Geld.|な-Adjektiv
重要|重要[じゅうよう]|wichtig, wesentlich|これは 重要[じゅうよう]な 書類[しょるい]です。|Das ist ein wichtiges Dokument.|な-Adjektiv
要求|要求[ようきゅう]|Forderung, Verlangen|彼[かれ]は 私[わたし]の 要求[ようきゅう]にこたえた。|Er ist auf meine Forderung eingegangen.|Nomen (mit する)
目覚まし時計|目覚[めざ]まし 時計[どけい]|Wecker|7時[しちじ]に 目覚[めざ]まし 時計[どけい]が 鳴[な]りました。|Um sieben Uhr hat der Wecker geklingelt.|Nomen
いつでも|いつでも|jederzeit, immer|いつでもうちに 来[き]てください。|Komm jederzeit bei mir vorbei.|Adverb
計算|計算[けいさん]|Rechnung, Berechnung|その 計算[けいさん]は 間違[まちが]っている。|Diese Rechnung ist falsch.|Nomen (mit する)
引き算|引[ひ]き 算[ざん]|Subtraktion|娘[むすめ]は 学校[がっこう]で 引[ひ]き 算[ざん]を 習[なら]っている。|Meine Tochter lernt in der Schule gerade das Subtrahieren.|Nomen (mit する)
足し算|足[た]し 算[ざん]|Addition|娘[むすめ]は 学校[がっこう]で 足[た]し 算[ざん]を 習[なら]った。|Meine Tochter hat in der Schule das Addieren gelernt.|Nomen (mit する)
交差点|交差点[こうさてん]|Kreuzung|次[つぎ]の 交差点[こうさてん]を 左[ひだり]に 曲[ま]がってください。|Biegen Sie an der nächsten Kreuzung bitte links ab.|Nomen
テニス|テニス|Tennis|彼[かれ]らはよくテニスをしています。|Sie spielen oft Tennis.|Nomen (mit する)
割る|割[わ]る|teilen; zerbrechen (etwas)|皿[さら]を 落[お]として 割[わ]った。|Ich habe einen Teller fallen lassen und zerbrochen.|Verb
割れる|割[わ]れる|zerbrechen, zerspringen|コップが 落[お]ちて 割[わ]れた。|Das Glas ist heruntergefallen und zerbrochen.|Verb
割り算|割[わ]り 算[ざん]|Division|割[わ]り 算[ざん]は 小学校[しょうがっこう]で 習[なら]います。|Dividieren lernt man in der Grundschule.|Nomen (mit する)
残る|残[のこ]る|übrig bleiben, bleiben|料理[りょうり]がたくさん 残[のこ]りました。|Es ist viel Essen übrig geblieben.|Verb
こちら|こちら|hier, diese Richtung (höflich)|受付[うけつけ]はこちらです。|Der Empfang ist hier entlang.|Nomen
残す|残[のこ]す|übrig lassen, hinterlassen|彼女[かのじょ]はメッセージを 残[のこ]しました。|Sie hat eine Nachricht hinterlassen.|Verb
返す|返[かえ]す|zurückgeben|図書館[としょかん]に 本[ほん]を 返[かえ]した。|Ich habe das Buch in der Bibliothek zurückgegeben.|Verb
返事|返事[へんじ]|Antwort|手紙[てがみ]の 返事[へんじ]を 出[だ]しました。|Ich habe auf den Brief geantwortet.|Nomen (mit する)
借りる|借[か]りる|ausleihen, sich borgen|彼[かれ]にビデオを 借[か]りました。|Ich habe mir von ihm ein Video ausgeliehen.|Verb
ボタン|ボタン|Knopf|ボタンを 押[お]してください。|Drücken Sie bitte den Knopf.|Nomen
貸す|貸[か]す|verleihen, vermieten|私[わたし]は 彼[かれ]に 本[ほん]を 貸[か]しています。|Ich habe ihm ein Buch geliehen.|Verb
貸し出す|貸[か]し 出[だ]す|ausleihen, verleihen|その 本[ほん]は 貸[か]し 出[だ]し 中[ちゅう]です。|Das Buch ist gerade ausgeliehen.|Verb
申し込む|申[もう]し 込[こ]む|sich anmelden, beantragen|彼女[かのじょ]はそのセミナーに 申[もう]し 込[こ]んだ。|Sie hat sich für das Seminar angemeldet.|Verb
期待|期待[きたい]|Erwartung|みんな 私[わたし]たちに 期待[きたい]しています。|Alle setzen Erwartungen in uns.|Nomen (mit する)
おかしい|おかしい|komisch, lustig|彼[かれ]の 話[はなし]はおかしかった。|Seine Geschichte war lustig.|Adjektiv
期間|期間[きかん]|Zeitraum, Frist|テスト 期間[きかん]は 10日[とおか]から 15日[じゅうごにち]までだ。|Der Prüfungszeitraum geht vom 10. bis zum 15.|Nomen
時期|時期[じき]|Zeit, Zeitpunkt, Saison|今[いま]はあなたにとって 大事[だいじ]な 時期[じき]です。|Jetzt ist eine wichtige Zeit für dich.|Nomen
限る|限[かぎ]る|beschränkt sein auf|このサービスは 週末[しゅうまつ]に 限[かぎ]ります|Dieser Service gilt nur am Wochenende.|Verb
急ぐ|急[いそ]ぐ|sich beeilen|私[わたし]たちは 駅[えき]へ 急[いそ]ぎました。|Wir eilten zum Bahnhof.|Verb
コート|コート|Platz, Spielfeld (Tennis usw.)|新[あたら]しいコートでテニスをしました。|Ich habe auf dem neuen Platz Tennis gespielt.|Nomen
急に|急[きゅう]に|plötzlich|急[きゅう]に 用事[ようじ]を 思[おも]い 出[だ]した。|Mir ist plötzlich eine Besorgung eingefallen.|Adverb
急|急[きゅう]|plötzlich, eilig; steil|急[きゅう]な 坂道[さかみち]を 上[のぼ]った。|Ich bin den steilen Hang hinaufgegangen.|な-Adjektiv
急行|急行[きゅうこう]|Schnellzug, Express|ちょうど 急行[きゅうこう] 電車[でんしゃ]が 来[き]た。|Gerade kam der Expresszug.|Nomen
切れる|切[き]れる|gut schneiden; reißen; ablaufen, ausgehen|このはさみはよく 切[き]れますね。|Diese Schere schneidet gut.|Verb
ドラマ|ドラマ|Fernsehserie, Drama|私[わたし]はドラマを 見[み]るのが 好[す]きです。|Ich sehe gern Fernsehserien.|Nomen
切手|切手[きって]|Briefmarke|郵便局[ゆうびんきょく]で 切手[きって]を 買[か]いました。|Ich habe auf der Post Briefmarken gekauft.|Nomen
売り切れる|売[う]り 切[き]れる|ausverkauft werden|その 本[ほん]は 直[す]ぐ 売[う]り 切[き]れた。|Das Buch war sofort ausverkauft.|Verb
売り切れ|売[う]り 切[き]れ|ausverkauft|チケットはもう 売[う]り 切[き]れだって。|Die Karten sollen schon ausverkauft sein.|Nomen
大切|大切[たいせつ]|wichtig, wertvoll|これは 母[はは]が 大切[たいせつ]にしていた 指輪[ゆびわ]です。|Das ist ein Ring, der meiner Mutter viel bedeutet hat.|な-Adjektiv
ビザ|ビザ|Visum|学生[がくせい]ビザを 持[も]っています。|Ich habe ein Studentenvisum.|Nomen
切符|切符[きっぷ]|Fahrkarte, Ticket|東京[とうきょう]までの 切符[きっぷ]を 買[か]った。|Ich habe eine Fahrkarte nach Tokio gekauft.|Nomen
入場券|入場券[にゅうじょうけん]|Eintrittskarte|入場券[にゅうじょうけん]は 3000円[さんぜんえん]です。|Die Eintrittskarte kostet 3.000 Yen.|Nomen
家賃|家賃[やちん]|Miete|ここの 家賃[やちん]は 12万円[じゅうにまんえん]です。|Die Miete hier beträgt 120.000 Yen.|Nomen
時代|時代[じだい]|Zeitalter, Epoche|今[いま]は 便利[べんり]さとスピードの 時代[じだい]だ。|Wir leben im Zeitalter von Bequemlichkeit und Geschwindigkeit.|Nomen
ポケット|ポケット|Tasche (an Kleidung)|財布[さいふ]をポケットにしまった。|Ich habe das Portemonnaie in die Tasche gesteckt.|Nomen
代わる|代[か]わる|vertreten, ersetzen|上司[じょうし]に 代[か]わって 会議[かいぎ]に 出[で]た。|Ich habe in Vertretung meines Chefs an der Besprechung teilgenommen.|Verb
代える|代[か]える|ersetzen, austauschen|社長[しゃちょう]に 代[か]えて 部長[ぶちょう]を 出席[しゅっせき]させます。|Anstelle des Firmenchefs lasse ich den Abteilungsleiter teilnehmen.|Verb
指|指[ゆび]|Finger; Zeh|彼[かれ]は 指[ゆび]が 太[ふと]い。|Er hat dicke Finger.|Nomen
決定|決定[けってい]|Entscheidung, Beschluss|会議[かいぎ]で 重要[じゅうよう]な 決定[けってい]がありました。|In der Besprechung fiel eine wichtige Entscheidung.|Nomen (mit する)
そろそろ|そろそろ|langsam, allmählich (es wird Zeit)|そろそろ 始[はじ]めましょうか。|Wollen wir langsam anfangen?|Adverb
一定|一定[いってい]|fest, bestimmt, gleichbleibend|申[もう]し 込[こ]むには 一定[いってい]の 資格[しかく]が 要[い]る。|Für die Bewerbung braucht man bestimmte Qualifikationen.|Nomen (mit する)
定期券|定期券[ていきけん]|Zeitkarte, Monatskarte|定期券[ていきけん]は 1万2千円[いちまんにせんえん]でした。|Die Monatskarte hat 12.000 Yen gekostet.|Nomen
予定|予定[よてい]|Plan, Vorhaben|今日[きょう]の 予定[よてい]を 教[おし]えてください。|Sagen Sie mir bitte, was heute geplant ist.|Nomen (mit する)
天気予報|天気予報[てんきよほう]|Wettervorhersage|明日[あした]の 天気予報[てんきよほう]は 雨[あめ]です。|Die Wettervorhersage für morgen sagt Regen.|Nomen
ぶどう|ぶどう|Weintrauben|私[わたし]はぶどうが 好[す]きです。|Ich mag Weintrauben.|Nomen
予習|予習[よしゅう]|Vorbereitung (auf den Unterricht)|明日[あした]の 予習[よしゅう]をしましょう。|Bereiten wir uns auf morgen vor.|Nomen (mit する)
予約|予約[よやく]|Reservierung|レストランを 予約[よやく]しました。|Ich habe im Restaurant reserviert.|Nomen (mit する)
約束|約束[やくそく]|Versprechen, Verabredung|約束[やくそく]は 守[まも]ります。|Ich halte meine Versprechen.|Nomen (mit する)
変わる|変[か]わる|sich ändern, wechseln|信号[しんごう]が 青[あお]に 変[か]わりました。|Die Ampel ist auf Grün gesprungen.|Verb
めったに|めったに|selten (mit Verneinung)|彼女[かのじょ]はめったに 怒[おこ]りません。|Sie wird selten wütend.|Adverb
大変|大変[たいへん]|schlimm, ernst; sehr|大変[たいへん]なことが 起[お]こりました。|Es ist etwas Schlimmes passiert.|な-Adjektiv
変|変[へん]|seltsam, komisch|変[へん]な 音[おと]が 聞[き]こえます。|Ich höre ein seltsames Geräusch.|な-Adjektiv
変化|変化[へんか]|Veränderung, Wandel|今年[ことし]は 変化[へんか]の 多[おお]い 年[とし]でした。|Dieses Jahr war ein Jahr mit vielen Veränderungen.|Nomen (mit する)
強化|強化[きょうか]|Stärkung, Verstärkung|国[くに]は 国語教育[こくご きょういく]を 強化[きょうか]しています。|Der Staat stärkt den muttersprachlichen Unterricht.|Nomen (mit する)
クリスマス|クリスマス|Weihnachten|クリスマスにはケーキを 食[た]べます。|An Weihnachten essen wir Kuchen.|Nomen
文化|文化[ぶんか]|Kultur|私[わたし]はこの 国[くに]の 文化[ぶんか]を 勉強[べんきょう]しています。|Ich beschäftige mich mit der Kultur dieses Landes.|Nomen
増える|増[ふ]える|zunehmen, mehr werden|この 町[まち]は 人口[じんこう]が 増[ふ]えた。|Die Einwohnerzahl dieser Stadt ist gestiegen.|Verb
増やす|増[ふ]やす|vermehren, erhöhen|あの 町[まち]は 緑[みどり]を 増[ふ]やしています。|Die Stadt dort vergrößert ihre Grünflächen.|Verb
減る|減[へ]る|abnehmen, weniger werden|体重[たいじゅう]がかなり 減[へ]りました。|Ich habe ziemlich abgenommen.|Verb
ネクタイ|ネクタイ|Krawatte|父[ちち]の 日[ひ]にネクタイをプレゼントした。|Ich habe zum Vatertag eine Krawatte verschenkt.|Nomen
減らす|減[へ]らす|verringern, reduzieren|最近[さいきん]、 食事[しょくじ]を 減[へ]らしています。|In letzter Zeit esse ich weniger.|Verb
乗り物|乗[の]り 物[もの]|Fahrzeug, Verkehrsmittel|自転車[じてんしゃ]は 便利[べんり]な 乗[の]り 物[もの]です。|Das Fahrrad ist ein praktisches Verkehrsmittel.|Nomen
降りる|降[お]りる|aussteigen; herunterkommen|次[つぎ]の 駅[えき]で 降[お]ります。|Ich steige an der nächsten Station aus.|Verb
降ろす|降[お]ろす|ausladen, absetzen|彼[かれ]は 車[くるま]から 荷物[にもつ]を 降[お]ろした。|Er hat das Gepäck aus dem Auto ausgeladen.|Verb
バイオリン|バイオリン|Geige|彼女[かのじょ]はバイオリンを 習[なら]っています。|Sie lernt Geige.|Nomen
降る|降[ふ]る|fallen (Regen, Schnee)|激[はげ]しい 雨[あめ]が 降[ふ]っています。|Es regnet heftig.|Verb
着く|着[つ]く|ankommen|午後8時[ごご はちじ]に 大阪[おおさか]に 着[つ]きます。|Ich komme um 8 Uhr abends in Osaka an.|Verb
着物|着物[きもの]|Kimono; Kleidung|彼女[かのじょ]は 着物[きもの]がよく 似合[にあ]います。|Der Kimono steht ihr gut.|Nomen
下着|下着[したぎ]|Unterwäsche|私[わたし]は 下着[したぎ]を 手[て]で 洗[あら]う。|Ich wasche meine Unterwäsche von Hand.|Nomen
パスポート|パスポート|Reisepass|パスポートが 見[み]つからない。|Ich finde meinen Reisepass nicht.|Nomen
上着|上着[うわぎ]|Jacke, Oberbekleidung|暑[あつ]いので 上着[うわぎ]を 脱[ぬ]ぎました。|Es war heiß, deshalb habe ich die Jacke ausgezogen.|Nomen
着せる|着[き]せる|anziehen (jemandem etwas)|娘[むすめ]に 可愛[かわい]いドレスを 着[き]せた。|Ich habe meiner Tochter ein süßes Kleid angezogen.|Verb
脱ぐ|脱[ぬ]ぐ|ausziehen (Kleidung)|靴[くつ]を 脱[ぬ]いでください。|Ziehen Sie bitte die Schuhe aus.|Verb
立場|立場[たちば]|Standpunkt, Lage, Position|彼女[かのじょ]は 自分[じぶん]の 立場[たちば]を 分[わ]かっていない。|Sie versteht ihre eigene Lage nicht.|Nomen
バッグ|バッグ|Tasche|私[わたし]は 黒[くろ]いバッグを 持[も]っています。|Ich habe eine schwarze Tasche.|Nomen
目立つ|目立[めだ]つ|auffallen|彼女[かのじょ]の 大[おお]きな 帽子[ぼうし]はとても 目立[めだ]つ。|Ihr großer Hut fällt sehr auf.|Verb
立てる|立[た]てる|aufstellen, aufrichten; aufstellen (Plan)|彼[かれ]はケーキにろうそくを 立[た]てた。|Er steckte Kerzen auf den Kuchen.|Verb
役に立つ|役[やく]に 立[た]つ|nützlich sein, helfen|私[わたし]は 人々[ひとびと]の 役[やく]に 立[た]ちたいと 思[おも]っています。|Ich möchte den Menschen nützlich sein.|Verb
出席|出席[しゅっせき]|Anwesenheit, Teilnahme|午後[ごご]は 会議[かいぎ]に 出席[しゅっせき]します。|Am Nachmittag nehme ich an einer Besprechung teil.|Nomen (mit する)
ゴム|ゴム|Gummi, Gummiband|ゴムが 伸[の]びてしまった。|Das Gummiband ist ausgeleiert.|Nomen
席|席[せき]|Sitzplatz|この 席[せき]、 空[あ]いてますか。|Ist dieser Platz frei?|Nomen
欠席|欠席[けっせき]|Abwesenheit, Fehlen|風邪[かぜ]のため 今日[きょう]は 欠席[けっせき]します。|Wegen einer Erkältung fehle ich heute.|Nomen (mit する)
次男|次男[じなん]|zweiter Sohn|次男[じなん]は 今[いま]、 海外[かいがい]にいます。|Mein zweiter Sohn ist gerade im Ausland.|Nomen
次女|次女[じじょ]|zweite Tochter|うちの 次女[じじょ]は 春[はる]から 中学生[ちゅうがくせい]です。|Unsere zweite Tochter kommt im Frühling in die Mittelschule.|Nomen
ギター|ギター|Gitarre|彼女[かのじょ]はギターが 得意[とくい]です。|Sie kann gut Gitarre spielen.|Nomen
運ぶ|運[はこ]ぶ|tragen, transportieren|いすを 二階[にかい]に 運[はこ]んでください。|Tragen Sie die Stühle bitte in den ersten Stock.|Verb
運転|運転[うんてん]|Fahren, Steuern (eines Fahrzeugs)|父[ちち]は 安全[あんぜん] 運転[うんてん]だ。|Mein Vater fährt sicher.|Nomen (mit する)
運転手|運転手[うんてんしゅ]|Fahrer(in)|彼[かれ]はタクシーの 運転手[うんてんしゅ]です。|Er ist Taxifahrer.|Nomen
転ぶ|転[ころ]ぶ|hinfallen, stürzen|お 祖母[ばあ]ちゃんがお 風呂場[ふろば]で 転[ころ]んだ。|Meine Oma ist im Bad gestürzt.|Verb
セーター|セーター|Pullover|このセーターはウールだ。|Dieser Pullover ist aus Wolle.|Nomen
移る|移[うつ]る|umziehen, wechseln, übergehen|彼女[かのじょ]は 新[あたら]しい 会社[かいしゃ]に 移[うつ]った。|Sie ist zu einer neuen Firma gewechselt.|Verb
移す|移[うつ]す|verlegen, versetzen, verschieben|机[つくえ]を 窓[まど]の 傍[そば]に 移[うつ]しました。|Ich habe den Schreibtisch ans Fenster gerückt.|Verb
動き|動[うご]き|Bewegung|まず 相手[あいて]の 動[うご]きを 見[み]ましょう。|Beobachten wir zuerst die Bewegungen des Gegners.|Nomen
運動|運動[うんどう]|Bewegung, Sport|彼[かれ]はもっと 運動[うんどう]した 方[ほう]がいい。|Er sollte sich mehr bewegen.|Nomen (mit する)
やっぱり|やっぱり|wie gedacht, doch (umgangssprachlich)|やっぱり 旅[たび]が 大好[だいす]きだ。|Ich liebe das Reisen eben doch.|Adverb
活動|活動[かつどう]|Aktivität, Tätigkeit|彼[かれ]は 地域[ちいき]の 活動[かつどう]に 参加[さんか]した。|Er hat sich an Aktivitäten in der Gemeinde beteiligt.|Nomen (mit する)
動物|動物[どうぶつ]|Tier|私[わたし]は 動物[どうぶつ]が 大好[だいす]きです。|Ich liebe Tiere.|Nomen
動かす|動[うご]かす|bewegen, in Gang setzen|部屋[へや]の 家具[かぐ]を 動[うご]かしました。|Ich habe die Möbel im Zimmer umgestellt.|Verb
不動産屋|不動産屋[ふどうさんや]|Immobilienmakler(in)|私[わたし]の 父[ちち]は 不動産屋[ふどうさんや]です。|Mein Vater ist Immobilienmakler.|Nomen
カーテン|カーテン|Vorhang|朝[あさ]、カーテンを 開[あ]けた。|Am Morgen habe ich die Vorhänge aufgezogen.|Nomen
早く|早[はや]く|früh, schnell, bald|なるべく 早[はや]く 来[き]て 下[くだ]さい。|Kommen Sie bitte so früh wie möglich.|Adverb
早口|早口[はやくち]|schnelles Sprechen|彼女[かのじょ]は 早口[はやくち]だ。|Sie spricht schnell.|Nomen
速さ|速[はや]さ|Geschwindigkeit|新幹線[しんかんせん]の 速[はや]さはどれ 位[くらい]ですか。|Wie schnell ist der Shinkansen?|Nomen
速達|速達[そくたつ]|Eilzustellung, Expresspost|これを 速達[そくたつ]で 送[おく]りたいのですが。|Ich möchte das per Eilpost schicken.|Nomen
シャツ|シャツ|Hemd|このシャツはアイロンが 必要[ひつよう]だ。|Dieses Hemd muss gebügelt werden.|Nomen
遅れる|遅[おく]れる|sich verspäten|今朝彼女[けさ かのじょ]は 学校[がっこう]に 遅[おく]れました。|Heute Morgen kam sie zu spät zur Schule.|Verb
開始|開始[かいし]|Beginn, Start|運動会[うんどうかい]は 9時[くじ] 開始[かいし]です。|Das Sportfest beginnt um neun Uhr.|Nomen (mit する)
始めに|始[はじ]めに|am Anfang, zuerst|始[はじ]めにスープが 出[で]ます。|Zuerst wird Suppe serviert.|Adverb
現在|現在[げんざい]|Gegenwart, jetzt|現在[げんざい]の 気温[きおん]は 30度[さんじゅうど]です。|Die aktuelle Temperatur beträgt 30 Grad.|Nomen
ナイフ|ナイフ|Messer|ナイフで 手[て]を 切[き]った。|Ich habe mir mit dem Messer in die Hand geschnitten.|Nomen
実現|実現[じつげん]|Verwirklichung|夢[ゆめ]を 実現[じつげん]するには 努力[どりょく]が 必要[ひつよう]です。|Um Träume zu verwirklichen, muss man sich anstrengen.|Nomen (mit する)
実施|実施[じっし]|Durchführung, Umsetzung|現在[げんざい]、スペシャルキャンペーンを 実施[じっし] 中[ちゅう]です。|Zurzeit läuft eine Sonderaktion.|Nomen (mit する)
事実|事実[じじつ]|Tatsache|それは 全[すべ]て 事実[じじつ]ですか。|Stimmt das alles wirklich?|Nomen
実行|実行[じっこう]|Ausführung, Umsetzung|彼[かれ]はその 計画[けいかく]を 実行[じっこう]した。|Er hat den Plan ausgeführt.|Nomen (mit する)
バイク|バイク|Motorrad|兄[あに]はバイクが 大好[だいす]きです。|Mein großer Bruder liebt Motorräder.|Nomen
実験|実験[じっけん]|Experiment, Versuch|科学[かがく]の 授業[じゅぎょう]で 実験[じっけん]をした。|Im Naturkundeunterricht haben wir ein Experiment gemacht.|Nomen (mit する)
通過|通過[つうか]|Durchfahrt, Passieren|次[つぎ]の 駅[えき]は 通過[つうか]します。|An der nächsten Station fahren wir durch.|Nomen (mit する)
過ぎる|過[す]ぎる|vergehen, vorbeigehen; überschreiten|時[とき]が 過[す]ぎるのは 速[はや]い。|Die Zeit vergeht schnell.|Verb
昼過ぎ|昼過[ひるす]ぎ|früher Nachmittag, kurz nach Mittag|彼[かれ]は 昼過[ひるす]ぎに 来[き]ます。|Er kommt am frühen Nachmittag.|Nomen
いつか|いつか|irgendwann, eines Tages|僕[ぼく]はいつかアフリカに 行[い]きたい。|Ich möchte irgendwann nach Afrika reisen.|Adverb
過去|過去[かこ]|Vergangenheit|それは 過去[かこ]の 話[はなし]だ。|Das ist Vergangenheit.|Nomen
開発|開発[かいはつ]|Entwicklung, Erschließung|ダムの 開発[かいはつ]に 住民[じゅうみん]は 反対[はんたい]しています。|Die Anwohner sind gegen den Bau des Staudamms.|Nomen (mit する)
発生|発生[はっせい]|Entstehung, Auftreten|交差点[こうさてん]で 事故[じこ]が 発生[はっせい]した。|An der Kreuzung hat sich ein Unfall ereignet.|Nomen (mit する)
発言|発言[はつげん]|Äußerung, Wortmeldung|会議[かいぎ]で 全員[ぜんいん]が 発言[はつげん]した。|In der Besprechung hat sich jeder zu Wort gemeldet.|Nomen (mit する)
オレンジ|オレンジ|Orange|私[わたし]はオレンジが 好[す]きです。|Ich mag Orangen.|Nomen
発見|発見[はっけん]|Entdeckung|新[あたら]しい 星[ほし]が 発見[はっけん]された。|Ein neuer Stern wurde entdeckt.|Nomen (mit する)
出発|出発[しゅっぱつ]|Abfahrt, Abreise|あと 15分[じゅうごふん]で 出発[しゅっぱつ]です。|In 15 Minuten geht es los.|Nomen (mit する)
発車|発車[はっしゃ]|Abfahrt (Zug, Bus)|バスが 発車[はっしゃ]します。|Der Bus fährt ab.|Nomen (mit する)
発表|発表[はっぴょう]|Bekanntgabe, Vortrag|合格者[ごうかくしゃ]が 発表[はっぴょう]された。|Die erfolgreichen Prüflinge wurden bekannt gegeben.|Nomen (mit する)
きつい|きつい|eng; hart, anstrengend|このシャツは 少[すこ]しきついです。|Dieses Hemd ist ein bisschen eng.|Adjektiv
表現|表現[ひょうげん]|Ausdruck|彼[かれ]は 歌[うた]で 自分[じぶん]の 気持[きも]ちを 表現[ひょうげん]した。|Er hat seine Gefühle in einem Lied ausgedrückt.|Nomen (mit する)
代表|代表[だいひょう]|Vertreter(in), Vertretung|彼[かれ]がクラスの 代表[だいひょう]だ。|Er ist der Klassensprecher.|Nomen (mit する)
表|表[おもて]|Vorderseite, Außenseite; draußen|表[おもて]に 人[ひと]が 来[き]ています。|Draußen vor der Tür ist jemand.|Nomen
表|表[ひょう]|Tabelle, Liste|この 表[ひょう]を 見[み]てください。|Sehen Sie sich bitte diese Tabelle an.|Nomen
さっき|さっき|vorhin, eben|さっきの 話[はなし]を 続[つづ]けましょう。|Machen wir mit dem Gespräch von vorhin weiter.|Adverb
手紙|手紙[てがみ]|Brief|友人[ゆうじん]から 手紙[てがみ]をもらいました。|Ich habe einen Brief von einem Freund bekommen.|Nomen
絵|絵[え]|Bild, Gemälde, Zeichnung|これは 有名[ゆうめい]な 画家[がか]の 絵[え]です。|Das ist das Bild eines berühmten Malers.|Nomen
雑誌|雑誌[ざっし]|Zeitschrift|この 雑誌[ざっし]はよく 売[う]れています。|Diese Zeitschrift verkauft sich gut.|Nomen
音|音[おと]|Geräusch, Ton|雨[あめ]の 音[おと]が 聞[き]こえる。|Man hört das Geräusch des Regens.|Nomen
テキスト|テキスト|Lehrbuch, Text|テキストを 読[よ]んでください。|Lesen Sie bitte den Text.|Nomen
音|音[おと]|Klang, Ton|このピアノは 音[おと]があまり 良[よ]くない。|Dieses Klavier klingt nicht besonders gut.|Nomen
音楽|音楽[おんがく]|Musik|私[わたし]は 音楽[おんがく]を 聞[き]くのが 好[す]きだ。|Ich höre gern Musik.|Nomen
薬|薬[くすり]|Medizin, Medikament|この 薬[くすり]を 必[かなら]ず 飲[の]んでください。|Nehmen Sie dieses Medikament bitte unbedingt ein.|Nomen
歌|歌[うた]|Lied|私[わたし]はその 歌[うた]を 知[し]らなかった。|Ich kannte das Lied nicht.|Nomen
ビニール|ビニール|Plastik (Folie), Vinyl|ゴミはそのビニール 袋[ぶくろ]に 入[い]れてください。|Werfen Sie den Müll bitte in diese Plastiktüte.|Nomen
歌手|歌手[かしゅ]|Sänger(in)|その 歌手[かしゅ]は 歌[うた]が 下手[へた]だ。|Dieser Sänger singt schlecht.|Nomen
欲しがる|欲[ほ]しがる|haben wollen (bei anderen)|子供[こども]がジュースを 欲[ほ]しがっています。|Das Kind möchte Saft.|Verb
計画|計画[けいかく]|Plan, Vorhaben|彼[かれ]は 一人旅[ひとりたび]の 計画[けいかく]を 立[た]てた。|Er hat eine Reise allein geplant.|Nomen (mit する)
映画|映画[えいが]|Film|彼[かれ]はよく 映画[えいが]を 見[み]ます。|Er sieht oft Filme.|Nomen
りんご|りんご|Apfel|りんごを 一[ひと]つください。|Einen Apfel, bitte.|Nomen
面白い|面白[おもしろ]い|interessant, lustig|この 本[ほん]は全然[ぜんぜん] 面白[おもしろ]くなかった。|Dieses Buch war überhaupt nicht interessant.|Adjektiv
写る|写[うつ]る|abgebildet sein, aufs Foto kommen|このカメラはよく 写[うつ]りますよ。|Diese Kamera macht gute Bilder.|Verb
写す|写[うつ]す|abschreiben, kopieren; fotografieren|彼[かれ]は 友達[ともだち]の 答[こた]えを 写[うつ]した。|Er hat die Antworten seines Freundes abgeschrieben.|Verb
写真|写真[しゃしん]|Foto|写真[しゃしん]は 良[い]い 思[おも]い 出[で]になります。|Fotos sind schöne Erinnerungen.|Nomen
アルバム|アルバム|Album|私[わたし]は 彼[かれ]のアルバムを 見[み]た。|Ich habe mir sein Album angesehen.|Nomen
真っ赤|真[ま]っ 赤[か]|knallrot|彼[かれ]の 顔[かお]は 真[ま]っ 赤[か]でした。|Sein Gesicht war knallrot.|な-Adjektiv
真面目|真面目[まじめ]|ernsthaft, gewissenhaft|彼[かれ]は 真面目[まじめ]な 人[ひと]です。|Er ist ein gewissenhafter Mensch.|な-Adjektiv
真ん中|真[ま]ん 中[なか]|Mitte, genau in der Mitte|道[みち]の 真[ま]ん 中[なか]に 人[ひと]が 立[た]っている。|Mitten auf der Straße steht jemand.|Nomen
真っ白|真[ま]っ 白[しろ]|schneeweiß|外[そと]は 雪[ゆき]で 真[ま]っ 白[しろ]だった。|Draußen war alles weiß vom Schnee.|な-Adjektiv
スカート|スカート|Rock|彼女[かのじょ]はあまりスカートははかない。|Sie trägt nicht oft Röcke.|Nomen
真っ暗|真[ま]っ 暗[くら]|stockdunkel|外[そと]は 真[ま]っ 暗[くら]です。|Draußen ist es stockdunkel.|な-Adjektiv
真っ黒|真[ま]っ 黒[くろ]|pechschwarz|インクで 手[て]が 真[ま]っ 黒[くろ]になった|Meine Hände sind von der Tinte ganz schwarz geworden.|な-Adjektiv
真っ青|真[ま]っ 青[さお]|tiefblau; kreidebleich|空[そら]が 真[ま]っ 青[さお]です。|Der Himmel ist tiefblau.|な-Adjektiv
色々|色々[いろいろ]|verschieden, allerlei|彼[かれ]は 色々[いろいろ]なことを 知[し]っている。|Er weiß über alles Mögliche Bescheid.|な-Adjektiv
ペン|ペン|Stift, Füller|ペンを 貸[か]してください。|Leih mir bitte den Stift.|Nomen
人形|人形[にんぎょう]|Puppe|彼女[かのじょ]は 人形[にんぎょう]をたくさん 持[も]っています。|Sie hat viele Puppen.|Nomen
形|形[かたち]|Form, Gestalt|その 椅子[いす]は 変[か]わった 形[かたち]をしている。|Der Stuhl hat eine ungewöhnliche Form.|Nomen
大型|大型[おおがた]|groß, Großformat|大型[おおがた]のテレビを 買[か]った。|Wir haben einen großen Fernseher gekauft.|Nomen
種類|種類[しゅるい]|Art, Sorte|バラには 色々[いろいろ]な 種類[しゅるい]があります。|Es gibt viele verschiedene Rosensorten.|Nomen
おしゃべり|おしゃべり|Plaudern; gesprächig|妹[いもうと]はとてもおしゃべりです。|Meine kleine Schwester ist sehr gesprächig.|Nomen (mit する)
直す|直[なお]す|reparieren, korrigieren, heilen|私[わたし]がそれを 直[なお]しました。|Ich habe es repariert.|Verb
真っ直ぐ|真[ま]っ 直[す]ぐ|geradeaus; aufrichtig|この 道[みち]を 真[ま]っ 直[す]ぐ 行[い]ってください。|Gehen Sie diese Straße bitte geradeaus.|Adverb
直接|直接[ちょくせつ]|direkt|彼[かれ]に 直接[ちょくせつ]お 願[ねが]いしなさい。|Bitte ihn direkt darum.|Adverb
角|角[かど]|Ecke, Kante|次[つぎ]の 角[かど]で 左[ひだり]に 曲[ま]がってください。|Biegen Sie an der nächsten Ecke bitte links ab.|Nomen
きっと|きっと|sicher, bestimmt|明日[あした]はきっと 雨[あめ]が 降[ふ]ります。|Morgen regnet es bestimmt.|Adverb
三角|三角[さんかく]|Dreieck|紙[かみ]を 三角[さんかく]に 切[き]りました。|Ich habe das Papier dreieckig ausgeschnitten.|Nomen
四角|四角[しかく]|Viereck, Quadrat|紙[かみ]を 四角[しかく]に 切[き]ってください。|Schneiden Sie das Papier bitte viereckig aus.|な-Adjektiv
四角い|四角[しかく]い|viereckig, quadratisch|こっちの 四角[しかく]いテーブルを 買[か]おうよ。|Lass uns diesen viereckigen Tisch hier kaufen.|Adjektiv
四つ角|四[よ]つ 角[かど]|Straßenkreuzung|あそこの 四[よ]つ 角[かど]を 左[ひだり]に 曲[ま]がってください。|Biegen Sie an der Kreuzung dort bitte links ab.|Nomen
メニュー|メニュー|Speisekarte, Menü|メニューをください。|Die Speisekarte, bitte.|Nomen
曲|曲[きょく]|Musikstück, Lied, Melodie|私[わたし]はこの 曲[きょく]が 大好[だいす]きです。|Ich liebe dieses Lied.|Nomen
曲げる|曲[ま]げる|biegen, beugen|ひざを 曲[ま]げてください。|Beugen Sie bitte die Knie.|Verb
曲がり角|曲[ま]がり 角[かど]|Straßenecke, Biegung|ポストはそこの 曲[ま]がり 角[かど]にあります。|Der Briefkasten ist dort an der Ecke.|Nomen
同様|同様[どうよう]|gleich, ähnlich, ebenso wie|私[わたし]たちは 彼[かれ]を 家族[かぞく] 同様[どうよう]に 思[おも]っている。|Er ist für uns wie ein Familienmitglied.|な-Adjektiv
アイスクリーム|アイスクリーム|Eis, Eiscreme|弟[おとうと]はアイスクリームが 大好[だいす]きです。|Mein kleiner Bruder liebt Eis.|Nomen
間違い|間違[まちが]い|Fehler, Irrtum|この 文[ぶん]には 間違[まちが]いがあります。|In diesem Satz ist ein Fehler.|Nomen
間違える|間違[まちが]える|sich irren, verwechseln, falsch machen|電話番号[でんわ ばんごう]を 間違[まちが]えました。|Ich habe die falsche Nummer gewählt.|Verb
間違う|間違[まちが]う|falsch sein, sich irren|あなたは 間違[まちが]っている。|Du irrst dich.|Verb
似ている|似[に]ている|ähneln, ähnlich sein|私[わたし]は 母[はは]に 似[に]ています。|Ich sehe meiner Mutter ähnlich.|Verb
おしゃれ|おしゃれ|schick, modisch|あの 子[こ]はおしゃれだね。|Die Kleine ist schick, nicht wahr?|Nomen (mit する)
以上|以上[いじょう]|mehr als, mindestens; oben genannt|飛行機[ひこうき]が 1時間[いちじかん] 以上[いじょう] 遅[おく]れた。|Das Flugzeug hatte über eine Stunde Verspätung.|Nomen
旅行|旅行[りょこう]|Reise|彼女[かのじょ]は 旅行[りょこう]が 好[す]きです。|Sie reist gern.|Nomen (mit する)
大使館|大使館[たいしかん]|Botschaft (diplomatische Vertretung)|彼[かれ]は 大使館[たいしかん]に 勤[つと]めています。|Er arbeitet in der Botschaft.|Nomen
旅館|旅館[りょかん]|japanisches Gasthaus (Ryokan)|京都[きょうと]では 旅館[りょかん]に 泊[と]まりました。|In Kyoto habe ich in einem Ryokan übernachtet.|Nomen
ジュース|ジュース|Saft, Erfrischungsgetränk|このジュースは 甘[あま]すぎる。|Dieser Saft ist zu süß.|Nomen
映画館|映画館[えいがかん]|Kino|彼[かれ]と 近[ちか]くの 映画館[えいがかん]に 行[い]きました。|Ich bin mit ihm ins Kino in der Nähe gegangen.|Nomen
宿題|宿題[しゅくだい]|Hausaufgaben|友達[ともだち]と 一緒[いっしょ]に 宿題[しゅくだい]をした。|Ich habe mit einem Freund zusammen Hausaufgaben gemacht.|Nomen
泊める|泊[と]める|beherbergen, übernachten lassen|友達[ともだち]をうちに 泊[と]めてあげました。|Ich habe einen Freund bei mir übernachten lassen.|Verb
遊び|遊[あそ]び|Spiel, Vergnügen|お 正月[しょうがつ]には 色々[いろいろ]な 遊[あそ]びをします。|An Neujahr spielen wir allerlei Spiele.|Nomen
ゼロ|ゼロ|Null|今日[きょう]の 交通事故[こうつう じこ]はゼロです。|Heute gab es null Verkehrsunfälle.|Nomen
洋服|洋服[ようふく]|(westliche) Kleidung|今日[きょう]は 洋服[ようふく]を 買[か]いに 行[い]きます。|Heute gehe ich Kleidung kaufen.|Nomen
教室|教室[きょうしつ]|Klassenzimmer; Kurs|私[わたし]の 教室[きょうしつ]は 3階[さんがい]にあります。|Mein Klassenzimmer ist im zweiten Stock.|Nomen
図書室|図書室[としょしつ]|Bibliotheksraum, Schulbibliothek|図書室[としょしつ]で 勉強[べんきょう]した。|Ich habe in der Bibliothek gelernt.|Nomen
窓|窓[まど]|Fenster|窓[まど]を 開[あ]けてください。|Mach bitte das Fenster auf.|Nomen
ピンク|ピンク|Rosa, Pink|娘[むすめ]がピンクのドレスを 着[き]ている。|Meine Tochter trägt ein rosa Kleid.|Nomen
親しい|親[した]しい|vertraut, eng befreundet|週末[しゅうまつ]、 親[した]しい 友達[ともだち]を 家[いえ]に 呼[よ]んだ。|Am Wochenende habe ich einen guten Freund zu mir eingeladen.|Adjektiv
親切|親切[しんせつ]|freundlich, hilfsbereit|親切[しんせつ]にしてくださってどうもありがとうございます。|Vielen Dank, dass Sie so freundlich zu mir waren.|な-Adjektiv
不親切|不親切[ふしんせつ]|unfreundlich|その 店員[てんいん]は 不親切[ふしんせつ]だった。|Der Verkäufer war unfreundlich.|な-Adjektiv
家族|家族[かぞく]|Familie|うちは 五人[ごにん] 家族[かぞく]です。|Wir sind eine fünfköpfige Familie.|Nomen
グラス|グラス|Glas (Trinkglas)|これはきれいなグラスですね。|Das ist ein schönes Glas.|Nomen
万歳|万歳[ばんざい]|Hurra! Banzai!|勝[か]った、 万歳[ばんざい]!|Gewonnen, hurra!|Nomen (mit する)
二十歳|二十歳[はたち]|zwanzig Jahre alt|妹[いもうと]は 来年[らいねん]、 二十歳[はたち]になります。|Meine kleine Schwester wird nächstes Jahr zwanzig.|Nomen
姉さん|姉[ねえ]さん|große Schwester (Anrede)|姉[ねえ]さん、ごめんね。|Entschuldige, große Schwester.|Nomen
兄さん|兄[にい]さん|großer Bruder (Anrede)|兄[にい]さん、おめでとう。|Herzlichen Glückwunsch, großer Bruder.|Nomen
ダンス|ダンス|Tanz, Tanzen|彼女[かのじょ]はダンスが 大好[だいす]きです。|Sie tanzt sehr gern.|Nomen (mit する)
兄弟|兄弟[きょうだい]|Geschwister, Brüder|彼[かれ]は 3人[さんにん] 兄弟[きょうだい]です。|Sie sind drei Geschwister.|Nomen
業者|業者[ぎょうしゃ]|Firma, Fachbetrieb, Händler|引[ひ]っ 越[こ]しを 業者[ぎょうしゃ]に 頼[たの]んだ。|Ich habe eine Firma mit dem Umzug beauftragt.|Nomen
若者|若者[わかもの]|junger Mensch, Jugend|最近[さいきん]の 若者[わかもの]は 本[ほん]を 読[よ]まない。|Die jungen Leute von heute lesen keine Bücher.|Nomen
彼ら|彼[かれ]ら|sie (Plural)|彼[かれ]らはバスケットの 選手[せんしゅ]です。|Sie sind Basketballspieler.|Nomen
おじ|おじ|Onkel|おじは 銀行[ぎんこう]に 勤[つと]めています。|Mein Onkel arbeitet bei einer Bank.|Nomen
結合|結合[けつごう]|Verbindung, Zusammenfügung|ファイルを 結合[けつごう]して 1[ひと]つにしました。|Ich habe die Dateien zu einer zusammengefügt.|Nomen (mit する)
結果|結果[けっか]|Ergebnis|試合[しあい]の 結果[けっか]を 早[はや]く 知[し]りたい。|Ich möchte das Ergebnis des Spiels schnell erfahren.|Nomen
果物|果物[くだもの]|Obst|デザートに 果物[くだもの]を 食[た]べましょう。|Essen wir zum Nachtisch Obst.|Nomen
課題|課題[かだい]|Aufgabe, Problem|夏休[なつやす]みの 課題[かだい]は 何[なん]ですか。|Was ist die Aufgabe für die Sommerferien?|Nomen
サッカー|サッカー|Fußball|彼[かれ]はサッカーの 選手[せんしゅ]です。|Er ist Fußballspieler.|Nomen
課|課[か]|Abteilung; Lektion|今[いま]から 課[か]のミーティングがある。|Gleich ist Abteilungsbesprechung.|Nomen
効果|効果[こうか]|Wirkung, Effekt|この 薬[くすり]には 胃[い]を 守[まも]る 効果[こうか]がある。|Dieses Medikament wirkt schützend auf den Magen.|Nomen
自動車|自動車[じどうしゃ]|Auto, Kraftfahrzeug|彼[かれ]は 自動車[じどうしゃ] 会社[がいしゃ]に 就職[しゅうしょく]した。|Er hat eine Stelle bei einem Autohersteller bekommen.|Nomen
自然|自然[しぜん]|Natur|みんなで 自然[しぜん]を 守[まも]りましょう。|Schützen wir alle gemeinsam die Natur.|Nomen
スープ|スープ|Suppe|母[はは]がコーンスープを 作[つく]っている。|Meine Mutter macht gerade Maissuppe.|Nomen
自然|自然[しぜん]|natürlich, von selbst|親[おや]が 子供[こども]を 守[まも]るのは 自然[しぜん]なことだ。|Es ist natürlich, dass Eltern ihre Kinder beschützen.|な-Adjektiv
自習|自習[じしゅう]|Selbststudium, Stillarbeit|明日[あす]は 自習[じしゅう]の 時間[じかん]がある。|Morgen haben wir eine Stunde Selbstlernzeit.|Nomen (mit する)
理由|理由[りゆう]|Grund, Ursache|遅[おく]れた 理由[りゆう]を 教[おし]えてください。|Sagen Sie mir bitte, warum Sie zu spät gekommen sind.|Nomen
自由|自由[じゆう]|Freiheit, frei|今日[きょう]は 自由[じゆう]な 時間[じかん]が 多[おお]い。|Heute habe ich viel freie Zeit.|な-Adjektiv
バナナ|バナナ|Banane|私[わたし]は 毎朝[まいあさ]バナナを 食[た]べます。|Ich esse jeden Morgen eine Banane.|Nomen
信じる|信[しん]じる|glauben, vertrauen|彼[かれ]はキリストを 信[しん]じている。|Er glaubt an Christus.|Verb
信号|信号[しんごう]|Ampel, Signal|信号[しんごう]が 青[あお]になった。|Die Ampel ist grün geworden.|Nomen
頼む|頼[たの]む|bitten; bestellen|私[わたし]はハンバーガーを 頼[たの]みました。|Ich habe einen Hamburger bestellt.|Verb
市民|市民[しみん]|Bürger(in)|市民[しみん]の 安全[あんぜん]は 大切[たいせつ]だ。|Die Sicherheit der Bürger ist wichtig.|Nomen
うるさい|うるさい|laut, lästig|この 通[とお]りは 車[くるま]の 音[おと]がうるさい。|In dieser Straße ist der Autolärm laut.|Adjektiv
住民|住民[じゅうみん]|Einwohner(in), Anwohner(in)|地域[ちいき]の 住民[じゅうみん]が 集[あつ]まって 話合[はなしあ]いをした。|Die Anwohner kamen zusammen und berieten sich.|Nomen
主人|主人[しゅじん]|(mein) Ehemann; Hausherr, Wirt|主人[しゅじん]は 今[いま]、 留守[るす]です。|Mein Mann ist gerade nicht zu Hause.|Nomen
議員|議員[ぎいん]|Abgeordnete(r)|彼[かれ]は 国会[こっかい] 議員[ぎいん]です。|Er ist Parlamentsabgeordneter.|Nomen
会議|会議[かいぎ]|Besprechung, Konferenz|今日[きょう]の 午後[ごご]、 大事[だいじ]な 会議[かいぎ]があります。|Heute Nachmittag ist eine wichtige Besprechung.|Nomen (mit する)
パトカー|パトカー|Streifenwagen|あそこにパトカーがいる。|Dort drüben steht ein Streifenwagen.|Nomen
対する|対[たい]する|gegenüberstehen; betreffen, sich beziehen auf|その 質問[しつもん]に 対[たい]する 答[こた]えが 見[み]つからなかった。|Ich habe keine Antwort auf diese Frage gefunden.|Verb
対立|対立[たいりつ]|Gegensatz, Konflikt|その 2社[にしゃ]は 対立[たいりつ]しています。|Die beiden Firmen stehen im Konflikt miteinander.|Nomen (mit する)
反対|反対[はんたい]|Gegenteil; Widerspruch, dagegen sein|私[わたし]は 反対[はんたい]です。|Ich bin dagegen.|Nomen (mit する)
答え|答[こた]え|Antwort, Lösung|彼[かれ]はその 問題[もんだい]の 答[こた]えが 分[わ]からない。|Er kennt die Lösung der Aufgabe nicht.|Nomen
ハンバーガー|ハンバーガー|Hamburger|今日[きょう]の 昼[ひる]ご 飯[はん]はハンバーガーでした。|Heute gab es zum Mittagessen einen Hamburger.|Nomen
特に|特[とく]に|besonders|特[とく]に 質問[しつもん]はありません。|Ich habe keine besonderen Fragen.|Adverb
特急|特急[とっきゅう]|Sonderexpress (Zug)|東京[とうきょう]まで 特急[とっきゅう]で 3時間[さんじかん]かかります。|Mit dem Sonderexpress dauert es drei Stunden bis Tokio.|Nomen
特別|特別[とくべつ]|besonders, speziell|あなたは 私[わたし]にとって 特別[とくべつ]な 人[ひと]です。|Du bist für mich ein besonderer Mensch.|な-Adjektiv
別々|別々[べつべつ]|getrennt, einzeln|別々[べつべつ]に 払[はら]いましょう。|Zahlen wir getrennt.|な-Adjektiv
エスカレーター|エスカレーター|Rolltreppe|3階[さんかい]までエスカレーターで 行[い]きましょう。|Fahren wir mit der Rolltreppe in den zweiten Stock.|Nomen
別れる|別[わか]れる|sich trennen, auseinandergehen|駅[えき]で 友[とも]だちと 別[わか]れました。|Ich habe mich am Bahnhof von meinem Freund verabschiedet.|Verb
一般|一般[いっぱん]|allgemein, gewöhnlich|一般[いっぱん]の 方[かた]はこちらの 席[せき]へどうぞ。|Besucher ohne Reservierung nehmen bitte hier Platz.|Nomen
目的|目的[もくてき]|Zweck, Ziel|彼[かれ]が 来[き]た 目的[もくてき]が 分[わ]かりません。|Ich weiß nicht, zu welchem Zweck er gekommen ist.|Nomen
普通|普通[ふつう]|normal, gewöhnlich|彼女[かのじょ]は 普通[ふつう]の 女[おんな]の 子[こ]だ。|Sie ist ein ganz normales Mädchen.|な-Adjektiv
タオル|タオル|Handtuch|私[わたし]はタオルで 顔[かお]をふいた。|Ich habe mir mit einem Handtuch das Gesicht abgewischt.|Nomen
並ぶ|並[なら]ぶ|sich anstellen, in einer Reihe stehen|ここに 並[なら]んでください。|Stellen Sie sich bitte hier an.|Verb
並べる|並[なら]べる|aufreihen, nebeneinanderstellen|私[わたし]は 料理[りょうり]をテーブルに 並[なら]べた。|Ich habe das Essen auf dem Tisch angerichtet.|Verb
平和|平和[へいわ]|Frieden|この 国[くに]は 平和[へいわ]です。|Dieses Land ist friedlich.|な-Adjektiv
高等学校|高等学校[こうとうがっこう]|Oberschule|弟[おとうと]が 高等学校[こうとうがっこう]を 卒業[そつぎょう]しました。|Mein kleiner Bruder hat die Oberschule abgeschlossen.|Nomen
パチンコ|パチンコ|Pachinko (japanisches Automatenspiel)|彼[かれ]は 毎日[まいにち]パチンコをしています。|Er spielt jeden Tag Pachinko.|Nomen
病院|病院[びょういん]|Krankenhaus|病院[びょういん]はどこですか。|Wo ist das Krankenhaus?|Nomen
入院|入院[にゅういん]|Krankenhausaufenthalt, Einlieferung|昨日[きのう]、 母[はは]が 入院[にゅういん]しました。|Gestern ist meine Mutter ins Krankenhaus gekommen.|Nomen (mit する)
大学院|大学院[だいがくいん]|Graduiertenschule (Master, Promotion)|彼[かれ]は 大学院[だいがくいん]に 進[すす]みました。|Er hat ein Aufbaustudium begonnen.|Nomen
医者|医者[いしゃ]|Arzt, Ärztin|私[わたし]は 医者[いしゃ]に 相談[そうだん]した。|Ich habe den Arzt um Rat gefragt.|Nomen
みかん|みかん|Mandarine|みかんを 1[ひと]つください。|Eine Mandarine, bitte.|Nomen
お医者さん|お 医者[いしゃ]さん|Arzt, Ärztin (höflich)|熱[ねつ]があるのでお 医者[いしゃ]さんに 行[い]った。|Ich hatte Fieber, deshalb bin ich zum Arzt gegangen.|Nomen
歯医者|歯医者[はいしゃ]|Zahnarzt, Zahnärztin|私[わたし]は 歯医者[はいしゃ]が 嫌[きら]いです。|Ich hasse den Zahnarzt.|Nomen
歯|歯[は]|Zahn|私[わたし]の 歯[は]は 丈夫[じょうぶ]です。|Ich habe kräftige Zähne.|Nomen
歯ブラシ|歯[は]ブラシ|Zahnbürste|新[あたら]しい 歯[は]ブラシが 必要[ひつよう]だ。|Ich brauche eine neue Zahnbürste.|Nomen
ケーキ|ケーキ|Kuchen, Torte|誕生日[たんじょうび]にケーキを 食[た]べました。|Zum Geburtstag haben wir Kuchen gegessen.|Nomen
科学|科学[かがく]|Wissenschaft|科学[かがく]は 常[つね]に 進歩[しんぽ]している。|Die Wissenschaft schreitet ständig voran.|Nomen
教科書|教科書[きょうかしょ]|Lehrbuch, Schulbuch|日本語[にほんご]の 教科書[きょうかしょ]を 忘[わす]れた。|Ich habe mein Japanischlehrbuch vergessen.|Nomen
理科|理科[りか]|Naturkunde (Schulfach)|私[わたし]は 理科[りか]が 得意[とくい]です。|Ich bin gut in Naturkunde.|Nomen
亡くなる|亡[な]くなる|sterben, verscheiden|おととい、 昔[むかし]の 友人[ゆうじん]が 亡[な]くなった。|Vorgestern ist ein alter Freund gestorben.|Verb
コップ|コップ|Becher, Glas|私[わたし]は 毎朝[まいあさ]コップ 一杯[いっぱい]の 水[みず]を 飲[の]む。|Ich trinke jeden Morgen ein Glas Wasser.|Nomen
忙しい|忙[いそが]しい|beschäftigt|忙[いそが]しいので 手伝[てつだ]ってください。|Ich habe viel zu tun, hilf mir bitte.|Adjektiv
疲れる|疲[つか]れる|müde werden|私[わたし]は 疲[つか]れてふらふらです。|Ich bin so müde, dass ich schwanke.|Verb
禁煙|禁煙[きんえん]|Rauchverbot; das Rauchen aufgeben|彼[かれ]は 今[いま]、 禁煙[きんえん]しています。|Er raucht zurzeit nicht.|Nomen (mit する)
酔っ払い|酔[よ]っ 払[ぱら]い|Betrunkene(r)|彼[かれ]はただの 酔[よ]っ 払[ぱら]いです。|Er ist bloß ein Betrunkener.|Nomen
ナイロン|ナイロン|Nylon|このジャケットはナイロンでできています。|Diese Jacke ist aus Nylon.|Nomen
酔っ払う|酔[よ]っ 払[ぱら]う|sich betrinken|昨夜[ゆうべ]は 酔[よ]っ 払[ぱら]いました。|Gestern Abend war ich betrunken.|Verb
危ない|危[あぶ]ない|gefährlich|その 道[みち]は 車[くるま]が 多[おお]くて 危[あぶ]ない。|Auf der Straße fahren viele Autos, sie ist gefährlich.|Adjektiv
危険|危険[きけん]|Gefahr, gefährlich|その 地域[ちいき]は 今[いま]、 危険[きけん]だ。|Die Gegend ist zurzeit gefährlich.|な-Adjektiv
存在|存在[そんざい]|Existenz, Dasein|宇宙人[うちゅうじん]は 存在[そんざい]すると 思[おも]いますか。|Glaubst du, dass Außerirdische existieren?|Nomen (mit する)
スーツ|スーツ|Anzug|あのスーツはそんなに 高[たか]くない。|Der Anzug dort ist gar nicht so teuer.|Nomen
注目|注目[ちゅうもく]|Aufmerksamkeit, Beachtung|私[わたし]たちはその 会社[かいしゃ]に 注目[ちゅうもく]している。|Wir haben diese Firma im Blick.|Nomen (mit する)
注文|注文[ちゅうもん]|Bestellung|レストランでピザを 注文[ちゅうもん]しました。|Ich habe im Restaurant Pizza bestellt.|Nomen (mit する)
意味|意味[いみ]|Bedeutung, Sinn|それはどういう 意味[いみ]ですか。|Was bedeutet das?|Nomen
意見|意見[いけん]|Meinung|あなたの 意見[いけん]が 聞[き]きたいです。|Ich möchte deine Meinung hören.|Nomen
チケット|チケット|Ticket, Eintrittskarte|この 遊園地[ゆうえんち]のチケットは 3000円[さんぜんえん]です。|Die Karten für diesen Freizeitpark kosten 3.000 Yen.|Nomen
注意|注意[ちゅうい]|Vorsicht, Aufmerksamkeit; Ermahnung|車[くるま]に 注意[ちゅうい]してください。|Achten Sie bitte auf die Autos.|Nomen (mit する)
用意|用意[ようい]|Vorbereitung, Bereitstellung|食事[しょくじ]の 用意[ようい]ができました。|Das Essen ist fertig.|Nomen (mit する)
確か|確[たし]か|sicher, gewiss; wenn ich mich recht erinnere|彼[かれ]の 昇進[しょうしん]は 確[たし]かだ。|Seine Beförderung ist sicher.|な-Adjektiv
確認|確認[かくにん]|Bestätigung, Überprüfung|もう 一度[いちど]、 予約[よやく]を 確認[かくにん]した。|Ich habe die Reservierung noch einmal überprüft.|Nomen (mit する)
チョコレート|チョコレート|Schokolade|妹[いもうと]はチョコレートが 大好[だいす]きです。|Meine kleine Schwester liebt Schokolade.|Nomen
機能|機能[きのう]|Funktion|このソフトにはいろいろな 機能[きのう]があります。|Diese Software hat allerlei Funktionen.|Nomen (mit する)
ジェット機|ジェット 機[き]|Düsenflugzeug|ジェット 機[き]が 飛[と]んでいる。|Ein Düsenflugzeug fliegt vorbei.|Nomen
機械|機械[きかい]|Maschine|新[あたら]しい 機械[きかい]が 壊[こわ]れた。|Die neue Maschine ist kaputtgegangen.|Nomen
材料|材料[ざいりょう]|Material, Zutat|サラダの 材料[ざいりょう]をそろえました。|Ich habe die Zutaten für den Salat beisammen.|Nomen
チャンネル|チャンネル|Kanal, Programm (Fernsehen)|テレビのチャンネルを 変[か]えてください。|Schalte bitte den Fernsehkanal um.|Nomen
具体的|具体的[ぐたいてき]|konkret|具体的[ぐたいてき]な 例[れい]をいくつか 見[み]せてください。|Zeigen Sie mir bitte ein paar konkrete Beispiele.|な-Adjektiv
基づく|基[もと]づく|beruhen auf, basieren auf|この 話[はなし]は 真実[しんじつ]に 基[もと]づいています。|Diese Geschichte beruht auf einer wahren Begebenheit.|Verb
基本|基本[きほん]|Grundlage, Basis|今[いま]、ジャズダンスの 基本[きほん]を 習[なら]っています。|Wir lernen gerade die Grundlagen des Jazztanzes.|Nomen
基準|基準[きじゅん]|Maßstab, Kriterium, Norm|判断[はんだん]の 基準[きじゅん]が 示[しめ]された。|Die Kriterien für die Beurteilung wurden vorgestellt.|Nomen
つまらない|つまらない|langweilig; belanglos|彼[かれ]の 話[はなし]はつまらないですね。|Was er erzählt, ist langweilig, nicht wahr?|Adjektiv
備える|備[そな]える|vorsorgen, sich wappnen; ausstatten|災害[さいがい]に 備[そな]えて 大量[たいりょう]の 水[みず]を 買[か]い 込[こ]んだ。|Um für eine Katastrophe gerüstet zu sein, habe ich viel Wasser gekauft.|Verb
準備|準備[じゅんび]|Vorbereitung|明日[あす]の 会議[かいぎ]の 準備[じゅんび]をした。|Ich habe die Besprechung von morgen vorbereitet.|Nomen (mit する)
設計|設計[せっけい]|Entwurf, Konstruktion|兄[あに]は 船[ふね]の 設計[せっけい]をしています。|Mein großer Bruder konstruiert Schiffe.|Nomen (mit する)
施設|施設[しせつ]|Einrichtung, Anlage|そのホテルにはレジャー 施設[しせつ]がたくさんある。|Das Hotel hat viele Freizeiteinrichtungen.|Nomen
マッチ|マッチ|Streichholz|マッチを 持[も]っていますか。|Hast du Streichhölzer?|Nomen
設ける|設[もう]ける|einrichten, schaffen, vorsehen|授業[じゅぎょう]の 終[お]わりに 復習[ふくしゅう]の 時間[じかん]を 設[もう]けた。|Am Ende der Stunde habe ich Zeit für die Wiederholung eingeplant.|Verb
説明|説明[せつめい]|Erklärung|この 単語[たんご]の 意味[いみ]を 説明[せつめい]してください。|Erklären Sie bitte die Bedeutung dieses Wortes.|Nomen (mit する)
小説|小説[しょうせつ]|Roman|私[わたし]は 月[つき]に 3冊[さんさつ]くらい 小説[しょうせつ]を 読[よ]みます。|Ich lese etwa drei Romane im Monat.|Nomen
公開|公開[こうかい]|Veröffentlichung, öffentliche Vorführung|その 映画[えいが]は 今日[きょう]、 公開[こうかい]されます。|Der Film kommt heute in die Kinos.|Nomen (mit する)
いとこ|いとこ|Cousin, Cousine|従兄弟[いとこ]と 私[わたし]は 同[おな]じ 年[とし]です。|Mein Cousin und ich sind gleich alt.|Nomen
公園|公園[こうえん]|Park|子供[こども]たちが 公園[こうえん]で 遊[あそ]んでいる。|Die Kinder spielen im Park.|Nomen
動物園|動物園[どうぶつえん]|Zoo|昨日子供[きのう こども]たちと 動物園[どうぶつえん]に 行[い]きました。|Gestern war ich mit den Kindern im Zoo.|Nomen
祭り|祭[まつ]り|Fest, Volksfest|彼女[かのじょ]は 祭[まつ]りが 大好[だいす]きです。|Sie liebt Feste.|Nomen
国際|国際[こくさい]|international|ここで 国際[こくさい] 会議[かいぎ]が 開[ひら]かれます。|Hier findet eine internationale Konferenz statt.|Nomen
ストーブ|ストーブ|Ofen, Heizgerät|うちではまだストーブを 使[つか]っています。|Bei uns benutzen wir noch einen Heizofen.|Nomen
実際|実際[じっさい]|tatsächlich, in Wirklichkeit|彼[かれ]は 実際[じっさい]にはあまり 背[せ]が 高[たか]くない。|In Wirklichkeit ist er nicht besonders groß.|Adverb
飛行場|飛行場[ひこうじょう]|Flugplatz|バスが 飛行場[ひこうじょう]に 着[つ]きました。|Der Bus ist am Flugplatz angekommen.|Nomen
航空便|航空便[こうくうびん]|Luftpost|航空便[こうくうびん]で 書類[しょるい]が 届[とど]きました。|Die Unterlagen sind per Luftpost angekommen.|Nomen
船便|船便[ふなびん]|Seepost, Schiffsfracht|アメリカの 友人[ゆうじん]から 船便[ふなびん]が 届[とど]いた。|Von einem Freund in Amerika ist eine Sendung per Seepost angekommen.|Nomen
ガソリンスタンド|ガソリンスタンド|Tankstelle|この 近[ちか]くにガソリンスタンドはありますか。|Gibt es hier in der Nähe eine Tankstelle?|Nomen
船|船[ふね]|Schiff, Boot|私[わたし]たちは 船[ふね]に 乗[の]った。|Wir sind an Bord des Schiffes gegangen.|Nomen
空港|空港[くうこう]|Flughafen|空港[くうこう]までリムジンバスで 行[い]った。|Ich bin mit dem Flughafenbus zum Flughafen gefahren.|Nomen
港|港[みなと]|Hafen|港[みなと]に 船[ふね]が 着[つ]きました。|Das Schiff ist im Hafen angekommen.|Nomen
島|島[しま]|Insel|日本[にっぽん]は 島[しま] 国[ぐに]です。|Japan ist ein Inselstaat.|Nomen
デート|デート|Verabredung, Date|デートで 遊園地[ゆうえんち]に 行[い]きました。|Bei unserem Date waren wir im Freizeitpark.|Nomen (mit する)
完成|完成[かんせい]|Fertigstellung, Vollendung|新[あたら]しいホームページが 完成[かんせい]した。|Die neue Homepage ist fertig.|Nomen (mit する)
平成|平成[へいせい]|Heisei-Ära (1989–2019)|彼女[かのじょ]は 平成[へいせい] 3年生[さんねんう]まれです。|Sie wurde im Jahr Heisei 3 (1991) geboren.|Nomen
成功|成功[せいこう]|Erfolg|ついに 実験[じっけん]が 成功[せいこう]した。|Das Experiment ist endlich gelungen.|Nomen (mit する)
原因|原因[げんいん]|Ursache|この 事故[じこ]の 原因[げんいん]は 何[なん]ですか。|Was ist die Ursache dieses Unfalls?|Nomen
ふすま|ふすま|Papierschiebetür (Fusuma)|ふすまを 閉[し]めてください。|Schließen Sie bitte die Schiebetür.|Nomen
資金|資金[しきん]|Geldmittel, Kapital|私[わたし]たちは 今[いま]、 結婚[けっこん] 資金[しきん]を 貯[た]めています。|Wir sparen gerade für die Hochzeit.|Nomen
投資|投資[とうし]|Investition|私[わたし]は 4[よっ]つの 会社[かいしゃ]に 投資[とうし]しています。|Ich investiere in vier Firmen.|Nomen (mit する)
願う|願[ねが]う|wünschen, hoffen, bitten|彼[かれ]が 元気[げんき]になるよう 願[ねが]っています。|Ich hoffe, dass er wieder gesund wird.|Verb
正確|正確[せいかく]|genau, exakt|彼[かれ]の 計算[けいさん]は 正確[せいかく]です。|Seine Rechnung ist genau.|な-Adjektiv
レモン|レモン|Zitrone|紅茶[こうちゃ]にレモンを 入[い]れて 飲[の]んだ。|Ich habe den Schwarztee mit Zitrone getrunken.|Nomen
正しい|正[ただ]しい|richtig, korrekt|それは 正[ただ]しい 答[こた]えです。|Das ist die richtige Antwort.|Adjektiv
正月|正月[しょうがつ]|Neujahr|お 正月[しょうがつ]にはたいてい、 家族[かぞく]が 集[あつ]まる。|Zu Neujahr kommt meistens die Familie zusammen.|Nomen
正直|正直[しょうじき]|ehrlich, aufrichtig|彼女[かのじょ]はとても 正直[しょうじき]だ。|Sie ist sehr ehrlich.|な-Adjektiv
異なる|異[こと]なる|sich unterscheiden, anders sein|彼[かれ]と 私[わたし]はいつも 意見[いけん]が 異[こと]なる。|Er und ich sind immer unterschiedlicher Meinung.|Verb
チーズ|チーズ|Käse|チーズを 一切[ひとき]れ 食[た]べました。|Ich habe ein Stück Käse gegessen.|Nomen
通常|通常[つうじょう]|normalerweise, gewöhnlich|通常[つうじょう]は 夜8時[よる はちじ]まで 営業[えいぎょう]しています。|Normalerweise haben wir bis 8 Uhr abends geöffnet.|Nomen
非常に|非常[ひじょう]に|sehr, äußerst|これは 非常[ひじょう]に 重要[じゅうよう]です。|Das ist äußerst wichtig.|Adverb
調べる|調[しら]べる|nachschlagen, untersuchen, prüfen|この 単語[たんご]の 意味[いみ]を 辞書[じしょ]で 調[しら]べましょう。|Schlagen wir die Bedeutung dieses Wortes im Wörterbuch nach.|Verb
強調|強調[きょうちょう]|Betonung, Hervorhebung|彼[かれ]は 良[よ]いところだけを 強調[きょうちょう]した。|Er hob nur die guten Seiten hervor.|Nomen (mit する)
ドライブ|ドライブ|Autofahrt, Spazierfahrt|今日[きょう]は 群馬[ぐんま]までドライブしました。|Heute bin ich bis nach Gunma gefahren.|Nomen (mit する)
季節|季節[きせつ]|Jahreszeit|私[わたし]の 一番好[いちばん す]きな 季節[きせつ]は 春[はる]です。|Meine liebste Jahreszeit ist der Frühling.|Nomen
調査|調査[ちょうさ]|Untersuchung, Erhebung|私[わたし]たちがその 問題[もんだい]を 調査[ちょうさ]しています。|Wir untersuchen dieses Problem.|Nomen (mit する)
提供|提供[ていきょう]|Bereitstellung, Angebot|彼[かれ]がパーティー 会場[かいじょう]を 提供[ていきょう]してくれました。|Er hat uns den Raum für die Party zur Verfügung gestellt.|Nomen (mit する)
提案|提案[ていあん]|Vorschlag|そのアイデアは 彼[かれ]の 提案[ていあん]です。|Diese Idee war sein Vorschlag.|Nomen (mit する)
ラケット|ラケット|Schläger (Tennis usw.)|テニスのラケットを 買[か]いました。|Ich habe einen Tennisschläger gekauft.|Nomen
案内|案内[あんない]|Führung, Auskunft|私[わたし]が 中[なか]をご 案内[あんない]します。|Ich führe Sie drinnen herum.|Nomen (mit する)
示す|示[しめ]す|zeigen, anzeigen|彼[かれ]は 新製品[しんせいひん]に 興味[きょうみ]を 示[しめ]している。|Er zeigt Interesse an dem neuen Produkt.|Verb
連れて行く|連[つ]れて 行[い]く|mitnehmen (eine Person)|私[わたし]も 連[つ]れて 行[い]ってください。|Nehmen Sie mich bitte auch mit.|Verb
連れて来る|連[つ]れて 来[く]る|mitbringen (eine Person)|息子[むすこ]が 友達[ともだち]を 連[つ]れて 来[き]ました。|Mein Sohn hat einen Freund mitgebracht.|Verb
スチュワーデス|スチュワーデス|Flugbegleiterin, Stewardess|彼女[かのじょ]はスチュワーデスになった。|Sie ist Flugbegleiterin geworden.|Nomen
続ける|続[つづ]ける|fortsetzen, weitermachen|仕事[しごと]を 続[つづ]けてください。|Arbeiten Sie bitte weiter.|Verb
相手|相手[あいて]|Gegenüber, Partner, Gegner|試合[しあい]の 相手[あいて]は 誰[だれ]ですか。|Wer ist der Gegner im Spiel?|Nomen
会談|会談[かいだん]|Gespräch, Unterredung (offiziell)|会談[かいだん]の 内容[ないよう]が 発表[はっぴょう]されました。|Der Inhalt der Gespräche wurde bekannt gegeben.|Nomen (mit する)
相談|相談[そうだん]|Beratung, Besprechung|相談[そうだん]したいことがあります。|Ich möchte etwas mit Ihnen besprechen.|Nomen (mit する)
テープレコーダー|テープレコーダー|Tonbandgerät, Kassettenrekorder|テープレコーダーで 自分[じぶん]の 声[こえ]を 録音[ろくおん]しました。|Ich habe meine Stimme mit dem Kassettenrekorder aufgenommen.|Nomen
記者|記者[きしゃ]|Journalist(in), Reporter(in)|彼[かれ]は 新聞[しんぶん] 記者[きしゃ]です。|Er ist Zeitungsjournalist.|Nomen
記録|記録[きろく]|Aufzeichnung; Rekord|マラソンで 世界[せかい] 記録[きろく]が 出[で]た。|Beim Marathon wurde ein Weltrekord aufgestellt.|Nomen (mit する)
録音|録音[ろくおん]|Tonaufnahme|そのラジオ 番組[ばんぐみ]はもう 録音[ろくおん]しました。|Die Radiosendung habe ich schon aufgenommen.|Nomen (mit する)
登る|登[のぼ]る|besteigen, hinaufklettern|私[わたし]たちは 昨年[さくねん]、 富士山[ふじさん]に 登[のぼ]りました。|Wir haben letztes Jahr den Fuji bestiegen.|Verb
ひげ|ひげ|Bart|父[ちち]はひげをはやしています。|Mein Vater trägt einen Bart.|Nomen
関する|関[かん]する|betreffen, sich beziehen auf|その 問題[もんだい]に 関[かん]する 記事[きじ]を 読[よ]みました。|Ich habe einen Artikel über dieses Problem gelesen.|Verb
関連|関連[かんれん]|Zusammenhang, Bezug|関連[かんれん]のセクションへ 連絡[れんらく]した。|Ich habe die zuständigen Abteilungen benachrichtigt.|Nomen (mit する)
関係|関係[かんけい]|Beziehung, Verhältnis|彼[かれ]はその 事件[じけん]に 関係[かんけい]がない。|Er hat mit dem Vorfall nichts zu tun.|Nomen (mit する)
状況|状況[じょうきょう]|Lage, Situation|この 状況[じょうきょう]では 出発[しゅっぱつ]は 難[むずか]しいです。|In dieser Lage ist eine Abreise schwierig.|Nomen
ぐっすり|ぐっすり|tief und fest (schlafen)|赤[あか]ちゃんがぐっすり 寝[ね]ている。|Das Baby schläft tief und fest.|Adverb
状態|状態[じょうたい]|Zustand|ここは 道[みち]の 状態[じょうたい]がとても 悪[わる]いです。|Die Straße ist hier in sehr schlechtem Zustand.|Nomen
治る|治[なお]る|heilen, gesund werden|けがはもう 治[なお]りましたか。|Ist deine Verletzung schon verheilt?|Verb
政治|政治[せいじ]|Politik|私[わたし]は 政治[せいじ]に 関心[かんしん]がある。|Ich interessiere mich für Politik.|Nomen
治す|治[なお]す|heilen, kurieren|早[はや]く 風邪[かぜ]を 治[なお]してください。|Kurieren Sie Ihre Erkältung bitte schnell aus.|Verb
ソース|ソース|Soße, Worcestersoße|ソースはどれですか。|Welche ist die Soße?|Nomen
政府|政府[せいふ]|Regierung|そのデモについて 政府[せいふ]は 何[なに]もしなかった。|Die Regierung hat wegen der Demonstration nichts unternommen.|Nomen
党|党[とう]|Partei|党[とう]の 代表[だいひょう]が 質問[しつもん]に 答[こた]えました。|Der Vertreter der Partei beantwortete die Frage.|Nomen
対策|対策[たいさく]|Maßnahme, Gegenmaßnahme|一緒[いっしょ]に 対策[たいさく]を 考[かんが]えましょう。|Überlegen wir uns gemeinsam Maßnahmen.|Nomen
政策|政策[せいさく]|Politik, politische Maßnahme|新[あたら]しい 政策[せいさく]はあまり 良[い]いとは 思[おも]えません。|Ich halte die neue Politik nicht für besonders gut.|Nomen
タイプライター|タイプライター|Schreibmaschine|母[はは]は 古[ふる]いタイプライターを 持[も]っています。|Meine Mutter hat eine alte Schreibmaschine.|Nomen
選ぶ|選[えら]ぶ|wählen, auswählen|良[よ]い 家[いえ]を 選[えら]ぶのは 難[むずか]しい。|Es ist schwer, ein gutes Haus auszuwählen.|Verb
選手|選手[せんしゅ]|Sportler(in), Spieler(in)|彼[かれ]はプロのサッカー 選手[せんしゅ]だ。|Er ist Profifußballer.|Nomen
選挙|選挙[せんきょ]|Wahl (politisch)|彼[かれ]は 選挙[せんきょ]に 出[で]るつもりだ。|Er will bei der Wahl antreten.|Nomen (mit する)
候補|候補[こうほ]|Kandidat(in), Kandidatur|会長[かいちょう]の 候補[こうほ]は 3人[さんにん]います。|Es gibt drei Kandidaten für den Vorsitz.|Nomen
トマト|トマト|Tomate|私[わたし]はトマトが 大好[だいす]きです。|Ich liebe Tomaten.|Nomen
首相|首相[しゅしょう]|Premierminister(in)|今[いま]の 首相[しゅしょう]はあまり 力[ちから]がない。|Der jetzige Premierminister hat nicht viel Macht.|Nomen
首都|首都[しゅと]|Hauptstadt|東京[とうきょう]は 日本[にっぽん]の 首都[しゅと]です。|Tokio ist die Hauptstadt Japans.|Nomen
改革|改革[かいかく]|Reform|彼[かれ]は 行政[ぎょうせい]を 改革[かいかく]したいと 思[おも]っている。|Er möchte die Verwaltung reformieren.|Nomen (mit する)
革|革[かわ]|Leder|革[かわ]のベルトを 買[か]いました。|Ich habe einen Ledergürtel gekauft.|Nomen
バター|バター|Butter|パンにバターをぬって 食[た]べました。|Ich habe Butter aufs Brot gestrichen und es gegessen.|Nomen
命令|命令[めいれい]|Befehl, Anordnung|彼女[かのじょ]は 命令[めいれい]に 従[したが]わなかった。|Sie hat den Befehl nicht befolgt.|Nomen (mit する)
番組|番組[ばんぐみ]|Sendung, Programm|私[わたし]はこの 番組[ばんぐみ]が 好[す]きです。|Ich mag diese Sendung.|Nomen
組み立てる|組[く]み 立[た]てる|zusammenbauen, montieren|日曜日[にちようび]に 本棚[ほんだな]を 組[く]み 立[た]てます。|Am Sonntag baue ich das Bücherregal zusammen.|Verb
組織|組織[そしき]|Organisation; Gewebe|彼[かれ]はある 組織[そしき]のリーダーだ。|Er ist der Leiter einer bestimmten Organisation.|Nomen (mit する)
バレーボール|バレーボール|Volleyball|妹[いもうと]はバレーボールが 得意[とくい]です。|Meine kleine Schwester spielt gut Volleyball.|Nomen
進める|進[すす]める|voranbringen, vorantreiben|早[はや]く 授業[じゅぎょう]を 進[すす]めましょう。|Machen wir zügig mit dem Unterricht weiter.|Verb
進む|進[すす]む|vorwärtsgehen, vorankommen|前[まえ]に 進[すす]んでください。|Gehen Sie bitte weiter nach vorn.|Verb
進学|進学[しんがく]|Übergang an eine höhere Schule|彼女[かのじょ]は 来年[らいねん]、 大学[だいがく]に 進学[しんがく]する。|Sie geht nächstes Jahr an die Universität.|Nomen (mit する)
拡大|拡大[かくだい]|Vergrößerung, Ausweitung|この 図[ず]を 拡大[かくだい]コピーしてください。|Machen Sie bitte eine vergrößerte Kopie dieser Abbildung.|Nomen (mit する)
おかず|おかず|Beilage, Gericht zum Reis|晩[ばん]ご 飯[はん]のおかずは 何?[なに]|Was gibt es heute Abend zum Reis?|Nomen
責任|責任[せきにん]|Verantwortung|彼[かれ]は 失敗[しっぱい]の 責任[せきにん]を 取[と]って、 会社[かいしゃ]を 辞[や]めた。|Er übernahm die Verantwortung für den Fehler und kündigte.|Nomen
辞める|辞[や]める|kündigen, aufhören (Stelle)|彼[かれ]は 会社[かいしゃ]を 辞[や]めます。|Er kündigt bei der Firma.|Verb
辞書|辞書[じしょ]|Wörterbuch|彼女[かのじょ]は 辞書[じしょ]をよく 使[つか]います。|Sie benutzt oft das Wörterbuch.|Nomen
通勤|通勤[つうきん]|Pendeln, Arbeitsweg|毎朝[まいあさ]、 通勤[つうきん]に 30分[さんじゅっぷん]かかります。|Der Weg zur Arbeit dauert jeden Morgen 30 Minuten.|Nomen (mit する)
カレンダー|カレンダー|Kalender|カレンダーに 予定[よてい]を 書[か]いた。|Ich habe den Termin in den Kalender eingetragen.|Nomen
勤める|勤[つと]める|angestellt sein, arbeiten bei|私[わたし]は 銀行[ぎんこう]に 勤[つと]めています。|Ich arbeite bei einer Bank.|Verb
事務所|事務所[じむしょ]|Büro, Geschäftsstelle|後[あと]で 事務所[じむしょ]に 来[き]てください。|Kommen Sie bitte später ins Büro.|Nomen
事務室|事務室[じむしつ]|Büroraum|事務室[じむしつ]でコピーを 取[と]って 来[き]ます。|Ich gehe im Büro Kopien machen.|Nomen
従来|従来[じゅうらい]|bisher, herkömmlich|このプリンターは 従来[じゅうらい]のものより 速[はや]い。|Dieser Drucker ist schneller als die bisherigen Modelle.|Nomen
ハンドバッグ|ハンドバッグ|Handtasche|ハンドバッグを 忘[わす]れました。|Ich habe meine Handtasche vergessen.|Nomen
成績|成績[せいせき]|Leistung, Noten|成績[せいせき]が 上[あ]がりました。|Meine Noten sind besser geworden.|Nomen
集める|集[あつ]める|sammeln|弟[おとうと]は 切手[きって]を 集[あつ]めています。|Mein kleiner Bruder sammelt Briefmarken.|Verb
集まる|集[あつ]まる|sich versammeln, zusammenkommen|駅前[えきまえ]に 人[ひと]が 集[あつ]まっています。|Vor dem Bahnhof haben sich Leute versammelt.|Verb
採用|採用[さいよう]|Einstellung, Anstellung; Übernahme|その 会社[かいしゃ]は 女性[じょせい]を 多[おお]く 採用[さいよう]している。|Diese Firma stellt viele Frauen ein.|Nomen (mit する)
ベル|ベル|Klingel, Glocke|玄関[げんかん]のベルが 鳴[な]った。|Es hat an der Haustür geklingelt.|Nomen
給料|給料[きゅうりょう]|Gehalt, Lohn|来年[らいねん]から 給料[きゅうりょう]が 上[あ]がります。|Ab nächstem Jahr steigt mein Gehalt.|Nomen
卒業|卒業[そつぎょう]|Schulabschluss, Studienabschluss|私[わたし]は 去年[きょねん]、 大学[だいがく]を 卒業[そつぎょう]した。|Ich habe letztes Jahr die Universität abgeschlossen.|Nomen (mit する)
就職|就職[しゅうしょく]|Stellenantritt, Arbeitssuche|最近[さいきん]、 若[わか]い 人[ひと]たちの 就職[しゅうしょく]が 難[むずか]しくなっています。|In letzter Zeit ist es für junge Leute schwer geworden, eine Stelle zu finden.|Nomen (mit する)
退院|退院[たいいん]|Entlassung aus dem Krankenhaus|母[はは]が 今日[きょう] 退院[たいいん]します。|Meine Mutter wird heute aus dem Krankenhaus entlassen.|Nomen (mit する)
インク|インク|Tinte|プリンターのインクを 買[か]った。|Ich habe Druckertinte gekauft.|Nomen
契約|契約[けいやく]|Vertrag|その 選手[せんしゅ]は 新[あたら]しいチームと 契約[けいやく]した。|Der Spieler hat bei einer neuen Mannschaft unterschrieben.|Nomen (mit する)
交渉|交渉[こうしょう]|Verhandlung|今[いま]、 値段[ねだん]を 交渉[こうしょう]しています。|Wir verhandeln gerade über den Preis.|Nomen (mit する)
事件|事件[じけん]|Vorfall, Fall, Kriminalfall|その 事件[じけん]の 犯人[はんにん]はまだ 捕[つか]まっていない。|Der Täter dieses Falls ist noch nicht gefasst.|Nomen
条件|条件[じょうけん]|Bedingung|この 条件[じょうけん]では 厳[きび]し 過[す]ぎます。|Diese Bedingungen sind zu hart.|Nomen
クーラー|クーラー|Klimaanlage|暑[あつ]いのでクーラーをつけました。|Es war heiß, deshalb habe ich die Klimaanlage eingeschaltet.|Nomen
参加|参加[さんか]|Teilnahme|明日[あす]は 市民[しみん]マラソンに 参加[さんか]します。|Morgen nehme ich am Bürgermarathon teil.|Nomen (mit する)
増加|増加[ぞうか]|Zunahme, Anstieg|島[しま]の 人口[じんこう]は 年々[ねんねん] 増加[ぞうか]しています。|Die Bevölkerung der Insel nimmt von Jahr zu Jahr zu.|Nomen (mit する)
加える|加[くわ]える|hinzufügen|塩[しお]、コショウを 加[くわ]えてください。|Geben Sie bitte Salz und Pfeffer dazu.|Verb
加工|加工[かこう]|Verarbeitung, Bearbeitung|この 工場[こうじょう]では 魚[さかな]を 加工[かこう]している。|In dieser Fabrik wird Fisch verarbeitet.|Nomen (mit する)
ミルク|ミルク|Milch, Babymilch|赤[あか]ちゃんにミルクをあげた。|Ich habe dem Baby Milch gegeben.|Nomen
比べる|比[くら]べる|vergleichen|今月[こんげつ]と 先月[せんげつ]の 売上[うりあげ]を 比[くら]べた。|Ich habe die Umsätze dieses und des letzten Monats verglichen.|Verb
批判|批判[ひはん]|Kritik|彼[かれ]は 同僚[どうりょう]を 批判[ひはん]した。|Er hat seinen Kollegen kritisiert.|Nomen (mit する)
評価|評価[ひょうか]|Bewertung, Wertschätzung|最近[さいきん]、 彼[かれ]の 評価[ひょうか]が 上[あ]がった。|In letzter Zeit ist sein Ansehen gestiegen.|Nomen (mit する)
対象|対象[たいしょう]|Zielgruppe, Gegenstand|このアンケートは 大学生[だいがくせい]が 対象[たいしょう]です。|Diese Umfrage richtet sich an Studierende.|Nomen
サラダ|サラダ|Salat|サラダをたくさん 食[た]べました。|Ich habe viel Salat gegessen.|Nomen
故障|故障[こしょう]|Defekt, Panne|冷蔵庫[れいぞうこ]が 故障[こしょう]しました。|Der Kühlschrank ist kaputtgegangen.|Nomen (mit する)
修理|修理[しゅうり]|Reparatur|車[くるま]を 修理[しゅうり]に 出[だ]した。|Ich habe das Auto zur Reparatur gebracht.|Nomen (mit する)
乗り換える|乗[の]り 換[か]える|umsteigen|次[つぎ]の 駅[えき]で 地下鉄[ちかてつ]に 乗[の]り 換[か]えます。|An der nächsten Station steige ich in die U-Bahn um.|Verb
乗り換え|乗[の]り 換[か]え|Umsteigen|次[つぎ]の 駅[えき]で 乗[の]り 換[か]えです。|An der nächsten Station muss ich umsteigen.|Nomen (mit する)
おじさん|おじさん|Onkel; Mann mittleren Alters|昨日[きのう]おじさんに 会[あ]いました。|Gestern habe ich meinen Onkel getroffen.|Nomen
換える|換[か]える|wechseln, austauschen|車[くるま]のタイヤを 換[か]えた。|Ich habe die Autoreifen gewechselt.|Verb
着替える|着替[きが]える|sich umziehen|彼[かれ]はきれいな 服[ふく]に 着替[きが]えた。|Er hat sich saubere Kleidung angezogen.|Verb
被る|被[かぶ]る|aufsetzen, tragen (auf dem Kopf)|帽子[ぼうし]を 被[かぶ]って 外出[がいしゅつ]した。|Ich bin mit einem Hut ausgegangen.|Verb
破る|破[やぶ]る|zerreißen; brechen (Versprechen, Regel)|彼[かれ]は 約束[やくそく]を 破[やぶ]った。|Er hat sein Versprechen gebrochen.|Verb
ベルト|ベルト|Gürtel|ベルトがきつくなりました。|Mein Gürtel ist eng geworden.|Nomen
破れる|破[やぶ]れる|reißen, zerreißen|シャツが 破[やぶ]れている。|Das Hemd ist zerrissen.|Verb
壊す|壊[こわ]す|kaputt machen, zerstören|彼女[かのじょ]が 私[わたし]のケータイを 壊[こわ]した。|Sie hat mein Handy kaputt gemacht.|Verb
壊れる|壊[こわ]れる|kaputtgehen|会社[かいしゃ]のパソコンが 壊[こわ]れた。|Der Firmencomputer ist kaputtgegangen.|Verb
救急車|救急車[きゅうきゅうしゃ]|Krankenwagen|誰[だれ]か 救急車[きゅうきゅうしゃ]を 呼[よ]んでください。|Bitte ruft jemand einen Krankenwagen!|Nomen
ラーメン|ラーメン|Ramen (Nudelsuppe)|夕食[ゆうしょく]にラーメンを 食[た]べました。|Zum Abendessen habe ich Ramen gegessen.|Nomen
助ける|助[たす]ける|helfen, retten|彼女[かのじょ]は 病気[びょうき]の 犬[いぬ]を 助[たす]けた。|Sie hat einem kranken Hund geholfen.|Verb
立派|立派[りっぱ]|großartig, vortrefflich, stattlich|彼[かれ]は 立派[りっぱ]な 人[ひと]です。|Er ist ein vortrefflicher Mensch.|な-Adjektiv
警察|警察[けいさつ]|Polizei|警察[けいさつ]を 呼[よ]んでください。|Rufen Sie bitte die Polizei.|Nomen
管理|管理[かんり]|Verwaltung, Kontrolle|彼女[かのじょ]が 私[わたし]のスケジュールを 管理[かんり]している。|Sie verwaltet meinen Terminplan.|Nomen (mit する)
ライター|ライター|Feuerzeug|店[みせ]にライターを 忘[わす]れました。|Ich habe mein Feuerzeug im Laden vergessen.|Nomen
盗む|盗[ぬす]む|stehlen|誰[だれ]かが 私[わたし]のカバンを 盗[ぬす]みました。|Jemand hat meine Tasche gestohlen.|Verb
殺す|殺[ころ]す|töten|私[わたし]は 生[い]き 物[もの]を 殺[ころ]すのが 嫌[きら]いだ。|Ich mag es nicht, Lebewesen zu töten.|Verb
逮捕|逮捕[たいほ]|Verhaftung|逃[に]げていた 犯人[はんにん]が 逮捕[たいほ]されました。|Der flüchtige Täter wurde verhaftet.|Nomen (mit する)
逃げる|逃[に]げる|fliehen, weglaufen|鳥[とり]が 窓[まど]から 逃[に]げたよ。|Der Vogel ist durchs Fenster entkommen.|Verb
ワイシャツ|ワイシャツ|Oberhemd (weißes Hemd)|彼[かれ]は 白[しろ]いワイシャツを 着[き]ている。|Er trägt ein weißes Hemd.|Nomen
戦争|戦争[せんそう]|Krieg|2003年[にせんさんねん]にイラクで 戦争[せんそう]があった。|2003 gab es im Irak Krieg.|Nomen (mit する)
競争|競争[きょうそう]|Wettbewerb, Konkurrenz|2社[にしゃ]は 互[たが]いに 競争[きょうそう]している。|Die zwei Firmen konkurrieren miteinander.|Nomen (mit する)
混む・込む|混[こ]む・ 込[こ]む|voll sein, überfüllt sein|電車[でんしゃ]が 込[こ]んでいる。|Der Zug ist voll.|Verb
大統領|大統領[だいとうりょう]|Präsident(in) (eines Staates)|フランスの 大統領[だいとうりょう]は 誰[だれ]ですか。|Wer ist der Präsident Frankreichs?|Nomen
シャワー|シャワー|Dusche|朝[あさ]、 急[いそ]いでシャワーを 浴[あ]びました。|Am Morgen habe ich schnell geduscht.|Nomen
捨てる|捨[す]てる|wegwerfen; aufgeben|ゴミを 捨[す]ててください。|Wirf bitte den Müll weg.|Verb
拾う|拾[ひろ]う|aufheben, finden|道[みち]で 財布[さいふ]を 拾[ひろ]った。|Ich habe auf der Straße ein Portemonnaie gefunden.|Verb
池|池[いけ]|Teich|池[いけ]に 鯉[こい]がいます。|Im Teich sind Karpfen.|Nomen
電池|電池[でんち]|Batterie|新[あたら]しい 電池[でんち]を 入[い]れましょう。|Legen wir eine neue Batterie ein.|Nomen
うどん|うどん|Udon (dicke Weizennudeln)|私[わたし]はお 昼[ひる]にうどんを 食[た]べました。|Zu Mittag habe ich Udon gegessen.|Nomen
深い|深[ふか]い|tief|あの 池[いけ]はとても 深[ふか]い。|Der Teich dort ist sehr tief.|Adjektiv
深さ|深[ふか]さ|Tiefe|このプールの 深[ふか]さは 2[に]メートルです。|Dieses Becken ist zwei Meter tief.|Nomen
浅い|浅[あさ]い|flach, seicht; oberflächlich|この 川[かわ]は 浅[あさ]いです。|Dieser Fluss ist flach.|Adjektiv
落とす|落[お]とす|fallen lassen, verlieren|途中[とちゅう]で 財布[さいふ]を 落[お]としました。|Ich habe unterwegs mein Portemonnaie verloren.|Verb
ごみ|ごみ|Müll, Abfall|今日[きょう]はごみの 日[ひ]だ。|Heute ist Müllabfuhr.|Nomen
泳ぐ|泳[およ]ぐ|schwimmen|彼女[かのじょ]はダイエットのために 泳[およ]いでいる。|Sie schwimmt, um abzunehmen.|Verb
水泳|水泳[すいえい]|Schwimmen|母[はは]は 健康[けんこう]のために 水泳[すいえい]をしている。|Meine Mutter schwimmt für ihre Gesundheit.|Nomen (mit する)
流れる|流[なが]れる|fließen, strömen; laufen (Musik)|ラジオから 美[うつく]しい 音楽[おんがく]が 流[なが]れています。|Aus dem Radio erklingt schöne Musik.|Verb
流行る|流行[はや]る|in Mode sein, beliebt sein|去年[きょねん]はスニーカーが 流行[はや]りました。|Letztes Jahr waren Turnschuhe in Mode.|Verb
スーパーマーケット|スーパーマーケット|Supermarkt|スーパーマーケットで 人参[にんじん]を 買[か]った。|Ich habe im Supermarkt Karotten gekauft.|Nomen
洗う|洗[あら]う|waschen|早[はや]く 顔[かお]を 洗[あら]いなさい。|Wasch dir schnell das Gesicht.|Verb
洗面所|洗面所[せんめんじょ]|Waschraum, Bad|洗面所[せんめんじょ]で 顔[かお]を 洗[あら]った。|Ich habe mir im Bad das Gesicht gewaschen.|Nomen
油|油[あぶら]|Öl|水[みず]と 油[あぶら]は 混[ま]ざらない。|Wasser und Öl vermischen sich nicht.|Nomen
沈む|沈[しず]む|sinken, untergehen|ボートが 川[かわ]に 沈[しず]んだ。|Das Boot ist im Fluss gesunken.|Verb
ハンカチ|ハンカチ|Taschentuch|ハンカチで 手[て]をふきました。|Ich habe mir die Hände mit dem Taschentuch abgewischt.|Nomen
久しぶり|久[ひさ]しぶり|nach langer Zeit, lange nicht|明日[あした]、 久[ひさ]しぶりに 友達[ともだち]に 会[あ]います。|Morgen treffe ich nach langer Zeit wieder einen Freund.|な-Adjektiv
氷|氷[こおり]|Eis|グラスに 氷[こおり]を 入[い]れてください。|Geben Sie bitte Eis ins Glas.|Nomen
冷える|冷[ひ]える|kalt werden, abkühlen|クーラーで 体[からだ]が 冷[ひ]えた。|Durch die Klimaanlage bin ich ausgekühlt.|Verb
冷やす|冷[ひ]やす|kühlen, abkühlen (etwas)|頭[あたま]を 冷[ひ]やしなさい。|Kühl dich erst einmal ab.|Verb
ビデオテープ|ビデオテープ|Videokassette|私[わたし]はビデオテープを 30本持[さんじゅっぽん も]っています。|Ich habe 30 Videokassetten.|Nomen
冷める|冷[さ]める|abkühlen, erkalten|彼[かれ]への 気持[きも]ちが 冷[さ]めた。|Meine Gefühle für ihn sind erkaltet.|Verb
凍る|凍[こお]る|gefrieren|寒[さむ]い 朝[あさ]は 道路[どうろ]が 凍[こお]ります。|An kalten Morgen friert die Straße zu.|Verb
冷蔵庫|冷蔵庫[れいぞうこ]|Kühlschrank|飲[の]み 物[もの]は 冷蔵庫[れいぞうこ]にあります。|Getränke sind im Kühlschrank.|Nomen
涼しい|涼[すず]しい|kühl, erfrischend|夕方[ゆうがた]は 涼[すず]しくなりますよ。|Am Abend wird es kühl.|Adjektiv
ぶらぶら|ぶらぶら|umherschlendern, herumhängen|朝[あさ]、 近所[きんじょ]をぶらぶらした。|Am Morgen bin ich durch die Nachbarschaft geschlendert.|Adverb
汚す|汚[よご]す|schmutzig machen|彼[かれ]は 服[ふく]を 汚[よご]した。|Er hat seine Kleidung schmutzig gemacht.|Verb
汚れ|汚[よご]れ|Schmutz, Fleck|靴[くつ]の 汚[よご]れを 落[お]としました。|Ich habe den Schmutz von den Schuhen entfernt.|Nomen
汚れる|汚[よご]れる|schmutzig werden|エプロンをしないと 服[ふく]が 汚[よご]れます。|Ohne Schürze wird deine Kleidung schmutzig.|Verb
景色|景色[けしき]|Landschaft, Aussicht|ここは 景色[けしき]がきれいですね。|Hier ist die Landschaft schön, nicht wahr?|Nomen
アナウンサー|アナウンサー|Ansager(in), Nachrichtensprecher(in)|私[わたし]はアナウンサーになりたい。|Ich möchte Nachrichtensprecherin werden.|Nomen
影響|影響[えいきょう]|Einfluss, Auswirkung|私[わたし]は 彼[かれ]から 大[おお]きな 影響[えいきょう]を 受[う]けました。|Er hat mich stark beeinflusst.|Nomen (mit する)
光る|光[ひか]る|leuchten, glänzen|波[なみ]がきらきら 光[ひか]っていました。|Die Wellen glitzerten.|Verb
太る|太[ふと]る|dick werden, zunehmen|私[わたし]の 姉[あね]はすぐ 太[ふと]ります。|Meine große Schwester nimmt schnell zu.|Verb
太陽|太陽[たいよう]|Sonne|太陽[たいよう]が 雲[くも]に 隠[かく]れた。|Die Sonne hat sich hinter den Wolken versteckt.|Nomen
スプーン|スプーン|Löffel|カレーライスはスプーンで 食[た]べます。|Curryreis isst man mit dem Löffel.|Nomen
星|星[ほし]|Stern|今夜[こんや]は 星[ほし]がよく 見[み]えます。|Heute Abend sieht man die Sterne gut.|Nomen
地球|地球[ちきゅう]|Erde (Planet)|地球[ちきゅう]は 丸[まる]い。|Die Erde ist rund.|Nomen
野球|野球[やきゅう]|Baseball|友達[ともだち]と 野球[やきゅう]をしました。|Ich habe mit Freunden Baseball gespielt.|Nomen
雲|雲[くも]|Wolke|今日[きょう]は 雲[くも]が 多[おお]い。|Heute sind viele Wolken am Himmel.|Nomen
ブラウス|ブラウス|Bluse|彼女[かのじょ]は 白[しろ]いブラウスを 着[き]ている。|Sie trägt eine weiße Bluse.|Nomen
曇り|曇[くも]り|Bewölkung, bewölkt|今日[きょう]は 一日[いちにち] 曇[くも]りでした。|Heute war es den ganzen Tag bewölkt.|Nomen
地震|地震[じしん]|Erdbeben|日本[にほん]は 地震[じしん]が 多[おお]いです。|In Japan gibt es viele Erdbeben.|Nomen
震える|震[ふる]える|zittern|彼[かれ]は 寒[さむ]くて 震[ふる]えていました。|Er zitterte vor Kälte.|Verb
振る|振[ふ]る|schwenken, schütteln, winken|犬[いぬ]がしっぽを 振[ふ]っている。|Der Hund wedelt mit dem Schwanz.|Verb
リボン|リボン|Schleife, Band|プレゼントにリボンを 付[つ]けた。|Ich habe eine Schleife um das Geschenk gebunden.|Nomen
揺れる|揺[ゆ]れる|schwanken, wackeln|風[かぜ]で 木[き]が 揺[ゆ]れています。|Die Bäume schwanken im Wind.|Verb
神社|神社[じんじゃ]|Shintō-Schrein|京都[きょうと]には 神社[じんじゃ]がたくさんある。|In Kyoto gibt es viele Schreine.|Nomen
秘密|秘密[ひみつ]|Geheimnis|これは 秘密[ひみつ]です。|Das ist ein Geheimnis.|な-Adjektiv
厳しい|厳[きび]しい|streng, hart|私[わたし]の 上司[じょうし]はとても 厳[きび]しい。|Mein Chef ist sehr streng.|Adjektiv
いかが|いかが|wie (höflich)|お 加減[かげん]はいかがですか。|Wie geht es Ihnen gesundheitlich?|Adverb
年寄り|年寄[としよ]り|alter Mensch|あの 村[むら]にはお 年寄[としよ]りがたくさん 住[す]んでいます。|In dem Dorf dort wohnen viele alte Leute.|Nomen
歴史|歴史[れきし]|Geschichte (Historie)|私[わたし]は 歴史[れきし]に 興味[きょうみ]があります。|Ich interessiere mich für Geschichte.|Nomen
世紀|世紀[せいき]|Jahrhundert|新[あたら]しい 世紀[せいき]の 始[はじ]まりです。|Es ist der Beginn eines neuen Jahrhunderts.|Nomen
建設|建設[けんせつ]|Bau, Errichtung|新[あたら]しいビルの 建設[けんせつ]が 始[はじ]まった。|Der Bau des neuen Gebäudes hat begonnen.|Nomen (mit する)
ステレオ|ステレオ|Stereoanlage|彼[かれ]はステレオで 音楽[おんがく]を 聞[き]いた。|Er hat über die Stereoanlage Musik gehört.|Nomen
建物|建物[たてもの]|Gebäude|これは 日本一古[にほんいち ふる]い 建物[たてもの]です。|Das ist das älteste Gebäude Japans.|Nomen
建つ|建[た]つ|gebaut werden, stehen (Gebäude)|ここに 来年[らいねん]、 家[いえ]が 建[た]ちます。|Hier wird nächstes Jahr ein Haus gebaut.|Verb
構成|構成[こうせい]|Aufbau, Zusammensetzung|システムの 構成[こうせい]を 変[か]えてみました。|Ich habe versuchsweise den Aufbau des Systems geändert.|Nomen (mit する)
構造|構造[こうぞう]|Struktur, Bauweise|この 建物[たてもの]の 構造[こうぞう]は 複雑[ふくざつ]です。|Die Struktur dieses Gebäudes ist kompliziert.|Nomen
フォーク|フォーク|Gabel|フォークをもらえますか。|Könnte ich eine Gabel bekommen?|Nomen
橋|橋[はし]|Brücke|あの 橋[はし]は 日本[にほん]で 一番長[いちばん なが]い。|Die Brücke dort ist die längste Japans.|Nomen
柱|柱[はしら]|Säule, Pfosten|この 家[いえ]の 柱[はしら]は 太[ふと]い。|Die Pfosten dieses Hauses sind dick.|Nomen
位置|位置[いち]|Lage, Position|私[わたし]の 町[まち]は 東京[とうきょう]の 北[きた]に 位置[いち]します。|Meine Stadt liegt nördlich von Tokio.|Nomen (mit する)
離婚|離婚[りこん]|Scheidung|友人[ゆうじん]が 離婚[りこん]しました。|Ein Freund von mir hat sich scheiden lassen.|Nomen (mit する)
おば|おば|Tante|おばは 大阪[おおさか]に 住[す]んでいます。|Meine Tante wohnt in Osaka.|Nomen
停車|停車[ていしゃ]|Halt (eines Fahrzeugs)|この 電車[でんしゃ]は 東京[とうきょう]まで 停車[ていしゃ] 致[いた]しません。|Dieser Zug hält bis Tokio nicht.|Nomen (mit する)
バス停|バス 停[てい]|Bushaltestelle|次[つぎ]のバス 停[てい]で 降[お]ります。|Ich steige an der nächsten Bushaltestelle aus.|Nomen
周辺|周辺[しゅうへん]|Umgebung, Umkreis|この 周辺[しゅうへん]には 大学[だいがく]が 多[おお]い。|In dieser Gegend gibt es viele Universitäten.|Nomen
隣|隣[となり]|nebenan, Nachbar|隣[となり]の 家[いえ]には 犬[いぬ]がいます。|Im Haus nebenan gibt es einen Hund.|Nomen
きらきら|きらきら|glitzernd, funkelnd|星[ほし]がきらきら 光[ひか]っている。|Die Sterne funkeln.|Adverb
黄色|黄色[きいろ]|Gelb|信号[しんごう]は 黄色[きいろ]でした。|Die Ampel war gelb.|Nomen
横|横[よこ]|Seite, quer; Breite|横[よこ]の 長[なが]さは 1[いち]メートルです。|Die Breite beträgt einen Meter.|Nomen
横書き|横書[よこが]き|waagerechte Schreibweise|この 本[ほん]は 横書[よこが]きです。|Dieses Buch ist waagerecht gesetzt.|Nomen
判断|判断[はんだん]|Urteil, Beurteilung|彼[かれ]の 判断[はんだん]は 正[ただ]しい。|Sein Urteil ist richtig.|Nomen (mit する)
どうぞ|どうぞ|bitte (anbietend)|こちらへどうぞ。|Hier entlang, bitte.|Adverb
断る|断[ことわ]る|ablehnen, absagen|私[わたし]は 彼[かれ]のプロポーズを 断[ことわ]った。|Ich habe seinen Heiratsantrag abgelehnt.|Verb
横断歩道|横断歩道[おうだんほどう]|Zebrastreifen, Fußgängerüberweg|あそこに 横断歩道[おうだんほどう]があります。|Dort drüben ist ein Zebrastreifen.|Nomen
大幅|大幅[おおはば]|erheblich, drastisch|計画[けいかく]を 大幅[おおはば]に 変更[へんこう]した。|Wir haben den Plan erheblich geändert.|Adverb
訪れる|訪[おとず]れる|besuchen, aufsuchen|私[わたし]は 夏[なつ]に 京都[きょうと]を 訪[おとず]れました。|Ich habe im Sommer Kyoto besucht.|Verb
ネックレス|ネックレス|Halskette|妻[つま]にネックレスをプレゼントしました。|Ich habe meiner Frau eine Halskette geschenkt.|Nomen
訪ねる|訪[たず]ねる|besuchen, aufsuchen|彼[かれ]はニューヨークの 友達[ともだち]を 訪[たず]ねた。|Er hat einen Freund in New York besucht.|Verb
冷房|冷房[れいぼう]|Klimaanlage, Kühlung|冷房[れいぼう]を 入[い]れてください。|Schalten Sie bitte die Klimaanlage ein.|Nomen (mit する)
暖房|暖房[だんぼう]|Heizung|冬[ふゆ]は 暖房[だんぼう]が 必要[ひつよう]です。|Im Winter braucht man eine Heizung.|Nomen (mit する)
文房具|文房具[ぶんぼうぐ]|Schreibwaren|新[あたら]しい 文房具[ぶんぼうぐ]を 買[か]いました。|Ich habe neue Schreibwaren gekauft.|Nomen
パジャマ|パジャマ|Schlafanzug|このパジャマを 着[き]て。|Zieh diesen Schlafanzug an.|Nomen
諸国|諸国[しょこく]|verschiedene Länder|彼[かれ]はヨーロッパ 諸国[しょこく]を 旅行[りょこう]した。|Er hat verschiedene Länder Europas bereist.|Nomen
緑色|緑色[みどりいろ]|Grün (Farbe)|彼[かれ]は 緑色[みどりいろ]のジャケットを 着[き]ています。|Er trägt eine grüne Jacke.|Nomen
貿易|貿易[ぼうえき]|Außenhandel|父[ちち]は 貿易[ぼうえき]の 仕事[しごと]をしています。|Mein Vater arbeitet im Außenhandel.|Nomen (mit する)
輸入|輸入[ゆにゅう]|Import, Einfuhr|これはイタリアから 輸入[ゆにゅう]した 服[ふく]です。|Das ist Kleidung, die aus Italien importiert wurde.|Nomen (mit する)
ボールペン|ボールペン|Kugelschreiber|ボールペンで 名前[なまえ]を 書[か]いてください。|Schreiben Sie Ihren Namen bitte mit Kugelschreiber.|Nomen
輸出|輸出[ゆしゅつ]|Export, Ausfuhr|彼[かれ]の 会社[かいしゃ]は 車[くるま]を 輸出[ゆしゅつ]しています。|Seine Firma exportiert Autos.|Nomen (mit する)
指輪|指輪[ゆびわ]|Ring (Schmuck)|彼女[かのじょ]に 指輪[ゆびわ]をプレゼントしました。|Ich habe ihr einen Ring geschenkt.|Nomen
往復|往復[おうふく]|Hin- und Rückweg|往復[おうふく] 切符[きっぷ]をください。|Eine Hin- und Rückfahrkarte, bitte.|Nomen
復習|復習[ふくしゅう]|Wiederholung (des Lernstoffs)|昨日[きのう]の 復習[ふくしゅう]をしましたか。|Hast du den Stoff von gestern wiederholt?|Nomen (mit する)
すいか|すいか|Wassermelone|夏[なつ]はすいかが 美味[おい]しい。|Im Sommer schmeckt Wassermelone gut.|Nomen
繰り返す|繰[く]り 返[かえ]す|wiederholen|彼女[かのじょ]は 同[おな]じ 間違[まちが]いを 繰[く]り 返[かえ]した。|Sie hat denselben Fehler wiederholt.|Verb
留学|留学[りゅうがく]|Auslandsstudium|1年間[いちねんかん]、アメリカに 留学[りゅうがく]しました。|Ich habe ein Jahr in Amerika studiert.|Nomen (mit する)
停留所|停留所[ていりゅうじょ]|Haltestelle|バスの 停留所[ていりゅうじょ]で 10分待[じゅっぷん ま]ちました。|Ich habe zehn Minuten an der Bushaltestelle gewartet.|Nomen
書留|書留[かきとめ]|Einschreiben|これを 書留[かきとめ]で 送[おく]りたいのですが。|Ich möchte das per Einschreiben schicken.|Nomen
そちら|そちら|dort, dorthin (bei Ihnen)|夕方[ゆうがた]そちらに 着[つ]きます。|Ich komme am frühen Abend bei Ihnen an.|Nomen
守る|守[まも]る|schützen; einhalten|彼[かれ]は 約束[やくそく]を 守[まも]る 人[ひと]です。|Er ist jemand, der seine Versprechen hält.|Verb
留守|留守[るす]|nicht zu Hause, abwesend|父[ちち]は 今[いま]、 留守[るす]です。|Mein Vater ist gerade nicht zu Hause.|Nomen
住宅|住宅[じゅうたく]|Wohnhaus, Wohnung|ここは 静[しず]かな 住宅[じゅうたく] 地[ち]だ。|Das hier ist ein ruhiges Wohngebiet.|Nomen
自宅|自宅[じたく]|das eigene Zuhause|自宅[じたく]に 電話[でんわ]を 下[くだ]さい。|Rufen Sie mich bitte zu Hause an.|Nomen
そば|そば|Soba (Buchweizennudeln)|お 昼[ひる]にそばを 食[た]べた。|Zu Mittag habe ich Soba gegessen.|Nomen
お宅|お 宅[たく]|Ihr Zuhause (höflich); Sie|先生[せんせい]のお 宅[たく]はどちらですか。|Wo wohnt der Lehrer?|Nomen
早起き|早起[はやお]き|frühes Aufstehen|祖父[そふ]は 早起[はやお]きです。|Mein Großvater ist Frühaufsteher.|Nomen (mit する)
昼寝|昼寝[ひるね]|Mittagsschlaf|私[わたし]の 子供[こども]は 毎日[まいにち] 昼寝[ひるね]をします。|Mein Kind macht jeden Tag Mittagsschlaf.|Nomen (mit する)
静か|静[しず]か|ruhig, still|今年[ことし]の 夏休[なつやす]みには 静[しず]かな 所[ところ]へ 行[い]きたい。|In den Sommerferien möchte ich dieses Jahr an einen ruhigen Ort fahren.|な-Adjektiv
どっち|どっち|welche(r, s) (von zweien, umgangssprachlich)|どっちの 色[いろ]が 好[す]きですか。|Welche Farbe magst du lieber?|Nomen
暇|暇[ひま]|freie Zeit; frei haben|明日[あした]は 暇[ひま]ですか。|Hast du morgen Zeit?|Nomen
趣味|趣味[しゅみ]|Hobby|私[わたし]の 趣味[しゅみ]は 映画[えいが]とテニスです。|Meine Hobbys sind Filme und Tennis.|Nomen
両方|両方[りょうほう]|beide|チョコレートとケーキを 両方[りょうほう]ください。|Ich nehme beides, die Schokolade und den Kuchen.|Nomen
両替|両替[りょうがえ]|Geldwechsel|1万円[いちまんえん]を 両替[りょうがえ]してください。|Wechseln Sie mir bitte 10.000 Yen.|Nomen (mit する)
バスケットボール|バスケットボール|Basketball|姉[あね]はバスケットボールの 選手[せんしゅ]です。|Meine große Schwester ist Basketballspielerin.|Nomen
両親|両親[りょうしん]|Eltern|私[わたし]の 両親[りょうしん]は 大阪[おおさか]に 住[す]んでいます。|Meine Eltern wohnen in Osaka.|Nomen
片道|片道[かたみち]|einfache Fahrt|東京[とうきょう]まで 片道[かたみち] 切符[きっぷ]を 買[か]った。|Ich habe eine einfache Fahrkarte nach Tokio gekauft.|Nomen
内側|内側[うちがわ]|Innenseite|白線[はくせん]の 内側[うちがわ]に 下[さ]がってください。|Treten Sie bitte hinter die weiße Linie zurück.|Nomen
向こう側|向[む]こう 側[がわ]|die andere Seite, gegenüber|私[わたし]の 家[いえ]は 川[かわ]の 向[む]こう 側[がわ]にあります。|Mein Haus liegt auf der anderen Seite des Flusses.|Nomen
サンドイッチ|サンドイッチ|Sandwich|今日[きょう]のお 昼[ひる]はサンドイッチです。|Heute gibt es zum Mittag Sandwiches.|Nomen
外側|外側[そとがわ]|Außenseite|白線[はくせん]の 外側[そとがわ]を 歩[ある]かないでください。|Gehen Sie bitte nicht außerhalb der weißen Linie.|Nomen
左側|左側[ひだりがわ]|linke Seite|画面[がめん]の 左側[ひだりがわ]を 見[み]てください。|Schauen Sie bitte auf die linke Seite des Bildschirms.|Nomen
右側|右側[みぎがわ]|rechte Seite|彼女[かのじょ]はいつも 私[わたし]の 右側[みぎがわ]を 歩[ある]きます。|Sie geht immer rechts von mir.|Nomen
裏|裏[うら]|Rückseite, hinten|会社[かいしゃ]の 裏[うら]に 公園[こうえん]があります。|Hinter der Firma ist ein Park.|Nomen
にこにこ|にこにこ|lächelnd, strahlend|彼女[かのじょ]はいつもにこにこしています。|Sie lächelt immer.|Adverb
裏返す|裏返[うらがえ]す|umdrehen, wenden|彼[かれ]は 紙[かみ]を 裏返[うらがえ]しました。|Er drehte das Blatt um.|Verb
週刊誌|週刊誌[しゅうかんし]|Wochenzeitschrift|その 週刊誌[しゅうかんし]はゴシップばかりだ。|Diese Wochenzeitschrift ist voller Klatsch.|Nomen
朝刊|朝刊[ちょうかん]|Morgenausgabe (Zeitung)|今日[きょう]の 朝刊[ちょうかん]に 面白[おもしろ]い 記事[きじ]があった。|In der heutigen Morgenausgabe stand ein interessanter Artikel.|Nomen
夕刊|夕刊[ゆうかん]|Abendausgabe (Zeitung)|そのニュースは 夕刊[ゆうかん]で 見[み]ました。|Diese Nachricht habe ich in der Abendausgabe gelesen.|Nomen
ウール|ウール|Wolle|このウールのセーターは 暖[あたた]かい。|Dieser Wollpullover ist warm.|Nomen
詳しい|詳[くわ]しい|ausführlich, genau; sich auskennen|もっと 詳[くわ]しく 説明[せつめい]してください。|Erklären Sie das bitte genauer.|Adjektiv
細かい|細[こま]かい|fein, klein; detailliert|彼女[かのじょ]は 細[こま]かいことにうるさい。|Sie nimmt es mit Kleinigkeiten sehr genau.|Adjektiv
細か|細[こま]か|fein, klein, detailliert|それは 細[こま]かな 問題[もんだい]です。|Das ist eine Detailfrage.|な-Adjektiv
積もる|積[つ]もる|sich anhäufen, liegen bleiben (Schnee)|雪[ゆき]が 積[つ]もっています。|Der Schnee liegt hoch.|Verb
コーラ|コーラ|Cola|私[わたし]の 兄[あに]はコーラが 好[す]きだ。|Mein großer Bruder mag Cola.|Nomen
訳|訳[やく]|Übersetzung|その 文[ぶん]の 訳[やく]を 読[よ]みました。|Ich habe die Übersetzung dieses Satzes gelesen.|Nomen
訳す|訳[やく]す|übersetzen|この 文[ぶん]を 訳[やく]してください。|Übersetzen Sie bitte diesen Satz.|Verb
検討|検討[けんとう]|Prüfung, Erwägung|今日中[きょう じゅう]にこの 問題[もんだい]を 検討[けんとう]してください。|Prüfen Sie dieses Problem bitte noch heute.|Nomen (mit する)
塗る|塗[ぬ]る|streichen, auftragen|壁[かべ]にペンキを 塗[ぬ]っています。|Ich streiche gerade die Wand.|Verb
トイレットペーパー|トイレットペーパー|Toilettenpapier|トイレットペーパーを 交換[こうかん]しました。|Ich habe das Toilettenpapier gewechselt.|Nomen
付く|付[つ]く|haften, anhaften; dabei sein|靴[くつ]に 泥[どろ]が 付[つ]いています。|An meinen Schuhen klebt Schlamm.|Verb
付ける|付[つ]ける|anbringen, befestigen, dazugeben|おまけを 付[つ]けました。|Ich habe eine kleine Zugabe dazugelegt.|Verb
受け付ける|受[う]け 付[つ]ける|annehmen, entgegennehmen|郵便物[ゆうびんぶつ]は 5時[ごじ]まで 受[う]け 付[つ]けています。|Postsendungen nehmen wir bis fünf Uhr an.|Verb
片付ける|片付[かたづ]ける|aufräumen, erledigen|早[はや]く 部屋[へや]を 片付[かたづ]けなさい。|Räum schnell dein Zimmer auf.|Verb
どなた|どなた|wer (höflich)|失礼[しつれい]ですが、どなたですか。|Entschuldigung, wer sind Sie?|Nomen
受付|受付[うけつけ]|Empfang, Anmeldung|受付[うけつけ]は 9時[くじ]からです。|Die Anmeldung ist ab neun Uhr geöffnet.|Nomen
近付く|近付[ちかづ]く|sich nähern|女性[じょせい]が 近付[ちかづ]いてきました。|Eine Frau kam auf mich zu.|Verb
片付く|片付[かたづ]く|aufgeräumt werden, erledigt werden|仕事[しごと]が 大分[だいぶ] 片付[かたづ]いた。|Ein großer Teil der Arbeit ist erledigt.|Verb
気を付ける|気[き]を 付[つ]ける|aufpassen, achtgeben|体[からだ]に 気[き]を 付[つ]けてください。|Achten Sie bitte auf Ihre Gesundheit.|Verb
ハイキング|ハイキング|Wandern|昨日[きのう]は 友人[ゆうじん]とハイキングに 行[い]きました。|Gestern war ich mit einem Freund wandern.|Nomen (mit する)
貼る|貼[は]る|kleben, aufkleben|机[つくえ]にシールを 貼[は]った。|Ich habe einen Aufkleber auf den Schreibtisch geklebt.|Verb
記念日|記念日[きねんび]|Gedenktag, Jahrestag|今日[きょう]は 両親[りょうしん]の 結婚[けっこん] 記念日[きねんび]です。|Heute ist der Hochzeitstag meiner Eltern.|Nomen
残念|残念[ざんねん]|schade, bedauerlich|その 試合[しあい]は 残念[ざんねん]な 結果[けっか]になった。|Das Spiel ging enttäuschend aus.|な-Adjektiv
例えば|例[たと]えば|zum Beispiel|例[たと]えば、このソフトで 日本語[にほんご]を 勉強[べんきょう]することができます。|Zum Beispiel kann man mit dieser Software Japanisch lernen.|Adverb
ハム|ハム|Schinken|ハムサンドをください。|Ein Schinkensandwich, bitte.|Nomen
例文|例文[れいぶん]|Beispielsatz|例文[れいぶん]を 3[みっ]つ 作[つく]ってください。|Bilden Sie bitte drei Beispielsätze.|Nomen
例|例[れい]|Beispiel|一[ひと]つ 例[れい]をあげてください。|Nennen Sie bitte ein Beispiel.|Nomen
余る|余[あま]る|übrig bleiben|夕食[ゆうしょく]の 料理[りょうり]がたくさん 余[あま]った。|Vom Abendessen ist viel übrig geblieben.|Verb
除く|除[のぞ]く|ausschließen, entfernen|部長[ぶちょう]を 除[のぞ]く 全員[ぜんいん]が 土曜日[どようび]も 働[はたら]いた。|Alle außer dem Abteilungsleiter haben auch am Samstag gearbeitet.|Verb
ボーイフレンド|ボーイフレンド|Freund (Partner)|私[わたし]のボーイフレンドはハンサムな 方[かた]でした。|Mein Freund war ein eher gut aussehender Mann.|Nomen
削る|削[けず]る|abschaben, spitzen; kürzen|彼[かれ]は 家族[かぞく]のために 仕事[しごと]の 時間[じかん]を 削[けず]った。|Er hat für seine Familie seine Arbeitszeit gekürzt.|Verb
遅刻|遅刻[ちこく]|Verspätung, Zuspätkommen|遅刻[ちこく]しないでください。|Kommen Sie bitte nicht zu spät.|Nomen (mit する)
緩い|緩[ゆる]い|locker, weit|このズボンは 緩[ゆる]いです。|Diese Hose ist zu weit.|Adjektiv
苦しい|苦[くる]しい|qualvoll, schwer, beklemmend|食[た]べ 過[す]ぎておなかが 苦[くる]しい。|Ich habe zu viel gegessen, mein Bauch drückt.|Adjektiv
アイロン|アイロン|Bügeleisen|彼女[かのじょ]はシャツにアイロンをかけた。|Sie hat das Hemd gebügelt.|Nomen
苦い|苦[にが]い|bitter|私[わたし]は 苦[にが]いコーヒーが 好[す]きです。|Ich mag bitteren Kaffee.|Adjektiv
苦手|苦手[にがて]|schwach in etwas; nicht liegen|私[わたし]は 料理[りょうり]が 苦手[にがて]です。|Kochen liegt mir nicht.|な-Adjektiv
困る|困[こま]る|in Schwierigkeiten sein, ratlos sein|ケータイをなくして 困[こま]っています。|Ich habe mein Handy verloren und stecke in der Klemme.|Verb
貧乏|貧乏[びんぼう]|Armut, arm|彼[かれ]は 昔[むかし]は 貧乏[びんぼう]だった。|Früher war er arm.|な-Adjektiv
カレーライス|カレーライス|Curryreis|子供[こども]はカレーライスが 好[す]きです。|Kinder mögen Curryreis.|Nomen
不幸|不幸[ふこう]|Unglück; Trauerfall|彼女[かのじょ]の 家族[かぞく]に 不幸[ふこう]があった。|In ihrer Familie gab es einen Trauerfall.|な-Adjektiv
幸せ|幸[しあわ]せ|Glück, glücklich|良[い]い 友達[ともだち]がいて 私[わたし]は 幸[しあわ]せだ。|Ich bin glücklich, gute Freunde zu haben.|な-Adjektiv
塩|塩[しお]|Salz|もうちょっと 塩[しお]を 入[い]れて。|Gib noch etwas Salz dazu.|Nomen
塩辛い|塩辛[しおから]い|salzig|海[うみ]の 水[みず]は 塩辛[しおから]い。|Meerwasser ist salzig.|Adjektiv
キャッシュカード|キャッシュカード|Geldkarte, Bankkarte|キャッシュカードでお 金[かね]を 下[お]ろした。|Ich habe mit der Bankkarte Geld abgehoben.|Nomen
砂糖|砂糖[さとう]|Zucker|コーヒーに 砂糖[さとう]は 入[い]れますか。|Nimmst du Zucker in den Kaffee?|Nomen
規模|規模[きぼ]|Größe, Umfang, Maßstab|この 動物園[どうぶつえん]は 日本一[にっぽんいち]の 規模[きぼ]です。|Dieser Zoo ist der größte Japans.|Nomen
農業|農業[のうぎょう]|Landwirtschaft|私[わたし]は 農業[のうぎょう]を 勉強[べんきょう]しています。|Ich studiere Landwirtschaft.|Nomen
濃い|濃[こ]い|kräftig, dick, dunkel (Farbe, Geschmack)|私[わたし]は 濃[こ]い 味[あじ]が 好[す]きだ。|Ich mag kräftigen Geschmack.|Adjektiv
イヤリング|イヤリング|Ohrringe|彼女[かのじょ]はすてきなイヤリングをしている。|Sie trägt hübsche Ohrringe.|Nomen
薄い|薄[うす]い|dünn; schwach, hell (Farbe, Geschmack)|この 電子辞書[でんし じしょ]はとても 薄[うす]い。|Dieses elektronische Wörterbuch ist sehr dünn.|Adjektiv
厚い|厚[あつ]い|dick (flache Dinge)|その 辞書[じしょ]はとても 厚[あつ]い。|Dieses Wörterbuch ist sehr dick.|Adjektiv
厚さ|厚[あつ]さ|Dicke|私[わたし]は 板[いた]の 厚[あつ]さを 測[はか]った。|Ich habe die Dicke des Bretts gemessen.|Nomen
迫る|迫[せま]る|drängen; näher rücken|締[し]め 切[き]りが 迫[せま]っています。|Der Abgabetermin rückt näher.|Verb
ガールフレンド|ガールフレンド|Freundin (Partnerin)|昔[むかし]は 彼女[かのじょ]のことをガールフレンドと 言[い]っていました。|Früher nannte man seine Freundin „Girlfriend“.|Nomen
伸びる|伸[の]びる|wachsen, länger werden, sich dehnen|髪[かみ]がだいぶ 伸[の]びたね。|Deine Haare sind ganz schön gewachsen.|Verb
引っ越す|引[ひ]っ 越[こ]す|umziehen|来月[らいげつ]、 大阪[おおさか]に 引[ひ]っ 越[こ]します。|Nächsten Monat ziehe ich nach Osaka.|Verb
越える|越[こ]える|überqueren, überschreiten|私[わたし]たちは 高[たか]い 山[やま]を 越[こ]えました。|Wir haben einen hohen Berg überquert.|Verb
引っ越し|引[ひ]っ 越[こ]し|Umzug|去年[きょねん]、 引[ひ]っ 越[こ]ししました。|Letztes Jahr bin ich umgezogen.|Nomen (mit する)
カセットテープ|カセットテープ|Kassette|昔[むかし]はカセットテープを 使[つか]っていました。|Früher habe ich Kassetten benutzt.|Nomen
追い越す|追[お]い 越[こ]す|überholen|大[おお]きなトラックが 私[わたし]たちを 追[お]い 越[こ]した。|Ein großer Lastwagen hat uns überholt.|Verb
上昇|上昇[じょうしょう]|Anstieg|地球[ちきゅう]の 気温[きおん]は 上昇[じょうしょう]している。|Die Temperatur der Erde steigt.|Nomen (mit する)
改札口|改札口[かいさつぐち]|Fahrkartensperre|改札口[かいさつぐち]で 会[あ]いましょう。|Treffen wir uns an der Fahrkartensperre.|Nomen
失礼|失礼[しつれい]|Unhöflichkeit; Entschuldigung; sich verabschieden|ではそろそろ 失礼[しつれい]します。|Dann verabschiede ich mich langsam.|Nomen (mit する)
かゆい|かゆい|juckend|背中[せなか]がかゆいです。|Mein Rücken juckt.|Adjektiv
お礼|お 礼[れい]|Dank, Dankeschön|彼女[かのじょ]にお 礼[れい]の 手紙[てがみ]を 書[か]きました。|Ich habe ihr einen Dankesbrief geschrieben.|Nomen (mit する)
謝る|謝[あやま]る|sich entschuldigen|彼[かれ]は 直[す]ぐに 謝[あやま]りました。|Er hat sich sofort entschuldigt.|Verb
注射|注射[ちゅうしゃ]|Spritze, Injektion|彼[かれ]は 注射[ちゅうしゃ]があまり 好[す]きではありません。|Er mag Spritzen nicht besonders.|Nomen (mit する)
程度|程度[ていど]|Grad, Ausmaß|この 程度[ていど]の 怪我[けが]なら 大丈夫[だいじょうぶ]です。|Bei einer Verletzung dieses Ausmaßes ist alles in Ordnung.|Nomen
ぐらぐら|ぐらぐら|wackelnd, schwankend|地震[じしん]で 家[いえ]がぐらぐらと 揺[ゆ]れた。|Bei dem Erdbeben hat das Haus gewackelt.|Adverb
誘う|誘[さそ]う|einladen, auffordern|彼女[かのじょ]をデートに 誘[さそ]った。|Ich habe sie zu einem Date eingeladen.|Verb
導入|導入[どうにゅう]|Einführung|会社[かいしゃ]で 新[あたら]しいシステムを 導入[どうにゅう]した。|In der Firma wurde ein neues System eingeführt.|Nomen (mit する)
努力|努力[どりょく]|Anstrengung, Bemühung|もっと 努力[どりょく]しよう。|Strengen wir uns mehr an.|Nomen (mit する)
怒る|怒[おこ]る|wütend werden; schimpfen|彼女[かのじょ]が 嘘[うそ]をついたので、 彼[かれ]は 怒[おこ]った。|Er wurde wütend, weil sie gelogen hatte.|Verb
ジャム|ジャム|Marmelade|このイチゴでジャムを 作[つく]りましょう。|Machen wir aus diesen Erdbeeren Marmelade.|Nomen
独身|独身[どくしん]|ledig, alleinstehend|私[わたし]の 兄[あに]はまだ 独身[どくしん]です。|Mein großer Bruder ist noch ledig.|Nomen
占める|占[し]める|einnehmen, ausmachen|私[わたし]に 届[とど]くメールのうち、 迷惑[めいわく]メールが 7割[ななわり]を 占[し]めている。|Von den E-Mails, die ich bekomme, sind 70 Prozent Spam.|Verb
処理|処理[しょり]|Bearbeitung, Erledigung|事務的[じむてき]な 処理[しょり]に 1週間[いっしゅうかん]かかります。|Die verwaltungsmäßige Bearbeitung dauert eine Woche.|Nomen (mit する)
紹介|紹介[しょうかい]|Vorstellung, Empfehlung|両親[りょうしん]に 彼女[かのじょ]を 紹介[しょうかい]した。|Ich habe meinen Eltern meine Freundin vorgestellt.|Nomen (mit する)
スリッパ|スリッパ|Hausschuhe|スリッパをはいてください。|Ziehen Sie bitte Hausschuhe an.|Nomen
招く|招[まね]く|einladen, herbeiwinken|両親[りょうしん]を 食事[しょくじ]に 招[まね]いた。|Ich habe meine Eltern zum Essen eingeladen.|Verb
招待|招待[しょうたい]|Einladung|高校[こうこう]の 時[とき]の 先生[せんせい]を 結婚式[けっこんしき]に 招待[しょうたい]した。|Ich habe meinen Lehrer aus der Oberschule zur Hochzeit eingeladen.|Nomen (mit する)
夫婦|夫婦[ふうふ]|Ehepaar|その 夫婦[ふうふ]はとても 仲[なか]がいい。|Das Ehepaar versteht sich sehr gut.|Nomen
奥|奥[おく]|das Innere, hinten|はさみは 机[つくえ]の 奥[おく]にあった。|Die Schere lag ganz hinten im Schreibtisch.|Nomen
トランプ|トランプ|Spielkarten|友達[ともだち]とトランプをして 遊[あそ]びました。|Ich habe mit Freunden Karten gespielt.|Nomen (mit する)
奥さん|奥[おく]さん|(Ihre) Ehefrau, verheiratete Frau|彼[かれ]の 奥[おく]さんはきれいな 方[かた]です。|Seine Frau ist eine schöne Frau.|Nomen
皆さん|皆[みな]さん|Sie alle, alle Anwesenden|皆[みな]さんにお 話[はなし]があります。|Ich habe Ihnen allen etwas zu sagen.|Nomen
皆様|皆様[みなさま]|Sie alle (sehr höflich)|皆様[みなさま]、こんにちは。|Guten Tag allerseits.|Nomen
誰か|誰[だれ]か|jemand|誰[だれ]かに 聞[き]いてみてください。|Fragen Sie bitte jemanden.|Nomen
よろしい|よろしい|gut, in Ordnung (höflich)|レポートはこれでよろしいですか。|Ist der Bericht so in Ordnung?|Adjektiv
国籍|国籍[こくせき]|Staatsangehörigkeit|私[わたし]は 日本[にほん] 国籍[こくせき]です。|Ich habe die japanische Staatsangehörigkeit.|Nomen
愛|愛[あい]|Liebe|彼女[かのじょ]は 愛[あい]をこめて 手紙[てがみ]を 書[か]いた。|Sie hat den Brief voller Liebe geschrieben.|Nomen (mit する)
可愛い|可愛[かわい]い|süß, niedlich|彼女[かのじょ]の 赤[あか]ちゃんは 可愛[かわい]いです。|Ihr Baby ist niedlich.|Adjektiv
恋人|恋人[こいびと]|Freund(in), Geliebte(r)|彼[かれ]は 恋人[こいびと]を 失[うしな]った。|Er hat seine Freundin verloren.|Nomen
ラッシュアワー|ラッシュアワー|Hauptverkehrszeit|私[わたし]はラッシュアワーの 電車[でんしゃ]が 嫌[きら]いです。|Ich hasse die Züge zur Hauptverkehrszeit.|Nomen
誕生日|誕生日[たんじょうび]|Geburtstag|彼女[かのじょ]の 誕生日[たんじょうび]は 7月16日[しちがつ じゅうろくにち]です。|Sie hat am 16. Juli Geburtstag.|Nomen
祝日|祝日[しゅくじつ]|Feiertag|5月3日[ごがつ みっか]は 祝日[しゅくじつ]だ。|Der 3. Mai ist ein Feiertag.|Nomen
お祝い|お 祝[いわ]い|Feier, Glückwunsch|彼[かれ]の 就職[しゅうしょく]のお 祝[いわ]いをしよう。|Feiern wir, dass er eine Stelle gefunden hat.|Nomen (mit する)
夢|夢[ゆめ]|Traum|昨夜[ゆうべ] 恐[おそ]ろしい 夢[ゆめ]を 見[み]た。|Letzte Nacht hatte ich einen schrecklichen Traum.|Nomen
カップ|カップ|Tasse, Messbecher|水[みず]を 1[いち]カップ 入[い]れてください。|Geben Sie bitte eine Tasse Wasser dazu.|Nomen
泣く|泣[な]く|weinen|妹[いもうと]はすぐに 泣[な]く。|Meine kleine Schwester weint schnell.|Verb
涙|涙[なみだ]|Träne|彼女[かのじょ]の 目[め]から 涙[なみだ]がこぼれた。|Aus ihren Augen flossen Tränen.|Nomen
喜ぶ|喜[よろこ]ぶ|sich freuen|彼女[かのじょ]はとても 喜[よろこ]びました。|Sie hat sich sehr gefreut.|Verb
恥ずかしい|恥[は]ずかしい|peinlich, verlegen|とても 恥[は]ずかしかった。|Das war mir sehr peinlich.|Adjektiv
スケート|スケート|Schlittschuhlaufen|湖[みずうみ]でスケートをした。|Wir sind auf dem See Schlittschuh gelaufen.|Nomen
弁当|弁当[べんとう]|Lunchbox, Bentō|今日[きょう]は 弁当[べんとう]を 持[も]ってきました。|Heute habe ich ein Bentō mitgebracht.|Nomen
看護婦|看護婦[かんごふ]|Krankenschwester|母[はは]は 看護婦[かんごふ]です。|Meine Mutter ist Krankenschwester.|Nomen
患者|患者[かんじゃ]|Patient(in)|患者[かんじゃ]は 眠[ねむ]っています。|Der Patient schläft.|Nomen
述べる|述[の]べる|äußern, darlegen|上司[じょうし]が 意見[いけん]を 述[の]べた。|Der Vorgesetzte hat seine Meinung geäußert.|Verb
たくさん|たくさん|viel, viele|昨日[きのう]はたくさん 泳[およ]ぎました。|Gestern bin ich viel geschwommen.|Adverb
訴える|訴[うった]える|verklagen; appellieren, klagen über|彼女[かのじょ]は 会社[かいしゃ]を 訴[うった]えた。|Sie hat die Firma verklagt.|Verb
迷う|迷[まよ]う|sich verirren; unschlüssig sein|道[みち]に 迷[まよ]いました。|Ich habe mich verlaufen.|Verb
迷惑|迷惑[めいわく]|Belästigung, Unannehmlichkeit|人[ひと]に 迷惑[めいわく]をかけてはいけません。|Man darf anderen keine Umstände machen.|Nomen (mit する)
地域|地域[ちいき]|Region, Gebiet|この 地域[ちいき]は 雨[あめ]が 多[おお]い。|In dieser Region regnet es viel.|Nomen
ピクニック|ピクニック|Picknick|今日[きょう]はピクニックに 行[い]きましょう。|Machen wir heute ein Picknick.|Nomen
政権|政権[せいけん]|Regierungsmacht, Regierung|政権[せいけん]が 交代[こうたい]した。|Es gab einen Regierungswechsel.|Nomen
贈る|贈[おく]る|schenken|母[はは]に 花[はな]を 贈[おく]った。|Ich habe meiner Mutter Blumen geschenkt.|Verb
贈り物|贈[おく]り 物[もの]|Geschenk|すてきな 贈[おく]り 物[もの]をどうもありがとう。|Vielen Dank für das wunderbare Geschenk.|Nomen
与える|与[あた]える|geben, verleihen, zufügen|そのニュースは 彼[かれ]に 大[おお]きなショックを 与[あた]えた。|Die Nachricht war ein großer Schock für ihn.|Verb
あちら|あちら|dort drüben, dorthin (höflich)|あちらに 行[い]ってみよう。|Lass uns mal dort hinübergehen.|Nomen
貯金|貯金[ちょきん]|Ersparnisse, Sparen|貯金[ちょきん]は 十分[じゅうぶん]にあります。|Ich habe genug Erspartes.|Nomen (mit する)
預ける|預[あず]ける|anvertrauen, in Verwahrung geben|鍵[かぎ]を 彼[かれ]に 預[あず]けた。|Ich habe ihm den Schlüssel anvertraut.|Verb
預かる|預[あず]かる|in Verwahrung nehmen, aufbewahren|荷物[にもつ]を 預[あず]かってください。|Bewahren Sie bitte das Gepäck auf.|Verb
得意|得意[とくい]|Stärke, gut können|彼[かれ]は 歌[うた]が 得意[とくい]です。|Er kann gut singen.|な-Adjektiv
どきどき|どきどき|Herzklopfen haben, aufgeregt sein|彼女[かのじょ]に 会[あ]うとどきどきします。|Wenn ich sie treffe, bekomme ich Herzklopfen.|Adverb
燃える|燃[も]える|brennen|山[やま]が 燃[も]えています。|Der Berg brennt.|Verb
焼ける|焼[や]ける|gebraten werden, verbrennen|肉[にく]が 焼[や]けました。|Das Fleisch ist durch.|Verb
すき焼き|すき 焼[や]き|Sukiyaki (Rindfleischeintopf)|昨日[きのう]の 夜[よる]はすき 焼[や]きを 食[た]べた。|Gestern Abend habe ich Sukiyaki gegessen.|Nomen
焼く|焼[や]く|braten, grillen, backen; verbrennen|今[いま]、 魚[さかな]を 焼[や]いています。|Ich brate gerade Fisch.|Verb
まあまあ|まあまあ|ganz ordentlich, so lala|彼[かれ]の 成績[せいせき]はまあまあです。|Seine Noten sind ganz ordentlich.|Adjektiv
乾く|乾[かわ]く|trocknen, trocken werden|夏[なつ]は 洗濯物[せんたくもの]がすぐ 乾[かわ]く。|Im Sommer trocknet die Wäsche schnell.|Verb
乾杯|乾杯[かんぱい]|Prost; Anstoßen|お 二人[ふたり]の 未来[みらい]に 乾杯[かんぱい]しましょう。|Stoßen wir auf die Zukunft der beiden an.|Nomen (mit する)
乾かす|乾[かわ]かす|trocknen (etwas)|ぬれた 服[ふく]を 乾[かわ]かした。|Ich habe die nasse Kleidung getrocknet.|Verb
新幹線|新幹線[しんかんせん]|Shinkansen (Hochgeschwindigkeitszug)|新幹線[しんかんせん]で 京都[きょうと]に 行[い]きました。|Ich bin mit dem Shinkansen nach Kyoto gefahren.|Nomen
マフラー|マフラー|Schal|彼女[かのじょ]は 首[くび]にマフラーをまいていた。|Sie hatte einen Schal um den Hals gewickelt.|Nomen
素晴らしい|素晴[すば]らしい|wunderbar, großartig|素晴[すば]らしい 景色[けしき]ですね。|Eine wunderbare Landschaft, nicht wahr?|Adjektiv
海岸|海岸[かいがん]|Küste, Strand|海岸[かいがん]を 散歩[さんぽ]しましょう。|Gehen wir an der Küste spazieren.|Nomen
家庭|家庭[かてい]|Familie, Zuhause|彼[かれ]は 家庭[かてい]を 大切[たいせつ]にしている。|Ihm ist seine Familie wichtig.|Nomen
庭|庭[にわ]|Garten|庭[にわ]にバラを 植[う]えました。|Ich habe im Garten Rosen gepflanzt.|Nomen
アクセサリー|アクセサリー|Schmuck, Accessoires|このアクセサリーは 素敵[すてき]ね。|Dieser Schmuck ist hübsch.|Nomen
桜|桜[さくら]|Kirschbaum, Kirschblüte|桜[さくら]は 三月[さんがつ]か 四月[しがつ]に 咲[さ]きます。|Die Kirschen blühen im März oder April.|Nomen
咲く|咲[さ]く|blühen|桜[さくら]の 花[はな]が 咲[さ]きました。|Die Kirschblüten sind aufgegangen.|Verb
吹く|吹[ふ]く|wehen, blasen; (Blasinstrument) spielen|今日[きょう]は 北風[きたかぜ]が 吹[ふ]いている。|Heute weht Nordwind.|Verb
散歩|散歩[さんぽ]|Spaziergang|私[わたし]のお 祖父[じい]さんは 毎日[まいにち] 散歩[さんぽ]します。|Mein Großvater geht jeden Tag spazieren.|Nomen (mit する)
あくび|あくび|Gähnen|父[ちち]があくびをした。|Mein Vater hat gegähnt.|Nomen (mit する)
植える|植[う]える|pflanzen|庭[にわ]にバラを 植[う]えました。|Ich habe im Garten Rosen gepflanzt.|Verb
屋根|屋根[やね]|Dach|屋根[やね]にカラスが 止[と]まっています。|Auf dem Dach sitzt eine Krähe.|Nomen
黒板|黒板[こくばん]|Tafel|答[こた]えを 黒板[こくばん]に 書[か]いてください。|Schreiben Sie die Antwort bitte an die Tafel.|Nomen
掲示板|掲示板[けいじばん]|Anschlagbrett, Schwarzes Brett|掲示板[けいじばん]のお 知[し]らせを 見[み]ましたか。|Hast du den Aushang am Schwarzen Brett gesehen?|Nomen
からから|からから|ausgetrocknet, völlig trocken|おしゃべりして 喉[のど]がからからになりました。|Vom vielen Reden ist meine Kehle ganz trocken.|Adjektiv
草|草[くさ]|Gras, Unkraut|庭[にわ]に 草[くさ]が 生[は]えている。|Im Garten wächst Unkraut.|Nomen
葉|葉[は]|Blatt (einer Pflanze)|これは 桜[さくら]の 葉[は]です。|Das ist ein Kirschblatt.|Nomen
絵葉書|絵葉書[えはがき]|Ansichtskarte|友達[ともだち]から 絵葉書[えはがき]が 届[とど]きました。|Von einem Freund ist eine Ansichtskarte gekommen.|Nomen
葉書|葉書[はがき]|Postkarte|家族[かぞく]に 葉書[はがき]を 書[か]いています。|Ich schreibe meiner Familie eine Postkarte.|Nomen
ふらふら|ふらふら|schwankend, schwindlig|私[わたし]は 疲[つか]れてふらふらです。|Ich bin so müde, dass ich schwanke.|Adverb
吸う|吸[す]う|einatmen, saugen; rauchen|彼[かれ]は 大[おお]きく 息[いき]を 吸[す]った。|Er holte tief Luft.|Verb
普及|普及[ふきゅう]|Verbreitung|ゴミのリサイクルが 普及[ふきゅう]している。|Mülltrennung und Recycling sind weit verbreitet.|Nomen (mit する)
胃|胃[い]|Magen|昨日[きのう]から 胃[い]が 痛[いた]い。|Seit gestern tut mir der Magen weh.|Nomen
皿|皿[さら]|Teller|皿[さら]にケーキを 載[の]せました。|Ich habe den Kuchen auf den Teller gelegt.|Nomen
こぼす|こぼす|verschütten|ソファにワインをこぼした。|Ich habe Wein auf das Sofa verschüttet.|Verb
血|血[ち]|Blut|血[ち]が 出[で]ていますよ。|Du blutest.|Nomen
内容|内容[ないよう]|Inhalt|この 本[ほん]の 内容[ないよう]を 説明[せつめい]してください。|Erklären Sie bitte den Inhalt dieses Buches.|Nomen
背景|背景[はいけい]|Hintergrund|事件[じけん]の 背景[はいけい]に 何[なに]があったのだろう。|Was wohl hinter dem Vorfall steckte?|Nomen
骨|骨[ほね]|Knochen|彼[かれ]は 足[あし]の 骨[ほね]を 折[お]りました。|Er hat sich einen Knochen im Bein gebrochen.|Nomen
ランチ|ランチ|Mittagessen, Lunch|一緒[いっしょ]にランチに 行[い]きませんか。|Wollen wir zusammen Mittag essen gehen?|Nomen
滑る|滑[すべ]る|rutschen, gleiten|彼[かれ]は 雪[ゆき]の 上[うえ]を 滑[すべ]った。|Er ist über den Schnee geglitten.|Verb
折れる|折[お]れる|brechen, abknicken; nachgeben|強風[きょうふう]で 木[き]の 枝[えだ]が 折[お]れた。|Im starken Wind ist ein Ast abgebrochen.|Verb
折る|折[お]る|brechen, knicken, falten|祖父[そふ]は 足[あし]の 骨[ほね]を 折[お]りました。|Mein Großvater hat sich einen Knochen im Bein gebrochen.|Verb
健康|健康[けんこう]|Gesundheit, gesund|私[わたし]は 健康[けんこう]な 生活[せいかつ]を 送[おく]っています。|Ich führe ein gesundes Leben.|な-Adjektiv
レシート|レシート|Kassenbon, Quittung|レシートを 財布[さいふ]に 入[い]れました。|Ich habe den Kassenbon ins Portemonnaie gesteckt.|Nomen
珍しい|珍[めずら]しい|selten, ungewöhnlich|昨日[きのう] 珍[めずら]しい 果物[くだもの]を 食[た]べました。|Gestern habe ich eine seltene Frucht gegessen.|Adjektiv
撮る|撮[と]る|aufnehmen (Foto, Film)|写真[しゃしん]をたくさん 撮[と]りました。|Ich habe viele Fotos gemacht.|Verb
再び|再[ふたた]び|wieder, erneut|彼[かれ]は 再[ふたた]びここに 戻[もど]ってきた。|Er ist wieder hierher zurückgekommen.|Adverb
再来年|再来年[さらいねん]|übernächstes Jahr|次[つぎ]のオリンピックは 再来年[さらいねん]です。|Die nächsten Olympischen Spiele sind übernächstes Jahr.|Nomen
チョーク|チョーク|Kreide|チョークで 黒板[こくばん]に 字[じ]を 書[か]きました。|Ich habe mit Kreide an die Tafel geschrieben.|Nomen
再来月|再来月[さらいげつ]|übernächsten Monat|再来月[さらいげつ]まで 予約[よやく]で 一杯[いっぱい]です。|Bis übernächsten Monat ist alles ausgebucht.|Nomen
再来週|再来週[さらいしゅう]|übernächste Woche|再来週[さらいしゅう]は 忙[いそが]しいです。|Übernächste Woche bin ich beschäftigt.|Nomen
放送|放送[ほうそう]|Sendung, Ausstrahlung|その 番組[ばんぐみ]は 来週[らいしゅう] 放送[ほうそう]されます。|Die Sendung wird nächste Woche ausgestrahlt.|Nomen (mit する)
装置|装置[そうち]|Vorrichtung, Gerät, Apparatur|実験[じっけん]にはこの 装置[そうち]を 使[つか]います。|Für das Experiment benutzen wir dieses Gerät.|Nomen
ティッシュ|ティッシュ|Papiertaschentuch|ティッシュを 取[と]ってください。|Gib mir bitte ein Taschentuch.|Nomen
仮名|仮名[かな]|Kana (japanische Silbenschrift)|お 名前[なまえ]に 仮名[かな]を 振[ふ]ってください。|Schreiben Sie bitte die Lesung Ihres Namens in Kana dazu.|Nomen
送り仮名|送[おく]り 仮名[がな]|Kana-Endung (nach einem Kanji)|その 送[おく]り 仮名[がな]は 間違[まちが]っています。|Diese Kana-Endung ist falsch.|Nomen
鏡|鏡[かがみ]|Spiegel|彼女[かのじょ]は 鏡[かがみ]を 見[み]て 髪[かみ]を 直[なお]した。|Sie sah in den Spiegel und richtete ihre Haare.|Nomen
悲しむ|悲[かな]しむ|trauern, betrübt sein|父[ちち]は 友[とも]だちの 死[し]を 悲[かな]しんでいます。|Mein Vater trauert um einen verstorbenen Freund.|Verb
ノック|ノック|Klopfen|入[はい]る 時[とき]はドアをノックしてください。|Klopfen Sie bitte an, bevor Sie hereinkommen.|Nomen (mit する)
固い|固[かた]い|hart, fest; stur|私[わたし]の 上司[じょうし]は 頭[あたま]が 固[かた]い。|Mein Chef ist ein Sturkopf.|Adjektiv
美術館|美術館[びじゅつかん]|Kunstmuseum|昨日[きのう]、 美術館[びじゅつかん]に 行[い]きました。|Gestern war ich im Kunstmuseum.|Nomen
美人|美人[びじん]|schöne Frau|彼[かれ]のお 母[かあ]さんは 美人[びじん]です。|Seine Mutter ist eine schöne Frau.|Nomen
美容院|美容院[びよういん]|Friseursalon|父[ちち]は 美容院[びよういん]で 髪[かみ]を 切[き]ります。|Mein Vater lässt sich im Friseursalon die Haare schneiden.|Nomen
よろしく|よろしく|gut, angemessen; schöne Grüße|よろしくお 願[ねが]いします。|Ich bitte um Ihr Wohlwollen.|Adverb
博物館|博物館[はくぶつかん]|Museum|昨日[きのう]、 車[くるま]の 博物館[はくぶつかん]に 行[い]った。|Gestern war ich im Automuseum.|Nomen
開催|開催[かいさい]|Veranstaltung, Abhaltung|京都[きょうと]で 国際会議[こくさいかいぎ]が 開催[かいさい]された。|In Kyoto fand eine internationale Konferenz statt.|Nomen (mit する)
特徴|特徴[とくちょう]|Merkmal, Besonderheit|この 曲線[きょくせん]がこの 車[くるま]の 特徴[とくちょう]です。|Diese geschwungene Linie ist das Merkmal dieses Autos.|Nomen
許す|許[ゆる]す|erlauben; verzeihen|私[わたし]は 彼[かれ]を 許[ゆる]しました。|Ich habe ihm verziehen.|Verb
がらがら|がらがら|ganz leer (Raum, Fahrzeug)|映画館[えいがかん]はがらがらでした。|Das Kino war ganz leer.|Adjektiv
免許証|免許証[めんきょしょう]|Führerschein, Lizenz|免許証[めんきょしょう]を 見[み]せてください。|Zeigen Sie mir bitte Ihren Führerschein.|Nomen
教師|教師[きょうし]|Lehrer(in), Lehrkraft|彼[かれ]は 高校[こうこう] 教師[きょうし]だ。|Er ist Oberschullehrer.|Nomen
教授|教授[きょうじゅ]|Professor(in)|彼[かれ]は 化学[かがく]の 教授[きょうじゅ]です。|Er ist Professor für Chemie.|Nomen
伝える|伝[つた]える|übermitteln, ausrichten, überliefern|みんなにこのことを 伝[つた]えてください。|Richten Sie das bitte allen aus.|Verb
ぎらぎら|ぎらぎら|grell, gleißend|太陽[たいよう]がぎらぎらしている。|Die Sonne brennt gleißend.|Adverb
鳥|鳥[とり]|Vogel|鳥[とり]が 飛[と]んでいます。|Ein Vogel fliegt.|Nomen
鳴る|鳴[な]る|klingeln, ertönen|今朝[けさ]、 5時[ごじ]に 電話[でんわ]が 鳴[な]った。|Heute Morgen um fünf hat das Telefon geklingelt.|Verb
鳴く|鳴[な]く|rufen, zwitschern, miauen (Tierlaute)|どこかでネコが 鳴[な]いている。|Irgendwo miaut eine Katze.|Verb
声|声[こえ]|Stimme|彼[かれ]は 大[おお]きな 声[こえ]で 話[はな]した。|Er sprach mit lauter Stimme.|Nomen
そっち|そっち|dort (bei dir, umgangssprachlich)|そっちが 私[わたし]の 部屋[へや]です。|Dort ist mein Zimmer.|Nomen
卵|卵[たまご]|Ei|ニワトリは 卵[たまご]を 産[う]みます。|Hühner legen Eier.|Nomen
犬|犬[いぬ]|Hund|この 犬[いぬ]はとても 賢[かしこ]い。|Dieser Hund ist sehr klug.|Nomen
馬|馬[うま]|Pferd|彼[かれ]は 牧場[ぼくじょう]で 馬[うま]に 乗[の]った。|Er ist auf dem Hof geritten.|Nomen
駐車場|駐車場[ちゅうしゃじょう]|Parkplatz|車[くるま]は 駐車場[ちゅうしゃじょう]に 止[と]めてください。|Stellen Sie das Auto bitte auf dem Parkplatz ab.|Nomen
ピンポン|ピンポン|Tischtennis|昨日[きのう]の 夕方[ゆうがた]、 友達[ともだち]とピンポンをした。|Gestern Abend habe ich mit einem Freund Tischtennis gespielt.|Nomen (mit する)
騒ぐ|騒[さわ]ぐ|lärmen, Krach machen|電車[でんしゃ]の 中[なか]で 騒[さわ]がないでください。|Macht bitte im Zug keinen Lärm.|Verb
刺す|刺[さ]す|stechen|虫[むし]に 腕[うで]を 刺[さ]されました。|Ein Insekt hat mich in den Arm gestochen.|Verb
刺身|刺身[さしみ]|Sashimi (roher Fisch in Scheiben)|私[わたし]は 刺身[さしみ]は 食[た]べません。|Ich esse kein Sashimi.|Nomen
激しい|激[はげ]しい|heftig, stark|激[はげ]しい 雨[あめ]が 降[ふ]っています。|Es regnet heftig.|Adjektiv
ぺこぺこ|ぺこぺこ|sehr hungrig|私[わたし]はおなかがぺこぺこです。|Ich habe einen Bärenhunger.|Adjektiv
驚く|驚[おどろ]く|überrascht sein, erschrecken|彼[かれ]は 血[ち]を 見[み]て 驚[おどろ]いた。|Er erschrak, als er Blut sah.|Verb
倒れる|倒[たお]れる|umfallen, zusammenbrechen|強風[きょうふう]で 木[き]が 倒[たお]れた。|Im Sturm ist ein Baum umgestürzt.|Verb
倒す|倒[たお]す|umwerfen, zu Fall bringen, besiegen|そのスキーヤーはポールを 倒[たお]した。|Der Skifahrer hat die Stange umgeworfen.|Verb
傾向|傾向[けいこう]|Tendenz, Neigung|最近[さいきん]の 若者[わかもの]は 難[むずか]しい 本[ほん]を 読[よ]まない 傾向[けいこう]がある。|Junge Leute neigen heutzutage dazu, keine schwierigen Bücher zu lesen.|Nomen
ぺらぺら|ぺらぺら|fließend (sprechen)|彼女[かのじょ]はドイツ 語[ご]がぺらぺらです。|Sie spricht fließend Deutsch.|な-Adjektiv
柔道|柔道[じゅうどう]|Judo|私[わたし]は 柔道[じゅうどう]を 習[なら]っています。|Ich lerne Judo.|Nomen
柔らかい|柔[やわ]らかい|weich|布団[ふとん]がとても 柔[やわ]らかい。|Der Futon ist sehr weich.|Adjektiv
柔らか|柔[やわ]らか|weich, sanft|彼[かれ]の 声[こえ]は 柔[やわ]らかだ。|Seine Stimme ist sanft.|な-Adjektiv
主張|主張[しゅちょう]|Behauptung, Standpunkt|上司[じょうし]は 私[わたし]の 主張[しゅちょう]を 受[う]け 入[い]れた。|Mein Vorgesetzter hat meinen Standpunkt akzeptiert.|Nomen (mit する)
レインコート|レインコート|Regenmantel|雨[あめ]なのでレインコートを 着[き]ました。|Es regnete, deshalb habe ich einen Regenmantel angezogen.|Nomen
引っ張る|引[ひ]っ 張[ぱ]る|ziehen, zerren|娘[むすめ]が 私[わたし]の 手[て]を 引[ひ]っ 張[ぱ]った。|Meine Tochter zog an meiner Hand.|Verb
突き当たる|突[つ]き 当[あ]たる|stoßen auf; ans Ende (einer Straße) kommen|突[つ]き 当[あ]たったら 右[みぎ]に 曲[ま]がってください。|Biegen Sie am Ende der Straße bitte rechts ab.|Verb
突き当たり|突[つ]き 当[あ]たり|Ende einer Straße|この 先[さき]は 突[つ]き 当[あ]たりです。|Da vorn endet die Straße.|Nomen
壁|壁[かべ]|Wand, Mauer|壁[かべ]に 絵[え]が 掛[か]かっている。|An der Wand hängt ein Bild.|Nomen
アイス|アイス|Eis (zum Essen)|暑[あつ]いのでアイスを 食[た]べました。|Es war heiß, deshalb habe ich ein Eis gegessen.|Nomen
弾く|弾[ひ]く|spielen (Saiten- und Tasteninstrument)|彼[かれ]はギターを 弾[ひ]きます。|Er spielt Gitarre.|Verb
丸い|丸[まる]い|rund|地球[ちきゅう]は 丸[まる]い。|Die Erde ist rund.|Adjektiv
丸|丸[まる]|Kreis, Kugel|紙[かみ]に 大[おお]きな 丸[まる]を 書[か]きました。|Ich habe einen großen Kreis auf das Papier gemalt.|Nomen
攻撃|攻撃[こうげき]|Angriff|2003年[にせんさんねん]にアメリカはイラクを 攻撃[こうげき]した。|2003 griffen die USA den Irak an.|Nomen (mit する)
いつごろ|いつごろ|ungefähr wann|いつごろ 夏休[なつやす]みを 取[と]りますか。|Wann ungefähr nimmst du deinen Sommerurlaub?|Nomen
絶対に|絶対[ぜったい]に|absolut, unbedingt|絶対[ぜったい]に 駄目[だめ]です。|Auf keinen Fall.|Adverb
消防車|消防車[しょうぼうしゃ]|Feuerwehrauto|消防車[しょうぼうしゃ]が 4台[よんだい]も 来[き]た。|Es kamen gleich vier Feuerwehrautos.|Nomen
嫌|嫌[いや]|unangenehm, nicht mögen|私[わたし]は 待[ま]つのが 嫌[いや]だ。|Ich hasse es zu warten.|な-Adjektiv
大嫌い|大嫌[だいきら]い|hassen, überhaupt nicht mögen|私[わたし]はテストが 大嫌[だいきら]い。|Ich hasse Tests.|な-Adjektiv
ウィスキー|ウィスキー|Whisky|このウィスキーは 強[つよ]いよ。|Dieser Whisky ist stark.|Nomen
大抵|大抵[たいてい]|meistens, gewöhnlich|朝食[ちょうしょく]は 大抵[たいてい] 7時頃[しちじごろ]に 食[た]べます。|Ich frühstücke meistens gegen sieben Uhr.|Adverb
大勢|大勢[おおぜい]|viele Leute, große Gruppe|大勢[おおぜい]で 食事[しょくじ]に 出[で]かけました。|Wir sind in großer Runde essen gegangen.|Nomen
姿|姿[すがた]|Gestalt, Erscheinung|遠[とお]くに 彼女[かのじょ]の 姿[すがた]が 見[み]えた。|In der Ferne war ihre Gestalt zu sehen.|Nomen
姿勢|姿勢[しせい]|Haltung, Einstellung|あの 子[こ]はいつも 姿勢[しせい]が 悪[わる]い。|Das Kind hat immer eine schlechte Haltung.|Nomen
エアメール|エアメール|Luftpost|彼[かれ]にエアメールを 送[おく]りました。|Ich habe ihm einen Luftpostbrief geschickt.|Nomen
恐ろしい|恐[おそ]ろしい|schrecklich, furchtbar|昨夜[ゆうべ] 恐[おそ]ろしい 夢[ゆめ]を 見[み]た。|Letzte Nacht hatte ich einen schrecklichen Traum.|Adjektiv
怖い|怖[こわ]い|furchterregend; Angst haben|私[わたし]は 犬[いぬ]が 怖[こわ]いです。|Ich habe Angst vor Hunden.|Adjektiv
糸|糸[いと]|Faden, Garn|母[はは]は 糸[いと]を 針[はり]に 通[とお]した。|Meine Mutter fädelte den Faden in die Nadel.|Nomen
孫|孫[まご]|Enkel(in)|昨日[きのう]、 孫[まご]が 生[う]まれました。|Gestern wurde mein Enkelkind geboren.|Nomen
シャープペンシル|シャープペンシル|Druckbleistift|私[わたし]のシャープペンシルがありません。|Mein Druckbleistift ist weg.|Nomen
木綿|木綿[もめん]|Baumwolle|彼女[かのじょ]は 木綿[もめん]のシャツを 着[き]ています。|Sie trägt ein Baumwollhemd.|Nomen
偉い|偉[えら]い|großartig, bedeutend, ranghoch|彼[かれ]は 偉[えら]い 学者[がくしゃ]です。|Er ist ein bedeutender Gelehrter.|Adjektiv
爪|爪[つめ]|Nagel, Kralle|爪[つめ]が 伸[の]びています。|Meine Nägel sind lang geworden.|Nomen
机|机[つくえ]|Schreibtisch|新[あたら]しい 机[つくえ]を 買[か]ってもらいました。|Ich habe einen neuen Schreibtisch gekauft bekommen.|Nomen
セロテープ|セロテープ|Klebefilm, Tesafilm|セロテープはありますか。|Haben Sie Klebefilm?|Nomen
棚|棚[たな]|Regal|大[おお]きな 棚[たな]はとても 便利[べんり]です。|Ein großes Regal ist sehr praktisch.|Nomen
本棚|本棚[ほんだな]|Bücherregal|これはとても 大[おお]きな 本棚[ほんだな]ですね。|Das ist ein sehr großes Bücherregal.|Nomen
方針|方針[ほうしん]|Kurs, Richtlinie|今後[こんご]の 方針[ほうしん]が 決[き]まった。|Der künftige Kurs steht fest.|Nomen
釣る|釣[つ]る|angeln|昨日大[きのう おお]きな 魚[さかな]を 釣[つ]りました。|Gestern habe ich einen großen Fisch gefangen.|Verb
やけど|やけど|Verbrennung, Brandwunde|彼[かれ]は 手[て]にやけどをしました。|Er hat sich die Hand verbrannt.|Nomen (mit する)
お釣り|お 釣[つ]り|Wechselgeld|母[はは]はお 釣[つ]りを 確[たし]かめた。|Meine Mutter hat das Wechselgeld nachgezählt.|Nomen
鍵|鍵[かぎ]|Schlüssel; Schloss|出[で]かける 時[とき]は 鍵[かぎ]を 掛[か]けてください。|Schließen Sie bitte ab, wenn Sie weggehen.|Nomen
鍋|鍋[なべ]|Topf|鍋[なべ]にスープが 入[はい]っているよ。|Im Topf ist Suppe.|Nomen
寿司|寿司[すし]|Sushi|彼女[かのじょ]は 寿司[すし]を 初[はじ]めて 食[た]べました。|Sie hat zum ersten Mal Sushi gegessen.|Nomen
アイスコーヒー|アイスコーヒー|Eiskaffee|アイスコーヒーをください。|Einen Eiskaffee, bitte.|Nomen
泥棒|泥棒[どろぼう]|Dieb, Einbrecher|近所[きんじょ]に 泥棒[どろぼう]が 入[はい]った。|In der Nachbarschaft wurde eingebrochen.|Nomen (mit する)
湯|湯[ゆ]|heißes Wasser; Bad|お 風呂[ふろ]のお 湯[ゆ]が 一杯[いっぱい]です。|Die Badewanne ist voll mit heißem Wasser.|Nomen
沸く|沸[わ]く|kochen, sieden|お 風呂[ふろ]が 沸[わ]きました。|Das Badewasser ist heiß.|Verb
沸かす|沸[わ]かす|zum Kochen bringen, erhitzen|お 湯[ゆ]を 沸[わ]かしてください。|Machen Sie bitte Wasser heiß.|Verb
あっち|あっち|dort drüben, dorthin (umgangssprachlich)|郵便局[ゆうびんきょく]はあっちです。|Die Post ist dort drüben.|Nomen
洗濯機|洗濯機[せんたくき]|Waschmaschine|新[あたら]しい 洗濯機[せんたっき]を 買[か]いました。|Ich habe eine neue Waschmaschine gekauft.|Nomen
洗濯|洗濯[せんたく]|Wäschewaschen, Wäsche|一週間[いっしゅうかん]、 洗濯[せんたく]をしていない。|Ich habe seit einer Woche keine Wäsche gewaschen.|Nomen (mit する)
濡れる|濡[ぬ]れる|nass werden|雨[あめ]で 濡[ぬ]れてしまった。|Ich bin im Regen nass geworden.|Verb
喫茶店|喫茶店[きっさてん]|Café|喫茶店[きっさてん]でコーヒーを 飲[の]んだ。|Ich habe im Café Kaffee getrunken.|Nomen
あんなに|あんなに|so sehr, derart (wie jener)|あんなにいい 人[ひと]はいません。|So einen netten Menschen gibt es kein zweites Mal.|Adverb
怠ける|怠[なま]ける|faulenzen, vernachlässigen|怠[なま]けていないで、 手伝[てつだ]って。|Faulenz nicht, hilf mir!|Verb
一生懸命|一生懸命[いっしょうけんめい]|mit aller Kraft, eifrig|彼[かれ]は 毎日[まいにち] 一生懸命[いっしょうけんめい] 働[はたら]いている。|Er arbeitet jeden Tag hart.|Adverb
休憩|休憩[きゅうけい]|Pause|少[すこ]し 休憩[きゅうけい]しましょう。|Machen wir eine kurze Pause.|Nomen (mit する)
天井|天井[てんじょう]|Zimmerdecke|この 部屋[へや]は 天井[てんじょう]が 高[たか]いですね。|Dieses Zimmer hat eine hohe Decke.|Nomen
いたずら|いたずら|Streich, Unfug|その 子[こ]はいたずらが 大好[だいす]きだ。|Das Kind liebt Streiche.|Nomen (mit する)
納豆|納豆[なっとう]|Nattō (vergorene Sojabohnen)|私[わたし]は 納豆[なっとう]をよく 食[た]べます。|Ich esse oft Nattō.|Nomen
化粧|化粧[けしょう]|Make-up, Schminken|彼女[かのじょ]は 化粧[けしょう]が 上手[うま]い。|Sie kann sich gut schminken.|Nomen (mit する)
畑|畑[はたけ]|Feld, Acker|母[はは]は 畑[はたけ] 仕事[しごと]が 好[す]きだ。|Meine Mutter mag Feldarbeit.|Nomen
炊く|炊[た]く|kochen (Reis)|母[はは]は 毎朝[まいあさ]ご 飯[はん]を 炊[た]く。|Meine Mutter kocht jeden Morgen Reis.|Verb
ウェートレス|ウェートレス|Kellnerin|ウェートレスを 呼[よ]んだ。|Ich habe die Kellnerin gerufen.|Nomen
自炊|自炊[じすい]|selbst kochen|私[わたし]は 毎日[まいにち]、 自炊[じすい]している。|Ich koche jeden Tag selbst.|Nomen (mit する)
灰皿|灰皿[はいざら]|Aschenbecher|灰皿[はいざら]をください。|Einen Aschenbecher, bitte.|Nomen
灰|灰[はい]|Asche|火事[かじ]ですべて 灰[はい]になった。|Bei dem Brand ist alles zu Asche geworden.|Nomen
灰色|灰色[はいいろ]|Grau|今日[きょう]の 空[そら]は 灰色[はいいろ]だ。|Der Himmel ist heute grau.|Nomen
おばさん|おばさん|Tante; Frau mittleren Alters|おばさん 一家[いっか]が 遊[あそ]びに 来[き]ました。|Meine Tante ist mit ihrer Familie zu Besuch gekommen.|Nomen
西暦|西暦[せいれき]|westliche Zeitrechnung, n. Chr.|西暦[せいれき] 1964年[せんきゅうひゃくろくじゅうよねん]に 東京[とうきょう]でオリンピックがあった。|Im Jahr 1964 fanden in Tokio die Olympischen Spiele statt.|Nomen
毛|毛[け]|Haar, Fell, Wolle|猫[ねこ]の 毛[け]がセーターに 付[つ]いた。|An meinem Pullover hängen Katzenhaare.|Nomen
髪|髪[かみ]|Haare (Kopfhaar)|昨日[きのう]、 髪[かみ]を 切[き]りました。|Gestern habe ich mir die Haare schneiden lassen.|Nomen
舌|舌[した]|Zunge|舌[した]を 出[だ]してください。|Strecken Sie bitte die Zunge heraus.|Nomen
くし|くし|Kamm|彼[かれ]はくしで 髪[かみ]をとかした。|Er hat sich mit dem Kamm die Haare gekämmt.|Nomen
臭い|臭[くさ]い|stinkend, übelriechend|納豆[なっとう]は 臭[くさ]い。|Nattō stinkt.|Adjektiv
匂い|匂[にお]い|Geruch, Duft|いい 匂[にお]いがする。|Es riecht gut.|Nomen
居る|居[い]る|da sein, sich befinden (Lebewesen)|今日[きょう]は 一日中家[いちにちじゅう うち]に 居[い]ました。|Ich war heute den ganzen Tag zu Hause.|Verb
履く|履[は]く|anziehen, tragen (Schuhe, Hose)|彼女[かのじょ]はブーツを 履[は]いています。|Sie trägt Stiefel.|Verb
クリーニング|クリーニング|Reinigung|スーツをクリーニングに 出[だ]しました。|Ich habe den Anzug in die Reinigung gegeben.|Nomen (mit する)
戸|戸[と]|Tür|部屋[へや]の 戸[と]が 開[あ]いています。|Die Zimmertür steht offen.|Nomen
扇風機|扇風機[せんぷうき]|Ventilator|暑[あつ]いから 扇風機[せんぷうき]をつけよう。|Es ist heiß, schalten wir den Ventilator ein.|Nomen
豚|豚[ぶた]|Schwein|豚[ぶた]はすごく 鼻[はな]が 良[い]い。|Schweine haben einen sehr guten Geruchssinn.|Nomen
豚肉|豚肉[ぶたにく]|Schweinefleisch|豚肉[ぶたにく]は 美味[おい]しいです。|Schweinefleisch schmeckt gut.|Nomen
ごちそう|ごちそう|Festessen, Leckerbissen|テーブルの 上[うえ]にごちそうが 並[なら]んでいる。|Auf dem Tisch stehen lauter Leckereien.|Nomen
鶏|鶏[にわとり]|Huhn, Hahn|その 鶏[にわとり]は 毎朝鳴[まいあさ な]きます。|Der Hahn kräht jeden Morgen.|Nomen
腕時計|腕時計[うでどけい]|Armbanduhr|私[わたし]の 腕時計[うでどけい]は 遅[おく]れている。|Meine Armbanduhr geht nach.|Nomen
お菓子|お 菓子[かし]|Süßigkeiten, Gebäck|みんなにお 菓子[かし]をあげましょう。|Geben wir allen ein paar Süßigkeiten.|Nomen
お辞儀|お 辞儀[じぎ]|Verbeugung|皆[みんな]、 社長[しゃちょう]にお 辞儀[じぎ]をした。|Alle verbeugten sich vor dem Firmenchef.|Nomen (mit する)
ごちそうする|ごちそうする|einladen (zum Essen), bewirten|今日[きょう]の 夕食[ゆうしょく]は 私[わたし]がごちそうします。|Das Abendessen heute geht auf mich.|Verb
寝坊|寝坊[ねぼう]|Verschlafen; Langschläfer(in)|今朝[けさ]は 寝坊[ねぼう]しました。|Heute Morgen habe ich verschlafen.|Nomen (mit する)
旗|旗[はた]|Fahne, Flagge|旗[はた]が 風[かぜ]に 揺[ゆ]れている。|Die Fahne weht im Wind.|Nomen
鉛筆|鉛筆[えんぴつ]|Bleistift|鉛筆[えんぴつ]を 貸[か]して 下[くだ]さい。|Leih mir bitte einen Bleistift.|Nomen
万年筆|万年筆[まんねんひつ]|Füllfederhalter|父[ちち]に 万年筆[まんねんひつ]をプレゼントしました。|Ich habe meinem Vater einen Füller geschenkt.|Nomen
こぼれる|こぼれる|überlaufen, verschüttet werden|彼女[かのじょ]の 目[め]から 涙[なみだ]がこぼれた。|Aus ihren Augen flossen Tränen.|Verb
箱|箱[はこ]|Schachtel, Kiste|この 箱[はこ]は 重[おも]い。|Diese Kiste ist schwer.|Nomen
本箱|本箱[ほんばこ]|Bücherschrank|雑誌[ざっし]を 本箱[ほんばこ]に 入[い]れました。|Ich habe die Zeitschrift in den Bücherschrank gestellt.|Nomen
手袋|手袋[てぶくろ]|Handschuhe|寒[さむ]いので 手袋[てぶくろ]をしました。|Es war kalt, deshalb habe ich Handschuhe angezogen.|Nomen
袋|袋[ふくろ]|Tüte, Beutel, Sack|袋[ふくろ]はいりません。|Ich brauche keine Tüte.|Nomen
こんなに|こんなに|so sehr, derart (wie dies)|こんなに 面白[おもしろ]い 本[ほん]は 初[はじ]めて 読[よ]んだ。|Ein so interessantes Buch habe ich zum ersten Mal gelesen.|Adverb
財布|財布[さいふ]|Portemonnaie, Geldbeutel|会社[かいしゃ]に 財布[さいふ]を 忘[わす]れた。|Ich habe mein Portemonnaie in der Firma vergessen.|Nomen
毛布|毛布[もうふ]|Wolldecke|この 毛布[もうふ]は 暖[あたた]かい。|Diese Decke ist warm.|Nomen
布団|布団[ふとん]|Futon, Bettzeug|母[はは]が 布団[ふとん]を 干[ほ]している。|Meine Mutter lüftet die Futons.|Nomen
小包|小包[こづつみ]|Päckchen, Paket|フランスの 友達[ともだち]から 小包[こづつみ]が 届[とど]いた。|Von einem Freund in Frankreich ist ein Päckchen angekommen.|Nomen
ざあざあ|ざあざあ|in Strömen (Regen)|雨[あめ]がざあざあ 降[ふ]っている。|Es regnet in Strömen.|Adverb
包む|包[つつ]む|einwickeln, einpacken|プレゼントをきれいな 紙[かみ]で 包[つつ]みました。|Ich habe das Geschenk in schönes Papier eingepackt.|Verb
飾る|飾[かざ]る|schmücken, ausstellen|テーブルの 上[うえ]に 花[はな]を 飾[かざ]りました。|Ich habe den Tisch mit Blumen geschmückt.|Verb
手帳|手帳[てちょう]|Notizbuch, Taschenkalender|新[あたら]しい 手帳[てちょう]を 買[か]いました。|Ich habe einen neuen Taschenkalender gekauft.|Nomen
電話帳|電話帳[でんわちょう]|Telefonbuch|電話帳[でんわちょう]を 見[み]せてください。|Zeigen Sie mir bitte das Telefonbuch.|Nomen
ジャガイモ|ジャガイモ|Kartoffel|ポテトサラダを 作[つく]るから、ジャガイモを 買[か]ってきて。|Ich mache Kartoffelsalat, kauf bitte Kartoffeln.|Nomen
牛乳|牛乳[ぎゅうにゅう]|Milch|私[わたし]は 毎朝[まいあさ]、 牛乳[ぎゅうにゅう]を 飲[の]む。|Ich trinke jeden Morgen Milch.|Nomen
玄関|玄関[げんかん]|Hauseingang, Flur|玄関[げんかん]に 花[はな]を 飾[かざ]りました。|Ich habe den Eingang mit Blumen geschmückt.|Nomen
眼鏡|眼鏡[めがね]|Brille|彼[かれ]は 眼鏡[めがね]をかけています。|Er trägt eine Brille.|Nomen
眠い|眠[ねむ]い|müde, schläfrig|今日[きょう]はとても 眠[ねむ]いです。|Heute bin ich sehr müde.|Adjektiv
ソファー|ソファー|Sofa|このソファーは 気持[きも]ちがいい。|Dieses Sofa ist bequem.|Nomen
眠る|眠[ねむ]る|schlafen|昨日[きのう]は 8時間[はちじかん] 眠[ねむ]りました。|Gestern habe ich acht Stunden geschlafen.|Verb
封筒|封筒[ふうとう]|Briefumschlag|その 手紙[てがみ]を 封筒[ふうとう]に 入[い]れた。|Ich habe den Brief in einen Umschlag gesteckt.|Nomen
出掛ける|出掛[でか]ける|ausgehen, weggehen|主人[しゅじん]はもう 出掛[でか]けました。|Mein Mann ist schon weggegangen.|Verb
掛かる|掛[か]かる|hängen; dauern, kosten|壁[かべ]に 大[おお]きな 時計[とけい]が 掛[か]かっています。|An der Wand hängt eine große Uhr.|Verb
たばこ|たばこ|Tabak, Zigarette|彼[かれ]はたばこを 吸[す]いません。|Er raucht nicht.|Nomen
掛け算|掛[か]け 算[ざん]|Multiplikation|弟[おとうと]は 掛[か]け 算[ざん]を 習[なら]っている。|Mein kleiner Bruder lernt gerade das Multiplizieren.|Nomen (mit する)
拍手|拍手[はくしゅ]|Applaus, Händeklatschen|大[おお]きな 拍手[はくしゅ]が 上[あ]がった。|Es gab großen Applaus.|Nomen (mit する)
掃除|掃除[そうじ]|Putzen, Saubermachen|週末[しゅうまつ]は 部屋[へや]の 掃除[そうじ]をしました。|Am Wochenende habe ich mein Zimmer geputzt.|Nomen (mit する)
掃く|掃[は]く|fegen, kehren|床[ゆか]をほうきで 掃[は]きました。|Ich habe den Boden mit dem Besen gefegt.|Verb
ちょうど|ちょうど|genau, gerade|値段[ねだん]はちょうど 3万円[さんまんえん]です。|Der Preis beträgt genau 30.000 Yen.|Adverb
掃除機|掃除機[そうじき]|Staubsauger|掃除機[そうじき]が 壊[こわ]れた。|Der Staubsauger ist kaputtgegangen.|Nomen
握る|握[にぎ]る|greifen, festhalten; (Sushi) formen|少女[しょうじょ]は 母親[ははおや]の 手[て]を 握[にぎ]った。|Das Mädchen hielt die Hand seiner Mutter fest.|Verb
握手|握手[あくしゅ]|Händedruck|彼[かれ]らは 握手[あくしゅ]をした。|Sie gaben sich die Hand.|Nomen (mit する)
迎える|迎[むか]える|abholen, empfangen, begrüßen|姉[あね]が 空港[くうこう]まで 迎[むか]えに 来[き]てくれます。|Meine große Schwester holt mich am Flughafen ab.|Verb
ちょっと|ちょっと|ein bisschen, einen Moment|もうちょっと 塩[しお]を 入[い]れて。|Gib noch ein bisschen Salz dazu.|Adverb
お巡りさん|お 巡[まわ]りさん|Polizist(in) (freundlich)|あのお 巡[まわ]りさんに 道[みち]を 聞[き]きましょう。|Fragen wir den Polizisten dort nach dem Weg.|Nomen
幾つ|幾[いく]つ|wie viele; wie alt|娘[むすめ]さんは 幾[いく]つになりましたか。|Wie alt ist Ihre Tochter jetzt?|Nomen
幾ら|幾[いく]ら|wie viel (Preis)|この 靴[くつ]は 幾[いく]らですか。|Wie viel kosten diese Schuhe?|Nomen
冗談|冗談[じょうだん]|Scherz, Witz|冗談[じょうだん]は 止[や]めてください。|Hör bitte auf mit den Scherzen.|Nomen
つく|つく|an sein, eingeschaltet sein|部屋[へや]の 電気[でんき]がついています。|Im Zimmer brennt Licht.|Verb
穴|穴[あな]|Loch|靴下[くつした]に 穴[あな]が 開[あ]いている。|In der Socke ist ein Loch.|Nomen
寂しい|寂[さび]しい|einsam, traurig|これは 寂[さび]しい 曲[きょく]ですね。|Das ist ein trauriges Lied, nicht wahr?|Adjektiv
丁寧|丁寧[ていねい]|höflich, sorgfältig|彼女[かのじょ]はいつも 丁寧[ていねい]に 仕事[しごと]をします。|Sie arbeitet immer sorgfältig.|な-Adjektiv
可哀相|可哀相[かわいそう]|bedauernswert, arm|その 可哀相[かわいそう]な 子供[こども]たちは 食[た]べるものがない。|Diese armen Kinder haben nichts zu essen.|な-Adjektiv
てんぷら|てんぷら|Tempura (frittierte Speisen im Teigmantel)|私[わたし]はえびのてんぷらが 好[す]きです。|Ich mag Garnelen-Tempura.|Nomen
怪我|怪我[けが]|Verletzung|彼女[かのじょ]は 腕[うで]を 怪我[けが]した。|Sie hat sich am Arm verletzt.|Nomen (mit する)
我慢|我慢[がまん]|Geduld, Aushalten|彼[かれ]のわがままには 我慢[がまん]できません。|Ich kann seinen Egoismus nicht ertragen.|Nomen (mit する)
幼稚園|幼稚園[ようちえん]|Kindergarten|娘[むすめ]は 幼稚園[ようちえん]に 通[かよ]っています。|Meine Tochter geht in den Kindergarten.|Nomen
隠れる|隠[かく]れる|sich verstecken, verschwinden|太陽[たいよう]が 雲[くも]に 隠[かく]れた。|Die Sonne hat sich hinter den Wolken versteckt.|Verb
とんとん|とんとん|klopf-klopf (leichtes Klopfen)|母[はは]の 肩[かた]をとんとんたたいた。|Ich habe meiner Mutter leicht auf die Schultern geklopft.|Adverb
日陰|日陰[ひかげ]|Schatten (schattiger Platz)|暑[あつ]いので 日陰[ひかげ]で 休[やす]みましょう。|Es ist heiß, ruhen wir uns im Schatten aus.|Nomen
随分|随分[ずいぶん]|ziemlich, außerordentlich|随分[ずいぶん] 早[はや]く 終[お]わったね。|Du bist aber ziemlich früh fertig geworden.|Adverb
頑張る|頑張[がんば]る|sich anstrengen, durchhalten|明日[あした]の 試験[しけん]、 頑張[がんば]ってね。|Viel Erfolg bei der Prüfung morgen.|Verb
頃|頃[ころ]|Zeit (ungefähr), um … herum|子供[こども]の 頃[ころ]、よくその 公園[こうえん]で 遊[あそ]んだ。|Als Kind habe ich oft in diesem Park gespielt.|Nomen
にんじん|にんじん|Karotte|私[わたし]はにんじんが 嫌[きら]いだ。|Ich mag keine Karotten.|Nomen
この頃|この 頃[ごろ]|in letzter Zeit, heutzutage|この 頃[ごろ]、よく 肩[かた]が 凝[こ]る。|In letzter Zeit habe ich oft verspannte Schultern.|Nomen
消防署|消防署[しょうぼうしょ]|Feuerwache|この 町[まち]には 消防署[しょうぼうしょ]が 1[ひと]つしかありません。|In dieser Stadt gibt es nur eine Feuerwache.|Nomen
尋ねる|尋[たず]ねる|fragen, sich erkundigen|彼女[かのじょ]は 道[みち]を 尋[たず]ねた。|Sie fragte nach dem Weg.|Verb
缶詰|缶詰[かんづめ]|Konserve, Dosennahrung|缶詰[かんづめ]のフルーツはとても 甘[あま]い。|Obst aus der Dose ist sehr süß.|Nomen
ぬるい|ぬるい|lauwarm|風呂[ふろ]がぬるかった。|Das Bad war lauwarm.|Adjektiv
缶|缶[かん]|Dose, Büchse|コーヒーはその 缶[かん]に 入[はい]っています。|Der Kaffee ist in dieser Dose.|Nomen
腐る|腐[くさ]る|verfaulen, verderben|リンゴが 腐[くさ]っている。|Der Apfel ist faul.|Verb
豆腐|豆腐[とうふ]|Tofu|私[わたし]は 毎日[まいにち] 豆腐[とうふ]を 食[た]べます。|Ich esse jeden Tag Tofu.|Nomen
床|床[ゆか]|Fußboden|床[ゆか]がぬれている。|Der Boden ist nass.|Nomen
パーセント|パーセント|Prozent|この 村[むら]の 80[はちじゅっ]パーセントは 老人[ろうじん]です。|80 Prozent der Menschen in diesem Dorf sind alt.|Nomen
床屋|床屋[とこや]|Friseur (für Herren)|昨日[きのう] 床屋[とこや]で 髪[かみ]を 切[き]った。|Gestern habe ich mir beim Friseur die Haare schneiden lassen.|Nomen
畳|畳[たたみ]|Tatami (Reisstrohmatte)|そのホテルには 畳[たたみ]の 部屋[へや]がある。|Das Hotel hat Zimmer mit Tatami.|Nomen
畳む|畳[たた]む|falten, zusammenlegen|布団[ふとん]を 畳[たた]んでください。|Legen Sie bitte den Futon zusammen.|Verb
干す|干[ほ]す|trocknen, zum Trocknen aufhängen|母[はは]は 洗濯物[せんたくもの]を 干[ほ]しています。|Meine Mutter hängt die Wäsche auf.|Verb
ひざ|ひざ|Knie|スキーでひざを 怪我[けが]しました。|Ich habe mir beim Skifahren das Knie verletzt.|Nomen
帽子|帽子[ぼうし]|Hut, Mütze|暑[あつ]いので 帽子[ぼうし]を 被[かぶ]りましょう。|Es ist heiß, setzen wir einen Hut auf.|Nomen
是非|是非[ぜひ]|unbedingt, auf jeden Fall|是非[ぜひ]、うちに 来[き]てください。|Kommen Sie mich unbedingt besuchen.|Adverb
敬語|敬語[けいご]|Höflichkeitssprache (Keigo)|お 客様[きゃくさま]には 敬語[けいご]を 使[つか]いなさい。|Sprich mit Kunden in der Höflichkeitssprache.|Nomen
尊敬|尊敬[そんけい]|Respekt, Achtung|祖父[そふ]は 家族[かぞく]みんなに 尊敬[そんけい]されています。|Mein Großvater wird von der ganzen Familie geachtet.|Nomen (mit する)
ひじ|ひじ|Ellbogen|彼[かれ]はひじに 怪我[けが]をした。|Er hat sich am Ellbogen verletzt.|Nomen
敷く|敷[し]く|auslegen, ausbreiten|生[う]まれて 初[はじ]めて 布団[ふとん]を 敷[し]いた。|Ich habe zum ersten Mal im Leben einen Futon ausgebreitet.|Verb
雷|雷[かみなり]|Donner, Gewitter|雷[かみなり]が 鳴[な]っています。|Es donnert.|Nomen
零|零[れい]|Null|今[いま]ちょうど 零[れい] 時[じ]です。|Es ist jetzt genau null Uhr.|Nomen
仕舞う|仕舞[しま]う|wegräumen, verstauen|彼女[かのじょ]は 大切[たいせつ]な 書類[しょるい]を 机[つくえ]に 仕舞[しま]った。|Sie hat die wichtigen Unterlagen im Schreibtisch verstaut.|Verb
ひも|ひも|Schnur, Band, Schnürsenkel|靴[くつ]のひもが 切[き]れた。|Der Schnürsenkel ist gerissen.|Nomen
踊る|踊[おど]る|tanzen|彼女[かのじょ]はクラブで 踊[おど]るのが 好[す]きです。|Sie tanzt gern im Club.|Verb
踊り|踊[おど]り|Tanz|この 踊[おど]りは 易[やさ]しいですよ。|Dieser Tanz ist einfach.|Nomen
踏む|踏[ふ]む|treten auf|運転手[うんてんしゅ]がブレーキを 踏[ふ]んだ。|Der Fahrer trat auf die Bremse.|Verb
踏切|踏切[ふみきり]|Bahnübergang|その 踏切[ふみきり]は 長[なが]い。|Dieser Bahnübergang ist lange geschlossen.|Nomen
まく|まく|streuen, säen|日本[にほん]では、 二月[にがつ]に 豆[まめ]をまく 行事[ぎょうじ]がある。|In Japan gibt es im Februar den Brauch, Bohnen zu werfen.|Verb
蹴る|蹴[け]る|treten, kicken|ゴールキーパーがボールを 蹴[け]った。|Der Torwart hat den Ball weggetreten.|Verb
食堂|食堂[しょくどう]|Speisesaal, Kantine, Lokal|大学[だいがく]の 食堂[しょくどう]は 安[やす]い。|Die Mensa der Universität ist billig.|Nomen
猫|猫[ねこ]|Katze|私[わたし]は 猫[ねこ]が 大好[だいす]きです。|Ich liebe Katzen.|Nomen
文章|文章[ぶんしょう]|Text, Satz, Schreibstil|彼[かれ]は 文章[ぶんしょう]がとてもうまい。|Er schreibt sehr gut.|Nomen
やかん|やかん|Wasserkessel|やかんでお 湯[ゆ]を 沸[わ]かしました。|Ich habe im Kessel Wasser heiß gemacht.|Nomen
丈夫|丈夫[じょうぶ]|robust, kräftig, haltbar|祖母[そぼ]は 身体[からだ]が 丈夫[じょうぶ]だ。|Meine Großmutter ist körperlich robust.|な-Adjektiv
又|又[また]|wieder; außerdem|明日[あした]、また 来[き]ます。|Ich komme morgen wieder.|Adverb
お祖父さん|お 祖父[じい]さん|Großvater|私[わたし]のお 祖父[じい]さんは 毎日散歩[まいにち さんぽ]します。|Mein Großvater geht jeden Tag spazieren.|Nomen
お祖母さん|お 祖母[ばあ]さん|Großmutter|彼女[かのじょ]はお 祖母[ばあ]さんと 住[す]んでいる。|Sie wohnt bei ihrer Großmutter.|Nomen
ようこそ|ようこそ|willkommen|日本[にっぽん]へようこそ。|Willkommen in Japan.|Adverb
祖父|祖父[そふ]|(mein) Großvater|祖父[そふ]は 元気[げんき]です。|Meinem Großvater geht es gut.|Nomen
祖母|祖母[そぼ]|(meine) Großmutter|祖母[そぼ]は 京都[きょうと]で 生[う]まれました。|Meine Großmutter wurde in Kyoto geboren.|Nomen
邪魔|邪魔[じゃま]|Störung, Hindernis, im Weg|邪魔[じゃま]です、どいてください。|Du stehst im Weg, geh bitte zur Seite.|な-Adjektiv
風邪薬|風邪薬[かぜぐすり]|Erkältungsmittel|この 風邪薬[かぜぐすり]を 飲[の]みなさい。|Nimm dieses Erkältungsmittel.|Nomen
ウェーター|ウェーター|Kellner|ウェーターが 水[みず]を 運[はこ]んできました。|Der Kellner hat Wasser gebracht.|Nomen
風呂屋|風呂屋[ふろや]|öffentliches Badehaus|昨日[きのう]、 友達[ともだち]とお 風呂屋[ふろや]さんに 行[い]った。|Gestern war ich mit einem Freund im Badehaus.|Nomen
風呂|風呂[ふろ]|Bad, Badewanne|父[ちち]は 今[いま]お 風呂[ふろ]に 入[はい]っています。|Mein Vater badet gerade.|Nomen
昭和|昭和[しょうわ]|Shōwa-Ära (1926–1989)|私[わたし]の 両親[りょうしん]は 昭和[しょうわ] 生[う]まれです。|Meine Eltern sind in der Shōwa-Zeit geboren.|Nomen
紫|紫[むらさき]|Violett, Lila|彼女[かのじょ]は 紫[むらさき]のドレスを 着[き]ていた。|Sie trug ein lila Kleid.|Nomen
そんなに|そんなに|so sehr, derart (wie das)|一度[いちど]にそんなにたくさんはできない。|So viel auf einmal schafft man nicht.|Adverb
紅茶|紅茶[こうちゃ]|Schwarztee|温[あたた]かい 紅茶[こうちゃ]が 飲[の]みたい。|Ich möchte heißen Schwarztee trinken.|Nomen
梅雨|梅雨[つゆ]|Regenzeit (Frühsommer)|梅雨[つゆ]は 6月頃[ろくがつごろ]です。|Die Regenzeit ist um den Juni herum.|Nomen
桃|桃[もも]|Pfirsich|私[わたし]の 一番好[いちばん す]きな 果物[くだもの]は 桃[もも]です。|Mein Lieblingsobst ist der Pfirsich.|Nomen
遭う|遭[あ]う|geraten in, erleben (Unangenehmes)|彼[かれ]は 交通事故[こうつう じこ]に 遭[あ]った。|Er hatte einen Verkehrsunfall.|Verb
枕|枕[まくら]|Kopfkissen|私[わたし]は 低[ひく]い 枕[まくら]が 好[す]きです。|Ich mag flache Kopfkissen.|Nomen
嘘|嘘[うそ]|Lüge|嘘[うそ]をついてはいけません。|Man darf nicht lügen.|Nomen
遠慮|遠慮[えんりょ]|Zurückhaltung; dankend verzichten|私[わたし]は 遠慮[えんりょ]します。|Ich verzichte dankend.|Nomen (mit する)
叱る|叱[しか]る|schimpfen, tadeln|父親[ちちおや]が 子供[こども]を 叱[しか]っている。|Der Vater schimpft mit dem Kind.|Verb
傘|傘[かさ]|Regenschirm|電車[でんしゃ]に 傘[かさ]を 忘[わす]れた。|Ich habe meinen Schirm im Zug vergessen.|Nomen
お嬢さん|お 嬢[じょう]さん|junge Dame; (Ihre) Tochter|お 嬢[じょう]さんはおいくつですか。|Wie alt ist Ihre Tochter?|Nomen
年賀状|年賀状[ねんがじょう]|Neujahrskarte|昨日[きのう]、 年賀状[ねんがじょう]を 出[だ]しました。|Gestern habe ich meine Neujahrskarten abgeschickt.|Nomen
賑やか|賑[にぎ]やか|belebt, lebhaft|浅草[あさくさ]は 賑[にぎ]やかな 街[まち]です。|Asakusa ist ein belebtes Viertel.|な-Adjektiv
蚊|蚊[か]|Stechmücke|蚊[か]に 足[あし]を 刺[さ]された。|Eine Mücke hat mich ins Bein gestochen.|Nomen
拭く|拭[ふ]く|abwischen, abtrocknen|タオルで 体[からだ]を 拭[ふ]きました。|Ich habe mich mit dem Handtuch abgetrocknet.|Verb
挨拶|挨拶[あいさつ]|Gruß, Begrüßung|彼女[かのじょ]は 笑顔[えがお]で 挨拶[あいさつ]した。|Sie grüßte mit einem Lächeln.|Nomen (mit する)
伴う|伴[ともな]う|begleiten, einhergehen mit|その 仕事[しごと]は 危険[きけん]を 伴[ともな]う。|Diese Arbeit ist mit Gefahren verbunden.|Verb
巻く|巻[ま]く|wickeln, aufrollen|彼[かれ]は 頭[あたま]にタオルを 巻[ま]いていた。|Er hatte sich ein Handtuch um den Kopf gewickelt.|Verb
靴|靴[くつ]|Schuhe|靴[くつ]が 汚[よご]れた。|Meine Schuhe sind schmutzig geworden.|Nomen
靴下|靴下[くつした]|Socken, Strümpfe|この 靴下[くつした]は 3足[さんそく]で 1000円[せんえん]です。|Diese Socken kosten 1.000 Yen für drei Paar.|Nomen
磨く|磨[みが]く|putzen, polieren|靴[くつ]を 磨[みが]いてください。|Putz bitte deine Schuhe.|Verb
歯磨き|歯磨[はみが]き|Zähneputzen; Zahnpasta|歯磨[はみが]きはしましたか。|Hast du dir die Zähne geputzt?|Nomen
廊下|廊下[ろうか]|Flur, Korridor|廊下[ろうか]は 走[はし]らないでください。|Bitte nicht auf dem Flur rennen.|Nomen
瓶|瓶[びん]|Flasche|瓶[びん]ビールを 注文[ちゅうもん]した。|Ich habe ein Flaschenbier bestellt.|Nomen
褒める|褒[ほ]める|loben|頑張[がんば]ったので 褒[ほ]められました。|Ich wurde gelobt, weil ich mich angestrengt hatte.|Verb
元旦|元旦[がんたん]|Neujahrstag (1. Januar)|元旦[がんたん]に 彼[かれ]から 年賀状[ねんがじょう]が 来[き]た。|Am Neujahrstag kam eine Neujahrskarte von ihm.|Nomen
袖|袖[そで]|Ärmel|このシャツは 袖[そで]が 短[みじか]い。|Dieses Hemd hat kurze Ärmel.|Nomen
長袖|長袖[ながそで]|lange Ärmel, langärmlig|今日[きょう]は 寒[さむ]いので 長袖[ながそで]を 着[き]ました。|Heute ist es kalt, deshalb habe ich etwas Langärmliges angezogen.|Nomen
半袖|半袖[はんそで]|kurze Ärmel, kurzärmlig|今日[きょう]は、 半袖[はんそで]のシャツを 着[き]よう。|Heute ziehe ich ein kurzärmliges Hemd an.|Nomen
馬鹿|馬鹿[ばか]|Dummkopf; dumm|私[わたし]は 馬鹿[ばか]だった。|Ich war dumm.|な-Adjektiv
凄い|凄[すご]い|unglaublich, gewaltig, toll|凄[すご]い 雨[あめ]になった。|Es regnet gewaltig.|Adjektiv
剃る|剃[そ]る|rasieren|父[ちち]は 毎日髭[まいにち ひげ]を 剃[そ]ります。|Mein Vater rasiert sich jeden Tag.|Verb
喧嘩|喧嘩[けんか]|Streit, Schlägerei|喧嘩[けんか]はやめて。|Hört auf zu streiten.|Nomen (mit する)
叩く|叩[たた]く|schlagen, klopfen|彼[かれ]は 子供[こども]のおしりを 叩[たた]いた。|Er gab dem Kind einen Klaps auf den Po.|Verb
噛む|噛[か]む|beißen, kauen|もっとよく 噛[か]みなさい。|Kau besser.|Verb
味噌汁|味噌汁[みそしる]|Misosuppe|私[わたし]は 毎日[まいにち] 味噌汁[みそしる]を 飲[の]みます。|Ich esse jeden Tag Misosuppe.|Nomen
姪|姪[めい]|Nichte|私[わたし]の 姪[めい]は 3才[さんさい]です。|Meine Nichte ist drei Jahre alt.|Nomen
苺|苺[いちご]|Erdbeere|この 苺[いちご]はとても 甘[あま]い。|Diese Erdbeere ist sehr süß.|Nomen
茄子|茄子[なす]|Aubergine|夕飯[ゆうはん]に 茄子[なす]の 天[てん]ぷらを 食[た]べました。|Zum Abendessen habe ich Auberginen-Tempura gegessen.|Nomen
逢う|逢[あ]う|treffen, begegnen|ついに 素晴[すば]らしい 女性[じょせい]に 逢[あ]えた。|Endlich bin ich einer wunderbaren Frau begegnet.|Verb
椅子|椅子[いす]|Stuhl|そのお 年寄[としよ]りは 椅子[いす]に 座[すわ]った。|Der alte Mensch setzte sich auf den Stuhl.|Nomen
痩せる|痩[や]せる|abnehmen, dünn werden|私[わたし]は 少[すこ]し 痩[や]せました。|Ich habe ein bisschen abgenommen.|Verb
箸|箸[はし]|Essstäbchen|箸[はし]を 上手[じょうず]に 使[つか]えるよ。|Ich kann gut mit Stäbchen umgehen.|Nomen
糊|糊[のり]|Kleber, Leim|糊[のり]で 2枚[にまい]の 紙[かみ]を 貼[は]り 合[あ]わせた。|Ich habe zwei Blätter mit Kleber zusammengeklebt.|Nomen
醤油|醤油[しょうゆ]|Sojasoße|もう 少[すこ]し 醤油[しょうゆ]を 足[た]してください。|Geben Sie bitte noch etwas Sojasoße dazu.|Nomen
鋏|鋏[はさみ]|Schere|この 鋏[はさみ]はよく 切[き]れる。|Diese Schere schneidet gut.|Nomen
鞄|鞄[かばん]|Tasche, Aktentasche|その 黒[くろ]い 鞄[かばん]は 僕[ぼく]のです。|Die schwarze Tasche dort gehört mir.|Nomen
顎|顎[あご]|Kiefer, Kinn|顎[あご]が 痛[いた]い。|Mein Kiefer tut weh.|Nomen
飴|飴[あめ]|Bonbon|缶[かん]に 飴[あめ]が 入[はい]っています。|In der Dose sind Bonbons.|Nomen
石鹸|石鹸[せっけん]|Seife|石鹸[せっけん]で 手[て]を 洗[あら]ってください。|Waschen Sie sich bitte die Hände mit Seife.|Nomen
一時|一時[いちじ]|vorübergehend, eine Zeit lang|お 店[みせ]は 一時[いちじ] 休業[きゅうぎょう]になったんだ。|Der Laden wurde vorübergehend geschlossen.|Adverb
月日|月日[がっぴ]|Datum; Zeit (Tage und Monate)|ここに 生年[せいねん] 月日[がっぴ]を 記入[きにゅう]してください。|Tragen Sie hier bitte Ihr Geburtsdatum ein.|Nomen
金もうけ|金[かね]もうけ|Geldverdienen|金[かね]もうけが 彼[かれ]の 趣味[しゅみ]だ。|Geldverdienen ist sein Hobby.|Nomen (mit する)
先に|先[さき]に|vorher, zuerst, voraus|では、 私[わたし]たちは 先[さき]に 出発[しゅっぱつ]します。|Dann brechen wir schon einmal auf.|Adverb
先日|先日[せんじつ]|neulich, vor einigen Tagen|先日[せんじつ]の 件[けん]はどうなりましたか。|Was ist aus der Sache von neulich geworden?|Nomen
今日|今日[こんにち]|heute, heutzutage|今日[こんにち]の 日本[にほん]の 若者[わかもの]は 欧米化[おうべいか]している。|Japans Jugend von heute ist verwestlicht.|Nomen
今ごろ|今[いま]ごろ|um diese Zeit, jetzt (erst)|今[いま]ごろそんなこと 言[い]わないで。|Sag so etwas nicht jetzt erst.|Nomen
ケース|ケース|Hülle, Kasten; Fall|このケースにはCDが50 枚入[まい はい]ります。|In diese Hülle passen 50 CDs.|Nomen
今にも|今[いま]にも|jeden Augenblick|今[いま]にも 雨[あめ]が 降[ふ]りそうですね。|Es sieht aus, als würde es jeden Augenblick regnen.|Adverb
今に|今[いま]に|bald, eines Tages|あなたも 今[いま]に 分[わ]かるでしょう。|Du wirst es auch bald verstehen.|Adverb
行き来|行[い]き 来[き]|Kommen und Gehen, Verkehr miteinander|最近彼[さいきん かれ]のところに 行[い]き 来[き]してないの。|In letzter Zeit gehe ich bei ihm nicht mehr ein und aus.|Nomen (mit する)
行|行[ぎょう]|Zeile|5[ご] 行[ぎょう] 以内[いない]で 答[こた]えを 書[か]いてください。|Schreiben Sie Ihre Antwort bitte in höchstens fünf Zeilen.|Nomen
帰す|帰[かえ]す|nach Hause schicken|学校[がっこう]は 生徒[せいと]たちを 午前中[ごぜんちゅう]に 帰[かえ]したね。|Die Schule hat die Schüler am Vormittag nach Hause geschickt.|Verb
大いに|大[おお]いに|sehr, tüchtig|大[おお]いに 学[まな]び、 大[おお]いに 遊[あそ]びなさい。|Lerne tüchtig und spiele tüchtig.|Adverb
大げさ|大[おお]げさ|übertrieben|彼[かれ]の 話[はなし]は 大[おお]げさだ。|Seine Erzählung ist übertrieben.|Adjektiv
イメージ|イメージ|Image, Vorstellung|彼[かれ]には 清潔[せいけつ]なイメージがあるね。|Er hat ein sauberes Image.|Nomen (mit する)
大水|大水[おおみず]|Hochwasser, Überschwemmung|その 年[とし]、この 地域[ちいき]では 大水[おおみず]がありました。|In jenem Jahr gab es in dieser Gegend Hochwasser.|Nomen
水中|水中[すいちゅう]|im Wasser, unter Wasser|このカメラなら 水中[すいちゅう]の 写真[しゃしん]が 撮[と]れますね。|Mit dieser Kamera kann man Unterwasserfotos machen.|Nomen
小|小[しょう]|klein, Größe S|この 箱[はこ]の 小[しょう]をください。|Geben Sie mir diese Schachtel bitte in Klein.|Nomen
少なくとも|少[すく]なくとも|mindestens, wenigstens|この 仕事[しごと]には 少[すく]なくとも 2週間必要[にしゅうかん ひつよう]でしょう。|Für diese Arbeit braucht man mindestens zwei Wochen.|Adverb
少々|少々[しょうしょう]|ein wenig, Kleinigkeit|少々[しょうしょう]のことは 我慢[がまん]します。|Kleinigkeiten nehme ich hin.|Nomen
上がる|上[あ]がる|fertig werden, abgeschlossen sein|今日[きょう]は 仕事[しごと]が 早[はや]く 上[あ]がったんだ。|Heute war ich früh mit der Arbeit fertig.|
上がる|上[あ]がる|essen, trinken (respektvoll)|冷[さ]めないうちにどうぞお 上[あ]がり 下[くだ]さい。|Bitte greifen Sie zu, solange es warm ist.|Verb
せい|せい|Schuld, Ursache|自分[じぶん]の 失敗[しっぱい]を 他人[たにん]のせいにするな。|Schieb deine Fehler nicht auf andere.|Nomen
上|上[じょう]|das Obere, Beste (Qualitätsstufe)|握[にぎ]り 寿司[ずし]の 上[じょう]を 注文[ちゅうもん]したよ。|Ich habe das Nigiri-Sushi der besten Kategorie bestellt.|Nomen
上|上[かみ]|die Obrigkeit, die da oben|お 上[かみ]は 何[なに]を 考[かんが]えてるんだろうね。|Was sich die da oben wohl denken?|Nomen
下さる|下[くだ]さる|geben (respektvoll)|先生[せんせい]が 手紙[てがみ]を 下[くだ]さいました。|Der Lehrer hat mir einen Brief gegeben.|Verb
下水|下水[げすい]|Abwasser, Kanalisation|その 道[みち]は 今[いま]、 下水[げすい]の 工事[こうじ]をしているよ。|An dieser Straße wird gerade die Kanalisation erneuert.|Nomen
上下|上下[じょうげ]|Oberteil und Unterteil|この 服[ふく]は 上下[じょうげ]セットで 買[か]いました。|Diese Kleidung habe ich als Set aus Ober- und Unterteil gekauft.|Nomen (mit する)
上下|上下[うえした]|oben und unten|彼[かれ]は 上下[うえした]おそろいの 服[ふく]を 着[き]ていますね。|Er trägt Ober- und Unterteil im gleichen Stil.|Nomen
下|下[げ]|unten, untere Stufe|彼女[かのじょ]の 成績[せいせき]は 上[じょう]の 下[げ]です。|Ihre Noten liegen am unteren Rand der oberen Gruppe.|Nomen
左右|左右[さゆう]|links und rechts|左右[さゆう]を 見[み]てから 横断歩道[おうだん ほどう]を 渡[わた]りなさい。|Schau nach links und rechts, bevor du über den Zebrastreifen gehst.|Nomen
いつも|いつも|immer; wie gewöhnlich|彼女[かのじょ]の 様子[ようす]がいつもと 違[ちが]う。|Sie wirkt anders als sonst.|Nomen
四方|四方[しほう]|alle Richtungen, ringsum|火[ひ]が 四方[しほう]に 広[ひろ]がったんだよ。|Das Feuer breitete sich in alle Richtungen aus.|Nomen
方々|方々[かたがた]|Personen, Herrschaften (höflich)|大勢[おおぜい]の 方々[かたがた]にご 出席[しゅっせき]いただきました。|Wir durften viele Gäste begrüßen.|Nomen
大人|大人[おとな]|Erwachsener, erwachsen|あなたもだいぶ 大人[おとな]になったね。|Du bist auch schon ziemlich erwachsen geworden.|Adjektiv
外出|外出[がいしゅつ]|Ausgehen, außer Haus|午後[ごご]は 外出[がいしゅつ]の 予定[よてい]です。|Am Nachmittag bin ich außer Haus.|Nomen (mit する)
内|内[うち]|das Innere, innerhalb|心[こころ]の 内[うち]をお 話[はな]し 下[くだ]さい。|Sagen Sie bitte, was Sie auf dem Herzen haben.|Nomen
週休|週休[しゅうきゅう]|freie Tage pro Woche|うちの 会社[かいしゃ]は 週休[しゅうきゅう] 2日[ふつか]です。|In unserer Firma gibt es zwei freie Tage pro Woche.|Nomen
一体|一体[いったい]|überhaupt, um alles in der Welt|一体[いったい] 何事[なにごと]ですか。|Was um alles in der Welt ist los?|Adverb
きっかけ|きっかけ|Anlass, Auslöser|大学[だいがく]に 通[かよ]うのが 上京[じょうきょう]のきっかけでした。|Der Anlass, nach Tokio zu ziehen, war das Studium.|Nomen
出力|出力[しゅつりょく]|Ausgabe, Leistung (technisch)|このプリンターで 写真[しゃしん]を 出力[しゅつりょく]できます。|Mit diesem Drucker kann man Fotos ausdrucken.|Nomen (mit する)
火力|火力[かりょく]|Heizkraft, Hitze (der Flamme)|火力[かりょく]を 弱[よわ]めないと 肉[にく]がこげるよ。|Wenn du die Hitze nicht reduzierst, brennt das Fleisch an.|Nomen
水力|水力[すいりょく]|Wasserkraft|この 島[しま]は 発電[はつでん]を 水力[すいりょく]に 頼[たよ]っているんだ。|Diese Insel ist bei der Stromerzeugung auf Wasserkraft angewiesen.|Nomen
口げんか|口[くち]げんか|Wortgefecht, Streit|きのう、 弟[おとうと]と 口[くち]げんかしました。|Gestern habe ich mich mit meinem kleinen Bruder gestritten.|Nomen (mit する)
大手|大手[おおて]|Großunternehmen, führende Firma|彼[かれ]は 大手[おおて]のメーカーに 勤[つと]めています。|Er arbeitet bei einem großen Hersteller.|Nomen
足下|足下[あしもと]|zu Füßen, der Boden unter den Füßen|暗[くら]いので 足下[あしもと]に 気[き]を 付[つ]けてください。|Es ist dunkel, achten Sie bitte auf Ihre Schritte.|Nomen
火山|火山[かざん]|Vulkan|島[しま]で 火山[かざん]が 噴火[ふんか]したよ。|Auf der Insel ist ein Vulkan ausgebrochen.|Nomen
すっかり|すっかり|ganz, völlig|買[か]い 物[もの]をすっかり 忘[わす]れていた。|Ich hatte das Einkaufen völlig vergessen.|Adverb
小川|小川[おがわ]|Bach|小川[おがわ]がさらさら 流[なが]れています。|Der Bach plätschert dahin.|Nomen
空中|空中[くうちゅう]|in der Luft|蝶々[ちょうちょう]が 空中[くうちゅう]を 舞[ま]っています。|Schmetterlinge tanzen in der Luft.|Nomen
空ける|空[あ]ける|leeren, frei machen|彼女[かのじょ]はお 年寄[としよ]りのために 席[せき]を 空[あ]けたんだ。|Sie hat ihren Platz für einen alten Menschen frei gemacht.|Verb
空っぽ|空[から]っぽ|leer|僕[ぼく]の 財布[さいふ]は 空[から]っぽだよ。|Mein Portemonnaie ist leer.|な-Adjektiv
空き|空[あ]き|freier Platz, Lücke|部屋[へや]の 空[あ]きはありますか。|Haben Sie noch ein Zimmer frei?|Nomen
空|空[から]|leer, Leere|この 瓶[びん]はもう 空[から]ね。|Diese Flasche ist schon leer.|Nomen
海水|海水[かいすい]|Meerwasser|海水[かいすい]から 塩[しお]を 作[つく]ります。|Aus Meerwasser wird Salz gewonnen.|Nomen
海上|海上[かいじょう]|auf See|海上[かいじょう]で 衝突事故[しょうとつ じこ]が 発生[はっせい]した。|Auf See hat sich eine Kollision ereignet.|Nomen
シリーズ|シリーズ|Serie, Reihe|このシリーズは 50話[ごじゅうわ]もあるそうよ。|Diese Serie soll ganze 50 Folgen haben.|Nomen
水田|水田[すいでん]|Reisfeld (unter Wasser)|窓[まど]の 外[そと]に 水田[すいでん]が 広[ひろ]がっていたよ。|Vor dem Fenster erstreckten sich Reisfelder.|Nomen
森林|森林[しんりん]|Wald, Waldgebiet|世界中[せかいじゅう]で 森林[しんりん]が 失[うしな]われています。|Auf der ganzen Welt gehen Wälder verloren.|Nomen
男らしい|男[おとこ]らしい|männlich, mannhaft|彼[かれ]は 男[おとこ]らしさを 心掛[こころが]けているね。|Er bemüht sich, männlich zu wirken.|Adjektiv
女らしい|女[おんな]らしい|weiblich, feminin|彼女[かのじょ]は 女[おんな]らしい。|Sie ist feminin.|Adjektiv
少女|少女[しょうじょ]|Mädchen|少女[しょうじょ]は 母親[ははおや]の 手[て]を握[にぎ]った。|Das Mädchen hielt die Hand seiner Mutter fest.|Nomen
女子|女子[じょし]|Mädchen, Frau|このクラスの 女子[じょし]は 18人[じゅうはちにん]です。|In dieser Klasse sind 18 Mädchen.|Nomen
好む|好[この]む|mögen, bevorzugen|彼女[かのじょ]は 背[せ]の 高[たか]い 男性[だんせい]を 好[この]みますね。|Sie bevorzugt große Männer.|Verb
エイズ|エイズ|Aids|その 国[くに]ではエイズが 大[おお]きな 社会問題[しゃかい もんだい]ね。|In dem Land ist Aids ein großes gesellschaftliches Problem.|Nomen
好み|好[この]み|Geschmack, Vorliebe|姉[あね]と 私[わたし]は 服[ふく]の 好[この]みが 似[に]ています。|Meine große Schwester und ich haben einen ähnlichen Kleidergeschmack.|Nomen
上達|上達[じょうたつ]|Fortschritt, Verbesserung (im Können)|短[みじか]い 時間[じかん]にずいぶん 上達[じょうたつ]しましたね。|Sie haben in kurzer Zeit große Fortschritte gemacht.|Nomen (mit する)
一家|一家[いっか]|Familie, Haushalt|あの 一家[いっか]は 仲[なか]がいい。|Die Familie dort versteht sich gut.|Nomen
家出|家出[いえで]|Weglaufen von zu Hause|彼[かれ]の 息子[むすこ]が 家出[いえで]したそうよ。|Sein Sohn soll von zu Hause weggelaufen sein.|Nomen (mit する)
大家|大家[おおや]|Vermieter(in)|ここの 大家[おおや]は 近[ちか]くに 住[す]んでいますよ。|Der Vermieter wohnt hier in der Nähe.|Nomen
元来|元来[がんらい]|ursprünglich, von Natur aus|彼[かれ]は 元来[がんらい]、 真面目[まじめ]な 人[ひと]です。|Er ist von Natur aus ein ernsthafter Mensch.|Adverb
元日|元日[がんじつ]|Neujahrstag|元日[がんじつ]には 初詣[はつもう]でに 行[い]きます。|Am Neujahrstag gehe ich zum ersten Schreinbesuch des Jahres.|Nomen
エンジン|エンジン|Motor|車[くるま]のエンジンが 調子悪[ちょうし わる]い。|Der Automotor läuft nicht gut.|Nomen
お中元|お 中元[ちゅうげん]|Sommergeschenk (zur Jahresmitte)|お 中元[ちゅうげん]にビールが 届[とど]きました。|Als Sommergeschenk ist Bier angekommen.|Nomen
天の川|天[あま]の 川[がわ]|Milchstraße|今夜[こんや]は 天[あま]の 川[がわ]が 見[み]えますね。|Heute Nacht sieht man die Milchstraße.|Nomen
気分|気分[きぶん]|Stimmung, Befinden|今日[きょう]は 最高[さいこう]にいい 気分[きぶん]だよ。|Heute fühle ich mich großartig.|Nomen
元気|元気[げんき]|Lebenskraft, Munterkeit|彼女[かのじょ]は 最近[さいきん] 元気[げんき]がないですね。|Sie wirkt in letzter Zeit niedergeschlagen.|Nomen
気体|気体[きたい]|Gas (Aggregatzustand)|水[みず]が 沸騰[ふっとう]して 気体[きたい]になったんだ。|Das Wasser kochte und wurde zu Gas.|Nomen
気力|気力[きりょく]|Willenskraft, Energie|彼[かれ]は 気力[きりょく]にあふれていますね。|Er strotzt vor Energie.|Nomen
大雨|大雨[おおあめ]|starker Regen|各地[かくち]で 大雨[おおあめ]が 降[ふ]っています。|Vielerorts regnet es stark.|Nomen
クラス|クラス|Klasse (Kategorie)|彼[かれ]はビジネスクラスに 乗[の]ったの。|Er ist Businessclass geflogen.|Nomen
小雨|小雨[こさめ]|Nieselregen|小雨[こさめ]なので 傘[かさ]はいりません。|Es nieselt nur, einen Schirm brauche ich nicht.|Nomen
雨天|雨天[うてん]|Regenwetter|試合[しあい]は 雨天[うてん] 中止[ちゅうし]です。|Bei Regen fällt das Spiel aus.|Nomen
大雪|大雪[おおゆき]|starker Schneefall|10年振[じゅうねん ぶ]りの 大雪[おおゆき]です。|Das ist der stärkste Schneefall seit zehn Jahren.|Nomen
青年|青年[せいねん]|junger Mann, Jugendlicher|町[まち]の 青年[せいねん]たちはボランティア 活動[かつどう]をしています。|Die jungen Leute der Stadt engagieren sich ehrenamtlich.|Nomen
青空|青空[あおぞら]|blauer Himmel|雲一[くも ひと]つない 青空[あおぞら]ですね。|Ein blauer Himmel ohne eine einzige Wolke.|Nomen
明日|明日[あす]|morgen (förmlich)|明日[あす]のプレゼンテーションが 心配[しんぱい]だ。|Ich mache mir Sorgen wegen der Präsentation morgen.|Nomen
明ける|明[あ]ける|anbrechen (Tag), zu Ende gehen|もうすぐ 夜[よ]が 明[あ]けるね。|Bald wird es hell.|Verb
明かり|明[あ]かり|Licht, Beleuchtung|部屋[へや]の 明[あ]かりを 点[つ]けましょう。|Machen wir das Licht im Zimmer an.|Nomen
スピード|スピード|Geschwindigkeit, Tempo|カーブを 曲[ま]がるときはスピードを 落[お]としましょう。|Fahr in Kurven langsamer.|Nomen
明け方|明[あ]け 方[がた]|Morgengrauen|明[あ]け 方[がた]に 雨[あめ]が 降[ふ]り 始[はじ]めましたね。|Im Morgengrauen fing es an zu regnen.|Nomen
一昨年|一昨年[いっさくねん]|vorletztes Jahr|大学卒業[だいがく そつぎょう]は 一昨年[いっさくねん]です。|Ich habe vorletztes Jahr die Universität abgeschlossen.|Nomen
一昨日|一昨日[いっさくじつ]|vorgestern|一昨日[いっさくじつ]、お 電話[でんわ]を 差[さ]し 上[あ]げました。|Ich habe Sie vorgestern angerufen.|Nomen
昨日|昨日[さくじつ]|gestern|昨日[さくじつ]は 雨[あめ]でしたね。|Gestern hat es geregnet.|Nomen
向上|向上[こうじょう]|Verbesserung, Steigerung|全員[ぜんいん]で 技術[ぎじゅつ]の 向上[こうじょう]に 努[つと]めています。|Wir bemühen uns alle, unser Können zu verbessern.|Nomen (mit する)
一向に|一向[いっこう]に|überhaupt (nicht)|彼[かれ]は 一向[いっこう]に 興味[きょうみ]を 示[しめ]さないの。|Er zeigt überhaupt kein Interesse.|Adverb
開き|開[あ]き|Öffnung; Abstand, Unterschied|このブラウスは 後[うし]ろ 開[あ]きです。|Diese Bluse wird hinten geöffnet.|Nomen
いかに|いかに|wie, wie sehr|彼[かれ]に 会[あ]えば、 彼[かれ]がいかに 良[い]い 人[ひと]か 分[わ]かります。|Wenn du ihn triffst, merkst du, was für ein guter Mensch er ist.|Adverb
聞かす|聞[き]かす|hören lassen, erzählen, vorlesen|子供[こども]に 昔話[むかしばなし]を 聞[き]かせてあげたの。|Ich habe den Kindern ein Märchen erzählt.|Verb
聞き手|聞[き]き 手[て]|Zuhörer(in)|彼女[かのじょ]はいつも 聞[き]き 手[て]にまわるね。|Sie übernimmt immer die Rolle der Zuhörerin.|Nomen
客間|客間[きゃくま]|Gästezimmer, Empfangszimmer|お 客[きゃく]さんを 客間[きゃくま]にお 通[とお]ししたわよ。|Ich habe den Gast ins Empfangszimmer geführt.|Nomen
間|間[かん]|Zeitraum, während|その 間[かん]に 彼[かれ]は 居[い]なくなっていました。|In der Zwischenzeit war er verschwunden.|Nomen
空間|空間[くうかん]|Raum, Platz|狭[せま]い 空間[くうかん]に 物[もの]がたくさん 置[お]いてあるね。|Auf engem Raum stehen viele Sachen.|Nomen
円高|円高[えんだか]|starker Yen, Yen-Aufwertung|円高[えんだか]の 影響[えいきょう]で 海外製品[かいがい せいひん]が 安[やす]く 買[か]えますよ。|Durch den starken Yen kann man ausländische Waren günstig kaufen.|Nomen
最高|最高[さいこう]|höchste(r, s), beste(r, s); großartig|これまでで 最高[さいこう]の 結果[けっか]が 出[で]たよ。|Das ist das beste Ergebnis bisher.|Nomen
スタート|スタート|Start|マラソンは 雨[あめ]の 中[なか]でスタートしたの。|Der Marathon wurde im Regen gestartet.|Nomen (mit する)
最低|最低[さいてい]|niedrigste(r, s), schlechteste(r, s)|これは 今[いま]までで 最低[さいてい]の 記録[きろく]だ。|Das ist der schlechteste Wert bisher.|Nomen
最小|最小[さいしょう]|kleinste(r, s), Minimum|これは 世界[せかい]で 最小[さいしょう]のコンピューターです。|Das ist der kleinste Computer der Welt.|Nomen
最上|最上[さいじょう]|beste(r, s), höchste(r, s)|このホテルでは 最上[さいじょう]のサービスが 受[う]けられます。|In diesem Hotel bekommt man den besten Service.|Nomen
最中|最中[さいちゅう]|mitten in, gerade während|夕食[ゆうしょく]の 最中[さいちゅう]に 電話[でんわ]がかかってきたの。|Mitten im Abendessen kam ein Anruf.|Nomen
初日|初日[しょにち]|erster Tag, Eröffnungstag|会議[かいぎ]の 初日[しょにち]に 市長[しちょう]がスピーチをしたよ。|Am ersten Tag der Konferenz hielt der Bürgermeister eine Rede.|Nomen
お前|お 前[まえ]|du (rau, vertraut)|お 前[まえ]の 言[い]うことは 信[しん]じられない。|Was du sagst, kann ich nicht glauben.|Nomen
前後|前後[ぜんご]|vor und nach; ungefähr|そちらに 着[つ]くのは 6時[ろくじ] 前後[ぜんご]です。|Ich komme gegen sechs Uhr bei Ihnen an.|Nomen
後方|後方[こうほう]|hinten, rückwärtiger Teil|彼[かれ]は 後方[こうほう]の 座席[ざせき]に 着[つ]いたの。|Er setzte sich auf einen Platz weiter hinten.|Nomen
セット|セット|Set, Satz|このメニューはサラダと 飲[の]み 物[もの]がセットになっています。|Bei diesem Menü sind Salat und Getränk dabei.|Nomen (mit する)
後ろ向き|後[うし]ろ 向[む]き|rückwärts, nach hinten gewandt|彼[かれ]は 車[くるま]を 後[うし]ろ 向[む]きに 駐車[ちゅうしゃ]したの。|Er hat das Auto rückwärts eingeparkt.|Nomen
明々後日|明々後日[しあさって]|in drei Tagen (überübermorgen)|会議[かいぎ]は 明々後日[しあさって]に 延期[えんき]された。|Die Besprechung wurde auf den Tag nach übermorgen verschoben.|Nomen
後半|後半[こうはん]|zweite Hälfte|ドラマの 後半[こうはん]は 来週放送[らいしゅう ほうそう]されるんだ。|Der zweite Teil der Serie wird nächste Woche gesendet.|Nomen
朝日|朝日[あさひ]|Morgensonne|朝日[あさひ]が 昇[のぼ]りましたよ。|Die Morgensonne ist aufgegangen.|Nomen
昨晩|昨晩[さくばん]|gestern Abend|昨晩[さくばん]の 雪[ゆき]がまだ 庭[にわ]に 残[のこ]っている。|Der Schnee von gestern Abend liegt noch im Garten.|Nomen
昨夜|昨夜[さくや]|gestern Abend, letzte Nacht|昨夜[さくや]はテレビで 喜劇[きげき]を 見[み]たよ。|Gestern Abend habe ich im Fernsehen eine Komödie gesehen.|Nomen
食う|食[く]う|essen, fressen (derb)|腹一杯[はらいっぱい] 食[く]った。|Ich habe mich satt gegessen.|Verb
アップ|アップ|Nahaufnahme; Steigerung|写真[しゃしん]をアップで 撮[と]ろう。|Machen wir das Foto als Nahaufnahme.|Nomen (mit する)
外食|外食[がいしょく]|auswärts essen|たまには 外食[がいしょく]しましょう。|Gehen wir ab und zu mal auswärts essen.|Nomen (mit する)
食パン|食[しょく]パン|Toastbrot, Kastenweißbrot|朝食[ちょうしょく]に 食[しょく]パンを 2枚食[にまい た]べました。|Zum Frühstück habe ich zwei Scheiben Brot gegessen.|Nomen
一見|一見[いっけん]|auf den ersten Blick|彼[かれ]は 一見[いっけん]サラリーマン 風[ふう]ですね。|Auf den ersten Blick wirkt er wie ein Angestellter.|Adverb
言い出す|言[い]い 出[だ]す|zu sprechen anfangen, vorbringen|突然何[とつぜん なに]を 言[い]い 出[だ]すのかと 思[おも]った。|Ich fragte mich, womit du da plötzlich ankommst.|Verb
外来語|外来語[がいらいご]|Lehnwort, Fremdwort|外来語[がいらいご]は 一般[いっぱん]にカタカナで 書[か]かれます。|Lehnwörter werden in der Regel in Katakana geschrieben.|Nomen
英文|英文[えいぶん]|englischer Text|彼女[かのじょ]は 英文[えいぶん]の 手紙[てがみ]を 書[か]きました。|Sie hat einen Brief auf Englisch geschrieben.|Nomen
漢語|漢語[かんご]|sinojapanisches Wort|漢語[かんご]はもともと 外来語[がいらいご]です。|Sinojapanische Wörter waren ursprünglich Lehnwörter.|Nomen
エネルギー|エネルギー|Energie|若者[わかもの]たちはエネルギーにあふれていますね。|Die jungen Leute stecken voller Energie.|Nomen
下書き|下書[したが]き|Entwurf, Rohfassung|今[いま]、 論文[ろんぶん]の 下書[したが]きをしているところです。|Ich schreibe gerade an der Rohfassung meiner Arbeit.|Nomen (mit する)
後書き|後書[あとが]き|Nachwort|後書[あとが]きをよく 読[よ]んで 下[くだ]さい。|Lesen Sie bitte das Nachwort aufmerksam.|Nomen
覚え|覚[おぼ]え|Erinnerung, Auffassungsgabe|この 子[こ]は 覚[おぼ]えが 早[はや]いね。|Dieses Kind lernt schnell.|Nomen
開会|開会[かいかい]|Eröffnung (einer Veranstaltung)|運動会[うんどうかい]は 9時[くじ]に 開会[かいかい]します。|Das Sportfest wird um neun Uhr eröffnet.|Nomen (mit する)
会|会[かい]|Treffen, Verein, Versammlung|会[かい]は 午後9時[ごご くじ]に 終[お]わりました。|Das Treffen endete um 21 Uhr.|Nomen
合わせる|合[あ]わせる|anpassen, zusammenfügen|日時[にちじ]はご 都合[つごう]に 合[あ]わせます。|Beim Termin richte ich mich nach Ihnen.|Verb
合わす|合[あ]わす|zusammenfügen, mischen|赤[あか]に 黄色[きいろ]を 合[あ]わすと 何色[なにいろ]になりますか。|Welche Farbe ergibt sich, wenn man Rot mit Gelb mischt?|Verb
社会人|社会人[しゃかいじん]|Berufstätige(r), Mitglied der Gesellschaft|この 春[はる]に 彼[かれ]は 社会人[しゃかいじん]になったよ。|Er ist diesen Frühling ins Berufsleben eingetreten.|Nomen
かえって|かえって|im Gegenteil, eher noch|そんなことをしたら、かえってよくないよ。|Wenn du das tust, wird es eher noch schlimmer.|Adverb
会員|会員[かいいん]|Mitglied|彼女[かのじょ]はクラブの 会員[かいいん]です。|Sie ist Mitglied des Clubs.|Nomen
一員|一員[いちいん]|ein Mitglied, Angehörige(r)|彼[かれ]は 野球部[やきゅうぶ]の 一員[いちいん]です。|Er gehört zur Baseballmannschaft.|Nomen
仕上げ|仕上[しあ]げ|Fertigstellung, letzter Schliff|彼[かれ]は 論文[ろんぶん]の 仕上[しあ]げに 入[はい]ったの。|Er hat mit dem letzten Schliff an seiner Arbeit begonnen.|Nomen (mit する)
仕上げる|仕上[しあ]げる|fertigstellen|彼[かれ]はやっと 報告書[ほうこくしょ]を 仕上[しあ]げたよ。|Er hat endlich den Bericht fertiggestellt.|Verb
人事|人事[じんじ]|Personalwesen|彼[かれ]は 人事[じんじ]を 担当[たんとう]しているんだ。|Er ist für das Personal zuständig.|Nomen
行事|行事[ぎょうじ]|Veranstaltung, Ereignis|今日[きょう]は 学校[がっこう]で 行事[ぎょうじ]がありました。|Heute gab es in der Schule eine Veranstaltung.|Nomen
事|事[こと]|Sache, Angelegenheit|そんな 事[こと]をしてはいけません。|So etwas darf man nicht tun.|Nomen
コンクリート|コンクリート|Beton|コンクリートにひびが 入[はい]っていますね。|Der Beton hat Risse.|Nomen
家事|家事[かじ]|Hausarbeit|母[はは]は 毎日[まいにち]てきぱきと 家事[かじ]をしているよ。|Meine Mutter erledigt jeden Tag flink die Hausarbeit.|Nomen
人工|人工[じんこう]|künstlich|これは 人工[じんこう]の 湖[みずうみ]です。|Das ist ein künstlicher See.|Nomen
会場|会場[かいじょう]|Veranstaltungsort, Saal|会場[かいじょう]は 人[ひと]で 一杯[いっぱい]になりました。|Der Saal war voller Menschen.|Nomen
出場|出場[しゅつじょう]|Teilnahme (an einem Wettbewerb)|今日[きょう]は 8[はち]チームが 出場[しゅつじょう]しました。|Heute sind acht Mannschaften angetreten.|Nomen (mit する)
車内|車内[しゃない]|im Wagen, im Zug|車内[しゃない]に 忘[わす]れ 物[もの]があったよ。|Im Wagen ist etwas liegen geblieben.|Nomen
下車|下車[げしゃ]|Aussteigen|景色[けしき]が 良[よ]かったので 途中[とちゅう] 下車[げしゃ]したよ。|Weil die Landschaft schön war, bin ich unterwegs ausgestiegen.|Nomen (mit する)
駅前|駅前[えきまえ]|vor dem Bahnhof, Bahnhofsvorplatz|駅前[えきまえ]に 交番[こうばん]が 有[あ]ります。|Vor dem Bahnhof gibt es eine Polizeiwache.|Nomen
いよいよ|いよいよ|endlich, nun wirklich; immer mehr|明日[あす]はいよいよ 出発[しゅっぱつ]の 日[ひ]です。|Morgen ist endlich der Tag der Abreise.|Adverb
外交|外交[がいこう]|Diplomatie, Außenpolitik|政府[せいふ]は 外交[がいこう]に 力[ちから]を 入[い]れているの。|Die Regierung legt großen Wert auf die Außenpolitik.|Nomen
交わす|交[か]わす|austauschen, wechseln|彼[かれ]は 私[わたし]と 再会[さいかい]の 約束[やくそく]を 交[か]わした。|Er und ich haben uns ein Wiedersehen versprochen.|Verb
交通|交通[こうつう]|Verkehr|ここは 交通[こうつう]の 便[べん]がよいですね。|Hier ist die Verkehrsanbindung gut.|Nomen (mit する)
大通り|大通[おおどお]り|Hauptstraße|大通[おおどお]りでパレードが 始[はじ]まるよ。|Auf der Hauptstraße beginnt gleich der Umzug.|Nomen
書道|書道[しょどう]|Kalligraphie|書道[しょどう]をすると 姿勢[しせい]も 良[よ]くなります。|Durch Kalligraphie verbessert sich auch die Haltung.|Nomen
十字路|十字路[じゅうじろ]|Kreuzung|十字路[じゅうじろ]で 車[くるま]とバイクが 衝突[しょうとつ]したぞ。|An der Kreuzung sind ein Auto und ein Motorrad zusammengestoßen.|Nomen
空き地|空[あ]き 地[ち]|unbebautes Grundstück|空[あ]き 地[ち]で 工事[こうじ]が 始[はじ]まった。|Auf dem unbebauten Grundstück haben Bauarbeiten begonnen.|Nomen
オリンピック|オリンピック|Olympische Spiele|オリンピックは 4年[よねん]に 1度開催[いちど かいさい]されます。|Die Olympischen Spiele finden alle vier Jahre statt.|Nomen
図|図[ず]|Abbildung, Zeichnung, Plan|図[ず]を 描[か]いて 説明[せつめい]しましょう。|Ich zeichne eine Skizze und erkläre es daran.|Nomen
合図|合図[あいず]|Zeichen, Signal|車掌[しゃしょう]が 発車[はっしゃ]の 合図[あいず]をしたよ。|Der Schaffner hat das Abfahrtssignal gegeben.|Nomen (mit する)
行き止まり|行[い]き 止[ど]まり|Sackgasse|ここから 先[さき]は 行[い]き 止[ど]まりです。|Ab hier ist es eine Sackgasse.|Nomen
初歩|初歩[しょほ]|Anfangsgründe, erste Schritte|英語[えいご]を 初歩[しょほ]から 勉強[べんきょう]しています。|Ich lerne Englisch von Grund auf.|Nomen
高度|高度[こうど]|hochentwickelt; große Höhe|高度[こうど]な 技術[ぎじゅつ]を 持[も]つ 人材[じんざい]を 集[あつ]めました。|Wir haben Fachkräfte mit hochentwickeltem Können versammelt.|な-Adjektiv
一度に|一度[いちど]に|auf einmal, gleichzeitig|皆[みんな]の 顔[かお]と 名前[なまえ]を 一度[いちど]には 覚[おぼ]えられません。|Ich kann mir nicht alle Gesichter und Namen auf einmal merken.|Adverb
遠足|遠足[えんそく]|Ausflug (Schule)|明日[あす]は 遠足[えんそく]で 動物園[どうぶつえん]に 行[い]きます。|Morgen machen wir einen Ausflug in den Zoo.|Nomen
駅長|駅長[えきちょう]|Bahnhofsvorsteher(in)|彼[かれ]は 駅長[えきちょう]です。|Er ist Bahnhofsvorsteher.|Nomen
ストップ|ストップ|Stopp, Halt|ここでいったんストップしてください。|Halten Sie hier bitte kurz an.|Nomen (mit する)
全員|全員[ぜんいん]|alle Mitglieder, alle|チーム 全員[ぜんいん]に 名札[なふだ]が 配[くば]られました。|Alle im Team bekamen Namensschilder.|Nomen
全て|全[すべ]て|alles, sämtlich|彼[かれ]に 全[すべ]てのことを 伝[つた]えた。|Ich habe ihm alles erzählt.|Adverb
外部|外部[がいぶ]|Außenseite, außerhalb, Außenstehende|これは 外部[がいぶ]には 秘密[ひみつ]です。|Nach außen ist das geheim.|Nomen
一部分|一部分[いちぶぶん]|ein Teil, Teilstück|僕[ぼく]が 知[し]っているのは 一部分[いちぶぶん]に 過[す]ぎない。|Was ich weiß, ist nur ein Teil davon.|Nomen
国家|国家[こっか]|Staat, Nation|首相[しゅしょう]は 国家[こっか]のリーダーだ。|Der Premierminister ist das Oberhaupt des Staates.|Nomen
国々|国々[くにぐに]|Länder, Nationen|そのマラソン 大会[たいかい]にはたくさんの 国々[くにぐに]から 選手[せんしゅ]が 集[あつ]まったよ。|Zu dem Marathon kamen Sportler aus vielen Ländern.|Nomen
国外|国外[こくがい]|außer Landes, Ausland|犯人[はんにん]は 国外[こくがい]に 逃[に]げたようです。|Der Täter ist offenbar ins Ausland geflohen.|Nomen
きちんと|きちんと|ordentlich, genau|問題[もんだい]についてきちんと 話[はな]し 合[あ]ったよ。|Wir haben das Problem gründlich besprochen.|Adverb
出国|出国[しゅっこく]|Ausreise|1週間後[いっしゅうかん ご]に 出国[しゅっこく]します。|Ich reise in einer Woche aus.|Nomen (mit する)
国土|国土[こくど]|Staatsgebiet, Land|わが 国[くに]の 国土[こくど]は 70%[ななじゅっぱーせんと]が 森林[しんりん]です。|70 Prozent unseres Landes sind Wald.|Nomen
国語|国語[こくご]|Landessprache; Japanisch (Schulfach)|今日[きょう]の 1時間目[いちじかんめ]は 国語[こくご]です。|In der ersten Stunde haben wir heute Japanisch.|Nomen
国交|国交[こっこう]|diplomatische Beziehungen|あの 国[くに]とは 国交[こっこう]がない。|Mit jenem Land bestehen keine diplomatischen Beziehungen.|Nomen
国道|国道[こくどう]|Nationalstraße|この 道[みち]をまっすぐ 進[すす]むと 国道[こくどう]に 出[で]ます。|Wenn man diese Straße geradeaus fährt, kommt man auf die Nationalstraße.|Nomen
世間|世間[せけん]|die Welt, die Leute, Öffentlichkeit|世間[せけん]の 反応[はんのう]は 冷[つめ]たかったよ。|Die Reaktion der Öffentlichkeit war kühl.|Nomen
世話|世話[せわ]|Pflege, Betreuung, Fürsorge|旅行[りょこう]の 間[あいだ]、 犬[いぬ]の 世話[せわ]をしてください。|Kümmern Sie sich bitte während der Reise um den Hund.|Nomen (mit する)
クラブ|クラブ|Club, Verein, AG|夏休[なつやす]みにはクラブの 合宿[がっしゅく]に 参加[さんか]します。|In den Sommerferien nehme ich am Trainingslager meines Clubs teil.|Nomen
出世|出世[しゅっせ]|beruflicher Aufstieg, Karriere|彼[かれ]は 出世[しゅっせ]するタイプだな。|Er ist der Typ, der Karriere macht.|Nomen (mit する)
青白い|青白[あおじろ]い|blass, bleich|彼女[かのじょ]は 青白[あおじろ]い 顔[かお]をしているね。|Sie sieht blass aus.|Adjektiv
黒字|黒字[くろじ]|schwarze Zahlen, Überschuss|わが 社[しゃ]は 今年度[こんねんど]、 黒字[くろじ]となりました。|Unsere Firma schreibt dieses Geschäftsjahr schwarze Zahlen.|Nomen
赤道|赤道[せきどう]|Äquator|赤道[せきどう]に 沿[そ]って 旅[たび]をしました。|Ich bin am Äquator entlang gereist.|Nomen
赤字|赤字[あかじ]|rote Zahlen, Defizit|私[わたし]たちの 会社[かいしゃ]は 今月[こんげつ]は 赤字[あかじ]よ。|Unsere Firma schreibt diesen Monat rote Zahlen.|Nomen
国鉄|国鉄[こくてつ]|Japanische Staatsbahn (bis 1987)|父[ちち]は 以前[いぜん]、 国鉄[こくてつ]に 勤[つと]めていました。|Mein Vater hat früher bei der Staatsbahn gearbeitet.|Nomen
私鉄|私鉄[してつ]|Privatbahn|私[わたし]は 私鉄[してつ]の 職員[しょくいん]です。|Ich bin Angestellter einer Privatbahn.|Nomen
家屋|家屋[かおく]|Haus, Gebäude|私[わたし]は 木造[もくぞう]の 家屋[かおく]が 好[す]きです。|Ich mag Holzhäuser.|Nomen
じっと|じっと|still, regungslos; unverwandt|あの 生徒[せいと]はじっと 先生[せんせい]の 話[はなし]を 聞[き]いていたね。|Der Schüler hörte dem Lehrer aufmerksam zu.|Adverb
屋上|屋上[おくじょう]|Dach, Dachterrasse|屋上[おくじょう]から 富士山[ふじさん]が 見[み]えました。|Vom Dach aus konnte man den Fuji sehen.|Nomen
味わう|味[あじ]わう|schmecken, genießen, kosten|母[はは]の 手料理[てりょうり]をゆっくり 味[あじ]わいました。|Ich habe das selbst gekochte Essen meiner Mutter in Ruhe genossen.|Verb
地味|地味[じみ]|schlicht, unauffällig|今日[きょう]、 彼女[かのじょ]は 地味[じみ]な 服装[ふくそう]をしていますね。|Sie ist heute schlicht gekleidet.|な-Adjektiv
月末|月末[げつまつ]|Monatsende|月末[げつまつ]までに 申込書[もうしこみしょ]を 送[おく]ってください。|Schicken Sie das Anmeldeformular bitte bis zum Monatsende.|Nomen
末っ子|末[すえ]っ 子[こ]|jüngstes Kind|彼[かれ]は 5人兄弟[ごにん きょうだい]の 末[すえ]っ 子[こ]です。|Er ist das jüngste von fünf Geschwistern.|Nomen
末|末[すえ]|Ende; nach, am Ende von|長[なが]い 話合[はなしあ]いの 末[すえ]、やっと 同意[どうい]に 至[いた]った。|Nach langen Gesprächen kam es endlich zu einer Einigung.|Nomen
飲料水|飲料水[いんりょうすい]|Trinkwasser|被災地[ひさいち]では 飲料水[いんりょうすい]が 不足[ふそく]しているの。|Im Katastrophengebiet fehlt es an Trinkwasser.|Nomen
コンサート|コンサート|Konzert|友達[ともだち]とジャズのコンサートに 行[い]きました。|Ich war mit Freunden auf einem Jazzkonzert.|Nomen
食料|食料[しょくりょう]|Lebensmittel, Proviant|食料[しょくりょう]はこの 箱[はこ]に 入[はい]っています。|Die Lebensmittel sind in dieser Kiste.|Nomen
見解|見解[けんかい]|Ansicht, Auffassung|あなたの 見解[けんかい]を 聞[き]かせてください。|Sagen Sie mir bitte Ihre Ansicht.|Nomen
有りのまま|有[あ]りのまま|so wie es ist, ungeschminkt|有[あ]りのままを 話[はな]して 下[くだ]さい。|Erzählen Sie es bitte so, wie es war.|な-Adjektiv
作家|作家[さっか]|Schriftsteller(in)|彼女[かのじょ]は 有名[ゆうめい]な 作家[さっか]です。|Sie ist eine bekannte Schriftstellerin.|Nomen
使用|使用[しよう]|Benutzung, Verwendung|この 製品[せいひん]を 使用[しよう]する 前[まえ]に、 説明書[せつめいしょ]をお 読[よ]みください。|Lesen Sie bitte die Anleitung, bevor Sie dieses Produkt benutzen.|Nomen (mit する)
作用|作用[さよう]|Wirkung, Einwirkung|この 薬[くすり]は 神経[しんけい]に 作用[さよう]します。|Dieses Medikament wirkt auf die Nerven.|Nomen (mit する)
使用人|使用人[しようにん]|Hausangestellte(r), Bedienstete(r)|彼[かれ]は 使用人[しようにん]を 首[くび]にしたよ。|Er hat den Hausangestellten entlassen.|Nomen
いけない|いけない|nicht gut; nicht dürfen|勉強[べんきょう]を 怠[なま]けてはいけないよ。|Du darfst das Lernen nicht vernachlässigen.|Adjektiv
私用|私用[しよう]|private Angelegenheit, Privatgebrauch|私用[しよう]で 出[で]かけなければなりません。|Ich muss wegen einer privaten Angelegenheit weg.|Nomen
会費|会費[かいひ]|Mitgliedsbeitrag, Teilnahmegebühr|会費[かいひ]が 少[すこ]し 高[たか]いね。|Der Beitrag ist etwas hoch.|Nomen
国費|国費[こくひ]|Staatskosten|彼[かれ]は 国費[こくひ]で 留学[りゅうがく]しています。|Er studiert auf Staatskosten im Ausland.|Nomen
食費|食費[しょくひ]|Kosten für Essen|男[おとこ]の 子[こ]が 3人[さんにん]もいるので 食費[しょくひ]がかさみます。|Mit drei Jungen gehen die Ausgaben für Essen ins Geld.|Nomen
私費|私費[しひ]|eigene Kosten|彼[かれ]は 私費[しひ]で 留学[りゅうがく]したんだ。|Er hat auf eigene Kosten im Ausland studiert.|Nomen
消費|消費[しょうひ]|Konsum, Verbrauch|日本[にっぽん]は 消費[しょうひ] 大国[たいこく]といわれています。|Japan gilt als große Konsumnation.|Nomen (mit する)
消火|消火[しょうか]|Feuerlöschen|火事[かじ]は 無事[ぶじ] 消火[しょうか]されました。|Der Brand wurde erfolgreich gelöscht.|Nomen (mit する)
売り上げ|売[う]り 上[あ]げ|Umsatz, Erlös|この 会社[かいしゃ]の 売[う]り 上[あ]げは 昨年[さくねん]の 2倍[に ばい]ね。|Der Umsatz dieser Firma ist doppelt so hoch wie im Vorjahr.|Nomen
あらかじめ|あらかじめ|im Voraus, vorher|あらかじめ 必要[ひつよう]な 物[もの]を 書[か]き 出[だ]して 下[くだ]さい。|Schreiben Sie bitte vorher auf, was Sie brauchen.|Adverb
売り出す|売[う]り 出[だ]す|auf den Markt bringen, zum Verkauf anbieten|新[あたら]しい 車[くるま]が 売[う]り 出[だ]された。|Ein neues Auto ist auf den Markt gekommen.|Verb
書店|書店[しょてん]|Buchhandlung|駅前[えきまえ]に 新[あたら]しい 書店[しょてん]ができました。|Vor dem Bahnhof hat eine neue Buchhandlung eröffnet.|Nomen
開店|開店[かいてん]|Ladenöffnung, Geschäftseröffnung|デパートは 10時[じゅうじ]に 開店[かいてん]しますよ。|Das Kaufhaus öffnet um zehn Uhr.|Nomen (mit する)
小売店|小売店[こうりてん]|Einzelhandelsgeschäft|この 商品[しょうひん]は 小売店[こうりてん]でも 買[か]えます。|Dieses Produkt gibt es auch im Einzelhandel.|Nomen
商社|商社[しょうしゃ]|Handelsfirma|兄[あに]は 商社[しょうしゃ]に 勤[つと]めています。|Mein großer Bruder arbeitet bei einer Handelsfirma.|Nomen
商店|商店[しょうてん]|Laden, Geschäft|この 通[とお]りには 商店[しょうてん]が 多[おお]いね。|In dieser Straße gibt es viele Geschäfte.|Nomen
商売|商売[しょうばい]|Geschäft, Handel, Gewerbe|彼[かれ]の 商売[しょうばい]は 儲[もう]かっているな。|Sein Geschäft wirft Gewinn ab.|Nomen (mit する)
しばしば|しばしば|oft, häufig|課長[かちょう]はしばしば 出張[しゅっちょう]します。|Der Abteilungsleiter ist häufig auf Dienstreise.|Adverb
商人|商人[しょうにん]|Kaufmann, Händler(in)|商人[しょうにん]は 数字[すうじ]に 強[つよ]いね。|Kaufleute können gut mit Zahlen umgehen.|Nomen
食品|食品[しょくひん]|Lebensmittel|食品[しょくひん]は 日曜日[にちようび]にまとめて 買[か]います。|Lebensmittel kaufe ich sonntags auf Vorrat.|Nomen
品|品[しな]|Ware, Artikel; Qualität|そちらの 品[しな]は 半額[はんがく]になっています。|Die Ware dort ist um die Hälfte reduziert.|Nomen
上品|上品[じょうひん]|elegant, vornehm|このドレスはとても 上品[じょうひん]なデザインですね。|Dieses Kleid hat ein sehr elegantes Design.|な-Adjektiv
下品|下品[げひん]|vulgär, ordinär|彼女[かのじょ]の 下品[げひん]なふるまいには 我慢[がまん]できない。|Ihr ordinäres Benehmen kann ich nicht ertragen.|Adjektiv
手段|手段[しゅだん]|Mittel, Weg, Maßnahme|彼[かれ]は 目的[もくてき]のためには 手段[しゅだん]を 選[えら]ばなかったわね。|Für sein Ziel war ihm jedes Mittel recht.|Nomen
一段と|一段[いちだん]と|noch mehr, um eine Stufe|物価[ぶっか]は 一段[いちだん]と 上昇[じょうしょう]しそうだね。|Die Preise werden wohl noch weiter steigen.|Adverb
ショック|ショック|Schock|彼女[かのじょ]はショックで 口[くち]もきけなかったわ。|Sie brachte vor Schock kein Wort heraus.|な-Adjektiv
値|値[あたい]|Wert, Preis|x[えっくす]の 値[あたい]を 求[もと]めなさい。|Bestimme den Wert von x.|Nomen
値する|値[あたい]する|wert sein, verdienen|その 絵[え]は 一見[いっけん]に 値[あたい]しますよ。|Dieses Bild ist einen Blick wert.|Verb
価値|価値[かち]|Wert|とても 価値[かち]のある 話[はなし]を 聞[き]いたよ。|Ich habe etwas sehr Wertvolles erfahren.|Nomen
高価|高価[こうか]|teuer, kostspielig|彼女[かのじょ]は 高価[こうか]な 宝石[ほうせき]を 持[も]っているわ。|Sie besitzt teuren Schmuck.|な-Adjektiv
人格|人格[じんかく]|Charakter, Persönlichkeit|私[わたし]は 彼[かれ]の 人格[じんかく]を 尊敬[そんけい]しています。|Ich achte seinen Charakter.|Nomen
格好|格好[かっこう]|Aussehen, Erscheinung, Form|格好[かっこう]のいい 青年[せいねん]に 会[あ]ったよ。|Ich habe einen gut aussehenden jungen Mann getroffen.|Nomen (mit する)
青春|青春[せいしゅん]|Jugend(zeit)|この 曲[きょく]を 聞[き]くと 青春[せいしゅん]の 頃[ころ]を 思[おも]い 出[だ]します。|Wenn ich dieses Lied höre, erinnere ich mich an meine Jugend.|Nomen
アンテナ|アンテナ|Antenne|屋上[おくじょう]にアンテナが 立[た]っていますね。|Auf dem Dach steht eine Antenne.|Nomen
春分|春分[しゅんぶん]|Frühlings-Tagundnachtgleiche|春分[しゅんぶん]の 日[ひ]は 毎年3月20日頃[まいとし さんがつ はつかごろ]です。|Der Tag der Frühlings-Tagundnachtgleiche ist jedes Jahr um den 20. März.|Nomen
初夏|初夏[しょか]|Frühsommer|初夏[しょか]の 高原[こうげん]は 気持[きも]ちがいいですね。|Im Frühsommer ist es im Hochland angenehm.|Nomen
秋分|秋分[しゅうぶん]|Herbst-Tagundnachtgleiche|秋分[しゅうぶん]の 日[ひ]は 毎年9月23日頃[まいとし くがつ にじゅうさんにちごろ]です。|Der Tag der Herbst-Tagundnachtgleiche ist jedes Jahr um den 23. September.|Nomen
春夏秋冬|春夏秋冬[しゅんかしゅうとう]|die vier Jahreszeiten, das ganze Jahr|春夏秋冬[しゅんかしゅうとう]の 移[うつ]り 変[か]わりを 見[み]るのが 大好[だいす]きです。|Ich liebe es, den Wechsel der Jahreszeiten zu beobachten.|Nomen
夏季|夏季[かき]|Sommer, Sommersaison|夏季[かき] 講習[こうしゅう]に 申[もう]し 込[こ]みした？|Hast du dich für den Sommerkurs angemeldet?|Nomen
寒気|寒気[さむけ]|Frösteln, Schüttelfrost|何[なん]だか 寒気[さむけ]がします。|Irgendwie fröstelt es mich.|Nomen
暖か|暖[あたた]か|warm, mild|最近[さいきん]は 暖[あたた]かです。|In letzter Zeit ist es warm.|Adjektiv
高温|高温[こうおん]|hohe Temperatur|金属[きんぞく]は 高温[こうおん]で 溶[と]かします。|Metall wird bei hoher Temperatur geschmolzen.|Nomen
あえて|あえて|bewusst, es wagen|彼[かれ]はあえて 危険[きけん]を 冒[おか]したの。|Er ist das Risiko bewusst eingegangen.|Adverb
温暖|温暖[おんだん]|mild, warm (Klima)|この 地方[ちほう]は 温暖[おんだん]で 暮[く]らしやすいな。|Diese Gegend ist mild, hier lebt es sich angenehm.|な-Adjektiv
北風|北風[きたかぜ]|Nordwind|北風[きたかぜ]が 冷[つめ]たいです。|Der Nordwind ist kalt.|Nomen
秋風|秋風[あきかぜ]|Herbstwind|秋風[あきかぜ]が 気持[きも]ちいいね。|Der Herbstwind ist angenehm.|Nomen
情熱|情熱[じょうねつ]|Leidenschaft|父[ちち]は 情熱[じょうねつ]を 持[も]って 仕事[しごと]に 打[う]ち 込[こ]んでいます。|Mein Vater geht mit Leidenschaft in seiner Arbeit auf.|Nomen
広告|広告[こうこく]|Werbung, Anzeige|その 広告[こうこく]を 新聞[しんぶん]で 見[み]ました。|Ich habe die Anzeige in der Zeitung gesehen.|Nomen (mit する)
新た|新[あら]た|neu|新[あら]たな 計画[けいかく]が 進[すす]んでいます。|Ein neuer Plan nimmt Gestalt an.|Adjektiv
新聞社|新聞社[しんぶんしゃ]|Zeitungsverlag|このビルは 新聞社[しんぶんしゃ]です。|In diesem Gebäude sitzt ein Zeitungsverlag.|Nomen
カバー|カバー|Hülle, Umschlag, Abdeckung|本[ほん]にカバーを 掛[か]けました。|Ich habe das Buch eingeschlagen.|Nomen (mit する)
新人|新人[しんじん]|Neuling, Berufsanfänger(in)|彼[かれ]は 今日入[きょう はい]ったばかりの 新人[しんじん]です。|Er ist ein Neuer, der erst heute angefangen hat.|Nomen
最悪|最悪[さいあく]|das Schlimmste, schlimmstenfalls|何[なん]とか 最悪[さいあく]の 事態[じたい]を 避[さ]けることができました。|Irgendwie konnten wir das Schlimmste verhindern.|な-Adjektiv
悪用|悪用[あくよう]|Missbrauch|彼[かれ]は 地位[ちい]を 悪用[あくよう]しています。|Er missbraucht seine Stellung.|Nomen
悪|悪[あく]|das Böse|彼[かれ]は 悪[あく]を 憎[にく]んでいます。|Er hasst das Böse.|Nomen
悪女|悪女[あくじょ]|böse Frau, Femme fatale|彼[かれ]は 悪女[あくじょ]に 騙[だま]されたんだ。|Er ist auf eine durchtriebene Frau hereingefallen.|Nomen
心理|心理[しんり]|Psychologie, Gemütszustand|顧客[こきゃく] 心理[しんり]を 理解[りかい]することは 重要[じゅうよう]です。|Es ist wichtig, die Psychologie der Kunden zu verstehen.|Nomen
心|心[こころ]|Herz, Gemüt, Seele|彼[かれ]は 素直[すなお]な 心[こころ]を 持[も]っている。|Er hat ein aufrichtiges Herz.|Nomen
ジャーナリスト|ジャーナリスト|Journalist(in)|彼女[かのじょ]は 有能[ゆうのう]なジャーナリストだ。|Sie ist eine fähige Journalistin.|Nomen
思い|思[おも]い|Gedanke, Gefühl, Wunsch|必死[ひっし]の 思[おも]いで 彼[かれ]に 頼[たの]んだよ。|Ich habe ihn in meiner Verzweiflung darum gebeten.|Nomen
思わず|思[おも]わず|unwillkürlich, unbewusst|嬉[うれ]しくて 思[おも]わず 涙[なみだ]が 出[で]ました。|Vor Freude kamen mir unwillkürlich die Tränen.|Adverb
思いがけない|思[おも]いがけない|unerwartet|彼[かれ]から 思[おも]いがけないことを 聞[き]いた。|Ich habe von ihm etwas Unerwartetes gehört.|Adjektiv
思いやり|思[おも]いやり|Rücksichtnahme, Mitgefühl|彼女[かのじょ]の 思[おも]いやりが 嬉[うれ]しかった。|Ich habe mich über ihre Rücksicht gefreut.|Nomen
決して|決[けっ]して|niemals, auf keinen Fall|このことを 決[けっ]して 忘[わす]れないでください。|Vergessen Sie das bitte niemals.|Adverb
決心|決心[けっしん]|Entschluss|今度[こんど]こそタバコを 止[や]める 決心[けっしん]をしました。|Diesmal habe ich wirklich beschlossen, mit dem Rauchen aufzuhören.|Nomen (mit する)
決まり|決[き]まり|Regel, Festlegung|決[き]まりを 守[まも]ることは 大切[たいせつ]です。|Es ist wichtig, die Regeln einzuhalten.|Nomen
知り合う|知[し]り 合[あ]う|sich kennenlernen|お 二人[ふたり]はどこで 知[し]り 合[あ]ったのですか。|Wo haben Sie beide sich kennengelernt?|Verb
スタイル|スタイル|Stil; Figur|彼女[かのじょ]はモデルのようにスタイルがいいね。|Sie hat eine Figur wie ein Model.|Nomen
知れる|知[し]れる|bekannt werden, herauskommen|他人[たにん]に 知[し]れるとまずいことになるわね。|Es wird unangenehm, wenn andere davon erfahren.|Verb
知り合い|知[し]り 合[あ]い|Bekannte(r)|街[まち]で 知[し]り 合[あ]いを 見[み]かけたよ。|Ich habe in der Stadt einen Bekannten gesehen.|Nomen
知らせ|知[し]らせ|Nachricht, Mitteilung|今日[きょう]、 合格[ごうかく]の 知[し]らせをもらいました。|Heute habe ich die Nachricht bekommen, dass ich bestanden habe.|Nomen
知らず知らず|知[し]らず 知[し]らず|unbemerkt, ohne es zu merken|知[し]らず 知[し]らずのうちに 疲[つか]れがたまっていたよ。|Ohne dass ich es merkte, hatte sich Müdigkeit angesammelt.|Adverb
才能|才能[さいのう]|Talent, Begabung|彼[かれ]は 芸術的[げいじゅつてき]な 才能[さいのう]にあふれているね。|Er ist voller künstlerischer Begabung.|Nomen
小便|小便[しょうべん]|Urin, Pinkeln|ちょっと 小便[しょうべん]しに 行[い]って 来[く]る。|Ich gehe mal kurz pinkeln.|Nomen (mit する)
局|局[きょく]|Amt, Behörde; Sender|彼女[かのじょ]はラジオ 局[きょく]で 働[はたら]いています。|Sie arbeitet bei einem Radiosender.|Nomen
インタビュー|インタビュー|Interview|彼[かれ]はインタビューに、はきはきと 答[こた]えてたよ。|Er hat im Interview klar und deutlich geantwortet.|Nomen (mit する)
住まい|住[す]まい|Wohnung, Wohnsitz|私[わたし]の 住[す]まいは 東京[とうきょう]にあります。|Mein Wohnsitz ist in Tokio.|Nomen
氏|氏[し]|Herr, Frau (förmlich, nach dem Namen)|会長[かいちょう]は 田中[たなか] 氏[し]に 決定。[けってい]|Zum Vorsitzenden wurde Herr Tanaka bestimmt.|Nomen
人名|人名[じんめい]|Personenname|これは 日本[にほん]の 人名[じんめい]ですか。|Ist das ein japanischer Personenname?|Nomen
国名|国名[こくめい]|Ländername|アジアの 国名[こくめい]をいくつ 知[し]っていますか。|Wie viele asiatische Ländernamen kennst du?|Nomen
各地|各地[かくち]|verschiedene Orte, überall im Land|各地[かくち]で 大雨[おおあめ]が 降[ふ]っています。|Vielerorts regnet es stark.|Nomen
県|県[けん]|Präfektur|県[けん]の 代表[だいひょう]は 2名[にめい]です。|Die Präfektur hat zwei Vertreter.|Nomen
市内|市内[しない]|im Stadtgebiet|明日[あした]は 市内[しない]を 観光[かんこう]する 予定[よてい]です。|Morgen will ich mir die Stadt ansehen.|Nomen
シーズン|シーズン|Saison|その 選手[せんしゅ]は 今[こん]シーズンも 好調[こうちょう]だね。|Der Spieler ist auch in dieser Saison gut in Form.|Nomen
市長|市長[しちょう]|Bürgermeister(in)|新[あたら]しい 市長[しちょう]が 選[えら]ばれました。|Ein neuer Bürgermeister wurde gewählt.|Nomen
市場|市場[いちば]|Markt, Marktplatz|市場[いちば]で 新鮮[しんせん]な 魚[さかな]を 買[か]ってきました。|Ich habe auf dem Markt frischen Fisch gekauft.|Nomen
市場|市場[しじょう]|Markt (wirtschaftlich)|デジカメ 市場[しじょう]は 急速[きゅうそく]に 拡大[かくだい]している。|Der Markt für Digitalkameras wächst rasant.|Nomen
市外|市外[しがい]|außerhalb der Stadt|祖父[そふ]は 市外[しがい]の 病院[びょういん]に 通[かよ]っているの。|Mein Großvater geht in ein Krankenhaus außerhalb der Stadt.|Nomen
市|市[し]|Stadt (Verwaltungseinheit)|その 市[し]の 人口[じんこう]は 減[へ]り 続[つづ]けているの。|Die Einwohnerzahl der Stadt nimmt weiter ab.|Nomen
下町|下町[したまち]|Altstadtviertel, Viertel der einfachen Leute|あの 子[こ]は 下町[したまち] 育[そだ]ちだ。|Das Kind ist im alten Stadtviertel aufgewachsen.|Nomen
区分|区分[くぶん]|Einteilung, Abschnitt|この 表[ひょう]は 年齢[ねんれい] 区分[くぶん]ごとの 人口[じんこう]を 表[あらわ]しています。|Diese Tabelle zeigt die Bevölkerung nach Altersgruppen.|Nomen (mit する)
区|区[く]|Stadtbezirk|東京[とうきょう]には23の 区[く]がある。|In Tokio gibt es 23 Bezirke.|Nomen
アイデア|アイデア|Idee|彼[かれ]がいいアイデアを 出[だ]したね。|Er hatte eine gute Idee.|Nomen
様々|様々[さまざま]|verschieden, vielfältig|その 都市[とし]には 様々[さまざま]な 人種[じんしゅ]が 集[あつ]まっているわ。|In dieser Stadt leben Menschen unterschiedlichster Herkunft.|Adjektiv
出荷|出荷[しゅっか]|Versand, Auslieferung|ご 注文[ちゅうもん]の 品[しな]は 明日[あす] 出荷[しゅっか] 致[いた]します。|Die bestellte Ware versenden wir morgen.|Nomen (mit する)
人物|人物[じんぶつ]|Person, Persönlichkeit|彼[かれ]は 会社[かいしゃ]の 重要[じゅうよう]な 人物[じんぶつ]です。|Er ist eine wichtige Person in der Firma.|Nomen
見物人|見物人[けんぶつにん]|Zuschauer(in), Schaulustige(r)|見物人[けんぶつにん]が 大勢集[おおぜい あつ]まっているね。|Es haben sich viele Schaulustige versammelt.|Nomen
入れ物|入[い]れ 物[もの]|Behälter|荷物[にもつ]が 多[おお]いので 大[おお]きな 入[い]れ 物[もの]が 必要[ひつよう]です。|Wir haben viel Gepäck und brauchen einen großen Behälter.|Nomen
作物|作物[さくもつ]|Feldfrucht, Ernte|米[こめ]はアジアでは 大切[たいせつ]な 作物[さくもつ]だ。|Reis ist in Asien eine wichtige Feldfrucht.|Nomen
食物|食物[しょくもつ]|Nahrung|人間[にんげん]にとって 水[みず]は 食物[しょくもつ]より 大切[たいせつ]なの。|Für den Menschen ist Wasser wichtiger als Nahrung.|Nomen
いかにも|いかにも|wirklich, ganz wie|彼[かれ]はいかにもスポーツマンらしいですね。|Er sieht ganz wie ein Sportler aus.|Adverb
書物|書物[しょもつ]|Buch, Schrift|彼[かれ]は 書物[しょもつ]に 囲[かこ]まれて 生活[せいかつ]しているの。|Er lebt umgeben von Büchern.|Nomen
重ねる|重[かさ]ねる|stapeln; wiederholen|荷物[にもつ]はここに 重[かさ]ねてください。|Stapeln Sie das Gepäck bitte hier.|Verb
重なる|重[かさ]なる|sich überlagern, zusammenfallen|高速道路[こうそく どうろ]で 事故[じこ]が 重[かさ]なった。|Auf der Autobahn folgte ein Unfall auf den anderen.|Verb
重大|重大[じゅうだい]|schwerwiegend, wichtig|重大[じゅうだい]な 発表[はっぴょう]があります。|Ich habe eine wichtige Mitteilung.|Adjektiv
重み|重[おも]み|Gewicht, Bedeutung|雪[ゆき]の 重[おも]みで 枝[えだ]が 折[お]れそうだ。|Unter dem Gewicht des Schnees droht der Ast zu brechen.|Nomen
重たい|重[おも]たい|schwer|この 鞄[かばん]は 重[おも]たいです。|Diese Tasche ist schwer.|Adjektiv
気軽|気軽[きがる]|unbeschwert, ohne Umstände|いつでも 気軽[きがる]に 遊[あそ]びに 来[き]て 下[くだ]さい。|Kommen Sie jederzeit ganz ungezwungen vorbei.|な-Adjektiv
いきなり|いきなり|plötzlich, unvermittelt|後[うし]ろからいきなり 肩[かた]をたたかれた。|Plötzlich klopfte mir jemand von hinten auf die Schulter.|Adverb
重量|重量[じゅうりょう]|Gewicht|この 荷物[にもつ]はかなりの 重量[じゅうりょう]ですね。|Dieses Gepäck hat ein beträchtliches Gewicht.|Nomen
少量|少量[しょうりょう]|kleine Menge|泡立[あわだ]てたクリームに 少量[しょうりょう]のブランデーを 加[くわ]えます。|Zur geschlagenen Sahne gibt man eine kleine Menge Brandy.|Nomen
小量|小量[しょうりょう]|kleine Menge|私[わたし]はコーヒー 豆[まめ]を 小量[しょうりょう]で 買[か]うようにしています。|Ich achte darauf, Kaffeebohnen in kleinen Mengen zu kaufen.|Nomen
受け入れる|受[う]け 入[い]れる|annehmen, aufnehmen, akzeptieren|私[わたし]は 彼[かれ]の 意見[いけん]を 受[う]け 入[い]れました。|Ich habe seine Meinung akzeptiert.|Verb
受け止める|受[う]け 止[と]める|auffangen; auffassen|ボールが 速過[はや す]ぎて 受[う]け 止[と]められなかったの。|Der Ball war zu schnell, ich konnte ihn nicht fangen.|Verb
受かる|受[う]かる|bestehen (Prüfung)|第一志望[だいいち しぼう]の 大学[だいがく]に 受[う]かりました。|Ich bin an meiner Wunschuniversität angenommen worden.|Verb
受け取り|受[う]け 取[と]り|Empfang, Quittung|受[う]け 取[と]りに 判子[はんこ]をお 願[ねが]いします。|Stempeln Sie bitte die Empfangsbestätigung.|Nomen
いつまでも|いつまでも|für immer, ewig|いつまでもあなたを 忘[わす]れません。|Ich werde dich nie vergessen.|Adverb
聞き取り|聞[き]き 取[と]り|Hörverstehen|英語[えいご]の 聞[き]き 取[と]り 試験[しけん]を 受[う]けたよ。|Ich habe eine Hörverstehensprüfung in Englisch gemacht.|Nomen
書き取り|書[か]き 取[と]り|Diktat, Schreibübung|僕[ぼく]たちは 毎朝漢字[まいあさ かんじ]の 書[か]き 取[と]りをします。|Wir machen jeden Morgen eine Kanji-Schreibübung.|Nomen
受け持つ|受[う]け 持[も]つ|zuständig sein, betreuen|1年生[いちねんせい]を 受[う]け 持[も]っています。|Ich unterrichte die erste Klasse.|Verb
打ち上げる|打[う]ち 上[あ]げる|abschießen, in die Luft schießen|夏祭[なつまつ]りで 花火[はなび]を 打[う]ち 上[あ]げます。|Beim Sommerfest wird ein Feuerwerk abgebrannt.|Verb
打ち合わせ|打[う]ち 合[あ]わせ|Vorbesprechung, Absprache|午後[ごご]に 打[う]ち 合[あ]わせをしましょう。|Lassen Sie uns am Nachmittag eine Besprechung abhalten.|Nomen (mit する)
打ち明ける|打[う]ち 明[あ]ける|anvertrauen, offen gestehen|親友[しんゆう]に 悩[なや]みを 打[う]ち 明[あ]けたの。|Ich habe meiner besten Freundin meine Sorgen anvertraut.|Verb
打ち合わせる|打[う]ち 合[あ]わせる|absprechen, vorher besprechen|来週[らいしゅう]の 予定[よてい]を 打[う]ち 合[あ]わせましょう。|Besprechen wir die Planung für nächste Woche.|Verb
打ち消し|打[う]ち 消[け]し|Verneinung, Dementi|彼[かれ]はうわさを 打[う]ち 消[け]したわよ。|Er hat das Gerücht dementiert.|Nomen
しっかり|しっかり|fest, zuverlässig, tüchtig|彼[かれ]は 若[わか]いのにしっかりしてるね。|Er ist jung, aber sehr verlässlich.|Adverb
市役所|市役所[しやくしょ]|Rathaus, Stadtverwaltung|市役所[しやくしょ]で 書類[しょるい]をもらって 来[き]たの。|Ich habe im Rathaus Unterlagen abgeholt.|Nomen
区役所|区役所[くやくしょ]|Bezirksamt|区役所[くやくしょ]に 書類[しょるい]を 届[とど]けてください。|Geben Sie die Unterlagen bitte beim Bezirksamt ab.|Nomen
重役|重役[じゅうやく]|Vorstandsmitglied, leitende(r) Angestellte(r)|明日[あす]、 重役[じゅうやく] 会議[かいぎ]が 開[ひら]かれます。|Morgen findet die Vorstandssitzung statt.|Nomen
生じる|生[しょう]じる|entstehen; hervorrufen|両者[りょうしゃ]の 間[あいだ]に 摩擦[まさつ]が 生[しょう]じています。|Zwischen beiden Seiten gibt es Reibungen.|Verb
人生|人生[じんせい]|(menschliches) Leben|彼[かれ]は 自分[じぶん]の 人生[じんせい]を 振[ふ]り 返[かえ]ったわ。|Er blickte auf sein Leben zurück.|Nomen
生まれ|生[う]まれ|Geburt, Herkunft|彼女[かのじょ]は 京都[きょうと]の 生[う]まれです。|Sie ist in Kyoto geboren.|Nomen
一生|一生[いっしょう]|das ganze Leben, lebenslang|一生[いっしょう]のお 願[ねが]いがあります。|Ich habe die Bitte meines Lebens an dich.|Nomen
アンケート|アンケート|Umfrage, Fragebogen|彼女[かのじょ]はアンケートに 答[こた]えたよ。|Sie hat den Fragebogen ausgefüllt.|Nomen
生み出す|生[う]み 出[だ]す|hervorbringen, schaffen|彼[かれ]は 数々[かずかず]の 名作[めいさく]を 生[う]み 出[だ]した。|Er hat zahlreiche Meisterwerke geschaffen.|Verb
生き方|生[い]き 方[かた]|Lebensweise|自分[じぶん]らしい 生[い]き 方[かた]をしなさい。|Lebe so, wie es zu dir passt.|Nomen
生かす|生[い]かす|nutzen, zur Geltung bringen|彼女[かのじょ]は 語学力[ごがくりょく]を 仕事[しごと]に 生[い]かしているね。|Sie nutzt ihre Sprachkenntnisse im Beruf.|Verb
生き物|生[い]き 物[もの]|Lebewesen|生[い]き 物[もの]を 大切[たいせつ]にしましょう。|Gehen wir sorgsam mit Lebewesen um.|Nomen
生け花|生[い]け 花[ばな]|Ikebana, Blumensteckkunst|彼女[かのじょ]は 生[い]け 花[ばな]の 先生[せんせい]です。|Sie ist Ikebana-Lehrerin.|Nomen
生年月日|生年月日[せいねんがっぴ]|Geburtsdatum|ここに 生年[せいねん] 月日[がっぴ]を 記入[きにゅう]してください。|Tragen Sie hier bitte Ihr Geburtsdatum ein.|Nomen
生理|生理[せいり]|Menstruation, Periode|昨日[きのう]、 生理[せいり]が 始[はじ]まったの。|Gestern habe ich meine Tage bekommen.|Nomen
スケジュール|スケジュール|Zeitplan, Terminplan|スケジュールの 調整[ちょうせい]は 君[きみ]に 任[まか]せるわ。|Die Terminabstimmung überlasse ich dir.|Nomen
生まれつき|生[う]まれつき|von Geburt an, von Natur aus|彼女[かのじょ]は 生[う]まれつき 丈夫[じょうぶ]です。|Sie ist von Natur aus robust.|Adverb
生|生[せい]|Leben, Dasein|私[わたし]がこの 世[よ]に 生[せい]を 受[う]けて 80年[はちじゅうねん]が 過[す]ぎたわ。|Seit ich auf die Welt kam, sind 80 Jahre vergangen.|Nomen
生物|生物[せいぶつ]|Lebewesen, Organismus|海[うみ]の 底[そこ]には 不思議[ふしぎ]な 生物[せいぶつ]がたくさんいるよ。|Am Meeresgrund gibt es viele seltsame Lebewesen.|Nomen
生き生きと|生[い]き 生[い]きと|lebhaft, voller Leben|子供[こども]たちが 生[い]き 生[い]きと 遊[あそ]んでいるね。|Die Kinder spielen ganz ausgelassen.|Adverb
性能|性能[せいのう]|Leistung, Leistungsfähigkeit (eines Geräts)|今度[こんど]のパソコンは 性能[せいのう]がすごく 良[い]い。|Der neue Computer ist sehr leistungsfähig.|Nomen
性格|性格[せいかく]|Charakter, Wesen|僕[ぼく]と 姉[あね]の 性格[せいかく]は 正反対[せいはんたい]です。|Meine große Schwester und ich haben völlig gegensätzliche Charaktere.|Nomen
性|性[せい]|Geschlecht; Natur, Eigenschaft|この 会社[かいしゃ]では 性[せい]による 差別[さべつ]はありません。|In dieser Firma gibt es keine Benachteiligung wegen des Geschlechts.|Nomen
国産|国産[こくさん]|einheimisch, aus eigener Produktion|このワインは 国産[こくさん]です。|Dieser Wein ist ein einheimisches Erzeugnis.|Nomen
ガソリン|ガソリン|Benzin|車[くるま]にガソリンを 入[い]れました。|Ich habe getankt.|Nomen
産地|産地[さんち]|Anbaugebiet, Herkunftsort|その 地方[ちほう]はお 茶[ちゃ]の 産地[さんち]です。|Die Gegend ist ein Teeanbaugebiet.|Nomen
出産|出産[しゅっさん]|Geburt, Entbindung|彼女[かのじょ]は 女[おんな]の 子[こ]を 出産[しゅっさん]したんだ。|Sie hat ein Mädchen zur Welt gebracht.|Nomen (mit する)
活用|活用[かつよう]|Nutzung; Flexion (Grammatik)|彼女[かのじょ]はインターネットを 活用[かつよう]しているの。|Sie nutzt das Internet.|Nomen (mit する)
活字|活字[かつじ]|Druckschrift, Drucktype|新聞[しんぶん]の 活字[かつじ]が 読[よ]みやすくなったね。|Die Schrift der Zeitung ist besser lesbar geworden.|Nomen
学会|学会[がっかい]|Fachgesellschaft, wissenschaftliche Tagung|彼[かれ]は 学会[がっかい]で 論文[ろんぶん]を 発表[はっぴょう]したよ。|Er hat auf der Tagung einen Vortrag gehalten.|Nomen
学年|学年[がくねん]|Schuljahr, Jahrgang|彼[かれ]は 私[わたし]より 一[ひと] 学年[がくねん] 上[うえ]です。|Er ist einen Jahrgang über mir.|Nomen
工学|工学[こうがく]|Ingenieurwissenschaften|彼[かれ]は 大学[だいがく]で 工学[こうがく]を 勉強[べんきょう]しました。|Er hat an der Universität Ingenieurwissenschaften studiert.|Nomen
カット|かっと|Schnitt, Schneiden|市長[しちょう]がテープをカットした。|Der Bürgermeister hat das Band durchgeschnitten.|Nomen (mit する)
学長|学長[がくちょう]|Universitätspräsident(in), Rektor(in)|入学式[にゅうがくしき]で 学長[がくちょう]の 挨拶[あいさつ]がありました。|Bei der Immatrikulationsfeier sprach der Rektor ein Grußwort.|Nomen
語学|語学[ごがく]|Sprachenlernen, Sprachstudium|海外[かいがい]で 語学[ごがく]の 勉強[べんきょう]をします。|Ich werde im Ausland eine Sprache lernen.|Nomen
工学部|工学部[こうがくぶ]|ingenieurwissenschaftliche Fakultät|彼[かれ]は 工学部[こうがくぶ]の 教授[きょうじゅ]です。|Er ist Professor an der ingenieurwissenschaftlichen Fakultät.|Nomen
学費|学費[がくひ]|Studiengebühren, Schulgeld|彼[かれ]はアルバイトをして 学費[がくひ]を 稼[かせ]いだんだ。|Er hat sich die Studiengebühren mit Nebenjobs verdient.|Nomen
学部|学部[がくぶ]|Fakultät|彼[かれ]は 経済[けいざい] 学部[がくぶ]の 学生[がくせい]です。|Er studiert an der wirtschaftswissenschaftlichen Fakultät.|Nomen
学力|学力[がくりょく]|schulische Leistungsfähigkeit|学力[がくりょく]を 付[つ]けてその 大学[だいがく]に 進[すす]みたい。|Ich möchte meine Leistungen verbessern und an diese Universität gehen.|Nomen
休学|休学[きゅうがく]|Beurlaubung vom Studium|1年[いちねん] 休学[きゅうがく]することにしました。|Ich habe beschlossen, ein Jahr zu pausieren.|Nomen (mit する)
スター|スター|Star|彼[かれ]はその 時[とき]スターだったよ。|Er war damals ein Star.|Nomen
教員|教員[きょういん]|Lehrkraft|彼[かれ]は 高校[こうこう]の 教員[きょういん]です。|Er ist Lehrer an einer Oberschule.|Nomen
キリスト教|キリスト 教[きょう]|Christentum|この 先[さき]にキリスト 教[きょう]の 教会[きょうかい]があります。|Da vorn ist eine christliche Kirche.|Nomen
イスラム教|イスラム 教[きょう]|Islam|これはイスラム 教[きょう]の 寺院[じいん]です。|Das ist eine Moschee.|Nomen
教わる|教[おそ]わる|unterrichtet werden, lernen (von jemandem)|私[わたし]は 両親[りょうしん]から 多[おお]くを 教[おそ]わりました。|Ich habe viel von meinen Eltern gelernt.|Verb
教え|教[おし]え|Lehre, Unterweisung|父[ちち]の 教[おし]えは「 自分[じぶん]に 厳[きび]しく」です。|Die Lehre meines Vaters lautet: „Sei streng zu dir selbst.“|Nomen
制御|制御[せいぎょ]|Steuerung, Kontrolle|ここのパネルで 機械全体[きかい ぜんたい]を 制御[せいぎょ]できます。|Über dieses Bedienfeld lässt sich die ganze Maschine steuern.|Nomen (mit する)
強力|強力[きょうりょく]|stark, leistungsfähig|これは 強力[きょうりょく]な 接着剤[せっちゃくざい]ね。|Das ist ein starker Klebstoff.|な-Adjektiv
強制|強制[きょうせい]|Zwang|彼[かれ]らは 労働[ろうどう]を 強制[きょうせい]されたんだ。|Sie wurden zur Arbeit gezwungen.|Nomen (mit する)
カメラマン|カメラマン|Fotograf(in), Kameramann|将来[しょうらい]はプロのカメラマンになりたいです。|Ich möchte später Berufsfotograf werden.|Nomen
最強|最強[さいきょう]|stärkste(r, s)|彼[かれ]は 最強[さいきょう]チームの 一員[いちいん]です。|Er gehört zur stärksten Mannschaft.|Nomen
心強い|心強[こころづよ]い|beruhigend, ermutigend|あなたが 一緒[いっしょ]にいてくれると 心強[こころづよ]い。|Wenn du bei mir bist, fühle ich mich sicher.|Adjektiv
強引|強引[ごういん]|aufdringlich, mit Gewalt|友人[ゆうじん]の 強引[ごういん]な 誘[さそ]いを 断[ことわ]れませんでした。|Ich konnte die hartnäckige Einladung meines Freundes nicht ausschlagen.|Adjektiv
引用|引用[いんよう]|Zitat|論文[ろんぶん]にその 本[ほん]を 引用[いんよう]したの。|Ich habe das Buch in meiner Arbeit zitiert.|Nomen (mit する)
字引|字引[じびき]|Wörterbuch|この 漢字[かんじ]を 字引[じびき]で 引[ひ]いてみて。|Schlag dieses Kanji mal im Wörterbuch nach.|Nomen
学習|学習[がくしゅう]|Lernen|今日[きょう]は 野外[やがい]で 学習[がくしゅう]した。|Heute haben wir im Freien gelernt.|Nomen (mit する)
試合|試合[しあい]|Spiel, Wettkampf|試合[しあい]の 結果[けっか]を 早[はや]く 知[し]りたい。|Ich möchte das Ergebnis des Spiels schnell erfahren.|Nomen (mit する)
アルコール|アルコール|Alkohol|彼[かれ]はアルコールに 強[つよ]い 体質[たいしつ]です。|Er verträgt viel Alkohol.|Nomen
試みる|試[こころ]みる|versuchen|彼[かれ]は 実験[じっけん]を 試[こころ]みたのよ。|Er hat das Experiment versucht.|Verb
受験|受験[じゅけん]|Ablegen einer Prüfung|日本語能力試験[にほんご のうりょく しけん]を 受験[じゅけん]したんだ。|Ich habe den Japanisch-Sprachtest abgelegt.|Nomen (mit する)
性質|性質[せいしつ]|Wesen, Eigenschaft|この 犬[いぬ]は 穏[おだ]やかな 性質[せいしつ]だよ。|Dieser Hund hat ein sanftes Wesen.|Nomen
悪質|悪質[あくしつ]|bösartig, heimtückisch|最近[さいきん]は 悪質[あくしつ]な 事件[じけん]が 多[おお]いですね。|In letzter Zeit gibt es viele üble Vorfälle.|な-Adjektiv
質|質[しつ]|Qualität|量[りょう]より 質[しつ]の 方[ほう]が 大事[だいじ]です。|Qualität ist wichtiger als Menge.|Nomen
学問|学問[がくもん]|Wissenschaft, Gelehrsamkeit|彼[かれ]は 少年[しょうねん]の 頃[ころ]から 学問[がくもん]が 好[す]きでした。|Er liebte das Lernen schon seit seiner Kindheit.|Nomen (mit する)
有り難い|有[あ]り 難[がた]い|dankenswert, willkommen|彼[かれ]の 助[たす]けは 本当[ほんとう]に 有[あ]り 難[がた]いな。|Für seine Hilfe bin ich wirklich dankbar.|Adjektiv
せめて|せめて|wenigstens, zumindest|せめてこれだけは 約束[やくそく]してください。|Versprechen Sie mir wenigstens das.|Adverb
重点|重点[じゅうてん]|Schwerpunkt|子供[こども]の 自主性[じしゅせい]に 重点[じゅうてん]を 置[お]いています。|Wir legen den Schwerpunkt auf die Selbstständigkeit der Kinder.|Nomen
弱点|弱点[じゃくてん]|Schwachpunkt|彼[かれ]の 弱点[じゃくてん]はスタミナが 足[た]りないところです。|Seine Schwäche ist die mangelnde Ausdauer.|Nomen
少数|少数[しょうすう]|kleine Anzahl, Minderheit|その 計画[けいかく]に 反対[はんたい]の 人[ひと]はほんの 少数[しょうすう]だったよ。|Gegen den Plan waren nur ganz wenige.|Nomen
小数|小数[しょうすう]|Dezimalzahl, Dezimalstelle|小数[しょうすう]は 切[き]り 捨[す]てて 計算[けいさん]して 下[くだ]さい。|Rechnen Sie bitte ohne die Dezimalstellen.|Nomen
回路|回路[かいろ]|Schaltkreis|コンピュータの 電子[でんし] 回路[かいろ]が 故障[こしょう]した。|Die elektronische Schaltung des Computers ist defekt.|Nomen
回数|回数[かいすう]|Häufigkeit, Anzahl der Male|最近[さいきん]はテレビを 見[み]る 回数[かいすう]が 減[へ]りました。|In letzter Zeit sehe ich seltener fern.|Nomen
前回|前回[ぜんかい]|letztes Mal|前回[ぜんかい]の 続[つづ]きから 始[はじ]めます。|Wir machen dort weiter, wo wir letztes Mal aufgehört haben.|Nomen
ストレス|ストレス|Stress|ストレスがいろいろな 病気[びょうき]の 元[もと]になっているの。|Stress ist die Ursache verschiedener Krankheiten.|Nomen
後回し|後回[あとまわ]し|Aufschieben, Hintanstellen|おしゃべりは 後回[あとまわ]しにしましょう。|Verschieben wir das Plaudern auf später.|Nomen
個性|個性[こせい]|Individualität, Persönlichkeit|彼女[かのじょ]たちはそれぞれ 個性[こせい]が 強[つよ]いですね。|Jede von ihnen hat eine starke Persönlichkeit.|Nomen
個々|個々[ここ]|einzeln, jede(r, s) für sich|個々[ここ]の 問題[もんだい]を 解決[かいけつ]しましょう。|Lösen wir die Probleme einzeln.|Nomen
勝手|勝手[かって]|eigenmächtig, egoistisch|勝手[かって]なことばかり 言[い]わないでくれ。|Red nicht immer nur, wie es dir gerade passt.|Adjektiv
決勝|決勝[けっしょう]|Finale, Endspiel|僕[ぼく]たちは 頑張[がんば]って 決勝[けっしょう]まで 進[すす]んだよ。|Wir haben uns angestrengt und es bis ins Finale geschafft.|Nomen
勝ち|勝[か]ち|Sieg|歌合戦[うたがっせん]は 赤組[あか ぐみ]の 勝[か]ちでしたね。|Beim Gesangswettstreit hat die rote Gruppe gewonnen.|Nomen
勝負|勝負[しょうぶ]|Wettkampf, Entscheidung|勝負[しょうぶ]はまだ 始[はじ]まったばかりよ。|Der Wettkampf hat gerade erst begonnen.|Nomen (mit する)
担ぐ|担[かつ]ぐ|auf der Schulter tragen|彼[かれ]は 大[おお]きな 荷物[にもつ]を 担[かつ]いで 来[き]たの。|Er kam mit einem großen Gepäckstück auf der Schulter.|Verb
コード|コード|Kabel, Schnur|コードが 短[みじか]くてコンセントに 届[とど]きません。|Das Kabel ist zu kurz, es reicht nicht bis zur Steckdose.|Nomen
当てる|当[あ]てる|treffen; erraten; gewinnen (Los)|彼[かれ]はくじ 引[び]きで 一等賞[いっとう しょう]を 当[あ]てたよ。|Er hat bei der Verlosung den ersten Preis gewonnen.|Verb
当たり前|当[あ]たり 前[まえ]|selbstverständlich, natürlich|あなたの 成績[せいせき]が 下[さ]がったのは 当[あ]たり 前[まえ]です。|Es ist kein Wunder, dass deine Noten schlechter geworden sind.|な-Adjektiv
見当|見当[けんとう]|Schätzung, Ahnung|この 仕事[しごと]には 何日必要[なんにち ひつよう]か 見当[けんとう]もつかないね。|Ich habe keine Ahnung, wie viele Tage diese Arbeit braucht.|Nomen
当たり|当[あ]たり|Treffer, Erfolg|彼[かれ]の 予想[よそう]は 大[おお] 当[あ]たりでした。|Seine Vorhersage war ein Volltreffer.|Nomen
規制|規制[きせい]|Regulierung, Beschränkung|牛肉[ぎゅうにく]の 輸入[ゆにゅう]が 厳[きび]しく 規制[きせい]されているわね。|Der Import von Rindfleisch ist streng reguliert.|Nomen (mit する)
経費|経費[けいひ]|Kosten, Ausgaben|これからは 経費[けいひ]を 節約[せつやく]しましょう。|Sparen wir ab jetzt bei den Ausgaben.|Nomen
済む|済[す]む|erledigt sein, zu Ende gehen|父[ちち]の 手術[しゅじゅつ]が 無事[ぶじ]に 済[す]みました。|Die Operation meines Vaters ist gut verlaufen.|Verb
コーチ|コーチ|Trainer(in), Coach|新[あたら]しいコーチの 指導[しどう]は 厳[きび]しかった。|Das Training des neuen Trainers war hart.|Nomen (mit する)
済ませる|済[す]ませる|erledigen, hinter sich bringen|昼[ひる]ごはんは 簡単[かんたん]に 済[す]ませましょう。|Essen wir mittags nur eine Kleinigkeit.|Verb
済ます|済[す]ます|erledigen, abschließen|宿題[しゅくだい]を 済[す]ませてから 遊[あそ]びなさい。|Spiel erst, wenn du die Hausaufgaben erledigt hast.|Verb
株式|株式[かぶしき]|Aktie(n)|彼[かれ]は 株式[かぶしき]の 売買[ばいばい]で 多額[たがく]の 利益[りえき]を 得[え]たのさ。|Er hat mit dem Handel von Aktien einen hohen Gewinn gemacht.|Nomen
式|式[しき]|Zeremonie, Feier|彼[かれ]らは 教会[きょうかい]で 式[しき]を 挙[あ]げました。|Sie haben sich in einer Kirche trauen lassen.|Nomen
業界|業界[ぎょうかい]|Branche|私[わたし]はIT 業界[ぎょうかい]で 働[はたら]いています。|Ich arbeite in der IT-Branche.|Nomen
営業|営業[えいぎょう]|Vertrieb; Geschäftsbetrieb|彼[かれ]は 営業[えいぎょう]を 担当[たんとう]しています。|Er ist für den Vertrieb zuständig.|Nomen (mit する)
休業|休業[きゅうぎょう]|Betriebsruhe, geschlossen|明日[あした]は 臨時[りんじ]に 休業[きゅうぎょう]します。|Morgen bleibt außerplanmäßig geschlossen.|Nomen (mit する)
ステージ|ステージ|Bühne|彼[かれ]はステージに 立[た]ったよ。|Er stand auf der Bühne.|Nomen
事業|事業[じぎょう]|Unternehmen, Projekt, Geschäft|彼[かれ]は 事業[じぎょう]に 失敗[しっぱい]したの。|Er ist mit seinem Unternehmen gescheitert.|Nomen
金利|金利[きんり]|Zinsen, Zinssatz|最近[さいきん]、 銀行[ぎんこう]の 金利[きんり]が 少[すこ]し 上[あ]がった。|In letzter Zeit sind die Bankzinsen etwas gestiegen.|Nomen
利く|利[き]く|wirken, funktionieren|彼女[かのじょ]は 気[き]が 利[き]いている。|Sie ist aufmerksam.|Verb
収入|収入[しゅうにゅう]|Einkommen|日本人[にほんじん]の 平均[へいきん] 収入[しゅうにゅう]はどの 位[くらい]ですか。|Wie hoch ist das Durchschnittseinkommen der Japaner?|Nomen
芸術|芸術[げいじゅつ]|Kunst|ここは 芸術[げいじゅつ]を 愛[あい]する 国[くに]です。|Dies ist ein Land, das die Kunst liebt.|Nomen
製品|製品[せいひん]|Erzeugnis, Produkt|当社[とうしゃ]の 製品[せいひん]は 3年間[さんねんかん]の 保障[ほしょう]つきです。|Auf die Produkte unserer Firma gibt es drei Jahre Garantie.|Nomen
製作|製作[せいさく]|Herstellung, Produktion (Film, Werk)|この 映画[えいが]は 香港[ほんこん]で 製作[せいさく]されました。|Dieser Film wurde in Hongkong produziert.|Nomen (mit する)
作製|作製[さくせい]|Anfertigung, Herstellung|合鍵[あいかぎ]の 作製[さくせい]には 2日[ふつか]ほどかかります。|Die Anfertigung eines Nachschlüssels dauert etwa zwei Tage.|Nomen (mit する)
アドバイス|アドバイス|Rat, Ratschlag|彼[かれ]のアドバイスはいつも 有[あ]り 難[がた]いわね。|Für seinen Rat bin ich immer dankbar.|Nomen (mit する)
必ずしも|必[かなら]ずしも|nicht unbedingt, nicht immer|親切[しんせつ]は 必[かなら]ずしも 喜[よろこ]ばれるわけではない。|Freundlichkeit wird nicht immer gern gesehen.|Adverb
求人|求人[きゅうじん]|Stellenangebot|彼[かれ]は 求人[きゅうじん] 広告[こうこく]で 仕事[しごと]を 見[み]つけたんだ。|Er hat über eine Stellenanzeige Arbeit gefunden.|Nomen (mit する)
額|額[がく]|Bilderrahmen|写真[しゃしん]を 額[がく]に 入[い]れて 飾[かざ]ったんだ。|Ich habe das Foto gerahmt und aufgehängt.|Nomen
金額|金額[きんがく]|Geldbetrag|レシートで 買[か]い 物[もの]の 金額[きんがく]を 確[たし]かめたよ。|Ich habe den Betrag des Einkaufs auf dem Kassenbon überprüft.|Nomen
計|計[けい]|Summe, insgesamt|3人分[さんにんぶん]の 代金[だいきん]は 計[けい] 6000円[ろくせんえん]です。|Die Kosten für drei Personen betragen insgesamt 6.000 Yen.|Nomen
合計|合計[ごうけい]|Gesamtsumme|合計[ごうけい] 金額[きんがく]を 計算[けいさん]してください。|Rechnen Sie bitte den Gesamtbetrag aus.|Nomen (mit する)
家計|家計[かけい]|Haushaltskasse, Haushaltsbudget|彼女[かのじょ]は 家計[かけい]を 任[まか]されているの。|Sie verwaltet das Haushaltsgeld.|Nomen
アルミニウム|アルミニウム|Aluminium|このお 鍋[なべ]はアルミニウム 製[せい]です。|Dieser Topf ist aus Aluminium.|Nomen
会計|会計[かいけい]|Rechnung, Bezahlen; Buchhaltung|会計[かいけい]を 済[す]ませて 店[みせ]を 出[で]たんだ。|Ich habe bezahlt und den Laden verlassen.|Nomen
寒暖計|寒暖計[かんだんけい]|Thermometer|壁[かべ]に 寒暖計[かんだんけい]が 掛[か]かっていました。|An der Wand hing ein Thermometer.|Nomen
差|差[さ]|Unterschied, Differenz|都心[としん]と 地方[ちほう]では 収入[しゅうにゅう]に 大[おお]きな 差[さ]があるね。|Zwischen Großstadt und Provinz gibt es große Einkommensunterschiede.|Nomen
格差|格差[かくさ]|Kluft, Gefälle|貧富[ひんぷ]の 格差[かくさ]が 大[おお]きくなっているな。|Die Kluft zwischen Arm und Reich wird größer.|Nomen
差し出す|差[さ]し 出[だ]す|hinstrecken, einreichen|彼[かれ]は 握手[あくしゅ]をしようと 手[て]を 差[さ]し 出[だ]したの。|Er streckte die Hand aus, um mir die Hand zu geben.|Verb
時差|時差[じさ]|Zeitunterschied|日本[にほん]とフランスの 時差[じさ]は 8時間[はちじかん]です。|Der Zeitunterschied zwischen Japan und Frankreich beträgt acht Stunden.|Nomen
差す|差[さ]す|aufspannen (Schirm)|雨[あめ]が 降[ふ]ってきたので 傘[かさ]を 差[さ]しました。|Es fing an zu regnen, deshalb habe ich den Schirm aufgespannt.|Verb
オーケストラ|オーケストラ|Orchester|彼[かれ]はオーケストラを 指揮[しき]しているの。|Er dirigiert das Orchester.|Nomen
差し上げる|差[さ]し 上[あ]げる|geben (bescheiden)|こちらを 差[さ]し 上[あ]げます。|Das hier ist für Sie.|Verb
学割|学割[がくわり]|Studentenrabatt|学割[がくわり]だとだいぶ 安[やす]いな。|Mit Studentenrabatt ist es deutlich billiger.|Nomen
時間割り|時間割[じかんわ]り|Stundenplan|明日[あした]の 授業[じゅぎょう]は 時間割[じかんわ]り 通[どお]りです。|Der Unterricht morgen findet nach Stundenplan statt.|Nomen
残業|残業[ざんぎょう]|Überstunden|昨日[きのう]は 遅[おそ]くまで 残業[ざんぎょう]しました。|Gestern habe ich bis spät Überstunden gemacht.|Nomen (mit する)
残暑|残暑[ざんしょ]|Spätsommerhitze|今年[ことし]も 残暑[ざんしょ]が 厳[きび]しかった。|Auch dieses Jahr war die Spätsommerhitze heftig.|Nomen
支店|支店[してん]|Filiale, Zweigstelle|彼[かれ]は 支店[してん]に 転勤[てんきん]したよ。|Er wurde in eine Filiale versetzt.|Nomen
支持|支持[しじ]|Unterstützung, Rückhalt|彼[かれ]は 国民[こくみん]の 支持[しじ]を 得[え]たのよ。|Er hat die Unterstützung des Volkes gewonnen.|Nomen (mit する)
支出|支出[ししゅつ]|Ausgaben|今月[こんげつ]のわが 家[や]の 支出[ししゅつ]は 15万円[じゅうごまんえん]です。|Die Ausgaben unseres Haushalts betragen diesen Monat 150.000 Yen.|Nomen (mit する)
おじさん|おじさん|Mann mittleren Alters; Onkel|今[いま]そこで 隣[となり]のおじさんに 会[あ]ったよ。|Ich habe gerade den Mann von nebenan getroffen.|Nomen
支配|支配[しはい]|Herrschaft, Kontrolle|その 権力者[けんりょくしゃ]による 支配[しはい]は 50年以上続[ごじゅうねん いじょう つづ]いたんです。|Die Herrschaft dieses Machthabers dauerte über 50 Jahre.|Nomen (mit する)
収支|収支[しゅうし]|Einnahmen und Ausgaben|家計[かけい]の 収支[しゅうし]が 合[あ]わないの。|Einnahmen und Ausgaben des Haushalts gehen nicht auf.|Nomen
支度|支度[したく]|Vorbereitung, Fertigmachen|支度[したく]ができたら 出[で]かけましょう。|Wenn wir fertig sind, gehen wir los.|Nomen (mit する)
支える|支[ささ]える|stützen, unterstützen|父親[ちちおや]には 一家[いっか]を 支[ささ]える 責任[せきにん]がある。|Der Vater trägt die Verantwortung, die Familie zu ernähren.|Verb
支社|支社[ししゃ]|Zweigniederlassung|来月大阪[らいげつ おおさか]に 支社[ししゃ]を 開設[かいせつ]します。|Nächsten Monat eröffnen wir eine Niederlassung in Osaka.|Nomen
支払う|支払[しはら]う|bezahlen|カウンターで 料金[りょうきん]を 支払[しはら]った。|Ich habe die Gebühr am Schalter bezahlt.|Verb
支払い|支払[しはら]い|Zahlung|お 支払[しはら]いはカードもお 使[つか]いいただけます。|Sie können auch mit Karte zahlen.|Nomen (mit する)
コンクール|コンクール|Wettbewerb|来年[らいねん]のコンクールに 出場[しゅつじょう]するつもりです。|Ich will am Wettbewerb im nächsten Jahr teilnehmen.|Nomen
言い返す|言[い]い 返[かえ]す|erwidern, Widerworte geben|彼女[かのじょ]は 負[ま]けずに 言[い]い 返[かえ]したの。|Sie ließ sich nicht unterkriegen und gab Kontra.|Verb
返る|返[かえ]る|zurückkehren, zurückkommen|もう 一度原点[いちど げんてん]に 返[かえ]って 考[かんが]えましょう。|Kehren wir noch einmal zum Ausgangspunkt zurück und überlegen neu.|Verb
借り|借[か]り|Schuld, Geliehenes|この 借[か]りは 必[かなら]ず 返[かえ]します。|Das werde ich dir auf jeden Fall zurückzahlen.|Nomen
借金|借金[しゃっきん]|Schulden|彼[かれ]は 友達[ともだち]に 借金[しゃっきん]をしたんだ。|Er hat sich bei einem Freund Geld geliehen.|Nomen (mit する)
貸し出し|貸[か]し 出[だ]し|Ausleihe, Verleih|その 本[ほん]は 貸[か]し 出[だ]ししていません。|Dieses Buch wird nicht verliehen.|Nomen (mit する)
貸し|貸[か]し|Darlehen; etwas guthaben|彼[かれ]には 貸[か]しがあるの。|Er ist mir noch etwas schuldig.|Nomen
申請|申請[しんせい]|Antrag|これからパスポートの 申請[しんせい]に 行[い]きます。|Ich gehe jetzt meinen Reisepass beantragen.|Nomen (mit する)
アマチュア|アマチュア|Amateur(in)|彼[かれ]はアマチュア 音楽家[おんがくか]です。|Er ist Amateurmusiker.|Nomen
込める|込[こ]める|hineinlegen, erfüllen mit|彼[かれ]は 感情[かんじょう]を 込[こ]めてその 歌[うた]を 歌[うた]ったの。|Er sang das Lied mit viel Gefühl.|Verb
打ち込む|打[う]ち 込[こ]む|sich hingeben, sich vertiefen|彼[かれ]は 研究[けんきゅう]に 打[う]ち 込[こ]んでいます。|Er geht ganz in seiner Forschung auf.|Verb
思い込む|思[おも]い 込[こ]む|fest glauben, überzeugt sein|彼[かれ]は 騙[だま]されたと 思[おも]い 込[こ]んでいるようです。|Er ist offenbar fest davon überzeugt, betrogen worden zu sein.|Verb
初期|初期[しょき]|Anfangsphase, Frühstadium|鼻水[はなみず]は 風邪[かぜ]の 初期[しょき] 症状[しょうじょう]のひとつです。|Schnupfen ist eines der ersten Symptome einer Erkältung.|Nomen
学期|学期[がっき]|Schulhalbjahr, Semester|新[しん] 学期[がっき]が 始[はじ]まったね。|Das neue Semester hat angefangen.|Nomen
後期|後期[こうき]|zweite Hälfte (eines Zeitraums), Wintersemester|後期[こうき]の 授業[じゅぎょう]が 始[はじ]まりました。|Der Unterricht des zweiten Halbjahrs hat begonnen.|Nomen
前期|前期[ぜんき]|erste Hälfte (eines Zeitraums); voriges Halbjahr|前期[ぜんき]の 売上[うりあげ]はとても 良[よ]かったわ。|Der Umsatz im ersten Halbjahr war sehr gut.|Nomen
きつい|きつい|hart, streng, scharf|彼女[かのじょ]は 性格[せいかく]がきついよね。|Sie hat einen harten Charakter.|Adjektiv
期日|期日[きじつ]|Termin, Fälligkeitstag|代金[だいきん]を 期日[きじつ]までにお 支払[しはら]いください。|Zahlen Sie den Betrag bitte bis zum Fälligkeitstag.|Nomen
新学期|新学期[しんがっき]|neues Schulhalbjahr, neues Semester|今日[きょう]から 新学期[しんがっき]が 始[はじ]まります。|Heute beginnt das neue Semester.|Nomen
限り|限[かぎ]り|Grenze; soweit, solange|限[かぎ]りある 資源[しげん]を 大切[たいせつ]にしよう。|Gehen wir sorgsam mit den begrenzten Ressourcen um.|Nomen
制限|制限[せいげん]|Beschränkung, Begrenzung|彼女[かのじょ]は 食事[しょくじ]を 制限[せいげん]しています。|Sie schränkt ihr Essen ein.|Nomen (mit する)
限界|限界[げんかい]|Grenze, Limit|もう 我慢[がまん]の 限界[げんかい]です。|Meine Geduld ist am Ende.|Nomen
期限|期限[きげん]|Frist|期限[きげん]までに 申[もう]し 込[こ]みました。|Ich habe mich fristgerecht angemeldet.|Nomen
限度|限度[げんど]|Grenze, Obergrenze|物事[ものごと]には 限度[げんど]があります。|Alles hat seine Grenzen.|Nomen
大急ぎ|大急[おおいそ]ぎ|große Eile|大急[おおいそ]ぎでその 仕事[しごと]を 仕上[しあ]げたよ。|Ich habe die Arbeit in großer Eile fertig gemacht.|な-Adjektiv
コーナー|コーナー|Ecke; Abteilung, Stand|バーゲンコーナーで DVD[でぃーぶいでぃー]を 買[か]いました。|Ich habe in der Sonderangebotsecke eine DVD gekauft.|Nomen
急用|急用[きゅうよう]|dringende Angelegenheit|彼[かれ]は 急用[きゅうよう]で 帰[かえ]りました。|Er ist wegen einer dringenden Angelegenheit nach Hause gegangen.|Nomen
一切|一切[いっさい]|überhaupt (nicht); alles|私[わたし]は 一切[いっさい]その 問題[もんだい]とは 関係[かんけい]がありません。|Ich habe mit diesem Problem überhaupt nichts zu tun.|Adverb
区切る|区切[くぎ]る|abteilen, unterteilen|フロアはパーティションで 区切[くぎ]られています。|Die Etage ist durch Trennwände unterteilt.|Verb
思い切って|思[おも]い 切[き]って|entschlossen, kurzerhand|思[おも]い 切[き]って 彼[かれ]に 相談[そうだん]します。|Ich fasse mir ein Herz und bespreche es mit ihm.|Adverb
品切れ|品切[しなぎ]れ|ausverkauft, nicht vorrätig|牛乳[ぎゅうにゅう]は 品切[しなぎ]れだったよ。|Die Milch war ausverkauft.|Nomen
思い切り|思[おも]い 切[き]り|nach Herzenslust, mit aller Kraft|カラオケで 思[おも]い 切[き]り 歌[うた]ったの。|Ich habe beim Karaoke nach Herzenslust gesungen.|Adverb
切れ|切[き]れ|Schärfe, Schneidfähigkeit|この 包丁[ほうちょう]は 切[き]れが 良[い]いな。|Dieses Küchenmesser schneidet gut.|Nomen
ぎりぎり|ぎりぎり|gerade noch, knapp|会社[かいしゃ]の 始業時間[しぎょうじかん]にぎりぎりで 間[ま]に 合[あ]ったよ。|Ich habe es gerade noch pünktlich zum Arbeitsbeginn geschafft.|Adverb
券|券[けん]|Karte, Schein, Ticket|入場[にゅうじょう] 券[けん]をお 持[も]ちですか。|Haben Sie eine Eintrittskarte?|Nomen
回数券|回数券[かいすうけん]|Mehrfahrtenkarte|バスの 回数券[かいすうけん]を 買[か]いました。|Ich habe eine Mehrfahrtenkarte für den Bus gekauft.|Nomen
世代|世代[せだい]|Generation|私[わたし]は 彼[かれ]と 同[おな]じ 世代[せだい]です。|Ich gehöre zur selben Generation wie er.|Nomen
代わり|代[か]わり|Ersatz, anstelle von|ごま 油[あぶら]の 代[か]わりにオリーブ 油[ゆ]を 使[つか]いましょう。|Nehmen wir statt Sesamöl Olivenöl.|Nomen
近代|近代[きんだい]|Neuzeit, Moderne|近代[きんだい]の 技術[ぎじゅつ]の 発展[はってん]はものすごいです。|Die technische Entwicklung der Neuzeit ist gewaltig.|Nomen
古代|古代[こだい]|Altertum, Antike|古代[こだい]の 歴史[れきし]について 勉強[べんきょう]しました。|Ich habe mich mit der Geschichte des Altertums beschäftigt.|Nomen
代わる代わる|代[か]わる 代[が]わる|abwechselnd, der Reihe nach|皆[みな]が 代[か]わる 代[が]わる 彼[かれ]らを 祝福[しゅくふく]したよ。|Alle gratulierten ihnen der Reihe nach.|Adverb
ウサギ|ウサギ|Hase, Kaninchen|ウサギとカメの 話[はなし]を 知[し]っていますか。|Kennst du die Geschichte vom Hasen und der Schildkröte?|Nomen
指す|指[さ]す|zeigen auf, hindeuten|時計[とけい]が 12時[じゅうにじ]を 指[さ]してる。|Die Uhr zeigt zwölf.|Verb
小指|小指[こゆび]|kleiner Finger, kleiner Zeh|小指[こゆび]を 切[き]ってしまいました。|Ich habe mich in den kleinen Finger geschnitten.|Nomen
安定|安定[あんてい]|Stabilität, Ausgeglichenheit|彼[かれ]は 精神[せいしん]の 安定[あんてい]が 必要[ひつよう]よ。|Er braucht seelische Stabilität.|Nomen (mit する)
規定|規定[きてい]|Bestimmung, Vorschrift|代金[だいきん]には 規定[きてい]の 手数料[てすうりょう]が 含[ふく]まれます。|Im Preis ist die festgelegte Bearbeitungsgebühr enthalten.|Nomen (mit する)
定める|定[さだ]める|festlegen, bestimmen|税[ぜい]に 関[かん]する 新[あたら]しい 法律[ほうりつ]が 定[さだ]められたぞ。|Ein neues Steuergesetz wurde erlassen.|Verb
指定|指定[してい]|Bestimmung, Festlegung, Reservierung|指定[してい]された 席[せき]にお 座[すわ]りください。|Nehmen Sie bitte auf dem zugewiesenen Platz Platz.|Nomen (mit する)
悪化|悪化[あっか]|Verschlechterung|手[て]の 傷[きず]が 悪化[あっか]した。|Die Wunde an meiner Hand hat sich verschlimmert.|Nomen (mit する)
化学|化学[かがく]|Chemie|彼[かれ]は 化学[かがく]の 教授[きょうじゅ]です。|Er ist Professor für Chemie.|Nomen
グラウンド|グラウンド|Sportplatz|野球部[やきゅうぶ]はグラウンドで 練習[れんしゅう]しています。|Die Baseballmannschaft trainiert auf dem Sportplatz.|Nomen
消化|消化[しょうか]|Verdauung|彼[かれ]は 消化[しょうか] 不良[ふりょう]を 起[お]こしたんだ。|Er hatte eine Verdauungsstörung.|Nomen (mit する)
更に|更[さら]に|außerdem, noch mehr|彼[かれ]は 更[さら]に 質問[しつもん]を 続[つづ]けたの。|Er stellte noch weitere Fragen.|Adverb
今更|今更[いまさら]|jetzt noch, zu spät|今更[いまさら] 後悔[こうかい]しても、もう 遅[おそ]いよ。|Es jetzt noch zu bereuen ist zu spät.|Adverb
急増|急増[きゅうぞう]|sprunghafter Anstieg|最近[さいきん]ヨガをやる 人[ひと]が 急増[きゅうぞう]しています。|In letzter Zeit steigt die Zahl der Leute, die Yoga machen, sprunghaft an.|Nomen (mit する)
減少|減少[げんしょう]|Abnahme, Rückgang|この 国[くに]は 人口[じんこう]が 減少[げんしょう]しているわね。|In diesem Land geht die Bevölkerung zurück.|Nomen (mit する)
乗車券|乗車券[じょうしゃけん]|Fahrkarte|乗車券[じょうしゃけん]は 無[な]くさないように。|Verlieren Sie die Fahrkarte nicht.|Nomen
乗車|乗車[じょうしゃ]|Einsteigen, Mitfahren|このバスの 運賃[うんちん]は 乗車[じょうしゃ]するときに 払[はら]います。|In diesem Bus zahlt man den Fahrpreis beim Einsteigen.|Nomen (mit する)
さっぱり|さっぱり|überhaupt (nicht); erfrischt, klar|彼女[かのじょ]の 言[い]っていることがさっぱり 分[わ]からないの。|Ich verstehe überhaupt nicht, was sie sagt.|Adverb
乗客|乗客[じょうきゃく]|Fahrgast, Passagier(in)|乗客[じょうきゃく]の 一人[いち にん]の 具合[ぐあい]が 悪[わる]くなったの。|Einem der Fahrgäste ist schlecht geworden.|Nomen
雨降り|雨降[あめふ]り|Regen, Regenwetter|雨降[あめふ]りで 月[つき]が 見[み]えなかったね。|Wegen des Regens war der Mond nicht zu sehen.|Nomen
税金|税金[ぜいきん]|Steuer(n)|これは 税金[ぜいきん]の 無駄遣[むだづか]いだね。|Das ist Verschwendung von Steuergeldern.|Nomen
税|税[ぜい]|Steuer, Abgabe|これ 以上[いじょう] 税[ぜい]が 上[あ]がると 生活[せいかつ]できないね。|Wenn die Steuern noch weiter steigen, kann man nicht mehr davon leben.|Nomen
私立|私立[しりつ]|privat (Schule usw.)|私立[しりつ]の 大学[だいがく]は 学費[がくひ]が 高[たか]い。|An privaten Universitäten sind die Studiengebühren hoch.|Nomen
市立|市立[しりつ]|städtisch|娘[むすめ]は 市立[しりつ]の 学校[がっこう]に 通[かよ]っています。|Meine Tochter geht auf eine städtische Schule.|Nomen
県立|県立[けんりつ]|von der Präfektur getragen|彼[かれ]は 県立[けんりつ]の 高校[こうこう]に 通[かよ]っているよ。|Er geht auf eine Oberschule der Präfektur.|Nomen
シャッター|シャッター|Rollladen; Verschluss (Kamera)|丸[まる]いボタンを 押[お]すとシャッターが 閉[し]まります。|Wenn man den runden Knopf drückt, schließt sich der Rollladen.|Nomen
国立|国立[こくりつ]|staatlich, national|新[あたら]しい 国立[こくりつ] 劇場[げきじょう]が 完成[かんせい]しました。|Das neue Nationaltheater ist fertig.|Nomen
座席|座席[ざせき]|Sitzplatz|飛行機[ひこうき]の 座席[ざせき]はゆったりしていたよ。|Die Sitze im Flugzeug waren geräumig.|Nomen
客席|客席[きゃくせき]|Zuschauerplatz, Fahrgastsitz|私[わたし]たちは 客席[きゃくせき]に 座[すわ]ったんだ。|Wir haben im Zuschauerraum Platz genommen.|Nomen
欠点|欠点[けってん]|Fehler, Schwäche|欠点[けってん]のない 人間[にんげん]はいません。|Es gibt keinen Menschen ohne Fehler.|Nomen
欠ける|欠[か]ける|abbrechen, fehlen|お 気[き]に 入[い]りのカップが 欠[か]けてしまいました。|Meine Lieblingstasse hat eine Macke bekommen.|Verb
欠く|欠[か]く|ermangeln, fehlen lassen|彼[かれ]の 態度[たいど]は 誠意[せいい]を 欠[か]いています。|Seiner Haltung fehlt es an Aufrichtigkeit.|Verb
次回|次回[じかい]|nächstes Mal|次回[じかい]の 会議[かいぎ]は 2週間後[に しゅうかん ご]に 行[おこな]います。|Die nächste Besprechung findet in zwei Wochen statt.|Nomen
運用|運用[うんよう]|Verwaltung, Anlage, Betrieb|会計士[かいけいし]に 資金[しきん] 運用[うんよう]について 相談[そうだん]したよ。|Ich habe mich beim Steuerberater über Geldanlage beraten lassen.|Nomen (mit する)
スピーカー|スピーカー|Lautsprecher|このスピーカーは 音[おと]がいいですね。|Dieser Lautsprecher klingt gut.|Nomen
運営|運営[うんえい]|Leitung, Betrieb|その 事業[じぎょう]は 国[くに]が 運営[うんえい]しています。|Dieses Unternehmen wird vom Staat betrieben.|Nomen (mit する)
運賃|運賃[うんちん]|Fahrpreis|鉄道[てつどう]の 運賃[うんちん]が 値上[ねあ]げされたね。|Die Bahnpreise sind erhöht worden.|Nomen
運|運[うん]|Glück, Schicksal|彼[かれ]は 運[うん]のいい 男[おとこ]です。|Er ist ein Glückspilz.|Nomen
運送|運送[うんそう]|Transport, Spedition|彼[かれ]は 運送[うんそう] 会社[がいしゃ]に 勤[つと]めているの。|Er arbeitet bei einer Spedition.|Nomen (mit する)
回転|回転[かいてん]|Drehung, Rotation|彼[かれ]はボールに 回転[かいてん]を 掛[か]けたんだ。|Er hat dem Ball Drall gegeben.|Nomen (mit する)
転がる|転[ころ]がる|rollen, sich wälzen|猫[ねこ]は 砂[すな]の 上[うえ]で 転[ころ]がったんだ。|Die Katze wälzte sich im Sand.|Verb
転がす|転[ころ]がす|rollen, wälzen (etwas)|まず、 肉[にく]をパン 粉[こ]の 上[うえ]で 転[ころ]がします。|Zuerst wälzt man das Fleisch in Semmelbröseln.|Verb
セールスマン|セールスマン|Vertreter, Verkäufer (im Außendienst)|以前[いぜん]、セールスマンをしていたことがあります。|Ich habe früher einmal als Vertreter gearbeitet.|Nomen
移転|移転[いてん]|Umzug, Verlegung|彼[かれ]の 会社[かいしゃ]は 移転[いてん]したよ。|Seine Firma ist umgezogen.|Nomen (mit する)
移動|移動[いどう]|Fortbewegung, Ortswechsel|私[わたし]たちはレンタカーで 移動[いどう]しました。|Wir waren mit einem Mietwagen unterwegs.|Nomen (mit する)
行動|行動[こうどう]|Handlung, Verhalten|彼[かれ]の 行動[こうどう]は 理解[りかい]できない。|Sein Verhalten kann ich nicht verstehen.|Nomen (mit する)
運動会|運動会[うんどうかい]|Sportfest|運動会[うんどうかい]で 一位[いちい]になったよ。|Ich bin beim Sportfest Erster geworden.|Nomen
運動場|運動場[うんどうじょう]|Sportplatz, Schulhof|運動場[うんどうじょう]でサッカーをしよう。|Lass uns auf dem Sportplatz Fußball spielen.|Nomen
運動場|運動場[うんどうじょう]|Sportplatz, Schulhof|運動場[うんどうじょう]でサッカーをしよう。|Lass uns auf dem Sportplatz Fußball spielen.|Nomen
高速|高速[こうそく]|hohe Geschwindigkeit; Autobahn|高速[こうそく]バスで 東京[とうきょう]に 行[い]ったんだ。|Ich bin mit dem Fernbus nach Tokio gefahren.|Nomen
おしゃべり|おしゃべり|Plaudern, Geplauder|彼女[かのじょ]たちはおしゃべりに 夢中[むちゅう]です。|Sie sind ganz ins Plaudern vertieft.|Nomen
急速|急速[きゅうそく]|rasch, rasant|あの 国[くに]の 経済[けいざい]は 急速[きゅうそく]に 発展[はってん]しているのね。|Die Wirtschaft dieses Landes entwickelt sich rasant.|Adjektiv
高速道路|高速道路[こうそくどうろ]|Autobahn|高速道路[こうそく どうろ]は 混[こ]んでたよ。|Die Autobahn war voll.|Nomen
早速|早速[さっそく]|sofort, umgehend|では 早速[さっそく] 書類[しょるい]をお 送[おく]りします。|Dann schicke ich Ihnen die Unterlagen umgehend zu.|Adverb
時速|時速[じそく]|Stundengeschwindigkeit|新幹線[しんかんせん]の 最高[さいこう] 時速[じそく]は 300[さんびゃく]キロです。|Die Höchstgeschwindigkeit des Shinkansen beträgt 300 km/h.|Nomen
全速力|全速力[ぜんそくりょく]|volle Geschwindigkeit|久[ひさ]しぶりに 全速力[ぜんそくりょく]で 走[はし]りました。|Ich bin seit Langem wieder einmal so schnell gerannt, wie ich konnte.|Nomen
遅れ|遅[おく]れ|Verspätung, Rückstand|電車[でんしゃ]が 10分[じゅっ ぷん] 遅[おく]れで 到着[とうちゃく]したんだ。|Der Zug kam mit zehn Minuten Verspätung an.|Nomen
遅らす|遅[おく]らす|verzögern, verschieben|私[わたし]たちは 出発[しゅっぱつ]を 1日[いちにち] 遅[おく]らしたの。|Wir haben die Abreise um einen Tag verschoben.|Verb
カラオケ|カラオケ|Karaoke|カラオケで 思[おも]い 切[き]り 歌[うた]ったの。|Ich habe beim Karaoke nach Herzenslust gesungen.|Nomen
終える|終[お]える|beenden, abschließen|やっと 宿題[しゅくだい]を 終[お]えた。|Endlich habe ich die Hausaufgaben fertig.|Verb
最終|最終[さいしゅう]|letzte(r, s), abschließend|東京行[とうきょうゆ]きの 最終[さいしゅう] 電車[でんしゃ]は 何時[なんじ]ですか。|Wann fährt der letzte Zug nach Tokio?|Nomen
終点|終点[しゅうてん]|Endstation|電車[でんしゃ]の 終点[しゅうてん]で 降[お]りました。|Ich bin an der Endstation ausgestiegen.|Nomen
始終|始終[しじゅう]|ständig, die ganze Zeit|その 部屋[へや]は 始終[しじゅう]、 人[ひと]が 出入[でい]りしているね。|In dem Zimmer gehen ständig Leute ein und aus.|Adverb
終電|終電[しゅうでん]|letzter Zug|終電[しゅうでん]にやっと 間[ま]に 合[あ]った。|Ich habe den letzten Zug gerade noch erreicht.|Nomen
現地|現地[げんち]|vor Ort, am Ort des Geschehens|現地[げんち]の 天気[てんき]は 雨[あめ]です。|Vor Ort regnet es.|Nomen
現代|現代[げんだい]|Gegenwart, moderne Zeit|現代[げんだい]の 科学[かがく]の 進歩[しんぽ]には 驚[おどろ]くよ。|Der Fortschritt der heutigen Wissenschaft ist erstaunlich.|Nomen
現金|現金[げんきん]|Bargeld|代金[だいきん]は 現金[げんきん]でお 願[ねが]いします。|Zahlen Sie bitte bar.|な-Adjektiv
こっそり|こっそり|heimlich, verstohlen|彼女[かのじょ]はこっそりダイエットを 始[はじ]めたの。|Sie hat heimlich eine Diät angefangen.|Adverb
現れる|現[あらわ]れる|erscheinen, auftauchen|雲[くも]の 間[あいだ]から 太陽[たいよう]が 現[あらわ]れました。|Zwischen den Wolken kam die Sonne hervor.|Verb
現場|現場[げんば]|Schauplatz, Einsatzort, Baustelle|事故[じこ] 現場[げんば]には 入[はい]れません。|Die Unfallstelle darf nicht betreten werden.|Nomen
現住所|現住所[げんじゅうしょ]|jetzige Adresse|ここには 現住所[げんじゅうしょ]を 書[か]いてください。|Schreiben Sie hier bitte Ihre jetzige Adresse hin.|Nomen
現す|現[あらわ]す|zeigen, zum Vorschein bringen|彼[かれ]はようやく 姿[すがた]を 現[あらわ]しましたね。|Endlich ist er aufgetaucht.|Verb
現れ|現[あらわ]れ|Ausdruck, Zeichen|それは 彼女[かのじょ]の 期待[きたい]の 現[あらわ]れです。|Das ist ein Zeichen ihrer Erwartungen.|Nomen
在学|在学[ざいがく]|Eingeschriebensein (an Schule, Uni)|姉[あね]は 大学[だいがく]に 在学[ざいがく]しています。|Meine große Schwester studiert an der Universität.|Nomen (mit する)
現実|現実[げんじつ]|Wirklichkeit, Realität|現実[げんじつ]は 予想[よそう]より 厳[きび]しかった。|Die Wirklichkeit war härter als erwartet.|Nomen
ジョギング|ジョギング|Jogging|私[わたし]は 毎日[まいにち]ジョギングをしています。|Ich jogge jeden Tag.|Nomen (mit する)
実は|実[じつ]は|eigentlich, um ehrlich zu sein|あれは 実[じつ]は 私[わたし]の 勘違[かんちが]いでした。|Das war eigentlich ein Missverständnis von mir.|
実用|実用[じつよう]|praktischer Gebrauch|これはとても 実用[じつよう] 的[てき]なサイトだね。|Das ist eine sehr praktische Website.|Nomen
実力|実力[じつりょく]|wirkliches Können|二人[ふたり]の 実力[じつりょく]は 互角[ごかく]です。|Die beiden sind gleich stark.|Nomen
実習|実習[じっしゅう]|Praktikum, praktische Übung|今日[きょう]は 料理[りょうり]の 実習[じっしゅう]があった。|Heute hatten wir praktischen Kochunterricht.|Nomen (mit する)
実物|実物[じつぶつ]|der echte Gegenstand, Original|何[なに]かの 説明[せつめい]をする 時[とき]は 実物[じつぶつ]を 使[つか]うとわかりやすいの。|Wenn man etwas erklärt, ist es mit dem echten Gegenstand leichter zu verstehen.|Nomen
実に|実[じつ]に|wirklich, wahrhaftig|昨日[さくじつ]のコンサートは 実[じつ]に 素晴[すば]らしかったよ。|Das Konzert gestern war wirklich großartig.|Adverb
過ごす|過[す]ごす|verbringen (Zeit)|夏休[なつやす]みを 高原[こうげん]で 過[す]ごしました。|Ich habe die Sommerferien im Hochland verbracht.|Verb
あれこれ|あれこれ|dies und das, allerlei|服[ふく]を 買[か]うのにあれこれ 迷[まよ]いました。|Beim Kleiderkauf konnte ich mich lange nicht entscheiden.|Nomen
経過|経過[けいか]|Verlauf, Ablauf|手術後[しゅじゅつ ご]の 経過[けいか]は 順調[じゅんちょう]です。|Der Verlauf nach der Operation ist gut.|Nomen (mit する)
過ち|過[あやま]ち|Fehler, Vergehen|同[おな]じ 過[あやま]ちを 繰[く]り 返[かえ]さないことだ。|Man darf denselben Fehler nicht wiederholen.|Nomen
去る|去[さ]る|weggehen, verlassen|去[さ]る 者[もの]は 追[お]わず。|Wer geht, dem läuft man nicht nach.|Verb
活発|活発[かっぱつ]|lebhaft, rege|活発[かっぱつ]な 意見[いけん]が 交[かわ]されたの。|Es wurden lebhaft Meinungen ausgetauscht.|な-Adjektiv
始発|始発[しはつ]|erste Abfahrt (des Tages)|始発[しはつ]の 電車[でんしゃ]に 乗[の]りました。|Ich habe den ersten Zug genommen.|Nomen
表す|表[あらわ]す|ausdrücken, darstellen|私[わたし]たちは 万歳[ばんざい]をして 喜[よろこ]びを 表[あらわ]しました。|Wir drückten unsere Freude mit Hurrarufen aus.|Verb
言い表わす|言[い]い 表[あら]わす|in Worte fassen|この 気持[きも]ちをうまく 言[い]い 表[あら]わせません。|Ich kann dieses Gefühl nicht gut in Worte fassen.|Verb
絵本|絵本[えほん]|Bilderbuch|その 子[こ]は 絵本[えほん]が 大好[だいす]きです。|Das Kind liebt Bilderbücher.|Nomen
およそ|およそ|ungefähr, etwa|家[いえ]から 駅[えき]までおよそ 1[いち]キロあります。|Von zu Hause bis zum Bahnhof ist es etwa ein Kilometer.|Adverb
雑音|雑音[ざつおん]|Störgeräusch, Lärm|雑音[ざつおん]がひどくて 声[こえ]が 聞[き]こえません。|Die Störgeräusche sind so stark, dass ich die Stimme nicht höre.|Nomen
足音|足音[あしおと]|Geräusch von Schritten|廊下[ろうか]から 大[おお]きな 足音[あしおと]が 聞[き]こえた。|Vom Flur waren laute Schritte zu hören.|Nomen
音読み|音読[おんよ]み|On-Lesung (sinojapanische Lesung)|この 漢字[かんじ]の 音読[おんよ]みは 何[なん]ですか。|Wie lautet die On-Lesung dieses Kanji?|Nomen (mit する)
五十音|五十音[ごじゅうおん]|die 50-Laute-Tafel (japanisches Silbenalphabet)|名前[なまえ]は 五十音[ごじゅうおん] 順[じゅん]に 並[なら]んでいます。|Die Namen sind in der Reihenfolge des Silbenalphabets geordnet.|Nomen
気楽|気楽[きらく]|unbeschwert, sorglos|将来[しょうらい]は 気楽[きらく]な 生活[せいかつ]がしたいです。|Später möchte ich ein sorgloses Leben führen.|な-Adjektiv
行楽|行楽[こうらく]|Ausflug, Vergnügungsfahrt|秋[あき]は 行楽[こうらく]にいい 季節[きせつ]ですね。|Der Herbst ist eine gute Jahreszeit für Ausflüge.|Nomen
薬指|薬指[くすりゆび]|Ringfinger|彼女[かのじょ]は 薬指[くすりゆび]に 指輪[ゆびわ]をはめています。|Sie trägt einen Ring am Ringfinger.|Nomen
サークル|サークル|Zirkel, Hochschulgruppe|どのサークルに 入[はい]るか 迷[まよ]っちゃった。|Ich wusste nicht, welcher Gruppe ich beitreten sollte.|Nomen
食欲|食欲[しょくよく]|Appetit|今日[きょう]は 食欲[しょくよく]がありません。|Heute habe ich keinen Appetit.|Nomen
映る|映[うつ]る|sich spiegeln, zu sehen sein|水面[みなも]に 月[つき]が 映[うつ]っているね。|Der Mond spiegelt sich auf der Wasseroberfläche.|Verb
映す|映[うつ]す|spiegeln, projizieren|彼女[かのじょ]は 自分[じぶん]の 姿[すがた]を 鏡[かがみ]に 映[うつ]したの。|Sie betrachtete sich im Spiegel.|Verb
企画|企画[きかく]|Planung, Projekt|独身者[どくしんしゃ]パーティーを 企画[きかく]した。|Ich habe eine Singleparty organisiert.|Nomen (mit する)
画家|画家[がか]|Maler(in)|この 絵[え]はスペインの 画家[がか]が 描[か]きました。|Dieses Bild hat ein spanischer Maler gemalt.|Nomen
区画|区画[くかく]|Parzelle, Abschnitt|あそこの 3[さん] 区画[くかく]は 売[う]り 出[だ]し 中[ちゅう]です。|Die drei Parzellen dort stehen zum Verkauf.|Nomen
画面|画面[がめん]|Bildschirm|テレビの 画面[がめん]が 明[あか]るすぎる。|Der Fernsehbildschirm ist zu hell.|Nomen
キリスト|キリスト|Christus|キリストの 母親[ははおや]の 名前[なまえ]はマリアだ。|Die Mutter von Christus hieß Maria.|Nomen
地面|地面[じめん]|Erdboden|地面[じめん]に 何[なに]か 絵[え]が 描[か]いてあるぞ。|Auf dem Boden ist irgendein Bild gemalt.|Nomen
水面|水面[すいめん]|Wasseroberfläche|湖[みずうみ]の 水面[すいめん]に 小[ちい]さく 波[なみ]が 立[た]っているな。|Auf dem See kräuseln sich kleine Wellen.|Nomen
一面|一面[いちめん]|die ganze Fläche; eine Seite|外[そと]は 一面[いちめん]の 雪景色[ゆきげしき]だったね。|Draußen war alles eine einzige Schneelandschaft.|Nomen
真実|真実[しんじつ]|Wahrheit|真実[しんじつ]は 一[ひと]つです。|Es gibt nur eine Wahrheit.|Nomen
真理|真理[しんり]|Wahrheit (philosophisch)|彼[かれ]は 人生[じんせい]の 真理[しんり]を 求[もと]めて 旅[たび]に 出[で]た。|Er ging auf Reisen, um die Wahrheit des Lebens zu suchen.|Nomen
金色|金色[きんいろ]|goldfarben|あの 寺[てら]の 屋根[やね]は 金色[きんいろ]ですね。|Das Dach des Tempels dort ist golden.|Nomen
形式|形式[けいしき]|Form, Format|書類[しょるい]は 形式[けいしき]を 守[まも]って 作[つく]ってください。|Erstellen Sie die Unterlagen bitte im vorgegebenen Format.|Nomen
小型|小型[こがた]|klein, Kleinformat|小型[こがた]のスーツケースを 買[か]いました。|Ich habe einen kleinen Koffer gekauft.|Nomen
あっさり|あっさり|leicht, schlicht; ohne Umschweife|そうあっさり 言[い]わないで。|Sag das nicht so leichthin.|Adverb
型|型[かた]|Modell, Typ, Form|新[あたら]しい 型[かた]のカメラを 買[か]いました。|Ich habe eine Kamera des neuen Modells gekauft.|Nomen
一種|一種[いっしゅ]|eine Art von|それは 果物[くだもの]の 一種[いっしゅ]です。|Das ist eine Obstart.|Nomen
各種|各種[かくしゅ]|verschiedene Arten, allerlei|図書館[としょかん]には 各種[かくしゅ]の 雑誌[ざっし]が 揃[そろ]っています。|In der Bibliothek gibt es die verschiedensten Zeitschriften.|Nomen
一種|一種[いっしゅ]|eine Art, gewissermaßen|これは 一種[いっしゅ] 独特[どくとく]の 味[あじ]がするね。|Das hat einen ganz eigentümlichen Geschmack.|Adverb
人種|人種[じんしゅ]|Menschenrasse, Ethnie|この 国[くに]には 様々[さまざま]な 人種[じんしゅ]がいます。|In diesem Land leben viele verschiedene Ethnien.|Nomen
種目|種目[しゅもく]|Disziplin, Posten, Sparte|その 選手[せんしゅ]は 2[に] 種目[しゅもく]でメダルを 取[と]ったわ。|Der Sportler hat in zwei Disziplinen Medaillen geholt.|Nomen
人類|人類[じんるい]|Menschheit|人類[じんるい]は 2本[にほん]の 足[あし]で 歩[ある]きます。|Der Mensch geht auf zwei Beinen.|Nomen
せっせと|せっせと|fleißig, emsig|彼[かれ]は 朝[あさ]から 晩[ばん]までせっせと 働[はたら]いたの。|Er hat von morgens bis abends fleißig gearbeitet.|Adverb
書類|書類[しょるい]|Unterlagen, Dokumente|書類[しょるい]を 10枚[じゅうまい]コピーしました。|Ich habe die Unterlagen zehnmal kopiert.|Nomen
接近|接近[せっきん]|Annäherung|台風[たいふう]が 接近[せっきん]していますね。|Ein Taifun nähert sich.|Nomen (mit する)
間接|間接[かんせつ]|indirekt|それは 間接[かんせつ] 的[てき]な 原因[げんいん]の 一[ひと]つです。|Das ist eine der indirekten Ursachen.|Nomen
接する|接[せっ]する|in Kontakt kommen, angrenzen|子供[こども]が 動物[どうぶつ]に 接[せっ]するのは 良[よ]いことです。|Es ist gut, wenn Kinder mit Tieren in Berührung kommen.|Verb
角度|角度[かくど]|Winkel|この 角度[かくど]からは 画面[がめん]が 見[み]えにくいですね。|Aus diesem Winkel ist der Bildschirm schlecht zu sehen.|Nomen
三角形|三角形[さんかくけい]|Dreieck|この 三角形[さんかくけい]の 面積[めんせき]を 出[だ]しなさい。|Berechne die Fläche dieses Dreiecks.|Nomen
曲線|曲線[きょくせん]|Kurve, gekrümmte Linie|この 道[みち]は、ゆるい 曲線[きょくせん]を 描[えが]いているよ。|Diese Straße verläuft in einer sanften Kurve.|Nomen
カタログ|カタログ|Katalog|カタログを 見[み]て 注文[ちゅうもん]したんだ。|Ich habe aus dem Katalog bestellt.|Nomen
作曲|作曲[さっきょく]|Komposition (Musik)|この 曲[きょく]は 誰[だれ]が 作曲[さっきょく]したのですか。|Wer hat dieses Stück komponiert?|Nomen (mit する)
共通|共通[きょうつう]|Gemeinsamkeit, gemeinsam|私[わたし]たちは 共通[きょうつう]の 趣味[しゅみ]を 持[も]っています。|Wir haben ein gemeinsames Hobby.|Nomen (mit する)
共通語|共通語[きょうつうご]|gemeinsame Sprache, Verkehrssprache|インドでは 英語[えいご]は 共通語[きょうつうご]だよ。|In Indien ist Englisch Verkehrssprache.|Nomen
共同|共同[きょうどう]|gemeinsam, Zusammenarbeit|2社[にしゃ]が 共同[きょうどう]で 新製品[しんせいひん]を 開発[かいはつ]したんだ。|Zwei Firmen haben gemeinsam ein neues Produkt entwickelt.|Nomen (mit する)
合同|合同[ごうどう]|gemeinsam, vereint|3社[さんしゃ] 合同[ごうどう]で 新作[しんさく]の 発表会[はっぴょうかい]を 開[ひら]きました。|Drei Firmen haben gemeinsam ihre Neuheiten vorgestellt.|Nomen (mit する)
一同|一同[いちどう]|alle (Anwesenden)|一同[いちどう] 顔[かお]を 見合[みあ]わせました。|Alle sahen einander an.|Nomen
以前|以前[いぜん]|früher, zuvor|以前[いぜん] 彼[かれ]はこの 町[まち]に 住[す]んでいたんだ。|Früher hat er in dieser Stadt gewohnt.|Nomen
ジャズ|ジャズ|Jazz|昨日[きのう]の 夜[よる]、ジャズを 聴[き]きに 行[い]きました。|Gestern Abend bin ich Jazz hören gegangen.|Nomen
以下|以下[いか]|unter, weniger als; im Folgenden|数学[すうがく]が 平均点[へいきんてん] 以下[いか]だった。|In Mathematik lag ich unter dem Durchschnitt.|Nomen
以降|以降[いこう]|ab, seit|夕方[ゆうがた] 以降[いこう]にお 電話[でんわ]を 下[くだ]さい。|Rufen Sie mich bitte ab dem frühen Abend an.|Nomen
以来|以来[いらい]|seit, seitdem|それ 以来[いらい] 彼女[かのじょ]に 会[あ]ってない。|Seitdem habe ich sie nicht mehr gesehen.|Nomen
以後|以後[いご]|von nun an, danach|すみません、 以後[いご] 気[き]を 付[つ]けます。|Entschuldigung, ich passe künftig besser auf.|Nomen
下宿|下宿[げしゅく]|Untermiete, Pension|親類[しんるい]の 家[いえ]に 4年間[よねんかん] 下宿[げしゅく]しました。|Ich habe vier Jahre bei Verwandten zur Untermiete gewohnt.|Nomen (mit する)
漢和|漢和[かんわ]|chinesisch-japanisch|漢和[かんわ] 辞典[じてん]で 漢字[かんじ]の 意味[いみ]を 調[しら]べたの。|Ich habe die Bedeutung des Kanji im Kanji-Wörterbuch nachgeschlagen.|Nomen
英和|英和[えいわ]|englisch-japanisch|英和[えいわ] 辞書[じしょ]をよく 使[つか]います。|Ich benutze oft ein englisch-japanisches Wörterbuch.|Nomen
西洋|西洋[せいよう]|der Westen, das Abendland|私[わたし]は 西洋[せいよう]の 建築[けんちく]に 興味[きょうみ]があります。|Ich interessiere mich für westliche Architektur.|Nomen
サイン|サイン|Unterschrift, Autogramm; Zeichen|ここにサインしてください。|Unterschreiben Sie bitte hier.|Nomen (mit する)
海洋|海洋[かいよう]|Ozean, Meer|その 昔航海士達[むかし こうかいしたち]は 未踏[みとう]の 地[ち]を 求[もと]め 海洋[かいよう]に 乗[の]り 出[だ]しました。|Einst stachen Seefahrer in See, um unbekannte Länder zu suchen.|Nomen
西洋人|西洋人[せいようじん]|Mensch aus dem Westen|西洋人[せいようじん]は 正座[せいざ]が 苦手[にがて]よ。|Menschen aus dem Westen tun sich mit dem Kniesitz schwer.|Nomen
制服|制服[せいふく]|Uniform|私[わたし]の 学校[がっこう]には 制服[せいふく]がありません。|An meiner Schule gibt es keine Uniform.|Nomen
室内|室内[しつない]|im Zimmer, drinnen|雨[あめ]の 日[ひ]は 子供[こども]を 室内[しつない]で 遊[あそ]ばせます。|An Regentagen lasse ich die Kinder drinnen spielen.|Nomen
親子|親子[おやこ]|Eltern und Kind|池[いけ]に 鴨[かも]の 親子[おやこ]がいます。|Auf dem Teich ist eine Entenmutter mit ihren Küken.|Nomen
親類|親類[しんるい]|Verwandte|彼[かれ]は 幼[おさな]い 時[とき]に 親類[しんるい]に 預[あず]けられたんだ。|Er wurde als kleines Kind bei Verwandten untergebracht.|Nomen
親しむ|親[した]しむ|vertraut werden mit|ハイキングは 自然[しぜん]に 親[した]しむ 良[い]い 機会[きかい]ですよ。|Wandern ist eine gute Gelegenheit, der Natur näherzukommen.|Verb
ごまかす|ごまかす|täuschen, sich herausreden|彼[かれ]は 質問[しつもん]の 答[こた]えをごまかしたね。|Er ist der Frage ausgewichen.|Verb
親切|親切[しんせつ]|Freundlichkeit|ご 親切[しんせつ]は 決[けっ]して 忘[わす]れません。|Ihre Freundlichkeit werde ich nie vergessen.|Nomen
親友|親友[しんゆう]|enge(r) Freund(in)|彼[かれ]は 私[わたし]の 親友[しんゆう]です。|Er ist mein bester Freund.|Nomen
親指|親指[おやゆび]|Daumen|親指[おやゆび]を 怪我[けが]しました。|Ich habe mich am Daumen verletzt.|Nomen
親しみ|親[した]しみ|Vertrautheit, Zuneigung|彼[かれ]には 誰[だれ]もが 親[した]しみを 感[かん]じます。|Jeder fühlt sich ihm nahe.|Nomen
水族館|水族館[すいぞくかん]|Aquarium (Einrichtung)|ここの 水族館[すいぞくかん]にはイルカがいます。|In diesem Aquarium gibt es Delfine.|Nomen
歳末|歳末[さいまつ]|Jahresende|デパートの 歳末[さいまつ] 大売出[おおうりだ]しが 始[はじ]まったよ。|Der große Jahresendverkauf der Kaufhäuser hat begonnen.|Nomen
姉妹|姉妹[しまい]|Schwestern|うちは 3人[さんにん] 姉妹[しまい]です。|Wir sind drei Schwestern.|Nomen
インテリ|インテリ|Intellektuelle(r), gebildet|彼女[かのじょ]はインテリで、しかも 美人[びじん]ですね。|Sie ist gebildet und obendrein schön.|Nomen
次第に|次第[しだい]に|allmählich, nach und nach|その 事件[じけん]は 次第[しだい]に 忘[わす]れられていったのさ。|Der Vorfall geriet allmählich in Vergessenheit.|Adverb
次第|次第[しだい]|sobald; je nach|連絡[れんらく]があり 次第[しだい] 出発[しゅっぱつ]します。|Sobald ich Bescheid bekomme, breche ich auf.|Nomen
息|息[いき]|Atem|大[おお]きく 息[いき]を 吸[す]ってください。|Atmen Sie bitte tief ein.|Nomen
休息|休息[きゅうそく]|Ruhepause, Erholung|休息[きゅうそく]をとることは 大切[たいせつ]です。|Es ist wichtig, Pausen zu machen.|Nomen (mit する)
消費者|消費者[しょうひしゃ]|Verbraucher(in)|この 法律[ほうりつ]は 消費者[しょうひしゃ]を 守[まも]るためのものです。|Dieses Gesetz dient dem Schutz der Verbraucher.|Nomen
学者|学者[がくしゃ]|Wissenschaftler(in), Gelehrte(r)|彼[かれ]は 作家[さっか]であり 学者[がくしゃ]です。|Er ist Schriftsteller und Gelehrter.|Nomen
後者|後者[こうしゃ]|der/die/das Letztere|正[ただ]しい 答[こたえ]は 後者[こうしゃ]です。|Die richtige Antwort ist die letztere.|Nomen
作者|作者[さくしゃ]|Verfasser(in), Autor(in)|この 本[ほん]の 作者[さくしゃ]は 誰[だれ]ですか。|Wer ist der Autor dieses Buches?|Nomen
いちいち|いちいち|einzeln, bei jeder Kleinigkeit|彼[かれ]はいちいち 私[わたし]に 指図[さしず]する。|Er gibt mir bei jeder Kleinigkeit Anweisungen.|Adverb
前者|前者[ぜんしゃ]|der/die/das Erstere|私[わたし]は 前者[ぜんしゃ]の 方[ほう]が 優[すぐ]れていると 思[おも]います。|Ich halte das Erstere für besser.|Nomen
結局|結局[けっきょく]|schließlich, letzten Endes|彼[かれ]は 結局[けっきょく] 何[なに]を 言[い]いたかったのだろう。|Was wollte er letzten Endes eigentlich sagen?|Adverb
新婚|新婚[しんこん]|frisch verheiratet|妹夫婦[いもうとふうふ]は 新婚[しんこん]です。|Meine kleine Schwester und ihr Mann sind frisch verheiratet.|Nomen
婚約|婚約[こんやく]|Verlobung|二人[ふたり]は 婚約[こんやく]しています。|Die beiden sind verlobt.|Nomen (mit する)
課長|課長[かちょう]|Abteilungsleiter(in), Sektionsleiter(in)|彼[かれ]は 課長[かちょう]に 昇進[しょうしん]しました。|Er wurde zum Sektionsleiter befördert.|Nomen
効く|効[き]く|wirken, helfen|この 薬[くすり]はあまりよく 効[き]かないよ。|Dieses Medikament wirkt nicht besonders gut.|Verb
効力|効力[こうりょく]|Wirkung, Gültigkeit|その 薬[くすり]は 効力[こうりょく]が 強[つよ]いよ。|Das Medikament hat eine starke Wirkung.|Nomen
ストライキ|ストライキ|Streik|従業員[じゅうぎょういん]は 明日[あす]からストライキです。|Die Beschäftigten streiken ab morgen.|Nomen
効き目|効[き]き 目[め]|Wirkung, Wirksamkeit|この 薬[くすり]の 効[き]き 目[め]は 素晴[すば]らしいの。|Die Wirkung dieses Medikaments ist hervorragend.|Nomen
自動|自動[じどう]|automatisch|このドアは 自動[じどう]よ。|Diese Tür ist automatisch.|Nomen
自国|自国[じこく]|das eigene Land|自国[じこく]の 文化[ぶんか]を 大切[たいせつ]にしましょう。|Pflegen wir die Kultur unseres eigenen Landes.|Nomen
各自|各自[かくじ]|jede(r) einzelne, jeweils selbst|ごみは 各自[かくじ]で 持[も]ち 帰[かえ]ってください。|Bitte nehmen Sie Ihren Müll jeweils selbst mit.|Nomen
自然に|自然[しぜん]に|natürlich, von selbst|硬[かた]くならないで、 自然[しぜん]に 話[はな]して 下[くだ]さい。|Sprechen Sie bitte ganz natürlich und unverkrampft.|Adverb
経由|経由[けいゆ]|über, via|メールを 経由[けいゆ]して 広[ひろ]がるウィルスもあります。|Es gibt auch Viren, die sich über E-Mails verbreiten.|Nomen (mit する)
自信|自信[じしん]|Selbstvertrauen|あの 人[ひと]の 顔[かお]には 自信[じしん]があふれているね。|Sein Gesicht strahlt Selbstvertrauen aus.|Nomen
あんまり|あんまり|nicht besonders (umgangssprachlich); zu sehr|これはあんまり 好[す]きじゃないな。|Das mag ich nicht besonders.|Adverb
信用|信用[しんよう]|Vertrauen, Glaubwürdigkeit|彼[かれ]の 言[い]うことは 信用[しんよう]できない。|Was er sagt, kann man nicht glauben.|Nomen (mit する)
信頼|信頼[しんらい]|Vertrauen, Verlass|私[わたし]は 部下[ぶか]を 信頼[しんらい]しています。|Ich vertraue meinen Mitarbeitern.|Nomen (mit する)
依頼|依頼[いらい]|Bitte, Auftrag|彼[かれ]に 協力[きょうりょく]を 依頼[いらい]しました。|Ich habe ihn um Mitarbeit gebeten.|Nomen (mit する)
人民|人民[じんみん]|das Volk|彼[かれ]は 人民[じんみん]のための 政治[せいじ]を 行[おこな]った。|Er machte Politik für das Volk.|Nomen
国民|国民[こくみん]|Volk, Staatsbürger|国民[こくみん]の 安全[あんぜん]が 最[もっと]も 大切[たいせつ]です。|Die Sicherheit der Bürger ist das Wichtigste.|Nomen
主要|主要[しゅよう]|hauptsächlich, wichtigste(r, s)|IT産業[あいてぃー さんぎょう]はインドの 主要[しゅよう] 産業[さんぎょう]よね。|Die IT-Branche ist ein wichtiger Wirtschaftszweig Indiens.|な-Adjektiv
主に|主[おも]に|hauptsächlich, vor allem|この 商品[しょうひん]は 主[おも]に 女性[じょせい]に 人気[にんき]がありまして。|Dieses Produkt ist vor allem bei Frauen beliebt.|Adverb
主役|主役[しゅやく]|Hauptrolle|彼[かれ]は 学校[がっこう]の 劇[げき]で 主役[しゅやく]に 選[えら]ばれたよ。|Er wurde für die Hauptrolle im Schultheater ausgewählt.|Nomen
うるさい|うるさい|lästig, nörglerisch; laut|あまりうるさく 言[い]わないで 下[くだ]さい。|Nörgeln Sie bitte nicht so viel.|Adjektiv
主体|主体[しゅたい]|Subjekt, tragende Kraft|政治[せいじ]は 国民[こくみん] 主体[しゅたい]であるべきです。|Politik sollte vom Volk ausgehen.|Nomen
主題|主題[しゅだい]|Thema, Hauptthema|この 小説[しょうせつ]の 主題[しゅだい]は 反戦[はんせん]です。|Das Thema dieses Romans ist die Ablehnung des Krieges.|Nomen
自主|自主[じしゅ]|Eigeninitiative, Selbstständigkeit|その 選手[せんしゅ]は 自主[じしゅ]トレーニングを 始[はじ]めたの。|Der Spieler hat mit selbstständigem Training begonnen.|Nomen
主食|主食[しゅしょく]|Grundnahrungsmittel|アジアの 主食[しゅしょく]は 米[こめ]です。|Das Grundnahrungsmittel Asiens ist Reis.|Nomen
主|主[おも]|hauptsächlich, Haupt-|彼女[かのじょ]の 主[おも]な 仕事[しごと]は 接客[せっきゃく]だよ。|Ihre Hauptaufgabe ist die Kundenbetreuung.|Adjektiv
主義|主義[しゅぎ]|Prinzip, Grundsatz, -ismus|私[わたし]は 車[くるま]は 持[も]たない 主義[しゅぎ]です。|Ich habe aus Prinzip kein Auto.|Nomen
共産主義|共産主義[きょうさんしゅぎ]|Kommunismus|その 国[くに]は 共産主義[きょうさんしゅぎ]の 国[くに]だよ。|Dieses Land ist ein kommunistisches Land.|Nomen
カーブ|カーブ|Kurve|このカーブは 気[き]をつけて。|Sei vorsichtig in dieser Kurve.|Nomen (mit する)
義理|義理[ぎり]|Pflichtgefühl, moralische Verpflichtung|彼[かれ]は 義理[ぎり]を 大切[たいせつ]にしています。|Ihm sind seine Verpflichtungen wichtig.|Nomen
議会|議会[ぎかい]|Parlament, Rat|議会[ぎかい]で 区[く]の 来年[らいねん]の 予定[よてい]が 話[はな]し 合[あ]われたんだ。|Im Rat wurde über die Pläne des Bezirks für das nächste Jahr beraten.|Nomen
協議|協議[きょうぎ]|Beratung, Verhandlung|委員会[いいんかい]はその 問題[もんだい]について 協議[きょうぎ]しましたわ。|Der Ausschuss hat über das Problem beraten.|Nomen (mit する)
議長|議長[ぎちょう]|Vorsitzende(r), Präsident(in)|議長[ぎちょう]が 開会[かいかい]の 挨拶[あいさつ]をしました。|Der Vorsitzende sprach zur Eröffnung ein Grußwort.|Nomen
議題|議題[ぎだい]|Tagesordnungspunkt, Thema|今日[きょう]の 議題[ぎだい]は 面白[おもしろ]そうです。|Das heutige Thema klingt interessant.|Nomen
議論|議論[ぎろん]|Diskussion, Debatte|父[ちち]は 議論[ぎろん] 好[ず]きです。|Mein Vater diskutiert gern.|Nomen (mit する)
結論|結論[けつろん]|Schlussfolgerung, Ergebnis|今日[きょう]の 話[はな]し 合[あ]いでは 結論[けつろん]が 出[で]なかった。|Bei der heutigen Besprechung kam man zu keinem Ergebnis.|Nomen (mit する)
ガイド|ガイド|Führer(in), Reiseleitung|ガイドつきの 旅行[りょこう]を 申[もう]し 込[こ]んだの。|Ich habe eine geführte Reise gebucht.|Nomen (mit する)
言論|言論[げんろん]|Rede, Meinungsäußerung|言論[げんろん]の 自由[じゆう]は 国民[こくみん]の 権利[けんり]です。|Die Redefreiheit ist ein Recht des Volkes.|Nomen
世論|世論[せろん]|öffentliche Meinung|世論[せろん]はあなたの 味方[みかた]です。|Die öffentliche Meinung ist auf deiner Seite.|Nomen
違反|違反[いはん]|Verstoß|彼[かれ]は 校則[こうそく]に 違反[いはん]しました。|Er hat gegen die Schulordnung verstoßen.|Nomen (mit する)
応じる|応[おう]じる|entsprechen, eingehen auf|私[わたし]は 彼[かれ]の 要望[ようぼう]に 応[おう]じました。|Ich bin auf seinen Wunsch eingegangen.|Verb
応用|応用[おうよう]|Anwendung|このレシピはいろいろ 応用[おうよう]できます。|Dieses Rezept lässt sich vielfältig abwandeln.|Nomen (mit する)
一応|一応[いちおう]|vorläufig, für alle Fälle|彼[かれ]にも 一応[いちおう] 知[し]らせておいたほうがいいだろう。|Es wäre wohl besser, ihm vorsichtshalber auch Bescheid zu sagen.|Adverb
回答|回答[かいとう]|Antwort, Beantwortung|アンケートに 回答[かいとう]しました。|Ich habe die Umfrage beantwortet.|Nomen (mit する)
かえる|かえる|Frosch|田[た]んぼの 中[なか]でかえるが 合唱[がっしょう]している。|Im Reisfeld quaken die Frösche im Chor.|Nomen
解答|解答[かいとう]|Lösung, Antwort (auf eine Aufgabe)|インターネットで 試験[しけん]の 解答[かいとう]を 確認[かくにん]したんだ。|Ich habe die Lösungen der Prüfung im Internet überprüft.|Nomen (mit する)
区別|区別[くべつ]|Unterscheidung|あの 二人[ふたり]はそっくりで 区別[くべつ]できない。|Die beiden sehen sich so ähnlich, dass man sie nicht unterscheiden kann.|Nomen (mit する)
差別|差別[さべつ]|Diskriminierung|彼[かれ]は 差別[さべつ]をなくす 運動[うんどう]をしています。|Er setzt sich für die Abschaffung von Diskriminierung ein.|Nomen (mit する)
性別|性別[せいべつ]|Geschlecht|出席者[しゅっせきしゃ]を 性別[せいべつ]で 分[わ]けてください。|Teilen Sie die Teilnehmer bitte nach Geschlecht ein.|Nomen
一般に|一般[いっぱん]に|im Allgemeinen|一般[いっぱん]に 老人[ろうじん]は 早起[はやお]きです。|Im Allgemeinen stehen alte Leute früh auf.|Adverb
経済的|経済的[けいざいてき]|wirtschaftlich, sparsam|経済的[けいざいてき]な 効果[こうか]は 計[はか]り 知[し]れません。|Die wirtschaftlichen Auswirkungen sind unabsehbar.|Adjektiv
自主的|自主的[じしゅてき]|eigenständig, freiwillig|学生[がくせい]たちは 自主的[じしゅてき]に 勉強会[べんきょうかい]を 開[ひら]いたわよ。|Die Studenten haben aus eigener Initiative eine Lerngruppe gegründet.|Adjektiv
合理的|合理的[ごうりてき]|rational, vernünftig|彼女[かのじょ]は 合理的[ごうりてき]な 考[かんが]え 方[かた]をする 人[ひと]です。|Sie ist ein Mensch, der rational denkt.|Adjektiv
ずれる|ずれる|verrutschen, abweichen|ポスターの 位置[いち]が 少[すこ]しずれているよ。|Das Poster hängt etwas schief.|Verb
形式的|形式的[けいしきてき]|formal, formell|彼[かれ]は 形式的[けいしきてき]な 質問[しつもん]をしただけだった。|Er stellte nur formale Fragen.|Adjektiv
実用的|実用的[じつようてき]|praktisch, zweckmäßig|彼[かれ]の 発明品[はつめいひん]はみな 実用的[じつようてき]だよ。|Seine Erfindungen sind alle praktisch.|Adjektiv
女性的|女性的[じょせいてき]|weiblich, feminin|彼[かれ]は 言葉遣[ことばづか]いが 少[すこ]し 女性的[じょせいてき]だね。|Seine Ausdrucksweise ist ein wenig feminin.|Adjektiv
水平|水平[すいへい]|waagerecht, horizontal|この 棚[たな]は 水平[すいへい]になっていませんね。|Dieses Regal ist nicht waagerecht.|な-Adjektiv
水平線|水平線[すいへいせん]|Horizont (über dem Meer)|水平線[すいへいせん]に 太陽[たいよう]が 沈[しず]んでいった。|Die Sonne versank am Horizont.|Nomen
高等|高等[こうとう]|höher, hochentwickelt|人間[にんげん]は 高等[こうとう]な 生物[せいぶつ]と 言[い]われている。|Der Mensch gilt als hochentwickeltes Lebewesen.|な-Adjektiv
上等|上等[じょうとう]|erstklassig, hochwertig|上等[じょうとう]なワインを 飲[の]んだの。|Ich habe einen erstklassigen Wein getrunken.|な-Adjektiv
オーバー|オーバー|übertrieben; darüber hinaus|彼[かれ]の 話[はなし]はいつもオーバーです。|Was er erzählt, ist immer übertrieben.|Nomen (mit する)
急病|急病[きゅうびょう]|plötzliche Erkrankung|知[し]り 合[あ]いが 急病[きゅうびょう]で 倒[たお]れた。|Ein Bekannter ist plötzlich krank zusammengebrochen.|Nomen
医学|医学[いがく]|Medizin (Wissenschaft)|彼[かれ]は 医学[いがく]を 学[まな]んでいます。|Er studiert Medizin.|Nomen
科学者|科学者[かがくしゃ]|Wissenschaftler(in)|彼[かれ]はとても 有名[ゆうめい]な 科学者[かがくしゃ]だ。|Er ist ein sehr berühmter Wissenschaftler.|Nomen
科目|科目[かもく]|Fach, Schulfach|今日[きょう]は 3[さん] 科目[かもく]のテストを 受[う]けたよ。|Heute hatte ich Prüfungen in drei Fächern.|Nomen
学科|学科[がっか]|Fach, Fachbereich|彼[かれ]の 得意[とくい]な 学科[がっか]は 数学[すうがく]です。|Sein bestes Fach ist Mathematik.|Nomen
外科|外科[げか]|Chirurgie|友人[ゆうじん]が 骨折[こっせつ]して 外科[げか]に 入院[にゅういん]しました。|Mein Freund hat sich etwas gebrochen und liegt in der Chirurgie.|Nomen
歯科|歯科[しか]|Zahnmedizin|彼[かれ]は 歯科[しか] 医師[いし]です。|Er ist Zahnarzt.|Nomen
エアコン|エアコン|Klimaanlage|部屋[へや]にエアコンを 取[と]り 付[つ]けたんだ。|Im Zimmer wurde eine Klimaanlage eingebaut.|Nomen
自然科学|自然科学[しぜんかがく]|Naturwissenschaften|姉[あね]は 大学[だいがく]で 自然科学[しぜんかがく]を 学[まな]んでいます。|Meine große Schwester studiert Naturwissenschaften.|Nomen
人文科学|人文科学[じんぶんかがく]|Geisteswissenschaften|大学[だいがく]で 人文科学[じんぶんかがく]を 専攻[せんこう]しました。|Ich habe an der Universität Geisteswissenschaften studiert.|Nomen
社会科学|社会科学[しゃかいかがく]|Sozialwissenschaften|社会科学[しゃかいかがく]の 分野[ぶんや]に 関心[かんしん]があります。|Ich interessiere mich für den Bereich der Sozialwissenschaften.|Nomen
死|死[し]|Tod|死[し]を 恐[おそ]れるのは 自然[しぜん]なことです。|Es ist natürlich, den Tod zu fürchten.|Nomen
死者|死者[ししゃ]|Tote(r), Todesopfer|その 事故[じこ]で 30人[さんじゅうにん]の 死者[ししゃ]が 出[で]たの。|Bei dem Unfall gab es 30 Tote.|Nomen
死体|死体[したい]|Leiche|公園[こうえん]で 死体[したい]が 見[み]つかったの。|Im Park wurde eine Leiche gefunden.|Nomen
生死|生死[せいし]|Leben und Tod|これは 人[ひと]の 生死[せいし]にかかわる 問題[もんだい]です。|Das ist eine Frage von Leben und Tod.|Nomen
死亡|死亡[しぼう]|Tod, Ableben|その 事故[じこ]では 2人[ふたり] 死亡[しぼう]したの。|Bei dem Unfall sind zwei Menschen gestorben.|Nomen (mit する)
しょっちゅう|しょっちゅう|ständig, andauernd|彼[かれ]はしょっちゅう 遅刻[ちこく]しているな。|Er kommt ständig zu spät.|Adverb
痛み|痛[いた]み|Schmerz|背中[せなか]に 痛[いた]みがあります。|Ich habe Schmerzen im Rücken.|Nomen
痛む|痛[いた]む|schmerzen, wehtun|虫歯[むしば]がずきずき 痛[いた]みます。|Mein kariöser Zahn pocht vor Schmerz.|Verb
禁止|禁止[きんし]|Verbot|交差点付近[こうさてん ふきん]は 駐車[ちゅうしゃ] 禁止[きんし]です。|In der Nähe der Kreuzung ist Parken verboten.|Nomen (mit する)
禁じる|禁[きん]じる|verbieten|市[し]は 昨年[さくねん]から 歩[ある]きタバコを 禁[きん]じているの。|Die Stadt verbietet seit letztem Jahr das Rauchen im Gehen.|Verb
煙|煙[けむり]|Rauch|煙突[えんとつ]から 煙[けむり]がまっすぐ 上[あが]っていたの。|Aus dem Schornstein stieg der Rauch kerzengerade auf.|Nomen
酒屋|酒屋[さかや]|Spirituosenladen|そこの 酒屋[さかや]さんでビールを 買[か]って 来[き]て。|Kauf bitte Bier in dem Spirituosenladen dort.|Nomen
禁酒|禁酒[きんしゅ]|Alkoholverzicht|彼[かれ]は 禁酒[きんしゅ]しています。|Er trinkt zurzeit keinen Alkohol.|Nomen (mit する)
スタンド|スタンド|Stehlampe, Tischlampe; Tribüne|姉[あね]はスタンドの 下[した]で 本[ほん]を 読[よ]んでいたんだ。|Meine große Schwester las unter der Tischlampe ein Buch.|Nomen
険しい|険[けわ]しい|steil; finster (Miene)|父[ちち]の 表情[ひょうじょう]が 険[けわ]しくなったの。|Die Miene meines Vaters wurde finster.|Adjektiv
証券|証券[しょうけん]|Wertpapier|証券[しょうけん]を 売[う]って 資金[しきん]にしようと 思[おも]うの。|Ich überlege, Wertpapiere zu verkaufen und so Geld zu beschaffen.|Nomen
証明|証明[しょうめい]|Beweis, Nachweis|容疑者[ようぎしゃ]のアリバイが 証明[しょうめい]されました。|Das Alibi des Verdächtigen wurde nachgewiesen.|Nomen (mit する)
生存|生存[せいぞん]|Überleben, Existenz|乗客[じょうきゃく]は 全員[ぜんいん] 生存[せいぞん]しています。|Alle Passagiere haben überlebt.|Nomen (mit する)
ご存じ|ご 存[ぞん]じ|wissen, kennen (respektvoll)|彼[かれ]の 名前[なまえ]をご 存[ぞん]じですか。|Kennen Sie seinen Namen?|Nomen
合意|合意[ごうい]|Einigung, Übereinkunft|両社[りょうしゃ]が 合併[がっぺい]に 合意[ごうい]しました。|Die beiden Firmen haben sich auf die Fusion geeinigt.|Nomen (mit する)
意向|意向[いこう]|Absicht, Wille|彼[かれ]の 意向[いこう]を 聞[き]いてみましょう。|Fragen wir ihn nach seinen Absichten.|Nomen
がっかり|がっかり|enttäuscht sein|成績[せいせき]が 落[お]ちてがっかりした。|Ich war enttäuscht, weil meine Noten schlechter geworden sind.|Adverb
意欲|意欲[いよく]|Motivation, Tatendrang|彼[かれ]は 仕事[しごと]に 意欲[いよく]を 燃[も]やしています。|Er ist bei der Arbeit voller Tatendrang.|Nomen
決意|決意[けつい]|Entschlossenheit, Entschluss|彼[かれ]の 決意[けつい]は 堅[かた]いな。|Sein Entschluss steht fest.|Nomen (mit する)
意図|意図[いと]|Absicht, Ziel|あなたの 意図[いと]はよく 分[わ]かりました。|Ich habe Ihre Absicht gut verstanden.|Nomen (mit する)
意外|意外[いがい]|unerwartet, überraschend|意外[いがい]にも 彼[かれ]は 独身[どくしん]です。|Überraschenderweise ist er ledig.|な-Adjektiv
意義|意義[いぎ]|Bedeutung, Sinn|この 事業[じぎょう]には 大[おお]きな 意義[いぎ]があります。|Dieses Vorhaben ist von großer Bedeutung.|Nomen
好意|好意[こうい]|Zuneigung, Wohlwollen|彼[かれ]は 彼女[かのじょ]に 好意[こうい]をもっています。|Er hegt Zuneigung für sie.|Nomen
意地悪|意地悪[いじわる]|boshaft, gemein|彼[かれ]は 時々[ときどき] 意地悪[いじわる]な 質問[しつもん]をする。|Er stellt manchmal gemeine Fragen.|Nomen (mit する)
確保|確保[かくほ]|Sicherung, Sicherstellung|優[すぐ]れた 人材[じんざい]の 確保[かくほ]は 重要[じゅうよう]です。|Es ist wichtig, sich hervorragende Mitarbeiter zu sichern.|Nomen (mit する)
スライド|スライド|Schieben; Dia, Folie|このふたはスライドします。|Dieser Deckel lässt sich aufschieben.|Nomen (mit する)
確立|確立[かくりつ]|Etablierung, Aufbau|北欧[ほくおう]では 社会保障[しゃかい ほしょう]が 確立[かくりつ]されています。|In Nordeuropa ist die soziale Sicherung fest etabliert.|Nomen (mit する)
確定|確定[かくてい]|Festlegung, endgültige Entscheidung|試合[しあい]の 代表[だいひょう]メンバーが 確定[かくてい]したの。|Die Mannschaftsaufstellung für das Spiel steht fest.|Nomen (mit する)
確実|確実[かくじつ]|sicher, zuverlässig|彼女[かのじょ]が 将来[しょうらい]、 大統領[だいとうりょう]になることは 確実[かくじつ]です。|Es ist sicher, dass sie später Präsidentin wird.|Adjektiv
確信|確信[かくしん]|feste Überzeugung|私[わたし]は 彼[かれ]の 成功[せいこう]を 確信[かくしん]しています。|Ich bin von seinem Erfolg überzeugt.|Nomen (mit する)
効率|効率[こうりつ]|Effizienz|作業[さぎょう]の 効率[こうりつ]を 上[あ]げるにはどうしたらいいですか。|Wie lässt sich die Effizienz der Arbeit steigern?|Nomen
確率|確率[かくりつ]|Wahrscheinlichkeit|天気予報[てんき よほう]は 当[あ]たる 確率[かくりつ]が 高[たか]くなりましたね。|Die Trefferquote der Wettervorhersage ist gestiegen.|Nomen
軽率|軽率[けいそつ]|leichtfertig, unbedacht|軽率[けいそつ]な 発言[はつげん]はしないよう 気[き]をつけなさい。|Pass auf, dass du keine unbedachten Äußerungen machst.|Adjektiv
おっしゃる|おっしゃる|sagen (respektvoll)|あなたのおっしゃる 通[とお]りです。|Es ist genau so, wie Sie sagen.|Verb
機会|機会[きかい]|Gelegenheit|家族[かぞく]で 話[はな]し 合[あ]う 機会[きかい]を 持[も]ちました。|Wir hatten Gelegenheit, uns in der Familie auszusprechen.|Nomen
危機|危機[きき]|Krise|地球環境[ちきゅう かんきょう]の 危機[きき]が 叫[さけ]ばれているのよ。|Es wird vor einer Krise der globalen Umwelt gewarnt.|Nomen
機長|機長[きちょう]|Flugkapitän(in)|機長[きちょう]の 放送[ほうそう]があったの。|Es gab eine Durchsage des Kapitäns.|Nomen
時機|時機[じき]|günstiger Zeitpunkt|あせらずに 時機[じき]を 待[ま]つべきです。|Man sollte ohne Hast den richtigen Zeitpunkt abwarten.|Nomen
楽器|楽器[がっき]|Musikinstrument|私[わたし]が 好[す]きな 楽器[がっき]はギターです。|Mein Lieblingsinstrument ist die Gitarre.|Nomen
食器|食器[しょっき]|Geschirr|食器[しょっき]を 全部新[ぜんぶ あたら]しくしました。|Ich habe das gesamte Geschirr erneuert.|Nomen
器用|器用[きよう]|geschickt, fingerfertig|彼[かれ]はかなり 器用[きよう]な 人[ひと]です。|Er ist ziemlich geschickt mit den Händen.|な-Adjektiv
クラシック|クラシック|klassische Musik, Klassik|彼女[かのじょ]はクラシック 音楽[おんがく]が 好[す]きです。|Sie mag klassische Musik.|な-Adjektiv
受話器|受話器[じゅわき]|Telefonhörer|受話器[じゅわき]を 取[と]ってもらえますか。|Könnten Sie bitte den Hörer abnehmen?|Nomen
器|器[うつわ]|Gefäß, Schale; Format (einer Person)|この 器[うつわ]は 上等[じょうとう]ね。|Diese Schale ist hochwertig.|Nomen
消火器|消火器[しょうかき]|Feuerlöscher|消火器[しょうかき]を 交換[こうかん]しました。|Der Feuerlöscher wurde ausgetauscht.|Nomen
器械|器械[きかい]|Gerät, Apparat|体育館[たいいくかん]で 器械[きかい]を 使[つか]って 運動[うんどう]したの。|Ich habe in der Turnhalle an Geräten trainiert.|Nomen
取材|取材[しゅざい]|Recherche, Berichterstattung|テレビも 取材[しゅざい]に 来[き]たほど 有名[ゆうめい]なレストランです。|Das Restaurant ist so bekannt, dass sogar das Fernsehen dort gedreht hat.|Nomen (mit する)
材木|材木[ざいもく]|Bauholz|船[ふね]から 材木[ざいもく]が 降[お]ろされていますね。|Vom Schiff wird Holz abgeladen.|Nomen
具合|具合[ぐあい]|Zustand, Befinden|今日[きょう]は 体[からだ]の 具合[ぐあい]が 悪[わる]いです。|Heute fühle ich mich nicht wohl.|Nomen
さっと|さっと|rasch, flink|こぼれた 牛乳[ぎゅうにゅう]をさっと 拭[ふ]き 取[と]ったの。|Ich habe die verschüttete Milch rasch aufgewischt.|Adverb
器具|器具[きぐ]|Gerät, Utensil|これはスポーツ 施設用[しせつよう]の 器具[きぐ]です。|Das ist ein Gerät für Sportanlagen.|Nomen
家具|家具[かぐ]|Möbel|部屋[へや]の 家具[かぐ]を 動[うご]かしました。|Ich habe die Möbel im Zimmer umgestellt.|Nomen
雨具|雨具[あまぐ]|Regenkleidung, Regenzeug|雨具[あまぐ]の 用意[ようい]を 忘[わす]れないように。|Vergiss nicht, Regenzeug einzupacken.|Nomen
基地|基地[きち]|Stützpunkt, Basis|ここは 昔[むかし]、 軍事[ぐんじ] 基地[きち]でした。|Hier war früher ein Militärstützpunkt.|Nomen
水準|水準[すいじゅん]|Niveau, Standard|今年[ことし]の 応募作品[おうぼ さくひん]は 水準[すいじゅん]が 高[たか]かったね。|Die eingereichten Arbeiten hatten dieses Jahr ein hohes Niveau.|Nomen
基準|基準[きじゅん]|Norm, Maßstab|この 建物[たてもの]は 建築[けんちく]の 基準[きじゅん]に 達[たっ]していないよ。|Dieses Gebäude erfüllt die Bauvorschriften nicht.|Nomen
準急|準急[じゅんきゅう]|Eilzug (hält öfter als der Express)|新宿駅[しんじゅくえき]まで 準急[じゅんきゅう]で 行[い]ったのよ。|Ich bin mit dem Eilzug bis zum Bahnhof Shinjuku gefahren.|Nomen
設立|設立[せつりつ]|Gründung|当社[とうしゃ]は 10年前[じゅうねんまえ]に 設立[せつりつ]されたのよ。|Unsere Firma wurde vor zehn Jahren gegründet.|Nomen (mit する)
キャンセル|キャンセル|Stornierung, Absage|予約[よやく]をキャンセルしたよ。|Ich habe die Reservierung storniert.|Nomen (mit する)
設備|設備[せつび]|Ausstattung, Einrichtung|この 研究所[けんきゅうじょ]には 最新[さいしん]の 設備[せつび]が 揃[そろ]っています。|Dieses Forschungsinstitut verfügt über die neueste Ausstattung.|Nomen (mit する)
説|説[せつ]|Theorie, Ansicht|私[わたし]は 彼[かれ]の 説[せつ]が 正[ただ]しいと 思[おも]う。|Ich halte seine Theorie für richtig.|Nomen
解説|解説[かいせつ]|Erläuterung, Kommentar|新聞[しんぶん]の 解説[かいせつ] 欄[らん]を 読[よ]みました。|Ich habe die Kommentarspalte der Zeitung gelesen.|Nomen (mit する)
社説|社説[しゃせつ]|Leitartikel|この 新聞[しんぶん]の 社説[しゃせつ]は 面白[おもしろ]いね。|Die Leitartikel dieser Zeitung sind interessant.|Nomen
学説|学説[がくせつ]|wissenschaftliche Theorie|それは 最新[さいしん]の 学説[がくせつ]ね。|Das ist die neueste Theorie.|Nomen
公式|公式[こうしき]|offiziell; Formel|今後[こんご]の 方針[ほうしん]が 公式[こうしき]に 発表[はっぴょう]されました。|Der künftige Kurs wurde offiziell bekannt gegeben.|な-Adjektiv
公共|公共[こうきょう]|öffentlich, Allgemeinheit|公共[こうきょう]の 乗[の]り 物[もの]は 誰[だれ]でも 利用[りよう]できます。|Öffentliche Verkehrsmittel kann jeder benutzen.|Nomen
シーツ|シーツ|Bettlaken|メイドがシーツを 交換[こうかん]してくれたね。|Das Zimmermädchen hat die Laken gewechselt.|Nomen
公平|公平[こうへい]|Gerechtigkeit, Fairness|賞金[しょうきん]をもらったら 公平[こうへい]に 分[わ]けましょう。|Wenn wir das Preisgeld bekommen, teilen wir es gerecht.|な-Adjektiv
公立|公立[こうりつ]|öffentlich (von Staat oder Gemeinde getragen)|駅前[えきまえ]に 公立[こうりつ]の 図書館[としょかん]があるよ。|Vor dem Bahnhof gibt es eine öffentliche Bibliothek.|Nomen
学園|学園[がくえん]|Lehranstalt, Schule|彼女[かのじょ]は 郊外[こうがい]の 学園[がくえん]に 通[かよ]っているね。|Sie besucht eine Schule am Stadtrand.|Nomen
祭日|祭日[さいじつ]|Feiertag|うちの 会社[かいしゃ]は 祭日[さいじつ]は 休[やす]みです。|In unserer Firma ist an Feiertagen frei.|Nomen
国際的|国際的[こくさいてき]|international|彼女[かのじょ]は 国際的[こくさいてき]に 有名[ゆうめい]な 歌手[かしゅ]です。|Sie ist eine international berühmte Sängerin.|Adjektiv
国際化|国際化[こくさいか]|Internationalisierung|この 大学[だいがく]も 国際化[こくさいか]してきたな。|Auch diese Universität ist internationaler geworden.|Nomen (mit する)
交際|交際[こうさい]|Umgang, Beziehung, Bekanntschaft|彼[かれ]はモデルと 交際[こうさい]していたんだ。|Er war mit einem Model zusammen.|Nomen (mit する)
かかる|かかる|bekommen, sich zuziehen (Krankheit)|彼女[かのじょ]はインフルエンザにかかっていますね。|Sie hat die Grippe.|Verb
際|際[さい]|Gelegenheit, Fall, wenn|この 際[さい]はっきり 言[い]っておきます。|Bei dieser Gelegenheit sage ich es einmal deutlich.|Nomen
航空|航空[こうくう]|Luftfahrt|会議[かいぎ]で 航空[こうくう]の 安全[あんぜん]について 話[はな]し 合[あ]ったの。|Auf der Konferenz wurde über die Sicherheit der Luftfahrt gesprochen.|Nomen
航空機|航空機[こうくうき]|Flugzeug, Luftfahrzeug|去年[きょねん]は 航空機[こうくうき]の 事故[じこ]が 多[おお]かった。|Letztes Jahr gab es viele Flugzeugunglücke.|Nomen
航空券|航空券[こうくうけん]|Flugticket|電話[でんわ]で 航空券[こうくうけん]を 予約[よやく]しました。|Ich habe das Flugticket telefonisch gebucht.|Nomen
完全|完全[かんぜん]|vollständig, vollkommen|この 古[ふる]い 寺院[じいん]は 今[いま]でも 完全[かんぜん]な 形[かたち]を 保[たも]っているんだ。|Dieser alte Tempel ist bis heute vollständig erhalten.|な-Adjektiv
成長|成長[せいちょう]|Wachstum|庭[にわ]の 木[き]、 大[おお]きく 成長[せいちょう]したわね。|Der Baum im Garten ist ganz schön gewachsen.|Nomen (mit する)
成立|成立[せいりつ]|Zustandekommen, Abschluss|あの 会社[かいしゃ]との 契約[けいやく]が 成立[せいりつ]しました。|Der Vertrag mit der Firma ist zustande gekommen.|Nomen (mit する)
形成|形成[けいせい]|Bildung, Formung|今[いま]は 骨[ほね]が 形成[けいせい]される 大切[たいせつ]な 時期[じき]です。|Jetzt ist die wichtige Zeit, in der sich die Knochen bilden.|Nomen (mit する)
コック|コック|Koch, Köchin|彼[かれ]は 腕[うで]のいいコックです。|Er ist ein guter Koch.|Nomen
結成|結成[けっせい]|Gründung, Bildung (einer Gruppe)|新[あたら]しい 代表[だいひょう]チームが 結成[けっせい]されました。|Eine neue Auswahlmannschaft wurde gebildet.|Nomen (mit する)
成果|成果[せいか]|Ergebnis, Erfolg|厳[きび]しい 練習[れんしゅう]が 良[よ]い 成果[せいか]に 結[むす]び 付[つ]きました。|Das harte Training hat zu guten Ergebnissen geführt.|Nomen
賛成|賛成[さんせい]|Zustimmung|私[わたし]は 彼[かれ]の 意見[いけん]に 賛成[さんせい]だ。|Ich stimme seiner Meinung zu.|Nomen (mit する)
合成|合成[ごうせい]|Synthese, Zusammensetzung|このソフトで 画像[がぞう]を 合成[ごうせい]できます。|Mit dieser Software kann man Bilder zusammenfügen.|Nomen (mit する)
成人|成人[せいじん]|Erwachsene(r), Volljährige(r)|娘[むすめ]が 今年[ことし] 成人[せいじん]します。|Meine Tochter wird dieses Jahr volljährig.|Nomen (mit する)
成年|成年[せいねん]|Volljährigkeit|成年[せいねん]になると 独立[どくりつ]した 戸籍[こせき]を 作[つく]れます。|Mit der Volljährigkeit kann man ein eigenes Familienregister anlegen.|Nomen
失う|失[うしな]う|verlieren|彼[かれ]は 地震[じしん]で 親[おや]を 失[うしな]いました。|Er hat bei dem Erdbeben seine Eltern verloren.|Verb
えび|えび|Garnele, Krabbe|私[わたし]はえびのてんぷらが 好[す]きです。|Ich mag Garnelen-Tempura.|Nomen
失業|失業[しつぎょう]|Arbeitslosigkeit, Verlust der Stelle|友達[ともだち]のお 父[とう]さんが 突然[とつぜん] 失業[しつぎょう]したの。|Der Vater meines Freundes ist plötzlich arbeitslos geworden.|Nomen (mit する)
失敗|失敗[しっぱい]|Misserfolg, Fehler|一度[いちど]の 失敗[しっぱい]であきらめてはいけないよ。|Man darf nicht nach einem einzigen Misserfolg aufgeben.|Nomen (mit する)
勝敗|勝敗[しょうはい]|Sieg oder Niederlage|このセットで 勝敗[しょうはい]が 決[き]まります。|In diesem Satz entscheidet sich das Spiel.|Nomen
原則|原則[げんそく]|Grundsatz, Prinzip|原則[げんそく]としてキャンセルできません。|Grundsätzlich ist eine Stornierung nicht möglich.|Nomen
原料|原料[げんりょう]|Rohstoff|石油[せきゆ]はいろいろな 製品[せいひん]の 原料[げんりょう]になります。|Erdöl ist der Rohstoff für vielerlei Produkte.|Nomen
原理|原理[げんり]|Prinzip, Grundgesetz|見学者[けんがくしゃ]に 機械[きかい]の 動[うご]く 原理[げんり]を 説明[せつめい]しました。|Ich habe den Besuchern das Funktionsprinzip der Maschine erklärt.|Nomen
原子力|原子力[げんしりょく]|Atomkraft, Kernenergie|原子力[げんしりょく]の 安全[あんぜん]な 利用[りよう]について 考[かんが]えましょう。|Denken wir über die sichere Nutzung der Kernenergie nach.|Nomen
グリーン|グリーン|Grün|そのグリーンのスカーフ、 素敵[すてき]ですね。|Dieser grüne Schal ist hübsch.|Nomen
高原|高原[こうげん]|Hochebene, Hochland|高原[こうげん]には 気持[きも]ちのいい 風[かぜ]が 吹[ふ]いていたよ。|Im Hochland wehte ein angenehmer Wind.|Nomen
資料|資料[しりょう]|Unterlagen, Material, Daten|図書館[としょかん]で 資料[しりょう]を 借[か]りて 来[き]ました。|Ich habe mir in der Bibliothek Material ausgeliehen.|Nomen
資産|資産[しさん]|Vermögen|大臣[だいじん]の 資産[しさん]が 公表[こうひょう]されたね。|Das Vermögen des Ministers wurde veröffentlicht.|Nomen
資格|資格[しかく]|Qualifikation, Befähigung|日本語[にほんご]を 教[おし]える 資格[しかく]を 取[と]りたいです。|Ich möchte die Qualifikation erwerben, Japanisch zu unterrichten.|Nomen
資本主義|資本主義[しほんしゅぎ]|Kapitalismus|その 国[くに]は 次第[しだい]に 資本主義[しほんしゅぎ]になったわね。|Das Land ist nach und nach kapitalistisch geworden.|Nomen
資源|資源[しげん]|Ressourcen, Rohstoffquellen|地球[ちきゅう]の 資源[しげん]を 守[まも]りましょう。|Schützen wir die Ressourcen der Erde.|Nomen
願書|願書[がんしょ]|Bewerbungsformular, Antrag|今日大学[きょう だいがく]に 願書[がんしょ]を 送[おく]りました。|Heute habe ich meine Bewerbung an die Universität geschickt.|Nomen
正式|正式[せいしき]|förmlich, offiziell|正式[せいしき]な 招待状[しょうたいじょう]を 受[う]け 取[と]りました。|Ich habe eine offizielle Einladung erhalten.|な-Adjektiv
ジーパン|ジーパン|Jeans|彼[かれ]はいつもジーパンをはいているね。|Er trägt immer Jeans.|Nomen
正面|正面[しょうめん]|Vorderseite, Front|その 家[いえ]の 正面[しょうめん]には 大[おお]きなバルコニーがあるの。|An der Vorderseite des Hauses ist ein großer Balkon.|Nomen
正午|正午[しょうご]|Mittag (12 Uhr)|昼休[ひるやす]みは 正午[しょうご]からです。|Die Mittagspause beginnt um zwölf.|Nomen
正義|正義[せいぎ]|Gerechtigkeit|この 世[よ]に 正義[せいぎ]はないのだろうか。|Gibt es auf dieser Welt denn keine Gerechtigkeit?|Nomen
正門|正門[せいもん]|Haupttor, Haupteingang|受験生[じゅけんせい]は 正門[せいもん]から 入[はい]って 下[くだ]さい。|Prüflinge treten bitte durch das Haupttor ein.|Nomen
正解|正解[せいかい]|richtige Antwort|10問中9問[じゅうもんちゅう きゅうもん] 正解[せいかい]しました。|Ich habe neun von zehn Fragen richtig beantwortet.|Nomen (mit する)
正方形|正方形[せいほうけい]|Quadrat|正方形[せいほうけい]の 紙[かみ]を 用意[ようい]しましょう。|Legen wir ein quadratisches Blatt Papier bereit.|Nomen
正|正[せい]|richtig; Original (eines Dokuments)|書類[しょるい]は 正[せい]と 副[ふく]の 2通[につう]あります。|Von dem Dokument gibt es zwei Ausfertigungen, Original und Kopie.|Nomen
ジャーナリズム|ジャーナリズム|Journalismus|彼[かれ]はジャーナリズムを 専攻[せんこう]している。|Er studiert Journalismus im Hauptfach.|Nomen
正座|正座[せいざ]|förmlicher Kniesitz|彼[かれ]はきちんと 正座[せいざ]して 待[ま]っていたね。|Er wartete ordentlich im Kniesitz.|Nomen (mit する)
正当|正当[せいとう]|berechtigt, rechtmäßig|これは 正当[せいとう]な 要求[ようきゅう]です。|Das ist eine berechtigte Forderung.|な-Adjektiv
異性|異性[いせい]|das andere Geschlecht|息子[むすこ]はもう 異性[いせい]を 意識[いしき]している。|Mein Sohn nimmt das andere Geschlecht schon bewusst wahr.|Nomen
異常|異常[いじょう]|ungewöhnlich, abnorm|今年[ことし]の 夏[なつ]は 異常[いじょう]な 暑[あつ]さですね。|Dieser Sommer ist ungewöhnlich heiß.|な-Adjektiv
正常|正常[せいじょう]|normal, Normalzustand|患者[かんじゃ]の 呼吸[こきゅう]は 正常[せいじょう]です。|Die Atmung des Patienten ist normal.|な-Adjektiv
意識|意識[いしき]|Bewusstsein|彼[かれ]は 意識[いしき]を 失[うしな]いました。|Er hat das Bewusstsein verloren.|Nomen (mit する)
常識|常識[じょうしき]|gesunder Menschenverstand, Allgemeinwissen|そんなの 常識[じょうしき]だよ。|Das weiß doch jeder.|Nomen
スピーチ|スピーチ|Rede, Ansprache|彼[かれ]のスピーチは 素晴[すば]らしかった。|Seine Rede war großartig.|Nomen
調べ|調[しら]べ|Untersuchung, Ermittlung|警察[けいさつ]の 調[しら]べで 女性[じょせい]の 身元[みもと]がわかりました。|Durch die Ermittlungen der Polizei wurde die Identität der Frau geklärt.|Nomen
好調|好調[こうちょう]|gut in Form, gut laufend|今月[こんげつ]はエアコンの 売[う]り 上[あ]げが 好調[こうちょう]です。|Diesen Monat läuft der Verkauf von Klimaanlagen gut.|な-Adjektiv
下調べ|下調[したしら]べ|Voruntersuchung, Vorbereitung|まず 第一[だいいち]に、しっかり 下調[したしら]べをしなさい。|Bereite dich zuallererst gründlich vor.|Nomen (mit する)
整備|整備[せいび]|Wartung, Instandhaltung|車[くるま]は 整備[せいび]に 出[だ]しています。|Das Auto ist in der Inspektion.|Nomen (mit する)
整理|整理[せいり]|Ordnen, Aufräumen|古[ふる]い 服[ふく]を 整理[せいり]しました。|Ich habe alte Kleidung aussortiert.|Nomen (mit する)
節約|節約[せつやく]|Sparen, Einsparung|電気[でんき]や 水[みず]を 節約[せつやく]しましょう。|Sparen wir Strom und Wasser.|Nomen (mit する)
検査|検査[けんさ]|Untersuchung, Kontrolle|私[わたし]は 今日[きょう]、 目[め]の 検査[けんさ]を 受[う]けます。|Ich habe heute eine Augenuntersuchung.|Nomen (mit する)
ああ|ああ|so, derart (wie jenes)|ああうるさい 人[ひと]は 苦手[にがて]です。|Mit so lauten Leuten komme ich nicht gut zurecht.|Adverb
案|案[あん]|Vorschlag, Plan, Entwurf|もっと 案[あん]を 出[だ]し 合[あ]いましょう。|Sammeln wir noch mehr Vorschläge.|Nomen
案外|案外[あんがい]|unerwartet, wider Erwarten|彼[かれ]は 案外[あんがい]いい 人[ひと]かも 知[し]れない。|Er ist vielleicht netter, als man denkt.|Adverb
案の定|案[あん]の 定[じょう]|wie befürchtet, erwartungsgemäß|案[あん]の 定[じょう]、 彼[かれ]は 遅刻[ちこく]したな。|Wie befürchtet kam er zu spät.|Adverb
国連|国連[こくれん]|Vereinte Nationen|国連[こくれん]の 本部[ほんぶ]はニューヨークにあります。|Der Hauptsitz der Vereinten Nationen ist in New York.|Nomen
接続|接続[せつぞく]|Verbindung, Anschluss|コンピューターをネットワークに 接続[せつぞく]しました。|Ich habe den Computer mit dem Netzwerk verbunden.|Nomen (mit する)
外相|外相[がいしょう]|Außenminister(in)|外相[がいしょう]は 来週訪米[らいしゅう ほうべい]の 予定[よてい]です。|Der Außenminister will nächste Woche die USA besuchen.|Nomen
真相|真相[しんそう]|der wahre Sachverhalt|最近[さいきん]、 事件[じけん]の 真相[しんそう]が 明[あき]らかになったよ。|Vor Kurzem ist die Wahrheit über den Fall ans Licht gekommen.|Nomen
相変わらず|相変[あいか]わらず|wie immer, unverändert|彼[かれ]は 相変[あいか]わらず 忙[いそが]しいですね。|Er ist wie immer beschäftigt.|Adverb
アクセント|アクセント|Akzent, Betonung|アメリカ 英語[えいご]とイギリス 英語[えいご]ではアクセントが 違[ちが]うことがあるね。|Im amerikanischen und britischen Englisch wird manchmal unterschiedlich betont.|Nomen
雑談|雑談[ざつだん]|Plauderei|その 先生[せんせい]はいつも 授業[じゅぎょう]の 前[まえ]に 雑談[ざつだん]をするの。|Dieser Lehrer plaudert immer vor dem Unterricht.|Nomen (mit する)
記事|記事[きじ]|Artikel (Zeitung)|環境問題[かんきょう もんだい]に 関[かん]する 記事[きじ]を 読[よ]んだの。|Ich habe einen Artikel über Umweltprobleme gelesen.|Nomen
記号|記号[きごう]|Zeichen, Symbol|地図[ちず]にはいろいろな 記号[きごう]が 使[つか]われているのね。|Auf Landkarten werden allerlei Symbole verwendet.|Nomen
記入|記入[きにゅう]|Eintragen, Ausfüllen|こちらにお 名前[なまえ]をご 記入[きにゅう]ください。|Tragen Sie bitte hier Ihren Namen ein.|Nomen (mit する)
暗記|暗記[あんき]|Auswendiglernen|試験[しけん]の 前[まえ]に 英文[えいぶん]を 暗記[あんき]したんだ。|Vor der Prüfung habe ich englische Sätze auswendig gelernt.|Nomen (mit する)
記憶|記憶[きおく]|Erinnerung, Gedächtnis|当時[とうじ]のことはしっかり 記憶[きおく]しているよ。|An die damalige Zeit erinnere ich mich genau.|Nomen (mit する)
関心|関心[かんしん]|Interesse|彼[かれ]は 政治[せいじ]に 関心[かんしん]が 強[つよ]いね。|Er interessiert sich sehr für Politik.|Nomen
コマーシャル|コマーシャル|Werbespot|彼女[かのじょ]はテレビのコマーシャルに 出[で]ているわ。|Sie tritt in einem Fernsehwerbespot auf.|Nomen
税関|税関[ぜいかん]|Zoll (Behörde)|毛皮[けがわ]を 税関[ぜいかん]で 没収[ぼっしゅう]されたんだ。|Der Pelz wurde beim Zoll beschlagnahmt.|Nomen
関節|関節[かんせつ]|Gelenk|手首[てくび]の 関節[かんせつ]をひねっちゃった。|Ich habe mir das Handgelenk verstaucht.|Nomen
関わる|関[かか]わる|zu tun haben mit, betreffen|医師[いし]は 人[ひと]の 命[いのち]に 関[かか]わる 大切[たいせつ]な 職業[しょくぎょう]だよ。|Arzt ist ein wichtiger Beruf, bei dem es um Menschenleben geht.|Verb
機関|機関[きかん]|Organ, Einrichtung; Antrieb|台風[たいふう]で 交通[こうつう] 機関[きかん]がストップしている。|Wegen des Taifuns steht der Verkehr still.|Nomen
係|係[かかり]|Zuständige(r), Verantwortliche(r)|彼女[かのじょ]は 会場整理[かいじょう せいり]の 係[かかり]だったの。|Sie war für die Ordnung im Saal zuständig.|Nomen
現状|現状[げんじょう]|gegenwärtiger Zustand|問題[もんだい]を 解決[かいけつ]できないのが 現状[げんじょう]です。|Der Stand der Dinge ist, dass wir das Problem nicht lösen können.|Nomen
事態|事態[じたい]|Lage, Situation|事態[じたい]は 深刻[しんこく]です。|Die Lage ist ernst.|Nomen
しつこい|しつこい|hartnäckig, aufdringlich|しつこい 迷惑[めいわく]メールに 困[こま]っている。|Hartnäckige Spam-Mails machen mir zu schaffen.|Adjektiv
実態|実態[じったい]|tatsächlicher Zustand|その 会社[かいしゃ]の 経営[けいえい]の 実態[じったい]を 調査中[ちょうさちゅう]だ。|Die tatsächliche Lage der Geschäftsführung dieser Firma wird gerade untersucht.|Nomen
行政|行政[ぎょうせい]|Verwaltung|年金問題[ねんきん もんだい]は 行政[ぎょうせい]の 最大[さいだい]の 課題[かだい]のひとつよ。|Das Rentenproblem ist eine der größten Aufgaben der Verwaltung.|Nomen
政治家|政治家[せいじか]|Politiker(in)|大[おお]きくなったら 政治家[せいじか]になりたいです。|Wenn ich groß bin, möchte ich Politiker werden.|Nomen
治まる|治[おさ]まる|sich legen, nachlassen|咳[せき]が 少[すこ]し 治[おさ]まりました。|Mein Husten hat etwas nachgelassen.|Verb
政党|政党[せいとう]|politische Partei|選挙[せんきょ]では 3[みっ]つの 政党[せいとう]が 争[あらそ]っています。|Bei der Wahl treten drei Parteien gegeneinander an.|Nomen
策|策[さく]|Maßnahme, Plan|その 問題[もんだい]に 対[たい]する 策[さく]を 皆[みんな]で 考[かんが]えたの。|Wir haben gemeinsam über Maßnahmen gegen das Problem nachgedacht.|Nomen
挙げる|挙[あ]げる|anführen, nennen; erheben|例[れい]を 幾[いく]つか 挙[あ]げてみましょう。|Nennen wir einige Beispiele.|Verb
気候|気候[きこう]|Klima|日本[にほん]の 気候[きこう]は 温暖[おんだん]です。|Das Klima in Japan ist mild.|Nomen
しゃがむ|しゃがむ|sich hinhocken|お 年寄[としよ]りが 道端[みちばた]にしゃがんでいますね。|Am Straßenrand hockt ein alter Mensch.|Verb
補う|補[おぎな]う|ergänzen, ausgleichen|夏[なつ]は 水分[すいぶん]を 十分[じゅうぶん]に 補[おぎな]いましょう。|Im Sommer sollte man ausreichend Flüssigkeit zu sich nehmen.|Verb
足首|足首[あしくび]|Fußknöchel|彼[かれ]は 足首[あしくび]を 痛[いた]めています。|Er hat sich am Knöchel verletzt.|Nomen
首脳|首脳[しゅのう]|Staats- oder Regierungschef(in), Spitze|東京[とうきょう]で 五[ご]カ 国[こく]の 首脳[しゅのう] 会談[かいだん]が 開[ひら]かれています。|In Tokio findet ein Gipfeltreffen von fünf Ländern statt.|Nomen
頭|頭[かしら]|Oberhaupt, Anführer|彼[かれ]は 一家[いっか]のお 頭[かしら]だったの。|Er war das Oberhaupt der Familie.|Nomen
頭痛|頭痛[ずつう]|Kopfschmerzen|今日[きょう]は 頭痛[ずつう]がします。|Heute habe ich Kopfschmerzen.|Nomen
顔色|顔色[かおいろ]|Gesichtsfarbe, Miene|彼[かれ]は 顔色[かおいろ]がよくありませんね。|Er sieht nicht gut aus.|Nomen
朝顔|朝顔[あさがお]|Prunkwinde|紫[むらさき]の 朝顔[あさがお]が 咲[さ]きました。|Eine violette Prunkwinde ist aufgeblüht.|Nomen
コンテスト|コンテスト|Wettbewerb|このコンテストに 優勝[ゆうしょう]すると 車[くるま]がもらえるんだ。|Wer diesen Wettbewerb gewinnt, bekommt ein Auto.|Nomen
改正|改正[かいせい]|Änderung, Novellierung (Gesetz)|近[ちか]く 交通法[こうつう ほう]が 改正[かいせい]されます。|Die Verkehrsgesetze werden demnächst geändert.|Nomen (mit する)
改良|改良[かいりょう]|Verbesserung, Veredelung|日本[にほん]では 絶[た]えず 米[こめ]の 品種[ひんしゅ]を 改良[かいりょう]しているの。|In Japan werden die Reissorten ständig verbessert.|Nomen (mit する)
改める|改[あらた]める|ändern, verbessern|彼[かれ]は 悪[わる]い 習慣[しゅうかん]を 改[あらた]めようとしているわね。|Er versucht, seine schlechten Gewohnheiten abzulegen.|Verb
改造|改造[かいぞう]|Umbau, Umbildung|首相[しゅしょう]は 内閣[ないかく]の 改造[かいぞう]を 行[おこな]いました。|Der Premierminister hat das Kabinett umgebildet.|Nomen (mit する)
改めて|改[あらた]めて|erneut, noch einmal|改[あらた]めてあなたのご 意見[いけん]を 聞[き]かせて 下[くだ]さい。|Lassen Sie mich bitte noch einmal Ihre Meinung hören.|Adverb
改まる|改[あらた]まる|sich erneuern, sich ändern|年号[ねんごう]が 改[あらた]まりました。|Der Name der Ära hat gewechselt.|Verb
革命|革命[かくめい]|Revolution|それは 歴史上[れきしじょう]の 大[おお]きな 革命[かくめい]です。|Das ist eine große Revolution der Geschichte.|Nomen
キャベツ|キャベツ|Kohl, Weißkohl|キャベツの 千切[せんぎ]りを 添[そ]えたよ。|Ich habe fein geschnittenen Kohl dazu gereicht.|Nomen
生命|生命[せいめい]|Leben|生命[せいめい]は 海[うみ]から 始[はじ]まったと 言[い]われている。|Man sagt, das Leben habe im Meer begonnen.|Nomen
命|命[いのち]|Leben|命[いのち]より 大切[たいせつ]なものは 無[な]いよ。|Es gibt nichts Wichtigeres als das Leben.|Nomen
運命|運命[うんめい]|Schicksal|運命[うんめい]には 逆[さか]らえないよ。|Gegen das Schicksal kommt man nicht an.|Nomen
組合|組合[くみあい]|Gewerkschaft, Verband|今日[きょう]は 組合[くみあい]の 集[あつ]まりがあるわ。|Heute ist eine Gewerkschaftsversammlung.|Nomen
仕組み|仕組[しく]み|Aufbau, Mechanismus|この 機械[きかい]の 仕組[しく]みは 複雑[ふくざつ]だ。|Der Mechanismus dieser Maschine ist kompliziert.|Nomen
組|組[くみ]|Klasse, Gruppe|彼[かれ]は 1年2[いちねん に] 組[くみ]の 生徒[せいと]です。|Er ist Schüler der Klasse 1-2.|Nomen
組む|組[く]む|sich zusammentun; verschränken|このプロジェクトで 私[わたし]は 彼[かれ]と 組[く]んでいるんだ。|Bei diesem Projekt arbeite ich mit ihm zusammen.|Verb
組み合わせる|組[く]み 合[あ]わせる|kombinieren, zusammenstellen|いろいろな 花[はな]を 組[く]み 合[あ]わせ 花束[はなたば]を 作[つく]りました。|Ich habe verschiedene Blumen zu einem Strauß zusammengestellt.|Verb
アイドル|アイドル|Idol, Popstar|彼女[かのじょ]は 若者[わかもの]のアイドルです。|Sie ist ein Idol der Jugend.|Nomen
組み込む|組[く]み 込[こ]む|einbauen, integrieren|キャンペーンに 新[あたら]しいイベントを 組[く]み 込[こ]みました。|Wir haben ein neues Event in die Kampagne eingebaut.|Verb
組み合わせ|組[く]み 合[あ]わせ|Kombination, Zusammenstellung|色[いろ]の 組[く]み 合[あ]わせで 印象[いんしょう]が 変[か]わりますよ。|Je nach Farbkombination ändert sich der Eindruck.|Nomen
織物|織物[おりもの]|Gewebe, Textilien|その 町[まち]は 織物[おりもの] 業[ぎょう]で 有名[ゆうめい]です。|Die Stadt ist für ihre Webereien bekannt.|Nomen
進出|進出[しんしゅつ]|Vorstoß, Expansion|大手[おおて]チェーン 店[てん]が 進出[しんしゅつ]している。|Große Ladenketten breiten sich hier aus.|Nomen (mit する)
進行|進行[しんこう]|Fortgang, Verlauf|学会[がっかい]は 予定通[よてい どお]りに 進行[しんこう]しています。|Die Tagung verläuft nach Plan.|Nomen (mit する)
進歩|進歩[しんぽ]|Fortschritt|科学技術[かがく ぎじゅつ]は 目覚[めざま]しく 進歩[しんぽ]しているの。|Wissenschaft und Technik machen bemerkenswerte Fortschritte.|Nomen (mit する)
前進|前進[ぜんしん]|Vorwärtsbewegung, Vormarsch|一列[いちれつ]に 並[なら]んで 前進[ぜんしん]して 下[くだ]さい。|Stellen Sie sich bitte in einer Reihe auf und gehen Sie vorwärts.|Nomen (mit する)
からかう|からかう|necken, aufziehen|彼[かれ]は 時々妹[ときどき いもうと]をからかいます。|Er zieht manchmal seine kleine Schwester auf.|Verb
進路|進路[しんろ]|Kurs, Laufbahn|卒業後[そつぎょう ご]の 進路[しんろ]を 迷[まよ]っています。|Ich bin unsicher, welchen Weg ich nach dem Abschluss einschlagen soll.|Nomen
行進|行進[こうしん]|Marsch, Umzug|開会式[かいかいしき]で 選手[せんしゅ]たちが 行進[こうしん]しました。|Bei der Eröffnungsfeier sind die Sportler einmarschiert.|Nomen (mit する)
推進|推進[すいしん]|Förderung, Vorantreiben|その 会社[かいしゃ]はリサイクルを 推進[すいしん]しているね。|Die Firma fördert das Recycling.|Nomen (mit する)
主任|主任[しゅにん]|Leiter(in), Verantwortliche(r)|彼女[かのじょ]は 会計[かいけい] 主任[しゅにん]です。|Sie ist Leiterin der Buchhaltung.|Nomen
辞任|辞任[じにん]|Rücktritt|社長[しゃちょう]の 辞任[じにん]が 決[き]まりました。|Der Rücktritt des Firmenchefs steht fest.|Nomen (mit する)
お世辞|お 世辞[せじ]|Schmeichelei, Kompliment|彼[かれ]はお 世辞[せじ]を 言[い]うのが 上手[うま]い。|Er kann gut schmeicheln.|Nomen
委員会|委員会[いいんかい]|Ausschuss, Komitee|明日[あした]、 委員会[いいんかい]が 開[ひら]かれます。|Morgen tagt der Ausschuss.|Nomen
すっきり|すっきり|erfrischt, klar, aufgeräumt|よく 眠[ねむ]ったら 気分[きぶん]がすっきりした。|Nachdem ich gut geschlafen hatte, fühlte ich mich erfrischt.|Adverb
委員|委員[いいん]|Ausschussmitglied|彼[かれ]は 委員[いいん]に 選[えら]ばれました。|Er wurde in den Ausschuss gewählt.|Nomen
出勤|出勤[しゅっきん]|zur Arbeit gehen, Dienstantritt|毎朝7時5分[まいあさ しち じ ご ふん]に 出勤[しゅっきん]します。|Ich gehe jeden Morgen um 7:05 Uhr zur Arbeit.|Nomen (mit する)
勤勉|勤勉[きんべん]|Fleiß, fleißig|彼[かれ]は 勤勉[きんべん]な 人[ひと]です。|Er ist ein fleißiger Mensch.|な-Adjektiv
勤務|勤務[きんむ]|Dienst, Arbeit|私[わたし]の 一日[いちにち]の 勤務[きんむ] 時間[じかん]は 8時間[はちじかん]です。|Meine tägliche Arbeitszeit beträgt acht Stunden.|Nomen (mit する)
義務|義務[ぎむ]|Pflicht|労働[ろうどう]は 国民[こくみん]の 義務[ぎむ]です。|Arbeit ist die Pflicht der Bürger.|Nomen
事務|事務[じむ]|Büroarbeit|事務[じむ]の 経験[けいけん]が 3年[さんねん]あります。|Ich habe drei Jahre Erfahrung in der Büroarbeit.|Nomen
公務員|公務員[こうむいん]|Beamte(r), Angestellte(r) im öffentlichen Dienst|私[わたし]の 父[ちち]は 公務員[こうむいん]です。|Mein Vater ist Beamter.|Nomen
あいにく|あいにく|leider, unglücklicherweise|途中[とちゅう]であいにく 雨[あめ]が 降[ふ]り 出[だ]したの。|Unterwegs fing es leider an zu regnen.|Adverb
事務員|事務員[じむいん]|Bürokraft|新[あたら]しい 事務員[じむいん]が 入[はい]りました。|Eine neue Bürokraft hat angefangen.|Nomen
従う|従[したが]う|folgen, gehorchen|上司[じょうし]の 指示[しじ]に 従[したが]った。|Ich habe die Anweisungen meines Vorgesetzten befolgt.|Verb
従業員|従業員[じゅうぎょういん]|Beschäftigte(r), Mitarbeiter(in)|会社[かいしゃ]は 従業員[じゅうぎょういん]の 数[かず]を 増[ふ]やす 予定[よてい]だ。|Die Firma will die Zahl der Beschäftigten erhöhen.|Nomen
雇用|雇用[こよう]|Beschäftigung, Anstellung|彼[かれ]はその 会社[かいしゃ]と 雇用[こよう] 契約[けいやく]を 結[むす]んだの。|Er hat mit der Firma einen Arbeitsvertrag geschlossen.|Nomen (mit する)
実績|実績[じっせき]|Leistung, Erfolgsbilanz|彼[かれ]は 営業[えいぎょう]で 実績[じっせき]を 上[あ]げたんだ。|Er hat im Vertrieb gute Ergebnisse erzielt.|Nomen
業績|業績[ぎょうせき]|Leistung, Ergebnis|彼[かれ]の 今月[こんげつ]の 業績[ぎょうせき]は 素晴[すば]らしいです。|Seine Leistung in diesem Monat ist großartig.|Nomen
応募|応募[おうぼ]|Bewerbung, Teilnahmeantrag|求人[きゅうじん]に 多数[たすう]の 応募[おうぼ]があった。|Auf die Stellenanzeige gingen zahlreiche Bewerbungen ein.|Nomen (mit する)
集中|集中[しゅうちゅう]|Konzentration|勉強[べんきょう]に 集中[しゅうちゅう]しなさい。|Konzentrier dich aufs Lernen.|Nomen (mit する)
おばさん|おばさん|Frau mittleren Alters; Tante|おばさん、こんにちは。|Guten Tag! (zu einer vertrauten älteren Frau)|Nomen
集合|集合[しゅうごう]|Versammeln, Treffen|7時5分[しち じ ご ふん]に 駅[えき]で 集合[しゅうごう]しましょう。|Treffen wir uns um 7:05 Uhr am Bahnhof.|Nomen (mit する)
集まり|集[あつ]まり|Zusammenkunft; Beteiligung|雨[あめ]で 集[あつ]まりが 悪[わる]いですね。|Wegen des Regens kommen nur wenige.|Nomen
収集|収集[しゅうしゅう]|Sammeln, Sammlung|彼[かれ]の 趣味[しゅみ]は 切手[きって] 収集[しゅうしゅう]です。|Sein Hobby ist Briefmarkensammeln.|Nomen (mit する)
採算|採算[さいさん]|Rentabilität|コストがこんなに 高[たか]くては 採算[さいさん]が 取[と]れません。|Bei so hohen Kosten rechnet es sich nicht.|Nomen
採点|採点[さいてん]|Benotung, Korrektur|先生[せんせい]は 試験[しけん]の 採点[さいてん]が 終[お]わったようね。|Der Lehrer ist offenbar mit dem Korrigieren der Prüfung fertig.|Nomen (mit する)
供給|供給[きょうきゅう]|Versorgung, Angebot|彼[かれ]の 会社[かいしゃ]は 電力[でんりょく]を 供給[きょうきゅう]しています。|Seine Firma liefert Strom.|Nomen (mit する)
月給|月給[げっきゅう]|Monatsgehalt|月給[げっきゅう]は 毎月25日[まいつき にじゅうごにち]に 支給[しきゅう]されます。|Das Gehalt wird jeden Monat am 25. gezahlt.|Nomen
ジャンプ|ジャンプ|Sprung|猿[さる]が 高[たか]い 木[き]にジャンプした。|Der Affe sprang auf einen hohen Baum.|Nomen (mit する)
時給|時給[じきゅう]|Stundenlohn|この 仕事[しごと]は 時給[じきゅう] 1000円[せんえん]です。|Diese Arbeit bringt 1.000 Yen Stundenlohn.|Nomen
需要|需要[じゅよう]|Nachfrage|需要[じゅよう]が 多過[おおす]ぎて 生産[せいさん]が 追[お]い 付[つ]きません。|Die Nachfrage ist so groß, dass die Produktion nicht nachkommt.|Nomen
就任|就任[しゅうにん]|Amtsantritt|彼[かれ]は 新首相[しんしゅしょう]に 就任[しゅうにん]しましたね。|Er hat das Amt des neuen Premierministers angetreten.|Nomen (mit する)
職員|職員[しょくいん]|Mitarbeiter(in), Personal|ここは 職員[しょくいん] 専用[せんよう]の 出入[でい]り 口[ぐち]です。|Das ist ein Eingang nur für Mitarbeiter.|Nomen
職場|職場[しょくば]|Arbeitsplatz|自宅[じたく]から 職場[しょくば]まで 1時間[いちじかん]かかります。|Von zu Hause bis zum Arbeitsplatz brauche ich eine Stunde.|Nomen
職業|職業[しょくぎょう]|Beruf|あなたの 職業[しょくぎょう]を 教[おし]えてください。|Nennen Sie mir bitte Ihren Beruf.|Nomen
条約|条約[じょうやく]|Vertrag (zwischen Staaten), Abkommen|2国間[にこくかん]で 条約[じょうやく]が 結[むす]ばれました。|Zwischen den beiden Ländern wurde ein Abkommen geschlossen.|Nomen
あちらこちら|あちらこちら|hier und da, überall|あちらこちらで 紅葉[こうよう]がきれいですね。|Überall ist das Herbstlaub schön.|Nomen
参考|参考[さんこう]|Nachschlagen, Orientierung|この 本[ほん]を 参考[さんこう]にして 下[くだ]さい。|Ziehen Sie bitte dieses Buch zu Rate.|Nomen
参議院|参議院[さんぎいん]|Oberhaus (des japanischen Parlaments)|彼[かれ]は 参議院[さんぎいん] 議員[ぎいん]です。|Er ist Abgeordneter des Oberhauses.|Nomen
お参り|お 参[まい]り|Tempel- oder Schreinbesuch|家族[かぞく]でお 寺[てら]にお 参[まい]りに 行[い]きました。|Wir waren mit der Familie im Tempel beten.|Nomen (mit する)
参考書|参考書[さんこうしょ]|Nachschlagewerk, Lernhilfe|この 参考書[さんこうしょ]はとても 役[やく]に 立[た]つよ。|Diese Lernhilfe ist sehr nützlich.|Nomen
加わる|加[くわ]わる|hinzukommen, sich anschließen|私[わたし]たちのチームに 彼[かれ]が 加[くわ]わった。|Er ist zu unserem Team gestoßen.|Verb
いい加減|いい 加減[かげん]|verantwortungslos, schlampig; angemessen|いい 加減[かげん]なことを 言[い]ってはいけません。|Man darf nicht einfach irgendetwas daherreden.|な-Adjektiv
追う|追[お]う|verfolgen, nachjagen|警官[けいかん]は 怪[あや]しい 男[おとこ]の 後[あと]を 追[お]ったよ。|Der Polizist folgte dem verdächtigen Mann.|Verb
追い出す|追[お]い 出[だ]す|hinauswerfen, vertreiben|彼[かれ]は 家[いえ]から 追[お]い 出[だ]された。|Er wurde aus dem Haus geworfen.|Verb
いつのまにか|いつのまにか|unbemerkt, ehe man sich versieht|いつのまにか 夜[よ]が 明[あ]けていたね。|Ehe wir uns versahen, war es Morgen geworden.|Adverb
感じ|感[かん]じ|Gefühl, Eindruck|あの 子[こ]は 感[かん]じの 良[い]い 子[こ]です。|Das ist ein sympathisches Kind.|Nomen
感情|感情[かんじょう]|Gefühl, Emotion|感情[かんじょう]とは 複雑[ふくざつ]なものです。|Gefühle sind etwas Kompliziertes.|Nomen
感覚|感覚[かんかく]|Sinn, Empfindung|冷[ひ]えて 指[ゆび]の 感覚[かんかく]がない。|Vor Kälte habe ich kein Gefühl mehr in den Fingern.|Nomen
感動|感動[かんどう]|Rührung, Ergriffenheit|感動[かんどう]する 映画[えいが]でした。|Es war ein bewegender Film.|Nomen (mit する)
実感|実感[じっかん]|echtes Empfinden, Bewusstwerden|子供[こども]が 歩[ある]き 始[はじ]めたとき、 子供[こども]の 成長[せいちょう]を 実感[じっかん]した。|Als mein Kind zu laufen begann, wurde mir bewusst, wie es heranwächst.|Nomen (mit する)
感心|感心[かんしん]|Bewunderung|彼[かれ]の 我慢強[がまんづよ]さには 感心[かんしん]しました。|Ich habe seine Ausdauer bewundert.|Nomen (mit する)
思想|思想[しそう]|Gedanke, Ideologie, Denken|人[ひと]には 思想[しそう]の 自由[じゆう]がある。|Der Mensch hat Gedankenfreiheit.|Nomen
おごる|おごる|einladen, spendieren|彼[かれ]に 食事[しょくじ]をおごってもらった。|Er hat mir das Essen spendiert.|Verb
感想|感想[かんそう]|Eindruck, Gedanken (zu etwas)|ご 感想[かんそう]をお 聞[き]かせ 下[くだ]さい。|Lassen Sie uns bitte Ihre Eindrücke wissen.|Nomen
空想|空想[くうそう]|Fantasie, Tagtraum|彼[かれ]は 空想[くうそう]にふけっているの。|Er hängt Tagträumen nach.|Nomen (mit する)
現像|現像[げんぞう]|Entwicklung (eines Films)|このフィルムを 現像[げんぞう]してください。|Entwickeln Sie bitte diesen Film.|Nomen (mit する)
現象|現象[げんしょう]|Phänomen, Erscheinung|村[むら]では 最近[さいきん]、 不思議[ふしぎ]な 現象[げんしょう]が 起[お]きています。|Im Dorf treten in letzter Zeit seltsame Phänomene auf.|Nomen
気象|気象[きしょう]|Wetter, Wetterlage|テレビで 明日[あす]の 気象[きしょう] 情報[じょうほう]を 確認[かくにん]したよ。|Ich habe im Fernsehen den Wetterbericht für morgen angesehen.|Nomen
障子|障子[しょうじ]|Papierschiebetür (Shōji)|猫[ねこ]が 障子[しょうじ]を 破[やぶ]った。|Die Katze hat die Papierschiebetür zerrissen.|Nomen
修正|修正[しゅうせい]|Korrektur, Änderung|検討[けんとう]の 結果[けっか]、 案[あん]を 修正[しゅうせい]したよ。|Nach der Prüfung haben wir den Entwurf geändert.|Nomen (mit する)
おやつ|おやつ|Zwischenmahlzeit, Nachmittagssnack|今日[きょう]のおやつはプリンだった。|Heute gab es als Snack Pudding.|Nomen
傷|傷[きず]|Wunde, Kratzer|足[あし]の 傷[きず]が 痛[いた]みます。|Die Wunde am Bein schmerzt.|Nomen
傷める|傷[いた]める|verletzen, beschädigen|彼[かれ]は 柔道[じゅうどう]で 腰[こし]を 傷[いた]めたんだ。|Er hat sich beim Judo den Rücken verletzt.|Verb
交換|交換[こうかん]|Austausch, Tausch|試合[しあい]の 相手[あいて]とユニフォームを 交換[こうかん]したよ。|Wir haben mit der gegnerischen Mannschaft die Trikots getauscht.|Nomen (mit する)
言い換える|言[い]い 換[か]える|anders ausdrücken, umformulieren|彼[かれ]は 易[やさ]しい 言葉[ことば]に 言[い]い 換[か]えたんだ。|Er hat es in einfachen Worten umschrieben.|Verb
着替え|着替[きが]え|Wechselkleidung, Umziehen|着替[きが]えを 旅行[りょこう]カバンに 詰[つ]めたよ。|Ich habe Wechselkleidung in die Reisetasche gepackt.|Nomen (mit する)
交替|交替[こうたい]|Ablösung, Wechsel|家[いえ]まで 交替[こうたい]で 荷物[にもつ]を 持[も]ちました。|Bis nach Hause haben wir das Gepäck abwechselnd getragen.|Nomen (mit する)
火災|火災[かさい]|Brand, Feuersbrunst|火災[かさい]の 原因[げんいん]は 放火[ほうか]だそうです。|Die Brandursache soll Brandstiftung sein.|Nomen
災難|災難[さいなん]|Unglück, Missgeschick|旅先[たびさき]で 思[おも]いがけない 災難[さいなん]にあいました。|Auf der Reise ist uns ein unerwartetes Missgeschick passiert.|Nomen
ごろごろ|ごろごろ|grollend, rumpelnd; herumliegend|雷[かみなり]がごろごろ 鳴[な]っている。|Der Donner grollt.|Adverb
障害|障害[しょうがい]|Hindernis, Störung; Behinderung|まずは 障害[しょうがい]を 取[と]り 除[のぞ]いてから 計画[けいかく]を 進[すす]めよう。|Räumen wir erst die Hindernisse aus dem Weg und treiben dann den Plan voran.|Nomen
災害|災害[さいがい]|Katastrophe, Unglück|地震[じしん]は 自然[しぜん] 災害[さいがい]のひとつです。|Erdbeben gehören zu den Naturkatastrophen.|Nomen
公害|公害[こうがい]|Umweltverschmutzung|私[わたし]たちは 公害[こうがい]を 減[へ]らすよう 努力[どりょく]しています。|Wir bemühen uns, die Umweltverschmutzung zu verringern.|Nomen
水害|水害[すいがい]|Hochwasserschaden|水害[すいがい]でたくさんの 人[ひと]が 家[いえ]を 失[うしな]ったの。|Durch das Hochwasser haben viele Menschen ihr Haus verloren.|Nomen
害|害[がい]|Schaden|お 酒[さけ]の 飲[の]み 過[す]ぎは 健康[けんこう]に 害[がい]があります。|Zu viel Alkohol schadet der Gesundheit.|Nomen (mit する)
被せる|被[かぶ]せる|bedecken, überziehen|本[ほん]にカバーを 被[かぶ]せたの。|Ich habe das Buch eingeschlagen.|Verb
救う|救[すく]う|retten, helfen|彼女[かのじょ]は 通[とお]りがかりの 人[ひと]に 救[すく]われたよ。|Sie wurde von einem Passanten gerettet.|Verb
シューズ|シューズ|Schuhe, Sportschuhe|ジョギング 用[よう]のシューズは 安[やす]くないな。|Joggingschuhe sind nicht billig.|Nomen
救い|救[すく]い|Rettung, Trost|娘[むすめ]の 存在[そんざい]が 私[わたし]の 救[すく]いでした。|Meine Tochter war mein Trost.|Nomen
助手|助手[じょしゅ]|Assistent(in), Helfer(in)|資料[しりょう]は 助手[じょしゅ]に 預[あず]けておいてください。|Geben Sie die Unterlagen bitte bei meinem Assistenten ab.|Nomen
救助|救助[きゅうじょ]|Rettung, Bergung|プールで 男[おとこ]の 子[こ]が 救助[きゅうじょ]されました。|Im Schwimmbad wurde ein Junge gerettet.|Nomen (mit する)
支援|支援[しえん]|Unterstützung, Hilfe|彼[かれ]の 支援[しえん]がなかったらどうなっていたか。|Was wäre ohne seine Unterstützung geworden?|Nomen (mit する)
援助|援助[えんじょ]|Hilfe, Unterstützung|その 国[くに]には 物資[ぶっし]の 援助[えんじょ]が 必要[ひつよう]です。|Das Land braucht Hilfsgüter.|Nomen (mit する)
応援|応援[おうえん]|Anfeuern, Unterstützung|大勢[おおぜい]が 応援[おうえん]に 駆[か]けつけてくれたよ。|Viele sind herbeigeeilt, um uns anzufeuern.|Nomen (mit する)
小遣い|小遣[こづか]い|Taschengeld|おじいちゃんにお 小遣[こづか]いをもらったよ。|Ich habe von Opa Taschengeld bekommen.|Nomen
キス|キス|Kuss|初[はじ]めてのキスは 海岸[かいがん]でだったの。|Mein erster Kuss war am Strand.|Nomen (mit する)
警告|警告[けいこく]|Warnung, Verwarnung|車[くるま]に 駐車違反[ちゅうしゃ いはん]の 警告[けいこく]を 貼[は]られました。|An mein Auto wurde ein Strafzettel wegen Falschparkens geklebt.|Nomen (mit する)
警官|警官[けいかん]|Polizist(in)|道[みち]で 警官[けいかん]に 呼[よ]び 止[と]められた。|Auf der Straße hat mich ein Polizist angehalten.|Nomen
管|管[かん]|Rohr, Röhre|ガス 管[かん]が 爆発[ばくはつ]しました。|Die Gasleitung ist explodiert.|Nomen
犯す|犯[おか]す|begehen (Verbrechen); vergewaltigen|彼[かれ]は 大[おお]きな 過[あやま]ちを 犯[おか]している。|Er begeht einen großen Fehler.|Verb
強盗|強盗[ごうとう]|Raub, Räuber|強盗[ごうとう]がカメラに 写[うつ]っていました。|Der Räuber war auf der Kamera zu sehen.|Nomen
自殺|自殺[じさつ]|Selbstmord|犯人[はんにん]は 警察[けいさつ]に 捕[つか]まる 前[まえ]に 自殺[じさつ]しました。|Der Täter nahm sich das Leben, bevor die Polizei ihn fassen konnte.|Nomen (mit する)
殺人|殺人[さつじん]|Mord, Tötung|その 殺人[さつじん] 事件[じけん]は 白昼[はくちゅう]に 起[お]こったんだ。|Der Mord geschah am helllichten Tag.|Nomen
くるくる|くるくる|sich drehend, im Kreis herum|猫[ねこ]は 私[わたし]の 足元[あしもと]をくるくると 回[まわ]ったの。|Die Katze strich immer wieder um meine Beine.|Adverb
奪う|奪[うば]う|rauben, entreißen|その 男[おとこ]は 彼女[かのじょ]のバッグを 奪[うば]ったぞ。|Der Mann hat ihr die Tasche entrissen.|Verb
戦後|戦後[せんご]|Nachkriegszeit|戦後[せんご]の 日本[にほん]は 混乱[こんらん]していました。|Japan war nach dem Krieg im Chaos.|Nomen
作戦|作戦[さくせん]|Taktik, Strategie|彼[かれ]らは 次[つぎ]の 試合[しあい]のために 作戦[さくせん]を 立[た]てたのよ。|Sie haben eine Strategie für das nächste Spiel entwickelt.|Nomen
戦場|戦場[せんじょう]|Schlachtfeld, Front|祖父[そふ]は 戦場[せんじょう]に 行[い]ったことがあるそうです。|Mein Großvater soll an der Front gewesen sein.|Nomen
戦前|戦前[せんぜん]|Vorkriegszeit|戦前[せんぜん]の 生活[せいかつ]は 今[いま]と 全[まった]く 違[ちが]いました。|Das Leben vor dem Krieg war ganz anders als heute.|Nomen
戦死|戦死[せんし]|Tod im Krieg|祖父[そふ]は 戦死[せんし]しました。|Mein Großvater ist im Krieg gefallen.|Nomen (mit する)
争い|争[あらそ]い|Streit, Konflikt|その 地域[ちいき]では 争[あらそ]いが 絶[た]えません。|In dieser Region reißen die Konflikte nicht ab.|Nomen
争う|争[あらそ]う|streiten, wetteifern|その 2国[にこく]は 資源[しげん]をめぐって 争[あらそ]っています。|Die beiden Länder streiten um Rohstoffe.|Verb
サボる|サボる|schwänzen, blaumachen|また 仕事[しごと]をサボっていますね。|Du drückst dich schon wieder vor der Arbeit.|Verb
競技|競技[きょうぎ]|Wettkampf, Sportart|彼[かれ]は 個人[こじん] 競技[きょうぎ]のスポーツが 好[す]きです。|Er mag Einzelsportarten.|Nomen (mit する)
混雑|混雑[こんざつ]|Gedränge, Überfüllung|今日[きょう]はデパートが 混雑[こんざつ]していたよ。|Heute war das Kaufhaus überfüllt.|Nomen (mit する)
混乱|混乱[こんらん]|Verwirrung, Chaos|地震[じしん]の 後[あと]、 町[まち]は 大[だい] 混乱[こんらん]だったよ。|Nach dem Erdbeben herrschte in der Stadt großes Chaos.|Nomen (mit する)
捜す|捜[さが]す|suchen, fahnden nach|警察[けいさつ]がその 男[おとこ]を 捜[さが]しているの。|Die Polizei sucht den Mann.|Verb
索引|索引[さくいん]|Register, Index|索引[さくいん]はたいてい 本[ほん]の 後[うし]ろについていますよ。|Das Register steht meistens hinten im Buch.|Nomen
落ち着く|落[お]ち 着[つ]く|sich beruhigen, zur Ruhe kommen|私[わたし]の 話[はなし]を 落[お]ち 着[つ]いて 聞[き]いてください。|Hören Sie mir bitte in Ruhe zu.|Verb
落ち着き|落[お]ち 着[つ]き|Gelassenheit, Ruhe|弟[おとうと]は 落[お]ち 着[つ]きが 足[た]りません。|Meinem kleinen Bruder fehlt es an Ruhe.|Nomen
ショッピング|ショッピング|Einkaufen, Shopping|彼女[かのじょ]のいちばんの 楽[たの]しみはショッピングです。|Ihr größtes Vergnügen ist Shopping.|Nomen (mit する)
落とし物|落[お]とし 物[もの]|Fundsache, verlorener Gegenstand|財布[さいふ]の 落[お]とし 物[もの]を 拾[ひろ]いました。|Ich habe ein verlorenes Portemonnaie gefunden.|Nomen
交流|交流[こうりゅう]|Austausch, Begegnung|もっと 他[ほか]の 町[まち]との 交流[こうりゅう]を 深[ふか]めましょう。|Vertiefen wir den Austausch mit anderen Städten.|Nomen (mit する)
一流|一流[いちりゅう]|erstklassig|彼[かれ]は 一流[いちりゅう]の 選手[せんしゅ]です。|Er ist ein Spitzensportler.|Nomen
上流|上流[じょうりゅう]|Oberlauf; Oberschicht|上流[じょうりゅう]には 滝[たき]があります。|Am Oberlauf gibt es einen Wasserfall.|Nomen
下流|下流[かりゅう]|Unterlauf; Unterschicht|下流[かりゅう]に 小[ちい]さな 滝[たき]があるよ。|Flussabwärts gibt es einen kleinen Wasserfall.|Nomen
海流|海流[かいりゅう]|Meeresströmung|ここで 2[ふた]つの 海流[かいりゅう]が 出合[であ]っている。|Hier treffen zwei Meeresströmungen aufeinander.|Nomen
三流|三流[さんりゅう]|drittklassig|彼[かれ]は 三流[さんりゅう] 大学[だいがく]を 出[で]たが、 今[いま]は 社長[しゃちょう]だよ。|Er war an einer drittklassigen Universität, ist aber jetzt Firmenchef.|Nomen
スマート|スマート|elegant, gewandt; schlank|彼[かれ]はいつもスマートに 行動[こうどう]するね。|Er handelt immer gewandt.|Adjektiv
洪水|洪水[こうずい]|Hochwasser, Überschwemmung|洪水[こうずい]でたくさんの 家[いえ]が 流[なが]されたの。|Durch das Hochwasser wurden viele Häuser weggeschwemmt.|Nomen
崩れる|崩[くず]れる|einstürzen, zusammenbrechen|大雨[おおあめ]で 崖[がけ]が 崩[くず]れたね。|Durch den starken Regen ist der Hang abgerutscht.|Verb
崩す|崩[くず]す|zerstören, aus dem Gleichgewicht bringen|彼女[かのじょ]は 体調[たいちょう]を 崩[くず]しています。|Sie ist gesundheitlich angeschlagen.|Verb
水洗|水洗[すいせん]|Wasserspülung|今[いま]はほとんどのトイレが 水洗[すいせん]ですよ。|Heute haben fast alle Toiletten eine Wasserspülung.|Nomen (mit する)
洗い物|洗[あら]い 物[もの]|Abwasch|母[はは]は 台所[だいどころ]で 洗[あら]い 物[もの]をしています。|Meine Mutter spült in der Küche das Geschirr.|Nomen
石油|石油[せきゆ]|Erdöl|日本[にっぽん]は 石油[せきゆ]のほとんどを 輸入[ゆにゅう]しています。|Japan importiert fast sein gesamtes Erdöl.|Nomen
油絵|油絵[あぶらえ]|Ölgemälde, Ölmalerei|趣味[しゅみ]で 油絵[あぶらえ]を 描[か]いています。|Ich male als Hobby Ölbilder.|Nomen
浮かぶ|浮[う]かぶ|schwimmen, treiben; auftauchen|沖[おき]にボートが 浮[う]かんでいます。|Vor der Küste treibt ein Boot.|Verb
ずらり|ずらり|in einer langen Reihe|玄関[げんかん]に 靴[くつ]がずらりと 並[なら]んでいたな。|Im Eingang standen die Schuhe in einer langen Reihe.|Adverb
浮かべる|浮[う]かべる|schwimmen lassen; zeigen (Miene)|お 風呂[ふろ]に 花[はな]を 浮[う]かべて 入[はい]ったの。|Ich habe Blüten ins Badewasser gegeben und gebadet.|Verb
浮く|浮[う]く|schwimmen, obenauf treiben|氷[こおり]は 水[みず]に 浮[う]きます。|Eis schwimmt auf Wasser.|Verb
沈める|沈[しず]める|versenken|彼女[かのじょ]はソファーに 体[からだ]を 沈[しず]めたんだ。|Sie ließ sich ins Sofa sinken.|Verb
将来|将来[しょうらい]|Zukunft|将来[しょうらい]はパイロットになりたいです。|Später möchte ich Pilot werden.|Nomen
永遠|永遠[えいえん]|Ewigkeit|平和[へいわ]は 人類[じんるい]の 永遠[えいえん]のテーマです。|Frieden ist ein ewiges Thema der Menschheit.|な-Adjektiv
永久|永久[えいきゅう]|Ewigkeit, Dauer|彼[かれ]は 永久[えいきゅう]に 帰[かえ]らぬ 人[ひと]となったのよ。|Er ist für immer von uns gegangen.|な-Adjektiv
河口|河口[かこう]|Flussmündung|この 川[かわ]の 河口[かこう]は 太平洋[たいへいよう]に 注[そそ]いでいます。|Dieser Fluss mündet in den Pazifik.|Nomen
いらっしゃる|いらっしゃる|kommen, gehen, da sein (respektvoll)|お 客様[きゃくさま]がいらっしゃいました。|Der Gast ist gekommen.|Verb
冷ます|冷[さ]ます|abkühlen lassen|お 茶[ちゃ]がとても 熱[あつ]かったので 冷[さ]ましてから 飲[の]んだの。|Der Tee war sehr heiß, deshalb habe ich ihn vor dem Trinken abkühlen lassen.|Verb
車庫|車庫[しゃこ]|Garage|車[くるま]を 車庫[しゃこ]に 入[い]れておきました。|Ich habe das Auto in die Garage gestellt.|Nomen
金庫|金庫[きんこ]|Tresor, Safe|ホテルの 金庫[きんこ]に 貴重品[きちょうひん]を 入[い]れたよ。|Ich habe die Wertsachen in den Hotelsafe gelegt.|Nomen
心臓|心臓[しんぞう]|Herz (Organ)|祖母[そぼ]は 心臓[しんぞう]が 悪[わる]いんだ。|Meine Großmutter ist herzkrank.|な-Adjektiv
軽快|軽快[けいかい]|leichtfüßig, beschwingt|彼[かれ]らは 軽快[けいかい]なステップで 踊[おど]り 出[だ]したの。|Sie begannen mit beschwingten Schritten zu tanzen.|Adjektiv
快い|快[こころよ]い|angenehm, wohltuend|彼女[かのじょ]は 快[こころよ]い 眠[ねむ]りについています。|Sie schläft selig.|Adjektiv
快晴|快晴[かいせい]|heiteres, wolkenloses Wetter|今日[きょう]は 快晴[かいせい]ですね。|Heute ist strahlendes Wetter.|Nomen
ウナギ|ウナギ|Aal|ウナギの 蒲焼[かばや]きは 美味[おい]しいね。|Gegrillter Aal schmeckt gut.|Nomen
最適|最適[さいてき]|am besten geeignet, optimal|ここは 子育[こそだ]てに 最適[さいてき]な 環境[かんきょう]です。|Das hier ist die ideale Umgebung, um Kinder großzuziehen.|な-Adjektiv
指摘|指摘[してき]|Hinweis, Aufzeigen|ご 指摘[してき]いただきありがとうございます。|Vielen Dank für den Hinweis.|Nomen (mit する)
湿度|湿度[しつど]|Luftfeuchtigkeit|日本[にほん]の 夏[なつ]は 湿度[しつど]が 高[たか]いです。|Im japanischen Sommer ist die Luftfeuchtigkeit hoch.|Nomen
湿っぽい|湿[しめ]っぽい|feucht, klamm; trübsinnig|雨[あめ]の 日[ひ]が 続[つづ]いて 家[いえ]の 中[なか]が 湿[しめ]っぽいな。|Nach den vielen Regentagen ist es im Haus klamm.|Adjektiv
湿気|湿気[しっけ]|Feuchtigkeit|この 部屋[へや]は 暗[くら]くて 湿気[しっけ]が 多[おお]いね。|Dieses Zimmer ist dunkel und feucht.|Nomen
湿る|湿[しめ]る|feucht werden|洗濯物[せんたくもの]がまだ 湿[しめ]っています。|Die Wäsche ist noch feucht.|Verb
汚染|汚染[おせん]|Verschmutzung, Verseuchung|その 川[かわ]の 水[みず]は 汚染[おせん]されています。|Das Wasser dieses Flusses ist verschmutzt.|Nomen (mit する)
景気|景気[けいき]|Konjunktur, Wirtschaftslage|景気[けいき]が 回復[かいふく]してきたね。|Die Konjunktur erholt sich.|Nomen
ガード|ガード|Leitplanke, Schutzgeländer|歩道[ほどう]に 新[あたら]しくガードが 付[つ]きましたね。|Am Gehweg wurde ein neues Schutzgeländer angebracht.|Nomen
影|影[かげ]|Schatten, Silhouette|窓[まど]に 男性[だんせい]の 影[かげ]が 映[うつ]っています。|Am Fenster ist der Schatten eines Mannes zu sehen.|Nomen
境界|境界[きょうかい]|Grenze, Grenzlinie|ここは 隣[となり]の 市[し]との 境界[きょうかい]です。|Hier ist die Grenze zur Nachbarstadt.|Nomen
環境|環境[かんきょう]|Umwelt, Umgebung|引[ひ]っ 越[こ]して 環境[かんきょう]が 変[か]わりました。|Durch den Umzug hat sich meine Umgebung verändert.|Nomen
国境|国境[こっきょう]|Staatsgrenze|あの 山[やま]のすぐ 近[ちか]くが 国境[こっきょう]です。|Gleich bei dem Berg dort verläuft die Grenze.|Nomen
境|境[さかい]|Grenze|2[ふた]つの 市[し]の 境[さかい]に 川[かわ]が 流[なが]れているの。|An der Grenze der beiden Städte fließt ein Fluss.|Nomen
観察|観察[かんさつ]|Beobachtung|花[はな]の 成長[せいちょう]を 観察[かんさつ]して 日記[にっき]を 書[か]きなさい。|Beobachte das Wachstum der Blume und führe darüber Tagebuch.|Nomen (mit する)
外観|外観[がいかん]|äußeres Erscheinungsbild|そのモダンな 外観[がいかん]の 建物[たてもの]が 大使館[たいしかん]です。|Das Gebäude mit dem modernen Äußeren ist die Botschaft.|Nomen
かぼちゃ|かぼちゃ|Kürbis|かぼちゃのスープは 美味[おい]しいです。|Kürbissuppe schmeckt gut.|Nomen
客観的|客観的[きゃっかんてき]|objektiv|彼[かれ]は 自分[じぶん]の 状況[じょうきょう]を 客観的[きゃっかんてき]に 見[み]てみたのね。|Er hat versucht, seine Lage objektiv zu betrachten.|Adjektiv
主観|主観[しゅかん]|Subjektivität, subjektive Sicht|主観[しゅかん]だけで 物事[ものごと]を 見[み]てはいけない。|Man darf die Dinge nicht nur subjektiv betrachten.|Nomen
主観的|主観的[しゅかんてき]|subjektiv|それは 主観的[しゅかんてき]な 意見[いけん]だ。|Das ist eine subjektive Meinung.|Adjektiv
観客|観客[かんきゃく]|Zuschauer(in), Publikum|観客[かんきゃく]は 興奮[こうふん]していたよ。|Das Publikum war begeistert.|Nomen
観光|観光[かんこう]|Sightseeing, Tourismus|京都[きょうと]で 3日間[みっかかん] 観光[かんこう]しました。|Ich habe drei Tage lang Kyoto besichtigt.|Nomen
観測|観測[かんそく]|Beobachtung, Messung|先生[せんせい]が 星[ほし]の 観測[かんそく]に 連[つ]れて 行[い]ってくれました。|Der Lehrer hat uns zur Sternbeobachtung mitgenommen.|Nomen (mit する)
推測|推測[すいそく]|Vermutung|それは 彼[かれ]の 推測[すいそく]にすぎない。|Das ist bloß seine Vermutung.|Nomen (mit する)
クイズ|クイズ|Quiz|クイズ 番組[ばんぐみ]を 見[み]るのが 好[す]きです。|Ich sehe gern Quizsendungen.|Nomen
宇宙|宇宙[うちゅう]|Weltall, Universum|宇宙[うちゅう]の 謎[なぞ]は 限[かぎ]りなく 大[おお]きいの。|Die Rätsel des Weltalls sind unermesslich.|Nomen
衛星|衛星[えいせい]|Satellit|衛星[えいせい]が 打[う]ち 上[あ]げられましたね。|Der Satellit wurde gestartet.|Nomen
衛生|衛生[えいせい]|Hygiene|衛生[えいせい]には 十分気[じゅうぶん き]を 付[つ]けましょう。|Achten wir gut auf Hygiene.|Nomen
衛生的|衛生的[えいせいてき]|hygienisch|このレストランは 衛生的[えいせいてき]で 安心[あんしん]です。|Dieses Restaurant ist hygienisch, da kann man unbesorgt sein.|Adjektiv
球|球[きゅう]|Kugel, Ball|彼[かれ]は 球[きゅう] 技[ぎ]が 大好[だいす]きです。|Er liebt Ballspiele.|Nomen
震度|震度[しんど]|Erdbebenstärke (japanische Skala)|今朝[けさ]の 地震[じしん]は 震度[しんど] 3[さん]でしたよ。|Das Erdbeben heute Morgen hatte Stärke 3.|Nomen
振動|振動[しんどう]|Vibration, Schwingung|車[くるま]の 振動[しんどう]で 棚[たな]の 荷物[にもつ]が 落[お]ちた。|Durch die Erschütterung des Autos ist Gepäck vom Regal gefallen.|Nomen (mit する)
クリーム|クリーム|Creme; Sahne|私[わたし]は 洗[あら]い 物[もの]をしたあと、 手[て]にクリームをぬります。|Nach dem Abwasch creme ich mir die Hände ein.|Nomen
神経|神経[しんけい]|Nerven; Feingefühl|彼[かれ]は 神経[しんけい]が 細[こま]かいですね。|Er ist sehr feinfühlig.|Nomen
神様|神様[かみさま]|Gott, Gottheit (ehrerbietig)|神様[かみさま]にお 願[ねが]いしました。|Ich habe zu den Göttern gebetet.|Nomen
神道|神道[しんとう]|Shintō, Shintoismus|彼女[かのじょ]の 家[いえ]は 神道[しんとう]です。|Ihre Familie ist shintoistisch.|Nomen
精神|精神[せいしん]|Geist, Psyche|彼女[かのじょ]は 今[いま]、 精神[せいしん]が 不安定[ふあんてい]だ。|Sie ist zurzeit seelisch labil.|Nomen
精算|精算[せいさん]|Abrechnung, Nachzahlung|降[お]りる 駅[えき]で 料金[りょうきん]を 精算[せいさん]して 下[くだ]さい。|Zahlen Sie den Fahrpreis bitte am Zielbahnhof nach.|Nomen (mit する)
厳重|厳重[げんじゅう]|streng, scharf|上司[じょうし]から 厳重[げんじゅう]に 注意[ちゅうい]されました。|Ich bin von meinem Vorgesetzten streng ermahnt worden.|Adjektiv
貴重|貴重[きちょう]|wertvoll, kostbar|彼[かれ]は 貴重[きちょう]な 体験[たいけん]をしたわね。|Er hat eine wertvolle Erfahrung gemacht.|な-Adjektiv
貴重品|貴重品[きちょうひん]|Wertsachen|貴重品[きちょうひん]は 自分[じぶん]で 持[も]っていてください。|Behalten Sie Ihre Wertsachen bitte bei sich.|Nomen
ぐるぐる|ぐるぐる|im Kreis herum, rundherum|犬[いぬ]が 自分[じぶん]のしっぽを 追[お]いかけてぐるぐる 回[まわ]っている。|Der Hund jagt seinem Schwanz nach und dreht sich im Kreis.|Adverb
跡|跡[あと]|Spur, Überrest|ここにタイヤの 跡[あと]があるわ。|Hier sind Reifenspuren.|Nomen
足跡|足跡[あしあと]|Fußspur|雪[ゆき]の 上[うえ]にうさぎの 足跡[あしあと]があった。|Im Schnee waren Hasenspuren.|Nomen
好奇心|好奇心[こうきしん]|Neugier|子供[こども]は 好奇心[こうきしん]でいっぱいだね。|Kinder sind voller Neugier.|Nomen
奇跡|奇跡[きせき]|Wunder|彼[かれ]のマジックはまるで 奇跡[きせき]です。|Seine Zauberkunst ist geradezu ein Wunder.|Nomen
奇数|奇数[きすう]|ungerade Zahl|3[さん]は 奇数[きすう]です。|Drei ist eine ungerade Zahl.|Nomen
経歴|経歴[けいれき]|Werdegang, Lebenslauf|あなたの 経歴[けいれき]をメールで 送[おく]ってください。|Schicken Sie mir bitte Ihren Lebenslauf per E-Mail.|Nomen
学歴|学歴[がくれき]|Bildungsweg, Schulbildung|その 職[しょく]は 大卒[だいそつ]の 学歴[がくれき]が 必要[ひつよう]だ。|Für diese Stelle braucht man einen Hochschulabschluss.|Nomen
さぞ|さぞ|sicherlich, gewiss (vermutend)|それはさぞがっかりしたことでしょう。|Da waren Sie sicherlich sehr enttäuscht.|Adverb
王|王[おう]|König|王[おう]の 墓[はか]を 見学[けんがく]したよ。|Wir haben das Königsgrab besichtigt.|Nomen
王様|王様[おうさま]|König (ehrerbietig)|その 国[くに]の 王様[おうさま]はとても 賢[かしこ]い。|Der König dieses Landes ist sehr weise.|Nomen
建築|建築[けんちく]|Bau, Architektur|彼[かれ]らは 家[いえ]を 建築[けんちく] 中[ちゅう]です。|Sie bauen gerade ein Haus.|Nomen (mit する)
新築|新築[しんちく]|Neubau|彼[かれ]は 去年[きょねん]、 家[いえ]を 新築[しんちく]しました。|Er hat letztes Jahr ein neues Haus gebaut.|Nomen (mit する)
構想|構想[こうそう]|Konzept, Entwurf|彼[かれ]は 新[あたら]しい 小説[しょうせつ]の 構想[こうそう]を 練[ね]っているの。|Er arbeitet am Konzept für einen neuen Roman.|Nomen (mit する)
構える|構[かま]える|einrichten, eröffnen; eine Haltung einnehmen|彼[かれ]はあの 通[とお]りに 店[みせ]を 構[かま]えているの。|Er hat seinen Laden in der Straße dort.|Verb
結構|結構[けっこう]|nein danke; in Ordnung|お 腹[なか]がいっぱいなのでお 代[か]わりは 結構[けっこう]です。|Ich bin satt, ich möchte keinen Nachschlag, danke.|Adjektiv
サングラス|サングラス|Sonnenbrille|彼[かれ]はサングラスが 似合[にあ]うね。|Die Sonnenbrille steht ihm.|Nomen
結構|結構[けっこう]|ziemlich, recht|彼女[かのじょ]は 結構[けっこう]めがねが 似合[にあ]うね。|Die Brille steht ihr ziemlich gut.|Adverb
構う|構[かま]う|sich kümmern um, etwas ausmachen|子供[こども]に 構[かま]い 過[す]ぎてはいけない。|Man sollte sich nicht zu viel um die Kinder kümmern.|Verb
位|位[くらい]|Rang, Stellung|位[くらい]が 上[あ]がれば 責任[せきにん]も 増[ふ]えるものだ。|Mit dem Rang wächst auch die Verantwortung.|Nomen
設置|設置[せっち]|Aufstellung, Einrichtung|お 店[みせ]に 防犯[ぼうはん]カメラが 設置[せっち]されたわね。|Im Laden wurde eine Überwachungskamera angebracht.|Nomen (mit する)
距離|距離[きょり]|Entfernung, Abstand|彼[かれ]らは 長[なが]い 距離[きょり]を 歩[ある]き 続[つづ]けたんだ。|Sie sind eine lange Strecke gelaufen.|Nomen
一周|一周[いっしゅう]|eine Runde, Umrundung|私[わたし]たちは 庭園[ていえん]を 一周[いっしゅう]しました。|Wir haben eine Runde durch den Garten gemacht.|Nomen (mit する)
辺り|辺[あた]り|Umgebung, Gegend|辺[あた]りを 見回[みまわ]したの。|Ich habe mich umgesehen.|Nomen
周囲|周囲[しゅうい]|Umgebung; Umfang|大声[おおごえ]で 話[はな]すと 周囲[しゅうい]の 人[ひと]に 迷惑[めいわく]ですよ。|Wenn man laut spricht, stört man die Leute um sich herum.|Nomen
きっちり|きっちり|genau, exakt|彼女[かのじょ]はきっちり 3時[さんじ]に 来[き]たわ。|Sie kam genau um drei Uhr.|Adverb
囲む|囲[かこ]む|umgeben, einkreisen|久[ひさ]しぶりに 家族全員[かぞく ぜんいん]で 食卓[しょくたく]を 囲[かこ]みました。|Nach langer Zeit saß wieder die ganze Familie um den Esstisch.|Verb
横断|横断[おうだん]|Überquerung|道路[どうろ]を 横断[おうだん]するときは 注意[ちゅうい]して。|Sei vorsichtig, wenn du die Straße überquerst.|Nomen (mit する)
継続|継続[けいぞく]|Fortsetzung, Fortdauer|ものごとは 根気[こんき]よく 継続[けいぞく]することが 大切[たいせつ]です。|Bei allem ist es wichtig, beharrlich dranzubleiben.|Nomen (mit する)
欧米|欧米[おうべい]|Europa und Amerika, der Westen|その 会社[かいしゃ]は 欧米[おうべい]に 進出[しんしゅつ]しているよね。|Die Firma ist nach Europa und Amerika expandiert.|Nomen
州|州[しゅう]|Bundesstaat, Provinz|来月[らいげつ]、 隣[となり]の 州[しゅう]に 引[ひ]っ 越[こ]します。|Nächsten Monat ziehe ich in den Nachbarstaat.|Nomen
陸|陸[おか]|Land, Festland|私[わたし]たちは 舟[ふね]を 降[お]りて、 陸[おか]に 上[あ]がったんだ。|Wir stiegen aus dem Boot und gingen an Land.|Nomen
極めて|極[きわ]めて|äußerst, überaus|これは 極[きわ]めて 重要[じゅうよう]な 問題[もんだい]です。|Das ist ein äußerst wichtiges Problem.|Adverb
きゅうり|きゅうり|Gurke|きゅうりに 味噌[みそ]をつけて 食[た]べたの。|Ich habe Gurke mit Miso gegessen.|Nomen
消極的|消極的[しょうきょくてき]|passiv, zurückhaltend|消極的[しょうきょくてき]な 人[ひと]は 成功[せいこう]しないよ。|Passive Menschen haben keinen Erfolg.|Adjektiv
極端|極端[きょくたん]|extrem|それは 極端[きょくたん]な 意見[いけん]だね。|Das ist eine extreme Meinung.|な-Adjektiv
最先端|最先端[さいせんたん]|modernster Stand, Spitze|そのカメラには 最先端[さいせんたん]の 技術[ぎじゅつ]が 使[つか]われています。|In dieser Kamera steckt modernste Technik.|Nomen
一緒|一緒[いっしょ]|zusammen, gemeinsam|一緒[いっしょ]に 食事[しょくじ]しようか。|Wollen wir zusammen essen?|Nomen (mit する)
外貨|外貨[がいか]|Fremdwährung, Devisen|外貨[がいか]を 両替[りょうがえ]しました。|Ich habe Devisen umgetauscht.|Nomen
貨物|貨物[かもつ]|Fracht|このトランクは 貨物[かもつ]で 送[おく]ろう。|Schicken wir diesen Koffer als Fracht.|Nomen
車輪|車輪[しゃりん]|Rad (eines Fahrzeugs)|このトラックの 車輪[しゃりん]は 頑丈[がんじょう]そうですね。|Die Räder dieses Lastwagens sehen robust aus.|Nomen
すっと|すっと|erleichtert; glatt, gerade|言[い]いたいことを 言[い]ったら 胸[むね]がすっとした。|Nachdem ich gesagt hatte, was ich sagen wollte, war mir leichter ums Herz.|Adverb
回復|回復[かいふく]|Erholung, Wiederherstellung|体[からだ]がすっかり 回復[かいふく]した。|Ich habe mich vollständig erholt.|Nomen (mit する)
渋い|渋[しぶ]い|herb, zusammenziehend; dezent|この 柿[かき]は 渋[しぶ]いね。|Diese Kaki ist herb.|Adjektiv
渋滞|渋滞[じゅうたい]|Stau, Verzögerung|この 国道[こくどう]はよく 渋滞[じゅうたい]します。|Auf dieser Nationalstraße staut es sich oft.|Nomen (mit する)
一帯|一帯[いったい]|ganze Gegend, Umkreis|この 辺[へん] 一帯[いったい]はリンゴ 畑[ばたけ]です。|Die ganze Gegend hier besteht aus Apfelplantagen.|Nomen
帯|帯[おび]|Gürtel (für Kimono), Obi|この 帯[おび]は 長過[なが す]ぎます。|Dieser Obi ist zu lang.|Nomen
温帯|温帯[おんたい]|gemäßigte Zone|日本[にっぽん]は 温帯[おんたい]にあります。|Japan liegt in der gemäßigten Zone.|Nomen
守備|守備[しゅび]|Verteidigung, Abwehr|そのチームは 守備[しゅび]が 甘[あま]いね。|Die Abwehr dieser Mannschaft ist schwach.|Nomen (mit する)
帰宅|帰宅[きたく]|Heimkehr, Nachhausekommen|夜[よる]の 11時[じゅういちじ]に 帰宅[きたく]しました。|Ich bin um elf Uhr abends nach Hause gekommen.|Nomen (mit する)
すらすら|すらすら|fließend, mühelos|その 小学生[しょうがくせい]は 難[むずか]しい 本[ほん]をすらすら 読[よ]んだの。|Der Grundschüler las das schwierige Buch mühelos.|Adverb
住宅地|住宅地[じゅうたくち]|Wohngebiet|その 住宅地[じゅうたくち]は 便利[べんり]な 場所[ばしょ]にあるね。|Das Wohngebiet liegt günstig.|Nomen
宛先|宛先[あてさき]|Empfängeradresse|宛先[あてさき] 不明[ふめい]で 手紙[てがみ]が 戻[もど]ってきたの。|Der Brief kam wegen unbekannter Adresse zurück.|Nomen
宛名|宛名[あてな]|Name des Empfängers, Anschrift|手紙[てがみ]に 宛名[あてな]を 書[か]き 込[こ]んだよ。|Ich habe die Anschrift auf den Brief geschrieben.|Nomen
後戻り|後戻[あともど]り|Umkehren, Rückschritt|彼女[かのじょ]は 途中[とちゅう]で 後戻[あともど]りしました。|Sie ist unterwegs umgekehrt.|Nomen (mit する)
起こす|起[お]こす|verursachen, auslösen|彼[かれ]は 暴力事件[ぼうりょく じけん]を 起[お]こしたんだよ。|Er hat eine Gewalttat begangen.|Verb
起源|起源[きげん]|Ursprung|言葉[ことば]の 起源[きげん]に 大変興味[たいへん きょうみ]があります。|Ich interessiere mich sehr für den Ursprung der Wörter.|Nomen
起き上がる|起[お]き 上[あ]がる|sich aufrichten, aufstehen|弟[おとうと]はようやくベッドから 起[お]き 上[あ]がった。|Mein kleiner Bruder ist endlich aus dem Bett aufgestanden.|Verb
うろうろ|うろうろ|umherirrend, herumlungernd|その 男[おとこ]はロビーをしばらくうろうろしていたよ。|Der Mann lief eine Weile ziellos in der Lobby herum.|Adverb
寝室|寝室[しんしつ]|Schlafzimmer|寝室[しんしつ]の 壁紙[かべがみ]を 張[は]り 替[か]えました。|Ich habe das Schlafzimmer neu tapeziert.|Nomen
静まる|静[しず]まる|still werden, sich legen|台風[たいふう]が 去[さ]って 風[かぜ]が 静[しず]まったね。|Der Taifun ist abgezogen und der Wind hat sich gelegt.|Verb
休暇|休暇[きゅうか]|Urlaub|今度[こんど]の 休暇[きゅうか]にフィリピンに 行[い]きます。|Im nächsten Urlaub fahre ich auf die Philippinen.|Nomen
片手|片手[かたて]|eine Hand|片手[かたて] 運転[うんてん]は 危[あぶ]ないよ。|Einhändig fahren ist gefährlich.|Nomen
片方|片方[かたほう]|eine Seite, eines (von zweien)|片方[かたほう]の 目[め]がかゆいです。|Ein Auge juckt.|Nomen
片側|片側[かたがわ]|eine Seite|この 道[みち]は 片側[かたがわ] 通行[つうこう]です。|Diese Straße ist nur einseitig befahrbar.|Nomen
裏切る|裏切[うらぎ]る|verraten|彼[かれ]は 仲間[なかま]を 裏切[うらぎ]ったの。|Er hat seine Kameraden verraten.|Verb
おまけ|おまけ|Zugabe, Gratisbeigabe; Rabatt|八百屋[やおや]さんでたくさんおまけしてもらったよ。|Im Gemüseladen habe ich viel gratis dazubekommen.|Nomen (mit する)
裏口|裏口[うらぐち]|Hintertür, Hintereingang|裏口[うらぐち]へお 回[まわ]りください。|Gehen Sie bitte zum Hintereingang herum.|Nomen
裏返し|裏返[うらがえ]し|auf links gedreht, verkehrt herum|シャツを 裏返[うらがえ]しに 着[き]ているよ。|Du trägst dein Hemd auf links.|Nomen (mit する)
裏門|裏門[うらもん]|Hintertor|奴[やつ]は 裏門[うらもん]から 出[で]てきたぜ。|Der Kerl kam aus dem Hintertor.|Nomen
裏表|裏表[うらおもて]|Vorder- und Rückseite; verkehrt herum|シャツを 裏表[うらおもて]に 着[き]ていますよ。|Sie tragen Ihr Hemd verkehrt herum.|Nomen
項目|項目[こうもく]|Punkt, Posten, Rubrik|論文[ろんぶん]の 項目[こうもく]を 分[わ]かりやすく 整理[せいり]したわ。|Ich habe die Punkte der Arbeit übersichtlich geordnet.|Nomen
印象|印象[いんしょう]|Eindruck|彼[かれ]から 良[い]い 印象[いんしょう]を 受[う]けたわ。|Ich habe einen guten Eindruck von ihm bekommen.|Nomen
印|印[しるし]|Zeichen, Markierung|間違[まちが]いに 印[しるし]を 付[つ]けておきました。|Ich habe die Fehler markiert.|Nomen
クッキー|クッキー|Keks|クッキーと 紅茶[こうちゃ]をいただきました。|Es gab Kekse und Schwarztee.|Nomen
印刷|印刷[いんさつ]|Druck, Drucken|年賀状[ねんがじょう]を 印刷[いんさつ]したの。|Ich habe Neujahrskarten gedruckt.|Nomen (mit する)
週刊|週刊[しゅうかん]|wöchentlich erscheinend|この 週刊[しゅうかん] 誌[し]を 毎週買[まいしゅう か]っているの。|Ich kaufe diese Wochenzeitschrift jede Woche.|Nomen
月刊|月刊[げっかん]|monatlich erscheinend|この 雑誌[ざっし]は 月刊[げっかん]ですか。|Erscheint diese Zeitschrift monatlich?|Nomen
出版|出版[しゅっぱん]|Veröffentlichung, Herausgabe|この 本[ほん]は 15年前[じゅうごねんまえ]に 出版[しゅっぱん]された。|Dieses Buch ist vor 15 Jahren erschienen.|Nomen (mit する)
出版社|出版社[しゅっぱんしゃ]|Verlag|彼女[かのじょ]は 出版社[しゅっぱんしゃ]で 働[はたら]いています。|Sie arbeitet in einem Verlag.|Nomen
詳細|詳細[しょうさい]|Einzelheiten, Details|詳細[しょうさい]はお 気軽[きがる]にお 問[と]い 合[あ]わせ 下[くだ]さい。|Für Einzelheiten können Sie uns gern ansprechen.|な-Adjektiv
心細い|心細[こころぼそ]い|verzagt, einsam und unsicher|夜道[よみち]の 一人歩[ひとりある]きは 心細[こころぼそ]いね。|Nachts allein unterwegs zu sein ist beklemmend.|Adjektiv
掲示|掲示[けいじ]|Aushang, Bekanntmachung|大会[たいかい]のスローガンを 掲示[けいじ]したよ。|Ich habe das Motto der Veranstaltung ausgehängt.|Nomen (mit する)
コンセント|コンセント|Steckdose|プラグをコンセントに 挿[さ]し 込[こ]んだよ。|Ich habe den Stecker in die Steckdose gesteckt.|Nomen
積極的|積極的[せっきょくてき]|aktiv, engagiert|姉[あね]は 何[なに]に 対[たい]しても 積極的[せっきょくてき]です。|Meine große Schwester geht alles aktiv an.|Adjektiv
言い訳|言[い]い 訳[わけ]|Ausrede, Rechtfertigung|あなたは 言[い]い 訳[わけ]が 多[おお]すぎます。|Du hast zu viele Ausreden.|Nomen (mit する)
誤り|誤[あやま]り|Fehler, Irrtum|解答[かいとう]に 誤[あやま]りが 3[みっ]つ 有[あ]りますよ。|In der Lösung sind drei Fehler.|Nomen
誤る|誤[あやま]る|einen Fehler machen, sich irren|彼[かれ]は 機械[きかい]の 操作[そうさ]を 誤[あやま]った。|Er hat die Maschine falsch bedient.|Verb
誤解|誤解[ごかい]|Missverständnis|私[わたし]の 気持[きも]ちを 誤解[ごかい]しているんじゃない！|Du verstehst meine Gefühle falsch!|Nomen (mit する)
気付く|気付[きづ]く|bemerken, merken|彼[かれ]はやっと 問題点[もんだいてん]に 気付[きづ]きました。|Endlich hat er das Problem bemerkt.|Verb
くっ付く|くっ 付[つ]く|kleben, haften|靴[くつ]の 底[そこ]にガムがくっ 付[つ]いてしまった。|An meiner Schuhsohle klebt Kaugummi.|Verb
ずるい|ずるい|hinterlistig, unfair|あなたのやり 方[かた]はずるい。|Deine Art ist unfair.|Adjektiv
追い付く|追[お]い 付[つ]く|einholen|駅[えき]でようやく 彼[かれ]に 追[お]い 付[つ]きました。|Am Bahnhof habe ich ihn endlich eingeholt.|Verb
顔付き|顔付[かおつ]き|Gesichtsausdruck, Miene|彼[かれ]は 恐[こわ]い 顔付[かおつ]きで 話[はな]したの。|Er sprach mit finsterer Miene.|Nomen
思い付く|思[おも]い 付[つ]く|auf eine Idee kommen, einfallen|彼[かれ]は 名案[めいあん]を 思[おも]い 付[つ]いたの。|Er hatte einen guten Einfall.|Verb
後片付け|後片付[あとかたづ]け|Aufräumen (danach)|食事[しょくじ]の 後片付[あとかたづ]けを 手伝[てつだ]ったの。|Ich habe geholfen, nach dem Essen aufzuräumen.|Nomen (mit する)
傷付く|傷付[きずつ]く|verletzt werden, gekränkt sein|私[わたし]は 彼女[かのじょ]の 言葉[ことば]に 傷付[きずつ]きました。|Ihre Worte haben mich verletzt.|Verb
傷付ける|傷付[きずつ]ける|verletzen, kränken|あなたを 傷付[きずつ]けるつもりはありませんでした。|Ich hatte nicht vor, dich zu verletzen.|Verb
くっ付ける|くっ 付[つ]ける|ankleben, aneinanderdrücken|彼[かれ]は 壁[かべ]に 耳[みみ]をくっ 付[つ]けて 隣[となり]の 話[はなし]を 聞[き]いていたの。|Er drückte das Ohr an die Wand und lauschte dem Gespräch nebenan.|Verb
せっかち|せっかち|ungeduldig, hastig|彼[かれ]はせっかちで 困[こま]ります。|Seine Ungeduld macht mir zu schaffen.|な-Adjektiv
言付ける|言付[ことづ]ける|ausrichten lassen|彼女[かのじょ]への 伝言[でんごん]を 言付[ことづ]けたの。|Ich habe ihr eine Nachricht ausrichten lassen.|Verb
金属|金属[きんぞく]|Metall|アルミニウムは 金属[きんぞく]の 一種[いっしゅ]です。|Aluminium ist ein Metall.|Nomen
所属|所属[しょぞく]|Zugehörigkeit|学校[がっこう]では 音楽部[おんがくぶ]に 所属[しょぞく]していました。|In der Schule gehörte ich zur Musik-AG.|Nomen (mit する)
大蔵省|大蔵省[おおくらしょう]|Finanzministerium (alte Bezeichnung)|彼[かれ]は 大蔵省[おおくらしょう]に 勤務[きんむ]しているんだよ。|Er arbeitet im Finanzministerium.|Nomen
外務省|外務省[がいむしょう]|Außenministerium|ビザについて 外務省[がいむしょう]に 問[と]い 合[あ]わせた。|Ich habe beim Außenministerium wegen des Visums nachgefragt.|Nomen
帰省|帰省[きせい]|Heimfahrt (in den Heimatort)|来週[らいしゅう]、 帰省[きせい]します。|Nächste Woche fahre ich in meine Heimat.|Nomen (mit する)
省略|省略[しょうりゃく]|Auslassung, Abkürzung|地図内[ちずない]の 小[ちい]さい 建物[たてもの]は 省略[しょうりゃく]してあります。|Kleine Gebäude sind auf der Karte weggelassen.|Nomen (mit する)
概念|概念[がいねん]|Begriff, Konzept|インターネットは 情報[じょうほう]の 概念[がいねん]を 変[か]えたよね。|Das Internet hat den Begriff der Information verändert.|Nomen
うちわ|うちわ|runder Fächer|父[ちち]はうちわで 扇[あお]いでいるの。|Mein Vater fächelt sich mit einem Fächer Luft zu.|Nomen
記念|記念[きねん]|Andenken, Gedenken|卒業[そつぎょう]の 記念[きねん]にみんなで 旅行[りょこう]したよ。|Zur Erinnerung an den Abschluss sind wir alle zusammen verreist.|Nomen (mit する)
信念|信念[しんねん]|Überzeugung, Glaube|自分[じぶん]の 信念[しんねん]に 従[したが]いたいと 思[おも]います。|Ich möchte meinen Überzeugungen folgen.|Nomen
順調|順調[じゅんちょう]|reibungslos, gut laufend|進[すす]み 具合[ぐあい]は 全[すべ]て 順調[じゅんちょう]です。|Alles kommt gut voran.|な-Adjektiv
順|順[じゅん]|Reihenfolge|あいうえお 順[じゅん]に 並[なら]べて 下[くだ]さい。|Ordnen Sie sie bitte nach dem Silbenalphabet.|Nomen
順番|順番[じゅんばん]|Reihenfolge, an der Reihe|これを 順番[じゅんばん] 通[どお]りに 並[なら]べ 替[か]えて 下[くだ]さい。|Bringen Sie das bitte in die richtige Reihenfolge.|Nomen
順位|順位[じゅんい]|Rangfolge, Platzierung|今年[ことし]は 去年[きょねん]よりも 順位[じゅんい]が 上[あ]がりました。|Dieses Jahr sind wir besser platziert als letztes Jahr.|Nomen
順々に|順々[じゅんじゅん]に|der Reihe nach|子供[こども]たちは 順々[じゅんじゅん]にお 菓子[かし]を 受[う]け 取[と]ったよ。|Die Kinder bekamen der Reihe nach Süßigkeiten.|Adverb
うっかり|うっかり|versehentlich, aus Unachtsamkeit|大事[だいじ]なメールをうっかり 消[け]してしまった。|Ich habe versehentlich eine wichtige E-Mail gelöscht.|Adverb
順序|順序[じゅんじょ]|Reihenfolge, Ablauf|正[ただ]しい 順序[じゅんじょ]で 操作[そうさ]してください。|Bedienen Sie es bitte in der richtigen Reihenfolge.|Nomen
逆|逆[ぎゃく]|umgekehrt, entgegengesetzt|駅[えき]は 逆[ぎゃく] 方向[ほうこう]です。|Der Bahnhof liegt in der entgegengesetzten Richtung.|な-Adjektiv
逆らう|逆[さか]らう|sich widersetzen, zuwiderhandeln|親[おや]に 逆[さか]らうのは 良[よ]くない 事[こと]です。|Es ist nicht gut, sich den Eltern zu widersetzen.|Verb
逆さ|逆[さか]さ|verkehrt herum, auf dem Kopf|絵[え]を 逆[さか]さにしてみてごらん。|Dreh das Bild mal auf den Kopf.|な-Adjektiv
逆さま|逆[さか]さま|verkehrt herum, umgekehrt|それじゃあ 上[うえ]と 下[した]が 逆[さか]さまだよ。|So ist ja oben und unten vertauscht.|な-Adjektiv
行列|行列[ぎょうれつ]|Schlange, Reihe (von Menschen)|店[みせ]の 前[まえ]に 長[なが]い 行列[ぎょうれつ]ができていますよ。|Vor dem Laden hat sich eine lange Schlange gebildet.|Nomen (mit する)
整列|整列[せいれつ]|Aufstellung in Reih und Glied|体育館[たいいくかん]に 行[い]って 整列[せいれつ]しなさい。|Geht in die Turnhalle und stellt euch auf.|Nomen (mit する)
くだらない|くだらない|belanglos, albern|くだらないおしゃべりはやめなさい。|Hört auf mit dem albernen Geschwätz.|Adjektiv
実例|実例[じつれい]|konkretes Beispiel|実例[じつれい]を 使[つか]って 説明[せつめい]してください。|Erklären Sie es bitte anhand eines konkreten Beispiels.|Nomen
余り|余[あま]り|Rest, Überbleibsel|余[あま]りは 次回使[じかい つか]いましょう。|Den Rest verwenden wir beim nächsten Mal.|Adverb
削減|削減[さくげん]|Kürzung, Abbau|福祉予算[ふくしよさん]は 削減[さくげん]されないことに 決[き]まったのよ。|Es wurde beschlossen, den Sozialetat nicht zu kürzen.|Nomen (mit する)
削除|削除[さくじょ]|Löschung, Streichung|要[い]らないファイルは 削除[さくじょ]して 下[くだ]さい。|Löschen Sie bitte nicht benötigte Dateien.|Nomen (mit する)
既に|既[すで]に|schon, bereits|そのことは 既[すで]にみんな 知[し]っています。|Das wissen alle bereits.|Adverb
既製|既製[きせい]|fertig, von der Stange|彼[かれ]の 体型[たいけい]じゃ 既製[きせい]のサイズに 合[あ]わないよ。|Mit seiner Figur passt ihm keine Konfektionsgröße.|Nomen
深刻|深刻[しんこく]|ernst, schwerwiegend|これは 深刻[しんこく]な 問題[もんだい]です。|Das ist ein ernstes Problem.|Adjektiv
刻む|刻[きざ]む|fein schneiden, hacken; einprägen|玉[たま]ねぎを 細[こま]かく 刻[きざ]んでください。|Hacken Sie bitte die Zwiebel fein.|Verb
ずうずうしい|ずうずうしい|unverschämt, dreist|何[なん]てずうずうしい 人[ひと]なんだろう。|Was für ein dreister Mensch!|Adjektiv
時刻|時刻[じこく]|Uhrzeit|ただ 今[いま]の 時刻[じこく]は 6時35分[ろくじ さんじゅうごふん]です。|Es ist jetzt 6:35 Uhr.|Nomen
締め切り|締[し]め 切[き]り|Abgabetermin, Anmeldeschluss|申[もう]し 込[こ]みの 締[し]め 切[き]りはいつですか。|Wann ist Anmeldeschluss?|Nomen
締め切る|締[し]め 切[き]る|schließen, die Frist beenden|応募受付[おうぼ うけつけ]は 締[し]め 切[き]りました。|Die Annahme von Bewerbungen ist geschlossen.|Verb
締まる|締[し]まる|sich festziehen, straff werden|レバーを 右[みぎ]に 回[まわ]すと 締[し]まります。|Wenn man den Hebel nach rechts dreht, zieht es sich fest.|Verb
栄える|栄[さか]える|blühen, gedeihen|ここはかつてゴールドラッシュで 栄[さか]えた 町[まち]だよ。|Das ist eine Stadt, die einst durch den Goldrausch aufblühte.|Verb
栄養|栄養[えいよう]|Nährstoffe, Ernährung|豆腐[とうふ]は 栄養[えいよう]のある 食[た]べ 物[もの]です。|Tofu ist ein nahrhaftes Lebensmittel.|Nomen
教養|教養[きょうよう]|Bildung, Kultiviertheit|彼女[かのじょ]はとても 教養[きょうよう]のある 人[ひと]ですね。|Sie ist ein sehr gebildeter Mensch.|Nomen
すやすや|すやすや|friedlich (schlafend)|子供[こども]がすやすや 眠[ねむ]っているね。|Das Kind schläft friedlich.|Adverb
休養|休養[きゅうよう]|Erholung, Ruhe|彼女[かのじょ]は 今[いま]、 休養[きゅうよう] 中[ちゅう]です。|Sie erholt sich gerade.|Nomen (mit する)
苦しむ|苦[くる]しむ|leiden|彼女[かのじょ]はアレルギーに 苦[くる]しんでいます。|Sie leidet an einer Allergie.|Verb
苦情|苦情[くじょう]|Beschwerde, Reklamation|店[みせ]に 苦情[くじょう]の 電話[でんわ]をかけました。|Ich habe im Laden angerufen und mich beschwert.|Nomen
苦心|苦心[くしん]|Mühe, große Anstrengung|苦心[くしん]して 絵[え]を 描[か]き 上[あ]げました。|Ich habe das Bild mit viel Mühe fertig gemalt.|Nomen (mit する)
苦しみ|苦[くる]しみ|Leid, Qual|誰[だれ]も 彼[かれ]の 苦[くる]しみを 理解[りかい]していなかったな。|Niemand hat sein Leid verstanden.|Nomen
苦痛|苦痛[くつう]|Schmerz, Qual|私[わたし]は 人前[ひとまえ]で 話[はな]すことが 苦痛[くつう]です。|Vor anderen zu sprechen ist für mich eine Qual.|Nomen
苦しめる|苦[くる]しめる|quälen, zu schaffen machen|強[つよ]い 日差[ひざ]しが 選手[せんしゅ]たちを 苦[くる]しめたの。|Die starke Sonne machte den Sportlern zu schaffen.|Verb
セルフサービス|セルフサービス|Selbstbedienung|この 食堂[しょくどう]はセルフサービスです。|In dieser Kantine ist Selbstbedienung.|Nomen
苦労|苦労[くろう]|Mühsal, Sorgen|母[はは]は 苦労[くろう]して 私[わたし]たちを 育[そだ]てたの。|Meine Mutter hat uns unter großen Mühen großgezogen.|Nomen (mit する)
勤労|勤労[きんろう]|Arbeit, Erwerbstätigkeit|父[ちち]は 長[なが]い 勤労[きんろう] 生活[せいかつ]を 送[おく]ったんです。|Mein Vater hatte ein langes Arbeitsleben.|Nomen (mit する)
過労|過労[かろう]|Überarbeitung|彼[かれ]は 過労[かろう]のために 倒[たお]れたの。|Er ist vor Überarbeitung zusammengebrochen.|Nomen
困難|困難[こんなん]|Schwierigkeit|困難[こんなん]にあってもあきらめてはいけないよ。|Auch wenn du auf Schwierigkeiten stößt, darfst du nicht aufgeben.|Nomen (mit する)
甘える|甘[あま]える|sich verwöhnen lassen, sich anlehnen an|彼女[かのじょ]の 親切[しんせつ]に 甘[あま]えました。|Ich habe ihre Freundlichkeit in Anspruch genommen.|Verb
甘やかす|甘[あま]やかす|verwöhnen, verhätscheln|子供[こども]を 甘[あま]やかしてはいけないの。|Man darf Kinder nicht verwöhnen.|Verb
辛い|辛[から]い|hart, streng (Bewertung)|部長[ぶちょう]は 僕[ぼく]の 仕事[しごと]に 辛[から]い 評価[ひょうか]を 出[だ]したんだ。|Der Abteilungsleiter hat meine Arbeit streng bewertet.|Adjektiv
アルファベット|アルファベット|Alphabet|この 子[こ]はアルファベットを 全部言[ぜんぶ い]えます。|Dieses Kind kann das ganze Alphabet aufsagen.|Nomen
幸い|幸[さいわ]い|Glück; zum Glück|幸[さいわ]い、 電車[でんしゃ]に 嵐[あらし]の 影響[えいきょう]はなかった。|Zum Glück war der Zugverkehr vom Sturm nicht betroffen.|な-Adjektiv
幸運|幸運[こううん]|Glück, glücklicher Zufall|幸運[こううん]にもチケットを 手[て]に 入[い]れました。|Glücklicherweise habe ich eine Karte bekommen.|な-Adjektiv
幸福|幸福[こうふく]|Glück, Glückseligkeit|彼女[かのじょ]は 幸福[こうふく]な 日々[ひび]を 過[す]ごしているわ。|Sie verbringt glückliche Tage.|な-Adjektiv
砂|砂[すな]|Sand|靴[くつ]に 砂[すな]が 入[はい]ってしまった。|Mir ist Sand in die Schuhe gekommen.|Nomen
砂漠|砂漠[さばく]|Wüste|砂漠[さばく]ではほとんど 雨[あめ]が 降[ふ]らないのよ。|In der Wüste regnet es fast nie.|Nomen
漁業|漁業[ぎょぎょう]|Fischerei|彼[かれ]らは 漁業[ぎょぎょう]を 営[いとな]んでいるんだ。|Sie betreiben Fischerei.|Nomen
薄暗い|薄暗[うすぐら]い|dämmrig, halbdunkel|外[そと]はもう 薄暗[うすぐら]くなりましたよ。|Draußen ist es schon dämmrig geworden.|Adjektiv
薄める|薄[うす]める|verdünnen|スープを 少[すこ]し 薄[うす]めましょうか。|Soll ich die Suppe etwas verdünnen?|Verb
いびき|いびき|Schnarchen|父[ちち]のいびきは 大[おお]きいんだ。|Mein Vater schnarcht laut.|Nomen
薄着|薄着[うすぎ]|leichte Kleidung|子供[こども]たちは 冬[ふゆ]でも 薄着[うすぎ]で 通[とお]します。|Die Kinder sind auch im Winter leicht angezogen.|Nomen (mit する)
厚着|厚着[あつぎ]|dicke Kleidung|普段[ふだん]から 厚着[あつぎ]しないようにしています。|Ich achte darauf, mich im Alltag nicht zu warm anzuziehen.|Nomen (mit する)
圧力|圧力[あつりょく]|Druck|相手会社[あいてがいしゃ]から 強[つよ]い 圧力[あつりょく]が 掛[か]かった。|Die andere Firma hat starken Druck ausgeübt.|Nomen
気圧|気圧[きあつ]|Luftdruck|高[たか]い 山[やま]は 気圧[きあつ]が 低[ひく]いね。|Auf hohen Bergen ist der Luftdruck niedrig.|Nomen
高気圧|高気圧[こうきあつ]|Hochdruck (Wetter)|この 暑[あつ]さは 高気圧[こうきあつ]のせいです。|Diese Hitze kommt vom Hochdruckgebiet.|Nomen
縮小|縮小[しゅくしょう]|Verkleinerung, Verringerung|これを 縮小[しゅくしょう]して 印刷[いんさつ]してください。|Drucken Sie das bitte verkleinert aus.|Nomen (mit する)
越す|越[こ]す|überschreiten, überwinden|暑[あつ]さは 峠[とうげ]を 越[こ]したね。|Die größte Hitze ist überstanden.|Verb
いやらしい|いやらしい|widerlich, anzüglich|彼[かれ]はいやらしい 男[おとこ]ね。|Er ist ein widerlicher Kerl.|Adjektiv
追い抜く|追[お]い 抜[ぬ]く|überholen|リレーで 彼[かれ]は 2人[ふたり] 追[お]い 抜[ぬ]いたね。|Im Staffellauf hat er zwei überholt.|Verb
札|札[さつ]|Geldschein|彼[かれ]はカバンから 札[さつ]の 束[たば]を 取[と]り 出[だ]したんだ。|Er holte ein Bündel Geldscheine aus der Tasche.|Nomen
改札|改札[かいさつ]|Fahrkartenkontrolle, Sperre|改札[かいさつ]で 3時[さんじ]に 会[あ]おう。|Treffen wir uns um drei an der Sperre.|Nomen (mit する)
感謝|感謝[かんしゃ]|Dankbarkeit, Dank|家族[かぞく]に 感謝[かんしゃ]しています。|Ich bin meiner Familie dankbar.|Nomen (mit する)
月謝|月謝[げっしゃ]|monatliches Unterrichtsgeld|先生[せんせい]に 月謝[げっしゃ]を 渡[わた]しましたか。|Hast du dem Lehrer das Monatsgeld gegeben?|Nomen
射す|射[さ]す|hereinscheinen (Sonne)|今日[きょう]は 久[ひさ]しぶりに 日[ひ]が 射[さ]してるね。|Heute scheint seit Langem wieder die Sonne.|Verb
過程|過程[かてい]|Prozess, Verlauf|プログラムの 過程[かてい]に 問題[もんだい]があるの。|Im Ablauf des Programms gibt es ein Problem.|Nomen
イントネーション|イントネーション|Intonation, Satzmelodie|イントネーションの 違[ちが]いに 気[き]を 付[つ]けて。|Achte auf die Unterschiede in der Satzmelodie.|Nomen
課程|課程[かてい]|Lehrgang, Curriculum|一年生[いちねんせい]の 課程[かてい]を 修了[しゅうりょう]したの。|Er hat den Lehrplan des ersten Jahres abgeschlossen.|Nomen
行程|行程[こうてい]|Strecke, Reiseverlauf|全部[ぜんぶ]で 6時間[ろくじかん]の 行程[こうてい]です。|Insgesamt ist es eine Strecke von sechs Stunden.|Nomen
先程|先程[さきほど]|vorhin, vor Kurzem (höflich)|その 件[けん]でしたら、 先程[さきほど] 上司[じょうし]から 許可[きょか]を 得[え]ております。|In dieser Sache habe ich vorhin die Genehmigung meines Vorgesetzten erhalten.|Nomen
優れる|優[すぐ]れる|überlegen sein, hervorragend sein|彼[かれ]は 非常[ひじょう]に 優[すぐ]れた 選手[せんしゅ]です。|Er ist ein ganz hervorragender Sportler.|Verb
女優|女優[じょゆう]|Schauspielerin|彼女[かのじょ]はずっと 女優[じょゆう]になるのが 夢[ゆめ]でした。|Schauspielerin zu werden war schon immer ihr Traum.|Nomen
透き通る|透[す]き 通[とお]る|durchsichtig sein, klar sein|湖[みずうみ]の 水[みず]は 透[す]き 通[とお]っていたよ。|Das Wasser des Sees war glasklar.|Verb
指導|指導[しどう]|Anleitung, Führung|彼[かれ]は 生徒[せいと]の 指導[しどう]が 上手[じょうず]ね。|Er kann Schüler gut anleiten.|Nomen (mit する)
希望|希望[きぼう]|Hoffnung, Wunsch|彼[かれ]は 本社[ほんしゃ]で 働[はたら]くことを 希望[きぼう]しています。|Er möchte in der Zentrale arbeiten.|Nomen (mit する)
がたがた|がたがた|klappernd, wackelig|この 椅子[いす]はがたがたしているね。|Dieser Stuhl wackelt.|Adjektiv
失望|失望[しつぼう]|Enttäuschung|彼女[かのじょ]は 結婚生活[けっこん せいかつ]に 失望[しつぼう]していたの。|Sie war von ihrer Ehe enttäuscht.|Nomen (mit する)
意志|意志[いし]|Wille|彼[かれ]は 意志[いし]の 強[つよ]い 人[ひと]です。|Er ist ein willensstarker Mensch.|Nomen
志す|志[こころざ]す|anstreben, sich zum Ziel setzen|私[わたし]は 医者[いしゃ]を 志[こころざ]しています。|Ich will Arzt werden.|Verb
怒り|怒[いか]り|Wut, Zorn|彼[かれ]ったら 怒[いか]り 爆発[ばくはつ]だったよ。|Er ist vor Wut explodiert.|Nomen
自身|自身[じしん]|selbst|自分[じぶん] 自身[じしん]を 疑[うたが]ってはいけません。|Man darf nicht an sich selbst zweifeln.|Nomen
出身|出身[しゅっしん]|Herkunft, stammen aus|家内[かない]は 九州[きゅうしゅう] 出身[しゅっしん]です。|Meine Frau stammt aus Kyushu.|Nomen
全身|全身[ぜんしん]|der ganze Körper|運動[うんどう]した 翌日[よくじつ]は 全身[ぜんしん]の 筋肉[きんにく]が 痛[いた]い。|Am Tag nach dem Sport tun mir am ganzen Körper die Muskeln weh.|Nomen
カンニング|カンニング|Schummeln, Abschreiben (bei Prüfungen)|カンニングをした 人[ひと]は 0点[れいてん]です。|Wer schummelt, bekommt null Punkte.|Nomen (mit する)
身長|身長[しんちょう]|Körpergröße|身長[しんちょう]はどれくらいありますか。|Wie groß sind Sie?|Nomen
心身|心身[しんしん]|Körper und Geist|私[わたし]は 心身[しんしん] 共[とも]に 疲[つか]れていました。|Ich war körperlich und seelisch erschöpft.|Nomen
受け身|受[う]け 身[み]|Passivität; Passiv (Grammatik)|彼[かれ]はいつも 受[う]け 身[み]の 姿勢[しせい]で、 自分[じぶん]からは 何[なに]もしないんだ。|Er ist immer passiv und tut von sich aus nichts.|Nomen
証拠|証拠[しょうこ]|Beweis|証拠[しょうこ]を 見[み]つけるまで 逮捕[たいほ]はできません。|Solange keine Beweise gefunden sind, kann niemand verhaftet werden.|Nomen
照明|照明[しょうめい]|Beleuchtung|もっと 照明[しょうめい]を 明[あか]るくしてください。|Machen Sie die Beleuchtung bitte heller.|Nomen (mit する)
工夫|工夫[くふう]|Einfall, Kniff, Tüfteln|いろいろ 工夫[くふう]して 仕事[しごと]をやりとげたさ。|Mit allerlei Kniffen habe ich die Arbeit zu Ende gebracht.|Nomen (mit する)
主婦|主婦[しゅふ]|Hausfrau|主婦[しゅふ]の 主[おも]な 仕事[しごと]は 家事[かじ]よ。|Die Hauptarbeit einer Hausfrau ist der Haushalt.|Nomen
あぐら|あぐら|Schneidersitz|彼[かれ]はあぐらをかいてしゃべっていますね。|Er sitzt im Schneidersitz und redet.|Nomen
産婦人科|産婦人科[さんふじんか]|Gynäkologie und Geburtshilfe|最近[さいきん]、 産婦人科[さんふじんか]の 不足[ふそく]が 問題[もんだい]になっているね。|In letzter Zeit ist der Mangel an Frauenärzten ein Problem.|Nomen
奥様|奥様[おくさま]|(Ihre) Ehefrau, gnädige Frau|社長[しゃちょう]の 奥様[おくさま]はきれいな 方[かた]です。|Die Frau des Firmenchefs ist eine schöne Frau.|Nomen
お互い|お 互[たが]い|einander, gegenseitig|お 互[たが]いを 信頼[しんらい]することが 大事[だいじ]です。|Es ist wichtig, einander zu vertrauen.|Nomen
交互|交互[こうご]|abwechselnd|男女[だんじょ] 交互[こうご]に 並[なら]んでください。|Stellen Sie sich bitte abwechselnd auf, Mann und Frau.|Nomen
高齢|高齢[こうれい]|hohes Alter|彼[かれ]は 高齢[こうれい]を 理由[りゆう]に 社長[しゃちょう]を 辞[や]めたよ。|Er hat wegen seines hohen Alters als Firmenchef aufgehört.|Nomen
愛情|愛情[あいじょう]|Liebe, Zuneigung|子供[こども]はたくさんの 愛情[あいじょう]が 必要[ひつよう]です。|Kinder brauchen viel Liebe.|Nomen
可愛らしい|可愛[かわい]らしい|niedlich, reizend|彼女[かのじょ]は 娘[むすめ]に 可愛[かわい]らしい 服[ふく]を 作[つく]りましたね。|Sie hat ihrer Tochter niedliche Kleider genäht.|Adjektiv
可愛がる|可愛[かわい]がる|liebhaben, verhätscheln|彼女[かのじょ]は 猫[ねこ]を 可愛[かわい]がっています。|Sie hat ihre Katze sehr lieb.|Verb
いやいや|いやいや|widerwillig|その 子[こ]はいやいや 学校[がっこう]へ 行[い]ったの。|Das Kind ging widerwillig zur Schule.|Adverb
恋|恋[こい]|Liebe, Verliebtheit|彼女[かのじょ]は 恋[こい]をしてきれいになったね。|Sie hat sich verliebt und ist schöner geworden.|Nomen
失恋|失恋[しつれん]|Liebeskummer, unglückliche Liebe|彼[かれ]は 最近[さいきん]、 失恋[しつれん]したらしいの。|Er soll vor Kurzem Liebeskummer gehabt haben.|Nomen (mit する)
恋する|恋[こい]する|lieben, verliebt sein|恋[こい]する 気持[きも]ちを 歌[うた]にしました。|Ich habe das Gefühl des Verliebtseins in ein Lied gefasst.|Verb
延長|延長[えんちょう]|Verlängerung|国会[こっかい]の 会期[かいき]が 延長[えんちょう]されたわね。|Die Sitzungsperiode des Parlaments wurde verlängert.|Nomen (mit する)
延期|延期[えんき]|Verschiebung, Aufschub|運動会[うんどうかい]は 雨[あめ]で 延期[えんき]されました。|Das Sportfest wurde wegen Regens verschoben.|Nomen (mit する)
祝う|祝[いわ]う|feiern, gratulieren|家族[かぞく]で 彼[かれ]の 合格[ごうかく]を 祝[いわ]ったよ。|Wir haben in der Familie gefeiert, dass er bestanden hat.|Verb
祝い|祝[いわ]い|Feier, Glückwunsch(geschenk)|結婚[けっこん]のお 祝[いわ]いに 食器[しょっき]を 頂[いただ]きました。|Zur Hochzeit haben wir Geschirr geschenkt bekommen.|Nomen
ウエスト|ウエスト|Taille|最近[さいきん]ウエストが 太[ふと]くなったな。|In letzter Zeit ist meine Taille dicker geworden.|Nomen
純粋|純粋[じゅんすい]|rein, unverfälscht|子供[こども]の 純粋[じゅんすい]な 心[こころ]を 傷付[きずつ]けてはいけません。|Man darf das reine Herz eines Kindes nicht verletzen.|な-Adjektiv
慎重|慎重[しんちょう]|vorsichtig, umsichtig|もう 一度[いちど] 慎重[しんちょう]に 見直[みなお]しましょう。|Sehen wir es uns noch einmal sorgfältig an.|な-Adjektiv
笑顔|笑顔[えがお]|lächelndes Gesicht, Lächeln|赤[あか]ちゃんの 笑顔[えがお]が 可愛[かわ]いい。|Das Lächeln des Babys ist süß.|Nomen
大喜び|大喜[おおよろこ]び|große Freude|弟[おとうと]は 新[あたら]しい 自転車[じてんしゃ]に 大喜[おおよろこ]びです。|Mein kleiner Bruder ist überglücklich über sein neues Fahrrad.|Nomen (mit する)
看護|看護[かんご]|Krankenpflege|この 病院[びょういん]は 24時間[にじゅうよじかん] 看護[かんご]です。|In diesem Krankenhaus gibt es Pflege rund um die Uhr.|Nomen (mit する)
看病|看病[かんびょう]|Pflege (eines Kranken)|彼女[かのじょ]は 一晩中彼[ひとばんじゅう かれ]を 看病[かんびょう]したの。|Sie hat ihn die ganze Nacht gepflegt.|Nomen (mit する)
肯定|肯定[こうてい]|Bejahung, Zustimmung|僕[ぼく]は 彼[かれ]のしたことは 肯定[こうてい]できないな。|Was er getan hat, kann ich nicht gutheißen.|Nomen (mit する)
オルガン|オルガン|Orgel|僕[ぼく]たちはオルガンに 合[あ]わせて 賛美歌[さんびか]を 歌[うた]ったんだ。|Wir haben zur Orgel Kirchenlieder gesungen.|Nomen
記述|記述[きじゅつ]|Beschreibung, Darstellung|日本[にほん]の 古[ふる]い 料理法[りょうりほう]についての 記述[きじゅつ]を 読[よ]んだんだ。|Ich habe eine Beschreibung alter japanischer Kochmethoden gelesen.|Nomen (mit する)
裁判|裁判[さいばん]|Gerichtsverfahren, Prozess|裁判[さいばん]の 様子[ようす]はテレビで 中継[ちゅうけい]されたわよ。|Der Prozess wurde im Fernsehen übertragen.|Nomen (mit する)
裁判所|裁判所[さいばんしょ]|Gericht (Gebäude, Institution)|彼[かれ]らは 裁判所[さいばんしょ]の 前[まえ]で 知[し]らせを 待[ま]っています。|Sie warten vor dem Gericht auf Nachricht.|Nomen
訴え|訴[うった]え|Klage, Appell|彼女[かのじょ]の 訴[うった]えは 認[みと]められたわ。|Ihrer Klage wurde stattgegeben.|Nomen
区域|区域[くいき]|Zone, Bezirk|ここは 危険[きけん] 区域[くいき]よ。|Das hier ist eine Gefahrenzone.|Nomen
疑い|疑[うたが]い|Verdacht, Zweifel|彼[かれ]は 盗[ぬす]みの 疑[うたが]いをかけられたの。|Er wurde des Diebstahls verdächtigt.|Nomen
疑問|疑問[ぎもん]|Frage, Zweifel|彼[かれ]の 言葉[ことば]が 本当[ほんとう]かは 疑問[ぎもん]です。|Es ist fraglich, ob seine Worte wahr sind.|Nomen
からから|からから|schallend (lachen)|彼[かれ]はからからと 笑[わら]いました。|Er lachte schallend.|Adverb
疑う|疑[うたが]う|zweifeln, verdächtigen|なぜあなたは 私[わたし]を 疑[うたが]うのですか。|Warum misstraust du mir?|Verb
疑わしい|疑[うたが]わしい|zweifelhaft, verdächtig|疑[うたが]わしい 場所[ばしょ]は 全部調[ぜんぶ しら]べよう。|Durchsuchen wir alle verdächtigen Orte.|Adjektiv
著しい|著[いちじる]しい|auffallend, beträchtlich|彼[かれ]の 成長[せいちょう]は 著[いちじる]しいです。|Seine Entwicklung ist bemerkenswert.|Adjektiv
著す|著[あらわ]す|verfassen, schreiben (ein Buch)|この 本[ほん]では 自然[しぜん]の 大切[たいせつ]さがよく 著[あらわ]されているよ。|In diesem Buch wird gut dargestellt, wie wichtig die Natur ist.|Verb
権利|権利[けんり]|Recht, Anspruch|私[わたし]たちには 知[し]る 権利[けんり]があります。|Wir haben ein Recht darauf, es zu erfahren.|Nomen
権力|権力[けんりょく]|Macht, Autorität|彼[かれ]はこの 国[くに]で 大[おお]きな 権力[けんりょく]を 持[も]っているわ。|Er hat in diesem Land große Macht.|Nomen
人権|人権[じんけん]|Menschenrechte|全[すべ]ての 人[ひと]に 人権[じんけん]がある。|Jeder Mensch hat Menschenrechte.|Nomen
棄権|棄権[きけん]|Verzicht, Aufgabe, Stimmenthaltung|彼[かれ]は 試合[しあい]の 途中[とちゅう]で 棄権[きけん]したぞ。|Er hat mitten im Spiel aufgegeben.|Nomen (mit する)
きっちん|きっちん|Küche|彼女[かのじょ]はキッチンで 夕食[ゆうしょく]を 作[つく]っています。|Sie macht in der Küche das Abendessen.|Nomen
侵す|侵[おか]す|verletzen, eindringen in (Rechte, Gebiet)|他人[たにん]の 権利[けんり]を 侵[おか]してはなりません。|Man darf die Rechte anderer nicht verletzen.|Verb
行為|行為[こうい]|Handlung, Tat|彼[かれ]の 行為[こうい]はみんなの 誤解[ごかい]を 招[まね]いたわ。|Seine Tat hat bei allen zu Missverständnissen geführt.|Nomen
賞|賞[しょう]|Preis, Auszeichnung|このデザインは 数々[かずかず]の 賞[しょう]を 受[う]けています。|Dieses Design hat zahlreiche Preise erhalten.|Nomen
賞品|賞品[しょうひん]|Preis (Sachgewinn)|パーティーのビンゴの 賞品[しょうひん]は 何[なに]がいいだろう。|Was wäre wohl ein guter Preis für das Bingo auf der Party?|Nomen
観賞|観賞[かんしょう]|Betrachtung, Zier-|この 鉢植[はちう]えは 観賞[かんしょう] 用[よう]です。|Diese Topfpflanze ist eine Zierpflanze.|Nomen (mit する)
財政|財政[ざいせい]|Staatsfinanzen, Finanzlage|国[くに]の 財政[ざいせい]はとても 苦[くる]しい 状態[じょうたい]だな。|Die Finanzen des Landes sind in einer sehr schwierigen Lage.|Nomen
財産|財産[ざいさん]|Vermögen, Besitz|彼[かれ]は 株[かぶ]で 財産[ざいさん]の 半分[はんぶん]を 失[うしな]ったの。|Er hat mit Aktien die Hälfte seines Vermögens verloren.|Nomen
くしゃくしゃ|くしゃくしゃ|zerknittert, zerknüllt|紙[かみ]をくしゃくしゃに 丸[まる]めました。|Ich habe das Papier zusammengeknüllt.|Adverb
金融|金融[きんゆう]|Finanzwesen|彼[かれ]は 金融[きんゆう] 関係[かんけい]の 会社[かいしゃ]で 働[はたら]いています。|Er arbeitet bei einer Firma der Finanzbranche.|Nomen
間隔|間隔[かんかく]|Abstand, Zwischenraum|電車[でんしゃ]は 5分[ごふん] 間隔[かんかく]で 来[き]ますよ。|Die Züge kommen im Abstand von fünf Minuten.|Nomen
終了|終了[しゅうりょう]|Ende, Beendigung|コンサートは 夜7時5分[よる しち じ ご ふん]に 終了[しゅうりょう]しました。|Das Konzert endete um 19:05 Uhr.|Nomen (mit する)
完了|完了[かんりょう]|Abschluss, Vollendung|仕事[しごと]は 全[すべ]て 完了[かんりょう]しました。|Die Arbeit ist vollständig abgeschlossen.|Nomen (mit する)
修了|修了[しゅうりょう]|Abschluss (eines Kurses)|先月[せんげつ]、そのコースを 修了[しゅうりょう]しました。|Ich habe den Kurs letzten Monat abgeschlossen.|Nomen (mit する)
承認|承認[しょうにん]|Genehmigung, Anerkennung|これは 政府[せいふ]の 承認[しょうにん]を 受[う]けた 資格[しかく]です。|Das ist eine staatlich anerkannte Qualifikation.|Nomen (mit する)
承知|承知[しょうち]|Einverständnis, Kenntnis|そのことは 承知[しょうち]しております。|Darüber bin ich im Bilde.|Nomen (mit する)
けち|けち|geizig, Geizhals|彼[かれ]は 金持[かねも]ちだけど、けちね。|Er ist reich, aber geizig.|な-Adjektiv
納める|納[おさ]める|entrichten, zahlen (Steuer, Gebühr)|自動車税[じどうしゃぜい]を 納[おさ]めたよ。|Ich habe die Kfz-Steuer bezahlt.|Verb
説得|説得[せっとく]|Überredung, Überzeugen|なんとか 親[おや]を 説得[せっとく]してみるよ。|Ich versuche irgendwie, meine Eltern zu überzeugen.|Nomen (mit する)
所得|所得[しょとく]|Einkommen|ここに 去年[きょねん]の 所得[しょとく]をご 記入[きにゅう]ください。|Tragen Sie hier bitte Ihr Einkommen des letzten Jahres ein.|Nomen
得る|得[え]る|erlangen, bekommen|彼[かれ]は 大金[たいきん]を 得[え]ましたよ。|Er ist an viel Geld gekommen.|Verb
乾燥|乾燥[かんそう]|Trocknung, Trockenheit|冬[ふゆ]は 空気[くうき]が 乾燥[かんそう]しますね。|Im Winter ist die Luft trocken.|Nomen (mit する)
幹部|幹部[かんぶ]|Führungskraft, Vorstand|あの 会社[かいしゃ]の 幹部[かんぶ]は 皆[みんな]とても 優秀[ゆうしゅう]だね。|Die Führungskräfte dieser Firma sind alle sehr fähig.|Nomen
酸素|酸素[さんそ]|Sauerstoff|私[わたし]たちは 酸素[さんそ] 無[な]しでは 生[い]きていけない。|Ohne Sauerstoff können wir nicht leben.|Nomen
素直|素直[すなお]|aufrichtig, folgsam, unverstellt|彼女[かのじょ]はとても 素直[すなお]で 可愛[かわい]いですね。|Sie ist sehr aufrichtig und liebenswert.|Adjektiv
ざらざら|ざらざら|rau, körnig|砂[すな]ぼこりで 机[つくえ]がざらざらしているね。|Vom Sandstaub fühlt sich der Tisch rau an.|Nomen
水素|水素[すいそ]|Wasserstoff|水[みず]は 水素[すいそ]と 酸素[さんそ]でできています。|Wasser besteht aus Wasserstoff und Sauerstoff.|Nomen
素早い|素早[すばや]い|flink, schnell|彼[かれ]は 素早[すばや]くあたりを 見回[みまわ]したの。|Er sah sich schnell um.|Adjektiv
石炭|石炭[せきたん]|Kohle|小屋[こや]に 石炭[せきたん]の 山[やま]があります。|In der Hütte liegt ein Berg Kohle.|Nomen
岩|岩[いわ]|Fels|あの 岩[いわ]まで 泳[およ]ごう。|Lass uns bis zu dem Felsen dort schwimmen.|Nomen
岸|岸[きし]|Ufer|船[ふね]がやっと 岸[きし]に 着[つ]いたよ。|Das Schiff hat endlich das Ufer erreicht.|Nomen
校庭|校庭[こうてい]|Schulhof|陸上部[りくじょうぶ]は 校庭[こうてい]で 練習[れんしゅう]しています。|Die Leichtathletik-AG trainiert auf dem Schulhof.|Nomen
解散|解散[かいさん]|Auflösung, Auseinandergehen|来年[らいねん]、 衆議院[しゅうぎいん]が 解散[かいさん]されるだろう。|Nächstes Jahr wird wohl das Unterhaus aufgelöst.|Nomen (mit する)
スモッグ|スモッグ|Smog|都会[とかい]の 空[そら]はスモッグで 灰色[はいいろ]ね。|Der Himmel über der Großstadt ist grau vom Smog.|Nomen
植物|植物[しょくぶつ]|Pflanze|休日[きゅうじつ]は 植物[しょくぶつ]の 世話[せわ]をして 過[す]ごします。|An freien Tagen kümmere ich mich um meine Pflanzen.|Nomen
植民地|植民地[しょくみんち]|Kolonie|この 国[くに]はイギリスの 植民地[しょくみんち]でした。|Dieses Land war eine britische Kolonie.|Nomen
植木|植木[うえき]|Gartenpflanze, Topfpflanze|植木[うえき]に 水[みず]をやりました。|Ich habe die Pflanzen gegossen.|Nomen
植物園|植物園[しょくぶつえん]|botanischer Garten|植物園[しょくぶつえん]には 珍[めずら]しい 花[はな]がたくさんありますね。|Im botanischen Garten gibt es viele seltene Blumen.|Nomen
根拠|根拠[こんきょ]|Grundlage, Begründung|何[なに]を 根拠[こんきょ]にそんな 事[こと]を 言[い]うのですか。|Auf welcher Grundlage sagen Sie so etwas?|Nomen
根本|根本[こんぽん]|Wurzel, Grundlage|問題[もんだい]の 根本[こんぽん]を 見直[みなお]しましょう。|Betrachten wir noch einmal die Wurzel des Problems.|Nomen
板|板[いた]|Brett|父[ちち]は 長[なが]い 板[いた]を 買[か]って 来[き]たんだ。|Mein Vater hat ein langes Brett gekauft.|Nomen
すり|すり|Taschendieb|すりに 財布[さいふ]をとられた。|Ein Taschendieb hat mir das Portemonnaie gestohlen.|Nomen
看板|看板[かんばん]|Schild, Ladenschild|店[みせ]の 看板[かんばん]を 塗[ぬ]り 替[か]えました。|Ich habe das Ladenschild neu gestrichen.|Nomen
草花|草花[くさばな]|Blumen und Gräser|草花[くさばな]を 大切[たいせつ]にしましょう。|Gehen wir sorgsam mit Blumen und Pflanzen um.|Nomen
草木|草木[くさき]|Pflanzen und Bäume|この 庭[にわ]は 草木[くさき]が 枯[か]れているね。|In diesem Garten sind die Pflanzen vertrocknet.|Nomen
言葉遣い|言葉遣[ことばづか]い|Ausdrucksweise, Wortwahl|先生[せんせい]にそんな 言葉遣[ことばづか]いをしてはいけません。|So darfst du mit dem Lehrer nicht reden.|Nomen
落ち葉|落[お]ち 葉[ば]|gefallenes Laub|落[お]ち 葉[ば]の 季節[きせつ]になりましたね。|Die Zeit des fallenden Laubes ist da.|Nomen
木の葉|木[こ]の 葉[は]|Laub, Blätter eines Baumes|秋[あき]には 木[こ]の 葉[は]が 赤[あか]くなります。|Im Herbst färben sich die Blätter rot.|Nomen
書き言葉|書[か]き 言葉[ことば]|Schriftsprache|書[か]き 言葉[ことば]と 話[はな]し 言葉[ことば]はだいぶ 違[ちが]うことがあります。|Schriftsprache und gesprochene Sprache unterscheiden sich manchmal stark.|Nomen
吸収|吸収[きゅうしゅう]|Aufnahme, Absorption|彼[かれ]は 知識[ちしき]の 吸収[きゅうしゅう]が 早[はや]いですね。|Er nimmt Wissen schnell auf.|Nomen (mit する)
おにぎり|おにぎり|Reisbällchen (Onigiri)|昼食[ちゅうしょく]におにぎりを 食[た]べました。|Zum Mittagessen habe ich Onigiri gegessen.|Nomen
呼吸|呼吸[こきゅう]|Atmung|ゆっくり 呼吸[こきゅう]してください。|Atmen Sie bitte langsam.|Nomen (mit する)
吸い込む|吸[す]い 込[こ]む|einatmen, einsaugen|ほこりを 吸[す]い 込[こ]んじゃった。|Ich habe Staub eingeatmet.|Verb
及ぶ|及[およ]ぶ|reichen bis, sich erstrecken auf|あなたにまで 迷惑[めいわく]が 及[およ]んでごめんなさい。|Es tut mir leid, dass auch Sie Unannehmlichkeiten hatten.|Verb
扱う|扱[あつか]う|behandeln, umgehen mit; führen (Ware)|この 荷物[にもつ]は 丁寧[ていねい]に 扱[あつか]って 下[くだ]さい。|Behandeln Sie dieses Paket bitte vorsichtig.|Verb
高級|高級[こうきゅう]|erstklassig, Luxus-|私[わたし]たちは 高級[こうきゅう]ホテルに 泊[と]まったの。|Wir haben in einem Luxushotel übernachtet.|な-Adjektiv
級|級[きゅう]|Stufe, Grad, Klasse|彼[かれ]は 書道3[しょどう さん] 級[きゅう]です。|Er hat den dritten Grad in Kalligraphie.|Nomen
上級|上級[じょうきゅう]|Oberstufe, fortgeschritten|彼[かれ]は 上級[じょうきゅう]のコースに 上[あ]がったよ。|Er ist in den Fortgeschrittenenkurs aufgestiegen.|Nomen
かみそり|かみそり|Rasiermesser, Rasierer|かみそりの 刃[は]で 指[ゆび]を 切[き]りました。|Ich habe mir an der Rasierklinge in den Finger geschnitten.|Nomen
初級|初級[しょきゅう]|Anfängerstufe|これは 初級[しょきゅう]の 教科書[きょうかしょ]です。|Das ist ein Lehrbuch für Anfänger.|Nomen
血管|血管[けっかん]|Blutgefäß|年[とし]をとると 血管[けっかん]が 硬[かた]くなります。|Mit dem Alter verhärten sich die Blutgefäße.|Nomen
出血|出血[しゅっけつ]|Blutung|出血[しゅっけつ]がひどいので、 医者[いしゃ]に 行[い]ったほうがいい。|Die Blutung ist stark, du solltest zum Arzt gehen.|Nomen (mit する)
液体|液体[えきたい]|Flüssigkeit|洗濯[せんたく]に 液体[えきたい]の 洗剤[せんざい]を 使[つか]っています。|Ich wasche mit Flüssigwaschmittel.|Nomen
血液|血液[けつえき]|Blut|心臓[しんぞう]は 全身[ぜんしん]に 血液[けつえき]を 送[おく]り 出[だ]している。|Das Herz pumpt Blut in den ganzen Körper.|Nomen
液|液[えき]|Flüssigkeit, Lösung|容器[ようき]から 液[えき]がこぼれていますよ。|Aus dem Behälter läuft Flüssigkeit aus.|Nomen
背中|背中[せなか]|Rücken|背中[せなか]がかゆいです。|Mein Rücken juckt.|Nomen
がやがや|がやがや|lärmend, durcheinanderredend|生徒[せいと]たちががやがやと 騒[さわ]いでいますね。|Die Schüler lärmen durcheinander.|Adverb
背広|背広[せびろ]|Anzug (Herren)|背広[せびろ]をクリーニングに 出[だ]しました。|Ich habe den Anzug in die Reinigung gegeben.|Nomen
骨折|骨折[こっせつ]|Knochenbruch|彼女[かのじょ]はスキーで 足[あし]を 骨折[こっせつ]したの。|Sie hat sich beim Skifahren das Bein gebrochen.|Nomen (mit する)
健全|健全[けんぜん]|gesund, heil|子供[こども]の 健全[けんぜん]な 心[こころ]を 育[そだ]てましょう。|Fördern wir die gesunde seelische Entwicklung der Kinder.|Adjektiv
健康|健康[けんこう]|Gesundheit|健康[けんこう]が 一番大切[いちばん たいせつ]だ。|Gesundheit ist das Wichtigste.|Nomen
診断|診断[しんだん]|Diagnose|医師[いし]は 異常[いじょう]なしと 診断[しんだん]したんだ。|Der Arzt hat keine Auffälligkeiten festgestellt.|Nomen (mit する)
診察|診察[しんさつ]|ärztliche Untersuchung|今日[きょう]、 病院[びょういん]で 診察[しんさつ]してもらったの。|Heute habe ich mich im Krankenhaus untersuchen lassen.|Nomen (mit する)
医療|医療[いりょう]|medizinische Versorgung|医療[いりょう] 関係[かんけい]の 仕事[しごと]をしています。|Ich arbeite im Gesundheitswesen.|Nomen
きょろきょろ|きょろきょろ|sich unruhig umsehend|会場[かいじょう]で 子供[こども]がきょろきょろしているわよ。|Im Saal schaut sich ein Kind suchend um.|Adverb
気の毒|気[き]の 毒[どく]|bedauernswert|彼[かれ]らは 気[き]の 毒[どく]な 生活[せいかつ]をしている。|Sie führen ein bedauernswertes Leben.|な-Adjektiv
消毒|消毒[しょうどく]|Desinfektion|足[あし]の 傷[きず]を 消毒[しょうどく]したわ。|Ich habe die Wunde am Bein desinfiziert.|Nomen (mit する)
症状|症状[しょうじょう]|Symptom|医者[いしゃ]に 症状[しょうじょう]を 説明[せつめい]したよ。|Ich habe dem Arzt die Symptome geschildert.|Nomen
清書|清書[せいしょ]|Reinschrift|この 手紙[てがみ]を 清書[せいしょ]してください。|Schreiben Sie diesen Brief bitte ins Reine.|Nomen (mit する)
清潔|清潔[せいけつ]|Sauberkeit, sauber|レストランは 清潔[せいけつ]が 第一[だいいち]です。|In Restaurants kommt Sauberkeit an erster Stelle.|な-Adjektiv
監督|監督[かんとく]|Regisseur(in); Aufsicht, Trainer(in)|その 監督[かんとく]はアカデミー 賞[しょう]を 受賞[じゅしょう]したよな。|Der Regisseur hat einen Oscar gewonnen.|Nomen (mit する)
撮影|撮影[さつえい]|Aufnahme (Foto, Film), Dreh|撮影[さつえい]は 3ヶ月[さんかげつ]かけて 行[おこな]われました。|Die Dreharbeiten dauerten drei Monate.|Nomen (mit する)
描く|描[えが]く|zeichnen, malen; schildern|彼[かれ]は 人物[じんぶつ]を 描[えが]くのがうまいな。|Er kann gut Menschen zeichnen.|Verb
くしゃみ|くしゃみ|Niesen|風邪[かぜ]でくしゃみが 止[と]まりません。|Wegen der Erkältung muss ich ständig niesen.|Nomen
活躍|活躍[かつやく]|aktive Rolle, Glanzleistung|彼[かれ]の 活躍[かつやく]で 優勝[ゆうしょう]したよ。|Dank seiner starken Leistung haben wir den Titel geholt.|Nomen (mit する)
再開|再開[さいかい]|Wiederaufnahme, Wiedereröffnung|試合[しあい]はすぐに 再開[さいかい]されたの。|Das Spiel wurde gleich wieder aufgenommen.|Nomen (mit する)
再生|再生[さいせい]|Wiedergabe; Wiederbelebung|留守番電話[るすばんでんわ]のメッセージを 再生[さいせい]したの。|Ich habe die Nachrichten auf dem Anrufbeantworter abgespielt.|Nomen (mit する)
再会|再会[さいかい]|Wiedersehen|彼[かれ]らは 互[たが]いに 再会[さいかい]を 喜[よろこ]んだの。|Sie freuten sich über ihr Wiedersehen.|Nomen (mit する)
編む|編[あ]む|stricken, flechten|妹[いもうと]はマフラーを 編[あ]みました。|Meine kleine Schwester hat einen Schal gestrickt.|Verb
解放|解放[かいほう]|Befreiung, Freilassung|人質[ひとじち]が 解放[かいほう]されてよかった。|Gut, dass die Geiseln freigelassen wurden.|Nomen (mit する)
開放|開放[かいほう]|Öffnung (für alle)|その 国[くに]は 市場[しじょう]の 開放[かいほう]を 求[もと]められているの。|Von dem Land wird die Öffnung seiner Märkte verlangt.|Nomen (mit する)
ぐずぐず|ぐずぐず|trödelnd, zaudernd|ぐずぐずしていると 電車[でんしゃ]に 乗[の]り 遅[おく]れますよ。|Wenn du trödelst, verpasst du den Zug.|Adverb
重視|重視[じゅうし]|großen Wert legen auf|あの 企業[きぎょう]では 学歴[がくれき]が 重視[じゅうし]されるよ。|In diesem Unternehmen wird großer Wert auf den Bildungsabschluss gelegt.|Nomen (mit する)
視点|視点[してん]|Blickwinkel, Standpunkt|視点[してん]を 変[か]えて 見[み]てみましょう。|Betrachten wir es einmal aus einem anderen Blickwinkel.|Nomen
近視|近視[きんし]|Kurzsichtigkeit|彼[かれ]は 軽[かる]い 近視[きんし]です。|Er ist leicht kurzsichtig.|Nomen
衣類|衣類[いるい]|Kleidungsstücke|衣類[いるい]の 整理[せいり]をしたよ。|Ich habe die Kleidung sortiert.|Nomen
衣服|衣服[いふく]|Kleidung|彼[かれ]の 会社[かいしゃ]は 衣服[いふく]を 扱[あつか]っているよ。|Seine Firma handelt mit Kleidung.|Nomen
衣料|衣料[いりょう]|Kleidung, Textilien|その 会社[かいしゃ]は 衣料[いりょう]を 扱[あつか]っているんだ。|Diese Firma handelt mit Kleidung.|Nomen
衣食住|衣食住[いしょくじゅう]|Kleidung, Nahrung und Wohnen|土地[とち]によって 衣食住[いしょくじゅう]は 変化[へんか]する。|Kleidung, Essen und Wohnen ändern sich je nach Gegend.|Nomen
くすぐったい|くすぐったい|kitzelig; es kitzelt|犬[いぬ]に 顔[かお]をなめられてくすぐったいよ。|Der Hund leckt mir das Gesicht, das kitzelt.|Adjektiv
仮に|仮[かり]に|angenommen, vorläufig|仮[かり]にそれが 事実[じじつ]だとしてももう 遅[おそ]いよ。|Selbst wenn das stimmen sollte, ist es schon zu spät.|Adverb
仮定|仮定[かてい]|Annahme, Hypothese|仮定[かてい]の 話[はなし]だけでは 結論[けつろん]は 出[で]ません。|Mit bloßen Annahmen kommt man zu keinem Schluss.|Nomen (mit する)
仮|仮[かり]|vorläufig, provisorisch|仮[かり]の 申[もう]し 込[こ]みをしました。|Ich habe mich vorläufig angemeldet.|Nomen
仮名遣い|仮名遣[かなづか]い|Kana-Rechtschreibung|祖父[そふ]は 古[ふる]い 仮名遣[かなづか]いで 書[か]くことがあるの。|Mein Großvater schreibt manchmal in der alten Kana-Rechtschreibung.|Nomen
演説|演説[えんぜつ]|Rede, Ansprache|彼[かれ]は 地方[ちほう]で 演説[えんぜつ]したのよ。|Er hat in der Provinz eine Rede gehalten.|Nomen (mit する)
公演|公演[こうえん]|öffentliche Aufführung, Gastspiel|彼[かれ]らの 海外[かいがい] 公演[こうえん]が 発表[はっぴょう]されたよ。|Ihre Auslandsgastspiele wurden angekündigt.|Nomen (mit する)
演じる|演[えん]じる|spielen, darstellen (Rolle)|彼[かれ]はよく 刑事[けいじ]の 役[やく]を 演[えん]じるね。|Er spielt oft die Rolle eines Kommissars.|Verb
出演|出演[しゅつえん]|Auftritt, Mitwirkung|彼女[かのじょ]はその 映画[えいが]に 出演[しゅつえん]しているよ。|Sie spielt in dem Film mit.|Nomen (mit する)
くたびれる|くたびれる|müde werden, sich abnutzen|たくさん 歩[ある]いてくたびれました。|Ich bin viel gelaufen und erschöpft.|Verb
劇|劇[げき]|Theaterstück|小学校[しょうがっこう]で 子供[こども]たちの 劇[げき]を 見[み]ました。|Ich habe in der Grundschule ein Theaterstück der Kinder gesehen.|Nomen
劇場|劇場[げきじょう]|Theater (Gebäude)|午後8時[ごご はちじ]に 劇場[げきじょう]の 前[まえ]で 会[あ]いましょう。|Treffen wir uns um acht Uhr abends vor dem Theater.|Nomen
演劇|演劇[えんげき]|Schauspiel, Theater|彼女[かのじょ]は 演劇[えんげき]を 学[まな]んでいます。|Sie studiert Schauspiel.|Nomen
喜劇|喜劇[きげき]|Komödie|昨夜[さくや]はテレビで 喜劇[きげき]を 見[み]たよ。|Gestern Abend habe ich im Fernsehen eine Komödie gesehen.|Nomen
悲しみ|悲[かな]しみ|Trauer, Kummer|突然[とつぜん]の 悲[かな]しみが 一家[いっか]を 襲[おそ]いました。|Plötzliche Trauer brach über die Familie herein.|Nomen
集団|集団[しゅうだん]|Gruppe, Kollektiv|テロ 集団[しゅうだん]が 警察[けいさつ]に 捕[つか]まりました。|Die Terrorgruppe wurde von der Polizei gefasst.|Nomen
固定|固定[こてい]|Befestigung, Fixierung|棒[ぼう]をテープで 固定[こてい]しなさい。|Befestige den Stab mit Klebeband.|Nomen (mit する)
いらいら|いらいら|gereizt, nervös|彼女[かのじょ]は 朝[あさ]からいらいらしている。|Sie ist seit dem Morgen gereizt.|Adjektiv
固める|固[かた]める|härten, festigen|私[わたし]はもう 決心[けっしん]を 固[かた]めたの。|Mein Entschluss steht schon fest.|Verb
固まる|固[かた]まる|fest werden, erstarren|もうプリンは 固[かた]まったかな。|Ob der Pudding schon fest ist?|Verb
固体|固体[こたい]|Festkörper|氷[こおり]は 固体[こたい]です。|Eis ist ein Festkörper.|Nomen
固有|固有[こゆう]|eigen, charakteristisch|これは 日本[にほん] 固有[こゆう]の 鳥[とり]です。|Dieser Vogel kommt nur in Japan vor.|な-Adjektiv
主催|主催[しゅさい]|Veranstaltung, Ausrichtung|その 芸術祭[げいじゅつさい]は 市[し]が 主催[しゅさい]しています。|Das Kunstfestival wird von der Stadt veranstaltet.|Nomen (mit する)
促す|促[うなが]す|drängen, anregen|彼[かれ]に 集中[しゅうちゅう]するよう 注意[ちゅうい]を 促[うなが]しといたよ。|Ich habe ihn ermahnt, sich zu konzentrieren.|Verb
催促|催促[さいそく]|Mahnung, Drängen|彼女[かのじょ]に 本[ほん]を 返[かえ]すように 催促[さいそく]したの。|Ich habe sie gedrängt, das Buch zurückzugeben.|Nomen (mit する)
エチケット|エチケット|Etikette, Anstandsregeln|エチケットを 守[まも]ることは 大切[たいせつ]です。|Es ist wichtig, die Etikette zu wahren.|Nomen
古典|古典[こてん]|Klassiker, klassische Literatur|私[わたし]は 古典[こてん]を 読[よ]むのが 好[す]きです。|Ich lese gern Klassiker.|Nomen
辞典|辞典[じてん]|Wörterbuch|知[し]らない 言葉[ことば]を 辞典[じてん]で 調[しら]べました。|Ich habe das unbekannte Wort im Wörterbuch nachgeschlagen.|Nomen
殊に|殊[こと]に|besonders, vor allem|ロックは 殊[こと]に 若者[わかもの]に 人気[にんき]だ。|Rock ist besonders bei jungen Leuten beliebt.|Adverb
象徴|象徴[しょうちょう]|Symbol|天皇[てんのう]は 日本国[にほんこく]の 象徴[しょうちょう]です。|Der Kaiser ist das Symbol Japans.|Nomen (mit する)
微か|微[かす]か|schwach, kaum wahrnehmbar|階下[かいか]から 微[かす]かな 音[おと]が 聞[き]こえた。|Von unten war ein leises Geräusch zu hören.|Adjektiv
ご免|ご 免[めん]|Entschuldigung|遅[おく]れてご 免[めん]。|Entschuldige die Verspätung.|Nomen
許可|許可[きょか]|Erlaubnis, Genehmigung|先生[せんせい]に 許可[きょか]をもらって 早退[そうたい]しました。|Ich habe die Erlaubnis des Lehrers eingeholt und bin früher gegangen.|Nomen (mit する)
訓練|訓練[くんれん]|Training, Übung|学校[がっこう]で 避難[ひなん] 訓練[くんれん]がありました。|In der Schule gab es eine Evakuierungsübung.|Nomen (mit する)
かっと|かっと|aufbrausend, in Wut geraten|かっとなって 余計[よけい]なことを 言[い]ってしまったな。|Ich bin aufgebraust und habe etwas Unnötiges gesagt.|Adverb
訓読み|訓読[くんよ]み|Kun-Lesung (japanische Lesung)|漢字[かんじ]には 音読[おんよ]みと 訓読[くんよ]みがあります。|Kanji haben On- und Kun-Lesungen.|Nomen (mit する)
訓|訓[くん]|japanische Lesung eines Kanji|漢字[かんじ]の 読[よ]み 方[かた]には、 音[おん]と 訓[くん]の 2通[ふたとお]りがあるの。|Kanji kann man auf zwei Arten lesen, als On- und als Kun-Lesung.|Nomen
助詞|助詞[じょし]|Partikel (Grammatik)|助詞[じょし]を 変[か]えると 文[ぶん]の 意味[いみ]が 変[か]わります。|Wenn man die Partikel ändert, ändert sich die Bedeutung des Satzes.|Nomen
形容詞|形容詞[けいようし]|Adjektiv|「 大[おお]きい」は 形容詞[けいようし]です。|„Ōkii“ ist ein Adjektiv.|Nomen
上司|上司[じょうし]|Vorgesetzte(r), Chef(in)|上司[じょうし]に 相談[そうだん]してみます。|Ich werde meinen Vorgesetzten fragen.|Nomen
司会|司会[しかい]|Moderation, Leitung (einer Veranstaltung)|彼[かれ]は 司会[しかい]が 上手[じょうず]ですね。|Er moderiert gut.|Nomen (mit する)
購入|購入[こうにゅう]|Kauf, Anschaffung|入学式[にゅうがくしき]の 後[あと]、 教科書[きょうかしょ]を 購入[こうにゅう]してください。|Kaufen Sie die Lehrbücher bitte nach der Aufnahmefeier.|Nomen (mit する)
がらがら|がらがら|gurgelnd; ratternd|誰[だれ]かがガラガラとうがいをしているね。|Jemand gurgelt laut.|Adverb
講演|講演[こうえん]|Vortrag|彼[かれ]の 講演[こうえん]は 評判[ひょうばん]がいい。|Seine Vorträge haben einen guten Ruf.|Nomen (mit する)
講義|講義[こうぎ]|Vorlesung|彼[かれ]の 講義[こうぎ]はとても 分[わ]かりやすいですね。|Seine Vorlesungen sind sehr gut verständlich.|Nomen (mit する)
休講|休講[きゅうこう]|Ausfall einer Vorlesung|今日[きょう]のフランス 語[ご]の 講座[こうざ]は 休講[きゅうこう]です。|Der Französischkurs fällt heute aus.|Nomen (mit する)
医師|医師[いし]|Arzt, Ärztin|医師[いし]に 入院[にゅういん]を 勧[すす]められたの。|Der Arzt hat mir zu einem Krankenhausaufenthalt geraten.|Nomen
講師|講師[こうし]|Dozent(in), Referent(in)|専門家[せんもんか]を 講師[こうし]に 招[まね]いた。|Wir haben einen Fachmann als Referenten eingeladen.|Nomen
技師|技師[ぎし]|Techniker(in), Ingenieur(in)|彼[かれ]はレントゲン 技師[ぎし]です。|Er ist Röntgentechniker.|Nomen
師走|師走[しわす]|Dezember (alter Name)|師走[しわす]に 入[はい]ると 忙[いそが]しくなります。|Im Dezember wird es hektisch.|Nomen
かんかん|かんかん|wutentbrannt|彼女[かのじょ]はかんかんに 怒[おこ]っています。|Sie ist fuchsteufelswild.|Adverb
お手伝い|お 手伝[てつだ]い|Hilfe; Haushaltshilfe|何[なに]かお 手伝[てつだ]いしましょうか。|Kann ich Ihnen irgendwie helfen?|Nomen (mit する)
小鳥|小鳥[ことり]|kleiner Vogel|誕生日[たんじょうび]に 小鳥[ことり]を 買[か]ってもらいました。|Zum Geburtstag habe ich einen kleinen Vogel bekommen.|Nomen
大声|大声[おおごえ]|laute Stimme|私[わたし]たちは 大声[おおごえ]で 歌[うた]を 歌[うた]ったの。|Wir haben laut gesungen.|Nomen
歌声|歌声[うたごえ]|Gesang, Singstimme|校舎[こうしゃ]から 歌声[うたごえ]が 聞[き]こえて 来[き]たよ。|Aus dem Schulgebäude war Gesang zu hören.|Nomen
騒ぎ|騒[さわ]ぎ|Lärm, Aufruhr|一体何[いったい なん]の 騒[さわ]ぎですか。|Was ist das denn für ein Aufruhr?|Nomen
騒がしい|騒[さわ]がしい|laut, lärmend|何[なん]だか 表[おもて]が 騒[さわ]がしい。|Draußen ist es irgendwie laut.|Adjektiv
飼う|飼[か]う|halten (Tiere)|ペットを 飼[か]ったことはありますか。|Hast du schon einmal ein Haustier gehabt?|Verb
これまで|これまで|bis jetzt, bisher|これまでの 私[わたし]とは 違[ちが]うんです。|Ich bin nicht mehr die, die ich bisher war.|Nomen
刺さる|刺[さ]さる|stecken, stecken bleiben|靴[くつ]の 底[そこ]に 釘[くぎ]が 刺[さ]さってしまったんだ。|In meiner Schuhsohle steckt ein Nagel.|Verb
急激|急激[きゅうげき]|plötzlich, rapide|これから 高齢化[こうれいか]が 急激[きゅうげき]に 進[すす]みます。|Die Alterung der Gesellschaft wird nun rapide voranschreiten.|な-Adjektiv
刺激|刺激[しげき]|Reiz, Anregung|そのクイズ 番組[ばんぐみ]は 脳[のう]を 刺激[しげき]するね。|Diese Quizsendung regt das Gehirn an.|Nomen (mit する)
感激|感激[かんげき]|tiefe Rührung, Begeisterung|感激[かんげき]して 泣[な]いてしまいました。|Ich war so gerührt, dass ich geweint habe.|Nomen (mit する)
興味|興味[きょうみ]|Interesse|私[わたし]は 歴史[れきし]に 興味[きょうみ]があります。|Ich interessiere mich für Geschichte.|Nomen
興奮|興奮[こうふん]|Aufregung, Erregung|彼女[かのじょ]の 優勝[ゆうしょう]に 感激[かんげき]し 興奮[こうふん]しました。|Ihr Sieg hat mich bewegt und aufgewühlt.|Nomen (mit する)
驚き|驚[おどろ]き|Überraschung, Staunen|彼女[かのじょ]は 驚[おどろ]きを 隠[かく]せませんでしたよ。|Sie konnte ihre Überraschung nicht verbergen.|Nomen
驚かす|驚[おどろ]かす|überraschen, erschrecken|あなたを 驚[おどろ]かす 話[はなし]があります。|Ich habe eine Geschichte, die dich überraschen wird.|Verb
じめじめ|じめじめ|feucht, klamm|梅雨時[つゆどき]はじめじめする。|In der Regenzeit ist es feucht und klamm.|Adverb
至る|至[いた]る|gelangen zu, führen zu|ようやく 結論[けつろん]に 至[いた]ったようね|Offenbar ist man endlich zu einem Ergebnis gekommen.|Verb
至る所|至[いた]る 所[ところ]|überall|コンビニは 至[いた]る 所[ところ]にあります。|Convenience-Stores gibt es überall.|Nomen
至急|至急[しきゅう]|dringend, eilig|会社[かいしゃ]から「 至急[しきゅう]」との 連絡[れんらく]があったんだ。|Von der Firma kam die Nachricht „dringend“.|Nomen
一致|一致[いっち]|Übereinstimmung|皆[みんな]の 意見[いけん]が 一致[いっち]しました。|Alle waren einer Meinung.|Nomen (mit する)
致す|致[いた]す|tun (bescheiden)|私[わたし]からご 連絡[れんらく] 致[いた]します。|Ich melde mich bei Ihnen.|Verb
傾く|傾[かたむ]く|sich neigen|お 日様[ひさま]が 西[にし]に 傾[かたむ]きましたね。|Die Sonne hat sich nach Westen geneigt.|Verb
傾ける|傾[かたむ]ける|neigen, schräg stellen|彼女[かのじょ]は 首[くび]を 少[すこ]し 傾[かたむ]けて 笑[わら]うの。|Sie neigt beim Lachen den Kopf ein wenig.|Verb
じろじろ|じろじろ|anstarrend, musternd|人[ひと]をじろじろ 見[み]るものではありません。|Man starrt andere Leute nicht an.|Adverb
坂|坂[さか]|Hang, Steigung|この 坂[さか]を 上[のぼ]るのはすごくきついね。|Diesen Hang hinaufzugehen ist sehr anstrengend.|Nomen
狭まる|狭[せば]まる|enger werden|ここから 道[みち]の 幅[はば]が 狭[せば]まっています。|Ab hier wird die Straße schmaler.|Verb
狭める|狭[せば]める|verengen, einengen|もっと 範囲[はんい]を 狭[せば]めて 探[さが]しましょう|Grenzen wir den Bereich weiter ein und suchen dann.|Verb
徐行|徐行[じょこう]|langsames Fahren, Schrittgeschwindigkeit|この 先[さき]は 徐行[じょこう]して 下[くだ]さい。|Fahren Sie ab hier bitte langsam.|Nomen (mit する)
硬さ|硬[かた]さ|Härte|理科[りか]の 時間[じかん]に 石[いし]の 硬[かた]さを 比[くら]べたよ。|Im Naturkundeunterricht haben wir die Härte von Steinen verglichen.|Nomen
柔軟|柔軟[じゅうなん]|flexibel, geschmeidig|彼[かれ]は 柔軟[じゅうなん]に 対応[たいおう]をした。|Er hat flexibel reagiert.|Adjektiv
緊急|緊急[きんきゅう]|dringend, Not-|緊急[きんきゅう] 事態[じたい]が 発生[はっせい]した。|Ein Notfall ist eingetreten.|な-Adjektiv
あり|あり|Ameise|ありの 群[む]れが 砂糖[さとう]にたかっている。|Ein Schwarm Ameisen macht sich über den Zucker her.|Nomen
緊張|緊張[きんちょう]|Anspannung, Nervosität|彼[かれ]は 緊張[きんちょう]していたな。|Er war nervös.|Nomen (mit する)
拡張|拡張[かくちょう]|Erweiterung, Ausbau|その 会社[かいしゃ]は 店舗[てんぽ]を 拡張[かくちょう]していますね。|Die Firma erweitert ihre Ladenfläche.|Nomen (mit する)
出張|出張[しゅっちょう]|Dienstreise|部長[ぶちょう]は 京都[きょうと]に 出張[しゅっちょう] 中[ちゅう]です。|Der Abteilungsleiter ist auf Dienstreise in Kyoto.|Nomen (mit する)
衝突|衝突[しょうとつ]|Zusammenstoß, Konflikt|そこの 角[かど]で 車同士[くるま どうし]が 衝突[しょうとつ]したのよ。|An der Ecke dort sind zwei Autos zusammengestoßen.|Nomen (mit する)
煙突|煙突[えんとつ]|Schornstein|工場[こうじょう]の 煙突[えんとつ]から 煙[けむり]が 上[あ]がっている。|Aus dem Fabrikschornstein steigt Rauch auf.|Nomen
避ける|避[さ]ける|meiden, ausweichen|彼女[かのじょ]は 昨日[きのう]から 私[わたし]のことを 避[さ]けているようなんだ。|Sie scheint mir seit gestern aus dem Weg zu gehen.|Verb
軍事|軍事[ぐんじ]|Militärwesen, militärisch|彼[かれ]は 軍事[ぐんじ]に 関[かか]わる 仕事[しごと]を 続[つづ]けてきたんだ。|Er hat immer in einem militärnahen Beruf gearbeitet.|Nomen
軍|軍[ぐん]|Armee, Militär|怪我人[けがにん]は 軍[ぐん]の 病院[びょういん]に 運[はこ]ばれたよ。|Die Verletzten wurden ins Militärkrankenhaus gebracht.|Nomen
あいづち|あいづち|bestätigende Zwischenlaute (beim Zuhören)|彼[かれ]の 話[はなし]に 私[わたし]はあいづちを 打[う]ったの。|Ich habe beim Zuhören immer wieder zustimmend reagiert.|Nomen
自衛隊|自衛隊[じえいたい]|Selbstverteidigungsstreitkräfte (Japans)|自衛隊[じえいたい]がイラクに 派遣[はけん]されたわ。|Die Selbstverteidigungsstreitkräfte wurden in den Irak entsandt.|Nomen
軍隊|軍隊[ぐんたい]|Armee, Truppen|彼[かれ]は 軍隊[ぐんたい]に 入[はい]ったよ。|Er ist zur Armee gegangen.|Nomen
核|核[かく]|Kern; Atomkern|核[かく] 戦争[せんそう]は 絶対[ぜったい]に 防[ふせ]ぐべきよ。|Ein Atomkrieg muss unbedingt verhindert werden.|Nomen
結核|結核[けっかく]|Tuberkulose|昔[むかし]は 結核[けっかく]でたくさんの 人[ひと]が 亡[な]くなった。|Früher sind viele Menschen an Tuberkulose gestorben.|Nomen
専攻|専攻[せんこう]|Hauptfach, Spezialisierung|大学[だいがく]では 物理[ぶつり]を 専攻[せんこう]していました。|An der Universität habe ich Physik studiert.|Nomen (mit する)
攻める|攻[せ]める|angreifen|彼[かれ]は 積極的[せっきょくてき]に 攻[せ]めたが 勝[か]てなかったな。|Er griff offensiv an, konnte aber nicht gewinnen.|Verb
撃つ|撃[う]つ|schießen|彼[かれ]は 拳銃[けんじゅう]で 撃[う]たれたわ。|Er wurde mit einer Pistole angeschossen.|Verb
かちかち|かちかち|steinhart, festgefroren|池[いけ]がかちかちに 凍[こお]っています。|Der Teich ist hart zugefroren.|Adjektiv
暴れる|暴[あば]れる|toben, randalieren|彼[かれ]は 悪酔[わるよ]いして 暴[あば]れたんだ。|Er war betrunken und hat randaliert.|Verb
襲う|襲[おそ]う|überfallen, angreifen|山[やま]で 登山客[とざん きゃく]が 熊[くま]に 襲[おそ]われたよ。|In den Bergen wurden Wanderer von einem Bären angegriffen.|Verb
絶対|絶対[ぜったい]|absolut, auf jeden Fall|そんなことは 絶対[ぜったい]できないよ。|So etwas kann ich auf keinen Fall.|Adverb
気絶|気絶[きぜつ]|Ohnmacht|彼女[かのじょ]は 驚[おどろ]いて 気絶[きぜつ]してしまったの。|Sie ist vor Schreck in Ohnmacht gefallen.|Nomen (mit する)
消防|消防[しょうぼう]|Brandbekämpfung, Feuerwehr|消防[しょうぼう] 士[し]は 勇敢[ゆうかん]でなければならない。|Feuerwehrleute müssen mutig sein.|Nomen
嫌う|嫌[きら]う|nicht mögen, verabscheuen|父[ちち]はラッシュアワーを 嫌[きら]っています。|Mein Vater hasst die Hauptverkehrszeit.|Verb
嫌がる|嫌[いや]がる|Abneigung zeigen, nicht wollen|彼[かれ]はタバコの 煙[けむり]を 嫌[いや]がるの。|Er mag keinen Zigarettenrauch.|Verb
くたくた|くたくた|völlig erschöpft|今日[きょう]はたくさん 歩[ある]いてくたくたです。|Ich bin heute viel gelaufen und völlig erschöpft.|Adjektiv
機嫌|機嫌[きげん]|Laune, Stimmung|彼女[かのじょ]は 大変[たいへん] 機嫌[きげん]がいいね。|Sie ist sehr gut gelaunt.|Nomen
好き嫌い|好[す]き 嫌[きら]い|Vorlieben und Abneigungen|食[た]べ 物[もの]の 好[す]き 嫌[きら]いは 特[とく]にありません。|Beim Essen bin ich nicht wählerisch.|Nomen
抗議|抗議[こうぎ]|Protest|彼[かれ]の 発言[はつげん]に 対[たい]してたくさんの 抗議[こうぎ]があったよ。|Gegen seine Äußerung gab es viel Protest.|Nomen (mit する)
素敵|素敵[すてき]|wunderbar, reizend|素敵[すてき]なプレゼントをありがとう。|Danke für das wunderbare Geschenk.|Adjektiv
脅かす|脅[おど]かす|erschrecken, bedrohen|脅[おど]かさないでよ。|Erschreck mich nicht so.|Verb
権威|権威[けんい]|Autorität, Kapazität|博士[はかせ]はその 道[みち]の 権威[けんい]です。|Der Doktor ist eine Autorität auf diesem Gebiet.|Nomen
威張る|威張[いば]る|sich aufspielen, angeben|彼[かれ]は 威張[いば]ってなんかいません。|Er spielt sich überhaupt nicht auf.|Verb
情勢|情勢[じょうせい]|Lage, Verhältnisse|私[わたし]は 世界[せかい] 情勢[じょうせい]を 知[し]るために 毎日[まいにち]ニュースを 見[み]るわ。|Ich sehe jeden Tag Nachrichten, um die Weltlage zu kennen.|Nomen
こしょう|こしょう|Pfeffer|こしょうを 入[い]れ 過[す]ぎてスープが 辛[から]い。|Ich habe zu viel Pfeffer hineingetan, die Suppe ist scharf.|Nomen
勢力|勢力[せいりょく]|Einfluss, Macht|この 頃[ころ]は、ローマが 勢力[せいりょく]を 伸[の]ばしていました。|Zu dieser Zeit weitete Rom seine Macht aus.|Nomen
勢い|勢[いきお]い|Schwung, Wucht|そのチームには 勢[いきお]いがありますね。|Diese Mannschaft hat Schwung.|Nomen
恐れ|恐[おそ]れ|Furcht; Gefahr, Risiko|叔父[おじ]には 心臓病[しんぞうびょう]の 恐[おそ]れがあります。|Bei meinem Onkel besteht die Gefahr einer Herzkrankheit.|Nomen
恐れる|恐[おそ]れる|fürchten|彼[かれ]は 受験[じゅけん]の 失敗[しっぱい]を 恐[おそ]れています。|Er fürchtet, bei der Prüfung durchzufallen.|Verb
恐らく|恐[おそ]らく|wahrscheinlich, vermutlich|明日[あした]は 恐[おそ]らく 晴[は]れるでしょう。|Morgen wird es vermutlich schön.|Adverb
怖がる|怖[こわ]がる|sich fürchten, Angst zeigen|彼女[かのじょ]はクモを 怖[こわ]がります。|Sie hat Angst vor Spinnen.|Verb
巨大|巨大[きょだい]|riesig, gewaltig|あの 巨大[きょだい]な 建物[たてもの]は 博物館[はくぶつかん]です。|Das riesige Gebäude dort ist ein Museum.|な-Adjektiv
すべすべ|すべすべ|glatt, samtig|彼女[かのじょ]の 肌[はだ]はすべすべしているね。|Ihre Haut ist ganz glatt.|Adverb
拒否|拒否[きょひ]|Ablehnung, Weigerung|彼女[かのじょ]は 出席[しゅっせき]を 拒否[きょひ]した。|Sie hat sich geweigert teilzunehmen.|Nomen (mit する)
系列|系列[けいれつ]|Unternehmensgruppe, Reihe|高校卒業後[こうこう そつぎょう ご]、 系列[けいれつ]の 大学[だいがく]に 進[すす]みました。|Nach der Oberschule ging er an die angegliederte Universität.|Nomen
系統|系統[けいとう]|System, Abstammungslinie|電気[でんき] 系統[けいとう]を 図面[ずめん]で 確[たし]かめました。|Ich habe die elektrische Anlage anhand des Plans überprüft.|Nomen
子孫|子孫[しそん]|Nachkomme|彼[かれ]は 織田信長[おだのぶなが]の 子孫[しそん]だよ。|Er ist ein Nachkomme von Oda Nobunaga.|Nomen
絹|絹[きぬ]|Seide|このシャツは 絹[きぬ]でできています。|Dieses Hemd ist aus Seide.|Nomen
維持|維持[いじ]|Erhaltung, Aufrechterhaltung|彼女[かのじょ]は 何[なん]とか 健康[けんこう]を 維持[いじ]しているわね。|Sie schafft es irgendwie, gesund zu bleiben.|Nomen (mit する)
紳士|紳士[しんし]|Gentleman, Herr|身[み]なりのいい 紳士[しんし]が 話[はな]しかけてきたの。|Ein gut gekleideter Herr hat mich angesprochen.|Nomen
せっかく|せっかく|mit Mühe, extra|せっかく 来[き]たんだからゆっくりして 行[い]きなさい。|Wenn du schon extra gekommen bist, bleib doch noch ein wenig.|Adverb
偉大|偉大[いだい]|großartig, bedeutend|彼[かれ]は 偉大[いだい]な 事業[じぎょう]をなしとげました。|Er hat ein großes Werk vollbracht.|Adjektiv
刀|刀[かたな]|Schwert|日本映画[にほん えいが]で 刀[かたな]を 見[み]た。|Ich habe in einem japanischen Film ein Schwert gesehen.|Nomen
孤独|孤独[こどく]|Einsamkeit, einsam|彼[かれ]は 孤独[こどく]な 人生[じんせい]を 送[おく]っていたんだ。|Er führte ein einsames Leben.|な-Adjektiv
事柄|事柄[ことがら]|Angelegenheit, Sachverhalt|これまで 話[はな]し 合[あ]った 事柄[ことがら]をまとめてください。|Fassen Sie bitte zusammen, was wir bisher besprochen haben.|Nomen
柄|柄[がら]|Muster (auf Stoff)|彼[かれ]は 犬[いぬ]の 柄[がら]のTシャツを 着[き]ているよ。|Er trägt ein T-Shirt mit Hundemuster.|Nomen
柄|柄[え]|Griff, Stiel|この 傘[かさ]は 柄[え]が 丈夫[じょうぶ]だな。|Der Griff dieses Schirms ist stabil.|Nomen
枝|枝[えだ]|Ast, Zweig|強風[きょうふう]で 木[き]の 枝[えだ]が 折[お]れた。|Im starken Wind ist ein Ast abgebrochen.|Nomen
あきれる|あきれる|fassungslos sein, entgeistert sein|彼[かれ]の 頑固[がんこ]さにはあきれました。|Seine Sturheit hat mich fassungslos gemacht.|Verb
枯れる|枯[か]れる|verwelken, absterben|花瓶[かびん]の 花[はな]が 枯[か]れました。|Die Blumen in der Vase sind verwelkt.|Verb
木枯らし|木枯[こが]らし|kalter Spätherbstwind|外[そと]は 木枯[こが]らしが 吹[ふ]いているよ。|Draußen weht ein kalter Winterwind.|Nomen
詩|詩[し]|Gedicht, Lyrik|彼女[かのじょ]の 詩[し]は 世界中[せかいじゅう]で 有名[ゆうめい]になったんだ。|Ihre Gedichte sind auf der ganzen Welt berühmt geworden.|Nomen
詩人|詩人[しじん]|Dichter(in)|彼[かれ]は 優[すぐ]れた 詩人[しじん]です。|Er ist ein hervorragender Dichter.|Nomen
誠実|誠実[せいじつ]|Aufrichtigkeit, redlich|彼[かれ]はとても 誠実[せいじつ]な 人[ひと]です。|Er ist ein sehr aufrichtiger Mensch.|な-Adjektiv
盛ん|盛[さか]ん|blühend, rege|その 都市[とし]は 商業[しょうぎょう]が 盛[さか]んよ。|In dieser Stadt blüht der Handel.|Adjektiv
謙遜|謙遜[けんそん]|Bescheidenheit|そんなに 謙遜[けんそん]しなくてもいい。|Du brauchst nicht so bescheiden zu sein.|Nomen (mit する)
兼ねる|兼[か]ねる|zugleich sein, verbinden|彼女[かのじょ]は 秘書[ひしょ]と 事務[じむ]の 担当[たんとう]を 兼[か]ねています。|Sie ist zugleich Sekretärin und für die Büroarbeit zuständig.|Verb
あだな|あだな|Spitzname|彼[かれ]のあだなは「りき」です。|Sein Spitzname ist „Riki“.|Nomen
鋭い|鋭[するど]い|scharf, spitz|鋭[するど]い 刃物[はもの]で 指[ゆび]を 怪我[けが]した。|Ich habe mich an einem scharfen Messer am Finger verletzt.|Adjektiv
鎖|鎖[くさり]|Kette|犬[いぬ]を 鎖[くさり]でつなぎました。|Ich habe den Hund an die Kette gelegt.|Nomen
鑑賞|鑑賞[かんしょう]|Kunstgenuss, Betrachtung (von Kunst)|今夜[こんや]はオペラ 鑑賞[かんしょう]に 行[い]きます。|Heute Abend gehe ich in die Oper.|Nomen (mit する)
印鑑|印鑑[いんかん]|Namensstempel, Siegel|ここに 受[う]け 取[と]りの 印鑑[いんかん]をお 願[ねが]いします。|Stempeln Sie hier bitte den Empfang ab.|Nomen
鐘|鐘[かね]|Glocke|この 鐘[かね]の 音[ね]はとてもきれいですね。|Der Klang dieser Glocke ist sehr schön.|Nomen
寿命|寿命[じゅみょう]|Lebensdauer|亀[かめ]の 寿命[じゅみょう]は 長[なが]いんだ。|Schildkröten leben lange.|Nomen
海水浴|海水浴[かいすいよく]|Baden im Meer|夏休[なつやす]みには 海水浴[かいすいよく]に 行[い]きます。|In den Sommerferien gehe ich im Meer baden.|Nomen (mit する)
あふれる|あふれる|überlaufen, überquellen|バスタブからお 湯[ゆ]があふれました。|Das heiße Wasser ist aus der Badewanne übergelaufen.|Verb
沿岸|沿岸[えんがん]|Küste, Küstengebiet|今日[きょう]は 沿岸[えんがん]の 波[なみ]が 荒[あら]いでしょう。|Heute ist an der Küste mit hohem Wellengang zu rechnen.|Nomen
砂浜|砂浜[すなはま]|Sandstrand|朝早[あさ はや]く 砂浜[すなはま]を 散歩[さんぽ]しました。|Ich bin frühmorgens am Strand spazieren gegangen.|Nomen
沖|沖[おき]|offene See, vor der Küste|沖[おき]に 小島[こじま]が 見[み]えます。|Vor der Küste ist eine kleine Insel zu sehen.|Nomen
泉|泉[いずみ]|Quelle|森[もり]の 中[なか]にきれいな 泉[いずみ]があるの。|Im Wald gibt es eine schöne Quelle.|Nomen
温泉|温泉[おんせん]|heiße Quelle, Thermalbad|ここの 温泉[おんせん]はよく 効[き]くそうです。|Die heiße Quelle hier soll sehr wohltuend sein.|Nomen
澄む|澄[す]む|klar werden, rein sein|山[やま]の 空気[くうき]は 澄[す]んでいますね。|Die Bergluft ist klar.|Verb
叫び|叫[さけ]び|Schrei, Aufschrei|彼女[かのじょ]の 心[こころ]の 叫[さけ]びに 誰[だれ]も 気付[きづ]かなかったよ。|Niemand hat den Schrei ihres Herzens bemerkt.|Nomen
いか|いか|Tintenfisch|私[わたし]はイカの 刺[さ]し 身[み]が 大好[だいす]きです。|Ich liebe Tintenfisch-Sashimi.|Nomen
叫ぶ|叫[さけ]ぶ|schreien, rufen|彼女[かのじょ]は 助[たす]けを 求[もと]めて 大声[おおごえ]で 叫[さけ]んだの。|Sie schrie laut um Hilfe.|Verb
喫煙|喫煙[きつえん]|Rauchen|ここでは 喫煙[きつえん]できません。|Hier darf nicht geraucht werden.|Nomen (mit する)
懸ける|懸[か]ける|aufs Spiel setzen, einsetzen|彼[かれ]は 仕事[しごと]に 命[いのち]を 懸[か]けているの。|Er setzt für seine Arbeit sein Leben ein.|Verb
恩|恩[おん]|Dankesschuld, Güte|このご 恩[おん]は 一生忘[いっしょう わす]れません。|Diese Güte werde ich mein Leben lang nicht vergessen.|Nomen
市街|市街[しがい]|Stadtgebiet, Straßen der Stadt|夕方[ゆうがた]の 市街[しがい]は 車[くるま]が 渋滞[じゅうたい]するよ。|Am frühen Abend staut sich in der Stadt der Verkehr.|Nomen
粉|粉[こな]|Pulver, Mehl|その 白[しろ]い 粉[こな]は 赤[あか]ちゃんのミルクです。|Das weiße Pulver ist Babymilch.|Nomen
小麦|小麦[こむぎ]|Weizen|小麦[こむぎ]は 色々[いろいろ]な 食[た]べ 物[もの]に 使[つか]われている。|Weizen wird für viele Lebensmittel verwendet.|Nomen
小麦粉|小麦粉[こむぎこ]|Weizenmehl|うどんは 小麦粉[こむぎこ]から 作[つく]られます。|Udon werden aus Weizenmehl gemacht.|Nomen
いつのまに|いつのまに|wann eigentlich, unbemerkt|彼[かれ]はいつのまにいなくなったの。|Wann ist er denn verschwunden?|Adverb
大麦|大麦[おおむぎ]|Gerste|大麦[おおむぎ]はビールの 原料[げんりょう]になります。|Gerste ist ein Rohstoff für Bier.|Nomen
炊事|炊事[すいじ]|Kochen, Küchenarbeit|うちでは 夫[おっと]も 炊事[すいじ]をします。|Bei uns kocht auch mein Mann.|Nomen (mit する)
暦|暦[こよみ]|Kalender|暦[こよみ]の 上[うえ]では 今日[きょう]から 冬[ふゆ]ですね。|Dem Kalender nach ist ab heute Winter.|Nomen
皮|皮[かわ]|Haut, Schale, Leder|りんごの 皮[かわ]をむきましたよ。|Ich habe einen Apfel geschält.|Nomen
毛皮|毛皮[けがわ]|Pelz, Fell|彼女[かのじょ]は 毛皮[けがわ]のコートを 着[き]ていたの。|Sie trug einen Pelzmantel.|Nomen
毛糸|毛糸[けいと]|Wolle, Wollgarn|彼女[かのじょ]は 毛糸[けいと]のセーターを 編[あ]みました。|Sie hat einen Wollpullover gestrickt.|Nomen
尾|尾[お]|Schwanz|尾[お]の 長[なが]い 鳥[とり]が 飛[と]んでいますね。|Da fliegt ein Vogel mit langem Schwanz.|Nomen
インフレーション|インフレーション|Inflation|市場[しじょう]にはインフレーションの 影響[えいきょう]が 出[で]ているね。|Auf dem Markt zeigen sich die Folgen der Inflation.|Nomen
白髪|白髪[しらが]|weißes Haar, graues Haar|祖父[そふ]は 白髪[しらが]が 少[すく]ないほうです。|Mein Großvater hat eher wenig graue Haare.|Nomen
耳鼻科|耳鼻科[じびか]|HNO (Hals-Nasen-Ohren-Heilkunde)|今[いま]、 耳鼻科[じびか]にかかっています。|Ich bin zurzeit beim HNO-Arzt in Behandlung.|Nomen
唇|唇[くちびる]|Lippe|寒[さむ]くて 唇[くちびる]が 青[あお]くなってしまった。|Vor Kälte sind meine Lippen blau geworden.|Nomen
解釈|解釈[かいしゃく]|Auslegung, Interpretation|この 詩[し]を 解釈[かいしゃく]してみましょう。|Versuchen wir, dieses Gedicht zu interpretieren.|Nomen (mit する)
居間|居間[いま]|Wohnzimmer|父[ちち]は 居間[いま]でテレビを 見[み]ている。|Mein Vater sieht im Wohnzimmer fern.|Nomen
居る|居[お]る|da sein (bescheiden)|母[はは]は 今[いま]、うちに 居[お]りません。|Meine Mutter ist gerade nicht zu Hause.|Verb
一層|一層[いっそう]|noch mehr, umso mehr|雨[あめ]が 一層[いっそう] 激[はげ]しくなったね。|Der Regen ist noch stärker geworden.|Adverb
ウィークエンド|ウィークエンド|Wochenende|今度[こんど]のウィークエンドは 映画[えいが]を 見[み]ます。|Am kommenden Wochenende sehe ich mir einen Film an.|Nomen
高層|高層[こうそう]|Hochhaus-; hohe Luftschicht|このあたりは 高層[こうそう]ビルが 増[ふ]えましたね。|In dieser Gegend gibt es immer mehr Hochhäuser.|Nomen
覆う|覆[おお]う|bedecken, verhüllen|雲[くも]が 空[そら]を 覆[おお]っているね。|Wolken bedecken den Himmel.|Verb
戸籍|戸籍[こせき]|Familienregister|結婚[けっこん]すると 新[あたら]しい 戸籍[こせき]が 作[つく]られます。|Bei der Heirat wird ein neues Familienregister angelegt.|Nomen
ガラス戸|ガラス 戸[ど]|Glastür|お 店[みせ]のガラス 戸[ど]が 割[わ]られたんだ。|Die Glastür des Ladens wurde eingeschlagen.|Nomen
新鮮|新鮮[しんせん]|frisch|この 店[みせ]では 新鮮[しんせん]な 野菜[やさい]が 買[か]えますよ。|In diesem Laden bekommt man frisches Gemüse.|Adjektiv
鮮やか|鮮[あざ]やか|leuchtend, lebhaft (Farbe)|山[やま]は 鮮[あざ]やかな 緑[みどり]でした。|Die Berge waren leuchtend grün.|Adjektiv
群集|群集[ぐんしゅう]|Menschenmenge|数百人[すうひゃくにん]の 群集[ぐんしゅう]が 集[あつ]まっているの。|Eine Menge von mehreren hundert Menschen hat sich versammelt.|Nomen (mit する)
郡|郡[ぐん]|Landkreis|この 郡[ぐん]は 来年[らいねん]、 市[し]になりますよ。|Dieser Landkreis wird nächstes Jahr zur Stadt.|Nomen
うがい|うがい|Gurgeln|冬[ふゆ]はまめにうがいをします。|Im Winter gurgle ich regelmäßig.|Nomen (mit する)
君|君[きみ]|du (unter Männern, zu Jüngeren)|この 本[ほん]を 君[きみ]にあげます。|Dieses Buch schenke ich dir.|Nomen
脂|脂[あぶら]|Fett (tierisch)|この 肉[にく]は 脂[あぶら]が 多[おお]い。|Dieses Fleisch ist fett.|Nomen
脂肪|脂肪[しぼう]|Fett, Fettgewebe|お 腹[なか]の 脂肪[しぼう]を 取[と]りたい。|Ich möchte das Fett am Bauch loswerden.|Nomen
胃腸|胃腸[いちょう]|Magen und Darm|彼[かれ]は 胃腸[いちょう]が 強[つよ]くありません。|Sein Magen-Darm-Trakt ist nicht robust.|Nomen
肝心|肝心[かんじん]|entscheidend, wesentlich|何事[なにごと]も 最初[さいしょ]が 肝心[かんじん]だ。|Bei allem ist der Anfang entscheidend.|な-Adjektiv
山脈|山脈[さんみゃく]|Gebirge, Gebirgskette|列車[れっしゃ]の 窓[まど]から 雄大[ゆうだい]な 山脈[さんみゃく]が 見[み]えたんだよ。|Aus dem Zugfenster war ein mächtiges Gebirge zu sehen.|Nomen
暮らす|暮[く]らす|leben, seinen Alltag verbringen|将来[しょうらい]は 海[うみ]の 近[ちか]くで 暮[く]らしたいな。|Später möchte ich in der Nähe des Meeres leben.|Verb
うきうき|うきうき|beschwingt, in freudiger Erwartung|もうすぐ 夏休[なつやす]みなのでうきうきしています。|Bald sind Sommerferien, ich bin ganz aufgekratzt.|Adverb
暮らし|暮[く]らし|Leben, Lebensunterhalt|彼女[かのじょ]は 毎日[まいにち]の 暮[く]らしを 楽[たの]しんでいますね。|Sie genießt ihren Alltag.|Nomen
暮れ|暮[く]れ|Jahresende; Abenddämmerung|暮[く]れは 用事[ようじ]が 多[おお]くて 忙[いそが]しいです。|Am Jahresende habe ich viel zu erledigen.|Nomen
暮れる|暮[く]れる|dunkel werden, zu Ende gehen|日[ひ]が 暮[く]れる 前[まえ]に 帰[かえ]りましょう。|Gehen wir nach Hause, bevor es dunkel wird.|Verb
お歳暮|お 歳暮[せいぼ]|Geschenk zum Jahresende|デパートでお 歳暮[せいぼ]を 送[おく]りました。|Ich habe im Kaufhaus Jahresendgeschenke verschickt.|Nomen
芝生|芝生[しばふ]|Rasen|芝生[しばふ]がよく 手入[てい]れされていますね。|Der Rasen ist gut gepflegt.|Nomen
茎|茎[くき]|Stängel|チューリップは 茎[くき]が 長[なが]いです。|Tulpen haben lange Stängel.|Nomen
推薦|推薦[すいせん]|Empfehlung|彼[かれ]は 会長[かいちょう]に 推薦[すいせん]されたよ。|Er wurde für den Vorsitz vorgeschlagen.|Nomen (mit する)
うつむく|うつむく|den Kopf senken, zu Boden blicken|彼[かれ]はうつむいて 何[なに]かを 考[かんが]えているね。|Er hält den Kopf gesenkt und denkt über etwas nach.|Verb
荒れる|荒[あ]れる|stürmisch sein, verwildern|台風[たいふう]で 山[やま]も 海[うみ]も 荒[あ]れています。|Wegen des Taifuns toben Berge und Meer.|Verb
荒い|荒[あら]い|wild, unbeherrscht; verschwenderisch|彼[かれ]は 金遣[かねづか]いが 荒[あら]いな。|Er wirft mit Geld um sich.|Adjektiv
荒い|荒[あら]い|rau, grob, heftig|うちの 犬[いぬ]は 気[き]が 荒[あら]い。|Unser Hund ist ungestüm.|Adjektiv
荒す|荒[あら]す|verwüsten, durchwühlen|彼[かれ]は 強盗[ごうとう]に 家[いえ]の 中[なか]を 荒[あら]されたの。|Sein Haus wurde von Einbrechern durchwühlt.|Verb
慌ただしい|慌[あわ]ただしい|hektisch, geschäftig|今日[きょう]は 慌[あわ]ただしい 一日[いちにち]でした。|Heute war ein hektischer Tag.|Adjektiv
慌てる|慌[あわ]てる|in Hast geraten, die Fassung verlieren|そんなに 慌[あわ]ててどこに 行[い]くの。|Wohin willst du so eilig?|Verb
儀式|儀式[ぎしき]|Zeremonie, Ritual|儀式[ぎしき]には 作法[さほう]があります。|Zeremonien haben ihre Regeln.|Nomen
うなずく|うなずく|nicken|彼女[かのじょ]はうなずいて 同意[どうい]を 示[しめ]したの。|Sie nickte zustimmend.|Verb
行儀|行儀[ぎょうぎ]|Manieren, Benehmen|この 子[こ]は 本当[ほんとう]に 行儀[ぎょうぎ]の 良[い]い 子[こ]です。|Dieses Kind hat wirklich gute Manieren.|Nomen
犠牲|犠牲[ぎせい]|Opfer|多[おお]くの 人[ひと]が 災害[さいがい]の 犠牲[ぎせい]になったの。|Viele Menschen sind der Katastrophe zum Opfer gefallen.|Nomen
赤ん坊|赤[あか]ん 坊[ぼう]|Baby, Säugling|その 頃彼[ころ かれ]はまだ 赤[あか]ん 坊[ぼう]だったよね。|Damals war er noch ein Baby.|Nomen
お坊さん|お 坊[ぼう]さん|buddhistischer Mönch|お 寺[てら]からお 坊[ぼう]さんが 出[で]て 来[き]ましたよ。|Aus dem Tempel kam ein Mönch heraus.|Nomen
国旗|国旗[こっき]|Nationalflagge|日本[にほん]の 国旗[こっき]は 描[か]くのが 簡単[かんたん]です。|Die japanische Flagge ist einfach zu zeichnen.|Nomen
筋肉|筋肉[きんにく]|Muskel|彼[かれ]は 最近[さいきん] 筋肉[きんにく]を 鍛[きた]えているよ。|Er trainiert in letzter Zeit seine Muskeln.|Nomen
筋道|筋道[すじみち]|Logik, roter Faden|筋道[すじみち]を 立[た]てて 考[かんが]えなさい。|Denk folgerichtig.|Nomen
筋|筋[すじ]|Sehne, Muskel; Handlungsstrang|転[ころ]んで 筋[すじ]を 痛[いた]めてしまいました。|Ich bin gestürzt und habe mir eine Sehne gezerrt.|Nomen
おだてる|おだてる|schmeicheln, Honig ums Maul schmieren|彼[かれ]は 人[ひと]をおだてるのが 上手[じょうず]です。|Er versteht es, anderen zu schmeicheln.|Verb
裂ける|裂[さ]ける|reißen, aufplatzen|釘[くぎ]に 引[ひ]っかけて 袖[そで]が 裂[さ]けてしまったな。|Ich bin an einem Nagel hängen geblieben und der Ärmel ist gerissen.|Verb
座布団|座布団[ざぶとん]|Sitzkissen|この 座布団[ざぶとん]は 座[すわ]り 心地[ごこち]がいいね。|Auf diesem Sitzkissen sitzt man bequem.|Nomen
自己|自己[じこ]|das Selbst, selbst|これからは 自己[じこ]の 判断[はんだん]で 行動[こうどう]してください。|Handeln Sie von nun an bitte nach eigenem Ermessen.|Nomen
抱える|抱[かか]える|in den Armen tragen; haben (Probleme)|彼[かれ]は 大[おお]きな 荷物[にもつ]を 抱[かか]えているわ。|Er trägt ein großes Gepäckstück im Arm.|Verb
抱く|抱[いだ]く|umarmen; hegen (Gefühl, Ziel)|少年[しょうねん]よ 大志[たいし]を 抱[いだ]け。|Jungen, habt große Ziele!|Verb
句|句[く]|Phrase, Satzglied; Vers|この 句[く]はどんな 意味[いみ]でしょうか。|Was bedeutet diese Wendung?|Nomen
慣用句|慣用句[かんようく]|Redewendung|「 手[て]が 空[す]く」は 慣用句[かんようく]です。|„Te ga aku“ ist eine Redewendung.|Nomen
かかと|かかと|Ferse; Absatz|靴[くつ]のかかとで 彼[かれ]の 足[あし]を 踏[ふ]んでしまったの。|Ich bin ihm mit dem Absatz auf den Fuß getreten.|Nomen
下旬|下旬[げじゅん]|letztes Monatsdrittel|この 仕事[しごと]は 来月[らいげつ]の 下旬[げじゅん]には 終[お]わります。|Diese Arbeit wird Ende nächsten Monats fertig.|Nomen
上旬|上旬[じょうじゅん]|erstes Monatsdrittel|7月[しちがつ] 上旬[じょうじゅん]に 夏祭[なつまつ]りがありますよ。|Anfang Juli gibt es ein Sommerfest.|Nomen
飽きる|飽[あ]きる|überdrüssig werden, genug haben|その 子[こ]はおもちゃに 飽[あ]きたようだね。|Das Kind scheint das Spielzeug satt zu haben.|Verb
飾り|飾[かざ]り|Schmuck, Dekoration|この 部屋[へや]は 飾[かざ]りが 多[おお]すぎるな。|Dieses Zimmer hat zu viel Dekoration.|Nomen
餌|餌[えさ]|Futter, Köder|毎日金魚[まいにち きんぎょ]に 餌[えさ]をやります。|Ich füttere jeden Tag die Goldfische.|Nomen
旧|旧[きゅう]|alt, ehemalig|旧[きゅう]ソビエトは 今[いま]はロシアと 呼[よ]ばれている。|Die ehemalige Sowjetunion heißt heute Russland.|Nomen
育児|育児[いくじ]|Kinderbetreuung, Kindererziehung|彼女[かのじょ]は 育児[いくじ]で 忙[いそが]しいよ。|Sie ist mit den Kindern beschäftigt.|Nomen
がさがさ|がさがさ|raschelnd; rau, trocken|玄関[げんかん]でがさがさと 音[おと]がしましたよ。|Am Eingang hat es geraschelt.|Adverb
小児科|小児科[しょうにか]|Kinderheilkunde, Kinderarzt|子供[こども]を 小児科[しょうにか]に 連[つ]れて 行[い]くところです。|Ich bringe mein Kind gerade zum Kinderarzt.|Nomen
姓名|姓名[せいめい]|voller Name|あなたの 姓名[せいめい]を 教[おし]えてください。|Nennen Sie mir bitte Ihren vollen Namen.|Nomen
姓|姓[せい]|Familienname|結婚[けっこん]して 姓[せい]が 変[か]わりました。|Durch die Heirat hat sich mein Familienname geändert.|Nomen
幼い|幼[おさな]い|klein, jung; kindlich|彼女[かのじょ]には 幼[おさな]い 息子[むすこ]がいます。|Sie hat einen kleinen Sohn.|Adjektiv
眼科|眼科[がんか]|Augenheilkunde, Augenarzt|眼科[がんか]で 視力検査[しりょく けんさ]をしました。|Ich habe beim Augenarzt einen Sehtest gemacht.|Nomen
近眼|近眼[きんがん]|Kurzsichtigkeit|彼女[かのじょ]は 近眼[きんがん]です。|Sie ist kurzsichtig.|Nomen
居眠り|居眠[いねむ]り|Einnicken, Nickerchen|彼[かれ]はソファーで 居眠[いねむ]りをしているよ。|Er ist auf dem Sofa eingenickt.|Nomen (mit する)
一瞬|一瞬[いっしゅん]|ein Augenblick|一瞬[いっしゅん] 自分[じぶん]の 耳[みみ]を 疑[うたが]ったよ。|Einen Augenblick lang traute ich meinen Ohren nicht.|Nomen
かじる|かじる|knabbern, anbeißen|弟[おとうと]は 美味[おい]しそうにりんごをかじっていたよ。|Mein kleiner Bruder biss genüsslich in einen Apfel.|Verb
瞬間|瞬間[しゅんかん]|Augenblick, Moment|その 瞬間[しゅんかん]、 猫[ねこ]が 跳[と]び 出[だ]しました。|In dem Moment sprang die Katze hervor.|Nomen
睡眠|睡眠[すいみん]|Schlaf|1日7時間[いちにち しちじかん]は 睡眠[すいみん]を 取[と]るようにしています。|Ich achte darauf, täglich sieben Stunden zu schlafen.|Nomen (mit する)
垂直|垂直[すいちょく]|senkrecht, vertikal|彼[かれ]らは 垂直[すいちょく]のがけを 登[のぼ]り 始[はじ]めたの。|Sie begannen, eine senkrechte Felswand hinaufzuklettern.|な-Adjektiv
心掛ける|心掛[こころが]ける|beherzigen, sich bemühen um|安全運転[あんぜん うんてん]を 心掛[こころが]けてください。|Bemühen Sie sich bitte um sicheres Fahren.|Verb
腰掛ける|腰掛[こしか]ける|sich hinsetzen|私[わたし]はベンチに 腰掛[こしか]けたの。|Ich habe mich auf die Bank gesetzt.|Verb
追い掛ける|追[お]い 掛[か]ける|hinterherlaufen, verfolgen|パトカーがバイクを 追[お]いかけてるぞ。|Ein Streifenwagen verfolgt ein Motorrad.|Verb
腰掛け|腰掛[こしか]け|Hocker, Sitzgelegenheit|腰掛[こしか]けはありませんか。|Gibt es hier keine Sitzgelegenheit?|Nomen
がぶがぶ|がぶがぶ|gluckernd, in großen Schlucken|彼[かれ]は 水[みず]をがぶがぶ 飲[の]んだんだ。|Er hat das Wasser hinuntergestürzt.|Adverb
お目に掛かる|お 目[め]に 掛[か]かる|treffen (bescheiden)|お 目[め]に 掛[か]かれて 嬉[うれ]しいです。|Ich freue mich, Sie kennenzulernen.|Verb
拝む|拝[おが]む|anbeten, verehren|仏像[ぶつぞう]に 手[て]を 合[あ]わせて 拝[おが]みました。|Wir falteten die Hände und beteten vor der Buddhastatue.|Verb
括弧|括弧[かっこ]|Klammer|括弧[かっこ]の 部分[ぶぶん]は 省略[しょうりゃく]できます。|Den Teil in Klammern kann man weglassen.|Nomen (mit する)
指揮|指揮[しき]|Leitung, Dirigieren, Kommando|彼[かれ]がそのプロジェクトの 指揮[しき]を 取[と]ったの。|Er hat die Leitung dieses Projekts übernommen.|Nomen (mit する)
輝く|輝[かがや]く|strahlen, glänzen|彼女[かのじょ]の 瞳[ひとみ]は 喜[よろこ]びで 輝[かがや]いていますね。|Ihre Augen strahlen vor Freude.|Verb
抑える|抑[おさ]える|unterdrücken, zurückhalten|彼[かれ]は 怒[いか]りを 抑[おさ]えていたの。|Er hat seinen Zorn unterdrückt.|Verb
信仰|信仰[しんこう]|Glaube|信仰[しんこう]は 心[こころ]の 支[ささ]えです。|Der Glaube ist eine Stütze für die Seele.|Nomen (mit する)
からす|からす|Krähe, Rabe|木[き]の 上[うえ]でからすが 鳴[な]いています。|Auf dem Baum krächzt eine Krähe.|Nomen
偶然|偶然[ぐうぜん]|Zufall, zufällig|街[まち]で 偶然[ぐうぜん] 友人[ゆうじん]に 会[あ]いました。|Ich habe in der Stadt zufällig einen Freund getroffen.|な-Adjektiv
偶数|偶数[ぐうすう]|gerade Zahl|偶数[ぐうすう]は 2[に]で 割[わ]り 切[き]れます。|Gerade Zahlen sind durch zwei teilbar.|Nomen
隅|隅[すみ]|Ecke, Winkel|部屋[へや]の 隅[すみ]にいすが 積[つ]んであったの。|In der Zimmerecke waren Stühle gestapelt.|Nomen
城|城[しろ]|Burg, Schloss|今回[こんかい]の 旅行[りょこう]ではヨーロッパの 城[しろ]を 見[み]て 回[まわ]ります。|Auf dieser Reise sehe ich mir Schlösser in Europa an.|Nomen
栽培|栽培[さいばい]|Anbau, Zucht (Pflanzen)|この 地方[ちほう]ではみかんの 栽培[さいばい]が 盛[さか]んです。|In dieser Gegend werden viele Mandarinen angebaut.|Nomen (mit する)
警戒|警戒[けいかい]|Wachsamkeit, Vorsicht|地震[じしん]のあとは 津波[つなみ]に 警戒[けいかい]してください。|Achten Sie nach einem Erdbeben auf Tsunamis.|Nomen (mit する)
幾ら|幾[いく]ら|wie sehr auch, egal wie viel|幾[いく]ら 呼[よ]んでも 彼[かれ]は 返事[へんじ]をしなかったわ。|Sosehr ich auch rief, er antwortete nicht.|Adverb
伺う|伺[うかが]う|fragen, hören, besuchen (bescheiden)|お 話[はな]しを 伺[うかが]いたいのですが。|Ich würde gern Ihre Geschichte hören.|Verb
がん|がん|Krebs (Krankheit)|祖父[そふ]はがんで 亡[な]くなりました。|Mein Großvater ist an Krebs gestorben.|Nomen
後悔|後悔[こうかい]|Reue, Bedauern|後悔[こうかい]しても、しょうがない。|Es nützt nichts, es zu bereuen.|Nomen (mit する)
悔しい|悔[くや]しい|ärgerlich, frustrierend|試合[しあい]に 負[ま]けてとても 悔[くや]しい。|Ich ärgere mich sehr, dass wir das Spiel verloren haben.|Adjektiv
俺|俺[おれ]|ich (rau, männlich)|俺[おれ]の 頼[たの]みを 聞[き]いてくれ。|Tu mir einen Gefallen.|Nomen
相撲|相撲[すもう]|Sumo (japanisches Ringen)|お 相撲[すもう]さんは、みんな 力[ちから] 持[も]ちだ。|Sumoringer sind alle sehr kräftig.|Nomen
偏る|偏[かたよ]る|einseitig sein, unausgewogen sein|栄養[えいよう]が 偏[かたよ]らないように 食事[しょくじ]に 気[き]を 付[つ]けています。|Ich achte beim Essen darauf, dass die Ernährung nicht einseitig wird.|Verb
一遍に|一遍[いっぺん]に|auf einmal, zugleich|春[はる]は 一遍[いっぺん]に 花[はな]が 咲[さ]く。|Im Frühling blühen die Blumen alle auf einmal.|Adverb
宗教|宗教[しゅうきょう]|Religion|宗教[しゅうきょう]を 持[も]たない 人[ひと]もたくさんいるわ。|Es gibt auch viele Menschen ohne Religion.|Nomen
ぎっしり|ぎっしり|dicht gepackt, vollgestopft|この 箱[はこ]にはぎっしり 物[もの]が 詰[つ]まっています。|Diese Kiste ist randvoll mit Sachen.|Adverb
審議|審議[しんぎ]|Beratung, Erörterung|その 問題[もんだい]は 審議[しんぎ] 中[ちゅう]です。|Das Problem wird gerade beraten.|Nomen (mit する)
憲法|憲法[けんぽう]|Verfassung|憲法[けんぽう]を 改正[かいせい]することは 難[むずか]しいわね。|Die Verfassung zu ändern ist schwierig.|Nomen
衰える|衰[おとろ]える|schwächer werden, nachlassen|年[とし]と 共[とも]に 体力[たいりょく]が 衰[おとろ]えています。|Mit dem Alter lässt die Körperkraft nach.|Verb
惜しむ|惜[お]しむ|bedauern; geizen mit|私[わたし]たちはみな 彼[かれ]の 死[し]を 惜[お]しんだの。|Wir alle haben seinen Tod betrauert.|Verb
惜しい|惜[お]しい|schade, knapp daneben|惜[お]しい、もう 少[すこ]しで 優勝[ゆうしょう]だった。|Schade, fast hätten wir gewonnen.|Adjektiv
恨み|恨[うら]み|Groll, Hass|彼女[かのじょ]は 長年[ながねん]の 恨[うら]みを 晴[は]らした。|Sie hat ihren langjährigen Groll gestillt.|Nomen
恨む|恨[うら]む|grollen, übel nehmen|彼[かれ]を 恨[うら]んではいけません。|Du darfst ihm nicht böse sein.|Verb
ぎゅうぎゅう|ぎゅうぎゅう|dicht gedrängt, vollgequetscht|電車[でんしゃ]がぎゅうぎゅうに 込[こ]んでいますね。|Der Zug ist gestopft voll.|Adverb
覚悟|覚悟[かくご]|Bereitschaft, innere Vorbereitung|覚悟[かくご]はできています。|Ich bin darauf gefasst.|Nomen
怪しい|怪[あや]しい|verdächtig, zweifelhaft|その 男[おとこ]の 行動[こうどう]は 怪[あや]しかったわ。|Das Verhalten des Mannes war verdächtig.|Adjektiv
怪しむ|怪[あや]しむ|Verdacht schöpfen, misstrauen|警察[けいさつ]はそのグループを 怪[あや]しんでいます。|Die Polizei hat die Gruppe im Verdacht.|Verb
自慢|自慢[じまん]|Stolz, Prahlen|彼女[かのじょ]はよく 自分[じぶん]の 成績[せいせき]を 自慢[じまん]するよね。|Sie gibt oft mit ihren Noten an.|Nomen (mit する)
食卓|食卓[しょくたく]|Esstisch|食卓[しょくたく]に 花[はな]を 飾[かざ]りましょう。|Schmücken wir den Esstisch mit Blumen.|Nomen
歓迎|歓迎[かんげい]|Willkommen, Empfang|温[あたた]かい 歓迎[かんげい]を 受[う]けました。|Ich wurde herzlich empfangen.|Nomen (mit する)
勧める|勧[すす]める|empfehlen, raten|勧[すす]められて 欲[ほ]しくもないものを 買[か]っちゃったよ。|Auf Empfehlung habe ich etwas gekauft, das ich gar nicht wollte.|Verb
ぎょうざ|ぎょうざ|Gyōza (gefüllte Teigtaschen)|ここのぎょうざは 美味[おい]しいよ。|Die Gyōza hier sind lecker.|Nomen
焦点|焦点[しょうてん]|Brennpunkt, Fokus|焦点[しょうてん]を 絞[しぼ]って 話[はな]しましょう。|Konzentrieren wir uns im Gespräch auf das Wesentliche.|Nomen
焦る|焦[あせ]る|ungeduldig werden, in Hast geraten|何[なに]をそんなに 焦[あせ]っているのですか。|Warum bist du so in Eile?|Verb
焦げる|焦[こ]げる|anbrennen|シチューが 焦[こ]げたよー。|Der Eintopf ist angebrannt!|Verb
英雄|英雄[えいゆう]|Held(in)|彼[かれ]は 国[くに]の 英雄[えいゆう]ですね。|Er ist ein Nationalheld.|Nomen
雄|雄[おす]|Männchen (Tier)|うちの 猫[ねこ]は 雄[おす]です。|Unsere Katze ist ein Kater.|Nomen
獲得|獲得[かくとく]|Erwerb, Gewinn|その 選手[せんしゅ]の 獲得[かくとく] 賞金[しょうきん]は 2億円[におくえん]だって。|Das Preisgeld dieses Spielers soll 200 Millionen Yen betragen.|Nomen (mit する)
収穫|収穫[しゅうかく]|Ernte|お 米[こめ]の 収穫[しゅうかく]が 始[はじ]まったね。|Die Reisernte hat begonnen.|Nomen (mit する)
稲|稲[いね]|Reispflanze|日本[にっぽん]は 稲[いね]の 品種[ひんしゅ]が 多[おお]いよ。|In Japan gibt es viele Reissorten.|Nomen
きれ|きれ|Stoffstück, Stoffrest|余[あま]ったきれで 人形[にんぎょう]を 作[つく]りましょう。|Machen wir aus den Stoffresten eine Puppe.|Nomen
稼ぐ|稼[かせ]ぐ|verdienen (Geld)|彼[かれ]はお 金[かね]をだいぶ 稼[かせ]いだらしいよ。|Er soll ziemlich viel Geld verdient haben.|Verb
原稿用紙|原稿用紙[げんこうようし]|Manuskriptpapier (mit Kästchen)|作文[さくぶん]を 書[か]くのに 原稿用紙[げんこうようし]を 使[つか]ったの。|Für den Aufsatz habe ich Manuskriptpapier benutzt.|Nomen
穏やか|穏[おだ]やか|ruhig, friedlich, mild|彼[かれ]らは 穏[おだ]やかな 暮[く]らしをしているの。|Sie führen ein ruhiges Leben.|Adjektiv
隠す|隠[かく]す|verstecken, verbergen|僕[ぼく]に 隠[かく]していることは 無[な]いですか。|Verheimlichst du mir auch nichts?|Verb
お陰|お 陰[かげ]|Dank, dank (jemandem)|先生[せんせい]のお 陰[かげ]で 大学[だいがく]に 合格[ごうかく]できました。|Dank meines Lehrers habe ich die Aufnahmeprüfung der Universität bestanden.|Nomen
陰|陰[かげ]|Schatten; im Verborgenen|陰[かげ]で 少[すこ]し 休憩[きゅうけい]しましょう。|Ruhen wir uns kurz im Schatten aus.|Nomen
塊|塊[かたまり]|Klumpen, Brocken|道[みち]に 土[つち]の 塊[かたまり]ができてたよ。|Auf dem Weg lag ein Erdklumpen.|Nomen
くすぐる|くすぐる|kitzeln|弟[おとうと]に 足[あし]の 裏[うら]をくすぐられた。|Mein kleiner Bruder hat mich an der Fußsohle gekitzelt.|Verb
卑しい|卑[いや]しい|gierig, niedrig, gemein|彼[かれ]は 金[かね]に 卑[いや]しいね。|Er ist geldgierig.|Adjektiv
砕く|砕[くだ]く|zerkleinern, zerschlagen|氷[こおり]を 細[こま]かく 砕[くだ]いてください。|Zerstoßen Sie bitte das Eis fein.|Verb
砕ける|砕[くだ]ける|zerbrechen, zersplittern|石[いし]が 粉々[こなごな]に 砕[くだ]けましたね。|Der Stein ist in Stücke zersprungen.|Verb
基礎|基礎[きそ]|Grundlage, Fundament|今[いま]ドイツ 語[ご]の 基礎[きそ]を 学[まな]んでいます。|Ich lerne gerade die Grundlagen des Deutschen.|Nomen
貝|貝[かい]|Muschel|浜辺[はまべ]できれいな 貝[かい]を 拾[ひろ]いました。|Ich habe am Strand eine schöne Muschel gefunden.|Nomen
賢い|賢[かしこ]い|klug, gescheit|彼[かれ]は 冷静[れいせい]で 賢[かしこ]い 男[おとこ]だね。|Er ist ein besonnener, kluger Mann.|Adjektiv
頻りに|頻[しき]りに|häufig, unablässig|彼[かれ]は 頻[しき]りに 時計[とけい]を 気[き]にしていた。|Er sah ständig auf die Uhr.|Adverb
げらげら|げらげら|schallend, laut (lachen)|彼女[かのじょ]はいつまでもげらげら 笑[わら]っていたな。|Sie hat ewig laut gelacht.|Adverb
頑固|頑固[がんこ]|stur, eigensinnig|なんて 頑固[がんこ]な 子[こ]だ。|Was für ein stures Kind!|な-Adjektiv
頂く|頂[いただ]く|bekommen; essen (bescheiden)|お 客様[きゃくさま]にお 菓子[かし]を 頂[いただ]いた。|Ich habe von einem Kunden Süßigkeiten bekommen.|Verb
一斉に|一斉[いっせい]に|gleichzeitig, alle auf einmal|彼[かれ]らは 一斉[いっせい]に 拍手[はくしゅ]したね。|Sie klatschten alle gleichzeitig.|Adverb
洗剤|洗剤[せんざい]|Waschmittel, Reinigungsmittel|床[ゆか]に 洗剤[せんざい]をこぼしてしまいました。|Ich habe Reinigungsmittel auf den Boden verschüttet.|Nomen
真剣|真剣[しんけん]|ernst, ernsthaft|彼[かれ]は 真剣[しんけん]に 話[はなし]を 聞[き]いていました。|Er hörte ernsthaft zu.|Adjektiv
刑務所|刑務所[けいむしょ]|Gefängnis|彼[かれ]は 二度[にど]と 刑務所[けいむしょ]から 出[で]ることができないの。|Er kommt nie wieder aus dem Gefängnis.|Nomen
刑事|刑事[けいじ]|Kriminalbeamter, Kommissar(in)|刑事[けいじ]が 現場[げんば]を 調[しら]べているわ。|Der Kommissar untersucht den Tatort.|Nomen
強烈|強烈[きょうれつ]|heftig, intensiv|彼女[かのじょ]は 強烈[きょうれつ]な 個性[こせい]の 持[も]ち 主[ぬし]ですよ。|Sie hat eine sehr starke Persönlichkeit.|Adjektiv
ゴールデンウィーク|ゴールデンウィーク|Goldene Woche (Feiertagswoche Anfang Mai)|ゴールデンウィークに 海外旅行[かいがい りょこう]をします。|In der Goldenen Woche reise ich ins Ausland.|Nomen
獣|獣[けもの]|wildes Tier, Bestie|彼[かれ]は 獣[けもの]のような 目[め]をしていたな。|Er hatte Augen wie ein wildes Tier.|Nomen
駆ける|駆[か]ける|rennen, galoppieren|子供[こども]たちは 広場[ひろば]に 駆[か]けて 行[い]ったわよ。|Die Kinder sind auf den Platz gerannt.|Verb
駆け足|駆[か]け 足[あし]|Laufschritt|駅[えき]まで 駆[か]け 足[あし]で 行[い]ったよ。|Ich bin im Laufschritt zum Bahnhof.|Nomen (mit する)
丘|丘[おか]|Hügel|丘[おか]の 上[うえ]にホテルが 建[た]ちましたね。|Oben auf dem Hügel wurde ein Hotel gebaut.|Nomen
官庁|官庁[かんちょう]|Behörde, Amt|その 古[ふる]い 建物[たてもの]は 官庁[かんちょう]です。|Das alte Gebäude dort ist eine Behörde.|Nomen
県庁|県庁[けんちょう]|Präfekturverwaltung|あの 白[しろ]い 建物[たてもの]が 県庁[けんちょう]です。|Das weiße Gebäude dort ist die Präfekturverwaltung.|Nomen
擦る|擦[こす]る|reiben|冷[ひ]えた 手[て]を 擦[こす]って 温[あたた]めた。|Ich habe meine kalten Hände aneinandergerieben und gewärmt.|Verb
こたつ|こたつ|Kotatsu (beheizter Tisch mit Decke)|寒[さむ]いのでこたつを 出[だ]しました。|Es ist kalt, deshalb haben wir den Kotatsu aufgestellt.|Nomen
汗|汗[あせ]|Schweiß|彼[かれ]は 額[ひたい]に 汗[あせ]をかいていたの。|Er hatte Schweiß auf der Stirn.|Nomen
軸|軸[じく]|Achse|この 線[せん]を 軸[じく]にして 図形[ずけい]を 回転[かいてん]してください。|Drehen Sie die Figur bitte um diese Linie als Achse.|Nomen
後輩|後輩[こうはい]|Jüngere(r) (in Schule, Firma)|彼[かれ]は 大学[だいがく]の 後輩[こうはい]です。|Er war an der Universität ein Jahrgang unter mir.|Nomen
香り|香[かお]り|Duft|この 花[はな]はいい 香[かお]りがしますね。|Diese Blume duftet gut.|Nomen
香水|香水[こうすい]|Parfüm|香水[こうすい]のいい 香[かお]りがした。|Es duftete angenehm nach Parfüm.|Nomen
合唱|合唱[がっしょう]|Chor, Chorgesang|私[わたし]たちは 校歌[こうか]を 合唱[がっしょう]したの。|Wir haben im Chor die Schulhymne gesungen.|Nomen (mit する)
結晶|結晶[けっしょう]|Kristall, Kristallisation|雪[ゆき]の 結晶[けっしょう]にはいろいろな 形[かたち]があります。|Schneekristalle haben vielerlei Formen.|Nomen (mit する)
ことわざ|ことわざ|Sprichwort|日本[にほん]のことわざをいくつくらい 知[し]っていますか。|Wie viele japanische Sprichwörter kennst du ungefähr?|Nomen
敬う|敬[うやま]う|ehren, achten|両親[りょうしん]を 敬[うやま]うことは 大切[たいせつ]です。|Es ist wichtig, seine Eltern zu ehren.|Verb
座敷|座敷[ざしき]|Tatami-Zimmer, Gästezimmer (japanisch)|明日[あした]はお 座敷[ざしき]での 宴会[えんかい]になります。|Das Bankett morgen findet in einem Tatami-Zimmer statt.|Nomen
敷金|敷金[しききん]|Kaution|マンションの 敷金[しききん]を 払[はら]いました。|Ich habe die Kaution für die Wohnung bezahlt.|Nomen
劣る|劣[おと]る|unterlegen sein, schlechter sein|私[わたし]は 体力[たいりょく]では 誰[だれ]にも 劣[おと]りません。|An Körperkraft stehe ich niemandem nach.|Verb
勘定|勘定[かんじょう]|Rechnung, Bezahlung|お 勘定[かんじょう]をして 下[くだ]さい。|Die Rechnung, bitte.|Nomen (mit する)
勘|勘[かん]|Intuition, Gespür|女[おんな]の 勘[かん]を 甘[あま]く 見[み]てはいけません。|Man darf die Intuition einer Frau nicht unterschätzen.|Nomen
勘違い|勘違[かんちが]い|Missverständnis, Irrtum|待[ま]ち 合[あ]わせは 2時[にじ]だと 勘違[かんちが]いしていました。|Ich hatte irrtümlich gedacht, das Treffen sei um zwei.|Nomen (mit する)
霧|霧[きり]|Nebel|霧[きり]の 深[ふか]い 夜[よる]のことでした。|Es geschah in einer Nacht mit dichtem Nebel.|Nomen
これから|これから|von jetzt an, künftig|これからはもっと 気[き]を 付[つ]けます。|Ich werde von jetzt an besser aufpassen.|Nomen
霜|霜[しも]|Raureif, Frost|今朝[けさ]は 庭[にわ]の 草[くさ]に 霜[しも]が 降[お]りていたの。|Heute Morgen lag Raureif auf dem Gras im Garten.|Nomen
公衆|公衆[こうしゅう]|Öffentlichkeit|彼[かれ]は 公衆[こうしゅう] 電話[でんわ]を 探[さが]したの。|Er suchte eine öffentliche Telefonzelle.|Nomen
衆議院|衆議院[しゅうぎいん]|Unterhaus (des japanischen Parlaments)|予算案[よさんあん]が 衆議院[しゅうぎいん]を 通過[つうか]したな。|Der Haushaltsentwurf hat das Unterhaus passiert.|Nomen
観衆|観衆[かんしゅう]|Zuschauer, Publikum|スタジアムは 観衆[かんしゅう]で 満員[まんいん]だったよ。|Das Stadion war voller Zuschauer.|Nomen
群衆|群衆[ぐんしゅう]|Menschenmenge|彼[かれ]はマイクで 群衆[ぐんしゅう]に 話[はな]しかけたんだ。|Er sprach über ein Mikrofon zur Menge.|Nomen
暑中見舞い|暑中見舞[しょちゅうみま]い|Sommergruß (Karte in der heißen Zeit)|先生[せんせい]に 暑中見舞[しょちゅうみま]いを 出[だ]しました。|Ich habe meinem Lehrer eine Sommergrußkarte geschickt.|Nomen
お仕舞い|お 仕舞[しま]い|Schluss, Ende|話[はなし]はこれでお 仕舞[しま]いです。|Damit ist die Geschichte zu Ende.|Nomen
さす|さす|eingießen, einträufeln; ölen|自転車[じてんしゃ]に 油[あぶら]をさしたの。|Ich habe das Fahrrad geölt.|Verb
金銭|金銭[きんせん]|Geld|金銭[きんせん]のトラブルには 関[かか]わりたくありません。|Mit Geldstreitigkeiten möchte ich nichts zu tun haben.|Nomen
児童|児童[じどう]|Kind, Schulkind|ここは 児童[じどう]の 通学路[つうがくろ]です。|Das hier ist ein Schulweg für Kinder.|Nomen
埋める|埋[う]める|vergraben, zuschütten|庭[にわ]に 穴[あな]を 掘[ほ]ってそれを 埋[う]めました。|Ich habe im Garten ein Loch gegraben und es darin vergraben.|Verb
埋める|埋[うず]める|füllen, ausfüllen|パレードと 観衆[かんしゅう]が 道[みち]を 埋[うず]めていたよ。|Der Umzug und die Zuschauer füllten die Straße.|Verb
墨|墨[すみ]|Tusche|服[ふく]に 墨[すみ]がついちゃった。|An meine Kleidung ist Tusche gekommen.|Nomen
講堂|講堂[こうどう]|Aula, Hörsaal|全員[ぜんいん]、 講堂[こうどう]に 集[あつ]まってください。|Bitte versammeln Sie sich alle in der Aula.|Nomen
奨学金|奨学金[しょうがくきん]|Stipendium|彼女[かのじょ]は 奨学金[しょうがくきん]で 大学[だいがく]に 行[い]きました。|Sie hat mit einem Stipendium studiert.|Nomen
ＪＲ|ＪＲ[じぇいあーる]|JR (Japan Railways)|私[わたし]は 通勤[つうきん]に JR[じぇいあーる]を 使[つか]うんだ。|Ich fahre mit JR zur Arbeit.|Nomen
狂う|狂[くる]う|verrückt werden; falsch gehen|この 時計[とけい]はすぐ 狂[くる]うの。|Diese Uhr geht schnell falsch.|Verb
猿|猿[さる]|Affe|山[やま]で 猿[さる]の 親子[おやこ]を 見[み]ました。|Ich habe in den Bergen eine Affenmutter mit ihrem Jungen gesehen.|Nomen
地獄|地獄[じごく]|Hölle|地震[じしん]の 後[あと]、 街[まち]は 地獄[じごく]のようだったよ。|Nach dem Erdbeben war die Stadt wie die Hölle.|Nomen
章|章[しょう]|Kapitel|この 本[ほん]の 第6[だいろく] 章[しょう]が 特[とく]に 好[す]きです。|Mir gefällt besonders Kapitel 6 dieses Buches.|Nomen
頑丈|頑丈[がんじょう]|robust, stabil|錠[じょう]を 頑丈[がんじょう]なものに 替[か]えました。|Ich habe das Schloss gegen ein stabileres getauscht.|な-Adjektiv
親戚|親戚[しんせき]|Verwandte(r)|祖父[そふ]の 家[いえ]に 親戚[しんせき]が 集[あつ]まったんだ。|Im Haus meines Großvaters hat sich die Verwandtschaft versammelt.|Nomen
祈る|祈[いの]る|beten, wünschen|皆[みんな]が 人質[ひとじち]の 無事[ぶじ]を 祈[いの]っているわよ。|Alle beten für die Unversehrtheit der Geiseln.|Verb
しびれる|しびれる|taub werden, einschlafen (Glieder)|足[あし]がしびれた。|Mein Fuß ist eingeschlafen.|Verb
祈り|祈[いの]り|Gebet|その 日[ひ]、 国民[こくみん]は 平和[へいわ]への 祈[いの]りを 捧[ささ]げるの。|An diesem Tag betet das Volk für den Frieden.|Nomen
襟|襟[えり]|Kragen|襟[えり]の 大[おお]きいコートを 買[か]いました。|Ich habe einen Mantel mit großem Kragen gekauft.|Nomen
先祖|先祖[せんぞ]|Vorfahren, Ahnen|神道[しんとう]では 先祖[せんぞ]を 大切[たいせつ]にします。|Im Shintō werden die Ahnen geehrt.|Nomen
粗筋|粗筋[あらすじ]|Handlung, Inhaltsangabe|その 映画[えいが]はどんな 粗筋[あらすじ]ですか。|Wovon handelt der Film?|Nomen
酢|酢[す]|Essig|お 酢[す]を 入[い]れすぎて 酸[す]っぱい。|Ich habe zu viel Essig genommen, es ist sauer.|Nomen
郊外|郊外[こうがい]|Vorort, Stadtrand|私[わたし]は 郊外[こうがい]に 家[いえ]を 買[か]いました。|Ich habe ein Haus am Stadtrand gekauft.|Nomen
近郊|近郊[きんこう]|Umland, nähere Umgebung (einer Stadt)|彼[かれ]らは 東京[とうきょう] 近郊[きんこう]に 住[す]んでいる。|Sie wohnen im Umland von Tokio.|Nomen
邪魔|邪魔[じゃま]|Störung, Hindernis|邪魔[じゃま]です、どいてください。|Du stehst im Weg, geh bitte zur Seite.|Nomen (mit する)
じゃぶじゃぶ|じゃぶじゃぶ|platschend, mit viel Wasser|彼[かれ]は 顔[かお]をじゃぶじゃぶ 洗[あら]ったの。|Er hat sich das Gesicht mit viel Wasser gewaschen.|Adverb
お年玉|お 年玉[としだま]|Neujahrsgeld (für Kinder)|甥[おい]と 姪[めい]にお 年玉[としだま]をあげたの。|Ich habe meinem Neffen und meiner Nichte Neujahrsgeld gegeben.|Nomen
改善|改善[かいぜん]|Verbesserung|彼[かれ]は 食生活[しょくせいかつ]を 改善[かいぜん]しました。|Er hat seine Essgewohnheiten verbessert.|Nomen (mit する)
親善|親善[しんぜん]|Freundschaft, gute Beziehungen|これからも 両国[りょうこく]の 親善[しんぜん]を 深[ふか]めましょう。|Vertiefen wir auch künftig die Freundschaft unserer beiden Länder.|Nomen
網|網[あみ]|Netz|少年[しょうねん]は 網[あみ]でその 蝶[ちょう]を 捕[つか]まえた。|Der Junge fing den Schmetterling mit einem Netz.|Nomen
縛る|縛[しば]る|binden, fesseln|古新聞[ふるしんぶん]をひもで 縛[しば]ったよ。|Ich habe die alten Zeitungen mit einer Schnur zusammengebunden.|Verb
絞る|絞[しぼ]る|auswringen, auspressen; eingrenzen|布[ぬの]をもっと 固[かた]く 絞[しぼ]りなさい。|Wring das Tuch fester aus.|Verb
紺|紺[こん]|Dunkelblau, Marineblau|日本[にほん]の 制服[せいふく]は 紺[こん]が 多[おお]いね。|Japanische Schuluniformen sind oft dunkelblau.|Nomen
じゃんじゃん|じゃんじゃん|ununterbrochen, in rauen Mengen|電話[でんわ]がじゃんじゃん 掛[か]かってきたな。|Das Telefon klingelte ununterbrochen.|Adverb
紅葉|紅葉[こうよう]|Herbstlaub, Herbstfärbung|この 山[やま]は 紅葉[こうよう]がとても 美[うつく]しい。|Das Herbstlaub an diesem Berg ist sehr schön.|Nomen (mit する)
口紅|口紅[くちべに]|Lippenstift|赤[あか]い 口紅[くちべに]を 買[か]いました。|Ich habe einen roten Lippenstift gekauft.|Nomen
梅|梅[うめ]|Pflaume (Ume), Pflaumenblüte|梅[うめ]の 花[はな]が 咲[さ]きました。|Die Pflaumenblüten sind aufgegangen.|Nomen
梅干|梅干[うめぼし]|eingelegte Salzpflaume (Umeboshi)|うちでは、 朝食[ちょうしょく]には 必[かなら]ず 梅干[うめぼし]が 出[で]ます。|Bei uns gibt es zum Frühstück immer Umeboshi.|Nomen
巣|巣[す]|Nest, Bau|アリは 土[つち]の 中[なか]に 巣[す]を 作[つく]ります。|Ameisen bauen ihre Nester in der Erde.|Nomen
囲碁|囲碁[いご]|Go (Brettspiel)|彼[かれ]の 趣味[しゅみ]は 囲碁[いご]です。|Sein Hobby ist Go.|Nomen
嘘つき|嘘[うそ]つき|Lügner(in)|嘘[うそ]つきは 泥棒[どろぼう]の 始[はじ]まりよ。|Mit dem Lügen fängt der Dieb an.|Nomen
しわ|しわ|Falte, Runzel|スカートにしわがよっているよ。|Dein Rock ist zerknittert.|Nomen
考慮|考慮[こうりょ]|Berücksichtigung, Erwägung|あなたの 事情[じじょう]を 考慮[こうりょ]して 予定[よてい]をたてました。|Wir haben den Plan unter Berücksichtigung Ihrer Lage erstellt.|Nomen (mit する)
癖|癖[くせ]|Angewohnheit, Eigenart|爪[つめ]をかむ 癖[くせ]は 直[なお]した 方[ほう]がいい。|Die Angewohnheit, Nägel zu kauen, solltest du ablegen.|Nomen
下痢|下痢[げり]|Durchfall|古[ふる]いお 寿司[すし]を 食[た]べて 下痢[げり]をしてしまったんだ。|Ich habe altes Sushi gegessen und Durchfall bekommen.|Nomen (mit する)
崖|崖[がけ]|Klippe, Steilhang|大雨[おおあめ]で 崖[がけ]が 崩[くず]れたんだ。|Durch den starken Regen ist der Hang abgerutscht.|Nomen
嵐|嵐[あらし]|Sturm|嵐[あらし]で 庭[にわ]の 木[き]が 折[お]れたよ。|Im Sturm ist der Baum im Garten abgeknickt.|Nomen
海峡|海峡[かいきょう]|Meerenge|その 海峡[かいきょう]に 橋[はし]が 掛[か]けられました。|Über diese Meerenge wurde eine Brücke gebaut.|Nomen
噂|噂[うわさ]|Gerücht, Klatsch|その 噂[うわさ]は 本当[ほんとう]ですか。|Stimmt das Gerücht?|Nomen (mit する)
田舎|田舎[いなか]|Land, Provinz; Heimatort|私[わたし]は 毎年夏[まいとし なつ]に 田舎[いなか]に 帰[かえ]ります。|Ich fahre jeden Sommer in meinen Heimatort auf dem Land.|Nomen
ずるがしこい|ずるがしこい|gerissen, verschlagen|あいつはずるがしこい 顔[かお]をしているね。|Der Kerl hat ein verschlagenes Gesicht.|Adjektiv
校舎|校舎[こうしゃ]|Schulgebäude|古[ふる]い 校舎[こうしゃ]の 修理[しゅうり]が 必要[ひつよう]です。|Das alte Schulgebäude muss renoviert werden.|Nomen
お嬢さん|お 嬢[じょう]さん|junge Dame; (Ihre) Tochter|彼[かれ]はお 嬢[じょう]さんと 一緒[いっしょ]でした。|Er war mit seiner Tochter zusammen.|Nomen
娯楽|娯楽[ごらく]|Unterhaltung, Vergnügen|テレビは 彼[かれ]のいちばんの 娯楽[ごらく]です。|Fernsehen ist sein größtes Vergnügen.|Nomen
生涯|生涯[しょうがい]|das ganze Leben, Lebenszeit|彼[かれ]は 80年[はちじゅうねん]の 生涯[しょうがい]を 閉[と]じました。|Er hat sein achtzigjähriges Leben beschlossen.|Nomen
汽車|汽車[きしゃ]|Zug (Dampfzug, Fernzug)|汽車[きしゃ]で 街[まち]まで 行[い]った。|Ich bin mit dem Zug in die Stadt gefahren.|Nomen
賭ける|賭[か]ける|wetten, einsetzen|彼[かれ]は 新[あたら]しい 仕事[しごと]に 人生[じんせい]を 賭[か]けている。|Er setzt bei der neuen Arbeit alles auf eine Karte.|Verb
蛍光灯|蛍光灯[けいこうとう]|Leuchtstoffröhre|古[ふる]い 蛍光灯[けいこうとう]を 取[と]り 替[か]えてください。|Wechseln Sie bitte die alte Leuchtstoffröhre aus.|Nomen
せいぜい|せいぜい|höchstens, bestenfalls|どんなに 頑張[がんば]っても、せいぜい 3位[さんい]くらいにしかなれないだろうな。|Sosehr ich mich auch anstrenge, es reicht wohl bestenfalls für den dritten Platz.|Adverb
車掌|車掌[しゃしょう]|Schaffner(in)|車掌[しゃしょう]さんが 車内[しゃない]を 回[まわ]って 来[き]たよ。|Der Schaffner ging durch den Wagen.|Nomen
芋|芋[いも]|Kartoffel, Knolle|お 芋[いも]の 料理[りょうり]はお 好[す]きですか。|Mögen Sie Kartoffelgerichte?|Nomen
菊|菊[きく]|Chrysantheme|菊[きく]の 花[はな]を 買[か]ってきました。|Ich habe Chrysanthemen gekauft.|Nomen
軽蔑|軽蔑[けいべつ]|Verachtung|彼女[かのじょ]は 彼[かれ]を 軽蔑[けいべつ]していたの。|Sie hat ihn verachtet.|Nomen (mit する)
揚げる|揚[あ]げる|frittieren|彼女[かのじょ]は 夕食[ゆうしょく]に 天[てん]ぷらを 揚[あ]げました。|Sie hat zum Abendessen Tempura frittiert.|Verb
諦める|諦[あきら]める|aufgeben|彼[かれ]は 留学[りゅうがく]の 夢[ゆめ]を 諦[あきら]めていないよ。|Er hat seinen Traum vom Auslandsstudium nicht aufgegeben.|Verb
演奏|演奏[えんそう]|Musikdarbietung, Spiel|彼女[かのじょ]のピアノの 演奏[えんそう]は 素晴[すば]らしいね。|Ihr Klavierspiel ist großartig.|Nomen (mit する)
ぜいたく|ぜいたく|Luxus, Verschwendung|彼女[かのじょ]は 一生[いっしょう]ぜいたくに 暮[く]らしたんだ。|Sie hat ihr ganzes Leben im Luxus gelebt.|Nomen (mit する)
窮屈|窮屈[きゅうくつ]|eng, beengt|この 服[ふく]は 窮屈[きゅうくつ]になったな。|Diese Kleidung ist mir zu eng geworden.|Adjektiv
貨幣|貨幣[かへい]|Geld, Währung, Münze|博物館[はくぶつかん]で 昔[むかし]の 貨幣[かへい]を 見[み]ました。|Ich habe im Museum altes Geld gesehen.|Nomen
真珠|真珠[しんじゅ]|Perle|母[はは]に 真珠[しんじゅ]のネックレスをもらいました。|Ich habe von meiner Mutter eine Perlenkette bekommen.|Nomen
故郷|故郷[こきょう]|Heimat, Geburtsort|彼女[かのじょ]は 久[ひさ]しぶりに 故郷[こきょう]に 帰[かえ]りました。|Sie ist nach langer Zeit in ihre Heimat zurückgekehrt.|Nomen
花瓶|花瓶[かびん]|Blumenvase|クリスタルガラスの 花瓶[かびん]を 買[か]いました。|Ich habe eine Vase aus Kristallglas gekauft.|Nomen
一旦|一旦[いったん]|einmal, erst einmal|疲[つか]れたでしょう、 一旦[いったん] 休[やす]みましょう。|Du bist sicher müde, machen wir erst einmal Pause.|Adverb
乞食|乞食[こじき]|Bettler(in)|乞食[こじき]が 公園[こうえん]のベンチで 寝[ね]ている。|Auf der Parkbank schläft ein Bettler.|Nomen
亀|亀[かめ]|Schildkröte|この 池[いけ]には 亀[かめ]がいますね。|In diesem Teich gibt es Schildkröten.|Nomen
がくんと|がくんと|abrupt, schlagartig (abfallend)|今学期[こんがっき]は 成績[せいせき]ががくんと 落[お]ちてしまった。|Dieses Halbjahr sind meine Noten schlagartig abgesackt.|Adverb
羨ましい|羨[うらや]ましい|beneidenswert, neidisch|彼[かれ]の 才能[さいのう]は 羨[うらや]ましい 程[ほど]だね。|Um sein Talent könnte man ihn beneiden.|Adjektiv
漕ぐ|漕[こ]ぐ|rudern; in die Pedale treten|彼[かれ]らは 交代[こうたい]でボートを 漕[こ]いだんだ。|Sie haben das Boot abwechselnd gerudert.|Verb
稽古|稽古[けいこ]|Übung, Training (traditionelle Künste)|相撲[すもう]の 稽古[けいこ]はとても 厳[きび]しいよ。|Das Sumo-Training ist sehr hart.|Nomen (mit する)
歌舞伎|歌舞伎[かぶき]|Kabuki (traditionelles Theater)|歌舞伎[かぶき]の 芝居[しばい]を 見[み]に 行[い]きました。|Ich war in einer Kabuki-Vorstellung.|Nomen
囁く|囁[ささや]く|flüstern|「この 会議[かいぎ]は 退屈[たいくつ]だ」と 同僚[どうりょう]が 私[わたし]に 囁[ささや]いたの。|„Diese Besprechung ist langweilig“, flüsterte mir ein Kollege zu.|Verb
咳|咳[せき]|Husten|咳[せき]が 止[と]まらないので 病院[びょういん]に 行[い]ってきたの。|Mein Husten hörte nicht auf, deshalb war ich im Krankenhaus.|Nomen
噛み付く|噛[か]み 付[つ]く|zubeißen, sich festbeißen|犬[いぬ]が 手[て]に 噛[か]み 付[つ]きました。|Der Hund hat mich in die Hand gebissen.|Verb
きらりと|きらりと|aufblitzend, funkelnd|ダイヤモンドがきらりと 光[ひか]った。|Der Diamant blitzte auf.|Adverb
屑|屑[くず]|Abfall, Krümel, Fussel|彼[かれ]の 背広[せびろ]に 糸[いと] 屑[くず]がついているわ。|An seinem Anzug hängen Fusseln.|Nomen
紙屑|紙屑[かみくず]|Papierabfall|紙屑[かみくず]は 屑入[くず い]れに 入[い]れなさい。|Wirf Papierabfall in den Papierkorb.|Nomen
掻く|掻[か]く|kratzen|背中[せなか]をお 母[かあ]さんに 掻[か]いてもらったの。|Ich habe mir von meiner Mutter den Rücken kratzen lassen.|Verb
掻き回す|掻[か]き 回[まわ]す|umrühren; durcheinanderbringen|母[はは]は 鍋[なべ]のシチューを 掻[か]き 回[まわ]しているよ。|Meine Mutter rührt den Eintopf im Topf um.|Verb
憧れ|憧[あこが]れ|Sehnsucht, Schwärmerei|海外[かいがい]に 住[す]むのは 私[わたし]の 憧[あこが]れです。|Im Ausland zu leben ist mein Traum.|Nomen
憧れる|憧[あこが]れる|sich sehnen nach, schwärmen für|彼[かれ]はパイロットの 職[しょく]に 憧[あこが]れているんだ。|Er träumt vom Beruf des Piloten.|Verb
溺れる|溺[おぼ]れる|ertrinken|彼[かれ]は 溺[おぼ]れている 子[こ]を 助[たす]けたんだ。|Er hat ein ertrinkendes Kind gerettet.|Verb
ごくんと|ごくんと|mit einem Schluck|薬[くすり]をごくんと 飲[の]み 込[こ]んだんだ。|Ich habe die Medizin in einem Zug hinuntergeschluckt.|Adverb
御無沙汰|御無沙汰[ごぶさた]|langes Nichtmelden|長[なが]いこと 御無沙汰[ごぶさた]いたしました。|Ich habe lange nichts von mir hören lassen.|Nomen (mit する)
汲む|汲[く]む|schöpfen (Wasser)|小[ちい]さなバケツで 水[みず]を 汲[く]んだの。|Ich habe mit einem kleinen Eimer Wasser geschöpft.|Verb
苛め|苛[いじ]め|Mobbing, Schikane|学校[がっこう]での 苛[いじ]めはなかなか 減[へ]らない。|Das Mobbing an Schulen nimmt kaum ab.|Nomen
苛める|苛[いじ]める|quälen, schikanieren|動物[どうぶつ]を 苛[いじ]めてはいけません。|Man darf Tiere nicht quälen.|Verb
曖昧|曖昧[あいまい]|vage, unklar|彼女[かのじょ]は 曖昧[あいまい]な 返事[へんじ]をしたね。|Sie hat eine vage Antwort gegeben.|Adjektiv
大晦日|大晦日[おおみそか]|Silvester|日本[にっぽん]では、 大晦日[おおみそか]にそばを 食[た]べます。|In Japan isst man an Silvester Soba.|Nomen
臆病|臆病[おくびょう]|Feigheit, ängstlich|弟[おとうと]は 小[ちい]さい 頃[ころ]は 臆病[おくびょう]だったんだ。|Mein kleiner Bruder war als Kind ängstlich.|な-Adjektiv
車椅子|車椅子[くるまいす]|Rollstuhl|彼女[かのじょ]は 車椅子[くるまいす]に 乗[の]っています。|Sie sitzt im Rollstuhl.|Nomen
柿|柿[かき]|Kaki (Frucht, Baum)|庭[にわ]に 柿[かき]の 実[み]がなりました。|Im Garten trägt der Kakibaum Früchte.|Nomen
お詫び|お 詫[わ]び|Entschuldigung, Abbitte|誤解[ごかい]があったことをお 詫[わ]びします。|Ich entschuldige mich für das Missverständnis.|Nomen (mit する)
釘|釘[くぎ]|Nagel (Metallstift)|釘[くぎ]を 踏[ふ]んで 怪我[けが]をしました。|Ich bin auf einen Nagel getreten und habe mich verletzt.|Nomen
錆びる|錆[さ]びる|rosten|包丁[ほうちょう]が 錆[さ]びてしまった。|Das Küchenmesser ist verrostet.|Verb
爽やか|爽[さわ]やか|erfrischend, frisch|レモンの 爽[さわ]やかな 香[かお]りがした。|Es duftete frisch nach Zitrone.|Adjektiv
雀|雀[すずめ]|Spatz|朝[あさ]は 雀[すずめ]の 声[こえ]で 目[め]が 覚[さ]めます。|Morgens werde ich vom Zwitschern der Spatzen wach.|Nomen
甥|甥[おい]|Neffe|私[わたし]の 甥[おい]は 3才[さんさい]です。|Mein Neffe ist drei Jahre alt.|Nomen
嗅ぐ|嗅[か]ぐ|riechen an, schnuppern|犬[いぬ]がお 皿[さら]の 匂[にお]いをクンクン 嗅[か]いでいるね。|Der Hund schnuppert am Teller.|Verb
炒める|炒[いた]める|anbraten, pfannenrühren|次[つぎ]に、 野菜[やさい]を 炒[いた]めてください。|Braten Sie als Nächstes das Gemüse an.|Verb
一まず|一[ひと]まず|fürs Erste, zunächst einmal|一[ひと]まず 休憩[きゅうけい]しましょう。|Machen wir erst einmal eine Pause.|Adverb
万一|万一[まんいち]|für den Fall der Fälle, falls doch|万一[まんいち]のために 保険[ほけん]に 入[はい]ったの。|Ich habe für den Fall der Fälle eine Versicherung abgeschlossen.|Adverb
日ごろ|日[ひ]ごろ|gewöhnlich, im Alltag|彼女[かのじょ]には 日[ひ]ごろからお 世話[せわ]になっています。|Sie hilft mir im Alltag immer wieder.|Adverb
日ソ|日[にっ]ソ|japanisch-sowjetisch|当時[とうじ]、 日[にっ]ソ 会談[かいだん]が 開[ひら]かれた。|Damals fanden japanisch-sowjetische Gespräche statt.|Nomen
日|日[にち]|Japan (in Zusammensetzungen)|日[にち] 仏[ふつ]の 共同研究[きょうどう けんきゅう]が 始[はじ]まったな。|Eine gemeinsame japanisch-französische Forschung hat begonnen.|Nomen
データ|データ|Daten|去年[きょねん]のデータを 見[み]せてください。|Zeigen Sie mir bitte die Daten vom letzten Jahr.|Nomen
日時|日時[にちじ]|Datum und Uhrzeit|試写会[ししゃかい]の 日時[にちじ]を 教[おし]えてください。|Sagen Sie mir bitte Datum und Uhrzeit der Vorpremiere.|Nomen
日日|日日[ひにち]|Datum; Anzahl der Tage|ミーティングの 日日[ひにち]を 間違[まちが]えました。|Ich habe mich im Tag der Besprechung geirrt.|Nomen
日々|日々[ひび]|täglich, Tag für Tag|日々[ひび]の 努力[どりょく]が 大切[たいせつ]です。|Tägliche Anstrengung ist wichtig.|Nomen
三日月|三日月[みかづき]|Mondsichel|空[そら]に 三日月[みかづき]が 見[み]えました。|Am Himmel war die Mondsichel zu sehen.|Nomen
月日|月日[つきひ]|Zeit, die Monate und Tage|月日[つきひ]が 経[た]つのは 早[はや]いものです。|Wie schnell die Zeit vergeht.|Nomen
ただ|ただ|nur, bloß|私[わたし]はただ 彼女[かのじょ]と 話[はな]したかっただけです。|Ich wollte nur mit ihr reden.|Adverb
土|土[つち]|Erde, Boden|土[つち]を 掘[ほ]って 木[き]を 植[う]えました。|Ich habe die Erde aufgegraben und einen Baum gepflanzt.|Nomen
年月|年月[としつき]|Jahre, lange Zeit|あれから 長[なが]い 年月[としつき]が 経[た]ちました。|Seitdem ist eine lange Zeit vergangen.|Nomen
年月日|年月日[ねんがっぴ]|Datum (Jahr, Monat, Tag)|申請[しんせい]の 年月日[ねんがっぴ]を 西暦[せいれき]で 書[か]いてください。|Schreiben Sie das Antragsdatum bitte in westlicher Zeitrechnung.|Nomen
年月|年月[ねんげつ]|Jahre, lange Zeit|そのお 寺[てら]は 長[なが]い 年月[ねんげつ]をかけて 建[た]てられた。|Der Tempel wurde über viele Jahre hinweg erbaut.|Nomen
年々|年々[ねんねん]|von Jahr zu Jahr|東京[とうきょう]の 人口[じんこう]は 年々[ねんねん] 増[ふ]えています。|Die Bevölkerung Tokios wächst von Jahr zu Jahr.|Adverb
もっとも|もっとも|berechtigt, einleuchtend|彼[かれ]の 意見[いけん]はもっともです。|Seine Meinung ist völlig berechtigt.|Adjektiv
何か|何[なに]か|etwas, irgendetwas|何[なに]か 質問[しつもん]はありますか。|Gibt es irgendwelche Fragen?|Adverb
何とか|何[なん]とか|irgendwie, auf die eine oder andere Weise|何[なん]とかお 願[ねが]いします。|Ich bitte Sie, es irgendwie möglich zu machen.|Adverb
何より|何[なに]より|vor allem, das Allerbeste|ご 無事[ぶじ]で 何[なに]よりです。|Hauptsache, Sie sind wohlauf.|Nomen
何と|何[なん]と|was für ein; tatsächlich, man staune|何[なん]と 彼[かれ]らは 結婚[けっこん]したそうです。|Stell dir vor, die beiden sollen geheiratet haben.|Adverb
何となく|何[なん]となく|irgendwie, ohne bestimmten Grund|パーティーに 行[い]くのは 何[なん]となく 気[き]が 進[すす]まないな。|Irgendwie habe ich keine rechte Lust, auf die Party zu gehen.|Adverb
何だか|何[なん]だか|irgendwie|茶柱[ちゃばしら]が 立[た]って 何[なん]だか 少[すこ]し 幸[しあわ]せな 気分[きぶん]です。|Im Tee steht ein Teestängel aufrecht, irgendwie macht mich das ein bisschen glücklich.|Adverb
メーカー|メーカー|Hersteller|彼[かれ]は 靴[くつ]のメーカーで 働[はたら]いています。|Er arbeitet bei einem Schuhhersteller.|Nomen
何で|何[なん]で|warum, wieso|彼女[かのじょ]は 何[なん]で 来[こ]ないんだろう。|Warum sie wohl nicht kommt?|Adverb
何十|何十[なんじゅう]|mehrere Dutzend|その 店[みせ]に 何十[なんじゅう] 人[にん]も 行列[ぎょうれつ]していたよ。|Vor dem Laden standen Dutzende Leute an.|Nomen
何て|何[なん]て|was für ein, wie (Ausruf)|何[なん]てきれいな 人[ひと]なんだ。|Was für ein schöner Mensch!|Adverb
何しろ|何[なに]しろ|jedenfalls, wie dem auch sei|彼[かれ]は 何[なに]しろよくしゃべります。|Er redet jedenfalls sehr viel.|Adverb
何千|何千[なんぜん]|mehrere Tausend|新聞社[しんぶんしゃ]に 何千[なんぜん]ものメールが 寄[よ]せられたよ。|Beim Zeitungsverlag gingen Tausende E-Mails ein.|Nomen
レベル|レベル|Niveau, Stufe|自分[じぶん]のレベルに 合[あ]った 授業[じゅぎょう]を 選[えら]んでください。|Wählen Sie bitte einen Kurs, der Ihrem Niveau entspricht.|Nomen
何百|何百[なんびゃく]|mehrere Hundert|海[うみ]で 何百[なんびゃく]もの 美[うつく]しい 魚[さかな]を 見[み]ました。|Ich habe im Meer Hunderte schöner Fische gesehen.|Nomen
やって来る|やって 来[く]る|herkommen, daherkommen|フランスからサーカスがやって 来[き]ます。|Aus Frankreich kommt ein Zirkus.|Verb
来日|来日[らいにち]|Besuch in Japan, Ankunft in Japan|有名[ゆうめい]なバンドが 来日[らいにち]していますね。|Eine berühmte Band ist gerade in Japan.|Nomen (mit する)
日帰り|日帰[ひがえ]り|Tagesausflug|私[わたし]たちは 日帰[ひがえ]りで 京都[きょうと]に 行[い]きました。|Wir waren für einen Tag in Kyoto.|Nomen (mit する)
大して|大[たい]して|nicht besonders (mit Verneinung)|彼[かれ]は 大[たい]して 嬉[うれ]しそうには 見[み]えなかったよね。|Er sah nicht besonders erfreut aus.|Adverb
むしろ|むしろ|eher, vielmehr|彼[かれ]は 建築家[けんちくか]というよりむしろ 芸術家[げいじゅつか]ね。|Er ist eher Künstler als Architekt.|Adverb
大金|大金[たいきん]|große Geldsumme|このかばんには 大金[たいきん]が 入[はい]っています。|In dieser Tasche ist viel Geld.|Nomen
大|大[だい]|groß, Größe L|チーズケーキの 大[だい]を 一[ひと]つ 下[くだ]さい。|Einen großen Käsekuchen, bitte.|Nomen
日中|日中[にっちゅう]|tagsüber|日中[にっちゅう]はずっと 海[うみ]で 泳[およ]いでいました。|Tagsüber bin ich die ganze Zeit im Meer geschwommen.|Nomen
日中|日中[にっちゅう]|Japan und China, japanisch-chinesisch|日中[にっちゅう] 貿易[ぼうえき]は 急激[きゅうげき]に 伸[の]びているわね。|Der Handel zwischen Japan und China wächst rasant.|Nomen
中年|中年[ちゅうねん]|mittleres Alter|これは、 中年[ちゅうねん]の 男性[だんせい]によく 見[み]られる 症状[しょうじょう]です。|Das sind Symptome, die man bei Männern mittleren Alters häufig sieht.|Nomen
中|中[ちゅう]|Mitte, mittlere Größe|うちの 子[こ]の 身長[しんちょう]はクラスで 中[ちゅう]くらいです。|Mein Kind ist in der Klasse mittelgroß.|Nomen
ますます|ますます|immer mehr, zunehmend|状況[じょうきょう]はますます 悪[わる]くなったね。|Die Lage ist immer schlimmer geworden.|Adverb
年中|年中[ねんじゅう]|das ganze Jahr über|叔母[おば]は 年中[ねんじゅう] 旅行[りょこう]しています。|Meine Tante ist das ganze Jahr auf Reisen.|Adverb
大小|大小[だいしょう]|Größe (groß und klein)|応募作品[おうぼ さくひん]の 大小[だいしょう]は 問[と]いません。|Die Größe der eingereichten Werke spielt keine Rolle.|Nomen
多少|多少[たしょう]|ein wenig, etwas|このソフトには 多少[たしょう] 問題[もんだい]がある。|Diese Software hat einige Probleme.|Adverb
ぶら下がる|ぶら 下[さ]がる|herabhängen, baumeln|猿[さる]が 木[き]にぶら 下[さ]がってるな。|Ein Affe hängt am Baum.|Verb
ぶら下げる|ぶら 下[さ]げる|hängen lassen, baumeln lassen|彼[かれ]は 首[くび]にカメラをぶら 下[さ]げているね。|Er hat eine Kamera um den Hals hängen.|Verb
モデル|モデル|Modell, Vorbild|彼女[かのじょ]はこの 小説[しょうせつ]の 主人公[しゅじんこう]のモデルです。|Sie ist das Vorbild für die Hauptfigur dieses Romans.|Nomen
下|下[もと]|unter (Leitung, Einfluss)|私[わたし]はその 教授[きょうじゅ]の 下[もと]で 論文[ろんぶん]を 書[か]いたの。|Ich habe meine Arbeit bei diesem Professor geschrieben.|Nomen
やり方|やり 方[かた]|Vorgehensweise, Art etwas zu tun|仕事[しごと]のやり 方[かた]を 教[おし]えてください。|Zeigen Sie mir bitte, wie man die Arbeit macht.|Nomen
方々|方々[ほうぼう]|überall, an vielen Stellen|彼[かれ]の 連絡先[れんらくさき]を 方々[ほうぼう]に 問[と]い 合[あ]わせたんだ。|Ich habe überall nach seinen Kontaktdaten gefragt.|Nomen
行方|行方[ゆくえ]|Verbleib, Aufenthaltsort|彼[かれ]の 行方[ゆくえ]が 分[わ]かりません。|Ich weiß nicht, wo er abgeblieben ist.|Nomen
一人一人|一人一人[ひとりひとり]|jede(r) Einzelne|この 学校[がっこう]では 一人一人[ひとりひとり]の 生徒[せいと]を 大切[たいせつ]にしているの。|An dieser Schule ist jeder einzelne Schüler wichtig.|Nomen
もたらす|もたらす|bringen, herbeiführen|彼[かれ]はこの 国[くに]に 平和[へいわ]をもたらしたのよ。|Er hat diesem Land Frieden gebracht.|Verb
日の入り|日[ひ]の 入[い]り|Sonnenuntergang|今日[きょう]の 日[ひ]の 入[い]りは 午後6時[ごご 6 じ]でした。|Heute ging die Sonne um 18 Uhr unter.|Nomen
出入り|出入[でい]り|Ein- und Ausgehen|彼[かれ]の 家[いえ]は 人[ひと]の 出入[でい]りが 多[おお]いね。|In seinem Haus gehen viele Leute ein und aus.|Nomen (mit する)
出来上がる|出来上[できあ]がる|fertig werden|この 家[いえ]は 来年[らいねん] 出来上[できあ]がります。|Dieses Haus wird nächstes Jahr fertig.|Verb
人出|人出[ひとで]|Menschenandrang|今日[きょう]も 遊園地[ゆうえんち]は 大変[たいへん]な 人出[ひとで]だったよ。|Auch heute war im Freizeitpark enormer Andrang.|Nomen
日の出|日[ひ]の 出[で]|Sonnenaufgang|日[ひ]の 出[で]がとてもきれいですね。|Der Sonnenaufgang ist sehr schön.|Nomen
それぞれ|それぞれ|jeweils, jede(r) für sich|人[ひと]はそれぞれ 考[かんが]え 方[かた]が 違[ちが]います。|Jeder Mensch denkt anders.|Adverb
出来上がり|出来上[できあ]がり|Fertigstellung, Ergebnis|私[わたし]は 作品[さくひん]の 出来上[できあ]がりに 満足[まんぞく]しています。|Ich bin mit dem fertigen Werk zufrieden.|Nomen
出来るだけ|出来[でき]るだけ|möglichst, so … wie möglich|出来[でき]るだけ 早[はや]く 来[き]てください。|Kommen Sie bitte so früh wie möglich.|Adverb
外す|外[はず]す|abnehmen, entfernen|彼[かれ]はメガネを 外[はず]しました。|Er hat die Brille abgenommen.|Verb
外れる|外[はず]れる|abgehen, sich lösen; danebengehen|びんのふたが 外[はず]れません。|Der Deckel des Glases geht nicht ab.|Verb
外れ|外[はず]れ|Niete, Fehlschlag|このくじは 外[はず]れです。|Dieses Los ist eine Niete.|Nomen
その内|その 内[うち]|bald, demnächst|彼女[かのじょ]もその 内[うち]、 親[おや]の 気持[きも]ちが 分[わ]かるだろう。|Auch sie wird bald verstehen, wie Eltern fühlen.|Adverb
トップ|トップ|Spitze, Erste(r)|彼[かれ]はトップの 成績[せいせき]で 合格[ごうかく]しました。|Er hat mit dem besten Ergebnis bestanden.|Nomen
本来|本来[ほんらい]|ursprünglich, eigentlich|彼女[かのじょ]はプレッシャーから 解放[かいほう]されて 本来[ほんらい]の 自分[じぶん]に 戻[もど]ったな。|Vom Druck befreit, war sie wieder ganz sie selbst.|Adverb
本人|本人[ほんにん]|die Person selbst, der/die Betreffende|それは 本人[ほんにん]に 聞[き]いてください。|Fragen Sie das bitte die Person selbst.|Nomen
本年|本年[ほんねん]|dieses Jahr (förmlich)|会社[かいしゃ]の 本年[ほんねん]の 目標[もくひょう]が 発表[はっぴょう]されたよ。|Die Unternehmensziele für dieses Jahr wurden bekannt gegeben.|Nomen
本日|本日[ほんじつ]|heute (förmlich)|本日[ほんじつ]のランチはハンバーグでございます。|Das heutige Mittagsgericht ist Hacksteak.|Nomen
休める|休[やす]める|ausruhen lassen, schonen|疲[つか]れた 体[からだ]を 休[やす]めてください。|Gönnen Sie Ihrem müden Körper Ruhe.|Verb
ブーム|ブーム|Boom, Trend|最近[さいきん]、 日本[にほん]は 健康[けんこう]ブームです。|In letzter Zeit herrscht in Japan ein Gesundheitsboom.|Nomen
一休み|一休[ひとやす]み|kurze Pause|ここで 一休[ひとやす]みしましょう。|Machen wir hier eine kurze Pause.|Nomen (mit する)
大体|大体[だいたい]|im Großen und Ganzen; überhaupt|大体[だいたい]、 初[はじ]めから 無理[むり]な 計画[けいかく]だったのだ。|Das war überhaupt von Anfang an ein unrealistischer Plan.|Adverb
入力|入力[にゅうりょく]|Eingabe|彼女[かのじょ]の 仕事[しごと]はデータの 入力[にゅうりょく]です。|Ihre Arbeit ist die Dateneingabe.|Nomen (mit する)
体力|体力[たいりょく]|Körperkraft, Ausdauer|若者[わかもの]は 体力[たいりょく]がありますね。|Junge Leute haben Ausdauer.|Nomen
目上|目上[めうえ]|Höhergestellte, Ältere|彼[かれ]は 目上[めうえ]の 人[ひと]にとても 気[き]を 使[つか]います。|Er ist Höhergestellten gegenüber sehr aufmerksam.|Nomen
ようやく|ようやく|endlich, mit Mühe|ようやくゴールが 見[み]えてきました。|Endlich kam das Ziel in Sicht.|Adverb
目方|目方[めかた]|Gewicht|この 荷[に]の 目方[めかた]は70キロってとこかね。|Diese Ladung wiegt wohl etwa 70 Kilo.|Nomen
目下|目下[めした]|Untergebene, Jüngere|彼[かれ]は 目下[めした]の 者[もの]にも 優[やさ]しいんだ。|Er ist auch zu Rangniedrigeren freundlich.|Nomen
目下|目下[もっか]|zurzeit, im Augenblick|息子[むすこ]は 目下[もっか] 勉強中[べんきょうちゅう]です。|Mein Sohn lernt gerade.|Nomen
出入り口|出入[でい]り 口[ぐち]|Ein- und Ausgang|出入[でい]り 口[ぐち]に 車[くるま]を 停[と]めないでください。|Parken Sie bitte nicht vor dem Eingang.|Nomen
一口|一口[ひとくち]|ein Bissen, ein Schluck|彼[かれ]はおまんじゅうを 一口[ひとくち]で 食[た]べたの。|Er hat das Manjū mit einem Bissen gegessen.|Nomen
人手|人手[ひとで]|Arbeitskräfte, helfende Hände|人手[ひとで]が 足[た]りなくて 忙[いそが]しい。|Uns fehlen Leute, deshalb ist viel zu tun.|Nomen
チーム|チーム|Team, Mannschaft|彼[かれ]はチームの 一員[いちいん]です。|Er gehört zum Team.|Nomen
手入れ|手入[てい]れ|Pflege, Instandhaltung|母[はは]は 庭[にわ]の 手入[てい]れをしています。|Meine Mutter pflegt den Garten.|Nomen (mit する)
手本|手本[てほん]|Vorbild, Vorlage|手本[てほん]を 見[み]ながら 習字[しゅうじ]をしました。|Ich habe anhand einer Vorlage Schönschreiben geübt.|Nomen
手足|手足[てあし]|Hände und Füße, Gliedmaßen|あの 人[ひと]は 手足[てあし]が 長[なが]い。|Der dort hat lange Arme und Beine.|Nomen
田|田[た]|Reisfeld|今[いま]は 田[た]に 水[みず]を 入[い]れる 季節[きせつ]です。|Jetzt ist die Zeit, in der die Reisfelder geflutet werden.|Nomen
花火|花火[はなび]|Feuerwerk|昨日[きのう]、 花火[はなび]を 見[み]に 行[い]ったよ。|Gestern habe ich mir ein Feuerwerk angesehen.|Nomen
タイプ|タイプ|Typ, Art|同[おな]じタイプで 色[いろ]の 違[ちが]うものはありますか。|Gibt es denselben Typ in einer anderen Farbe?|Nomen
男女|男女[だんじょ]|Männer und Frauen|そのスポーツは 男女[だんじょ] 一緒[いっしょ]にします。|Diesen Sport betreiben Männer und Frauen gemeinsam.|Nomen
男子|男子[だんし]|Junge, junger Mann|男子[だんし]はこっちに 並[なら]んで。|Die Jungen stellen sich hier auf.|Nomen
私|私[わたくし]|ich (förmlich)|私[わたくし]は 北海道[ほっかいどう]の 出身[しゅっしん]です。|Ich stamme aus Hokkaidō.|Nomen
友人|友人[ゆうじん]|Freund(in)|彼[かれ]は 高校時代[こうこう じだい]からの 友人[ゆうじん]です。|Er ist ein Freund aus meiner Oberschulzeit.|Nomen
友|友[とも]|Freund, Gefährte|持[も]つべきものは 友[とも]よね。|Freunde sollte man haben.|Nomen
ビジネス|ビジネス|Geschäft, Business|彼[かれ]はビジネスクラスに 乗[の]ったの。|Er ist Businessclass geflogen.|Nomen
元|元[もと]|Ursprung; ehemalig|あの 人[ひと]は 卓球[たっきゅう]の 元[もと] 選手[せんしゅ]です。|Er ist ein ehemaliger Tischtennisspieler.|Nomen
手元|手元[てもと]|zur Hand, bei sich|説明書[せつめいしょ]は 手元[てもと]にありますか。|Haben Sie die Anleitung zur Hand?|Nomen
元々|元々[もともと]|ursprünglich, von Haus aus|彼女[かのじょ]は 元々[もともと]フランスに 行[い]くつもりだったの。|Sie hatte ursprünglich vor, nach Frankreich zu gehen.|Adverb
天|天[てん]|Himmel|天[てん]から 恵[めぐ]みの 雨[あめ]が 降[ふ]ったね。|Vom Himmel fiel ein segensreicher Regen.|Nomen
本気|本気[ほんき]|Ernst, ernst gemeint|いや、 僕[ぼく]は 本気[ほんき]なんだ。|Nein, ich meine es ernst.|な-Adjektiv
明日|明日[みょうにち]|morgen (förmlich)|明日[みょうにち]、 会議[かいぎ]を 開[ひら]きます。|Morgen halten wir eine Besprechung ab.|Nomen
ネットワーク|ネットワーク|Netzwerk|最近[さいきん]、 社内[しゃない]ネットワークの 調子[ちょうし]が 悪[わる]い。|In letzter Zeit läuft das Firmennetzwerk nicht gut.|Nomen
東西|東西[とうざい]|Ost und West|東西[とうざい]に 大[おお]きな 道路[どうろ]が 通[とお]っています。|Von Ost nach West verläuft eine große Straße.|Nomen
南西|南西[なんせい]|Südwesten|ここから 南西[なんせい]に 進[すす]むと 村[むら]があります。|Wenn man von hier nach Südwesten geht, kommt ein Dorf.|Nomen
南東|南東[なんとう]|Südosten|南東[なんとう]の 方角[ほうがく]に 月[つき]が 見[み]えるよ。|Im Südosten ist der Mond zu sehen.|Nomen
南北|南北[なんぼく]|Nord und Süd|南北[なんぼく]に 山[やま]が 広[ひろ]がっています。|Die Berge erstrecken sich von Norden nach Süden.|Nomen
北西|北西[ほくせい]|Nordwesten|台風[たいふう]は 北西[ほくせい]に 進[すす]んでいます。|Der Taifun zieht nach Nordwesten.|Nomen
やや|やや|ein wenig, etwas|この 服[ふく]、 私[わたし]にはやや 小[ちい]さいみたい。|Diese Kleidung scheint mir etwas zu klein zu sein.|Adverb
北東|北東[ほくとう]|Nordosten|町[まち]の 北東[ほくとう]に 山[やま]があります。|Im Nordosten der Stadt liegt ein Berg.|Nomen
向ける|向[む]ける|richten auf, wenden zu|彼[かれ]は 上司[じょうし]に 怒[いか]りの 目[め]を 向[む]けたんだよ。|Er warf seinem Vorgesetzten einen zornigen Blick zu.|Verb
向き|向[む]き|Richtung, Ausrichtung; geeignet für|花瓶[かびん]の 向[む]きを 変[か]えたの。|Ich habe die Vase anders herum gestellt.|Nomen
向かい|向[む]かい|gegenüber|向[む]かいの 席[せき]が 空[あ]いていますよ。|Der Platz gegenüber ist frei.|Nomen
入門|入門[にゅうもん]|Eintritt (als Schüler), Einführung|私[わたし]は 相撲部屋[すもう べや]に 入門[にゅうもん]しました。|Ich bin in einen Sumo-Stall eingetreten.|Nomen
デモ|デモ|Demonstration|彼女[かのじょ]はデモに 参加[さんか]したよ。|Sie hat an der Demonstration teilgenommen.|Nomen
門|門[もん]|Tor|8 時[じ]に 学校[がっこう]の 門[もん]が 開[ひら]きます。|Das Schultor öffnet um acht Uhr.|Nomen
開ける|開[ひら]ける|sich öffnen, sich weiten; sich entwickeln|霧[きり]が 晴[は]れて 視界[しかい]が 開[ひら]けたね。|Der Nebel hat sich gelichtet und die Sicht ist frei.|Verb
中間|中間[ちゅうかん]|Mitte, dazwischen|そのふたつの 町[まち]の 中間[ちゅうかん]には 川[かわ]が 流[なが]れているの。|Zwischen den beiden Städten fließt ein Fluss.|Nomen
手間|手間[てま]|Mühe, Aufwand|これはとても 手間[てま]のかかる 料理[りょうり]です。|Das ist ein sehr aufwendiges Gericht.|Nomen
間|間[ま]|Zwischenraum, Pause; Zimmer|彼[かれ]は 少[すこ]し 間[ま]を 置[お]いてから 返事[へんじ]した。|Er antwortete nach einer kurzen Pause.|Nomen
ワープロ|ワープロ|Textverarbeitungsgerät|ワープロで 報告書[ほうこくしょ]を 打[う]ったよ。|Ich habe den Bericht auf dem Textverarbeitungsgerät getippt.|Nomen
高まる|高[たか]まる|steigen, zunehmen|その 計画[けいかく]に 対[たい]する 反対[はんたい]の 声[こえ]が 高[たか]まっているわ。|Die Stimmen gegen den Plan werden lauter.|Verb
高める|高[たか]める|erhöhen, steigern|自分[じぶん]を 高[たか]めるのは 大切[たいせつ]なことです。|Es ist wichtig, an sich selbst zu arbeiten.|Verb
安っぽい|安[やす]っぽい|billig wirkend|そのシャツは 安[やす]っぽいね。|Das Hemd sieht billig aus.|Adjektiv
低下|低下[ていか]|Sinken, Rückgang|最近[さいきん]、 教育[きょういく]レベルが 低下[ていか]しています。|In letzter Zeit sinkt das Bildungsniveau.|Nomen (mit する)
低|低[てい]|niedrig|彼[かれ]は 低[てい] 賃金[ちんぎん]で 働[はたら]いているんだ。|Er arbeitet für einen niedrigen Lohn.|Nomen
最も|最[もっと]も|am meisten, höchst|彼[かれ]は 世界[せかい]で 最[もっと]も 早[はや]い 男[おとこ]です。|Er ist der schnellste Mann der Welt.|Adverb
メンバー|メンバー|Mitglied|グループのメンバーは10 人[にん]です。|Die Gruppe hat zehn Mitglieder.|Nomen
月初め|月初[つきはじ]め|Monatsanfang|いつも 月初[つきはじ]めに 彼[かれ]と 会[あ]います。|Ich treffe ihn immer am Monatsanfang.|Nomen
前年|前年[ぜんねん]|Vorjahr|前年[ぜんねん]に 比[くら]べて 利益[りえき]が 上[あ]がりました。|Verglichen mit dem Vorjahr ist der Gewinn gestiegen.|Nomen
前方|前方[ぜんぽう]|vorn, voraus|前方[ぜんぽう]に 山[やま]が 見[み]えますね。|Da vorn sieht man einen Berg.|Nomen
手前|手前[てまえ]|diesseits, davor|駅[えき]の 手前[てまえ]に 郵便局[ゆうびんきょく]があります。|Vor dem Bahnhof ist ein Postamt.|Nomen
前向き|前向[まえむ]き|nach vorn gewandt; positiv, konstruktiv|前向[まえむ]きに 検討[けんとう]します。|Wir werden es wohlwollend prüfen.|な-Adjektiv
ハードウェア|ハードウェア|Hardware|この 問題[もんだい]はハードウェアの 故障[こしょう]が 原因[げんいん]です。|Ursache dieses Problems ist ein Hardwaredefekt.|Nomen
人前|人前[ひとまえ]|vor anderen Leuten, in der Öffentlichkeit|彼女[かのじょ]は 人前[ひとまえ]に 出[で]ると 緊張[きんちょう]します。|Vor anderen Leuten wird sie nervös.|Nomen
前もって|前[まえ]もって|im Voraus|休[やす]む 時[とき]は 前[まえ]もって 連絡[れんらく]ください。|Sagen Sie bitte vorher Bescheid, wenn Sie freinehmen.|Adverb
出前|出前[でまえ]|Essenslieferung|寿司[すし]の 出前[でまえ]を 頼[たの]んだよ。|Wir haben Sushi liefern lassen.|Nomen
前半|前半[ぜんはん]|erste Hälfte|相手[あいて]チームのリードで 前半[ぜんはん]が 終[お]わったよ。|Die erste Halbzeit endete mit einer Führung der gegnerischen Mannschaft.|Nomen
半ば|半[なか]ば|Mitte, Hälfte|彼[かれ]は30 代[だい]の 半[なか]ばです。|Er ist Mitte dreißig.|Nomen
マスコミ|マスコミ|Massenmedien|彼[かれ]はよくマスコミにも 登場[とうじょう]するね。|Er taucht oft in den Medien auf.|Nomen
半年|半年[はんとし]|ein halbes Jahr|日本[にっぽん]に 来[き]て 半年[はんとし]になります。|Ich bin seit einem halben Jahr in Japan.|Nomen
明朝|明朝[みょうちょう]|morgen früh|明朝[みょうちょう] 10 時[じ]からまた 会議[かいぎ]です。|Morgen früh ab zehn Uhr ist wieder Besprechung.|Nomen
晩年|晩年[ばんねん]|späte Lebensjahre|彼[かれ]は 晩年[ばんねん]を 故郷[こきょう]で 過[す]ごしたんだ。|Er verbrachte seine letzten Jahre in seiner Heimat.|Nomen
夜間|夜間[やかん]|Nacht, nachts|夜間[やかん]は 裏口[うらぐち]から 入[はい]ってください。|Benutzen Sie nachts bitte den Hintereingang.|Nomen
夜空|夜空[よぞら]|Nachthimmel|ふたりで 夜空[よぞら]を 見上[みあ]げたの。|Wir sahen zu zweit zum Nachthimmel hinauf.|Nomen
夜明け|夜明[よあ]け|Tagesanbruch|夜明[よあ]けと 共[とも]に 目[め]が 覚[さ]めたんだ。|Ich bin bei Tagesanbruch aufgewacht.|Nomen
やがて|やがて|bald, nach einer Weile|やがて 雪[ゆき]も 止[や]むでしょう。|Bald wird es wohl auch aufhören zu schneien.|Adverb
月夜|月夜[つきよ]|Mondnacht|散歩[さんぽ]にいい 月夜[つきよ]ですね。|Eine schöne Mondnacht für einen Spaziergang.|Nomen
夜|夜[よ]|Nacht (literarisch)|あと1 時間[じかん]で 夜[よ]が 明[あ]けますね。|In einer Stunde wird es hell.|Nomen
七夕|七夕[たなばた]|Tanabata (Sternenfest am 7. Juli)|日本[にほん]では7 月7日[がつ 7 か]は 七夕[たなばた]の 日[ひ]です。|In Japan ist am 7. Juli Tanabata.|Nomen
夕日|夕日[ゆうひ]|Abendsonne|夕日[ゆうひ]が 西[にし]の 空[そら]に 沈[しず]んだね。|Die Abendsonne ist im Westen untergegangen.|Nomen
飲み水|飲[の]み 水[みず]|Trinkwasser|昔[むかし]は 川[かわ]の 水[みず]が 飲[の]み 水[みず]でした。|Früher war Flusswasser das Trinkwasser.|Nomen
わずか|わずか|gering, wenig, nur|彼[かれ]はわずかな 貯金[ちょきん]で 暮[く]らしている。|Er lebt von geringen Ersparnissen.|な-Adjektiv
飯|飯[めし]|gekochter Reis; Essen (derb)|今朝[けさ]は 飯[めし]を 食[た]べたかい。|Hast du heute Morgen was gegessen?|Nomen
見上げる|見上[みあ]げる|hinaufblicken|私[わたし]は 空[そら]を 見上[みあ]げたの。|Ich sah zum Himmel hinauf.|Verb
見下ろす|見下[みお]ろす|hinunterblicken|山[やま]の 頂上[ちょうじょう]からふもとを 見下[みお]ろしたの。|Ich blickte vom Gipfel auf den Fuß des Berges hinab.|Verb
見出し|見出[みだ]し|Überschrift, Schlagzeile|新聞[しんぶん]の 見出[みだ]しが 彼[かれ]の 目[め]を 引[ひ]いたんだ。|Die Schlagzeile der Zeitung zog seinen Blick auf sich.|Nomen
見本|見本[みほん]|Muster, Probe|見本[みほん]はこちらにございます。|Das Muster finden Sie hier.|Nomen
パターン|パターン|Muster, Schema|彼女[かのじょ]の 行動[こうどう]パターンは 興味深[きょうみぶか]いな。|Ihr Verhaltensmuster ist interessant.|Nomen
見つめる|見[み]つめる|anstarren, unverwandt ansehen|彼[かれ]はその 絵[え]をずっと 見[み]つめていたの。|Er betrachtete das Bild die ganze Zeit.|Verb
見晴らし|見晴[みは]らし|Aussicht, Ausblick|このベランダは 見晴[みは]らしがいい。|Von diesem Balkon hat man eine gute Aussicht.|Nomen
月見|月見[つきみ]|Mondschau|9 月[がつ]には 月見[つきみ]を 楽[たの]しみます。|Im September genießen wir die Mondschau.|Nomen
よそ見|よそ 見[み]|Wegsehen, Unaufmerksamkeit|運転中[うんてんちゅう]はよそ 見[み]をしてはいけません。|Beim Fahren darf man nicht woandershin schauen.|Nomen (mit する)
見かけ|見[み]かけ|Aussehen, äußerer Anschein|彼[かれ]は 見[み]かけによらず 優[やさ]しいね。|Er ist freundlicher, als er aussieht.|Nomen
方言|方言[ほうげん]|Dialekt|彼[かれ]は 方言[ほうげん]で 話[はな]します。|Er spricht Dialekt.|Nomen
ついに|ついに|endlich, schließlich|彼[かれ]はついに 弁護士[べんごし]の 資格[しかく]を 取[と]ったよ。|Er hat endlich die Zulassung als Anwalt erworben.|Adverb
一言|一言[ひとこと]|ein Wort, kurze Bemerkung|社長[しゃちょう]に 一言[ひとこと]お 願[ねが]いしたの。|Ich habe den Firmenchef um ein paar Worte gebeten.|Nomen
文明|文明[ぶんめい]|Zivilisation|多[おお]くの 文明[ぶんめい]は 川[かわ]の 近[ちか]くで 始[はじ]まった。|Viele Zivilisationen sind an Flüssen entstanden.|Nomen
本文|本文[ほんぶん]|Haupttext, Text|本文[ほんぶん]をよく 読[よ]んで 答[こた]えてください。|Lesen Sie den Text aufmerksam und antworten Sie dann.|Nomen
文|文[ぶん]|Satz, Text|この 文[ぶん]は 意味[いみ]が 分[わ]かりません。|Ich verstehe die Bedeutung dieses Satzes nicht.|Nomen
読書|読書[どくしょ]|Lesen (von Büchern)|私[わたし]の 趣味[しゅみ]は 読書[どくしょ]です。|Mein Hobby ist Lesen.|Nomen (mit する)
まるで|まるで|ganz wie, geradezu; völlig|彼[かれ]はまるで 子供[こども]のようにはしゃいだよ。|Er tobte herum wie ein Kind.|Adverb
読み書き|読[よ]み 書[か]き|Lesen und Schreiben|息子[むすこ]は 学校[がっこう]で 読[よ]み 書[か]きを 勉強[べんきょう]しています。|Mein Sohn lernt in der Schule Lesen und Schreiben.|Nomen
目覚ましい|目覚[めざ]ましい|bemerkenswert, glänzend|あの 国[くに]は 目覚[めざ]ましい 発展[はってん]を 遂[と]げたの。|Dieses Land hat eine bemerkenswerte Entwicklung durchlaufen.|Adjektiv
見覚え|見覚[みおぼ]え|Wiedererkennen, bekannt vorkommen|この 人[ひと]に 見覚[みおぼ]えがありますか。|Kommt Ihnen diese Person bekannt vor?|Nomen
目覚まし|目覚[めざ]まし|Wachwerden; Wecker|目覚[めざ]ましにコーヒーを 飲[の]んだの。|Ich habe zum Wachwerden Kaffee getrunken.|Nomen
閉会|閉会[へいかい]|Schluss (einer Veranstaltung)|会長[かいちょう]が 閉会[へいかい]の 挨拶[あいさつ]をしました。|Der Vorsitzende sprach das Schlusswort.|Nomen (mit する)
どんどん|どんどん|zügig, immer weiter|彼[かれ]は 山道[やまみち]をどんどん 進[すす]んで 行[い]ったの。|Er ging den Bergpfad zügig weiter.|Adverb
出会う|出会[であ]う|begegnen, kennenlernen|アメリカで 彼女[かのじょ]と 出会[であ]いました。|Ich habe sie in Amerika kennengelernt.|Verb
話し合い|話[はな]し 合[あ]い|Besprechung, Aussprache|プロジェクトメンバーと 話[はな]し 合[あ]いをしたの。|Ich habe mich mit den Projektmitgliedern besprochen.|Nomen
見合い|見合[みあ]い|arrangiertes Kennenlernen (zur Heirat)|うちの 両親[りょうしん]はお 見合[みあ]い 結婚[けっこん]でした。|Meine Eltern haben über ein arrangiertes Treffen geheiratet.|Nomen (mit する)
間に合わせる|間[ま]に 合[あ]わせる|sich behelfen, auskommen mit|昼食[ちゅうしょく]はクッキーで 間[ま]に 合[あ]わせたの。|Zu Mittag habe ich mich mit Keksen beholfen.|Verb
本社|本社[ほんしゃ]|Zentrale, Hauptsitz|今日[きょう]は 本社[ほんしゃ]で 会議[かいぎ]があります。|Heute ist eine Besprechung in der Zentrale.|Nomen
それほど|それほど|so sehr, derart|彼[かれ]がそれほど 悩[なや]んでいたとは 知[し]らなかった。|Ich wusste nicht, dass er sich solche Sorgen machte.|Adverb
入社|入社[にゅうしゃ]|Eintritt in eine Firma|彼[かれ]は 昨年[さくねん] 入社[にゅうしゃ]したの。|Er hat letztes Jahr in der Firma angefangen.|Nomen (mit する)
満足|満足[まんぞく]|Zufriedenheit|彼[かれ]は 結果[けっか]に 満足[まんぞく]したようです。|Er scheint mit dem Ergebnis zufrieden zu sein.|Nomen (mit する)
満たす|満[み]たす|füllen, erfüllen|彼[かれ]は 応募[おうぼ]の 条件[じょうけん]を 満[み]たしていない。|Er erfüllt die Bewerbungsvoraussetzungen nicht.|Verb
満ちる|満[み]ちる|voll werden; zunehmen (Mond)|月[つき]が 満[み]ちてきましたね。|Der Mond nimmt zu.|Verb
満員|満員[まんいん]|voll besetzt|このバスは 満員[まんいん]です。|Dieser Bus ist voll besetzt.|Nomen
満月|満月[まんげつ]|Vollmond|今日[きょう]は 満月[まんげつ]ですね。|Heute ist Vollmond.|Nomen
もはや|もはや|schon; nicht mehr|もはや 彼[かれ]の 助[たす]けは 必要[ひつよう]じゃないの。|Seine Hilfe ist nicht mehr nötig.|Adverb
出来事|出来事[できごと]|Ereignis, Vorfall|面白[おもしろ]い 出来事[できごと]がありました。|Es ist etwas Interessantes passiert.|Nomen
見事|見事[みごと]|prächtig, hervorragend|彼[かれ]は 見事[みごと]なジャンプを 見[み]せたね。|Er hat einen prächtigen Sprung gezeigt.|な-Adjektiv
大工|大工[だいく]|Zimmermann|私[わたし]の 父[ちち]は 大工[だいく]です。|Mein Vater ist Zimmermann.|Nomen
場|場[ば]|Ort, Gelegenheit, Anlass|この 場[ば]でお 礼[れい]を 言[い]わせてください。|Lassen Sie mich bei dieser Gelegenheit meinen Dank aussprechen.|Nomen
入場|入場[にゅうじょう]|Eintritt, Einzug|選手[せんしゅ]の 入場[にゅうじょう]です。|Die Sportler ziehen ein.|Nomen (mit する)
デザイン|デザイン|Design|この 服[ふく]のデザインは 素敵[すてき]ですね。|Das Design dieser Kleidung ist toll.|Nomen (mit する)
電力|電力[でんりょく]|elektrische Energie, Strom|このエアコンはあまり 電力[でんりょく]を 使[つか]いません。|Diese Klimaanlage verbraucht wenig Strom.|Nomen
電子|電子[でんし]|Elektron; elektronisch|電子[でんし] 辞書[じしょ]はとても 便利[べんり]です。|Elektronische Wörterbücher sind sehr praktisch.|Nomen
交じる|交[ま]じる|sich mischen unter|彼女[かのじょ]は 外国人[がいこくじん]に 交[ま]じってダンスをしたの。|Sie tanzte inmitten von Ausländern.|Verb
交わる|交[まじ]わる|verkehren mit, Umgang haben|人[ひと]と 交[まじ]わって、 多[おお]くのことを 学[まな]びました。|Im Umgang mit Menschen habe ich viel gelernt.|Verb
交ぜる|交[ま]ぜる|untermischen, einbeziehen|私[わたし]も 交[ま]ぜてください。|Lasst mich bitte auch mitmachen.|Verb
ファン|ファン|Fan|彼[かれ]は 大[だい]のサッカーファンです。|Er ist ein großer Fußballfan.|Nomen
交ざる|交[ま]ざる|sich mischen|大人[おとな]も 子供[こども]も 交[ま]ざって 遊[あそ]んだの。|Erwachsene und Kinder spielten bunt gemischt.|Verb
交わる|交[まじ]わる|sich kreuzen|二[ふた]つの 国道[こくどう]はここで 交[まじ]わります。|Die beiden Nationalstraßen kreuzen sich hier.|Verb
見通し|見通[みとお]し|Aussicht, Prognose; Durchblick|仕事[しごと]の 見通[みとお]しがたたない。|Bei der Arbeit ist kein Ende abzusehen.|Nomen
通じる|通[つう]じる|durchgehen, führen zu; verstanden werden|その 国[くに]では 英語[えいご]は 通[つう]じますか。|Kommt man in dem Land mit Englisch durch?|Verb
通す|通[とお]す|durchlassen, hindurchführen|針[はり]に 糸[いと]を 通[とお]してください。|Fädeln Sie bitte den Faden ein.|Verb
通行|通行[つうこう]|Durchgang, Verkehr|この 道[みち]は 通行[つうこう]できません。|Diese Straße ist nicht passierbar.|Nomen
なさる|なさる|tun (respektvoll)|お 申[もう]し 込[こ]みなさるのでしたら、こちらにお 並[なら]びください。|Wenn Sie sich anmelden möchten, stellen Sie sich bitte hier an.|Verb
人通り|人通[ひとどお]り|Fußgängerverkehr|ここは 人通[ひとどお]りが 激[はげ]しいね。|Hier sind viele Leute unterwegs.|Nomen
一通り|一通[ひととお]り|einmal ganz, im Großen und Ganzen|説明書[せつめいしょ]を 一通[ひととお]り 読[よ]んだの。|Ich habe die Anleitung einmal ganz durchgelesen.|Adverb
通路|通路[つうろ]|Gang, Durchgang|通路[つうろ]の 右側[みぎがわ]にトイレがありますよ。|Auf der rechten Seite des Gangs ist eine Toilette.|Nomen
地上|地上[ちじょう]|über der Erde, oberirdisch|この 電車[でんしゃ]は 地上[ちじょう]を 走[はし]ります。|Dieser Zug fährt oberirdisch.|Nomen
地|地[ち]|Boden, Gegend, Ort|彼[かれ]はその 地[ち]で 残[のこ]りの 生涯[しょうがい]を 過[す]ごしたんだ。|Er verbrachte den Rest seines Lebens an diesem Ort.|Nomen
まとまる|まとまる|zusammenkommen, sich einigen|みんなの 意見[いけん]がまとまりました。|Alle haben sich auf eine Meinung geeinigt.|Verb
地下道|地下道[ちかどう]|Unterführung|地下道[ちかどう]を 通[とお]って 行[い]きましょう。|Gehen wir durch die Unterführung.|Nomen
地下|地下[ちか]|Untergeschoss, unterirdisch|スタジオは 地下[ちか]にあります。|Das Studio ist im Untergeschoss.|Nomen
地方|地方[ちほう]|Gegend, Region; Provinz|この 地方[ちほう]は 漁業[ぎょぎょう]が 盛[さか]んです。|In dieser Gegend blüht die Fischerei.|Nomen
図る|図[はか]る|anstreben, planen|これからは 経営[けいえい]の 合理化[ごうりか]を 図[はか]りたいと 思[おも]います。|Künftig möchte ich die Unternehmensführung rationalisieren.|Verb
図書|図書[としょ]|Bücher|これは 児童[じどう] 図書[としょ]です。|Das ist ein Kinderbuch.|Nomen
ルール|ルール|Regel|このゲームのルールは 簡単[かんたん]です。|Die Regeln dieses Spiels sind einfach.|Nomen
他方|他方[たほう]|die andere Seite; andererseits|他方[たほう]の 視点[してん]からも 見[み]てみましょう。|Betrachten wir es auch aus dem anderen Blickwinkel.|Nomen
他人|他人[たにん]|andere Leute, Fremde(r)|私[わたし]は 他人[たにん]に 住所[じゅうしょ]を 教[おし]えたくない。|Ich möchte Fremden meine Adresse nicht sagen.|Nomen
中止|中止[ちゅうし]|Abbruch, Absage|雨[あめ]で 運動会[うんどうかい]が 中止[ちゅうし]になったの。|Das Sportfest wurde wegen Regens abgesagt.|Nomen (mit する)
通行止め|通行止[つうこうど]め|Straßensperrung|あの 道路[どうろ]は 通行止[つうこうど]めだそうです。|Die Straße dort soll gesperrt sein.|Nomen
見渡す|見渡[みわた]す|überblicken, den Blick schweifen lassen|丘[おか]の 上[うえ]から 草原[そうげん]を 見渡[みわた]したの。|Ich blickte vom Hügel über die Wiesen.|Verb
二度と|二度[にど]と|nie wieder|もうここには 二度[にど]と 来[き]ません。|Hierher komme ich nie wieder.|Adverb
ヘリコプター|ヘリコプター|Hubschrauber|事故現場[じこ げんば]の 上空[じょうくう]をヘリコプターが 飛[と]んでいます。|Über der Unfallstelle kreist ein Hubschrauber.|Nomen
度々|度々[たびたび]|oft, wiederholt|彼[かれ]から 度々[たびたび]メールが 来[き]ます。|Ich bekomme oft E-Mails von ihm.|Adverb
この度|この 度[たび]|diesmal, bei diesem Anlass|この 度[たび]はご 結婚[けっこん]おめでとうございます。|Herzlichen Glückwunsch zu Ihrer Hochzeit.|Nomen
毎度|毎度[まいど]|jedes Mal|毎度[まいど]ありがとうございます。|Vielen Dank, dass Sie immer wieder bei uns einkaufen.|Nomen
間近|間近[まぢか]|ganz nah, unmittelbar bevorstehend|有名人[ゆうめいじん]を 間近[まぢか]で 見[み]たよ。|Ich habe einen Prominenten aus nächster Nähe gesehen.|な-Adjektiv
近道|近道[ちかみち]|Abkürzung|こっちが 近道[ちかみち]です。|Hier entlang ist es kürzer.|Nomen
ともかく|ともかく|jedenfalls, wie dem auch sei|ともかく 一度考[いちど かんが]え 直[なお]しましょう。|Überdenken wir es jedenfalls noch einmal.|Adverb
長年|長年[ながねん]|viele Jahre, langjährig|彼[かれ]は 長年[ながねん]の 友人[ゆうじん]です。|Er ist ein langjähriger Freund.|Nomen
年長|年長[ねんちょう]|älter, der/die Älteste|彼[かれ]がこのグループで 一番[いちばん] 年長[ねんちょう]です。|Er ist der Älteste in dieser Gruppe.|な-Adjektiv
長らく|長[なが]らく|lange Zeit|長[なが]らくお 待[ま]たせしました。|Entschuldigen Sie, dass Sie so lange warten mussten.|Adverb
長話|長話[ながばなし]|langes Gespräch|母[はは]が 電話[でんわ]で 長話[ながばなし]をしているんだ。|Meine Mutter telefoniert schon ewig.|Nomen (mit する)
短大|短大[たんだい]|Kurzuniversität (zweijähriges College)|妹[いもうと]は 短大[たんだい]を 卒業[そつぎょう]しました。|Meine kleine Schwester hat die Kurzuniversität abgeschlossen.|Nomen
つい|つい|unwillkürlich, aus Versehen|会議中[かいぎちゅう]、ついあくびをしてしまいました。|In der Besprechung habe ich unwillkürlich gegähnt.|Adverb
短気|短気[たんき]|Jähzorn, ungeduldig|彼[かれ]は 短気[たんき]な 人[ひと]です。|Er ist ein jähzorniger Mensch.|な-Adjektiv
広げる|広[ひろ]げる|ausbreiten, entfalten|電車[でんしゃ]の 中[なか]では 新聞[しんぶん]を 広[ひろ]げないで。|Breite im Zug bitte keine Zeitung aus.|Verb
広場|広場[ひろば]|Platz, freier Platz|広場[ひろば]に 子供[こども]が 沢山集[たくさん あつ]まっていたよ。|Auf dem Platz hatten sich viele Kinder versammelt.|Nomen
広まる|広[ひろ]まる|sich verbreiten|その 噂[うわさ]はすぐに 広[ひろ]まったよ。|Das Gerücht verbreitete sich schnell.|Verb
広める|広[ひろ]める|verbreiten|誰[だれ]が 噂[うわさ]を 広[ひろ]めたんだろう。|Wer hat wohl das Gerücht verbreitet?|Verb
トンネル|トンネル|Tunnel|トンネルを 抜[ぬ]けると 海[うみ]が 見[み]えたよ。|Als wir aus dem Tunnel kamen, sahen wir das Meer.|Nomen
全力|全力[ぜんりょく]|ganze Kraft, volle Leistung|全力[ぜんりょく]で 走[はし]れ。|Lauf mit aller Kraft!|Nomen
部門|部門[ぶもん]|Bereich, Sparte, Kategorie|あの 歌手[かしゅ]は3 部門[ぶもん]で 賞[しょう]を 取[と]ったの。|Der Sänger hat in drei Kategorien einen Preis gewonnen.|Nomen
本部|本部[ほんぶ]|Hauptquartier, Zentrale|その 事件[じけん]の 直後[ちょくご]、 捜査[そうさ] 本部[ほんぶ]が 設置[せっち]された。|Gleich nach dem Vorfall wurde eine Ermittlungszentrale eingerichtet.|Nomen
部長|部長[ぶちょう]|Abteilungsleiter(in)|部長[ぶちょう]に 仕事[しごと]の 相談[そうだん]をしたんだ。|Ich habe den Abteilungsleiter wegen der Arbeit um Rat gefragt.|Nomen
内部|内部[ないぶ]|das Innere, intern|これは 機械[きかい]の 内部[ないぶ]の 問題[もんだい]です。|Das ist ein Problem im Inneren der Maschine.|Nomen
部下|部下[ぶか]|Untergebene(r), Mitarbeiter(in)|彼[かれ]は 優秀[ゆうしゅう]な 部下[ぶか]を 持[も]っているわね。|Er hat hervorragende Mitarbeiter.|Nomen
バランス|バランス|Gleichgewicht, Ausgewogenheit|栄養[えいよう]バランスの 良[い]い 食事[しょくじ]をしよう。|Essen wir ausgewogen.|Nomen
大部分|大部分[だいぶぶん]|der größte Teil|絵[え]の 大部分[だいぶぶん]が 水[みず]に 濡[ぬ]れてしまったな。|Der größte Teil des Bildes ist nass geworden.|Nomen
大国|大国[たいこく]|Großmacht, großes Land|その 国[くに]は 経済[けいざい] 大国[たいこく]よ。|Das Land ist eine Wirtschaftsgroßmacht.|Nomen
入国|入国[にゅうこく]|Einreise|私[わたし]は 留学生[りゅうがくせい]として 日本[にっぽん]に 入国[にゅうこく]しました。|Ich bin als Austauschstudent nach Japan eingereist.|Nomen (mit する)
本国|本国[ほんごく]|Heimatland|彼女[かのじょ]は 本国[ほんごく]に 帰[かえ]りました。|Sie ist in ihr Heimatland zurückgekehrt.|Nomen
天国|天国[てんごく]|Himmel, Paradies|死[し]んだら 天国[てんごく]に 行[い]きたいです。|Wenn ich sterbe, möchte ich in den Himmel kommen.|Nomen
どうしても|どうしても|unbedingt, um jeden Preis|どうしてもその 訳[わけ]を 知[し]りたい。|Ich möchte unbedingt den Grund wissen.|Adverb
世の中|世[よ]の 中[なか]|die Welt, die Gesellschaft|世[よ]の 中[なか]にはいろいろな 人[ひと]がいます。|Auf der Welt gibt es die unterschiedlichsten Menschen.|Nomen
中世|中世[ちゅうせい]|Mittelalter|彼女[かのじょ]は 中世[ちゅうせい]の 音楽[おんがく]が 好[す]きです。|Sie mag mittelalterliche Musik.|Nomen
世|世[よ]|Welt, Öffentlichkeit; Zeitalter|やっと 私[わたし]の 作品[さくひん]が 世[よ]に 出[で]たの。|Endlich ist mein Werk an die Öffentlichkeit gelangt.|Nomen
明白|明白[めいはく]|offensichtlich, eindeutig|彼[かれ]が 犯人[はんにん]なのは 明白[めいはく]です。|Es ist offensichtlich, dass er der Täter ist.|な-Adjektiv
鉄道|鉄道[てつどう]|Eisenbahn|日本[にっぽん]は 鉄道[てつどう]がとても 発達[はったつ]しています。|In Japan ist die Eisenbahn sehr gut ausgebaut.|Nomen
どうか|どうか|bitte (inständig)|どうかお 許[ゆる]しください。|Bitte verzeihen Sie mir.|Adverb
鉄|鉄[てつ]|Eisen|この 鍋[なべ]は 鉄[てつ]でできています。|Dieser Topf ist aus Eisen.|Nomen
肉体|肉体[にくたい]|Körper, Leib|肉体[にくたい]はいつか 滅[ほろ]びます。|Der Körper vergeht eines Tages.|Nomen
白菜|白菜[はくさい]|Chinakohl|彼女[かのじょ]は 白菜[はくさい]の 漬物[つけもの]が 好[す]きです。|Sie mag eingelegten Chinakohl.|Nomen
日米|日米[にちべい]|Japan und die USA|テレビで 日米[にちべい] 野球[やきゅう]をやっていますよ。|Im Fernsehen läuft ein Baseballspiel Japan gegen die USA.|Nomen
味方|味方[みかた]|Verbündete(r), auf jemandes Seite|母[はは]はいつも 私[わたし]の 味方[みかた]です。|Meine Mutter ist immer auf meiner Seite.|Nomen
年末|年末[ねんまつ]|Jahresende|年末[ねんまつ]のセールはいつも 込[こ]んでいるね。|Beim Jahresendverkauf ist es immer voll.|Nomen
プロ|プロ|Profi|彼[かれ]はスケートのプロです。|Er ist Profi-Eisläufer.|Nomen
末|末[まつ]|Ende (eines Zeitraums)|今月[こんげつ] 末[まつ]にカナダに 行[い]きます。|Ende dieses Monats fahre ich nach Kanada.|Nomen
料金|料金[りょうきん]|Gebühr, Preis|まだ 料金[りょうきん]は 払[はら]っていないけど。|Ich habe die Gebühr aber noch nicht bezahlt.|Nomen
地理|地理[ちり]|Geografie, Ortskenntnis|彼[かれ]は 地理[ちり]に 詳[くわ]しいの。|Er kennt sich in Geografie aus.|Nomen
理解|理解[りかい]|Verständnis, Verstehen|理解[りかい]してくれてありがとう。|Danke für dein Verständnis.|Nomen (mit する)
解く|解[と]く|lösen, auflösen|この 問題[もんだい]を 解[と]けますか。|Kannst du diese Aufgabe lösen?|Verb
チャンス|チャンス|Chance, Gelegenheit|これは 素晴[すば]らしいチャンスだ。|Das ist eine großartige Chance.|Nomen
分解|分解[ぶんかい]|Zerlegung|機械[きかい]を 分解[ぶんかい]してみたの。|Ich habe die Maschine auseinandergenommen.|Nomen (mit する)
解ける|解[と]ける|sich lösen, gelöst werden|やっと 難[むずか]しい 問題[もんだい]が 解[と]けました。|Endlich ist die schwierige Aufgabe gelöst.|Verb
有力|有力[ゆうりょく]|einflussreich, aussichtsreich|あの 都市[とし]はオリンピックの 有力[ゆうりょく]な 候補地[こうほち]です。|Die Stadt ist eine aussichtsreiche Kandidatin für die Olympischen Spiele.|な-Adjektiv
有する|有[ゆう]する|haben, besitzen (förmlich)|資格[しかく]を 有[ゆう]する 人[ひと]のみ 応募[おうぼ]できます。|Bewerben können sich nur Personen mit der entsprechenden Qualifikation.|Verb
有料|有料[ゆうりょう]|gebührenpflichtig|このトイレは 有料[ゆうりょう]です。|Diese Toilette ist gebührenpflichtig.|Nomen
どうも|どうも|irgendwie; wirklich (Dank, Entschuldigung)|今日[きょう]はどうも 体[からだ]の 調子[ちょうし]が 悪[わる]い。|Heute fühle ich mich irgendwie nicht wohl.|Adverb
無理|無理[むり]|Unmögliches, Überanstrengung|無理[むり]はしないでください。|Überanstrengen Sie sich bitte nicht.|Nomen
無料|無料[むりょう]|kostenlos|お 飲[の]み 物[もの]は 無料[むりょう]でございます。|Getränke sind kostenlos.|Nomen
無事|無事[ぶじ]|wohlbehalten, ohne Zwischenfall|無事[ぶじ]、 家[いえ]に 着[つ]きました。|Ich bin wohlbehalten zu Hause angekommen.|Adverb
無口|無口[むくち]|wortkarg, schweigsam|彼女[かのじょ]は 無口[むくち]な 人[ひと]ですね。|Sie ist ein schweigsamer Mensch.|な-Adjektiv
間も無く|間[ま]も 無[な]く|bald, in Kürze|あの 飛行機[ひこうき]は 間[ま]も 無[な]く 着陸[ちゃくりく]しますね。|Das Flugzeug dort landet in Kürze.|Adverb
無言|無言[むごん]|Schweigen, wortlos|彼[かれ]は 一日中[いちにちじゅう] 無言[むごん]だったな。|Er hat den ganzen Tag geschwiegen.|Nomen
ハード|ハード|hart, anstrengend|最近[さいきん]、 仕事[しごと]がかなりハードです。|In letzter Zeit ist die Arbeit ziemlich hart.|Adjektiv
無茶|無茶[むちゃ]|unvernünftig, waghalsig|無茶[むちゃ]をしないでくださいね。|Mach bitte nichts Unvernünftiges.|な-Adjektiv
無理やり|無理[むり]やり|mit Gewalt, gegen den Willen|荷物[にもつ]を 無理[むり]やりかばんに 詰[つ]めたよ。|Ich habe die Sachen mit Gewalt in die Tasche gestopft.|Adverb
作り上げる|作[つく]り 上[あ]げる|fertigstellen; erfinden, ausdenken|それは 彼女[かのじょ]が 作[つく]り 上[あ]げた 話[はなし]です。|Das ist eine Geschichte, die sie sich ausgedacht hat.|Verb
作り話|作[つく]り 話[ばなし]|erfundene Geschichte|その 子[こ]が 言[い]っていることは 作[つく]り 話[ばなし]です。|Was das Kind erzählt, ist erfunden.|Nomen
大使|大使[たいし]|Botschafter(in)|彼[かれ]は 昔[むかし]、ドイツの 大使[たいし]でした。|Er war früher Botschafter in Deutschland.|Nomen
マイナス|マイナス|Minus; Nachteil|外[そと]の 温度[おんど]はマイナス3 度[ど]です。|Draußen sind es minus drei Grad.|Nomen (mit する)
使い道|使[つか]い 道[みち]|Verwendungszweck|ボーナスの 使[つか]い 道[みち]を 考[かんが]えているところです。|Ich überlege gerade, wofür ich meinen Bonus ausgebe.|Nomen
使い|使[つか]い|Besorgung, Botengang|主人[しゅじん]の 使[つか]いで 市役所[しやくしょ]に 行[い]くところです。|Ich bin im Auftrag meines Mannes auf dem Weg zum Rathaus.|Nomen
用|用[よう]|Angelegenheit, Anliegen|私[わたし]に 何[なに]か 用[よう]ですか。|Wollen Sie etwas von mir?|Nomen
無用|無用[むよう]|unnötig, nutzlos|心配[しんぱい]は 無用[むよう]です。|Sorgen sind unnötig.|な-Adjektiv
費用|費用[ひよう]|Kosten|イタリア 旅行[りょこう]の 費用[ひよう]は30 万円[まんえん]です。|Die Italienreise kostet 300.000 Yen.|Nomen
とにかく|とにかく|jedenfalls, auf jeden Fall|とにかく 現場[げんば]へ 行[い]ってみましょう。|Gehen wir jedenfalls einmal hin und sehen es uns vor Ort an.|Adverb
費やす|費[つい]やす|aufwenden, verbrauchen|私[わたし]は 語学[ごがく]の 勉強[べんきょう]にかなりの 時間[じかん]を 費[つい]やしています。|Ich wende ziemlich viel Zeit für das Sprachenlernen auf.|Verb
安売り|安売[やすう]り|Ausverkauf, Sonderangebot|あの 店[みせ]で 野菜[やさい]の 安売[やすう]りをしていましたよ。|In dem Laden dort war Gemüse im Sonderangebot.|Nomen (mit する)
売買|売買[ばいばい]|Kauf und Verkauf, Handel|彼[かれ]は 不動産[ふどうさん]の 売買[ばいばい]をしています。|Er handelt mit Immobilien.|Nomen (mit する)
閉店|閉店[へいてん]|Ladenschluss|この 店[みせ]は8 時[じ]に 閉店[へいてん]します。|Dieser Laden schließt um acht Uhr.|Nomen (mit する)
本店|本店[ほんてん]|Hauptgeschäft, Stammhaus|ここはチェーン 店[てん]の 本店[ほんてん]です。|Das hier ist das Stammhaus der Kette.|Nomen
パイプ|パイプ|Rohr; Pfeife|このパイプは 詰[つ]まっていますよ。|Dieses Rohr ist verstopft.|Nomen
部品|部品[ぶひん]|Teil, Ersatzteil|車[くるま]の 部品[ぶひん]を 取[と]り 替[か]えたんだ。|Ich habe Teile am Auto ausgetauscht.|Nomen
日用品|日用品[にちようひん]|Dinge des täglichen Bedarfs|今日[きょう]は 日用品[にちようひん]の 買[か]い 物[もの]をした。|Heute habe ich Dinge für den Alltag eingekauft.|Nomen
段|段[だん]|Stufe; Rang|この 階[かい] 段[だん]は18 段[だん]ありますね。|Diese Treppe hat 18 Stufen.|Nomen
値上がり|値上[ねあ]がり|Preisanstieg|野菜[やさい]が 値上[ねあ]がりしていますね。|Gemüse ist teurer geworden.|Nomen (mit する)
値上げ|値上[ねあ]げ|Preiserhöhung|バス 代[だい]が 値上[ねあ]げされました。|Die Busfahrpreise wurden erhöht.|Nomen (mit する)
値下がり|値下[ねさ]がり|Preisrückgang|ガソリンが 値下[ねさ]がりしました。|Benzin ist billiger geworden.|Nomen (mit する)
たちまち|たちまち|im Nu, augenblicklich|空[そら]がたちまち 曇[くも]ってきたね。|Der Himmel hat sich im Nu bewölkt.|Adverb
値下げ|値下[ねさ]げ|Preissenkung|電話料金[でんわ りょうきん]が 値下[ねさ]げされた。|Die Telefongebühren wurden gesenkt.|Nomen (mit する)
地価|地価[ちか]|Grundstückspreis|東京[とうきょう]の 地価[ちか]は 上[あ]がり 続[つづ]けているんだ。|Die Grundstückspreise in Tokio steigen weiter.|Nomen
体格|体格[たいかく]|Körperbau, Statur|彼[かれ]はとても 体格[たいかく]がいいわ。|Er ist sehr kräftig gebaut.|Nomen
冬季|冬季[とうき]|Wintersaison|次[つぎ]の 冬季[とうき]オリンピックは2 年後[ねんご]です。|Die nächsten Olympischen Winterspiele sind in zwei Jahren.|Nomen
熱する|熱[ねっ]する|erhitzen; heiß werden|鉄[てつ]は 熱[ねっ]すると 曲[ま]がるんだ。|Eisen biegt sich, wenn man es erhitzt.|Verb
プラス|プラス|Plus, Vorteil|この 経験[けいけん]はあなたにとってプラスになるでしょう。|Diese Erfahrung wird für dich ein Gewinn sein.|Nomen (mit する)
低温|低温[ていおん]|niedrige Temperatur|この 製品[せいひん]は 低温[ていおん]で 保存[ほぞん]してください。|Bewahren Sie dieses Produkt bitte kühl auf.|Nomen
体温|体温[たいおん]|Körpertemperatur|今朝[けさ]の 体温[たいおん]は36 度[ど]でした。|Meine Temperatur lag heute Morgen bei 36 Grad.|Nomen
友情|友情[ゆうじょう]|Freundschaft|彼[かれ]らは 強[つよ]い 友情[ゆうじょう]で 結[むす]ばれているな。|Sie verbindet eine feste Freundschaft.|Nomen
人情|人情[にんじょう]|Menschlichkeit, Mitgefühl|この 町[まち]の 人[ひと]たちには 人情[にんじょう]があるね。|Die Leute in dieser Stadt sind warmherzig.|Nomen
情けない|情[なさ]けない|erbärmlich, beschämend|こんなことも 知[し]らないとは 情[なさ]けない。|Es ist beschämend, nicht einmal so etwas zu wissen.|Adjektiv
リード|リード|Führung, Vorsprung|彼[かれ]は 彼女[かのじょ]をリードしながら 踊[おど]ったね。|Er hat sie beim Tanzen geführt.|Nomen (mit する)
報道|報道[ほうどう]|Berichterstattung, Nachrichten|夜中[よなか]もテレビで 台風[たいふう]の 報道[ほうどう]をしていた。|Auch mitten in der Nacht wurde im Fernsehen über den Taifun berichtet.|Nomen (mit する)
電報|電報[でんぽう]|Telegramm|実家[じっか]の 母[はは]から 電報[でんぽう]が 来[き]ました。|Von meiner Mutter zu Hause kam ein Telegramm.|Nomen
中古|中古[ちゅうこ]|gebraucht, aus zweiter Hand|その 車[くるま]は 中古[ちゅうこ]で 買[か]ったんだ。|Das Auto habe ich gebraucht gekauft.|Nomen
古本|古本[ふるほん]|gebrauchtes Buch|おととい 古本[ふるほん]を3 冊買[さつ か]いました。|Vorgestern habe ich drei gebrauchte Bücher gekauft.|Nomen
昔|昔[むかし]|früher, alte Zeiten|彼[かれ]は 昔[むかし]は 貧乏[びんぼう]だった。|Früher war er arm.|Nomen
悪口|悪口[わるくち]|üble Nachrede, Lästern|彼[かれ]は 決[けっ]して 人[ひと]の 悪口[わるくち]を 言[い]わないの。|Er redet nie schlecht über andere.|Nomen
たとえ|たとえ|selbst wenn|たとえ、 嵐[あらし]になっても 絶対[ぜったい]に 行[い]く。|Selbst wenn es stürmt, gehe ich auf jeden Fall.|Adverb
熱心|熱心[ねっしん]|Eifer, eifrig|彼女[かのじょ]は4 年間[ねんかん] 熱心[ねっしん]に 勉強[べんきょう]したわ。|Sie hat vier Jahre lang eifrig gelernt.|な-Adjektiv
良心|良心[りょうしん]|Gewissen|私[わたし]は 良心[りょうしん]に 従[したが]って 行動[こうどう]します。|Ich handle nach meinem Gewissen.|Nomen
内心|内心[ないしん]|im Innersten, insgeheim|彼女[かのじょ]は 内心[ないしん]どきどきしていましたよ。|Insgeheim hatte sie Herzklopfen.|Nomen
用心|用心[ようじん]|Vorsicht|夜道[よみち]は 用心[ようじん]して 歩[ある]きましょう。|Gehen wir nachts vorsichtig.|Nomen (mit する)
忘年会|忘年会[ぼうねんかい]|Jahresabschlussfeier|明日[あした]は 会社[かいしゃ]の 忘年会[ぼうねんかい]があります。|Morgen ist die Jahresabschlussfeier der Firma.|Nomen
なるべく|なるべく|möglichst, so … wie möglich|なるべく 早[はや]く 仕事[しごと]を 終[お]わらせてください。|Beenden Sie die Arbeit bitte möglichst früh.|Adverb
度忘れ|度忘[どわす]れ|plötzliches Entfallen, Blackout|彼[かれ]の 名前[なまえ]を 度忘[どわす]れしたぞ。|Sein Name ist mir gerade entfallen.|Nomen (mit する)
知事|知事[ちじ]|Gouverneur(in)|彼[かれ]は 有能[ゆうのう]な 知事[ちじ]ね。|Er ist ein fähiger Gouverneur.|Nomen
未知|未知[みち]|unbekannt|ここからは 未知[みち]の 領域[りょういき]です。|Ab hier beginnt unbekanntes Gebiet.|Nomen
通知|通知[つうち]|Benachrichtigung, Mitteilung|明日[あす]、 詳細[しょうさい]を 通知[つうち]します。|Die Einzelheiten teile ich Ihnen morgen mit.|Nomen (mit する)
無知|無知[むち]|Unwissenheit|彼女[かのじょ]は 政治[せいじ]について 無知[むち]でした。|Sie hatte von Politik keine Ahnung.|な-Adjektiv
テーマ|テーマ|Thema|講演[こうえん]のテーマは 何[なん]ですか。|Was ist das Thema des Vortrags?|Nomen
知人|知人[ちじん]|Bekannte(r)|彼[かれ]は 昔[むかし]からの 知人[ちじん]です。|Er ist ein alter Bekannter.|Nomen
天才|天才[てんさい]|Genie|彼[かれ]は 笑[わら]いの 天才[てんさい]だね。|Er ist ein Genie des Humors.|Nomen
本能|本能[ほんのう]|Instinkt|動物[どうぶつ]は 本能[ほんのう]のまま 動[うご]くね。|Tiere handeln rein nach Instinkt.|Nomen
有能|有能[ゆうのう]|fähig, tüchtig|彼女[かのじょ]はとても 有能[ゆうのう]な 部下[ぶか]です。|Sie ist eine sehr fähige Mitarbeiterin.|な-Adjektiv
知能|知能[ちのう]|Intelligenz|あの 子[こ]の 知能[ちのう]はとても 高[たか]いそうです。|Das Kind soll sehr intelligent sein.|Nomen
無能|無能[むのう]|unfähig|彼[かれ]は 無能[むのう]だ。|Er ist unfähig.|な-Adjektiv
ムード|ムード|Stimmung, Atmosphäre|部屋[へや]を 暗[くら]くしてムードを 出[だ]してみたよ。|Ich habe das Zimmer abgedunkelt, um Stimmung zu schaffen.|Nomen
能|能[のう]|Nō (klassisches japanisches Theater)|先日[せんじつ]、 初[はじ]めて 能[のう]を 見[み]に 行[い]きました。|Neulich war ich zum ersten Mal im Nō-Theater.|Nomen
能|能[のう]|Fähigkeit, Können|彼[かれ]は 勉強[べんきょう]するしか 能[のう]のない 人間[にんげん]だね。|Er ist ein Mensch, der nichts kann außer lernen.|Nomen
不安|不安[ふあん]|Unruhe, Sorge|明日[あす]、 病院[びょういん]に 検査[けんさ]に 行[い]くので 少[すこ]し 不安[ふあん]です。|Ich gehe morgen zur Untersuchung ins Krankenhaus und bin etwas beunruhigt.|な-Adjektiv
不満|不満[ふまん]|Unzufriedenheit|私[わたし]は 彼[かれ]のやり 方[かた]には 不満[ふまん]です。|Ich bin mit seiner Vorgehensweise unzufrieden.|な-Adjektiv
不足|不足[ふそく]|Mangel, Knappheit|今年[ことし]はひどい 水[みず] 不足[ぶそく]よ。|Dieses Jahr herrscht schlimmer Wassermangel.|Nomen (mit する)
どく|どく|aus dem Weg gehen, Platz machen|そこをどいてください。|Gehen Sie da bitte zur Seite.|Verb
不可能|不可能[ふかのう]|unmöglich|レポートを1 日[にち]で 仕上[しあ]げるのは 不可能[ふかのう]です。|Es ist unmöglich, den Bericht an einem Tag fertigzustellen.|な-Adjektiv
不十分|不十分[ふじゅうぶん]|unzureichend|その 程度[ていど]の 努力[どりょく]では 不十分[ふじゅうぶん]です。|Anstrengung in diesem Maß reicht nicht aus.|な-Adjektiv
不明|不明[ふめい]|unklar, unbekannt|その 病気[びょうき]は 原因[げんいん] 不明[ふめい]と 言[い]われているんだよ。|Die Ursache dieser Krankheit gilt als unbekannt.|な-Adjektiv
不良|不良[ふりょう]|schlecht, mangelhaft; Halbstarker|不良[ふりょう] 品[ひん]を 返品[へんぴん]したよ。|Ich habe die fehlerhafte Ware zurückgegeben.|な-Adjektiv
不合格|不合格[ふごうかく]|Nichtbestehen, Durchfallen|残念[ざんねん]ながら 試験[しけん]は 不合格[ふごうかく]でした。|Leider habe ich die Prüfung nicht bestanden.|Nomen
マーケット|マーケット|Markt|彼[かれ]はイタリアのマーケットを 開拓[かいたく]しました。|Er hat den italienischen Markt erschlossen.|Nomen
不通|不通[ふつう]|Unterbrechung (Verkehr, Verbindung)|今朝[けさ]、 停電[ていでん]で 電車[でんしゃ]が 不通[ふつう]になったよ。|Heute Morgen fuhren wegen eines Stromausfalls keine Züge.|Nomen
便り|便[たよ]り|Nachricht, Brief|月[つき]に 一度母[いちど はは]から 便[たよ]りが 来[き]ます。|Einmal im Monat kommt ein Brief von meiner Mutter.|Nomen
大便|大便[だいべん]|Stuhlgang, Kot|病院[びょういん]で 大便[だいべん]の 検査[けんさ]をした。|Im Krankenhaus wurde mein Stuhl untersucht.|Nomen (mit する)
番|番[ばん]|an der Reihe; Wache|今日[きょう]は 私[わたし]が 皿[さら]を 洗[あら]う 番[ばん]ですね。|Heute bin ich mit dem Abwasch dran.|Nomen
長所|長所[ちょうしょ]|Stärke, Vorzug|君[きみ]の 長所[ちょうしょ]は 明[あか]るいところだね。|Deine Stärke ist deine Fröhlichkeit.|Nomen
ファッション|ファッション|Mode|彼女[かのじょ]はファッションの 専門家[せんもんか]だ。|Sie ist Modeexpertin.|Nomen
短所|短所[たんしょ]|Schwäche, Nachteil|すぐにあきらめてしまうのが 彼[かれ]の 短所[たんしょ]です。|Seine Schwäche ist, dass er schnell aufgibt.|Nomen
所々|所々[ところどころ]|hier und da, stellenweise|この 本[ほん]はページが 所々[ところどころ] 破[やぶ]れているね。|In diesem Buch sind die Seiten stellenweise eingerissen.|Nomen
名|名[な]|Name; Ruf|彼[かれ]は 名[な]の 通[とお]った 会社[かいしゃ]に 就職[しゅうしょく]しました。|Er hat eine Stelle bei einer namhaften Firma bekommen.|Nomen
名人|名人[めいじん]|Meister(in), Könner(in)|彼[かれ]は 釣[つ]りの 名人[めいじん]です。|Er ist ein Meister im Angeln.|Nomen
地名|地名[ちめい]|Ortsname|その 地名[ちめい]は 聞[き]いたことがないなあ。|Diesen Ortsnamen habe ich noch nie gehört.|Nomen
名所|名所[めいしょ]|Sehenswürdigkeit, berühmter Ort|ここは 桜[さくら]の 名所[めいしょ]です。|Dieser Ort ist für seine Kirschblüten berühmt.|Nomen
ブレーキ|ブレーキ|Bremse|赤信号[あかしんごう]でブレーキを 踏[ふ]んだの。|Bei Rot habe ich auf die Bremse getreten.|Nomen
町外れ|町外[まちはず]れ|Stadtrand|彼女[かのじょ]は 町外[まちはず]れの 工場[こうじょう]で 働[はたら]いているよ。|Sie arbeitet in einer Fabrik am Stadtrand.|Nomen
町中|町中[まちなか]|in der Stadt, Innenstadt|町中[まちなか]で 彼女[かのじょ]に 出会[であ]ったよ。|Ich habe sie in der Stadt getroffen.|Nomen
村|村[むら]|Dorf|私[わたし]は 隣[となり]の 村[むら]から 来[き]ました。|Ich komme aus dem Nachbardorf.|Nomen
都内|都内[とない]|im Stadtgebiet von Tokio|彼[かれ]の 職場[しょくば]は 都内[とない]にあります。|Sein Arbeitsplatz ist in Tokio.|Nomen
都心|都心[としん]|Stadtzentrum|彼[かれ]は 都心[としん]に 住[す]んでいます。|Er wohnt im Stadtzentrum.|Nomen
ミス|ミス|Fehler|ミスは 誰[だれ]にでもあります。|Fehler macht jeder.|Nomen (mit する)
都|都[と]|Präfektur Tokio (Verwaltungseinheit)|彼女[かのじょ]は 都[と]の 職員[しょくいん]です。|Sie ist Angestellte der Stadtverwaltung von Tokio.|Nomen
都会|都会[とかい]|Großstadt|彼[かれ]は 都会[とかい]での 生活[せいかつ]を 楽[たの]しんでいるの。|Er genießt das Leben in der Großstadt.|Nomen
都|都[みやこ]|Hauptstadt, Metropole|ミラノはファッションの 都[みやこ]です。|Mailand ist die Hauptstadt der Mode.|Nomen
様子|様子[ようす]|Zustand, Aussehen, Anschein|彼女[かのじょ]の 様子[ようす]を 見[み]てきます。|Ich sehe mal nach, wie es ihr geht.|Nomen
物価|物価[ぶっか]|Preise, Preisniveau|この 国[くに]の 物価[ぶっか]はここ10 年[ねん]でだいぶ 上[あ]がったね。|Die Preise in diesem Land sind in den letzten zehn Jahren deutlich gestiegen.|Nomen
ヨット|ヨット|Segelboot, Jacht|ヨットでクルージングを 楽[たの]しみましたわ。|Wir haben eine Fahrt mit der Jacht genossen.|Nomen
物体|物体[ぶったい]|Objekt, Körper|謎[なぞ]の 物体[ぶったい]が 空[そら]を 飛[と]んでいます。|Ein rätselhaftes Objekt fliegt am Himmel.|Nomen
本物|本物[ほんもの]|das Echte, Original|これは 本物[ほんもの]のダイヤモンドです。|Das ist ein echter Diamant.|Nomen
物理|物理[ぶつり]|Physik|彼[かれ]は 物理[ぶつり]を 専攻[せんこう]している。|Er studiert Physik im Hauptfach.|Nomen
物事|物事[ものごと]|Dinge, Angelegenheiten|彼[かれ]はいつも 物事[ものごと]を 深[ふか]く 考[かんが]えるの。|Er denkt immer gründlich über die Dinge nach.|Nomen
名物|名物[めいぶつ]|Spezialität, berühmtes Erzeugnis|この 町[まち]の 名物[めいぶつ]はぶどうです。|Die Spezialität dieser Stadt sind Weintrauben.|Nomen
物知り|物知[ものし]り|kenntnisreicher Mensch|あの 老人[ろうじん]はとても 物知[ものし]りだね。|Der alte Mann dort weiß sehr viel.|Nomen
なかなか|なかなか|ziemlich, recht|彼女[かのじょ]は 絵[え]がなかなか 上手[じょうず]です。|Sie malt ziemlich gut.|Adverb
物覚え|物覚[ものおぼ]え|Merkfähigkeit, Gedächtnis|彼女[かのじょ]は 物覚[ものおぼ]えがいい。|Sie hat eine gute Auffassungsgabe.|Nomen
体重|体重[たいじゅう]|Körpergewicht|私[わたし]は 毎朝[まいあさ] 体重[たいじゅう]を 測[はか]っています。|Ich wiege mich jeden Morgen.|Nomen
手軽|手軽[てがる]|einfach, unkompliziert|手軽[てがる]に 作[つく]れる 料理[りょうり]を 教[おし]えてください。|Zeigen Sie mir bitte Gerichte, die sich einfach zubereiten lassen.|Adjektiv
多量|多量[たりょう]|große Menge|その 事故[じこ]で 多量[たりょう]のガス 漏[も]れがあったね。|Bei dem Unfall ist eine große Menge Gas ausgetreten.|Nomen
量る|量[はか]る|wiegen, abmessen|はかりで 小麦粉[こむぎこ]の 分量[ぶんりょう]を 量[はか]ったよ。|Ich habe die Mehlmenge mit der Waage abgewogen.|Verb
ロック|ロック|Rock (Musik)|俺[おれ]はロックを 聞[き]くのが 好[す]きだ。|Ich höre gern Rock.|Nomen
量|量[りょう]|Menge|最近[さいきん]、 食事[しょくじ]の 量[りょう]を 減[へ]らしています。|In letzter Zeit reduziere ich meine Essensmenge.|Nomen
大量|大量[たいりょう]|große Menge, Masse|昨日[きのう] 大量[たいりょう]のゴミが 出[で]たの。|Gestern ist sehr viel Müll angefallen.|Nomen
年配|年配[ねんぱい]|fortgeschrittenes Alter, älter|年配[ねんぱい]の 人[ひと]に 席[せき]を 譲[ゆず]りました。|Ich habe einem älteren Menschen meinen Platz überlassen.|Nomen
送金|送金[そうきん]|Überweisung, Geldsendung|取引先[とりひきさき]への 送金[そうきん]を 済[す]ませました。|Ich habe die Überweisung an den Geschäftspartner erledigt.|Nomen (mit する)
郵送|郵送[ゆうそう]|Postversand|書類[しょるい]を 郵送[ゆうそう]してください。|Schicken Sie die Unterlagen bitte per Post.|Nomen (mit する)
わざわざ|わざわざ|extra, eigens|わざわざ 来[き]てくれてありがとう。|Danke, dass du extra gekommen bist.|Adverb
取り上げる|取[と]り 上[あ]げる|aufgreifen; wegnehmen|危[あぶ]ないので 子供[こども]からライターを 取[と]り 上[あ]げました。|Ich habe dem Kind das Feuerzeug weggenommen, weil es gefährlich ist.|Verb
取り入れる|取[と]り 入[い]れる|aufnehmen, übernehmen; einbringen|彼[かれ]は 新[あたら]しいアイデアをすぐ 取[と]り 入[い]れます。|Er greift neue Ideen sofort auf.|Verb
取り決め|取[と]り 決[き]め|Vereinbarung, Abmachung|これは 会社間[かいしゃかん]の 取[と]り 決[き]めです。|Das ist eine Vereinbarung zwischen den Firmen.|Nomen
取れる|取[と]れる|geerntet werden, gefangen werden|このナスは 畑[はたけ]で 取[と]れたばかりです。|Diese Auberginen sind frisch vom Feld.|Verb
取り消す|取[と]り 消[け]す|stornieren, zurücknehmen|ホテルの 予約[よやく]を 取[と]り 消[け]したよ。|Ich habe die Hotelreservierung storniert.|Verb
取消し|取消[とりけ]し|Stornierung, Widerruf|彼[かれ]は 免許[めんきょ] 取消[とりけ]しの 処分[しょぶん]を 受[う]けたよ。|Ihm wurde der Führerschein entzogen.|Nomen (mit する)
パイロット|パイロット|Pilot(in)|彼[かれ]はパイロットです。|Er ist Pilot.|Nomen
取り出す|取[と]り 出[だ]す|herausnehmen|彼[かれ]はポケットから 財布[さいふ]を 取[と]り 出[だ]したの。|Er holte das Portemonnaie aus der Tasche.|Verb
届け|届[とど]け|Meldung, Anzeige (bei einer Behörde)|郵便局[ゆうびんきょく]に 引[ひ]っ 越[こ]しの 届[とど]けを 出[だ]したよ。|Ich habe bei der Post den Umzug gemeldet.|Nomen
待ち合わせ|待[ま]ち 合[あ]わせ|Verabredung, Treffen|明日[あす]の 待[ま]ち 合[あ]わせは11 時[じ]です。|Das Treffen morgen ist um elf Uhr.|Nomen (mit する)
待ち遠しい|待[ま]ち 遠[どお]しい|sehnlich erwartet, kaum erwarten können|入学式[にゅうがくしき]が 待[ま]ち 遠[どお]しいです。|Ich kann die Aufnahmefeier kaum erwarten.|Adjektiv
待ち合わせる|待[ま]ち 合[あ]わせる|sich verabreden, sich treffen|彼[かれ]と 新宿[しんじゅく]で 待[ま]ち 合[あ]わせました。|Ich habe mich mit ihm in Shinjuku getroffen.|Verb
どうやら|どうやら|anscheinend, offenbar|明日[あした]はどうやら 雨[あめ]らしいよ。|Morgen soll es anscheinend regnen.|Adverb
持ち物|持[も]ち 物[もの]|persönliche Sachen, Besitz|持[も]ち 物[もの]には 名前[なまえ]を 書[か]いてください。|Schreiben Sie bitte Ihren Namen auf Ihre Sachen.|Nomen
長持ち|長持[ながも]ち|lange halten, Haltbarkeit|このコートは 長持[ながも]ちしている。|Dieser Mantel hält schon lange.|Nomen (mit する)
値打ち|値打[ねう]ち|Wert|この 絵[え]はとても 値打[ねう]ちがあります。|Dieses Bild ist sehr wertvoll.|Nomen
投書|投書[とうしょ]|Leserbrief, Zuschrift|その 事件[じけん]について 新聞[しんぶん]に 投書[とうしょ]したんだ。|Ich habe wegen des Vorfalls einen Leserbrief an die Zeitung geschrieben.|Nomen (mit する)
役所|役所[やくしょ]|Amt, Behörde|役所[やくしょ]で 住民票[じゅうみんひょう]をもらってきた。|Ich habe mir auf dem Amt eine Meldebescheinigung geholt.|Nomen
ふと|ふと|plötzlich, zufällig|ふと 昔[むかし]の 事[こと]を 思[おも]い 出[だ]したんだ。|Mir ist plötzlich etwas von früher eingefallen.|Adverb
役人|役人[やくにん]|Beamte(r)|叔父[おじ]は 役人[やくにん]として30 年働[ねん はたら]きました。|Mein Onkel hat 30 Jahre als Beamter gearbeitet.|Nomen
役目|役目[やくめ]|Aufgabe, Pflicht|私[わたし]は 無事[ぶじ]に 役目[やくめ]を 終[お]えたよ。|Ich habe meine Aufgabe ohne Zwischenfälle erfüllt.|Nomen
役|役[やく]|Rolle; Amt|彼女[かのじょ]は 弁護士[べんごし]の 役[やく]を 演[えん]じているんだ。|Sie spielt die Rolle einer Anwältin.|Nomen
生える|生[は]える|wachsen, sprießen|息子[むすこ]に 新[あたら]しい 歯[は]が 生[は]えました。|Mein Sohn hat einen neuen Zahn bekommen.|Verb
長生き|長生[ながい]き|langes Leben|この 村[むら]の 人[ひと]たちは 長生[ながい]きです。|Die Menschen in diesem Dorf werden alt.|Nomen (mit する)
ベテラン|ベテラン|erfahrene Kraft, alter Hase|彼[かれ]はベテランの 運転手[うんてんしゅ]です。|Er ist ein erfahrener Fahrer.|Nomen
生やす|生[は]やす|wachsen lassen|彼[かれ]はヒゲを 生[は]やしています。|Er lässt sich einen Bart stehen.|Verb
生|生[なま]|roh, frisch|彼[かれ]は 生[なま]の 魚[さかな]が 食[た]べられません。|Er kann keinen rohen Fisch essen.|な-Adjektiv
無生物|無生物[むせいぶつ]|unbelebtes Ding|岩[いわ]は 無生物[むせいぶつ]に 分類[ぶんるい]される。|Felsen werden den unbelebten Dingen zugeordnet.|Nomen
男性|男性[だんせい]|Mann, männlich|彼[かれ]は 素敵[すてき]な 男性[だんせい]です。|Er ist ein toller Mann.|Nomen
理性|理性[りせい]|Vernunft|人間[にんげん]は 理性[りせい]を 持[も]つ 動物[どうぶつ]です。|Der Mensch ist ein vernunftbegabtes Wesen.|Nomen
ボーナス|ボーナス|Bonus, Sonderzahlung|今年[ことし]はボーナスがたくさん 出[で]ました。|Dieses Jahr gab es einen hohen Bonus.|Nomen
土産|土産[みやげ]|Mitbringsel, Souvenir|土産[みやげ]に 日本酒[にほんしゅ]をもらった。|Ich habe als Mitbringsel Sake bekommen.|Nomen
徒歩|徒歩[とほ]|zu Fuß|家[いえ]から 駅[えき]まで 徒歩[とほ]3 分[ぷん]です。|Von zu Hause zum Bahnhof sind es drei Minuten zu Fuß.|Nomen
学ぶ|学[まな]ぶ|lernen, studieren|私[わたし]は 哲学[てつがく]を 学[まな]んでいます。|Ich studiere Philosophie.|Verb
文学|文学[ぶんがく]|Literatur|彼女[かのじょ]は 文学[ぶんがく]に 興味[きょうみ]を 持[も]っているのよ。|Sie interessiert sich für Literatur.|Nomen
体育|体育[たいいく]|Sportunterricht, Leibeserziehung|今日[きょう]は 体育[たいいく]の 授業[じゅぎょう]があります。|Heute haben wir Sportunterricht.|Nomen
そっくり|そっくり|zum Verwechseln ähnlich; vollständig|あの 親子[おやこ]はそっくりだね。|Die beiden, Elternteil und Kind, sehen sich zum Verwechseln ähnlich.|Adjektiv
体制|体制[たいせい]|System, Ordnung|政治[せいじ]の 体制[たいせい]を 変[か]える 必要[ひつよう]があります。|Das politische System muss geändert werden.|Nomen
強まる|強[つよ]まる|stärker werden|雨[あめ]はだんだん 強[つよ]まります。|Der Regen wird allmählich stärker.|Verb
強める|強[つよ]める|verstärken|火[ひ]を 強[つよ]めてください。|Stellen Sie die Flamme bitte größer.|Verb
力強い|力強[ちからづよ]い|kraftvoll; beruhigend|彼[かれ]は 力強[ちからづよ]い 演技[えんぎ]をするね。|Er spielt kraftvoll.|Adjektiv
強気|強気[つよき]|forsch, selbstsicher|彼女[かのじょ]は 強気[つよき]な 女性[じょせい]ですね。|Sie ist eine selbstsichere Frau.|な-Adjektiv
レンズ|レンズ|Linse, Brillenglas|眼鏡[めがね]のレンズを 替[か]えました。|Ich habe die Brillengläser wechseln lassen.|Nomen
弱まる|弱[よわ]まる|schwächer werden|夜[よる]になって 風[かぜ]が 弱[よわ]まったね。|Am Abend hat der Wind nachgelassen.|Verb
弱める|弱[よわ]める|abschwächen|火[ひ]を 弱[よわ]めてください。|Stellen Sie die Flamme bitte kleiner.|Verb
弱る|弱[よわ]る|schwach werden; in Verlegenheit sein|彼[かれ]は 病気[びょうき]で 弱[よわ]っているんだ。|Er ist durch die Krankheit geschwächt.|Verb
弱み|弱[よわ]み|Schwachstelle|彼[かれ]は 私[わたし]の 弱[よわ]みを 握[にぎ]っているんだ。|Er hat etwas gegen mich in der Hand.|Nomen
弱気|弱気[よわき]|zaghaft, mutlos|彼[かれ]は 少[すこ]し 弱気[よわき]になっています。|Er ist ein wenig mutlos geworden.|な-Adjektiv
引き受ける|引[ひ]き 受[う]ける|übernehmen, annehmen|新[あたら]しい 仕事[しごと]を 引[ひ]き 受[う]けたよ。|Ich habe eine neue Aufgabe übernommen.|Verb
ペース|ペース|Tempo|彼[かれ]はとても 早[はや]いペースで 走[はし]っているね。|Er läuft in sehr hohem Tempo.|Nomen
引き上げる|引[ひ]き 上[あ]げる|hochziehen, bergen; anheben|沈[しず]んだ 船[ふね]を 引[ひ]き 上[あ]げたんだ。|Das gesunkene Schiff wurde gehoben.|Verb
引き出す|引[ひ]き 出[だ]す|herausholen, hervorlocken; abheben|先生[せんせい]が 私[わたし]の 能力[のうりょく]を 引[ひ]き 出[だ]してくれました。|Der Lehrer hat meine Fähigkeiten zum Vorschein gebracht.|Verb
引き取る|引[ひ]き 取[と]る|übernehmen, zu sich nehmen|彼女[かのじょ]は 息子[むすこ]を 引[ひ]き 取[と]ったの。|Sie hat ihren Sohn zu sich genommen.|Verb
値引き|値引[ねび]き|Preisnachlass|あと1000 円[えん] 値引[ねび]きしましょう。|Ich gehe noch um 1.000 Yen herunter.|Nomen (mit する)
長引く|長引[ながび]く|sich in die Länge ziehen|会議[かいぎ]が 長引[ながび]いているようです。|Die Besprechung zieht sich offenbar hin.|Verb
マラソン|マラソン|Marathon|彼[かれ]はマラソンに 出場[しゅつじょう]したよ。|Er hat am Marathon teilgenommen.|Nomen
引きずる|引[ひ]きずる|schleifen, hinter sich herziehen|彼[かれ]はまだ 失恋[しつれん]を 引[ひ]きずっています。|Er trägt seinen Liebeskummer immer noch mit sich herum.|Verb
引き分け|引[ひ]き 分[わ]け|Unentschieden|この 勝負[しょうぶ]は 引[ひ]き 分[わ]けです。|Dieses Spiel endet unentschieden.|Nomen
引き止める|引[ひ]き 止[と]める|zurückhalten, aufhalten|帰[かえ]ろうとする 友達[ともだち]を 引[ひ]き 止[と]めたんだ。|Ich habe meinen Freund zurückgehalten, als er gehen wollte.|Verb
見習う|見習[みなら]う|sich ein Beispiel nehmen, nachahmen|彼[かれ]を 見習[みなら]ってもっと 勉強[べんきょう]します。|Ich nehme mir ein Beispiel an ihm und lerne mehr.|Verb
慣れ|慣[な]れ|Gewöhnung, Routine|仕事[しごと]には 慣[な]れも 必要[ひつよう]です。|Bei der Arbeit braucht es auch Routine.|Nomen
よほど|よほど|sehr, in hohem Maße|今日[きょう]の 遠足[えんそく]はよほど 楽[たの]しかったらしい。|Der Ausflug heute muss sehr schön gewesen sein.|Adverb
慣らす|慣[な]らす|gewöhnen|水[みず]の 温度[おんど]に 体[からだ]を 慣[な]らしてから、 潜[もぐ]ったほうがいいぞ。|Man sollte den Körper erst an die Wassertemperatur gewöhnen und dann tauchen.|Verb
入試|入試[にゅうし]|Aufnahmeprüfung|明日[あした]は 高校[こうこう]の 入試[にゅうし]です。|Morgen ist die Aufnahmeprüfung der Oberschule.|Nomen
試す|試[ため]す|ausprobieren, testen|彼[かれ]はそのソフトウェアを 試[ため]したの。|Er hat die Software ausprobiert.|Verb
試し|試[ため]し|Versuch, Probe|試[ため]しにこの 曲[きょく]を 弾[ひ]いてみてください。|Spielen Sie dieses Stück doch einmal zur Probe.|Nomen
体験|体験[たいけん]|Erlebnis, persönliche Erfahrung|今日[きょう]、 珍[めずら]しい 体験[たいけん]をしました。|Heute habe ich etwas Ungewöhnliches erlebt.|Nomen (mit する)
物質|物質[ぶっしつ]|Stoff, Substanz|この 製品[せいひん]は 有害[ゆうがい]な 化学[かがく] 物質[ぶっしつ]を 含[ふく]んでいるわよ。|Dieses Produkt enthält schädliche Chemikalien.|Nomen
ラグビー|ラグビー|Rugby|父[ちち]は 若[わか]いころラグビーの 選手[せんしゅ]でした。|Mein Vater war in seiner Jugend Rugbyspieler.|Nomen
品質|品質[ひんしつ]|Qualität (von Waren)|このメーカーの 製品[せいひん]は 高[こう] 品質[ひんしつ]だわね。|Die Produkte dieses Herstellers sind von hoher Qualität.|Nomen
本質|本質[ほんしつ]|Wesen, Kern|彼[かれ]は 仕事[しごと]の 本質[ほんしつ]をよく 理解[りかい]しているわね。|Er versteht den Kern der Arbeit gut.|Nomen
問う|問[と]う|fragen; zur Bedingung machen|応募者[おうぼしゃ]の 年齢[ねんれい]は 問[と]いません。|Das Alter der Bewerber spielt keine Rolle.|Verb
問い合わせる|問[と]い 合[あ]わせる|anfragen, sich erkundigen|保険会社[ほけん がいしゃ]に 問[と]い 合[あ]わせます。|Ich frage bei der Versicherung nach.|Verb
問い|問[と]い|Frage|この 問[と]いに 答[こた]えられますか。|Können Sie diese Frage beantworten?|Nomen
ラッシュ|ラッシュ|Andrang, Stoßzeit|私[わたし]は 毎朝[まいあさ]ラッシュの 電車[でんしゃ]に 乗[の]っています。|Ich fahre jeden Morgen mit dem Zug zur Stoßzeit.|Nomen
問屋|問屋[とんや]|Großhandel, Großhändler|この 街[まち]には 家具[かぐ]の 問屋[とんや]がたくさんあります。|In dieser Stadt gibt es viele Möbelgroßhändler.|Nomen
話題|話題[わだい]|Gesprächsthema; viel besprochen|ここが 話題[わだい]のレストランです。|Das ist das Restaurant, von dem alle reden.|Nomen
題名|題名[だいめい]|Titel|この 本[ほん]の 題名[だいめい]は「 坊[ぼっ]ちゃん」です。|Der Titel dieses Buches ist „Botchan“.|Nomen
題|題[だい]|Titel, Thema|その 曲[きょく]の 題[だい]を 思[おも]い 出[だ]せません。|Mir fällt der Titel des Stücks nicht ein.|Nomen
単語|単語[たんご]|Wort, Vokabel|日本語[にほんご]の 単語[たんご]をいくつ 知[し]っていますか。|Wie viele japanische Wörter kennst du?|Nomen
ロープ|ロープ|Seil|ロープを 使[つか]って 崖[がけ]を 下[お]りたんだ。|Ich bin mit einem Seil die Klippe hinabgestiegen.|Nomen
単に|単[たん]に|bloß, einfach nur|心配[しんぱい]しないで、 単[たん]に 眠[ねむ]いだけです。|Keine Sorge, ich bin einfach nur müde.|Adverb
地点|地点[ちてん]|Punkt, Stelle|もうすぐ 目標[もくひょう]の 地点[ちてん]に 到達[とうたつ]します。|Gleich erreichen wir den Zielpunkt.|Nomen
満点|満点[まんてん]|volle Punktzahl|国語[こくご]のテストは 満点[まんてん]でした。|Im Japanischtest hatte ich die volle Punktzahl.|Nomen
点|点[てん]|Punkt|その 点[てん]は 心配[しんぱい]ありません。|In diesem Punkt besteht kein Grund zur Sorge.|Nomen
多数|多数[たすう]|große Anzahl, Mehrheit|その 仕事[しごと]に 多数[たすう]の 応募[おうぼ]があったよ。|Für die Stelle gab es zahlreiche Bewerbungen.|Nomen
ダム|ダム|Staudamm|今[いま]、ダムの 水[みず]が 少[すく]ないね。|Im Stausee ist zurzeit wenig Wasser.|Nomen
複数|複数[ふくすう]|mehrere; Plural|複数[ふくすう]のレポートをひとつにまとめています。|Ich fasse mehrere Berichte zu einem zusammen.|Nomen
無数|無数[むすう]|unzählig|宇宙[うちゅう]には 無数[むすう]の 星[ほし]があります。|Im Weltall gibt es unzählige Sterne.|な-Adjektiv
日数|日数[にっすう]|Anzahl der Tage|今月[こんげつ]は 出勤[しゅっきん] 日数[にっすう]が 多[おお]いです。|Diesen Monat habe ich viele Arbeitstage.|Nomen
点数|点数[てんすう]|Punktzahl, Note|今回[こんかい]はテストの 点数[てんすう]が 悪[わる]かった。|Diesmal war meine Punktzahl im Test schlecht.|Nomen
単数|単数[たんすう]|Singular, Einzahl|pen[ぺん]は 単数[たんすう]で pens[ぺんず]は 複数[ふくすう]です。|„Pen“ ist Singular, „pens“ ist Plural.|Nomen
手数|手数[てすう]|Mühe, Umstände|お 手数[てすう]ですがよろしくお 願[ねが]いします。|Entschuldigen Sie die Umstände, ich bitte Sie darum.|Nomen
ダウン|ダウン|Ausfall, Absturz; unten|サーバーがダウンしています。|Der Server ist ausgefallen.|Nomen (mit する)
人数|人数[にんずう]|Personenzahl|参加者[さんかしゃ]の 人数[にんずう]を 教[おし]えてください。|Sagen Sie mir bitte die Zahl der Teilnehmer.|Nomen
回り|回[まわ]り|Umgebung, um … herum|先生[せんせい]の 周[まわ]りに 集[あつ]まってください。|Versammelt euch bitte um den Lehrer.|Nomen
回り道|回[まわ]り 道[みち]|Umweg|今日[きょう]は 回[まわ]り 道[みち]して 帰[かえ]ろう。|Gehen wir heute auf einem Umweg nach Hause.|Nomen
枚数|枚数[まいすう]|Anzahl (von Blättern, flachen Dingen)|コピーの 枚数[まいすう]を 数[かぞ]えてください。|Zählen Sie bitte die Kopien.|Nomen
負け|負[ま]け|Niederlage|この 勝負[しょうぶ]はあなたの 負[ま]けです。|Diese Partie hast du verloren.|Nomen
トレーニング|トレーニング|Training|彼[かれ]は 毎日[まいにち]トレーニングをするの。|Er trainiert jeden Tag.|Nomen (mit する)
負担|負担[ふたん]|Last, Kostenübernahme|交通費[こうつうひ]は 個人[こじん] 負担[ふたん]です。|Die Fahrtkosten trägt jeder selbst.|Nomen (mit する)
分担|分担[ぶんたん]|Aufteilung (von Aufgaben)|私[わたし]たち 夫婦[ふうふ]は 家事[かじ]を 分担[ぶんたん]しています。|Mein Mann und ich teilen uns die Hausarbeit.|Nomen (mit する)
当初|当初[とうしょ]|Anfang, ursprünglich|当初[とうしょ]の 計画[けいかく]ではもっと 早[はや]く 終[お]わるはずでした。|Nach dem ursprünglichen Plan hätte es früher fertig sein sollen.|Nomen
当局|当局[とうきょく]|die zuständigen Behörden|その 事件[じけん]については 当局[とうきょく]が 調査[ちょうさ]しています。|Die Behörden untersuchen den Vorfall.|Nomen
当日|当日[とうじつ]|der betreffende Tag, am Tag selbst|入場券[にゅうじょうけん]は 当日[とうじつ]でも 買[か]えますよ。|Eintrittskarten kann man auch am Tag selbst kaufen.|Nomen
そっと|そっと|sanft, leise, behutsam|母親[ははおや]は 娘[むすめ]の 髪[かみ]をそっとなでたの。|Die Mutter strich ihrer Tochter sanft übers Haar.|Adverb
手当て|手当[てあ]て|Zulage; ärztliche Versorgung|彼女[かのじょ]は 急[いそ]いで 怪我[けが]の 手当[てあ]てをしたよ。|Sie hat die Verletzung rasch versorgt.|Nomen (mit する)
当分|当分[とうぶん]|vorerst, einstweilen|彼女[かのじょ]は 当分[とうぶん] 学校[がっこう]を 休[やす]むそうです。|Sie wird wohl vorerst nicht zur Schule kommen.|Adverb
当人|当人[とうにん]|der/die Betreffende selbst|当人[とうにん]は 意外[いがい]に 平気[へいき]なようね。|Der Betreffende selbst scheint es überraschend gelassen zu nehmen.|Nomen
当番|当番[とうばん]|Dienst, Diensthabende(r)|今日[きょう]は 私[わたし]が 掃除[そうじ]の 当番[とうばん]です。|Heute habe ich Putzdienst.|Nomen
日当たり|日当[ひあ]たり|Sonneneinstrahlung, sonnige Lage|この 部屋[へや]は 日当[ひあ]たりがいい。|Dieses Zimmer ist schön sonnig.|Nomen
天然|天然[てんねん]|natürlich, Natur-|ここは 天然[てんねん]の 温泉[おんせん]です。|Das hier ist eine natürliche heiße Quelle.|Nomen
マーク|マーク|Zeichen, Logo|このブランドのマークは 可愛[かわい]いですね。|Das Logo dieser Marke ist niedlich.|Nomen (mit する)
文法|文法[ぶんぽう]|Grammatik|今日[きょう]は 英語[えいご]の 文法[ぶんぽう]を 勉強[べんきょう]します。|Heute lerne ich englische Grammatik.|Nomen
法学部|法学部[ほうがくぶ]|juristische Fakultät|彼女[かのじょ]は 法学部[ほうがくぶ]の 学生[がくせい]です。|Sie studiert an der juristischen Fakultät.|Nomen
法|法[ほう]|Gesetz, Recht|国民[こくみん]は 法[ほう]に 従[したが]わなければならないよ。|Die Bürger müssen sich an das Gesetz halten.|Nomen
法則|法則[ほうそく]|Gesetzmäßigkeit, Regel|勝利[しょうり]するには 法則[ほうそく]があるそうだ。|Für den Sieg soll es Gesetzmäßigkeiten geben.|Nomen
不規則|不規則[ふきそく]|unregelmäßig|最近[さいきん]、 不規則[ふきそく]な 生活[せいかつ]をしている。|In letzter Zeit lebe ich unregelmäßig.|な-Adjektiv
たった|たった|nur, bloß|財布[さいふ]の 中[なか]にたった 1000円[せんえん]しかないよ。|Ich habe nur 1.000 Yen im Portemonnaie.|Adverb
経る|経[へ]る|durchlaufen; vergehen|彼[かれ]は 新聞記者[しんぶん きしゃ]を 経[へ]て 作家[さっか]になりました。|Er war erst Zeitungsjournalist und wurde dann Schriftsteller.|Verb
有利|有利[ゆうり]|vorteilhaft, günstig|資格[しかく]があると 就職[しゅうしょく]に 有利[ゆうり]です。|Mit einer Qualifikation ist man bei der Stellensuche im Vorteil.|な-Adjektiv
不利|不利[ふり]|Nachteil, ungünstig|彼[かれ]は 今[いま]、 不利[ふり]な 立場[たちば]にいます。|Er ist jetzt in einer ungünstigen Lage.|な-Adjektiv
利口|利口[りこう]|klug, schlau|あの 犬[いぬ]はとても 利口[りこう]ですね。|Der Hund dort ist sehr klug.|な-Adjektiv
利子|利子[りし]|Zinsen|借金[しゃっきん]に 利子[りし]をつけて 返[かえ]したの。|Er hat die Schulden mit Zinsen zurückgezahlt.|Nomen
たまたま|たまたま|zufällig|道[みち]でたまたま 友達[ともだち]に 会[あ]った。|Ich habe auf der Straße zufällig einen Freund getroffen.|Adverb
左利き|左利[ひだりき]き|Linkshänder(in), linkshändig|私[わたし]の 息子[むすこ]は 左利[ひだりき]きです。|Mein Sohn ist Linkshänder.|Nomen
利益|利益[りえき]|Gewinn, Nutzen|先月[せんげつ]の 利益[りえき]は200 万円[まんえん]でした。|Der Gewinn im letzten Monat betrug zwei Millionen Yen.|Nomen
有益|有益[ゆうえき]|nützlich, gewinnbringend|昨日[きのう]の 話[はな]し 合[あ]いは 有益[ゆうえき]でした。|Die Besprechung gestern war nützlich.|な-Adjektiv
買収|買収[ばいしゅう]|Aufkauf, Übernahme; Bestechung|彼[かれ]は 買収[ばいしゅう]されたらしいわ。|Er soll bestochen worden sein.|Nomen (mit する)
年収|年収[ねんしゅう]|Jahreseinkommen|税金[ぜいきん]の 額[がく]は 年収[ねんしゅう]によって 変[か]わります。|Die Höhe der Steuern hängt vom Jahreseinkommen ab.|Nomen
木造|木造[もくぞう]|aus Holz gebaut|隣[となり]に 木造[もくぞう]の 家[いえ]が 建[た]ったね。|Nebenan wurde ein Holzhaus gebaut.|Nomen
テンポ|テンポ|Tempo|この 曲[きょく]はテンポが 速[はや]いですね。|Dieses Stück hat ein schnelles Tempo.|Nomen
必然|必然[ひつぜん]|zwangsläufig, unvermeidlich|私[わたし]と 彼[かれ]が 出会[であ]ったのは 必然[ひつぜん]だったの。|Dass er und ich uns begegnet sind, war Schicksal.|Nomen
要する|要[よう]する|erfordern, benötigen|このビルは 完成[かんせい]までに2 年[ねん]を 要[よう]した。|Der Bau dieses Gebäudes hat zwei Jahre in Anspruch genommen.|Verb
不要|不要[ふよう]|unnötig, nicht mehr gebraucht|不要[ふよう]になったパソコンを 処分[しょぶん]したんだ。|Ich habe den nicht mehr benötigten Computer entsorgt.|な-Adjektiv
要するに|要[よう]するに|kurz gesagt|要[よう]するに 時機[じき]を 待[ま]つべきだ。|Kurz gesagt, wir sollten den richtigen Zeitpunkt abwarten.|Adverb
不必要|不必要[ふひつよう]|unnötig, überflüssig|不必要[ふひつよう]なファイルは 削除[さくじょ]してください。|Löschen Sie bitte nicht benötigte Dateien.|な-Adjektiv
プラン|プラン|Plan|彼女[かのじょ]と 旅行[りょこう]のプランを 考[かんが]えました。|Ich habe mir mit ihr einen Reiseplan überlegt.|Nomen
要点|要点[ようてん]|Hauptpunkt, Kernpunkt|話[はなし]の 要点[ようてん]だけ 教[おし]えてください。|Nennen Sie mir bitte nur die Kernpunkte.|Nomen
求める|求[もと]める|verlangen, suchen, wünschen|子供[こども]は 親[おや]の 愛[あい]を 求[もと]めます。|Kinder suchen die Liebe ihrer Eltern.|Verb
要請|要請[ようせい]|Ersuchen, Bitte|その 国[くに]の 政府[せいふ]は 各国[かっこく]に 支援[しえん]を 要請[ようせい]したのよ。|Die Regierung dieses Landes hat andere Länder um Unterstützung gebeten.|Nomen (mit する)
額|額[ひたい]|Stirn|額[ひたい]に 汗[あせ]をかいたよ。|Ich habe auf der Stirn geschwitzt.|Nomen
計る|計[はか]る|messen (Zeit, Menge)|100メートル 走[そう]のタイムを 計[はか]ったんだ。|Ich habe die Zeit beim 100-Meter-Lauf gestoppt.|Verb
ほっと|ほっと|erleichtert|家[いえ]に 着[つ]いてほっとしたよ。|Ich war erleichtert, als ich zu Hause ankam.|Adverb
体温計|体温計[たいおんけい]|Fieberthermometer|体温計[たいおんけい]が 壊[こわ]れてしまった。|Das Fieberthermometer ist kaputtgegangen.|Nomen
日差し|日差[ひざ]し|Sonnenlicht, Sonnenstrahlen|今日[きょう]は 日差[ひざ]しが 強[つよ]いですね。|Die Sonne scheint heute kräftig.|Nomen
物差し|物差[ものさ]し|Lineal; Maßstab|30センチの 物差[ものさ]しをください。|Ein 30-Zentimeter-Lineal, bitte.|Nomen
役割|役割[やくわり]|Rolle, Aufgabe|みんなで 役割[やくわり]を 分担[ぶんたん]しましょう。|Verteilen wir die Aufgaben untereinander.|Nomen
割合|割合[わりあい]|Verhältnis, Anteil|二[ふた]つの 薬品[やくひん]を1 対3[たい 3]の 割合[わりあい]で 混[ま]ぜたんだ。|Ich habe die beiden Chemikalien im Verhältnis 1 zu 3 gemischt.|Adverb
なるほど|なるほど|ach so, verstehe|なるほど、よく 分[わ]かりました。|Ach so, jetzt habe ich es gut verstanden.|Adverb
割り当て|割[わ]り 当[あ]て|Zuteilung|チケットの 割[わ]り 当[あ]ては 1人10枚[ひとり じゅうまい]です。|Jedem werden zehn Karten zugeteilt.|Nomen
割り当てる|割[わ]り 当[あ]てる|zuteilen, zuweisen|全員[ぜんいん]に 作業[さぎょう]が 割[わ]り 当[あ]てられました。|Allen wurde eine Aufgabe zugeteilt.|Verb
割り引く|割[わ]り 引[び]く|Rabatt geben, abziehen|定価[ていか]から2 000円[せんえん] 割[わ]り 引[び]きますよ。|Ich gebe Ihnen 2.000 Yen Nachlass auf den Listenpreis.|Verb
割に|割[わり]に|verhältnismäßig, ziemlich|この 映画[えいが]は 割[わり]に 面白[おもしろ]いわ。|Dieser Film ist ziemlich interessant.|Adverb
割り|割[わ]り|Rate, Verhältnis|3日[みっか]に1 度[ど]の 割[わ]りで 彼[かれ]からメールが 来[く]るの。|Er schreibt mir etwa alle drei Tage eine E-Mail.|Nomen
割り引き|割[わ]り 引[び]き|Rabatt, Ermäßigung|今日[きょう]は 全品10[ぜんぴん 10]% 割[わ]り 引[び]きです。|Heute gibt es auf alles 10 Prozent Rabatt.|Nomen (mit する)
バイト|バイト|Nebenjob (kurz)|今日[きょう]は6 時[じ]からバイトです。|Heute habe ich ab sechs meinen Nebenjob.|Nomen (mit する)
割合に|割合[わりあい]に|verhältnismäßig, relativ|今回[こんかい]のテストは 割合[わりあい]に 簡単[かんたん]でした。|Der Test war diesmal relativ einfach.|Adverb
残り|残[のこ]り|Rest|仕事[しごと]の 残[のこ]りは 家[いえ]でします。|Den Rest der Arbeit mache ich zu Hause.|Nomen
残らず|残[のこ]らず|restlos, ausnahmslos|ゴミを 残[のこ]らず 拾[ひろ]ったよ。|Ich habe den Müll restlos aufgesammelt.|Adverb
払い|払[はら]い|Zahlung, offene Rechnung|飲[の]み 屋[や]の 払[はら]いがたまっているんだ。|In der Kneipe hat sich meine Rechnung angehäuft.|Nomen
引き返す|引[ひ]き 返[かえ]す|umkehren|雨[あめ]が 強[つよ]かったので 引[ひ]き 返[かえ]したよ。|Der Regen war stark, deshalb bin ich umgekehrt.|Verb
ぶつける|ぶつける|anstoßen, gegen etwas schlagen|車[くるま]を 壁[かべ]にぶつけてしまいました。|Ich bin mit dem Auto gegen eine Mauer gefahren.|Verb
取り返す|取[と]り 返[かえ]す|zurückholen, zurückgewinnen|彼[かれ]はチャンピオンのタイトルを 取[と]り 返[かえ]したね。|Er hat sich den Meistertitel zurückgeholt.|Verb
申し出る|申[もう]し 出[で]る|anbieten, sich melden|彼[かれ]はプロジェクトへの 参加[さんか]を 申[もう]し 出[で]たよ。|Er hat angeboten, an dem Projekt mitzuarbeiten.|Verb
申し上げる|申[もう]し 上[あ]げる|sagen, mitteilen (bescheiden)|結果[けっか]を 申[もう]し 上[あ]げます。|Ich gebe das Ergebnis bekannt.|Verb
申す|申[もう]す|sagen, heißen (bescheiden)|私[わたくし]は 鈴木[すずき]と 申[もう]します。|Ich heiße Suzuki.|Verb
持ち込む|持[も]ち 込[こ]む|hineinbringen, mitbringen|機内[きない]に 荷物[にもつ]を 持[も]ち 込[こ]んだの。|Ich habe das Gepäck mit in die Kabine genommen.|Verb
タイヤ|タイヤ|Reifen|車[くるま]のタイヤを 換[か]えた。|Ich habe die Autoreifen gewechselt.|Nomen
見込み|見込[みこ]み|Aussicht, Erwartung|3 月[がつ]に 大学[だいがく]を 卒業[そつぎょう]の 見込[みこ]みです。|Ich werde voraussichtlich im März die Universität abschließen.|Nomen
申し込み|申[もう]し 込[こ]み|Anmeldung, Antrag|今日[きょう]、スポーツジムの 申[もう]し 込[こ]みをしました。|Heute habe ich mich im Fitnessstudio angemeldet.|Nomen
払い込む|払[はら]い 込[こ]む|einzahlen|授業料[じゅぎょうりょう]を 学校[がっこう]に 払[はら]い 込[こ]みました。|Ich habe die Schulgebühren an die Schule überwiesen.|Verb
飲み込む|飲[の]み 込[こ]む|hinunterschlucken; begreifen|彼[かれ]は 薬[くすり]を 一気[いっき]に 飲[の]み 込[こ]んだ。|Er schluckte die Medizin in einem Zug hinunter.|Verb
割り込む|割[わ]り 込[こ]む|sich hineindrängen, sich vordrängeln|車[くるま]が 前[まえ]に 割[わ]り 込[こ]んできた。|Ein Auto hat sich vor mich gedrängt.|Verb
引っ込む|引[ひ]っ 込[こ]む|sich zurückziehen, zurückgehen|ダイエットをしてお 腹[なか]が 引[ひ]っ 込[こ]みました。|Durch die Diät ist mein Bauch flacher geworden.|Verb
マイク|マイク|Mikrofon|彼女[かのじょ]はマイクを 持[も]って 話[はな]し 始[はじ]めたの。|Sie nahm das Mikrofon und begann zu sprechen.|Nomen
人込み|人込[ひとご]み|Menschengedränge|私[わたし]は 人込[ひとご]みが 好[す]きではありません。|Ich mag kein Gedränge.|Nomen
長期|長期[ちょうき]|langer Zeitraum, langfristig|今回[こんかい]は 長期[ちょうき]の 滞在[たいざい]です。|Diesmal ist es ein längerer Aufenthalt.|Nomen
短期|短期[たんき]|kurzer Zeitraum, kurzfristig|明日[あした]から2 週間[しゅうかん]、 短期[たんき]のアルバイトをします。|Ab morgen habe ich zwei Wochen lang einen kurzfristigen Aushilfsjob.|Nomen
短期大学|短期大学[たんきだいがく]|Kurzuniversität (zweijähriges College)|彼女[かのじょ]は 短期大学[たんきだいがく]で 日本文学[にほん ぶんがく]を 勉強[べんきょう]しました。|Sie hat an einer Kurzuniversität japanische Literatur studiert.|Nomen
有限|有限[ゆうげん]|begrenzt, endlich|宇宙[うちゅう]は 有限[ゆうげん]だと 思[おも]いますか。|Glaubst du, dass das Weltall endlich ist?|な-Adjektiv
ゆとり|ゆとり|Spielraum, Muße|最近[さいきん]、 生活[せいかつ]にゆとりがでてきました。|In letzter Zeit habe ich im Leben etwas mehr Luft.|Nomen
無限|無限[むげん]|unendlich, grenzenlos|資源[しげん]は 無限[むげん]ではありません。|Die Ressourcen sind nicht unendlich.|な-Adjektiv
無制限|無制限[むせいげん]|unbegrenzt|このサイトでは 音楽[おんがく]を 無制限[むせいげん]でダウンロードできる。|Auf dieser Website kann man unbegrenzt Musik herunterladen.|な-Adjektiv
値切る|値切[ねぎ]る|herunterhandeln, feilschen|彼[かれ]は 値切[ねぎ]るのが 上手[じょうず]です。|Er kann gut feilschen.|Verb
前売り券|前売[まえう]り 券[けん]|Vorverkaufskarte|コンサートの 前売[まえう]り 券[けん]を 手[て]に 入[い]れたんだ。|Ich habe eine Vorverkaufskarte für das Konzert bekommen.|Nomen
年代|年代[ねんだい]|Zeitalter, Generation; Jahrzehnt|私[わたし]と 彼[かれ]は 同[おな]じ 年代[ねんだい]です。|Er und ich sind derselbe Jahrgang.|Nomen
ぼんやり|ぼんやり|vage, geistesabwesend|彼[かれ]は 遠[とお]くをぼんやり 見[み]ていたの。|Er blickte geistesabwesend in die Ferne.|Adjektiv
代金|代金[だいきん]|Preis, Rechnungsbetrag|ここで 代金[だいきん]をお 支払[しはら]いください。|Bezahlen Sie bitte hier.|Nomen
目指す|目指[めざ]す|anstreben, zum Ziel haben|私[わたし]は 料理人[りょうりにん]を 目指[めざ]しています。|Ich möchte Koch werden.|Verb
指差す|指差[ゆびさ]す|mit dem Finger zeigen|みんなが 彼[かれ]の 指差[ゆびさ]す 方[ほう]を 見[み]たんだ。|Alle schauten in die Richtung, in die er zeigte.|Verb
人差し指|人差[ひとさ]し 指[ゆび]|Zeigefinger|彼女[かのじょ]は 人差[ひとさ]し 指[ゆび]を 怪我[けが]したの。|Sie hat sich am Zeigefinger verletzt.|Nomen
中指|中指[なかゆび]|Mittelfinger|中指[なかゆび]をドアに 挟[はさ]んでしまった。|Ich habe mir den Mittelfinger in der Tür eingeklemmt.|Nomen
定年|定年[ていねん]|Altersgrenze, Ruhestandsalter|彼[かれ]は 来年[らいねん] 定年[ていねん]を 迎[むか]える。|Er erreicht nächstes Jahr das Ruhestandsalter.|Nomen
たまらない|たまらない|unerträglich; unwiderstehlich|頭[あたま]が 痛[いた]くてたまらない。|Ich habe unerträgliche Kopfschmerzen.|Adjektiv
不安定|不安定[ふあんてい]|instabil, unsicher|最近[さいきん]、 体調[たいちょう]が 少[すこ]し 不安定[ふあんてい]です。|In letzter Zeit ist mein Befinden etwas wechselhaft.|な-Adjektiv
定員|定員[ていいん]|zulässige Personenzahl, Kapazität|降[お]りてください、 定員[ていいん]オーバーです。|Steigen Sie bitte aus, wir sind überbesetzt.|Nomen
定期|定期[ていき]|regelmäßig, feste Frist|定期[ていき] 演奏会[えんそうかい]は 年[ねん]に4 回[かい]あります。|Regelmäßige Konzerte finden viermal im Jahr statt.|Nomen
定価|定価[ていか]|Festpreis, Listenpreis|この 本[ほん]の 定価[ていか]は525 円[えん]です。|Der Listenpreis dieses Buches beträgt 525 Yen.|Nomen
未定|未定[みてい]|noch nicht festgelegt|この 件[けん]の 担当者[たんとうしゃ]は 未定[みてい]です。|Wer für diese Sache zuständig ist, steht noch nicht fest.|Nomen
モーター|モーター|Motor|車[くるま]のモーターを 修理[しゅうり]したぜ！|Ich habe den Automotor repariert!|Nomen
定食|定食[ていしょく]|Menü, Tagesgericht (Set)|昼[ひる]の 定食[ていしょく]は3 種類[しゅるい]あります。|Mittags gibt es drei verschiedene Menüs.|Nomen
定休日|定休日[ていきゅうび]|regulärer Ruhetag|この 店[みせ]は 水曜[すいよう]が 定休日[ていきゅうび]です。|Dieser Laden hat mittwochs Ruhetag.|Nomen
予算|予算[よさん]|Budget, Etat|車[くるま]の 費用[ひよう]、 予算[よさん]オーバーだ。|Die Kosten für das Auto sprengen das Budget.|Nomen
予報|予報[よほう]|Vorhersage|予報[よほう]では 明日[あした]は 雨[あめ]ですね。|Laut Vorhersage regnet es morgen.|Nomen (mit する)
予言|予言[よげん]|Prophezeiung, Vorhersage|彼[かれ]の 予言[よげん]は 当[あ]たったことがないね。|Seine Prophezeiungen sind noch nie eingetroffen.|Nomen (mit する)
まして|まして|geschweige denn, umso mehr|他人[たにん]でも 悲[かな]しいのだから、まして 本人[ほんにん]はどれほどでしょう。|Schon für Außenstehende ist es traurig, wie viel mehr dann für den Betroffenen selbst.|Adverb
束|束[たば]|Bündel, Bund|これは 一[ひと] 束[たば]で300 円[えん]です。|Das kostet 300 Yen pro Bund.|Nomen
花束|花束[はなたば]|Blumenstrauß|卒業式[そつぎょうしき]に 花束[はなたば]をもらいました。|Zur Abschlussfeier habe ich einen Blumenstrauß bekommen.|Nomen
変更|変更[へんこう]|Änderung|予定[よてい]が 変更[へんこう]になりました。|Der Plan hat sich geändert.|Nomen (mit する)
夜更かし|夜更[よふ]かし|langes Aufbleiben|最近[さいきん]の 子供[こども]たちは 夜更[よふ]かしです。|Die Kinder von heute bleiben lange auf.|Nomen (mit する)
増す|増[ま]す|zunehmen, anwachsen|大雨[おおあめ]で 川[かわ]の 水[みず]かさが 増[ま]しているな。|Durch den starken Regen steigt der Wasserstand des Flusses.|Verb
ピストル|ピストル|Pistole|犯人[はんにん]はピストルを 持[も]っているわ。|Der Täter hat eine Pistole.|Nomen
増大|増大[ぞうだい]|Zunahme, Vergrößerung|生産[せいさん]コスト 増大[ぞうだい]のため、 値上[ねあ]げします。|Wegen gestiegener Produktionskosten erhöhen wir die Preise.|Nomen (mit する)
増減|増減[ぞうげん]|Zu- und Abnahme|この 数年[すうねん]、 体重[たいじゅう]は 増減[ぞうげん]していません。|In den letzten Jahren hat sich mein Gewicht nicht verändert.|Nomen (mit する)
乗り出す|乗[の]り 出[だ]す|sich hinauslehnen; sich aufmachen, in Angriff nehmen|船[ふね]が 長[なが]い 航海[こうかい]に 乗[の]り 出[だ]したの。|Das Schiff ist zu einer langen Seereise aufgebrochen.|Verb
乗り込む|乗[の]り 込[こ]む|einsteigen, an Bord gehen|あの 駅[えき]で 学生[がくせい]がたくさん 乗[の]り 込[こ]んだね。|An der Station dort sind viele Schüler eingestiegen.|Verb
乗り降り|乗[の]り 降[お]り|Ein- und Aussteigen|この 駅[えき]でたくさんの 人[ひと]が 乗[の]り 降[お]りしますね。|An dieser Station steigen viele Leute ein und aus.|Nomen (mit する)
着ける|着[つ]ける|anlegen, vorfahren (Fahrzeug)|玄関[げんかん]に 車[くるま]を 着[つ]けます。|Ich fahre mit dem Auto am Eingang vor.|Verb
たっぷり|たっぷり|reichlich, ausgiebig|たっぷりとマッサージしてもらいました。|Ich habe mich ausgiebig massieren lassen.|Adverb
水着|水着[みずぎ]|Badeanzug, Badehose|水着[みずぎ]に 着替[きが]えました。|Ich habe mir Badesachen angezogen.|Nomen
役立つ|役立[やくだ]つ|nützlich sein|学校[がっこう]で 勉強[べんきょう]したことが 役立[やくだ]った。|Was ich in der Schule gelernt habe, war nützlich.|Verb
立ち上がる|立[た]ち 上[あ]がる|aufstehen, sich erheben|彼[かれ]は 急[きゅう]に 立[た]ち 上[あ]がったの。|Er stand plötzlich auf.|Verb
中立|中立[ちゅうりつ]|Neutralität|私[わたし]は 中立[ちゅうりつ]の 立場[たちば]を 取[と]っています。|Ich nehme eine neutrale Haltung ein.|Nomen (mit する)
都立|都立[とりつ]|von der Präfektur Tokio getragen|ここは 都立[とりつ]の 病院[びょういん]です。|Das ist ein Krankenhaus der Stadt Tokio.|Nomen
つくづく|つくづく|zutiefst, aus tiefstem Herzen|来[き]てよかったとつくづく 思[おも]います。|Ich finde wirklich, es war gut, dass ich gekommen bin.|Adverb
立て込む|立[た]て 込[こ]む|dicht gedrängt stehen; viel los sein|この 辺[へん]は 住宅[じゅうたく]が 立[た]て 込[こ]んでいます。|In dieser Gegend stehen die Wohnhäuser dicht an dicht.|Verb
夕立|夕立[ゆうだち]|abendlicher Regenschauer|帰宅中[きたくちゅう]、 夕立[ゆうだち]にあったの。|Auf dem Heimweg bin ich in einen Schauer geraten.|Nomen
立ち止まる|立[た]ち 止[ど]まる|stehen bleiben|人々[ひとびと]は 立[た]ち 止[ど]まって 上[うえ]を 見上[みあ]げたの。|Die Leute blieben stehen und blickten nach oben.|Verb
着席|着席[ちゃくせき]|Platznehmen|みなさん、 着席[ちゃくせき]してください。|Nehmen Sie bitte alle Platz.|Nomen (mit する)
次々に|次々[つぎつぎ]に|nacheinander, einer nach dem anderen|走者[そうしゃ]が 次々[つぎつぎ]にゴールしました。|Die Läufer kamen nacheinander ins Ziel.|Adverb
どうせ|どうせ|sowieso, ohnehin|どうせ 間[ま]に 合[あ]わないならゆっくり 行[い]こう。|Wenn wir es sowieso nicht schaffen, gehen wir eben langsam.|Adverb
次ぐ|次[つ]ぐ|folgen auf, an zweiter Stelle stehen|彼[かれ]はトップに 次[つ]ぐ 好成績[こうせいせき]でした。|Er hatte das zweitbeste Ergebnis nach dem Ersten.|Verb
取り次ぐ|取[と]り 次[つ]ぐ|weiterleiten, ausrichten|電話[でんわ]があったら 取[と]り 次[つ]いでください。|Wenn jemand anruft, stellen Sie bitte durch.|Verb
目次|目次[もくじ]|Inhaltsverzeichnis|読[よ]みたい 章[しょう]を 目次[もくじ]で 探[さが]しました。|Ich habe das Kapitel, das ich lesen wollte, im Inhaltsverzeichnis gesucht.|Nomen
不運|不運[ふうん]|Pech, Unglück|彼[かれ]に 不運[ふうん]な 出来事[できごと]が 起[お]こったの。|Ihm ist etwas Unglückliches zugestoßen.|な-Adjektiv
動向|動向[どうこう]|Trend, Entwicklung|今[いま]、 経済[けいざい]の 動向[どうこう]は 読[よ]みにくいわ。|Die wirtschaftliche Entwicklung ist zurzeit schwer einzuschätzen.|Nomen
動作|動作[どうさ]|Bewegung, Handgriff|彼[かれ]は 動作[どうさ]が 機敏[きびん]です。|Seine Bewegungen sind flink.|Nomen
リズム|リズム|Rhythmus|最近彼[さいきん かれ]は 生活[せいかつ]のリズムが 乱[みだ]れています。|In letzter Zeit ist sein Lebensrhythmus durcheinander.|Nomen
動力|動力[どうりょく]|Antriebskraft|この 車[くるま]の 動力[どうりょく]は 電気[でんき]です。|Dieses Auto wird elektrisch angetrieben.|Nomen
働き|働[はたら]き|Arbeit, Leistung; Funktion|部下[ぶか]が 素晴[すば]らしい 働[はたら]きをしたな。|Meine Mitarbeiter haben großartige Arbeit geleistet.|Nomen
早朝|早朝[そうちょう]|früher Morgen|私[わたし]は 早朝[そうちょう]のジョギングを 日課[にっか]にしています。|Ich jogge jeden Tag frühmorgens.|Nomen
早める|早[はや]める|vorverlegen, beschleunigen|集合時間[しゅうごうじかん]を30 分[ぷん] 早[はや]めました。|Ich habe die Treffzeit um 30 Minuten vorverlegt.|Verb
早まる|早[はや]まる|voreilig sein; früher werden|早[はや]まらないでよく 考[かんが]えましょう。|Überstürzen wir nichts und denken gut nach.|Verb
ハンドル|ハンドル|Lenkrad|この 車[くるま]は 左[ひだり]ハンドルです。|Dieses Auto hat das Lenkrad links.|Nomen
速度|速度[そくど]|Geschwindigkeit|新幹線[しんかんせん]の 速度[そくど]はどれくらいですか。|Wie hoch ist die Geschwindigkeit des Shinkansen?|Nomen
速達便|速達便[そくたつびん]|Eilsendung|速達便[そくたつびん]なら 明日[あした]の 午前中[ごぜんちゅう]に 届[とど]きます。|Als Eilsendung kommt es morgen Vormittag an.|Nomen
乗り遅れる|乗[の]り 遅[おく]れる|verpassen (Zug, Bus)|寝坊[ねぼう]して 新幹線[しんかんせん]に 乗[の]り 遅[おく]れたよ。|Ich habe verschlafen und den Shinkansen verpasst.|Verb
始め|始[はじ]め|Anfang|私[わたし]たちの 旅[たび]は 始[はじ]めはよかったんだ。|Am Anfang lief unsere Reise gut.|Nomen
始まり|始[はじ]まり|Beginn|いよいよ 劇[げき]の 始[はじ]まりですね。|Gleich beginnt das Theaterstück.|Nomen
プリント|プリント|Ausdruck, Abzug; Arbeitsblatt|デジカメで 撮[と]った 写真[しゃしん]をプリントしたんだ。|Ich habe die Fotos von der Digitalkamera ausgedruckt.|Nomen (mit する)
年始|年始[ねんし]|Jahresanfang|部下[ぶか]の 方[かた]が 年始[ねんし]の 挨拶[あいさつ]に 見[み]えましたよ。|Ihre Mitarbeiter sind zum Neujahrsgruß gekommen.|Nomen
不在|不在[ふざい]|Abwesenheit|妻[つま]の 不在[ふざい] 中[ちゅう]、 夫[おっと]は 毎日外食[まいにち がいしょく]したんだ。|Während seine Frau weg war, aß der Mann jeden Tag auswärts.|Nomen
実る|実[みの]る|Früchte tragen, reifen|やっと 努力[どりょく]が 実[みの]りました。|Endlich haben sich meine Bemühungen ausgezahlt.|Verb
実|実[み]|Frucht, Beere, Nuss|庭[にわ]の 木[き]が 赤[あか]い 実[み]をつけた。|Der Baum im Garten trägt rote Früchte.|Nomen
通り過ぎる|通[とお]り 過[す]ぎる|vorbeigehen, vorbeifahren|うっかり 目的地[もくてきち]を 通[とお]り 過[す]ぎた。|Ich bin versehentlich am Ziel vorbeigefahren.|Verb
発売|発売[はつばい]|Verkaufsstart, Markteinführung|新[あたら]しい 車[くるま]が 発売[はつばい]された。|Ein neues Auto ist auf den Markt gekommen.|Nomen (mit する)
まぶしい|まぶしい|blendend, grell|夏[なつ]の 日差[ひざ]しがまぶしかったよ。|Die Sommersonne hat geblendet.|Adjektiv
発つ|発[た]つ|abreisen, aufbrechen|彼[かれ]は 明日[あした]メキシコへ 発[た]ちます。|Er reist morgen nach Mexiko ab.|Verb
発行|発行[はっこう]|Herausgabe, Ausgabe|その 雑誌[ざっし]は 年[ねん]に4 回[かい] 発行[はっこう]されているんだ。|Die Zeitschrift erscheint viermal im Jahr.|Nomen (mit する)
発達|発達[はったつ]|Entwicklung, Fortschritt|通信技術[つうしん ぎじゅつ]の 発達[はったつ]は 目覚[めざ]ましいな。|Der Fortschritt der Kommunikationstechnik ist bemerkenswert.|Nomen (mit する)
発明|発明[はつめい]|Erfindung|彼[かれ]は 偉大[いだい]な 発明[はつめい] 王[おう]です。|Er ist ein großer Erfinder.|Nomen (mit する)
発電|発電[はつでん]|Stromerzeugung|ここでは 太陽[たいよう]エネルギーを 使[つか]って 発電[はつでん]しています。|Hier wird mit Sonnenenergie Strom erzeugt.|Nomen (mit する)
よそ|よそ|anderswo, fremd|夕食[ゆうしょく]はよそでごちそうになりました。|Ich war woanders zum Abendessen eingeladen.|Nomen
発電所|発電所[はつでんしょ]|Kraftwerk|すぐそこに 発電所[はつでんしょ]があります。|Gleich dort drüben ist ein Kraftwerk.|Nomen
発熱|発熱[はつねつ]|Fieber; Wärmeentwicklung|娘[むすめ]が 突然[とつぜん]、 発熱[はつねつ]したんだ。|Meine Tochter hat plötzlich Fieber bekommen.|Nomen (mit する)
表情|表情[ひょうじょう]|Gesichtsausdruck, Mimik|彼[かれ]はとても 表情[ひょうじょう]が 豊[ゆた]かですね。|Er hat eine sehr ausdrucksvolle Mimik.|Nomen
用紙|用紙[ようし]|Formular, Blatt|この 用紙[ようし]に 名前[なまえ]を 書[か]いてください。|Schreiben Sie bitte Ihren Namen auf dieses Formular.|Nomen
表紙|表紙[ひょうし]|Buchdeckel, Titelseite|その 人気[にんき]アイドルが 今月[こんげつ]の 表紙[ひょうし]だよ。|Dieses beliebte Idol ist diesen Monat auf dem Titel.|Nomen
つぐ|つぐ|eingießen, einschenken|お 酒[さけ]をおつぎしましょう。|Darf ich Ihnen einschenken?|Verb
白紙|白紙[はくし]|leeres Blatt; Nullpunkt|テストを 白紙[はくし]で 出[だ]したの。|Ich habe den Test leer abgegeben.|Nomen
音|音[ね]|Ton, Klang (von Insekten, Glocken)|秋[あき]は 虫[むし]の 音[ね]が 心地良[ここちい]いです。|Im Herbst ist das Zirpen der Insekten angenehm.|Nomen
発音|発音[はつおん]|Aussprache|この 単語[たんご]を 発音[はつおん]してください。|Sprechen Sie bitte dieses Wort aus.|Nomen (mit する)
物音|物音[ものおと]|Geräusch|物音[ものおと]がしたので 見[み]に 行[い]った。|Ich habe ein Geräusch gehört und bin nachsehen gegangen.|Nomen
楽しみ|楽[たの]しみ|Freude, Vorfreude|旅行[りょこう]は 父[ちち]の 老後[ろうご]の 楽[たの]しみです。|Reisen ist die Freude meines Vaters im Ruhestand.|Nomen
ディスコ|ディスコ|Disco|昔[むかし]はよくディスコに 行[い]ったな。|Früher bin ich oft in die Disco gegangen.|Nomen
楽|楽[らく]|leicht, bequem, angenehm|彼[かれ]には 楽[らく]な 仕事[しごと]が 与[あた]えられたよ。|Er hat eine leichte Arbeit bekommen.|な-Adjektiv
薬品|薬品[やくひん]|Arzneimittel, Chemikalie|彼女[かのじょ]は 薬品[やくひん]を 戸棚[とだな]から 出[だ]したんだ。|Sie hat das Medikament aus dem Schrank geholt.|Nomen
薬局|薬局[やっきょく]|Apotheke|薬局[やっきょく]で 目薬[めぐすり]を 買[か]いました。|Ich habe in der Apotheke Augentropfen gekauft.|Nomen
目薬|目薬[めぐすり]|Augentropfen|目[め]が 疲[つか]れたので 目薬[めぐすり]をさしたよ。|Meine Augen waren müde, deshalb habe ich Augentropfen genommen.|Nomen
欲|欲[よく]|Begierde, Gier|あまり 欲[よく]を 出[だ]しちゃだめだよ。|Man darf nicht zu gierig sein.|Nomen
欲求|欲求[よっきゅう]|Bedürfnis, Verlangen|時[とき]には 自分[じぶん]の 欲求[よっきゅう]を 抑[おさ]えることも 必要[ひつよう]です。|Manchmal muss man seine Bedürfnisse zügeln.|Nomen (mit する)
ぴったり|ぴったり|genau passend, perfekt|この 服[ふく]はあなたにぴったりですね。|Diese Kleidung passt dir perfekt.|な-Adjektiv
表面|表面[ひょうめん]|Oberfläche|月[つき]の 表面[ひょうめん]にはクレーターがたくさんあるね。|Auf der Mondoberfläche gibt es viele Krater.|Nomen
場面|場面[ばめん]|Szene, Situation|ここがいちばん 面白[おもしろ]い 場面[ばめん]です。|Das hier ist die spannendste Szene.|Nomen
面する|面[めん]する|liegen an, gegenüberliegen|私[わたし]の 家[いえ]は 川[かわ]に 面[めん]しています。|Mein Haus liegt am Fluss.|Verb
方面|方面[ほうめん]|Richtung, Gegend; Gebiet|沖縄[おきなわ] 方面[ほうめん]にお 出[で]かけの 方[かた]は 台風[たいふう]にご 注意[ちゅうい]ください。|Wer in Richtung Okinawa unterwegs ist, achte bitte auf den Taifun.|Nomen
半面|半面[はんめん]|eine Hälfte, eine Seite|テニスコートの 半面[はんめん]を 使[つか]って 試合[しあい]をしたの。|Wir haben auf einer Hälfte des Tennisplatzes gespielt.|Nomen
まさか|まさか|doch wohl nicht, niemals (ungläubig)|まさか 車[くるま]が 当[あ]たるとは 思[おも]わなかった。|Ich hätte nie gedacht, dass ich das Auto gewinne.|Adverb
面|面[めん]|Fläche, Seite, Aspekt|彼[かれ]の 意外[いがい]な 面[めん]を 見[み]た。|Ich habe eine unerwartete Seite an ihm gesehen.|Nomen
真っ先|真[ま]っ 先[さき]|allererste(r), als Erstes|合格[ごうかく]を 真[ま]っ 先[さき]に 両親[りょうしん]に 伝[つた]えたの。|Dass ich bestanden habe, habe ich als Erstes meinen Eltern gesagt.|Nomen
真夏|真夏[まなつ]|Hochsommer|真夏[まなつ]のビールはおいしい。|Im Hochsommer schmeckt Bier besonders gut.|Nomen
真夜中|真夜中[まよなか]|Mitternacht, tiefe Nacht|彼[かれ]は 真夜中[まよなか]に 帰[かえ]ってきたの。|Er kam mitten in der Nacht zurück.|Nomen
真っ最中|真[ま]っ 最中[さいちゅう]|mittendrin|今[いま]は 試験[しけん]の 真[ま]っ 最中[さいちゅう]です。|Ich stecke gerade mitten in den Prüfungen.|Nomen
どっと|どっと|schlagartig, mit einem Mal|観衆[かんしゅう]がどっと 笑[わら]ったんだ。|Das Publikum brach in Gelächter aus.|Adverb
真心|真心[まごころ]|Aufrichtigkeit, von ganzem Herzen|彼女[かのじょ]は 真心[まごころ]をこめて 彼[かれ]にケーキを 作[つく]ったよ。|Sie hat ihm von ganzem Herzen einen Kuchen gebacken.|Nomen
無色|無色[むしょく]|farblos|アルコールは 無色[むしょく]です。|Alkohol ist farblos.|Nomen
ばら色|ばら 色[いろ]|Rosenrot, rosig|彼女[かのじょ]の 人生[じんせい]はばら 色[いろ]だったの。|Ihr Leben war rosig.|Nomen
水色|水色[みずいろ]|Hellblau|箱[はこ]に 水色[みずいろ]のリボンがかかっていたの。|Um die Schachtel war ein hellblaues Band gebunden.|Nomen
長方形|長方形[ちょうほうけい]|Rechteck|私[わたし]の 部屋[へや]は 長方形[ちょうほうけい]です。|Mein Zimmer ist rechteckig.|Nomen
地形|地形[ちけい]|Geländeform, Topografie|ここはなだらかな 地形[ちけい]です。|Hier ist das Gelände sanft gewellt.|Nomen
もうける|もうける|Gewinn machen, verdienen|先月[せんげつ]は 株[かぶ]で100 万円[まん えん]もうけたの。|Letzten Monat habe ich mit Aktien eine Million Yen verdient.|Verb
種|種[たね]|Samen, Kern|プランターにトマトの 種[たね]をまきました。|Ich habe im Pflanzkasten Tomatensamen gesät.|Nomen
分類|分類[ぶんるい]|Klassifizierung, Einteilung|これらの 本[ほん]を 分類[ぶんるい]してください。|Ordnen Sie diese Bücher bitte ein.|Nomen (mit する)
直前|直前[ちょくぜん]|unmittelbar vor|彼[かれ]は 旅行[りょこう]の 直前[ちょくぜん]に 熱[ねつ]が 出[で]たの。|Er bekam unmittelbar vor der Reise Fieber.|Nomen
直ちに|直[ただ]ちに|sofort, unverzüglich|直[ただ]ちに 会社[かいしゃ]に 戻[もど]ってください。|Kehren Sie bitte unverzüglich in die Firma zurück.|Adverb
見直す|見直[みなお]す|überdenken; eine bessere Meinung bekommen|彼[かれ]のことを 見直[みなお]しました。|Ich habe meine Meinung über ihn zum Besseren geändert.|Verb
ゆったり|ゆったり|bequem, weit, geräumig|彼女[かのじょ]はゆったりした 服[ふく]を 着[き]ていますね。|Sie trägt weite Kleidung.|Adverb
直後|直後[ちょくご]|unmittelbar nach|食[た]べた 直後[ちょくご]に 寝[ね]ないほうがいいよ。|Man sollte nicht direkt nach dem Essen schlafen.|Nomen
立ち直る|立[た]ち 直[なお]る|sich erholen, wieder auf die Beine kommen|彼女[かのじょ]は 失敗[しっぱい]から 立[た]ち 直[なお]ったよ。|Sie hat sich von dem Misserfolg erholt.|Verb
やり直し|やり 直[なお]し|Neumachen, Wiederholung|仕事[しごと]がやり 直[なお]しになった。|Die Arbeit muss noch einmal gemacht werden.|Nomen
やり直す|やり 直[なお]す|noch einmal machen|急[いそ]いでやり 直[なお]します。|Ich mache es schnell noch einmal.|Verb
直通|直通[ちょくつう]|direkte Verbindung, Durchwahl|これは 私[わたし]の 直通[ちょくつう]の 電話番号[でんわ ばんごう]です。|Das ist meine Durchwahl.|Nomen (mit する)
ちっとも|ちっとも|kein bisschen, überhaupt nicht|彼女[かのじょ]が 結婚[けっこん]したなんて、ちっとも 知[し]らなかった。|Dass sie geheiratet hat, wusste ich überhaupt nicht.|Adverb
面接|面接[めんせつ]|Vorstellungsgespräch|新[あたら]しい 仕事[しごと]の 面接[めんせつ]に 行[い]ってきました。|Ich war bei einem Vorstellungsgespräch für eine neue Stelle.|Nomen (mit する)
無線|無線[むせん]|Funk, drahtlos|運転手[うんてんしゅ]が 無線[むせん]で 話[はな]していたの。|Der Fahrer sprach über Funk.|Nomen
線路|線路[せんろ]|Gleis, Schiene|子猫[こねこ]が 線路[せんろ]に 迷[まよ]い 込[こ]んだぞ。|Ein Kätzchen hat sich auf die Gleise verirrt.|Nomen
直線|直線[ちょくせん]|gerade Linie|直線[ちょくせん]を 描[か]いてください。|Zeichnen Sie bitte eine gerade Linie.|Nomen
電線|電線[でんせん]|Stromleitung|風[かぜ]で 電線[でんせん]が 揺[ゆ]れていますね。|Die Stromleitungen schwanken im Wind.|Nomen
脱線|脱線[だっせん]|Entgleisung; Abschweifen|地震[じしん]で 電車[でんしゃ]が 脱線[だっせん]したよ。|Durch das Erdbeben ist der Zug entgleist.|Nomen (mit する)
ドレス|ドレス|Kleid|昨日素敵[きのう すてき]なドレスを 買[か]いました。|Gestern habe ich ein schönes Kleid gekauft.|Nomen
白線|白線[はくせん]|weiße Linie|白線[はくせん]の 内側[うちがわ]に 下[さ]がってお 待[ま]ちください。|Warten Sie bitte hinter der weißen Linie.|Nomen
方角|方角[ほうがく]|Himmelsrichtung, Richtung|私[わたし]と 彼[かれ]は 帰[かえ]る 方角[ほうがく]が 同[おな]じです。|Er und ich haben denselben Heimweg.|Nomen
直角|直角[ちょっかく]|rechter Winkel|ここで 直角[ちょっかく]に 曲[ま]がってください。|Biegen Sie hier bitte im rechten Winkel ab.|Nomen
町角|町角[まちかど]|Straßenecke|町角[まちかど]にカフェがありました。|An der Straßenecke war ein Café.|Nomen
真四角|真四角[ましかく]|genau quadratisch|彼[かれ]の 部屋[へや]には 真四角[ましかく]な 窓[まど]があったんだ。|In seinem Zimmer gab es ein quadratisches Fenster.|な-Adjektiv
パンク|パンク|Reifenpanne|自転車[じてんしゃ]のタイヤがパンクしました。|Mein Fahrrad hat einen Platten.|Nomen (mit する)
共に|共[とも]に|zusammen, gemeinsam; beide|最後[さいご]まで 共[とも]にがんばりましょう。|Halten wir gemeinsam bis zum Schluss durch.|Adverb
同時|同時[どうじ]|gleichzeitig|二人[ふたり]の 走者[そうしゃ]は 同時[どうじ]にゴールしたよ。|Die beiden Läufer kamen gleichzeitig ins Ziel.|Nomen
同一|同一[どういつ]|identisch, derselbe|この 人[ひと]とその 人[ひと]は、 同一[どういつ] 人物[じんぶつ]ですか。|Sind diese und jene Person ein und dieselbe?|な-Adjektiv
同情|同情[どうじょう]|Mitgefühl, Mitleid|友人[ゆうじん]は 私[わたし]に 同情[どうじょう]してくれたよ。|Mein Freund hatte Mitgefühl mit mir.|Nomen (mit する)
同性|同性[どうせい]|gleiches Geschlecht|同性[どうせい]の 友達[ともだち]より 異性[いせい]の 友達[ともだち]のほうが 多[おお]いよ。|Ich habe mehr Freunde des anderen als des gleichen Geschlechts.|Nomen
のんびり|のんびり|gemächlich, entspannt|休[やす]みの 日[ひ]は 家[うち]でのんびり 過[す]ごします。|An freien Tagen lasse ich es mir zu Hause gemütlich gehen.|Adverb
違いない|違[ちが]いない|zweifellos, ganz sicher|彼[かれ]は 成功[せいこう]するに 違[ちが]いないわ。|Er wird ganz sicher Erfolg haben.|Adjektiv
人違い|人違[ひとちが]い|Personenverwechslung|すみません、 人違[ひとちが]いでした。|Entschuldigung, ich habe Sie verwechselt.|Nomen (mit する)
見違える|見違[みちが]える|kaum wiedererkennen|掃除[そうじ]をしたら 部屋[へや]が 見違[みちが]えるようになったの。|Nach dem Putzen war das Zimmer kaum wiederzuerkennen.|Verb
違い|違[ちが]い|Unterschied|この 二[ふた]つには 大[おお]きな 違[ちが]いがある。|Zwischen diesen beiden gibt es einen großen Unterschied.|Nomen
似る|似[に]る|ähneln|女[おんな]の 子[こ]は 話[はな]し 方[かた]まで 母親[ははおや]に 似[に]るわね。|Mädchen ähneln ihrer Mutter sogar in der Art zu sprechen.|Verb
はめる|はめる|anstecken, anziehen (Ring, Handschuh)|彼女[かのじょ]は 指輪[ゆびわ]をたくさんはめていますね。|Sie trägt viele Ringe.|Verb
似合う|似合[にあ]う|gut stehen, passen|彼女[かのじょ]は 着物[きもの]がよく 似合[にあ]います。|Der Kimono steht ihr gut.|Verb
似せる|似[に]せる|nachahmen, angleichen|彼[かれ]の 字[じ]に 似[に]せて 書[か]きました。|Ich habe seine Handschrift nachgeahmt.|Verb
旅|旅[たび]|Reise|姉[あね]はよく 旅[たび]をします。|Meine große Schwester reist oft.|Nomen (mit する)
旅客|旅客[りょかく]|Reisende(r), Passagier(in)|その 便[びん]は 外国人[がいこくじん]の 旅客[りょかく]が 多[おお]かったよ。|Auf diesem Flug waren viele ausländische Passagiere.|Nomen
旅費|旅費[りょひ]|Reisekosten|父[ちち]が 旅費[りょひ]を 出[だ]してくれました。|Mein Vater hat die Reisekosten bezahlt.|Nomen
和らげる|和[やわ]らげる|mildern, lindern|ユーモアは 場[ば]の 雰囲気[ふんいき]を 和[やわ]らげるわね。|Humor lockert die Stimmung auf.|Verb
ふた|ふた|Deckel|箱[はこ]にふたをしたよ。|Ich habe den Deckel auf die Schachtel gesetzt.|Nomen
和語|和語[わご]|ursprünglich japanisches Wort|日本[にっぽん]で 生[う]まれた 言葉[ことば]を 和語[わご]といいます。|Wörter, die in Japan entstanden sind, nennt man Wago.|Nomen
和風|和風[わふう]|japanischer Stil|夕食[ゆうしょく]に 和風[わふう]パスタを 作[つく]ったよ。|Ich habe zum Abendessen Pasta nach japanischer Art gemacht.|Nomen
和食|和食[わしょく]|japanisches Essen|私[わたし]は 和食[わしょく]が 好[す]きです。|Ich mag japanisches Essen.|Nomen
和やか|和[なご]やか|friedlich, harmonisch|彼[かれ]らは 和[なご]やかに 食事[しょくじ]をした。|Sie aßen in gelöster Stimmung.|Adjektiv
和らぐ|和[やわ]らぐ|sich mildern, nachlassen|この 曲[きょく]を 聞[き]くと 気持[きも]ちが 和[やわ]らぎます。|Wenn ich dieses Stück höre, werde ich ruhiger.|Verb
レポート|レポート|Bericht, Hausarbeit|教授[きょうじゅ]にレポートを 提出[ていしゅつ]しました。|Ich habe dem Professor meine Hausarbeit abgegeben.|Nomen (mit する)
和式|和式[わしき]|japanische Art|あの 家[うち]のトイレは 和式[わしき]です。|Die Toilette in dem Haus dort ist eine japanische Hocktoilette.|Nomen
和英|和英[わえい]|japanisch-englisch|私[わたし]は 和英[わえい] 辞書[じしょ]をよく 使[つか]います。|Ich benutze oft ein japanisch-englisches Wörterbuch.|Nomen
東洋|東洋[とうよう]|der Orient, Ostasien|彼[かれ]は 東洋[とうよう] 文化[ぶんか]を 研究[けんきゅう]しているよ。|Er erforscht die Kulturen Ostasiens.|Nomen
洋風|洋風[ようふう]|westlicher Stil|私[わたし]は 洋風[ようふう]の 家[いえ]に 住[す]んでいます。|Ich wohne in einem Haus im westlichen Stil.|Nomen
洋画|洋画[ようが]|westlicher Film; westliche Malerei|私[わたし]は 週[しゅう]に3 本[ぼん] 洋画[ようが]を 見[み]ます。|Ich sehe drei westliche Filme pro Woche.|Nomen
マネー|マネー|Geld, Finanzen|インターネットでマネー 情報[じょうほう]をチェックしたよ。|Ich habe im Internet Finanzinformationen nachgesehen.|Nomen
洋式|洋式[ようしき]|westliche Art|彼[かれ]の 家[いえ]のトイレは 洋式[ようしき]です。|Die Toilette in seinem Haus ist eine westliche Sitztoilette.|Nomen
洋食|洋食[ようしょく]|westliches Essen|昨日[きのう]の 晩御飯[ばんごはん]は 洋食[ようしょく]でした。|Gestern gab es zum Abendessen westliche Küche.|Nomen
洋間|洋間[ようま]|Zimmer im westlichen Stil|彼[かれ]の 家[いえ]には 洋間[ようま]があります。|In seinem Haus gibt es ein westlich eingerichtetes Zimmer.|Nomen
和服|和服[わふく]|japanische Kleidung, Kimono|彼女[かのじょ]は 和服[わふく]がよく 似合[にあ]う。|Japanische Kleidung steht ihr gut.|Nomen
待合室|待合室[まちあいしつ]|Wartezimmer, Wartesaal|待合室[まちあいしつ]はとても 込[こ]んでいたよ。|Das Wartezimmer war sehr voll.|Nomen
和室|和室[わしつ]|Zimmer im japanischen Stil|この 和室[わしつ]の 天井[てんじょう]は 低[ひく]いね。|Die Decke dieses japanischen Zimmers ist niedrig.|Nomen
もろい|もろい|brüchig, zerbrechlich|この 岩[いわ]は 意外[いがい]ともろい。|Dieser Fels ist überraschend brüchig.|Adjektiv
洋室|洋室[ようしつ]|Zimmer im westlichen Stil|このテーブルは 洋室[ようしつ]に 合[あ]わない。|Dieser Tisch passt nicht in ein westliches Zimmer.|Nomen
窓口|窓口[まどぐち]|Schalter (Bank, Amt)|お 振込[ふりこ]みは3 番[ばん]の 窓口[まどぐち]です。|Überweisungen am Schalter Nummer 3.|Nomen
父母|父母[ふぼ]|Vater und Mutter, Eltern|学校[がっこう]から 父母[ふぼ]に 連絡[れんらく]があったんだ。|Die Schule hat sich bei den Eltern gemeldet.|Nomen
母親|母親[ははおや]|Mutter|彼女[かのじょ]は2 才[さい]の 子[こ]の 母親[ははおや]です。|Sie ist Mutter eines zweijährigen Kindes.|Nomen
父親|父親[ちちおや]|Vater|彼[かれ]の 父親[ちちおや]は 先生[せんせい]です。|Sein Vater ist Lehrer.|Nomen
ユーモア|ユーモア|Humor|彼女[かのじょ]はユーモアのセンスがあります。|Sie hat Sinn für Humor.|Nomen
父兄|父兄[ふけい]|Eltern, Erziehungsberechtigte|父兄[ふけい]の 方々[かたがた]はこちらへどうぞ。|Die Eltern bitte hier entlang.|Nomen
第一|第一[だいいち]|an erster Stelle, das Wichtigste|私[わたし]には 仕事[しごと]が 第一[だいいち]です。|Für mich steht die Arbeit an erster Stelle.|Nomen
利息|利息[りそく]|Zinsen|預金[よきん]には 利息[りそく]がつきます。|Auf Einlagen gibt es Zinsen.|Nomen
若々しい|若々[わかわか]しい|jugendlich, frisch|彼女[かのじょ]はとても 若々[わかわか]しい 人[ひと]です。|Sie wirkt sehr jugendlich.|Adjektiv
読者|読者[どくしゃ]|Leser(in)|新聞[しんぶん]の 読者[どくしゃ]の 投書欄[とうしょらん]は 好[す]きです。|Ich mag die Leserbriefspalte in der Zeitung.|Nomen
バック|バック|rückwärts; Hintergrund|車[くるま]のギアをバックに 入[い]れたよ。|Ich habe den Rückwärtsgang eingelegt.|Nomen (mit する)
歩行者|歩行者[ほこうしゃ]|Fußgänger(in)|歩行者[ほこうしゃ]は 道[みち]の 右側[みぎがわ]を 歩[ある]いてください。|Fußgänger gehen bitte auf der rechten Straßenseite.|Nomen
文学者|文学者[ぶんがくしゃ]|Literat(in), Literaturwissenschaftler(in)|彼[かれ]は 有名[ゆうめい]な 文学者[ぶんがくしゃ]です。|Er ist ein berühmter Literat.|Nomen
歩行者天国|歩行者天国[ほこうしゃてんごく]|autofreie Straße (für Fußgänger)|日曜日[にちようび]はこの 通[とお]りが 歩行者天国[ほこうしゃてんごく]になります。|Sonntags wird diese Straße zur Fußgängerzone.|Nomen
者|者[もの]|Person, jemand (bescheiden)|私[わたし]は 先[さき]ほど 電話[でんわ]した 者[もの]です。|Ich bin derjenige, der vorhin angerufen hat.|Nomen
結ぶ|結[むす]ぶ|binden, verbinden, schließen|彼女[かのじょ]は 髪[かみ]にリボンを 結[むす]んだね。|Sie hat sich eine Schleife ins Haar gebunden.|Verb
結び|結[むす]び|Abschluss, Schluss|彼[かれ]は 会[かい]の 結[むす]びとしてスピーチをしたよ。|Er hielt zum Abschluss der Versammlung eine Rede.|Nomen
そびえる|そびえる|emporragen|いくつもの 高層[こうそう]ビルがそびえていたんだ。|Mehrere Hochhäuser ragten empor.|Verb
未婚|未婚[みこん]|unverheiratet|彼[かれ]はまだ 未婚[みこん]です。|Er ist noch unverheiratet.|Nomen
果たす|果[は]たす|erfüllen, vollbringen|彼[かれ]はしっかりと 責任[せきにん]を 果[は]たしました。|Er hat seine Verantwortung gewissenhaft erfüllt.|Verb
果たして|果[は]たして|wirklich, tatsächlich; wie erwartet|果[は]たして 彼[かれ]は 現[あらわ]れるだろうか。|Ob er wirklich auftauchen wird?|Adverb
日課|日課[にっか]|tägliche Routine|犬[いぬ]の 散歩[さんぽ]は 私[わたし]の 日課[にっか]です。|Mit dem Hund spazieren zu gehen gehört zu meinem Tagesablauf.|Nomen
有効|有効[ゆうこう]|gültig, wirksam|私[わたし]の 免許[めんきょ]は 来年[らいねん]まで 有効[ゆうこう]です。|Mein Führerschein ist bis nächstes Jahr gültig.|な-Adjektiv
タレント|タレント|Fernsehpersönlichkeit|彼[かれ]はタレントなのでよくテレビに 出[で]ています。|Er ist eine Fernsehpersönlichkeit und daher oft im Fernsehen.|Nomen
無効|無効[むこう]|ungültig, unwirksam|このクーポンはもう 無効[むこう]です。|Dieser Gutschein ist nicht mehr gültig.|な-Adjektiv
自ら|自[みずか]ら|selbst, persönlich|社長[しゃちょう] 自[みずか]らがその 会社[かいしゃ]と 交渉[こうしょう]したよ。|Der Firmenchef hat persönlich mit der Firma verhandelt.|Adverb
不自然|不自然[ふしぜん]|unnatürlich|彼[かれ]の 態度[たいど]はどこか 不自然[ふしぜん]だったな。|Sein Verhalten war irgendwie unnatürlich.|な-Adjektiv
不自由|不自由[ふじゆう]|Unbequemlichkeit, Einschränkung|彼[かれ]は 不自由[ふじゆう]な 暮[く]らしに 慣[な]れたようだね。|Er scheint sich an das Leben mit Einschränkungen gewöhnt zu haben.|Nomen (mit する)
通信|通信[つうしん]|Kommunikation, Nachrichtenübermittlung|通信[つうしん] 教育[きょういく]はとても 便利[べんり]です。|Fernunterricht ist sehr praktisch.|Nomen (mit する)
たまに|たまに|gelegentlich, ab und zu|彼[かれ]はたまに 料理[りょうり]をします。|Er kocht gelegentlich.|Adverb
頼る|頼[たよ]る|sich verlassen auf, angewiesen sein auf|人[ひと]に 頼[たよ]らないで、 自分[じぶん]でやってごらん。|Verlass dich nicht auf andere, versuch es selbst.|Verb
頼み|頼[たの]み|Bitte, Anliegen|あなたに 頼[たの]みがあるんですけど。|Ich hätte da eine Bitte an Sie.|Nomen
頼もしい|頼[たの]もしい|verlässlich, vertrauenerweckend|彼[かれ]は 頼[たの]もしい 人[ひと]です。|Er ist ein Mensch, auf den man sich verlassen kann.|Adjektiv
民間|民間[みんかん]|privat, zivil (nicht staatlich)|その 土地[とち]は 民間[みんかん] 企業[きぎょう]に 売却[ばいきゃく]されたんだ。|Das Grundstück wurde an ein Privatunternehmen verkauft.|Nomen
民族|民族[みんぞく]|Volk, Ethnie|私[わたし]は 民族[みんぞく]の 歴史[れきし]に 興味[きょうみ]があります。|Ich interessiere mich für die Geschichte der Völker.|Nomen
ペンキ|ペンキ|Farbe, Anstrichfarbe|床[ゆか]にペンキをこぼしてしまいました。|Ich habe Farbe auf den Boden verschüttet.|Nomen
持ち主|持[も]ち 主[ぬし]|Besitzer(in)|この 自転車[じてんしゃ]の 持[も]ち 主[ぬし]は 誰[だれ]ですか。|Wem gehört dieses Fahrrad?|Nomen
民主|民主[みんしゅ]|Demokratie, demokratisch|民主[みんしゅ] 主義[しゅぎ]について 勉強[べんきょう]しました。|Wir haben uns mit der Demokratie beschäftigt.|Nomen
家主|家主[やぬし]|Hausbesitzer(in), Vermieter(in)|家主[やぬし]は1 階[かい]に 住[す]んでいます。|Der Vermieter wohnt im Erdgeschoss.|Nomen
定義|定義[ていぎ]|Definition|美[うつく]しさを 定義[ていぎ]してください。|Definieren Sie bitte Schönheit.|Nomen (mit する)
不思議|不思議[ふしぎ]|rätselhaft, wundersam|それはとても 不思議[ふしぎ]な 話[はなし]だね。|Das ist eine sehr merkwürdige Geschichte.|な-Adjektiv
理論|理論[りろん]|Theorie|彼[かれ]は 大学[だいがく]で 音楽[おんがく]の 理論[りろん]を 勉強[べんきょう]したんだよ。|Er hat an der Universität Musiktheorie studiert.|Nomen
ベンチ|ベンチ|Bank (Sitzbank)|公園[こうえん]のベンチで 本[ほん]を 読[よ]んでいます。|Ich lese auf einer Parkbank ein Buch.|Nomen
論理|論理[ろんり]|Logik|数学[すうがく]は 論理[ろんり]に 基[もと]づく 学問[がくもん]です。|Mathematik ist eine Wissenschaft, die auf Logik beruht.|Nomen
論文|論文[ろんぶん]|Abhandlung, Abschlussarbeit|論文[ろんぶん]を 仕上[しあ]げないと 卒業[そつぎょう]できませんよ。|Ohne fertige Abschlussarbeit kannst du keinen Abschluss machen.|Nomen
論じる|論[ろん]じる|erörtern, diskutieren|仲間[なかま]と 地球[ちきゅう]の 未来[みらい]について 論[ろん]じたの。|Ich habe mit Freunden über die Zukunft der Erde diskutiert.|Verb
無論|無論[むろん]|selbstverständlich|ぼくは 無論[むろん]きみに 賛成[さんせい]だ。|Ich bin selbstverständlich deiner Meinung.|Adverb
世論|世論[よろん]|öffentliche Meinung|世論[よろん]は 新[あたら]しい 法律[ほうりつ]に 反対[はんたい]です。|Die öffentliche Meinung ist gegen das neue Gesetz.|Nomen
めいめい|めいめい|jede(r) für sich|交通費[こうつうひ]はめいめい 支払[しはら]ってください。|Die Fahrtkosten zahlt bitte jeder selbst.|Adverb
論|論[ろん]|Argument, Theorie, Ansicht|彼[かれ]の 人生[じんせい] 論[ろん]は 独特[どくとく]だな。|Seine Lebensphilosophie ist eigenwillig.|Nomen
反発|反発[はんぱつ]|Widerstand, Auflehnung|彼[かれ]は 先生[せんせい]に 反発[はんぱつ]していたよ。|Er hat sich gegen den Lehrer aufgelehnt.|Nomen (mit する)
反映|反映[はんえい]|Widerspiegelung|新型車[しんがたしゃ]に 研究[けんきゅう]の 成果[せいか]が 反映[はんえい]されています。|Im neuen Modell spiegeln sich die Forschungsergebnisse wider.|Nomen (mit する)
反論|反論[はんろん]|Gegenargument, Widerspruch|反論[はんろん]がある 人[ひと]はどうぞ。|Wer Einwände hat, bitte sehr.|Nomen (mit する)
反する|反[はん]する|widersprechen, verstoßen gegen|彼[かれ]の 行[おこな]いはモラルに 反[はん]しています。|Sein Verhalten verstößt gegen die Moral.|Verb
どうにか|どうにか|irgendwie, mit Mühe|どうにか 締[し]め 切[き]りに 間[ま]に 合[あ]った。|Ich habe den Termin irgendwie noch geschafft.|Adverb
反則|反則[はんそく]|Foul, Regelverstoß|その 選手[せんしゅ]は 反則[はんそく]で 負[ま]けました。|Der Sportler hat durch ein Foul verloren.|Nomen (mit する)
対話|対話[たいわ]|Dialog, Gespräch|親子[おやこ]の 対話[たいわ]は 大切[たいせつ]だよ。|Das Gespräch zwischen Eltern und Kindern ist wichtig.|Nomen (mit する)
対|対[つい]|Paar, Gegenstück|このズボンは 上着[うわぎ]と 対[つい]になっています。|Diese Hose gehört mit der Jacke zusammen.|Nomen
対応|対応[たいおう]|Reaktion, Umgang; Entsprechung|彼[かれ]はいつも 素早[すばや]い 対応[たいおう]をするね。|Er reagiert immer schnell.|Nomen (mit する)
反応|反応[はんのう]|Reaktion|彼女[かのじょ]は 良[よ]い 反応[はんのう]を 示[しめ]したわ。|Sie hat positiv reagiert.|Nomen (mit する)
問答|問答[もんどう]|Fragen und Antworten, Wortwechsel|あなたと 問答[もんどう]している 暇[ひま]はないの。|Ich habe keine Zeit, mit dir zu diskutieren.|Nomen (mit する)
ちゃんと|ちゃんと|ordentlich, richtig|朝食[ちょうしょく]はちゃんと 食[た]べましたか。|Hast du ordentlich gefrühstückt?|Adverb
特定|特定[とくてい]|bestimmt; Feststellung, Identifizierung|警察[けいさつ]は 犯人[はんにん]を 特定[とくてい]したらしいよ。|Die Polizei soll den Täter ermittelt haben.|Nomen
特色|特色[とくしょく]|Besonderheit, Eigenart|その 学校[がっこう]の 教育[きょういく]は 特色[とくしょく]がありますね。|Der Unterricht an dieser Schule hat seine Besonderheiten.|Nomen
特有|特有[とくゆう]|eigentümlich, typisch für|これは 子供[こども]に 特有[とくゆう]の 病気[びょうき]です。|Das ist eine typische Kinderkrankheit.|Adjektiv
別に|別[べつ]に|nicht besonders (mit Verneinung); getrennt|私[わたし]は 別[べつ]に 気[き]になりません。|Mich stört das nicht besonders.|Adverb
別れ|別[わか]れ|Abschied, Trennung|別[わか]れはいつでも 悲[かな]しいものです。|Abschiede sind immer traurig.|Nomen
のどか|のどか|friedlich, beschaulich|私[わたし]の 田舎[いなか]はのどかな 所[ところ]です。|Meine Heimat auf dem Land ist ein beschaulicher Ort.|Adjektiv
送別|送別[そうべつ]|Verabschiedung|送別[そうべつ]の 辞[じ]は 誰[だれ]に 頼[たの]みましょうか。|Wen bitten wir um die Abschiedsrede?|Nomen (mit する)
送別会|送別会[そうべつかい]|Abschiedsfeier|来週[らいしゅう]、 課長[かちょう]の 送別会[そうべつかい]を 開[ひら]きます。|Nächste Woche geben wir die Abschiedsfeier für den Sektionsleiter.|Nomen
専門家|専門家[せんもんか]|Fachmann, Expertin|教授[きょうじゅ]はフランス 文学[ぶんがく]の 専門家[せんもんか]。|Der Professor ist Experte für französische Literatur.|Nomen
専門|専門[せんもん]|Fachgebiet|法律[ほうりつ]は 私[わたし]の 専門[せんもん]です。|Jura ist mein Fachgebiet.|Nomen
専用|専用[せんよう]|ausschließlich für, eigens für|これは 女性[じょせい] 専用[せんよう]の 車両[しゃりょう]です。|Das ist ein Wagen nur für Frauen.|Nomen
メロディー|メロディー|Melodie|このメロディーは 聞[き]いたことがある。|Diese Melodie habe ich schon einmal gehört.|Nomen
全般|全般[ぜんぱん]|allgemein, das Ganze|彼[かれ]は 植物[しょくぶつ] 全般[ぜんぱん]に 詳[くわ]しいね。|Er kennt sich mit Pflanzen allgemein gut aus.|Nomen
本格的|本格的[ほんかくてき]|richtig, ernsthaft, authentisch|彼[かれ]は 絵[え]を 本格的[ほんかくてき]に 勉強[べんきょう]しているんだ。|Er studiert ernsthaft Malerei.|Adjektiv
全面的|全面的[ぜんめんてき]|umfassend, uneingeschränkt|彼[かれ]が 全面的[ぜんめんてき]に 協力[きょうりょく]してくれるそうです。|Er will uns offenbar uneingeschränkt unterstützen.|Adjektiv
論理的|論理的[ろんりてき]|logisch|彼[かれ]は 論理的[ろんりてき]な 人[ひと]です。|Er ist ein logisch denkender Mensch.|Adjektiv
知的|知的[ちてき]|intellektuell, geistig|彼[かれ]はすごく 知的[ちてき]な 人[ひと]です。|Er ist ein sehr intellektueller Mensch.|Adjektiv
目的地|目的地[もくてきち]|Reiseziel, Bestimmungsort|やっと 目的地[もくてきち]に 着[つ]いたよ。|Endlich bin ich am Ziel angekommen.|Nomen
リットル|リットル|Liter|今日[きょう]は 水[みず]を2リットル 以上飲[いじょう の]んだわ。|Heute habe ich über zwei Liter Wasser getrunken.|Nomen
文化的|文化的[ぶんかてき]|kulturell|この 国[くに]は 文化的[ぶんかてき]な 事業[じぎょう]に 力[ちから]を 入[い]れています。|Dieses Land fördert kulturelle Projekte.|Adjektiv
男性的|男性的[だんせいてき]|männlich, maskulin|彼[かれ]はとても 男性的[だんせいてき]な 人[ひと]です。|Er ist ein sehr männlicher Typ.|Adjektiv
普段|普段[ふだん]|gewöhnlich, im Alltag|私[わたし]は 普段[ふだん]は T[てぃー]シャツとジーンズを 着[き]ています。|Im Alltag trage ich T-Shirt und Jeans.|Adverb
並み|並[な]み|durchschnittlich, gewöhnlich|彼[かれ]は 並[な]みの 人間[にんげん]ではありません。|Er ist kein gewöhnlicher Mensch.|Nomen
並木|並木[なみき]|Baumreihe, Allee|駅前[えきまえ]の 並木[なみき]が 台風[たいふう]で 倒[たお]れたらしい。|Die Bäume vor dem Bahnhof sollen im Taifun umgestürzt sein.|Nomen
わざと|わざと|absichtlich|彼[かれ]はわざと 負[ま]けたように 見[み]えたな。|Es sah aus, als hätte er absichtlich verloren.|Adverb
平面|平面[へいめん]|Ebene, Fläche|このメガネをかけると 平面[へいめん]が 立体[りったい]に 見[み]えます。|Mit dieser Brille sieht Flaches dreidimensional aus.|Nomen
平気|平気[へいき]|unbekümmert, gelassen|彼女[かのじょ]は 平気[へいき]な 顔[かお]をしていた。|Sie machte ein unbekümmertes Gesicht.|Adjektiv
平ら|平[たい]ら|flach, eben|その 建物[たてもの]の 屋根[やね]は 平[たい]らだね。|Das Dach des Gebäudes ist flach.|Adjektiv
平行|平行[へいこう]|parallel|平行[へいこう]に 線[せん]を 引[ひ]いてください。|Ziehen Sie die Linien bitte parallel.|Nomen (mit する)
不平|不平[ふへい]|Unzufriedenheit, Klage|私[わたし]はいつも 同僚[どうりょう]の 不平[ふへい]を 聞[き]いているんだ。|Ich höre mir ständig die Klagen meines Kollegen an.|な-Adjektiv
とっくに|とっくに|schon längst|彼[かれ]ならとっくに 帰[かえ]りましたよ。|Er ist schon längst nach Hause gegangen.|Adverb
地平線|地平線[ちへいせん]|Horizont (über dem Land)|地平線[ちへいせん]に 夕日[ゆうひ]が 沈[しず]むところだったの。|Die Abendsonne versank gerade am Horizont.|Nomen
平野|平野[へいや]|Ebene, Flachland|広[ひろ]い 平野[へいや]が 一面雪[いちめん ゆき]で 真[ま]っ 白[しろ]でした。|Die weite Ebene war ganz weiß vom Schnee.|Nomen
平たい|平[ひら]たい|flach|平[ひら]たいお 皿[さら]を 一枚取[いちまい と]って。|Reich mir bitte einen flachen Teller.|Adjektiv
平方|平方[へいほう]|Quadrat-|この 土地[とち]の 面積[めんせき]は 約100[やく 100] 平方[へいほう]メートルです。|Die Fläche dieses Grundstücks beträgt etwa 100 Quadratmeter.|Nomen
平日|平日[へいじつ]|Wochentag, Werktag|彼[かれ]は 平日[へいじつ]がお 休[やす]みです。|Er hat an Werktagen frei.|Nomen
ベスト|ベスト|das Beste|私[わたし]はベストを 尽[つ]くしました。|Ich habe mein Bestes gegeben.|Nomen
平均|平均[へいきん]|Durchschnitt|平均[へいきん]で 一日[いちにち]に8 時間[じかん]ぐらい 働[はたら]いています。|Ich arbeite im Durchschnitt etwa acht Stunden am Tag.|Nomen (mit する)
等しい|等[ひと]しい|gleich, so gut wie|私[わたし]は 株[かぶ]の 知識[ちしき]がないに 等[ひと]しいです。|Ich habe so gut wie keine Ahnung von Aktien.|Adjektiv
平等|平等[びょうどう]|Gleichheit, gleich behandelt|あの 先生[せんせい]は 生徒[せいと]をみな 平等[びょうどう]に 扱[あつか]います。|Dieser Lehrer behandelt alle Schüler gleich.|な-Adjektiv
同等|同等[どうとう]|gleichwertig|彼[かれ]には 大学生[だいがくせい]と 同等[どうとう]の 学力[がくりょく]があります。|Er hat ein Leistungsniveau wie ein Student.|Nomen
対等|対等[たいとう]|gleichberechtigt, auf Augenhöhe|その 子供[こども]は 大人[おとな]と 対等[たいとう]に 話[はな]していたよ。|Das Kind sprach mit dem Erwachsenen auf Augenhöhe.|な-Adjektiv
不平等|不平等[ふびょうどう]|ungleich, ungerecht|職場[しょくば]での 男女[だんじょ] 不平等[ふびょうどう]はよく 見[み]られるね。|Ungleichbehandlung von Männern und Frauen am Arbeitsplatz sieht man häufig.|な-Adjektiv
ワンピース|ワンピース|Kleid (einteilig)|彼女[かのじょ]は 白[しろ]いワンピースを 着[き]ていたよ。|Sie trug ein weißes Kleid.|Nomen
病室|病室[びょうしつ]|Krankenzimmer|その 病室[びょうしつ]はとても 広[ひろ]くてきれいだった。|Das Krankenzimmer war sehr groß und sauber.|Nomen
病人|病人[びょうにん]|Kranke(r)|病人[びょうにん]が 出[で]たので 電車[でんしゃ]が 少[すこ]し 止[と]まったんだ。|Weil jemand erkrankt war, hielt der Zug kurz an.|Nomen
内科|内科[ないか]|Innere Medizin|内科[ないか]で 胃[い]の 調子[ちょうし]を 診[み]てもらったよ。|Ich habe beim Internisten meinen Magen untersuchen lassen.|Nomen
必死|必死[ひっし]|verzweifelt, mit aller Kraft|学生[がくせい]たちは 授業[じゅぎょう]についていくのに 必死[ひっし]です。|Die Studenten strengen sich verzweifelt an, im Unterricht mitzukommen.|な-Adjektiv
病死|病死[びょうし]|Tod durch Krankheit|その 作家[さっか]は35 歳[さい]という 若[わか]さで 病死[びょうし]した。|Der Schriftsteller starb jung, mit 35 Jahren, an einer Krankheit.|Nomen (mit する)
ダイヤモンド|ダイヤモンド|Diamant|ダイヤモンドはとても 高価[こうか]ですね。|Diamanten sind sehr teuer.|Nomen
必死に|必死[ひっし]に|verzweifelt, mit aller Kraft|必死[ひっし]に 単語[たんご]を 暗記[あんき]したよ。|Ich habe die Vokabeln mit aller Kraft gepaukt.|Adverb
亡くす|亡[な]くす|verlieren (durch Tod)|昨年[さくねん]、 友人[ゆうじん]を 亡[な]くしました。|Letztes Jahr habe ich einen Freund verloren.|Verb
多忙|多忙[たぼう]|sehr beschäftigt|彼女[かのじょ]は 多忙[たぼう]な 人[ひと]です。|Sie ist ein vielbeschäftigter Mensch.|な-Adjektiv
疲れ|疲[つか]れ|Müdigkeit, Erschöpfung|最近[さいきん] 疲[つか]れがたまっています。|In letzter Zeit hat sich bei mir Müdigkeit angestaut.|Nomen
立ち入り禁止|立[た]ち 入[い]り 禁止[きんし]|Betreten verboten|ここは 立[た]ち 入[い]り 禁止[きんし]です。|Hier ist Betreten verboten.|Nomen
ナンバー|ナンバー|Nummer; Kennzeichen|その 車[くるま]のナンバーを 覚[おぼ]えていますか。|Erinnern Sie sich an das Kennzeichen des Autos?|Nomen
日本酒|日本酒[にほんしゅ]|Sake (japanischer Reiswein)|珍[めずら]しい 日本酒[にほんしゅ]が 手[て]に 入[はい]りました。|Ich habe einen seltenen Sake bekommen.|Nomen
酔う|酔[よ]う|betrunken werden; seekrank werden|みんなかなり 酔[よ]っていたの。|Alle waren ziemlich betrunken.|Verb
保つ|保[たも]つ|bewahren, erhalten|彼女[かのじょ]は 若[わか]さを 保[たも]とうと 必死[ひっし]だ。|Sie versucht verzweifelt, jung zu bleiben.|Verb
保険|保険[ほけん]|Versicherung|あなたは 保険[ほけん]に 加入[かにゅう]していますか。|Sind Sie versichert?|Nomen
保証|保証[ほしょう]|Garantie|この 製品[せいひん]の 保証[ほしょう] 期間[きかん]は5 年間[ねん かん]となっております。|Die Garantiezeit dieses Produkts beträgt fünf Jahre.|Nomen (mit する)
保証人|保証人[ほしょうにん]|Bürge, Bürgin|彼[かれ]が 私[わたし]の 保証人[ほしょうにん]になってくれました。|Er ist mein Bürge geworden.|Nomen
とうとう|とうとう|schließlich, endlich|とうとう 引[ひ]っ 越[こ]しの 日[ひ]がきました。|Schließlich ist der Tag des Umzugs gekommen.|Adverb
保存|保存[ほぞん]|Aufbewahrung, Speichern|データを30 分[ぷん]おきに 保存[ほぞん]してください。|Speichern Sie die Daten bitte alle 30 Minuten.|Nomen (mit する)
存じる|存[ぞん]じる|wissen, denken (bescheiden)|郵便局[ゆうびんきょく]はどこかご 存[ぞん]じですか。|Wissen Sie, wo die Post ist?|Verb
注ぐ|注[そそ]ぐ|eingießen; zufließen|みんなのグラスにジュースを 注[そそ]いだよ。|Ich habe allen Saft ins Glas gegossen.|Verb
注|注[ちゅう]|Anmerkung|詳[くわ]しくは 注[ちゅう]を 読[よ]んでください。|Näheres lesen Sie bitte in der Anmerkung.|Nomen
同意|同意[どうい]|Zustimmung, Einverständnis|彼[かれ]の 意見[いけん]には 同意[どうい]できません。|Seiner Meinung kann ich nicht zustimmen.|Nomen (mit する)
とんでもない|とんでもない|unerhört, ganz und gar nicht|仕事中[しごとちゅう]に 帰[かえ]るなんてとんでもない。|Mitten in der Arbeit nach Hause zu gehen kommt nicht in Frage.|Adjektiv
無意味|無意味[むいみ]|sinnlos|そんなことをしても 無意味[むいみ]よ。|So etwas zu tun ist sinnlos.|な-Adjektiv
不注意|不注意[ふちゅうい]|Unachtsamkeit|その 事故[じこ]は 運転手[うんてんしゅ]の 不注意[ふちゅうい]が 原因[げんいん]で 起[お]きたの。|Der Unfall wurde durch die Unachtsamkeit des Fahrers verursacht.|な-Adjektiv
生意気|生意気[なまいき]|frech, vorlaut|あの 子[こ]は 生意気[なまいき]だと 思[おも]います。|Ich finde das Kind vorlaut.|な-Adjektiv
確かめる|確[たし]かめる|überprüfen, sich vergewissern|母[はは]はお 釣[つ]りを 確[たし]かめたの。|Meine Mutter hat das Wechselgeld nachgezählt.|Verb
明確|明確[めいかく]|klar, eindeutig|彼女[かのじょ]には 明確[めいかく]な 目標[もくひょう]があるね。|Sie hat ein klares Ziel.|な-Adjektiv
にこやか|にこやか|freundlich lächelnd|彼[かれ]らはにこやかに 挨拶[あいさつ]を 交[か]わしたけどね。|Sie grüßten einander ja freundlich lächelnd.|Adjektiv
不確か|不確[ふたし]か|unsicher, ungewiss|人[ひと]の 記憶[きおく]は 不確[ふたし]かよ。|Das Gedächtnis des Menschen ist unzuverlässig.|な-Adjektiv
認可|認可[にんか]|Genehmigung, Zulassung|この 薬[くすり]はまだ 認可[にんか]されていません。|Dieses Medikament ist noch nicht zugelassen.|Nomen (mit する)
認める|認[みと]める|anerkennen, zugeben, erlauben|父[ちち]が 彼女[かのじょ]との 結婚[けっこん]を 認[みと]めてくれました。|Mein Vater hat der Heirat mit ihr zugestimmt.|Verb
率|率[りつ]|Rate, Quote|その 手術[しゅじゅつ]の 成功[せいこう] 率[りつ]は90%だそうです。|Die Erfolgsquote dieser Operation soll 90 Prozent betragen.|Nomen
率直|率直[そっちょく]|offen, freimütig|率直[そっちょく]なご 意見[いけん]ありがとうございました。|Vielen Dank für Ihre offene Meinung.|Adjektiv
能率|能率[のうりつ]|Effizienz|この 方法[ほうほう]だと 能率[のうりつ]がいいですね。|Mit dieser Methode arbeitet man effizient.|Nomen
ロッカー|ロッカー|Schließfach, Spind|荷物[にもつ]を 駅[えき]のロッカーに 入[い]れた。|Ich habe mein Gepäck in ein Schließfach am Bahnhof getan.|Nomen
旅客機|旅客機[りょかくき]|Passagierflugzeug|旅客機[りょかくき]が 墜落[ついらく]したよ。|Ein Passagierflugzeug ist abgestürzt.|Nomen
不器用|不器用[ぶきよう]|ungeschickt, unbeholfen|妹[いもうと]は 不器用[ぶきよう]で、 料理[りょうり]も 苦手[にがて]なの。|Meine kleine Schwester ist ungeschickt und kocht auch nicht gut.|な-Adjektiv
道具|道具[どうぐ]|Werkzeug, Gerät|道具[どうぐ]は 全部揃[ぜんぶ そろ]っていますか。|Ist das ganze Werkzeug beisammen?|Nomen
予備|予備[よび]|Reserve, Ersatz|旅行[りょこう]には 予備[よび]の 靴[くつ]を 持[も]って 行[い]きます。|Auf Reisen nehme ich ein Paar Ersatzschuhe mit.|Nomen
説く|説[と]く|erklären, predigen|彼[かれ]は 非暴力[ひぼうりょく]を 説[と]きました。|Er predigte Gewaltlosigkeit.|Verb
プライド|プライド|Stolz|彼[かれ]はプライドが 高[たか]い 人[ひと]です。|Er ist ein stolzer Mensch.|Nomen
不公平|不公平[ふこうへい]|ungerecht, unfair|彼[かれ]のやり 方[かた]は 不公平[ふこうへい]です。|Seine Vorgehensweise ist ungerecht.|な-Adjektiv
遊園地|遊園地[ゆうえんち]|Freizeitpark|この 遊園地[ゆうえんち]のチケットは 3000円[さんぜんえん]です。|Die Karten für diesen Freizeitpark kosten 3.000 Yen.|Nomen
保育園|保育園[ほいくえん]|Kinderkrippe, Kita|娘[むすめ]を 保育園[ほいくえん]に 迎[むか]えに 行[い]きます。|Ich hole meine Tochter von der Kita ab.|Nomen
飛び出す|飛[と]び 出[だ]す|hinausspringen, hervorschießen|彼[かれ]は 道路[どうろ]に 飛[と]び 出[だ]したの。|Er ist auf die Straße gelaufen.|Verb
飛ばす|飛[と]ばす|fliegen lassen; überspringen|子供[こども]が 紙飛行機[かみひこうき]を 飛[と]ばしています。|Ein Kind lässt einen Papierflieger fliegen.|Verb
ママ|ママ|Mama|ママに 聞[き]いてみよう。|Fragen wir Mama.|Nomen
飛び上がる|飛[と]び 上[あ]がる|aufspringen, hochfliegen|大[おお]きな 音[おと]にびっくりして 飛[と]び 上[あ]がりました。|Bei dem lauten Geräusch bin ich vor Schreck hochgefahren.|Verb
飛び下りる|飛[と]び 下[お]りる|hinunterspringen|猫[ねこ]が 屋根[やね]から 飛[と]び 下[お]りました。|Eine Katze ist vom Dach gesprungen.|Verb
飛び込む|飛[と]び 込[こ]む|hineinspringen|カエルが 池[いけ]に 飛[と]び 込[こ]んだね。|Ein Frosch ist in den Teich gesprungen.|Verb
飛行|飛行[ひこう]|Flug|このフライトの 飛行[ひこう] 時間[じかん]は 約3時間[やく 3 じかん]です。|Die Flugzeit beträgt etwa drei Stunden.|Nomen (mit する)
船長|船長[せんちょう]|Kapitän(in)|私[わたし]がこの 船[ふね]の 船長[せんちょう]です。|Ich bin der Kapitän dieses Schiffes.|Nomen
よける|よける|ausweichen; beiseiteräumen|椅子[いす]の 荷物[にもつ]をよけて 座[すわ]ったけど。|Ich habe das Gepäck vom Stuhl geräumt und mich hingesetzt.|Verb
風船|風船[ふうせん]|Luftballon|子供[こども]が 風船[ふうせん]を 膨[ふく]らませているね。|Ein Kind bläst einen Luftballon auf.|Nomen
半島|半島[はんとう]|Halbinsel|台風[たいふう]がその 半島[はんとう]を 通過[つうか]したの。|Der Taifun ist über die Halbinsel hinweggezogen.|Nomen
島|島[とう]|Insel|私[わたし]たちはハワイのマウイ 島[とう]に 旅行[りょこう]したの。|Wir sind auf die Insel Maui in Hawaii gereist.|Nomen
不完全|不完全[ふかんぜん]|unvollständig, unvollkommen|このデータはまだ 不完全[ふかんぜん]ね。|Diese Daten sind noch unvollständig.|な-Adjektiv
達成|達成[たっせい]|Erreichen (eines Ziels)|彼[かれ]は 今月[こんげつ]の 売上目標[うりあげ もくひょう]を 達成[たっせい]した。|Er hat das Umsatzziel dieses Monats erreicht.|Nomen (mit する)
成り立つ|成[な]り 立[た]つ|bestehen aus, zustande kommen|この 島[しま]は 観光[かんこう]で 成[な]り 立[た]っています。|Diese Insel lebt vom Tourismus.|Verb
バッジ|バッジ|Abzeichen|彼[かれ]は 弁護士[べんごし]バッジを 付[つ]けていたよ。|Er trug ein Anwaltsabzeichen.|Nomen
未成年|未成年[みせいねん]|Minderjährige(r)|未成年[みせいねん]はお 酒[さけ]を 飲[の]めません。|Minderjährige dürfen keinen Alkohol trinken.|Nomen
敗れる|敗[やぶ]れる|besiegt werden, unterliegen|私[わたし]のチームは1 回戦[かいせん]で 敗[やぶ]れたよ。|Meine Mannschaft ist in der ersten Runde ausgeschieden.|Verb
野原|野原[のはら]|Feld, Wiese|私[わたし]たちは 野原[のはら]で 花[はな]をつんだの。|Wir haben auf der Wiese Blumen gepflückt.|Nomen
原|原[はら]|Ebene, Feld|クローバーの 原[はら]でピクニックをしたよ。|Wir haben auf einem Kleefeld gepicknickt.|Nomen
要因|要因[よういん]|Hauptursache, Faktor|私[わたし]たちはがんの 要因[よういん]を 研究[けんきゅう]しています。|Wir erforschen die Ursachen von Krebs.|Nomen
ピン|ピン|Nadel, Haarnadel|彼女[かのじょ]はいつも 髪[かみ]をピンで 留[と]めているね。|Sie steckt ihre Haare immer mit Nadeln fest.|Nomen
因る|因[よ]る|beruhen auf, verursacht sein durch|彼[かれ]の 病気[びょうき]は 過労[かろう]に 因[よ]るものです。|Seine Krankheit kommt von Überarbeitung.|Verb
物資|物資[ぶっし]|Güter, Hilfsgüter|被災地[ひさいち]に 物資[ぶっし]を 送[おく]ったよ。|Wir haben Hilfsgüter ins Katastrophengebiet geschickt.|Nomen
願い|願[ねが]い|Wunsch, Bitte|世界[せかい]の 平和[へいわ]が 私[わたし]たちの 願[ねが]いです。|Weltfrieden ist unser Wunsch.|Nomen
不正|不正[ふせい]|Unrecht, Betrug|試験[しけん]で 不正[ふせい]が 見[み]つかったよ。|Bei der Prüfung wurde Betrug aufgedeckt.|な-Adjektiv
大正|大正[たいしょう]|Taishō-Ära (1912–1926)|祖母[そぼ]は 大正[たいしょう] 生[う]まれです。|Meine Großmutter ist in der Taishō-Zeit geboren.|Nomen
まあ|まあ|na ja, nun|まあこれでいいだろう。|Na ja, so wird es wohl gehen.|Ausruf
正に|正[まさ]に|genau, wahrhaftig|彼[かれ]は 正[まさ]に 英雄[えいゆう]ね。|Er ist wahrhaftig ein Held.|Adverb
常に|常[つね]に|stets, immer|彼[かれ]は 常[つね]に 姿勢[しせい]がいい。|Er hat stets eine gute Haltung.|Adverb
日常|日常[にちじょう]|Alltag, alltäglich|音楽[おんがく]は 私[わたし]の 日常[にちじょう]の 一部[いちぶ]です。|Musik ist ein Teil meines Alltags.|Nomen
知識|知識[ちしき]|Wissen, Kenntnisse|私[わたし]は 旅行[りょこう]から 多[おお]くの 知識[ちしき]を 得[え]た。|Ich habe durch Reisen viel Wissen gewonnen.|Nomen
認識|認識[にんしき]|Erkenntnis, Wahrnehmung, Auffassung|その 件[けん]は 終[お]わったと 認識[にんしき]しています。|Nach meinem Verständnis ist die Sache erledigt.|Nomen (mit する)
無意識|無意識[むいしき]|unbewusst|私[わたし]は 無意識[むいしき]に 彼[かれ]を 傷[きず]つけてしまった。|Ich habe ihn unbewusst verletzt.|Adverb
むなしい|むなしい|leer, vergeblich|愛[あい]がなければ 人生[じんせい]はむなしいよ。|Ohne Liebe ist das Leben leer.|Adjektiv
非難|非難[ひなん]|Kritik, Vorwurf|国民[こくみん]は 総理大臣[そうり だいじん]を 非難[ひなん]しているね。|Das Volk kritisiert den Premierminister.|Nomen (mit する)
非常|非常[ひじょう]|Notfall; außerordentlich|非常[ひじょう] 事態[じたい]です。|Das ist ein Notfall.|な-Adjektiv
非常識|非常識[ひじょうしき]|ohne Anstand, unvernünftig|彼[かれ]は 非常識[ひじょうしき]な 時間[じかん]に 電話[でんわ]してきたの。|Er hat zu einer unmöglichen Uhrzeit angerufen.|な-Adjektiv
非常口|非常口[ひじょうぐち]|Notausgang|ビルの 非常口[ひじょうぐち]を 確認[かくにん]したの。|Ich habe mir den Notausgang des Gebäudes angesehen.|Nomen
調子|調子[ちょうし]|Verfassung, Form; Ton|体[からだ]の 調子[ちょうし]がとても 良[い]いです。|Ich bin körperlich in sehr guter Verfassung.|Nomen
ついで|ついで|bei der Gelegenheit, nebenbei|ついでだから 彼[かれ]も 呼[よ]ぼうよ。|Laden wir ihn bei der Gelegenheit doch auch ein.|Nomen
調和|調和[ちょうわ]|Harmonie, Einklang|彼女[かのじょ]は 自然[しぜん]と 調和[ちょうわ]した 暮[く]らし 方[かた]をしているの。|Sie lebt im Einklang mit der Natur.|Nomen (mit する)
体調|体調[たいちょう]|körperliche Verfassung|今日[きょう]は 体調[たいちょう]が 悪[わる]いです。|Heute geht es mir gesundheitlich nicht gut.|Nomen
単調|単調[たんちょう]|eintönig, monoton|この 曲[きょく]は 単調[たんちょう]でつまらないな。|Dieses Stück ist eintönig und langweilig.|な-Adjektiv
調味料|調味料[ちょうみりょう]|Würzmittel, Gewürz|塩[しお]、コショウはよく 使[つか]われる 調味料[ちょうみりょう]です。|Salz und Pfeffer sind häufig verwendete Gewürze.|Nomen
調整|調整[ちょうせい]|Abstimmung, Regulierung|今[いま]、スケジュールの 調整[ちょうせい]をしています。|Ich stimme gerade den Zeitplan ab.|Nomen (mit する)
バケツ|バケツ|Eimer|バケツに 水[みず]を 汲[く]んできてください。|Holen Sie bitte Wasser im Eimer.|Nomen
整える|整[ととの]える|ordnen, herrichten|彼[かれ]はスピーチの 前[まえ]に 服装[ふくそう]を 整[ととの]えた。|Er richtete vor der Rede seine Kleidung.|Verb
整う|整[ととの]う|geordnet sein, bereit sein|パーティーの 準備[じゅんび]が 整[ととの]いました。|Die Vorbereitungen für die Party sind abgeschlossen.|Verb
調節|調節[ちょうせつ]|Regulierung, Einstellung|ここで 部屋[へや]の 温度[おんど]が 調節[ちょうせつ]できます。|Hier kann man die Zimmertemperatur einstellen.|Nomen (mit する)
提出|提出[ていしゅつ]|Einreichung, Abgabe|課題[かだい]は7 月5日[がつ 5 か]までに 提出[ていしゅつ]してください。|Geben Sie die Aufgabe bitte bis zum 5. Juli ab.|Nomen (mit する)
前提|前提[ぜんてい]|Voraussetzung, Prämisse|交渉[こうしょう]が 成立[せいりつ]するという 前提[ぜんてい]で 話[はなし]を 進[すす]めます。|Wir gehen im Gespräch davon aus, dass die Verhandlung zustande kommt.|Nomen
答案|答案[とうあん]|Prüfungsbogen, Lösungsblatt|今[いま]から 答案[とうあん]を 集[あつ]めます。|Ich sammle jetzt die Prüfungsbögen ein.|Nomen
はっと|はっと|aufschreckend, plötzlich gewahr werdend|彼女[かのじょ]の 美[うつく]しさにはっとしたよ。|Ihre Schönheit hat mich überrascht.|Adverb
投票|投票[とうひょう]|Abstimmung, Stimmabgabe|私[わたし]は 朝早[あさ はや]く 投票[とうひょう]を 済[す]ませました。|Ich habe frühmorgens gewählt.|Nomen (mit する)
目標|目標[もくひょう]|Ziel|私[わたし]は 父[ちち]を 目標[もくひょう]にしています。|Mein Vater ist mein Vorbild.|Nomen
標準|標準[ひょうじゅん]|Standard, Norm|ニュースでは 標準[ひょうじゅん] 語[ご]が 使[つか]われるの。|In den Nachrichten wird die Standardsprache verwendet.|Nomen
連れる|連[つ]れる|mitnehmen, in Begleitung haben|親[おや]が 君[きみ]を 一度[いちど] 連[つ]れて 来[こ]いって 言[い]うんだ。|Meine Eltern sagen, ich soll dich einmal mitbringen.|Verb
連日|連日[れんじつ]|Tag für Tag, mehrere Tage hintereinander|展覧会[てんらんかい]は 連日[れんじつ] 賑[にぎ]わいました。|Die Ausstellung war jeden Tag gut besucht.|Nomen
まずい|まずい|ungeschickt, schlecht; ungünstig|彼女[かのじょ]の 運転[うんてん]がまずくて、はらはらした。|Sie fuhr so schlecht, dass mir angst und bange wurde.|Adjektiv
連休|連休[れんきゅう]|mehrere freie Tage hintereinander|今度[こんど]の 連休[れんきゅう]は 実家[じっか]に 帰[かえ]ります。|An den nächsten freien Tagen fahre ich zu meinen Eltern.|Nomen
連れ|連[つ]れ|Begleitung, Begleiter(in)|彼女[かのじょ]は 私[わたし]の 連[つ]れです。|Sie gehört zu mir.|Nomen
連絡|連絡[れんらく]|Kontakt, Benachrichtigung; Anschluss|仕事[しごと]が 終[お]わったら 連絡[れんらく]します。|Ich melde mich, wenn die Arbeit fertig ist.|Nomen (mit する)
手続き|手続[てつづ]き|Verfahren, Formalitäten|入国[にゅうこく] 手続[てつづ]きが 終[お]わりました。|Die Einreiseformalitäten sind erledigt.|Nomen
連続|連続[れんぞく]|Fortsetzung, Aufeinanderfolge|彼女[かのじょ]の 人生[じんせい]は 苦労[くろう]の 連続[れんぞく]でした。|Ihr Leben war eine Kette von Mühen.|Nomen (mit する)
もしも|もしも|falls, wenn je|もしも 彼女[かのじょ]と 結婚[けっこん]できたらどんなに 嬉[うれ]しいだろう。|Wie glücklich wäre ich, wenn ich sie heiraten könnte!|Adverb
続々|続々[ぞくぞく]|in rascher Folge, einer nach dem anderen|お 客[きゃく]さんが 続々[ぞくぞく]とやって 来[き]ましたよ。|Die Gäste kamen einer nach dem anderen.|Adverb
続き|続[つづ]き|Fortsetzung|話[はなし]の 続[つづ]きは 電話[でんわ]でしましょう。|Den Rest besprechen wir am Telefon.|Nomen
長続き|長続[ながつづ]き|lange anhalten, von Dauer sein|彼[かれ]は 仕事[しごと]が 長続[ながつづ]きしません。|Er hält es in keiner Arbeit lange aus.|Nomen (mit する)
相場|相場[そうば]|Marktpreis, Kurs|この 辺[あた]りの 家賃[やちん]の 相場[そうば]はいくらですか。|Was ist hier in der Gegend die übliche Miete?|Nomen
相当|相当[そうとう]|entsprechen; ziemlich, beträchtlich|1[いち]ポンドは454グラムに 相当[そうとう]します。|Ein Pfund entspricht 454 Gramm.|Nomen (mit する)
やかましい|やかましい|laut, lärmend; pingelig|スピーカーの 音[おと]がやかましいな。|Der Lautsprecher ist ganz schön laut.|Adjektiv
相応しい|相応[ふさわ]しい|passend, angemessen|その 場[ば]に 相応[ふさわ]しい 服装[ふくそう]で 来[き]てください。|Kommen Sie bitte in dem Anlass angemessener Kleidung.|Adjektiv
対談|対談[たいだん]|Zwiegespräch, Interview|雑誌[ざっし]にその 女優[じょゆう]の 対談[たいだん]が 載[の]っていたよ。|In der Zeitschrift stand ein Gespräch mit dieser Schauspielerin.|Nomen (mit する)
録画|録画[ろくが]|Videoaufzeichnung|好[す]きな 番組[ばんぐみ]を 録画[ろくが]したの。|Ich habe meine Lieblingssendung aufgenommen.|Nomen (mit する)
録音テープ|録音[ろくおん]テープ|Tonband|インタビューはこの 録音[ろくおん]テープに 入[はい]っています。|Das Interview ist auf diesem Tonband.|Nomen
登場|登場[とうじょう]|Auftritt, Erscheinen|彼女[かのじょ]の 登場[とうじょう]で 会場[かいじょう]は 盛[も]り 上[あ]がったね。|Als sie auftrat, kam im Saal Stimmung auf.|Nomen (mit する)
登録|登録[とうろく]|Registrierung, Anmeldung|心理学[しんりがく]の 授業[じゅぎょう]に 登録[とうろく]しましたか。|Hast du dich für den Psychologiekurs eingeschrieben?|Nomen (mit する)
バット|バット|Schläger (Baseball)|このバットは 金属[きんぞく]で 出来[でき]ています。|Dieser Schläger ist aus Metall.|Nomen
登山|登山[とざん]|Bergsteigen|夏休[なつやす]みには 家族[かぞく]で 登山[とざん]をします。|In den Sommerferien gehen wir mit der Familie bergsteigen.|Nomen (mit する)
登校|登校[とうこう]|Schulbesuch, zur Schule gehen|生徒[せいと]たちは 朝8時[あさ 8 じ]ごろ 登校[とうこう]します。|Die Schüler kommen morgens gegen acht Uhr zur Schule.|Nomen (mit する)
山登り|山登[やまのぼ]り|Bergwandern|明日[あした]は 友達[ともだち]と 山登[やまのぼ]りに 行[い]きます。|Morgen gehe ich mit Freunden in die Berge.|Nomen (mit する)
無関心|無関心[むかんしん]|Gleichgültigkeit, Desinteresse|彼女[かのじょ]は 政治[せいじ]に 無関心[むかんしん]です。|Sie interessiert sich nicht für Politik.|な-Adjektiv
無関係|無関係[むかんけい]|ohne Zusammenhang, unbeteiligt|彼[かれ]はこの 事件[じけん]と 無関係[むかんけい]です。|Er hat mit diesem Vorfall nichts zu tun.|な-Adjektiv
マナー|マナー|Manieren|食事[しょくじ]のマナーを 守[まも]りましょう。|Achten wir auf Tischmanieren.|Nomen
不況|不況[ふきょう]|Rezession, Flaute|不況[ふきょう]の 影響[えいきょう]で 仕事[しごと]が 少[すく]ないね。|Wegen der Rezession gibt es wenig Arbeit.|Nomen
態度|態度[たいど]|Haltung, Verhalten|あの 男[おとこ]の 態度[たいど]にみんなあきれてたよ。|Über das Benehmen dieses Mannes waren alle entsetzt.|Nomen
明治|明治[めいじ]|Meiji-Ära (1868–1912)|祖父[そふ]は 明治[めいじ]の 生[う]まれです。|Mein Großvater ist in der Meiji-Zeit geboren.|Nomen
府|府[ふ]|Stadtpräfektur (Osaka, Kyoto)|彼[かれ]は 大阪[おおさか] 府[ふ]に 住[す]んでいます。|Er wohnt in der Präfektur Osaka.|Nomen
府立|府立[ふりつ]|von der Präfektur getragen (Osaka, Kyoto)|彼女[かのじょ]は 府立[ふりつ] 大学[だいがく]に 通[かよ]っています。|Sie geht auf die Präfekturuniversität.|Nomen
ばらばら|ばらばら|verstreut, getrennt, auseinander|生徒[せいと]たちはばらばらに 帰宅[きたく]したね。|Die Schüler sind einzeln nach Hause gegangen.|Adverb
野党|野党[やとう]|Oppositionspartei|野党[やとう]が 与党[よとう]を 厳[きび]しく 非難[ひなん]していましたね。|Die Opposition hat die Regierungspartei scharf kritisiert.|Nomen
当選|当選[とうせん]|Wahlsieg; Gewinn (Los)|彼[かれ]は 選挙[せんきょ]に 当選[とうせん]しました。|Er wurde bei der Wahl gewählt.|Nomen (mit する)
入選|入選[にゅうせん]|Auswahl, Annahme (bei einem Wettbewerb)|彼[かれ]の 絵[え]がコンクールに 入選[にゅうせん]した。|Sein Bild wurde beim Wettbewerb ausgewählt.|Nomen (mit する)
選択|選択[せんたく]|Auswahl, Wahl|この5 種類[しゅるい]から 選択[せんたく]できます。|Sie können aus diesen fünf Sorten wählen.|Nomen (mit する)
天候|天候[てんこう]|Wetter, Witterung|ここは 天候[てんこう]の 変化[へんか]が 激[はげ]しいですね。|Hier schlägt das Wetter schnell um.|Nomen
手首|手首[てくび]|Handgelenk|手首[てくび]の 関節[かんせつ]をひねっちゃった。|Ich habe mir das Handgelenk verstaucht.|Nomen
プラットホーム|プラットホーム|Bahnsteig|プラットホームで 電車[でんしゃ]が 来[く]るのを 待[ま]ったの。|Ich habe auf dem Bahnsteig auf den Zug gewartet.|Nomen
脳|脳[のう]|Gehirn|そのクイズ 番組[ばんぐみ]は 脳[のう]を 刺激[しげき]するね。|Diese Quizsendung regt das Gehirn an.|Nomen
悩む|悩[なや]む|sich quälen, Sorgen haben|彼[かれ]は 受験[じゅけん]のことで 悩[なや]んでいます。|Er macht sich Sorgen wegen der Aufnahmeprüfung.|Verb
悩み|悩[なや]み|Sorge, Kummer|彼[かれ]は 大[おお]きな 悩[なや]みを 抱[かか]えていました。|Er trug eine große Sorge mit sich herum.|Nomen
先頭|先頭[せんとう]|Spitze, vorderste Stelle|先頭[せんとう]の 人[ひと]はプラカードを 持[も]ってください。|Die Person an der Spitze trägt bitte das Schild.|Nomen
命じる|命[めい]じる|befehlen, anordnen|急[きゅう]に 出張[しゅっちょう]を 命[めい]じられました。|Ich wurde plötzlich auf Dienstreise geschickt.|Verb
まぐろ|まぐろ|Thunfisch|まぐろの 刺身[さしみ]を 食[た]べました。|Ich habe Thunfisch-Sashimi gegessen.|Nomen
領土|領土[りょうど]|Territorium, Staatsgebiet|ここから 先[さき]は 隣[となり]の 国[くに]の 領土[りょうど]です。|Ab hier beginnt das Gebiet des Nachbarlandes.|Nomen
領事館|領事館[りょうじかん]|Konsulat|彼[かれ]はアメリカ 領事館[りょうじかん]に 出[で]かけたよ。|Er ist zum amerikanischen Konsulat gegangen.|Nomen
領収書|領収書[りょうしゅうしょ]|Quittung|領収書[りょうしゅうしょ]をください。|Eine Quittung, bitte.|Nomen
取り組む|取[と]り 組[く]む|sich auseinandersetzen mit, in Angriff nehmen|彼女[かのじょ]はスペイン 語[ご]に 取[と]り 組[く]んでいます。|Sie arbeitet an ihrem Spanisch.|Verb
任せる|任[まか]せる|überlassen, anvertrauen|この 仕事[しごと]は 君[きみ]に 任[まか]せる。|Diese Arbeit überlasse ich dir.|Verb
ろくに|ろくに|kaum, nicht richtig (mit Verneinung)|ゆうべはろくに 寝[ね]ていない。|Letzte Nacht habe ich kaum geschlafen.|Adverb
担任|担任[たんにん]|Klassenleitung, Klassenlehrer(in)|私[わたし]は3 年生[ねんせい]のクラスを 担任[たんにん]しています。|Ich bin Klassenlehrer einer dritten Klasse.|Nomen (mit する)
無責任|無責任[むせきにん]|Verantwortungslosigkeit|無責任[むせきにん]な 行動[こうどう]は 許[ゆる]されません。|Verantwortungsloses Handeln wird nicht geduldet.|な-Adjektiv
転勤|転勤[てんきん]|Versetzung (an einen anderen Ort)|彼[かれ]は 大阪[おおさか]に 転勤[てんきん]しました。|Er wurde nach Osaka versetzt.|Nomen (mit する)
勤め先|勤[つと]め 先[さき]|Arbeitsstelle, Arbeitgeber|私[わたし]の 勤[つと]め 先[さき]にご 連絡[れんらく]ください。|Melden Sie sich bitte an meiner Arbeitsstelle.|Nomen
勤め|勤[つと]め|Arbeit, Dienst|来月[らいげつ]で 勤[つと]めをやめます。|Nächsten Monat höre ich mit der Arbeit auf.|Nomen
務める|務[つと]める|ausüben, fungieren als|私[わたし]が 司会[しかい]を 務[つと]めます。|Ich übernehme die Moderation.|Verb
つまむ|つまむ|mit den Fingern greifen; naschen|お 菓子[かし]でもつまんでください。|Greifen Sie doch bei den Süßigkeiten zu.|Verb
任務|任務[にんむ]|Auftrag, Mission|彼[かれ]は 最後[さいご]まで 自分[じぶん]の 任務[にんむ]を 果[は]たした。|Er hat seinen Auftrag bis zum Ende erfüllt.|Nomen
務め|務[つと]め|Pflicht, Aufgabe|人々[ひとびと]を 守[まも]るのが 私[わたし]の 務[つと]めです。|Menschen zu schützen ist meine Pflicht.|Nomen
雇う|雇[やと]う|anstellen, beschäftigen|新[あたら]しい 社員[しゃいん]を 雇[やと]いました。|Wir haben einen neuen Mitarbeiter eingestellt.|Verb
募集|募集[ぼしゅう]|Anwerbung, Ausschreibung|私[わたし]の 会社[かいしゃ]で 社員[しゃいん]を 募集[ぼしゅう]しています。|Meine Firma sucht Mitarbeiter.|Nomen (mit する)
採る|採[と]る|sammeln, pflücken; einstellen|この 山[やま]ではきのこが 採[と]れますよ|Auf diesem Berg kann man Pilze sammeln.|Verb
ボーイ|ボーイ|Kellner, Page|ボーイに 荷物[にもつ]を 運[はこ]んでもらった。|Ich habe mir vom Pagen das Gepäck tragen lassen.|Nomen
就く|就[つ]く|antreten (Stelle), sich begeben an|今年[ことし]から 新[あたら]しい 仕事[しごと]に 就[つ]きます。|Ab diesem Jahr trete ich eine neue Stelle an.|Verb
退職|退職[たいしょく]|Ausscheiden aus dem Beruf, Kündigung|私[わたし]は 今月一杯[こんげつ いっぱい]で 退職[たいしょく]します。|Ich scheide Ende dieses Monats aus dem Dienst aus.|Nomen (mit する)
退学|退学[たいがく]|Schulabgang, Abbruch|弟[おとうと]は 高校[こうこう]を 退学[たいがく]しました。|Mein kleiner Bruder hat die Oberschule abgebrochen.|Nomen (mit する)
早退|早退[そうたい]|früher gehen (Schule, Arbeit)|具合[ぐあい]が 悪[わる]かったので 仕事[しごと]を 早退[そうたい]しました。|Mir ging es nicht gut, deshalb bin ich früher von der Arbeit gegangen.|Nomen (mit する)
理屈|理屈[りくつ]|Logik, Argument; Ausrede|彼[かれ]には 理屈[りくつ]が 通[つう]じない。|Mit Logik kommt man bei ihm nicht weiter.|Nomen
ホット|ホット|heiß (Getränk)|コーヒーをホットでください。|Den Kaffee bitte heiß.|Nomen
退屈|退屈[たいくつ]|langweilig|校長[こうちょう]の 退屈[たいくつ]な 話[はなし]が 続[つづ]いたんだよ。|Die langweilige Rede des Schulleiters ging immer weiter.|Nomen (mit する)
用件|用件[ようけん]|Anliegen, Angelegenheit|用件[ようけん]をメモしておきました。|Ich habe das Anliegen notiert.|Nomen
参る|参[まい]る|gehen, kommen (bescheiden)|さあ、 参[まい]りましょうか。|Nun, wollen wir gehen?|Verb
惨め|惨[みじ]め|elend, erbärmlich|彼[かれ]は 惨[みじ]めな 気持[きも]ちになったの。|Er fühlte sich elend.|Adjektiv
追加|追加[ついか]|Ergänzung, Zusatz|オーダーを 追加[ついか]しました。|Ich habe noch etwas nachbestellt.|Nomen (mit する)
まし|まし|besser (als nichts), vorzuziehen|これでもないよりましだ。|Auch das ist besser als nichts.|Adjektiv
比率|比率[ひりつ]|Verhältnis, Anteil|IT業界[あいてぃーぎょうかい]は 女性[じょせい]の 比率[ひりつ]が 低[ひく]い。|In der IT-Branche ist der Frauenanteil niedrig.|Nomen
対比|対比[たいひ]|Kontrast, Gegenüberstellung|この 絵[え]は 赤[あか]と 黒[くろ]の 対比[たいひ]が 美[うつく]しいですね。|Bei diesem Bild ist der Kontrast von Rot und Schwarz schön.|Nomen (mit する)
見比べる|見比[みくら]べる|vergleichend ansehen|彼女[かのじょ]は 二人[ふたり]の 顔[かお]を 見比[みくら]べたの。|Sie sah die Gesichter der beiden vergleichend an.|Verb
比較的|比較的[ひかくてき]|verhältnismäßig|今年[ことし]は 比較的[ひかくてき] 景気[けいき]がいい。|Dieses Jahr ist die Konjunktur verhältnismäßig gut.|Adverb
比較|比較[ひかく]|Vergleich|去年[きょねん]の 売[う]り 上[あ]げと 比較[ひかく]しましょう。|Vergleichen wir es mit dem Umsatz vom letzten Jahr.|Nomen (mit する)
判決|判決[はんけつ]|Gerichtsurteil|判決[はんけつ]が 下[くだ]された。|Das Urteil ist gefallen.|Nomen
ぱっと|ぱっと|plötzlich, mit einem Schlag|彼女[かのじょ]はぱっと 目[め]を 開[ひら]いた。|Sie öffnete schlagartig die Augen.|Adverb
判子|判子[はんこ]|Namensstempel|ここに 判子[はんこ]を 押[お]してください。|Stempeln Sie bitte hier.|Nomen
評判|評判[ひょうばん]|Ruf, Ansehen|評判[ひょうばん]の 良[い]いレストランに 行[い]きました。|Wir waren in einem Restaurant mit gutem Ruf.|Nomen
批評|批評[ひひょう]|Kritik, Rezension|その 映画[えいが]はよい 批評[ひひょう]を 得[え]ているんだ。|Der Film hat gute Kritiken bekommen.|Nomen (mit する)
反感|反感[はんかん]|Abneigung, Widerwille|俺[おれ]たちは 彼[かれ]の 言動[げんどう]に 反感[はんかん]を 持[も]ったね。|Sein Reden und Handeln hat uns gegen ihn aufgebracht.|Nomen
予想|予想[よそう]|Erwartung, Vorhersage|私[わたし]の 予想[よそう]が 当[あ]たった。|Meine Vorhersage ist eingetroffen.|Nomen (mit する)
つなぐ|つなぐ|verbinden, anschließen|インターネットは 世界[せかい]の 人々[ひとびと]をつなぎますね。|Das Internet verbindet die Menschen der Welt.|Verb
理想|理想[りそう]|Ideal|彼[かれ]は 高[たか]い 理想[りそう]を 持[も]っているの。|Er hat hohe Ideale.|Nomen
想像|想像[そうぞう]|Vorstellung, Fantasie|そんなことは 想像[そうぞう]できないよ。|So etwas kann ich mir nicht vorstellen.|Nomen (mit する)
象|象[ぞう]|Elefant|象[ぞう]に 乗[の]ってみたいです。|Ich möchte einmal auf einem Elefanten reiten.|Nomen
抽象的|抽象的[ちゅうしょうてき]|abstrakt|彼[かれ]は 抽象的[ちゅうしょうてき]な 絵[え]が 好[す]きだね。|Er mag abstrakte Bilder.|Adjektiv
保障|保障[ほしょう]|Gewährleistung, Sicherung|私[わたし]があなたの 安全[あんぜん]を 保障[ほしょう]します。|Ich garantiere für Ihre Sicherheit.|Nomen (mit する)
ひょっとしたら|ひょっとしたら|vielleicht, womöglich|ひょっとしたら 彼[かれ]はそのことを 知[し]らないのかもしれない。|Vielleicht weiß er das gar nicht.|Adverb
負傷|負傷[ふしょう]|Verletzung, Verwundung|その 事故[じこ]で 多[おお]くの 人[ひと]が 負傷[ふしょう]したの。|Bei dem Unfall wurden viele Menschen verletzt.|Nomen (mit する)
変換|変換[へんかん]|Umwandlung, Konvertierung|ひらがなをカタカナに 変換[へんかん]しました。|Ich habe Hiragana in Katakana umgewandelt.|Nomen (mit する)
取り替える|取[と]り 替[か]える|auswechseln, ersetzen|シーツを 取[と]り 替[か]えました。|Ich habe die Bettlaken gewechselt.|Verb
立て替える|立[た]て 替[か]える|auslegen, vorstrecken (Geld)|お 金[かね]がないなら 私[わたし]が 立[た]て 替[か]えておきます。|Wenn du kein Geld hast, lege ich es für dich aus.|Verb
天災|天災[てんさい]|Naturkatastrophe|天災[てんさい]を 防[ふせ]ぐことはできません。|Naturkatastrophen kann man nicht verhindern.|Nomen
有害|有害[ゆうがい]|schädlich|この 材料[ざいりょう]は 有害[ゆうがい]だよ。|Dieses Material ist schädlich.|な-Adjektiv
ひとりでに|ひとりでに|von selbst, von allein|ドアがひとりでに 閉[し]まったな。|Die Tür ist von allein zugegangen.|Adverb
無害|無害[むがい]|unschädlich, harmlos|この 農薬[のうやく]は 人[ひと]には 無害[むがい]です。|Dieses Pflanzenschutzmittel ist für Menschen unschädlich.|な-Adjektiv
被害|被害[ひがい]|Schaden|彼[かれ]の 家[いえ]は 台風[たいふう]の 被害[ひがい]にあったの。|Sein Haus wurde vom Taifun beschädigt.|Nomen
破る|破[やぶ]る|besiegen, schlagen|彼[かれ]は 強敵[きょうてき]を 見事[みごと]に 破[やぶ]ったね。|Er hat den starken Gegner glänzend besiegt.|Verb
破壊|破壊[はかい]|Zerstörung|自然[しぜん]の 破壊[はかい]が 進[すす]んでいるのよ。|Die Zerstörung der Natur schreitet voran.|Nomen (mit する)
助かる|助[たす]かる|gerettet werden; eine Hilfe sein|彼[かれ]はシートベルトをしていたので 助[たす]かったんだ。|Er hat überlebt, weil er angeschnallt war.|Verb
ひねる|ひねる|drehen, verdrehen|彼[かれ]は 水道[すいどう]の 蛇口[じゃぐち]をひねったの。|Er drehte den Wasserhahn auf.|Verb
派手|派手[はで]|auffällig, grell, spektakulär|雪道[ゆきみち]で 派手[はで]に 転[ころ]んでしまったの。|Ich bin auf der verschneiten Straße spektakulär hingefallen.|Adjektiv
派出所|派出所[はしゅつじょ]|Polizeiposten, Außenstelle|派出所[はしゅつじょ]にだれもいないな。|Im Polizeiposten ist niemand.|Nomen
派遣|派遣[はけん]|Entsendung|彼[かれ]はイギリスに 派遣[はけん]されました。|Er wurde nach England entsandt.|Nomen (mit する)
犯人|犯人[はんにん]|Täter(in)|あいつが 犯人[はんにん]です。|Der da ist der Täter.|Nomen
犯罪|犯罪[はんざい]|Verbrechen, Kriminalität|最近[さいきん] 犯罪[はんざい]が 減[へ]っています。|In letzter Zeit nimmt die Kriminalität ab.|Nomen
ひび|ひび|Riss, Sprung|窓[まど]ガラスにひびが 入[はい]ったよ。|Die Fensterscheibe hat einen Sprung bekommen.|Nomen
罪|罪[つみ]|Verbrechen, Schuld, Sünde|彼[かれ]の 罪[つみ]は 重[おも]いな。|Seine Schuld wiegt schwer.|Nomen
盗難|盗難[とうなん]|Diebstahl|昨夜[さくや]、 自転車[じてんしゃ]の 盗難[とうなん]にあったよ。|Gestern Nacht wurde mein Fahrrad gestohlen.|Nomen
捕まる|捕[つか]まる|gefasst werden, gefangen werden|彼女[かのじょ]はついに 捕[つか]まりました。|Sie wurde endlich gefasst.|Verb
捕まえる|捕[つか]まえる|fangen, festnehmen|少年[しょうねん]は 網[あみ]でその 蝶[ちょう]を 捕[つか]まえた。|Der Junge fing den Schmetterling mit einem Netz.|Verb
逃げ出す|逃[に]げ 出[だ]す|ausreißen, davonlaufen|トラがおりから 逃[に]げ 出[だ]しました。|Der Tiger ist aus dem Käfig ausgebrochen.|Verb
逃がす|逃[に]がす|entkommen lassen, freilassen|釣[つ]った 魚[さかな]を 逃[に]がしました。|Ich habe den geangelten Fisch wieder freigelassen.|Verb
やっつける|やっつける|fertigmachen, erledigen|主人公[しゅじんこう]が 悪者[わるもの]をやっつけた。|Der Held hat den Bösewicht erledigt.|Verb
逃げ道|逃[に]げ 道[みち]|Fluchtweg, Ausweg|失敗[しっぱい]した 時[とき]の 逃[に]げ 道[みち]を 考[かんが]えたの。|Ich habe mir einen Ausweg für den Fall des Scheiterns überlegt.|Nomen
戦う|戦[たたか]う|kämpfen|彼[かれ]は 最後[さいご]まで 戦[たたか]ったよ。|Er hat bis zum Schluss gekämpft.|Verb
挑戦|挑戦[ちょうせん]|Herausforderung, Versuch|彼[かれ]は 新[あたら]しいことに 挑戦[ちょうせん]している。|Er wagt sich an Neues.|Nomen (mit する)
敗戦|敗戦[はいせん]|verlorene Schlacht, Niederlage|敗戦[はいせん]の 原因[げんいん]は 何[なん]だろう。|Was war wohl die Ursache der Niederlage?|Nomen (mit する)
戦い|戦[たたか]い|Kampf, Schlacht|長[なが]い 戦[たたか]いが 終[お]わった。|Der lange Kampf ist zu Ende.|Nomen
レントゲン|レントゲン|Röntgenaufnahme|病院[びょういん]でレントゲンを 撮[と]ったよ。|Ich wurde im Krankenhaus geröntgt.|Nomen
大戦|大戦[たいせん]|Weltkrieg, großer Krieg|大戦[たいせん]で 多[おお]くの 人[ひと]が 亡[な]くなりました。|Im Weltkrieg sind viele Menschen gestorben.|Nomen
混ぜる|混[ま]ぜる|mischen, verrühren|カレーにヨーグルトを 入[い]れて、よく 混[ま]ぜてください。|Geben Sie Joghurt in das Curry und verrühren Sie es gut.|Verb
混ざる|混[ま]ざる|sich vermischen|水[みず]と 油[あぶら]は 混[ま]ざりません。|Wasser und Öl vermischen sich nicht.|Verb
混じる|混[ま]じる|sich mischen, beigemischt sein|電話[でんわ]の 声[こえ]に 雑音[ざつおん]が 混[ま]じっていたの。|In die Stimme am Telefon mischten sich Störgeräusche.|Verb
乱れる|乱[みだ]れる|in Unordnung geraten|風[かぜ]で 髪[かみ]が 乱[みだ]れたね。|Der Wind hat deine Haare zerzaust.|Verb
パンツ|パンツ|Hose; Unterhose|彼女[かのじょ]はスカートよりパンツが 似合[にあ]うね。|Hosen stehen ihr besser als Röcke.|Nomen
乱す|乱[みだ]す|durcheinanderbringen, stören|彼[かれ]は 風紀[ふうき]を 乱[みだ]している。|Er stört die öffentliche Ordnung.|Verb
統合|統合[とうごう]|Zusammenlegung, Integration|三[みっ]つの 町[まち]が 統合[とうごう]されて 新[あたら]しい 市[し]が 誕生[たんじょう]したのよ。|Drei Orte wurden zusammengelegt und eine neue Stadt entstand.|Nomen (mit する)
統一|統一[とういつ]|Vereinheitlichung, Einheit|文字[もじ]の 大[おお]きさは 統一[とういつ]してください。|Vereinheitlichen Sie bitte die Schriftgröße.|Nomen (mit する)
統計|統計[とうけい]|Statistik|これは 昨年[さくねん]の 売[う]り 上[あ]げの 統計[とうけい]です。|Das ist die Umsatzstatistik des letzten Jahres.|Nomen (mit する)
総会|総会[そうかい]|Hauptversammlung|来月[らいげつ]の 総会[そうかい]は 東京[とうきょう]で 行[おこな]われます。|Die Hauptversammlung im nächsten Monat findet in Tokio statt.|Nomen
むける|むける|sich schälen, sich lösen (Haut)|日焼[ひや]けで 皮[かわ]がむけた。|Durch den Sonnenbrand hat sich meine Haut geschält.|Verb
総合|総合[そうごう]|Zusammenfassung, umfassend|全員[ぜんいん]の 意見[いけん]を 総合[そうごう]してみましょう。|Fassen wir die Meinungen aller zusammen.|Nomen (mit する)
総理|総理[そうり]|Premierminister(in)|総理[そうり]はヨーロッパを 訪問中[ほうもんちゅう]です。|Der Premierminister ist auf Europabesuch.|Nomen
総数|総数[そうすう]|Gesamtzahl|参加者[さんかしゃ]の 総数[そうすう]は705 人[にん]でした。|Die Gesamtzahl der Teilnehmer betrug 705.|Nomen
捜査|捜査[そうさ]|polizeiliche Ermittlung|その 殺人事件[さつじん じけん]の 捜査[そうさ]は2 年間続[ねんかん つづ]きました。|Die Ermittlungen in dem Mordfall dauerten zwei Jahre.|Nomen (mit する)
湖|湖[みずうみ]|See|湖[みずうみ]でスケートをした。|Wir sind auf dem See Schlittschuh gelaufen.|Nomen
深める|深[ふか]める|vertiefen|彼女[かのじょ]は 異文化[いぶんか]に 対[たい]する 理解[りかい]を 深[ふか]めたね。|Sie hat ihr Verständnis für fremde Kulturen vertieft.|Verb
ぶつぶつ|ぶつぶつ|murmelnd, murrend|彼[かれ]はぶつぶつと 独[ひと]り 言[ごと]を 言[い]ったんだ。|Er murmelte vor sich hin.|Adverb
深まる|深[ふか]まる|sich vertiefen|二人[ふたり]の 愛[あい]はますます 深[ふか]まっているね。|Die Liebe der beiden wird immer tiefer.|Verb
注意深い|注意深[ちゅういぶか]い|aufmerksam, umsichtig|彼[かれ]は 注意深[ちゅういぶか]い 人[ひと]です。|Er ist ein umsichtiger Mensch.|Adjektiv
段落|段落[だんらく]|Absatz (im Text)|次[つぎ]の 段落[だんらく]を 読[よ]んでください。|Lesen Sie bitte den nächsten Absatz.|Nomen
見落とす|見落[みお]とす|übersehen|間違[まちが]いを 見落[みお]としたの。|Ich habe einen Fehler übersehen.|Verb
落第|落第[らくだい]|Durchfallen, Sitzenbleiben|このテストに 失敗[しっぱい]したら 落第[らくだい]です。|Wer diesen Test nicht besteht, fällt durch.|Nomen (mit する)
ぶるぶる|ぶるぶる|zitternd, bibbernd|彼[かれ]はぶるぶる 震[ふる]えていたよ。|Er zitterte am ganzen Leib.|Adverb
波|波[なみ]|Welle|今日[きょう]の 海[うみ]は 波[なみ]が 穏[おだ]やかです。|Heute ist das Meer ruhig.|Nomen
流れ|流[なが]れ|Strömung, Fluss, Verlauf|川[かわ]の 上流[じょうりゅう]は 流[なが]れが 速[はや]いよ。|Am Oberlauf des Flusses ist die Strömung schnell.|Nomen
流通|流通[りゅうつう]|Umlauf, Vertrieb, Distribution|今日[きょう]は 流通[りゅうつう]の 仕組[しく]みを 勉強[べんきょう]しましょう。|Heute lernen wir, wie der Warenvertrieb funktioniert.|Nomen (mit する)
流す|流[なが]す|fließen lassen, wegspülen; vergießen|彼女[かのじょ]は 涙[なみだ]を 流[なが]したんだ。|Sie hat Tränen vergossen.|Verb
中流|中流[ちゅうりゅう]|Mittellauf; Mittelschicht|川[かわ]の 中流[ちゅうりゅう]あたりにその 村[むら]はあるよ。|Das Dorf liegt etwa am Mittellauf des Flusses.|Nomen
ボリューム|ボリューム|Lautstärke; Menge|ラジオのボリュームを 上[あ]げてください。|Stellen Sie das Radio bitte lauter.|Nomen
二流|二流[にりゅう]|zweitklassig|彼[かれ]はまだまだ 二流[にりゅう]の 芸人[げいにん]だね。|Er ist noch ein zweitklassiger Unterhaltungskünstler.|Nomen
流行|流行[はやり]|Mode, Trend|この 服[ふく]は 今[いま]の 流行[はやり]です。|Diese Kleidung ist gerade in Mode.|Nomen
流行|流行[りゅうこう]|Mode, Trend|このスタイルは 今年[ことし]の 流行[りゅうこう]です。|Dieser Stil ist der Trend dieses Jahres.|Nomen (mit する)
洗面|洗面[せんめん]|Gesichtwaschen|洗面[せんめん] 用具[ようぐ]を 忘[わす]れた。|Ich habe mein Waschzeug vergessen.|Nomen
手洗い|手洗[てあら]い|Händewaschen; Toilette|風邪[かぜ]をひかないように 手洗[てあら]いとうがいをしましょう。|Waschen wir uns die Hände und gurgeln, um uns nicht zu erkälten.|Nomen
洗面器|洗面器[せんめんき]|Waschschüssel|洗面器[せんめんき]でハンカチを 洗[あら]ったの。|Ich habe das Taschentuch in der Waschschüssel gewaschen.|Nomen
ちり|ちり|Staub|ちりも 積[つ]もれば 山[やま]となる。|Kleinvieh macht auch Mist.|Nomen
沈没|沈没[ちんぼつ]|Untergang (eines Schiffes)|船[ふね]は 沈没[ちんぼつ]しました。|Das Schiff ist gesunken.|Nomen (mit する)
冷え込む|冷[ひ]え 込[こ]む|stark abkühlen|明日[あす]から 急[きゅう]に 冷[ひ]え 込[こ]むそうです。|Ab morgen soll es plötzlich sehr kalt werden.|Verb
冷やかす|冷[ひ]やかす|aufziehen, necken|友達[ともだち]はそのカップルを 冷[ひ]やかしたんだ。|Die Freunde haben das Pärchen aufgezogen.|Verb
冷凍|冷凍[れいとう]|Einfrieren, Tiefkühlen|残[のこ]ったカレーを 冷凍[れいとう]しました。|Ich habe das übrige Curry eingefroren.|Nomen (mit する)
内臓|内臓[ないぞう]|innere Organe|来週[らいしゅう]、 内臓[ないぞう]を 検査[けんさ]します。|Nächste Woche lasse ich meine inneren Organe untersuchen.|Nomen
はげる|はげる|abblättern; kahl werden|壁[かべ]のペンキがはげてきたな。|Die Farbe an der Wand blättert ab.|Verb
適用|適用[てきよう]|Anwendung (einer Regel)|この 場合[ばあい]、 保険[ほけん]が 適用[てきよう]されますか。|Greift in diesem Fall die Versicherung?|Nomen (mit する)
適切|適切[てきせつ]|passend, angemessen|彼[かれ]は 適切[てきせつ]な 言葉[ことば]で 説明[せつめい]してくれました。|Er hat es mit treffenden Worten erklärt.|Adjektiv
適応|適応[てきおう]|Anpassung|彼[かれ]はどんな 環境[かんきょう]にも 適応[てきおう]できます。|Er kann sich an jede Umgebung anpassen.|Nomen (mit する)
適する|適[てき]する|geeignet sein, passen|彼[かれ]はこの 仕事[しごと]に 適[てき]しています。|Er ist für diese Arbeit geeignet.|Verb
適当|適当[てきとう]|passend, geeignet; nach Gutdünken|その 質問[しつもん]の 適当[てきとう]な 答[こた]えが 見[み]つかりません。|Ich finde keine passende Antwort auf diese Frage.|な-Adjektiv
パパ|パパ|Papa|私[わたし]のパパは36 歳[さい]です。|Mein Papa ist 36 Jahre alt.|Nomen
適度|適度[てきど]|maßvoll, angemessen|健康[けんこう]のため、 適度[てきど]な 運動[うんどう]が 必要[ひつよう]です。|Für die Gesundheit ist maßvolle Bewegung nötig.|な-Adjektiv
染める|染[そ]める|färben|髪[かみ]を 赤[あか]に 染[そ]めてみた。|Ich habe mir versuchsweise die Haare rot gefärbt.|Verb
廃止|廃止[はいし]|Abschaffung|その 制度[せいど]は 廃止[はいし]されました。|Diese Regelung wurde abgeschafft.|Nomen (mit する)
風景|風景[ふうけい]|Landschaft, Szenerie|私[わたし]は 山[やま]の 風景[ふうけい]が 好[す]きです。|Ich mag Berglandschaften.|Nomen
不景気|不景気[ふけいき]|Konjunkturflaute, Rezession|今[いま]、あの 国[くに]は 不景気[ふけいき]らしいよ。|Das Land soll gerade in einer Rezession stecken.|な-Adjektiv
響く|響[ひび]く|hallen, klingen; nachwirken|彼[かれ]の 声[こえ]はよく 響[ひび]きます。|Seine Stimme trägt gut.|Verb
つかむ|つかむ|greifen, packen|彼女[かのじょ]が 僕[ぼく]の 手[て]をつかみました。|Sie hat meine Hand gepackt.|Verb
日光|日光[にっこう]|Sonnenlicht|この 部屋[へや]は 日光[にっこう]がよく 当[あ]たるね。|In dieses Zimmer fällt viel Sonnenlicht.|Nomen
光|光[ひかり]|Licht|一筋[ひとすじ]の 光[ひかり]が 窓[まど]から 差[さ]し 込[こ]んだの。|Ein Lichtstrahl fiel durchs Fenster.|Nomen
測定|測定[そくてい]|Messung|これから 身長[しんちょう]と 体重[たいじゅう]を 測定[そくてい]します。|Jetzt werden Größe und Gewicht gemessen.|Nomen (mit する)
測る|測[はか]る|messen (Länge, Höhe)|このドアの 高[たか]さを 測[はか]ってください。|Messen Sie bitte die Höhe dieser Tür.|Verb
陽気|陽気[ようき]|heiter, fröhlich; Witterung|彼女[かのじょ]はとても 陽気[ようき]です。|Sie ist sehr fröhlich.|な-Adjektiv
もったいない|もったいない|verschwenderisch, zu schade|食[た]べ 物[もの]を 残[のこ]してはもったいないわよ。|Essen übrig zu lassen ist Verschwendung.|Adjektiv
プロ野球|プロ 野球[やきゅう]|Profibaseball|最近[さいきん]のプロ 野球[やきゅう]は 面白[おもしろ]くなってきたね。|Der Profibaseball ist in letzter Zeit spannender geworden.|Nomen
電球|電球[でんきゅう]|Glühbirne|電球[でんきゅう]が 切[き]れたので 交換[こうかん]しましょう。|Die Glühbirne ist durchgebrannt, wechseln wir sie aus.|Nomen
振り返る|振[ふ]り 返[かえ]る|zurückblicken, sich umdrehen|学生時代[がくせい じだい]を 懐[なつ]かしく 振[ふ]り 返[かえ]ったんだ。|Ich habe voller Wehmut auf meine Schulzeit zurückgeblickt.|Verb
振り向く|振[ふ]り 向[む]く|sich umdrehen|彼女[かのじょ]は 振[ふ]り 向[む]いて 俺[おれ]に 微笑[ほほえ]んだんだ。|Sie drehte sich um und lächelte mich an.|Verb
振り|振[ふ]り|Schwung, Schwingen|彼[かれ]はバットの 振[ふ]りが 大[おお]きすぎる。|Er holt mit dem Schläger zu weit aus.|Nomen
ふざける|ふざける|herumalbern, Unsinn machen|ふざけるのは 止[や]めて。|Hör auf herumzualbern.|Verb
秘書|秘書[ひしょ]|Sekretär(in)|私[わたし]の 秘書[ひしょ]はとても 優秀[ゆうしゅう]です。|Meine Sekretärin ist sehr tüchtig.|Nomen
密か|密[ひそ]か|heimlich|彼女[かのじょ]の 誕生日[たんじょうび]パーティーを 密[ひそ]かに 計画[けいかく]しています。|Wir planen heimlich eine Geburtstagsparty für sie.|Adjektiv
貴い|貴[とうと]い|kostbar, wertvoll|その 事故[じこ]で 貴[とうと]い 命[いのち]が 失[うしな]われました。|Bei dem Unfall gingen kostbare Menschenleben verloren.|Adjektiv
追跡|追跡[ついせき]|Verfolgung|パトカーが 車[くるま]を 追跡[ついせき]しているわ。|Ein Streifenwagen verfolgt ein Auto.|Nomen (mit する)
寄せる|寄[よ]せる|heranrücken, nähern; sammeln|車[くるま]を 塀[へい]に 寄[よ]せたよ。|Ich habe das Auto an die Mauer herangefahren.|Verb
だるい|だるい|schlapp, matt|昨日[きのう]は 風邪[かぜ]で 少[すこ]しだるかったんだ。|Gestern war ich wegen der Erkältung etwas schlapp.|Adjektiv
寄る|寄[よ]る|vorbeischauen; sich nähern|帰[かえ]りに 叔母[おば]の 家[いえ]に 寄[よ]ります。|Auf dem Heimweg schaue ich bei meiner Tante vorbei.|Verb
近寄る|近寄[ちかよ]る|sich nähern, herantreten|彼[かれ]に 近寄[ちかよ]らないで。|Komm ihm nicht zu nahe!|Verb
寄り道|寄[よ]り 道[みち]|Abstecher|今日[きょう]は 寄[よ]り 道[みち]してから 帰[かえ]ります。|Heute mache ich auf dem Heimweg noch einen Abstecher.|Nomen (mit する)
寄り集まる|寄[よ]り 集[あつ]まる|zusammenkommen, sich versammeln|ニューヨークには 芸術家[げいじゅつか]が 寄[よ]り 集[あつ]まっているの。|In New York kommen Künstler zusammen.|Verb
歴史的|歴史的[れきしてき]|historisch|今日[きょう]は 歴史的[れきしてき]な 日[ひ]です。|Heute ist ein historischer Tag.|Adjektiv
宝石|宝石[ほうせき]|Edelstein, Juwel|私[わたし]が 一番好[いちばん す]きな 宝石[ほうせき]はダイヤモンドなの。|Mein liebster Edelstein ist der Diamant.|Nomen
ちぎる|ちぎる|zerreißen, abreißen|紙[かみ]を 細[こま]かくちぎってください。|Reißen Sie das Papier bitte in kleine Stücke.|Verb
建て前|建[た]て 前[まえ]|offizielle Haltung, Fassade|本音[ほんね]と 建[た]て 前[まえ]は 違[ちが]うことが 多[おお]いよ。|Die wahre Meinung und das nach außen Gesagte sind oft verschieden.|Nomen
単位|単位[たんい]|Einheit (Maß); Leistungspunkt|メートルは 長[なが]さの 単位[たんい]です。|Der Meter ist eine Längeneinheit.|Nomen
地位|地位[ちい]|Stellung, Rang|彼女[かのじょ]は 会社[かいしゃ]で 高[たか]い 地位[ちい]に 就[つ]いているよ。|Sie hat in der Firma eine hohe Stellung.|Nomen
分離|分離[ぶんり]|Trennung, Abspaltung|自民党[じみんとう]から 新[あたら]しい 党[とう]が 分離[ぶんり]したね。|Von der LDP hat sich eine neue Partei abgespalten.|Nomen (mit する)
離れる|離[はな]れる|sich entfernen, weggehen|実家[じっか]を4 年間[ねんかん] 離[はな]れていました。|Ich war vier Jahre von meinem Elternhaus weg.|Verb
ねぎ|ねぎ|Lauchzwiebel|みそ 汁[しる]にねぎを 入[い]れました。|Ich habe Lauchzwiebeln in die Misosuppe gegeben.|Nomen
離す|離[はな]す|trennen, loslassen|子供[こども]の 手[て]を 離[はな]さないでください。|Lassen Sie die Hand Ihres Kindes bitte nicht los.|Verb
停電|停電[ていでん]|Stromausfall|台風[たいふう]で 停電[ていでん]したよ。|Wegen des Taifuns fiel der Strom aus.|Nomen (mit する)
停止|停止[ていし]|Stillstand, Einstellung|突然[とつぜん]、 機械[きかい]が 停止[ていし]してしまったの。|Die Maschine ist plötzlich stehen geblieben.|Nomen (mit する)
範囲|範囲[はんい]|Bereich, Umfang|知[し]っている 範囲[はんい]で 教[おし]えてください。|Sagen Sie mir bitte, was Sie wissen.|Nomen
隣り合う|隣[とな]り 合[あ]う|nebeneinanderliegen|この 町[まち]は 山[やま]と 海[うみ]が 隣[とな]り 合[あ]っています。|In dieser Stadt liegen Berge und Meer nebeneinander.|Verb
びしょびしょ|びしょびしょ|klatschnass|服[ふく]が 雨[あめ]でびしょびしょになったよ。|Meine Kleidung ist vom Regen klatschnass geworden.|な-Adjektiv
横切る|横切[よこぎ]る|überqueren, quer hindurchgehen|目[め]の 前[まえ]を 猫[ねこ]が 横切[よこぎ]ったんだ。|Direkt vor mir lief eine Katze über den Weg.|Verb
横顔|横顔[よこがお]|Profil, Seitenansicht des Gesichts|彼女[かのじょ]の 横顔[よこがお]は 素敵[すてき]だ。|Ihr Profil ist bezaubernd.|Nomen
中断|中断[ちゅうだん]|Unterbrechung|停電[ていでん]のため 仕事[しごと]を 中断[ちゅうだん]しました。|Wegen des Stromausfalls haben wir die Arbeit unterbrochen.|Nomen (mit する)
断水|断水[だんすい]|Unterbrechung der Wasserversorgung|地震[じしん]のために1 週間[しゅうかん]、 断水[だんすい]したの。|Wegen des Erdbebens gab es eine Woche lang kein Wasser.|Nomen (mit する)
油断|油断[ゆだん]|Unachtsamkeit, Nachlässigkeit|少[すこ]しの 油断[ゆだん]が 大[おお]きな 事故[じこ]につながります。|Eine kleine Unachtsamkeit führt zu einem schweren Unfall.|Nomen (mit する)
断定|断定[だんてい]|eindeutige Feststellung|まだ 原因[げんいん]は 断定[だんてい]できません。|Die Ursache lässt sich noch nicht eindeutig feststellen.|Nomen (mit する)
バーゲン|バーゲン|Sonderverkauf, Schlussverkauf|昨日[きのう]バーゲンでスーツを 買[か]いました。|Gestern habe ich im Schlussverkauf einen Anzug gekauft.|Nomen
継ぐ|継[つ]ぐ|übernehmen, erben, fortführen|彼[かれ]は 父親[ちちおや]の 店[みせ]を 継[つ]いだの。|Er hat den Laden seines Vaters übernommen.|Verb
中継|中継[ちゅうけい]|Übertragung, Liveschaltung|京都[きょうと]から 中継[ちゅうけい]で 放送[ほうそう]しています。|Wir senden live aus Kyoto.|Nomen (mit する)
幅広い|幅広[はばひろ]い|breit, umfassend|彼[かれ]は 幅広[はばひろ]い 知識[ちしき]を 持[も]っています。|Er hat ein breites Wissen.|Adjektiv
幅|幅[はば]|Breite|この 道[みち]は 幅[はば]が 狭[せま]いので 気[き]をつけて 運転[うんてん]してください。|Diese Straße ist schmal, fahren Sie bitte vorsichtig.|Nomen
大陸|大陸[たいりく]|Kontinent, Festland|ユーラシアは 世界[せかい]で 最[もっと]も 大[おお]きい 大陸[たいりく]です。|Eurasien ist der größte Kontinent der Welt.|Nomen
メーター|メーター|Zähler, Messgerät; Meter|ガス 会社[がいしゃ]がメーターを 調[しら]べにきたぞ。|Das Gaswerk ist gekommen, um den Zähler abzulesen.|Nomen
着陸|着陸[ちゃくりく]|Landung|飛行機[ひこうき]が 無事[ぶじ] 着陸[ちゃくりく]したわね。|Das Flugzeug ist sicher gelandet.|Nomen (mit する)
離陸|離陸[りりく]|Start, Abheben|まもなく 飛行機[ひこうき]が 離陸[りりく]します。|Das Flugzeug hebt in Kürze ab.|Nomen (mit する)
内陸|内陸[ないりく]|Binnenland|彼[かれ]は 中国[ちゅうごく]の 内陸[ないりく]を 旅行[りょこう]しました。|Er hat das Landesinnere Chinas bereist.|Nomen
陸上|陸上[りくじょう]|an Land, Festland; Leichtathletik|あの 動物[どうぶつ]は 陸上[りくじょう]で 生活[せいかつ]しています。|Dieses Tier lebt an Land.|Nomen
陸|陸[りく]|Land, Festland|ウミガメが 陸[りく]に 上[あ]がってきたんだ。|Die Meeresschildkröte ist an Land gekommen.|Nomen
もしかすると|もしかすると|möglicherweise, vielleicht|もしかするとあなたに 一度[いちど]お 会[あ]いしてますか。|Kann es sein, dass wir uns schon einmal begegnet sind?|Adverb
南極|南極[なんきょく]|Südpol|南極[なんきょく]でペンギンを 見[み]ました。|Am Südpol habe ich Pinguine gesehen.|Nomen
北極|北極[ほっきょく]|Nordpol|北極[ほっきょく]にペンギンはいません。|Am Nordpol gibt es keine Pinguine.|Nomen
先端|先端[せんたん]|Spitze, vorderes Ende|棒[ぼう]の 先端[せんたん]を 持[も]って 下[くだ]さい。|Halten Sie bitte das Ende des Stabs.|Nomen
端|端[はし]|Rand, Ende, Kante|辞書[じしょ]は 本棚[ほんだな]の 端[はし]にあります。|Das Wörterbuch steht am Rand des Bücherregals.|Nomen
訪問|訪問[ほうもん]|Besuch|来週[らいしゅう]、 妻[つま]の 実家[じっか]を 訪問[ほうもん]します。|Nächste Woche besuchen wir das Elternhaus meiner Frau.|Nomen (mit する)
女房|女房[にょうぼう]|(meine) Frau (umgangssprachlich)|女房[にょうぼう]は 実家[じっか]に 帰[かえ]っています。|Meine Frau ist bei ihren Eltern.|Nomen
ちぎれる|ちぎれる|abreißen, zerreißen|荷物[にもつ]が 重[おも]くて 手[て]がちぎれそうだ。|Das Gepäck ist so schwer, dass mir fast die Hand abreißt.|Verb
内緒|内緒[ないしょ]|Geheimnis, im Vertrauen|この 話[はなし]は 課長[かちょう]には 内緒[ないしょ]ですよ。|Das bleibt vor dem Sektionsleiter geheim, ja?|Nomen
百貨店|百貨店[ひゃっかてん]|Kaufhaus|友達[ともだち]と 百貨店[ひゃっかてん]で 買[か]い 物[もの]をしました。|Ich war mit einer Freundin im Kaufhaus einkaufen.|Nomen
輸送|輸送[ゆそう]|Transport, Beförderung|この 商品[しょうひん]はトラックで 輸送[ゆそう]します。|Diese Ware wird mit dem Lastwagen transportiert.|Nomen (mit する)
復活|復活[ふっかつ]|Wiederbelebung, Comeback|その 選手[せんしゅ]は 怪我[けが]を 乗[の]り 越[こ]えて 復活[ふっかつ]したわね。|Der Spieler hat seine Verletzung überwunden und ist wieder da.|Nomen (mit する)
操作|操作[そうさ]|Bedienung, Handhabung|この 携帯電話[けいたい でんわ]は 操作[そうさ]が 簡単[かんたん]です。|Dieses Handy ist einfach zu bedienen.|Nomen (mit する)
にっこり|にっこり|lächelnd, strahlend|彼女[かのじょ]はにっこりほほえんだ。|Sie lächelte freundlich.|Adverb
体操|体操[たいそう]|Gymnastik, Turnen|兄[あに]は 体操[たいそう]の 選手[せんしゅ]です。|Mein großer Bruder ist Turner.|Nomen
縦|縦[たて]|Länge, senkrecht, längs|縦[たて] 2 列[れつ]に 並[なら]んでください。|Stellen Sie sich bitte in zwei Reihen hintereinander auf.|Nomen
操縦|操縦[そうじゅう]|Steuern, Lenken|このボートは 操縦[そうじゅう]が 簡単[かんたん]です。|Dieses Boot ist leicht zu steuern.|Nomen (mit する)
縦書き|縦書[たてが]き|senkrechte Schreibweise|作文[さくぶん]は 縦書[たてが]きで 書[か]いてください。|Schreiben Sie den Aufsatz bitte senkrecht.|Nomen
滞在|滞在[たいざい]|Aufenthalt|日本[にっぽん]では 北海道[ほっかいどう]に 滞在[たいざい]しました。|In Japan habe ich mich auf Hokkaidō aufgehalten.|Nomen (mit する)
ぱいなっぷる|ぱいなっぷる|Ananas|このパイナップルを 切[き]ってください。|Schneiden Sie bitte diese Ananas auf.|Nomen
地帯|地帯[ちたい]|Zone, Gebiet|この 都市[とし]は 工業[こうぎょう] 地帯[ちたい]です。|Diese Stadt ist ein Industriegebiet.|Nomen
熱帯|熱帯[ねったい]|Tropen|店[みせ]に 熱帯[ねったい]の 果物[くだもの]が 並[なら]んでいますよ。|Im Laden liegen tropische Früchte aus.|Nomen
保守|保守[ほしゅ]|Bewahrung, Wartung; konservativ|あの 村[むら]は 伝統[でんとう]を 保守[ほしゅ]している。|Das Dorf dort bewahrt seine Traditionen.|Nomen (mit する)
見守る|見守[みまも]る|wachen über, aufmerksam beobachten|皆[みんな]で 暖[あたた]かく 見守[みまも]りましょう。|Begleiten wir sie alle wohlwollend.|Verb
留守番|留守番[るすばん]|Haushüten|私[わたし]は 留守番[るすばん]の 者[もの]です。|Ich hüte gerade das Haus.|Nomen
ぱんだ|ぱんだ|Panda|パンダは 笹[ささ]を 食[た]べます。|Pandas fressen Bambus.|Nomen
戻す|戻[もど]す|zurückbringen, zurückstellen|話[はなし]を 戻[もど]しましょう。|Kommen wir zum Thema zurück.|Verb
取り戻す|取[と]り 戻[もど]す|zurückgewinnen|緑[みどり]を 取[と]り 戻[もど]す 必要[ひつよう]があります。|Wir müssen das Grün zurückgewinnen.|Verb
払い戻す|払[はら]い 戻[もど]す|zurückerstatten|飛行機[ひこうき]の 運賃[うんちん]が 払[はら]い 戻[もど]されたの。|Der Flugpreis wurde mir erstattet.|Verb
寝かす|寝[ね]かす|schlafen legen|いつも9 時[じ]に 子供[こども]を 寝[ね]かします。|Ich bringe das Kind immer um neun Uhr ins Bett.|Verb
寝過ごす|寝過[ねす]ごす|verschlafen|うっかり 寝過[ねす]ごしてしまったんだ。|Ich habe aus Versehen verschlafen.|Verb
早寝|早寝[はやね]|frühes Zubettgehen|早寝[はやね]は 健康[けんこう]のためによいことです。|Früh schlafen zu gehen ist gut für die Gesundheit.|Nomen (mit する)
びっしょり|びっしょり|durchnässt, triefend|運動[うんどう]して 汗[あせ]びっしょりです。|Vom Sport bin ich schweißgebadet.|Adverb
寝かせる|寝[ね]かせる|schlafen legen, hinlegen|赤[あか]ちゃんをベッドに 寝[ね]かせた。|Ich habe das Baby ins Bett gelegt.|Verb
寝転ぶ|寝転[ねころ]ぶ|sich hinlegen, sich ausstrecken|土手[どて]に 寝転[ねころ]んで 空[そら]をながめました。|Ich habe mich auf den Deich gelegt und in den Himmel geschaut.|Verb
冷静|冷静[れいせい]|ruhig, besonnen|冷静[れいせい]に 話[はな]し 合[あ]いましょう。|Lassen Sie uns in Ruhe darüber reden.|な-Adjektiv
両者|両者[りょうしゃ]|beide Seiten, beide Parteien|両者[りょうしゃ]の 意見[いけん]を 聞[き]きましょう。|Hören wir uns die Meinungen beider Seiten an.|Nomen
両立|両立[りょうりつ]|Vereinbarkeit, beides zugleich schaffen|勉強[べんきょう]と 仕事[しごと]の 両立[りょうりつ]は 難[むずか]しいよ。|Lernen und Arbeit unter einen Hut zu bringen ist schwer.|Nomen (mit する)
ペンチ|ペンチ|Zange|ペンチで 針金[はりがね]を 切[き]ります。|Ich schneide den Draht mit der Zange durch.|Nomen
両手|両手[りょうて]|beide Hände|彼[かれ]は 両手[りょうて]を 握[にぎ]り 締[し]めたの。|Er ballte beide Hände zu Fäusten.|Nomen
両面|両面[りょうめん]|beide Seiten (einer Fläche)|紙[かみ]の 両面[りょうめん]に 字[じ]が 書[か]かれていたよ。|Das Papier war auf beiden Seiten beschrieben.|Nomen
側面|側面[そくめん]|Seitenfläche, Seite|これが 建物[たてもの]の 側面[そくめん]の 写真[しゃしん]です。|Das ist ein Foto von der Seite des Gebäudes.|Nomen
両側|両側[りょうがわ]|beide Seiten (links und rechts)|道[みち]の 両側[りょうがわ]にたくさんお 店[みせ]がありますよ。|Auf beiden Seiten der Straße gibt es viele Läden.|Nomen
要項|要項[ようこう]|wichtige Punkte, Richtlinien|募集[ぼしゅう] 要項[ようこう]をよくお 読[よ]みください。|Lesen Sie bitte die Ausschreibungsbedingungen genau.|Nomen
モダン|モダン|modern|あの 建物[たてもの]はモダンだね。|Das Gebäude dort ist modern.|な-Adjektiv
目印|目印[めじるし]|Erkennungszeichen, Orientierungspunkt|私[わたし]の 家[いえ]は 赤[あか]い 屋根[やね]が 目印[めじるし]です。|Mein Haus erkennt man am roten Dach.|Nomen
細長い|細長[ほそなが]い|lang und schmal|その 細長[ほそなが]い 棒[ぼう]を 取[と]ってください。|Reich mir bitte den langen, dünnen Stab dort.|Adjektiv
載る|載[の]る|abgedruckt werden, stehen (in)|先生[せんせい]の 論文[ろんぶん]が 雑誌[ざっし]に 載[の]りましたよ。|Der Aufsatz meines Professors ist in der Zeitschrift erschienen.|Verb
積む|積[つ]む|aufladen, stapeln, anhäufen|車[くるま]に 荷物[にもつ]を 積[つ]んでください。|Laden Sie bitte das Gepäck ins Auto.|Verb
面積|面積[めんせき]|Fläche|この 土地[とち]の 面積[めんせき]はどれ 位[くらい]ですか。|Wie groß ist die Fläche dieses Grundstücks?|Nomen
翻訳|翻訳[ほんやく]|Übersetzung|彼[かれ]の 翻訳[ほんやく]は 分[わ]かりやすいですよ。|Seine Übersetzung ist gut verständlich.|Nomen (mit する)
リクエスト|リクエスト|Wunsch, Anfrage|ラジオ 番組[ばんぐみ]にリクエストを 送[おく]ったの。|Ich habe der Radiosendung einen Musikwunsch geschickt.|Nomen (mit する)
通訳|通訳[つうやく]|Dolmetschen, Dolmetscher(in)|私[わたし]は 通訳[つうやく]です。|Ich bin Dolmetscher.|Nomen (mit する)
申し訳ない|申[もう]し 訳[わけ]ない|unverzeihlich; es tut mir leid|彼[かれ]には 申[もう]し 訳[わけ]ないことをした。|Ich habe ihm Unrecht getan.|Adjektiv
訳|訳[わけ]|Grund, Umstand|そんな 訳[わけ]で、 私[わたし]は 仕事[しごと]を 辞[や]めました。|Aus diesem Grund habe ich gekündigt.|Nomen
申し訳|申[もう]し 訳[わけ]|Entschuldigung, Rechtfertigung|申[もう]し 訳[わけ]ございません。|Ich bitte vielmals um Entschuldigung.|Nomen
訂正|訂正[ていせい]|Korrektur, Berichtigung|間違[まちが]いを 訂正[ていせい]しました。|Ich habe den Fehler berichtigt.|Nomen (mit する)
ビーチ|ビーチ|Strand|ビーチで 友達[ともだち]とサーフィンしたよ。|Ich war mit Freunden am Strand surfen.|Nomen
討論|討論[とうろん]|Debatte, Diskussion|その 問題[もんだい]についてクラスで 討論[とうろん]しました。|Wir haben in der Klasse über dieses Problem diskutiert.|Nomen (mit する)
添える|添[そ]える|beifügen, dazulegen|贈[おく]り 物[もの]に 手書[てが]きのカードを 添[そ]えました。|Ich habe dem Geschenk eine handgeschriebene Karte beigelegt.|Verb
添う|添[そ]う|begleiten; entsprechen|あなたの 期待[きたい]に 添[そ]えなくてすみません。|Es tut mir leid, dass ich Ihre Erwartungen nicht erfüllen konnte.|Verb
付近|付近[ふきん]|Umgebung, Nähe|事件現場[じけん げんば] 付近[ふきん]で 怪[あや]しい 人物[じんぶつ]を 見[み]た。|In der Nähe des Tatorts wurde eine verdächtige Person gesehen.|Nomen
付き合い|付[つ]き 合[あ]い|Umgang, Bekanntschaft; Mitmachen aus Höflichkeit|今日[きょう]は 付[つ]き 合[あ]いで 帰[かえ]りが 遅[おそ]くなります。|Heute komme ich wegen geselliger Verpflichtungen später nach Hause.|Nomen
ビタミン|ビタミン|Vitamin|ビタミンを 毎日[まいにち]とりましょう。|Nehmen wir täglich Vitamine zu uns.|Nomen
付け加える|付[つ]け 加[くわ]える|hinzufügen|自分[じぶん]の 考[かんが]えを 付[つ]け 加[くわ]えました。|Ich habe meine eigenen Gedanken hinzugefügt.|Verb
付き合う|付[つ]き 合[あ]う|verkehren mit, zusammen sein; begleiten|彼女[かのじょ]と4 年[ねん]ほど 付[つ]き 合[あ]っています。|Ich bin seit etwa vier Jahren mit ihr zusammen.|Verb
名付ける|名付[なづ]ける|benennen, einen Namen geben|子猫[こねこ]にトラと 名付[なづ]けました。|Ich habe das Kätzchen Tora genannt.|Verb
付録|付録[ふろく]|Beilage, Anhang|今月[こんげつ]の 付録[ふろく]はアニメの DVD[でぃーぶぃーでぃー]です。|Die Beilage in diesem Monat ist eine Anime-DVD.|Nomen
近付ける|近付[ちかづ]ける|näher heranbringen|私[わたし]は 顔[かお]を 窓[まど]に 近付[ちかづ]けたんだ。|Ich brachte mein Gesicht nah ans Fenster.|Verb
付け足す|付[つ]け 足[た]す|ergänzen, anfügen|何[なに]か 付[つ]け 足[た]すことはありますか。|Gibt es noch etwas zu ergänzen?|Verb
フライパン|フライパン|Bratpfanne|フライパンで 目玉焼[めだまや]きを 作[つく]ったよ。|Ich habe in der Pfanne Spiegeleier gemacht.|Nomen
日付け|日付[ひづ]け|Datum|今日[きょう]の 日付[ひづ]けは6 月19日[がつ 19 にち]です。|Das heutige Datum ist der 19. Juni.|Nomen
付属|付属[ふぞく]|Zubehör, Angliederung|このソフトには 色々[いろいろ]なツールが 付属[ふぞく]しています。|Zu dieser Software gehören verschiedene Werkzeuge.|Nomen (mit する)
属する|属[ぞく]する|gehören zu|私[わたし]は 市民[しみん]オーケストラに 属[ぞく]しています。|Ich gehöre zum Bürgerorchester.|Verb
反省|反省[はんせい]|Selbstkritik, Reue|彼[かれ]は 十分[じゅうぶん] 反省[はんせい]しています。|Er hat es gründlich bereut.|Nomen (mit する)
省く|省[はぶ]く|weglassen, einsparen|時間[じかん]がないので 詳細[しょうさい]は 省[はぶ]きます。|Aus Zeitmangel lasse ich die Einzelheiten weg.|Verb
まあまあ|まあまあ|na, na (beschwichtigend)|まあまあ、 落[お]ち 着[つ]いてください。|Na, na, beruhigen Sie sich bitte.|Adverb
略す|略[りゃく]す|abkürzen, auslassen|国際連合[こくさいれんごう]を 略[りゃく]して 国連[こくれん]といいます。|„Kokusai Rengō“ wird zu „Kokuren“ abgekürzt.|Verb
略|略[りゃく]|Abkürzung|「 IT」[あいてぃー]は 何[なん]の 略[りゃく]か 知[し]っていますか。|Weißt du, wofür „IT“ die Abkürzung ist?|Nomen
大概|大概[たいがい]|meistens, im Allgemeinen|大概[たいがい]、 風邪[かぜ]は 寝[ね]ていれば 治[なお]ります。|Meistens wird eine Erkältung besser, wenn man im Bett bleibt.|Adverb
含める|含[ふく]める|einschließen, einbeziehen|私[わたし]を 含[ふく]めて10 人[にん]が 参加[さんか]しました。|Mit mir zusammen haben zehn Leute teilgenommen.|Verb
含む|含[ふく]む|enthalten|その 食品[しょくひん]は 有害物質[ゆうがい ぶっしつ]を 含[ふく]んでいるぞ。|Dieses Lebensmittel enthält Schadstoffe.|Verb
たこ|たこ|Oktopus, Krake|タコには 足[あし]が8 本[ぽん]ある。|Ein Oktopus hat acht Arme.|Nomen
道順|道順[みちじゅん]|Wegbeschreibung, Route|家[いえ]から 学校[がっこう]までの 道順[みちじゅん]を 教[おし]えてください。|Erklären Sie mir bitte den Weg von zu Hause bis zur Schule.|Nomen
列車|列車[れっしゃ]|Zug|列車[れっしゃ]がホームに 入[はい]ってきた。|Der Zug ist in den Bahnhof eingefahren.|Nomen
列島|列島[れっとう]|Inselkette, Archipel|日本[にっぽん]は 列島[れっとう]です。|Japan ist eine Inselkette.|Nomen
列|列[れつ]|Reihe, Schlange|店[みせ]の 前[まえ]に 長[なが]い 列[れつ]ができていたね。|Vor dem Laden hatte sich eine lange Schlange gebildet.|Nomen
例外|例外[れいがい]|Ausnahme|例外[れいがい]は 認[みと]めません。|Ausnahmen werden nicht zugelassen.|Nomen
デザート|デザート|Nachtisch, Dessert|デザートにケーキを 食[た]べました。|Zum Nachtisch habe ich Kuchen gegessen.|Nomen
比例|比例[ひれい]|Verhältnis, Proportion|努力[どりょく]と 結果[けっか]が 比例[ひれい]していないの。|Aufwand und Ergebnis stehen in keinem Verhältnis.|Nomen (mit する)
用例|用例[ようれい]|Anwendungsbeispiel|用例[ようれい]を 使[つか]って 説明[せつめい]してください。|Erklären Sie es bitte anhand von Beispielen.|Nomen
例える|例[たと]える|vergleichen mit, gleichnishaft darstellen|彼[かれ]は 彼女[かのじょ]をバラに 例[たと]えたんだ。|Er hat sie mit einer Rose verglichen.|Verb
例題|例題[れいだい]|Beispielaufgabe|みんなで 例題[れいだい]を 解[と]いてみましょう。|Lösen wir die Beispielaufgabe gemeinsam.|Nomen
例年|例年[れいねん]|ein gewöhnliches Jahr, wie jedes Jahr|例年[れいねん] 8 月[がつ]は 雨[あめ]が 少[すく]ないね。|Im August regnet es normalerweise wenig.|Nomen
例え|例[たと]え|Vergleich, Gleichnis|例[たと]えを 上[あ]げると 話[はなし]が 分[わ]かり 易[やす]くなる。|Mit einem Vergleich wird die Sache leichter verständlich.|Nomen
とっさに|とっさに|im ersten Augenblick, auf Anhieb|とっさに 彼[かれ]の 名前[なまえ]が 出[で]てこなかった。|Auf Anhieb fiel mir sein Name nicht ein.|Adverb
余地|余地[よち]|Spielraum, Raum|彼[かれ]に 言[い]い 訳[わけ]の 余地[よち]はありません。|Für Ausreden hat er keinen Spielraum.|Nomen
余計|余計[よけい]|überflüssig, unnötig; umso mehr|余計[よけい]なことを 言[い]ってはだめよ。|Sag nichts Überflüssiges.|な-Adjektiv
余分|余分[よぶん]|Überschuss, zusätzlich|食事[しょくじ]は 余分[よぶん]に 用意[ようい]してあります。|Es ist zusätzliches Essen vorbereitet.|な-Adjektiv
途中|途中[とちゅう]|unterwegs, mittendrin|途中[とちゅう]で30 分[ぷん]ほど 休[やす]みましょう。|Machen wir unterwegs etwa 30 Minuten Pause.|Nomen
用途|用途[ようと]|Verwendungszweck|この 道具[どうぐ]の 用途[ようと]を 説明[せつめい]します。|Ich erkläre, wofür dieses Werkzeug gedacht ist.|Nomen
ぬるぬる|ぬるぬる|glitschig, schleimig|うなぎはぬるぬるしていますね。|Aale sind glitschig.|Adverb
中途|中途[ちゅうと]|auf halbem Weg, mittendrin|私[わたし]は 中途[ちゅうと] 採用[さいよう]で 入社[にゅうしゃ]しました。|Ich bin als Quereinsteiger in die Firma gekommen.|Nomen
取り締まり|取[と]り 締[し]まり|Kontrolle, Durchgreifen|違法駐車[いほう ちゅうしゃ]の 取[と]り 締[し]まりが 厳[きび]しくなったの。|Die Kontrollen gegen Falschparker sind strenger geworden.|Nomen
取り締まる|取[と]り 締[し]まる|kontrollieren, durchgreifen gegen|警察[けいさつ]が 飲酒運転[いんしゅ うんてん]を 取[と]り 締[し]まっていますよ。|Die Polizei geht gegen Trunkenheit am Steuer vor.|Verb
緩める|緩[ゆる]める|lockern|食[た]べ 過[す]ぎたのでベルトを 緩[ゆる]めたの。|Ich habe zu viel gegessen und den Gürtel gelockert.|Verb
緩やか|緩[ゆる]やか|sanft, gemächlich, locker|ここから 先[さき]は 緩[ゆる]やかな 坂[さか]になっています。|Ab hier ist es ein sanfter Hang.|Adjektiv
のろい|のろい|langsam, träge|この 電車[でんしゃ]は 本当[ほんとう]にのろいですね。|Dieser Zug ist wirklich langsam.|Adjektiv
緩む|緩[ゆる]む|sich lockern, nachlassen|彼[かれ]は 気[き]が 緩[ゆる]んでいます。|Er ist unachtsam geworden.|Verb
養う|養[やしな]う|ernähren, unterhalten; pflegen|私[わたし]は3 人[にん]の 子供[こども]を 養[やしな]っています。|Ich ernähre drei Kinder.|Verb
豊か|豊[ゆた]か|reich, üppig|彼[かれ]は 心[こころ]が 豊[ゆた]かな 人[ひと]です。|Er ist ein Mensch mit reichem Innenleben.|Adjektiv
富む|富[と]む|reich sein an|彼[かれ]の 人生[じんせい]は 変化[へんか]に 富[と]んでいるな。|Sein Leben ist reich an Abwechslung.|Verb
豊富|豊富[ほうふ]|reichlich, reich an|この 果物[くだもの]はビタミンが 豊富[ほうふ]です。|Diese Frucht ist reich an Vitaminen.|な-Adjektiv
目茶苦茶|目茶苦茶[めちゃくちゃ]|chaotisch, haarsträubend|彼[かれ]の 運転[うんてん]は 目茶苦茶[めちゃくちゃ]です。|Er fährt haarsträubend.|な-Adjektiv
ぴょんぴょん|ぴょんぴょん|hüpfend, hopsend|カエルがぴょんぴょんはねているね。|Die Frösche hüpfen umher.|Adverb
労働者|労働者[ろうどうしゃ]|Arbeiter(in)|労働者[ろうどうしゃ]がストをしたそうだよ。|Die Arbeiter sollen gestreikt haben.|Nomen
労働|労働[ろうどう]|Arbeit|彼[かれ]らは1 日7時間[にち 7 じかん] 労働[ろうどう]している。|Sie arbeiten sieben Stunden am Tag.|Nomen (mit する)
疲労|疲労[ひろう]|Erschöpfung, Ermüdung|部下[ぶか]が 疲労[ひろう]で 倒[たお]れたの。|Ein Mitarbeiter ist vor Erschöpfung zusammengebrochen.|Nomen (mit する)
労力|労力[ろうりょく]|Arbeitsaufwand, Mühe|仕事[しごと]には 時間[じかん]と 労力[ろうりょく]が 必要[ひつよう]です。|Arbeit braucht Zeit und Mühe.|Nomen
貧しい|貧[まず]しい|arm, dürftig|彼[かれ]は 貧[まず]しい 家庭[かてい]で 育[そだ]ったんだ。|Er ist in einer armen Familie aufgewachsen.|Adjektiv
ブラシ|ブラシ|Bürste|犬[いぬ]の 毛[け]をブラシでとかしてやったの。|Ich habe dem Hund das Fell gebürstet.|Nomen
乏しい|乏[とぼ]しい|knapp, dürftig|彼女[かのじょ]はまだ 仕事[しごと]の 経験[けいけん]が 乏[とぼ]しい。|Ihr fehlt es noch an Berufserfahrung.|Adjektiv
貧乏人|貧乏人[びんぼうにん]|armer Mensch|貧乏人[びんぼうにん]が 大金持[おおがねも]ちになることもあるさ。|Es kommt vor, dass ein Armer steinreich wird.|Nomen
辛い|辛[つら]い|hart, schmerzlich, schwer zu ertragen|この 仕事[しごと]は 辛[つら]いです。|Diese Arbeit ist hart.|Adjektiv
不幸せ|不幸[ふしあわ]せ|Unglück, unglücklich|彼[かれ]ほど 不幸[ふしあわ]せな 人[ひと]はいないな。|Es gibt keinen unglücklicheren Menschen als ihn.|な-Adjektiv
福祉|福祉[ふくし]|Wohlfahrt, Sozialwesen|姉[あね]は 福祉[ふくし]の 勉強[べんきょう]をしています。|Meine große Schwester studiert Sozialwesen.|Nomen
マヨネーズ|マヨネーズ|Mayonnaise|サラダにマヨネーズをかけたの。|Ich habe Mayonnaise auf den Salat gegeben.|Nomen
模様|模様[もよう]|Muster; Anzeichen, Lage|彼女[かのじょ]は 水玉[みずたま] 模様[もよう]のスカートをはいているね。|Sie trägt einen gepunkteten Rock.|Nomen
模範|模範[もはん]|Vorbild, Muster|彼[かれ]は 全校生徒[ぜんこう せいと]の 模範[もはん]です。|Er ist ein Vorbild für alle Schüler der Schule.|Nomen
農民|農民[のうみん]|Bauern, Landbevölkerung|中世[ちゅうせい]の 農民[のうみん]は 貧[まず]しかった。|Die Bauern im Mittelalter waren arm.|Nomen
農家|農家[のうか]|Bauernhof, Bauernfamilie|彼[かれ]は 農家[のうか]に 生[う]まれました。|Er wurde in eine Bauernfamilie geboren.|Nomen
農村|農村[のうそん]|Bauerndorf|私[わたし]は 農村[のうそん]で 育[そだ]ちました。|Ich bin in einem Bauerndorf aufgewachsen.|Nomen
低気圧|低気圧[ていきあつ]|Tiefdruckgebiet|低気圧[ていきあつ]が 近[ちか]づいています。|Ein Tief nähert sich.|Nomen
だらしない|だらしない|schlampig, nachlässig|だらしない 格好[かっこう]をしないでください。|Lauf bitte nicht so schlampig herum.|Adjektiv
短縮|短縮[たんしゅく]|Verkürzung|今日[きょう]は 授業[じゅぎょう]を1 時間[じかん]に 短縮[たんしゅく]します。|Heute wird der Unterricht auf eine Stunde verkürzt.|Nomen (mit する)
縮める|縮[ちぢ]める|verkürzen, verkleinern|彼[かれ]はタイムを1 秒[びょう] 縮[ちぢ]めたの。|Er hat seine Zeit um eine Sekunde verbessert.|Verb
縮む|縮[ちぢ]む|schrumpfen, einlaufen|この 服[ふく]の 縮[ちぢ]み 具合[ぐあい]はひどい。|Diese Kleidung ist stark eingelaufen.|Verb
縮み|縮[ちぢ]み|Schrumpfen, Einlaufen|この 服[ふく]の 縮[ちぢ]み 具合[ぐあい]はひどい。|Diese Kleidung ist stark eingelaufen.|Nomen
縮まる|縮[ちぢ]まる|kürzer werden, sich verringern|兄[あに]との 身長[しんちょう]の 差[さ]が 縮[ちぢ]まった。|Der Größenunterschied zu meinem Bruder ist kleiner geworden.|Verb
とうもろこし|とうもろこし|Mais|このとうもろこしは 甘[あま]くておいしい。|Dieser Mais ist süß und lecker.|Nomen
伸ばす|伸[の]ばす|strecken, verlängern, wachsen lassen|ストレッチで 筋肉[きんにく]を 伸[の]ばしましょう。|Dehnen wir die Muskeln mit Stretching.|Verb
引き伸ばす|引[ひ]き 伸[の]ばす|vergrößern, in die Länge ziehen|この 写真[しゃしん]を 引[ひ]き 伸[の]ばしてください。|Vergrößern Sie bitte dieses Foto.|Verb
追伸|追伸[ついしん]|Postskriptum, PS|追伸[ついしん]、お 兄[にい]さんはお 元気[げんき]ですか。|PS: Wie geht es deinem großen Bruder?|Nomen
倍|倍[ばい]|doppelt, -fach|以前[いぜん]の 収入[しゅうにゅう]は 今[いま]の 倍[ばい]はあった。|Früher war mein Einkommen doppelt so hoch wie jetzt.|Nomen
超過|超過[ちょうか]|Überschreitung|この 荷物[にもつ]は 重量[じゅうりょう] 超過[ちょうか]です。|Dieses Gepäck hat Übergewicht.|Nomen (mit する)
ひらひら|ひらひら|flatternd, schwebend|木[こ]の 葉[は]がひらひらと 落[お]ちたの。|Ein Blatt schwebte flatternd herab.|Adverb
乗り越える|乗[の]り 越[こ]える|überwinden, hinübersteigen|彼[かれ]は 悲[かな]しみを 乗[の]り 越[こ]えて 強[つよ]く 生[い]きた。|Er überwand seine Trauer und lebte stark weiter.|Verb
乗り越し|乗[の]り 越[こ]し|Fahrt über das Ziel hinaus|乗[の]り 越[こ]しを 機械[きかい]で 精算[せいさん]したの。|Ich habe die zu weit gefahrene Strecke am Automaten nachgezahlt.|Nomen (mit する)
乗り越す|乗[の]り 越[こ]す|über das Ziel hinausfahren|居眠[いねむ]りして 降[お]りる 駅[えき]を 乗[の]り 越[こ]した。|Ich bin eingenickt und über meine Station hinausgefahren.|Verb
抜ける|抜[ぬ]ける|herausfallen, ausscheiden; hindurchgehen|彼[かれ]はグループから 抜[ぬ]けました。|Er ist aus der Gruppe ausgeschieden.|Verb
抜く|抜[ぬ]く|herausziehen; auslassen; überholen|ワインのコルクを 抜[ぬ]きました。|Ich habe den Korken aus der Weinflasche gezogen.|Verb
ぽかぽか|ぽかぽか|wohlig warm|今日[きょう]はぽかぽか 暖[あたた]かい 日[ひ]です。|Heute ist ein angenehm warmer Tag.|Adverb
昇る|昇[のぼ]る|aufgehen, aufsteigen|太陽[たいよう]は 東[ひがし]から 昇[のぼ]ります。|Die Sonne geht im Osten auf.|Verb
膨らむ|膨[ふく]らむ|anschwellen, sich aufblähen|桜[さくら]のつぼみが 膨[ふく]らんだのね。|Die Kirschknospen sind angeschwollen.|Verb
膨れる|膨[ふく]れる|anschwellen, voll werden|お 腹[なか]が 膨[ふく]れたら 眠[ねむ]くなった。|Als mein Bauch voll war, wurde ich müde.|Verb
札|札[ふだ]|Schild, Etikett, Zettel|店[みせ]の 外[そと]にまだ 営業中[えいぎょう ちゅう]の 札[ふだ]がでているよ。|Draußen hängt noch das Schild „geöffnet“.|Nomen
名札|名札[なふだ]|Namensschild|生徒[せいと]たちは 校内[こうない]では 名札[なふだ]をつけます。|Die Schüler tragen in der Schule Namensschilder.|Nomen
礼|礼[れい]|Dank; Verbeugung; Höflichkeit|先生[せんせい]にお 礼[れい]の 手紙[てがみ]を 書[か]きました。|Ich habe meinem Lehrer einen Dankesbrief geschrieben.|Nomen
よる|よる|abhängen von, beruhen auf|人[ひと]は 見[み]かけによらないな。|Man kann Menschen nicht nach dem Äußeren beurteilen.|Verb
反射|反射[はんしゃ]|Reflexion, Spiegelung|車[くるま]のライトが 反射[はんしゃ]していますね。|Die Autoscheinwerfer spiegeln sich.|Nomen (mit する)
日程|日程[にってい]|Zeitplan, Terminplan|試験[しけん]の 日程[にってい]が 発表[はっぴょう]されました。|Die Prüfungstermine wurden bekannt gegeben.|Nomen
程|程[ほど]|Maß, Grad, Grenze|冗談[じょうだん]にも 程[ほど]がある。|Auch Scherze haben ihre Grenzen.|Nomen
優勝|優勝[ゆうしょう]|Sieg, Meisterschaft|私[わたし]たちのチームが 優勝[ゆうしょう]しました。|Unsere Mannschaft hat die Meisterschaft gewonnen.|Nomen (mit する)
優秀|優秀[ゆうしゅう]|hervorragend, ausgezeichnet|彼[かれ]はとても 優秀[ゆうしゅう]な 生徒[せいと]です。|Er ist ein hervorragender Schüler.|な-Adjektiv
だぶだぶ|だぶだぶ|schlabberig, viel zu weit|この 服[ふく]は 大[おお]き 過[す]ぎてだぶだぶです。|Diese Kleidung ist zu groß und schlabbert.|Adjektiv
透明|透明[とうめい]|durchsichtig, transparent|ゴミは 透明[とうめい]な 袋[ふくろ]に 入[い]れて 出[だ]してください。|Stellen Sie den Müll bitte in durchsichtigen Säcken raus.|な-Adjektiv
半導体|半導体[はんどうたい]|Halbleiter|半導体[はんどうたい]は 様々[さまざま]な 製品[せいひん]に 使[つか]われているよ。|Halbleiter werden in den verschiedensten Produkten verwendet.|Nomen
導く|導[みちび]く|führen, leiten|先生[せんせい]は 私[わたし]たちを 導[みちび]いてくれます。|Der Lehrer leitet uns an.|Verb
望む|望[のぞ]む|wünschen, hoffen; überblicken|彼[かれ]は 私[わたし]との 結婚[けっこん]を 望[のぞ]んでいます。|Er wünscht sich, mich zu heiraten.|Verb
望ましい|望[のぞ]ましい|wünschenswert|夜[よる]は10 時[じ]までに 寝[ね]るのが 望[のぞ]ましいの。|Es ist wünschenswert, bis zehn Uhr abends schlafen zu gehen.|Adjektiv
つるつる|つるつる|glatt, rutschig|床[ゆか]がつるつるすべります。|Der Boden ist spiegelglatt.|Adverb
要望|要望[ようぼう]|Wunsch, Forderung|お 客様[きゃくさま]の 要望[ようぼう]を 聞[き]かせてください。|Lassen Sie uns bitte Ihre Wünsche wissen.|Nomen (mit する)
望み|望[のぞ]み|Wunsch, Hoffnung|私[わたし]の 望[のぞ]みは 海外[かいがい]で 暮[く]らすことです。|Mein Wunsch ist, im Ausland zu leben.|Nomen
有望|有望[ゆうぼう]|vielversprechend|彼[かれ]は 有望[ゆうぼう]な 社員[しゃいん]です。|Er ist ein vielversprechender Mitarbeiter.|な-Adjektiv
欲望|欲望[よくぼう]|Begierde, Verlangen|彼[かれ]は 欲望[よくぼう]が 強[つよ]い 人[ひと]です。|Er ist ein Mensch mit starken Begierden.|Nomen
待ち望む|待[ま]ち 望[のぞ]む|sehnlich erwarten|その 国[くに]の 人々[ひとびと]は 平和[へいわ]を 待[ま]ち 望[のぞ]んでいるの。|Die Menschen dieses Landes sehnen den Frieden herbei.|Verb
努める|努[つと]める|sich bemühen|良[い]い 成績[せいせき]が 取[と]れるように 努[つと]めます。|Ich bemühe mich, gute Noten zu bekommen.|Verb
トースト|トースト|Toast|私[わたし]は 毎朝[まいあさ]トーストを2 枚食[まい た]べます。|Ich esse jeden Morgen zwei Scheiben Toast.|Nomen
独立|独立[どくりつ]|Unabhängigkeit, Selbstständigkeit|先日会社[せんじつ かいしゃ]から 独立[どくりつ]しました。|Ich habe mich neulich selbstständig gemacht.|Nomen (mit する)
独特|独特[どくとく]|eigentümlich, einzigartig|彼[かれ]の 服[ふく]のセンスは 独特[どくとく]よね。|Sein Kleidungsstil ist eigenwillig.|Adjektiv
独り言|独[ひと]り 言[ごと]|Selbstgespräch|彼女[かのじょ]はいつも 独[ひと]り 言[ごと]を 言[い]うんだ。|Sie führt ständig Selbstgespräche.|Nomen
身|身[み]|Körper, die eigene Person|旅行中[りょこうちゅう]は 身[み]の 安全[あんぜん]が 第一[だいいち]です。|Auf Reisen geht die eigene Sicherheit vor.|Nomen
中身|中身[なかみ]|Inhalt|かばんの 中身[なかみ]を 見[み]せてください。|Zeigen Sie mir bitte den Inhalt der Tasche.|Nomen
どきっと|どきっと|erschrocken, zusammenzuckend|突然[とつぜん]の 質問[しつもん]にどきっとしたよ。|Bei der plötzlichen Frage bin ich zusammengezuckt.|Adverb
身近|身近[みぢか]|nah, vertraut|私[わたし]にとって 動物[どうぶつ]は 身近[みぢか]な 存在[そんざい]です。|Tiere sind mir sehr vertraut.|な-Adjektiv
身の回り|身[み]の 回[まわ]り|die eigenen Sachen, das tägliche Umfeld|身[み]の 回[まわ]りのお 世話[せわ]は 私[わたし]がします。|Ich kümmere mich um Ihre täglichen Belange.|Nomen
身なり|身[み]なり|Kleidung, äußere Erscheinung|身[み]なりのいい 人[ひと]が 入[はい]ってきた。|Eine gut gekleidete Person kam herein.|Nomen
身振り|身振[みぶ]り|Geste, Gebärde|彼[かれ]は 身振[みぶ]りを 交[まじ]えて 説明[せつめい]してくれたの。|Er hat es mir mit Gesten erklärt.|Nomen
独占|独占[どくせん]|Monopol, Alleinbesitz|この2 社[しゃ]が 市場[しじょう]を 独占[どくせん]しています。|Diese beiden Firmen beherrschen den Markt allein.|Nomen (mit する)
のろのろ|のろのろ|im Schneckentempo|車[くるま]は 雪道[ゆきみち]をのろのろと 走[はし]ったの。|Das Auto fuhr im Schneckentempo über die verschneite Straße.|Adverb
仲良く|仲良[なかよ]く|einträchtig, in gutem Einvernehmen|あの 夫婦[ふうふ]は 仲良[なかよ]く 暮[く]らしているよ。|Das Ehepaar dort lebt einträchtig zusammen.|Adverb
仲良し|仲良[なかよ]し|gute(r) Freund(in), dicke Freunde|あの3 人組[にんぐみ]は 仲良[なかよ]しですね。|Die drei dort sind dicke Freunde.|Nomen
仲直り|仲直[なかなお]り|Versöhnung|けんかした 友達[ともだち]と 仲直[なかなお]りしました。|Ich habe mich mit dem Freund versöhnt, mit dem ich gestritten hatte.|Nomen (mit する)
仲|仲[なか]|Verhältnis, Beziehung (zueinander)|あなたたちは 仲[なか]がいいですね。|Ihr versteht euch gut, nicht wahr?|Nomen
仲間|仲間[なかま]|Kamerad(in), Gefährte, Kollege|彼[かれ]には 仲間[なかま]がたくさんいる。|Er hat viele Kameraden.|Nomen
仲人|仲人[なこうど]|Ehevermittler(in), Trauzeuge|あの 夫婦[ふうふ]は 私[わたし]たちの 仲人[なこうど]です。|Das Ehepaar dort hat unsere Ehe vermittelt.|Nomen
ぴかぴか|ぴかぴか|blitzblank, funkelnd|新車[しんしゃ]はぴかぴかですね。|Das neue Auto ist blitzblank.|Adverb
照らす|照[て]らす|beleuchten, bescheinen|月[つき]が 庭[にわ]を 照[て]らしている。|Der Mond scheint auf den Garten.|Verb
照る|照[て]る|scheinen (Sonne)|日差[ひざ]しが 強[つよ]く 照[て]りつけますね。|Die Sonne brennt kräftig herunter.|Verb
夫人|夫人[ふじん]|Ehefrau, Frau (höflich, nach dem Namen)|スミス 夫人[ふじん]がいらっしゃいました。|Frau Smith ist gekommen.|Nomen
婦人|婦人[ふじん]|Frau, Dame|婦人[ふじん] 服売[ふく う]り 場[ば]は5 階[かい]でございます。|Die Abteilung für Damenbekleidung ist im vierten Stock.|Nomen
夫妻|夫妻[ふさい]|Ehepaar, Herr und Frau|昨日[きのう]の 夜[よる]、 社長[しゃちょう]ご 夫妻[ふさい]と 食事[しょくじ]をしました。|Gestern Abend habe ich mit dem Firmenchef und seiner Frau gegessen.|Nomen
ぺこぺこ|ぺこぺこ|katzbuckelnd, unterwürfig|彼[かれ]は 上司[じょうし]にぺこぺこしている。|Er katzbuckelt vor seinem Vorgesetzten.|Adverb
相互|相互[そうご]|gegenseitig|チームの 中[なか]では 相互[そうご]の 信頼[しんらい]が 大切[たいせつ]です。|Im Team ist gegenseitiges Vertrauen wichtig.|Nomen
互い|互[たが]い|einander, gegenseitig|互[たが]いの 話[はなし]をよく 聞[き]きなさい。|Hört einander gut zu.|Nomen
皆|皆[みな]|alle|私[わたし]の 昇進[しょうしん]を 皆[みな]が 喜[よろこ]んでくれたの。|Alle haben sich über meine Beförderung gefreut.|Nomen
我々|我々[われわれ]|wir (förmlich)|我々[われわれ]の 決意[けつい]は 固[かた]いです。|Unser Entschluss steht fest.|Nomen
我が国|我[わ]が 国[くに]|unser Land|彼[かれ]は 我[わ]が 国[くに]を 代表[だいひょう]する 作家[さっか]です。|Er ist ein Schriftsteller, der unser Land repräsentiert.|Nomen
ぺらぺら|ぺらぺら|dünn, labberig|この 本[ほん]は 薄[うす]くてぺらぺらですね。|Dieses Buch ist dünn und labberig.|Adjektiv
我が家|我[わ]が 家[や]|unser Zuhause, mein Heim|ぜひ 我[わ]が 家[や]に 遊[あそ]びに 来[き]てください。|Kommen Sie uns unbedingt zu Hause besuchen.|Nomen
年齢|年齢[ねんれい]|Alter|彼女[かのじょ]の 年齢[ねんれい]は27です。|Sie ist 27 Jahre alt.|Nomen
恋愛|恋愛[れんあい]|Liebe, Liebesbeziehung|彼女[かのじょ]は 恋愛[れんあい]にあこがれる 年[とし]ごろです。|Sie ist in dem Alter, in dem man von der Liebe träumt.|Nomen (mit する)
初恋|初恋[はつこい]|erste Liebe|私[わたし]の 初恋[はつこい]は 小学生[しょうがくせい]の 時[とき]です。|Meine erste Liebe hatte ich in der Grundschule.|Nomen
誕生|誕生[たんじょう]|Geburt|先月[せんげつ]、 娘[むすめ]が 誕生[たんじょう]しました。|Letzten Monat ist meine Tochter zur Welt gekommen.|Nomen (mit する)
ほこり|ほこり|Staub|この 部屋[へや]はほこりだらけですね。|Dieses Zimmer ist voller Staub.|Nomen
延びる|延[の]びる|sich verlängern, verschoben werden|工事[こうじ]の 予定[よてい]が1 ヶ月[かげつ] 延[の]びてしまった。|Der Bauplan hat sich um einen Monat verzögert.|Verb
延ばす|延[の]ばす|verlängern, verschieben|出発[しゅっぱつ]を 一週間[いっしゅうかん] 延[の]ばしたの。|Ich habe die Abreise um eine Woche verschoben.|Verb
引き延ばす|引[ひ]き 延[の]ばす|in die Länge ziehen, hinauszögern|司会者[しかいしゃ]は 話[はなし]を 引[ひ]き 延[の]ばしたわ。|Der Moderator hat das Gespräch in die Länge gezogen.|Verb
単純|単純[たんじゅん]|einfach, schlicht|彼[かれ]は 単純[たんじゅん]な 人[ひと]です。|Er ist ein einfach gestrickter Mensch.|な-Adjektiv
夢中|夢中[むちゅう]|vertieft, hingerissen|うちの 子[こ]はその 本[ほん]に 夢中[むちゅう]です。|Unser Kind ist ganz in das Buch vertieft.|な-Adjektiv
泣き顔|泣[な]き 顔[がお]|verweintes Gesicht|彼女[かのじょ]は 泣[な]き 顔[がお]になったの。|Sie verzog das Gesicht zum Weinen.|Nomen
ポット|ポット|Kanne, Thermoskanne|お 湯[ゆ]はポットに 入[はい]っています。|Heißes Wasser ist in der Kanne.|Nomen
笑い|笑[わら]い|Lachen|あの 家[いえ]は 笑[わら]いが 絶[た]えないね。|In dem Haus dort wird ständig gelacht.|Nomen
喜び|喜[よろこ]び|Freude|人々[ひとびと]は 喜[よろこ]びに 沸[わ]いた。|Die Menschen waren außer sich vor Freude.|Nomen
喜ばす|喜[よろこ]ばす|erfreuen|私[わたし]は 人[ひと]を 喜[よろこ]ばすのが 大好[だいす]きです。|Ich mache anderen sehr gern eine Freude.|Verb
恥|恥[はじ]|Schande, Scham|間違[まちが]えることは 恥[はじ]ではありません。|Sich zu irren ist keine Schande.|Nomen
弁論|弁論[べんろん]|Rede, Plädoyer|弁論[べんろん] 大会[たいかい]で 優勝[ゆうしょう]したことがあります。|Ich habe einmal einen Redewettbewerb gewonnen.|Nomen (mit する)
ミュージック|ミュージック|Musik|彼[かれ]はソウルミュージックをよく 聞[き]くの。|Er hört oft Soul.|Nomen
保護|保護[ほご]|Schutz|みんなで 環境[かんきょう]を 保護[ほご]しましょう。|Schützen wir alle gemeinsam die Umwelt.|Nomen (mit する)
弁護|弁護[べんご]|Verteidigung, Fürsprache|友人[ゆうじん]が 私[わたし]を 弁護[べんご]してくれました。|Mein Freund hat mich verteidigt.|Nomen (mit する)
保護者|保護者[ほごしゃ]|Erziehungsberechtigte(r), Beschützer(in)|私[わたし]はこの 子[こ]の 保護者[ほごしゃ]です。|Ich bin der Erziehungsberechtigte dieses Kindes.|Nomen
同士|同士[どうし]|untereinander, einander (gleichartig)|彼[かれ]と 私[わたし]はいとこ 同士[どうし]です。|Er und ich sind Cousins.|Nomen
弁護士|弁護士[べんごし]|Rechtsanwalt, Rechtsanwältin|父[ちち]は 弁護士[べんごし]です。|Mein Vater ist Rechtsanwalt.|Nomen
ロマンチック|ロマンチック|romantisch|彼女[かのじょ]はロマンチックな 人[ひと]です。|Sie ist ein romantischer Mensch.|Adjektiv
否定|否定[ひてい]|Verneinung, Ablehnung|彼[かれ]、 友達[ともだち]の 意見[いけん]を 否定[ひてい]した。|Er hat die Meinung seines Freundes zurückgewiesen.|Nomen (mit する)
総裁|総裁[そうさい]|Präsident(in) (einer Bank, Partei)|あの 人[ひと]は 日本銀行[にっぽんぎんこう]の 総裁[そうさい]です。|Er ist der Präsident der Bank von Japan.|Nomen
迷信|迷信[めいしん]|Aberglaube|村[むら]の 人[ひと]たちは 迷信[めいしん]を 信[しん]じています。|Die Dorfbewohner sind abergläubisch.|Nomen
迷子|迷子[まいご]|verirrtes Kind, Verirrte(r)|うちの 子[こ]が 迷子[まいご]になりました。|Unser Kind hat sich verlaufen.|Nomen
領域|領域[りょういき]|Gebiet, Bereich|彼女[かのじょ]は 料理[りょうり]の 腕[うで]が 素人[しろうと]の 領域[りょういき]を 超[こ]えているわ。|Ihre Kochkünste gehen über das Niveau eines Laien hinaus.|Nomen
謎|謎[なぞ]|Rätsel, Geheimnis|ピラミッドには 謎[なぞ]が 多[おお]いんだ。|Die Pyramiden bergen viele Rätsel.|Nomen
わくわく|わくわく|aufgeregt, voller Vorfreude|遠足[えんそく]が 楽[たの]しみでわくわくしています。|Ich freue mich riesig auf den Ausflug.|Adverb
著者|著者[ちょしゃ]|Autor(in), Verfasser(in)|この 本[ほん]の 著者[ちょしゃ]はイギリス 人[じん]です。|Der Autor dieses Buches ist Brite.|Nomen
著書|著書[ちょしょ]|Werk, Buch (eines Autors)|彼[かれ]の 新[あたら]しい 著書[ちょしょ]が 出版[しゅっぱん]されたね。|Sein neues Buch ist erschienen.|Nomen
偽物|偽物[にせもの]|Fälschung, Imitat|彼[かれ]らが 売[う]っていたのは 偽物[にせもの]だ。|Was sie verkauft haben, waren Fälschungen.|Nomen
ノーベル賞|ノーベル 賞[しょう]|Nobelpreis|日本人[にほんじん]がノーベル 賞[しょう]を 取[と]ったよ。|Ein Japaner hat den Nobelpreis bekommen.|Nomen
文化財|文化財[ぶんかざい]|Kulturgut|この 建物[たてもの]は 国[くに]の 文化財[ぶんかざい]です。|Dieses Gebäude ist ein nationales Kulturgut.|Nomen
わさび|わさび|Wasabi (japanischer Meerrettich)|刺身[さしみ]にわさびは 欠[か]かせませんね。|Zu Sashimi gehört unbedingt Wasabi.|Nomen
預金|預金[よきん]|Bankeinlage, Guthaben|私[わたし]はこの 銀行[ぎんこう]に 預金[よきん]しています。|Ich habe mein Geld bei dieser Bank.|Nomen (mit する)
納得|納得[なっとく]|Einsehen, Überzeugtsein|彼[かれ]の 説明[せつめい]で 納得[なっとく]できました。|Seine Erklärung hat mich überzeugt.|Nomen (mit する)
不得意|不得意[ふとくい]|Schwäche, nicht gut können|私[わたし]は 数学[すうがく]が 不得意[ふとくい]です。|Mathematik liegt mir nicht.|な-Adjektiv
得する|得[とく]する|profitieren, einen Vorteil haben|ネットで 得[とく]する 情報[じょうほう]を 見[み]つけたよ。|Ich habe im Netz nützliche Spartipps gefunden.|Verb
得|得[とく]|Vorteil, Gewinn|この 車[くるま]を 今買[いま か]うとお 得[とく]ですよ。|Wenn Sie dieses Auto jetzt kaufen, machen Sie ein gutes Geschäft.|な-Adjektiv
チキン|チキン|Hähnchen|チキンソテーは 私[わたし]の 大好物[だいこうぶつ]です。|Gebratenes Hähnchen ist mein Leibgericht.|Nomen
損|損[そん]|Verlust, Nachteil|パチンコで5000 円[えん] 損[そん]しました。|Ich habe beim Pachinko 5.000 Yen verloren.|Nomen (mit する)
損害|損害[そんがい]|Schaden, Verlust|町[まち]は 台風[たいふう]で 大[おお]きな 損害[そんがい]を 受[う]けたんだ。|Die Stadt hat durch den Taifun großen Schaden erlitten.|Nomen
損する|損[そん]する|Verlust machen, draufzahlen|わざわざ 行[い]って 損[そん]した。|Ich bin extra hingegangen und es hat sich nicht gelohnt.|Verb
燃料|燃料[ねんりょう]|Brennstoff, Kraftstoff|車[くるま]から 燃料[ねんりょう]がもれていますよ。|Aus dem Auto läuft Kraftstoff aus.|Nomen
燃やす|燃[も]やす|verbrennen|古[ふる]い 手紙[てがみ]を 燃[も]やしたんだ。|Ich habe alte Briefe verbrannt.|Verb
日焼け|日焼[ひや]け|Sonnenbräune, Sonnenbrand|海[うみ]で 日焼[ひや]けしたんだ。|Ich bin am Meer braun geworden.|Nomen (mit する)
とじる|とじる|abheften, binden|書類[しょるい]はこのファイルにとじてください。|Heften Sie die Unterlagen bitte in diesem Ordner ab.|Verb
焼き肉|焼[や]き 肉[にく]|gegrilltes Fleisch (Yakiniku)|彼[かれ]は 焼[や]き 肉[にく]が 大好[だいす]きです。|Er liebt Yakiniku.|Nomen
夕焼け|夕焼[ゆうや]け|Abendrot|今日[きょう]は 夕焼[ゆうや]けがきれいです。|Das Abendrot ist heute schön.|Nomen
焼きそば|焼[や]きそば|gebratene Nudeln (Yakisoba)|お 祭[まつ]りで 焼[や]きそばを 食[た]べたよ。|Auf dem Fest habe ich Yakisoba gegessen.|Nomen
幹|幹[みき]|Baumstamm|この 木[き]の 幹[みき]はとても 太[ふと]いよ。|Der Stamm dieses Baumes ist sehr dick.|Nomen
分散|分散[ぶんさん]|Streuung, Verteilung|その 会社[かいしゃ]はいろいろな 国[くに]に 投資[とうし]を 分散[ぶんさん]しているね。|Die Firma streut ihre Investitionen über verschiedene Länder.|Nomen (mit する)
にやにや|にやにや|grinsend|なぜか 彼[かれ]はにやにやしています。|Aus irgendeinem Grund grinst er vor sich hin.|Adverb
散らばる|散[ち]らばる|verstreut liegen|机[つくえ]の 上[うえ]に 書類[しょるい]が 散[ち]らばっている。|Auf dem Schreibtisch liegen Unterlagen verstreut.|Verb
散る|散[ち]る|abfallen (Blüten), sich zerstreuen|風[かぜ]で 桜[さくら]の 花[はな]が 散[ち]ってるね。|Die Kirschblüten fallen im Wind.|Verb
散らかる|散[ち]らかる|unordentlich sein, herumliegen|弟[おとうと]の 部屋[へや]はいつも 散[ち]らかっているんだ。|Das Zimmer meines kleinen Bruders ist immer unordentlich.|Verb
散らかす|散[ち]らかす|unordentlich machen, verstreuen|部屋[へや]を 散[ち]らかさないでください。|Bringt das Zimmer bitte nicht durcheinander.|Verb
田植え|田植[たう]え|Reispflanzen|5 月[がつ]は 田植[たう]えの 季節[きせつ]です。|Der Mai ist die Zeit des Reispflanzens.|Nomen (mit する)
ばら|ばら|Rose|お 祝[いわ]いにばらの 花束[はなたば]を 贈[おく]りました。|Ich habe zum Glückwunsch einen Rosenstrauß geschenkt.|Nomen
根|根[ね]|Wurzel|この 木[き]の 根[ね]はとても 太[ふと]いな。|Die Wurzeln dieses Baumes sind sehr dick.|Nomen
大根|大根[だいこん]|Daikon-Rettich|大根[だいこん]は 白[しろ]くて 長[なが]い 野菜[やさい]です。|Der Daikon ist ein weißes, langes Gemüse.|Nomen
まな板|まな 板[いた]|Schneidebrett|魚[さかな]を 切[き]った 後[あと]、まな 板[いた]を 洗[あら]ったの。|Nach dem Schneiden des Fisches habe ich das Brett abgewaschen.|Nomen
ほうれん草|ほうれん 草[そう]|Spinat|ほうれん 草[そう]はビタミンが 豊富[ほうふ]です。|Spinat ist reich an Vitaminen.|Nomen
話し言葉|話[はな]し 言葉[ことば]|gesprochene Sprache|話[はな]し 言葉[ことば]と 書[か]き 言葉[ことば]は 少[すこ]し 違[ちが]いますね。|Gesprochene und geschriebene Sprache unterscheiden sich ein wenig.|Nomen
パンティー|パンティー|Slip, Damenunterhose|白[しろ]いパンティーを 買[か]いました。|Ich habe weiße Slips gekauft.|Nomen
葉っぱ|葉[は]っぱ|Blatt (umgangssprachlich)|もみじの 葉[は]っぱが 赤[あか]くなりましたね。|Die Ahornblätter sind rot geworden.|Nomen
呼び出す|呼[よ]び 出[だ]す|herbeirufen, einbestellen|親[おや]が 学校[がっこう]に 呼[よ]び 出[だ]されたんだ。|Meine Eltern wurden in die Schule bestellt.|Verb
取り扱う|取[と]り 扱[あつか]う|handhaben, führen (Ware)|当店[とうてん]ではお 酒[さけ]を 取[と]り 扱[あつか]っておりません。|In unserem Geschäft führen wir keinen Alkohol.|Verb
取り扱い|取[と]り 扱[あつか]い|Handhabung, Umgang|この 機械[きかい]は 取[と]り 扱[あつか]いに 注意[ちゅうい]してください。|Gehen Sie mit dieser Maschine bitte vorsichtig um.|Nomen
同級生|同級生[どうきゅうせい]|Klassenkamerad(in)|私[わたし]たちは 同級生[どうきゅうせい]です。|Wir sind Klassenkameraden.|Nomen
中級|中級[ちゅうきゅう]|Mittelstufe|彼[かれ]は 中級[ちゅうきゅう]レベルの 日本語[にほんご]を 習[なら]っています。|Er lernt Japanisch auf Mittelstufenniveau.|Nomen
ふわふわ|ふわふわ|flauschig, fluffig|ふわふわの 布団[ふとん]に 寝[ね]たよ。|Ich habe auf einem flauschigen Futon geschlafen.|Adjektiv
腹|腹[はら]|Bauch|腹[はら]が 減[へ]って 動[うご]けない。|Ich habe solchen Hunger, dass ich mich nicht rühren kann.|Nomen
腹一杯|腹一杯[はらいっぱい]|sich satt essen, voller Bauch|夕食[ゆうしょく]を 腹一杯[はらいっぱい] 食[た]べた。|Ich habe mich beim Abendessen satt gegessen.|Adverb
肺|肺[はい]|Lunge|彼[かれ]は 肺[はい]の 病気[びょうき]にかかったのよ。|Er ist an der Lunge erkrankt.|Nomen
溶ける|溶[と]ける|schmelzen, sich auflösen|暑[あつ]さでアイスクリームが 溶[と]けてしまった。|In der Hitze ist das Eis geschmolzen.|Verb
溶かす|溶[と]かす|schmelzen, auflösen (etwas)|春[はる]の 太陽[たいよう]が 雪[ゆき]を 溶[と]かしました。|Die Frühlingssonne hat den Schnee geschmolzen.|Verb
まずい|まずい|ungünstig, unangenehm|今日中[きょうじゅう]に 返答[へんとう]しなければまずい。|Wenn ich nicht heute noch antworte, wird es unangenehm.|Adjektiv
容易|容易[ようい]|leicht, einfach|彼[かれ]はその 問題[もんだい]を 容易[ようい]に 解決[かいけつ]したわ。|Er hat das Problem mühelos gelöst.|な-Adjektiv
容器|容器[ようき]|Behälter|容器[ようき]のふたはきちんと 閉[し]めましょう。|Verschließen wir die Behälter ordentlich.|Nomen
滑らか|滑[なめ]らか|glatt, geschmeidig|この 生地[きじ]は 滑[なめ]らかな 手触[てざわ]りが 特長[とくちょう]です。|Dieser Stoff zeichnet sich durch seine glatte Oberfläche aus.|Adjektiv
分析|分析[ぶんせき]|Analyse|今[いま]の 経済[けいざい]の 動[うご]きを 分析[ぶんせき]しています。|Wir analysieren die derzeitige Wirtschaftsentwicklung.|Nomen (mit する)
保健|保健[ほけん]|Gesundheitspflege|保健[ほけん] 室[しつ]で 少[すこ]し 休[やす]んだわ。|Ich habe mich im Krankenzimmer der Schule etwas ausgeruht.|Nomen
もむ|もむ|kneten, massieren|肩[かた]をもんでください。|Massieren Sie mir bitte die Schultern.|Verb
診る|診[み]る|untersuchen (ärztlich)|今日[きょう]、 医者[いしゃ]に 診[み]てもらいました。|Heute habe ich mich vom Arzt untersuchen lassen.|Verb
治療|治療[ちりょう]|medizinische Behandlung|今[いま]、 歯[は]を 治療[ちりょう]しています。|Ich lasse gerade meine Zähne behandeln.|Nomen (mit する)
毒|毒[どく]|Gift|飲[の]み 過[す]ぎは 体[からだ]に 毒[どく]ですよ。|Zu viel Alkohol ist Gift für den Körper.|Nomen
中毒|中毒[ちゅうどく]|Vergiftung; Sucht|そのホテルで 食[しょく] 中毒[ちゅうどく]が 発生[はっせい]したんだ。|In dem Hotel ist eine Lebensmittelvergiftung aufgetreten.|Nomen (mit する)
有毒|有毒[ゆうどく]|giftig|その 工場[こうじょう]は 有毒[ゆうどく]ガスを 出[だ]しているのね。|Diese Fabrik stößt giftige Gase aus.|な-Adjektiv
ばい菌|ばい 菌[きん]|Bakterien, Keime|傷口[きずぐち]にばい 菌[きん]が 入[はい]った。|In die Wunde sind Keime geraten.|Nomen
センター|センター|Zentrum, Zentrale|このセンターで 工場全体[こうじょう ぜんたい]を 管理[かんり]しています。|Von dieser Zentrale aus wird die ganze Fabrik gesteuert.|Nomen
不潔|不潔[ふけつ]|unsauber, unhygienisch|体[からだ]を 不潔[ふけつ]にしているとかゆくなりますよ。|Wenn man sich nicht sauber hält, fängt es an zu jucken.|な-Adjektiv
編集|編集[へんしゅう]|Redaktion, Bearbeitung|私[わたし]は 雑誌[ざっし]の 編集[へんしゅう]の 仕事[しごと]をしています。|Ich arbeite in der Redaktion einer Zeitschrift.|Nomen (mit する)
追放|追放[ついほう]|Verbannung, Ausweisung|彼[かれ]は 国外[こくがい]に 追放[ついほう]されました。|Er wurde des Landes verwiesen.|Nomen (mit する)
放射能|放射能[ほうしゃのう]|Radioaktivität|この 地区[ちく]は 放射能[ほうしゃのう]に 汚染[おせん]されたんだ。|Dieses Gebiet wurde radioaktiv verseucht.|Nomen
放す|放[はな]す|loslassen, freilassen|公園[こうえん]で 犬[いぬ]を 放[はな]したの。|Ich habe den Hund im Park frei laufen lassen.|Verb
ぞんざい|ぞんざい|grob, nachlässig, unhöflich|そんなぞんざいな 口[くち]のききかたはよくないよ。|So grob zu reden gehört sich nicht.|Adjektiv
放る|放[ほう]る|werfen; liegen lassen|ボールを 空中[くうちゅう]に 放[ほう]ったの。|Ich habe den Ball in die Luft geworfen.|Verb
無視|無視[むし]|Ignorieren, Missachtung|彼[かれ]の 意見[いけん]は 無視[むし]されたよ。|Seine Meinung wurde ignoriert.|Nomen (mit する)
服装|服装[ふくそう]|Kleidung, Aufmachung|そのパーティーはカジュアルな 服装[ふくそう]で 大丈夫[だいじょうぶ]です。|Zu der Party können Sie in legerer Kleidung kommen.|Nomen
振り仮名|振[ふ]り 仮名[がな]|Lesehilfe in Kana (Furigana)|名前[なまえ]に 振[ふ]り 仮名[がな]をつけてください。|Schreiben Sie bitte die Lesung in Kana zu Ihrem Namen.|Nomen
銅|銅[どう]|Kupfer|10 円玉[えんだま]は 銅[どう]でできています。|Die 10-Yen-Münze ist aus Kupfer.|Nomen
たんす|たんす|Kommode, Kleiderschrank|昨日[きのう]、たんすを 買[か]いました。|Gestern habe ich eine Kommode gekauft.|Nomen
悲劇|悲劇[ひげき]|Tragödie|あの 悲劇[ひげき]を 繰[く]り 返[かえ]してはいけない。|Diese Tragödie darf sich nicht wiederholen.|Nomen
団体|団体[だんたい]|Gruppe, Verband, Organisation|サッカーは 団体[だんたい] 競技[きょうぎ]です。|Fußball ist ein Mannschaftssport.|Nomen
団地|団地[だんち]|Wohnsiedlung|私[わたし]の 弟[おとうと]は 団地[だんち]に 住[す]んでいます。|Mein kleiner Bruder wohnt in einer Wohnsiedlung.|Nomen
美術|美術[びじゅつ]|bildende Kunst|弟[おとうと]は 美術[びじゅつ]を 専攻[せんこう]しています。|Mein kleiner Bruder studiert Kunst im Hauptfach.|Nomen
博士|博士[はくし]|Doktor (akademischer Grad)|彼[かれ]は 数学[すうがく]の 博士[はくし]だそうです。|Er soll einen Doktortitel in Mathematik haben.|Nomen
博士|博士[はかせ]|Doktor; Gelehrter, Experte|彼[かれ]は 物理学[ぶつりがく]の 博士[はかせ]です。|Er ist Doktor der Physik.|Nomen
チェンジ|チェンジ|Wechsel|坂道[さかみち]でギアーをチェンジしたよ。|Am Hang habe ich den Gang gewechselt.|Nomen (mit する)
展開|展開[てんかい]|Entwicklung, Entfaltung|話[はなし]の 展開[てんかい]についていけない。|Ich kann dem Verlauf der Geschichte nicht folgen.|Nomen (mit する)
発展|発展[はってん]|Entwicklung, Aufschwung|あの 会社[かいしゃ]は 目覚[めざま]しく 発展[はってん]しているね。|Diese Firma entwickelt sich bemerkenswert.|Nomen (mit する)
催す|催[もよお]す|veranstalten; verspüren|静[しず]かな 音楽[おんがく]で 眠気[ねむけ]を 催[もよお]したよ。|Bei der ruhigen Musik wurde ich schläfrig.|Verb
催し|催[もよお]し|Veranstaltung|学校[がっこう]の 催[もよお]しに 参加[さんか]しました。|Ich habe an einer Schulveranstaltung teilgenommen.|Nomen
典型的|典型的[てんけいてき]|typisch|彼女[かのじょ]は 典型的[てんけいてき]なイタリア 人[じん]です。|Sie ist eine typische Italienerin.|Adjektiv
つかまる|つかまる|sich festhalten|しっかりとつかまっていてください。|Halten Sie sich bitte gut fest.|Verb
典型|典型[てんけい]|Musterbeispiel, Prototyp|彼[かれ]は 職人[しょくにん]の 典型[てんけい]です。|Er ist das Musterbeispiel eines Handwerkers.|Nomen
百科事典|百科事典[ひゃっかじてん]|Enzyklopädie|めずらしい 猫[ねこ]について 百科事典[ひゃっかじてん]で 調[しら]べたの。|Ich habe in der Enzyklopädie etwas über eine seltene Katze nachgeschlagen.|Nomen
特殊|特殊[とくしゅ]|speziell, besonders|彼[かれ]は 特殊[とくしゅ]な 能力[のうりょく]を 持[も]っています。|Er hat besondere Fähigkeiten.|Adjektiv
微妙|微妙[びみょう]|heikel, feinsinnig, kaum merklich|彼[かれ]は 会社[かいしゃ]で 微妙[びみょう]な 立場[たちば]にあります。|Er ist in der Firma in einer heiklen Lage.|な-Adjektiv
免税|免税[めんぜい]|Steuerbefreiung, zollfrei|この 商品[しょうひん]は 免税[めんぜい]です。|Diese Ware ist zollfrei.|Nomen (mit する)
つながり|つながり|Verbindung, Zusammenhang|この 文[ぶん]のつながりはおかしいです。|Der Zusammenhang in diesem Satz stimmt nicht.|Nomen
免許|免許[めんきょ]|Lizenz, Führerschein|やっと 運転[うんてん] 免許[めんきょ]を 手[て]に 入[い]れたよ。|Endlich habe ich den Führerschein.|Nomen
動詞|動詞[どうし]|Verb|「 食[た]べる」は 動詞[どうし]です。|„Taberu“ ist ein Verb.|Nomen
名詞|名詞[めいし]|Substantiv, Nomen|「 学校」[がっこう]は 名詞[めいし]です。|„Gakkō“ ist ein Substantiv.|Nomen
副詞|副詞[ふくし]|Adverb|「ゆっくり 歩[ある]く」の「ゆっくり」は 副詞[ふくし]です。|In „yukkuri aruku“ ist „yukkuri“ ein Adverb.|Nomen
代名詞|代名詞[だいめいし]|Pronomen|「 彼」[かれ]は 代名詞[だいめいし]の 一[ひと]つです。|„Kare“ ist ein Pronomen.|Nomen
つながる|つながる|verbunden sein, zusammenhängen|電話[でんわ]がつながりません。|Ich bekomme keine Telefonverbindung.|Verb
伝統|伝統[でんとう]|Tradition|私[わたし]は 日本[にっぽん]の 伝統[でんとう]を 大切[たいせつ]にします。|Mir sind die Traditionen Japans wichtig.|Nomen
伝わる|伝[つた]わる|überliefert werden, sich verbreiten|漢字[かんじ]は 中国[ちゅうごく]から 伝[つた]わった。|Die Kanji kamen aus China.|Verb
伝説|伝説[でんせつ]|Legende, Sage|彼[かれ]は 数々[かずかず]の 伝説[でんせつ]を 残[のこ]しました。|Er hat zahlreiche Legenden hinterlassen.|Nomen
手伝い|手伝[てつだ]い|Hilfe, Helfer(in)|会議[かいぎ]の 準備[じゅんび]に 手伝[てつだ]いが 必要[ひつよう]です。|Für die Vorbereitung der Besprechung brauchen wir Hilfe.|Nomen
伝言|伝言[でんごん]|mündliche Nachricht|課長[かちょう]から 伝言[でんごん]があります。|Es gibt eine Nachricht vom Sektionsleiter.|Nomen (mit する)
伝染|伝染[でんせん]|Ansteckung, Übertragung|その 国[くに]ではコレラの 伝染[でんせん]が 蔓延[まんえん]しています。|In dem Land breitet sich die Cholera aus.|Nomen (mit する)
つばめ|つばめ|Schwalbe|つばめが 飛[と]んでいますね。|Da fliegen Schwalben.|Nomen
焼き鳥|焼[や]き 鳥[とり]|Yakitori (gegrillte Hähnchenspieße)|焼[や]き 鳥[とり]はビールに 合[あ]うな。|Yakitori passt gut zu Bier.|Nomen
鳴らす|鳴[な]らす|läuten, ertönen lassen|お 坊[ぼう]さんが 鐘[かね]を 鳴[な]らしていますね。|Der Mönch läutet die Glocke.|Verb
悲鳴|悲鳴[ひめい]|Schrei, Aufschrei|外[そと]から 悲鳴[ひめい]が 聞[き]こえたな。|Von draußen war ein Schrei zu hören.|Nomen
笑い声|笑[わら]い 声[ごえ]|Gelächter|部屋[へや]の 中[なか]から 笑[わら]い 声[ごえ]が 聞[き]こえた。|Aus dem Zimmer war Gelächter zu hören.|Nomen
泣き声|泣[な]き 声[ごえ]|Weinen, weinerliche Stimme|赤[あか]ちゃんの 泣[な]き 声[ごえ]が 聞[き]こえますね。|Man hört ein Baby weinen.|Nomen
つぶやく|つぶやく|murmeln|彼[かれ]は 一人[ひとり]で 何[なに]かつぶやいていたの。|Er murmelte etwas vor sich hin.|Verb
話し声|話[はな]し 声[ごえ]|Stimmen, Gespräch (hörbar)|隣[となり]の 部屋[へや]から 話[はな]し 声[ごえ]が 聞[き]こえます。|Aus dem Nebenzimmer sind Stimmen zu hören.|Nomen
駐車|駐車[ちゅうしゃ]|Parken|車[くるま]はここに 駐車[ちゅうしゃ]してください。|Parken Sie das Auto bitte hier.|Nomen (mit する)
騒音|騒音[そうおん]|Lärm|窓[まど]から 車[くるま]の 騒音[そうおん]が 入[はい]って 来[き]ます。|Durch das Fenster dringt Autolärm herein.|Nomen
騒動|騒動[そうどう]|Aufruhr, Tumult|警察[けいさつ]がやって 来[き]て 騒動[そうどう]を 静[しず]めたんだ。|Die Polizei kam und beruhigte den Tumult.|Nomen
騒々しい|騒々[そうぞう]しい|laut, lärmend|隣[となり]の 家[いえ]はいつも 騒々[そうぞう]しい。|Im Haus nebenan ist es immer laut.|Adjektiv
つぶる|つぶる|schließen (Augen)|目[め]をつぶってください。|Schließen Sie bitte die Augen.|Verb
名刺|名刺[めいし]|Visitenkarte|私[わたし]たちは 名刺[めいし]を 交換[こうかん]しました。|Wir haben Visitenkarten ausgetauscht.|Nomen
到着|到着[とうちゃく]|Ankunft|夜9時[よる 9 じ]に 東京[とうきょう]に 到着[とうちゃく]しました。|Ich bin um neun Uhr abends in Tokio angekommen.|Nomen (mit する)
到達|到達[とうたつ]|Erreichen, Gelangen|ついに 山頂[さんちょう]に 到達[とうたつ]しました。|Endlich haben wir den Gipfel erreicht.|Nomen (mit する)
倒産|倒産[とうさん]|Konkurs, Insolvenz|会社[かいしゃ]が 倒産[とうさん]しました。|Die Firma ist pleitegegangen.|Nomen (mit する)
面倒|面倒[めんどう]|lästig, mühsam; Fürsorge|会社[かいしゃ]で 面倒[めんどう]なことが 起[お]こったの。|In der Firma ist etwas Lästiges passiert.|な-Adjektiv
斜め|斜[なな]め|schräg, diagonal|ここに 斜[なな]めに 線[せん]を 引[ひ]いてください。|Ziehen Sie hier bitte eine schräge Linie.|な-Adjektiv
つぼみ|つぼみ|Knospe|花[はな]のつぼみがたくさんついていますね。|Da sind viele Blütenknospen dran.|Nomen
柔らかい|柔[やわ]らかい|weich, sanft|柔[やわ]らかい 日差[ひざ]しが 気持[きも]ちいいね。|Das sanfte Sonnenlicht ist angenehm.|Adjektiv
張る|張[は]る|spannen; verspannt sein|疲[つか]れて 肩[かた]が 張[は]っています。|Vor Müdigkeit sind meine Schultern verspannt.|Verb
張り切る|張[は]り 切[き]る|voller Eifer sein, sich ins Zeug legen|母[はは]は 張[は]り 切[き]ってお 弁当[べんとう]を 用意[ようい]したの。|Meine Mutter hat sich bei der Lunchbox ins Zeug gelegt.|Verb
欲張り|欲張[よくば]り|Gier, gierig|彼女[かのじょ]は 欲張[よくば]りです。|Sie ist gierig.|な-Adjektiv
突然|突然[とつぜん]|plötzlich|彼[かれ]は 突然[とつぜん] 走[はし]り 出[だ]したのよ。|Er fing plötzlich an zu rennen.|Adverb
つまずく|つまずく|stolpern|石[いし]につまずきました。|Ich bin über einen Stein gestolpert.|Verb
突っ込む|突[つ]っ 込[こ]む|hineinstecken, hineinstoßen; hineinrasen|ポケットに 財布[さいふ]を 突[つ]っ 込[こ]んじゃった。|Ich habe das Portemonnaie in die Tasche gestopft.|Verb
突く|突[つ]く|stoßen, stechen|彼[かれ]はビリヤードの 球[たま]を 上手[じょうず]に 突[つ]くね。|Er stößt die Billardkugeln geschickt.|Verb
追突|追突[ついとつ]|Auffahrunfall|バスが 乗用車[じょうようしゃ]に 追突[ついとつ]したよ。|Ein Bus ist auf einen Pkw aufgefahren.|Nomen (mit する)
触れる|触[ふ]れる|berühren, in Berührung kommen|手[て]と 手[て]が 触[ふ]れてどきどきしたよ。|Unsere Hände berührten sich und mein Herz klopfte.|Verb
避難|避難[ひなん]|Evakuierung, Zuflucht|危[あぶ]ないので 避難[ひなん]してください。|Es ist gefährlich, bringen Sie sich bitte in Sicherheit.|Nomen (mit する)
ツル|ツル|Kranich|湖[みずうみ]にツルがいますよ。|Auf dem See sind Kraniche.|Nomen
墜落|墜落[ついらく]|Absturz|飛行機[ひこうき]の 墜落[ついらく] 事故[じこ]があったんだ。|Es gab einen Flugzeugabsturz.|Nomen (mit する)
兵士|兵士[へいし]|Soldat(in)|その 爆撃[ばくげき]で 兵士[へいし]が 3人負傷[さんにん ふしょう]しました。|Bei dem Bombenangriff wurden drei Soldaten verletzt.|Nomen
兵器|兵器[へいき]|Waffe, Kriegsgerät|あの 国[くに]は 強力[きょうりょく]な 兵器[へいき]を 持[も]っている。|Das Land besitzt mächtige Waffen.|Nomen
兵隊|兵隊[へいたい]|Soldat, Truppe|兵隊[へいたい]が 銃[じゅう]をかまえていたよ。|Die Soldaten hielten ihre Gewehre im Anschlag.|Nomen
武器|武器[ぶき]|Waffe|彼[かれ]らは 武器[ぶき]を 取[と]り、 立[た]ち 上[あ]がった。|Sie griffen zu den Waffen und erhoben sich.|Nomen
武士|武士[ぶし]|Samurai, Krieger|彼[かれ]の 家柄[いえがら]は 武士[ぶし]でした。|Er stammt aus einer Samurai-Familie.|Nomen
でこぼこ|でこぼこ|uneben, holprig|この 道[みち]はでこぼこしていますね。|Diese Straße ist holprig.|Nomen (mit する)
弾|弾[たま]|Kugel, Geschoss|彼[かれ]はピストルに 弾[たま]を 込[こ]めたんだ。|Er hat die Pistole geladen.|Nomen
弾む|弾[はず]む|federn, hüpfen; in Schwung kommen|このボールはよく 弾[はず]みますね。|Dieser Ball springt gut.|Verb
日の丸|日[ひ]の 丸[まる]|Sonnenbanner (japanische Flagge)|日本[にっぽん]の 国旗[こっき]は 日[ひ]の 丸[まる]と 呼[よ]ばれています。|Die japanische Flagge wird Hinomaru genannt.|Nomen
真ん丸|真[ま]ん 丸[まる]|kreisrund|今日[きょう]は 月[つき]が 真[ま]ん 丸[まる]です。|Heute ist der Mond kreisrund.|な-Adjektiv
爆発|爆発[ばくはつ]|Explosion|ダイナマイトが 爆発[ばくはつ]したんだ。|Das Dynamit ist explodiert.|Nomen (mit する)
てのひら|てのひら|Handfläche|てのひらに 汗[あせ]をかきました。|Meine Handflächen schwitzen.|Nomen
爆弾|爆弾[ばくだん]|Bombe|その 町[まち]に 爆弾[ばくだん]が 落[お]とされたの。|Auf die Stadt wurden Bomben abgeworfen.|Nomen
暴落|暴落[ぼうらく]|Kurssturz, Preisverfall|昨日株価[きのう かぶか]が 暴落[ぼうらく]しました。|Gestern sind die Aktienkurse abgestürzt.|Nomen (mit する)
暴力|暴力[ぼうりょく]|Gewalt|暴力[ぼうりょく]はいけません。|Gewalt ist nicht in Ordnung.|Nomen
乱暴|乱暴[らんぼう]|Gewalttätigkeit, Grobheit|人[ひと]に 乱暴[らんぼう]してはいけません。|Man darf anderen keine Gewalt antun.|Nomen (mit する)
絶えず|絶[た]えず|unaufhörlich, ständig|今日[きょう]は 絶[た]えず 電話[でんわ]が 鳴[な]りました。|Heute hat ununterbrochen das Telefon geklingelt.|Adverb
とがる|とがる|spitz sein|この 鉛筆[えんぴつ]はとがっていますね。|Dieser Bleistift ist spitz.|Verb
滅びる|滅[ほろ]びる|untergehen, zugrunde gehen|その 文明[ぶんめい]は 何千年[なんぜんねん]も 前[まえ]に 滅[ほろ]びてしまったの。|Diese Zivilisation ist vor Jahrtausenden untergegangen.|Verb
防ぐ|防[ふせ]ぐ|verhindern, abwehren|怪我[けが]を 防[ふせ]ぐためによくストレッチをしてください。|Dehnen Sie sich gut, um Verletzungen vorzubeugen.|Verb
防衛|防衛[ぼうえい]|Verteidigung|チャンピオンがタイトルを 防衛[ぼうえい]した。|Der Champion hat seinen Titel verteidigt.|Nomen (mit する)
防止|防止[ぼうし]|Verhütung, Verhinderung|警察[けいさつ]は 犯罪[はんざい]の 防止[ぼうし]に 努[つと]めています。|Die Polizei bemüht sich, Verbrechen zu verhindern.|Nomen (mit する)
予防|予防[よぼう]|Vorbeugung|虫歯[むしば]は 予防[よぼう]できます。|Karies lässt sich vorbeugen.|Nomen (mit する)
とんかつ|とんかつ|paniertes Schweineschnitzel (Tonkatsu)|昼食[ちゅうしょく]にとんかつを 食[た]べました。|Zum Mittagessen habe ich Tonkatsu gegessen.|Nomen
防火|防火[ぼうか]|Brandschutz|学校[がっこう]で 防火[ぼうか] 訓練[くんれん]がありました。|In der Schule gab es eine Brandschutzübung.|Nomen
妨害|妨害[ぼうがい]|Behinderung, Störung|彼[かれ]に 営業[えいぎょう]を 妨害[ぼうがい]されました。|Er hat mein Geschäft behindert.|Nomen (mit する)
不機嫌|不機嫌[ふきげん]|schlechte Laune|この 頃[ごろ]、あの 人[ひと]は 不機嫌[ふきげん]ですね。|In letzter Zeit ist er schlecht gelaunt.|な-Adjektiv
徹夜|徹夜[てつや]|die Nacht durchmachen|ゆうべは 徹夜[てつや]しました。|Letzte Nacht habe ich durchgemacht.|Nomen
底|底[そこ]|Boden, Grund|コップの 底[そこ]が 濡[ぬ]れていますよ。|Der Boden des Glases ist nass.|Nomen
徹底的|徹底的[てっていてき]|gründlich, konsequent|部屋[へや]の 中[なか]を 徹底的[てっていてき]に 探[さが]しました。|Ich habe das Zimmer gründlich durchsucht.|Adjektiv
どんなに|どんなに|wie sehr|彼女[かのじょ]はどんなに 嬉[うれ]しかったろう。|Wie sehr sie sich gefreut haben muss!|Adverb
到底|到底[とうてい]|auf keinen Fall, unmöglich (mit Verneinung)|今夜中[こんやじゅう]に 東京[とうきょう]に 着[つ]くのは 到底[とうてい] 無理[むり]でしょう。|Heute Nacht noch in Tokio anzukommen ist völlig unmöglich.|Adverb
抵抗|抵抗[ていこう]|Widerstand|犯人[はんにん]は 警察[けいさつ]に 抵抗[ていこう]したの。|Der Täter hat der Polizei Widerstand geleistet.|Nomen (mit する)
敵|敵[てき]|Feind, Gegner|あそこに 敵[てき]がひそんでいる。|Dort drüben lauert der Feind.|Nomen
態勢|態勢[たいせい]|Bereitschaft, Aufstellung|作業[さぎょう]を 始[はじ]める 態勢[たいせい]は 整[ととの]っています。|Alles ist bereit, um mit der Arbeit zu beginnen.|Nomen
体系|体系[たいけい]|System, Aufbau|勤務[きんむ]の 体系[たいけい]を 見直[みなお]すことにしました。|Wir haben beschlossen, das Arbeitszeitsystem zu überprüfen.|Nomen
なめる|なめる|lecken; unterschätzen|犬[いぬ]に 顔[かお]をなめられました。|Der Hund hat mir das Gesicht geleckt.|Verb
理系|理系[りけい]|naturwissenschaftliche Richtung|彼[かれ]は 理系[りけい]の 学生[がくせい]です。|Er studiert ein naturwissenschaftliches Fach.|Nomen
文系|文系[ぶんけい]|geisteswissenschaftliche Richtung|彼女[かのじょ]は 文系[ぶんけい]です。|Sie ist Geisteswissenschaftlerin.|Nomen
綿|綿[めん]|Baumwolle|私[わたし]は 綿[めん]のシャツをよく 着[き]ます。|Ich trage oft Baumwollhemden.|Nomen
繁栄|繁栄[はんえい]|Wohlstand, Blüte|あの 国[くに]は 経済的[けいざいてき]に 繁栄[はんえい]しているわね。|Das Land blüht wirtschaftlich.|Nomen (mit する)
日韓|日韓[にっかん]|Japan und Südkorea|日韓[にっかん] 合同[ごうどう]のコンサートが 開[ひら]かれたよ。|Es fand ein gemeinsames japanisch-koreanisches Konzert statt.|Nomen
にらむ|にらむ|anstarren, böse ansehen|彼女[かのじょ]は 私[わたし]をにらんだの。|Sie hat mich böse angesehen.|Verb
耐える|耐[た]える|aushalten, standhalten|このビルは 大地震[おおじしん]に 耐[た]えられるでしょうか。|Ob dieses Gebäude einem großen Erdbeben standhält?|Verb
矢印|矢印[やじるし]|Pfeil (Zeichen)|矢印[やじるし]にそって 歩[ある]いてください。|Gehen Sie bitte den Pfeilen nach.|Nomen
爪切り|爪切[つめき]り|Nagelknipser|爪切[つめき]りを 取[と]ってください。|Reich mir bitte den Nagelknipser.|Nomen
枠|枠[わく]|Rahmen, Kasten|枠[わく]の 中[なか]に 答[こた]えを 書[か]いてください。|Schreiben Sie die Antwort bitte in das Kästchen.|Nomen
棒|棒[ぼう]|Stab, Stock|この 棒[ぼう]は 何[なに]に 使[つか]うのですか。|Wofür benutzt man diesen Stab?|Nomen
人柄|人柄[ひとがら]|Wesen, Charakter|みんな 彼[かれ]の 温[あたた]かい 人柄[ひとがら]が 大好[だいす]きだよ。|Alle lieben sein warmherziges Wesen.|Nomen
ねずみ|ねずみ|Maus, Ratte|台所[だいどころ]にねずみが 出[で]た。|In der Küche war eine Maus.|Nomen
詰める|詰[つ]める|hineinstopfen, packen|かばんに 荷物[にもつ]を 詰[つ]めました。|Ich habe meine Sachen in die Tasche gepackt.|Verb
詰まる|詰[つ]まる|verstopft sein, vollgestopft sein|プリンタのインクが 詰[つ]まってしまいました。|Die Tinte des Druckers ist verstopft.|Verb
譲る|譲[ゆず]る|überlassen, abtreten; nachgeben|上司[じょうし]が 車[くるま]を 譲[ゆず]ってくれたの。|Mein Chef hat mir sein Auto überlassen.|Verb
誠に|誠[まこと]に|wirklich, aufrichtig (förmlich)|誠[まこと]にありがとうございます。|Haben Sie vielen herzlichen Dank.|Adverb
盛り上げる|盛[も]り 上[あ]げる|in Stimmung bringen, anheizen|応援団[おうえんだん]が 試合[しあい]を 盛[も]り 上[あ]げたんだ。|Die Fangruppe hat das Spiel angeheizt.|Verb
のぞく|のぞく|hineinschauen, spähen|ドアの 隙間[すきま]から 中[なか]をのぞいたんだ。|Ich habe durch den Türspalt hineingespäht.|Verb
盛り上がる|盛[も]り 上[あ]がる|in Stimmung kommen; sich aufwölben|昨夜[さくや]のパーティはとても 盛[も]り 上[あ]がったな。|Die Party gestern Abend war sehr ausgelassen.|Verb
盛る|盛[も]る|aufhäufen, füllen (Schale)|ご 飯[はん]を 盛[も]ってください。|Füllen Sie bitte Reis auf.|Verb
針|針[はり]|Nadel|母[はは]は 糸[いと]を 針[はり]に 通[とお]した。|Meine Mutter fädelte den Faden in die Nadel.|Nomen
釣り|釣[つ]り|Angeln|父[ちち]は 釣[つ]りが 大好[だいす]きです。|Mein Vater angelt sehr gern.|Nomen
釣り合い|釣[つ]り 合[あ]い|Gleichgewicht, Ausgewogenheit|この 紙飛行機[かみひこうき]は 左右[さゆう]の 釣[つ]り 合[あ]いがとれていないな。|Dieser Papierflieger ist links und rechts nicht im Gleichgewicht.|Nomen
のんき|のんき|sorglos, unbekümmert|彼[かれ]はずいぶんのんきなやつだ。|Er ist ein ziemlich unbekümmerter Kerl.|な-Adjektiv
釣り合う|釣[つ]り 合[あ]う|im Gleichgewicht sein, zusammenpassen|収入[しゅうにゅう]と 支出[ししゅつ]が 釣[つ]り 合[あ]っていない。|Einnahmen und Ausgaben halten sich nicht die Waage.|Verb
鈍い|鈍[にぶ]い|stumpf, träge, langsam|今日[きょう]は 頭[あたま]の 回転[かいてん]が 鈍[にぶ]いです。|Heute arbeitet mein Kopf langsam.|Adjektiv
鈍感|鈍感[どんかん]|unsensibel, begriffsstutzig|あの 人[ひと]は 少[すこ]し 鈍感[どんかん]だと 思[おも]います。|Ich finde, er ist etwas unsensibel.|な-Adjektiv
谷|谷[たに]|Tal|その 村[むら]は 深[ふか]い 谷[たに]にあるの。|Das Dorf liegt in einem tiefen Tal.|Nomen
余裕|余裕[よゆう]|Spielraum, Reserve, Gelassenheit|出発[しゅっぱつ]まで 時間[じかん]の 余裕[よゆう]があります。|Bis zur Abfahrt ist noch reichlich Zeit.|Nomen
入浴|入浴[にゅうよく]|Baden|私[わたし]は 毎日寝[まいにち ね]る 前[まえ]に 入浴[にゅうよく]します。|Ich bade jeden Tag vor dem Schlafengehen.|Nomen (mit する)
はえ|はえ|Fliege|はえがうるさく 飛[と]んでいるね。|Eine Fliege schwirrt lästig herum.|Nomen
沿う|沿[そ]う|entlanglaufen, folgen|川[かわ]に 沿[そ]って 歩[ある]いたんだ。|Ich bin am Fluss entlanggegangen.|Verb
浜|浜[はま]|Strand|今晩[こんばん]、 浜[はま]で 花火大会[はなび たいかい]がありますよ。|Heute Abend gibt es am Strand ein Feuerwerk.|Nomen
浜辺|浜辺[はまべ]|Strand, Küste|浜辺[はまべ]できれいな 貝[かい]がらを 拾[ひろ]いました。|Ich habe am Strand eine schöne Muschel aufgesammelt.|Nomen
湾|湾[わん]|Bucht, Golf|東京[とうきょう] 湾[わん]は 重要[じゅうよう]な 役割[やくわり]を 果[は]たしている。|Die Bucht von Tokio spielt eine wichtige Rolle.|Nomen
潜る|潜[もぐ]る|tauchen; hineinkriechen|彼[かれ]は 長[なが]い 間海[あいだ うみ]に 潜[もぐ]っていたの。|Er ist lange im Meer getaucht.|Verb
ばかばかしい|ばかばかしい|albern, lächerlich|ばかばかしい 映画[えいが]だが 面白[おもしろ]かった。|Es war ein alberner Film, aber er war unterhaltsam.|Adjektiv
冷淡|冷淡[れいたん]|kalt, gleichgültig|彼[かれ]は 彼女[かのじょ]に 冷淡[れいたん]な 態度[たいど]をとったね。|Er hat sich ihr gegenüber kalt verhalten.|な-Adjektiv
泥|泥[どろ]|Schlamm|靴[くつ]が 泥[どろ]だらけになったよ。|Die Schuhe sind voller Schlamm.|Nomen
濁る|濁[にご]る|trüb werden|その 池[いけ]の 水[みず]は 濁[にご]っているね。|Das Wasser dieses Teichs ist trüb.|Verb
湯飲み|湯飲[ゆの]み|Teebecher|湯飲[ゆの]みにはお 茶[ちゃ]を 入[い]れてお 茶碗[ちゃわん]にはご 飯[はん]をよそいます。|In den Teebecher kommt Tee, in die Reisschale Reis.|Nomen
湯気|湯気[ゆげ]|Dampf|やかんから 湯気[ゆげ]が 出[で]ていますよ。|Aus dem Kessel steigt Dampf.|Nomen
はかり|はかり|Waage|ケーキを 作[つく]る 時[とき]ははかりを 使[つか]います。|Beim Kuchenbacken benutze ich eine Waage.|Nomen
漏れる|漏[も]れる|auslaufen, durchsickern|彼[かれ]のヘッドフォンから 音[おと]が 漏[も]れているね。|Aus seinen Kopfhörern dringt Ton nach außen.|Verb
漏らす|漏[も]らす|durchsickern lassen, verraten|秘密[ひみつ]を 漏[も]らしたのは 彼[かれ]です。|Er war es, der das Geheimnis verraten hat.|Verb
漏る|漏[も]る|undicht sein, lecken|天井[てんじょう]から 雨[あめ]が 漏[も]るの。|Durch die Decke tropft Regen.|Verb
濡らす|濡[ぬ]らす|nass machen|携帯電話[けいたい でんわ]を 水[みず]で 濡[ぬ]らしてしまったんだ。|Mein Handy ist mir nass geworden.|Verb
溝|溝[みぞ]|Graben, Rille|車[くるま]が 溝[みぞ]にはまったの。|Das Auto ist im Graben stecken geblieben.|Nomen
はしご|はしご|Leiter|はしごを 使[つか]って 屋根[やね]に 上[のぼ]りました。|Ich bin mit einer Leiter aufs Dach gestiegen.|Nomen
吐く|吐[は]く|ausspucken, erbrechen; ausstoßen|彼[かれ]は 乱暴[らんぼう]な 言葉[ことば]を 吐[は]いたぞ。|Er stieß grobe Worte aus.|Verb
嘆く|嘆[なげ]く|klagen, jammern|嘆[なげ]いていても 何[なに]も 変[か]わりません。|Vom Jammern ändert sich nichts.|Verb
虫歯|虫歯[むしば]|kariöser Zahn, Karies|虫歯[むしば]は 予防[よぼう]できます。|Karies lässt sich vorbeugen.|Nomen
虫|虫[むし]|Insekt, Käfer, Wurm|庭[にわ]で 秋[あき]の 虫[むし]が 鳴[な]いているね。|Im Garten zirpen die Herbstinsekten.|Nomen
忠実|忠実[ちゅうじつ]|treu, getreu|犬[いぬ]は 飼[か]い 主[ぬし]に 忠実[ちゅうじつ]です。|Hunde sind ihrem Halter treu.|な-Adjektiv
忠告|忠告[ちゅうこく]|Rat, Ermahnung|先生[せんせい]からの 忠告[ちゅうこく]を 聞[き]くべきだよ。|Du solltest auf den Rat des Lehrers hören.|Nomen (mit する)
はだし|はだし|barfuß|砂浜[すなはま]をはだしでかけ 回[まわ]ったんだ。|Ich bin barfuß über den Strand gerannt.|Nomen
恵まれる|恵[めぐ]まれる|gesegnet sein, begünstigt sein|当日[とうじつ]は 天気[てんき]に 恵[めぐ]まれました。|An dem Tag hatten wir Glück mit dem Wetter.|Verb
道徳|道徳[どうとく]|Moral, Ethik|子供[こども]には 道徳[どうとく]をきちんと 教[おし]えていきたいと 思[おも]います。|Ich möchte meinen Kindern Moral ordentlich vermitteln.|Nomen
直径|直径[ちょっけい]|Durchmesser|この 円[えん]は 直径[ちょっけい]6センチです。|Dieser Kreis hat einen Durchmesser von sechs Zentimetern.|Nomen
半径|半径[はんけい]|Radius|この 円[えん]の 半径[はんけい]は5センチです。|Der Radius dieses Kreises beträgt fünf Zentimeter.|Nomen
丼|丼[どんぶり]|große Schale; Reisschalengericht|彼[かれ]はご 飯[はん]を 丼[どんぶり]で 食[た]べたよ。|Er hat den Reis aus einer großen Schale gegessen.|Nomen
バツ|バツ|Kreuz (Zeichen für falsch)|バツが 三[みっ]つあるので85 点[てん]です。|Es sind drei Fehler, also 85 Punkte.|Nomen
豆|豆[まめ]|Bohne, Erbse|今[いま]、 豆[まめ]を 煮[に]ています。|Ich koche gerade Bohnen.|Nomen
粒|粒[つぶ]|Korn, Tropfen|その 子[こ]は 大[おお] 粒[つぶ]の 涙[なみだ]を 浮[う]かべていたの。|Dem Kind standen dicke Tränen in den Augen.|Nomen
麦|麦[むぎ]|Getreide (Weizen, Gerste)|この 畑[はたけ]では 麦[むぎ]を 作[つく]っています。|Auf diesem Feld wird Getreide angebaut.|Nomen
田畑|田畑[たはた]|Felder und Reisfelder|この 村[むら]には 田畑[たはた]がたくさんあります。|In diesem Dorf gibt es viele Felder.|Nomen
灯油|灯油[とうゆ]|Kerosin, Heizöl|ストーブの 灯油[とうゆ]がなくなったわよ。|Das Kerosin für den Ofen ist alle.|Nomen
はねる|はねる|anfahren; springen, spritzen|彼[かれ]は 車[くるま]にはねられたけど 無事[ぶじ]だったの。|Er wurde von einem Auto angefahren, blieb aber unverletzt.|Verb
電灯|電灯[でんとう]|elektrisches Licht, Lampe|午後5時[ごご 5 じ]には 電灯[でんとう]がつきます。|Um 17 Uhr geht das Licht an.|Nomen
炎|炎[ほのお]|Flamme|ろうそくの 炎[ほのお]が 部屋[へや]を 照[て]らしたんだ。|Die Kerzenflamme erhellte das Zimmer.|Nomen
皮肉|皮肉[ひにく]|Ironie, Sarkasmus|彼[かれ]は 皮肉[ひにく]ばかり 言[い]います。|Er macht nur sarkastische Bemerkungen.|な-Adjektiv
皮膚|皮膚[ひふ]|Haut|冬[ふゆ]は 皮膚[ひふ]が 乾燥[かんそう]しますね。|Im Winter trocknet die Haut aus.|Nomen
臭い|臭[にお]い|Geruch, Gestank|ここはいやな 臭[にお]いがする。|Hier riecht es unangenehm.|Nomen
生臭い|生臭[なまぐさ]い|nach rohem Fisch riechend|まな 板[いた]が 生臭[なまぐさ]いです。|Das Schneidebrett riecht fischig.|Adjektiv
はれる|はれる|anschwellen|今朝[けさ]は 目[め]がはれています。|Heute Morgen sind meine Augen geschwollen.|Verb
臭う|臭[にお]う|riechen, stinken|流[なが]しが 臭[にお]うのできれいにしたよ。|Die Spüle roch, deshalb habe ich sie sauber gemacht.|Verb
面倒臭い|面倒臭[めんどうくさ]い|lästig, mühsam|この 計算[けいさん]は 面倒臭[めんどうくさ]いなあ。|Diese Rechnung ist lästig.|Adjektiv
匂う|匂[にお]う|duften, riechen|バラの 花[はな]が 甘[あま]く 匂[にお]っているね。|Die Rosen duften süß.|Verb
同居|同居[どうきょ]|Zusammenwohnen|私[わたし]はまだ 両親[りょうしん]と 同居[どうきょ]しています。|Ich wohne noch bei meinen Eltern.|Nomen (mit する)
掘る|掘[ほ]る|graben|ここに 穴[あな]を 掘[ほ]りましょう。|Graben wir hier ein Loch.|Verb
ひく|ひく|überfahren|車[くるま]にひかれないよう 気[き]をつけなさい。|Pass auf, dass du nicht überfahren wirst.|Verb
塀|塀[へい]|Zaun, Mauer|猫[ねこ]が 塀[へい]の 上[うえ]で 寝[ね]ているぞ。|Auf der Mauer schläft eine Katze.|Nomen
大層|大層[たいそう]|sehr, außerordentlich|彼[かれ]は 大層[たいそう] 喜[よろこ]んでいました。|Er hat sich außerordentlich gefreut.|Adverb
履歴|履歴[りれき]|Verlauf, Werdegang|最近使[さいきん つか]ったファイルは、 履歴[りれき]からすぐ 開[ひら]けます。|Zuletzt verwendete Dateien lassen sich gleich über den Verlauf öffnen.|Nomen
履歴書|履歴書[りれきしょ]|Lebenslauf|面接[めんせつ]のために 履歴書[りれきしょ]を 書[か]きました。|Ich habe für das Vorstellungsgespräch einen Lebenslauf geschrieben.|Nomen
履物|履物[はきもの]|Schuhwerk|履物[はきもの]は 靴箱[くつばこ]に 入[い]れてください。|Stellen Sie Ihre Schuhe bitte ins Schuhregal.|Nomen
ヒント|ヒント|Hinweis, Tipp|何[なに]かヒントをください。|Geben Sie mir bitte einen Hinweis.|Nomen
戸棚|戸棚[とだな]|Schrank|この 皿[さら]を 戸棚[とだな]にしまってください。|Räumen Sie diesen Teller bitte in den Schrank.|Nomen
扉|扉[とびら]|Tür, Torflügel|彼[かれ]は 扉[とびら]を 開[あ]けたんだ。|Er öffnete die Tür.|Nomen
羽根|羽根[はね]|Feder|このペンは 鳥[とり]の 羽根[はね]で 作[つく]られています。|Dieser Stift ist aus einer Vogelfeder gemacht.|Nomen
翌日|翌日[よくじつ]|der folgende Tag|翌日[よくじつ]、 彼[かれ]に 会[あ]いに 行[い]きました。|Am nächsten Tag bin ich ihn besuchen gegangen.|Nomen
翌朝|翌朝[よくあさ]|der folgende Morgen|翌朝[よくあさ]は 快晴[かいせい]だったね。|Am nächsten Morgen war strahlendes Wetter.|Nomen
翌年|翌年[よくねん]|das folgende Jahr|彼女[かのじょ]は 大学卒業[だいがく そつぎょう]の 翌年[よくねん]に 結婚[けっこん]したの。|Sie hat im Jahr nach dem Universitätsabschluss geheiratet.|Nomen
ファックス|ファックス|Fax|詳細[しょうさい]はファックスで 送[おく]ります。|Die Einzelheiten schicke ich per Fax.|Nomen
群れ|群[む]れ|Schar, Herde, Schwarm|湖[みずうみ]に 鳥[とり]の 群[む]れがいたよ。|Auf dem See war ein Vogelschwarm.|Nomen
殴る|殴[なぐ]る|schlagen, prügeln|彼[かれ]は 思[おも]わず 友人[ゆうじん]を 殴[なぐ]ったの。|Er hat unwillkürlich seinen Freund geschlagen.|Verb
要旨|要旨[ようし]|Kernaussage, Zusammenfassung|会議[かいぎ]の 要旨[ようし]は 次[つぎ]の 通[とお]りです。|Die Zusammenfassung der Besprechung lautet wie folgt.|Nomen
肌|肌[はだ]|Haut|彼女[かのじょ]は 肌[はだ]がとても 白[しろ]いですね。|Sie hat sehr helle Haut.|Nomen
肌着|肌着[はだぎ]|Unterwäsche|寒[さむ]いので 暖[あたた]かい 肌着[はだぎ]を 着[き]ました。|Es war kalt, deshalb habe ich warme Unterwäsche angezogen.|Nomen
ふもと|ふもと|Fuß eines Berges|彼[かれ]は 山[やま]のふもとに 住[す]んでいるよ。|Er wohnt am Fuß eines Berges.|Nomen
肌色|肌色[はだいろ]|Hautfarbe, hautfarben|彼女[かのじょ]は 肌色[はだいろ]のシャツを 着[き]ています。|Sie trägt ein hautfarbenes Hemd.|Nomen
腸|腸[ちょう]|Darm|彼[かれ]は 腸[ちょう]の 手術[しゅじゅつ]を 受[う]けたの。|Er wurde am Darm operiert.|Nomen
大胆|大胆[だいたん]|kühn, gewagt|彼女[かのじょ]はずいぶん 大胆[だいたん]なことを 言[い]うね。|Sie sagt ziemlich gewagte Dinge.|な-Adjektiv
幕|幕[まく]|Vorhang (Bühne)|ステージの 幕[まく]が 上[あ]がったんだ。|Der Bühnenvorhang hob sich.|Nomen
夕暮れ|夕暮[ゆうぐ]れ|Abenddämmerung|夕暮[ゆうぐ]れの 空[そら]がきれいですね。|Der Himmel in der Abenddämmerung ist schön.|Nomen
フルーツ|フルーツ|Obst, Frucht|おいしそうなフルーツゼリーだね。|Das ist ein lecker aussehendes Fruchtgelee.|Nomen
墓|墓[はか]|Grab|祖父[そふ]の 墓[はか]は 近[ちか]くにあります。|Das Grab meines Großvaters ist in der Nähe.|Nomen
墓地|墓地[ぼち]|Friedhof|寺[てら]のとなりに 墓地[ぼち]があります。|Neben dem Tempel ist ein Friedhof.|Nomen
墓参り|墓参[はかまい]り|Grabbesuch|明日[あした]は 家族[かぞく]で 墓参[はかまい]りに 行[い]きます。|Morgen besuchen wir mit der Familie das Grab.|Nomen (mit する)
芽|芽[め]|Keim, Spross|チューリップの 芽[め]が 出[で]ました。|Die Tulpen treiben aus.|Nomen
葬式|葬式[そうしき]|Beerdigung, Trauerfeier|彼[かれ]の 葬式[そうしき]は 明日[あした]です。|Seine Beerdigung ist morgen.|Nomen
へそ|へそ|Bauchnabel|カエルにはへそがないんだ。|Frösche haben keinen Bauchnabel.|Nomen
礼儀|礼儀[れいぎ]|Höflichkeit, Anstand|彼女[かのじょ]は 礼儀[れいぎ]が 身[み]に 付[つ]いています。|Sie hat gute Manieren verinnerlicht.|Nomen
憎む|憎[にく]む|hassen|彼[かれ]はもう 彼女[かのじょ]を 憎[にく]んではいないよ。|Er hasst sie nicht mehr.|Verb
憎しみ|憎[にく]しみ|Hass|彼[かれ]の 心[こころ]は 憎[にく]しみに 満[み]ちていたんだ。|Sein Herz war voller Hass.|Nomen
憎らしい|憎[にく]らしい|abscheulich, ärgerlich|妹[いもうと]は 時々[ときどき] 憎[にく]らしいことを 言[い]うんだ。|Meine kleine Schwester sagt manchmal gemeine Sachen.|Adjektiv
憎い|憎[にく]い|verhasst|彼[かれ]が 憎[にく]いですか。|Hasst du ihn?|Adjektiv
仏|仏[ほとけ]|Buddha|仏[ほとけ]の 教[おし]えを 勉強[べんきょう]しました。|Ich habe die Lehre Buddhas studiert.|Nomen
べたべた|べたべた|klebrig; aneinanderklebend (Paar)|カップルがべたべたしているね。|Das Pärchen klebt aneinander.|Adjektiv
仏教|仏教[ぶっきょう]|Buddhismus|お 葬式[そうしき]は 仏教[ぶっきょう]で 行[おこな]うことが 多[おお]いです。|Beerdigungen werden oft buddhistisch abgehalten.|Nomen
坊さん|坊[ぼう]さん|buddhistischer Mönch|私[わたし]の 友人[ゆうじん]はお 坊[ぼう]さんをしているの。|Ein Freund von mir ist Mönch.|Nomen
竹|竹[たけ]|Bambus|この 笛[ふえ]は 竹[たけ]でできている。|Diese Flöte ist aus Bambus.|Nomen
筆者|筆者[ひっしゃ]|Verfasser(in)|筆者[ひっしゃ]の 趣旨[しゅし]を 考[かんが]えてください。|Überlegen Sie, was der Verfasser sagen will.|Nomen
筆記試験|筆記試験[ひっきしけん]|schriftliche Prüfung|その 会社[かいしゃ]の 筆記試験[ひっきしけん]は 難[むずか]しかったよ。|Die schriftliche Prüfung dieser Firma war schwer.|Nomen
ほうき|ほうき|Besen|ほうきで 庭[にわ]を 掃除[そうじ]しました。|Ich habe den Garten mit dem Besen gefegt.|Nomen
筆記用具|筆記用具[ひっきようぐ]|Schreibzeug|今日[きょう]は 筆記用具[ひっきようぐ]を 忘[わす]れました。|Heute habe ich mein Schreibzeug vergessen.|Nomen
筆|筆[ふで]|Pinsel (zum Schreiben)|彼[かれ]は 筆[ふで]で 手紙[てがみ]を 書[か]いたの。|Er hat den Brief mit dem Pinsel geschrieben.|Nomen
笛|笛[ふえ]|Flöte, Pfeife|彼[かれ]は 笛[ふえ]を 吹[ふ]くのが 上手[うま]いね。|Er spielt gut Flöte.|Nomen
名簿|名簿[めいぼ]|Namensliste|これが 参加者[さんかしゃ]の 名簿[めいぼ]です。|Das ist die Teilnehmerliste.|Nomen
分裂|分裂[ぶんれつ]|Spaltung|会社[かいしゃ]が 二[ふた]つの 派閥[はばつ]に 分裂[ぶんれつ]しているんだ。|Die Firma ist in zwei Lager gespalten.|Nomen (mit する)
ポスター|ポスター|Plakat, Poster|電柱[でんちゅう]にポスターが 貼[は]ってあった。|Am Strommast klebte ein Plakat.|Nomen
布|布[ぬの]|Stoff, Tuch|この 布[ぬの]はカーテンに 使[つか]えます。|Dieser Stoff eignet sich für Vorhänge.|Nomen
包丁|包丁[ほうちょう]|Küchenmesser|包丁[ほうちょう]で 指[ゆび]を 切[き]った。|Ich habe mir mit dem Küchenmesser in den Finger geschnitten.|Nomen
包帯|包帯[ほうたい]|Verband, Binde|彼女[かのじょ]は 手[て]に 包帯[ほうたい]を 巻[ま]いていたんだ。|Sie hatte einen Verband um die Hand.|Nomen (mit する)
包み|包[つつ]み|Paket, Päckchen|この 包[つつ]みは 誰[だれ]のですか。|Wem gehört dieses Päckchen?|Nomen
包み紙|包[つつ]み 紙[がみ]|Einwickelpapier, Geschenkpapier|包[つつ]み 紙[がみ]はたたんでください。|Falten Sie bitte das Einwickelpapier zusammen.|Nomen
抱く|抱[だ]く|in den Armen halten|祖母[そぼ]がうちの 猫[ねこ]を 抱[だ]いているわよ。|Oma hält unsere Katze im Arm.|Verb
ほどく|ほどく|aufbinden, lösen|靴[くつ]のひもをほどいたの。|Ich habe die Schnürsenkel aufgebunden.|Verb
文句|文句[もんく]|Beschwerde, Nörgelei|彼女[かのじょ]はいつも 文句[もんく]ばかり 言[い]う。|Sie beschwert sich ständig nur.|Nomen
中旬|中旬[ちゅうじゅん]|mittleres Monatsdrittel|来月[らいげつ] 中旬[ちゅうじゅん]にフランスへ 行[い]きます。|Mitte nächsten Monats fahre ich nach Frankreich.|Nomen
平凡|平凡[へいぼん]|gewöhnlich, durchschnittlich|彼[かれ]はごく 平凡[へいぼん]な 人[ひと]です。|Er ist ein ganz gewöhnlicher Mensch.|な-Adjektiv
通帳|通帳[つうちょう]|Sparbuch|銀行[ぎんこう]の 通帳[つうちょう]を 持[も]ってきてください。|Bringen Sie bitte Ihr Sparbuch mit.|Nomen
妊娠|妊娠[にんしん]|Schwangerschaft|彼女[かのじょ]が 妊娠[にんしん]したそうです。|Sie soll schwanger sein.|Nomen (mit する)
ほほ|ほほ|Wange|彼女[かのじょ]は 真[ま]っ 赤[か]なほほをしているね。|Sie hat knallrote Wangen.|Nomen
同姓|同姓[どうせい]|gleicher Familienname|日本[にっぽん]では 夫婦[ふうふ] 同姓[どうせい]が 一般的[いっぱんてき]よ。|In Japan ist es üblich, dass Ehepaare denselben Familiennamen tragen.|Nomen
嫁|嫁[よめ]|Braut, Schwiegertochter|姉[あね]が 嫁[よめ]に 行[い]ったの。|Meine große Schwester hat geheiratet.|Nomen
花嫁|花嫁[はなよめ]|Braut|花嫁[はなよめ]が 父親[ちちおや]と 一緒[いっしょ]に 入[はい]ってきましたね。|Die Braut kam zusammen mit ihrem Vater herein.|Nomen
花婿|花婿[はなむこ]|Bräutigam|花婿[はなむこ]と 花嫁[はなよめ]が 並[なら]んで 登場[とうじょう]したんだ。|Bräutigam und Braut traten nebeneinander auf.|Nomen
幼児|幼児[ようじ]|Kleinkind|幼児[ようじ]は 入場無料[にゅうじょう むりょう]です。|Kleinkinder haben freien Eintritt.|Nomen
ほほえむ|ほほえむ|lächeln|彼女[かのじょ]は 私[わたし]にほほえんだよ。|Sie hat mich angelächelt.|Verb
眠たい|眠[ねむ]たい|schläfrig|まだ8 時[じ]なのに、もう 眠[ねむ]たいです。|Es ist erst acht Uhr, und ich bin schon müde.|Adjektiv
眠り|眠[ねむ]り|Schlaf|彼女[かのじょ]はいつもより 早[はや]く 眠[ねむ]りに 着[つ]いたよ。|Sie ist früher als sonst eingeschlafen.|Nomen
眺める|眺[なが]める|betrachten, hinausschauen|猫[ねこ]が 窓[まど]から 外[そと]を 眺[なが]めているよ。|Die Katze schaut aus dem Fenster.|Verb
眺め|眺[なが]め|Aussicht, Ausblick|ここからの 眺[なが]めは 最高[さいこう]です。|Die Aussicht von hier ist großartig.|Nomen
同封|同封[どうふう]|Beilegen (in einem Brief)|手紙[てがみ]に 写真[しゃしん]が 同封[どうふう]されていたよ。|Dem Brief lag ein Foto bei.|Nomen (mit する)
封|封[ふう]|Siegel, Verschluss|手紙[てがみ]に 封[ふう]をしたよ。|Ich habe den Brief zugeklebt.|Nomen
まく|まく|säen, streuen|庭[にわ]に 花[はな]の 種[たね]をまきました。|Ich habe im Garten Blumensamen gesät.|Verb
呼び掛ける|呼[よ]び 掛[か]ける|ansprechen, aufrufen|友人達[ゆうじんたち]に 協力[きょうりょく]を 呼[よ]び 掛[か]けたの。|Ich habe meine Freunde um Mithilfe gebeten.|Verb
引っ掛かる|引[ひ]っ 掛[か]かる|hängen bleiben; hereinfallen|魚[さかな]の 骨[ほね]がのどに 引[ひ]っ 掛[か]かった。|Mir ist eine Gräte im Hals stecken geblieben.|Verb
話し掛ける|話[はな]し 掛[か]ける|ansprechen|知[し]らない 人[ひと]が 話[はな]し 掛[か]けてきた。|Ein Fremder hat mich angesprochen.|Verb
通り掛かる|通[とお]り 掛[か]かる|zufällig vorbeikommen|その 店[みせ]を 通[とお]り 掛[か]かったらバーゲンをやっていた。|Als ich an dem Laden vorbeikam, war dort gerade Sonderverkauf.|Verb
引っ掛ける|引[ひ]っ 掛[か]ける|einhaken, hängen bleiben mit|その 選手[せんしゅ]はハードルに 足[あし]を 引[ひ]っ 掛[か]けたんだ。|Der Sportler ist mit dem Fuß an der Hürde hängen geblieben.|Verb
まとめ|まとめ|Zusammenfassung|論文[ろんぶん]のまとめを 書[か]いています。|Ich schreibe gerade die Zusammenfassung meiner Arbeit.|Nomen
寄り掛かる|寄[よ]り 掛[か]かる|sich anlehnen|彼[かれ]はフェンスに 寄[よ]り 掛[か]かったの。|Er lehnte sich an den Zaun.|Verb
措置|措置[そち]|Maßnahme|被災者[ひさいしゃ]を 救[すく]うための 特別[とくべつ]な 措置[そち]が 取[と]られました。|Zur Rettung der Katastrophenopfer wurden besondere Maßnahmen ergriffen.|Nomen (mit する)
拝見|拝見[はいけん]|ansehen, lesen (bescheiden)|あなたの 著書[ちょしょ]を 拝見[はいけん]しました。|Ich habe Ihr Buch gelesen.|Nomen (mit する)
控える|控[ひか]える|sich zurückhalten, einschränken; notieren|最近[さいきん] 甘[あま]いものを 控[ひか]えています。|In letzter Zeit halte ich mich mit Süßem zurück.|Verb
控え室|控[ひか]え 室[しつ]|Warteraum, Aufenthaltsraum|ここはお 客様用[きゃくさま よう]の 控[ひか]え 室[しつ]です。|Das hier ist ein Warteraum für Gäste.|Nomen
まね|まね|Nachahmung|娘[むすめ]はよく 私[わたし]のまねをします。|Meine Tochter macht mich oft nach.|Nomen (mit する)
握り締める|握[にぎ]り 締[し]める|fest umklammern|彼[かれ]は 両手[りょうて]を 握[にぎ]り 締[し]めたの。|Er ballte beide Hände zu Fäusten.|Verb
揃う|揃[そろ]う|vollzählig sein, beisammen sein|朝[あさ]は 家族全員[かぞく ぜんいん]が 揃[そろ]って 食事[しょくじ]します。|Morgens isst die ganze Familie zusammen.|Verb
揃える|揃[そろ]える|vervollständigen, gleichmäßig ausrichten|花[はな]は 長[なが]さを 揃[そろ]えて 花瓶[かびん]にさしましょう。|Schneiden wir die Blumen auf gleiche Länge und stellen sie in die Vase.|Verb
出迎え|出迎[でむか]え|Abholung, Empfang|空港[くうこう]へ 彼女[かのじょ]を 出迎[でむか]えに 行[い]きました。|Ich bin zum Flughafen gefahren, um sie abzuholen.|Nomen
迎え|迎[むか]え|Abholen|駅[えき]まで 迎[むか]えに 来[き]て 下[くだ]さい。|Holen Sie mich bitte am Bahnhof ab.|Nomen
まねる|まねる|nachahmen|私[わたし]の 動[うご]きをまねてください。|Machen Sie bitte meine Bewegungen nach.|Verb
遂げる|遂[と]げる|vollbringen, erreichen|この 会社[かいしゃ]は 急成長[きゅうせいちょう]を 遂[と]げました。|Diese Firma ist rasant gewachsen.|Verb
巡る|巡[めぐ]る|umhergehen, bereisen; kreisen um|明日[あした]から 温泉[おんせん]を 巡[めぐ]る 旅[たび]に 出[で]ます。|Ab morgen gehe ich auf eine Reise zu heißen Quellen.|Verb
待遇|待遇[たいぐう]|Behandlung, Arbeitsbedingungen|社員[しゃいん]たちは 待遇[たいぐう]の 改善[かいぜん]を 要求[ようきゅう]している。|Die Beschäftigten fordern bessere Arbeitsbedingungen.|Nomen
俳句|俳句[はいく]|Haiku (Kurzgedicht)|「さくら」という 言葉[ことば]を 使[つか]って 俳句[はいく]を 書[か]いたよ。|Ich habe ein Haiku mit dem Wort „Sakura“ geschrieben.|Nomen
俳優|俳優[はいゆう]|Schauspieler(in)|彼[かれ]は 俳優[はいゆう]です。|Er ist Schauspieler.|Nomen
敏感|敏感[びんかん]|empfindlich, sensibel|彼女[かのじょ]は 流行[りゅうこう]に 敏感[びんかん]だね。|Sie hat ein feines Gespür für Trends.|な-Adjektiv
まぶた|まぶた|Augenlid|眠[ねむ]くてまぶたが 重[おも]くなってきた。|Ich bin müde, meine Lider werden schwer.|Nomen
倣う|倣[なら]う|nachahmen, sich richten nach|この 街[まち]はロンドンに 倣[なら]って 作[つく]られました。|Diese Stadt wurde nach dem Vorbild Londons gebaut.|Verb
寮|寮[りょう]|Wohnheim|彼[かれ]は 会社[かいしゃ]の 寮[りょう]に 住[す]んでいます。|Er wohnt im Firmenwohnheim.|Nomen
偏見|偏見[へんけん]|Vorurteil|彼[かれ]は 世[よ]の 中[なか]の 偏見[へんけん]と 戦[たたか]ったんだ。|Er hat gegen die Vorurteile der Gesellschaft gekämpft.|Nomen
何遍|何遍[なんべん]|wie viele Male; viele Male|この 映画[えいが]は 何遍[なんべん]も 見[み]ました。|Diesen Film habe ich schon viele Male gesehen.|Nomen
宣伝|宣伝[せんでん]|Werbung|その 商品[しょうひん]の 宣伝[せんでん]をよく 見[み]かけます。|Die Werbung für dieses Produkt sehe ich oft.|Nomen (mit する)
まれ|まれ|selten|彼[かれ]が 仕事[しごと]を 休[やす]むのはまれです。|Es ist selten, dass er bei der Arbeit fehlt.|Adjektiv
展覧会|展覧会[てんらんかい]|Ausstellung|昨日[きのう]、 絵[え]の 展覧会[てんらんかい]に 行[い]ってきました。|Gestern war ich in einer Gemäldeausstellung.|Nomen
総理大臣|総理大臣[そうりだいじん]|Premierminister(in)|国民[こくみん]の6 割[わり]が 総理大臣[そうりだいじん]を 支持[しじ]しています。|60 Prozent der Bevölkerung unterstützen den Premierminister.|Nomen
大臣|大臣[だいじん]|Minister(in)|大臣[だいじん]が 汚職[おしょく]で 逮捕[たいほ]されました。|Ein Minister wurde wegen Korruption verhaftet.|Nomen
臨む|臨[のぞ]む|teilnehmen an, gegenübertreten; liegen an|選手[せんしゅ]は 最高[さいこう]の 状態[じょうたい]で 大会[たいかい]に 臨[のぞ]んだわ。|Die Sportler gingen in bester Verfassung in den Wettkampf.|Verb
臨時|臨時[りんじ]|vorübergehend, außerplanmäßig|彼女[かのじょ]は 臨時[りんじ]の 店員[てんいん]です。|Sie ist eine Aushilfsverkäuferin.|Nomen
ミスプリント|ミスプリント|Druckfehler|資料[しりょう]にミスプリントがありました。|In den Unterlagen war ein Druckfehler.|Nomen
内閣|内閣[ないかく]|Kabinett (Regierung)|新[あたら]しい 内閣[ないかく]が 誕生[たんじょう]したね。|Ein neues Kabinett ist entstanden.|Nomen
闘う|闘[たたか]う|kämpfen, ringen mit|彼[かれ]は 病気[びょうき]と 闘[たたか]ったの。|Er hat gegen die Krankheit gekämpft.|Verb
派閥|派閥[はばつ]|Clique, Fraktion|あの 大学[だいがく]には 派閥[はばつ]がたくさんあります。|An dieser Universität gibt es viele Cliquen.|Nomen
懐かしい|懐[なつ]かしい|wehmütig stimmend, lieb und vertraut|ここは 私[わたし]にとって 懐[なつ]かしい 場所[ばしょ]です。|Dieser Ort weckt in mir schöne Erinnerungen.|Adjektiv
噴火|噴火[ふんか]|Vulkanausbruch|島[しま]で 火山[かざん]が 噴火[ふんか]したよ。|Auf der Insel ist ein Vulkan ausgebrochen.|Nomen (mit する)
噴水|噴水[ふんすい]|Springbrunnen|公園[こうえん]の 噴水[ふんすい]の 前[まえ]で 会[あ]いましょう。|Treffen wir uns vor dem Springbrunnen im Park.|Nomen
むく|むく|schälen|人参[にんじん]の 皮[かわ]をむきました。|Ich habe die Karotten geschält.|Verb
不愉快|不愉快[ふゆかい]|unangenehm, verstimmt|彼[かれ]の 話[はなし]を 聞[き]いて 不愉快[ふゆかい]になった。|Was er erzählte, hat mich verstimmt.|な-Adjektiv
愉快|愉快[ゆかい]|vergnüglich, lustig|彼[かれ]らはとても 愉快[ゆかい]な 人[ひと]たちです。|Sie sind sehr lustige Leute.|な-Adjektiv
漫画|漫画[まんが]|Manga, Comic|妹[いもうと]は 漫画[まんが]が 好[す]きです。|Meine kleine Schwester mag Manga.|Nomen
電卓|電卓[でんたく]|Taschenrechner|この 電卓[でんたく]はポケットに 入[はい]ります。|Dieser Taschenrechner passt in die Tasche.|Nomen
雄大|雄大[ゆうだい]|großartig, majestätisch|雄大[ゆうだい]な 景色[けしき]に 感動[かんどう]したの。|Die großartige Landschaft hat mich tief beeindruckt.|Adjektiv
めくる|めくる|umblättern, umdrehen|彼[かれ]はページをめくったの。|Er blätterte die Seite um.|Verb
雌|雌[めす]|Weibchen (Tier)|この 猫[ねこ]は 雌[めす]です。|Diese Katze ist ein Weibchen.|Nomen
幼稚|幼稚[ようち]|kindisch, unreif|その 考[かんが]えは 少[すこ]し 幼稚[ようち]だと 思[おも]う。|Ich finde diesen Gedanken etwas kindisch.|な-Adjektiv
名称|名称[めいしょう]|Bezeichnung, Name|みんなで 製品[せいひん]の 名称[めいしょう]を 考[かんが]えました。|Wir haben gemeinsam über den Namen des Produkts nachgedacht.|Nomen
秩序|秩序[ちつじょ]|Ordnung|その 国[くに]の 社会[しゃかい] 秩序[ちつじょ]は 乱[みだ]れているわ。|Die gesellschaftliche Ordnung in dem Land ist gestört.|Nomen
物陰|物陰[ものかげ]|Versteck, im Schatten von etwas|私[わたし]たちは 物陰[ものかげ]に 隠[かく]れたんだ。|Wir haben uns hinter etwas versteckt.|Nomen
めでたい|めでたい|erfreulich, glückverheißend|それはめでたいことだ。|Das ist ein Grund zur Freude.|Adjektiv
魅力|魅力[みりょく]|Reiz, Anziehungskraft|彼女[かのじょ]の 明[あか]るさに 魅力[みりょく]を 感[かん]じました。|Ihre Fröhlichkeit hat mich angezogen.|Nomen
醜い|醜[みにく]い|hässlich|醜[みにく]い 争[あらそ]いはやめましょう。|Hören wir auf mit dem hässlichen Streit.|Adjektiv
悪賢い|悪賢[わるがしこ]い|gerissen, hinterlistig|彼[かれ]は 悪賢[わるがしこ]い 男[おとこ]だな。|Er ist ein gerissener Kerl.|Adjektiv
頂上|頂上[ちょうじょう]|Gipfel|あと 少[すこ]しで 山[やま]の 頂上[ちょうじょう]です。|Gleich sind wir auf dem Gipfel des Berges.|Nomen
近頃|近頃[ちかごろ]|in letzter Zeit|近頃[ちかごろ]、 彼女[かのじょ]の 様子[ようす]がおかしい。|In letzter Zeit benimmt sie sich seltsam.|Nomen
矛盾|矛盾[むじゅん]|Widerspruch|彼[かれ]の 言[い]っていることは 矛盾[むじゅん]しています。|Was er sagt, ist widersprüchlich.|Nomen (mit する)
もうかる|もうかる|Gewinn abwerfen, sich lohnen|彼[かれ]の 商売[しょうばい]はもうかっているらしいね。|Sein Geschäft soll gut laufen.|Verb
倉庫|倉庫[そうこ]|Lager, Lagerhaus|この 荷物[にもつ]を 倉庫[そうこ]に 運[はこ]びましょう。|Bringen wir diese Ware ins Lager.|Nomen
創立|創立[そうりつ]|Gründung|この 学校[がっこう]は1962 年[ねん]に 創立[そうりつ]されました。|Diese Schule wurde 1962 gegründet.|Nomen (mit する)
罰金|罰金[ばっきん]|Geldstrafe|罰金[ばっきん]を3 万円[まんえん]もとられたよ。|Ich musste ganze 30.000 Yen Strafe zahlen.|Nomen
罰する|罰[ばっ]する|bestrafen|彼[かれ]は 違法駐車[いほう ちゅうしゃ]で 罰[ばっ]せられたんだ。|Er wurde wegen Falschparkens bestraft.|Verb
罰|罰[ばつ]|Strafe|彼[かれ]は 悪[わる]いことをしたので 罰[ばつ]を 受[う]けたんだ。|Er hat etwas Schlimmes getan und wurde bestraft.|Nomen
もうけ|もうけ|Gewinn, Verdienst|今日[きょう]のもうけは2 万円[まんえん]でした。|Der heutige Gewinn betrug 20.000 Yen.|Nomen
老人|老人[ろうじん]|alter Mensch|子供[こども]が 老人[ろうじん]の 手[て]を 引[ひ]いて 歩[ある]いていたの。|Ein Kind führte einen alten Menschen an der Hand.|Nomen
煮る|煮[に]る|kochen, schmoren|今[いま]、 豆[まめ]を 煮[に]ています。|Ich koche gerade Bohnen.|Verb
煮える|煮[に]える|gar werden, kochen|もうすぐじゃがいもが 煮[に]えます。|Die Kartoffeln sind gleich gar.|Verb
蒸し暑い|蒸[む]し 暑[あつ]い|schwül|今日[きょう]は 蒸[む]し 暑[あつ]いね。|Heute ist es schwül.|Adjektiv
黙る|黙[だま]る|schweigen, verstummen|彼[かれ]はいつも 黙[だま]って 仕事[しごと]をします。|Er arbeitet immer schweigend.|Verb
もしかしたら|もしかしたら|vielleicht, möglicherweise|もしかしたら 来年転勤[らいねん てんきん]になるかも 知[し]れない。|Vielleicht werde ich nächstes Jahr versetzt.|Adverb
無駄|無駄[むだ]|nutzlos, Verschwendung|それは 時間[じかん]の 無駄[むだ]です。|Das ist Zeitverschwendung.|な-Adjektiv
無駄遣い|無駄遣[むだづか]い|Geldverschwendung|これは 税金[ぜいきん]の 無駄遣[むだづか]いだね。|Das ist Verschwendung von Steuergeldern.|Nomen (mit する)
沸騰|沸騰[ふっとう]|Sieden, Kochen|水[みず]が 沸騰[ふっとう]したよ。|Das Wasser kocht.|Nomen (mit する)
返却|返却[へんきゃく]|Rückgabe|図書館[としょかん]に 本[ほん]を 返却[へんきゃく]したよ。|Ich habe das Buch in der Bibliothek zurückgegeben.|Nomen (mit する)
庁|庁[ちょう]|Amt, Behörde|彼[かれ]は 県[けん] 庁[ちょう]で 働[はたら]いています。|Er arbeitet in der Präfekturverwaltung.|Nomen
もてる|もてる|beliebt sein (beim anderen Geschlecht)|彼[かれ]は 非常[ひじょう]にもてるね。|Er kommt sehr gut an.|Verb
都庁|都庁[とちょう]|Rathaus der Präfektur Tokio|あの 高[たか]い 建物[たてもの]が 都庁[とちょう]です。|Das hohe Gebäude dort ist das Rathaus von Tokio.|Nomen
府庁|府庁[ふちょう]|Präfekturverwaltung (Osaka, Kyoto)|彼[かれ]は 府庁[ふちょう]で 働[はたら]いています。|Er arbeitet in der Präfekturverwaltung.|Nomen
摩擦|摩擦[まさつ]|Reibung, Spannungen|その 二[ふた]つの 国[くに]に 摩擦[まさつ]が 生[しょう]じたんだ。|Zwischen den beiden Ländern sind Spannungen entstanden.|Nomen (mit する)
先輩|先輩[せんぱい]|Ältere(r) (in Schule, Firma), Senior|日本人[にっぽんじん]は 先輩[せんぱい]、 後輩[こうはい]の 関係[かんけい]をとても 大切[たいせつ]に 考[かんが]えます。|Japanern ist das Verhältnis zwischen Älteren und Jüngeren sehr wichtig.|Nomen
冒険|冒険[ぼうけん]|Abenteuer|昔[むかし]の 子供[こども]たちは 冒険[ぼうけん] 小説[しょうせつ]をよく 読[よ]みました。|Früher haben Kinder oft Abenteuerromane gelesen.|Nomen (mit する)
牧場|牧場[ぼくじょう]|Weide, Viehfarm|叔父[おじ]は 牧場[ぼくじょう]を 持[も]っているんだ。|Mein Onkel hat eine Farm.|Nomen
ゆでる|ゆでる|kochen (in Wasser)|今[いま]、 野菜[やさい]をゆでています。|Ich koche gerade Gemüse.|Verb
取り敢えず|取[と]り 敢[あ]えず|fürs Erste, vorerst|取[と]り 敢[あ]えずお 知[し]らせしておきます。|Ich gebe Ihnen fürs Erste Bescheid.|Adverb
勇気|勇気[ゆうき]|Mut|彼[かれ]は 勇気[ゆうき]があるね。|Er hat Mut.|Nomen
勇敢|勇敢[ゆうかん]|tapfer, mutig|彼女[かのじょ]はとても 勇敢[ゆうかん]でした。|Sie war sehr tapfer.|な-Adjektiv
励ます|励[はげ]ます|ermutigen, aufmuntern|父[ちち]が 息子[むすこ]を 励[はげ]ましたの。|Der Vater hat seinen Sohn ermutigt.|Verb
露|露[つゆ]|Tau|花[はな]に 露[つゆ]がついていました。|Auf den Blumen lag Tau.|Nomen
よける|よける|ausweichen|彼[かれ]は 飛[と]んできたボールをよけたの。|Er wich dem heranfliegenden Ball aus.|Verb
零下|零下[れいか]|unter null (Grad)|今日[きょう]は 零下[れいか]の 寒[さむ]さでしたね。|Heute hatten wir Minusgrade.|Nomen
雰囲気|雰囲気[ふんいき]|Atmosphäre, Stimmung|とても 雰囲気[ふんいき]のいいお 店[みせ]ですね。|Das ist ein Lokal mit sehr angenehmer Atmosphäre.|Nomen
盆地|盆地[ぼんち]|Talkessel, Becken|盆地[ぼんち]は 夏[なつ]、とても 暑[あつ]いんだ。|Im Talkessel ist es im Sommer sehr heiß.|Nomen
盆|盆[ぼん]|Bon-Fest (Totengedenken im Sommer)|お 盆[ぼん]は 実家[じっか]に 帰[かえ]りました。|Zum Bon-Fest bin ich zu meinen Eltern gefahren.|Nomen
盆|盆[ぼん]|Tablett|母[はは]が 料理[りょうり]をお 盆[ぼん]に 乗[の]せたの。|Meine Mutter hat das Essen auf ein Tablett gestellt.|Nomen
よこす|よこす|herschicken, herübergeben|父[ちち]が 長[なが]い 手紙[てがみ]をよこしたよ。|Mein Vater hat mir einen langen Brief geschickt.|Verb
大衆|大衆[たいしゅう]|die breite Masse, das Volk|能[のう]は 元々[もともと] 大衆[たいしゅう]の 文化[ぶんか]でした。|Das Nō war ursprünglich Kultur des einfachen Volkes.|Nomen
舞台|舞台[ぶたい]|Bühne; Schauplatz|その 物語[ものがたり]は 京都[きょうと]が 舞台[ぶたい]だ。|Diese Geschichte spielt in Kyoto.|Nomen
見舞う|見舞[みま]う|einen Kranken besuchen|昨日友人[きのう ゆうじん]を 見舞[みま]ったの。|Gestern habe ich einen Freund im Krankenhaus besucht.|Verb
見舞い|見舞[みま]い|Krankenbesuch|友達[ともだち]が 見舞[みま]いに 来[き]てくれたよ。|Ein Freund ist zu mir ins Krankenhaus gekommen.|Nomen
盆踊り|盆踊[ぼんおど]り|Bon-Tanz|みんなで 盆踊[ぼんおど]りに 行[い]きました。|Wir sind alle zusammen zum Bon-Tanz gegangen.|Nomen
跳ねる|跳[は]ねる|springen, hüpfen|ウサギが 雪[ゆき]の 上[うえ]を 跳[は]ねていったよ。|Ein Hase hüpfte über den Schnee.|Verb
よす|よす|aufhören, sein lassen|人[ひと]をからかうのはよしなさい。|Hör auf, andere zu necken.|Verb
銭湯|銭湯[せんとう]|öffentliches Badehaus|銭湯[せんとう]は 昔[むかし]より 少[すく]なくなったわね。|Es gibt weniger Badehäuser als früher.|Nomen
古里|古里[ふるさと]|Heimat, Heimatort|いつも 古里[ふるさと]を 懐[なつ]かしく 思[おも]い 出[だ]すの。|Ich denke immer wehmütig an meine Heimat.|Nomen
狙う|狙[ねら]う|zielen auf, es abgesehen haben auf|来年[らいねん]は 優勝[ゆうしょう]を 狙[ねら]います。|Nächstes Jahr wollen wir den Titel holen.|Verb
彫る|彫[ほ]る|schnitzen, gravieren|彼[かれ]は 木[き]の 像[ぞう]を 彫[ほ]ったの。|Er hat eine Holzfigur geschnitzt.|Verb
中央|中央[ちゅうおう]|Mitte, Zentrum|その 公園[こうえん]は 町[まち]のほぼ 中央[ちゅうおう]に 位置[いち]するんだ。|Der Park liegt fast in der Mitte der Stadt.|Nomen
レクリエーション|レクリエーション|Freizeitgestaltung, Erholung|町内会[ちょうないかい]のレクリエーションに 参加[さんか]したの。|Ich habe an der Freizeitveranstaltung des Nachbarschaftsvereins teilgenommen.|Nomen
双子|双子[ふたご]|Zwillinge|友達[ともだち]に 双子[ふたご]が 生[う]まれたよ。|Eine Freundin hat Zwillinge bekommen.|Nomen
裸|裸[はだか]|Nacktheit, nackt|彼[かれ]らは 裸[はだか]のつきあいをしているよ。|Sie pflegen einen offenen, ungeschminkten Umgang miteinander.|Nomen
祖先|祖先[そせん]|Vorfahr, Ahn|犬[いぬ]も 猫[ねこ]も 祖先[そせん]は 同[おな]じ 動物[どうぶつ]らしいよ。|Hunde und Katzen sollen von demselben Tier abstammen.|Nomen
報酬|報酬[ほうしゅう]|Vergütung, Honorar|その 仕事[しごと]の 報酬[ほうしゅう]として20 万円[まんえん]もらいました。|Als Vergütung für diese Arbeit habe ich 200.000 Yen bekommen.|Nomen
無邪気|無邪気[むじゃき]|unschuldig, arglos|子供[こども]たちが 無邪気[むじゃき]に 遊[あそ]んでいるね。|Die Kinder spielen ganz unbeschwert.|な-Adjektiv
ろうそく|ろうそく|Kerze|バースデーケーキにろうそくを 立[た]てました。|Wir haben Kerzen auf die Geburtstagstorte gesteckt.|Nomen
玉ねぎ|玉[たま]ねぎ|Zwiebel|私[わたし]は 玉[たま]ねぎが 嫌[きら]いです。|Ich mag keine Zwiebeln.|Nomen
玉|玉[たま]|Kugel, Perle|彼[かれ]の 顔[かお]に 玉[たま]のような 汗[あせ]が 流[なが]れていたの。|Ihm liefen Schweißperlen über das Gesicht.|Nomen
天皇|天皇[てんのう]|Kaiser (Japans), Tennō|日本[にっぽん]には 天皇[てんのう]がいます。|Japan hat einen Kaiser.|Nomen
風呂場|風呂場[ふろば]|Badezimmer|私[わたし]は 風呂場[ふろば]で 歯[は]を 磨[みが]きます。|Ich putze mir im Bad die Zähne.|Nomen
班|班[はん]|Gruppe, Trupp|班[はん]のメンバーは5 人[にん]です。|Die Gruppe hat fünf Mitglieder.|Nomen
召し上がる|召[め]し 上[あ]がる|essen, trinken (respektvoll)|どうぞ 召[め]し 上[あ]がってください。|Bitte greifen Sie zu.|Verb
わがまま|わがまま|Eigensinn, Egoismus|子供[こども]のわがままを 叱[しか]ったの。|Ich habe das Kind wegen seines Eigensinns gescholten.|な-Adjektiv
哲学|哲学[てつがく]|Philosophie|哲学[てつがく]は 興味深[きょうみぶか]い 学問[がくもん]です。|Philosophie ist eine hochinteressante Wissenschaft.|Nomen
綱|綱[つな]|Tau, dickes Seil|この 綱[つな]は 直径20cm[ちょっけい 20 せんち]あるそうです。|Dieses Tau soll einen Durchmesser von 20 cm haben.|Nomen
縄|縄[なわ]|Seil, Strick|枝[えだ]を 縄[なわ]でしばったよ。|Ich habe die Äste mit einem Strick zusammengebunden.|Nomen
縫う|縫[ぬ]う|nähen|彼女[かのじょ]は 子供[こども]のスカートを 縫[ぬ]ったんだ。|Sie hat einen Kinderrock genäht.|Verb
虹|虹[にじ]|Regenbogen|雨[あめ]が 上[あ]がって 美[うつく]しい 虹[にじ]が 出[で]たね。|Der Regen hat aufgehört und ein schöner Regenbogen ist erschienen.|Nomen
わく|わく|hervorquellen, aufsteigen (Gefühl)|友達[ともだち]に 励[はげ]まされて 勇気[ゆうき]がわいたよ。|Durch den Zuspruch meiner Freunde habe ich Mut gefasst.|Verb
梅雨明け|梅雨明[つゆあ]け|Ende der Regenzeit|梅雨明[つゆあ]けは 来週[らいしゅう]だそうです。|Die Regenzeit soll nächste Woche enden.|Nomen (mit する)
梅雨入り|梅雨入[つゆい]り|Beginn der Regenzeit|梅雨入[つゆい]りは6 月17日[がつ 17 にち]でした。|Die Regenzeit begann am 17. Juni.|Nomen (mit する)
欄|欄[らん]|Spalte, Feld (im Formular)|お 名前[なまえ]は 上[うえ]の 欄[らん]にお 書[か]きください。|Schreiben Sie Ihren Namen bitte in das obere Feld.|Nomen
栓抜き|栓抜[せんぬ]き|Flaschenöffner|栓抜[せんぬ]きはどこですか。|Wo ist der Flaschenöffner?|Nomen
峠|峠[とうげ]|Bergpass|この 峠[とうげ]を 越[こ]えると 村[むら]があります。|Hinter diesem Pass liegt ein Dorf.|Nomen
ばからしい|ばからしい|unsinnig, dumm|小[ちい]さなことにくよくよするのはばからしいよ。|Es ist unsinnig, sich über Kleinigkeiten zu grämen.|Adjektiv
婆さん|婆[ばあ]さん|alte Frau, Oma|彼女[かのじょ]は 元気[げんき]なお 婆[ばあ]さんね。|Sie ist eine rüstige alte Dame.|Nomen
漬ける|漬[つ]ける|einlegen, marinieren|魚[さかな]を 味噌[みそ]に 漬[つ]けました。|Ich habe den Fisch in Miso eingelegt.|Verb
漬け物|漬[つ]け 物[もの]|eingelegtes Gemüse|祖母[そぼ]は 漬[つ]け 物[もの]を 自分[じぶん]で 作[つく]ります。|Meine Großmutter legt ihr Gemüse selbst ein.|Nomen
潰す|潰[つぶ]す|zerdrücken, zerquetschen|ペットボトルは 潰[つぶ]して 捨[す]てましょう。|Plastikflaschen bitte zusammendrücken und dann wegwerfen.|Verb
潰れる|潰[つぶ]れる|zerdrückt werden; pleitegehen|箱[はこ]の 角[かど]が 潰[つぶ]れていますよ。|Die Ecke der Schachtel ist eingedrückt.|Verb
なぜか|なぜか|aus irgendeinem Grund|今日[きょう]はなぜか 体[からだ]がだるい。|Heute fühle ich mich aus irgendeinem Grund schlapp.|Adverb
年賀|年賀[ねんが]|Neujahrsglückwunsch|年賀[ねんが] 葉書[はがき]が 売[う]り 出[だ]されたね。|Die Neujahrspostkarten sind jetzt im Verkauf.|Nomen
賑わう|賑[にぎ]わう|belebt sein, voller Menschen sein|ここは 正月[しょうがつ]はたくさんの 人[ひと]で 賑[にぎ]わいます。|Hier ist an Neujahr viel los.|Verb
蛇|蛇[へび]|Schlange|蛇[へび]がカエルを 捕[つか]まえたの。|Die Schlange hat einen Frosch gefangen.|Nomen
華やか|華[はな]やか|prächtig, glanzvoll|彼女[かのじょ]は 華[はな]やかな 女性[じょせい]ですね。|Sie ist eine glamouröse Frau.|Adjektiv
挟む|挟[はさ]む|einklemmen, dazwischenstecken|ドアに 指[ゆび]を 挟[はさ]んだ。|Ich habe mir den Finger in der Tür eingeklemmt.|Verb
塔|塔[とう]|Turm, Pagode|あの 塔[とう]の 高[たか]さはどれくらいですか。|Wie hoch ist der Turm dort?|Nomen
にわかに|にわかに|plötzlich, unvermittelt|空[そら]がにわかに 暗[くら]くなったな。|Der Himmel hat sich plötzlich verdunkelt.|Adverb
誓う|誓[ちか]う|schwören, geloben|二人[ふたり]は 一生[いっしょう]を 共[とも]にすることを 誓[ちか]ったの。|Die beiden haben gelobt, ihr Leben miteinander zu verbringen.|Verb
慰める|慰[なぐさ]める|trösten|友人[ゆうじん]が 慰[なぐさ]めてくれました。|Ein Freund hat mich getröstet.|Verb
朗らか|朗[ほが]らか|heiter, fröhlich|彼[かれ]はとても 朗[ほが]らかな 人[ひと]です。|Er ist ein sehr fröhlicher Mensch.|Adjektiv
蝶蝶|蝶蝶[ちょうちょう]|Schmetterling|見[み]て、きれいな 蝶蝶[ちょうちょう]が 飛[と]んでいる。|Schau, da fliegt ein schöner Schmetterling.|Nomen
鳩|鳩[はと]|Taube|公園[こうえん]の 鳩[はと]にえさをやったの。|Ich habe die Tauben im Park gefüttert.|Nomen
ぴたりと|ぴたりと|schlagartig; genau passend|風[かぜ]がぴたりと 止[や]んだね。|Der Wind hat schlagartig aufgehört.|Adverb
雛祭|雛祭[ひなまつり]|Puppenfest (Mädchenfest am 3. März)|3 月[がつ]3 日[か]は 雛祭[ひなまつ]りです。|Am 3. März ist das Puppenfest.|Nomen
物凄い|物凄[ものすご]い|gewaltig, ungeheuer|夕方[ゆうがた]、 物凄[ものすご]い 雨[あめ]が 降[ふ]ったね。|Am frühen Abend hat es gewaltig geregnet.|Adjektiv
喉|喉[のど]|Kehle, Hals|風邪[かぜ]をひいて 喉[のど]が 痛[いた]いです。|Ich bin erkältet und habe Halsschmerzen.|Nomen
唾|唾[つば]|Speichel, Spucke|彼[かれ]は 地面[じめん]に 唾[つば]を 吐[は]いたよ。|Er hat auf den Boden gespuckt.|Nomen
吠える|吠[ほ]える|bellen|どこかで 犬[いぬ]が 吠[ほ]えていますね。|Irgendwo bellt ein Hund.|Verb
ぴょんと|ぴょんと|mit einem Satz, hopp|子供[こども]が 水[みず]たまりをぴょんと 飛[と]びこえたね。|Das Kind ist mit einem Satz über die Pfütze gesprungen.|Adverb
吊るす|吊[つ]るす|aufhängen|木[き]にブランコを 吊[つ]るしました。|Ich habe eine Schaukel an den Baum gehängt.|Verb
味噌|味噌[みそ]|Miso (Sojabohnenpaste)|きゅうりに 味噌[みそ]をつけて 食[た]べたんだ。|Ich habe Gurke mit Miso gegessen.|Nomen
塞がる|塞[ふさ]がる|sich schließen, versperrt sein|傷口[きずぐち]はもう 塞[ふさ]がりました。|Die Wunde hat sich schon geschlossen.|Verb
塞ぐ|塞[ふさ]ぐ|verschließen, versperren|あまりにうるさかったので 耳[みみ]を 塞[ふさ]いだわ。|Es war so laut, dass ich mir die Ohren zugehalten habe.|Verb
撫でる|撫[な]でる|streicheln|猫[ねこ]の 頭[あたま]を 撫[な]でてあげた。|Ich habe der Katze den Kopf gestreichelt.|Verb
卑怯|卑怯[ひきょう]|feige, unfair|彼[かれ]らは 卑怯[ひきょう]な 方法[ほうほう]で 勝利[しょうり]したの。|Sie haben mit unfairen Mitteln gewonnen.|な-Adjektiv
ひらりと|ひらりと|leicht, flatternd|桜[さくら]の 花[はな]びらがひらりと 舞[ま]い 落[お]ちたな。|Ein Kirschblütenblatt segelte herab.|Adverb
溜め息|溜[た]め 息[いき]|Seufzer|母[はは]は 溜[た]め 息[いき]をついたの。|Meine Mutter hat geseufzt.|Nomen
溜まる|溜[た]まる|sich ansammeln|彼[かれ]はストレスが 溜[た]まっているの。|Bei ihm hat sich Stress angestaut.|Verb
溜める|溜[た]める|ansammeln, aufstauen|お 風呂[ふろ]に 水[みず]を 溜[た]めておいてください。|Lassen Sie bitte Wasser in die Wanne ein.|Verb
海苔|海苔[のり]|Nori (getrockneter Seetang)|旅館[りょかん]の 朝食[ちょうしょく]にのりが 出[で]ました。|Zum Frühstück im Ryokan gab es Nori.|Nomen
遥か|遥[はる]か|weit entfernt, fern|遥[はる]か 向[む]こうに 目的地[もくてきち]が 見[み]えてきた。|Weit in der Ferne kam das Ziel in Sicht.|Adjektiv
もうじき|もうじき|bald, gleich|彼[かれ]はもうじき 父親[ちちおや]になります。|Er wird bald Vater.|Adverb
股|股[また]|Schritt, Schenkelansatz|自転車[じてんしゃ]の 乗[の]り 過[す]ぎで 股[また]が 痛[いた]いです。|Vom vielen Radfahren tut mir der Schritt weh.|Nomen
焚く|焚[た]く|Feuer machen, anzünden|薪[まき]を 集[あつ]めて 火[ひ]を 焚[た]いたよ。|Ich habe Holz gesammelt und Feuer gemacht.|Verb
明瞭|明瞭[めいりょう]|klar, deutlich|彼[かれ]は 話[はな]し 方[かた]が 明瞭[めいりょう]ね。|Er spricht klar und deutlich.|な-Adjektiv
眉|眉[まゆ]|Augenbraue|彼[かれ]は 眉[まゆ]が 濃[こ]いね。|Er hat dichte Augenbrauen.|Nomen
眉毛|眉毛[まゆげ]|Augenbrauen|彼女[かのじょ]の 眉毛[まゆげ]は 太[ふと]いな。|Sie hat kräftige Augenbrauen.|Nomen
やたらに|やたらに|übermäßig, wahllos|彼[かれ]はやたらに 話[はな]しかけてきた。|Er hat mich andauernd angesprochen.|Adverb
割り箸|割[わ]り 箸[ばし]|Einweg-Essstäbchen|彼女[かのじょ]は 割[わ]り 箸[ばし]を 使[つか]わず、 自分[じぶん]の 箸[はし]を 使[つか]うの。|Sie benutzt keine Einwegstäbchen, sondern ihre eigenen.|Nomen
蛋白質|蛋白質[たんぱくしつ]|Eiweiß, Protein|蛋白質[たんぱくしつ]は 大切[たいせつ]な 栄養[えいよう]です。|Eiweiß ist ein wichtiger Nährstoff.|Nomen
蜂|蜂[はち]|Biene, Wespe|友達[ともだち]が 蜂[はち]に 刺[さ]されたんだ。|Ein Freund wurde von einer Biene gestochen.|Nomen
頂戴|頂戴[ちょうだい]|Bekommen; gib mir bitte|それ、ひとつ 頂戴[ちょうだい]。|Gib mir eins davon.|Nomen (mit する)
初詣で|初詣[はつもう]で|erster Schreinbesuch im neuen Jahr|近[ちか]くの 神社[じんじゃ]に 初詣[はつもう]でに 行[い]きました。|Wir waren zum ersten Besuch des Jahres im Schrein in der Nähe.|Nomen (mit する)
詫びる|詫[わ]びる|sich entschuldigen|彼[かれ]は 彼女[かのじょ]に 心[こころ]から 詫[わ]びたんだ。|Er hat sich von Herzen bei ihr entschuldigt.|Verb
頬|頬[ほお]|Wange|彼女[かのじょ]はほおを 赤[あか]く 染[そ]めたわ。|Sie wurde rot.|Nomen
餅|餅[もち]|Mochi (Reiskuchen)|正月[しょうがつ]には 餅[もち]を 食[た]べますよ。|An Neujahr essen wir Mochi.|Nomen
騙す|騙[だま]す|täuschen, betrügen|人[ひと]を 騙[だま]してはいけません。|Man darf andere nicht betrügen.|Verb
便箋|便箋[びんせん]|Briefpapier|友達[ともだち]に 手紙[てがみ]を 書[か]こうと 便箋[びんせん]を 買[か]ったんだ。|Ich habe Briefpapier gekauft, um einem Freund zu schreiben.|Nomen`;
