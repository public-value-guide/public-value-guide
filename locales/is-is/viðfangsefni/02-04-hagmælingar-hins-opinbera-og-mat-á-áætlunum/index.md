# Viðfangsefni 2.4 — Hagmælingar hins opinbera og mat á áætlunum

**Áætlun sem skilaði betri niðurstöðu en fólkið sem aldrei skráði sig í hana er ekki sama fullyrðingin og áætlun sem olli þeirri betri niðurstöðu, og almannafé ætti ekki að verja með fyrri fullyrðingunni á meðan allir meina hljóðlega þá seinni.**

## Hvers vegna þetta skiptir máli fyrir almannavirði

Á hverju ári endurnýja, stækka eða fella opinberir aðilar áætlanir á grundvelli samanburðar á niðurstöðum: þátttakendur í atvinnuáætluninni fundu vinnu hraðar en þeir sem ekki tóku þátt; nemendur í kennsluáætluninni skoruðu hærra en nemendur sem ekki fengu kennslu. Hver samanburður er sannur sem lýsing og hættulegur sem röksemd, því enginn, einn og sér, segir hvort áætlunin olli muninum. Fólk sem skráir sig í atvinnuáætlun er oft áhugasamara en það sem gerir það ekki, og nemendur valdir til aukakennslu eru oft valdir því kennari býst þegar við að þeir bregðist vel við. Bilið milli „meðhöndlaði hópurinn stóð sig betur“ og „meðferðin lét hann standa sig betur“ er einmitt bilið sem orsakaályktun er til að loka.

Þetta er ekki fræðilegt formsatriði. Fjármálanefnd sem er beðin að endurnýja fjármögnun áætlunar er óbeint beðin að heimila útgjöld almannafjár á fullyrðingu um orsakasamband, hvort sem nokkur í herberginu notar það orð eða ekki. Viðfangsefni 2.1 gaf þér árangursrammann sem segir hverju áætlun er ætlað að breyta (sjá Viðfangsefni 2.1 — Stigatafla almannavirðis og árangursrammar); þetta viðfangsefni gefur þér aðferðirnar sem prófa hvort hún breytti því í raun, og hversu miklu. Bæði kostnaðar- og ábatagreining og hagkvæmnigreining (sjá Viðfangsefni 2.2 — Þjóðhagsleg kostnaðar- og ábatagreining og hagkvæmnigreining) og samfélagsleg ávöxtun fjárfestingar (sjá Viðfangsefni 2.3 — Samfélagsleg ávöxtun fjárfestingar og mæling áhrifa) þurfa varnarhæfa áhrifastærð til að vinna með; þetta viðfangsefni er þar sem sú áhrifastærð kemur frá, eða þar sem þú lærir að talan sem þú hefur þegar getur ekki borið þá þyngd sem á hana er lögð.

Hagsmunirnir eru ekki aðeins fjárhagslegir. Ríkisstjórn sem stækkar óskilvirka áætlun því gallað mat lét hana líta skilvirka út hefur sóað fé og, oft verra, vikið fyrir raunverulega skilvirkum valkosti sem fékk aldrei tækifæri; ríkisstjórn sem fellir skilvirka áætlun því barnalegur samanburður lét hana líta gagnslausa út hefur eyðilagt virði sem betur hannað mat hefði verndað. Að ná orsakaauðkenningu rétt, og að vita hvenær þú getur það ekki, er sjálft almannavirðishæfni, ekki aukaáhugamál sérfræðings.

## Lykilhugtök

**Orsakaályktun** er sú grein tölfræðinnar sem snýst um að staðfesta hvort, og hversu mikið, breyting einnar breytu veldur breytingu í annarri, aðgreint frá því að breyturnar hreyfist einfaldlega saman. Hún leggur til hugmyndagrunninn – mótsagnarökhugsun (counterfactual reasoning), tungumál meðferðar og viðmiðunar, skrá yfir tilteknar ógnir við orsakafullyrðingu – sem sérhver aðferð í þessu viðfangsefni sækir í. Wikipedia: [Causal inference](https://en.wikipedia.org/wiki/Causal_inference).

**Mótsögnin** (counterfactual) er niðurstaðan sem einstaklingur eða eining hefði upplifað hefði hún ekki fengið áætlunina, og hún er miðlæga, óathugnanlega stærðin sem sérhver orsakaaðferð reynir að nálgast: þú getur horft á hvað varð um þátttakanda, en aldrei hvað hefði orðið um sama einstakling án aðstoðar. Sérhver aðferð hér að neðan er ólík stefna til að smíða trúverðugan staðgengil fyrir þá vantandi athugun. **Rubin-orsakalíkanið**, þróað aðallega af tölfræðingnum Donald Rubin, formgerir þetta sem „mögulegar niðurstöður“ ramma: hver eining hefur mögulega niðurstöðu undir meðferð og eina undir viðmiðun, og orsakaáhrifin eru munurinn á þeim, aðeins önnur þeirra sést nokkru sinni. Wikipedia: [Rubin causal model](https://en.wikipedia.org/wiki/Rubin_causal_model).

**Hrærivilla** (confounding) verður þegar þriðji þáttur hefur áhrif bæði á hvort eining fær áætlun og niðurstöðuna sem áætluninni er ætlað að breyta, sem lætur líta út fyrir að áætlunin hafi valdið áhrifum sem hrærivillan framleiddi í raun. Áhugi, fyrri geta, staðbundin efnahagsskilyrði og auður heimilis eru endurteknar hrærivillur í mati á opinberum áætlunum, því þær hafa reglulega áhrif bæði á hver nýtir þjónustu og hvernig þeim einstaklingi eða stað vegnar eftir á. Wikipedia: [Confounding](https://en.wikipedia.org/wiki/Confounding).

**Valskekkja** (selection bias) er sértækt tilvik hrærivillu sem stafar af því hvernig þátttakendur komast yfirleitt í meðferðarhópinn – sjálfsval, tilvísun starfsfólks eða hæfisreglur – þannig að meðhöndlaðir og ómeðhöndlaðir hópar eru kerfisbundið ólíkir áður en áætlunin snertir þá nokkru sinni. Atvinnuáætlun sem aðeins áhugasamustu atvinnuleitendur skrá sig í mun líta skilvirk út jafnvel þótt hún geri ekkert, því viðmiðunarhópurinn var aldrei sanngjarn staðgengill fyrir hvað þátttakendur hefðu gert án aðstoðar. Wikipedia: [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).

**Fylgni þýðir ekki orsakasamband** er almenna viðvörunin sem þetta viðfangsefni gerir virka: tvær breytur sem hreyfast saman eru samrýmanlegar því að önnur valdi hinni, öfugt, sameiginlegri orsök eða tilviljun, og mynstrið eitt getur ekki greint á milli. Íssala og drukknanir hækka báðar á hverju sumri án þess að önnur valdi hinni, því hlýtt veður knýr báðar; mat á opinberum áætlunum er fullt af lúmskari útgáfum af sömu gildru. Wikipedia: [Correlation does not imply causation](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation).

**Slembiröðuð samanburðarrannsókn (RCT)**, kölluð **slembiraðað mat** í ritum um stefnumat, úthlutar hæfum einingum af handahófi í meðferðarhóp sem fær áætlunina og viðmiðunarhóp sem fær hana ekki, svo að báðir hópar eru að meðaltali ólíkir aðeins í því hvort þeir voru meðhöndlaðir. Slembiröðun er öflug því hún tekur á hrærivillu í heild: hún jafnar bæði hrærivillurnar sem þú getur mælt og þær sem þú getur ekki, án þess að þurfa að nefna þær fyrirfram. Wikipedia: [Randomized controlled trial](https://en.wikipedia.org/wiki/Randomized_controlled_trial).

**Mismunur mismunar (DiD)** ber saman breytingu á niðurstöðum yfir tíma hjá meðhöndluðum hópi við breytinguna á sama tímabili hjá samanburðarhópi sem fékk ekki áætlunina, með þeirri forsendu að án áætlunarinnar hefðu hóparnir tveir fylgt samsíða þróun. Þetta er vinnuhesturinn þegar áætlun náði til eins lögsagnarumdæmis á undan öðru og slembiröðun var aldrei kostur, því hún getur notað reglubundið safnað stjórnsýslugögn frekar en sérsmíðaða rannsókn. Wikipedia: [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).

**Ósamfelluhönnun aðhvarfs (RDD)** nýtir áætlunarreglu sem úthlutar meðferð á grundvelli mælds stigs sem fer yfir fast skiptamark – bætur sem hefjast nákvæmlega við tekjumörk, leiðréttandi kennsla sem úthlutað er nemendum rétt undir lágmarkseinkunn – og ber saman niðurstöður eininga rétt fyrir ofan og rétt fyrir neðan, sem eru að öðru leyti sambærilegar. Þar sem hvoru megin markanna eining lendir er í raun handahófskennt í þröngu belti í kringum þau, nálgast samanburðurinn staðbundna slembiraðaða tilraun án þess að nokkur hafi slembiraðað neinu. Wikipedia: [Regression discontinuity design](https://en.wikipedia.org/wiki/Regression_discontinuity_design).

**Hjálparbreytumat (IV)** notar þriðju breytu, „hjálparbreytu“ (instrument), sem hefur áhrif á þátttöku í áætlun en hefur engin bein áhrif á niðurstöðuna nema í gegnum þá þátttöku, til að afmá þann hluta sambands meðferðar og niðurstöðu sem hrærivilla myndi annars menga. Klassísk hjálparbreyta í opinberri stefnu er fjarlægð að þjónustustað, eða úthlutun sætis með hlutkesti, sem breytir þátttöku án þess að valda niðurstöðunni sjálfstætt; mestur hluti erfiðleika aðferðarinnar liggur í að verja að hjálparbreytan hafi aðeins áhrif á niðurstöðuna í gegnum áætlunina. Wikipedia: [Instrumental variables estimation](https://en.wikipedia.org/wiki/Instrumental_variables_estimation).

**Náttúruleg tilraun** er aðstæður, sprottnar af stefnu, landafræði eða tilviljun frekar en hönnun rannsakanda, þar sem sumir eru útsettir fyrir áætlun og sambærilegir aðrir ekki, eins og tilraun hefði verið gerð án þess að nokkur hafi gert hana. Stefnubreyting sem tekur gildi við afmælisdagsskilgreiningu, mörk sem setja næstum eins heimili í ólík lögsagnarumdæmi, eða hlutkesti sem skammtar umsótt sæti eru náttúrulegar tilraunir sem RDD, IV eða DiD geta svo greint. Wikipedia: [Natural experiment](https://en.wikipedia.org/wiki/Natural_experiment).

**Hawthorne-áhrifin** nefna hættuna á að fólk breyti hegðun sinni einfaldlega vegna þess að það veit að fylgst er með því, óháð raunverulegu innihaldi áætlunarinnar, sem getur blásið upp metin áhrif ef viðmiðunarhópurinn er ekki athugaður með jafnmikilli ákefð – athöfn mælingarinnar getur sjálf orðið hluti af meðferðinni. Wikipedia: [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).

**Tölfræðilegur styrkur** (statistical power) er líkurnar á að mat greini sönn áhrif af tiltekinni stærð ef þau eru til, og fer aðallega eftir úrtaksstærð, áhrifastærðinni sem leitað er að og hversu mikið niðurstöður sveiflast innan hópa. Vanstyrkt mat sem finnur „engin marktæk áhrif“ hefur oft ekki sýnt að áætlunin geri ekkert; það hefur sýnt að matið var of lítið til að segja til um hvort heldur, aðgreining sem leiðtogar missa oft af undir þrýstingi að komast að niðurstöðu. Wikipedia: [Power (statistics)](https://en.wikipedia.org/wiki/Power_(statistics)).

## Bestu starfsvenjur

1. **Ákveddu matshönnunina áður en áætlunin hefst, ekki eftir.** Slembiraðað mat, áfangaskipt útfærsla sem hentar mismun mismunar eða hæfismörk sem henta ósamfelluhönnun aðhvarfs er mun auðveldara að byggja inn frá byrjun en að bæta við eftir á þegar afhending er þegar hafin á tilfallandi hátt.
2. **Segðu mótsögnina skýrt í hverri matsbeiðni.** Skrifaðu niður, í einni setningu, við hvað þú ert að bera þátttakendur saman – enga áætlun, fyrri áætlun, annað inngrip – því ósögð mótsögn er þar sem hörðustu matsdeilurnar reynast oftast felast.
3. **Líttu á einfaldan samanburð fyrir og eftir sem upphafstilgátu, aldrei sem niðurstöðu.** Niðurstöður reka af mörgum ástæðum sem tengjast ekki áætlun þinni – efnahagshringrás, árstíðabundin áhrif, aðrar stefnubreytingar sem lenda samtímis – og hönnun fyrir og eftir getur ekki aðgreint framlag áætlunar þinnar frá þeirra.
4. **Láttu aðferðina passa við regluna sem úthlutaði áætluninni, ekki aðferðina sem þú þekkir best.** Áætlun skömmtuð með hlutkesti kallar á rökfræði slembiraðaðs mats jafnvel þótt þú kallir það aldrei rannsókn; áætlun úthlutað með stigamörkum kallar á ósamfelluhönnun aðhvarfs; áætlun sem fór til sumra svæða á undan öðrum kallar á mismun mismunar.
5. **Forskráðu árangursmælikvarðana og greiningaráætlunina áður en þú sérð niðurstöðurnar.** Að ákveða hvaða niðurstaða telst „árangur“ eftir að hafa séð hver þeirra hreyfðist er vel skjalfest leið til falskra jákvæðra niðurstaðna, og forskráning er staðlaða vörnin gegn því.
6. **Styrktu matið fyrir minnstu áhrifastærð sem myndi samt réttlæta kostnað áætlunarinnar, ekki fyrir þægindi.** Mat of lítið til að greina stefnuviðeigandi áhrif mun framleiða ófræðandi niðurstöðuna „enginn marktækur munur“ sem er rangtúlkuð sem sönnun um bilun.
7. **Skilaðu skýrslu um einkenni viðmiðunarhópsins samhliða meðferðarhópnum, ekki aðeins aðalniðurstöðuna.** Trúverðugt mat leyfir efagjörnum lesanda að athuga að hóparnir tveir hafi verið líkir fyrir meðferð; mat sem felur þetta lætur lesandann taka jafnvægi á trú.
8. **Pantaðu matið frá aðila óháðum afhendingarteyminu, eða girtu af greininguna ef þú getur það ekki.** Teymi með hagsmuni af velgengni áætlunar hefur byggingarlega hvöt, oft ómeðvitaða, til að túlka tvíræð sönnunargögn áætluninni í vil.
9. **Aðgreindu tölfræðilega marktækni frá hagnýtri og fjárhagslegri marktækni í hverri skýrslu.** Nákvæmlega metin lítil áhrif og ónákvæmlega metin stór áhrif eru ólíkar niðurstöður sem krefjast ólíkra ákvarðana, og að þjappa báðum í „marktækt“ eða „ekki marktækt“ afmáir aðgreininguna sem fjármögnunarákvörðun þarfnast í raun.
10. **Gerðu fjárveitingu til mats sem fast hlutfall af kostnaði áætlunar á hönnunarstigi, ekki það sem er afgangs.** Áætlun nógu stór til að skipta máli fyrir almannavirði er yfirleitt nógu stór til að fjármagna trúverðugt áhrifamat, og að líta á mat sem valkvætt er hvernig veik sönnunargögn verða venja.
11. **Birtu núll- og neikvæðar niðurstöður með sömu sýnileika og jákvæðar.** Þjónustukaupaumhverfi sem aðeins auglýsir vel heppnuð möt skapar valskekkju í birta sönnunargrunninum sjálfum, sem skekkir allt „hvað virkar“ mat síðar í átt að bjartsýni.
12. **Mataðu sérhvert lokið mat inn í víðari sönnunargrunninn sem geirinn þinn heldur við, ekki aðeins eigið skjalasafn.** Eitt mat, hversu vel hannað sem er, er ein gagnapunktur; kerfisbundin samantekt yfir mörg er það sem breytir niðurstöðu áætlunar í yfirfæranlega þekkingu (sjá Viðfangsefni 2.6 — Samantekt sönnunargagna og hvað virkar).

## Spurningar til að ræða með teyminu

**Hver er mótsögnin sem við erum í raun að bera þessa áætlun saman við, og höfum við sagt það upphátt?** Sérhver áhrifafullyrðing felur í sér samanburð, en teymi láta hann oft vera óbeinan og leyfa „þetta virkaði“ að renna hljóðlega milli „betra en ekkert“, „betra en það sem við gerðum áður“ og „betra en besti valkosturinn sem við hefðum getað fjármagnað“. Biðjið matsstjóra ykkar að orða mótsögnina sem eina setningu á einföldu máli, og athugið síðan hvort sönnunargögnin sem þið hafið styðja í raun fullyrðingu um þann tiltekna samanburð. Ef heiðarlega mótsögnin er „við vitum ekki hvað hefði gerst annars“, líttu á núverandi áhrifafullyrðingu sem tilgátu, ekki niðurstöðu, og ræðið hvað þyrfti til að loka því bili.

**Gætu fólkið eða staðirnir sem nýttu þessa áætlun verið kerfisbundið ólíkir þeim sem gerðu það ekki, á vegu sem hefðu líka áhrif á niðurstöðuna?** Þetta er valskekkjuspurningin, og hana er þess virði að spyrja jafnvel þegar – einkum þegar – svarið virðist augljóslega „nei“. Áhugi, fyrri aðstæður, staðbundin geta og tilvísunarmynstur starfsfólks eru algengar faldar uppsprettur munar sem framleiða villandi áhrifamat jafnvel með stóru, vandvirknislegu úrtaki. Ef teymið getur ekki lýst því hvernig þátttakendur enduðu í áætluninni getur það ekki útilokað þetta, og það bil ætti að valda þér meiri áhyggjum en lítil úrtaksstærð.

**Var matshönnun okkar byggð inn í áætlunina, eða bætt við eftir á, og hvað kostaði það okkur?** Slembiraðað mat, áfangaskipt útfærsla eða stigagreind hæfismörk eru öll mun ódýrari og trúverðugri þegar þau eru skipulögð fyrir upphaf en þegar þau eru endurbyggð úr hvaða stjórnsýslugögnum sem lifðu af. Spyrjið hvaða matshönnunarkostir voru íhugaðir á hönnunarstigi áætlunarinnar, og ef enginn var, líttu á það sem ferilbil til að loka fyrir næstu áætlun, ekki aðeins takmörkun þessarar. Ræðið hvaða gögn þyrftu að vera til frá fyrsta degi fyrir næstu stóru áætlun til að styðja trúverðugt orsakamat.

**Er úrtakið okkar nógu stórt til að greina áhrif sem vert er að vita um, og myndum við þekkja vanstyrkta niðurstöðu „engin áhrif“ ef við sæjum hana?** Mat sem greinir frá engum tölfræðilega marktækum áhrifum er stundum rétt að segja þér að áætlunin virkar ekki, og stundum aðeins að segja þér að matið var of lítið til að sjá áhrif sem eru raunverulega til staðar. Biðjið greinendur ykkar að segja minnstu áhrifastærð sem matið var styrkt til að greina, og berið það saman við áhrifastærðina sem myndi í raun réttlæta kostnað áætlunarinnar. Ef þessar tvær tölur eru langt frá hvorri annarri gæti niðurstaðan „engin áhrif“ verið ófræðandi frekar en dæmandi, og teymið ætti að segja það skýrt frekar en að láta þögnina vera lesna sem bilun.

**Hver nýtur góðs, faglega eða orðsporslega, ef þetta mat kemur jákvætt út, og breytir það því hversu mikla óháða rýni það þarfnast?** Þetta er ekki ásökun um óheiðarleika; það er viðurkenning á því að fólk sem hannaði eða afhendir áætlun er byggingarlega líklegra til að túlka tvíræðar niðurstöður sanngjarnlega, oft án þess að taka eftir því. Ræðið hvort matið var pantað, greint eða yfirfarið af einhverjum óháðum afhendingarteyminu, og ef ekki, hvernig hóflegur skilveggur myndi líta út fyrir áætlun af þessari stærð. Markmiðið er niðurstaða sem tortryggnasti fjármögnunaraðili ykkar myndi líka treysta, ekki aðeins sú sem eigið teymi ykkar er sátt við að verja.

**Ef niðurstaða þessa mats er traust, hvað myndum við gera öðruvísi í raun, og erum við tilbúin að gera það?** Mat pantað en aldrei ætlað að breyta ákvörðun er sokkinn kostnaður klæddur sem áreiðanleikakönnun, og það er þess virði að nefna þá áhættu áður en niðurstöður berast, ekki eftir. Ræðið, fyrirfram, hvað sterk jákvæð niðurstaða myndi réttlæta (stækkun, og um hversu mikið) og hvað núll- eða neikvæð niðurstaða myndi kalla fram (endurhönnun eða afnám, og á hvaða tímalínu). Ef enginn í herberginu getur svarað þessu áður en hann sér niðurstöðurnar gæti matið verið að þjóna lögmætishlutverki frekar en ákvörðunarhlutverki, og það er þess virði að vera heiðarlegur um (sjá Viðfangsefni 2.1 — Stigatafla almannavirðis og árangursrammar).

## Í reynd: dæmi um almannavirði

Skálduð lýsing. Atvinnuþjónusturáðuneyti í ónefndu, miðlungsstóru landi rak eins árs tilraunaverkefni með ákafa þjálfunarþjónustu fyrir langtímaatvinnuleitendur, samhliða hefðbundinni þjónustu. Við lok tilraunarinnar bar innri skýrsla saman hópinn sem fékk ákafa þjálfun við alla aðra sem fóru af atvinnuleysisskrá á sama tímabili: þjálfaði hópurinn hafði 38% atvinnuhlutfall innan sex mánaða, samanborið við 24% hjá restinni af málaskránni. Ráðherrum var sagt að áætlunin „virkaði“ og viðskiptarök fóru fram um útfærslu á landsvísu.

Áður en fjármögnun var samþykkt spurði fjármálanefndin einfaldrar spurningar: hvernig höfðu atvinnuleitendur endað í þjálfaða hópnum til að byrja með? Svarið reyndist skipta gífurlega miklu máli. Málastjórar höfðu vísað atvinnuleitendum sem þeir mátu „líklegasta til að njóta góðs“ í þjálfunartilraunina, vel meint forgangsröðunarákvörðun sem hafði í raun valið vinnuhæfari hóp í meðferð frá byrjun. Samanburðurinn 38% á móti 24% var mengaður af einmitt þeirri valskekkju sem þetta viðfangsefni varar við: það var algerlega mögulegt að þjálfaði hópurinn hefði staðið sig betur en restin af málaskránni jafnvel án nokkurrar þjálfunar.

Frekar en að samþykkja eða hafna útfærslunni á þeim samanburði lagði matseining ráðuneytisins til annan áfanga með hlutkesti. Eftirspurn eftir þjálfunarþjónustunni var þegar meiri en framboð sæta, svo einingin úthlutaði sætum af handahófi milli jafnhæfra umsækjenda og bar saman atvinnuhlutfall hlutkestissigurvegara og hlutkestistapara, beiting rökfræði slembiraðaðs mats án þess að þurfa að halda þjónustunni frá neinum sem annars hefði fengið hana. Tólf mánuðum síðar sýndi hlutkestissamanburðurinn minni en þó raunveruleg áhrif: 9 prósentustiga bætingu á sex mánaða atvinnuhlutfalli, ekki 14 stiga bilið sem upprunalegi samanburðurinn hafði gefið til kynna. Ráðuneytið notaði hlutkestismatið, ásamt eigin kostnaðargögnum, til að smíða varnarhæf hagkvæmnirök (sjá Viðfangsefni 2.2 — Þjóðhagsleg kostnaðar- og ábatagreining og hagkvæmnigreining) fyrir stigkvarðaða en auðlindaskorða útfærslu, frekar en stærri, óframkvæmanlega útvíkkun sem gallaði upphaflegi samanburðurinn hefði réttlætt.

## Fjögur geirasjónarhorn

### Sveitarfélög

Sveitarfélög reka yfirleitt margar litlar og meðalstórar áætlanir frekar en fáar mjög stórar, sem gerir sérsmíðað slembiraðað mat dýrt miðað við stærð áætlunar og ýtir staðbundnum matsmönnum í átt að hálftilraunaaðferðum sem endurnýta stjórnsýslugögn sem þegar er safnað – mismun mismunar þvert á þjónustusvæði sem tóku upp breytingu á mismunandi tímum, eða ósamfelluhönnun aðhvarfs umhverfis staðbundin hæfismörk. Munur á mörkum og lögsagnarumdæmum sem væri óþægindi annars staðar er oft besta náttúrulega tilraun staðbundins matsmanns, því tvö nágrannahverfi eða -umdæmi geta verið ólík í stefnu en lík í flestu öðru.

### Ríkisvald

Ríkisvöld hafa umfangið til að fjármagna sérsmíðað slembiraðað mat og stjórnsýslugagnasöfnin, oft tengd milli skatta-, bóta-, heilbrigðis- og menntaskráa, til að keyra trúverðuga hálftilraunahönnun við lágan jaðarkostnað. Þetta umfang er líka þar sem verkefnahópar um „hvað virkar“ og miðlægar matsleiðbeiningar, svo sem staðlað matshandbók fjármálaráðuneytis, eiga heima, því aðeins ríkisstjórn getur réttlætt fastan kostnað við að viðhalda föstum matsinnviðum og sameiginlegum aðferðafræðilegum staðli yfir mörg ráðuneyti.

### Félagageirinn og félagasamtök

Félagasamtök og frjáls félagasamtök hafa sjaldan úrtaksstærðir eða fjárlög sem vel styrkt slembiraðað mat þarfnast, og áætlanir þeirra breytast oft aðlögunarlega til að bregðast við því sem starfsfólk í framlínu tekur eftir, sem flækir hverja hönnun sem gerir ráð fyrir stöðugri, vel skilgreindri meðferð. Samstarf við fræðilegan rannsóknarhóp eða sérhæfðan matsmiðlara, af því tagi sem hefur vaxið í kringum slembiraðaða matshreyfinguna í alþjóðlegri þróun, er oft eina raunhæfa leiðin að ströngu orsakamati, og fjármögnunaraðilar biðja í auknum mæli um einmitt þess konar ytra samstarf áður en þeir skuldbinda fjölára styrki.

### Fjölþjóðlegt og alþjóðlegt

Fjölþjóðlegar stofnanir fjármagna áætlanir í mörgum löndum með ólík gagnakerfi, stjórnsýslugetu og siðferðisyfirferðarvenjur, sem gerir stöðluðum orsakaaðferðum erfiðara að beita jafnt en skapar líka náttúrulegan breytileika milli landa sem getur sjálfur orðið náttúruleg tilraun þegar stefna er tekin upp í sumum aðildarríkjum á undan öðrum. Slembiraðað mat í þróunarhagfræði hefur verið sérstaklega áhrifamikið á þessum skala, framleitt sönnunargögn sem mótuðu hvernig alþjóðleg þróunarfjármögnun er úthlutað, en þau bera líka skjalfesta hættu á ytri réttmætisbresti: niðurstaða sem heldur í landinu og samhenginu sem var rannsakað flyst ekki sjálfkrafa yfir í annað samhengi, fyrirvari sem hönnun fjölþjóðlegra áætlana sleppir of oft.

## Algeng mistök

**Barnalegi samanburðurinn fyrir og eftir.** Áætlun er dæmd eingöngu með því að bera saman niðurstöður áður en hún hófst við niðurstöður eftir, án nokkurs viðmiðunarhóps, svo sérhver þróun sem þegar var í gangi – efnahagsbati, lýðfræðileg breyting, sjálfstæð stefnubreyting – er ranglega eignuð áætluninni. Kostnaðurinn er örugg orsakasaga byggð á hönnun sem getur í raun ekki greint áhrif áætlunarinnar frá öllu öðru sem gerðist á sama tíma.

**Valskekkja tekin fyrir áhrif áætlunar.** Þátttakendur sem skráðu sig sjálfir, eða var vísað inn því þeir virtust líklegir til að ná árangri, eru bornir saman við alla aðra, sem framleiðir áhrifamat sem er í raun mælikvarði á hverja áætlunin laðaði að sér frekar en hvað hún gerði við þá. Kostnaðurinn er stækkuð áætlun sem lítur minna skilvirk út, stundum mun minna, þegar hún nær til minna sjálfvalins þýðis.

**Vanstyrkta matið sem tilkynnt er sem núlliniðurstaða.** Lítið tilraunaverkefni finnur „engin tölfræðilega marktæk áhrif“ og er lesið sem sönnun þess að áætlunin virki ekki, þegar úrtakið var í raun of lítið til að greina áhrif af þeirri stærð sem skipti máli. Kostnaðurinn fer í báðar áttir: raunverulega skilvirk áætlun getur verið felld á styrk sönnunargagna sem voru aldrei fær um að sýna að hún virkaði, eða auðlindir færast til að fjármagna stærri rannsókn sem hefði ekki þurft ef upprunalega matsbeiðnin hefði verið rétt styrkt.

**Að útvíkka staðbundið mat út fyrir samhengi þess.** Ósamfelluhönnun aðhvarfs metur rétt áhrifin fyrir einingar nálægt hæfismörkunum, og hjálparbreytumat metur rétt áhrifin fyrir einingar þar sem meðferðarstöðu hjálparbreytan breytti í raun, en bæði niðurstöður eru svo notaðar á allt þýðið eins og matið héldi alls staðar. Kostnaðurinn er stefna stækkuð á styrk tölu sem var aðeins nokkru sinni sönn staðbundið.

**Mat sem leikhús.** Mat er pantað til að skapa útlit sannreyndrar ákvarðanatöku, en ákvörðunin hefur í raun þegar verið tekin og engin trúanleg niðurstaða hefði breytt henni. Kostnaðurinn er sóað matsfé og, meira ætandi, hæg rýrnun trausts á mati sjálfu þegar starfsfólk tekur eftir að niðurstöður virðast aldrei breyta útkomu.

## Þroskalíkan

| Undirvídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Matshönnun valin í samhengi við áætlunarhönnun | Mat, ef eitthvert, er eftiráhugsun þegar afhending er hafin | Sum teymi íhuga hönnunarkosti óformlega, ósamræmt | Staðlaður ákvörðunarleiðarvísir passar gerð áætlunar við matsaðferð | Hönnunarval er yfirfarið og samþykkt fyrir upphaf, um alla skipulagsheildina | Hönnunarstaðlar eru sameiginlegir og bornir saman við jafningjaskipulagsheildir |
| Meðhöndlun vals og hrærivillu | Samanburður gerður án athygli á því hvernig hóparnir eru ólíkir | Nokkur vitund um valskekkju, tekið á tilfallandi | Staðlaðar athuganir á samanburðarhæfni meðferðar- og samanburðarhópa | Samanburðarhæfni er endurskoðuð óháð áður en niðurstöður eru samþykktar | Aðferðum til að meðhöndla val er deilt opinskátt og þær bættar með jafningjum |
| Tölfræðilegur styrkur og úrtaksáætlanagerð | Úrtaksstærð ákveðin af þægindum, ekki af áhrifastærðinni sem leitað er | Styrkur er stundum ræddur en sjaldan reiknaður formlega | Styrkútreikningar eru skyldubundinn hluti hverrar matsáætlunar | Vanstyrkt möt eru flögguð og annaðhvort styrkt eða endurrömmuð | Styrkstaðlar eru samræmdir yfir safn tengdra áætlana |
| Sjálfstæði og gagnsæi niðurstaðna | Möt framkvæmd og túlkuð eingöngu af afhendingarteyminu | Innri yfirferðaraðili athugar stöku sinnum niðurstöður | Óháð yfirferð eða afgirðing er staðlað fyrir stór möt | Óháðar niðurstöður, jákvæðar og neikvæðar, eru birtar sem venja | Óháð matsgeta er sameinuð eða deilt milli skipulagsheilda |
| Matsniðurstöður sem næra ákvarðanir | Niðurstöður eru framleiddar en sjaldan endurskoðaðar þegar ákvörðun er tekin | Niðurstöður upplýsa stundum síðari fjárlagalotur | Skilgreint ferli beinir niðurstöðum inn í fjármögnunar- og stækkunarákvarðanir | Ákvarðanir eru raktar gegn niðurstöðum og misræmi útskýrt | Niðurstöður næra sameiginlegan, þvert á skipulagsheildir sönnunargrunn (sjá Viðfangsefni 2.6 — Samantekt sönnunargagna og hvað virkar) |

## Gátlisti

- [ ] Segðu mótsögnina fyrir hvert stórt áætlunarmat í einni setningu á einföldu máli.
- [ ] Staðfestu hvernig þátttakendur komust í meðferðarhópinn og metið hvort það ferli gæti sjálft skýrt niðurstöðumuninn.
- [ ] Veldu matsaðferðina (slembiraðað mat, mismun mismunar, ósamfelluhönnun aðhvarfs, hjálparbreytur eða náttúrulega tilraun) til að passa við raunverulegu úthlutunarregluna, fyrir upphaf afhendingar hvar sem unnt er.
- [ ] Reiknaðu tölfræðilega styrkinn sem þarf til að greina minnstu áhrifastærð sem myndi réttlæta kostnað áætlunarinnar.
- [ ] Forskráðu árangursmælikvarða og greiningaráætlun áður en niðurstöður sjást.
- [ ] Greindu frá samanburðarhæfni meðferðar- og samanburðarhópa samhliða aðalniðurstöðunni.
- [ ] Pantaðu eða yfirfarðu matið í gegnum starfsemi óháða afhendingarteyminu.
- [ ] Aðgreindu tölfræðilega marktækni frá fjárhagslegri og hagnýtri marktækni í hverri skýrslu til ákvörðunaraðila.
- [ ] Gerðu fjárveitingu til mats sem fast hlutfall af kostnaði áætlunar á hönnunarstigi.
- [ ] Birtu núll- og neikvæðar niðurstöður með sömu sýnileika og jákvæðar.
- [ ] Athugaðu hvort jákvætt staðbundið mat (úr ósamfelluhönnun aðhvarfs eða hjálparbreytum) sé útvíkkað umfram þýðið sem það nær í raun yfir.
- [ ] Beindu lokið mati inn í víðari sönnunargrunninn sem geirinn þinn heldur við, ekki aðeins eigið skjalasafn.

## Helstu heimildir

Aðferðafræðilegur kjarni þessa viðfangsefnis byggir á hagnýtri hagmælingahefð tengdri Joshua D. Angrist og Jörn-Steffen Pischke, og á mögulegar-niðurstöður rammanum sem Donald Rubin formgerði. Hreyfingin um slembiraðað mat í opinberri stefnu og þróunarhagfræði, tengd Abdul Latif Jameel Poverty Action Lab (J-PAL) og fræðilegu neti þess, leggur til stóran hluta hagnýtu starfsvenjunnar sem vísað er til í geirasjónarhornunum. Opinberir matsstaðlar byggja á Magenta Book leiðbeiningum breska fjármálaráðuneytisins og starfsvenjur sönnunargagnasamantektar byggja á stöðlum Campbell Collaboration um kerfisbundna yfirferð í félagslegri stefnu (sjá Viðfangsefni 2.6 — Samantekt sönnunargagna og hvað virkar).

## Tilvísanir

1. Causal inference — Wikipedia — https://en.wikipedia.org/wiki/Causal_inference
2. Randomized controlled trial — Wikipedia — https://en.wikipedia.org/wiki/Randomized_controlled_trial
3. Difference in differences — Wikipedia — https://en.wikipedia.org/wiki/Difference_in_differences
4. Regression discontinuity design — Wikipedia — https://en.wikipedia.org/wiki/Regression_discontinuity_design
5. Instrumental variables estimation — Wikipedia — https://en.wikipedia.org/wiki/Instrumental_variables_estimation
6. Natural experiment — Wikipedia — https://en.wikipedia.org/wiki/Natural_experiment
7. Correlation does not imply causation — Wikipedia — https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation
8. Confounding — Wikipedia — https://en.wikipedia.org/wiki/Confounding
9. Selection bias — Wikipedia — https://en.wikipedia.org/wiki/Selection_bias
10. Rubin causal model — Wikipedia — https://en.wikipedia.org/wiki/Rubin_causal_model
11. Hawthorne effect — Wikipedia — https://en.wikipedia.org/wiki/Hawthorne_effect
12. Power (statistics) — Wikipedia — https://en.wikipedia.org/wiki/Power_(statistics)
13. J-PAL (Abdul Latif Jameel Poverty Action Lab) — Massachusetts Institute of Technology — https://www.povertyactionlab.org/
14. Impact Evaluation in Practice — Paul J. Gertler, Sebastian Martinez, Patrick Premand, Laura B. Rawlings, and Christel M. J. Vermeersch, World Bank — https://www.worldbank.org/en/programs/sief-trust-fund/publication/impact-evaluation-in-practice
15. Mostly Harmless Econometrics: An Empiricist's Companion — Joshua D. Angrist and Jörn-Steffen Pischke, Princeton University Press — https://press.princeton.edu/books/paperback/9780691120355/mostly-harmless-econometrics
16. The Magenta Book — HM Treasury — https://www.gov.uk/government/publications/the-magenta-book
17. Campbell Collaboration — Campbell Collaboration — https://www.campbellcollaboration.org/
18. What Works Network — UK Cabinet Office — https://www.gov.uk/guidance/what-works-network
