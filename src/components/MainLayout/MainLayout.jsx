import { Suspense } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import WorkTogether from "../WorkTogether/WorkTogether";
import Loader from "../../components/UI/Loader/Loader";

import css from "./MainLayout.module.css";

const MainLayout = () => {
  const location = useLocation();
  const isMain = location.pathname === "/";
  return (
    <div className={css.container}>
      {!isMain && <AppBar />}

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {!isMain && <WorkTogether />}

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
