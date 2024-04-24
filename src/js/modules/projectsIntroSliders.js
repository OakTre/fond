import Swiper, { Autoplay } from 'swiper/swiper-bundle'

Swiper.use(Autoplay)

export default () => {
  const sliders = document.querySelectorAll('.projects-intro__slider')

  if (sliders.length === 0) return

  sliders.forEach(slider => {
    const { center, speed } = slider.dataset

    new Swiper(slider, {
      spaceBetween: 8,
      slidesPerView: 'auto',
      direction: 'vertical',
      centeredSlides: center,
      initialSlide: center ? 1 : 0,
      loop: true,
      autoplay: {
        delay: '2500',
        disableOnInteraction: false,
      },
      breakpoints: {
        280: {
          direction: 'horizontal',
        },
        1199: {
          direction: 'vertical',
        }
      }
    })
  })
}
