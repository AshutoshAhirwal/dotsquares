(function (Drupal, once) {
  Drupal.behaviors.categoryFilter = {
    attach(context, settings) {
      const buttons = once('category-btn-init', '.category-btn', context);
      const cards = once('category-card-init', '.card', context);

      if (buttons.length && cards.length) {
        buttons.forEach((btn) => {
          btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');

            // Toggle active class
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            cards.forEach((card) => {
              const cardCategory = card.getAttribute('data-category');
              card.style.display = cardCategory === category ? 'block' : 'none';
            });
          });
        });
      }
    }
  };
})(Drupal, once);
