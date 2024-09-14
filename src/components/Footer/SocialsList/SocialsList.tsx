import { FC } from "react";
import { ImFacebook } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

import { socialsLinkStyle, socialsListStyle } from "./Socials.styles";

const SocialsList: FC = () => {
  return (
    <ul css={socialsListStyle}>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          css={socialsLinkStyle}
        >
          <ImFacebook size={28} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          css={socialsLinkStyle}
        >
          <RiInstagramFill size={28} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          css={socialsLinkStyle}
        >
          <FaYoutube size={28} />
        </a>
      </li>
    </ul>
  );
};

export default SocialsList;
