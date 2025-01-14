import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Snackbar } from '@mui/material';

import { shopFormFields } from './shopFormFields';
import { TextInput } from '../common';
import { COMMON_ERROR, CREATE_SHOP, DELIVERY_LABEL, EDIT_SHOP, NO, YES } from '../../constants/strings';
import { ShopData } from '../../redux/types';
import { AppDispatch } from '../../redux/store';
import { createShop, editShop } from '../../redux/shop/operations';
import useSnackbar from '../../hooks/useSnackBar';

import { deliveryLabelStyle, deliveryOptionLabelStyle, inputsWrapStyle, radioButtonStyle, radioWrapStyle, submitButtonStyle } from './ShopForm.styles';
import { selectShopById } from '../../redux/shop/selectors';

const ShopForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { isSnackbarOpen, handleOpenSnackbar, handleCloseSnackbar } = useSnackbar();
  const { shopId } = useParams();
  const shopToEdit = useSelector(selectShopById(shopId));
  const [deliverySystem, setDeliverySystem] = useState('yes');

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: {errors, isDirty, isValid},
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    if (shopToEdit) {
      const {
        shopName,
        shopOwnerName,
        email,
        phone,
        address,
        city,
        postal,
        hasDeliverySystem,
      } = shopToEdit
      setValue('shopName', shopName);
      setValue('shopOwnerName', shopOwnerName);
      setValue('email', email);
      setValue('phone', phone);
      setValue('address', address);
      setValue('city', city);
      setValue('postal', postal);
      setDeliverySystem(hasDeliverySystem ? 'yes' : 'no');
    }
  }, [shopToEdit, setValue])
  
  
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

    const editShopData = {
      id: shopId || '',
      shopInfo: shopData,
    };

    (shopId ? dispatch(editShop(editShopData)) : dispatch(createShop(shopData)))
      .then((action) => {
        if (action.type === "shop/create/fulfilled" || action.type === "shop/edit/fulfilled") {
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
          <input
            {...register('hasDeliverySystem', { required: true })}
            type='radio'
            name='hasDeliverySystem'
            id='yes'
            value="yes"
            checked={deliverySystem === 'yes'}
            css={radioButtonStyle}
            onChange={() => setDeliverySystem('yes')}
          />
          <label htmlFor="yes" css={deliveryOptionLabelStyle}>{YES}</label>
          <input
            {...register('hasDeliverySystem', { required: true })}
            type='radio'
            name='hasDeliverySystem'
            id='no'
            value="no"
            checked={deliverySystem  === 'no'}
            css={radioButtonStyle}
            onChange={() => setDeliverySystem('no')}
          />
          <label htmlFor="no" css={deliveryOptionLabelStyle}>{NO}</label>
        </div>
      </div>

      <button disabled={!isDirty || !isValid} css={submitButtonStyle}>{shopId ? EDIT_SHOP : CREATE_SHOP}</button>
    </form>

    {isSnackbarOpen && <Snackbar onClose={handleCloseSnackbar} open={isSnackbarOpen} message={COMMON_ERROR} />}
  </>
};

export default ShopForm;