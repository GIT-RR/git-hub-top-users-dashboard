import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { repoApi, userApi } from '../../../shared/apis';
import { Header } from '../../shared';
import { LineSection, RepoCard, UserCard } from './components';
import './Dashboard.scss';

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState('');

  const { data: topTrendingUsers = [] } = useQuery(['topTrendingUsers', searchInput], () =>
    userApi.getTopTrendingUsers(3, searchInput)
  );
  const { data: topActiveUsers = [] } = useQuery(['topActiveUsers', searchInput], () =>
    userApi.getTopActiveUsers(3, searchInput)
  );

  const { data: topRepos = [] } = useQuery('topRepos', () => repoApi.getTopRepos());

  return (
    <div id='dashboard'>
      <Header onSearchChange={(searchValue) => setSearchInput(searchValue)} />
      <div className='container'>
        <LineSection title='Trending Users'>
          {topTrendingUsers.map((user) => (
            <UserCard {...user} />
          ))}
        </LineSection>
        <LineSection title='Most Active Users'>
          {topActiveUsers.map((user) => (
            <UserCard {...user} />
          ))}
        </LineSection>
        <LineSection title='Top Repositories'>
          {topRepos.map((repo) => (
            <RepoCard {...repo} />
          ))}
        </LineSection>
      </div>
    </div>
  );
};

export default Dashboard;
