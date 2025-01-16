// // PAGE NAVIGATION
// const menuItems = document.querySelectorAll(".parent-row");
// let currentSubList = null;
// let currentParentRow = null;

// menuItems.forEach((menuItem) => {
//   let timeoutId;

//   menuItem.addEventListener("mouseover", () => {
//     const subList = menuItem.nextElementSibling;
//     if (subList && subList.classList.contains("sub-list")) {
//       if (currentSubList && currentSubList !== subList) {
//         currentSubList.style.display = "none";
//         currentParentRow.classList.remove("active");
//       }

//       currentSubList = subList;
//       currentParentRow = menuItem;
//       subList.style.display = "flex";
//       menuItem.classList.add("active");
//     }
//   });

//   menuItem.addEventListener("mouseout", () => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       const subList = menuItem.nextElementSibling;
//       if (
//         subList &&
//         subList.classList.contains("sub-list") &&
//         !menuItem.matches(":hover") &&
//         !subList.matches(":hover")
//       ) {
//         subList.style.display = "none";
//         menuItem.classList.remove("active");
//       }
//     }, 100);
//   });

//   const subList = menuItem.nextElementSibling;
//   if (subList && subList.classList.contains("sub-list")) {
//     subList.addEventListener("mouseover", () => {
//       clearTimeout(timeoutId);
//       subList.style.display = "flex";
//       menuItem.classList.add("active");
//     });

//     subList.addEventListener("mouseout", () => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         subList.style.display = "none";
//         menuItem.classList.remove("active");
//       }, 100);
//     });
//   }
// });

// // Burger Menu
// const burgerMenu = document.querySelector(".burger-menu");
// const burgerBtb = document.querySelector(".burger");
// const burgerCloseBtn = document.querySelector(".burger-menu .close");

// burgerBtb.addEventListener("click", () => {
//   burgerMenu.classList.add("active");
// });

// burgerCloseBtn.addEventListener("click", () => {
//   burgerMenu.classList.remove("active");
// });

// // Initialize Swiper
// var swiper = new Swiper(".mySwiper", {
//   // spaceBetween: 5,
//   loop: true,
//   // autoplay: {
//   //   delay: 5000,
//   //   disableOnInteraction: false,
//   // },
//   speed: 600,
//   parallax: true,
//   hashNavigation: {
//     watchState: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// // HEADER SCROLL
// const headerSection = document.querySelector(".header");
// document.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     headerSection.classList.add("scroll");
//   } else {
//     headerSection.classList.remove("scroll");
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const menuItems = document.querySelectorAll(".menu-list-li");

//   menuItems.forEach((item) => {
//     const subList = item.querySelector(".sub-list");

//     if (subList) {
//       subList.classList.remove("open");

//       item.addEventListener("click", () => {
//         const isOpen = subList.classList.contains("open");

//         menuItems.forEach((menuItem) => {
//           const otherSubList = menuItem.querySelector(".sub-list");
//           if (otherSubList) {
//             otherSubList.classList.remove("open");
//           }
//         });

//         if (!isOpen) {
//           subList.classList.add("open");
//         }
//       });
//     }
//   });
// });

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
