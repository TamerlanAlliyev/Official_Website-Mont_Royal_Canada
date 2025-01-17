
// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
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
