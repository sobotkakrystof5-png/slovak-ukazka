/**
 * content.js: fakta o firmě, značka a všechny [DOPLNIŤ] hodnoty na jednom místě.
 * Prózu stránky (nadpisy, odstavce) drží index.html kvůli SEO a GEO (text je v HTML bez JS).
 * Údaje z tohoto souboru se do stránky dosadí přes data-bind / data-todo.
 * Doplnění údaje = přepsat řetězec `todo(...)` na skutečnou hodnotu.
 */
const todo = (what) => `[DOPLNIŤ: ${what}]`;

export const company = {
  name: 'Mafremont s.r.o.',
  street: 'Južná 1',
  zip: '080 06',
  city: 'Prešov',
  country: 'SK',
  phone: '+421948022271',
  phoneDisplay: '+421 948 022 271',
  email: 'info@mafremont.sk',
  url: 'https://www.mafremont.sk',

  ico: todo('IČO'),
  dic: todo('DIČ'),
  icDph: todo('IČ DPH'),
  hours: todo('otváracie hodiny'),
  area: todo('oblasť pôsobenia'),
  since: todo('rok začiatku pôsobenia na Slovensku'),
  warranty: todo('záruka na práce'),
  projectsCount: todo('počet realizácií'),
  replyWindow: todo('lehota odpovede'),
  freeSurvey: todo('bezplatná obhliadka áno/nie'),
  typicalDuration: todo('orientačné lehoty podľa služby'),
  retention: todo('lehota uchovania životopisov'),
};

/** Brand platforma (sekcia 2a briefu, návrh čaká na potvrdenie klientom). */
export const brand = {
  positioning: 'Teplo a energia pre domy a firmy. Servis ako doplnok.',
  promise: 'Jedna firma pre vodu, teplo a energiu vo vašom dome. Jeden telefón, jasný postup, hotová práca.',
  voice: 'Vecný, presný, spoľahlivý, ľudský. Remeslo bez straty zrozumiteľnosti.',
  values: ['kvalita', 'spoľahlivosť', 'precíznosť'],
};

/** Služby pro select ve formuláři (id slouží i pro filtr galerie a předvyplnění). */
export const services = [
  { id: 'podlahove-kurenie', name: 'Podlahové kúrenie' },
  { id: 'tepelne-cerpadlo', name: 'Tepelné čerpadlo' },
  { id: 'fotovoltika', name: 'Fotovoltika' },
  { id: 'kanalizacia', name: 'Kanalizácia a odpady' },
  { id: 'elektro', name: 'Elektrikárske práce' },
  { id: 'vzduchotechnika', name: 'Vzduchotechnika a klimatizácia' },
  { id: 'vodoinstalacie', name: 'Vodoinštalácie' },
  { id: 'ine', name: 'Iné' },
];

export const careerPositions = [
  'Inštalatér',
  'Elektrikár',
  'Technik tepelných čerpadiel / fotovoltiky',
  'Pomocný pracovník',
  'Iné',
];

/** Reference: prázdné, dokud klient nedodá skutečné texty. Nikdy nevymýšlet. */
export const reviews = [
  // { text: '...', name: 'Jméno', city: 'Město' }
];

export const openPositions = todo('hľadané pozície');

/** Placeholdery realizací (8). Po dodání fotek nahradit src a alt. */
export const gallery = [
  { service: 'podlahove-kurenie', label: 'Podlahové kúrenie', ratio: '4 / 3', span: 2 },
  { service: 'tepelne-cerpadlo', label: 'Tepelné čerpadlo', ratio: '3 / 4', span: 1 },
  { service: 'fotovoltika', label: 'Fotovoltika', ratio: '1 / 1', span: 1 },
  { service: 'vodoinstalacie', label: 'Vodoinštalácie', ratio: '1 / 1', span: 1 },
  { service: 'podlahove-kurenie', label: 'Podlahové kúrenie', ratio: '3 / 2', span: 1 },
  { service: 'kanalizacia', label: 'Kanalizácia a odpady', ratio: '4 / 3', span: 1 },
  { service: 'fotovoltika', label: 'Fotovoltika', ratio: '16 / 9', span: 2 },
  { service: 'vzduchotechnika', label: 'Vzduchotechnika', ratio: '4 / 5', span: 1 },
];
