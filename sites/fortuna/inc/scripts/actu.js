'use strict';
let actus=[];
for (let i=0; i<2; i++){
        actus[i]={
        titre: document.getElementById(`titre${i}`),
        sousTitre: document.getElementById(`sous-titre${i}`),
        descriptif: document.getElementById(`descriptif${i}`),
        date: document.getElementById(`date${i}`)
    }
}

fetch('inc/scripts/actu.json', {cache: "no-cache"})
    .then(response => response.json())
    .then(function(infos) {
        for (let i=0; i<2; i++){
            if (infos[i].titre != ""){
                let image=document.getElementById(`photo${i}`);
                image.src=`inc/img/actu/actu${i}.jpg`;
                image.alt="Bientôt par Fortuna";
                image.style.borderWidth='5px';
                let quand = new Date(infos[i].date);
                let options = {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"                    
                }
                actus[i].date.innerHTML = 'Le ' + new Intl.DateTimeFormat('default', options).format(quand);
                let clefs = Object.keys(actus[i]);
                for (let j=0; j<3; j++){
                    actus[i][clefs[j]].innerHTML=infos[i][clefs[j]]
                }
            }
        }
    });