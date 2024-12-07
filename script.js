// Druckmenü automatisch öffnen
window.onload = () => window.print();

let string = "Geschenkidee;Heißgetränk;beim Skifahren;im Ferienhaus;auf der Piste;unter dem Weihnachtsbaum;im Schnee;Weihnachtsessen;Weihnachtslied;Weihnachtsfilm;weihnachtlich;gut zum Berg runterfahren;ist weiß;macht man im Winter;Weihnachts-märchenfigur;Weihnachtsdeko;Winterliches Tier;Wintergetränk;Backzutat;wenns kalt ist;mit der Familie;Urlaubsziel; im Weihnachts-kalender;Weihnachtsduft";
let ungemischteTeile = string.split(";");

function mischeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Zufälliger Index zwischen 0 und i
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Elemente tauschen
    }
    return arr;
}

let teile = mischeArray(ungemischteTeile);

document.getElementById("1spalte1").textContent = teile[0];
document.getElementById("1spalte2").textContent = teile[1];
document.getElementById("1spalte3").textContent = teile[2];
document.getElementById("1spalte4").textContent = teile[3];
document.getElementById("1spalte5").textContent = teile[4];
document.getElementById("1spalte6").textContent = teile[5];

document.getElementById("2spalte1").textContent = teile[6];
document.getElementById("2spalte2").textContent = teile[7];
document.getElementById("2spalte3").textContent = teile[8];
document.getElementById("2spalte4").textContent = teile[9];
document.getElementById("2spalte5").textContent = teile[10];
document.getElementById("2spalte6").textContent = teile[11];

document.getElementById("3spalte1").textContent = teile[12];
document.getElementById("3spalte2").textContent = teile[13];
document.getElementById("3spalte3").textContent = teile[14];
document.getElementById("3spalte4").textContent = teile[15];
document.getElementById("3spalte5").textContent = teile[16];
document.getElementById("3spalte6").textContent = teile[17];

document.getElementById("4spalte1").textContent = teile[18];
document.getElementById("4spalte2").textContent = teile[19];
document.getElementById("4spalte3").textContent = teile[20];
document.getElementById("4spalte4").textContent = teile[21];
document.getElementById("4spalte5").textContent = teile[22];
document.getElementById("4spalte6").textContent = teile[23];