module.exports = (app) => {
    app.controles = {
        //cartes: require("./cartes")(app),
        // allies: require("./allies")(app),
        // musiques: require("./musiques")(app),
        joueurs: require("./joueurs")(app),
        // playlists: require("./playlists")(app),
    }
};