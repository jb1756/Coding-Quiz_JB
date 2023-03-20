// name variables

var containerStartEL= document.getElementById("intro-container");
var containerQuestionEl = document.getElementById("question-container");
var containerEndEl= document.getElementById("ending-container");
var containerScoreEl= document.getElementById("score-banner");
var formInitals = document.getElementById("initial-form");
var containerHighScore = document.getElementById("high-score-container");

//high scores
var ViewHighScoreEl = document.getElementById("viewhighscore");
var listHighScoreEl = document.getElementById("high-score-list");

//signals of wrong and write

var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

// buttons 
var btnStartEl = document.getElementById("Start-game");
var btnBackEl = document.getElementById("back-up");
var btnClearScoreEl = document.getElementById("clear-high-scores");

//Questions and Answers list
var questionEl = document.getElementById("questions");
var answerrButtonsEl = documents.getElementById("answer-buttons");
var timerEl = documents.getElementById("timer");
var score = 0;
var timeleft;
var gameover timerEl.innerText = 0;

// List of Scores
var HighScores = [];

//assign questions

var arrayShuffledQuestions;
var QuestionIndex = 0;


//list of questions

var questions = [
    { q: 'Arrays in Javascript can be used to store __________.', 
      a: '4. all of the above', 
      choices: [{choice: '1. numbers'}, {choice: '2. booleans'}, {choice: '3. strings'}, {choice: '4. all of the above'}]
    },
    { q: 'Inside which HTML element do we put the javascript?', 
      a: '3. <script>', 
      choices: [{choice: '1. <h1>'}, {choice: '2. <js>'}, {choice: '3. <script>'}, {choice: '4. <head>'}]
    },
    { q: 'In the code -- setinterval(time(),1000) -- what is time()?', 
      a: '1. callback function', 
      choices: [{choice: '1. callback function'}, {choice: '2. undefined'}, {choice: '3. variable'}, {choice: '4. all of the above'}]
    },
    { q: 'What syntax would call a function?', 
      a: '4. function()', 
      choices: [{choice: '1. var function'}, {choice: '2. function'}, {choice: '3. call function'}, {choice: '4. function()'}]
    }
  ];




