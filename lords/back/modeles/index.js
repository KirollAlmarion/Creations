module.exports = (app) => {
    app.modeles = {
        Carte: require("./carte.js"),
        Joueur: require("./joueur.js"),
        Allie: require("./allie.js"),
    };
  };