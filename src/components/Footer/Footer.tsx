import { FC } from "react";

import { Logo } from "../common";
import Navigation from "../common/Navigation/Navigation";

import { footerStyle, textStyle } from "./Footer.styles";
import TermsList from "./TermsList/TermsList";
import SocialsList from "./SocialsList/SocialsList";

const Footer: FC = () => {
  return (
    <div css={footerStyle}>
      <Logo color="currentColor" fill="currentColor" />

      <p css={textStyle}>
        Get the medicine to help you feel better, get back to your active life,
        and enjoy every moment.
      </p>

      <Navigation />
      <SocialsList />
      <TermsList />
    </div>
  );
};

export default Footer;
