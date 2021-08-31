import React, { Fragment, useState } from 'react'
import "./setdp.css"
import userDefault from "./63b311b9-ee1f-488a-8712-06808775c879.svg"
import addimglogo from "./collections_white_24dp.svg"

export default function Setdp(props) {
    const [Dp, setDp] = useState(null)
    return (

        <Fragment>
            <h3 className="YourName" >Your Profile</h3>
            <div>
                <img className="userDpIMG" src={Dp ? URL.createObjectURL(Dp):userDefault} alt="userlogo"/>
                <label className="addDp" htmlFor="dp" >SELECT<img className="dpIMG" src={addimglogo}  alt=""/></label>
            </div>

            <input onChange={(e)=>{
                setDp(e.target.files[0])
                props.getDp(e.target.files[0])
            }} hidden type="file" name="dp" id="dp"/>

        </Fragment>
    )
}
