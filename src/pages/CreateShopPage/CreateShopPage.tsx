import { FC } from "react";

import { BOTTLE_PICTURE_ALT, CREATE_SHOP_TITLE, SHOP_INFO_WARNING } from '../../constants/strings';
import { ShopForm } from '../../components';

import medicine_bottle_mob_1x from '../../assets/images/medicine_bottle_mob_1x.png';
import medicine_bottle_mob_2x from '../../assets/images/medicine_bottle_mob_2x.png';
import medicine_bottle_tabl_1x from '../../assets/images/medicine_bottle_tablet_1x.png';
import medicine_bottle_tabl_2x from '../../assets/images/medicine_bottle_tablet_2x.png';
import medicine_bottle_desc_1x from '../../assets/images/medicine_bottle_desc_1x.png';
import medicine_bottle_desc_2x from '../../assets/images/medicine_bottle_desc_2x.png';

import { containerStyle, messageStyle, pictureStyle, titleStyle, wrapStyle } from './CreateShopPage.styles';

const CreateShopPage: FC = () => {
  return <div css={containerStyle}>
    <div css={wrapStyle}>
      <h2 css={titleStyle}>{CREATE_SHOP_TITLE}</h2>
      <p css={messageStyle}>{SHOP_INFO_WARNING}</p>

      <ShopForm />
    </div>
    <picture css={pictureStyle}>
      <source
        srcSet={`${medicine_bottle_mob_1x} 1x, ${medicine_bottle_mob_2x} 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`${medicine_bottle_tabl_1x} 1x, ${medicine_bottle_tabl_2x} 2x`}
        media="(max-width: 1439px)"
      />
      <source
        srcSet={`${medicine_bottle_desc_1x} 1x, ${medicine_bottle_desc_2x} 2x`}
        media="(min-width: 1440px)"
      />
      <img src={medicine_bottle_mob_1x} alt={BOTTLE_PICTURE_ALT} />
    </picture>
  </div>
};
export default CreateShopPage;
