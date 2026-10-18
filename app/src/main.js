const drawer = document.querySelector('#mobile-menu');
const trigger = document.querySelector('.menu-toggle');
const close = document.querySelector('.drawer-close');
if (drawer && trigger && close) {
  trigger.addEventListener('click', () => {
    drawer.showModal();
    trigger.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('drawer-open');
    close.focus();
  });
  const closeDrawer = () => drawer.close();
  close.addEventListener('click', closeDrawer);
  drawer.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = [...drawer.querySelectorAll('a[href],button:not([disabled])')].filter(element => element.getClientRects().length);
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  drawer.addEventListener('click', event => {
    if (event.target === drawer) {
      const rect = drawer.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientY > rect.bottom) closeDrawer();
    }
    if (event.target.closest('a')) closeDrawer();
  });
  drawer.addEventListener('close', () => {
    trigger.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('drawer-open');
    trigger.focus();
  });
  matchMedia('(min-width: 850px)').addEventListener('change', event => {
    if (event.matches && drawer.open) closeDrawer();
  });
}
// Native hash links work without JavaScript; enhance focus and selected state.
const categoryLinks = [...document.querySelectorAll('.category-nav a')];
const lunchLinks = [...document.querySelectorAll('.lunch-nav a')];
function hashTarget() {
  try { return document.getElementById(decodeURIComponent(location.hash.slice(1))); }
  catch { return null; }
}
const targetHeading = target => target?.matches('h2,h3') ? target : target?.querySelector('h2,h3');
function markCategory() {
  const target = hashTarget();
  const group = target?.closest('.menu-panel');
  for (const link of categoryLinks) {
    if (group && link.hash === `#${group.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  for (const link of lunchLinks) {
    if (link.hash === location.hash) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
markCategory();
function restoreCategory() {
  markCategory();
  const target = hashTarget();
  if (!target?.closest('.menu-panel')) return;
  const heading = targetHeading(target) || target;
  // After native history restoration, keep the chosen section in view.
  requestAnimationFrame(() => {
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
}
addEventListener('hashchange', restoreCategory);
addEventListener('pageshow', restoreCategory);
for (const link of [...categoryLinks, ...lunchLinks]) {
  link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!target) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.href);
    markCategory();
    const heading = targetHeading(target);
    (heading || target).scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      requestAnimationFrame(() => heading.focus({ preventScroll: true }));
    }
  });
}
