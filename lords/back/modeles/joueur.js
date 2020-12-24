const mongoose = require("mongoose");
let Schema = mongoose.Schema;
    
let joueurSchema = new Schema({
    numero: {type: Number},
    nom: {type: String, required: true},  
},
{versionKey: false}
);

module.exports = mongoose.model("Joueur", joueurSchema);