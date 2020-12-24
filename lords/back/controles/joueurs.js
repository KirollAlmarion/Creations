const mongoose = require("mongoose");
let joueurs = ["Aucun"];

module.exports = (app) => {
    const Joueur = app.modeles.Joueur;

    function getAll(req, res){
        res.send(joueurs);
        // let liste;
        // Joueur.find({}, function (err, docs) {
        //     if (err){ liste = err} else{liste = docs};
        //     res.send(liste);
        // });
    };

    function create(req, res){
        // let newJoueur = new Joueur({
        //     numero: req.body.numero,
        //     nom: req.body.nom,
        // });
        // newJoueur.save();
        joueurs.push(req.body.nom);
        res.send(`Nouveau joueur "${req.body.nom}" créé.`);
    };

    function getById(req, res){
        let requete = req.body.id;
        Joueur.findById(requete, function (err, resultat) {
            if (err){res.send(`Joueur non trouvé`)} else{res.send(`Le joueur demandé s'appelle "${resultat.nom}."`)};
        });
    };

    function getByNumero(req, res){
        let requete = req.body.numero;
        Joueur.findOne({numero: requete}, function (err, resultat) {
            if (err){res.send(`Joueur non trouvé`)} else{res.send(resultat)};
        });
    };

    function getByNom(req, res){
        let requete = req.body.nom;
        Joueur.find({nom: requete}, function (err, resultat) {
            if (err){res.send(`Joueur non trouvé`)} else{res.send(resultat)};
        });
    };

    function remove(req, res){
        let requete = req.body.numero;        
        Joueur.findOneAndDelete(requete, function(err, doc){
            if(err){res.send(err)}else if(doc){
                res.send(`Le joueur "${doc.nom}" a bien été effacé.`)
            } else{
                res.send(`Ce joueur n'existe pas.`)
            }
        });
    }

    return {getAll, create, getById, getByNumero, getByNom, remove};
};