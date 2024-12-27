import { FC } from 'react';
import { FieldValues, UseFormRegister, UseFormTrigger } from 'react-hook-form';

import { DEFAULT_PLACEHOLDER, FIELD_ERROR_LESS_THAN, FIELD_ERROR_END, FIELD_REQUIRED, FIELD_ERROR_MAX } from '../../../../constants/strings';

import { errorMessageStyle, inputStyle } from './TextInput.styles';

interface TextInputProps {
  isLabel?: boolean;
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
}

const MIN_LENGTH_DEFAULT = 3;
const MAX_LENGTH_DEFAULT = 300;
const FIELD_NAME_DEFAULT = 'text';

const TextInput: FC<TextInputProps> = ({
  isLabel = false,
  label = '',
  type = 'text',
  name = FIELD_NAME_DEFAULT,
  placeholder = DEFAULT_PLACEHOLDER,
  isRequired = false,
  register,
  trigger,
  minLength = MIN_LENGTH_DEFAULT,
  maxLength = MAX_LENGTH_DEFAULT,
  error,
  width = '100%',
}) => {
  return <div>
    {isLabel && 
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
        minLength: {
          value: minLength,
          message: `${FIELD_ERROR_LESS_THAN}${MIN_LENGTH_DEFAULT}${FIELD_ERROR_END}`,
        },
        maxLength: {
          value: maxLength,
          message: `${FIELD_ERROR_MAX}${MAX_LENGTH_DEFAULT}${FIELD_ERROR_END}`,
        },
      })}
      onKeyUp={() => trigger(name)}
      css={inputStyle(width)}
      className={error ? 'error' : ''}
    />
    {error && <p css={errorMessageStyle}>{error}</p>}
  </div>
};

export default TextInput;