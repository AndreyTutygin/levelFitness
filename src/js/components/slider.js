import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

const swiper = new Swiper(".hero-slider__swiper", {
  modules: [Navigation],
  navigation: {
    nextEl: ".btn-arrow_next",
    prevEl: ".btn-arrow_prev",
  },
  grabCursor: true,
  speed: 800,
  loop: true
});
