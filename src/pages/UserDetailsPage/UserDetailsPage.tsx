import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./UserDetailsPage.module.scss";
import back_arrow from "../../assets/images/back_arrow.png";
import UserProfile from "./Components/UserProfile";
import GeneralDetails from "./Components/GeneralDetails";
import { User } from "../../utils/Users.types";

const UserDetailsPage = () => {
  const { pathname } = useLocation();
  const [singleUser, setSingleUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const pathNameList = pathname.split("/");
  const userId = pathNameList[pathNameList.length - 1];

  async function fetchUser() {
    const response = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
    );
    const user = await response.json();
    return user;
  }

  useEffect(() => {
    const handleFetchUser = async () => {
      try {
        setLoading(true);
        const fetchedUser = await fetchUser();
        console.log(fetchedUser);
        setLoading(false);
        setSingleUser(fetchedUser);
        setSuccess(true);
      } catch (error) {
        setLoading(false);
        setError("An error occured");
        setSuccess(false);
      }
    };

    handleFetchUser();
  }, []);

  return (
    <>
      {Object.keys(singleUser).length !== 0 ? (
        <div className={styles.UserDetailsPage}>
          <div className={styles.backLink}>
            <Link to={"/dashboard/users"}>
              <img src={back_arrow} alt="back arrow icon" />
            </Link>
            <p>Back to Users</p>
          </div>
          <main className={styles.pageHeader}>
            <h1>User Details</h1>
            <div className={styles.userButtons}>
              <button className={styles.blacklist_btn}>Blacklist User</button>
              <button className={styles.activate_btn}>Activate User</button>
            </div>
          </main>
          <UserProfile userDetail={singleUser} />
          <GeneralDetails userDetail={singleUser} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserDetailsPage;
