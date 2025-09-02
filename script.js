const burger = document.querySelector(".header__burger-menu");
const headerMenu = document.querySelector(".header__nav");
const burgerClose = document.querySelector(".burger-close");

burger.addEventListener("click", () => {
  headerMenu.classList.add("header__active");
});

burgerClose.addEventListener("click", () => {
  headerMenu.classList.remove("header__active");
});
