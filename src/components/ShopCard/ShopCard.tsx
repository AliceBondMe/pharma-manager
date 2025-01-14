import { FC } from 'react'

import { BsShop } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { PiPackage } from "react-icons/pi";

import { ShopResponse } from '../../redux/types'

import { buttonsContainerStyle, cardContainerStyle, deleteButtonStyle, editButtonStyle, infoStyle, titlePartStyle, titleStyle } from './ShopCard.styles';
import { BUTTON_DELETE, BUTTON_EDIT_DATA, DELIVERY_SYSTEM, MEDICINES_ADDED } from '../../constants/strings';
import { useDispatch, useSelector } from 'react-redux';
import { selectShopActivated } from '../../redux/shop/selectors';
import { useNavigate } from 'react-router';
import { AppDispatch } from '../../redux/store';
import { deleteShop } from '../../redux/shop/operations';
import { activateShopAction } from '../../redux/shop/shopSlice';

interface ShopCardProps {
  shop: ShopResponse;
}

const ShopCard: FC<ShopCardProps> = ({ shop }) => {
  const {
    _id,
    shopName,
    shopOwnerName,
    email,
    postal,
    city,
    address,
    phone,
    hasDeliverySystem,
    products
  } = shop;

  const shopActivated = useSelector(selectShopActivated);
  const isActivated = _id === shopActivated?._id;
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleEdit = () => { 
  navigate(`/edit-shop/${_id}`)
  }
  
  const handleDelete = () => {
    dispatch(deleteShop(_id));
  }

  const handleCardClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = (e.target as HTMLElement).nodeName;
    if (e.currentTarget.id === 'card' && target !== 'BUTTON') {
      dispatch(activateShopAction(shop));
    }
  }

  return <li css={cardContainerStyle(isActivated)} id='card' onClick={handleCardClick}>
    <div css={titlePartStyle}>
      <BsShop />
      <h2 css={titleStyle}>{shopName}</h2>
    </div>
    
    <p css={infoStyle}><GoPerson /> <span>{shopOwnerName}</span></p>
    <p css={infoStyle}><MdOutlineAlternateEmail /> <span>{email}</span></p>
    <p css={infoStyle}><LuMapPin /> <span>{postal}, {city}, {address}</span></p>
    <p css={infoStyle}><LuPhone /> <span>{phone}</span></p>
    <p css={infoStyle}>{hasDeliverySystem ? <AiOutlineCheck /> : <RxCross1 style={{ color: 'var(--error)' }} />} <span>{DELIVERY_SYSTEM}</span></p>
    <p css={infoStyle}><PiPackage /> <span>{products.length} {MEDICINES_ADDED}</span></p>

    <div css={buttonsContainerStyle}>
      <button type="button" onClick={handleEdit} css={editButtonStyle}>{BUTTON_EDIT_DATA}</button>
      <button type="button" onClick={handleDelete} css={deleteButtonStyle}>{BUTTON_DELETE}</button>
    </div>
  </li>
};

export default ShopCard;