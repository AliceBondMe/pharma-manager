import { css } from "@emotion/react";

export const socialsListStyle = css`
  display: flex;
  gap: 12px;
  margin-top: 40px;
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
