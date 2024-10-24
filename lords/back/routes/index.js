module.exports = (app) => {

    app.get('/', (req, res) => res.send('L\'API est bien en ligne'))
    
    //app.use("/cartes", require("./cartes")(app));
    app.use("/allies", require("./allies")(app));
    //app.use("/musiques", require("./musiques")(app));
    app.use("/joueurs", require("./joueurs")(app));
    //app.use("/playlists", require("./playlists")(app));
    
    };