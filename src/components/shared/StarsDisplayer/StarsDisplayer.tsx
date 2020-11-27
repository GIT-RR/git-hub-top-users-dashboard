import React, { FC } from 'react';
import './StarsDisplayer.scss';
import StarsIcon from '@material-ui/icons/Stars';

interface Props {
  number: number;
}

const StarsDisplayer: FC<Props> = ({ number }) => {
  return (
    <div className='stars-displayer'>
      <StarsIcon fontSize='small' />
      {number}
    </div>
  );
};

export default StarsDisplayer;
