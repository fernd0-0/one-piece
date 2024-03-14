// Objetivo 1 - quando clicar no botão de personagem na lista.
// Passo 1- pegar os botões no Js para poder verificar quando o usuario clicar.


const botoes = document.querySelectorAll('.botao');

//Objetivo 2-quando clicar no personagem mostra

const personagens = document.querySelectorAll(".personagem");




botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //Passo 3- Verificar se ja existe um botão selecionado se sim devemo remover a seleção

       desselecionarBotao();
       desselecionarPersonagem();

        //Passo 2 - adicionar a classe selecionada no botão que o usuario clicou
        botao.classList.add("selecionado");

        

        personagens[indice].classList.add("selecionado");
});

});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

