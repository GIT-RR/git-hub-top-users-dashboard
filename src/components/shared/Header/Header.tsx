import { FC } from 'react';

interface Props {
  onSearchChange: (value: string) => void;
}

const Header: FC<Props> = ({ onSearchChange }) => {
  return (
    <div>
      this is the header
      <input
        type='text'
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder='Search'
      />
    </div>
  );
};

export default Header;
