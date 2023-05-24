import { compare } from 'bcryptjs';
import User from 'domain/user/entity/User';
import UserRepositoryInterface from 'domain/user/repository/User.repository.interface';
import { AppError } from 'shared/errors/AppError';
import {
  InputAuthenticateUserDto,
  OutputAuthenticateUserDto,
} from './AuthenticateUser.dto';
import auth from 'shared/config/auth';
import { sign } from 'jsonwebtoken';

export default class AuthenticateUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute({
    email,
    password,
  }: InputAuthenticateUserDto): Promise<OutputAuthenticateUserDto> {
    const output = await this.userRepository.findByEmail(email);

    if (!output) {
      throw new AppError('Invalid credentials!', 401);
    }

    const doestPasswordMatches = await compare(password, output.password_hash);

    if (!doestPasswordMatches) {
      throw new AppError('Invalid credentials!', 401);
    }

    const user = new User(output.id, output.name, output.email, output.role);

    const {
      secret_token,
      expires_in_token,
      refresh_secret_token,
      refresh_expires_in_token,
    } = auth;

    const token = sign({}, secret_token, {
      subject: user.getId(),
      expiresIn: expires_in_token,
    });

    const refreshToken = sign({}, refresh_secret_token, {
      subject: user.getId(),
      expiresIn: refresh_expires_in_token,
    });

    return {
      token,
      refreshToken,
      user: {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        role: user.getRole(),
      },
    };
  }
}
