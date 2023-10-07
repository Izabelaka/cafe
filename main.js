console.log("halooooooo");

const burgerBtn = document.getElementById("burger-btn");
const nav = document.getElementById("nav");
const allNavItems = document.querySelectorAll(".nav__item");

const navClassActive = () => {
  nav.classList.toggle("nav--active");

  allNavItems.forEach(item => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
    });
  });
  navItemsAnimation();
};
const navItemsAnimation = () => {
  let delayTime = 0;

  allNavItems.forEach(item => {
    item.classList.toggle("nav-items-animation");
    item.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};

burgerBtn.addEventListener("click", navClassActive);
/// footer
const footerYear = document.querySelector(".footer__year");

const handleFooterYear = () => {
  let dateYear = new Date().getFullYear();
  footerYear.innerHTML = dateYear;
};
handleFooterYear();

/////// bars
// const sections = document.querySelectorAll(".section");
// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     const sectionBottom = sectionTop + section.offsetHeight;

//     if (
//       section.classList.contains("white-bars") &&
//       scrollPosition >= sectionTop &&
//       scrollPosition <= sectionBottom
//     ) {
//       section.classList.add("white-bars-color");
//     } else if (!section.classList.contains("white-bars")) {
//       section.classList.remove("white-bars-color");
//     }
//   });
// });
// -----------------------------------------
// const sections = document.querySelectorAll(".section");
// const btnBars = document.querySelector(".burger-btn__bars");

// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     // const sectionBottom = sectionTop + section.offsetHeight;

//     if (
//       section.classList.contains("white-bars") &&
//       scrollPosition >= sectionTop
//     ) {
//       btnBars.classList.add("white-bars-color");
//     } else {
//       btnBars.classList.remove("white-bars-color");
//     }
//   });
// });

// Gallery
const thumbnails = document.querySelectorAll(".gallery__thumbnail img");
const popup = document.querySelector(".gallery__popup");
const popupClose = document.querySelector(".gallery__popup__close");
const popupImg = document.querySelector(".gallery__popup__img");
const popupArrowLeft = document.querySelector(".gallery__popup__arrow--left");
const popupArrowRight = document.querySelector(".gallery__popup__arrow--right");

let currentImgIndex;

const showNextImg = () => {
  if (currentImgIndex === thumbnails.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  popupImg.src = thumbnails[currentImgIndex].src;
};

const showPreviousImg = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = thumbnails.length - 1;
  } else {
    currentImgIndex--;
  }
  popupImg.src = thumbnails[currentImgIndex].src;
};
const closePopup = () => {
  popup.classList.add("fade-out");
  setTimeout(() => {
    popup.classList.add("hidden");
    popup.classList.remove("fade-out");
    thumbnails.forEach(element => {
      element.setAttribute("tabindex", 1);
    });
  }, 600);
};

thumbnails.forEach((thumbnail, index) => {
  const showPopup = e => {
    popup.classList.remove("hidden");
    popupImg.src = e.target.src;
    currentImgIndex = index;
    thumbnails.forEach(element => {
      element.setAttribute("tabindex", -1);
    });
  };

  thumbnail.addEventListener("click", showPopup);
  thumbnail.addEventListener("keydown", e => {
    if (e.code === "Enter" || e.keyCode === 13) {
      showPopup(e);
    }
  });
});
popupClose.addEventListener("click", closePopup);

popupArrowRight.addEventListener("click", showNextImg);

popupArrowLeft.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", e => {
  if (!popup.classList.contains("hidden")) {
    if (e.key === "ArrowRight" || e.keyCode === 39) {
      showNextImg();
    }
    if (e.key === "ArrowLeft" || e.keyCode === 37) {
      showPreviousImg();
    }

    if (e.key === "Escape" || e.keyCode === 27) {
      closePopup();
    }

    console.log(e);
  }
});

popup.addEventListener("click", e => {
  if (e.target === popup) {
    closePopup();
  }
});
