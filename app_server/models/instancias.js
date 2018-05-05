const mongoose = require('mongoose');

const instanciaSchema = new mongoose.Schema({
    idInstancia:{
        type: String,
        required:true
    },
    nombre:{
        type: String,
        required:true
    },
    diaInicio:{
        type: String,
        required:true
    },
    diaFin:{
        type:String,
        required:true
    },
    horaInicio:{
        type:String,
        required:true
    },
    horaFin:{
        type:String,
        required:true
    },
    enfrentamientos:{
        type:[String],
        required:true
    }
});
		

module.exports = mongoose.model('instancias', instanciaSchema);