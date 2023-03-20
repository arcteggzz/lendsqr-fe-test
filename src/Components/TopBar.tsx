import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "./Topbar.module.scss";
import search from "../assets/images/search.png";
import dashboard_logo from "../assets/images/dashboard_logo.png";
import notification_icon from "../assets/images/notification_icon.png";
import avatar_icon from "../assets/images/avatar_icon.png";
import dropdown_icon from "../assets/images/dropdown_icon.png";
import hamburger_open from "../assets/images/hamburger_open.png";
import hamburger_close from "../assets/images/hamburger_close.png";

const Topbar = () => {
  // const { mobileSidebarOpen, setMobileSidebarOpen } = useContext(AppContext);
  // console.log(context?.mobileSidebarOpen);
  const sidebarOpen = true;
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.hamburger}>
          <img src={sidebarOpen ? hamburger_close : hamburger_open} alt="" />
        </div>
        <div className={styles.left_container}>
          <div className={styles.logo_burger_container}>
            <img
              src={dashboard_logo}
              alt="dashboard_logo"
              className={styles.dashboard_logo}
            />
          </div>

          <div className={styles.search_input_bar}>
            <input type="text" placeholder="Search for anything" />
            <div className={styles.search_icon}>
              <img src={search} alt="search_icon" />
            </div>
          </div>
        </div>
        <div className={styles.right_container}>
          <p>Docs</p>
          <div className={styles.user_details}>
            <img
              src={notification_icon}
              alt="notification_icon"
              className={styles.notification_icon}
            />
            <img
              src={avatar_icon}
              alt="avatar_icon"
              className={styles.avatar_icon}
            />
            <h3>Adedeji</h3>
            <img
              src={dropdown_icon}
              alt="dropdown_icon"
              className={styles.dropdown_icon}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
