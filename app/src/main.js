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
function markCategory() {
  for (const link of categoryLinks) {
    if (link.hash === location.hash) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
markCategory();
addEventListener('hashchange', markCategory);
for (const link of document.querySelectorAll('.category-nav a, .lunch-nav a')) {
  link.addEventListener('click', event => {
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!target) return;
    event.preventDefault();
    history.pushState(null, '', link.href);
    markCategory();
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    const heading = target.matches('h2,h3') ? target : target.querySelector('h2,h3');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      requestAnimationFrame(() => heading.focus({ preventScroll: true }));
    }
  });
}
