import { FC } from "react";
import { Link } from "react-router-dom";

import LogoImage from "./LogoImage";
import { LogoProps } from "./types";
import { LOGO } from '../../../constants/strings';
import { logoGroupStyle } from "./Logo.styles";

const Logo: FC<LogoProps> = ({ color, fill, width, height, viewBox }) => {
  return (
    <Link to="/" css={logoGroupStyle(color)}>
      <LogoImage width={width} height={height} viewBox={viewBox} fill={fill} />
      <span>{LOGO}</span>
    </Link>
  );
};

export default Logo;
