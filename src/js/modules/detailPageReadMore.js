import Swiper, { Navigation } from "swiper/swiper-bundle";

Swiper.use(Navigation);

export default () => {
  const slider = document.querySelector(".read-more__slider");

  if (!slider) return;

  new Swiper(slider, {
    spaceBetween: 8,
    slidesPerView: 3,
    navigation: {
      prevEl: slider
        .closest(".read-more")
        .querySelector(".ui-slider-nav__btn--prev"),
      nextEl: slider
        .closest(".read-more")
        .querySelector(".ui-slider-nav__btn--next"),
    },
    breakpoints: {
      280: {
        slidesPerView: 1.1,
      },

      768: {
        slidesPerView: 3,
      },
    },
  });
};
