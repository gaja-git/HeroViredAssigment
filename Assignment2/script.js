const quizData = [
  {
    question: "which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correctAnswer: "d",
  },
  {
    question: "Who invented javascript?",
    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",
    d: "Gudio van Rossum",
    correctAnswer: "c",
  },
  {
    question: "Which tool you can use to ensure code quality?",
    a: "Angular",
    b: "React",
    c: "jquery",
    d: "ESLint",
    correctAnswer: "d",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correctAnswer: "b",
  },
];

//my quiz container
const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");

//holds all my radio button for answers
const answerEls = document.querySelectorAll(".answer");

//Answer label display
const a_text = document.getElementById("a_option");
const b_text = document.getElementById("b_option");
const c_text = document.getElementById("c_option");
const d_text = document.getElementById("d_option");

//get submit button handle
const submitBtn = document.getElementById("submit");
const noAttempt = document.getElementById("Attempt");
const CurScore = document.getElementById("CurrentScore");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  //deslect the answers radio button
  deselectAnswers();

  //get the current question from question array
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  noAttempt.innerText = `You have attempted ${currentQuiz} question`;
  CurScore.innerText = `Current score ${score}`;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

//when button is submitted check the score
//Also check the question number to load the next or reload
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log("answer", answer);
  console.log("currentQuiz", currentQuiz);
  console.log(quizData[currentQuiz].correctAnswer);
  if (answer) {
    if (answer === quizData[currentQuiz].correctAnswer) {
      console.log("score", score);
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2> You answerd ${score}/${quizData.length} questions correctly</h2>
            <button onClick ="location.reload()">Reload</button>
            `;
    }
  }
});
