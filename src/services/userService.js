import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../../config.js";

// Obtener todos los usuarios
export const getAllUsers = async () => {
  return await User.find();
};

// Obtener usuario por ID
export const getUserById = async (id) => {
  return await User.findById(id);
};

// Crear usuario nuevo
export const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

// Actualizar usuario
export const updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

// Eliminar usuario
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Validamos el usuario
export const validateUserService = async (email, password) => {
  console.log({ email, password });
  // Validar que ambos campos existan y sean correctos
  if (!(email && password)) {
    const error = new Error("There's a missing field");
    error.statusCode = 400;
    throw error;
  }
  // El email es unico y es un identificador de usuario
  const userFound = await User.findOne({ email });
  console.log(userFound);

  if (!userFound) {
    const error = new Error("User or password are incorrect");
    error.statusCode = 400;
    throw error;
  }

  // Comparamos la password que llega contra la guardada en la db
  // Toma la contraseña del cliente la encripta y la compara contra la guardada (encriptada)
  if (!bcrypt.compareSync(password, userFound.password)) {
    const error = new Error("User or password are incorrect");
    error.statusCode = 400;
    throw error;
  }

  // Generamos el payload
  // Es la informacion que guardamos en el token
  const payload = {
    userId: userFound._id,
    userEmail: userFound.email,
    rol: userFound.rol,
  };

  // El token debe ser firmado para tener validez
  // Firma tiene: 1. payload, 2. "secret", 3. duracion
  const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });

  return {
    message: "Logged in",
    token,
    user: {
      _id: userFound._id,
      nombre: userFound.nombre,
      apellido: userFound.apellido,
      email: userFound.email,
      role: userFound.rol, // necesario para el frontend
    },
  };
};
