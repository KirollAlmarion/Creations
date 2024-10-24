import React from 'react';
import * as definitions from '../definitions';
import styles from "../style/Carte.css";

const Carte = (props, {actif=10}) => {
    if (actif === 10){actif=definitions.PAQUET[props.rang].clan}
    
    return (
        <div className="fond">
            <img className="photo" src={`../inc/${definitions.CLANS[definitions.PAQUET[props.rang].clan].nom.toLowerCase()}.png`}
                alt={definitions.CLANS[definitions.PAQUET[props.rang].clan].nom}
                title={definitions.CLANS[definitions.PAQUET[props.rang].clan].pouvoir}
            />
            <div className="force" style={{backgroundColor: definitions.CLANS[actif].couleur}} title={definitions.CLANS[actif].pouvoir}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 154" alt="Force">
	            <text x="50" y="45%" fontSize="70" textAnchor="middle" fill={actif === 0? "black": "white"}>{definitions.PAQUET[props.rang].force}</text>
            </svg>
            </div>
            <div className="armes" style={{backgroundColor: definitions.CLANS[definitions.PAQUET[props.rang].clan].couleur}}></div>
            <img className="blason" alt="Blason" src={`../inc/${definitions.CLANS[definitions.PAQUET[props.rang].clan].nom.toLowerCase()}.svg`}/>
            <svg className="rang" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" stroke="none" fill={definitions.CLANS[definitions.PAQUET[props.rang].clan].couleur}/>
	            <text x="50" y="72" fontSize="70" textAnchor="middle" fill="white">{props.rang}</text>
            </svg>
        </div>
        
    )
}

export default Carte