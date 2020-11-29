import { RepoDetails, RepoDetailsBE, UserDetails, UserDetailsBE } from '../domain';
import { gitApi } from './apiRoot';
import { getUserTopRepo } from './repoApi';
import { getGitCredentials } from './utils';

export const userMapper = (user: UserDetailsBE, topRepo: RepoDetails): UserDetails => {
  return {
    avatar: user.avatar_url,
    name: user.name,
    userName: user.login,
    email: user.email,
    followers: user.followers,
    topRepo: topRepo,
  };
};

export const getUserDetails = async (login: string): Promise<UserDetails> => {
  const { data: userDetais } = await gitApi.get(`/users/${login}?${getGitCredentials()}`);
  const topRepoDetails = await getUserTopRepo(login);
  return userMapper(userDetais, topRepoDetails);
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
      return await getUserDetails(user.login);
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
      return await getUserDetails(user.login);
    })
  );

  return users;
};
