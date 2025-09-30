import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Whether the button is in loading state
   */
  loading?: boolean;
  /**
   * The type of the button
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Additional styles
   */
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  className = '',
  style,
  ...props
}) => {
  const baseClasses = 'ard-button';
  const variantClass = `ard-button--${variant}`;
  const sizeClass = `ard-button--${size}`;
  const loadingClass = loading ? 'ard-button--loading' : '';
  const disabledClass = disabled ? 'ard-button--disabled' : '';
  
  const classes = [
    baseClasses,
    variantClass,
    sizeClass,
    loadingClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      style={style}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="ard-button__spinner" />}
      <span className={loading ? 'ard-button__content--loading' : 'ard-button__content'}>
        {children}
      </span>
    </button>
  );
};
