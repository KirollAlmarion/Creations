'use strict';

let pageActuelle = document.URL;
let lien = document.getElementById('envoi');

lien.addEventListener('click', e =>{
    e.preventDefault();
    let avant="";
    let apres="";
    let sujet="";
    if (pageActuelle == "http://www.association-fortuna.com/legal.html"){
        avant = "info";
        apres = "deffeyes.com";
        sujet = "I have a question about your font";
        
    } else {
        avant = "association.fortuna";
        apres = "gmail.com";
        sujet = "Bonjour, je suis intéressé par vos prestations";
    }
    let tableau = [];
    for (let i=0;i<5;i++){tableau[i] = Math.trunc(26 * Math.random() + 97)}
    let verif = String.fromCodePoint(...tableau);
    let reponse = prompt(`Veuillez entrer la chaîne de caractères suivante: ${verif}`).toLowerCase();
    if (reponse == verif){let windowObjectReference = window.open(`mailto:${avant}@${apres}?Subject=${sujet}`, "_top")}
});