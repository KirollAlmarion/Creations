const mongoose = require("mongoose");

module.exports = (app) => {
    const Carte = app.modeles.Carte;

    function getAll(req, res){
        let liste;
        Carte.find({}, function (err, docs) {
            if (err){ liste = err} else{liste = docs};
            res.send(liste);
        });
    };

    function create(req, res){
        let newCarte = new Carte({
            clan: req.body.clan,
            force: req.body.force,
            rang: req.body.rang,
        });
        newCarte.save();
        res.send(`Nouvelle carte "${newCarte.clan}" créée.`);
    };

    function getById(req, res){
        let requete = req.body.id;
        Carte.findById(requete, function (err, resultat) {
            if (err){res.send(`Carte non trouvée`)} else{res.send(`La carte demandée s'appelle "${resultat.carte}."`)};
        });
    };

    function getByRang(req, res){
        let requete = req.body.rang;
        Carte.findOne({rang: requete}, function (err, resultat) {
            if (err){res.send(`Carte non trouvée`)} else{res.send(resultat)};
        });
    };

    function update(req, res){
        let requete = req.body;
        Carte.findByIdAndUpdate(requete.id, { clan: requete.clan, force: requete.force, rang: requete.rang }, {new:true}, function(err,resultat){
            if (err){res.send(err)} else{res.send(`La tag est maintenant "${resultat}".`)};
        });        
    }

    function remove(req, res){
        let requete = req.body.id;        
        Carte.findByIdAndDelete(requete, function(err, doc){
            if(err){res.send(err)}else if(doc){
                res.send(`La carte "${doc.clan}" a bien été effacé.`)
            } else{
                res.send(`Cette carte n'existe pas.`)
            }
        });
    }

    return {getAll, create, getById, getByRang, update, remove};
};