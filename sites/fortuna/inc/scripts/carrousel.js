"use strict";

let pageActuelle = document.URL;
let nomPage = pageActuelle.slice(0, -5);
const tranches = nomPage.split('-');
nomPage = tranches[tranches.length - 1];
let petitEcran = window.matchMedia('(max-width: 575px)');
let micro="";
if (petitEcran.matches){micro="-micro"}
let cadrePhoto = document.querySelector(".carrousel");
let max = 7;
switch (nomPage){
	case 'med': max = 10; break;
	case 'grd': max = 9; break;
    case 'lumieres': max = 7; break;
    case 'autres': max = 11; break;
    case 'scene': max = 9; break;
}

function testEcran(e){
    if (e.matches){micro="-micro"}
    else{micro=""}
}

let emplacement = `inc/img/carrousel-${nomPage}/carrousel`;
let numero = 1;
cadrePhoto.src = `${emplacement}${micro}${numero}.jpg`;

let debut = null;
let valeur;
function defile(moment) {
    if (!debut) {debut = moment}
    let maintenant = moment - debut;
    if (maintenant > 2000){
        numero += 1;
        cadrePhoto.src = `${emplacement}${micro}${numero}.jpg`;
        console.log(numero);
        console.log(emplacement);
        console.log(`${emplacement}${micro}${numero}.jpg`);
        debut = null;
    }
    if (numero == max) numero = 0;
    valeur=window.requestAnimationFrame(defile);
}

petitEcran.addEventListener("change", testEcran);
valeur = window.requestAnimationFrame(defile);