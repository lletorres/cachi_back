import Restaurante from "../models/restauranteModel.js";

export const getAllRestaurantesService = async () => {
  return await Restaurante.find().populate("categoria", "nombre tipo");
};

export const getRestauranteByIdService = async (id) => {
  return await Restaurante.findById(id).populate("categoria", "nombre tipo");
};

export const createRestauranteService = async (data) => {
  const newRestaurante = await Restaurante.create(data);
  return await newRestaurante.populate("categoria", "nombre tipo");
};

export const updateRestauranteService = async (id, data) => {
  return await Restaurante.findByIdAndUpdate(id, data, { new: true }).populate(
    "categoria",
    "nombre tipo"
  );
};

export const deleteRestauranteService = async (id) => {
  return await Restaurante.findByIdAndDelete(id);
};
