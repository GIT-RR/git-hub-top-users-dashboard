import { FC } from 'react';
import './Header.css';
import logo from '../../../logo.svg';

interface Props {
  onSearchChange: (value: string) => void;
}

const Header: FC<Props> = ({ onSearchChange }) => {
  return (
    <div className='header'>
      <div className='header-container'>
        <img src={logo} className='header-logo' alt='logo' />
        <input
          className='header-search-input'
          type='text'
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export default Header;
