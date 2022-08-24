var text = document.querySelector("#txt");
var textValue = text.textContent;
var textStr = textValue.split("");
var input = document.querySelector("textarea");

text.innerHTML = "";
for (var i = 0; i < textStr.length; i++) {
    text.innerHTML += "<span>" + textStr[i] + "</span>";
}

input.addEventListener("keypress", logKey);

var eff = document.querySelector("#eff");
var wpm = document.querySelector("#wpm");


var count = 1;

let j = 0;
function logKey(e) {
    var span = text.querySelectorAll("span")[j];
    spanTxt = span.innerText;
    var counts = Math.floor((100 / textStr.length) * count);
    if (textStr[j] == e.key) {
        span.classList.add("correct");  
        eff.innerHTML = "Efficiency :" + counts + "%";
        count++;
    } else {
        span.classList.add("incorrect");
        count--;
        eff.innerHTML = "Efficiency :" + counts + "%";
    }
    j++

    if (eff.innerHTML < 20) {
        alert("Game Over Efficiency is " + counts);
    }
}
document.addEventListener("keydown", (e) => {
    if (e.which == 8) {
        alert('You can not undo your error');
    } else if (e.which == 13) {
        alert('There is no new line!');
    }
})