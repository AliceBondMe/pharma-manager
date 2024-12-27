import { FC } from "react";

import { Logo } from "../common";
import Navigation from "../common/Navigation/Navigation";

import TermsList from "./TermsList/TermsList";
import SocialsList from "./SocialsList/SocialsList";

import { useIsMobileTabletDesctop } from "../../hooks/useIsMobileTabletDesctop";
import { FOOTER_TEXT } from '../../constants/strings';

import {
  footerMainStyle,
  footerPartStyle,
  footerStyle,
  textStyle,
} from "./Footer.styles";

const Footer: FC = () => {
  const { isTabletOrDesctop } = useIsMobileTabletDesctop();

  return (
    <div css={footerStyle}>
      <div css={footerMainStyle}>
        <div>
          <Logo color="currentColor" fill="currentColor" />
          <p css={textStyle}>
            {FOOTER_TEXT}
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
