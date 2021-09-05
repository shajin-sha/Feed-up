import {useState,useContext} from 'react'
import "./EditProfile.css"
import done from "./done_black_24dp (1).svg"
import axios from "axios"
import { FirebaseContext } from "../../store/FirebaseContext"
import {useHistory} from "react-router-dom"
import Loader from "react-loader-spinner"

export default function EditProfile() {
    const [Name,setName]=useState("")
    const [Bio,setBio]=useState("")
    const [Dp,setDp]=useState(null)
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory()
    const [IsLoading,setIsLoading]=useState(false)

    const dateX = new Date();

    return (
        <div className="EditProfilePage" >
            <div className="EditProfilePageDp" style={{
                backgroundImage:`url(${Dp ? URL.createObjectURL(Dp):localStorage.getItem("dp")})`
            }} ></div>
            <label className="ChangeProfilephoto" htmlFor="dp" >Change Profile photo</label>



            <input onChange={(e)=>{
                setDp(e.target.files[0])
            }} hidden type="file" name="dp" id="dp"/>




            <div className="EditProfilePageIT" >
            <input onChange={(e)=>{
                setName(e.target.value)
            }} type="text" placeholder="Name" />
            <input onChange={(e)=>{
                setBio(e.target.value)
            }} type="text" placeholder="Bio" />
            </div>




            <button onClick={()=>{
                setIsLoading(true)
             
             try {
                firebase.storage().ref(`/profile/${Dp.name+ dateX.getTime()}`).put(Dp).then((ref)=>{
                    ref.ref.getDownloadURL().then((url)=>{
                        let data ={
                            UserName:localStorage.getItem("userName"),
                            NewName:Name,
                            NewBio:Bio,
                            Dp:url
                            
                        }

                        setTimeout(() => {
                            axios.post("https://social-media-app-api.herokuapp.com/edit",data).then((res)=>{
                                if(res.data.ok===true){
                                    history.push("/user/signin")
                                }
                                else{
                                    setIsLoading(false)
                                }
    
    
    
                            })
                        }, 2000);

 

                     
                    })

                })
             } catch (error) {
                let data ={
                    UserName:localStorage.getItem("userName"),
                    NewName:Name,
                    NewBio:Bio,
                }

                axios.post("https://social-media-app-api.herokuapp.com/edit",data).then((res)=>{
                    if(res.data.ok===true){
                        history.push("/user/signin")
                    }
                    else{
                        setIsLoading(false)
                    }
                })



                 
             }


            }}  className="saveProfile" > {IsLoading && <Loader
                type="TailSpin"
                color="#00BFFF"
                height={20}
                width={20}
                timeout={30000} //3 secs
     /> } {IsLoading === false ? <img src={done} alt="done" /> :null}</button>


        </div>
    )
}
