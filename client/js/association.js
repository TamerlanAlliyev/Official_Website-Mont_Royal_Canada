let cards = document.querySelectorAll(".card-box");

cards.forEach((card) => {
  card.querySelector(".show-btn").addEventListener("click", () => {
    card.classList.toggle("active")
  });
});