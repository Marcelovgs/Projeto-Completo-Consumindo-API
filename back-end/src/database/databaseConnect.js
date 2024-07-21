const mongoose = require("mongoose");
const MONGO_LINK = process.env.MONGO_LINK;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_LINK);
    console.log("MongoDB conectado...");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB", err);
    process.exit(1);
  };
};

module.exports = connectDB;