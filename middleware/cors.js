const allowedOrigins = ["http://localhost:5173"];

const cors = (req, res, next) => {
  const origin = req.headers.origin;
  // Configurar encabezados CORS comunes para todas las solicitudes
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Platform");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Validar si el origen está permitido
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    return res.status(403).json({ error: "CORS: El origen no está permitido" });
  }
  // Manejar solicitudes preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // No Content para solicitudes preflight
  }

  next();
};

export default cors;
