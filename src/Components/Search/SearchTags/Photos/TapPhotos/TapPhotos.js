import { useEffect } from "react";
import "./TapPhotos.css";
import backIcon from "./chevron_left_black_24dp.svg"

export default function TapPhotos(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div
      style={{
        backgroundImage: `url(${props.url})`,
        // background:props.color,
      }}
      className="TapPhoto">

      <div className="over">

          <button className="OverCLose" onClick={()=>{
              props.close()
              props.hide(true)
          }} ><img src={backIcon} alt='backIcon' /></button>

        <div className="OverUSer" >
            <img className="profile_image_profile_image" src={props.user.profile_image.large} alt="profile_image" />
            <h3 className="TapPhotoNAme" >{props.user.name}</h3>
            <p className="TapPhotBio" >{props.user.bio}</p>


       


            </div>


      </div>
    </div>
  );
}




