import { FC } from 'react';
import './LineSection.scss';

interface Props {
  title: string;
  children: any;
}

const LineSection: FC<Props> = ({ title, children }) => {
  return (
    <div className='line-section'>
      <div className='line-section-title '>{title}</div>
      <div className='line-section-container'>{children}</div>
    </div>
  );
};

export default LineSection;
