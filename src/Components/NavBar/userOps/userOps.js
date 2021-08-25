import "./userOps.css"
import {Profile} from "../../../path"

export default function UserOps(props) {
    return (
        <div className="userOps" >
            {/* hello */}
            <div>
                <img className="userImg" src={Profile + localStorage.getItem("dp")} alt=""/>
              {props.Hover &&  <h3>{localStorage.getItem("userName")}</h3> }
            </div>
        </div>
    )
}
