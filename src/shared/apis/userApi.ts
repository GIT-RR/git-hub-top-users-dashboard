import { UserDetails, UserDetailsBE } from '../domain';
import { gitApi } from './apiRoot';
import { getGitCredentials } from './utils';

export const userMapper = (user: UserDetailsBE): UserDetails => {
  return { ...user, avatar: user.avatar_url };
};

export const getUser = async (login: string): Promise<UserDetails> => {
  const res = await gitApi.get(`/users/${login}?${getGitCredentials()}`);
  return userMapper(res.data);
};

export const getTopTrendingUsers = async (
  top: number,
  searchInput: string
): Promise<UserDetails[]> => {
  const res = await gitApi.get(
    `/search/users?q=followers:>0${
      searchInput && `+fullname:${searchInput}`
    }&sort=followers&order=desc&page=1&per_page=${top}${getGitCredentials()}`
  );

  const users = await Promise.all<UserDetails>(
    res.data.items.map(async (user: any) => {
      return await getUser(user.login);
    })
  );

  return users;
};

export const getTopActiveUsers = async (
  top: number,
  searchInput: string
): Promise<UserDetails[]> => {
  const res = await gitApi.get(
    `/search/users?q=repos:>0${
      searchInput && `+fullname:${searchInput}`
    }&sort=repositories&order=desc&page=1&per_page=${top}${getGitCredentials()}`
  );

  const users = await Promise.all<UserDetails>(
    res.data.items.map(async (user: any) => {
      return await getUser(user.login);
    })
  );

  return users;
};
