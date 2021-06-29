import React,{useState} from 'react'
import Add from '../../Components/Add/Add'
import FeedCard from '../../Components/FeedCard/FeedCard'
import NavBar from '../../Components/NavBar/NavBar'

export default function Home() {
    const [IsADD,setIsADD]=useState(false)

    function openAdd(){
        if(IsADD===false){
            setIsADD(!IsADD)
        }
        else{
            setIsADD(!IsADD)
        }
      
    }


    return (
        <div>
            <NavBar openAdd={openAdd} />

           { IsADD===false && <FeedCard/>}

             {IsADD && <Add/>}  
            
        </div>
    )
}
