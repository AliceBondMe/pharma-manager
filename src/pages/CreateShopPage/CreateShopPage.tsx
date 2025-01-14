import { FC } from "react";

import { CREATE_SHOP_TITLE, SHOP_INFO_WARNING } from '../../constants/strings';
import { ShopForm } from '../../components';

import { containerStyle, messageStyle, titleStyle, wrapStyle } from './CreateShopPage.styles';
import MedicinePicture from './subComponents/MedicinePicture';

const CreateShopPage: FC = () => {
  return <div css={containerStyle}>
    <div css={wrapStyle}>
      <h2 css={titleStyle}>{CREATE_SHOP_TITLE}</h2>
      <p css={messageStyle}>{SHOP_INFO_WARNING}</p>

      <ShopForm />
    </div>

    <MedicinePicture/>
  </div>
};
export default CreateShopPage;
