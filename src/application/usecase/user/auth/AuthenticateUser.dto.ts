export interface InputAuthenticateUserDto {
  email: string;
  password: string;
}

export interface OutputAuthenticateUserDto {
  token: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}
