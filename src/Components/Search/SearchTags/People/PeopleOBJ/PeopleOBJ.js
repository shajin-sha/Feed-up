import React from 'react';
import "./PeopleOBJ.css";
import UserIMG from './download.png';


export default function PeopleOBJ(props) {
    return (
        <div style={{
            paddingBottom:props.len === props.index-1 ? "100%" :'2%'
        }} onClick={()=>{
            props.openUser(true,props.profile,props.bio,props.Name,props.follows)
        }} key={props.index} className="PeopleOBJ" >
            <img className="UserProfileSerach" src={props.profile ? props.profile : UserIMG} alt="User Profile" />
            <h3>{props.Name}</h3>
            <p>{props.bio ? props.bio : props.email}</p>
        </div>
    )
}
