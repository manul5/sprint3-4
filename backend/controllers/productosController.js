const productos = require("../productos");

const getProductos = (req, res) => {
  res.json(productos);
};

const getProductoById = (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(producto);
};

const getProductosDestacados = (req, res) => {
  const destacados = productos.filter((producto) => producto.destacado === true);
  res.json(destacados);
};

module.exports = {
  getProductos,
  getProductoById,
  getProductosDestacados,
};