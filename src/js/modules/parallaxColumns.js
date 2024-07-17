import gsap from 'gsap'
import ScrollTrigger from '../../assets/js/gsap-bonus/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default () => {
  const container = document.querySelector('.cards-columns')
  let offset
  let offset1
  let lastColumnHeight

  if (!container) return

  const columns = Array.from(
    document.querySelectorAll('.cards-columns__column')
  )

  lastColumnHeight = columns[2]
    .getBoundingClientRect()
    .height

  gsap.set(container, { height: lastColumnHeight })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top center',
      end: 'bottom bottom',
      scrub: 0.8,
      pinSpacing: false
    }
  })

  offset = columns[0].getBoundingClientRect().height - lastColumnHeight
  offset1 = columns[1].getBoundingClientRect().height - lastColumnHeight

  tl
    .to(columns[0], { y: offset * -1 }, 0)
    .to(columns[1], { y: offset1 * -1 }, 0)

  window.addEventListener('resize', () => {
    setTimeout(() => {
      lastColumnHeight = document
        .querySelector('.cards-columns__column:last-child')
        .getBoundingClientRect()
        .height

      offset = document
        .querySelector('.cards-columns__column:first-child')
        .getBoundingClientRect().height - lastColumnHeight
      offset1 = document
        .querySelector('.cards-columns__column:nth-child(2)')
        .getBoundingClientRect().height - lastColumnHeight

      tl
        .to(columns[0], { y: offset * -1 }, 0)
        .to(columns[1], { y: offset1 * -1 }, 0)

      ScrollTrigger.refresh(true)
    }, 300)
  })

  ScrollTrigger.addEventListener("refresh", function () {
    setTimeout(() => {
      const lastColumnHeight = document
        .querySelector('.cards-columns__column:last-child')
        .getBoundingClientRect()
        .height

      gsap.set(container, { height: lastColumnHeight })
    }, 300)
  });
}
