const express = require("express");
const app = express();
const productosRoutes = require("./routes/productosRoutes");

app.use("/api/productos", productosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});