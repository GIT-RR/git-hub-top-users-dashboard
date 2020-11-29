import React, { FC } from 'react';
import { RepoDetails } from '../../../../../../../shared/domain';
import { StarsDisplayer } from '../../../../../../shared';
import './MostStarredRepo.scss';

const MostStarredRepo: FC<RepoDetails> = ({ name, stars, description }) => {
  return (
    <div className='most-starred-repo'>
      <div className='header'>
        <div>{name}</div>
        <StarsDisplayer number={stars} />
      </div>
      <div className='body'>{description}</div>
    </div>
  );
};

export default MostStarredRepo;
