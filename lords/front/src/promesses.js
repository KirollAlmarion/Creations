import * as def from './definitions';

export const listeDesJoueurs = () =>{//renvoie le tableau contentant le nom des joueurs
    return new Promise( (resolve, reject) =>{
        fetch(`${def.SERVEUR}/joueurs/`, {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            data.shift();
            resolve(data);
        })
        .catch(function (err) { reject("Erreur joueurs", err); });
    });
}