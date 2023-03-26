const textos = document.querySelectorAll("p");

textos.forEach((texto) => {
  const palabras = texto.textContent.split(" ");
  texto.innerHTML = "";

  palabras.forEach((palabra) => {
    const span = document.createElement("span");
    span.textContent = `${palabra} `;
    texto.appendChild(span);

    span.addEventListener("mouseover", () => {
      span.style.color = "#01fe87";
    });

    span.addEventListener("mouseout", () => {
      span.style.color = "white";
    });
  });
});


const menuBtn = document.querySelector('.hamburguer');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.classList.toggle('show');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});
