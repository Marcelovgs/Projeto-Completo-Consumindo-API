const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  image_url: { type: String, required: true }
});

const produtos = mongoose.model("produtos", produtoSchema);

module.exports = produtos;
