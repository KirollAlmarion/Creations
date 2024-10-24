import React, {useState} from 'react';
import Carte from '../components/Carte';
import '../style/Editeur.css';

function Editeur() {
    const [rangActuel, setRangActuel] = useState(1);

    const changeRang = (nouveauRang) => {
        nouveauRang = Number(nouveauRang);        

        // let corps = { rang: nouveauRang };
        // fetch(`${def.SERVEUR}/cartes/getByRang`, {
        //     method: "POST",
        //     mode: "cors",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(corps)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         setCarteActuelle(data);
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         console.log("Erreur serveur", err);
        //     });
        setRangActuel(nouveauRang);
    };

    return (
        <div>
            <h1>Lords of Scotland</h1>
            <div className="presentoir">
                <Carte rang={rangActuel} />
                <input type="number" id="rang" name="rang" min="1" max="98" value={rangActuel} size="8" onChange={(event) => { changeRang(event.target.value); } }></input>
            </div>
        </div>
    );
}

export default Editeur