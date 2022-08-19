"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); //此處JS部分參考 WEI_RIO#9342 Day 39 每日

var swiper = new Swiper(".share-Swiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  }
});
//# sourceMappingURL=all.js.map
