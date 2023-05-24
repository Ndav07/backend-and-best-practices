import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../../../../shared/errors/AppError';
import UsersRepository from '../../../database/prisma/repositories/user/User.repository';

import auth from '../../../../shared/config/auth';

interface IUser_id {
  sub: string;
}

export default async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IUser_id;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

    req.user = {
      sub: user.id,
      role: user.role,
    };

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
