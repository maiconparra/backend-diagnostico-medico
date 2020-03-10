//models
const ConhecimentoSintomaModel = require('../models/ConhecimentoSintomaModel');


module.exports = {
  async store(req, res){
   const { name, type } = req.body;

   const conhecimentoSintoma = await ConhecimentoSintomaModel.create({
    name,
    type
   });

   return res.json(conhecimentoSintoma);
  },

  async index(req, res){
    const conhecimentoSintomas = await ConhecimentoSintomaModel.find();

    return res.json(conhecimentoSintomas);
  },
};