import { FC } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

import Navigation from "../Navigation/Navigation";
import LogoutButton from "../LogoutButton/LogoutButton";

import { MobileMenuProps } from "./types";

import { closeButtonStyle, menuContainerStyle } from "./MobileMenu.styles";

const modalRoot = document.querySelector("#modal-root");

const MobileMenu: FC<MobileMenuProps> = ({ closeMobileMenu }) => {
  return createPortal(
    <div css={menuContainerStyle}>
      <button
        type="button"
        aria-label="Close menu"
        onClick={closeMobileMenu}
        css={closeButtonStyle}
      >
        <IoCloseOutline size={32} color="var(--text-contrast)" />
      </button>

      <Navigation />
      <LogoutButton />
    </div>,
    modalRoot as HTMLElement
  );
};

export default MobileMenu;
