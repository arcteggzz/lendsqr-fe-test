import { useLocation, Navigate, Outlet } from "react-router-dom";
import Topbar from "../Components/TopBar";
import Sidebar from "../Components/Sidebar";
import styles from "./DashboardLayout.module.scss";

const DashboardLayout = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLogin");

  return isLoggedIn ? (
    <>
      <main className={styles.Layout}>
        <nav className={styles.topbar}>
          <Topbar />
        </nav>
        <section className={styles.sidebar}>
          <div>
            <Sidebar />
          </div>
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </section>
      </main>
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default DashboardLayout;
