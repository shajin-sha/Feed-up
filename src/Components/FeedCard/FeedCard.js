import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Feedby from './Feedby/Feedby'
import "./FeedCard.css"
import FeedAction from './FeedContent/FeedTextH1/FeedAction/FeedAction'
import FeedTextContent from './FeedContent/FeedTextH1/FeedTextContent/FeedTextContent'
import FeddTextH1 from "./FeedContent/FeedTextH1/FeedTextH1"
import FeedImg from "./FeedContent/FeedImg/FeedImg";
import FeedImgCa from "./FeedContent/FeedImg/feedImgCa/feedImgCa"
import FeedVi from './FeedContent/FeedVi/FeedVi'


export default function FeedCard(props) {
    const [Card, setCard] = useState([])

    useEffect(() => {
        axios.get("/feeds").then((res) => {
            setCard(res.data)
        })


    }, [])

    function like(key, liked) {
        if (liked !== true) {
            axios.post("/like", { key: key, like: +1, user: localStorage.getItem("userName") }).then((res) => {
            })
        }
        else {
            axios.post("/like", { key: key, like: -1 }).then((res) => {
            })
        }
    }




    function openFullVideo(url){
        props.openFullVideo(url)
    }





    return (

        <div>

            {Card.map((obj,index) => {
                return (

                    <div className={ props.hidden ? "feedCardH":"feedCard"} >
                        <Feedby dp={`${process.env.PUBLIC_URL}/uploads/UserProfiles/` + `${obj.feedUserDp}`} date={"• "+obj.dateSt} name={obj.feedby} />
                        <FeddTextH1 text={obj.title} />

                        {obj.likedUsers.map((obj) => {

                            return (
                                <div>
                                    {/* <h1>{obj.key}</h1> */}
                                    {/* <p>{obj.userName === localStorage.getItem("userName") ? "yes" : null}</p> */}
                                    <div>{obj.userName === localStorage.getItem("userName") ?  <FeedAction likes={obj.likes} default={true} id={obj.key} like={like} /> :null}</div>
                                    <div>{obj.userName !==  localStorage.getItem("userName") ?<FeedAction likes={obj.likes} default={false} id={obj.key} like={like} /> :null}</div>
                                    {/* <div>{obj === [] ?  :null}</div> */}
                                </div>
                            )
                        })}



                        <FeedTextContent content={obj.feed} />
                        {obj.likedUsers.length > 0 ? null: <FeedAction likes={obj.likes} id={obj.key} like={like} />}
                        { obj.ImgName ? obj.type === "image/jpeg" &&  <FeedImg imgsrc={`${process.env.PUBLIC_URL}/uploads/images/` + `${obj.ImgName}`} /> : null}
                        { obj.ImgName ? obj.type === "image/png" &&  <FeedImg imgsrc={`${process.env.PUBLIC_URL}/uploads/images/` + `${obj.ImgName}`} /> : null}
                        { obj.ImgName ? obj.type === "image/svg+xml" &&  <FeedImg imgsrc={`${process.env.PUBLIC_URL}/uploads/images/` + `${obj.ImgName}`} /> : null}
                        { obj.ImgName ? obj.type === "video/mp4" &&  <FeedVi url={obj.ImgName} openFullVideo={openFullVideo} video={`${process.env.PUBLIC_URL}/uploads/images/` + `${obj.ImgName}`} /> : null}
                        {obj.caption ? <FeedImgCa caption={obj.caption} /> : null}


                   
                    </div>

                )


            })}

        </div>


    )
}


