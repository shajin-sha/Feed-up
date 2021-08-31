import React, { useEffect, useState } from 'react'
import './Add.css'
import AddImg from './AddImg/AddImg'
import AddText from './AddText/AddText'
import photos from "./photo_camera_black_24dp.svg"
import videoCam from "./videocam_black_24dp (1).svg"
import feedBlack from "./feed_black_24dp.svg"

export default function Add() {
    const [BorderTo, setBorderTo] = useState("")
    const [Open, setOpen] = useState("")



    useEffect(() => {
        
        window.scrollBy(0,0)
        setOpen("Img")
        setBorderTo("addimg")
        
    }, [])




    return (
        <div className="ADDContect" >
        <div className="addObj" >
            <div className='addTo' >
                <button onClick={() => {
                    setOpen("Img")
                    setBorderTo("addimg")
                }} style={{
                    borderBottom: BorderTo === "addimg" ? "4px solid #fff" : "4px solid #ffffff00"
                }} >

                <img src={photos} alt=""/>
                {/* <h4>/</h4> */}
                <img src={videoCam} alt=""/>
                
                </button>
                <button style={{
                    borderBottom: BorderTo === "addtext" ? "4px solid #fff" : "4px solid #ffffff00"
                }} onClick={() => {
                    setOpen("Text")
                    setBorderTo("addtext")
                }} >
                <img src={feedBlack} alt=""/>
                </button>
            </div>
            </div>




            {/* <AddImg/> */}


          <div>


            {Open === "Text" && <AddText />}

            {Open === "Img" && <AddImg />}



    
            </div>






        </div>
    )
}
