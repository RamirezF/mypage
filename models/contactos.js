const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contactos = new Schema ({
        nombre: { type: String, required: true },
        email: { type: String, required: true },
        telefono: { type: Number, required: true },
});

module.exports = mongoose.model('Contactos', Contactos)