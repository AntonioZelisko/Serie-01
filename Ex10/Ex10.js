const ms = document.getElementById("ms");
const sc = document.getElementById("sc");
const m = document.getElementById("min");
const h = document.getElementById("hr");
const start = document.querySelector("input[value='Start']");
const stoop = document.querySelector("input[value='Stop']");
const reset = document.querySelector("input[value='Reset']");
let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;
ms.innerHTML = msec + " ms";
sc.innerHTML = sec + " s : ";
m.innerHTML = min + " min : ";
h.innerHTML = hr + " h : ";
let dms = 0;
let dsc = 0;
let dmn = 0;
let dhr = 0;

function demarrer() {
    dms = setInterval(function() {
        msec++;
        ms.innerHTML = msec + " ms";
        if (msec > 99) {
            msec = 0;
        }
    }, 10);
    dsc = setInterval(function() {
        sec++;
        sc.innerHTML = sec + " s : ";
        if (sec > 59) {
            sec = 0;
        }
    }, 1000)
    dmn = setInterval(function() {
        min++;
        m.innerHTML = min + " min : ";
        if (min > 59) {
            min = 0;
        }
    }, 60000)
    dhr = setInterval(function() {
        hr++;
        h.innerHTML = hr + " h : ";
        if (hr > 23) {
            hr = 0;
        }
    }, 3600000);
}

function arreter() {
    clearInterval(dms);
    clearInterval(dsc);
    clearInterval(dmn);
    clearInterval(dhr);
}

function rZero() {
    clearInterval(dms);
    clearInterval(dsc);
    clearInterval(dmn);
    clearInterval(dhr);
    ms.innerHTML = 0 + " ms";
    sc.innerHTML = 0 + " s : ";
    m.innerHTML = 0 + " min : ";
    h.innerHTML = 0 + " h : ";
}
start.addEventListener("click", demarrer);
stoop.addEventListener("click", arreter);
reset.addEventListener("click", rZero);