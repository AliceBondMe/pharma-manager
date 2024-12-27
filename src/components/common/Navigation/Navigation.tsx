import { FC } from "react";
import { NavLink } from "react-router-dom";

import { MEDICINES_PAGE_NAME, SHOP_PAGE_NAME, STATISTICS_PAGE_NAME } from '../../../constants/strings';
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
        {SHOP_PAGE_NAME}
      </NavLink>
      <NavLink
        to="medicines"
        css={fancyStyled ? linkFancyStyle : linkPlainStyle}
        onClick={closeMobileMenu}
      >
        {MEDICINES_PAGE_NAME}
      </NavLink>
      <NavLink
        to="statistics"
        css={fancyStyled ? linkFancyStyle : linkPlainStyle}
        onClick={closeMobileMenu}
      >
        {STATISTICS_PAGE_NAME}
      </NavLink>
    </nav>
  );
};

export default Navigation;
