export default () => {
  const burger = document.querySelector(".header__burger");

  burger.addEventListener("click", (event) => {
    event.preventDefault();
    burger.parentElement.classList.toggle("burger-open");
  });
};
