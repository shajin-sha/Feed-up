import React, { useState } from 'react'
import Add from '../../Components/Add/Add'
import FeedCard from '../../Components/FeedCard/FeedCard'
import NavBar from '../../Components/NavBar/NavBar'
import USER from "../../Components/USER/USER"
import NavBottom from "../../Components/navBottom/NavBottom"
import FullVideo from "../../Components/FullVideo/FullVideo"

export default function Home() {
    const [IsADD, setIsADD] = useState(false)
    const [IsUser, setIsUser] = useState(false)
    const [IsFullVideo,setIsFullVideo]=useState(false)
    const [Width,setWidth]=useState(window.innerWidth)
    const [Url,setUrl]=useState("")
    function openAdd() {


        if (IsUser === true) {
            setIsUser(false)
        }


        if (IsADD === false) {
            setIsADD(!IsADD)
        }
        else {
            setIsADD(!IsADD)
        }


    }


    function openUSER() {


        
        if (IsADD === true) {
            setIsADD(false)
        }





        if (IsUser === false) {
            setIsUser(!IsUser)
        }
        else {
            setIsUser(!IsUser)
        }
    }



    function Home(){


        if (IsUser === true) {
            setIsUser(false)
        }

        if (IsADD === true) {
            setIsADD(false)
        }


    }



    function openFullVideo(url){
        setIsFullVideo(true)
        setUrl(url)
    }


    function closeV(){
        setIsFullVideo(false)
    }




    return (
        <div>
            <NavBar openUSER={openUSER} openAdd={openAdd} />

            { IsUser === true ? null : IsADD === false &&  <FeedCard hidden={IsFullVideo ? "hidden":null} openFullVideo={openFullVideo} />}

            {IsADD && <Add />}


            {IsUser ? <USER /> : null}

            { IsFullVideo && <FullVideo close={closeV} url={Url}  />}


        { Width < 560 && <NavBottom Home={Home}  openAdd={openAdd} openUSER={openUSER} />}


        </div>
    )
}
