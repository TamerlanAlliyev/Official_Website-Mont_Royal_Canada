function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown");
  const arrow = document.querySelector(".arrow");

  const isDropdownVisible = dropdown.style.display === "block";
  dropdown.style.display = isDropdownVisible ? "none" : "block";

  arrow.style.transform = isDropdownVisible ? "rotate(0deg)" : "rotate(180deg)";
}

function selectLanguage(language) {
  const selectedLanguage = document.querySelector(".selected-language span");
  const flag = document.querySelector(".selected-language .flag");
  const dropdown = document.querySelector(".dropdown");
  const arrow = document.querySelector(".arrow");

  if (language === "EN") {
    selectedLanguage.textContent = "English";
    flag.src = "https://flagcdn.com/gb.svg";
  } else if (language === "AZ") {
    selectedLanguage.textContent = "Azerbaijan";
    flag.src = "https://flagcdn.com/az.svg";
  } else if (language === "RU") {
    selectedLanguage.textContent = "Russian";
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

const searchBoxLanguage = document.querySelector(".search-language .search");
const searchBtnLanguage = document.querySelector(
  ".search-language .search-btn"
);
const searchInputLanguage = document.querySelector(
  ".search-language .search-input"
);
const searchResultLanguage = document.querySelector(
  ".search-language .search-result"
);
const searchInputBoxLanguage = document.querySelector(
  ".search-language .search-box"
);

searchBtnLanguage.addEventListener("click", () => {
  searchBoxLanguage.classList.toggle("active");
  searchInputBoxLanguage.classList.remove("active");
  searchInputLanguage.value = "";
});

searchInputLanguage.addEventListener("input", () => {
  searchInputBoxLanguage.classList.add("active");
  if (searchInputLanguage.value == "") {
    searchInputBoxLanguage.classList.remove("active");
  }
});

document.addEventListener("click", (event) => {
  if (
    !searchInputBoxLanguage.contains(event.target) &&
    !searchBtnLanguage.contains(event.target)
  ) {
    searchBoxLanguage.classList.remove("active");
    searchInputBoxLanguage.classList.remove("active");
    searchInputLanguage.value = "";
  }
});

// Burger Menu
const burgerMenu = document.querySelector(".burger-menu");
const burgerBtb = document.querySelector(".burger");
const burgerCloseBtn = document.querySelector(".burger-menu .close");

burgerBtb.addEventListener("click", () => {
  burgerMenu.classList.add("active");
});

burgerCloseBtn.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
});

// HEADER SCROLL
const headerSection = document.querySelector(".header");
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    headerSection.classList.add("scroll");
  } else {
    headerSection.classList.remove("scroll");
  }
});

// BURGER MENU
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-list-li");

  menuItems.forEach((item) => {
    const subList = item.querySelector(".sub-list");

    if (subList) {
      subList.classList.remove("open");

      item.addEventListener("click", () => {
        const isOpen = subList.classList.contains("open");

        menuItems.forEach((menuItem) => {
          const otherSubList = menuItem.querySelector(".sub-list");
          if (otherSubList) {
            otherSubList.classList.remove("open");
          }
        });

        if (!isOpen) {
          subList.classList.add("open");
        }
      });
    }
  });
});

// PAGES NAVBAR

const menuItems = document.querySelectorAll(".parent-row");
let currentSubList = null;
let currentParentRow = null;

menuItems.forEach((menuItem) => {
  let timeoutId;

  menuItem.addEventListener("mouseover", () => {
    const subList = menuItem.nextElementSibling;
    if (subList && subList.classList.contains("sub-list")) {
      if (currentSubList && currentSubList !== subList) {
        currentSubList.style.display = "none";
        currentParentRow.classList.remove("active");
      }

      currentSubList = subList;
      currentParentRow = menuItem;
      subList.style.display = "flex";
      menuItem.classList.add("active");
    }
  });

  menuItem.addEventListener("mouseout", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const subList = menuItem.nextElementSibling;
      if (
        subList &&
        subList.classList.contains("sub-list") &&
        !menuItem.matches(":hover") &&
        !subList.matches(":hover")
      ) {
        subList.style.display = "none";
        menuItem.classList.remove("active");
      }
    }, 100);
  });

  const subList = menuItem.nextElementSibling;
  if (subList && subList.classList.contains("sub-list")) {
    subList.addEventListener("mouseover", () => {
      clearTimeout(timeoutId);
      subList.style.display = "flex";
      menuItem.classList.add("active");
    });

    subList.addEventListener("mouseout", () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        subList.style.display = "none";
        menuItem.classList.remove("active");
      }, 100);
    });
  }
});

// // LOADING
// window.addEventListener("load", () => {
//   setTimeout(() => {
//     document.getElementById("loading").style.display = "none";
//     document.getElementById("content").style.display = "block";
//   }, 500);
// });

// NOTIFICATION
let notification = document.querySelector(".notification-container");
let notificationOpen = document.querySelector(".notification");
let notificationClose = document.querySelector(".notification-close");

notificationOpen.addEventListener("click", (event) => {
  event.stopPropagation();
  notification.classList.toggle("active");
});

notificationClose.addEventListener("click", (event) => {
  event.stopPropagation();
  notification.classList.toggle("active");
});

notification.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!notification.contains(event.target)) {
    notification.classList.remove("active");
  }
});

// NOTIFICATION COUNT
let notificationCount = document.querySelector(".not-count");
let notBoxes = document.querySelectorAll(".not-box");

notBoxes.forEach((not) => {
  let showBtn = not.querySelector(".show-btn");
  let readBtn = not.querySelector(".read-btn");
  let notRemoveBtn = not.querySelector(".not-remove");

  notRemoveBtn.addEventListener("click", () => {
    not.remove();
    if (!not.classList.contains("readed")) {
      let count = parseInt(notificationCount.innerText);
      notificationCount.innerText = count - 1;

      if (parseInt(notificationCount.innerText) == 0) {
        document.querySelector(".notification sup").remove();
      }
    }
  });

  if (showBtn) {
    showBtn.addEventListener("click", () => {
      let notBody = not.querySelector(".not-body");
      notBody.classList.toggle("active");
    });
  }

  if (readBtn) {
    readBtn.addEventListener("click", () => {
      not.classList.add("readed");
      let count = parseInt(notificationCount.innerText);
      notificationCount.innerText = count - 1;

      if (parseInt(notificationCount.innerText) == 0) {
        document.querySelector(".notification sup").remove();
      }
    });
  }
});
