let y = 0;
let x = 0;
let p = 50;
const cr = document.getElementById("carreRouge");
const h = document.getElementById("haut");
const d = document.getElementById("droite");
const b = document.getElementById("bas");
const g = document.getElementById("gauche");
h.addEventListener('click', function () {
    y -= p;
    cr.style.top = y + "px";
});
d.addEventListener('click', function () {
    x += p;
    cr.style.left = x + "px";
});
b.addEventListener('click', function () {
    y += p;
    cr.style.top = y + "px";
});
g.addEventListener('click', function () {
    x -= p;
    cr.style.left = x + "px";
});