class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(title,place,text,imagesUrl=[]) 
    {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            title: title,
            place: place,
            text: text,
           // author:author,
            imagesUrl:imagesUrl
        };

        // Push the item to the items property
        this.items.push(item);
    }
}