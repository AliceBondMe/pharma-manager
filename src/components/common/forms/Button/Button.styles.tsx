import { css } from '@emotion/react';

export const baseButtonStyle = (width: string) => css`
  width: ${width};
  padding: 13px 139px;
  border-radius: 60px;
  background-color: var(--accent);
  color: var(--background-secondary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: background-color var(--transition-main);

  &:focus,:hover{
    background-color: var(--accent-hover);
  }

  &:disabled{
    cursor: auto;

    &:focus,:hover{
    background-color: var(--accent);
  }
  }
`
export const lightButtonStyle = (width: string) => css`
  ${baseButtonStyle(width)};

  &:focus,:hover{
    background-color: var(--accent-hover);
  }
`