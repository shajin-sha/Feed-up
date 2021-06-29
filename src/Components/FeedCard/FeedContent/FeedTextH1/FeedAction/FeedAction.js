import React, { useState } from 'react'
import "./FeedAction.css"
import RedHeart from "./red-heart.svg"
import ThinHeart from "./heart-thin.svg"
import CommentFiled from "./icons8-chat-bubble-24.png"
import CommentThin from "./icons8-chat-bubble-24 (1).png"
import SaveThin from "./mark-as-favorite.png"
import SaveFiled from "./icons8-mark-as-favorite-24.filed.png"
import ReFeed from "./icons8-synchronize-24.png";



export default function FeedAction(props) {
    const [IsLike, setIsLike] = useState(false)
    const [IsSaved, setIsSaved] = useState(false)
    const [IsCommented, setIsCommented] = useState(false)


    return (
        <div className="FeedAction" >
            <button onClick={() => {
                if (IsLike === false) {
                    setIsLike(!IsLike)
                } else {
                    setIsLike(!IsLike)
                }

                    props.like(props.id,IsLike)



            }} ><img src={IsLike ? RedHeart : ThinHeart} alt="icon" /></button>
            <button onClick={()=>{
                if(IsCommented==false){
                    setIsCommented(!IsCommented)
                }else{
                    setIsCommented(!IsCommented)
                }
            }} ><img src={IsCommented ? CommentFiled:CommentThin} alt="icon" /></button>
            <button onClick={()=>{
                
            }} ><img  src={ReFeed} alt="icon"/></button>
            <button onClick={() => {
                if (IsSaved === false) {
                    setIsSaved(!IsSaved)
                } else {
                    setIsSaved(!IsSaved)
                }
            }} ><img src={IsSaved ? SaveFiled : SaveThin} alt="icon" /></button>
        </div>
    )
}
