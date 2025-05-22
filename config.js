require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DATA_FILE: process.env.DATA_FILE || "./data/libros.json"
};
