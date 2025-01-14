import { FC } from 'react';

import medicine_bottle_mob_1x from '../../../assets/images/medicine_bottle_mob_1x.png';
import medicine_bottle_mob_2x from '../../../assets/images/medicine_bottle_mob_2x.png';
import medicine_bottle_tabl_1x from '../../../assets/images/medicine_bottle_tablet_1x.png';
import medicine_bottle_tabl_2x from '../../../assets/images/medicine_bottle_tablet_2x.png';
import medicine_bottle_desc_1x from '../../../assets/images/medicine_bottle_desc_1x.png';
import medicine_bottle_desc_2x from '../../../assets/images/medicine_bottle_desc_2x.png';

import { BOTTLE_PICTURE_ALT } from '../../../constants/strings';

import { pictureStyle } from '../CreateShopPage.styles';

const MedicinePicture: FC = () => {
  return <picture css={pictureStyle}>
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
};
export default MedicinePicture;