import React, { useContext, useEffect, useState } from "react";
import SingleTableData from "./SingleTableData";
import styles from "./UserTableInfo.module.scss";
import { UserProps, User } from "../../../utils/Users.types";
import { AppContext } from "../../../context/AppContext";

const UserTableInfo = ({ users }: UserProps) => {
  const { currentPage, itemsPerPage } = useContext(AppContext);

  useEffect(() => {
    console.log(`currentPage ${currentPage}, itemsPerPage${itemsPerPage}`);
  }, [itemsPerPage, currentPage]);

  return (
    <>
      <div className={styles.UserTableInfo}>
        {users
          .slice(
            currentPage * itemsPerPage - itemsPerPage,
            currentPage * itemsPerPage
          )
          .map((user, index) => {
            return (
              <SingleTableData
                user={user}
                key={`${user.userName}${user.createdAt}${index}`}
                id={index}
              />
            );
          })}
      </div>
    </>
  );
};

export default UserTableInfo;
