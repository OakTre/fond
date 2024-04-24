import gsap from 'gsap'
import Draggable from "../../assets/js/gsap-bonus/Draggable";

gsap.registerPlugin(Draggable)

export default () => {
  const container = document.querySelector('.comparison-image')

  if (!container) return

  const clipped = container.querySelector('.comparison-image__side--is-clipped');
  const dragBtn = container.querySelector('.comparison-image__drag-btn')
  let ratio = 0.5;
  const width = container
    .getBoundingClientRect()
    .width

  gsap.set(clipped,
    { clipPath: `inset(0px ${width / 2}px 0px 0px)` }
  )

  const draggable = new Draggable(dragBtn, {
    type: 'x',
    bounds: container,
    inertia: false,
    dragResistance: 0,
    edgeResistance: 0,
    onDrag: () => {
      const width = container
        .getBoundingClientRect()
        .width

      gsap.set(clipped,
        { clipPath: `inset(0px ${(width / 2) - draggable.x}px 0px 0px)` }
      )

      ratio = draggable.x / (width / 2)
    }
  })
}
