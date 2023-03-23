import React, { useState, useRef } from "react";
import styles from "./GeneralDetails.module.scss";

const GeneralDetails = () => {
  return (
    <>
      <div className={styles.GeneralDetails}>
        {/* personal information */}
        <section className={styles.personal_info}>
          <h2>Personal Information</h2>
          <div className={styles.personal_info_details}>
            <div className={styles.info_detail}>
              <p>Full Name</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Phone Number</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Email Address</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>BVN</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Gender</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Marital Status</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Children</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Type of Residence</p>
              <h2>Grace Effiom</h2>
            </div>
          </div>
        </section>

        <hr className={styles.showLine} />

        {/* education and employment */}
        <section className={styles.Education}>
          <h2>Education and Employment</h2>
          <div className={styles.education_details}>
            <div className={styles.info_detail}>
              <p>level of education</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>employment status</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>sector of employment</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Duration of employment</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>office email</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Monthly income</p>
              <h2>Grace Effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>loan repayment</p>
              <h2>Grace Effiom</h2>
            </div>
          </div>
        </section>

        <hr className={styles.showLine} />

        {/*socials*/}
        <section className={styles.Socials}>
          <h2>Socials</h2>
          <div className={styles.social_details}>
            <div className={styles.info_detail}>
              <p>Twitter</p>
              <h2>@grace_effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Facebook</p>
              <h2>@grace_effiom</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Instagram</p>
              <h2>@grace_effiom</h2>
            </div>
          </div>
        </section>

        <hr className={styles.showLine} />

        {/* Guarantor */}
        <section>
          <h2>Guarantor</h2>
        </section>
      </div>
    </>
  );
};

export default GeneralDetails;
