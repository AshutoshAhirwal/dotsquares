(function (Drupal, once) {
  Drupal.behaviors.testimonials_slider = {
    attach(context, settings) {
      const sliders = once('save-the-date-slider-init', '.splide.testimonials__items', context);

      sliders.forEach(function (slider) {
        new Splide(slider, {
          type: 'loop',
          perPage: 3,
          perMove: 1,
          pagination: false,
          gap: '50px',
          fixedWidth: '300px', // 👈 Applies ABOVE 1200px

          breakpoints: {
            1200: {
              fixedWidth: null, // 👈 Remove fixedWidth below 1200px
              perPage: 3,
              arrows: true,
            },
            768: {
              perPage: 1,
              arrows: true,
            },
          },
        }).mount();
      });
    },
  };
})(Drupal, once);
