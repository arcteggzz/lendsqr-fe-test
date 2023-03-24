import { useContext, useEffect } from "react";
import SingleTableData from "./SingleTableData";
import styles from "./UserTableInfo.module.scss";
import { UserProps, User } from "../../../utils/Users.types";
import { AppContext } from "../../../context/AppContext";

const UserTableInfo = ({ users }: UserProps) => {
  const { currentPage, itemsPerPage } = useContext(AppContext);

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
