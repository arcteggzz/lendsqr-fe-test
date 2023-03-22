import React, { useState, useRef } from "react";
import styles from "./UserTableInfo.module.scss";

type InfoCardProps = {
  info: {
    icon: string;
    textDescription: string;
    number: string;
  };
};

const UserTableInfo = () => {
  return (
    <>
      <div className={styles.UserTable}>UserTableInfo</div>
    </>
  );
};

export default UserTableInfo;
