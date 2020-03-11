const Sintomas = require('../model/SintomasModel');


module.exports = {


  async index(req, res){
    const sint = await Sintomas.find();

    return res.json(sint);
  },

  async store(req, res){
      const { name, sintomas, filiacao, nomeFiliado} = req.body;

      const sintomasArray = sintomas.split(',').map(sint => sint.trim());

    

      const sintoma = await Sintomas.create({
        name,
        sintomas,
        filiacao,
        nomeFiliado,
        sintomas: sintomasArray,
        diagnostico,
      });

      return res.json(sintoma);
  },


};