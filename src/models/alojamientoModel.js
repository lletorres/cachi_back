import mongoose from "mongoose";

const alojamientoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
    direccion: { type: String, required: true },
    precioPorNoche: { type: Number, required: true },
    telefono: { type: String },
    imagen: { type: String }, // URL de imagen
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
  },
  { timestamps: true }
);

const Alojamiento = mongoose.model("Alojamiento", alojamientoSchema);

export default Alojamiento;
