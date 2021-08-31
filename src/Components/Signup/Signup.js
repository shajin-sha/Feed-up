import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import setting from "./setting.svg";
import { useHistory } from "react-router-dom";

export default function Signin() {
  let history = useHistory();
  const [ErrText, setErrText] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Err, setErr] = useState(false);
  return (
    <div>
      <div className="Si">
        <img
          style={{
            width: "40%",
          }}
          src={setting}
          alt=""
        />

        <div className="heder">
          <h1>Create Account</h1>
          <p>Create new Account</p>
        </div>

        <input
          onChange={(e) => {
            setUserName(e.target.value);
            setErr(false);
          }}
          placeholder="user name"
          type="text"
          id="UserName"
          required
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          type="email"
          id="email"
          required
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
            setErr(false);
          }}
          placeholder="password"
          type="password"
          id="Password"
          required
        />
        <button
          onClick={() => {
            var data = [
              {
                userName: UserName,
                password: Password,
                email: Email,
                profileUpdated: false,
              },
            ];

            axios
              .post("https://social-media-app-api.herokuapp.com/users", data)
              .then((res) => {
                if (res.data.err) {
                  setErr(true);
                  setErrText(res.data.err);
                } else {
                  history.push("/user/signin");
                }
              });
          }}
          type="submit"
        >
          CREATE ACCOUNT
        </button>

        <p className="AlreadyHave">
          Already have a account ?
          <span
            onClick={() => {
              history.push("/user/signin");
            }}
          >
            {" "}
            Login
          </span>
        </p>

        <p className={Err ? "wring" : "wringFalse"}>{ErrText}</p>
      </div>
    </div>
  );
}
