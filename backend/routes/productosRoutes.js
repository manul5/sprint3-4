const express = require("express");
const router = express.Router();
const { getProductos } = require("../controllers/productosController");

// GET /api/productos
router.get("/", getProductos);

module.exports = router;