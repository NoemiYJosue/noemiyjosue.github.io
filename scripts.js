const frases = [
    "Eres mi sol en días nublados.",
    "Contigo, todo es mejor.",
    "No necesito nada más, solo a ti.",
    "Eres mi persona favorita.",
    "Te amo más cada día."
  ];
  
  const fraseContainer = document.getElementById("frase-container");
  const fraseTexto = document.getElementById("frase");
  
  fraseContainer.addEventListener("click", () => {
    const nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
    fraseTexto.textContent = nuevaFrase;
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