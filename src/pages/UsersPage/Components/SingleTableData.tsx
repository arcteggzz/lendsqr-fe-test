import React, { useEffect, useState, useRef } from "react";
import styles from "./SingleTableData.module.scss";
import options_icon from "../../../assets/images/options_icon.png";
import StatusOptionsMenu from "./StatusOptionsMenu";

type SingleTableDataProps = {
  user: {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
  };
  id: number;
};

const SingleTableData = (props: SingleTableDataProps) => {
  const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);
  let optionsMenuRef = useRef<HTMLDivElement>(null);

  const getMonthName = (monthNumber: number) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-US", { month: "long" });
  };

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

  const getCustomerStatus = (dateTimeString: string) => {
    const year = +dateTimeString.substring(0, 4);
    if (year > 2040) return "Pending";
    else if (year < 1990) return "Blacklisted";
    else if (year > 1990 && year < 2010) return "Inactive";
    else return "Active";
  };

  const handleOptionsMenu = () => {
    setOptionsMenuOpen(!optionsMenuOpen);
  };

  useEffect(() => {
    let handler = (e: React.MouseEvent) => {
      if (!optionsMenuRef?.current?.contains(e.target as HTMLDivElement))
        setOptionsMenuOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

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
          <div
            className={
              getCustomerStatus(props.user.createdAt) === "Pending"
                ? styles.showPending
                : styles.hideLine
            }
          >
            {getCustomerStatus(props.user.createdAt)}
          </div>
          <div
            className={
              getCustomerStatus(props.user.createdAt) === "Blacklisted"
                ? styles.showBlacklisted
                : styles.hideLine
            }
          >
            {getCustomerStatus(props.user.createdAt)}
          </div>
          <div
            className={
              getCustomerStatus(props.user.createdAt) === "Active"
                ? styles.showActive
                : styles.hideLine
            }
          >
            {getCustomerStatus(props.user.createdAt)}
          </div>
          <div
            className={
              getCustomerStatus(props.user.createdAt) === "Inactive"
                ? styles.showInactive
                : styles.hideLine
            }
          >
            {getCustomerStatus(props.user.createdAt)}
          </div>
        </div>
        <div className={styles.options_icon} onClick={handleOptionsMenu}>
          <img src={options_icon} alt="" />
        </div>
        <div
          className={optionsMenuOpen ? styles.MenuOpen : styles.MenuClosed}
          ref={optionsMenuRef}
        >
          <StatusOptionsMenu userName={props.user.userName} />
        </div>
      </div>
    </>
  );
};

export default SingleTableData;
