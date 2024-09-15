import { css } from "@emotion/react";

export const footerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: var(--accent);
  color: var(--text-contrast);

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 128px;
  }
`;

export const footerMainStyle = css`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const footerPartStyle = css`
  @media screen and (min-width: 1440px) {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
`;

export const textStyle = css`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 260px;
  font-size: 14px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
    font-size: 16px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1440px) {
    width: 312px;
  }
`;
