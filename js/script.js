const questions = [
    {
      question: "Em quantos dia Jesus ressuscitou?",
      choices: ["5dias", "33dias", "1dia", "3dias"],
      answer: "3dias",
    },
    {
      question: "Quem foi solto no lugar de jesus?",
      choices: ["Barrabas", "lázaro", "Lucas", "Herods"],
      answer: "Barrabas",
    },
    {
      question: "Quem ficou no lugar de Moises?",
      choices: ["Josue", "Arão", "Paulo", "Abidias"],
      answer: "Josue",
    },
    {
      question: "Em qual cidade nasceu Jesus?",
      choices: ["Lisboa", "isrrael", "belem", "jerusalem"],
      answer: "belem",
    },
    {
      question: "Quem feriu a rocha com a vara?",
      choices: ["Absalão", "David", "Abrão", "Moises"],
      answer: "Moises",
    },
    {
      question: " Quem foi jogado nas covas dos leões?",
      choices: ["Pedro", "Judas", "Simão", "Daniel"],
      answer: "Daniel",
    },
    {
      question: "Quantos dias Jesus ficou no deserto?",
      choices: ["35 dias", "25 dias", "40 dias", "50 dias"],
      answer: "40 dias",
    },
    {
      question: "Quem foi engolido por uma baleia?",
      choices: ["Jonas", "Lucas", "Judas", "Thiago"],
      answer: "Jonas",
    },
    {
      question: "Quem traiu Jesus por 30 moedas?",
      choices: ["Judas", "Pedro", "Golias", "Caifaz"],
      answer: "Judas",
    },
    {
      question: "qual o rei que viveu como um animal?",
      choices: ["Zaul", "Elias", "Nabuconosor", "David"],
      answer: "Nabuconosor",
    },
    {
      question: "Qual nome do lugar onde jesus foi crucificado?",
      choices: ["Babilonia", "Templo", "monte sinai", "Calvário"],
      answer: "Calvário",
    },
    {
      question: "Onde era guardada a arca da alinça?",
      choices: ["Tabernáculo", "Sinébrio", "Torre", "Monasterio"],
      answer: "Tabernáculo",
    },
    {
      question: "Qual discipulo Jesus mais amor?",
      choices: ["Pedro", "João", "Tomé", "Elias"],
      answer: "João",
    },
  ];
  const questionElement = document.getElementById("question");
const choiceElements = Array.from(document.getElementsByClassName("choice"));
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");
const wrongElement = document.getElementById("wrong");

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.innerText = currentQuestionData.question;

  const choices = shuffleArray(currentQuestionData.choices);
  for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i];
  }
  answerChosen = false; // reset flag when loading new question
}

function checkAnswer(e) {
  if (answerChosen) return; // prevent multiple answers
  answerChosen = true;

  if (e.target.innerText === questions[currentQuestion].answer) {
    score++;
    scoreElement.innerText = "Pontuação: " + score;
    alert("Correto!");
  } else {
    wrong++;
    wrongElement.innerText = "Erros: " + wrong;
    alert(
      "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
    );
  }
}

choiceElements.forEach((element) => {
  element.addEventListener("click", checkAnswer);
});

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  scoreElement.innerText = "Pontuação: 0";
  wrongElement.innerText = "Erros: 0";
  loadQuestion();
}

nextButton.addEventListener("click", () => {
  if (!answerChosen) {
    alert("Por favor, escolha uma resposta antes de prosseguir.");
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert(
      "Fim do Quiz! Você acertou " +
        score +
        " de " +
        questions.length +
        " perguntas."
    );
    restartQuiz();
  }
});

function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

loadQuestion();


  
