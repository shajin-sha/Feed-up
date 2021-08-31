/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./NavBar.css";
import add from "./add_black_24dp.svg";
import close from "./close_black_24dp.svg";
import UserOps from "./userOps/userOps";
import chat from "./question_answer_white_24dp.svg"

export default function NavBar(props) {
  const [IsClose, setIsClose] = useState(false);
  const [Hover, setHover] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [Show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(false);
      } else if (window.screenY < 200) {
        setShow(true);
      }
    });
  }, []);

  return (
    <div
      className={props.HideHav ? "navBarNew" : Show ? "navBar" : "navBarNew"}
    >
      {width > 500 && <h1 className="FEEEDUPICON">Feed up</h1>}

      {Show  === false ?   <h1 className="FEEEDUPICONMOBILE">Feed up</h1>:null}




      <div className="NavBarActions" >
        <input style={{
          display:Show === false ?  "none":null,
        }} className="Search" onClick={()=>{
          props.openSearch()
        }} placeholder="Search" readonly="readonly" type="text"  />

        {Show && <img className="ChatIcon" src={chat} alt="ChatIcon" />}
      </div>




      {width < 550 && (
        <div className={"HelloUSerDIV"}>
          <h2 className="HelloUser">
            Hello {localStorage.getItem("userName")}
          </h2>
          <p>Welcome home</p>
          <img
            className="navBarDp"
            src={localStorage.getItem("dp")}
            alt="icon"
          />
        </div>
      )}

      {width > 550 && (
        <div
          onMouseLeave={() => {
            setHover(false);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          className="UserDIVMY"
        >
          <div
            onClick={() => {
              props.openUSER();
            }}
          >
            {" "}
            <UserOps Hover={Hover} />
          </div>

          {/* close icon */}

          <img
            onClick={() => {
              if (IsClose === false) {
                setIsClose(!IsClose);
              } else {
                setIsClose(!IsClose);
              }
              props.openAdd();
            }}
            className="addIcon"
            src={IsClose ? close : add}
            alt="add"
          />
        </div>
      )}
    </div>
  );
}
