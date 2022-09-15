const HomeModel = require('../models/HomeModel');

/*
HomeModel.create({
  titulo: 'Curso de React',
  descricao: 'Curso legal'
}).then(dados => console.log(dados))
  .catch(e => console.log(e));
*/
exports.paginaInicial = (req, res, next) => {

  res.render('index', {
    titulo: 'Titulo :)',
    numeros: [1,2,3,7],
  });
  return;
};

exports.trataPost = (req, res, next) => {
  res.send(req.body);
  return;
};
