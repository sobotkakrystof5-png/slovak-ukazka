# PROMPT PRO CLAUDE CODE A ANTIGRAVITY: Mafremont landing page

Vlož celý dokument jako první zadání do nového repozitáře. Pokud pracuješ v Antigravity, použij soubor `AGENTS-mafremont.md` uložený jako `AGENTS.md` v kořeni projektu (pro Claude Code soubor `CLAUDE-mafremont.md` uložený jako `CLAUDE.md`). Tento brief je zdrojem pravdy pro obsah, design i chování.

---

## 0. KRITICKÉ: WEB NESMÍ VYPADAT JAKO "AI ŠABLONA"

Toto je nejdůležitější pokyn v celém zadání. Většina webů generovaných AI vypadá stejně: centrovaný hero, tři identické karty s ikonou, fialovo-modrý gradient, všechno se při scrollu vysouvá zdola. Tento web musí vypadat, jako by ho ručně navrhl zkušený designér přesně pro tuto firmu a doladil každý detail.

**Vyhni se:**
- Hero typu „velký centrovaný nadpis + podnadpis + dvě tlačítka vedle sebe + gradient". Pokud použiješ rozložení s textem vlevo a obrazem vpravo, přidej asymetrii, neobvyklé proporce, prvek, který přetéká mřížku.
- Mřížce tří až čtyř stejných karet (ikona, nadpis, text). Každá sekce má vlastní kompozici.
- Gradientům, glassmorphismu bez účelu, 3D ilustracím, nezměněným sadám ikon.
- Animaci „fade-in + slide-up" na všem. Animace používej záměrně a s vlastním rytmem.
- Výplňovým frázím („Sme tím profesionálov", „Kvalita je naša priorita"). Každý text je konkrétní.
- Stejnému paddingu a šířce kontejneru ve všech sekcích. Střídej hustotu a rytmus.
- Výchozímu Tailwind/shadcn vzhledu bez typografické osobnosti. Tracking, řádkování a kontrast velikostí laď ručně.

**Místo toho:**
- **Podpisový motiv: potrubní linka.** Jedna tenká technická linka (jako schéma potrubí a rozvodů, s koleny, T-kusy a malými uzavíracími ventily jako uzlovými body) vede stránkou od hero dolů a spojuje sekce. Na uzlech se mění symbol: kapka (voda), plamen (teplo), slunce (fotovoltika). Linka se při scrollu postupně „plní" modrou a v teplých sekcích přechází do oranžové. Je to podpis, ne dekorace v každém rohu. Na mobilu se zjednoduší na krátké úseky u nadpisů.
- Každá sekce má vlastní logiku rozložení, jiný poměr textu a obrazu, jiné zarovnání.
- Mikrointerakce na míru obsahu (např. kapka, která doběhne do tlačítka při hoveru), ne obecné `scale-105`.
- Autentické texty ve hlase firmy.

Pokud si nejsi jistý, zda něco nepůsobí šablonovitě, navrhni originálnější variantu nebo se zeptej. Nesahej po nejběžnějším řešení.

---

## 1. KONTEXT PROJEKTU A OBSAH KLIENTA

Jde o redesign webu **www.mafremont.sk** na jednostránkovou prodejní landing page. Starý web (Webnode šablona) má slabou hodnotovou nabídku, žádné reference, slabé CTA a žádný funnel (podrobně v `analyza-mafremont.md`, pokud je v repozitáři).

**Firma:** Mafremont s.r.o. (v patičce starého webu je překlep „s.r..o.", správně `s.r.o.`)
**Obor:** voda, kúrenie, fotovoltika; instalace, opravy a údržba vodovodních, kanalizačních a topných systémů
**Sídlo:** Južná 1, 080 06 Prešov
**Telefon:** +421 948 022 271 (odkaz `tel:+421948022271`)
**E-mail:** info@mafremont.sk
**IČO / DIČ / IČ DPH:** [DOPLNIŤ, na starém webu neuvedeno, neinventovat]
**Otevírací doba:** [DOPLNIŤ, neuvedeno]
**Oblast působení:** [DOPLNIŤ a potvrdit s klientem, neuvedeno]
**Doména:** www.mafremont.sk

**Fakta o firmě (jediná, která smíš použít):**
- Firma vznikla původně v zahraničí.
- Po 6 letech praxe v zahraničí přenesla know-how na Slovensko.
- Pracuje s kvalifikovanými techniky a moderním vybavením.
- Priority: kvalita, spolehlivost, precizní práce v každém projektu.
- Nabízí konzultaci a výběr nejvhodnějšího řešení.
- Pro solární panely uvádí „konkurencieschopné ceny".

**Služby (z originálního webu, zachovat všechny):**
1. **Podlahové kúrenie** (elektrické, teplovodné): kompletní realizace s moderními strojovými potěry, včetně pokládky dlažby nebo vinylové podlahy do finální podoby, konzultace a výběr řešení.
2. **Tepelné čerpadlá:** instalace pro domácnost i komerční prostor, úspora nákladů na vytápění a nižší dopad na životní prostředí.
3. **Solárne panely (fotovoltika):** instalace a údržba, kvalitní a spolehlivé služby za konkurenceschopné ceny.
4. **Kanalizácia a odpady:** řešení kanalizací a odpadů v domácnostech i komerčních prostorách, čištění odpadového potrubí.
5. **Elektrikárske práce:** nákup materiálu, montáž, servis.
6. **Vzduchotechnika a klimatizácia:** energeticky účinná řešení, úspora na chlazení a topení, komfort a produktivita.
7. **Vodoinštalácie:** instalace, oprava a údržba vodovodních systémů.

**Nikdy nevymýšlej:** počet realizací, počet let na Slovensku, ceny, záruční lhůty, certifikace, dotace, jména klientů, recenze, hodnocení. Co není výše, je `[DOPLNIŤ]` placeholder, který se zobrazí jako zřetelně označené prázdné místo (viz sekce 6) nebo se sekce skryje přepínačem v konfiguraci.

**Cíl webu:** starý web je **vizitka**, ne prodejní nástroj. Nový web musí být **prodejní a provozní nástroj**: generovat poptávky, šetřit čas firmě i zákazníkovi a udržovat přehled o všech zakázkách. Konkrétně:
1. **Zavolat jedním klepnutím** (aktivní `tel:` odkaz všude, viz sekce 4).
2. **Poslat krátký formulář / rezervovat termín** konzultace nebo obhlídky, aniž by zákazník musel čekat na zavolání zpět.
3. **Evidovat každou poptávku a zakázku** v rezervačním a evidenčním systému s přehledem pro majitele (sekce 5).
4. **Jednoduše oslovit uchazeče o práci** přes samostatný krátký formulář (sekce 5).
5. **Být nalezen** v Google (SEO) i v odpovědích AI (GEO) a **prodávat konkrétními case studies** (sekce 4 a 7a).
6. **Představit firmu jako značku**, ne anonymní šablonu (sekce 2a).

Web musí okamžitě působit důvěryhodně a vést k jediné akci.
**Tón:** věcný, solidní, lidský, bez vnucené familiárnosti a bez marketingového balastu. Firma je etablovaná, nepotřebuje osobní storytelling. Použij jen reálné fakty o původu firmy v zahraničí.
**Jazyk webu: slovenčina** (všechny texty na webu, `<html lang="sk">`, formát čísla `+421 948 022 271`).

---

## 2. LOGO A DESIGN SYSTÉM

### Logo
Použij stávající logo Mafremont (modrý nápis s kapkou). Pokud klient dodá soubor s nevhodným pozadím, odstraň pozadí a ulož průhledné SVG/PNG beze změny barev a tvaru. Do doby dodání loga vytvoř textové logo „MAFREMONT" ve stejném duchu (modré, kapka nad písmenem) a označ ho jako dočasné.

### Barvy
- **Primární modrá:** `#045389` (z původního webu). Používej pro nadpisy, linky, ikony, odkazy.
- **Hluboká tmavá modrá pro text a tmavé sekce:** cca `#0A2236`, ne čistá černá.
- **Bílá / velmi světlá teplá šeď** (`#F6F8FA`): dominantní pozadí.
- **Akcent pro CTA: teplá oranžová** (cca `#F26B1D`, doladit kvůli kontrastu). Používej střídmě: hlavní tlačítka, aktivní uzel potrubní linky, drobné zvýraznění. Oranžová evokuje teplo a slunce a odlišuje akci od identitní modré.
- Poměr: zhruba 80 až 85 % neutrální, zbytek modrá a oranžová. Akcent nesmí zaplnit velké plochy.
- **Zkontroluj kontrast WCAG AA** u každé kombinace, zejména bílý text na oranžové a oranžová na bílé. Pokud oranžová neprojde, ztmav ji nebo použij tmavý text na ní.

### Typografie
- Nadpisy: **Exo 2** (kontinuita se stávajícím webem), silné řezy, vlastní ladění trackingu a řádkování. Alternativně Sora či Space Grotesk, pokud Exo 2 nepůsobí dost moderně.
- Tělo: čitelné bezpatkové písmo s dobrým řádkováním (např. Inter nebo Manrope). **Nikdy nespadni na výchozí patkové písmo** (starý web to dělá).
- Jasná hierarchie, výrazný hero nadpis, kontrastní velikosti.

### Vizuální jazyk
- Moderní, čistý, technicky přesný. Inspirace: schematický výkres rozvodů, tenké linky, hodně vzduchu, ostré rohy kombinované s několika zaoblenými prvky (ne všude stejně).
- Fotky: skutečné fotky z realizací. Stávající hero (3D render domu) **nepoužívat**, působí jako stock a snižuje důvěru.
- Placeholdery fotek: viz sekce 6. **Žádné stockové fotky jako výplň.**

---

## 2a. ZNAČKA A POZICOVÁNÍ (starý web firmu jako značku vůbec nepředstavuje)

Starý web je obecný, bez zaměření, bez osobnosti a bez slibu. Nový web musí firmu postavit jako **konkrétní značku**.

**Návrh pozicování (potvrdit s klientem, než se na něm postaví texty):**
- **Zaměření (hlavní téma):** teplo a energie pro domy a firmy. Vlajkové služby: podlahové kúrenie, tepelné čerpadlá, fotovoltika.
- **Servisní a doplňkové služby:** vodoinštalácie, kanalizácia a odpady, elektrikárske práce, vzduchotechnika a klimatizácia. Jsou na webu, ale nezastiňují hlavní téma.
- **Rozlišovač (jen to, co je ověřeno):** praxe 6 let v zahraničí přenesená na Slovensko, kvalifikovaní technici a moderní vybavení, kompletní realizace od materiálu po hotovou podlahu, jedna firma místo několika řemeslníků.
- **Slib značky (návrh k doladění):** „Jedna firma pro vodu, teplo a energiu vo vašom dome. Jeden telefón, jasný postup, hotová práca."
- **Osobnost a hlas:** věcný, přesný, spolehlivý, lidský. Žádná velká slova, žádné klišé. Řemeslo bez ztráty srozumitelnosti.
- **Hodnoty z klienta:** kvalita, spolehlivost, precíznost v každém projektu.

**Co z toho vyplývá pro web:**
- Brand platforma (pozicování, slib, hlas, hodnoty) je zapsaná v `js/content.js` a řídí všechny texty.
- Konzistentní vizuální identita (modrá, kapka, potrubní linka, písmo) a konzistentní hlas v celém webu, formuláři, e-mailech i patičce.
- Lidé a práce na očích: fotka majitele nebo týmu, fotky z reálných realizací (viz case studies). Žádný stock.
- Název firmy, adresa a telefon (NAP) jsou na webu, v JSON-LD a v Google Business Profile stejné do posledního znaku.
- Pokud klient s pozicováním nesouhlasí, změň ho v jednom místě (`js/content.js`) a uprav texty podle něj. Neztrácej konzistenci.

---

## 3. TECHNICKÝ STACK

**Stack: čisté HTML, CSS a vanilla JavaScript (ES moduly). Žádný frontend framework, žádný bundler, žádný build krok pro hlavní web.** Cíl je co nejjednodušší provedení: statické soubory, které lze otevřít, upravit a nasadit bez nástrojů. Hostování na Vercelu (nebo Netlify / Cloudflare Pages) jako statický web.

Doporučená struktura souborů:
```
/index.html          landing page
/css/                tokens.css (barvy, písma, rozestupy), base.css, sections.css
/js/                 main.js (navigace, scrollspy, potrubní linka), forms.js, config.js
/js/content.js       veškerý obsah a [DOPLNIŤ] hodnoty na jednom místě
/img/                obrázky a placeholdery
/admin/              index.html + admin.js (administrace, noindex)
/api/                tenké serverless funkce (viz níže)
/.env.example        seznam proměnných prostředí
```
- CSS: vlastní CSS s proměnnými (`:root`), bez Tailwindu a bez UI knihoven. Moderní CSS (grid, `clamp()`, kontejnerové a media dotazy) pro responzivitu.
- JavaScript: vanilla, moduly, bez závislostí tam, kde to jde. Animace přes CSS a `IntersectionObserver`. Potrubní linka je inline SVG řízené scroll-progressem (`stroke-dashoffset`). Respektuj `prefers-reduced-motion`.
- Validace formulářů: nativní HTML5 atributy plus malá vlastní JS validace, na serveru znovu.

**Backend a data (pro rezervace, evidenci zakázek a nábor):** **Supabase** (Postgres, Auth, Storage). Veřejný web volá Supabase z prohlížeče pouze přes **publishable (anon) klíč** a jen s právy daný RLS politikami (veřejnost smí **jen vkládat** nové záznamy). Tabulky mj. `poptavky` (zakázky), `terminy` (rezervace), `uchazeci` (nábor). Row Level Security zapnutá na všech tabulkách. Cokoli, co potřebuje tajný klíč (odeslání e-mailů přes Resend nebo podobnou službu, service-role operace, kontrola kolizí termínů, nahrání životopisu), běží v **jedné až třech tenkých serverless funkcích v `/api`** (Vercel Functions, Node.js). **Tajné klíče (Resend, service-role) nikdy nejsou v klientském JS ani v repozitáři**, jen v proměnných prostředí hostingu. Administrace (`/admin`) je statická stránka s vanilla JS, která se přihlašuje přes Supabase Auth, je `noindex` a data čte jen přihlášený majitel díky RLS. Pokud uživatel dá přednost jednodušší variantě, je přijatelná alternativa (např. Cal.com/Calendly embed pro termíny a Airtable/Notion pro přehled), ale **evidence a přehled zakázek je povinná součást, ne volitelná**. Rozhodnutí o variantě patří uživateli, zeptej se před implementací, pokud není jasné.

**Struktura:** **jednostránková landing page (scroll + kotvy)**. Hlavní navigace (prodejní cesta) odkazuje na kotvy: `#sluzby`, `#postup`, `#realizacie`, `#o-nas`, `#faq`, `#kontakt`. Hladký scroll, scrollspy. **Kariéra** je záměrně **mimo hlavní navigaci**: je to samostatná sekce `#kariera` blízko patičky a nenápadný odkaz „Práca u nás" v patičce a hlavičce jako sekundární odkaz (ne jako tlačítko). Nábor nesmí odvádět pozornost od poptávky zákazníka. V navigaci není „Viac".

K administraci patří samostatná stránka `/admin/` (zakázky, termíny a nábor jako záložky v jednom souboru, aby zůstala jednoduchá). Není součástí veřejné landing page a nemá SEO.

Další:
- Mapa: jednoduchý embed Mapy.cz nebo Google Maps na adresu Južná 1, Prešov. Žádné těžké SDK.
- Obrázky: `<img loading="lazy">` s `width`/`height`, moderní formáty (WebP/AVIF) a `srcset`, pevný `aspect-ratio`.
- Mobile-first, plně responzivní.
- SEO: viz sekce 7a. Meta tagy, OpenGraph, sitemap.xml, robots.txt, sémantické HTML5, strukturovaná data.

---

## 4. PRODEJNÍ FUNNEL A STRUKTURA OBSAHU (POŘADÍ SEKCÍ)

**Logika funnelu:** příchod (reklama, Google, doporučení) → okamžitá srozumitelnost nabídky → důkaz důvěry → výběr služby → jak to probíhá → odpovědi na obavy → jednoduchý kontakt. Každá sekce má jedno CTA nebo vede k dalšímu kroku. Hlavní konverze: **klik na telefon**, **odeslání poptávky nebo rezervace termínu**. Vedlejší konverze: **přihláška uchazeče o práci** (mimo hlavní prodejní cestu).

**Klikací kontakty (povinné, starý web je nemá):** každé zobrazení telefonního čísla je odkaz `<a href="tel:+421948022271">`, e-mail je `mailto:info@mafremont.sk`, adresa odkazuje na mapu. Telefonní tlačítko „Zavolať" je v hlavičce, v hero, v sekci kontakt, v patičce i v lepicí liště. Kliknutí na telefon se měří (událost `click_to_call`). Na desktopu zůstává číslo vidět a kopírovatelné, na mobilu zavolá jedním klepnutím.

**Lepicí prvky (sticky):**
- Hlavička s logem, kotvami a tlačítkem „Zavolať" (na mobilu ikona telefonu).
- Na mobilu lepicí spodní lišta se dvěma akcemi: „Zavolať" (`tel:`) a „Objednať termín" (scrolluje k rezervaci a formuláři). Nesmí zakrývat obsah ani cookie lištu.

**Sekce:**

1. **Hero.** Asymetrické rozložení. H1 s konkrétní hodnotou (návrh: „Voda, kúrenie a fotovoltika na kľúč. Jedna firma, jeden telefón."). Podnadpis jedním větným celkem: co děláme a pro koho (domácnosti i komerční prostory) a kde (Prešov a okolie, `[OBLASŤ PÔSOBENIA, potvrdiť]`). Primární CTA (oranžové): „Zavolať +421 948 022 271". Sekundární: „Chcem cenovú ponuku" (kotva k formuláři). Pod nimi mikrodůkaz: „6 rokov praxe v zahraničí, know-how teraz na Slovensku" a „Kvalifikovaní technici, moderné vybavenie". Obraz: reálná fotka realizace, jinak označený placeholder. Čitelnost: tmavý překryv nebo klidná plocha pod textem, telefon velký.

2. **Pás důvěry (trust strip).** Úzký pruh pod hero: pouze ověřená fakta (6 rokov praxe, konzultácia a výber riešenia, `[ZÁRUKA: doplniť]`, `[POČET REALIZÁCIÍ: doplniť]`). Neověřené položky se nezobrazí, dokud je klient nedodá.

3. **Služby (`#sluzby`).** **Ne mřížka stejných karet.** Hierarchie: velký výrazný blok „Podlahové kúrenie" (nejobsáhlejší text, strojové potěry, dlažba/vinyl do finále), vedle něj kompaktní blok „Úspora energie" (tepelné čerpadlá, solárne panely, vzduchotechnika a klimatizácia) a řada rychlých servisních služeb (vodoinštalácie, kanalizácia a odpady, elektrikárske práce). Každý blok má vlastní kompozici a malé CTA („Spýtať sa na podlahové kúrenie" předvyplní službu ve formuláři). Obsah převzít z originálu, přeformulovat do přirozené slovenštiny (viz sekce 11).

4. **Postup spolupráce (`#postup`).** Průhledný postup v 4 až 5 krocích na potrubní lince (každý krok je uzel). Návrh: 1) Zavoláte alebo napíšete. 2) Dohodneme konzultáciu a vyberieme riešenie. 3) Dostanete cenovú ponuku. 4) Realizácia. 5) Odovzdanie. **Potvrdit s klientem**, zda existuje bezplatná obhlídka na místě a závazná lhůta odpovědi. Do té doby ji nesliboj.

5. **Realizace a case studies (`#realizacie`).** Starý web má jen galerii bez příběhu. Nový web má 2 až 3 **case studies** (podlahové kúrenie, tepelné čerpadlo / fotovoltika, servisní zásah) ve struktuře: **Situácia** (co zákazník potřeboval), **Riešenie** (co a jak jsme udělali), **Postup** (kroky a doba, jen pokud je klient potvrdí), **Výsledok** (co zákazník získal), fotky před/po a případně citát zákazníka. Pod nimi galerie s filtrem podle služby a krátkým popiskem u každé fotky. **Žádné vymyšlené case studies ani čísla.** Do dodání skutečných podkladů zobrazí sekce jeden označený placeholder s popisem požadované struktury, případně se skryje přepínačem. Každá case study má vlastní kotvu a v budoucnu může mít vlastní stránku (SEO a GEO).

6. **O nás (`#o-nas`).** Krátce a věcně: původ firmy v zahraničí, 6 let praxe, návrat s know-how, priority kvalita a spolehlivost a precizní práce. Prostor pro fotku majitele nebo týmu (`[FOTO TÍMU]`). Bez vymyšleného příběhu.

7. **Reference (`#referencie`).** Komponenta pro 3 až 5 recenzí s jménem a městem, ale **skrytá, dokud klient nedodá skutečné texty** (nikdy nevymýšlet). Alternativa: odkaz na Google recenze, pokud existují.

8. **FAQ (`#faq`).** 6 až 8 otázek na typické obavy: Koľko to stojí? Ako dlho trvá realizácia? Robíte aj menšie opravy? Pôsobíte aj mimo Prešova? Poskytujete záruku? Pomôžete s výberom riešenia? Odpovědi **jen z ověřených faktů**, jinak `[DOPLNIŤ]`. Otázky vycházející z obsahu klienta mohou mít odpovědi hned (např. konzultaci a výběr řešení klient nabízí). FAQ doplnit o `FAQPage` strukturovaná data jen tehdy, když jsou odpovědi skutečné.

9. **Závěrečné CTA + kontakt a rezervace (`#kontakt`).** Dvousloupcové rozložení. Vlevo: velké klikací „Zavolajte" s číslem (`tel:`), e-mail, adresa Južná 1, 080 06 Prešov, otevírací doba `[DOPLNIŤ]`, mapa. Vpravo: **poptávkový a rezervační formulář** (sekce 5) s výběrem služby a termínu. Nad formulářem jednoduchý slib: „Ozveme sa vám `[LEHOTA, potvrdiť s klientom]`." Zákazník vyplní pár polí a nemusí čekat na telefonát. Firma dostane poptávku už roztříděnou.

10. **Kariéra (`#kariera`), blízko patičky, vizuálně klidnější než prodejní sekce.** Krátký text, proč pracovat u Mafremont (jen ověřená fakta), seznam hledaných pozic `[DOPLNIŤ]` a **jednoduchý formulář pro uchazeče** (sekce 5). Ne v hlavní navigaci.

11. **Patička.** Logo, kontakty, IČO/DIČ `[DOPLNIŤ]`, odkazy na Obchodné podmienky, Pravidlá cookies, Zásady spracúvania osobných údajů (stránky nebo placeholdery, právní text negenerovat), copyright s **aktuálním rokem dynamicky**, správně „Mafremont s.r.o.".

---

## 5. REZERVAČNÍ A EVIDENČNÍ SYSTÉM, FORMULÁŘE, NÁBOR A MĚŘENÍ

Starý web nemá nic z toho: žádný formulář na úvodní stránce, žádnou rezervaci, žádnou evidenci zakázek, žádný nábor. Cílem je **ušetřit čas mezi firmou a zákazníkem** a mít **přehled o všech zakázkách** na jednom místě.

### 5.1 Poptávkový a rezervační formulář (zákazník)
**Pole (co nejméně):** Meno (povinné), Telefónne číslo (povinné), E-mail (nepovinný), Služba (select: Podlahové kúrenie, Tepelné čerpadlo, Fotovoltika, Kanalizácia a odpady, Elektrikárske práce, Vzduchotechnika a klimatizácia, Vodoinštalácie, Iné), Miesto realizácie (obec, nepovinné), Preferovaný termín konzultácie nebo obhlídky (výběr dne a časového okna z volných termínů, nepovinné), Správa (nepovinná), souhlas se zpracováním osobních údajů (povinný checkbox s odkazem na Zásady).

**Chování:**
1. Po odeslání vznikne záznam v tabulce `poptavky` se stavem `nová` a případně v `terminy`.
2. Zákazník vidí potvrzení: co se děje dál a kdy se firma ozve `[LEHOTA, potvrdiť]`.
3. Firma dostane e-mail na **info@mafremont.sk** s obsahem poptávky a odkazem do administrace. Zákazník dostane potvrzovací e-mail, pokud zadal adresu.
4. Termíny: firma v administraci definuje dostupná okna (dny a časy). Dvě rezervace nesmí obsadit stejné okno. Kolize se řeší na serveru.

### 5.2 Administrace zakázek (majitel, chráněná přihlášením)
Jednoduchá, rychlá a použitelná na mobilu. Funkce:
- **Přehled všech zakázek** v seznamu a ve sloupcích podle stavu (kanban): `nová poptávka` → `domluvený termín / obhlídka` → `cenová ponuka odoslaná` → `realizácia` → `dokončené` / `zamietnuté`.
- Karta zakázky: kontakt zákazníka, služba, místo, termín, poznámky, historie změn a komunikace, přílohy (fotky, ponuka).
- Filtry (stav, služba, období), vyhledávání, kalendář termínů.
- Upozornění na novou poptávku (e-mail, volitelně push) a na zakázky bez odpovědi déle než `[X]` hodin.
- Základní statistiky: počet poptávek, přeměna na zakázky, zdroje poptávek (z UTM a typu události). Žádné vymyšlené číslice, jen skutečná data.
- Export do CSV.
- Role: minimálně majitel (plný přístup). Další uživatelé jsou volitelní.

**Fáze:** Fáze 1 = landing page + formulář + uložení do databáze + e-maily. Fáze 2 = administrace a kalendář termínů. Ujasni s uživatelem, zda se staví v jedné fázi, nebo ve dvou, ale **datový model a ukládání poptávek se navrhují hned od začátku** a administrace na nich staví.

### 5.3 Nábor zaměstnanců (uchazeč)
Samostatný krátký formulář v sekci `#kariera`:
- **Pole:** Meno (povinné), Telefónne číslo (povinné), E-mail (povinný), Pozícia / obor (select: Inštalatér, Elektrikár, Technik tepelných čerpadiel / fotovoltiky, Pomocný pracovník, Iné), Skúsenosti (krátký text), Životopis (nepovinné nahrání souboru), souhlas se zpracováním osobních údajů (povinný).
- **Nahrávání životopisu:** povolit jen PDF/DOC/DOCX do rozumné velikosti (např. 5 MB), validace typu a velikosti na serveru, uložení do soukromého úložiště (Supabase Storage, ne veřejně), skenování pokud je to možné. Soubory se nikdy nespouštějí.
- Záznam do tabulky `uchazeci` se stavem `nový`, upozornění na e-mail (info@mafremont.sk), přehled uchazečů v administraci (záložka „Nábor“ na `/admin/`) se stavy `nový` / `kontaktovaný` / `pohovor` / `přijatý` / `zamítnutý`.
- Doba uložení osobních údajů uchazečů a jejich mazání se řídí GDPR. Zapiš placeholder pro lhůtu, rozhodne klient nebo právník.

### 5.4 Společné požadavky na všechny formuláře
1. Validace na klientu i serveru (povinná pole, formát slovenského a mezinárodního telefonního čísla).
2. Odeslání přes tenkou serverless funkci v `/api` (nebo přímé vložení do Supabase přes anon klíč a RLS tam, kde to stačí). **Tajné klíče (Resend, service-role) pouze v proměnných prostředí hostingu, nikdy v klientském JS.** Do repozitáře přidej `.env.example`.
3. Honeypot a rate limit (a případně Cloudflare Turnstile nebo podobná ochrana bez obtěžujících CAPTCHA).
4. Stavy načítání, úspěchu a chyby, reset po úspěchu.
5. Row Level Security: veřejnost smí jen vkládat nové záznamy, číst smí jen přihlášený majitel.
6. Jasné určení, kam e-maily chodí: **info@mafremont.sk**. Pokud klient nemá ověřenou doménu pro odesílatele, použij dočasné řešení a zapiš to do CLAUDE.md sekce 5.
7. Volitelně napojení na ZakazIQ Workspace (poptávky rovnou do účtu), pokud o to uživatel požádá. Nesmí vzniknout dva konkurenční systémy evidence bez rozhodnutí uživatele.

### 5.5 Měření (po souhlasu s cookies)
Události: `click_to_call`, `click_email`, `form_start`, `form_submit`, `booking_submit`, `career_submit`, `cta_hero_click`, hloubka scrollu. Bez souhlasu se nesleduje nic kromě nezbytných cookies. Cookie lišta: Prijať nevyhnutné / Prijať všetko / Nastavenia. UTM parametry se ukládají k poptávce, aby bylo vidět, odkud přišla.

---

## 6. PRAVIDLA PRO PLACEHOLDERY FOTEK A OBSAHU

- Žádné stock ani externí obrázky jako výplň.
- Každý placeholder je zřetelný rámeček (čárkovaný nebo tenký okraj, neutrální pozadí, ikona fotoaparátu, popisek, co tam patří) s finálním `aspect-ratio`, aby se po dodání fotek neměnilo CSS.
- Počty: hero 1 (širší), služby 3 (velký + dva menší), realizace 8 až 12, o nás 1 (tým/majitel).
- `[DOPLNIŤ]` texty jsou v kódu soustředěné v jednom konfiguračním souboru (`js/content.js`), takže klient nebo uživatel doplní hodnoty na jednom místě. Sekce, které nemají reálná data (reference, trust číslice), se skryjí přepínačem.

---

## 7. PŘÍSTUPNOST A VÝKON

- Kontrast textu minimálně WCAG AA.
- Sémantické HTML, jeden H1, správná hierarchie nadpisů, `alt` u všech obrázků včetně placeholderů.
- Formulář plně ovladatelný klávesnicí, srozumitelné chybové hlášky, viditelný focus.
- Respektuj `prefers-reduced-motion`: potrubní linka a animace se při něm vypnou.
- Optimalizované obrázky, žádné zbytečné blokující skripty, žádný layout shift. Cíl: Lighthouse 90+ na mobilu.

### 7a. SEO, lokální viditelnost a GEO
Starý web nemá žádné SEO (titulek je jen doména, meta popis je nesmysl, čtyři H1, žádná strukturovaná data) ani žádnou přípravu na AI odpovědi.

**SEO:**
- `<title>`: např. „Mafremont Prešov | Podlahové kúrenie, tepelné čerpadlá, fotovoltika" (do cca 60 znaků), unikátní meta description s telefonem a městem. Právě jeden H1 na stránce.
- Nadpisy a texty zmiňují reálné služby a město Prešov a okolí přirozeně, bez keyword stuffingu. Každá vlajková služba má vlastní sekci s konkrétním obsahem (co zahrnuje, pro koho, jak probíhá), ne jen jednu větu.
- Sémantické HTML, rychlost, mobilní použitelnost, sitemap.xml, robots.txt, kanonické URL, OpenGraph a obrázek pro sdílení. Administrace a děkovací stránky mají `noindex`.
- JSON-LD: `LocalBusiness` (resp. `HomeAndConstructionBusiness` / `Plumber` / `Electrician` podle vhodnosti, `name`, `address`, `telephone`, `email`, `areaServed`, `makesOffer`/`hasOfferCatalog` se službami, `openingHours` jen pokud jsou ověřeny). `aggregateRating` **jen** se skutečnými recenzemi.
- Každá case study může mít vlastní URL a `Article`/`Project` strukturovaná data.

**GEO (Generative Engine Optimization, tj. aby firmu citovaly a doporučovaly ChatGPT, Gemini, Perplexity a AI přehledy Googlu):**
- Piš **jasná, samostatně srozumitelná faktická tvrzení** (např. „Mafremont s.r.o. sídlí v Prešove na Južnej 1 a realizuje podlahové kúrenie, tepelné čerpadlá a fotovoltiku"), která AI může citovat. Žádné vágní marketingové fráze.
- **FAQ s přímými odpověďmi** na otázky, které lidé a AI skutečně pokládají (cena, délka, oblast působení, záruka, postup). Odpovědi jen z ověřených faktů. `FAQPage` JSON-LD pouze se skutečnými odpověďmi.
- **Konzistentní údaje o firmě** všude (web, JSON-LD, patička, Google Business Profile, Firmy.sk a podobné katalogy): stejný název, adresa, telefon a popis služeb.
- Přidej stránku nebo sekci „O firme" se strukturovanými fakty (název, sídlo, obor, oblast působení, rok začátku `[DOPLNIŤ]`), aby se firma dala snadno popsat jako entita.
- Case studies s konkrétní situací, řešením a výsledkem jsou pro AI i lidi nejlépe citovatelný důkaz.
- Volitelně přidej soubor `llms.txt` se stručným popisem firmy a odkazy na klíčové části. Jeho skutečný vliv na AI vyhledávače není prokázaný, takže ho ber jako drobný bonus, ne jako základ strategie.
- Doporučit klientovi založit a vyplnit **Google Business Profile** (a případně Bing Places), získávat recenze a udržovat údaje aktuální. Bez nich lokální SEO i GEO stojí na vodě.
- Nic z toho nesmí vést k vymyšleným tvrzením. GEO stojí na pravdivosti a konzistenci.

---

## 8. PRÁVNÍ POŽADAVKY

- Checkbox se souhlasem GDPR u všech formulářů (poptávka, rezervace, nábor), text s odkazem na Zásady spracúvania osobných údajov. Údaje uchazečů a zákazníků v databázi mají určenou dobu uložení a způsob smazání (placeholder, rozhodne klient nebo právník).
- Stránky Obchodné podmienky, Pravidlá cookies a Zásady spracúvania osobných údajov: pouze placeholdery. Právní text negeneruj, doplní klient nebo právník.
- Cookie lišta, protože se používá analytika.

---

## 9. POSTUP IMPLEMENTACE

1. Založ strukturu statického projektu (HTML, CSS, JS moduly, bez build kroku) a `js/content.js` s veškerým obsahem, značkou (sekce 2a) a `[DOPLNIŤ]` hodnotami.
2. Navrhni datový model (Supabase): `poptavky`, `terminy`, `uchazeci`, stavy, RLS politiky. Ujasni s uživatelem rozsah (jedna nebo dvě fáze).
3. Nastav design tokeny (barvy, písma, rozestupy).
4. Postav layout: hlavička s klikacím telefonem, lepicí mobilní lišta, patička.
5. Implementuj sekce landing page v pořadí 1 až 11 (sekce 4), každou s vlastní kompozicí, včetně case studies a kariéry.
6. Postav potrubní linku jako SVG komponentu s uzly a scroll-progressem.
7. Systém placeholderů fotek a obsahu.
8. Formuláře: poptávka a rezervace, nábor, validace, honeypot, rate limit, ukládání do databáze, e-maily.
9. Administrace (`/admin`): přihlášení, přehled zakázek, kalendář termínů, nábor, upozornění.
10. Mapa, cookie lišta, měření událostí (včetně `click_to_call`).
11. SEO a GEO: title, meta, JSON-LD, FAQ, sitemap, robots, OpenGraph, `llms.txt` volitelně.
12. Ověř responsivitu na všech breakpointech, přístupnost, Lighthouse a bezpečnost (RLS, klíče, nahrávání souborů).
13. Test buildu a nasazení. Ověř end to end: klik na telefon na mobilu, odeslání poptávky (záznam v DB, e-mail firmě i zákazníkovi), kolizi termínů, odeslání přihlášky s životopisem, přihlášení do administrace.

---

## 10. VÝSLEDNÝ DOJEM

Při prvním pohledu musí web působit jako **moderní, jistá regionální firma, která umí topení, vodu a solár a nebojí se říct, co dělá a jak**. Musí být rychlý, bezchybný na mobilu a bez rozptylování vést návštěvníka k jedné akci: zavolat jedním klepnutím nebo poslat poptávku či rezervovat termín. Za webem stojí systém, který poptávky eviduje a dává majiteli přehled. Firma na něm působí jako značka s jasným zaměřením, ne jako anonymní vizitka. Nesmí být poznat, že vznikl generátorem.

---

## 11. PRAVIDLA PSANÍ TEXTŮ (skill humanize-text-cs, převedeno na slovenštinu)

Všechny texty na webu jsou ve **slovenčině** a musí znít jako od člověka, ne od jazykového modelu. Skill `humanize-text-cs` je pro češtinu, ale principy platí stejně. Aplikuj je na slovenský text:

- **Žádné pomlčky a spojovníky jako spojky věty** (– a —). Použij čiarku, bodku alebo spojku. Dvojbodka jen tam, kde je opravdu potřeba.
- **Žádné výplňové fráze a AI klišé.** Vyhni se: „v neposlednom rade", „je dôležité poznamenať, že", „kľúčový" a „zásadný" jako omšelým superlativům, „v dnešnej dobe", „komplexné riešenie", „na vysokej úrovni", „na mieru vašim potrebám".
- **Žádná konstrukce „nielen X, ale aj Y".** Řekni věc přímo.
- **Žádné tří-výčty z reflexu** (rýchle, efektívne a spoľahlivé). Piš dvě věci, nebo jednu přesnou.
- **Střídej délku vět.** Krátké věty vedle delších. Občas neúplná věta je v pořádku.
- **Žádné zbytečné tučné písmo uprostřed vět** a žádné odrážky tam, kde stačí věta. Odrážky jen u skutečných seznamů (kroky, kontakty).
- **Věcný tón s konkrétním názorem.** Žádné vyvažování „na jednej strane, na druhej strane". Řekni, co firma dělá a co ne.
- **Žádné zbytečné pozvánky na konci** („neváhajte nás kontaktovať"). Jedno jasné CTA je lepší.
- **Konkrétnost místo obecností.** „Podlahové kúrenie so strojovým poterom, dlažba alebo vinyl až do finálnej podoby" je lepší než „kvalitné služby".
- **Neměň fakta ani čísla.** Stylistika se mění, obsah ne.
- Po dokončení textů proveď kontrolu podle checklistu: dashes pryč, bold uvnitř vět pryč, klišé pryč, tri-colony rozbité, rytmus rozmanitý, bez uzavírací nabídky.

**Příklad (špatně → dobře):**
- Špatně: „Naše komplexné riešenia – rýchle, efektívne a spoľahlivé – predstavujú kľúčový krok k úspore."
- Dobře: „Tepelné čerpadlo vám zníži účty za kúrenie. Pomôžeme vám vybrať to správne a nainštalujeme ho."

(Fakta u tepelného čerpadla jsou pouze příklad stylu. Konkrétní čísla úspor nepřidávej, dokud je klient nedodá.)

---

**Poznámka pro Claude Code / Antigravity:** Piš čistý, komentovaný kód s konzistentní strukturou a pojmenováním. Připrav projekt tak, aby šly reálné fotky a texty doplnit bez zásahu do struktury kódu (vše v `js/content.js` a složce `img/`). Před dokončením každé sekce si polož otázku: „Vypadá to jako záměrná práce pro tuto konkrétní firmu, nebo jako generická šablona?" Pokud jako šablona, přepracuj ji podle sekce 0. Pokud si nejsi jistý, ptej se, nehádej.