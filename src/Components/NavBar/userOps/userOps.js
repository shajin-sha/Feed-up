import React,{useState} from 'react'
import "./userOps.css"
import user from "./user.jpg"

export default function UserOps(props) {
    return (
        <div className="userOps" >
            {/* hello */}
            <div>
                <img className="userImg" src={`${process.env.PUBLIC_URL}/uploads/UserProfiles/` + `${localStorage.getItem("dp")}`} alt=""/>
              {props.Hover &&  <h3>{localStorage.getItem("userName")}</h3> }
            </div>
        </div>
    )
}
