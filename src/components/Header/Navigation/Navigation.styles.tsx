import { css } from "@emotion/react";

export const navStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const linkStyle = css`
  position: relative;
  padding: 8px 20px;
  border-radius: 40px;
  border: 8px solid var(--background-secondary);
  color: var(--text-secondary);
  background-color: var(--background-secondary);
  box-shadow: 0 0 6px var(--background-tertiary);
  transition: background-color var(--transition-main),
    color var(--transition-main);

  &.active {
    background-color: var(--accent);
    color: var(--text-contrast);
  }

  &:not(:last-of-type)::after {
    content: "";
    width: 16px;
    height: 8px;
    background-color: var(--background-secondary);
    position: absolute;
    left: 50%;
    bottom: -14px;
    transform: translateX(-50%);

    @media screen and (min-width: 1440px) {
      width: 8px;
      height: 16px;
      left: unset;
      bottom: unset;
      top: 50%;
      right: -14px;
      transform: translateY(-50%);
    }
  }

  &:not(.active):hover {
    background-color: var(--background-table-header);
    color: var(--text-primary);
  }
`;
