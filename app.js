//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo() {
    let add_amigo = document.getElementById("amigo");

    if ( add_amigo.value === "") {
        alert("Por favor, insira um nome.");
    }
    else {
        amigos.push(add_amigo.value);
        add_amigo.value = "";
        listaAmigos();
    }
}

function listaAmigos() {
    let lista = document.getElementById("listaAmigos");
    let add_li = "";

    lista.innerHTML = "";

    for (let i=0; i<amigos.length; i++) {
        add_li += `<li>${amigos[i]}</li>`;
    }

    lista.innerHTML = add_li;
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado")
    
    if (amigos.length === 0) {
        alert("Não há amigos.")
    }
    else {
        let amigo_sorteado = Math.floor(Math.random() * amigos.length);;
        resultado.innerText = amigos[amigo_sorteado];
    }
}