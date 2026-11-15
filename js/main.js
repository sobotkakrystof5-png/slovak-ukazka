/**
 * main.js: vstupný bod. Dosadenie údajov z content.js, prepínače sekcií, navigácia,
 * galéria s filtrom, mapa na klik, potrubná linka, formuláre, cookie lišta.
 */
import { toggles } from './config.js';
import * as content from './content.js';
import { initPipeline } from './pipeline.js';
import { initForms } from './forms.js';
import { initConsent } from './consent.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const get = (path) => path.split('.').reduce((o, k) => o?.[k], content);

/* 1. údaje z content.js (NAP a [DOPLNIŤ] hodnoty) */
$$('[data-bind]').forEach((n) => { const v = get(n.dataset.bind); if (typeof v === 'string') n.textContent = v; });
$$('[data-todo]').forEach((n) => {
  const v = get(n.dataset.todo);
  if (typeof v !== 'string') return;
  n.textContent = v;
  n.classList.toggle('todo', v.startsWith('[DOPLNIŤ'));
});

/* 2. prepínače sekcií (config.js) */
$$('[data-show]').forEach((n) => { n.hidden = !toggles[n.dataset.show]; });

/* 3. rok v pätičke */
$('#year').textContent = new Date().getFullYear();

/* 4. navigácia: mobilné menu a scrollspy */
const nav = $('#nav'); const toggle = $('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Zavrieť menu' : 'Otvoriť menu');
});
nav.addEventListener('click', (e) => { if (e.target.closest('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); } });

const links = new Map($$('.nav a[href^="#"]').map((a) => [a.getAttribute('href').slice(1), a]));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { links.forEach((a) => a.classList.remove('is-active')); links.get(en.target.id)?.classList.add('is-active'); } });
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

/* 5. tlačidlá „Spýtať sa“ predvyplnia službu vo formulári */
$$('[data-service]').forEach((a) => a.addEventListener('click', () => {
  const sel = $('#f-service'); if (!sel) return;
  sel.value = a.dataset.service;
  setTimeout(() => sel.focus({ preventScroll: true }), 700);
}));

/* 6. galéria realizácií (placeholdery) a filter */
const gallery = $('#gallery');
content.gallery.forEach((g) => {
  const fig = document.createElement('figure');
  fig.className = 'tile'; fig.dataset.service = g.service;
  fig.innerHTML = `<div class="ph" role="img" aria-label="Placeholder: fotografia realizácie, ${g.label}" style="--r:${g.ratio}">
    <svg aria-hidden="true"><use href="#i-cam"/></svg>
    <span class="ph__cap">FOTO: ${g.label}<small>pomer ${g.ratio.replace(' / ', ':')}</small></span></div>
    <figcaption>${g.label}</figcaption>`;
  gallery.appendChild(fig);
});
$$('.filter .chip').forEach((chip) => chip.addEventListener('click', () => {
  $$('.filter .chip').forEach((c) => { c.classList.toggle('is-on', c === chip); c.setAttribute('aria-pressed', String(c === chip)); });
  const f = chip.dataset.filter;
  $$('.tile', gallery).forEach((t) => { t.hidden = f !== 'all' && t.dataset.service !== f; });
}));

/* 7. reference (komponenta je pripravená, sekcia je skrytá, kým klient nedodá skutočné recenzie) */
const refs = $('#refs-list');
content.reviews.forEach((r) => {
  const q = document.createElement('blockquote');
  const p = document.createElement('p'); p.textContent = r.text;
  const c = document.createElement('cite'); c.textContent = `${r.name}, ${r.city}`;
  q.append(p, c); refs.appendChild(q);
});

/* 8. mapa sa načíta až po kliknutí (bez volania tretej strany pri načítaní stránky) */
$('.map__load')?.addEventListener('click', (e) => {
  const q = encodeURIComponent(`${content.company.street}, ${content.company.zip} ${content.company.city}`);
  const f = document.createElement('iframe');
  f.src = `https://www.google.com/maps?q=${q}&output=embed`;
  f.title = 'Mapa: Južná 1, Prešov'; f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade';
  e.currentTarget.replaceWith(f);
});

/* 9. moduly */
initConsent();
initForms();
initPipeline();
