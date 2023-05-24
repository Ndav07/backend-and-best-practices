export interface Output {
  id: string;
  name: string;
  email: string;
  role: 'MEMBER' | 'ADMIN';
  password_hash: string;
}

export default interface UserRepositoryInterface {
  create(name: string, email: string, password_hash: string): Promise<void>;
  findByEmail(email: string): Promise<Output | null>;
  findById(id: string): Promise<Output | null>;
}
