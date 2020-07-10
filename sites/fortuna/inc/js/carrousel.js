"use strict";

let pageActuelle = document.URL;
let nomPage = pageActuelle.slice(0, -5);
const tranches = nomPage.split('-');
nomPage = tranches[tranches.length - 1];
let cadrePhoto = document.querySelector(".carrousel")
let emplacement = `inc/img/carrousel-${nomPage}/carrousel`;
let max = 7;
switch (nomPage){
	case 'med': max = 10; break;
	case 'grd': max = 9; break;
    case 'lumieres': max = 7; break;
    case 'autres': max = 11; break;
    case 'scene': max = 7; break;
}

let numero = 1;
cadrePhoto.src = `${emplacement}${numero}.jpg`;

function defile() {
    numero += 1;
    cadrePhoto.src = `${emplacement}${numero}.jpg`;
    console.log(numero);
    console.log(emplacement);
    console.log(`${emplacement}${numero}.jpg`);
    if (numero == max) numero = 0;
}

let timer = window.setInterval('defile()', 2000);