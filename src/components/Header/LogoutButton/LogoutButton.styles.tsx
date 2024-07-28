import { css } from "@emotion/react";

export const buttonStyle = css`
  width: fit-content;
  padding: 13px 28px;
  margin: 0 auto;
  background-color: transparent;
  border-radius: 60px;
  border: 1px solid var(--borders-primary);
  color: var(--text-contrast);
  font-size: 14px;
  line-height: 1;
  transition: background-color var(--transition-main),
    color var(--transition-main);

  &:hover {
    background-color: var(--background-secondary);
    color: var(--accent);
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    border: 1px solid var(--accent);
    color: var(--accent);

    &:hover {
      background-color: var(--accent);
      color: var(--text-contrast);
    }
  }
`;
