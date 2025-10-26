import * as userService from "../services/userService.js";

// GET todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
};

// GET usuario por ID
export const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario", error });
  }
};

// POST crear usuario
export const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error al crear usuario", error });
  }
};

// PUT actualizar usuario
export const updateUser = async (req, res) => {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    if (!updated)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar usuario", error });
  }
};

// DELETE eliminar usuario
export const deleteUser = async (req, res) => {
  try {
    const deleted = await userService.deleteUser(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar usuario", error });
  }
};

// Autenticar/validar al usuario
export const validate = async (req, res) => {
  try {
    // Deberiamos tomar los datos que nos mandan en el req
    const { email, password } = req.body;
    const result = await userService.validateUserService(email, password);
    console.log({ result });
    return res.status(200).json(result);
  } catch (error) {
    if (error.statusCode === 400) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
