const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "let myVar = 10;",
            "const myVar = 10;",
            "var myVar = 10;",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "addToEnd()",
        ],
        correta: 0
    },
    {
        pergunta: "Como você pode verificar o tipo de uma variável em JavaScript?",
        respostas: [
            "typeOf",
            "typeof",
            "type",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Document Object Model",
            "Data Object Model",
            "Dynamic Object Model",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "removeLast()",
            "pop()",
            "deleteLast()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual operador é usado para atribuição de valor e tipo igual em JavaScript?",
        respostas: [
            "=",
            "==",
            "===",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para selecionar um elemento HTML pelo seu ID em JavaScript?",
        respostas: [
            "document.find()",
            "document.getElementById()",
            "document.selectById()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado de 2 + '2' em JavaScript?",
        respostas: [
            "22",
            "4",
            "Erro",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método console.log() faz em JavaScript?",
        respostas: [
            "Imprime um valor no console",
            "Cria um novo console",
            "Define um log no console",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Operador de negação lógica",
            "Operador de adição",
            "Operador lógico 'E'",
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for (const item of perguntas) {

    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }



        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()




    quiz.appendChild(quizItem)
}