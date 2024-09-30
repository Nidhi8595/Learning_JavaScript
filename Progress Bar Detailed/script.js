var p = document.querySelector("#progress");
var h3 = document.querySelector("h3");
var percentageText = document.querySelector("#percentage");

var count = 0;

var intr = setInterval(function () {
    if (count === 99) {
        h3.style.opacity = 1;
        clearInterval(intr);
    }
    count++;

    p.style.width = count + '%';
    percentageText.textContent = count + '%';
}, 100);