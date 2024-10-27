// Seleccionamos las etiquetas y su contenido
const form = document.querySelector('form');
const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
const phoneField = document.getElementById('phoneField');
const messageField = document.getElementById('messageField');


//

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = [...new FormData(form)];
    const dataObject = Object.fromEntries(data);
    if(!validateUserName(dataObject)){
        cleanExistingAlerts();
        showErrorAlert(nameField, 'El nombre no debe contener números y no puede estar vacío.');
    }else if(!validateUserEmail(dataObject)){
        cleanExistingAlerts();
        showErrorAlert(emailField, 'Ingresa un correo electrónico válido.');
    }else if(!validateUserPhone(dataObject)){
        cleanExistingAlerts();
        showErrorAlert(phoneField, 'Ingresa un número telefónico válido.');
    }else if (!validateUserMessage(dataObject)) {
        cleanExistingAlerts();
        showErrorAlert(messageField, 'Es necesario escribir un mensaje.');
    }else{
        cleanExistingAlerts();
        showSuccesMessage(dataObject)
        return;
    }
});

function showErrorAlert(field, message){
    const alert = `
    <div class="alert alert-danger mt-2" role="alert">
        <p>${message}</p>
    </div>
    `
    field.insertAdjacentHTML('beforeend', alert);
}

function showSuccesMessage(){
    const alert = `
    <div class="alert alert-warning mt-2" role="alert">
        <p> Mensaje enviado con éxito. Serás contactado a la brevedad. <p/>
    </div>
    `
    form.insertAdjacentHTML('beforeend', alert);
}

function cleanExistingAlerts(){
   // Selecciona la alerta existente, si la hay
   const existingDangerAlert = document.querySelector('.alert-danger'); 
   const existingWarningAlert = document.querySelector('.alert-warning'); 

   // Si existe una alerta, elimínala
   if (existingDangerAlert) {
       existingDangerAlert.remove();
    }
    if (existingWarningAlert) {
        existingWarningAlert.remove();
    }
}


// Funciones de validación

function validateUserName(infoObject){
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:[\s\-'][A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/
    const isValidName = nameRegex.test(infoObject.userName.trim())
    return isValidName;
}

function validateUserEmail(infoObject){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isValidEmail = regexEmail.test(infoObject.userEmail);
    return isValidEmail;
}

function validateUserPhone(infoObject){
    const phoneRegex = /^\+\d{12,13}$/;
    const isValidPhone = phoneRegex.test(infoObject.userPhone);
    return isValidPhone;
}

function validateUserMessage(infoObject){
    const userMessage = infoObject.userMessage.trim()
    if (userMessage === ''){
        return false;
    }
    return true;
}