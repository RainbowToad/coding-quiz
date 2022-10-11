var output = document.getElementById("list");

function setScore() {
    output.innerHTML = localStorage.getItem("score");
}
setScore();