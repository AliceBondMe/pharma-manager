import { FC } from "react";

import medicineImg from "../../assets/images/medicine.png";

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
        alt="Medicine pills grouped with green leaves"
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
