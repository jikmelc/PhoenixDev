const campoContraseña = document.getElementById("contraseña");
const campoCorreo = document.getElementById("correoElectronico");

export async function iniciarSesion(email, password) {

    const url = `http://localhost:8080/api/v1/users/email/${email}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.contraseña == password) {
                window.location.href = '/pages/feed/feed.html';
            } else {
                limpiarAlertasExistentes();
                mostrarAlertaDeError(campoContraseña,"Contraseña errónea.")
            }
        })
        .catch(error => {
            limpiarAlertasExistentes();
            mostrarAlertaDeError(campoCorreo, "El correo electrónico ingresado no tiene una cuenta asociada.")
            console.error(error)
        })
}

function mostrarAlertaDeError(campo, mensaje){
    const alert = `
    <div class="alert alert-danger mt-2" role="alert">
        <p>${mensaje}</p>
    </div>
    `
    campo.insertAdjacentHTML('beforeend', alert);
}

function limpiarAlertasExistentes(){
    // Selecciona la alerta existente, si la hay
    const existingDangerAlert = document.querySelector('.alert-danger'); 
 
    // Si existe una alerta, elimínala
    if (existingDangerAlert) {
        existingDangerAlert.remove();
     }
 }