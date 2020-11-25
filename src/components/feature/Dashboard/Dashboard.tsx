import React from 'react';
import { Header } from '../../shared';
import LineSection from './components/LineSection/LineSection';

const Dashboard = () => {
  return (
    <div>
      <Header onSearchChange={(searchValue) => console.log(searchValue)} />
      <div>
        <LineSection title='Trending Users'>this are the top 3 trending users</LineSection>
        <LineSection title='Most Active Users'>this are the top 3 most active users</LineSection>
        <LineSection title='Top Repositories'>this are the top 3 repositories</LineSection>
      </div>
    </div>
  );
};

export default Dashboard;
