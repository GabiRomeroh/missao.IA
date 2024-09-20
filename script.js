
// Seleciona os elementos HTML que manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

//Arry de objeto contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual é o maior deserto do mundo?",
        alternativas: [
            "Antártica",
            "Saara"
        ],
        correta: 1// A segunda alternativa é a correta
    },
    {
        enunciado: "Qual a fórmula da glicose?",
        alternativas: [
            "C6H12O6",
            "C10H16N5013P3"
        ],
        correta: 0// A primeria alternativa é a correta
    },
    {
        enunciado: "Qual empresa desenvolveu o sistema Windows?",
        alternativas: [
            "Apple",
            "Microsoft"
        ],
        correta: 0 // A primeria alternativa é a correta
    },
    },
    {
        enunciado: "Quem é o capitão do navio Pérola Negra?",
        alternativas: [
            "Jack Skellington",
            "Jack Sparrow"
        ],
        correta: 1// A segunda alternativa é a correta
    },
    {
        enunciado: "Qual o maior oceno do planeta Terra?",
        alternativas: [
            "Oceano Pacífico",
            "Oceano Atlântico"
        ],
        correta: 0 // A primeria alternativa é a correta
    }
];

// inicializa o índice da pergunta atual e a pontuação

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0

let atual = 0
let pergutaAtual;
let pontuacao = 0;

//FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    pergutaAtual.alternativas.forEach((alternativas, index) => {
        const botao = document.createElement("button");
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

//função vertical respota
function verificaResposta(Selcione) [{
    if (seleciona === perguntaAtual.correta){
        pontuação++;
    }
    atual++;

    if(atual< perguntaAtual.length) {
        mostrarPergunta();
    }

}]

// Seleciona os elementos HTML que manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

//Arry de objeto contendo as perguntas e alternativas
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

let atual = 0
let pergutaAtual;
let pontuacao = 0;

//FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    pergutaAtual.alternativas.forEach((alternativas, index) => {
        const botao = document.createElement("button");
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function vereficaResposta(Seleciona) {
    if (selecionda === pergutaAtual.correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostarResultado();
    }
}