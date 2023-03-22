import React, { useState, useRef } from "react";
import styles from "./TableHeader.module.scss";
import TableHeaderItem from "./TableHeaderItem";
import FilterMenu from "./FilterMenu";

const TableHeader = () => {
  const TableHeaders = [
    "Organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const handleOptionsMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  return (
    <>
      <div className={styles.TableHeader} onClick={handleOptionsMenu}>
        {TableHeaders.map((header) => {
          return <TableHeaderItem header={header} />;
        })}
      </div>
      <div className={filterMenuOpen ? styles.FilterOpen : styles.FilterClosed}>
        <FilterMenu />
      </div>
    </>
  );
};

export default TableHeader;
