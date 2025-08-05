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
        alert('Adicione amigos a serem sorteados')
    }
    let indexSorteado = Math.floor(Math.random()*listaDeNomes.length)
    let nomeSorteado = document.getElementById('resultado');
    nomeSorteado.innerHTML = listaDeNomes[indexSorteado];
}


