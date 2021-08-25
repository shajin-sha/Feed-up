import React, { useState } from 'react'
import "./Comments.css"
import close from "./close_black_24dp (1).svg"
import AddCommentsContent from "./AddComments/Addcomments"
import axios from 'axios'
import {Profile} from "../../path"

export default function Comments(props) {
    const [Comments,setComments]=useState(props.comments)


    function getComments(Comment) {
        let data = {
            key: props.CommentID,
            comment: Comment,
            commentedBy: localStorage.getItem("userName"),
            commentedUserDP: localStorage.getItem("dp")

        }
        Comments.push(data)
        setComments(Comments)
        axios.post("/comments", data).then((res) => {
            console.log(res.data)
        })
    }

    return (
        <div className="Comments" >
            <div className="statusBar">
                <img onClick={() => {
                    props.openComment()
                }} className="statusBarClose" src={close} alt="close" />
            </div>


            {Comments.map((obj) => {
                return (

                    <div className="commentsContent">
                        <div className="commentsContentUser" >
                            <img src={Profile+obj.commentedUserDP} alt="userLogo" />
                            <p>{obj.commentedBy}</p>
                        </div>
                        <div className="COMMENT" >
                            <h4>{obj.comment}</h4>
                        </div>
                    </div>

                )
            })}



            <AddCommentsContent getComments={getComments} />


        </div>
    )
}
