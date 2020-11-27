import { FC } from 'react';
import './RepoCard.scss';
import { StarsDisplayer } from '../../../../shared';

interface Props {
  name: string;
  stars: number;
  description: string;
}

const RepoCard: FC<Props> = ({ name, stars, description }) => {
  return (
    <div className='repo-card'>
      <div className='container'>
        <p className='title'>{name}</p>
        <StarsDisplayer number={stars} />
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};

export default RepoCard;
