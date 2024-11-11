const form = document.querySelector('form');
const nameField = document.getElementById('campoDeNombres');
const apellidoPaternoField = document.getElementById('campoDeApellidoPaterno');
const apellidoMaternoField = document.getElementById('campoDeApellidoMaterno');
const emailField = document.getElementById('emailField');
const phoneField = document.getElementById('phoneField');
const passwordField = document.getElementById('campoContraseña');
const confirmPasswordField = document.getElementById('campoConfirmarContraseña');
const fechaField = document.getElementById('campoFechaNacimiento');
const anoField = document.getElementById('añoDeNacimiento')
const mesField = document.getElementById('mesDeNacimiento')
const diaField = document.getElementById('diaDeNacimiento')

// Función para manejar el evento de submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Recoger los datos del formulario
    const data = [...new FormData(form)];
    const dataObject = Object.fromEntries(data);

    cleanExistingAlerts();

    // Validación de cada campo
    if (!validateName(dataObject)) {
        showErrorAlert(nameField, 'El nombre no debe contener números y no puede estar vacío.');
    } else if (!validateApellidoPaterno(dataObject)) {
        showErrorAlert(apellidoPaternoField, 'El apellido paterno no debe contener números y no puede estar vacío.');
    } else if (!validateApellidoMaterno(dataObject)) {
        showErrorAlert(apellidoMaternoField, 'El apellido materno no debe contener números y no puede estar vacío.');
    } else if (!validateUserEmail(dataObject)) {
        showErrorAlert(emailField, 'Ingresa un correo electrónico válido.');
    } else if (!validateUserPhone(dataObject)) {
        showErrorAlert(phoneField, 'Ingresa un número telefónico válido.');
    } else if (!validateUserPassword(dataObject)) {
        showErrorAlert(passwordField, 'La contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial.');
    } else if (!validatePasswordsMatch(dataObject)) {
        showErrorAlert(confirmPasswordField, 'Las contraseñas no coinciden.');
    } else if (!mesField.value || !diaField.value || !anoField.value) {
        showErrorAlert(fechaField, 'Por favor, selecciona una fecha de nacimiento válida.');
    } else {
        // Si todos los campos son válidos, limpiar alertas y mostrar mensaje de éxito
        cleanExistingAlerts();
        // showSuccesMessage(dataObject);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const diaSelect = document.getElementById("diaDeNacimiento");
    const mesSelect = document.getElementById("mesDeNacimiento");
    const añoSelect = document.getElementById("añoDeNacimiento");

    const currentYear = new Date().getFullYear();
    const minValidYear = currentYear - 110;
    const maxValidYear = currentYear - 18;

    // Generar solo los años válidos (entre hace 110 años y la edad mínima de 18)
    for (let year = maxValidYear; year >= minValidYear; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        añoSelect.appendChild(option);
    }

    // Función para verificar si un año es bisiesto
    function esBisiesto(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Función para generar días según el mes y año seleccionados
    function generarDias(mes, año) {
        let diasEnMes;
        
        if (mes === 2) { // Febrero
            diasEnMes = esBisiesto(año) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(mes)) { // Abril, junio, septiembre, noviembre
            diasEnMes = 30;
        } else {
            diasEnMes = 31; // Resto de los meses
        }

        diaSelect.innerHTML = '<option selected>Día</option>'; // Limpiar y resetear opciones de días
        for (let dia = 1; dia <= diasEnMes; dia++) {
            const option = document.createElement("option");
            option.value = dia;
            option.textContent = dia;
            diaSelect.appendChild(option);
        }
    }

    // Evento para actualizar los días cuando se selecciona un mes o un año
    function actualizarDias() {
        const mesIndex = mesSelect.selectedIndex;
        const añoSeleccionado = parseInt(añoSelect.value, 10);

        if (mesIndex > 0 && añoSeleccionado) { // Si el mes y el año son válidos
            generarDias(mesIndex, añoSeleccionado); // Pasamos el índice del mes y el año
        } else {
            diaSelect.innerHTML = '<option selected>Día</option>'; // Resetear si falta algún dato
        }
    }

    // Listeners para cambios en el mes y el año
    mesSelect.addEventListener("change", function () {
        cleanExistingAlerts(); // Limpiar alertas antes de generar días
        actualizarDias(); // Actualizar días con el mes y año actual
    });

    añoSelect.addEventListener("change", function () {
        cleanExistingAlerts(); // Limpiar alertas antes de actualizar los días
        actualizarDias(); // Actualizar días con el mes y año actual
    });
});


// Función para mostrar un mensaje de alerta cuando uno de los campos no haya sido llenado correctamente
function showErrorAlert(field, message){
    const alert = `
    <div class="alert alert-danger mt-2" role="alert">
        <p>${message}</p>
    </div>
    `
    field.insertAdjacentHTML('beforeend', alert);
}

// Función para limpiar alertas previamente existentes
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

 // Funciones para validar campos

 function validateName(infoObject){
    const nombreRegex = /^(?!\s*$)[A-Za-zÀ-ÿ\s'-]{1,50}$/;
    const isValidName = nombreRegex.test(infoObject.nombres);
    return isValidName;
}

function validateApellidoPaterno(infoObject){
    const apellidoRegex = /^(?!\s*$)[A-Za-zÀ-ÿ\s'-]{1,50}$/;
    const isValidApellidoPaterno = apellidoRegex.test(infoObject.apellidoPaterno);
    return isValidApellidoPaterno;
}

function validateApellidoMaterno(infoObject){
    const apellidoRegex = /^(?!\s*$)[A-Za-zÀ-ÿ\s'-]{1,50}$/;
    const isValidApellidoMaterno = apellidoRegex.test(infoObject.apellidoMaterno);
    return isValidApellidoMaterno;
}

 function validateUserEmail(infoObject){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = regexEmail.test(infoObject.userEmail);
    return isValidEmail;
}

function validateUserPhone(infoObject){
    const phoneRegex = /^\+\d{12,13}$/;
    const isValidPhone = phoneRegex.test(infoObject.userPhone);
    return isValidPhone;
}

// Función de validación de contraseña (debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial)
function validateUserPassword(infoObject) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(infoObject.contraseña);
}

// Función de validación de contraseñas coincidentes
function validatePasswordsMatch(infoObject) {
    return infoObject.contraseña === infoObject.confirmacionContraseña;
}

// function validateContraseña(infoObject) {
//     const contraseña = infoObject.contraseña;
//     const confirmarContraseña = infoObject.confirmacionContraseña;

//     // Expresión regular para la contraseña
//     const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

//     // Validación de la contraseña
//     const isValidContraseña = contraseñaRegex.test(contraseña);

//     // Validación de coincidencia de contraseñas
//     const doPasswordsMatch = contraseña === confirmarContraseña;

//     if (!isValidContraseña) {
//         showErrorAlert(document.getElementById("contraseñaUsuario"), "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial.");
//     }

//     if (!doPasswordsMatch) {
//         showErrorAlert(document.getElementById("confirmarContraseñaUsuario"), "Las contraseñas no coinciden.");
//     }

//     return isValidContraseña && doPasswordsMatch;
// }