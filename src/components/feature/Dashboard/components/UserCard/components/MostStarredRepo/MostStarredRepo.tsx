import React, { FC } from 'react';
import { StarsDisplayer } from '../../../../../../shared';
import './MostStarredRepo.scss';

interface Props {
  title: string;
  stars: number;
  description: string;
}

const MostStarredRepo: FC<Props> = ({ title, stars, description }) => {
  return (
    <div className='most-starred-repo'>
      <div className='header'>
        <div>{title}</div>
        <StarsDisplayer number={stars} />
      </div>
      <div className='body'>{description}</div>
    </div>
  );
};

export default MostStarredRepo;
