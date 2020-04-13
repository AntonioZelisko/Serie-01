let rng = document.getElementById("search");
let result = document.getElementById("resultat");
let bouton = document.getElementById("bouton");

function nAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let nan = nAleatoire(0, 10);
console.log(nan);

let n = 0;

function trouver() {
    let en = " en ";
    let fois = " fois";

    if (rng.value > nan) {
        let bas = "Plus bas";
        result.innerHTML = bas;
        n++
    }
    if (rng.value < nan) {
        let haut = "Plus haut";
        result.innerHTML = haut;
        n++
    }
    if (rng.value == nan) {
        let trouve = "Trouvé";
        n++
        result.innerHTML = trouve + en + n + fois;
    }
}
bouton.addEventListener("click", trouver)
console.log(result);