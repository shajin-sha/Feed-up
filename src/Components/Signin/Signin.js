/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "../Signup/Signup.css";
import welcome from "./welcome.svg";
import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner'

export default function Signup(props) {
    let history = useHistory();

    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [Err, setErr] = useState(false);
    const [ErrText, setErrText] = useState("");
    const [Lording,setLording]=useState(false)
    return (
        <div>
            <div
                className="Si"
            >
                <img
                    style={{
                        width: "45%",
                    }}
                    src={welcome}
                    alt=""
                />
                <div className="heder">
                    <h1>
                        {" "}
                        <span
                            style={{
                                color: "rgb(5, 60, 211)",
                            }}
                        >
                            {" "}
                            Welcome{" "}
                        </span>
                        Back
                    </h1>
                    <p>Sign to continue</p>
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
                        setErr(false)
                    }}
                    placeholder="user name"
                    name="UseeName"
                    type="text"
                    id="UserName"
                    required
                />
                <p className={Err ? "wring" : "wringFalse"}>
                    incorrect password or username
                </p>
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
                        setPassword(e.target.value);
                        setErr(false)
                    }}
                    placeholder="password"
                    name="password"
                    type="password"
                    id="password"
                    required
                />
                <button className="mt"
                    onClick={() => {
                        setLording(true)
                        var data = [
                            {
                                userName: UserName,
                                password: Password,
                            },
                        ];

                        axios
                            .post("https://social-media-app-api.herokuapp.com/find", data)
                            .then((res) => {
                                if (res.data.err) {
                                    setErrText(res.data.err);
                                    setErr(true);
                                    setLording(false)
                                } else {
                                    JSON.stringify(localStorage.setItem("user_id", res.data._id));
                                    JSON.stringify(localStorage.setItem("userName", res.data.userName))
                                    JSON.stringify(localStorage.setItem("dp", res.data.Dp))
                                    JSON.stringify(localStorage.setItem("bio", res.data.Bio))

                                        if (res.data.profileUpdated === "true") {
                                            props.GoToNextPage("/Home");
                                        } else {
                                            props.GoToNextPage("/setup");
                                        }
    
                        

                                }
                            });
                    }}
                    type="submit"
                >
                     {Lording == false && "LOGIN"}
                    {Lording && <Loader
                     type="TailSpin"
                     color="#00BFFF"
                     height={15}
                     width={15}
                     timeout={30000}
                    />}
                </button>

                <p
                    style={{
                        fontSize: "0.8rem",
                    }}
                    className="AlreadyHave"
                >
                    Don't have account ?
                    <span
                        onClick={() => {
                            history.push("/user/signup");
                        }}
                    >
                        {" "}
                        Cerate a new Account
                    </span>
                </p>
            </div>
        </div>
    );
}
