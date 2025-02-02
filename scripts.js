const mensajes = [
    "Eres mi sol en días nublados.",
    "Contigo, todo es mejor.",
    "No necesito nada más, solo a ti.",
    "Eres mi persona favorita.",
    "Te amo más cada día.",
    'Eres la razón por la que sonrío cada día. 💖',
    'Te amo más de lo que las palabras pueden expresar. 🌹',
    'Eres mi lugar favorito en el mundo. 🏡',
    'Gracias por llenar mi vida de felicidad. 🌟',
    'No hay nada más hermoso que tu sonrisa. 😊',
    'Eres el mejor regalo que la vida me ha dado. 🎁',
    'No importa dónde esté, siempre mi corazón estará contigo. 💖',
    'Eres mi primer pensamiento al despertar y el último antes de dormir. 🌙',
    'Contigo, cada día es una nueva aventura llena de felicidad. 🌟',
    'Eres la persona que llena mi vida de magia y alegría. ✨',
    'Si pudiera darte algo, te daría el poder de verte a ti misma como yo te veo. 💕',
    'No necesito un paraíso, porque mi paraíso eres tú. 🌴',
    'Gracias por ser mi compañera de vida y lo mejor que tengo. 🙏',
    'Tu sonrisa es mi luz en los días más oscuros. 🌞',
    'A tu lado, cada momento se convierte en un recuerdo inolvidable. 🥰',
    'Solo quiero recordarte lo increíble y especial que eres para mí. 🌹',
    'Gracias por ser mi inspiración diaria. 🌼',
    'Cada detalle tuyo me recuerda lo afortunado que soy de tenerte. 🎁',
    'Gracias por hacerme la persona más feliz del mundo. 🌎',
    'Eres mi razón para seguir adelante, incluso en los días difíciles. 💪',
    'Hoy es un buen día para decirte lo especial que eres para mí. 🥰',
    'No importa cuánto pase el tiempo, siempre serás mi elección. ⏳',

  ];
  
 
  const mensajeSecreto = document.getElementById("mensajeSecreto");

  mensajeSecreto.addEventListener("click", () => {
    mensajeSecreto.classList.add("revelado");
  
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mensajes.length);
      mensajeSecreto.textContent = mensajes[randomIndex];
      mensajeSecreto.classList.remove("revelado");
    }, 300); // Cambia después de medio segundo
  });


// Galería de imágenes
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagen-modal");
const captionText = document.getElementById("caption");
const cerrarBtn = document.getElementById("cerrar");
const anteriorBtn = document.getElementById("anterior");
const siguienteBtn = document.getElementById("siguiente");
const miniaturas = document.querySelectorAll(".miniatura");

let currentIndex = 0;

// Abrir modal
miniaturas.forEach((miniatura, index) => {
  miniatura.addEventListener("click", (e) => {
    currentIndex = index;
    abrirImagen(e.target.src, e.target.alt);
  });
});

function abrirImagen(src, alt) {
  modal.style.display = "flex";
  modalImg.src = src;
  captionText.textContent = alt;
}

// Cerrar modal
cerrarBtn.addEventListener("click", () => (modal.style.display = "none"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Navegación entre imágenes
anteriorBtn.addEventListener("click", () => cambiarImagen(-1));
siguienteBtn.addEventListener("click", () => cambiarImagen(1));

function cambiarImagen(direccion) {
  currentIndex = (currentIndex + direccion + miniaturas.length) % miniaturas.length;
  const nuevaMiniatura = miniaturas[currentIndex];
  abrirImagen(nuevaMiniatura.src, nuevaMiniatura.alt);
}

// Galería de videos
const modalVideo = document.getElementById("modal-video");
const modalVideoContent = document.getElementById("video-modal");
const cerrarVideoBtn = document.getElementById("cerrar-video");
const miniaturasVideo = document.querySelectorAll(".miniatura-video");

// Abrir modal de video
miniaturasVideo.forEach((video) => {
  video.addEventListener("click", (e) => {
    modalVideo.style.display = "flex";
    modalVideoContent.src = e.target.src;
    modalVideoContent.play();
  });
});

// Cerrar modal de video
cerrarVideoBtn.addEventListener("click", () => cerrarModalVideo());
modalVideo.addEventListener("click", (e) => {
  if (e.target === modalVideo) cerrarModalVideo();
});

function cerrarModalVideo() {
  modalVideo.style.display = "none";
  modalVideoContent.pause();
  modalVideoContent.src = "";
}

// Obtener los elementos
const botonesNavegacion = document.querySelectorAll(".btn-navegacion");
const secciones = document.querySelectorAll(".pagina");

// Mostrar la primera sección por defecto
document.getElementById("seccion1").classList.add("activa");

// Añadir evento de clic a cada botón
botonesNavegacion.forEach((boton) => {
  boton.addEventListener("click", () => {
    const seccionId = boton.dataset.seccion;

    // Ocultar todas las secciones
    secciones.forEach((seccion) => seccion.classList.remove("activa"));

    // Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(seccionId);
    seccionActiva.classList.add("activa");
  });
});



document.getElementById("btn-no").addEventListener("click", function() {
  let btnNo = this;
  let currentSize = parseFloat(window.getComputedStyle(btnNo).fontSize);
  if (currentSize > 5) {
      btnNo.style.fontSize = (currentSize - 2) + "px";
      btnNo.style.padding = (parseFloat(btnNo.style.padding) - 2) + "px";
  } else {
      document.getElementById("imagenes-amor").style.display = "block";
  }
});