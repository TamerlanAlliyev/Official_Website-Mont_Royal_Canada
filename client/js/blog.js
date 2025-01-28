const searchInputBlog = document.querySelector(".section-blogs-filters .search-input");
const searchResultBlog = document.querySelector(".section-blogs-filters .search-result");
const searchBoxBlog = document.querySelector(".section-blogs-filters .search-box");
const searchContainerBlog = document.querySelector(".section-blogs-filters .search");

searchInputBlog.addEventListener("input", () => {
  if (searchInputBlog.value === "") {
    searchResultBlog.classList.remove("active");
    searchContainerBlog.classList.remove("active");
  } else {
    searchResultBlog.classList.add("active");
    searchContainerBlog.classList.add("active");
  }
});

document.addEventListener("click", (event) => {
  if (!searchBoxBlog.contains(event.target) && !searchContainerBlog.contains(event.target)) {
    searchResultBlog.classList.remove("active");
    searchContainerBlog.classList.remove("active");
    searchInputBlog.value = "";
  }
});


var swiper = new Swiper(".section-blogs-filters .mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
  },
});