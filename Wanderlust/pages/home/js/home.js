
const imagenesFondo = [
"../../pages/home/assets/fondo1.jpg",
"../../pages/home/assets/fondo2.jpg",
"../../pages/home/assets/fondo3.jpg",
"../../pages/home/assets/fondo4.jpg"
];
let indiceImagen = 0;

function cambiarFondo() {
  const miDiv = document.getElementById("main-container"); 
  miDiv.style.backgroundImage = `url(${imagenesFondo[indiceImagen]})`;
  indiceImagen = (indiceImagen + 1) % imagenesFondo.length;
}

document.addEventListener('DOMContentLoaded', function() {
  cambiarFondo();
  setInterval(cambiarFondo, 4000); 
});
