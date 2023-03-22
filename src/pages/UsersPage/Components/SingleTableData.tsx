import React, { useState, useRef } from "react";
import styles from "./SingleTableData.module.scss";
import options_icon from "../../../assets/images/options_icon.png";

type SingleTableDataProps = {
  user: {};
  id: number;
};

const SingleTableData = (props: SingleTableDataProps) => {
  const userStatus = "Inactive";

  const dateTimeFormatter = (dateTimeString: string) => {
    const monthNumber = +dateTimeString.substring(5, 7);
    const month = getMonthName(monthNumber);
    const day = dateTimeString.substring(8, 10);
    const year = dateTimeString.substring(0, 4);
    const timeString = dateTimeString.substring(11, 16);
    const meridean = +dateTimeString.substring(11, 13);
    const merideanTime = meridean > 12 ? "AM" : "PM";
    return `${month} ${day}, ${year} ${timeString} ${merideanTime}`;
  };

  function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-US", { month: "long" });
  }
  return (
    <>
      <hr className={props.id !== 0 ? styles.showLine : styles.hideLine} />
      <div className={styles.SingleTableData}>
        <div className={styles.userdetails}>
          <p>{props.user.orgName}</p>
          <p>{props.user.userName}</p>
          <p>{props.user.email}</p>
          <p>{props.user.phoneNumber}</p>
          <p>{dateTimeFormatter(props.user.createdAt)}</p>
          <div>Inactive</div>
        </div>
        <div className={styles.options_icon}>
          <img src={options_icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default SingleTableData;
