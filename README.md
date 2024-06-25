# Projeto Gerador de Conselhos usando API 📃

![imagem-final]()

## Visão Geral 💡

O projeto consiste em uma página web simples que exibe conselhos aleatórios. Cada vez que o usuário clica no botão, um novo conselho é buscado de uma API e exibido na tela.

## Tecnologias Usadas 📌

- HTML5
- CSS
- JavaScript
- API

## Conceitos aprendidos 📖

1. Fetch API: Utilizei a função fetch para fazer requisições HTTP assíncronas. É uma maneira moderna e eficiente de buscar dados de uma API.
JavaScript

```javascript
const resposta = await fetch("https://api.adviceslip.com/advice");
```

2. Tratamento de Erros: Implementar o tratamento de erros é crucial para garantir que o usuário receba feedback adequado caso algo dê errado.
JavaScript

```javascript
if (!resposta.ok) {
    throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
}
```
3. Manipulação do DOM: Atualizei dinamicamente o conteúdo da página com os dados recebidos da API, proporcionando uma experiência interativa ao usuário.
JavaScript

```javascript
const conteudoDoConselho = await resposta.json();
numeroDoConselho.innerText = `Advice #${conteudoDoConselho.slip.id}`;
descricaoDoConselho.innerText = conteudoDoConselho.slip.advice;
```
4. Eventos: Adicionei um evento de clique ao botão para gerar um novo conselho sempre que o usuário desejar.
JavaScript

```javascript
criaNovoConselhoAleatorio.addEventListener("click", criarConselho);
```

## Resultado Final ✨

![gerador-de-conselhos]()

## Link para o deploy 🌐

![gerador-de-conselhos]()

## Design Responsivo 📱🖥️

![gerador-de-conselhos]()
