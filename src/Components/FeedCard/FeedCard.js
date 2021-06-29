import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Feedby from './Feedby/Feedby'
import "./FeedCard.css"
import FeedAction from './FeedContent/FeedTextH1/FeedAction/FeedAction'
import FeedTextContent from './FeedContent/FeedTextH1/FeedTextContent/FeedTextContent'
import FeddTextH1 from "./FeedContent/FeedTextH1/FeedTextH1"



export default function FeedCard() {
    const [Card, setCard] = useState([])
    const [liked, setLiked] = useState("")
    const [likedUsers, setLikedUsers] = useState([])

    useEffect(() => {

        axios.get("/feeds").then((res) => {
            setCard(res.data)



            for (let i = 0; i < res.data.length; i++) {
                
                setLikedUsers(res.data[2].likedUsers)
                console.log(likedUsers)

            }



        })




    }, [])


    function like(key, liked) {

        if (liked !== true) {


            axios.post("/like", { key: key, like: +1, user: localStorage.getItem("userName") }).then((res) => {
                console.log(res)
            })

        }
        else {
            axios.post("/like", { key: key, like: -1 }).then((res) => {
                console.log(res)
            })

        }

    }

    return (

        <div>

            {Card.map((obj) => {
                return (

                    <div className="feedCard" >
                        <Feedby date="" name={obj.feedby} />
                        <FeddTextH1 text={obj.title} />
                        <FeedTextContent content={obj.feed} />
                        <FeedAction id={obj.key} like={like} />
                    </div>
                )
            })}

        </div>


    )
}


