import { FC } from 'react';
import './UserCard.scss';

interface Props {
  name: string;
  email: string;
  followers: number;
}

const UserCard: FC<Props> = ({ name, email, followers }) => {
  return (
    <div className='user-card'>
      {name}
      <br />
      {email}
      <br />
      {followers}
    </div>
  );
};

export default UserCard;
