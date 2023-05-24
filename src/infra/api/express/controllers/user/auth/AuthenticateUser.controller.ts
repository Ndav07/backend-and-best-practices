import { Request, Response } from 'express';
import { z } from 'zod';
import UserRepository from '../../../../../database/prisma/repositories/user/User.repository';
import AuthenticateUseCase from 'application/usecase/user/auth/AuthenticateUser.usecase';

export default class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const bodySchema = z.object({
      email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Email is invalid.' }),
      password: z
        .string()
        .min(8, { message: 'Password must have minimum 8 characters.' }),
    });
    const values = bodySchema.parse(req.body);
    const authenticateUserUseCase = new AuthenticateUseCase(
      new UserRepository()
    );
    const output = await authenticateUserUseCase.execute(values);
    return res
      .status(201)
      .cookie('refreshToken', output.refreshToken, {
        expires: new Date(new Date().getDate() + 7),
        httpOnly: true,
        secure: true,
        sameSite: true,
      })
      .send({ token: output.token, user: output.user });
  }
}
