import React from 'react';
import './Button.scss';
import classNames from 'classnames';

const Button = ({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) => {
  return (
    <button
      className={classNames('Button', size, color, className, {
        outline,
        fullWidth,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};
export default Button;
