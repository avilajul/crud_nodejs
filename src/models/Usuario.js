const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Se crea el esquema Usuario
const Usuario = new Schema({
    id: { type: Number},
    name: { type: String},
    last_name: { type: String},
    address: { type: String},
    city: { type: String},
    state: { type: String},
    country: { type: String},
    phone: { type: String},
    area_code: { type: String},
    birthdate: { type: Date}

},{
    collection: 'usuarios'
});

// Exporta el modelo del esquema Usuario para ser usado en la aplicación
module.exports = mongoose.model('Usuario', Usuario);