export interface User {
  login: string;
}

export interface UserDetails {
  avatar_url: string;
  name: string;
  login: string;
  email?: string;
  followers: number;
}
