import Swiper, { Scrollbar } from "swiper/swiper-bundle";

Swiper.use(Scrollbar);
export default () => {
  const sliders = document.querySelectorAll(".detail-page__slider");

  if (sliders.length === 0) return;

  sliders.forEach((slider) => {
    new Swiper(slider, {
      spaceBetween: 8,
      slidesPerView: "auto",
      centerInsufficientSlides: true,
      scrollbar: {
        el: slider.querySelector(".scroll-bar"),
        hide: true,
      },
      breakpoints: {
        280: {
          slidesPerView: 1.1,
        },
        1024: {
          slidesPerView: "auto",
        },
      },
    });
  });
};
