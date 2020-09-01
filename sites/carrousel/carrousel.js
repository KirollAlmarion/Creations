"use strict";

let petitEcran = window.matchMedia('(max-width: 575px)');
let micro="";
if (petitEcran.matches){micro="-micro"}
let cadrePhoto = document.querySelector(".carrousel");
let max = 7;

function testEcran(e){
    if (e.matches){micro="-micro"}
    else{micro=""}
}

let numero = 1;
cadrePhoto.src = `carrousel${micro}${numero}.jpg`;

let debut = null;
let valeur;
function defile(moment) {
    if (!debut) {debut = moment}
    let maintenant = moment - debut;
    if (maintenant > 2000){
        numero += 1;
        cadrePhoto.src = `carrousel${micro}${numero}.jpg`;
        console.log(numero);
        console.log(`carrousel${micro}${numero}.jpg`);
        debut = null;
    }
    if (numero == max) numero = 0;
    valeur=window.requestAnimationFrame(defile);
}

petitEcran.addListener(testEcran);
valeur = window.requestAnimationFrame(defile);