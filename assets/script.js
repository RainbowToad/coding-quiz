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
        question : "What is my name?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    }, {
        question : "Why are things this way?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    }, {
        question : "Who literally let the dogs out?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
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
var secondsLeft = 40

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

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        answerIsCorrect();
        console.log("Correct")
        
    }else{
        answerIsWrong();
        console.log("wrong")
        secondsLeft = secondsLeft - 10;
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
    
    // subtract 10 seconds from timer
    incorrect.style.display = "block"
    setTimeout(clearAnswer, 2000);

}

// Display score
function displayScore() {
    document.getElementById("scoreResult").innerHTML = secondsLeft;
    localStorage.setItem("score", secondsLeft)
}

var userName = document.querySelector("#uName").value

localStorage.setItem ("name", userName);
console.log(userName);


