const express = require("express");
const ProdutosController = require("../controllers/produtosController");
const routerProdutos = express.Router();

routerProdutos.get('/', ProdutosController.listAllProdutos);

module.exports = routerProdutos;
