import React, { useState } from 'react'
import axios from "axios"
import "./Signup.css"
import setting from "./setting.svg"
import { useHistory } from "react-router-dom";

export default function Signin() {

    let history = useHistory();
    const [ErrText, setErrText] = useState("")
    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [Err, setErr] = useState(false)
    return (
        <div>
            <form onChange={() => {
                setErr(false)
            }} className="Si" onSubmit={(e) => {
                e.preventDefault()


                var data = [
                    {
                        "userName": UserName,
                        "password": Password,
                        "email":Email

                    }
                ]


                axios.post("/users", data).then((res) => {
                    if (res.data.err) {
                        setErr(true)
                        setErrText(res.data.err)
                    }
                    else {
                        history.push("/user/signin")
                    }



                })
            }} >

                <img style={{
                    width: '40%'
                }} src={setting} alt="" />

                <div className="heder" >
                    <h1>Create Account</h1>
                    <p>Create new Account</p>
                </div>




                <input onChange={(e) => {
                    setUserName(e.target.value)

                }}
                    placeholder="user name"
                    type="text"
                    id="UserName"
                    required
                />
                <input onChange={(e) => {
                    setEmail(e.target.value)

                }}
                    placeholder="email"
                    type="text"
                    id="email"
                    required
                />
                <input onChange={(e) => {
                    setPassword(e.target.value)

                }}
                    placeholder="password"
                    type="password"
                    id="Password"
                    required
                />
                <button type="submit">CREATE ACCOUNT</button>


                <p className="AlreadyHave" >Already have a account ?<a href="/user/signin"> Login</a></p>

                <p className={Err ? "wring" : "wringFalse"} >{ErrText}</p>

            </form>





        </div>
    )
}
