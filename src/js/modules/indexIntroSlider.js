import Swiper, { Navigation, Autoplay } from "swiper/swiper-bundle";
import { isTablet } from "../helpers/mediaQ";

Swiper.use([Navigation, Autoplay]);

export default () => {
  const slider = isTablet()
    ? document.querySelector(".index-intro__slider--mobile")
    : document.querySelector(".index-intro-slider");

  if (!slider) return;

  new Swiper(slider, {
    spaceBetween: 8,
    slidesPerView: 1,
    navigation: {
      prevEl: slider.querySelector(".ui-slider-nav__btn--prev"),
      nextEl: slider.querySelector(".ui-slider-nav__btn--next"),
    },
    pagination: {
      el: slider.querySelector(".swiper-pagination"),
      clickable: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
};
