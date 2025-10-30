import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import cors from "cors";
import { connectDB } from "./db.js";
import { PORT, SECRET } from "./config.js";

// Importar rutas
import { categoriaRoute } from "./src/routes/categoriaRoute.js";
import { userRoute } from "./src/routes/userRoute.js";
import { alojamientoRoute } from "./src/routes/alojamientoRoute.js";
import { excursionRoute } from "./src/routes/excursionRoute.js";
import { restauranteRoute } from "./src/routes/restauranteRoute.js";

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // URL de tu frontend
    credentials: true, // permite envío de cookies/sesiones
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sesiones
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Conexión DB
connectDB();

// Rutas base
app.use("/api/categorias", categoriaRoute);
app.use("/api/users", userRoute);
app.use("/api/alojamientos", alojamientoRoute);
app.use("/api/excursiones", excursionRoute);
app.use("/api/restaurantes", restauranteRoute);

// Test route
app.get("/", (req, res) => res.send("Servidor de turismo funcionando 🏞️"));

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
