import { FC } from 'react';

interface Props {
  title: string;
  stars: number;
  description: string;
}

const MostStarredRepo: FC<Props> = ({ title, stars, description }) => {
  return (
    <div>
      {title}
      <br />
      {stars}
      <br />
      {description}
    </div>
  );
};

export default MostStarredRepo;
