import React, { Fragment } from 'react'
import "./setupName.css"
import edit from "./create_black_24dp.svg"

export default function SetupName(props) {
    return (
        <Fragment>

            <div>
                <h1 className="YourName" >your name, <span className="infoVi" >visible to other users</span></h1>
                <div>
                <img src={edit} alt="edit"/>
                <input onChange={(e)=>{
                    props.getName(e.target.value)
                }} placeholder="you name" className="YourNameIN" type="text" />
                </div>
            </div>


        </Fragment>
    )
}
