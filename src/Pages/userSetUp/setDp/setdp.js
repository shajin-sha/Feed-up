import React, { Fragment, useState } from 'react'
import "./setdp.css"
import userDefault from "./user.jpg"
import addimglogo from "./add_a_photo_black_24dp.svg"

export default function Setdp(props) {
    const [Dp, setDp] = useState(null)
    return (

        <Fragment>
            <h3 className="YourName" >Set up your dp</h3>
            <div>
                <img className="userDpIMG" src={Dp ? URL.createObjectURL(Dp):userDefault} alt="userlogo"/>
                <label  htmlFor="dp" ><img className="addDp" src={addimglogo} alt=""/></label>
            </div>

            <input onChange={(e)=>{
                setDp(e.target.files[0])
                props.getDp(e.target.files[0])
            }} hidden type="file" name="dp" id="dp"/>

        </Fragment>
    )
}
