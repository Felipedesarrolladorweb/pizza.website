const nav = document.querySelector(".nav-links1");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const button = nav.querySelector(".buttonburger");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((links) => {
  links.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
    button.classList.toggle("toggle");
  });
});
