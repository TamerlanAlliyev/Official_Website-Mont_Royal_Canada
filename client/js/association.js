let cards = document.querySelectorAll(".card-box");

cards.forEach((card) => {
  card.querySelector(".show-btn").addEventListener("click", () => {
    if (card.classList.contains("active")) {
      card.classList.remove("active");
      card.querySelector(
        ".show-btn"
      ).innerHTML = `  <a>Show More <i class="fa-solid fa-chevron-down"></i></a>`;
    } else {
      card.classList.add("active");
      card.querySelector(
        ".show-btn"
      ).innerHTML = `  <a>Show Less <i class="fa-solid fa-chevron-down"></i></a>`;
    }
  });
});