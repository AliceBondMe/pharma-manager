import { css } from '@emotion/react';
import { baseButtonStyle, secondaryButtonStyle } from '../common/forms/ButtonStyles/Button.styles';

export const cardContainerStyle = (isActivated: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(--background-secondary);
  border-radius: 20px;
  padding: 16px;
  outline: ${isActivated ? '3px solid var(--accent)' : '2px solid var(--borders-primary)'};
  cursor: pointer;
  transition: outline 0.5s ease-in-out;

  & svg {
    width: 20px;
    height: 20px;
    color: var(--accent-hover);
    margin-right: 8px;
  }

  @media screen and (min-width: 768px){
   width: 360px;
  }
`
export const titlePartStyle = css`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 8px;
  position: relative;

  & ::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: var(--accent);
    position: absolute;
    left: 0;
    bottom: -8px;
  }
`

export const titleStyle = css`
  font-size: 20px;
  width: 75%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const editButtonStyle = css`
  ${baseButtonStyle};
  width: 45%;
`
export const deleteButtonStyle = css`
  ${secondaryButtonStyle};
  width: 45%;
`
export const buttonsContainerStyle = css`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
`
export const infoStyle = css`
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`