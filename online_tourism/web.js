
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


//close all on scroll
// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
//     searchBtn.classList.remove('fa-times');
//     searchBar.classList.remove('active');
//     loginForm.classList.remove('active');
// }

//toggle navbar  menu
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    //close search bar when menu opens
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

});

let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        searchBtn.classList.remove('fa-times');
        searchBar.classList.remove('active');
    });
});

//toggle search bar
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

var revieSwiper = new Swiper(".review-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {

        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


