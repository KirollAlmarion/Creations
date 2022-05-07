'use strict';

let icones = [];
let id;

let nav = document.querySelector('nav');
let lien = document.querySelector('a');

function lister(premier, dernier){
	for (let i = premier; i <= dernier; i++) {
		icones[i]= document.createElement('p');
		icones[i].innerText= String.fromCodePoint(i);
		nav.appendChild(icones[i]);
	}
}

lister(127744, 127776);
lister(127789, 127891);
lister(127904, 127955);
lister(128000, 128174);
lister(128286, 128302);
lister(128506, 128591);
lister(129292, 129504);

function AfficheEmote(e){
	icones.every(function (item, indice){
		if (item == e.target){
            lien.innerText=String.fromCodePoint(indice);
            lien.href="emopick.html?id=" + indice;
            return false;
        }
        else
        {
        	return true;
        }
	});
}

document.onmouseover = (e)=> AfficheEmote(e);
document.onclick = (e)=> AfficheEmote(e);