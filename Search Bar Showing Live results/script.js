var inp = document.querySelector("input");

var data = [
    {
        name: "Alice",
        src: "img1.avif"
    },

    {
        name: "Elena",
        src: "img2.avif"
    },

    {
        name: "Josie",
        src: "img3.avif"
    },

    {
        name: "Lizzie",
        src: "img4.avif"
    },

    {
        name: "Josephine",
        src: "img5.avif"
    },

    {
        name: "Liz",
        src: "img6.avif"
    },

    {
        name: "Alizeh",
        src: "img7.avif"
    },

    {
        name: "Lizabeth",
        src: "img8.avif"
    },

    {
        name: "Elsa",
        src: "img9.avif"
    },

    {
        name: "Joe",
        src: "img10.avif"
    },

    {
        name: "Alex",
        src: "img11.avif"
    }

]

// can be made visible by default or not

var pers = ""; // to avoid undefined

data.forEach(function (elem) {
    pers += `<div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="">
                </div>

                <h3>${elem.name}</h3>
            </div>`;
})

document.querySelector(".people").innerHTML = pers;


// live results

inp.addEventListener("input", function () {
    var match = data.filter(function (e) {

        return e.name.startsWith(inp.value);
    })


    var newUsers = "";
    match.forEach(function (elem) {
        newUsers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
    
                    <h3>${elem.name}</h3>
                </div>`;
    })

    document.querySelector(".people").innerHTML = newUsers;

})