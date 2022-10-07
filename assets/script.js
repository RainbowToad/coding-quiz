var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

//Create questions
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

//Render questions
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

quizStart.addEventListener("click", function() {
    setTime();
    btn.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
})

var timeEl = document.querySelector("#timer");

var secondsLeft = 80

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time remaining " + secondsLeft;

    }, 1000);
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        //answer is correct
        //change background green
        answerIsCorrect();
    }else{
        //answer is wrong
        //change background red
        answerIsWrong();
    }
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    
}
function answerIsCorrect() {
    //document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
    console.log("Correct");
}

function answerIsWrong() {
    //document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    console.log("wrong");
}

