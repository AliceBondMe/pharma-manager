import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { TextInput } from '../common';
import { BUTTON_LOGIN, REGISTER_LINK_TEXT} from '../../constants/strings';
import { fields } from './authFields';

import { authLinkStyle, loginButtonStyle, loginformStyle } from './AuthForms.styles';
import { Link } from 'react-router-dom';

const LoginForm: FC = () => {
  const loginFields = [fields[1], fields[3]];

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onBlur' })
  
  const onSubmit = () => {
    const user = {
      email: getValues('email'),
      password: getValues('password'),
    }
    console.log(user);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={loginformStyle}>
      {loginFields.map(({ key, type, name, placeholder, minLength, maxLength, patternExp, patternError, isRequired }) =>
        <TextInput
          register={register}
          trigger={trigger}
          type={type}
          name={name}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          patternExp={patternExp}
          patternError={patternError}
          error={errors?.[name as string]?.message as string | undefined}
          isRequired={isRequired}
          key={key}
      />)}
      <button type='button' disabled={!isDirty || !isValid} css={loginButtonStyle}>
        {BUTTON_LOGIN}
      </button>

      <Link to='/register' css={authLinkStyle}>{REGISTER_LINK_TEXT}</Link>
    </form>
  );
};

export default LoginForm;