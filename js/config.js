/**
 * config.js: přepínače sekcí a režim formulářů.
 * Co nemá reálná data, je tu vypnuté. Zapni, až klient dodá podklady.
 */
export const toggles = {
  // Pás důvěry: položky se zobrazí až po dodání údajů
  trustWarranty: false,       // [ZÁRUKA: doplniť]
  trustProjectsCount: false,  // [POČET REALIZÁCIÍ: doplniť]

  // Realizace: dokud nejsou podklady, ukáže se jen označená šablona case study
  caseStudyTemplate: true,

  // Reference: komponenta je hotová, ale skrytá do dodání skutečných recenzí
  references: false,

  // Hledané pozice v kariéře
  openPositions: false,
};

export const forms = {
  /**
   * 'demo'  = formulář se validuje, ale NIC se neodesílá ani neukládá (stav ukázky)
   * 'live'  = POST na /api/* (zatím neexistuje, přijde s backendem)
   */
  mode: 'demo',
  endpoints: { inquiry: '/api/poptavka', career: '/api/prihlaska' },
  minFillSeconds: 3,       // rychlejší odeslání = bot
  cooldownSeconds: 30,     // klientský rate limit (server musí mít vlastní)
  resume: { maxBytes: 5 * 1024 * 1024, ext: ['pdf', 'doc', 'docx'] },
  // Časová okna pro rezervaci. Skutečná volná okna definuje administrace (fáze 2).
  timeWindows: ['Dopoludnia', 'Popoludní'],
};

export const analytics = {
  consentKey: 'mafremont-consent-v1',
};
