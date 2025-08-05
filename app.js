//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let nome = document.getElementById('amigo');
    if (nome.value == '') {
        exibirTextoNaTela('h2','Por favor, insira um nome.')
    } else if (listaDeNomes.includes(nome.value)){
        exibirTextoNaTela('h2','Esse nome já está na lista. Mude o nome')
    } else {
        listaDeNomes.push(nome.value);
        exibirTextoNaTela('h2','Digite o nome dos seus amigos')    
    }
    nome.value = '';
    listarAmigos();
}

function listarAmigos(){
    let lista = document.getElementById('listaAmigos');
    let nomesHtml = ''
    for (let i=0; i<listaDeNomes.length; i++){
        nomesHtml += `<li>${listaDeNomes[i]}</li>`;
    }
    lista.innerHTML = nomesHtml;
}

function sortearAmigo(){
    if (listaDeNomes.length == 0) {
        exibirTextoNaTela('h2','Adicione amigos a serem sorteados')
    }
    else {let indexSorteado = Math.floor(Math.random()*listaDeNomes.length)
    let nomeSorteado = document.getElementById('resultado');
    nomeSorteado.innerHTML = listaDeNomes[indexSorteado];
    }
}


