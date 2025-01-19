
// Initialize Swiper

var swiper = new Swiper(".main-slider .mySwiper", {
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  speed: 1000,
  parallax: true,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});






var swiper = new Swiper(".services .mySwiper", {

  pagination: {
    el: ".swiper-pagination",
      // type: 'bullets',
    clickable: true,
  },
 
  // breakpoints: {
  //   "@0.00": {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //     grid: {
  //       rows: 2,
  //       fill: "row",
  //     }
  //   },
  //   "@0.75": {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //     grid: {
  //       rows: 2,
  //       fill: "row",
  //     }
  //   }, 768: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   },
  //   "@1.00": {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //     grid: {
  //       rows: 2,
  //       fill: "row",
  //     }
  //   },
  //   "@1.50": {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //     grid: {
  //       rows: 2,
  //       fill: "row",
  //     }
  //   },
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 2, 
        fill: 'row', 
      },
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
      grid: {
        rows: 2, 
        fill: 'row', 
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 2, 
        fill: 'row', 
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
      grid: {
        rows: 2, 
        fill: 'row', 
      },
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
      grid: {
        rows: 2, 
        fill: 'row', 
      },
    },
  }
});

