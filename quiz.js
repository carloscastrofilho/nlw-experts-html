const perguntas = [
    {
      pergunta: 'Qual destes é um tipo de dado em JavaScript?',
      respostas: [
        "String",
        "Corda",
        "Texto",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a forma correta de declarar uma variável em JavaScript?',
      respostas: [
        "var myVar = 10;",
        "variable myVar = 10;",
        "variável myVar = 10;",
      ],
      correta: 0
    },
    {
      pergunta: 'O que é uma função em JavaScript?',
      respostas: [
        "Um método para executar uma ação específica",
        "Uma variável que armazena valores",
        "Uma palavra-chave reservada",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual destes é um operador de comparação em JavaScript?',
      respostas: [
        "==",
        "><",
        "<>",
      ],
      correta: 0
    },
    {
      pergunta: 'O que o método push() faz em JavaScript?',
      respostas: [
        "Adiciona elementos ao final de um array",
        "Remove o último elemento de um array",
        "Altera um elemento em um array",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a forma correta de escrever um comentário de uma linha em JavaScript?',
      respostas: [
        "// Isto é um comentário",
        "<!-- Isto é um comentário -->",
        "/* Isto é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é o resultado da expressão (10 % 3) em JavaScript?',
      respostas: [
        "1",
        "3",
        "0.3",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual destes métodos é usado para remover o último elemento de um array em JavaScript?',
      respostas: [
        "pop()",
        "shift()",
        "unshift()",
      ],
      correta: 0
    },
    {
      pergunta: 'Como você inicia um loop "for" em JavaScript?',
      respostas: [
        "for (var i = 0; i < 5; i++) {}",
        "loop (var i = 0; i < 5; i++) {}",
        "for (i = 0; i < 5; i++) {}",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a saída do código: console.log(typeof([]));?',
      respostas: [
        "object",
        "array",
        "undefined",
      ],
      correta: 0
    }
  ];
  // localiza e captura o id quiz
  const quiz = document.querySelector('#quiz')
  
  const template = document.querySelector('template')
  
  // // clona o no template com todos os filhos dentro
  // const quizItem = template.content.cloneNode(true)
  
  // quiz.appendChild(quizItem)
  
  const corretas = new Set()
  const totalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
  
  
  // loop ou repetição
  for( const  item of perguntas ){
      // clona o no template com todos os filhos dentro
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    //
    // coloar as perguntas na tela
    for( let resposta of item.respostas  ){ 
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      
      dt.querySelector('input').onchange = (event) => { 
          // alert(event.target.value) //- saber o valor do evento
          const estaCorreta = event.target.value == item.correta
          corretas.delete(item)
          if ( estaCorreta ) {
             corretas.add(item)
          }
          mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
      }    
      quizItem.querySelector('dl').appendChild(dt)  
    } 
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)  
  }
  
  
  
  