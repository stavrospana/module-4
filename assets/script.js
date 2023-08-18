const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const timerElement = document.getElementById('timer');
const timeLeftElement = document.getElementById('time-left');
const scoreElement = document.getElementById('score-value');

//adding the questions here
const questions = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'Madrid', 'Berlin', 'London'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      choices: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      correctAnswer: 'Mars'
    },
    {
      question: 'What is the largest mammal?',
      choices: ['Elephant', 'Blue Whale', 'Squirrel', 'Hippopotamus'],
      correctAnswer: 'Blue Whale'
    },
    {
      question: 'In which year did the Titanic sink?',
      choices: ['2000', '1912', '1914', '1916'],
      correctAnswer: '1912'
    },
    {
      question: 'Which gas do plants use for photosynthesis?',
      choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide'
    },
    {
        question: 'Who was the Ancient Greek God of the Sun?',
        choices: ['Mickey Mouse', 'Drake', 'Athena', 'Apollo'],
        correctAnswer: 'Apollo'
      },
      {
        question: 'Which planet has the most moons?',
        choices: ['Saturn', 'Earth', 'Jupiter', 'Planet X'],
        correctAnswer: 'Saturn'
      },
      {
        question: 'What is the name of Mickey Mouses Pet Dog?',
        choices: ['Goofy', 'Pluto', 'Minnie', 'Donald'],
        correctAnswer: 'Pluto'
      },
      {
        question: 'What is the atomic sign for Helium on the periodic table?',
        choices: ['H2O', 'He', 'Fe', 'Se'],
        correctAnswer: 'He'
      },
      {
        question: 'What is the atomic sign for Helium on the periodic table?',
        choices: ['H2O', 'He', 'Fe', 'Se'],
        correctAnswer: 'He'
      },
      {
        question: 'Frodo Baggins is from which mystical land?',
        choices: ['Narnia', 'Camelot', 'Middle Earth', 'Candy Land'],
        correctAnswer: 'Middle Earth'
      },
        ];

        //functionality of the quiz this took so much time and research to complete I apologize
  let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

function showQuestion(question) {
  questionElement.textContent = question.question;
  choicesElement.innerHTML = '';
  question.choices.forEach(choice => {
const choiceButton = document.createElement('button');
choiceButton.textContent = choice;
choiceButton.addEventListener('click', () => checkAnswer(choice, question.correctAnswer));
choicesElement.appendChild(choiceButton);
  });
}

function checkAnswer(selectedAnswer, correctAnswer) {
  clearInterval(timerInterval);
  if (selectedAnswer === correctAnswer) {
    score++;
    scoreElement.textContent = score;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    timeLeft = 10;
    showQuestion(questions[currentQuestionIndex]);
    startTimer();
  } else {
    questionElement.textContent = 'Quiz completed!';
    choicesElement.innerHTML = '';
    timerElement.style.display = 'none';
  }
}

function startTimer() {
  timeLeftElement.textContent = timeLeft;
   timerInterval = setInterval(() => {
    timeLeft--;
    timeLeftElement.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      nextQuestion();
    }
  }, 1000);
}
//attempted to add a correct answer and feedback option but it does not seem to work :(
showQuestion(questions[currentQuestionIndex]);
startTimer();

const feedbackElement = document.getElementById('feedback');
const restartButton = document.getElementById('restart-button');

function showFeedback(isCorrect, correctAnswer) {
  feedbackElement.textContent = isCorrect
    ? 'Correct!'
    : `Wrong! The correct answer is: ${correctAnswer}`;
  feedbackElement.style.color = isCorrect ? '#27ae60' : '#e74c3c';
}
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 10;
  scoreElement.textContent = score;
  feedbackElement.textContent = '';
  feedbackElement.style.color = 'inherit';
  timerElement.style.display = 'block';
  showQuestion(questions[currentQuestionIndex]);
  startTimer();
}

restartButton.addEventListener('click', restartQuiz);
