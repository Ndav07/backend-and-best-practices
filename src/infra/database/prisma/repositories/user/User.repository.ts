import UserRepositoryInterface, {
  Output,
} from '../../../../../domain/user/repository/User.repository.interface';
import { prisma } from '../../../../../shared/lib/prisma';

export default class UserRepository implements UserRepositoryInterface {
  async create(
    name: string,
    email: string,
    password_hash: string
  ): Promise<void> {
    await prisma.user.create({
      data: { name, email, password_hash },
    });
  }

  async findByEmail(email: string): Promise<Output | null> {
    const output = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        password_hash: true,
      },
    });
    return output;
  }

  async findById(id: string): Promise<Output | null> {
    const output = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        password_hash: true,
      },
    });
    return output;
  }
}
