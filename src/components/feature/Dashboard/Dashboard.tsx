import React from 'react';
import { useQuery } from 'react-query';
import { userApi } from '../../../shared/apis';
import { Header } from '../../shared';
import { LineSection, RepoCard, UserCard } from './components';
import './Dashboard.scss';

const Dashboard = () => {
  const { data: trendingUsers = [] } = useQuery('trendingUsers', userApi.getTopTrendingUsers);

  return (
    <div id='dashboard'>
      <Header onSearchChange={(searchValue) => console.log(searchValue)} />
      <div className='container'>
        <LineSection title='Trending Users'>
          {trendingUsers.map((user) => (
            <UserCard name={user.name} email={user.email} followers={user.followers} />
          ))}
        </LineSection>
        <LineSection title='Most Active Users'>
          <UserCard name='test name' email='test@mail.com' followers={15} />
        </LineSection>
        <LineSection title='Top Repositories'>
          <RepoCard
            name='React'
            stars={15}
            description='This is my hello world project! This is my hello world project! This is my hello world project!'
          />
          <RepoCard
            name='Typescript'
            stars={15}
            description='This is my hello world project! This is my hello world project! This is my hello world project!'
          />
          <RepoCard
            name='Angular'
            stars={15}
            description='This is my hello world project! This is my hello world project! This is my hello world project!'
          />
          <RepoCard
            name='Vue'
            stars={15}
            description='This is my hello world project! This is my hello world project! This is my hello world project!'
          />
        </LineSection>
      </div>
    </div>
  );
};

export default Dashboard;
