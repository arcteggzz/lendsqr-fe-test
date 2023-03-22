import React, { useState, useRef } from "react";
import styles from "./TestPage.module.scss";

const TestPage = () => {
  return (
    <>
      <div className={styles.TableHeader}>
        <div className={styles.Sidebar}>SideBar</div>
        <div className={styles.Outlet}>Outlet</div>
      </div>
    </>
  );
};

export default TestPage;
