const n1 = document.getElementById("nOne");
    const n2 = document.getElementById("nTwo");
    const b = document.getElementById("bouton");
    b.addEventListener("click", function () {
      let r = parseFloat(n1.value) + parseFloat(n2.value);
      alert(r);
    })