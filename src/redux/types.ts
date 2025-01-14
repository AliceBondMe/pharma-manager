export interface ErrorResponse {
  message: string;
}

export interface AuthState {
  email: string | null;
  name: string | null;
  phone: string | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  authError: ErrorResponse | null | undefined;
}

export interface UserData {
  name?: string;
  email: string;
  phone?: string;
  password: string;
}

export interface AuthResponse {
  user: {
    _id: string;
    email: string;
    name: string;
    phone: string;
    token: string;
  }
}

export interface LogoutResponse {
  message: string;
}

export interface ShopResponse {
    _id: string;
    shopName: string;
    shopOwnerName: string;
    email: string;
    phone:  string;
    address:  string;
    city:  string;
    postal:  string;
    hasDeliverySystem: boolean;
    owner: UserData,
    products: [],
}

export interface ShopData {
  shopName: string;
  shopOwnerName: string;
  email: string;
  phone:  string;
  address:  string;
  city:  string;
  postal:  string;
  hasDeliverySystem: boolean;
}

export interface EditShopData {
  id: string;
  shopInfo: ShopData;
}

export interface ShopsState {
  shops: ShopResponse[];
  shopsError: ErrorResponse | null | undefined;
  shopActivated: ShopResponse | null;
}