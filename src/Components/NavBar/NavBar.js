import React, { useState } from 'react'
import "./NavBar.css"
import add from "./add_black_24dp.svg"
import close from "./close_black_24dp.svg"
import UserOps from './userOps/userOps'

export default function NavBar(props) {
    const [IsClose, setIsClose] = useState(false)
    const [Hover, setHover] = useState(false)
    const [NavISVi, setNavISVi] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    return (
        <div className="navBar" >

            <h1>Feed up</h1>



            { width > 650 &&
                <div onMouseLeave={() => {
                    setHover(false)
                }} onMouseEnter={() => {
                    setHover(true)
                }} className='User' >



                    <div onClick={() => {
                        props.openUSER()
                    }}>    <UserOps Hover={Hover} />

                    </div>


                    <img onClick={() => {
                        if (IsClose == false) {
                            setIsClose(!IsClose)
                        }
                        else {
                            setIsClose(!IsClose)
                        }
                        props.openAdd()
                    }} className="add" src={IsClose ? close : add} alt="add" />

                </div>





            }




        </div>
    )
}
