import { ComponentType, LazyExoticComponent, Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AppDispatch } from './redux/store';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { Loader } from './components/common';
import { PrivateRoute, RestrictedRoute } from './routes';

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
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])
  

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Navigate to={"/register"} replace/>}/>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/register" element={<RestrictedRoute redirectTo='/shop' component={<RegisterPage />}/>} />
          <Route path="/login" element={<RestrictedRoute redirectTo='/shop' component={<LoginPage />}/>} />
          <Route path="/create-shop" element={<PrivateRoute redirectTo='/' component={<CreateShopPage />}/>} />
          <Route path="/edit-shop" element={<PrivateRoute redirectTo='/' component={<EditShopPage/>}/>} />
          <Route path="/shop" element={<PrivateRoute redirectTo='/' component={<ShopPage/>}/>} />
          <Route path="/medicines" element={<PrivateRoute redirectTo='/' component={<MedicinesPage />}/>} />
          <Route
            path="/medicines/:medicineId"
            element={<PrivateRoute redirectTo='/' component={<MedicineDetailesPage />}/>}
          />
          <Route path="/statistics" element={<PrivateRoute redirectTo='/' component={<StatisticsPage />}/>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
