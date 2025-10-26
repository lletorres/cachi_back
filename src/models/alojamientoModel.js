import mongoose from "mongoose";

const alojamientoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
    direccion: { type: String, required: true },
    precioPorNoche: { type: Number, required: true },
    telefono: { type: String },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
    imagen: { type: String }, // opcional, URL de imagen
  },
  { timestamps: true }
);

const Alojamiento = mongoose.model("Alojamiento", alojamientoSchema);

export default Alojamiento;
