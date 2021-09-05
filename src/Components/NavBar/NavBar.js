import React, { useState, useEffect } from "react";
import "./NavBar.css";
import add from "./add_black_24dp.svg";
import close from "./close_black_24dp.svg";
import UserOps from "./userOps/userOps";
import chat from "./question_answer_white_24dp.svg"
import menu from "./menu-outline.svg"
import {useHistory} from "react-router-dom"
export default function NavBar(props) {
  const [IsClose, setIsClose] = useState(false);
  const [Hover, setHover] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [Show, setShow] = useState(true);

  const history =  useHistory()

  useEffect(() => {

    if(window.matchMedia("(prefers-color-scheme:dark)").matches){
      document.getElementById("theme-color").setAttribute("content", "#202020",'theme-color',);
    }
    else{
      document.getElementById("theme-color").setAttribute("content", "#ffffff",'theme-color',);
    }
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(false);
        if(window.matchMedia("(prefers-color-scheme:dark)").matches){
          document.getElementById("theme-color").setAttribute("content", "#202020",'theme-color',);
        }
        else{
          document.getElementById("theme-color").setAttribute("content", "#ffffff",'theme-color',);
        }

      } else if (window.screenY < 200) {
        setShow(true);
        if(window.matchMedia("(prefers-color-scheme:dark)").matches){
          // 141418
          document.getElementById("theme-color").setAttribute("content", "#141418",'theme-color',);
        }
        else{
          document.getElementById("theme-color").setAttribute("content", "#015abe",'theme-color',);
        }
        
      }
    });

  }, []);

  return (
    <div
      className={props.HideHav ? "navBarNew" : Show ? "navBar" : "navBarNew"}
    >
      {width > 500 && <h1 className="FEEEDUPICON">Feed up</h1>}

      {Show  === false ?   <h1 className="FEEEDUPICONMOBILE">Feed up</h1>:null}

      {props.showappIcon &&  <h1 className="FEEEDUPICON">Feed up</h1>}

     {props.showappIcon && <button onClick={()=>{
       history.push("edit")
     }} className="MenuUSER" ><img src={menu} alt="menu" /></button>}




     {props.showappIcon === false ? <div className="NavBarActions" >
        <input style={{
          display:Show === false ?  "none":null,
        }} className="Search" onClick={()=>{
          props.openSearch()
        }} placeholder="Search" readonly="readonly" type="text"  />

        {Show && <img className="ChatIcon" src={chat} alt="ChatIcon" />}

      </div>

      :null}



      {width < 550 && (
        <div className={"HelloUSerDIV"}>
          <h2 className="HelloUser">
            Hello {localStorage.getItem("userName")}
          </h2>
          <p>{ window.navigator.onLine ? 'Welcome home':"You are offline"}</p>
          <img style={{
            display:window.navigator.onLine ? "block" :'none'
          }}
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
