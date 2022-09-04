var frase = "";
var textarea = document.querySelector(".msjInicial");
textarea.focus();
var encriptado = document.querySelector(".msjFinal");

document.getElementById("aparece-texto").style.display = 'none';

// Funciones
function encriptar() {

    frase = "";
    if (validar()) {
        for (var i = 0; i < textarea.value.length; i++) {
            if (textarea.value[i] == "e") {
                frase = frase + "enter";
                continue;
            }
            if (textarea.value[i] == "i") {
                frase = frase + "imes";
                continue;
            }
            if (textarea.value[i] == "a") {
                frase = frase + "ai";
                continue;
            }
            if (textarea.value[i] == "o") {
                frase = frase + "ober";
                continue;
            }
            if (textarea.value[i] == "u") {
                frase = frase + "ufat";
                continue;
            }
            else {
                frase = frase + textarea.value[i];
            }
        }
    } else {
        alert("Solo ingresar letras y en minúscula, sin acentos");
        textarea.focus();
    }

    encriptado.innerHTML = frase;
    textarea.value = "";
    aparece();
}

function desencriptar() {

    frase = "";
    for (var i = 0; i < textarea.value.length; i++) {
        if ((textarea.value[i] == "e") && (textarea.value[i + 1] == "n") && (textarea.value[i + 2] == "t") && (textarea.value[i + 3] == "e") && (textarea.value[i + 4] == "r")) {
            frase = frase + "e";
            i = i + 4;
            continue;
        }
        if ((textarea.value[i] == "i") && (textarea.value[i + 1] == "m") && (textarea.value[i + 2] == "e") && (textarea.value[i + 3] == "s")) {
            frase = frase + "i";
            i = i + 3;
            continue;
        }
        if ((textarea.value[i] == "a") && (textarea.value[i + 1] == "i")) {
            frase = frase + "a";
            i = i + 1;
            continue;
        }
        if ((textarea.value[i] == "o") && (textarea.value[i + 1] == "b") && (textarea.value[i + 2] == "e") && (textarea.value[i + 3] == "r")) {
            frase = frase + "o";
            i = i + 3;
            continue;
        }
        if ((textarea.value[i] == "u") && (textarea.value[i + 1] == "f") && (textarea.value[i + 2] == "a") && (textarea.value[i + 3] == "t")) {
            frase = frase + "u";
            i = i + 3;
            continue;
        }
        else {
            frase = frase + textarea.value[i];
        }
    }
    document.querySelector(".msjFinal").innerHTML = frase;
    aparece();
}

function validar() {

    var letras = " abcdefghijklmnñopqrstuvwxyz";
    var validado;
    for (var i = 0; i < textarea.value.length; i++) {
        if (letras.indexOf(textarea.value[i]) == -1) {
            validado = false;
            break;
        }
        else {
            validado = true;
        }
    }
    return validado;
}

function copiar() {

    var textoCopiado = document.querySelector(".msjFinal");
    textoCopiado.select();
    document.execCommand("copy");
    //para abajo es para limpiar áreas y poner mensajes
    document.querySelector(".msjFinal").innerHTML = "";
    textarea.value = "";
    textarea.focus();
    alert("Texto copiado");
}

function aparece() {
    document.getElementById("aparece-texto").style.display = 'block';
    document.getElementById("aparece-imagen").style.display = 'none';
}

// Botones
var boton = document.querySelector(".botonEnc");
boton.onclick = encriptar;

var botonDes = document.querySelector(".botonDes");
botonDes.onclick = desencriptar;

var botonCopiar = document.querySelector(".botonCop");
botonCopiar.onclick = copiar;