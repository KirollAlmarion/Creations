"use strict";

let pageActuelle = document.URL;
let nomPage = pageActuelle.slice(0, -5);
const tranches = nomPage.split('-');
nomPage = tranches[tranches.length - 1];
let cadrePhoto = document.querySelector(".carrousel")
let emplacement = `inc/img/carrousel-${nomPage}/carrousel`;

let numero = 1;
cadrePhoto.style.backgroundImage = `url(${emplacement}${numero}.jpg)`;

function defile() {
    numero += 1;
    cadrePhoto.style.backgroundImage = `url(${emplacement}${numero}.jpg)`;
    console.log(numero);
    console.log(emplacement);
    console.log(`${emplacement}${numero}.jpg`);
    if (numero == 5) numero = 0;
}

let timer = window.setInterval('defile()', 2000);