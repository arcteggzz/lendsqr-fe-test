import React, { useState, useRef } from "react";
import styles from "./UserTable.module.scss";
import TableHeader from "./TableHeader";
import UserTableInfo from "./UserTableInfo";

const UserTable = () => {
  return (
    <>
      <div className={styles.UserTable}>
        <TableHeader />
        <UserTableInfo />
      </div>
    </>
  );
};

export default UserTable;
