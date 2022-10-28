var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var asunto = document.getElementById("asunto");
var mensaje = document.getElementById("mensaje");
var error = document.getElementById("error");
error.style.color = "red";
var emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


var formulario = document.getElementById("form");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let mensajeError = [];

    if (nombre.value === "") {
        mensajeError.push("Ingresa tu nombre");
    } else if (nombre.value.length > 50) {
        mensajeError.push("No puede exceder los 50 caracteres")
    }

    if (emailValido.test(email.value)) {
        mensajeError.unshift("")
    } else {
        mensajeError.push("Ingrese una dirección de email válida");
    }

    if (asunto.value === "") {
        mensajeError.unshift("Ingresa un Asunto");
    } else if (asunto.value.length > 50) {
        mensajeError.push("No puede exceder los 50 caracteres")
    }

    if (mensaje.value === "") {
        mensajeError.unshift("Ingresa un mensaje");
    } else if (mensaje.value.length > 300) {
        mensajeError.push("El mensaje no puede exceder los 300 caracteres")
    }

    error.innerText = mensajeError.join(", ");

    return false;
})




