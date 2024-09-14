import { css } from "@emotion/react";

export const termsListStyle = css`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 21px;
  margin-top: 80px;
  padding-top: 20px;
  border-top: 1px solid var(--borders-primary);
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
    height: 10px;
    background-color: var(--borders-secondary);
  }
`;
