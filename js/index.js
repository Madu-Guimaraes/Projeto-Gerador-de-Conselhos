const numeroDoConselho = document.querySelector('#numero-do-conselho');
const descricaoDoConselho = document.querySelector('.descricao-do-conselho');
const criaNovoConselhoAleatorio = document.querySelector('#btn')

async function criarConselho(){

    try{
        const resposta = await fetch("https://api.adviceslip.com/advice")

        if (!resposta.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
          }

        const conteudoDoConselho = await resposta.json();
        const conselhoId = `Advice #${conteudoDoConselho.slip.id}`;
        const descricaoConselho = `"${conteudoDoConselho.slip.advice}"`;
        
        numeroDoConselho.innerText = conselhoId
        descricaoDoConselho.innerText = descricaoConselho
        
    } catch (error) {
        console.error ("Erro ao tentar buscar as informações da API", error);
    }
}

criaNovoConselhoAleatorio.addEventListener("click", criarConselho);

criarConselho();