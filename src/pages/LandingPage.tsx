import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <>
      <div className={styles.LandingPage}>
        <h1>LandingPage</h1>
        <Link to={`/login`} className={styles.link}>
          Login
        </Link>
        <Link to={`/dashboard`} className={styles.link}>
          Dashboard
        </Link>
        <Link to={`/dashboard/users`} className={styles.link}>
          users
        </Link>
        <Link to={`/dashboard/users/gega`} className={styles.link}>
          UserDetails
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
