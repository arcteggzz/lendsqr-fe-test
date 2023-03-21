import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import InfoCard from "./Components/InfoCard";
import styles from "./UsersPage.module.scss";
import active_users_icon from "../../assets/images/active_users_icon.png";
import users_loans_icon from "../../assets/images/users_loans_icon.png";
import users_savings_icon from "../../assets/images/users_savings_icon.png";
import users_users_icon from "../../assets/images/users_users_icon.png";

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

  return (
    <>
      <div className={styles.UsersPage}>
        <h1>Users</h1>
        <section className={styles.InfoCards}>
          {InfoCardData.map((info) => {
            return <InfoCard info={info} />;
          })}
        </section>
      </div>
    </>
  );
};

export default UsersPage;
