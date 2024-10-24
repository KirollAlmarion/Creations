import * as def from '../definitions';
import * as promesses from '../promesses';

//Action Types
export const COMPTE_JOUEURS = "COMPTE_JOUEURS"
export const CREE_JOUEUR = "CREE_JOUEUR"
export const FIXE_JOUEUR_COURANT = "FIXE_JOUEUR_COURANT"
export const FIXE_LISTE_JOUEURS = "FIXE_LISTE_JOUEURS"

//Action Creator

export const compteJoueurs = (nombre) =>{
    return{
        type: COMPTE_JOUEURS,
        payload: nombre
    }
}

export const asyncCompteJoueurs = ()=>{
    return dispatch => {
        fetch(`${def.SERVEUR}/joueurs/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            dispatch(compteJoueurs(data.length-1));
        })
        .catch(function (err) { console.log("Erreur serveur", err); });
    }
}

export const creeJoueur = (nouveauJoueur) =>{
    return{
        type: CREE_JOUEUR,
        payload: nouveauJoueur
    }
}

export const asyncCreeJoueur = (nouveauJoueur) =>{
    return dispatch =>{
        fetch(`${def.SERVEUR}/joueurs/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nouveauJoueur)
        })
            //.then(res => res.json())
            .then(reponse => {
                dispatch(creeJoueur(nouveauJoueur.nom));
            })
            .catch(err => console.log("Erreur serveur", err));
    }
}

export const fixeListeJoueurs = (liste) =>{
    return{
        type: FIXE_LISTE_JOUEURS,
        payload: liste
    }
}

export const asyncFixeListeJoueurs = (nouveauJoueur) =>{
    return dispatch =>{
        promesses.listeDesJoueurs()
			.then(joueurs => {
				dispatch(fixeListeJoueurs(joueurs));
			})
			.catch(erreur => console.log(erreur));
    }
}

export const fixeJoueurCourant = position =>{
    
    return{
        type: FIXE_JOUEUR_COURANT,
        payload: position
    }
}