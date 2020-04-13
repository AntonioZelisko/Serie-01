let revenu = 0.18;
const assurance = 0.07;
const pensionCanada = 0.05;
const supp = 100;
const allocs = 150;

const sBrut = document.getElementById("sBrut");
const sup = document.getElementById("sup");
const alloc = document.getElementById("alloc");
const homme = document.getElementById("man");
const femme = document.getElementById("woman");
const nEnfants = document.getElementById("nEnfants");
const sNet = document.getElementById("sNet");
const bouton = document.getElementById("bouton");

function test() {
    if (femme.checked) {
        revenu = revenu - .02;
    }
    if (nEnfants.value > 4) {
        revenu -= .02
    }
    if (nEnfants.value === 3) {
        revenu -= .01;
    }
    if (nEnfants.value === 4) {
        revenu -= .02
    }
    let total = sBrut.value - sBrut.value * (revenu + assurance + pensionCanada);
    if (sup.checked) {
        total += supp
    }
    if (alloc.checked) {
        total += allocs
    }
    sNet.innerHTML = total
}
bouton.addEventListener("click", test);