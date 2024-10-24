const router = require("express").Router();

module.exports = (app) => {    

    router.get('/', app.controles.cartes.getAll);

    router.post('/create', app.controles.cartes.create);

    router.post('/getById', app.controles.cartes.getById);

    router.post('/getByRang', app.controles.cartes.getByRang);

    //router.post('/update', app.controles.cartes.update);

    //router.post('/delete', app.controles.cartes.remove);

    return router;
};