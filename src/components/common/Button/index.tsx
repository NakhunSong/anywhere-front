import React from 'react';

import './style.scss';

interface IProps {
  big?: boolean;
  color?: string;
  name: string;
  handleClick?: () => void | null;
}
const Button = ({
  big,
  color,
  name,
  handleClick,
}: IProps) => {
  return (
    <div
      className={`default-button ${big ? "big" : ""} ${color || ""}`}
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      tabIndex={0}
    >
      {name}
    </div>
  );
};

export default Button;
