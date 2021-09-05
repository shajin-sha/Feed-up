import React, { useEffect, useState } from 'react'
import './Add.css'
import AddImg from './AddImg/AddImg'
import AddText from './AddText/AddText'
import photos from "./clip.svg"
import feedBlack from "./news.svg"

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

                <img src={photos} alt="midia"/>
                
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
