import { Divider } from '@material-ui/core';
import { FC } from 'react';
import { FollowersDisplayer } from '../../../../shared';
import MostStarredRepo from './components/MostStarredRepo/MostStarredRepo';
import './UserCard.scss';

interface Props {
  name: string;
  email?: string;
  followers: number;
  avatar: string;
}

const UserCard: FC<Props> = ({ name, email, followers, avatar }) => {
  return (
    <div className='user-card'>
      {/* <div className='header'> */}
      <img src={avatar} alt='' className='header' />
      {/* </div> */}

      <div className='container'>
        <img className='avatar' src={avatar} alt='' />
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
