import React, {useState} from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions.js";
import * as promesses from '../promesses';

const ListeDesJoueurs = (props) =>{
    const [tousLesJoueurs, setTousLesJoueurs] = useState([]);
    // let listeJoueurs = promesses.listeDesJoueurs()
    //     .then(liste => setTousLesJoueurs(liste))
    //     .catch(erreur => erreur);

    if (tousLesJoueurs.length===0){
        promesses.listeDesJoueurs()
        .then(liste => {
            setTousLesJoueurs(liste);
        })
        .catch(erreur => erreur);
    }

    return (
        <ul>
            {tousLesJoueurs.map((joueur, index) => <li key={index}>{joueur}</li>)}
        </ul>
    )
}

const mapStateToProps = (etat) =>{//envoie le state de redux dans les props
    return etat
}

const mapDispatchToProps = (dispatch) =>{
    return{
		//de type clef: "valeur"
		compteJoueurs: nbJoueurs => dispatch(actions.asyncCompteJoueurs()),
		creeJoueur: nouveauJoueur => dispatch(actions.asyncCreeJoueur(nouveauJoueur)),
		fixeJoueurCourant: position => dispatch(actions.fixeJoueurCourant(position))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListeDesJoueurs)
//export default ListeDesJoueurs