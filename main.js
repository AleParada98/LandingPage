/* ---------------------- JS Menu ---------------------- */

let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(e) {
    e.preventDefault();
    if (contador == 0) {
        enlaces.className = ("enlaces dos")
        contador = 1;
    } else {
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador = 0;
    }
})

/* ---------------------- JS Contacto ---------------------- */

function enviar() {
    var mail, nombreApellidos, motivo, expresion;
    var valido = false;

    mail = document.getElementById("mail").value;
    nombreApellidos = document.getElementById("nombreApellidos").value;
    motivo = document.getElementById("comentarios").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (mail === "" || nombreApellidos === "" || motivo === "") {
        alert("Por favor aseguresé de haber rellenado todos los campos.");
    } else if (!expresion.test(mail)) {
        alert("El correo no es valido, introduzcalo de nuevo.");
    } else{
        alert("Correo enviado.");
        valido = true;
    }
    return valido
}

/* ---------------------- JS Contacto ---------------------- */

window.onload = function () {
    const IMAGENES = [
        'img/proyecto1.jpg',
        'img/proyecto2.jpg',
        'img/proyecto3.jpg'
    ];
    const TITULOS = [
        'GetAwayer',
        'Proyecto Integrador',
        'TicTacToe en c++'
    ];
    let posicionActual = 0;
    let $imagen = document.querySelector('#imagen');
    /* EventListener que al pulsar en la imagen redige a un sitio web en concreto según la variable "posicionActual" */
    $imagen.addEventListener('click', function (e) {
        if(posicionActual == 0)
            window.location.href="https://github.com/guco23/stayawayer";
        else if (posicionActual == 1)
            window.location.href="https://github.com/DAM-UEM-2021/bbdd---tarea-7---alta-baja-y-modificacion-los-4-jinetes";
        else
            window.location.href="https://github.com/AleParada98/TicTacToeCPP";
    });

    intervalo = setInterval(pasarFoto, 2500);

    /* Funcion que pasa la imagen transcurrido un tiempo */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }

        cargarImagenTitulo();
    }

    /* Funcion que actualiza la imagen y el titulo, dependiendo de posicionActual */
    function cargarImagenTitulo () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        document.getElementById('tituloProyectos').innerHTML = TITULOS[posicionActual];
    }

    cargarImagenTitulo();
}