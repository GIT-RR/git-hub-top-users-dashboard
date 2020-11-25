import React from 'react';
import { Header } from '../../shared';

const Dashboard = () => {
  return (
    <div>
      <Header onSearchChange={(searchValue) => console.log(searchValue)} />
      this is dashboard
    </div>
  );
};

export default Dashboard;
