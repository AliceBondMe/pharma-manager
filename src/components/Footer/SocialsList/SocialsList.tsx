import { FC } from "react";
import { ImFacebook } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

import { FACEBOOK_LABEL, INSTAGRAM_LABEL, YOUTUBE_LABEL } from '../../../constants/strings';

import { socialsLinkStyle, socialsListStyle } from "./Socials.styles";

const SOCIAL_ICONS_SIZE = 28;

const SocialsList: FC = () => {
  return (
    <ul css={socialsListStyle}>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          css={socialsLinkStyle}
          aria-label={FACEBOOK_LABEL}
        >
          <ImFacebook size={SOCIAL_ICONS_SIZE} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          css={socialsLinkStyle}
          aria-label={INSTAGRAM_LABEL}
        >
          <RiInstagramFill size={SOCIAL_ICONS_SIZE} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          css={socialsLinkStyle}
          aria-label={YOUTUBE_LABEL}
        >
          <FaYoutube size={SOCIAL_ICONS_SIZE} />
        </a>
      </li>
    </ul>
  );
};

export default SocialsList;
