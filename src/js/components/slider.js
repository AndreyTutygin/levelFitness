import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

const heroSlider = new Swiper(".hero-slider__swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".btn-arrow_next",
    prevEl: ".btn-arrow_prev",
  },
  pagination: {
    el: ".hero__slider-pagination",
    clickable: true,
  },
  grabCursor: true,
  speed: 800,
  spaceBetween: 100,
  loop: true
});

const trainersSlider = new Swiper(".trainers-slider__swiper", {
  modules: [Pagination],
  pagination: {
    el: ".trainers__slider-pagination",
    clickable: true,
  },
  grabCursor: true,
  speed: 800,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
