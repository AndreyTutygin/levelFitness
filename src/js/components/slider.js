import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

const swiper = new Swiper(".hero-slider__swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".btn-arrow_next",
    prevEl: ".btn-arrow_prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  speed: 800,
  spaceBetween: 100,
  loop: true
});
