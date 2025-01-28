var swiper = new Swiper(".mySwiper", {
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

  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    let showBtn = item.querySelector(".show-btn");
    showBtn.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        showBtn.querySelector("span").innerText = "Show more";
      } else {
        item.classList.add("active");
        showBtn.querySelector("span").innerText = "Show less";
      }
    });
  });