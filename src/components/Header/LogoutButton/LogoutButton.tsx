import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { LOGOUT_BTN, WELCOME } from '../../../constants/strings';
import { AppDispatch } from '../../../redux/store';
import { logoutUser } from '../../../redux/auth/operations';
import { selectUserName } from '../../../redux/auth/selectors';

import { buttonStyle, messageStyle, wrapStyle } from "./LogoutButton.styles";

const LogoutButton: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const shortUsername = (userName && userName.length > 25) ? userName.slice(0, 22) + '...' : userName;

  const handleLogout = () => { 
    dispatch(logoutUser());
 }

  return (
    <div>
      {
        userName && 
          <div css={wrapStyle}>
            <p css={messageStyle}>{WELCOME}{ shortUsername }</p>
            <button type="button" css={buttonStyle} onClick={handleLogout}>
              {LOGOUT_BTN}
            </button>
          </div>
      }
    </div>
  );
};

export default LogoutButton;
