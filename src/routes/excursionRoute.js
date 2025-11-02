import express from "express";
import {
  getExcursiones,
  getExcursionById,
  createExcursion,
  updateExcursion,
  deleteExcursion,
} from "../controllers/excursionController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import { verifyAdmin } from "../middlewares/verfyAdmin.js";

export const excursionRoute = express.Router();

// Rutas protegidas con JWT

excursionRoute.get("/", getExcursiones);
excursionRoute.get("/:id", verifyTokenMiddleware, getExcursionById);
excursionRoute.post("/", verifyTokenMiddleware, verifyAdmin, createExcursion);
excursionRoute.put("/:id", verifyTokenMiddleware, verifyAdmin, updateExcursion);
excursionRoute.delete(
  "/:id",
  verifyTokenMiddleware,
  verifyAdmin,
  deleteExcursion
);
