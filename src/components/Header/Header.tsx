import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import LogoutButton from "./LogoutButton/LogoutButton";
import MobileMenu from "./MobileMenu/MobileMenu";

import { useIsMobile } from "../../hooks/useIsMobile";

import { headerStyle, logoGroupStyle, menuBtnStyle } from "./Header.styles";

const Header: FC = () => {
  const { isMobile } = useIsMobile();
  const [isMobileMenulOpen, setIsMobileMenulOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenulOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenulOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <div css={headerStyle}>
      <Link to="/" css={logoGroupStyle}>
        <Logo />
        <span>E-Pharmacy</span>
      </Link>

      {!isMobile ? (
        <>
          <Navigation />
          <LogoutButton />
        </>
      ) : (
        <button
          type="button"
          aria-label="open menu"
          onClick={openMobileMenu}
          css={menuBtnStyle}
        >
          <IoIosMenu size={32} color="var(--accent)" />
        </button>
      )}

      {isMobileMenulOpen && <MobileMenu closeMobileMenu={closeMobileMenu} />}
    </div>
  );
};

export default Header;
