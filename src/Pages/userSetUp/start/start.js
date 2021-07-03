import React, { Fragment } from 'react'
import svg from "../undraw_happy_announcement_ac67.svg"
import "./start.css"

export default function Start(props) {
    return (

        <Fragment>


            <img className="welcomesvg" src={svg} alt="" />
            <h1 className="welcomeContentText" >Hey welcome <span className="span" >{localStorage.getItem("userName")}</span></h1>
            <button onClick={()=>{
                props.Next(1)
            }} className="btnPR" >Setup profile</button>
            <div className="link" >
                <a className="" href="/home">skip for now</a>
            </div>




        </Fragment>


    )
}
