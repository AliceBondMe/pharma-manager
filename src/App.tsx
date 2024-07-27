import { ComponentType, LazyExoticComponent, lazy } from "react";
import { Route, Routes } from "react-router";

const SharedLayout: LazyExoticComponent<ComponentType> = lazy(
  () => import("./pages/SharedLayout/SharedLayout")
);
const RegisterPage: LazyExoticComponent<ComponentType> = lazy(
  () => import("./pages/RegisterPage/RegisterPage")
);
const LoginPage: LazyExoticComponent<ComponentType> = lazy(
  () => import("./pages/LoginPage/LoginPage")
);
const CreateShopPage: LazyExoticComponent<ComponentType> = lazy(
  () => import("./pages/CreateShopPage/CreateShopPage")
);
const EditShopPage: LazyExoticComponent<ComponentType> = lazy(
  () => import("./pages/EditShopPage/EditShopPage")
);
const ShopPage: LazyExoticComponent<ComponentType> = lazy(
  () => import("./pages/ShopPage/ShopPage")
);
const MedicinesPage: LazyExoticComponent<ComponentType> = lazy(
  () => import("./pages/MedicinesPage/MedicinesPage")
);
const MedicineDetailesPage: LazyExoticComponent<ComponentType> = lazy(
  () => import("./pages/MedicineDetailesPage/MedicineDetailesPage")
);
const StatisticsPage: LazyExoticComponent<ComponentType> = lazy(
  () => import("./pages/StatisticsPage/StatisticsPage")
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="create-shop" element={<CreateShopPage />} />
          <Route path="edit-shop" element={<EditShopPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="medicines" element={<MedicinesPage />} />
          <Route
            path="medicines/:medicineId"
            element={<MedicineDetailesPage />}
          />
          <Route path="statistics" element={<StatisticsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
