
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3 = document.querySelector("h3");

var inter; // declared outside since it is to be used in another block as well
start.addEventListener("click", function () {
    var count = 0;
    // (callback, timer(ms))
    inter = setInterval(function () {
        h3.textContent = count;
        count++;
    }, 1000);
})

stop.addEventListener("click", function () {
    clearInterval(inter)
})


