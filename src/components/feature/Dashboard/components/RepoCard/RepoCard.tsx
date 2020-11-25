import { FC } from 'react';

interface Props {
  name: string;
  stars: number;
  description: string;
}

const RepoCard: FC<Props> = ({ name, stars, description }) => {
  return (
    <div>
      {name}
      <br />
      {stars}
      <br />
      {description}
    </div>
  );
};

export default RepoCard;
