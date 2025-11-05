import mongoose from "mongoose";

const excursionSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    duracion: { type: String, required: true },
    precio: { type: Number, required: true },
    lugarSalida: { type: String, required: true },
    telefono: { type: String },
    imagen: { type: String },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
  },
  { timestamps: true, collection: "excursiones" }
);

export default mongoose.model("Excursion", excursionSchema);
