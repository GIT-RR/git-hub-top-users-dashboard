import { Repo, UserDetails } from '../domain';
import { gitApi } from './apiRoot';

// Git Api is secured. Only allows x requests per minute. Use your own git credentials to increase the requests per minute. Update gitEmail and gitPassword.
// Error Message: "API rate limit exceeded for 85.244.138.154. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
// NOTE: DONT COMMIT YOU EMAIL OR PASSWORD !!!
const gitEmail = null;
const gitPassword = null;

const getGitCredentials = () => {
  const useGitCredentials = gitEmail && gitPassword;

  if (useGitCredentials) {
    return `&client_id=${gitEmail}&client_secret=${gitPassword}`;
  }
  return '';
};

export const getUser = async (login: string): Promise<UserDetails> => {
  const res = await gitApi.get(`/users/${login}?${getGitCredentials()}`);
  return res.data;
};

export const getTopTrendingUsers = async (top: number = 1): Promise<UserDetails[]> => {
  const res = await gitApi.get(
    `/search/users?q=followers:%3E1000&page=1&per_page=${top}${getGitCredentials()}`
  );

  const users = await Promise.all<UserDetails>(
    res.data.items.map(async (user: any) => {
      return await getUser(user.login);
    })
  );

  return users;
};

export const getTopActiveUsers = async (top: number = 3): Promise<Repo> => {
  const res = await gitApi.get(
    `/search/users?q=repos:%3E1000&page=1&per_page=${top}${getGitCredentials()}`
  );
  return res.data;
};
