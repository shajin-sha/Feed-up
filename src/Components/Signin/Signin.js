import React, { useState } from 'react'
import axios from "axios"
import "../Signup/Signup.css"
import welcome from "./welcome.svg"
import { useHistory } from "react-router-dom";

export default function Signup(props) {

    let history = useHistory();

    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")
    const [Err,setErr]=useState(false)
    const [ErrText,setErrText]=useState("")
    return (
        <div>

            <form onChangeCapture={()=>{
                    setErr(false)
            }} className="Si" onSubmit={(e) => {
                e.preventDefault()

                var data = [
                    {
                        "userName": UserName,
                        "password": Password
                    }
                ]

                axios.post("/find", data).then((res) => {
                    if (res.data.err) {
                        setErrText(res.data.err)
                        setErr(true)

                    }
                    else {
                        console.log(res.data)
                        JSON.stringify(localStorage.setItem("user_id",res.data._id))
                        JSON.stringify(localStorage.setItem("userName",res.data.userName))
                        props.GoToNextPage("/Home")
                    }
                })


            }} >


                <img style={{
                    width: '45%'
                }} src={welcome} alt="" />
                <div className="heder" >
                    <h1> <span style={{
                        color: "rgb(5, 60, 211)"
                    }} > Welcome </span>Back</h1>
                    <p>Sign to continue</p>
                </div>



                <input onChange={(e) => {
                
                    setUserName(e.target.value)

                }}
                    placeholder="user name"
                    name="UseeName"
                    type="text"
                    id="UserName"
                    required
                />
                <p className={Err ? "wring":"wringFalse"} >incorrect password or username</p>
                <input onChange={(e) => {
                    setPassword(e.target.value)

                }}
                    placeholder="password"
                    name="password"
                    type="password"
                    id="password"
                    required
                />
                <button type="submit">LOGIN</button>


                <p style={{
                    fontSize: "0.8rem"
                }} className="AlreadyHave" >Don't have account ?<a href="/user/signup"> Cerate a new Account</a></p>


            </form>
        </div>
    )
}
