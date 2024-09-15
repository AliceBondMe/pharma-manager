import { useEffect, useState } from "react";

export const useIsMobileTabletDesctop = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(
    window.innerWidth < 1440
  );
  const [isTabletOrDesctop, setIsTabletOrDesctop] = useState<boolean>(
    window.innerWidth >= 768
  );

  const handleResize = () => {
    window.innerWidth < 1440
      ? setIsMobileOrTablet(true)
      : setIsMobileOrTablet(false);
    window.innerWidth >= 768
      ? setIsTabletOrDesctop(true)
      : setIsTabletOrDesctop(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobileOrTablet, isTabletOrDesctop };
};
