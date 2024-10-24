'use strict';
let formulaire = document.querySelector("form");
let actus=[];
for (let i=0; i<2; i++){
        actus[i]={
        titre: document.getElementById(`titre${i}`),
        sousTitre: document.getElementById(`sous-titre${i}`),
        descriptif: document.getElementById(`descriptif${i}`)
    }
}

fetch('actu.json', {cache: 'no-store'})
    .then(response => response.json())
    .then(function(infos) {
        for (let i=0; i<2; i++){
            let clefs = Object.keys(actus[i]);
            for (let j=0; j<3; j++){
                if (j == 2){actus[i][clefs[j]].innerHTML=infos[i][clefs[j]]}
                else {
                        /*if (j==3){
                            let horaire = new Date(infos[i][clefs[j]]);
                            let horaireChaine = horaire.toJSON();
                            let dateChaine = horaireChaine.slice(0, 11);
                            let heure = horaire.getHours();
                            let minutes = horaire.getMinutes();
                            if (heure < 10){heure = '0' + heure.toString(10)}
                            dateChaine += heure;
                            dateChaine += ':';
                            if (minutes < 10){minutes = '0' + minutes.toString(10)}
                            dateChaine += minutes;
                            infos[i][clefs[j]] = dateChaine;
                        }*/
                        actus[i][clefs[j]].value=infos[i][clefs[j]]
                    }
            }
        }
    });

formulaire.addEventListener('submit', function(e){
    e.preventDefault();
    document.querySelector("img").src="mobile.gif";
    let infos = new FormData(this);
    for(let i=0; i<2;i++){
        actus[i].titre = infos.get(`titre${i}`);
        actus[i].sousTitre = infos.get(`sousTitre${i}`);
        actus[i].descriptif = infos.get(`descriptif${i}`);
        /*actus[i].date = new Date(infos.get(`date${i}`));*/
        infos.delete(`titres${i}`);
        infos.delete(`sousTitre${i}`);
        infos.delete(`descriptif${i}`);
        /*infos.delete(`date${i}`);*/
    }
    let texte, images;
    texte = fetch('actu.php', {
                                method: 'POST',
                                headers: {
                                            'Content-Type': 'application/json',
                                        },
                                body: JSON.stringify(actus),
                                })
    .then(response => response.json())
    .then(data => {
                    console.log('Success:', data);
                    return true;
                    })
    .catch(error => console.error('Error:', error));
    
    if ((infos.get('photo0').size) || (infos.get('photo1').size)){
        images = fetch('images.php', {
            method: 'POST',
            body: infos
        })
        .then(response => response.json())
        .then(result => {
                        console.log('Success:', result);
                        return true;
                        })
        .catch(error => console.error('Error:', error))
    }else{images=true}
    Promise.all([texte, images]).then( () => {
        document.querySelector("img").src="fixe.gif";
    });
});