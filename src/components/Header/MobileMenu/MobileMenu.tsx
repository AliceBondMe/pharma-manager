import { FC } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

import Navigation from "../../common/Navigation/Navigation";
import LogoutButton from "../LogoutButton/LogoutButton";
import { CLOSE_MENU_BTN_LABEL } from '../../../constants/strings';

import { closeButtonStyle, menuContainerStyle } from "./MobileMenu.styles";

const ICON_SIZE = 32;
const modalRoot = document.querySelector("#modal-root");

interface MobileMenuProps {
  closeMobileMenu: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ closeMobileMenu }) => {
  return createPortal(
    <div css={menuContainerStyle}>
      <button
        type="button"
        aria-label={CLOSE_MENU_BTN_LABEL}
        onClick={closeMobileMenu}
        css={closeButtonStyle}
      >
        <IoCloseOutline size={ICON_SIZE} color="var(--text-contrast)" />
      </button>

      <Navigation closeMobileMenu={closeMobileMenu} fancyStyled />
      <LogoutButton />
    </div>,
    modalRoot as HTMLElement
  );
};

export default MobileMenu;
