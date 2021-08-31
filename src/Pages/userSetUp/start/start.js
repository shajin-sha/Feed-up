import React, { Fragment } from 'react'
import svg from "./undraw_buffer_wq43.svg"
import "./start.css"

export default function Start(props) {
    return (

        <Fragment>


            <img className="welcomesvg" src={svg} alt="" />
            <h1 className="welcomeContentText" >Hello <span className="span" >{localStorage.getItem("userName")}</span></h1>
            <p className="decWleomc" >Let's make Feed up yours</p>
            <button onClick={()=>{
                props.Next(1)
            }} className="btnPR" >SETUP PROFILE</button>
            <div className="link" >
            </div>




        </Fragment>


    )
}
