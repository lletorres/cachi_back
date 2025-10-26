import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    descripcion: { type: String },
    tipo: {
      type: String,
      required: true,
      enum: ["Alojamiento", "Excursion", "Restaurante"], // valores posibles
    },
  },
  { timestamps: true }
);

const Categoria = mongoose.model("Categoria", categoriaSchema);
export default Categoria;
