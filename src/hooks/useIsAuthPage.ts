import { useLocation } from "react-router";

export const useIsAuthPage = () => {
  const { pathname } = useLocation();

  const isAuthPage =
    pathname.includes("register") || pathname.includes("login");

  return { isAuthPage };
};
