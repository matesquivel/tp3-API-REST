const express = require("express");
const path = require("path");
const librosRoutes = require("./routes/librosRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/libros", librosRoutes);

module.exports = app;
