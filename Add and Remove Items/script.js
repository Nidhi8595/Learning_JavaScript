var add = document.querySelector("#first");
var rem = document.querySelector("#second");

var inp = document.querySelector("input");

var li; // global scope
var ul = document.querySelector("ul");

add.addEventListener("click", function () {
    if (inp.value.trim() === '') { }

    else {
        li = document.createElement('li');
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = ''; // removing after adding into list

    }
})

rem.addEventListener("click", function () {
ul.removeChild(li);
})