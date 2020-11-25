import { FC } from 'react';

interface Props {
  title: string;
  children: any;
}

const LineSection: FC<Props> = ({ title, children }) => {
  return (
    <div>
      {title}
      <div>{children}</div>
    </div>
  );
};

export default LineSection;
