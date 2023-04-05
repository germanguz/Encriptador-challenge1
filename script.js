let frase = "";
let matrizDeCambio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
let textarea = document.querySelector(".msjInicial");
textarea.focus();
let encriptado = document.querySelector(".msjFinal");

document.getElementById("aparece-texto").style.display = 'none';

// Funciones
function encriptar() {

    frase = "";
    if (validar()) {
        for (let i = 0; i < matrizDeCambio.length; i++) {
            if(textarea.value.includes(matrizDeCambio[i][0])) {
                textarea.value = textarea.value.replaceAll(matrizDeCambio[i][0], matrizDeCambio[i][1])
            }
        }
    } else {
        alert("Solo ingresar letras en minúscula y sin acentos o caracteres especiales");
        textarea.focus();
    }
    frase = textarea.value;
    encriptado.innerHTML = frase;
    textarea.value = "";
    aparece();
}

function desencriptar() {

    frase = "";
    for (let i = 0; i < matrizDeCambio.length; i++) {
        if(textarea.value.includes(matrizDeCambio[i][1])) {
            textarea.value = textarea.value.replaceAll(matrizDeCambio[i][1], matrizDeCambio[i][0])
        }
    }
  
    frase = textarea.value;
    document.querySelector(".msjFinal").innerHTML = frase;
    textarea.value = "";
    aparece();
}

function validar() {

    let letras = " abcdefghijklmnñopqrstuvwxyz";
    let validado;
    for (let i = 0; i < textarea.value.length; i++) {
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

    let textoCopiado = document.querySelector(".msjFinal");
    textoCopiado.select();
    document.execCommand("copy");
    //para abajo es para limpiar áreas y poner mensajes
    document.querySelector(".msjFinal").innerHTML = "";
    textarea.value = "";
    textarea.focus();
    alert("Texto copiado");
}

function aparece() {
    document.getElementById("aparece-texto").style.display = 'flex';
    document.getElementById("aparece-imagen").style.display = 'none';
}

// Botones
let boton = document.querySelector(".botonEnc");
boton.onclick = encriptar;

let botonDes = document.querySelector(".botonDes");
botonDes.onclick = desencriptar;

let botonCopiar = document.querySelector(".botonCop");
botonCopiar.onclick = copiar;