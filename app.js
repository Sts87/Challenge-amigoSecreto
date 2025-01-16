// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function capturarNombre() {
    let nombre  = document.getElementById('amigo').value;
    return nombre
}

function agregarAmigo() {
    if (capturarNombre() === '') {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(capturarNombre());
        document.getElementById('amigo').value = '';
        console.log(amigos)
    }
}
