import { EMAIL_PLACEHOLDER, PASSWORD_FIELD_ERROR_PATTERN, PASSWORD_PLACEHOLDER, PHONE_FIELD_ERROR_PATTERN, PHONE_PLACEHOLDER, USER_NAME_PLACEHOLDER } from '../../constants/strings';
import { TextInputProps } from '../common/forms/TextInput/TextInput';

export const fields: (Omit<TextInputProps, 'register' | 'trigger'> & {key: string}) []  = [
  {
    key: '1',
    type: 'text',
    name: 'username',
    placeholder: USER_NAME_PLACEHOLDER,
    minLength: 3,
    maxLength: 50,
    isRequired: true,
  },
  {
    key: '2',
    type: 'email',
    name: 'email',
    placeholder: EMAIL_PLACEHOLDER,
    patternExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/,
    isRequired: true,
  },
  {
    key: '3',
    type: 'tel',
    name: 'phone',
    placeholder: PHONE_PLACEHOLDER,
    patternExp: /^[0-9]{6,12}$/,
    patternError: PHONE_FIELD_ERROR_PATTERN,
    isRequired: true,
  },
  {
    key: '4',
    type: 'password',
    name: 'password',
    placeholder: PASSWORD_PLACEHOLDER,
    patternExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,20}$/,
    patternError: PASSWORD_FIELD_ERROR_PATTERN,
    isRequired: true,
  }
]
