import Excursion from "../models/excursionModel.js";

export const getAllExcursionesService = async () => {
  return await Excursion.find().populate("categoria", "nombre tipo");
};

export const getExcursionByIdService = async (id) => {
  return await Excursion.findById(id).populate("categoria", "nombre tipo");
};

export const createExcursionService = async (data) => {
  return await Excursion.create(data);
};

export const updateExcursionService = async (id, data) => {
  return await Excursion.findByIdAndUpdate(id, data, { new: true });
};

export const deleteExcursionService = async (id) => {
  return await Excursion.findByIdAndDelete(id);
};
