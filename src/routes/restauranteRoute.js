import express from "express";
import {
  getRestaurantes,
  getRestauranteById,
  createRestaurante,
  updateRestaurante,
  deleteRestaurante,
} from "../controllers/restauranteController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import { verifyAdmin } from "../middlewares/verfyAdmin.js";

export const restauranteRoute = express.Router();

// Rutas protegidas con JWT
restauranteRoute.get("/", getRestaurantes);
restauranteRoute.get("/:id", verifyTokenMiddleware, getRestauranteById);
restauranteRoute.post(
  "/",
  verifyTokenMiddleware,
  verifyAdmin,
  createRestaurante
);
restauranteRoute.put(
  "/:id",
  verifyTokenMiddleware,
  verifyAdmin,
  updateRestaurante
);
restauranteRoute.delete(
  "/:id",
  verifyTokenMiddleware,
  verifyAdmin,
  deleteRestaurante
);
