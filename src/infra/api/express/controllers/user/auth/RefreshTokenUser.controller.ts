import RefreshTokenUseCase from 'application/usecase/user/auth/RefreshTokenUser.usecase';
import { Request, Response } from 'express';
import { AppError } from 'shared/errors/AppError';

export default class RefreshTokenUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      throw new AppError('Invalid refresh token', 401);
    }
    const refreshTokenUserUseCase = new RefreshTokenUseCase();
    const output = await refreshTokenUserUseCase.execute(refreshToken);
    return res.status(201).send({ token: output });
  }
}
