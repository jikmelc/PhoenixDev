// import { itemsController,addDataCard,addItemImageCard,showButton, deleteButton, modifyDataCard } from '../../../src/clases/itemController/index.js';

function mostrarFormulario() {
    const formulario = document.getElementById('miFormulario');
    if (formulario.style.display === 'none' || formulario.style.display === '') {
        formulario.style.display = 'block'; // Muestra el formulario
    } else {
        formulario.style.display = 'none'; // Oculta el formulario si ya está visible
    }
}