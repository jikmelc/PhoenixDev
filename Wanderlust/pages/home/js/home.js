
const imagenesFondo = [
"../../pages/home/assets/fondo1.jpg",
"../../pages/home/assets/fondo2.jpg",
"../../pages/home/assets/fondo3.jpg",
];
let indiceImagen = 0;

function cambiarFondo() {
  const miDiv = document.getElementById("wallpaper-container"); 
  miDiv.style.backgroundImage = `url(${imagenesFondo[indiceImagen]})`;
  
  indiceImagen = (indiceImagen + 1) % imagenesFondo.length;
}

document.addEventListener('DOMContentLoaded', function() {
  cambiarFondo();
  setInterval(cambiarFondo, 6000); 
});
