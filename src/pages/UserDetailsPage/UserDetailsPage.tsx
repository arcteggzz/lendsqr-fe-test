import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./UserDetailsPage.module.scss";
import back_arrow from "../../assets/images/back_arrow.png";
import UserProfile from "./Components/UserProfile";
import GeneralDetails from "./Components/GeneralDetails";

const UserDetailsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className={styles.UserDetailsPage}>
        <div className={styles.backLink}>
          <Link to={"/dashboard/users"}>
            <img src={back_arrow} alt="back arrow icon" />
          </Link>
          <p>Back to Users</p>
        </div>
        <main className={styles.pageHeader}>
          <h1>User Details</h1>
          <div className={styles.userButtons}>
            <button className={styles.blacklist_btn}>Blacklist User</button>
            <button className={styles.activate_btn}>Activate User</button>
          </div>
        </main>
        <UserProfile />
        <GeneralDetails />
      </div>
    </>
  );
};

export default UserDetailsPage;
