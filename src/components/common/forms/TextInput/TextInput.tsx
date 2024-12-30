import { FC } from 'react';
import { FieldValues, UseFormRegister, UseFormTrigger } from 'react-hook-form';

import { DEFAULT_PLACEHOLDER, FIELD_ERROR_LESS_THAN, FIELD_ERROR_END, FIELD_REQUIRED, FIELD_ERROR_MAX, FIELD_ERROR_PATTERN } from '../../../../constants/strings';

import { errorMessageStyle, inputStyle } from './TextInput.styles';

export interface TextInputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  register: UseFormRegister<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  error?: string;
  width?: string;
  patternExp?: RegExp;
  patternError?: string;
}

const FIELD_NAME_DEFAULT = 'text';

const TextInput: FC<TextInputProps> = ({
  label,
  type = 'text',
  name = FIELD_NAME_DEFAULT,
  placeholder = DEFAULT_PLACEHOLDER,
  isRequired = false,
  register,
  trigger,
  minLength,
  maxLength,
  patternExp,
  patternError,
  error,
  width = '100%',
}) => {
  return <div>
    {label && 
      <label htmlFor={name}>
        {label}
    </label>
    }
    <input
      type={type}
      aria-label={label}
      placeholder={placeholder}
      {...register(name, {
        ...(isRequired && {required: FIELD_REQUIRED}),
        ...(minLength && {minLength: {
          value: minLength,
          message: `${FIELD_ERROR_LESS_THAN}${minLength}${FIELD_ERROR_END}`,
        }}),
        ...(maxLength && {maxLength: {
          value: maxLength,
          message: `${FIELD_ERROR_MAX}${maxLength}${FIELD_ERROR_END}`,
        }
        }),
        ...(patternExp && {pattern: {
          value: patternExp,
          message: patternError || `${FIELD_ERROR_PATTERN}${label || name}`,
        }}),
      })}
      onKeyUp={() => trigger(name)}
      css={inputStyle(width)}
      className={error ? 'error' : ''}
    />
    {error && <p css={errorMessageStyle}>{error}</p>}
  </div>
};

export default TextInput;