import React, { FC } from 'react';
import './FollowersDisplayer.scss';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

interface Props {
  number: number;
}

const FollowersDisplayer: FC<Props> = ({ number }) => {
  return (
    <div className='followers-displayer'>
      <PersonOutlineIcon fontSize='small' />
      <div className='number'>{number}</div>
      <span className='label'>Followers</span>
    </div>
  );
};

export default FollowersDisplayer;
