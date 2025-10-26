import {
  getAllRestaurantesService,
  getRestauranteByIdService,
  createRestauranteService,
  updateRestauranteService,
  deleteRestauranteService,
} from "../services/restauranteService.js";

export const getRestaurantes = async (req, res) => {
  try {
    const restaurantes = await getAllRestaurantesService();
    res.json(restaurantes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener restaurantes", error });
  }
};

export const getRestauranteById = async (req, res) => {
  try {
    const restaurante = await getRestauranteByIdService(req.params.id);
    if (!restaurante)
      return res.status(404).json({ message: "Restaurante no encontrado" });
    res.json(restaurante);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener restaurante", error });
  }
};

export const createRestaurante = async (req, res) => {
  try {
    const nuevoRestaurante = await createRestauranteService(req.body);
    res.status(201).json(nuevoRestaurante);
  } catch (error) {
    res.status(500).json({ message: "Error al crear restaurante", error });
  }
};

export const updateRestaurante = async (req, res) => {
  try {
    const actualizado = await updateRestauranteService(req.params.id, req.body);
    if (!actualizado)
      return res.status(404).json({ message: "Restaurante no encontrado" });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar restaurante", error });
  }
};

export const deleteRestaurante = async (req, res) => {
  try {
    const eliminado = await deleteRestauranteService(req.params.id);
    if (!eliminado)
      return res.status(404).json({ message: "Restaurante no encontrado" });
    res.json({ message: "Restaurante eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar restaurante", error });
  }
};
