import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

export interface RouteProps {
  component: ReactElement;
  redirectTo: string;
}

const PrivateRoute: FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}): ReactElement => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const notAuthorised = !isLoggedIn && !isRefreshing;

  return notAuthorised ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
