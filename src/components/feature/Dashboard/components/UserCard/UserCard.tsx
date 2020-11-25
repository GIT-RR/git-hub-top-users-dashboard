import { FC } from 'react';

interface Props {
  name: string;
  email: string;
  followers: number;
}

const UserCard: FC<Props> = ({ name, email, followers }) => {
  return (
    <div>
      {name}
      <br />
      {email}
      <br />
      {followers}
    </div>
  );
};

export default UserCard;
