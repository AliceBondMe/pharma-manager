import { css } from '@emotion/react';
import { labelStyle } from '../common/forms/TextInput/TextInput.styles';
import { baseButtonStyle } from '../common/forms/ButtonStyles/Button.styles';

export const inputsWrapStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 14px;
    row-gap: 24px;
  }
`
export const deliveryLabelStyle = css`
  ${labelStyle};
  margin-top: 20px;
  margin-left: 0;

  @media screen and (min-width: 768px){
    margin-top: 24px;
  }
`
export const deliveryOptionLabelStyle = css`
  font-size: 12px;
`
export const radioWrapStyle = css`
  display: flex;
  gap: 9px;
  align-items: center;
`

export const radioButtonStyle = css`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--backdrop);
  appearance: none;
  cursor: pointer;

  &:checked {
    border-color: var(--accent);
    background: radial-gradient(var(--accent) 40%, var(--background-secondary) 50%);
  }
`

export const submitButtonStyle = css`
  ${baseButtonStyle};
  width: 155px;
  margin-top: 40px;
`

export const buttonGroupWrap = css`
  
`