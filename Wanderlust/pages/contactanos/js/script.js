// Seleccionamos la etiqueta form y su contenido
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event);
    const data = [...new FormData(form)];
    const dataObject = Object.fromEntries(data);
    if(validateUserEmail(dataObject) && validateUserPhone(dataObject)){
        showSuccesMessage(dataObject);
    }else{
        showErrorAlert()
        return;
    }
});

function showErrorAlert(){
    // Selecciona la alerta existente, si la hay
    const existingAlert = document.querySelector('.alert-danger'); 

    // Si existe una alerta, elimínala
    if (existingAlert) {
        existingAlert.remove();
    }
    const alert = `
    <div class="alert alert-danger" role="alert">
        <p> Algo salió mal. </p>
    </div>
    `
    form.insertAdjacentHTML('afterbegin', alert);
}

function showSuccesMessage(){
    // Selecciona la alerta existente, si la hay
    const existingAlert = document.querySelector('.alert-danger'); 

    // Si existe una alerta, elimínala
    if (existingAlert) {
        existingAlert.remove();
    }
    const alert = `
    <div class="alert alert-warning" role="alert">
        <p> Mensaje enviado con éxito. Serás contactado a la brevedad. <p/>
    </div>
    `
    form.insertAdjacentHTML('beforeend', alert);
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