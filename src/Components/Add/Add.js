import React, { Fragment, useState } from 'react'
import './Add.css'
import AddImg from './AddImg/AddImg'
import AddText from './AddText/AddText'

export default function Add() {
    const [BorderTo, setBorderTo] = useState("")
    const [Open, setOpen] = useState("")
    return (
        <Fragment>
        <div className="addObj" >
            <div className='addTo' >
                <button onClick={() => {
                    setOpen("Img")
                    setBorderTo("addimg")
                }} style={{
                    borderBottom: BorderTo === "addimg" ? "4px solid #fff" : "4px solid #ffffff00"
                }} >Feed img</button>
                <button style={{
                    borderBottom: BorderTo === "addvideo" ? "4px solid #fff" : "4px solid #ffffff00"
                }} onClick={() => {
                    setOpen("")
                    setBorderTo("addvideo")
                }} >Fed video</button>
                <button style={{
                    borderBottom: BorderTo === "addtext" ? "4px solid #fff" : "4px solid #ffffff00"
                }} onClick={() => {
                    setOpen("Text")
                    setBorderTo("addtext")
                }} >Feed Text</button>
            </div>
            </div>




            {/* <AddImg/> */}


          <div>


            {Open === "Text" && <AddText />}

            {Open === "Img" && <AddImg />}



    
            </div>






        </Fragment>
    )
}
