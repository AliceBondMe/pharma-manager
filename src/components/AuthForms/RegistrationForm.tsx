import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { TextInput } from '../common';
import Button from '../common/forms/Button/Button';
import { BUTTON_REGISTER, USER_NAME_PLACEHOLDER } from '../../constants/strings';

import { formStyle } from './AuthForms.styles';

const RegistrationForm: FC = () => {
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
      name: getValues('username'),
    }
    console.log(user);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
      <TextInput
        register={register}
        trigger={trigger}
        name='username'
        placeholder={USER_NAME_PLACEHOLDER}
        minLength={3}
        maxLength={50}
        error={errors?.username?.message as string | undefined}
        isRequired
      />
      <Button disabled={!isDirty || !isValid} >{ BUTTON_REGISTER }</Button>
    </form>
  );
};

export default RegistrationForm;