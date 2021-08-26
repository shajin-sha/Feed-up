import React, { useState } from 'react'
import "./AddText.css"
import User from "../../FeedCard/Feedby/Feedby"
import Emoticon from "./insert_emoticon_black_24dp.svg"
import Send from "./send_black_24dp.svg"
import axios from "axios"
export default function AddText() {

    const [Title, setTitle] = useState("")
    const [FeedContent, setFeedContent] = useState("")


    let date = new Date()

    const dateNow = date.getTime()



    const yourDate = new Date()


    return (
        <div className="AddText" >
            <form onSubmit={(e)=>{
                e.preventDefault()

                var data = [
                    {
                        title:Title,
                        feed:FeedContent,
                        feedby:localStorage.getItem("userName"),
                        feedUserDp:localStorage.getItem("dp"),
                        key:dateNow,
                        likes:0,
                        comments:0,
                        dateSt:yourDate.toISOString().split('T')[0],
                        likedUsers:[],
                        commentedUsers:[]

                    }
                ]

                axios.post("https://social-media-app-api.herokuapp.com/feed",data).then((res)=>{
                    console.log(res)

                })
                
            }}>
                <User name={localStorage.getItem("userName")} />

                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} placeholder="title" type="text" /><img className="emotions" src={Emoticon} alt="" />

                <textarea onChange={(e) => {
                    setFeedContent(e.target.value)
                }} placeholder="your feed" cols="10" rows="5"></textarea>


                <button type="submit" className="send" >

                    <img src={Send} alt=""/>

                </button>

            </form>

        </div>
    )
}
