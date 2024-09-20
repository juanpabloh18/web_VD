// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle with animation
const navToggle = document.createElement('button');
navToggle.innerHTML = '☰';
navToggle.classList.add('nav-toggle');
document.querySelector('header').appendChild(navToggle);

const nav = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    // Toggle smooth animation for the menu
    if (nav.classList.contains('nav-open')) {
        nav.style.maxHeight = nav.scrollHeight + "px"; // expand menu height dynamically
    } else {
        nav.style.maxHeight = null; // collapse menu
    }
});

// Auto image carousel for gallery with fade animation
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? 1 : 0; // Use opacity for fade-in/fade-out effect
        slide.style.transition = 'opacity 1s'; // 1 second fade animation
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change image every 3 seconds
showSlide(currentSlide);

// Hide mobile menu when clicking outside with smooth closing
document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
        nav.classList.remove('nav-open');
        nav.style.maxHeight = null; // collapse menu when clicking outside
    }
});
