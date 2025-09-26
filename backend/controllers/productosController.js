const productos = require("../productos");

const getProductos = (req, res) => {
  res.json(productos);
};

module.exports = { getProductos };