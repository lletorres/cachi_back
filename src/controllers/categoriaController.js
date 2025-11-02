import * as categoriaService from "../services/categoriaService.js";

export const getCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categorías", error });
  }
};

export const getCategoria = async (req, res) => {
  try {
    const { tipo } = req.query; // ej: /api/categorias?tipo=Alojamiento
    const categorias = await categoriaService.getAllCategorias(tipo);
    if (!categorias)
      return res.status(404).json({ message: "Categoría no encontrada" });
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categoría", error });
  }
};

export const createCategoria = async (req, res) => {
  try {
    const nueva = await categoriaService.createCategoria(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ message: "Error al crear categoría", error });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const actualizada = await categoriaService.updateCategoria(
      req.params.id,
      req.body
    );
    if (!actualizada)
      return res.status(404).json({ message: "Categoría no encontrada" });
    res.status(200).json(actualizada);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar categoría", error });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const eliminada = await categoriaService.deleteCategoria(req.params.id);
    if (!eliminada)
      return res.status(404).json({ message: "Categoría no encontrada" });
    res.status(200).json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar categoría", error });
  }
};
