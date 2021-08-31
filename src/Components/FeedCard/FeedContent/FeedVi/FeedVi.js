import React, { Fragment, useState } from 'react'
import "./FeedVi.css"
import play from "./play_circle_outline_black_24dp (1).svg"
import pause from "./pause_black_24dp.svg"
import full from "./launch_black_24dp.svg"
import expand from "./open_in_full_black_24dp.svg"

export default function FeedVi(props) {
    const [IsPlaying, setIsPlaying] = useState(false)
    const [IsExpand, setIsExpand] = useState(false)
    const [E,setE]=useState(null)

    return (
        <Fragment>
            <div className="vicontent" >
                <video loop onPlay={(vi) => {
                    // window.addEventListener("scroll", () => {
                    //     vi.target.pause()
                    //     setIsPlaying(false)
                    // })
                }} id="vi" onClick={(e) => {
                    if (IsPlaying === false) {
                        setE(e)
                        e.target.play()
                        setIsPlaying(true)
                    }
                    else {
                        e.target.pause()
                        setIsPlaying(false)
                    }
                }} className={IsExpand ? "FeedViExapnd" : "FeedVi"}>
                    <source src={props.video} />
                </video>
                {IsPlaying === false && <img className="play" src={play} alt="logo" />}
                <img onClick={() => {
                    E.target.pause()
                   props.openFullVideo(props.url)

                }} className="full" src={full} alt="logo" />
                <img onClick={() => {

                    if (IsExpand === false) {
                        setIsExpand(!IsExpand)
                    }
                    else {
                        setIsExpand(!IsExpand)
                    }
                }} className={ IsExpand === false ? "expandYes" : "expand" } src={expand} alt="logo" />
            </div>
        </Fragment>
    )
}
