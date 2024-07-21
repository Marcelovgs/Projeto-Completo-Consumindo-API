require("dotenv").config()
const express = require("express");
const app = express();
const routerProdutos = require("./src/router/produtosRouter");
const connectDB = require("./src/database/databaseConnect");
const PORT = process.env.PORT;
const cors = require("cors")

app.use(cors())

connectDB();

app.use(routerProdutos);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Erro ao executar o servidor! --> ${err}`);
  } else {
    console.log(`Servidor rodando normalmente na porta --> ${PORT}`);
  };
});