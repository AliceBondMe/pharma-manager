import { css } from "@emotion/react";

export const logoGroupStyle = (color: string) => css`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: ${color};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.6px;
  }
`;
