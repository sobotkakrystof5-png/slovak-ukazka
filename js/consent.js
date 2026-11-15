/**
 * consent.js: cookie lišta a meranie udalostí.
 * Bez súhlasu sa nemeria nič. Udalosti idú do window.dataLayer (napojenie na GA4/GTM príde neskôr).
 */
import { analytics } from './config.js';

const KEY = analytics.consentKey;
let state = null; // { analytics: boolean } | null

const read = () => { try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; } };
const write = (v) => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* súkromný režim */ } };

export function track(event, params = {}) {
  if (!state?.analytics) return;
  (window.dataLayer = window.dataLayer || []).push({ event, ...params });
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') console.debug('[track]', event, params);
}

export function initConsent() {
  const box = document.getElementById('cookie');
  const prefs = document.getElementById('cookie-prefs');
  const actions = document.getElementById('cookie-actions');
  const cb = document.getElementById('cookie-analytics');
  state = read();

  const close = (v) => {
    state = v; write(v); box.hidden = true;
    if (v.analytics) track('consent_granted');
  };
  const open = (showPrefs = false) => {
    box.hidden = false;
    prefs.hidden = !showPrefs; actions.hidden = showPrefs;
    cb.checked = !!state?.analytics;
  };

  document.getElementById('cookie-necessary').addEventListener('click', () => close({ analytics: false }));
  document.getElementById('cookie-all').addEventListener('click', () => close({ analytics: true }));
  document.getElementById('cookie-settings').addEventListener('click', () => open(true));
  document.getElementById('cookie-save').addEventListener('click', () => close({ analytics: cb.checked }));
  document.getElementById('cookie-open').addEventListener('click', () => open(true));

  if (!state) open(false);

  // Merané udalosti (delegované)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const where = a.dataset.track || 'link';
    if (href.startsWith('tel:')) track('click_to_call', { location: where });
    else if (href.startsWith('mailto:')) track('click_email', { location: where });
    if (where === 'hero' || where === 'hero-quote') track('cta_hero_click', { target: where });
  });

  // Hĺbka scrollu
  const marks = [25, 50, 75, 100]; const seen = new Set();
  addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = ((h.scrollTop + innerHeight) / h.scrollHeight) * 100;
    for (const m of marks) if (pct >= m && !seen.has(m)) { seen.add(m); track('scroll_depth', { percent: m }); }
  }, { passive: true });
}
