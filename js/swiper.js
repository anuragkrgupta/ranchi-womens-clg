var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//success card

var successSwiper = new Swiper(".successSwiper", {
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  speed: 800,

  slidesPerView: 1,
  spaceBetween: 15,

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },

  navigation: {
    nextEl: ".success-next",
    prevEl: ".success-prev",
  },

  pagination: {
    el: ".successSwiper .swiper-pagination",
    clickable: true,
  }
});