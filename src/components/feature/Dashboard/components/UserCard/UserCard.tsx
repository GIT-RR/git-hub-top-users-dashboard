import { Divider } from '@material-ui/core';
import { FC } from 'react';
import { FollowersDisplayer } from '../../../../shared';
import MostStarredRepo from './components/MostStarredRepo/MostStarredRepo';
import './UserCard.scss';

interface Props {
  name: string;
  email?: string;
  followers: number;
}

const UserCard: FC<Props> = ({ name, email, followers }) => {
  return (
    <div className='user-card'>
      <div className='header'></div>
      <div className='container'>
        <div className='avatar'></div>
        <div className='name'>{name}</div>
        <div className='email'>{email}</div>
        <FollowersDisplayer number={followers} />
        <Divider className='divider' />
        <MostStarredRepo
          title='Hello World'
          stars={54}
          description='This is my hello world project!'
        />
      </div>
    </div>
  );
};

export default UserCard;
