export default class User {
  private id: string;
  private name: string;
  private email: string;
  private role: 'MEMBER' | 'ADMIN';

  constructor(
    id: string,
    name: string,
    email: string,
    role: 'MEMBER' | 'ADMIN'
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getRole(): string {
    return this.role;
  }
}
