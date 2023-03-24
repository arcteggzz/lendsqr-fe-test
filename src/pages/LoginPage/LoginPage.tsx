import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import lendsqr_logo from "../../assets/images/lendsqr_log.png";
import login_hero from "../../assets/images/login_hero.png";
import { mockLogin } from "../../utils/mockLogin";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const [pwdVisible, setPwdVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await mockLogin();
    if (user.password === password && user.userName === email) {
      localStorage.setItem("isLogin", "true");
      navigate(from, { replace: true });
      setEmail("");
      setPassword("");
    } else {
      setErrorMessage("Invalid Username or Password. Retry.");
    }
  };

  return (
    <>
      <main className={styles.Login}>
        <section className="">
          <div className={styles.Image_Container}>
            <img src={lendsqr_logo} alt="lendsqr_logo" />
          </div>
          <img src={login_hero} alt="hamburger_icon" />
        </section>
        <form action="" onSubmit={handleSubmit}>
          <header>
            <h1>Welcome!</h1>
            <h2>Enter details to login.</h2>
          </header>

          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            className={styles.input_field}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={styles.input_field_container}>
            <input
              id="password"
              type={pwdVisible ? "password" : "text"}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <p
              onClick={() => setPwdVisible(!pwdVisible)}
              className={styles.toggle}
            >
              {pwdVisible ? `SHOW` : `HIDE`}
            </p>
          </div>

          <p>Forgot PASSWORD?</p>
          <button className={styles.login_btn}>Log in</button>
          {errorMessage ? (
            <>
              <h6>{errorMessage}</h6>
            </>
          ) : (
            <></>
          )}
        </form>
      </main>
    </>
  );
};

export default LoginPage;
