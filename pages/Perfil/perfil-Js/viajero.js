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