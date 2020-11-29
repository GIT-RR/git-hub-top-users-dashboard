import { Divider } from '@material-ui/core';
import { FC } from 'react';
import { UserDetails } from '../../../../../shared/domain';
import { FollowersDisplayer } from '../../../../shared';
import MostStarredRepo from './components/MostStarredRepo/MostStarredRepo';
import './UserCard.scss';

const UserCard: FC<UserDetails> = ({ name, email, followers, avatar, topRepo }) => {
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
        {topRepo && <MostStarredRepo {...topRepo} />}
      </div>
    </div>
  );
};

export default UserCard;
