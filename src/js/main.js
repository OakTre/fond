import "focus-visible";
import lazyIMages from "./modules/lazyIMages";
import documentReady from "./helpers/documentReady";
import initModal from "./modules/initModal";
import validation from "./modules/validation";
import projectsIntroSliders from "./modules/projectsIntroSliders";
import indexIntroSlider from "./modules/indexIntroSlider";
import indexGallery from "./modules/indexGallery";
import detailPageGallery from "./modules/detailPageGallery";
import detailPageCustomCursor from "./modules/detailPageCustomCursor";
import detailPageReadMore from "./modules/detailPageReadMore";
import imageComparison from "./modules/imageComparison";
import parallaxColumns from "./modules/parallaxColumns";
import anchorLinks from "./modules/buttonUp";
import initYtVideo from "./modules/initYtVideo";
import burger from "./modules/burger";

documentReady(() => {
  window.___YOUR_PROJECT___API = {};

  lazyIMages();
  initModal();
  validation();
  projectsIntroSliders();
  indexIntroSlider();
  indexGallery();
  detailPageGallery();
  detailPageCustomCursor();
  detailPageReadMore();
  imageComparison();
  parallaxColumns();
  anchorLinks();
  initYtVideo();
  burger();
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add("preloader--is-loaded");
  }, 4000);

  setTimeout(() => {
    preloader.classList.add("preloader--is-hidden");
  }, 6000);
});
