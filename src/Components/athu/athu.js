import React,{useState,useEffect} from 'react'
import Signup from "../Signup/Signup"
import Signin from "../Signin/Signin"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./athu.css"
import { useHistory } from "react-router-dom";

export default function Athu() {
    let history = useHistory();
    const [Next,setNext]=useState("leftFade")


 
    function GoToNextPage(goto){
        history.push(goto)
    }



    return (
        <div className="bg" >
            <div className="leftFade"/>
        <div className="Athu" >


            <Router>

                <Route path='/user/signup' >

                    <Signup/>

                </Route>

                <Route path='/user/signin' >


                    <Signin GoToNextPage={GoToNextPage}  />

                </Route>



            </Router>





        </div>
        </div>
    )
}
