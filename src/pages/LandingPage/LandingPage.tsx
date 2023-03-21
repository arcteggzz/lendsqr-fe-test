import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";
import assessment_image from "../../assets/images/assessment_image.png";

const LandingPage = () => {
  return (
    <>
      <div className={styles.LandingPage}>
        <section>
          <h1>
            Esedere Oghenetega’s <span>Submission for lendsqr Assessment</span>
          </h1>
          <div className={styles.description}>
            <p>Task Description:</p>
            <p>
              Created a mini application for a user to login and view a list of
              users fetched from an API and viewed details about each user.
            </p>
            <p>
              Kindly note that all assests and designs used belong to Lengsqr.
              This is part of the LENDSQR assessment task.
            </p>
          </div>
          <Link to="/login" className={styles.linkLogin}>
            CLICK TO VIEW SUBMISSION
          </Link>
        </section>
        <img src={assessment_image} alt="assessment_image" />
      </div>
    </>
  );
};

export default LandingPage;
