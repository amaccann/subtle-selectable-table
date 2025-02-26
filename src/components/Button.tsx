import { ReactNode, SyntheticEvent } from 'react';

import './Button.css';

const Button = ({
  children,
  disabled,
  label,
  onClick,
}: {
  children: ReactNode,
  disabled: boolean,
  label?: string,
  onClick: (e?: SyntheticEvent) => void,
}) => {
  return (
    <button
      aria-label={label}
      className="button"
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
