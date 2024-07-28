import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components";
import { Loader } from "../../components/common";

import { mainContainerStyle } from "./SharedLayout.styles";

const SharedLayout: FC = () => {
  return (
    <div css={mainContainerStyle}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
