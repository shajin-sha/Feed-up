import axios from 'axios'
import React, {useEffect, useState } from 'react'
import Feedby from './Feedby/Feedby'
import "./FeedCard.css"
import FeedAction from './FeedContent/FeedTextH1/FeedAction/FeedAction'
import FeedTextContent from './FeedContent/FeedTextH1/FeedTextContent/FeedTextContent'
import FeddTextH1 from "./FeedContent/FeedTextH1/FeedTextH1"
import FeedImg from "./FeedContent/FeedImg/FeedImg";
import FeedImgCa from "./FeedContent/FeedImg/feedImgCa/feedImgCa"
import FeedVi from './FeedContent/FeedVi/FeedVi'

import {Image,Profile} from "../../path"


export default function FeedCard(props) {
    const [Card, setCard] = useState([])

    useEffect(() => {
        axios.get("https://social-media-app-api.herokuapp.com/feeds").then((res) => {
            setCard(res.data)
        })


    }, [])

    function like(key, liked) {
        if (liked !== true) {
            axios.post("https://social-media-app-api.herokuapp.com/like", { key: key, like: +1, user: localStorage.getItem("userName") }).then((res) => {
            })
        }
        else {
            axios.post("https://social-media-app-api.herokuapp.com/like", { key: key, like: -1,user:localStorage.getItem("userName") }).then((res) => {
            })
        }
    }
    function openFullVideo(url){
        props.openFullVideo(url)
    }



    function openComments(id,data){
        props.openComment(id,data)
    }


    return (
        <div>
            {Card.map((obj,index) => {
                return (
                    <div className={ props.hidden ? "feedCardH":"feedCard"} >
                        <Feedby dp={Profile+`${obj.feedUserDp}`} date={"• "+obj.dateSt} name={obj.feedby} />
                        <FeddTextH1 text={obj.title} />
                        {obj.likedUsers.map((obj2) => {
                            return (
                                <div>


                                    <div>{obj2.userName === localStorage.getItem("userName") ?  <FeedAction comment={obj.commentedUsers} openComments={openComments}  likes={obj2.likes} default={true} id={obj2.key} like={like} /> :null}</div>
                                    <div>{obj2.userName !==  localStorage.getItem("userName") ?<FeedAction   comment={obj.commentedUsers} openComments={openComments} likes={obj2.likes} default={false} id={obj2.key} like={like} /> :null}</div>

                                    
                                </div>
                            )
                        })}

                        <FeedTextContent content={obj.feed} />
                        {obj.likedUsers.length > 0 ? null:  <FeedAction  comment={obj.commentedUsers} openComments={openComments}  likes={obj.likes} id={obj.key} like={like} />}
                        { obj.ImgName ? obj.type === "image/jpeg" &&  <FeedImg imgsrc={Image+obj.ImgName} /> : null}
                        { obj.ImgName ? obj.type === "image/png" &&  <FeedImg  imgsrc={Image+obj.ImgName} /> : null}
                        { obj.ImgName ? obj.type === "image/svg+xml" &&  <FeedImg  imgsrc={Image+obj.ImgName} /> : null}
                        { obj.ImgName ? obj.type === "video/mp4" &&  <FeedVi url={obj.ImgName} openFullVideo={openFullVideo} video={Image+obj.ImgName} /> : null}
                        {obj.caption ? <FeedImgCa caption={obj.caption} /> : null}
                    </div>
                )

            })}
        </div>


    )
}


