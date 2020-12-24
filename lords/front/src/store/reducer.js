import * as actionTypes from './actions'

const etatInitial={
    nbJoueurs: -1,
    joueurs: [],
    joueurCourant: -1
    };

const reducer = (etat = etatInitial, action) => {
    switch (action.type){
        case actionTypes.COMPTE_JOUEURS:
            return{
                ...etat,
                nbJoueurs: action.payload
            }
        case actionTypes.CREE_JOUEUR:
            return{
                ...etat,
                joueurs: [...etat.joueurs, action.payload]
            }
        case actionTypes.FIXE_JOUEUR_COURANT:
            return{
                ...etat,
                joueurCourant: action.payload
            }
        case actionTypes.FIXE_LISTE_JOUEURS:
            return{
                ...etat,
                joueurs: action.payload
            }
        default:
            return etat
    }
}

export default reducer