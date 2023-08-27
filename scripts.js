const questions = [
    {
      question: "Qual é a capital de Angola?",
      choices: ["Benguela", "Lubango", "Luanda", "Huambo"],
      answer: "Luanda",
    },
    {
      question: "Qual é a capital de Namibia?",
      choices: ["Walvis Bay", "Ondangwa", "Rundu", "Windhouk"],
      answer: "Windhouk",
    },
    {
      question: "Qual é a capital da RDC?",
      choices: ["Lumbumbashi", "Mbuji-Mayi", "Kisangani", "Quinxassa"],
      answer: "Quinxassa",
    },
    {
      question: "Qual é a capital da Zambia?",
      choices: ["Kitwe", "Lusaka", "Chipata", "Lundazi"],
      answer: "Lusaka",
    },
    {
      question: "Qual é a capital de Portugal?",
      choices: ["Porto", "Lisboa", "Roma", "Coimbra"],
      answer: "Lisboa",
    },
    {
      question: "Qual é a capital do Canadá?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Qual é a capital dos Estados Unidos?",
      choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
      answer: "Washington D.C.",
    },
    {
      question: "Qual é a capital do Reino Unido?",
      choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
      answer: "Londres",
    },
  ];

  
  const scoreElement = document.querySelector("#score");
  const wrongElement = document.querySelector("#wrong");
  const questionElement = document.querySelector("#question"); // seleciona o id question
  const choiceElements = document.querySelectorAll(".choice"); // seleciona todos da classe choice
  const nextButton = document.querySelector("#next");
  
  
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let answerChosen = false; // para marcar se a pergunta ja foi respondida
  
  function loadQuestion() {  //funcao de carregar a pergunta
    const currentQuestionData = questions[currentQuestion]; // carrega os dados da pergunta 
    questionElement.innerText = currentQuestionData.question; // a mudar o valor do html
   
    const choices = shuffleArray(currentQuestionData.choices); //para preencher as escolhas... o shuffleArray he para embaralhar as respostas

    for (let i = 0; i < choiceElements.length; i++) { // botoes para rodar as 4 veses
        choiceElements[i].innerText = choices[i]; // trocamos o inner texto, ou o texto no interior por uma das respostas
      }
      answerChosen = false; // reset flag when loading new question ... para zerar quando a pergunta for respondida
    

   function shuffleArray(array) {// const choices = shuffleArray(currentQuestionData.choices); //para fazer uma reordenacao das escolhas
    let currentIndex = array.length
    let temporaryValue;
    let randomIndex;

    while(0 !==currentIndex){ //uzar um while, enquanto zero for diferente de currente index
        randomIndex = Math.floor(Math.random() * currentIndex)//seleciona o index aleatorio baseado na quantidade de coisas que ja tenho
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex] // para passar uma resposta aleatoria
        array[randomIndex] = temporaryValue;
    }
    return array;
    }
    function checkAnswer(event){  //funcao para escolher uma resposta
        if(answerChosen) return; // se a pergunta ja foi respondida retorna
        answerChosen = true;

        if(event.target.innerText === questions[currentQuestion].answer){ // verificar se a pergunta e igual ao valor do botao
            score ++; // se for aumente a pontuacao
            scoreElement.innerText = `Pontuação: ${score}` //para actualizar o texto da pontuacao
            alert("CORRECTA A RESPOSTA!");
        }else{
            wrong++ // se nao aumenta nas erradas questions
            wrongElement.innerText = `Erros: ${wrong}` // para actualizar o texto dos erros
            alert(`Errada! A resposta correcta é: ${questions[currentQuestion].answer}`);

        }
    }
    choiceElements.forEach((btn) =>{
        btn.addEventListener("click", checkAnswer);//adiciona um evento de click para verificar a resposta
      })
    nextButton.addEventListener("click", () =>{
        if(!answerChosen){ //para verificar se pergunta foi respondida
           // alert("POR FAVOR RESPONDA A PERGUNTA!")
            return;
        }
        currentQuestion++; //actualizar para o indice mudar

        if(currentQuestion < questions.length ){
            loadQuestion();
        }else{
            alert(`Fim do jogo! Você acertou: ${score} de ${questions.length} perguntas.`);
            
        }
    } ) //funcionalidade de avancar nas perguntas
    function restartQuiz (){ // reiniciar o quiz zera o jogo e carrega a primeira pergunta
        score = 0;
        wrong = 0;
        currentQuestion = 0;
        scoreElement.innerText = `Pontuação: 0`
        wrong.innerText = `Erros: 0`
        loadQuestion(); // carrega a first pergunta

    }
  }
  
  loadQuestion();
    
