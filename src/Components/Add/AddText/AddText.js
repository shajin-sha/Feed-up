import React, { useState } from 'react'
import "./AddText.css"
import User from "../../FeedCard/Feedby/Feedby"
import Emoticon from "./insert_emoticon_black_24dp.svg"
import Send from "./send_black_24dp.svg"
import axios from "axios"
import music from "./mixkit-positive-notification-951.wav"
import useSound from 'use-sound'
import Loader from 'react-loader-spinner'
export default function AddText() {

    const [Title, setTitle] = useState("")
    const [FeedContent, setFeedContent] = useState("")
    const [Lording,setLording]=useState(false)
    const [play] = useSound(music);


    let date = new Date()
    const dateNow = date.getTime()
    const yourDate = new Date()


    return (
        <div className="AddText" >
            <form onSubmit={(e)=>{
                setLording(true)
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
                    setLording(false)
                    play()

                })
                
            }}>
                <User dp={localStorage.getItem("dp")} name={localStorage.getItem("userName")} />

                <input  onBlur={() => {
                // as no user cliked
                let viewport = document.querySelector("meta[name=viewport]");
                viewport.setAttribute(
                  "content",
                  "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                );
              }}
              onFocus={() => {
                document.documentElement.style.setProperty('overflow', 'auto')
                const metaViewport = document.querySelector('meta[name=viewport]')
                metaViewport.setAttribute('content', 'height=' + window.innerHeight + 'px, width=device-width, initial-scale=1.0')

              }} onChange={(e) => {
                    setTitle(e.target.value)
                }} required placeholder="Title" type="text" /><img className="emotions" src={Emoticon} alt="" />

                <textarea onChange={(e) => {
                    setFeedContent(e.target.value)
                }} required placeholder="Your feed" cols="10" rows="5"></textarea>


                <button type="submit" className="send" >

                   {Lording === false && <img src={Send} alt=""/> }
                    {Lording && <Loader
                     type="TailSpin"
                     color="#00BFFF"
                     height={30}
                     width={30}
                     timeout={30000}
                    />}

                </button>

            </form>

        </div>
    )
}
