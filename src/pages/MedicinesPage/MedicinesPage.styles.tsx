import { css } from '@emotion/react';

export const imageWrapStyle = css`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  object-fit: contain;

  & img{
    width: 100%;
  }

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background-color: grey;
    transform: translate(-50%, -50%);
  }
`

export const secondsArrowStyle = (secAngle: string) => css`
  position: absolute;
  content: '';
  bottom: 50%;
  left: 50%;
  height: 200px;
  width: 6px;
  border-radius: 4px;
  background-color: black;
  transform: translate(-50%, 50%);
  transform: rotate(${secAngle});
  transform-origin: bottom;
`

export const minutesArrowStyle = (minAngle: string) => css`
  position: absolute;
  content: '';
  bottom: 50%;
  left: 50%;
  height: 180px;
  width: 8px;
  border-radius: 4px;
  background-color: black;
  transform: translate(-50%, 50%);
  transform: rotate(${minAngle});
  transform-origin: bottom;
`

export const hoursArrowStyle = (hourAngle: string) => css`
  position: absolute;
  content: '';
  bottom: 50%;
  left: 50%;
  height: 128px;
  width: 10px;
  border-radius: 4px;
  background-color: black;
  transform: translate(-50%, 50%);
  transform: rotate(${hourAngle});
  transform-origin: bottom;
`