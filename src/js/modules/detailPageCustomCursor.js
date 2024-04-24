export default () => {
  const container = document.querySelector('.detail-page')

  if (!container) return

  container.addEventListener('mousemove', (event) => {
    if (event.target.closest('.detail-page__slider')) {
      const slider = event
        .target
        .closest('.detail-page__slider')
      const cursor = slider.querySelector('.detail-page__slider-cursor')

      cursor.style.top = `${
        event.clientY  - slider.getBoundingClientRect().top
      }px`;
      cursor.style.left = `${
        event.clientX - slider.getBoundingClientRect().left
      }px`;
    }
  })
}
