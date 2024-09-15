import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "../../components";
import { Loader } from "../../components/common";
import { useIsAuthPage } from "../../hooks/useIsAuthPage";

import { containerStyle, mainContainerStyle } from "./SharedLayout.styles";

const SharedLayout: FC = () => {
  const { isAuthPage } = useIsAuthPage();

  return (
    <div css={mainContainerStyle}>
      <div css={containerStyle}>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default SharedLayout;
