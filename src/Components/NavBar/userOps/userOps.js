import "./userOps.css"

export default function UserOps(props) {
    return (
        <div className="userOps" >
            <div>
                <img className="userImg" src={localStorage.getItem("dp")} alt=""/>
              {props.Hover &&  <h3>{localStorage.getItem("userName")}</h3> }
            </div>
        </div>
    )
}
