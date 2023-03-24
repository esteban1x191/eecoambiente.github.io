const hamburguer = document.querySelector('.hamburguer')

hamburguer.addEventListener('click', function(){
    this.classList.toggle('is-active');
});


const image = document.querySelector('.reveal-image');
const overlay = document.querySelector('.reveal-overlay');
const overlayActiveClass = 'active';
const overlayInactiveColor = '#252839';

overlay.addEventListener('mousemove', function(event) {
  const x = event.offsetX / overlay.offsetWidth * 100;
  const y = event.offsetY / overlay.offsetHeight * 100;
  
  overlay.style.backgroundImage = `radial-gradient(circle closest-side at ${x}% ${y}%, transparent 0%, transparent 70%, ${overlayInactiveColor} 100%)`;
  overlay.classList.add(overlayActiveClass);
});

/* overlay.addEventListener('mouseout', function() {
  overlay.style.backgroundImage = `none`;
  overlay.classList.remove(overlayActiveClass);
});
 */







// Obtenemos el elemento del texto
var texto = document.getElementById("texto");

// Obtenemos el contenido del texto
var contenido = texto.innerHTML;

// Limpiamos el contenido del texto
texto.innerHTML = "";

// Creamos un contador para saber en qué carácter vamos
var contador = 0;

// Creamos una función que irá agregando los caracteres gradualmente
function agregarCaracter() {
    // Agregamos el carácter actual al contenido del texto
    texto.innerHTML += contenido.charAt(contador);
    
    // Aumentamos el contador
    contador++;
    
    // Si llegamos al final del texto, detenemos la función
    if (contador == contenido.length) {
        clearInterval(intervalo);
    }
}

// Creamos un observer para detectar cuando el elemento está en la pantalla
var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        // Si el elemento está en la pantalla, iniciamos la animación
        var intervalo = setInterval(agregarCaracter, 100);
        setTimeout(function() {
            texto.style.backgroundColor = "#1b1f33";
        }, 500);
        texto.style.opacity = 1;
        // Desconectamos el observer después de la primera vez que se activa
        observer.disconnect();
    }
}, { threshold: [0] });

// Conectamos el observer al elemento del texto
observer.observe(texto);










const bg = document.querySelector('.bg');
const image3 = document.querySelector('.image');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const imageOffsetTop = image3.offsetTop;

  if (scrollY >= imageOffsetTop - 500) {
    bg.style.transform = 'translateY(100%)'; /* Desplazamiento del fondo */
    image3.style.opacity = 1; /* Aparición de la imagen */
  } else {
    bg.style.transform = 'translateY(0)';
    image3.style.opacity = 0;
  }
});
