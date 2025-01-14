import { css } from '@emotion/react';

export const baseButtonStyle = css`
  width: 100%;
  padding: 13px;
  border-radius: 60px;
  background-color: var(--accent);
  color: var(--background-secondary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  text-align: center;
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

export const secondaryButtonStyle = css`
  ${baseButtonStyle}
  border-radius: 30px;
  background-color: var(--background-tertiary);
  color: var(--accent);
  
  &:focus,:hover{
    background-color: var(--accent);
    color: var(--background-secondary);
  }
`