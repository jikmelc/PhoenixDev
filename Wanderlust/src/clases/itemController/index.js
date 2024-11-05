const ItemsController= new ItemsController(0);

newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
const newItemTitle=document.querySelector('#newItemTitle');
const newItemPlace="Toluca"; //document.querySelector('#newItemPlace');
const newItemText=document.querySelector('#newItemText');
const newItemImagesUrl=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3t_bS8mNcYHIna9HbERQSOujwQ7i8jQXcQ&s"];//document.querySelector('#newItemImagesUrl');
const createdAt = new Date();

itemsController.addItem(newItemTitle,newItemPlace,newItemText,newItemImagesUrl,createdAt);
newItemNameInput.value = '';
newItemDescription.value = '';





function addItemImageCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.newItemImagesUrl +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.newItemTitle+'</h5>\n' +
        '        <p class="card-text">'+item.newItemText+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItemImageCard({'title':'juice',
    'place':'toluca',
    'text':'Orange and Apple juice fresh and delicious',
    'imagesUrl':['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3t_bS8mNcYHIna9HbERQSOujwQ7i8jQXcQ&s']  
    });
});