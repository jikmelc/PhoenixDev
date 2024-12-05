
// cambiar la imagen cada 2 segundos
const autoImages = ["https://cdn.forbes.com.mx/2020/10/shutterstock_1206167314-res-640x360.jpg"];
        let autoIndex = 0;

        const autoDynamicImage = document.getElementById('perfil1');

        // Cambiar imagen automáticamente cada 2 segundos
        setInterval(() => {
            autoIndex = (autoIndex + 1) % autoImages.length;
            //autoDynamicImage.src = autoImages[autoIndex];
        }, 2000);


//Mensajes Busacador
const messages = document.querySelector('.mensajes')
// const message = messages.querySelectorAll('.mensaje');
const messageSearch = document.querySelector('#buscarmensaje');


//const searchMessage = () => {
//    const val = buscarmensaje.value.toLocaleLowerCase();
//    message.forEach(chat =>{
//        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
//    
//    })
//}
//searchMessage.addEventListener('keyup', searchMessage);

//----------------------------Insertar Publicaciones

  
  function showPublicaciones() {
    const Publicaciones = localStorage.getItem('publicaciones');
    const nombreUsuario = localStorage.getItem('nombreUsuario')
    let publicacionesArray = [];
    
    if (Publicaciones) {
      publicacionesArray = JSON.parse(Publicaciones);
    }
  
    const contenedorPublicaciones = document.getElementById('publicaciones');
    
    let itemHTML=''  ;
    let publicacionesHTML='' ;
    // Itera sobre las publicaciones en orden inverso
    for (let i = publicacionesArray.length - 1; i >= 0; i--) {
      const publicacion = publicacionesArray[i];
      
      
      if (publicacion.tipo === 'simple') {
        // ... (construye el HTML para la publicación simple) ...
        itemHTML = `
          <div class="ticket-card">
            <div id="carouselExampleSlidesOnly" class="carousel slide ticket-image" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src=${publicacion.imagen[0]} class="d-block w-100" alt="Imagen de la publicación"> 
                </div>
              </div>
            </div>
            <div class="ticket-content">
              <p>${publicacion.contenido}</p>
            </div>
          </div>
        `;
        publicacionesHTML += itemHTML;
        
        //contenedorPublicaciones.insertAdjacentHTML('beforeend', itemHTML);
      } else if (publicacion.tipo === 'review') {
        // ... (construye el HTML para la publicación tipo review) ...
        itemHTML = `
        <div class="container container-fluid">
        <div class="top_data">
                <img src="../../assets/perfil/JohannesProf.jpg" alt="" class="profile">
                <div class="userandtime">
                    <p class="profile_name">${publicacion.titulo}</p>
                    <p class="calificacion">${nombreUsuario}</p>
                    <p class="privacidad" >Pública</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
            </div>
          <div class="post_description">
                <p class="description">${publicacion.contenido}</p>
            </div>
            <div class="post">
                <div class="options">
                    <div class="likes">
                        <svg xmlns="http://www.w3.org/2000/svg" class="like_icon" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="active_icon active_like" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
                        </svg>
                        <p class="number">4840</p>
                    </div>
                    <div class="coments">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
                        </svg>
                        <p class="number">307</p>
                    </div>
                    <div class="save">
                        <svg xmlns="http://www.w3.org/2000/svg" class="save_icon" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="active_icon active_save" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z"></path>
                        </svg>
                    </div>
                </div>
                <img src=${publicacion.imagen[0]} alt="" class="img_post">
                <svg xmlns="http://www.w3.org/2000/svg" class="heart_icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
                </svg>
            </div>
          </div>
          </div>
        `;

        publicacionesHTML += itemHTML;
        
      }
      
    }
    contenedorPublicaciones.innerHTML += publicacionesHTML;
    //contenedorPublicaciones.append(publicacionesHTML)
  }
  function limpiarFormulario() {
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemImagesUrl').value = '';
    document.getElementById('newItemTitle').value = '';
    document.getElementById('newItemPlace').value = '';
  }

  //====================================================================================

  

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        }else{
            user.style.display = 'none';
        }
    })
}


//boton publicaciones
//messageSearch.addEventListener('keyup', searchMessage);

const publicationController= new PublicationController(0);
document.addEventListener("DOMContentLoaded", () => {
   
    showPublicaciones()
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


    //=================================================
    
  
  
  publicaciones.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const privacidad= document.getElementById('post-type').value;
    if(privacidad=='simple')
    {
        publicationController.addPublicationSencilla();       
        
    }
    else
    {
        publicationController.addPublicacionResena();
        
    }           
        
        limpiarFormulario()
        hideModal()
        location.reload();
        

});

  //====================================================================================
  //======================================fin publicaciones
    //Likes en publicaciones :3
    const btnLike = document.querySelectorAll('.like_icon');
const likeActive = document.querySelectorAll('.active_like');
const animationHeart = document.querySelectorAll('.heart_icon');
const imgPost = document.querySelectorAll('.img_post');
const likes = document.querySelectorAll('.likes .number');
const btnSave = document.querySelectorAll('.save_icon');
const saveActive = document.querySelectorAll('.active_save');

btnLike.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        likeActive[index].classList.add('active');
        btn.setAttribute('style', 'display:none');
        animationHeart[index].setAttribute('style', 'display:block');
        let currentText = likes[index].innerText;

        let number = parseFloat(currentText);
        number += 1;

        likes[index].innerText = number;
    });
});

likeActive.forEach((like, index) => {
    like.addEventListener('click', () => {
        like.classList.remove('active');
        btnLike[index].setAttribute('style', 'display:inline-block');
    });
});

imgPost.forEach((img, index) => {
    img.addEventListener('dblclick', () => {
        likeActive[index].classList.add('active');
        btnLike[index].setAttribute('style', 'display:none');
        animationHeart[index].setAttribute('style', 'display:block');
        let currentText = likes[index].innerText;

        let number = parseFloat(currentText);
        number += 1;

        likes[index].innerText = number;
    });
});

btnSave.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        saveActive[index].classList.add('active');
        btn.setAttribute('style', 'display:none');
    });
});

saveActive.forEach((save, index) => {
    save.addEventListener('click', () => {
        save.classList.remove('active');
        btnSave[index].setAttribute('style', 'display:inline-block');
    });
});



//============================================================== publicar desde feed
});//FinDOM