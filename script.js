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