import Swiper from 'swiper';

export let mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  spaceBetween: 16,
  slidesPerView: 1,
  roundLengths: true,

  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 4
    }
  }
}) 