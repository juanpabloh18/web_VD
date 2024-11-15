function App() {}

window.onload = function(event) {
    var app = new App();
    window.app = app;
}
// Mostrar el botón de regreso al inicio cuando el usuario hace scroll
window.onscroll = function() {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
};

// Animación suave para el botón de "back to top" al hacer clic
document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
});




// Cambiar el estado activo en el menú al hacer clic
const menuLinks = document.querySelectorAll('.navigation a');

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');

    const carruselWidth = carrusel[0].offsetWidth;
    const listWidth = carruselList.offsetWidth;
    const trackWidth = track.offsetWidth;

    let leftPosition = track.style.left === "" ? 0 : parseFloat(track.style.left) * -1;

    if (btn.dataset.button === "button-prev") {
        prevAction(leftPosition, carruselWidth, track);
    } else {
        nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }
}

function prevAction(leftPosition, carruselWidth, track) {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
}

function nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
}

const menuToggle = document.getElementById('mobile-menu');
const mobileNavigation = document.getElementById('mobile-navigation');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNavigation.classList.toggle('show');
});
