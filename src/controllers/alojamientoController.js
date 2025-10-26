import * as alojamientoService from "../services/alojamientoService.js";

export const getAlojamientos = async (req, res) => {
  try {
    const alojamientos = await alojamientoService.getAllAlojamientos();
    res.status(200).json(alojamientos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener alojamientos", error });
  }
};

export const getAlojamiento = async (req, res) => {
  try {
    const alojamiento = await alojamientoService.getAlojamientoById(
      req.params.id
    );
    if (!alojamiento)
      return res.status(404).json({ message: "Alojamiento no encontrado" });
    res.status(200).json(alojamiento);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener alojamiento", error });
  }
};

export const createAlojamiento = async (req, res) => {
  try {
    const nuevo = await alojamientoService.createAlojamiento(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ message: "Error al crear alojamiento", error });
  }
};

export const updateAlojamiento = async (req, res) => {
  try {
    const actualizado = await alojamientoService.updateAlojamiento(
      req.params.id,
      req.body
    );
    if (!actualizado)
      return res.status(404).json({ message: "Alojamiento no encontrado" });
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar alojamiento", error });
  }
};

export const deleteAlojamiento = async (req, res) => {
  try {
    const eliminado = await alojamientoService.deleteAlojamiento(req.params.id);
    if (!eliminado)
      return res.status(404).json({ message: "Alojamiento no encontrado" });
    res.status(200).json({ message: "Alojamiento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar alojamiento", error });
  }
};
