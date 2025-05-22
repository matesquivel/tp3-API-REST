const fs = require("fs").promises;
const path = require("path");
const { DATA_FILE } = require("../config");

const filePath = path.resolve(DATA_FILE);


async function leerLibros() {
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}

async function guardarLibros(libros) {
  await fs.writeFile(filePath, JSON.stringify(libros, null, 2), "utf8");
}

async function getAll() {
  return await leerLibros();
}

async function getById(id) {
  const libros = await leerLibros();
  return libros.find((l) => l.id === id);
}

async function add(libro) {
  const libros = await leerLibros();
  libros.push(libro);
  await guardarLibros(libros);
}

async function update(id, datos) {
  const libros = await leerLibros();
  const index = libros.findIndex((l) => l.id === id);
  if (index !== -1) {
    libros[index] = { id, ...datos };
    await guardarLibros(libros);
  }
}

async function remove(id) {
  const libros = await leerLibros();
  const nuevosLibros = libros.filter((l) => l.id !== id);
  await guardarLibros(nuevosLibros);
}

module.exports = { getAll, getById, add, update, remove };
