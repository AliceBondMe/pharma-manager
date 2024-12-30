import { css } from '@emotion/react';
import { baseButtonStyle } from '../common/forms/ButtonStyles/Button.styles';

export const formStyle = css`
  display: grid;
  grid-template-columns: 1 auto;
  gap: 10px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 280px);
    gap: 14px;
    margin: 54px 0 0 0;
  }

  @media screen and (min-width: 1440px) {
    align-content: center;
  }
`
export const loginformStyle = css`
  ${formStyle}

   @media screen and (min-width: 768px) {
    grid-template-columns: 323px;
    gap: 14px;
    margin: 54px 0 0 0;
  }
`

export const registerButtonStyle = css`
  ${baseButtonStyle}
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 280px;
    margin-top: 62px;
  }
`
export const loginButtonStyle = css`
  ${baseButtonStyle}
  margin-top: 128px;

  @media screen and (min-width: 768px) {
    width: 323px;
    margin-top: 62px;
    height: 44px;
  }
`

export const authLinkStyle = css`
  display: block;
  color: var(--input-placeholder);
  text-align: center;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 4px;
`
export const loginLinkStyle = css`
  ${authLinkStyle}
  margin-top: 14px;
`