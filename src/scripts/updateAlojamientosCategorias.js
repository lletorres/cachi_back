import mongoose from "mongoose";
import dotenv from "dotenv";
import Alojamiento from "../models/alojamientoModel.js";
import Categoria from "../models/categoriaModel.js";

dotenv.config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Conectado a MongoDB");

    // 1️⃣ Buscamos la categoría "Alojamiento"
    const categoriaAlojamiento = await Categoria.findOne({
      tipo: "Alojamiento",
    });

    if (!categoriaAlojamiento) {
      console.log(
        "⚠️ No se encontró la categoría 'Alojamiento'. Crea una antes de continuar."
      );
      return;
    }

    // 2️⃣ Actualizamos todos los alojamientos para asignarles esa categoría
    const result = await Alojamiento.updateMany(
      { categoria: { $exists: false } },
      { $set: { categoria: categoriaAlojamiento._id } }
    );

    console.log(`✅ ${result.modifiedCount} alojamientos actualizados.`);
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error al actualizar alojamientos:", error);
    mongoose.connection.close();
  }
};

run();
