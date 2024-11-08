class ItemsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    addItem(title, place, text, imagesUrl = []) {
        const item = {
            id: this.currentId++,
            title: title,
            place: place,
            text: text,
            imagesUrl: imagesUrl // Asignar el array de URLs
        };

        this.items.push(item);
    }
    
    // Método para obtener el último item agregado
    getLastItem() {
        return this.items[this.items.length - 1];
    }

    //Metodo que borra elemento por index
    deleteItem(index) 
    {   
      //Comprueba index en rango  
      if (index >= 0 && index < this.items.length) {
        this.items.splice(index, 1);
      } else {
        // Muestra un mensaje de error en consola si el índice es inválido
        console.error("Índice inválido");
      }
    }
}