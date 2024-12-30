import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SnackbarMessage, TextInput } from '../common';
import { BUTTON_LOGIN, LOGIN_ERROR, REGISTER_LINK_TEXT} from '../../constants/strings';
import { fields } from './authFields';
import { UserData } from '../../redux/types';
import { AppDispatch } from '../../redux/store';
import { loginUser } from '../../redux/auth/operations';
import useSnackbar from '../../hooks/useSnackBar';

import { authLinkStyle, loginButtonStyle, loginformStyle } from './AuthForms.styles';

const loginFields = [fields[1], fields[3]];

const LoginForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const {isSnackbarOpen, handleOpenSnackbar, handleCloseSnackbar} = useSnackbar();

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onBlur' })
  
  const onSubmit = () => {
      const user: UserData = {
        email: getValues('email'),
        password: getValues('password'),
      }
      
      dispatch(loginUser(user)).then((action) => {
        if (action.type === 'auth/login/fulfilled') {
          navigate('/shop');
          reset();
        } else {
        handleOpenSnackbar();
      }
      });
    };

  return (
    <>
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
        <button disabled={!isDirty || !isValid} css={loginButtonStyle}>
          {BUTTON_LOGIN}
        </button>

        <Link to='/register' css={authLinkStyle}>{REGISTER_LINK_TEXT}</Link>
      </form>
      <SnackbarMessage message={LOGIN_ERROR} open={isSnackbarOpen} onClose={handleCloseSnackbar} severity='error' />
    </>
  );
};

export default LoginForm;