const mongoose = require("mongoose");
let Schema = mongoose.Schema;
    
let allieSchema = new Schema({
    id: {type: Number, required: true},
    actif: {type: Boolean, required: true},  
});

module.exports = mongoose.model("Allie", allieSchema);