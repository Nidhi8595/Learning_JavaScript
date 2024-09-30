var text = document.querySelector("textarea");
var count = document.querySelector("#counter");


text.addEventListener("input", function () {
    count.textContent = text.value.length;
})