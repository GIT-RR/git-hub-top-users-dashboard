import './Header.scss';
import { UpHillLogo } from '../../../assets/icons';
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { FC } from 'react';
import { useDebounce } from 'react-use';

interface Props {
  onSearchChange: (value: string) => void;
}

const Header: FC<Props> = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = React.useState('');

  useDebounce(
    () => {
      onSearchChange(searchValue);
    },
    1000,
    [searchValue]
  );

  return (
    <div id='header'>
      <div className='header-container'>
        <UpHillLogo className='logo' />
        <Input
          className='search-input'
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder='Search'
          startAdornment={<SearchIcon />}
          disableUnderline={true}
        />
      </div>
    </div>
  );
};

export default Header;
