import React, { useState } from 'react'
import "./FeedAction.css"
import RedHeart from "./favorite_black_24dp.svg"
import ThinHeart from "./favorite_border_black_24dp.svg"
import CommentFiled from "./message_black_24dp.svg"
import CommentThin from "./message_black_24dp.svg"
import SaveThin from "./bookmark_border_black_24dp (1).svg"
import SaveFiled from "./bookmark_black_24dp.svg"
import ReFeed from "./save_alt_black_24dp.svg";



export default function FeedAction(props) {
    const [IsLike, setIsLike] = useState(false)
    const [IsSaved, setIsSaved] = useState(false)
    const [IsCommented, setIsCommented] = useState(false)
    const [UpdateLiveLike, setUpdateLiveLike] = useState(null)

    return (
        <div className="FeedAction" >
            <button onClick={() => {
                if (IsCommented == false) {
                    setIsCommented(!IsCommented)
                } else {
                    setIsCommented(!IsCommented)
                }
            }} ><img src={IsCommented ? CommentFiled : CommentThin} alt="icon" /></button>
            <button onClick={() => {

            }} ><img src={ReFeed} alt="icon" /></button>
            <button onClick={() => {
                if (IsSaved === false) {
                    setIsSaved(!IsSaved)
                } else {
                    setIsSaved(!IsSaved)
                }
            }} ><img  src={IsSaved ? SaveFiled : SaveThin} alt="icon" /></button>

            <div className="cunt" >

                <button onClick={() => {
                    if (IsLike === false) {
                        setIsLike(!IsLike)
                        setUpdateLiveLike(1)
                        props.like(props.id, IsLike)

                    } else {
                        setIsLike(!IsLike)
                        setUpdateLiveLike(0)
                        props.like(props.id, IsLike)
                    }




                }} ><img src={props.default ? RedHeart : IsLike ? RedHeart : ThinHeart} alt="icon" />
                </button>

                <p>{props.likes + UpdateLiveLike}</p>

            </div>




        </div>
    )
}
