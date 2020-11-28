import { RepoDetails, RepoDetailsBE } from '../domain';
import { gitApi } from './apiRoot';
import { getGitCredentials } from './utils';

export const repoMapper = (repo: RepoDetailsBE): RepoDetails => {
  return { ...repo, stars: repo.watchers };
};

export const getRepo = async (id: number): Promise<RepoDetails> => {
  const res = await gitApi.get(`/repositories/${id}?${getGitCredentials()}`);
  return repoMapper(res.data);
};

export const getTopRepos = async (top: number = 4): Promise<RepoDetails[]> => {
  const res = await gitApi.get(
    `/search/repositories?q=followers:%3E1000&page=1&per_page=${top}${getGitCredentials()}`
  );

  const repos = await Promise.all<RepoDetails>(
    res.data.items.map(async (repo: any) => {
      return await getRepo(repo.id);
    })
  );

  return repos;
};
