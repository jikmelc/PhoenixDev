const datos = document.querySelector(".form1")

datos.addEventListener("submit", function(event) {
    // Prevenir el envío del formulario y refresco de la página
    event.preventDefault();

    // Obtener el valor del campo 'nombre'
    const nombre = document.getElementById("nombre").value;
    console.log("hola " + nombre);

    // Puedes obtener los demás valores de la misma forma si es necesario
    const email = document.getElementById("Email").value;
    const phone = document.getElementById("Phone").value;
    const texto = document.getElementById("texto").value;
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("texto: " + texto);
});