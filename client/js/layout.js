function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown");
    const arrow = document.querySelector(".arrow");

    const isDropdownVisible = dropdown.style.display === "block";
    dropdown.style.display = isDropdownVisible ? "none" : "block";

    arrow.style.transform = isDropdownVisible
      ? "rotate(0deg)"
      : "rotate(180deg)";
  }

  function selectLanguage(language) {
    const selectedLanguage = document.querySelector(
      ".selected-language span"
    );
    const flag = document.querySelector(".selected-language .flag");
    const dropdown = document.querySelector(".dropdown");
    const arrow = document.querySelector(".arrow");

    if (language === "EN") {
      selectedLanguage.textContent = "EN";
      flag.src = "https://flagcdn.com/gb.svg";
    } else if (language === "AZ") {
      selectedLanguage.textContent = "AZ";
      flag.src = "https://flagcdn.com/az.svg";
    } else if (language === "RU") {
      selectedLanguage.textContent = "RU";
      flag.src = "https://flagcdn.com/ru.svg";
    }

    dropdown.style.display = "none";
    arrow.style.transform = "rotate(0deg)"; 
  }

  window.addEventListener("click", function (event) {
    const languagePicker = document.querySelector(".language-picker");
    const dropdown = document.querySelector(".dropdown");
    const arrow = document.querySelector(".arrow");

    if (!languagePicker.contains(event.target)) {
      dropdown.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    }
  });



  const searchBox = document.querySelector(".search");
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");
  const searchResult = document.querySelector(".search-result");
  const searchInputBox = document.querySelector(".search-box");

  searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    searchInputBox.classList.remove("active");
    searchInput.value = "";
  });

  searchInput.addEventListener("input", (event) => {
    event.stopPropagation();
    searchInputBox.classList.add("active");
  });

  document.addEventListener("click", (event) => {
    if (
      !searchInputBox.contains(event.target) &&
      !searchBtn.contains(event.target)
    ) {
      searchBox.classList.remove("active");
      searchInputBox.classList.remove("active");
      searchInput.value = "";
    }
  });