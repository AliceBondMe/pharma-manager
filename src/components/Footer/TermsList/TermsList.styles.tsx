import { css } from "@emotion/react";

export const termsListStyle = css`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 20px;
  margin-top: 80px;
  padding-top: 20px;
  border-top: 1px solid var(--borders-primary);

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    justify-content: center;
    padding-top: 32px;
    column-gap: 48px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
  }
`;

export const termsItemStyle = css`
  position: relative;
  font-size: 10px;
  line-height: 1;

  &:not(:last-of-type)::after {
    position: absolute;
    content: "";
    top: 0;
    right: -10px;
    width: 1px;
    height: 100%;
    background-color: var(--borders-primary);

    @media screen and (min-width: 768px) {
      right: -24px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;
