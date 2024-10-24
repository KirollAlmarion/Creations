const router = require("express").Router();

module.exports = (app) => {    

    router.get('/', app.controles.joueurs.getAll);

    router.post('/create', app.controles.joueurs.create);

    router.post('/getById', app.controles.joueurs.getById);

    router.post('/getByNumero', app.controles.joueurs.getByNumero);

    router.post('/getByNom', app.controles.joueurs.getByNom);

    router.post('/delete', app.controles.joueurs.remove);

    return router;
};