// Motion for /badge-builder/ and /certificate-builder/: scroll reveals, swipeable hero deck, use-case tabs.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal(page: HTMLElement) {
  if (reduce || !('IntersectionObserver' in window)) return;
  page.classList.add('bx-motion');
  const singles = page.querySelectorAll<HTMLElement>('.bx-head, .bx-row__copy, .bx-frame, .bx-sheet, .bx-stack, .bx-xlink, .bx-darkgrid, .bx-use__tabs');
  const groups = page.querySelectorAll<HTMLElement>('.bx-cols, .bx-trio, .bx-links, .bx-deliver, .bx-cross, .bx-modes, .bx-split, .bx-darkgrid__list, .bx-faq__list, .bx-steps3');
  const targets: HTMLElement[] = [];
  singles.forEach((el) => { el.classList.add('bx-reveal'); targets.push(el); });
  groups.forEach((g) => [...g.children].forEach((c, i) => {
    const el = c as HTMLElement;
    el.classList.add('bx-reveal');
    el.style.setProperty('--bx-i', String(i));
    targets.push(el);
  }));
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  }), { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
  targets.forEach((t) => io.observe(t));
}

function initDeck(deck: HTMLElement) {
  const cards = [...deck.querySelectorAll<HTMLElement>('.bx-deck__card')];
  const dots = [...deck.querySelectorAll<HTMLButtonElement>('.bx-deck__dot')];
  const stage = deck.closest('.bx-stage');
  if (cards.length < 2) return;
  let order = cards.map((_, i) => i);
  let busy = false;
  let timer = 0;

  const paint = () => {
    order.forEach((ci, pos) => cards[ci].dataset.pos = String(Math.min(pos, 3)));
    dots.forEach((d, i) => d.setAttribute('aria-current', i === order[0] ? 'true' : 'false'));
    cards.forEach((c, i) => c.setAttribute('aria-hidden', i === order[0] ? 'false' : 'true'));
  };
  const pulse = () => {
    if (!stage) return;
    stage.classList.remove('is-merging'); void (stage as HTMLElement).offsetWidth; stage.classList.add('is-merging');
  };
  const advance = (dir: 1 | -1 = 1) => {
    if (busy) return;
    busy = true;
    const front = cards[order[0]];
    front.style.transform = '';
    front.dataset.out = dir === 1 ? 'left' : 'right';
    order = order.slice(1).concat(order[0]);
    window.setTimeout(() => { delete front.dataset.out; paint(); pulse(); busy = false; }, reduce ? 0 : 420);
  };
  const goTo = (ci: number) => {
    if (busy || order[0] === ci) return;
    const idx = order.indexOf(ci);
    order = order.slice(idx).concat(order.slice(0, idx));
    paint(); pulse();
  };
  const stop = () => window.clearInterval(timer);
  const start = () => { stop(); if (!reduce) timer = window.setInterval(() => advance(1), 2800); };

  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); start(); }));
  deck.addEventListener('mouseenter', stop);
  deck.addEventListener('mouseleave', start);
  deck.addEventListener('focusin', stop);
  deck.addEventListener('focusout', start);
  deck.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { advance(1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { advance(-1); e.preventDefault(); }
  });

  // Drag / swipe the front card.
  let startX = 0, dx = 0, dragging = false, pointer = -1;
  deck.addEventListener('pointerdown', (e) => {
    const front = cards[order[0]];
    if (!front.contains(e.target as Node) || busy) return;
    dragging = true; pointer = e.pointerId; startX = e.clientX; dx = 0;
    front.setPointerCapture(pointer); front.classList.add('is-dragging'); stop();
  });
  deck.addEventListener('pointermove', (e) => {
    if (!dragging || e.pointerId !== pointer) return;
    dx = e.clientX - startX;
    cards[order[0]].style.transform = `translateX(calc(-50% + ${dx}px)) rotate(${dx / 18}deg)`;
  });
  const end = () => {
    if (!dragging) return;
    dragging = false;
    const front = cards[order[0]];
    front.classList.remove('is-dragging');
    if (Math.abs(dx) > 60) advance(dx < 0 ? 1 : -1); else front.style.transform = '';
    start();
  };
  deck.addEventListener('pointerup', end);
  deck.addEventListener('pointercancel', end);

  paint();
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop())) : null;
  if (io) io.observe(deck); else start();
}

function initTabs(root: HTMLElement) {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const select = (tab: HTMLButtonElement) => tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    const panel = document.getElementById(t.getAttribute('aria-controls') || '');
    if (!panel) return;
    panel.hidden = !on;
    if (on) { panel.classList.remove('is-entering'); void panel.offsetWidth; panel.classList.add('is-entering'); }
  });
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      select(next); next.focus();
    });
  });
}

document.querySelectorAll<HTMLElement>('.bx-page').forEach(initReveal);
document.querySelectorAll<HTMLElement>('[data-bx-deck]').forEach(initDeck);
document.querySelectorAll<HTMLElement>('[data-bx-tabs]').forEach(initTabs);
