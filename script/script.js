(function () {
  const menuBtn = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeBtn = document.querySelector(".mobile-nav .close-btn");

  function openMenu() {
    menuBtn.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    mobileNav.classList.add("open");
    mobileNav.setAttribute("aria-hidden", "false");
    // trap focus optionally could be added
  }

  function closeMenu() {
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
  }

  menuBtn &&
    menuBtn.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      if (expanded) closeMenu();
      else openMenu();
    });

  closeBtn && closeBtn.addEventListener("click", closeMenu);

  // close on escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // close when clicking a link inside the mobile nav
  mobileNav &&
    mobileNav.addEventListener("click", function (e) {
      if (e.target.matches("a")) closeMenu();
    });
})();

const slides = document.getElementById("slides");
const images = document.querySelectorAll(".slides img");
const prevbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");
const slider = document.getElementById("container");

let index = 0;
let slideinterval;

function showslide(i) {
  if (i < 0) {
    index = images.length - 1;
  } else if (i >= images.length) {
    index = 0;
  } else {
    index = i;
  }

  slides.style.transform = `translateX(${- index * 600}px)`
console.log(i,index);
}

function autoslide() {
  slideinterval = setInterval(()=>{
    showslide(index + 1);
  }, 2000)
}

nextbtn.addEventListener("click", () => {
  showslide(index + 1)
  restautoslide();
});

prevbtn.addEventListener("click", () => {
  showslide(index - 1)
  restautoslide();
});

function restautoslide() {
  clearInterval(slideinterval);
  autoslide();
}

function stop() {
  clearInterval(slideinterval);
}

slider.addEventListener("mouseenter", stop);
slider.addEventListener("mouseleave", autoslide);

showslide(index);
autoslide();
