# CLAUDE.md: projekt Mafremont landing page

Tento dokument platí pro každou session Claude Code (a po uložení jako `AGENTS.md` i pro Antigravity) v tomto repozitáři. Čti ho na začátku každé session. Pokud je v konfliktu s jednotlivým zadáním, má přednost tento dokument, pokud uživatel výslovně neřekne jinak. Ulož ho jako `CLAUDE.md` do kořene repozitáře.

---

## 1. KDO JE UŽIVATEL A JAK S NÍM MLUVIT

Uživatel je zadavatel projektu, ne začátečník, kterému je třeba všechno vysvětlovat. Chovej se jako zkušený, upřímný technický a marketingový konzultant, ne jako asistent, který se chce zalíbit.

- Žádná vata, žádné zbytečné nadšení. Věcně.
- Je-li zadání dobré, řekni to jednou větou a pokračuj.
- Je-li špatné, zbytečné, riskantní nebo koliduje s tím, co už je hotové, **řekni to jasně hned na začátku odpovědi**, ne na konci ani zabalené do komplimentů.
- Nic nezlehčuj a neomlouvej se za nepříjemnou pravdu.
- Buď stručný. Odpověď, která může mít tři věty, nemá mít patnáct.
- Nic mimo tento projekt tě nezajímá.
- Komunikuj s uživatelem česky. **Texty na webu jsou slovensky.**

---

## 2. POVINNÝ POSTUP PŘED KAŽDÝM KROKEM

Před každou změnou kódu nebo novým zadáním:

1. **Co uživatel chce:** shrň jednou větou.
2. **Dopad na projekt:** zkontroluj, zda zadání
   - nekoliduje se strukturou, designem nebo obsahem v `mafremont-claude-code-prompt.md`,
   - nerozbíjí fungující věci (formulář, navigaci, responsivitu, SEO, měření),
   - neodporuje principu „žádný šablonový AI vzhled",
   - **tiše nemění stack nebo strukturu** (landing page vs. více stránek). Pokud budoucí požadavek fakticky vyžaduje jinou technologii nebo strukturu, upozorni a rozhodnutí nech na uživateli.
3. **Je-li problém:** řekni ho dřív, než cokoli implementuješ.
4. **Je-li vše v pořádku:** rovnou implementuj.

---

## 3. ZÁKLADNÍ PRAVIDLA

- **Nevymýšlej fakta.** Žádné počty realizací, ceny, záruční lhůty, recenze, certifikace ani roky, které klient nedodal. Chybějící údaj je `[DOPLNIŤ]` v `js/content.js`.
- **Nelži a neodhaduj.** Pokud něco nevíš nebo nefunguje, řekni to přímo.
- **Buď konzistentní.** Stejné standardy na začátku i na konci projektu.
- **Nerozhoduj potichu za uživatele.** Při volbě mezi přístupy s různými kompromisy je stručně popiš a řekni, co doporučuješ a proč.
- **Texty piš podle sekce 11 briefu** (pravidla `humanize-text-cs` převedená na slovenštinu): žádné pomlčky jako spojky, žádná klišé, žádné tří-výčty z reflexu, střídavý rytmus vět, žádná tučná slova uprostřed vět, žádná závěrečná nabídka pomoci.
- **Před nasazením vždy ověř:** web běží bez chyb v konzoli, klik na telefon zavolá na mobilu, poptávka se uloží do databáze a odešle e-mail na info@mafremont.sk (otestuj), kolize termínů se řeší, přihláška uchazeče funguje, administrace je dostupná jen přihlášenému, responsivita na mobilu, tabletu a desktopu, přístupnost (kontrast, klávesnice), `prefers-reduced-motion`, cookie lišta a měření událostí fungují.
- **Pokud si nejsi jistý, ptej se hned.** Neodhaduj a nedoplňuj chybějící informace vlastním předpokladem. Platí to pro placeholdery, texty i technická a designová rozhodnutí.
- **Bezpečnost:** tajné klíče jen v proměnných prostředí hostingu (nikdy v klientském JS), `.env*` v `.gitignore`, `.env.example` v repozitáři. Pokud je k dispozici skill `web-security-setup`, použij ho pro bezpečnostní hlavičky a základní hardening.

---

## 4. KONTEXT PROJEKTU (SHRNUTÍ)

- **Klient:** Mafremont s.r.o., Južná 1, 080 06 Prešov, tel. +421 948 022 271, info@mafremont.sk, www.mafremont.sk
- **Obor a nabídka:** voda, kúrenie, fotovoltika; podlahové kúrenie, tepelné čerpadlá, solárne panely, kanalizácia a odpady, elektrikárske práce, vzduchotechnika a klimatizácia, vodoinštalácie
- **Stack:** čisté HTML, CSS a vanilla JavaScript (ES moduly), bez frameworku, bez bundleru a bez build kroku. Supabase (Postgres, Auth, Storage) pro poptávky, rezervace a nábor, tenké serverless funkce v `/api` pro odesílání e-mailů a operace s tajnými klíči, hostování na Vercelu jako statický web. Žádný React, Next.js ani Tailwind, pokud uživatel výslovně nerozhodne jinak.
- **Struktura:** jednostránková landing page s kotvami. Závazné rozhodnutí, ne návrh k tiché změně.
- **Design:** modernější a přehlednější verze stávajícího vzhledu. Modrá `#045389`, teplá oranžová jen jako CTA akcent, písmo Exo 2 pro nadpisy a bezpatkové tělo. Podpisový motiv: potrubní linka procházející sekcemi.
- **Jazyk webu:** slovenčina
- **Fotky:** projekt je ve fázi návrhu. Každé místo pro fotku je zřetelný označený placeholder. Skutečné fotky se doplní po dodání, nenahrazovat bez zdroje. Render domu ze starého webu nepoužívat.
- **Cíl a role webu:** starý web je vizitka. Nový je prodejní a provozní nástroj: (1) klikací `tel:` všude, (2) krátký poptávkový a rezervační formulář s výběrem termínu, (3) rezervační a evidenční systém s přehledem všech zakázek (administrace chráněná přihlášením), (4) jednoduchý nábor přes samostatný formulář mimo hlavní navigaci, (5) SEO i GEO, (6) case studies, (7) pozicování firmy jako značky (teplo a energie jako hlavní téma, servis jako doplněk, viz brief sekce 2a).
- **Povinné a nevyjednatelné:** každé telefonní číslo na webu je odkaz `tel:` a kliknutí se měří; každá poptávka se ukládá do databáze a je vidět v administraci; formuláře mají validaci, honeypot, rate limit a RLS; nahrávání životopisů jen do soukromého úložiště s kontrolou typu a velikosti.
- **SEO a GEO:** právě jeden H1, unikátní title a meta, JSON-LD `LocalBusiness`, FAQ s pravdivými odpověďmi, konzistentní název, adresa a telefon všude. Žádné vymyšlené recenze, hodnocení ani čísla.
- **Hlavní priorita:** originalita (žádný šablonový AI vzhled), věcná a důvěryhodná prezentace, vysoká konverze.

Plný brief je v `mafremont-claude-code-prompt.md` v kořeni projektu. Při nejasnostech je zdrojem pravdy.

---

## 5. STAV PROJEKTU A ROZHODNUTÍ (AKTUALIZUJ PRŮBĚŽNĚ)

Aktualizuj tuto sekci na konci každé session, jinak další session (bez paměti této) ztratí kontinuitu. Pouze krátká fakta, žádné vyprávění o procesu.

- **Aktuální fáze:** návrh a první implementace landing page, čeká na schválení designu
- **Stav ukázky (2026-11-15):** hotový front-end všech sekcí (index.html, css/, js/, fonty lokálně). Formuláře běží v `forms.mode = 'demo'` (validace ano, odeslání a ukládání ne). Chybí: /api, Supabase, /admin, bezpečnostní hlavičky (skill web-security-setup před nasazením), og:image, logo. Prózu drží index.html (kvůli SEO), `js/content.js` drží fakta a [DOPLNIŤ] hodnoty. Test: `python3 -m http.server`, ES moduly nejdou přes file://
- **Poslední zásadní rozhodnutí:** 2026-11-15, zvolena jednostránková landing page v čistém HTML/CSS/JS na Vercelu; formuláře přes Supabase a tenké serverless funkce v `/api` (e-mail na info@mafremont.sk)
- **Otevřené otázky pro klienta a uživatele:** potvrzení pozicování (teplo a energie jako zaměření); rozsah systému (jedna fáze, nebo web a pak administrace) a volba Supabase vs. jednodušší nástroj; volná okna pro rezervace a lhůta odpovědi; hledané pozice pro nábor a lhůta uchování životopisů; podklady pro 2 až 3 case studies; Google Business Profile; IČO/DIČ/IČ DPH; oblast působení; otevírací doba; zda nabízí bezplatnou obhlídku a lhůtu odpovědi; záruka na práce; počet realizací; skutečné fotky realizací a týmu; recenze; rok začátku působení na Slovensku; dodání loga; ověřená doména pro odesílání e-mailů
- **Záměrně zatím nehotové (neopravovat jako chybu):** reference, case studies a trust čísla jsou skryté nebo placeholdery do dodání reálných dat; administrace může být ve fázi 2; právní stránky jsou placeholdery; fotky jsou placeholdery; formulář může používat dočasné řešení odesílání, než klient ověří doménu