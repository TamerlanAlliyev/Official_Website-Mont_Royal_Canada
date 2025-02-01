let selections = document.querySelectorAll(".selection");

selections.forEach((selc)=>{
  selc.addEventListener("click", () => {
    selc.classList.toggle("active");
  });
  
  window.addEventListener("click", (e) => {
    if (!selc.contains(e.target)) {
      selc.classList.remove("active");
    }
  });
});
