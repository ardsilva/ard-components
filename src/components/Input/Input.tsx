import React from 'react';
import './Input.css';

export interface InputProps {
  /**
   * The type of the input
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  /**
   * The placeholder text
   */
  placeholder?: string;
  /**
   * The value of the input
   */
  value?: string;
  /**
   * The default value of the input
   */
  defaultValue?: string;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Whether the input is required
   */
  required?: boolean;
  /**
   * Whether the input is read-only
   */
  readOnly?: boolean;
  /**
   * The size of the input
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the input
   */
  variant?: 'default' | 'filled' | 'outlined';
  /**
   * The state of the input
   */
  state?: 'default' | 'error' | 'success' | 'warning';
  /**
   * The label for the input
   */
  label?: string;
  /**
   * The helper text
   */
  helperText?: string;
  /**
   * The error message
   */
  errorMessage?: string;
  /**
   * The success message
   */
  successMessage?: string;
  /**
   * The warning message
   */
  warningMessage?: string;
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Key down handler
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Additional styles
   */
  style?: React.CSSProperties;
  /**
   * The name attribute
   */
  name?: string;
  /**
   * The id attribute
   */
  id?: string;
  /**
   * The autocomplete attribute
   */
  autoComplete?: string;
  /**
   * The max length
   */
  maxLength?: number;
  /**
   * The min length
   */
  minLength?: number;
  /**
   * The step for number inputs
   */
  step?: number;
  /**
   * The min value for number inputs
   */
  min?: number;
  /**
   * The max value for number inputs
   */
  max?: number;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  readOnly = false,
  size = 'medium',
  variant = 'default',
  state = 'default',
  label,
  helperText,
  errorMessage,
  successMessage,
  warningMessage,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  className = '',
  style,
  name,
  id,
  autoComplete,
  maxLength,
  minLength,
  step,
  min,
  max,
  ...props
}) => {
  const baseClasses = 'ard-input';
  const sizeClass = `ard-input--${size}`;
  const variantClass = `ard-input--${variant}`;
  const stateClass = state !== 'default' ? `ard-input--${state}` : '';
  const disabledClass = disabled ? 'ard-input--disabled' : '';
  const readOnlyClass = readOnly ? 'ard-input--readonly' : '';
  
  const inputClasses = [
    baseClasses,
    sizeClass,
    variantClass,
    stateClass,
    disabledClass,
    readOnlyClass,
    className
  ].filter(Boolean).join(' ');

  const getMessage = () => {
    if (errorMessage) return errorMessage;
    if (successMessage) return successMessage;
    if (warningMessage) return warningMessage;
    return helperText;
  };

  const getMessageClass = () => {
    if (errorMessage) return 'ard-input__message--error';
    if (successMessage) return 'ard-input__message--success';
    if (warningMessage) return 'ard-input__message--warning';
    return 'ard-input__message--helper';
  };

  return (
    <div className="ard-input-wrapper">
      {label && (
        <label htmlFor={id} className="ard-input__label">
          {label}
          {required && <span className="ard-input__required">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        className={inputClasses}
        style={style}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        step={step}
        min={min}
        max={max}
        {...props}
      />
      {getMessage() && (
        <div className={`ard-input__message ${getMessageClass()}`}>
          {getMessage()}
        </div>
      )}
    </div>
  );
};
