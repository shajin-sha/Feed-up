import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Signup.css";
import setting from "./setting.svg";
import Loader from 'react-loader-spinner'
import { useHistory } from "react-router-dom";

export default function Signin() {
  let history = useHistory();
  const [ErrText, setErrText] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Err, setErr] = useState(false);
  const [IsRedey, setIsRedey] = useState(false);
  const [Lording,setLording]=useState(false);
  

  useEffect(() => {
    document.onkeydown = function (e) {
      if (e.keyCode === 13) {
        // The Enter/Return key
        if (IsRedey === true) {
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
        }
      }
    };
  }, []);

  useEffect(() => {
    if (UserName.length < 4 || Email.length < 5 || Password.length < 5) {
      setIsRedey(false);
    } else {
      setIsRedey(true);
    }
  }, [UserName, Password, Email]);

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
          onBlur={() => {
            // as no user cliked
            let viewport = document.querySelector("meta[name=viewport]");
            viewport.setAttribute(
              "content",
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            );
          }}
          onFocus={() => {
            document.documentElement.style.setProperty("overflow-x", "auto");
            // as user cliked input
            const metaViewport = document.querySelector("meta[name=viewport]");
            metaViewport.setAttribute(
              "content",
              "height=" +
                window.innerHeight +
                "px, width=device-width, initial-scale=1.0",
              "user-scalable=0"
            );
          }}
          onChange={(e) => {
            setUserName(e.target.value);
            setErr(false);
          }}
          placeholder="user name"
          type="text"
          id="UserName"
          required
        />
        <input    onBlur={() => {
            // as no user cliked
            let viewport = document.querySelector("meta[name=viewport]");
            viewport.setAttribute(
              "content",
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            );
          }}
          onFocus={() => {
            document.documentElement.style.setProperty("overflow-x", "auto");
            // as user cliked input
            const metaViewport = document.querySelector("meta[name=viewport]");
            metaViewport.setAttribute(
              "content",
              "height=" +
                window.innerHeight +
                "px, width=device-width, initial-scale=1.0",
              "user-scalable=0"
            );
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          type="email"
          id="email"
          required
        />
        <input    onBlur={() => {
            // as no user cliked
            let viewport = document.querySelector("meta[name=viewport]");
            viewport.setAttribute(
              "content",
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            );
          }}
          onFocus={() => {
            document.documentElement.style.setProperty("overflow-x", "auto");
            // as user cliked input
            const metaViewport = document.querySelector("meta[name=viewport]");
            metaViewport.setAttribute(
              "content",
              "height=" +
                window.innerHeight +
                "px, width=device-width, initial-scale=1.0",
              "user-scalable=0"
            );
          }}
          onChange={(e) => {
            setPassword(e.target.value);
            setErr(false);
          }}
          placeholder="password"
          type="password"
          id="Password"
          required
        />
        {IsRedey && (
          <button
            onClick={() => {
              setLording(true)
              var data = [
                {
                  userName: UserName,
                  password: Password,
                  email: Email,
                  profileUpdated: false,
                  follows:[]
                },
              ];

              axios
                .post("https://social-media-app-api.herokuapp.com/users", data)
                .then((res) => {
                  if (res.data.err) {
                    setErr(true);
                    setErrText(res.data.err);
                    setLording(false)
                  } else {
                    history.push("/user/signin");
                  }
                });
            }}
            type="submit"
          >
            {Lording == false && "CREATE ACCOUNT"}
                    {Lording && <Loader
                     type="TailSpin"
                     color="#00BFFF"
                     height={15}
                     width={15}
                     timeout={30000}
                    />}
          </button>
        )}

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
