const mongoose = require('mongoose');


const ConhecimentoSintomaSchema = new mongoose.Schema({
 name: String,
 type: String,
});

module.exports = mongoose.model('conhecimento', ConhecimentoSintomaSchema);