import express from "express";
import {
  getCategorias,
  getCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from "../controllers/categoriaController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

export const categoriaRoute = express.Router();

// Rutas protegidas con JWT
categoriaRoute.get("/", verifyTokenMiddleware, getCategorias);
categoriaRoute.get("/:id", verifyTokenMiddleware, getCategoria);
categoriaRoute.post("/", verifyTokenMiddleware, createCategoria);
categoriaRoute.put("/:id", verifyTokenMiddleware, updateCategoria);
categoriaRoute.delete("/:id", verifyTokenMiddleware, deleteCategoria);
