import { css } from "@emotion/react";

export const mottoBlockStyle = css`
  display: flex;
  flex-direction: column;
`;

export const imageStyle = css`
  margin-left: 124px;
  width: 140px;
  height: auto;

  @media screen and (min-width: 768px) {
    margin-left: 240px;
    width: 240px;
  }
`;

export const textStyle = css`
  margin-top: -36px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    margin-top: -72px;
    font-size: 54px;
    line-height: 1.11;
  }

  @media screen and (min-width: 1440px) {
    width: 614px;
  }
`;

export const textAccentedStyle = css`
  font-style: normal;
  color: var(--accent);
`;
