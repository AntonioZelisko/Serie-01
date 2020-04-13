const corps = document.getElementsByTagName("body");
const image = document.getElementById("image");
const rouge = document.getElementById("rouge");
const bleu = document.getElementById("bleu");
const vert = document.getElementById("vert");
const jaune = document.getElementById("jaune");
const orange = document.getElementById("orange");
const violet = document.getElementById("violet");
const rose = document.getElementById("rose");
const blanc = document.getElementById("blanc");
const gris = document.getElementById("gris");
const noir = document.getElementById("noir");

image.addEventListener("click", function() { image.style.background = "none" });
rouge.addEventListener("click", function() { image.style.background = "red" });
bleu.addEventListener("click", function() { image.style.background = "blue" });
vert.addEventListener("click", function() { image.style.background = "green" });
jaune.addEventListener("click", function() { image.style.background = "yellow" });
orange.addEventListener("click", function() { image.style.background = "orange" });
violet.addEventListener("click", function() { image.style.background = "purple" });
rose.addEventListener("click", function() { image.style.background = "pink" });
blanc.addEventListener("click", function() { image.style.background = "white" });
gris.addEventListener("click", function() { image.style.background = "grey" });
noir.addEventListener("click", function() { image.style.background = "black" });

let x = 0;
let y = 0;

function mUp(obj) {
    if (b === true) {
        obj.style.left = 0;
        obj.style.top = 0;

    }
}

function mDown(obj) {
    document.addEventListener("click", function(e) {
        x = e.x;

        obj.style.left = x + "px";


    })
}