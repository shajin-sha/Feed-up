import React from "react";
import "./navBottom.css";
import addLogo from "./add_circle_black_24dp.svg";
import home from "./home.svg";
import UserIcon from "./person.svg";

export default function NavBottom(props) {
  return (
    <div style={{
      display:window.navigator.onLine ? 'flex':'none',
    }} className="navBottom">
      <div
        onClick={() => {
          props.Home();
        }}
      >
        <img style={{ width: "1.7rem", userSelect: "none" }} src={home} alt="" />
      </div>
      <div
        onClick={() => {
          props.openAdd();
          try {
            window.navigator.vibrate(20); // vibrate for 200ms
          } catch{
            console.log("vibrate not fund")
          }

        }}
      >
        <img
      
          style={{ width: "5rem", userSelect: "none" ,marginBottom:'20px' }}
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
            // localStorage.getItem("dp")
            //   ? localStorage.getItem("dp") === "undefined"
            //     ? UserIcon
            //     : localStorage.getItem("dp")
              UserIcon
          }
          alt="userLogo"
        />
      </div>
    </div>
  );
}


