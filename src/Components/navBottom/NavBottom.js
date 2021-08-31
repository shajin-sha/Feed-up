import React from "react";
import "./navBottom.css";
import addLogo from "./add_circle_black_24dp.svg";
import home from "./home_black_24dp.svg";
import UserIcon from "./userIcon.svg";

export default function NavBottom(props) {
  return (
    <div className="navBottom">
      <div
        onClick={() => {
          props.Home();
        }}
      >
        <img style={{ width: "2rem", userSelect: "none" }} src={home} alt="" />
      </div>
      <div
        onClick={() => {
          props.openAdd();
        }}
      >
        <img
          style={{ width: "3rem", userSelect: "none" }}
          src={addLogo}
          alt="addPost"
        />
      </div>
      <div
        onClick={() => {
          props.openUSER();
        }}
      >
        <img
          className="navBottomUser"
          src={
            localStorage.getItem("dp")
              ? localStorage.getItem("dp") === "undefined"
                ? UserIcon
                : localStorage.getItem("dp")
              : UserIcon
          }
          alt="userLogo"
        />
      </div>
    </div>
  );
}


