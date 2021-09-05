import React,{useEffect,useState} from 'react'
import "./People.css"
import PeopleOBJ from './PeopleOBJ/PeopleOBJ'
import axios from "axios"
import USER from '../../../USER/USER'

export default function People(props) {
    const [Data,setData]=useState([])
    const [OpenUser,setOpenUser]=useState(false)

    const [Dp,setDp]=useState("")
    const [UserName,setUserName]=useState("")
    const [Bio,setBio]=useState("")
    const [Follows,setFollows]=useState([])



    function openUser(val,DP,BIO,USERNAME,FOLLOW){
        setOpenUser(val)
        setDp(DP)
        setBio(BIO)
        setUserName(USERNAME)
        setFollows(FOLLOW)
        props.disTag("none")
    }


    function ShowTag(){
        props.disTag(null)
        setOpenUser(false)
    }

    


    useEffect(()=>{
        if(props.query!==""){
            axios.post("https://social-media-app-api.herokuapp.com/getusers",{'query':props.query}).then((res)=>{
                setData(res.data)
            })
        }
    },[props.query])
    return (
        <div className="People" >
            {Data.map((obj,index)=>{
                return(
                    <PeopleOBJ follows={obj.follows} openUser={openUser}  len={Data.length} email={obj.email} bio={obj.Bio} index={index} Name={obj.userName} profile={obj.Dp} />
                )
            })}

             {OpenUser && <USER  follows={Follows} ShowTag={ShowTag} userName={UserName} dp={Dp} bio={Bio}    style={"UserOpen"} /> }

        </div>
    )
}
