import { Request, Response, NextFunction } from 'express';

import { AppError } from '../../../../shared/errors/AppError';

export default async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { role } = req.user;
  if (role !== 'ADMIN') {
    throw new AppError("User isn't admin!");
  }
  return next();
}
