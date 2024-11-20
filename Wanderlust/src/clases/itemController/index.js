//Instancia de itemController
const itemsController = new ItemsController(0);

//Anade objeto a itemController, la info que sera la publicacion
newItemForm.addEventListener('submit', (event) => 
    {
    event.preventDefault();
    addDataCard();
});
//Espera el click en boton mostrar elementos 
const showButton = document.getElementById('show');
showButton.addEventListener('click', mostrarElementos, { once: false }); 

//Evento que espera click en el boton de eliminar
const deleteButton = document.getElementById('deleteElementButton'); 
deleteButton.addEventListener('click', function() 
{
    //Seleciona el input donde ingreso un numero el usuario, convierte a int y resta uno por index inicia en 0
    const index = parseInt(document.getElementById("deleteElementInput").value - 1);
    //Limpia input de delete
    document.getElementById("deleteElementInput").value = ""; 
    //Llamada a metodo deleteItem en itemController.js
    itemsController.deleteItem(index);
    // Después de eliminar el elemento, mostrar los elementos actualizados
    mostrarElementos(); 
});

//Captura el evento de modificar al hacer click en el boton "modificar"
    document.addEventListener('click', function(event) 
    {
        if (event.target && event.target.classList.contains('modify-btn')) 
        {
            const itemId = parseInt(event.target.getAttribute('data-id'));
            modifyDataCard(itemId);
        }
    });

//Funcion que permite modificr la card al capturar el evento
 function modifyDataCard(itemId) {
    const item = itemsController.items.find(i => i.id === itemId);

    if (item) {
        // Llenar el formulario con los datos actuales
        document.querySelector('#newItemTitle').value = item.title;
        document.querySelector('#newItemPlace').value = item.place;
        document.querySelector('#newItemText').value = item.text;
        document.querySelector('#newItemImagesUrl').value = item.imagesUrl[0];

        // Mostrar botón de actualización
        const updateButton = document.getElementById('updateButton');
        updateButton.style.display = 'block';

        // Manejar la actualización
        updateButton.onclick = () => {
            const updatedData = {
                title: document.querySelector('#newItemTitle').value,
                place: document.querySelector('#newItemPlace').value,
                text: document.querySelector('#newItemText').value,
                imagesUrl: [document.querySelector('#newItemImagesUrl').value]
            };

            // Usar el nuevo método updateItem
            if (itemsController.updateItem(itemId, updatedData)) {
                // Actualizar la vista
                const itemsContainer = document.getElementById("list-items");
                itemsContainer.innerHTML = '';
                itemsController.items.forEach(addItemImageCard);

                // Limpiar el formulario y ocultar botón de actualización
                updateButton.style.display = 'none';
                cleanForm();
            } 
            else 
            {
                alert('No se pudo actualizar el item');
            }
        };
    }
}

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
    cleanForm();
} 
//Funcion Limpiar Campos
function cleanForm()
{
    document.querySelector('#newItemTitle').value = '';
    document.querySelector('#newItemPlace').value = '';
    document.querySelector('#newItemText').value = '';
    document.querySelector('#newItemImagesUrl').value = '';
}
 
//Funcion para insertar la card en la pagina
function addItemImageCard(item) 
{
    const itemHTML = `<div class="card" style="width: 18rem;">
        <img src="${item.imagesUrl[0]}" class="card-img-top" alt="image">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.text}</p>
            
            <a href="#" class="btn btn-primary modify-btn" data-id="${item.id}">Modify</a>
        </div>
    </div>
    <br/>`;
    const itemsContainer = document.getElementById("list-items");

    itemsContainer.innerHTML += itemHTML;
}
//Muestra los elementos actuales cotenidos en itemController

function mostrarElementos() {
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML = '';
  // Iterar sobre el array items para imprimir todos los elementos de itemsController
  itemsController.items.forEach(item => {
    addItemImageCard(item); // Mostrar la card del item
  });
}