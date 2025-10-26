import Alojamiento from "../models/alojamientoModel.js";

// Obtener todos los alojamientos
export const getAllAlojamientos = async () => {
  return await Alojamiento.find().populate("categoria");
};

// Obtener un alojamiento por ID
export const getAlojamientoById = async (id) => {
  return await Alojamiento.findById(id).populate("categoria");
};

// Crear nuevo alojamiento
export const createAlojamiento = async (data) => {
  const newAlojamiento = new Alojamiento(data);
  return await newAlojamiento.save();
};

// Actualizar alojamiento
export const updateAlojamiento = async (id, data) => {
  return await Alojamiento.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar alojamiento
export const deleteAlojamiento = async (id) => {
  return await Alojamiento.findByIdAndDelete(id);
};
