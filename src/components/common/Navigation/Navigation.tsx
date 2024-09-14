import { FC } from "react";
import { NavLink } from "react-router-dom";

import { NavigationProps } from "./types";
import {
  linkFancyStyle,
  linkPlainStyle,
  navFancyStyle,
  navPlainStyle,
} from "./Navigation.styles";

const Navigation: FC<NavigationProps> = ({ closeMobileMenu, fancyStyled }) => {
  return (
    <nav css={fancyStyled ? navFancyStyle : navPlainStyle}>
      <NavLink
        to="shop"
        css={fancyStyled ? linkFancyStyle : linkPlainStyle}
        onClick={closeMobileMenu}
      >
        Shop
      </NavLink>
      <NavLink
        to="medicines"
        css={fancyStyled ? linkFancyStyle : linkPlainStyle}
        onClick={closeMobileMenu}
      >
        Medicines
      </NavLink>
      <NavLink
        to="statistics"
        css={fancyStyled ? linkFancyStyle : linkPlainStyle}
        onClick={closeMobileMenu}
      >
        Statistics
      </NavLink>
    </nav>
  );
};

export default Navigation;
