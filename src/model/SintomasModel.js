const mongoose = require('mongoose');


const SintomasSchema = new mongoose.Schema({
  name: String,
  sintomas: [String],
  filiacao: String,
  nomeFiliado: String,
  diagnostico: String,
});

module.exports = mongoose.model('Sintomas', SintomasSchema);