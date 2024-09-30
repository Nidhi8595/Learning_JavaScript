var from = document.querySelector("form");
var inps = document.querySelectorAll("input");

var h4 = document.querySelector("h4");

from.addEventListener("submit", function (ev) {
    ev.preventDefault();

    for (var i = 0; i, inps.length; i++) {
        if (inps[i].value === '') {
            h4.textContent = "Error! some fields are incomplete";
            h4.style.color = "red"

        }
    }
})