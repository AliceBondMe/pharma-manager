import { FC } from "react";
import { Link } from "react-router-dom";

import LogoImage from "./LogoImage";
import { logoGroupStyle } from "./Logo.styles";
import { LogoProps } from "./types";

const Logo: FC<LogoProps> = ({ color, fill, width, height, viewBox }) => {
  return (
    <Link to="/" css={logoGroupStyle(color)}>
      <LogoImage width={width} height={height} viewBox={viewBox} fill={fill} />
      <span>E-Pharmacy</span>
    </Link>
  );
};

export default Logo;
