import { FC } from 'react';
import './RepoCard.scss';
import StarsIcon from '@material-ui/icons/Stars';

interface Props {
  name: string;
  stars: number;
  description: string;
}

const RepoCard: FC<Props> = ({ name, stars, description }) => {
  return (
    <div className='repo-card'>
      <div className='repo-card-container'>
        <p className='title'>{name}</p>
        <p className='stars'>
          <StarsIcon />
          {stars}
        </p>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};

export default RepoCard;
