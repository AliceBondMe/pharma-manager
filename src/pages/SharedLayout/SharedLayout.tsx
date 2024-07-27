import { FC, Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../../components/common/Loader/Loader";

const SharedLayout: FC = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="register">Registration</NavLink>
          <NavLink to="medicines">Medicines</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
