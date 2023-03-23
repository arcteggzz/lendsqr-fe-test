import React, { useState, useRef } from "react";
import styles from "./TabLinks.module.scss";

const TabLinks = () => {
  return (
    <>
      <div className={styles.TabLinks}>
        <p className={styles.active_link}>General Details</p>
        <p>Documents</p>
        <p>Bank Details</p>
        <p>Loans</p>
        <p>Savings</p>
        <p>App and System</p>
      </div>
    </>
  );
};

export default TabLinks;
