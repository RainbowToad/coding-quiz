var output = document.getElementById("list");

function setScore() {
    output.innerHTML = localStorage.getItem("name")  + localStorage.getItem("score");
}
setScore();