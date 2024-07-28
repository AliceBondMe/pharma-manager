import { css } from "@emotion/react";

import { fadeInRight } from "../../../assets/styles/animations";

export const menuContainerStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  padding: 32px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 210px;
  height: 100vh;
  background-color: var(--accent);
  animation: ${fadeInRight} 500ms ease-in-out;

  @media screen and (min-width: 768px) {
    width: 300px;
    padding: 39px 32px 64px 32px;
  }
`;

export const closeButtonStyle = css`
  width: 32px;
  height: 32px;
  padding: 0;
  margin-left: auto;
  background-color: transparent;
  transition: transform var(--transition-main);

  &:hover {
    transform: rotate(180deg);
  }
`;

// .menuHeader {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 166px;
// }

// .imageContainer {
//   margin: auto -16px -16px -16px;

//   @media screen and (min-width: 768px) {
//     margin: auto -32px -20px -32px;
//   }
// }
