import React from 'react'
import "./USER.css"
import AddImg from "./add_photo_alternate_black_24dp.svg"

export default function USER() {
    return (
        <div className="USER" >


            <div className="USERContent" >
                <div className="userINFO" >
                    <div className="USERIMGANDEDIT" >
                        <div className="fade" ></div>
                        <h1 className="userNAME" >{localStorage.getItem("userName")}</h1>
                        <h3 className="bio">{localStorage.getItem("bio")}</h3>

                        <div className="folANDflos" >
                            <div id="follow" >
                                <h3>follow</h3>
                            </div>
                            <div id="likedFeeds" >
                                <h3>liked feeds</h3>
                            </div>
                        </div>

                        <div className="imgdiv" >
                            <img className='userimg' src={localStorage.getItem("dp")} alt="" />
                        </div>
                        <img className="addIMG" src={AddImg} alt="" />
                    </div>


                </div>

                <div className="tabs">
                    <button>img</button>
                    <button>feed</button>
                    <button>video</button>
                    <button>tags</button>
                </div>

            </div>

        </div>
    )
}
