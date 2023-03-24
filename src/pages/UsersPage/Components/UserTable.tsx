import { useState, useEffect } from "react";
import styles from "./UserTable.module.scss";
import TableHeader from "./TableHeader";
import UserTableInfo from "./UserTableInfo";
import { UserProps, User } from "../../../utils/Users.types";

const UserTable = ({ users }: UserProps) => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  return (
    <>
      <div className={styles.UserTable}>
        <TableHeader />
        <UserTableInfo users={userList} />
      </div>
    </>
  );
};

export default UserTable;
