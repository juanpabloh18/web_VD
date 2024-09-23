// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Auto image carousel para la galería con efecto de desvanecimiento
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0'; // Cambia la opacidad
        slide.style.transition = 'opacity 1s'; // 1 segundo para el efecto fade
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
showSlide(currentSlide);

// Cerrar el menú hamburguesa cuando se hace clic fuera de él
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show');
    }
});
