
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

messageSearch.addEventListener('keyup', searchMessage);