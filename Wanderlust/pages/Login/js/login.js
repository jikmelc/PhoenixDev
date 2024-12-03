import { pController } from '../../Perfil/perfil-Js/viajero.js';
import { hashPassword } from '../../registro/js/registroUsuario.js';

export async function iniciarSesion(email, password) {
    try {
        // Obtener el array de usuarios del Local Storage
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));

        if (usuarios) {
            // Hashear la contraseña ingresada una sola vez
            const hashedPassword = await hashPassword(password);

            // Iterar sobre el array de usuarios
            let usuarioEncontrado = null;
            for (let i = 0; i < usuarios.length; i++) {
                const usuario = usuarios[i];

                // Comparar el correo electrónico y la contraseña hasheada
                if (usuario.userEmail === email && usuario.contraseña === hashedPassword) {
                    usuarioEncontrado = usuario;
                    break; // Salir del bucle si se encuentra el usuario
                }
            }

            if (usuarioEncontrado) {
                console.log('Inicio de sesión exitoso');
                // Redireccionar a la página principal o mostrar un mensaje de éxito
                localStorage.setItem('correoSesionIniciada', email);
                pController();
                window.location.href = '/pages/feed/feed.html';
            } else {
                alert('Correo electrónico o contraseña incorrectos');
            }
        } else {
            alert('Usuario no encontrado');
        }
    } catch (error) {
        alert('Error al iniciar sesión:', error);
    }
}