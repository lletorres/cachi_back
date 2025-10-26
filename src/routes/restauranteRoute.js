import express from "express";
import {
  getRestaurantes,
  getRestauranteById,
  createRestaurante,
  updateRestaurante,
  deleteRestaurante,
} from "../controllers/restauranteController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

export const restauranteRoute = express.Router();

// Rutas protegidas con JWT
restauranteRoute.get("/", verifyTokenMiddleware, getRestaurantes);
restauranteRoute.get("/:id", verifyTokenMiddleware, getRestauranteById);
restauranteRoute.post("/", verifyTokenMiddleware, createRestaurante);
restauranteRoute.put("/:id", verifyTokenMiddleware, updateRestaurante);
restauranteRoute.delete("/:id", verifyTokenMiddleware, deleteRestaurante);
