const mongoose = require("mongoose");
let Schema = mongoose.Schema;
    
let carteSchema = new Schema({
    clan: {type: Number, required: true},
    force: {type: Number, required: true},
    rang: {type: Number, required: true},   
},
{versionKey: false}
);

module.exports = mongoose.model("Carte", carteSchema);