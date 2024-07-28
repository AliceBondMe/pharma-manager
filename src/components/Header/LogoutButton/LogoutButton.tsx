import { FC } from "react";

import { buttonStyle } from "./LogoutButton.styles";

const LogoutButton: FC = () => {
  return (
    <button type="button" css={buttonStyle}>
      Log out
    </button>
  );
};

export default LogoutButton;
