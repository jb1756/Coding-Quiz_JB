var questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

//define in global function the cards used in id variables
var introCard = document.querySelector("#intro-card");
var questionCard = document.querySelector("#question-card");
var resultCard = document.querySelector("#result-card");
var highscoreCard =document.querySelector("#high-score-card");

//create function to hide cards

function hiddencards() {
  introCard.setAttribute("hidden", true);
  questionCard.setAttribute("hidden", true);
  resultCard.setAttribute("hidden", true);
  highscoreCard.setAttribute("hidden",true);
}

// hide answer-div 
function hideResultText() {
  answerDiv.style.display = "none";
}

//these variables are required globally
var intervalID;
var time;
var currentQuestion;

document.querySelector("#start-button").addEventListener("click", start);

function start() {
  //hide visible cards then show question
  hiddencards();
  questionCard.removeAttribute("hidden");

  //assign 0 to currentQuestion when start button is clicked, then display the current question on the page
  currentQuestion = 0;
  displayQuestion();

  //sets the time 
  time = question.length * 10;

  //execites function of counting down
  intervalID = setInterval(countdown, 1000);

  //displays the time as soon as start button is clicked
  displayTime();
}

//subtract by 1 and display new value, if time goes out the quiz ends
function countdown() {
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

//display time on left hand side
var timeDisplay = document.querySelector("#time");
function displayTime() {
  timeDisplay.textContent = time;
}

//display question and then the answer after the question is answered.

function displayQuestion() {
  var question = questions[currentQuestion];
  var options = question.options;

  var txtQuestionEl = document.querySelector("#questions-text");
  txtQuestionEl.textContent = question.questionText;

  for (let i = 0; i < options.length; i++) {
    var option = options[i];
    var optionButton = document.querySelector("#option" + i);
    optionButton.textContent = option;
  }
}

document.querySelector("#quiz-options").addEventListener("click", checkAnswer);
