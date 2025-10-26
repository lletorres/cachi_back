import Categoria from "../models/categoriaModel.js";

// Obtener todas las categorías
export const getAllCategorias = async (tipo) => {
  if (tipo) {
    return await Categoria.find({ tipo });
  }
  return await Categoria.find();
};

// Obtener una categoría por ID
export const getCategoriaById = async (id) => {
  return await Categoria.findById(id);
};

// Crear nueva categoría
export const createCategoria = async (data) => {
  const newCategoria = new Categoria(data);
  return await newCategoria.save();
};

// Actualizar una categoría
export const updateCategoria = async (id, data) => {
  return await Categoria.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar una categoría
export const deleteCategoria = async (id) => {
  return await Categoria.findByIdAndDelete(id);
};
