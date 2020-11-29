import { RepoDetails } from '.';

export interface UserDetailsBE {
  avatar_url: string;
  name: string;
  login: string;
  email?: string;
  followers: number;
}

export interface UserDetails {
  avatar: string;
  name: string;
  userName: string;
  email?: string;
  followers: number;
  topRepo?: RepoDetails | null;
}
