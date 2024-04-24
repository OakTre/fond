import Swiper, { Autoplay, Loop } from 'swiper/swiper-bundle'

Swiper.use([Autoplay, Loop])

export default () => {
  const gallery = document.querySelector('.care__slider')

  if (!gallery) return

  new Swiper(gallery, {
    spaceBetween: 8,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    loopedSlides: 16,
    loop: true,
    loopAdditionalSlides: 16,
    speed: 19000,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    }
  })
}
