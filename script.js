
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
        correta: 2// A segunda alternativa é a correta
    },
    {
        enunciado: "Qual a fórmula da glicose?",
        alternativas: [
            "C6H12O6",
            "C10H16N5013P3"
        ],
        correta: 1 // A primeria alternativa é a correta
    },
    {
        enunciado: "Qual empresa desenvolveu o sistema Windows?",
        alternativas: [
            "Apple",
            "Microsoft"
        ],
        correta: 1
    },
    {
        enunciado: "Quem é o capitão do navio Pérola Negra?",
        alternativas: [
            "Jack Skellington",
            "Jack Sparrow"
        ],
        correta: 2
    },
    {
        enunciado: "Qual o maior oceno do planeta Terra?",
        alternativas: [
            "Oceano Pacífico",
            "Oceano Atlântico"
        ],
        correta: 1
    }
];

// inicializa o índice da pergunta atual e a pontuação

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0