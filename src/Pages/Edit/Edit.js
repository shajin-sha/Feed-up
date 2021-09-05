import {useHistory} from 'react-router-dom'
import "./Edit.css";
import download from "./download-outline.svg"
import bookmark from "./bookmark-outline.svg"
import dark from "./moon-outline.svg"
import wifi from "./wifi-outline.svg"
import github from "./github-outline.svg"
import mail from "./email-outline.svg"
import next from "./arrow-ios-forward-outline.svg"




export default function Edit() {
  const history = useHistory()
  return (
    <div className="EditPage">
      <div className="EditPageHeder">
        <div
          style={{
            backgroundImage: `url(${localStorage.getItem("dp")})`,
          }}
          className="EditPageDP"
        ></div>
        <h2>{localStorage.getItem("userName")}</h2>
        <p>{localStorage.getItem("bio")}</p>

        <button onClick={()=>{
          history.push("/editprofile")
        }} className="EditProFileBtn">Edit Profile <img src={next} alt="next" /> </button>
      </div>

      <div className="editOPtion">

      <h3>CONTENT</h3>
        <div>
          <button><img  src={download} alt="download" /> Downloads</button>
          <button><img src={bookmark} alt="bookmark" /> Book Mark</button>
        </div>
          <h3>PREFERENCES</h3>
        <div>
            <button> <img src={dark} alt="dark" /> Dark Mode</button>
            <button><img src={wifi} alt="wifi" /> Only  Downloads Via Wi-Fi</button>
        </div>

        <h3>PRIVACY</h3>
        <div>
        
        </div>

        <h3>DEVEOPER CONTACT</h3>
        <div>
            <button><img src={github} alt="github" /> GtiHub</button>
            <button><img src={mail} alt="github" /> Mail</button>
        </div>


      </div>
    </div>
  );
}
