import { FC } from "react";
import { Link } from 'react-router-dom';

import { IoMdAdd } from "react-icons/io";

import ShopList from '../../components/ShopsList/ShopsList';
import { ACTIVATE_SHOP, CREATE_NEW_SHOP, YOUR_SHOPS } from '../../constants/strings';

import { createShopLinkStyle, instructionsStyle, titleStyle } from './ShopPage.styles';

const ShopPage: FC = () => {
  return <>
    <h2 css={titleStyle}>{YOUR_SHOPS}</h2>
    <p css={instructionsStyle}>{ACTIVATE_SHOP}</p>
    <ShopList />
    <Link to='/create-shop' css={createShopLinkStyle}>{<IoMdAdd/>} {CREATE_NEW_SHOP}</Link>
  </>;
};
export default ShopPage;
