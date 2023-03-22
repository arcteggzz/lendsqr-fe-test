import React, { useState, useRef, useEffect } from "react";
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
  let filterMenuRef = useRef<HTMLDivElement>(null);

  const handleOptionsMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  useEffect(() => {
    let handler = (e: Event) => {
      if (!filterMenuRef?.current?.contains(e.target as HTMLDivElement))
        setFilterMenuOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className={styles.TableHeader} onClick={handleOptionsMenu}>
        {TableHeaders.map((header) => {
          return <TableHeaderItem header={header} />;
        })}
      </div>
      <div
        className={filterMenuOpen ? styles.FilterOpen : styles.FilterClosed}
        ref={filterMenuRef}
      >
        <FilterMenu />
      </div>
    </>
  );
};

export default TableHeader;
