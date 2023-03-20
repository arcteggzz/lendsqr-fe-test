import React, { useState, useRef } from "react";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <>
      <form className={styles.Login} action="." onSubmit={handleSubmit}>
        <h1 className="">Welcome Back</h1>

        <label htmlFor="email" className="">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          v-model="email"
        />

        <label htmlFor="password" className="">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          v-model="password"
          pattern="^.{6}$"
        />

        <button className="" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginPage;
