import { AppError } from '../../../../shared/errors/AppError';
import { hash } from 'bcryptjs';
import UserRepositoryInterface from '../../../../domain/user/repository/User.repository.interface';
import { InputCreateUserDto } from './CreateUser.dto';

export default class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}
  async execute({ name, email, password }: InputCreateUserDto): Promise<void> {
    const checkEmail = await this.userRepository.findByEmail(email);
    if (checkEmail) {
      throw new AppError('Email already exists', 409);
    }
    const password_hash = await hash(password, 6);
    await this.userRepository.create(name, email, password_hash);
  }
}
