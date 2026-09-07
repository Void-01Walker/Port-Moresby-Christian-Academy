(function () {
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

(function () {
  var toggle = document.getElementById('menu-toggle');
  var panel = document.getElementById('mobile-panel');
  var closeBtn = document.getElementById('menu-close');
  if (!toggle || !panel) return;

  var focusable = panel.querySelectorAll('a, button');
  var first = focusable[0];
  var last = focusable[focusable.length - 1];

  function onKeydown(e) {
    if (e.key === 'Escape') {
      closePanel();
      return;
    }
    if (e.key !== 'Tab' || focusable.length === 0) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function openPanel() {
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('scroll-lock');
    document.addEventListener('keydown', onKeydown);
    if (first) first.focus();
  }

  function closePanel() {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('scroll-lock');
    document.removeEventListener('keydown', onKeydown);
    toggle.focus();
  }

  toggle.addEventListener('click', function () {
    if (panel.classList.contains('open')) {
      closePanel();
    } else {
      openPanel();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closePanel);
})();
