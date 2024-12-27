import { FC } from "react";

import { buttonStyle } from "./LogoutButton.styles";
import { LOGOUT_BTN } from '../../../constants/strings';

const LogoutButton: FC = () => {
  return (
    <button type="button" css={buttonStyle}>
      {LOGOUT_BTN}
    </button>
  );
};

export default LogoutButton;
