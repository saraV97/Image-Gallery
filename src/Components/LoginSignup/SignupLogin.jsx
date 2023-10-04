import React, { useState } from "react";
import "./signupLogin.css";
import mail_icon from "../Assets/mail.png";
import password_icon from "../Assets/padlock.png";
import user_icon from "../Assets/user.png";

export const SignupLogin = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Username" />
            </div>
          )}

          <div className="input">
            <img src={mail_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>

          <div className="submit-container">
            <div
              className={action === "Login" ? "submit grey" : "submit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit grey" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
