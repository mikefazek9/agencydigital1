const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-items");

hamburger.addEventListener('click', mobileMenu);

function mobileMenu(){
    navMenu.classList.toggle("active");
}