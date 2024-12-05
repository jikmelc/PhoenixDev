import { registrarUsuario } from './registroUsuario.js';

const form = document.querySelector('form');
const campoDeNombre = document.getElementById('campoDeNombres');
const campoDeApellido = document.getElementById('campoDeApellidos');
const campoDeUsername = document.getElementById('campoDeUsername')
const campoDeEmail = document.getElementById('campoDeEmail');
const campoDeTelefono = document.getElementById('campoDeTelefono');
const campoDeContraseña = document.getElementById('campoDeContraseña');
const campoDeConfirmacionDeContraseña = document.getElementById('campoDeConfirmarContraseña');
const campoDeFechaDeNacimiento = document.getElementById('campoDeFechaDeNacimiento');
const campoDeAno = document.getElementById('añoDeNacimiento');
const campoDeMes = document.getElementById('mesDeNacimiento');
const campoDeDia = document.getElementById('diaDeNacimiento');
const campoDeGenero = document.getElementById('campoGenero');
const generoInput = document.getElementById('generoUsuario')

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // Recoger los datos del formulario
    const formData = [...new FormData(form)];
    const dataUser = Object.fromEntries(formData);
    limpiarAlertasExistentes();
    // Validación de cada campo
    if (!validateName(dataUser)) {
        mostrarAlertaDeError(campoDeNombre, 'El campo de nombre no debe contener números y no puede estar vacío.');
    } else if (!validateApellido(dataUser)) {
        mostrarAlertaDeError(campoDeApellido, 'El campo de apellido no debe contener números y no puede estar vacío.');
    } else if(!validateUsername(dataUser)) {
        mostrarAlertaDeError(campoDeUsername, 'Este campo no puede estar vacío.')
    } else if (!campoDeMes.value || !campoDeDia.value || !campoDeAno.value) {
        mostrarAlertaDeError(campoDeFechaDeNacimiento, 'Por favor, selecciona una fecha de nacimiento válida.');
    }else if (!generoInput.value) {
        mostrarAlertaDeError(campoDeGenero, 'Selecciona una opción.');
    }else if (!validateUserEmail(dataUser)) {
        mostrarAlertaDeError(campoDeEmail, 'Ingresa un correo electrónico válido.');
    } else if (!validateUserPhone(dataUser)) {
        mostrarAlertaDeError(campoDeTelefono, 'Ingresa un número telefónico válido.');
    } else if (!validateUserPassword(dataUser)) {
        mostrarAlertaDeError(campoDeContraseña, 'La contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial.');
    } else if (!validatePasswordsMatch(dataUser)) {
        mostrarAlertaDeError(campoDeConfirmacionDeContraseña, 'Las contraseñas no coinciden.');
    } else {
        // Si todos los campos son válidos, limpiar alertas y mostrar mensaje de éxito
        limpiarAlertasExistentes();
        await registrarUsuario(dataUser);
        
    }
    
});

document.addEventListener("DOMContentLoaded", function () {
    // const campoDeDia = document.getElementById("diaDeNacimiento");
    // const campoDeMes = document.getElementById("mesDeNacimiento");
    // const campoDeAno = document.getElementById("añoDeNacimiento");

    const currentYear = new Date().getFullYear();
    const minValidYear = currentYear - 110;
    const maxValidYear = currentYear - 18;

    // Generar solo los años válidos (entre hace 110 años y la edad mínima de 18)
    for (let year = maxValidYear; year >= minValidYear; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        campoDeAno.appendChild(option);
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

        campoDeDia.innerHTML = '<option selected>Día</option>'; // Limpiar y resetear opciones de días
        for (let dia = 1; dia <= diasEnMes; dia++) {
            const option = document.createElement("option");
            option.value = dia;
            option.textContent = dia;
            campoDeDia.appendChild(option);
        }
    }

    // Evento para actualizar los días cuando se selecciona un mes o un año
    function actualizarDias() {
        const mesIndex = campoDeMes.selectedIndex;
        const añoSeleccionado = parseInt(campoDeAno.value, 10);

        if (mesIndex > 0 && añoSeleccionado) { // Si el mes y el año son válidos
            generarDias(mesIndex, añoSeleccionado); // Pasamos el índice del mes y el año
        } else {
            campoDeDia.innerHTML = '<option selected>Día</option>'; // Resetear si falta algún dato
        }
    }

    // Listeners para cambios en el mes y el año
    campoDeMes.addEventListener("change", function () {
        limpiarAlertasExistentes(); // Limpiar alertas antes de generar días
        actualizarDias(); // Actualizar días con el mes y año actual
    });

    campoDeAno.addEventListener("change", function () {
        limpiarAlertasExistentes(); // Limpiar alertas antes de actualizar los días
        actualizarDias(); // Actualizar días con el mes y año actual
    });
});


// Función para mostrar un mensaje de alerta cuando uno de los campos no haya sido llenado correctamente
function mostrarAlertaDeError(campo, mensaje){
    const alert = `
    <div class="alert alert-danger mt-2" role="alert">
        <p>${mensaje}</p>
    </div>
    `
    campo.insertAdjacentHTML('beforeend', alert);
}

// Función para limpiar alertas previamente existentes
function limpiarAlertasExistentes(){
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

 function validateName(userData){
    const nombreRegex = /^(?!\s*$)[A-Za-zÀ-ÿ\s'-]{1,50}$/;
    const isValidName = nombreRegex.test(userData.nombres);
    return isValidName;
}

function validateApellido(userData){
    const apellidoRegex = /^(?!\s*$)[A-Za-zÀ-ÿ\s'-]{1,50}$/;
    const isValidApellidoPaterno = apellidoRegex.test(userData.apellidos);
    return isValidApellidoPaterno;
}

function validateUsername(userData) {
    const username = userData.username.trim(); // Elimina espacios al principio y al final
    const isValidUsername = username.length > 0; // Verifica que no esté vacío
    return isValidUsername;
}

 function validateUserEmail(userData){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = regexEmail.test(userData.userEmail);
    return isValidEmail;
}

function validateUserPhone(userData){
    const phoneRegex = /^\+\d{12,13}$/;
    const isValidPhone = phoneRegex.test(userData.userPhone);
    return isValidPhone;
}

// Función de validación de contraseña (debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial)
function validateUserPassword(userData) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(userData.contraseña);
}

// Función de validación de contraseñas coincidentes
function validatePasswordsMatch(userData) {
    return userData.contraseña === userData.confirmacionContraseña;
}