// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Almacena los nombres de los amigos
let amigos = [];

//Captura los nombres ingresados
function capturarNombre() {
    let nombre  = document.getElementById('amigo').value;
    return nombre;
}

//Agrega los nombres al array amigos
function agregarAmigo() {
    //Valida que el campo de entrada no este vacío
    if (capturarNombre() === '') {
        //Muestra una alerta
        alert("Por favor, inserte un nombre");
    } else {
        //Actualiza el array amigos
        amigos.push(capturarNombre());
        //Limpia el campo de entrada
        document.getElementById('amigo').value = '';
        console.log(amigos);
        //Muestra los nombre de los amigos
        mostrarListaAmigos();
    }
}

//Muestra los nombres 
function mostrarListaAmigos() {
    //Obtiene el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    //Limpia la lista existente
    lista.innerHTML = "";
    
    //Itera sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        //Crea un elemento <li>
        let li = document.createElement('li');
        //Por cada ciclo for adquiere un valor del array amigos
        li.textContent = amigos[i];
        //Agrega el valor al elemento
        lista.appendChild(li);   
    }
}

//Sortea los nombres de los amigos
function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (amigos.length > 0) {
        //Genera un índice aleatorio
        let index = Math.floor(Math.random() * amigos.length);
        console.log(index);
        //Obtiene el nombre sorteado
        let nombreSorteado = amigos[index];
        //Muestra el resultado
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `El amigo secreto sorteado es ${nombreSorteado}`;
    } else {
        //Muestra una alerta
        alert("La lista amigos esta vacia");
    }
}
