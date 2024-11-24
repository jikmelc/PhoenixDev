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
            const usuariosExistentes=JSON.parse(localStorage.getItem('usuarios')) || []
            const alreadyRegistered=usuariosExistentes.some(usuario => usuario.userEmail === userData.userEmail)
            if(alreadyRegistered)
            {
                alert("El correo que intenta ingresar ya esta registrado.");
                console.log("Error de correo.")
            }
            else
            {
                // Hashear la contraseña
                userData.contraseña = await hashPassword(userData.contraseña);
                usuariosExistentes.push(userData)
                // Guardar los datos del usuario en el Local Storage
                localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));
                alert('Usuario registrado con éxito.', userData);
                window.location.href = '/pages/feed/feed.html'; 
            }
    } catch (error) 
    {
        console.error('Error al registrar el usuario:', error);
        // Manejar el error de forma apropiada, 
        // por ejemplo, mostrando un mensaje al usuario
    }
}