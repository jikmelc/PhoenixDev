import { hashPassword } from '../../registro/js/registroUsuario.js';

export async function iniciarSesion(email, password) {
    try {
        // Obtener los datos del usuario del Local Storage
        const usuario = JSON.parse(localStorage.getItem('usuario'));

        if (usuario) {
            // Hashear la contraseña ingresada
            const hashedPassword = await hashPassword(password);

            // Comparar la contraseña hasheada con la almacenada
            if (usuario.userEmail === email && usuario.contraseña === hashedPassword) {
                console.log('Inicio de sesión exitoso');
                // Redireccionar a la página principal o mostrar un mensaje de éxito
                window.location.href = '/pages/feed/feed.html'; 

            } else {
                alert('Correo electrónico o contraseña incorrectos');
                // Mostrar un mensaje de error al usuario
            }
        } else {
            console.error('Usuario no encontrado');
            // Mostrar un mensaje de error al usuario
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Manejar el error de forma apropiada
    }
}