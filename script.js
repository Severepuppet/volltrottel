// Druckmenü automatisch öffnen


let stringWeihnachten = "Geschenkidee;Heißgetränk;beim Skifahren;im Ferienhaus;auf der Piste;unter dem Weihnachtsbaum;im Schnee;Weihnachtsessen;Weihnachtslied;Weihnachtsfilm;weihnachtlich;gut zum Berg runterfahren;ist weiß;macht man im Winter;Weihnachts-märchenfigur;Weihnachtsdeko;Winterliches Tier;Wintergetränk;Backzutat;wenns kalt ist;mit der Familie;Urlaubsziel; im Weihnachts-kalender;Weihnachtsduft";
let stringClassic = "Farbe;Tier;kann man essen;braucht Jeder;Gewässer;dreht sich;Beruf;Männername;Grund zur Freude;kann sich öffnen;Pflanze;Obst;Eissorte;Gewürz;Frauenname;Sänger;Film;Politiker;Promi;Sportart;braucht Niemand;Unwort;Serie;Hobby";
let teile;
let input;
let stringAlles = stringWeihnachten +";"+ stringClassic;

function getInputValue(){
    input = document.getElementById("input").value;
    localStorage.setItem("LetzteURL",input);

    const url = new URL(window.location.href);
    url.searchParams.set("UserInput", input); // Parameter zur URL hinzufügen
    window.history.pushState({}, "", url); // URL ohne Neuladen aktualisieren

    teile = input.split(";");
    document.getElementById("input").value = "";
    aktualisieren();

}

Urlabrufen();

function Urlabrufen(){
    const urlParams = new URLSearchParams(window.location.search);
    input = urlParams.get('UserInput');
    teile = input.split(";");
    
    aktualisieren();
}

function weihnachten(){
    teile = stringWeihnachten.split(";");
    aktualisieren();
}

function classic(){
    teile = stringClassic.split(";");
    aktualisieren();
}

function Alles(){
    teile = stringAlles.split(";");
    aktualisieren(); 
    teile = mischeArray(teile);
    aktualisieren();

}

function letztes(){
   teile = localStorage.getItem("LetzteURL").split(";");
   aktualisieren();
}

function Farbe(){
    let selected = document.querySelector('input[name="farbe"]:checked');
    if (selected) {
        let color = selected.value; // Den Wert (Farbe) holen
        document.querySelectorAll(".orange").forEach(element => {
            if(color == "blue"){element.style.background = "#0D98BA";}
            if(color == "green"){element.style.background = "#63A355";}
            if(color == "red"){element.style.background = "#ff4040";}
            if (color == "pink") {element.style.background = "#FF69B4"}
            if (color == "gray") {element.style.background = "#8e8e8e";}
          });
      }
}

function mischeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Zufälliger Index zwischen 0 und i
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Elemente tauschen
    }
    return arr;
}

function startSeite() {
    const cleanURL = window.location.origin + window.location.pathname;
  window.history.pushState({}, document.title, cleanURL);
  location.reload();
}

function aktualisieren(){
document.getElementById("blatt").style.display = "flex";
document.getElementById("auswahl").style.display = "none"
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
Farbe();
/*
document.querySelectorAll(".orange").forEach(element => {
    element.style.background = "lightblue"; // Ändert die Schriftfarbe auf Blau
  });
window.print();*/
}



