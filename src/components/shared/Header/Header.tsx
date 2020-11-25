import { FC, useCallback } from 'react';
import './Header.css';
import { UpHillLogo } from '../../assets/icons';
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from '../../../core/debounce';

interface Props {
  onSearchChange: (value: string) => void;
}

const Header: FC<Props> = ({ onSearchChange }) => {
  const handleSearchChange = (value: string) => {
    debounce(function () {
      onSearchChange('value');
    }, 250);
    // debounce(() => onSearchChange('value'), 1000);
    // onSearchChange('asd');
  };

  return (
    <div className='header'>
      <div className='header-container'>
        <UpHillLogo className='header-logo' />
        <Input
          className='header-search-input'
          onChange={(event) => handleSearchChange(event.target.value)}
          placeholder='Search'
          startAdornment={<SearchIcon />}
          disableUnderline={true}
        />
      </div>
    </div>
  );
};

export default Header;
