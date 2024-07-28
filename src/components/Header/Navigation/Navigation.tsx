import { FC } from "react";
import { NavLink } from "react-router-dom";

import { linkStyle, navStyle } from "./Navigation.styles";

const Navigation: FC = () => {
  return (
    <nav css={navStyle}>
      <NavLink to="shop" css={linkStyle}>
        Shop
      </NavLink>
      <NavLink to="medicines" css={linkStyle}>
        Medicines
      </NavLink>
      <NavLink to="statistics" css={linkStyle}>
        Statistics
      </NavLink>
    </nav>
  );
};

export default Navigation;
