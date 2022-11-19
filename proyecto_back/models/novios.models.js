//Creacción base de datos (Esquema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema; //Creación esquema para db

const NoviosSchema = new Schema({
  //Nombre del esquema con sus parametros
  id_novio: { type: String, required: true, max: 60 },
  nombre: { type: String, required: true, max: 60 },
  estatura: { type: Number, required: true, max: 300 }, // int es Number
  complexion: { type: String, required: true, max: 40 },
  edad: { type: Number, required: true, max: 40 },
  contacto: { type: String, required: true, max: 70 },
  etnia: { type: String, required: false, max: 150 },
  nacionalidad: { type: String, required: false, max: 150 },
});

module.exports = mongoose.model("novios", NoviosSchema);