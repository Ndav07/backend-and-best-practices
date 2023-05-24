import { AppError } from 'shared/errors/AppError';
import auth from 'shared/config/auth';
import { sign, verify } from 'jsonwebtoken';

interface IUser_id {
  sub: string;
}

export default class RefreshTokenUseCase {
  async execute(refreshToken: string): Promise<string> {
    const { secret_token, expires_in_token, refresh_secret_token } = auth;

    try {
      const { sub: user_id } = verify(
        refreshToken,
        refresh_secret_token
      ) as IUser_id;

      const newToken = sign({}, secret_token, {
        subject: user_id,
        expiresIn: expires_in_token,
      });

      return newToken;
    } catch {
      throw new AppError('Invalid refresh token', 401);
    }
  }
}
