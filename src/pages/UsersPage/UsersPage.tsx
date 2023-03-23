import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import InfoCard from "./Components/InfoCard";
import styles from "./UsersPage.module.scss";
import active_users_icon from "../../assets/images/active_users_icon.png";
import users_loans_icon from "../../assets/images/users_loans_icon.png";
import users_savings_icon from "../../assets/images/users_savings_icon.png";
import users_users_icon from "../../assets/images/users_users_icon.png";
import UserTable from "./Components/UserTable";
import PageControls from "./Components/PageControls";

const UsersPage = () => {
  const InfoCardData = [
    {
      icon: users_users_icon,
      textDescription: "Users",
      number: "2,453",
    },
    {
      icon: active_users_icon,
      textDescription: "Active Users",
      number: "2,453",
    },
    {
      icon: users_loans_icon,
      textDescription: "Users with Loans",
      number: "12,453",
    },
    {
      icon: users_savings_icon,
      textDescription: "Users with savings",
      number: "102,453",
    },
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <>
      <div className={styles.UsersPage}>
        <h1>Users</h1>
        <section className={styles.InfoCards}>
          {InfoCardData.map((info) => {
            return <InfoCard info={info} key={info.textDescription} />;
          })}
        </section>
        <UserTable users={users} />
        <PageControls />
      </div>
    </>
  );
};

export default UsersPage;
