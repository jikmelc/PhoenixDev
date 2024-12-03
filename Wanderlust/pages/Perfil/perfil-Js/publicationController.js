//---------------------------------------------AnadirCard
 class PublicationController
{   

    constructor(currentId = 0)
    {
        this.Publicaciones = [];             
        this.currentId = currentId;
    }

//--------------Funcion para anadir publicaciones


    addPublicacionResena() 
    {
        const contenido = document.getElementById('newItemText').value;
        const imagen = document.getElementById('newItemImagesUrl').files[0];
        const privacidad = document.getElementById('privacy').value;
        const tipo = document.getElementById('post-type').value;
        const titulo=document.getElementById('newItemTitle').value;
        const lugar=document.getElementById('newItemPlace').value;
        
        
        if (imagen) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const newItemImageUrl = event.target.result; 
            const publicacion = {
                id: this.currentId++,
                contenido: contenido,
                imagen: [newItemImageUrl],
                privacidad: privacidad,
                tipo:tipo,
                titulo:titulo,
                lugar:lugar
              };
              this.Publicaciones.push(publicacion);  
              const publicacionesJSON = JSON.stringify(this.Publicaciones);
            localStorage.setItem('publicaciones', publicacionesJSON);
            
          };
          reader.readAsDataURL(imagen); // Cambiado newItemImageFile a imagen
        } else {
          alert("No se ha seleccionado ninguna imagen.");
        }
    }

    getLastPublicacion() 
    {
        return this.Publicaciones.at(-1);
    }

    deletePublicacion(index) 
    {   
      //Comprueba index en rango  
      if (index >= 0 && index < this.Publicaciones.length) {
        this.Publicaciones.splice(index, 1);
      } else {
        // Muestra un mensaje de error en consola si el índice es inválido
        alert("No existe la publicacion!");
      }
    }

    updatePublicacion(id, newData) 
    {
      const index = this.Publicaciones.findIndex(item => item.id === id);
      if (index !== -1) {
          this.Publicaciones[index] = {
              ...this.Publicaciones[index],
              ...newData,
              id: this.Publicaciones[index].id // Mantener el ID original
          };
          return true;
      }
      return false;
    }  
       
      addPublicationSencilla() 
      {
        const contenido = document.getElementById('newItemText').value;
        const imagen = document.getElementById('newItemImagesUrl').files[0];
        const privacidad = document.getElementById('privacy').value;
        const tipo = document.getElementById('post-type').value;
        

        if (imagen) {
          
          const reader = new FileReader();
          reader.onload = (event) => {
            const newItemImageUrl = event.target.result; 
            const publicacion = {
                id: this.currentId++,
                contenido: contenido,
                imagen: [newItemImageUrl],
                privacidad: privacidad,
                tipo:tipo
              };
              this.Publicaciones.push(publicacion);  
              const publicacionesJSON = JSON.stringify(this.Publicaciones);
            localStorage.setItem('publicaciones', publicacionesJSON);      
            
                  
          };
         reader.readAsDataURL(imagen); 
        } else {
          alert("No se ha seleccionado ninguna imagen.");
        }
      }     
}
    

