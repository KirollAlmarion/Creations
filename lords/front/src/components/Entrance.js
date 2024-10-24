import React, {useState} from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions.js";
import * as promesses from '../promesses';
import styles from "../style/Entrance.css";

const Entrance = (props) => {
	const [nomJoueur, setnomJoueur] = useState("");
	const [lancement, setLancement] = useState(true);
	let intervalID;

	function maj(){
		props.actualiseJoueurs();
		console.log("MAJ");		
		console.log("ID " + intervalID);		
	}

	function stopMaj(){
		clearInterval(intervalID);
		console.log("ID " + intervalID);
	}

	if (lancement){
		 intervalID = setInterval(maj, 2000);
		 console.log("ID " + intervalID);
		setLancement(false);
		console.log("Au démarrage seulement");
	}

	console.log(lancement);
	console.log("ID " + intervalID);
	console.log(props.joueurs);
	
	const valideNom = (nomAValider) =>{
		let pris;
			do {
				pris = props.joueurs.filter(joueur => joueur === nomAValider);
				if (pris.length>0){
					nomAValider = `Mac${nomAValider}`
				}
			} while (pris.length>0);
		return nomAValider;
	}

    const changeNom = (nouveauNom) => {
		setnomJoueur(nouveauNom);
	}

    const onSubmitHandler = (event) => {
		event.preventDefault();
		stopMaj();
		let nouveauNom = valideNom(nomJoueur);
		promesses.listeDesJoueurs()
			.then(joueurs => {
				props.fixeJoueurCourant(joueurs.length+1);
				props.creeJoueur({
					nom: nouveauNom
					});
			})
			.catch(erreur => console.log(erreur));
    }

	return (
		<fieldset>
		<form onSubmit={(event) => {onSubmitHandler(event)}}>
					<label htmlFor="nom">Votre patronyme</label>
					<input type="text" id="nom" value={nomJoueur} onChange={(event)=>{changeNom(event.target.value)}}/>
					<button disabled={(props.joueurs.length>4)}>Entrer</button>
		</form>
		</fieldset>
	)
}


const mapStateToProps = (etat) =>{//envoie le state de redux dans les props
    return etat
}

const mapDispatchToProps = (dispatch) =>{
    return{
		//de type clef: "valeur"
		compteJoueurs: nbJoueurs => dispatch(actions.compteJoueurs()),
		actualiseJoueurs: bof => dispatch(actions.asyncFixeListeJoueurs()),
		creeJoueur: nouveauJoueur => dispatch(actions.asyncCreeJoueur(nouveauJoueur)),
		fixeJoueurCourant: position => dispatch(actions.fixeJoueurCourant(position))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entrance)
//export default Entrance