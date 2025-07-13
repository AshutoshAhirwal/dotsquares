(function (Drupal, once) {
  Drupal.behaviors.stickyHeader = {
    attach(context) {
      const header = once('sticky-header', '#site-header', context);

      if (header.length > 0) {
        const el = header[0];
        window.addEventListener('scroll', () => {
          if (window.scrollY > 10) {
            el.classList.add('is-scrolled');
          } else {
            el.classList.remove('is-scrolled');
          }
        });
      }
    }
  };
})(Drupal, once);
