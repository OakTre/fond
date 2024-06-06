import Swiper, { Autoplay } from "swiper/swiper-bundle";

Swiper.use(Autoplay);

export default () => {
  const sliders = document.querySelectorAll(".projects-intro__slider");

  if (sliders.length === 0) return;

  sliders.forEach((slider) => {
    const { center, speed } = slider.dataset;

    console.log("Slider", slider);

    console.log("center", center);

    const slides = Array.from(slider.querySelectorAll(".swiper-slide"));

    const parent = slides[0]?.parentElement;
    if (parent && slides.length) {
      slides.forEach((slide) => {
        parent.appendChild(slide.cloneNode(true));
      });
    }

    new Swiper(slider, {
      spaceBetween: 8,
      slidesPerView: "auto",
      direction: "vertical",
      centeredSlides: true,
      // centeredSlides: center ? true : false,
      // initialSlide: center ? 1 : 0,
      loopAdditionalSlides: 3,
      allowTouchMove: false,
      loop: true,
      speed: 12000,
      autoplay: {
        delay: "0",
        disableOnInteraction: false,
        reverseDirection: !!center,
      },
      breakpoints: {
        280: {
          direction: "horizontal",
        },
        1199: {
          direction: "vertical",
        },
      },
    });
  });
};
