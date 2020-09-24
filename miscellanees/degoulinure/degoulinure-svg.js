'use strict';

let forme = document.querySelector("svg");
let points = [];
let controles = [];
let deltas = [];
let arg;
let hauteur = window.innerHeight;
let largeur = window.innerWidth;
let facteurEcran;
hauteur>largeur ? facteurEcran= hauteur / largeur : facteurEcran=1;
forme.attributes.viewBox.value=`0 0 100 ${facteurEcran * 100}`;
for (let i=0;i<11;i++){
    points[i]={
        x: i * 10,
        y: -20
        };
    controles[i]={
        x: i * 10 + 5,
        y: 50 * (i % 2 - .5) - 20
        };
    deltas[i]= Math.random() + i % 2;
}

let debut = null;
let valeur;
function coule(moment) {
    if (!debut) {debut = moment}
    let maintenant = moment - debut;
    for (let i=0;i<11;i++){
        points[i].y+= .4;
        controles[i].y+= .4 * deltas[i];
        }
    arg = `M -2 -20 V ${points[0].y}`;
    for (let i=0;i<10;i++){
        arg += ` Q ${controles[i].x} ${controles[i].y}, ${points[i+1].x} ${points[i+1].y}`;
    }
    arg += ` V -20 Z`;
    forme.children[1].attributes.d.value = arg;
    if (points[0].y<(facteurEcran * 300)){valeur=window.requestAnimationFrame(coule)}
}

valeur = window.requestAnimationFrame(coule);