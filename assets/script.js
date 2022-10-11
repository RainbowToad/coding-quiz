var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDiv = document.getElementById("scoreContainer");
var scoreText = document.getElementById("scoreResult");


//Create questions as arrays
var questions = [
    {
        question : "What is the correct documentation for a function in Javascript?",
        choiceA : "1. function()",
        choiceB : "2. function[]",
        choiceC : "3. function{}",
        choiceD : "4. What's a function?",
        correct : "A"
    }, {
        question : "When selecting a class in CSS you use what syntax?",
        choiceA : "1. #class",
        choiceB : "2. .class",
        choiceC : "3. !class",
        choiceD : "4. What's a class?",
        correct : "B"
    }, {
        question : "The end of every Javascript phrase should end with a(n)?",
        choiceA : "1. What is Javascript?",
        choiceB : "2. exclamation point",
        choiceC : "3. pound sign",
        choiceD : "4. semicolon",
        correct : "D"
    }
];

//Render questions with function
var lastQuestion = questions.length - 1;
var runningQuestion = 0;

function renderQuestion(){
    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    
}


var quizStart = document.querySelector("#start-btn")
var btn = document.getElementById("start-btn");
var timeEl = document.querySelector("#timer");
var secondsLeft = 80

// Start quiz and timer with click

quizStart.addEventListener("click", function() {
    setTime();
    btn.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
})

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time remaining " + secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Function to progress if write or wrong
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        answerIsCorrect();
        
    }else{
        answerIsWrong();
        
    }
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end quiz and display final page
        quiz.style.display = "none";
        scoreDiv.style.display = "block";
        scoreText.style.display = "block";
        displayScore();
    }
    
 
}

// Create variables and functions to show user when they are correct and set timeout for it to clear
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");



function clearAnswer() {
    correct.style.display = "none";
    incorrect.style.display = "none";
}

function answerIsCorrect() {
    correct.style.display = "block";
    setTimeout(clearAnswer, 2000);
}

function answerIsWrong() {
    incorrect.style.display = "block"
    setTimeout(clearAnswer, 2000);
    secondsLeft = secondsLeft - 10;

}

// Display score and set ot local storage
function displayScore() {
    document.getElementById("scoreResult").innerHTML = "Your Score " + secondsLeft;
    localStorage.setItem("score", secondsLeft)
}

// Store input name to local storage
function submit(){
    var userName = document.getElementById("uName");
    localStorage.setItem("name", userName);
    console.log(userName);
}

var subBtn = getElementById("scoreContainer");
subBtn.addEventListener("click", submit);

var output = document.getElementById("list");

function setScore() {
    output.innerHTML = localStorage.getItem("score");
}
console.log(localStorage.getItem("score"));
setScore();



