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