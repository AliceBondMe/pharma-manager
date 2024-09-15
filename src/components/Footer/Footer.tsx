import { FC } from "react";

import { Logo } from "../common";
import Navigation from "../common/Navigation/Navigation";

import TermsList from "./TermsList/TermsList";
import SocialsList from "./SocialsList/SocialsList";

import {
  footerMainStyle,
  footerPartStyle,
  footerStyle,
  textStyle,
} from "./Footer.styles";
import { useIsMobileTabletDesctop } from "../../hooks/useIsMobileTabletDesctop";

const Footer: FC = () => {
  const { isTabletOrDesctop } = useIsMobileTabletDesctop();

  return (
    <div css={footerStyle}>
      <div css={footerMainStyle}>
        <div>
          <Logo color="currentColor" fill="currentColor" />
          <p css={textStyle}>
            Created a drug franchise that embodies effective formulas and
            changes the approach to treatment.
          </p>
        </div>

        <div css={footerPartStyle}>
          <Navigation />
          {isTabletOrDesctop && <SocialsList />}
        </div>
      </div>

      <TermsList />
    </div>
  );
};

export default Footer;
