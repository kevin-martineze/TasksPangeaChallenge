import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/database.js";
import usuarioRoutes from "./routes/usuarioRouter.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Routing
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
  console.log(`Servidor corriento en el puerto ${PORT}`);
});
