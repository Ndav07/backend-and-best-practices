import { Router } from 'express';

import CreateUserController from '../controllers/user/create/CreateUser.controller';
import AuthenticateUserController from '../controllers/user/auth/AuthenticateUser.controller';
import RefreshTokenUserController from '../controllers/user/auth/RefreshTokenUser.controller';

const usersRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

usersRouter.post('/', createUserController.handle);
usersRouter.post('/sessions', authenticateUserController.handle);
usersRouter.post('/refreshToken', refreshTokenUserController.handle);

export { usersRouter };
