import React,{useState} from 'react'
import "./NavBar.css"
import add from "./add_black_24dp.svg"
import close from "./close_black_24dp.svg"

export default function NavBar(props) {
    const [IsClose,setIsClose]=useState(false)
    return (
        <div className="navBar" >
            <h1>Feed up</h1>
            <img onClick={()=>{
                if(IsClose==false){
                    setIsClose(!IsClose)
                }
                else{
                    setIsClose(!IsClose)
                }
                props.openAdd()
            }} className="add" src={IsClose ? close:add} alt="add"/>
        </div>
    )
}
