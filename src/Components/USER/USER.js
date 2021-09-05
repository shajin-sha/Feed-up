import "./USER.css";
import { useState,useEffect } from "react";
import {useHistory} from 'react-router-dom'
import loaction from "./loaction.svg"
import imgpost from "./image-outline.svg"
import textpost from "./file-text-outline.svg"
import UserIMG from './UserIcon.jpg';
import black from "./chevron_left_black_24dp.svg"
import axiso from "axios"
import menu from "./menu-outline.svg"

export default function USER(props) {
  const [Unfollow,setUnfollow]=useState(false)
  const [IsThisUser,setIsThisUser]=useState(false)
  const [FollowNum,setFollowNum]=useState(0)
  const history = useHistory()




    // difine to follow or unfollow
    // map over all the followes of the users

    useEffect(()=>{

     let  data = props.follows ? props.follows.length:props.UserInfo ? props.UserInfo.length : 0
      setFollowNum(data)

        if(props.userName===localStorage.getItem("userName")){
          setIsThisUser(true)
        }


      props.follows &&  props.follows.map((obj)=>{
        if(obj.ThisUser===localStorage.getItem("userName")){
          setUnfollow(true)
        }
      })

      
    },[])





  return (
    <div style={{
      top:props.style && "-10%",
    }} className="USER">


    


      <div className="USERHeder">
        <div className="follower">
          <h1>{FollowNum}</h1>
          <p>follower</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${props.dp ? props.dp : UserIMG})`,
          }}
          className="prfilePhoto"
        >
        </div>
        <div className="following">
          <h1>{0}</h1>
          <p>following</p>
        </div>
      </div>


     {props.style && <button onClick={()=>{
        props.ShowTag()
      }} className="closeBtnOPENUSER" ><img src={black} alt="black" /></button>

    }

          <div className="UserINFO">
            <h3>{props.userName}</h3>
            <p className="bio" >{props.bio}</p>
            <p  className="location" ><img className="loactionIcon" src={loaction} alt="loaction" />{"kerala"}</p>


          </div>





          <div className="UserAction">
            <button onClick={()=>{
              if(!props.canEdit){
                if(!IsThisUser){

                  if(Unfollow===true){
                    // post req to unfollow ro
                    setUnfollow(false)
                    setFollowNum(FollowNum-1)
                      const UnfollowData = {
                        ThisUser:localStorage.getItem("userName"),
                        UnFollowUserName:props.userName,}
  
                        axiso.post("https://social-media-app-api.herokuapp.g/unfollow",UnfollowData).then((res)=>{
                          console.log(res.data)
                        })
  
                  }
                  else{
                    setUnfollow(true)
                    setFollowNum(FollowNum+1)
  
                    const data = {
                      ThisUser:localStorage.getItem("userName"),
                      UserTOFollow:props.userName,
                      ThisUserDp:localStorage.getItem("dp"),
                      ThisUserBio:localStorage.getItem("bio"),
                    }
                    
                    axiso.post('https://social-media-app-api.herokuapp.com/follow',data).then((res)=>{
                      console.log(res)
                    })
                  }
  

                }else{
                  // edit
                  history.push("editprofile")
                }
              




              }
              else{
                // edit
                history.push("editprofile")
              }
            }} style={{
              width:IsThisUser ? "90%" : props.canEdit ? "90%" :'40%',
            }} className="FollowBtn" >{IsThisUser ? "EDIT": props.canEdit ? "EDIT"  : Unfollow ? "UNFOLLOW" : "FOLLOW"}</button>
           {IsThisUser ? null : props.canEdit ? null : <button className="MessageBtn">MESSAGE</button> }
          </div>





          <div className="UserPostTypes">
            <button><img src={imgpost} alt="image post" /></button>
            <button><img src={textpost} alt="text post" /></button>
          </div>
          <div className="UserPosts">

            <img src="https://images.unsplash.com/photo-1630534658718-395efda906cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2MzA1NzE4MjQ&ixlib=rb-1.2.1&q=80&w=1080" alt="img" />
            <img src="https://images.unsplash.com/photo-1630371223439-6f86bfa682f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHw1fHx8fHx8Mnx8MTYzMDU3MTgyNA&ixlib=rb-1.2.1&q=80&w=400" alt="img" />
            <img src="https://images.unsplash.com/photo-1630520226802-d8bb55f6b847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2MzA1NzE4MjQ&ixlib=rb-1.2.1&q=80&w=400" alt="img" />
            
            <img src="https://images.unsplash.com/photo-1630534658718-395efda906cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2MzA1NzE4MjQ&ixlib=rb-1.2.1&q=80&w=1080" alt="img" />
            <img src="https://images.unsplash.com/photo-1630371223439-6f86bfa682f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHw1fHx8fHx8Mnx8MTYzMDU3MTgyNA&ixlib=rb-1.2.1&q=80&w=400" alt="img" />
            <img src="https://images.unsplash.com/photo-1630520226802-d8bb55f6b847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2MzA1NzE4MjQ&ixlib=rb-1.2.1&q=80&w=400" alt="img" />
            
            <img src="https://images.unsplash.com/photo-1630534658718-395efda906cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2MzA1NzE4MjQ&ixlib=rb-1.2.1&q=80&w=1080" alt="img" />
            <img src="https://images.unsplash.com/photo-1630371223439-6f86bfa682f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHw1fHx8fHx8Mnx8MTYzMDU3MTgyNA&ixlib=rb-1.2.1&q=80&w=400" alt="img" />
            <img src="https://images.unsplash.com/photo-1630520226802-d8bb55f6b847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2MzA1NzE4MjQ&ixlib=rb-1.2.1&q=80&w=400" alt="img" />
            
            <img src="https://images.unsplash.com/photo-1630534658718-395efda906cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2MzA1NzE4MjQ&ixlib=rb-1.2.1&q=80&w=1080" alt="img" />
            <img src="https://images.unsplash.com/photo-1630371223439-6f86bfa682f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHw1fHx8fHx8Mnx8MTYzMDU3MTgyNA&ixlib=rb-1.2.1&q=80&w=400" alt="img" />
            <img src="https://images.unsplash.com/photo-1630520226802-d8bb55f6b847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzUwMDR8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2MzA1NzE4MjQ&ixlib=rb-1.2.1&q=80&w=400" alt="img" />
            

          </div>
    </div>
  );
}
