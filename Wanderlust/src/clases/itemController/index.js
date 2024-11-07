const itemsController = new ItemsController(0);

newItemForm.addEventListener('submit', (event) => {
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

    itemsController.addItem(newItemTitle, newItemPlace, newItemText, imagesUrlArray);

    // Limpiar los campos del formulario
    document.querySelector('#newItemTitle').value = '';
    document.querySelector('#newItemPlace').value = '';
    document.querySelector('#newItemText').value = '';
    document.querySelector('#newItemImagesUrl').value = '';

    // Mostrar la nueva card
   // const newItem = itemsController.getLastItem(); // Obtener el último item agregado
    //addItemImageCard(newItem);
} 


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

 
//  addItemImageCard({
//      'title': 'juice',
//      'place': 'toluca',
//     'text': 'Orange and Apple juice fresh and delicious',
//      'imagesUrl': ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3t_bS8mNcYHIna9HbERQSOujwQ7i8jQXcQ&s']
// });


const miBoton = document.getElementById('show');

miBoton.addEventListener('click', function() {
    // Iterar sobre el array items
    itemsController.items.forEach(item => {
     
      addItemImageCard(item); // Mostrar la card del item
    });
  }, { once: true });