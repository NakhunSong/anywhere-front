import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

interface IProps {
  children: React.ReactNode;
  button: React.ReactNode;
  to?: string;
}

const PageTemplate = ({
  children,
  button,
  to,
}: IProps) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/"><div className="logo">Memo</div></Link>
        {to
          ? <Link to={to}>{button}</Link>
          : button}
      </div>
      {children}
    </div>
  );
};

export default PageTemplate;
