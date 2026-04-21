const menuBtn = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const nav = document.querySelector("nav");

function closeMenu() {
  navMenu.classList.remove("active");
  menuBtn.classList.remove("active");
  overlay.classList.remove("active");
}

navLinks.forEach(link => {
  link.addEventListener("click", function () {

    navLinks.forEach(l => l.classList.remove("nav-active"));
    this.classList.add("nav-active");

    closeMenu();
  });
});

document.addEventListener("click", (e) => {
  if (
    !navMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    closeMenu();
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


const overlay = document.querySelector(".nav-overlay");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  overlay.classList.toggle("active");
});


overlay.addEventListener("click",closeMenu);
