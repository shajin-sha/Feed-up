import React, { useState } from 'react'
import SetupName from './start/setupName/setupName'
import Start from "./start/start"
import bioSvg from "./start/setupName/undraw_Social_bio_re_0t9u.svg"
import SetBio from './SetBio/SetBio'
import Setdp from './setDp/setdp'
import { useHistory } from "react-router-dom"
import axios from 'axios'

export default function UserSetUp() {
    const history = useHistory()
    const [Next, setNext] = useState(0)



    //user data 

    const [Name, setName] = useState(null)
    const [Bio, setBio] = useState(null)
    const [Dp, setDp] = useState(null)





    // calling function from other components

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

                // update user date with userName as a key 


                //difine user data 

                // let data = {
                //     Name: Name,
                //     Bio: Bio,
                //     userName: localStorage.getItem("userName"),
                //     Dp:Dp,
                //     DpFIleName:Dp.name,
                // }




                let file = Dp
                let formdata = new FormData()

                formdata.append("Dp", file)
                formdata.append("Name", Name)
                formdata.append("Bio", Bio)
                formdata.append("DpFIleName", file.name)
                formdata.append("userName", localStorage.getItem("userName"))
                formdata.append("profileUpdated", true)



                axios.post("https://social-media-app-api.herokuapp.com/updateuser", formdata).then((res) => {
                    if (res.data.dp) {


                      JSON.stringify(localStorage.setItem("dp",res.data.dp))
                        history.push("/home")
                    }
                    else{
                        alert(res.data.err)
                    }

                })


            }} className="setName" >finish</button>}





        </div>
    )
}
