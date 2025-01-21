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

// ---------- SERVICE ---------- //
var swiper = new Swiper(".services .mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    // type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 18,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },
});

// ---------- BLOGS ---------- //
var swiper = new Swiper(".blogs .mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

