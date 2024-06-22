export interface RegisterAccount {
  profile: string;
  username: string;
  email: string;
  number: number;
  password: string;
  retypePassword: string;
}

export interface LoginAccount {
  email: string;
  password: string;
}
