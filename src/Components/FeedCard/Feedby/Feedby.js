import React, { Fragment } from 'react'
import "./Feedby.css"
import user from "./user.jpg"
export default function Feedby(props) {
    return (

 
            <div className={props.className ? props.className:"feedby"}>
                <img className={props.classNameIMG ? props.classNameIMG:"userIMg"} src={ props.dp ? props.dp :user} alt="user" />
                <h3 className={props.classNameName ? props.classNameName:"userName"} >{props.name}</h3>
                <p className="date">{props.date}</p>
            </div>
 


    )
}
