const service = require("../servicio/librosService");

async function getAll(req, res) {
  const libros = await service.getAll();
  res.json(libros);
}

async function getById(req, res) {
  const id = parseInt(req.params.id);
  const libro = await service.getById(id);
  if (libro) {
    res.json(libro);
  } else {
    res.status(404).send(`
      <h2>Libro no encontrado</h2>
      <a href="/index.html"><button>Volver al formulario</button></a>
    `);
  }
}

async function add(req, res) {
  const { id, titulo, autor, año } = req.body;
  await service.add({ id: parseInt(id), titulo, autor, año: parseInt(año) });
  res.status(201).send(`
    <h2>Libro agregado correctamente</h2>
    <a href="/index.html"><button>Volver al formulario</button></a>
  `);
}

async function update(req, res) {
  const id = parseInt(req.params.id);
  const { titulo, autor, año } = req.body;
  await service.update(id, { titulo, autor, año: parseInt(año) });
  res.send(`
    <h2>Libro actualizado</h2>
    <a href="/index.html"><button>Volver al formulario</button></a>
  `);
}

async function remove(req, res) {
  const id = parseInt(req.params.id);
  await service.remove(id);
  res.send(`
    <h2>Libro eliminado</h2>
    <a href="/index.html"><button>Volver al formulario</button></a>
  `);
}

module.exports = { getAll, getById, add, update, remove };
