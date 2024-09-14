import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "../../components";
import { Loader } from "../../components/common";

import { containerStyle, mainContainerStyle } from "./SharedLayout.styles";

const SharedLayout: FC = () => {
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
      <Footer />
    </div>
  );
};

export default SharedLayout;
