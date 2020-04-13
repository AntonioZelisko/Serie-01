const tab = [-2, 1, 4];
const n = 2;
const textOne = document.getElementById("vOne");
const textTwo = document.getElementById("vTwo");
const bouton = document.querySelector("input");

function additionne(z) {
    let x = 0;
    for (let i = 0; i < tab.length; i++) {
        x = tab[i] + n
    }
    if (z == 0) {
        return x = tab[0] + n
    }
    return x
}

function affiche() {
    textOne.innerHTML = additionne(0);
    textTwo.innerHTML = additionne(1)
}
bouton.addEventListener("click", affiche);
console.log(additionne(0));