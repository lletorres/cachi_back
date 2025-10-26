import express from "express";
import {
  getAlojamientos,
  getAlojamiento,
  createAlojamiento,
  updateAlojamiento,
  deleteAlojamiento,
} from "../controllers/alojamientoController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

export const alojamientoRoute = express.Router();

// Rutas protegidas con JWT
alojamientoRoute.get("/", verifyTokenMiddleware, getAlojamientos);
alojamientoRoute.get("/:id", verifyTokenMiddleware, getAlojamiento);
alojamientoRoute.post("/", verifyTokenMiddleware, createAlojamiento);
alojamientoRoute.put("/:id", verifyTokenMiddleware, updateAlojamiento);
alojamientoRoute.delete("/:id", verifyTokenMiddleware, deleteAlojamiento);
