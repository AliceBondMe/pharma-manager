import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1440px){
    align-items: end;
    flex-direction: row;
  }
`

export const wrapStyle = css`
  width: 100%;
  border-radius: 27px;
  background-color: var(--background-secondary);
  margin-top: 64px;
  padding: 40px 20px;

  @media screen and (min-width: 768px){
    padding: 40px 38px;
  }
`

export const titleStyle = css`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 12px;

  @media screen and (min-width: 768px){
    font-size: 28px;
    line-height: 1.14;
    margin-bottom: 14px;
  }
`

export const messageStyle = css`
  color: var(--text-semitransparent);
  font-size: 14px;
  line-height: 1.29;
  text-align: justify;
  margin-bottom: 40px;

   @media screen and (min-width: 768px){
    width: 428px;
    font-size: 16px;
    line-height: 1.25;
  }
`

export const pictureStyle = css`
  width: 100%;

  & img {
    width: 100%;
    height: auto;

    @media screen and (min-width: 1440px){
      height: 624px;
      width: auto;
    }
  }
`