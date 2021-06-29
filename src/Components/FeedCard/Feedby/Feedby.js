import React, { Fragment } from 'react'
import "./Feedby.css"
import user from "./user.jpg"
export default function Feedby(props) {
    return (

 
            <div className="feedby">
                <img src={user} alt="user" />
                <h3>{props.name}</h3>
                <p className="date" >{props.date}</p>
            </div>
 


    )
}
