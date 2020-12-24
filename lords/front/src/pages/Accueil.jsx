import React from 'react';
import { connect } from "react-redux"
import Entrance from '../components/Entrance.js';
import ListeDesJoueurs from '../components/ListeDesJoueurs.js';
import * as actions from "../store/actions.js"
import '../style/Accueil.css';

const Accueil = (props) => {
	return (
		<div>
			<h1>Lords of Scotland</h1>
			<div className="portail">
				<img src="../inc/matthieu.jpg" alt="Indigène bourru"/>
				{props.joueurCourant<1 && <Entrance/>}
				{props.joueurCourant>0 && <ListeDesJoueurs/>}

				<img src="../inc/boite.jpg" alt="Boîte du jeu"/>
			</div>
		</div>
	)
}


const mapStateToProps = (etat) =>{//envoie le state de redux dans les props
    return etat
}

const mapDispatchToProps = (dispatch) =>{
    return{
        //de type clef: "valeur"
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accueil)
//export default Accueil