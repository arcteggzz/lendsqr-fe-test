import React, { useState, useEffect, useContext } from "react";
import styles from "./UserProfile.module.scss";
import open_star_icon from "../../../assets/images/open_star_icon.png";
import avatar_icon from "../../../assets/images/avatar.png";
import filled_star_icon from "../../../assets/images/filled_star_icon.png";
import TabLinks from "./TabLinks";

const UserProfile = () => {
  return (
    <>
      <div className={styles.UserProfile}>
        <div className={styles.UserProfile_container}>
          <div className={styles.userName_avatar}>
            <img
              src={avatar_icon}
              alt="user_avatar"
              className={styles.avatar_icon}
            />
            <div className={styles.name_panel}>
              <h2>Grace Effiom</h2>
              <p>LSQFf587g90</p>
            </div>
          </div>

          <div className={styles.user_tier}>
            <p>User’s Tier</p>
            <div className={styles.stars}>
              <img src={filled_star_icon} alt="star_icon" />
              <img src={open_star_icon} alt="star_icon" />
              <img src={open_star_icon} alt="star_icon" />
            </div>
          </div>
          <div className={styles.account_details}>
            <h2>₦200,000.00</h2>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <TabLinks />
      </div>
    </>
  );
};

export default UserProfile;
