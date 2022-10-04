var quizStart = document.querySelector("#start-btn")

quizStart.addEventListener("click", function() {
    setTime();
})

var timeEl = document.querySelector("#timer");

var secondsLeft = 80

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time remaining " + secondsLeft;

    }, 1000);
}


