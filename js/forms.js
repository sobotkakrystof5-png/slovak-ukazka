/**
 * forms.js: validácia, honeypot, klientský rate limit, stavy odoslania.
 * forms.mode = 'demo': nič sa neodosiela ani neukladá (stav ukážky).
 * Validáciu a rate limit musí zopakovať server (/api), klientská ochrana nestačí.
 */
import { forms as cfg } from './config.js';
import { company } from './content.js';
import { track } from './consent.js';

const MSG = {
  name: 'Zadajte meno.',
  phone: 'Zadajte telefónne číslo.',
  phoneBad: 'Číslo nevyzerá správne. Použite napríklad +421 948 022 271.',
  email: 'Zadajte e-mail v tvare meno@domena.sk.',
  consent: 'Bez súhlasu nemôžeme údaje spracovať.',
  cvType: 'Povolené sú len súbory PDF, DOC alebo DOCX.',
  cvSize: 'Súbor je väčší ako 5 MB.',
};

const phoneOk = (v) => /^(\+|00)?\d{9,14}$/.test(v.replace(/[\s()/.-]/g, ''));
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function validate(form) {
  const f = form.elements; const errs = {};
  const v = (n) => (f[n]?.value || '').trim();
  if (!v('name')) errs.name = MSG.name;
  if (!v('phone')) errs.phone = MSG.phone; else if (!phoneOk(v('phone'))) errs.phone = MSG.phoneBad;
  const emailRequired = form.dataset.form === 'career';
  if (emailRequired && !v('email')) errs.email = MSG.email;
  else if (v('email') && !emailOk(v('email'))) errs.email = MSG.email;
  if (!f.consent.checked) errs.consent = MSG.consent;
  const file = f.cv?.files?.[0];
  if (file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!cfg.resume.ext.includes(ext)) errs.cv = MSG.cvType;
    else if (file.size > cfg.resume.maxBytes) errs.cv = MSG.cvSize;
  }
  return errs;
}

function showErrors(form, errs) {
  form.querySelectorAll('[data-err]').forEach((p) => {
    const name = p.dataset.err; const msg = errs[name] || '';
    p.textContent = msg;
    const input = form.elements[name];
    if (input) {
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (msg) { p.id = p.id || `${form.id}-${name}-err`; input.setAttribute('aria-describedby', p.id); }
    }
  });
  const first = Object.keys(errs)[0];
  if (first) form.elements[first]?.focus();
}

const lastKey = 'mafremont-last-submit';
const cooldownLeft = () => {
  try { const t = Number(localStorage.getItem(lastKey)) || 0; return Math.max(0, cfg.cooldownSeconds * 1000 - (Date.now() - t)); } catch { return 0; }
};
const markSent = () => { try { localStorage.setItem(lastKey, String(Date.now())); } catch { /* nič */ } };

function captureUtm() {
  try {
    const p = new URLSearchParams(location.search); const o = {};
    for (const [k, v] of p) if (k.startsWith('utm_')) o[k] = v;
    if (Object.keys(o).length) sessionStorage.setItem('mafremont-utm', JSON.stringify(o));
    return sessionStorage.getItem('mafremont-utm') || '';
  } catch { return ''; }
}

export function initForms() {
  const utm = captureUtm();

  // Časové okná a minimálny dátum (zajtra)
  const win = document.getElementById('f-window');
  if (win) cfg.timeWindows.forEach((w) => win.add(new Option(w, w)));
  const date = document.getElementById('f-date');
  if (date) { const d = new Date(Date.now() + 864e5); date.min = d.toISOString().slice(0, 10); }

  document.querySelectorAll('form[data-form]').forEach((form) => {
    const kind = form.dataset.form;
    const status = form.querySelector('.form__status');
    const btn = form.querySelector('button[type="submit"]');
    let started = 0;
    if (form.elements.utm) form.elements.utm.value = utm;

    form.addEventListener('focusin', () => {
      if (started) return;
      started = Date.now(); track('form_start', { form: kind });
    }, { once: false });

    form.addEventListener('input', (e) => {
      const n = e.target.name; const p = form.querySelector(`[data-err="${n}"]`);
      if (p && p.textContent) { p.textContent = ''; e.target.setAttribute('aria-invalid', 'false'); }
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.className = 'form__status'; status.textContent = '';
      const errs = validate(form); showErrors(form, errs);
      if (Object.keys(errs).length) return;

      // honeypot a príliš rýchle odoslanie: tvárime sa, že sa odoslalo
      const tooFast = started && Date.now() - started < cfg.minFillSeconds * 1000;
      const bot = form.elements.website.value || tooFast;

      const wait = cooldownLeft();
      if (wait) {
        status.classList.add('is-err');
        status.textContent = `Formulár ste práve odoslali. Skúste to znova o ${Math.ceil(wait / 1000)} s.`;
        return;
      }

      btn.disabled = true; const label = btn.textContent; btn.textContent = 'Odosielam…';
      try {
        if (!bot && cfg.mode === 'live') {
          const res = await fetch(cfg.endpoints[kind === 'career' ? 'career' : 'inquiry'], { method: 'POST', body: new FormData(form) });
          if (!res.ok) throw new Error(String(res.status));
        } else {
          await new Promise((r) => setTimeout(r, 600));    // demo: nič sa neukladá
        }
        markSent();
        track(kind === 'career' ? 'career_submit' : (form.elements.date?.value ? 'booking_submit' : 'form_submit'), { form: kind });

        const reply = !company.replyWindow.startsWith('[DOPLNIŤ') ? ` Ozveme sa vám ${company.replyWindow}.` : '';
        status.classList.add('is-ok');
        status.textContent = kind === 'career' ? 'Ďakujeme, prihlášku sme prijali.' : `Ďakujeme, dopyt sme prijali.${reply}`;
        if (cfg.mode === 'demo') {
          const d = document.createElement('small'); d.className = 'form__demo';
          d.textContent = 'Ukážková verzia: údaje sa zatiaľ neodosielajú ani neukladajú.';
          status.appendChild(d);
        }
        form.reset(); showErrors(form, {});
        if (form.elements.utm) form.elements.utm.value = utm;
        started = 0;
      } catch {
        status.classList.add('is-err');
        status.textContent = `Odoslanie sa nepodarilo. Zavolajte prosím na ${company.phoneDisplay}.`;
      } finally {
        btn.disabled = false; btn.textContent = label;
      }
    });
  });
}
