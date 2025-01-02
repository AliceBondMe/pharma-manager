import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Snackbar } from '@mui/material';

import { shopFormFields } from './shopFormFields';
import { TextInput } from '../common';
import { COMMON_ERROR, CREATE_SHOP, DELIVERY_LABEL, NO, YES } from '../../constants/strings';
import { ShopData } from '../../redux/types';
import { AppDispatch } from '../../redux/store';
import { createShop } from '../../redux/shop/operations';
import useSnackbar from '../../hooks/useSnackBar';

import { deliveryLabelStyle, deliveryOptionLabelStyle, inputsWrapStyle, radioButtonStyle, radioWrapStyle, submitButtonStyle } from './ShopForm.styles';

const ShopForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { isSnackbarOpen, handleOpenSnackbar, handleCloseSnackbar } = useSnackbar();

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    getValues,
    formState: {errors, isDirty, isValid},
  } = useForm({ mode: "onBlur" });
  
  const onSubmit = () => { 
    const shopData: ShopData = {
      shopName: getValues('shopName'),
      shopOwnerName: getValues('shopOwnerName'),
      email: getValues('email'),
      phone: getValues('phone'),
      address: getValues('address'),
      city: getValues('city'),
      postal: getValues('postal'),
      hasDeliverySystem: getValues('hasDeliverySystem') === 'yes' ? true : false
    };

    dispatch(createShop(shopData)).then((action) => {
      if (action.type === "shop/create/fulfilled") {
        navigate('/shop');
        reset();
      } else {
        handleOpenSnackbar();
      }
    })
  }

  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div css={inputsWrapStyle}>
        {shopFormFields.map(({ key, name, type, label, minLength, maxLength, patternExp, patternError, isRequired}) =>
        <TextInput
          key={key}
          register={register}
          trigger={trigger}
          name={name}
          type={type}
          label={label}
          minLength={minLength}
          maxLength={maxLength}
          patternExp={patternExp}
          patternError={patternError}
          isRequired={isRequired}
          error={errors?.[name as string]?.message as string | undefined}
        />
      )}
      </div>

      <div>
        <p css={deliveryLabelStyle}>{DELIVERY_LABEL}</p>
        <div css={radioWrapStyle}>
          <input {...register('hasDeliverySystem', {required: true})} type='radio' name='hasDeliverySystem' id='yes' value="yes" checked css={radioButtonStyle} />
          <label htmlFor="yes" css={deliveryOptionLabelStyle}>{YES}</label>
          <input {...register('hasDeliverySystem', {required: true})}type='radio' name='hasDeliverySystem' id='no' value="no" checked css={radioButtonStyle} />
          <label htmlFor="no" css={deliveryOptionLabelStyle}>{NO}</label>
        </div>
      </div>

      <button disabled={!isDirty || !isValid} css={submitButtonStyle}>{CREATE_SHOP}</button>
    </form>

    {isSnackbarOpen && <Snackbar onClose={handleCloseSnackbar} open={isSnackbarOpen} message={COMMON_ERROR} />}
  </>
};

export default ShopForm;