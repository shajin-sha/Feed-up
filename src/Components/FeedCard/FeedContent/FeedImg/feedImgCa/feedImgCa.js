import React from 'react'
import "./feedImgCa.css"

export default function feedImgCa(props) {
    return (
        <div>
            <h5 className="imgCaption" >{props.caption}</h5>
        </div>
    )
}
