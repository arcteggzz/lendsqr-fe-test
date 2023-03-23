import React, { useState, useRef } from "react";
import styles from "./UserTable.module.scss";
import TableHeader from "./TableHeader";
import UserTableInfo from "./UserTableInfo";
import { UserProps } from "../../../utils/Users.types";

const UserTable = (props: UserProps) => {
  return (
    <>
      <div className={styles.UserTable}>
        <TableHeader />
        <UserTableInfo users={props.users} />
      </div>
    </>
  );
};

export default UserTable;
