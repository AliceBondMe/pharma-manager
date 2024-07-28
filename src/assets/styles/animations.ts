import { keyframes } from "@emotion/react";

export const fadeInRight = keyframes`
  from {
    transform: translateX(100vw);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
