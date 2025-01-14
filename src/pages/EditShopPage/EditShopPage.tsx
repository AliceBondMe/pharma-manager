import { FC } from "react";

import { ShopForm } from '../../components';
import MedicinePicture from '../CreateShopPage/subComponents/MedicinePicture';
import { EDIT_SHOP_TITLE, SHOP_INFO_WARNING } from '../../constants/strings';

import { containerStyle, messageStyle, titleStyle, wrapStyle } from '../CreateShopPage/CreateShopPage.styles';

const EditShopPage: FC = () => {
  return <div css={containerStyle}>
    <div css={wrapStyle}>
      <h2 css={titleStyle}>{EDIT_SHOP_TITLE}</h2>
      <p css={messageStyle}>{SHOP_INFO_WARNING}</p>

      <ShopForm />
    </div>

    <MedicinePicture/>
  </div>;
};
export default EditShopPage;
