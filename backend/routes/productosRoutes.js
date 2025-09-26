const express = require("express");
const router = express.Router();
const { getProductos, getProductoById, getProductosDestacados } = require("../controllers/productosController");

// GET /api/productos
router.get("/", getProductos);

// GET /api/productos/destacados
router.get("/destacados", getProductosDestacados);

// GET /api/productos/:id
router.get("/:id", getProductoById);

module.exports = router;