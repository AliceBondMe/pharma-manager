import { FC } from "react";

import { COPYRIGHT, PRIVACY_POLICY, TERMS } from '../../../constants/strings';

import { termsItemStyle, termsListStyle } from "./TermsList.styles";

const TermsList: FC = () => {
  return (
    <ul css={termsListStyle}>
      <li css={termsItemStyle}>
        <span>{COPYRIGHT}</span>
      </li>
      <li css={termsItemStyle}>
        <a
          href="https://en.wikipedia.org/wiki/Privacy_policy"
          target="blank"
          rel="noopener noreferrer"
        >
          {PRIVACY_POLICY}
        </a>
      </li>
      <li css={termsItemStyle}>
        <a
          href="https://en.wikipedia.org/wiki/Contractual_term"
          target="blank"
          rel="noopener noreferrer"
        >
          {TERMS}
        </a>
      </li>
    </ul>
  );
};

export default TermsList;
