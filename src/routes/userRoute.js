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

export const userRoute = express.Router();

userRoute.get("/", verifyTokenMiddleware, getUsers);
userRoute.get("/:id", getUser);
userRoute.post("/", createUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);
userRoute.post("/login", validate);
