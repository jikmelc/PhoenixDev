// registroUsuario.js
 export async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;

}
// registroUsuario.js
export async function registrarUsuario(userData) {
    try {   
        const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];
        const alreadyRegistered = usuariosExistentes.some(usuario => usuario.userEmail === userData.userEmail);

        if (alreadyRegistered) {
            alert("El correo que intenta ingresar ya esta registrado.");
            console.log("Error de correo.");
        } else {
            // Hashear la contraseña del usuario 
            userData.contraseña = await hashPassword(userData.contraseña);

            usuariosExistentes.push(userData);

            // Guardar los datos del usuario en el Local Storage
            localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));

            alert('Usuario registrado con éxito.', userData);
            window.location.href = '/pages/feed/feed.html'; 
        }

    } catch (error) {
        console.error('Error al registrar el usuario:', error);
    }
}
async function precargarAdmin() {
    try {
        const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Verificar si ya existe un usuario administrador
        const adminExistente = usuariosExistentes.some(usuario => usuario.userEmail === 'admin@example.com');

        if (!adminExistente) {
            // Datos del usuario administrador predefinidos
            const adminData = {
                nombres: 'Admin',
                apellidos: 'Admin',
                fechaDeNacimiento: '2000-01-01', 
                generoUsuario: 'Masculino',
                userEmail: 'admin@gmail.com',
                userPhone: '+123456789012', 
                contraseña: await hashPassword('Admin123'), 
                confirmacionContraseña: await hashPassword('Admin123')
            };
            usuariosExistentes.push(adminData);
            localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));

            console.log('Usuario administrador creado con éxito');
        } else {
            console.log('Ya existe un usuario administrador.');
        }
    } catch (error) {
        console.error('Error al precargar el usuario administrador:', error);
    }
}
precargarAdmin();