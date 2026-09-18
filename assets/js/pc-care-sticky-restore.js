/* PC Care sticky navigation fallback/restore.
   Shows the existing X5 sticky bar after the main header has scrolled away.
   Enabled for desktop + tablet responsive breakpoints (720px and up).
   Mobile (<720px) keeps the normal responsive header only. */
(function () {
  'use strict';

  function initStickyRestore() {
    var sticky = document.getElementById('imStickyBarContainer');
    var header = document.getElementById('imHeader');
    if (!sticky || !header) return;

    var ticking = false;

    function isEligible() {
      return window.innerWidth >= 720;
    }

    function getTriggerPoint() {
      // Use the document position of the main header, not its current viewport position.
      return Math.max(1, header.getBoundingClientRect().top + window.pageYOffset + Math.max(header.offsetHeight, header.getBoundingClientRect().height));
    }

    function update() {
      ticking = false;

      if (!isEligible()) {
        sticky.classList.remove('pc-care-sticky-visible');
        return;
      }

      var show = window.pageYOffset >= getTriggerPoint();
      sticky.classList.toggle('pc-care-sticky-visible', show);
    }

    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    window.addEventListener('orientationchange', requestUpdate, { passive: true });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStickyRestore);
  } else {
    initStickyRestore();
  }
})();
