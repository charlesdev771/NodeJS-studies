const { resolve } = require("core-js/library/es6/promise");

exports.middlewareGlobal = (req, res, next) => {
  res.locals.variavelLocal = 'Valor da variavel L';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
