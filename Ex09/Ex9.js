let jTab = ["Dimanche ", "Lundi ", "Mardi ", "Mercredi ", "Jeudi ", "Vendredi ", "Samedi "];
const bouton = document.querySelector("input");
const jour = document.getElementById("jourJ");
bouton.addEventListener("click", function() {
    let date = new Date();
    console.log(date.getDay());
    jour.innerHTML = jTab[date.getDay()];
});