/**
 * pipeline.js: signaturový motiv, potrubná linka.
 * Jedna SVG linka vedie stránkou po „kolajnici“ vľavo a spája uzly [data-node].
 * Uzol: kvapka (voda), plameň (teplo), slnko (fotovoltika), ventil (krok), koncový uzol = telefónne tlačidlo.
 * Linka sa pri scrolle „plní“ modrou, v teplých úsekoch oranžovou.
 * Mobil: iba krátke úseky pri nadpisoch. prefers-reduced-motion: linka je naplnená a statická.
 */
const NS = 'http://www.w3.org/2000/svg';
const el = (name, attrs = {}, parent) => {
  const n = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  if (parent) parent.appendChild(n);
  return n;
};
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const SYMBOLS = { drop: '#i-drop', flame: '#i-flame', sun: '#i-sun' };

export function initPipeline() {
  const page = document.querySelector('.page');
  const svg = document.querySelector('.pipe__svg');
  const railWrap = document.querySelector('.hero .wrap');
  if (!page || !svg || !railWrap) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let segs = [];      // { path, len, y0, y1 }
  let nodes = [];     // { g, y }
  let raf = 0;

  function build() {
    svg.replaceChildren();
    segs = []; nodes = [];

    const pr = page.getBoundingClientRect();
    const mobile = innerWidth < 900;
    const wr = railWrap.getBoundingClientRect();
    const pad = parseFloat(getComputedStyle(railWrap).paddingLeft);
    const x = wr.left - pr.left + pad / 2;
    const stub = pad / 2 - 8;

    const list = [...document.querySelectorAll('[data-node]')]
      .filter((n) => n.offsetParent !== null)
      .map((n) => {
        const r = n.getBoundingClientRect();
        const cs = getComputedStyle(n);
        const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.15;
        const type = n.dataset.node;
        const y = (type === 'end' ? r.top + r.height / 2 : r.top + Math.min(r.height / 2, lh / 2)) - pr.top;
        return { n, type, tone: n.dataset.tone || 'cool', y, rect: r };
      })
      .sort((a, b) => a.y - b.y);
    if (list.length < 2) return;

    const gTrack = el('g', {}, svg);
    const gFill = el('g', {}, svg);
    const gJoint = el('g', {}, svg);
    const gNode = el('g', {}, svg);

    // úseky medzi uzlami
    list.forEach((a, i) => {
      const b = list[i + 1];
      if (!b) return;
      let y1 = b.y;
      if (mobile) y1 = Math.min(b.y, a.y + 130);          // krátke úseky u nadpisov
      let d = `M${x} ${a.y} V${y1}`;
      let y1Scroll = y1;

      if (b.type === 'end') {                              // koleno a výbeh k telefónnemu tlačidlu
        const target = b.rect.left - pr.left - 6;
        const R = Math.min(22, Math.max(8, target - x - 2));
        d = `M${x} ${a.y} V${b.y - R} Q${x} ${b.y} ${x + R} ${b.y} H${target}`;
        el('circle', { cx: target, cy: b.y, r: 4.5, fill: 'var(--orange)' }, gFill);
      }

      el('path', { d, class: 'pipe-track' }, gTrack);
      const fill = el('path', { d, class: 'pipe-fill', 'data-tone': a.tone }, gFill);
      const len = fill.getTotalLength();
      fill.style.strokeDasharray = len;
      fill.style.strokeDashoffset = reduce ? 0 : len;
      segs.push({ path: fill, len, y0: a.y, y1: y1Scroll });

      // spojka (muf) v strede dlhého úseku
      const span = y1 - a.y;
      if (!mobile && span > 300) el('rect', { x: x - 9, y: a.y + span * 0.42, width: 18, height: 9, rx: 2, class: 'pipe-joint' }, gJoint);
    });

    // odbočky (T-kusy) a uzly
    list.forEach((a) => {
      if (a.type === 'end') return;
      if (stub > 6) el('path', { d: `M${x} ${a.y} H${x + stub}`, class: 'pipe-track', 'stroke-width': 4 }, gTrack);
      const g = el('g', { class: 'pipe-node', 'data-tone': a.tone, transform: `translate(${x} ${a.y})` }, gNode);
      const r = mobile ? 13 : 17;
      el('circle', { r, class: 'pipe-node__ring' }, g);
      if (SYMBOLS[a.type]) {
        const s = r * 1.1;
        const u = el('use', { href: SYMBOLS[a.type], x: -s / 2, y: -s / 2, width: s, height: s, class: 'pipe-node__sym' }, g);
        u.style.color = 'inherit';
      } else {                                              // ventil: ručné koliesko sa otvorí o 90°
        el('line', { x1: -r * 0.5, x2: r * 0.5, y1: 0, y2: 0, class: 'pipe-node__handle' }, g);
        el('circle', { r: 2.2, fill: 'currentColor', class: 'pipe-node__sym' }, g);
      }
      nodes.push({ g, y: a.y });
    });

    update();
  }

  function update() {
    raf = 0;
    const pr = page.getBoundingClientRect();
    const focal = innerHeight * 0.62 - pr.top;
    for (const s of segs) {
      const f = reduce ? 1 : clamp((focal - s.y0) / Math.max(1, s.y1 - s.y0));
      s.path.style.strokeDashoffset = s.len * (1 - f);
    }
    for (const n of nodes) n.g.classList.toggle('is-on', reduce || focal >= n.y);
  }

  const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
  addEventListener('scroll', schedule, { passive: true });

  let rebuildT = 0;
  const rebuild = () => { clearTimeout(rebuildT); rebuildT = setTimeout(build, 80); };
  addEventListener('resize', rebuild);
  new ResizeObserver(rebuild).observe(page);
  if (document.fonts?.ready) document.fonts.ready.then(rebuild);
  build();
}
