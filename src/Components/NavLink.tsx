import React from "react";
import styles from "./NavLink.module.scss";
import { Link } from "react-router-dom";

type NavLinkProps = {
  navLink: {
    image: string;
    location: string;
    secImage?: string;
  };
};

const NavLink = (props: NavLinkProps) => {
  const routeFormat = (str: string) => {
    if (str === "Dashboard") return `/dashboard`;
    let route = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") route = route + "-";
      route = route + str[i].toLocaleLowerCase();
    }
    return `/dashboard/${route}`;
  };

  return (
    <>
      <Link className={styles.NavLink} to={routeFormat(props.navLink.location)}>
        <img src={props.navLink.image} alt={`${props.navLink.location}_icon`} />
        <p>{props.navLink.location}</p>
        <img
          src={props.navLink.secImage}
          alt={`dropdown_icon`}
          className={
            props.navLink.secImage ? styles.noSecImage : styles.secImage
          }
        />
      </Link>
    </>
  );
};

export default NavLink;
