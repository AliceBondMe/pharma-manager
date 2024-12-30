import { FC } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { SnackbarMessage, TextInput } from '../common';
import { BUTTON_REGISTER, LOGIN_LINK_TEXT, REGISTRATION_ERROR } from '../../constants/strings';
import { fields } from './authFields';
import { registerUser } from '../../redux/auth/operations';
import { UserData } from '../../redux/types';
import { AppDispatch } from '../../redux/store';
import useSnackbar from '../../hooks/useSnackBar';

import { formStyle, loginLinkStyle, registerButtonStyle } from './AuthForms.styles';

const RegistrationForm: FC = () => {
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
      name: getValues('username'),
      email: getValues('email'),
      phone: getValues('phone'),
      password: getValues('password'),
    }
    
    dispatch(registerUser(user)).then((action) => {
      if (action.type === 'auth/register/fulfilled') {
        navigate('/create-shop');
        reset();
      } else {
        handleOpenSnackbar();
      }
    });
    
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
        {fields.map(({ key, type, name, placeholder, minLength, maxLength, patternExp, patternError, isRequired }) =>
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

        <div>
          <button disabled={!isDirty || !isValid} css={registerButtonStyle}>
            {BUTTON_REGISTER}
          </button>
          <Link to='/login' css={loginLinkStyle}>{LOGIN_LINK_TEXT}</Link>
        </div>
      </form>

        <SnackbarMessage message={REGISTRATION_ERROR} open={isSnackbarOpen} onClose={handleCloseSnackbar} severity='error' />
    </>
  );
};

export default RegistrationForm;