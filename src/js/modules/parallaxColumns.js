import gsap from 'gsap'
import ScrollTrigger from '../../assets/js/gsap-bonus/ScrollTrigger'
import {isTabletMd} from "../helpers/mediaQ";

gsap.registerPlugin(ScrollTrigger)
export default () => {
  const container = document.querySelector('.cards-columns')

  if (!container) return
  if (isTabletMd()) return

  const columns = Array.from(
    document.querySelectorAll('.cards-columns__column')
  )
  const lastColumnHeight = columns[2]
    .getBoundingClientRect()
    .height
  const isMobile = window.matchMedia('(max-width: 992px)').matches

  gsap.set(container, {
    height: lastColumnHeight
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: '30% top',
      scrub: 0.4,
      pinSpacing: false
    }
  })

  const offset = columns[0].getBoundingClientRect().height - lastColumnHeight
  const offset1 = columns[1].getBoundingClientRect().height - lastColumnHeight

  tl
    .to(columns[0], { y: offset * -1 }, 0)
    .to(columns[1], { y: offset1 * -1 }, 0)
}
