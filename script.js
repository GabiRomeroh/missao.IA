// Seleciona os elementos HTML que serão manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual é o maior deserto do mundo?",
        alternativas: [
            "Antártica",
            "Saara"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Qual a fórmula da glicose?",
        alternativas: [
            "C6H12O6",
            "C10H16N5013P3"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Qual empresa desenvolveu o sistema Windows?",
        alternativas: [
            "Apple",
            "Microsoft"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Quem é o capitão do navio Pérola Negra?",
        alternativas: [
            "Jack Skellington",
            "Jack Sparrow"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual o maior oceano do planeta Terra?",
        alternativas: [
            "Oceano Pacífico",
            "Oceano Atlântico"
        ],
        correta: 0 // A primeira alternativa é a correta
    }
];

// Inicializa o índice da pergunta atual e a pontuação
let atual = 0;
let pontuacao = 0;

// FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa; // Adiciona o texto da alternativa ao botão
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(seleciona) {
    if (seleciona === perguntas[atual].correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// FUNÇÃO MOSTRAR RESULTADO
function mostrarResultado() {
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "block"; // Mostra a caixa de resultado
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
}

// Inicia o quiz mostrando a primeira pergunta
mostrarPergunta();
