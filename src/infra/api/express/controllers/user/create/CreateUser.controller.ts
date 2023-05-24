import { Request, Response } from 'express';
import { z } from 'zod';
import CreateUserUseCase from '../../../../../../application/usecase/user/create/CreateUser.usecase';
import UserRepository from '../../../../../database/prisma/repositories/user/User.repository';

export default class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const bodySchema = z.object({
      name: z
        .string()
        .min(4, { message: 'Name must have minimum 4 characters.' }),
      email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Email is invalid.' }),
      password: z
        .string()
        .min(8, { message: 'Password must have minimum 8 characters.' }),
    });
    const values = bodySchema.parse(req.body);
    const createUserUseCase = new CreateUserUseCase(new UserRepository());
    const output = await createUserUseCase.execute(values);
    return res.status(201).send(output);
  }
}
