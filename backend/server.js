const express = require("express");
const cors = require("cors");
const app = express();

// Habilitar CORS
app.use(cors());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// JSON parsing middleware
app.use(express.json());

// Routes
const productosRoutes = require("./routes/productosRoutes");
app.use("/api/productos", productosRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});