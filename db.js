import mongoose from "mongoose";
import { MONGODB_URI, UTN_DB } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${UTN_DB}`);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};
