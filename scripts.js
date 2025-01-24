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

const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach((miniatura) => {
  miniatura.addEventListener("click", (e) => {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
    captionText.textContent = e.target.alt;
  });
});

cerrarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});