const tds = document.querySelectorAll("td");
const n = document.getElementById("valeur");
const bouton = document.querySelector("input[value='Entrer']");
const bTables = document.querySelector("input[value='Toutes les tables']");
const res = document.querySelector("input[value='Reset']");
let x = 0;
bouton.addEventListener("click", function() {
    for (let i = 1; i <= 10; i++) {
        x = i * n.value;
        tds[n.value - 1].innerHTML += x + '<br></br>';
    }
});
bTables.addEventListener("click", function() {

    for (let j = 1; j <= 10; j++)
        for (let i = 1; i <= 10; i++) {
            x = i * j;
            tds[j - 1].innerHTML += x + '<br></br>';
        }
})
res.addEventListener("click", function() {
        for (let j = 1; j <= 10; j++)
            tds[j - 1].innerHTML = "";
    })
    /*function scale(i) {
        if (i < 10) {
            console.log(i * 3);
            return scale(i + 1);
        } else {
            return i;
        }
    }*/