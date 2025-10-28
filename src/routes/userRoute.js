import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  validate,
} from "../controllers/userController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import { verifyAdmin } from "../middlewares/verfyAdmin.js";

export const userRoute = express.Router();

userRoute.get("/", verifyTokenMiddleware, verifyAdmin, getUsers);
userRoute.get("/:id", verifyTokenMiddleware, verifyAdmin, getUser);
userRoute.post("/", createUser);
userRoute.put("/:id", verifyTokenMiddleware, verifyAdmin, updateUser);
userRoute.delete("/:id", verifyTokenMiddleware, verifyAdmin, deleteUser);
userRoute.post("/login", validate);
