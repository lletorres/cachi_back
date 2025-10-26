import express from "express";
import {
  getExcursiones,
  getExcursionById,
  createExcursion,
  updateExcursion,
  deleteExcursion,
} from "../controllers/excursionController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

export const excursionRoute = express.Router();

// Rutas protegidas con JWT

excursionRoute.get("/", verifyTokenMiddleware, getExcursiones);
excursionRoute.get("/:id", verifyTokenMiddleware, getExcursionById);
excursionRoute.post("/", verifyTokenMiddleware, createExcursion);
excursionRoute.put("/:id", verifyTokenMiddleware, updateExcursion);
excursionRoute.delete("/:id", verifyTokenMiddleware, deleteExcursion);
