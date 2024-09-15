import { FC } from "react";

import { termsItemStyle, termsListStyle } from "./TermsList.styles";

const TermsList: FC = () => {
  return (
    <ul css={termsListStyle}>
      <li css={termsItemStyle}>
        <span>© E-Pharmacy 2024. All Rights Reserved</span>
      </li>
      <li css={termsItemStyle}>
        <a
          href="https://en.wikipedia.org/wiki/Privacy_policy"
          target="blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </li>
      <li css={termsItemStyle}>
        <a
          href="https://en.wikipedia.org/wiki/Contractual_term"
          target="blank"
          rel="noopener noreferrer"
        >
          Terms & Conditions
        </a>
      </li>
    </ul>
  );
};

export default TermsList;
