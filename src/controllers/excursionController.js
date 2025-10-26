import {
  getAllExcursionesService,
  getExcursionByIdService,
  createExcursionService,
  updateExcursionService,
  deleteExcursionService,
} from "../services/excursionService.js";

export const getExcursiones = async (req, res) => {
  try {
    const excursiones = await getAllExcursionesService();
    res.json(excursiones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener excursiones", error });
  }
};

export const getExcursionById = async (req, res) => {
  try {
    const excursion = await getExcursionByIdService(req.params.id);
    if (!excursion)
      return res.status(404).json({ message: "Excursión no encontrada" });
    res.json(excursion);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener excursión", error });
  }
};

export const createExcursion = async (req, res) => {
  try {
    const newExcursion = await createExcursionService(req.body);
    res.status(201).json(newExcursion);
  } catch (error) {
    res.status(500).json({ message: "Error al crear excursión", error });
  }
};

export const updateExcursion = async (req, res) => {
  try {
    const updated = await updateExcursionService(req.params.id, req.body);
    if (!updated)
      return res.status(404).json({ message: "Excursión no encontrada" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar excursión", error });
  }
};

export const deleteExcursion = async (req, res) => {
  try {
    const deleted = await deleteExcursionService(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Excursión no encontrada" });
    res.json({ message: "Excursión eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar excursión", error });
  }
};
