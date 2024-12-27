import { FC } from "react";

import medicineImg from "../../assets/images/medicine.png";
import { MAIN_IMAGE_ALT } from '../../constants/strings';

import {
  imageStyle,
  mottoBlockStyle,
  textAccentedStyle,
  textStyle,
} from "./AuthMotto.styles";

const AuthMotto: FC = () => {
  return (
    <div css={mottoBlockStyle}>
      <img
        src={medicineImg}
        alt={MAIN_IMAGE_ALT}
        css={imageStyle}
      />
      <h1 css={textStyle}>
        From local
        <br /> to <em css={textAccentedStyle}>global</em> — create an online
        pharmacy shop and reach customers{" "}
        <em css={textAccentedStyle}>everywhere</em>
      </h1>
    </div>
  );
};

export default AuthMotto;
