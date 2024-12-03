document.addEventListener("DOMContentLoaded", () => {
    // Obtener elementos
    const openFormBtn = document.getElementById("open-form-btn");
    const closeFormBtn = document.getElementById("close-form-btn");
    const modal = document.getElementById("post-modal");
    const postTypeSelect = document.getElementById("post-type");
    const reviewFields = document.getElementById("review-fields");
    const modalContent = modal.querySelector('.modal-content');

    // Función para mostrar el modal
    const showModal = () => {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        updateFields(); // Actualizar campos según el tipo de publicación
    };

    // Función para ocultar el modal
    const hideModal = () => {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    };

    // Función para actualizar los campos según el tipo de publicación
    const updateFields = () => {
        if (postTypeSelect.value === "review") {
            reviewFields.classList.remove("hidden");
        } else {
            reviewFields.classList.add("hidden");
        }
    };

    // Evento para abrir el modal
    openFormBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();
    });

    // Evento para cerrar el modal
    closeFormBtn.addEventListener("click", (e) => {
        e.preventDefault();
        hideModal();
    });

    // Cerrar al hacer clic fuera del modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Prevenir que los clics dentro del modal-content se propaguen al modal
    if (modalContent) {
        modalContent.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }

    // Evento para actualizar los campos cuando cambia el tipo de publicación
    if (postTypeSelect) {
        postTypeSelect.addEventListener("change", updateFields);
    }

    // Inicializar el estado de los campos al cargar la página
    updateFields();


//-----------------------------------Conexion con HTML y publicationController


   
    const publicationController= new PublicationController(0);
   

//Espera el submit para disparar la siguiente accion
publicacion.addEventListener('submit',(event)=>{
    
    event.preventDefault();
    const privacidad= document.getElementById('post-type').value;
    if(privacidad=='simple')
    {
        publicationController.addPublicationSencilla();
        limpiarFormulario();
        hideModal();
        
        

    }
    else
    {
        publicationController.addPublicacionResena();
        limpiarFormulario()
        hideModal();
    }
});
function limpiarFormulario() {
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemImagesUrl').value = '';
    
   
    document.getElementById('newItemTitle').value = '';
    document.getElementById('newItemPlace').value = '';
  }});