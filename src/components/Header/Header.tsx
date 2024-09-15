import { FC, useState } from "react";
import { IoIosMenu } from "react-icons/io";

import { Logo } from "../common";
import Navigation from "../common/Navigation/Navigation";
import LogoutButton from "./LogoutButton/LogoutButton";
import MobileMenu from "./MobileMenu/MobileMenu";

import { useIsMobileTabletDesctop } from "../../hooks/useIsMobileTabletDesctop";
import { useIsAuthPage } from "../../hooks/useIsAuthPage";

import { headerStyle, menuBtnStyle } from "./Header.styles";

const Header: FC = () => {
  const { isMobileOrTablet } = useIsMobileTabletDesctop();
  const { isAuthPage } = useIsAuthPage();
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
      <Logo color="currentColor" fill="var(--accent)" />

      {!isAuthPage &&
        (!isMobileOrTablet ? (
          <>
            <Navigation fancyStyled />
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
        ))}

      {isMobileMenulOpen && <MobileMenu closeMobileMenu={closeMobileMenu} />}
    </div>
  );
};

export default Header;
