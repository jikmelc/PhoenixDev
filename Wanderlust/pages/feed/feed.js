
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

const searchMessage = () => {
    const val = buscarmensaje.value.toLocaleLowerCase();
    message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
    
    })
}

messageShearch.addEventListener('keyup', searchMessage);