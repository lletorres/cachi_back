import mongoose from "mongoose";

const restauranteSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    direccion: { type: String, required: true },
    especialidad: { type: String },
    telefono: { type: String },
    imagen: { type: String },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
  },
  { timestamps: true }
);

export default mongoose.model("Restaurante", restauranteSchema);
