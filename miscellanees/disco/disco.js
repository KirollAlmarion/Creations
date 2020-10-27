'use strict';

let hauteur = window.innerHeight;
let largeur = window.innerWidth;
let colonnes = 12;
let lignes = Math.ceil(10 * hauteur / largeur);
let intervalle = 1000;
let tableau = [];

for (let i=0;i<colonnes;i++){
    tableau[i] = [];
    for (let j=0;j<lignes;j++){
        tableau[i][j] = document.createElement('div');
        tableau[i][j].style.height = `10vw`;
        tableau[i][j].style.width = `10vw`;
        tableau[i][j].style.left = `${i*10}vw`;
        tableau[i][j].style.top = `${j*10}vw`;
        document.querySelector('body').appendChild(tableau[i][j]);
    }
}

let debut = null;
let valeur;
function clignote(moment) {
    if (!debut) {debut = moment}
    let maintenant = moment - debut;
    if (maintenant > intervalle){
        for (let i=0;i<colonnes;i++){
            for (let j=0;j<lignes;j++){
                let couleur = Math.floor(Math.random() * 2 ** 24);
                couleur = couleur.toString(16);
                tableau[i][j].style.backgroundColor = `#${couleur}`;
                let actuel = tableau[i][j].style.left;
                actuel = parseInt(actuel, 10);
                if (actuel > -10){
                    tableau[i][j].style.visibility = "visible";
                    tableau[i][j].style.left = `${actuel - 10}vw`;
                    
                } else {
                    tableau[i][j].style.visibility = "hidden";
                    tableau[i][j].style.left = '100vw';
                }
                
            }
        }
        debut = null;
    }
    
    valeur=window.requestAnimationFrame(clignote);
}

valeur = window.requestAnimationFrame(clignote);