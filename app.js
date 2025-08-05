//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo');
    if (nome.value == '') {
        alert('Por favor, insira um nome.');
    } else if (listaDeNomes.includes(nome.value)){
        alert('Esse nome já está na lista');
    } else {
        listaDeNomes.push(nome.value);
    }
    nome.value = '';
    listarAmigos();
}


