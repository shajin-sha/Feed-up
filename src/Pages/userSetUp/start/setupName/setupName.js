import React, { Fragment } from 'react'
import "./setupName.css"

export default function SetupName(props) {
    return (
        <Fragment>

            <div className="SETUPNAME" >
                <h1 className="YourName" >Name, <span className="infoVi" >visible to other users</span></h1>
                <div>
                <input onChange={(e)=>{
                    props.getName(e.target.value)
                }} placeholder="Name" className="YourNameIN" type="text" />
                </div>
            </div>


        </Fragment>
    )
}
