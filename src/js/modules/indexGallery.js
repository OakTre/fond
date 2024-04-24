import Swiper, { Autoplay } from 'swiper/swiper-bundle'

Swiper.use(Autoplay)

export default () => {
  const gallery = document.querySelector('.care__slider')

  if (!gallery) return

  new Swiper(gallery, {
    spaceBetween: 8,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    loopedSlides: 16,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 0
    }
  })
}
