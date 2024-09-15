import { css } from "@emotion/react";

export const socialsListStyle = css`
  display: flex;
  gap: 12px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    justify-content: end;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0px;
  }
`;

export const socialsLinkStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid var(--borders-secondary);
  transition: color var(--transition-main);

  &:hover {
    color: var(--text-contrast-hover);
  }
`;
