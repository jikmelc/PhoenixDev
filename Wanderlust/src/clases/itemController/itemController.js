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
}