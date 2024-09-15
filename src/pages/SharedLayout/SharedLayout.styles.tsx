import { css } from "@emotion/react";

export const mainContainerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;

export const containerStyle = css`
  flex-grow: 1;
  padding: 24px 20px 80px 20px;

  @media screen and (min-width: 768px) {
    padding: 28px 32px 120px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 30px 128px 100px 128px;
  }
`;
