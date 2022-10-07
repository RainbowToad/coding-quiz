var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDiv = document.getElementById("scoreContainer");
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
        console.log("Correct")
        
    }else{
        //answer is wrong
        //change background red
        answerIsWrong();
        console.log("wrong")
    }
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end quiz and display final page
        quiz.style.display = "none";
        scoreDiv.style.display = "block";
    }
 
}

var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");

var timeOut = setTimeout(clearAnswer, 5000);

function clearAnswer() {
    correct.style.display = "none";
}

function answerIsCorrect() {
    correct.style.display = "block";
    clearAnswer
}

function answerIsWrong() {
    
    // subtract 10 seconds from timer
    incorrect.style.display = "block"

}




