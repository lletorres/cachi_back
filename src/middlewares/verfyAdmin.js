export const verifyAdmin = (req, res, next) => {
  try {
    const user = req.user; // viene del verifyTokenMiddleware
    if (!user)
      return res.status(401).json({ message: "Usuario no autenticado" });

    if (user.rol !== "admin") {
      return res
        .status(403)
        .json({ message: "Acceso denegado: requiere rol de administrador" });
    }

    next(); // de aca va al controlador
  } catch (error) {
    res.status(500).json({ message: "Error verificando rol", error });
  }
};
