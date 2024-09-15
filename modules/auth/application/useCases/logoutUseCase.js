import { AuthService } from "../services/authService.js";

export class LogoutUseCase {
  constructor() {
    this.authService = new AuthService();
  }
  async execute(cookie) {
    /**verifico si hay un token en la cookie, sino mando error */
    const token = cookie?.refreshToken;
    if (!token) throw createError.Unauthorized("Accion no permitida");
    /**libero el token del usuario */
    const response = this.authService.updateRefreshToken(
      { refreshToken: token },
      { refreshToken: null }
    );
    if (!response)
      throw createError.NotFound("Error al actualizar el refreshToken");
  }
}

