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
        // URL del endpoint
        const url = `http://localhost:8080/api/v1`;

        // Datos que se van a mandar al back
        const nombre = userData.nombres;
        const apellido = userData.apellidos;
        const userName = userData.username;
        const fechaNacimiento = convertirAFechaISO(userData.año, userData.mes, userData.dia);
        const gender = userData.genero;
        const correo = userData.userEmail;
        const telefono = userData.userPhone;
        const password = userData.contraseña;

        const user = {
            nombres: nombre,
            apellidos: apellido,
            nombreUsuario: userName,
            fechaDeNacimiento: fechaNacimiento,
            genero: gender,
            email: correo,
            contraseña: password
        }

        // Enviar los datos al backend
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        // Verificar la respuesta del servidor
        if (response.ok) {
            const responseData = await response.json();
            console.log('Usuario registrado en backend:', responseData);
            alert('Usuario registrado con éxito.');
            // Redirigir después del registro exitoso
            window.location.href = '/pages/feed/feed.html';
        } else {
            console.error('Error al guardar en backend:', response.statusText);
            alert('Error al registrar usuario en el backend.');
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        alert('Ocurrió un error al intentar registrar el usuario.');
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

function convertirAFechaISO(año, mes, día) {
    // Función para rellenar con ceros
    const pad = (num, size) => num.toString().padStart(size, '0');

    // Asegurar que mes y día tienen dos dígitos
    const year = pad(año, 4);
    const month = pad(mes, 2);
    const day = pad(día, 2);

    // Crear el string con la hora, minutos, segundos y milisegundos en ceros
    const isoString = `${year}-${month}-${day}T00:00:00.000000`;

    return isoString;
}