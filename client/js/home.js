
// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  // spaceBetween: 5,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  speed: 600,
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
