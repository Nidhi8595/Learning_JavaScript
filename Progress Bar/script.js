var p = document.querySelector("#progress");
var h3 = document.querySelector("h3");

var count = 0;

var intr = setInterval(function () {
    if (count === 100) {
        h3.style.opacity = 1;
        clearInterval(intr);
    }
    count++;

    p.style.width = count + '%';
}, 100);