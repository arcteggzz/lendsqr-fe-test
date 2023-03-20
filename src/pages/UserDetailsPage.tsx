import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";

const UserDetailsPage = () => {
  return (
    <>
      <div className={styles.LandingPage}>
        <h1>UserDetailsPage</h1>
        <Link to={`/login`} className={styles.link}>
          Login
        </Link>
      </div>
    </>
  );
};

export default UserDetailsPage;
