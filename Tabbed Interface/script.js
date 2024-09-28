const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

const hometext = document.querySelector("#hometext");
const abouttext = document.querySelector("#abouttext");
const contacttext = document.querySelector("#contacttext");

function showSection(section) {
    // Hide all section texts
    hometext.style.display = "none";
    abouttext.style.display = "none";
    contacttext.style.display = "none";

    // Show the selected section
    section.style.display = "block";
    section.style.width = "70%";
}


home.addEventListener("click", function () {
    showSection(hometext);
});

about.addEventListener("click", function () {
    showSection(abouttext);
});

contact.addEventListener("click", function () {
    showSection(contacttext);
});