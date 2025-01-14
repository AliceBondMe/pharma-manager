import { css } from '@emotion/react';

export const titleStyle = css`
  margin: 40px 0 8px 16px; 
  font-size: 20px;
`
export const instructionsStyle = css`
  font-size: 12px;
  margin-left: 16px;
  margin-bottom: 16px;
`

export const createShopLinkStyle = css`
  font-size: 14px;
  color: var(--accent);
  margin-left: 16px;
  font-weight: bold;

  &:hover,:focus {
    color: var(--accent-hover);
  }
`