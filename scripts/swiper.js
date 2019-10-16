import Swiper from 'swiper';

export let mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  spaceBetween: 16,
  slidesPerView: 4,
  roundLengths: true,

  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slideClass: 'commits__commit',
  
}) 