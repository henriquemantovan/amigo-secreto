# Amigo Secreto

Um projeto para realizar um sorteio de amigo secreto.

## Descrição

Este projeto é uma aplicação web simples que permite aos usuários adicionar nomes de amigos e, em seguida, sortear um deles de forma aleatória para um amigo secreto. O principal objetivo do desafio é fortalecer as habilidades em lógica de programação.

## Funcionalidades

-   **Adicionar Amigos**: Permite inserir nomes de amigos em uma lista. A função `adicionarAmigo()` é responsável por isso, verificando se o campo está vazio ou se o nome já existe na lista.
-   **Listar Amigos**: A função `listarAmigos()` exibe a lista de amigos.
-   **Sortear Amigo Secreto**: A função `sortearAmigo()` sorteia um nome aleatoriamente da lista e o exibe.
-   **Validação de Entrada**:
    -   Alerta o usuário se tentar adicionar um nome vazio, exibindo a mensagem "Por favor, insira um nome.".
    -   Impede a adição de nomes duplicados, exibindo a mensagem "Esse nome já está na lista. Mude o nome".
    -   Alerta o usuário se tentar sortear sem ter adicionado nenhum amigo, exibindo a mensagem "Adicione amigos a serem sorteados".

## Como Usar

1.  Abra o arquivo `index.html` em seu navegador.
2.  Digite um nome no campo de entrada.
3.  Clique no botão "Adicionar" para incluir o nome na lista.
4.  Repita o processo para todos os amigos que participarão do sorteio.
5.  Após adicionar todos os nomes, clique no botão "Sortear amigo" para ver o resultado.