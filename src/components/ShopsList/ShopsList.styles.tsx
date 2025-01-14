import { css } from '@emotion/react';

export const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  @media screen and (min-width: 1440px){
    gap: 36px;
  }
`