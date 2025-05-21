// Select the header, menu icon, and navbar elements from the DOM
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Add a shadow to the header when the page is scrolled
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Toggle menu icon and navbar visibility when menu icon is clicked
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Remove menu icon toggle and navbar active state when scrolling
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Initialize Swiper for the home section with navigation and pagination
var swiperHome = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Initialize Swiper for the coming soon section with autoplay and responsive breakpoints
var swiperComingSoon = new Swiper(".coming-container", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: true,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
