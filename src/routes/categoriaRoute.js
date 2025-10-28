import express from "express";
import {
  getCategorias,
  getCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from "../controllers/categoriaController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import { verifyAdmin } from "../middlewares/verfyAdmin.js";

export const categoriaRoute = express.Router();

// Rutas protegidas con JWT
categoriaRoute.get("/", verifyTokenMiddleware, getCategorias); //cualquier user lo puede ver
categoriaRoute.get("/:id", verifyTokenMiddleware, getCategoria);
categoriaRoute.post("/", verifyTokenMiddleware, verifyAdmin, createCategoria); //solo el admin
categoriaRoute.put("/:id", verifyTokenMiddleware, verifyAdmin, updateCategoria);
categoriaRoute.delete(
  "/:id",
  verifyTokenMiddleware,
  verifyAdmin,
  deleteCategoria
);
