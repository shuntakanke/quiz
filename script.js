const quizData = [
  {
    question: '俊太は何歳でしょうか？',
    a: '10',
    b: '21',
    c: '26',
    d: '89',
    correct:'b'
  },
  {
    question: '私の好きな季節はなんでしょうか？',
    a: '春',
    b: '夏',
    c: '秋',
    d: '冬',
    correct:'c'
  },
  {
    question: '私が初めて触ったプログラミング言語はなんでしょうか？',
    a: 'php',
    b: 'c',
    c: 'java',
    d: 'javascript',
    correct:'b'
  },
  {
    question: '私が一番好きな映画はなんでしょうか？',
    a: 'about Time',
    b: 'ヴァイオレットエヴァーガーデン',
    c: 'マーベル',
    d: '鬼滅の刃',
    correct:'b'
  }
];


const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score =0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answerEls = document.querySelectorAll('.answer');

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked =false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  console.log(answer);

  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> 菅家俊太への理解度　${score} /${quizData.length}　（正答率）</h2>`
    }
  }
});