// Seleciona os elementos HTML que serão manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual a idade máxima que um cachorro pode chegar?",
        alternativas: [
            "15 anos",
            "20 anos"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Quantos dias há em um ano bissexto?",
        alternativas: [
            "365",
            "366"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual é o maior planeta do nosso sistema solar?",
        alternativas: [
            "Terra",
            "Júpiter"
        ],
        correta: 1
    },
    {
        enunciado: "Qual é a capital da França?",
        alternativas: [
            "Paris",
            "Londres"
        ],
        correta: 0
    },
    {
        enunciado: "Qual é a fórmula química da água?",
        alternativas: [
            "H2O",
            "CO2"
        ],
        correta: 0
    }
];

let atual = 0;
let perguntaAtual; // Corrigido de "pergutaAtual" para "perguntaAtual"
let pontuacao = 0;

// FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => { // Corrigido "pergutaAtual" para "perguntaAtual"
        const botao = document.createElement("button");
        botao.textContent = alternativa; // Adiciona o texto da alternativa ao botão
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(selecionada) { // Corrigido de "Seleciona" para "selecionada"
    if (selecionada === perguntaAt
