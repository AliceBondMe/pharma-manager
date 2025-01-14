import { FC, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ShopCard from '../ShopCard/ShopCard';
import { NO_SHOPS } from '../../constants/strings';

import { AppDispatch } from '../../redux/store';
import { getShops } from '../../redux/shop/operations';
import { selectShops } from '../../redux/shop/selectors';

import { listStyle } from './ShopsList.styles';

const ShopList: FC = () => {
  const shops = useSelector(selectShops);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch])

  if (!shops.length) return <p>{NO_SHOPS}</p>

  return <ul css={listStyle}>
    {shops.map(shop => <ShopCard key={shop._id} shop={shop}/>)}
  </ul>
};

export default ShopList;