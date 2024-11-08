const itemsController = new ItemsController(0);

newItemForm.addEventListener('submit', (event) => 
    {
    event.preventDefault();
    addDataCard();
});

function addDataCard()
{
    const newItemTitle = document.querySelector('#newItemTitle').value;
    const newItemPlace = document.querySelector('#newItemPlace').value;
    const newItemText = document.querySelector('#newItemText').value;
    const newItemImagesUrl = document.querySelector('#newItemImagesUrl').value;

    // Crear un array con la URL de la imagen
    const imagesUrlArray = [newItemImagesUrl]; 

    //Pasa datos a metodo addItem en itemController.js
    itemsController.addItem(newItemTitle, newItemPlace, newItemText, imagesUrlArray);

    // Limpiar los campos del formulario
    document.querySelector('#newItemTitle').value = '';
    document.querySelector('#newItemPlace').value = '';
    document.querySelector('#newItemText').value = '';
    document.querySelector('#newItemImagesUrl').value = '';

} 

//Funcion para insertar la card en la pagina
function addItemImageCard(item) {
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="' + item.imagesUrl[0] + '" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.title + '</h5>\n' +
        '        <p class="card-text">' + item.text + '</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
//  Datos de prueba para agregar card pero no usa el itemControler 
//  addItemImageCard({
//      'title': 'juice',
//      'place': 'toluca',
//     'text': 'Orange and Apple juice fresh and delicious',
//      'imagesUrl': ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3t_bS8mNcYHIna9HbERQSOujwQ7i8jQXcQ&s']
// });


//Evento que espera click en el boton "show items" en index.html
const showButton = document.getElementById('show');
showButton.addEventListener('click', function() {
    // Iterar sobre el array items para imprimir todos los elementos de itemsController
    itemsController.items.forEach(item => 
    {
      addItemImageCard(item); // Mostrar la card del item
    });
  }, { once: true });//Para que no se cicle creo

//Evento que espera click en el boton de eliminar
const deleteButton = document.getElementById('deleteElementButton'); //
deleteButton.addEventListener('click', function() 
{
    //Seleciona el input donde ingreso un numero el usuario, convierte a int y resta uno por index inicia en 0
    const index = parseInt(document.getElementById("deleteElementInput").value-1 );
    //Limpia input de delete
    document.getElementById("deleteElementInput").value=""; 
    //Llamada a metodo deleteItem en itemController.js
    itemsController.deleteItem(index)

});

 