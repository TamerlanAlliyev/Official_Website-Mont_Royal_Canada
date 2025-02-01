const countdownElements = document.querySelectorAll(
    ".countdown-container"
  );
  countdownElements.forEach((countdownElement) => {
    const targetDateString = countdownElement.getAttribute("data-date");
    const targetDate = new Date(targetDateString);

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate.getTime() - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.querySelector("#days").textContent = days;
        countdownElement.querySelector("#hours").textContent = hours;
        countdownElement.querySelector("#minutes").textContent = minutes;
        countdownElement.querySelector("#seconds").textContent = seconds;
      } else {
        countdownElement.innerHTML = "<h2>Time's Up!</h2>";
      }
    }
    setInterval(updateCountdown, 1000);
  });


  var swiper = new Swiper(".event-galery .mySwiper", {
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
        slidesPerView: 1,
        spaceBetween: 18,
      }, 760: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });