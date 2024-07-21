const modelProdutos = require("../models/produtos");

class ProdutosController {
  static async listAllProdutos(req, res) {
    try {
      const produtos = await modelProdutos.find();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ "Error": "Erro interno no servidor!" });
    };
  };
};

module.exports = ProdutosController;
