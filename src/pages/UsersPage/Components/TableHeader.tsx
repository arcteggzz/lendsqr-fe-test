import React, { useState, useRef } from "react";
import styles from "./TableHeader.module.scss";
import TableHeaderItem from "./TableHeaderItem";

type InfoCardProps = {
  info: {
    icon: string;
    textDescription: string;
    number: string;
  };
};

const TableHeader = () => {
  const TableHeaders = [
    "Organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];

  const handleOptionsMenu = () => {
    console.log("fired");
  };

  return (
    <>
      <div className={styles.TableHeader} onClick={handleOptionsMenu}>
        {TableHeaders.map((header) => {
          return <TableHeaderItem header={header} />;
        })}
      </div>
    </>
  );
};

export default TableHeader;
