import React from 'react'
import "./FullVideo.css"
import close from "./arrow_back_ios_new_black_24dp.svg"

export default function FullVideo(props) {
    return (
        <div className="FullVideo" >
            <div className="FullVideoContent" >
            <button className="FullVideoContentClose" onClick={()=>{
                props.close()
            }} ><img  src={close} alt=""/></button>
                <video autoPlay controls >
                    <source src={`${process.env.PUBLIC_URL}/uploads/images/`+`${props.url}`} />
                </video>

            </div>
        </div>
    )
}
