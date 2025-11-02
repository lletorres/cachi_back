import Excursion from "../models/excursionModel.js";

export const getAllExcursionesService = async () => {
  return await Excursion.find().populate("categoria", "nombre tipo");
};

export const getExcursionByIdService = async (id) => {
  return await Excursion.findById(id).populate("categoria", "nombre tipo");
};

export const createExcursionService = async (data) => {
  const newExcursion = await Excursion.create(data);
  return await newExcursion.populate("categoria", "nombre tipo"); // 👈 AGREGAR
};

export const updateExcursionService = async (id, data) => {
  return await Excursion.findByIdAndUpdate(id, data, { new: true }).populate(
    "categoria",
    "nombre tipo"
  ); // 👈 AGREGAR
};

export const deleteExcursionService = async (id) => {
  return await Excursion.findByIdAndDelete(id);
};
