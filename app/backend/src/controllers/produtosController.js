const produtos = require('../data/produtosMock');

function listarProdutos(req, res, next) {
  try {
    res.json(produtos);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listarProdutos
};