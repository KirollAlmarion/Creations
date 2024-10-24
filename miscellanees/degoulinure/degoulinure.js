'use strict';

let forme = document.querySelector("main");
let points = [];
let controles = [];
let deltas = [];
let arg;
let hauteur = window.innerHeight;
var largeur = window.innerWidth;
for (let i=0;i<11;i++){
    points[i]={
        x: i * 0.1 * largeur,
        y: -200
        };
    controles[i]={
        x: (i * 0.1 + .05) * largeur,
        y: (hauteur / 2) * (i % 2 - .5) -200
        };
    deltas[i]=Math.random() + i % 2;
}

let debut = null;
let valeur;
function coule(moment) {
    if (!debut) {debut = moment}
    let maintenant = moment - debut;
    for (let i=0;i<11;i++){
        points[i].y+= Math.floor(maintenant / 500);
        controles[i].y+= Math.floor((maintenant / 500) * deltas[i]);
        }
    arg = `M 0 0 V ${points[0].y}`;
    for (let i=0;i<10;i++){
        arg += ` Q ${controles[i].x} ${controles[i].y}, ${points[i+1].x} ${points[i+1].y}`;
    }
    arg += ` V 0 Z`;
    forme.style.clipPath=`path("${arg}")`;
    if (maintenant<10000){valeur=window.requestAnimationFrame(coule)}
}

valeur = window.requestAnimationFrame(coule);