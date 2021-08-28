import React, { useState,useContext } from 'react'
import SetupName from './start/setupName/setupName'
import Start from "./start/start"
import bioSvg from "./start/setupName/undraw_Social_bio_re_0t9u.svg"
import SetBio from './SetBio/SetBio'
import Setdp from './setDp/setdp'
import { useHistory } from "react-router-dom"
import {FirebaseContext} from "../../store/FirebaseContext"

import axios from 'axios'

export default function UserSetUp() {
    const history = useHistory()
    const [Next, setNext] = useState(0)
    const { firebase } = useContext(FirebaseContext);

    // config date for uploading (post) data with date and time...
     const dateX = new Date();

    const [Name, setName] = useState(null)
    const [Bio, setBio] = useState(null)
    const [Dp, setDp] = useState(null)





    // calling function from other components --start

    function Next0(nextValue) {
        setNext(nextValue)

    }
    function getName(value) {
        setName(value)
    }


    function getBio(value) {
        setBio(value)
    }

    function getDp(value) {
        setDp(value)
    }


    // calling function from other components --end


    return (

        <div>

            {Next === 0 && <Start Next={Next0} />}

            {Next === 1 && <img className="biosvg" src={bioSvg} alt="" />}
            {Next === 2 && <img className="biosvg" src={bioSvg} alt="" />}


            {Next === 1 && <SetupName getName={getName} />}

            {Next === 2 && <SetBio getBio={getBio} />}

            {Next === 3 && <Setdp getDp={getDp} />}



            { Next === 1 && <button onClick={() => {

                setNext(Next + 1)

            }} className="setName" >next</button>}

            { Next === 2 && <button onClick={() => {

                setNext(Next + 1)

            }} className="setName" >next</button>}

            { Next === 3 && <button onClick={() => {
                

                // upload user dp(prifle)

                firebase
                .storage()
                .ref(`/profile/${Dp.name+dateX.getTime()}`)
                .put(Dp)
                .then(({ ref }) => {
                  // image uploaded
                  ref.getDownloadURL().then((url) => {
                      console.log(url)
   
                    // data for out servr
                    // url of the file have to send to backend

                //difine user data 
                let data = {
                    Name: Name,
                    Bio: Bio,
                    userName: localStorage.getItem("userName"),
                    DpUrl:url,
                    profileUpdated:"true"
                }
                
                
                axios.post("https://social-media-app-api.herokuapp.com/updateuser", data).then((res) => {
                    if (res.data.dp) {
                      JSON.stringify(localStorage.setItem("dp",res.data.dp))
                      history.push("/home")
                    }
                    else{
                        console.log("err to update user / change")
                    }

                })
  
                  });
                });

            }} className="setName" >finish</button>}

        </div>
    )
}
