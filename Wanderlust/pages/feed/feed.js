
// cambiar la imagen cada 2 segundos

const autoImages = ["", "", ""];
        let autoIndex = 0;

        const autoDynamicImage = document.getElementById('perfil1');

        // Cambiar imagen automáticamente cada 2 segundos
        setInterval(() => {
            autoIndex = (autoIndex + 1) % autoImages.length;
            autoDynamicImage.src = autoImages[autoIndex];
        }, 2000);


//Mensajes Busacador
const messages = document.querySelector('.mensajes')
 const message = messages.querySelectorAll('.mensaje');
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

document.addEventListener('DOMContentLoaded', () => {
    // Tu código aquí
  showPublicaciones(); 
  });
  
  function showPublicaciones() {
    const Publicaciones = localStorage.getItem('publicaciones');
    const nombreUsuario = localStorage.getItem('nombreUsuario')
    let publicacionesArray = [];
  
    if (Publicaciones) {
      publicacionesArray = JSON.parse(Publicaciones);
    }
  
    const contenedorPublicaciones = document.getElementById('publicaciones');
    let publicacionesHTML = '';
  
    // Itera sobre las publicaciones en orden inverso
    for (let i = publicacionesArray.length - 1; i >= 0; i--) {
      const publicacion = publicacionesArray[i];
      let itemHTML = '';
      
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
      } else if (publicacion.tipo === 'review') {
        // ... (construye el HTML para la publicación tipo review) ...
        itemHTML = `
          <div class="publicacion">
            <div class="head">
              <div class="user">
                <div class="perfil">
                  <img src="../../assets/images/feed/foto_perfil2.jpg" alt="" id="perfil1">
                </div>
                <div class="info">
                  <h3>${nombreUsuario}</h3>
                  <small>Publicado hace 20 minutos</small>
                </div>
              </div>
              <div>
                <span class="edit"><i class="bi bi-three-dots"></i></span>
              </div>
            </div>
            <div class="foto">
              <img src=${publicacion.imagen[0]} alt="" id="foto_viaje" class="w-100">
            </div>
            <div class="botones-accion">
              <div class="interaccion-botones">
                <span><i class="bi bi-heart"></i></span>
                <span><i class="bi bi-chat-dots"></i></span>
                <span><i class="bi bi-share"></i></span>
              </div>
              <div class="bookmark">
                <span><i class="bi bi-bookmark"></i></span>
              </div>
            </div>
            <div class="likes">
  
              <span><img src="../../assets/images/feed/foto_perfil2.jpg" alt=""></span>
              <span><img src="../../assets/images/feed/foto_perfil3.jpg" alt=""></span>
              <p>Liked by <b>Axel Ortiz</b> and <b>2,345 others</b></p>
            </div>
            <div class="caption">
              <p><b>${nombreUsuario}</b> ${publicacion.contenido}</p>
            </div>
            <div class="comment text-muted">
              View all 323 comments
            </div>
          </div>
        `;
        publicacionesHTML += itemHTML;
      }
      // Agrega la publicación al contenedor usando insertAdjacentHTML
      //contenedorPublicaciones.insertAdjacentHTML('afterbegin', itemHTML);
      
    }
    contenedorPublicaciones.innerHTML += publicacionesHTML;
  }

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
messageShearch.addEventListener('keyup', searchMessage);


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
});

//Likes de publicaciones
const btnLike = document.querySelector('.like_icon');
const likeActive = document.querySelector('.active_like');
const animationHeart = document.querySelector('.heart_icon');

const imgPost = document.querySelector('.img_post');

const likes = document.querySelector('.likes .number');

const btnSave = document.querySelector('.save_icon');
const saveActive = document.querySelector('.active_save');

btnLike.addEventListener('click', () => {
    likeActive.classList.add('active');
    btnLike.setAttribute('style', 'display:none');
    animationHeart.setAttribute('style', 'display:block');
    let currentText = likes.innerText;

    let number = parseFloat(currentText);
    number += 1;

    likes.innerText = number;
});

likeActive.addEventListener('click', () => {
    likeActive.classList.remove('active');
    btnLike.setAttribute('style', 'display:inline-block');
});

imgPost.addEventListener('dblclick', () => {
    likeActive.classList.add('active');
    btnLike.setAttribute('style', 'display:none');
    animationHeart.setAttribute('style', 'display:block');
    let currentText = likes.innerText;

    let number = parseFloat(currentText);
    number += 1;

    likes.innerText = number;
});

btnSave.addEventListener('click', () => {
    saveActive.classList.add('active');
    btnSave.setAttribute('style', 'display:none');
});

saveActive.addEventListener('click', () => {
    saveActive.classList.remove('active');
    btnSave.setAttribute('style', 'display:inline-block');
});