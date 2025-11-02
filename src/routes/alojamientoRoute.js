import express from "express";
import {
  getAlojamientos,
  getAlojamiento,
  createAlojamiento,
  updateAlojamiento,
  deleteAlojamiento,
} from "../controllers/alojamientoController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import { verifyAdmin } from "../middlewares/verfyAdmin.js";

export const alojamientoRoute = express.Router();

// Rutas protegidas con JWT
alojamientoRoute.get("/", getAlojamientos);
alojamientoRoute.get("/:id", verifyTokenMiddleware, getAlojamiento);
alojamientoRoute.post(
  "/",
  verifyTokenMiddleware,
  verifyAdmin,
  createAlojamiento
);
alojamientoRoute.put(
  "/:id",
  verifyTokenMiddleware,
  verifyAdmin,
  updateAlojamiento
);
alojamientoRoute.delete(
  "/:id",
  verifyTokenMiddleware,
  verifyAdmin,
  deleteAlojamiento
);
