let selection = document.querySelector(".selection");
let selectionBtn = document.querySelector(".selection-selected");

selectionBtn.addEventListener("click", () => {
  selection.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (!selection.contains(e.target)) {
    selection.classList.remove("active");
  }
});