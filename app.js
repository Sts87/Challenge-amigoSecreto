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
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        //Se crea un elemento li
        let li = document.createElement('li');
        //Por cada ciclo for adquiere un valor del array amigos
        li.textContent = amigos[i];
        //Agrega el valor al elemento
        lista.appendChild(li);   
    }
}