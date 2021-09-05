import React, { useState, Fragment, useContext } from "react";
import "./AddImg.css";
import axios from "axios";
import send from "./send_black_24dp.svg";
import add from "./add_circle_black_24dp.svg";
import { FirebaseContext } from "../../../store/FirebaseContext";
import UserAnim from "../../../Pages/userSetUp/UserAnim/UserAnim";
import useSound from 'use-sound'
import music from "./mixkit-positive-notification-951.wav"

export default function AddImg() {
  const [File, setFile] = useState(null);
  const [Caption, setCaption] = useState("");
  const [ProgressBar,setProgressBar]=useState('')
  const { firebase } = useContext(FirebaseContext);
  const [Respon,setRespon]=useState(false)
  const [Percent,setPercent]=useState(false)

  const [play] = useSound(music);

  // config date for uploading (post) data with date and time...
  const dateX = new Date();

  return (
    <Fragment>
      <div
        style={
          {
            // backgroundImage: `url(${File && URL.createObjectURL(File)})`
          }
        }
        className="img"
      >
        {File && File.type === "image/jpeg" ? (
          <img
            className="filePERV"
            src={File ? URL.createObjectURL(File) : null}
            alt="filePERV"
          />
        ) : null}

        {File && File.type === "image/png" ? (
          <img
            className="filePERV"
            src={File ? URL.createObjectURL(File) : null}
            alt="filePERV"
          />
        ) : null}

        {File && File.type === "image/svg+xml" ? (
          <img
            className="filePERV"
            src={File ? URL.createObjectURL(File) : null}
            alt="filePERV"
          />
        ) : null}

        {File && File.type === "video/mp4" ? (
          <video className="filePERVVi" controls>
            <source src={URL.createObjectURL(File)} />
          </video>
        ) : null}

        <form
          className="from"
          onSubmit={(e) => {
            e.preventDefault();

            // posting images to firestore

            let storageRef = firebase
              .storage()
              .ref(`midia/${File.name + dateX.getTime()}`);

            let uploadTask = storageRef.put(File);
            uploadTask.on("state_changed", function progress(snapshot) {
              let presentage = snapshot._delegate.bytesTransferred;
              let totalBytes = snapshot._delegate.totalBytes;
              var percent = (presentage / totalBytes) * 100;
              console.log(Math.round(percent));
              setProgressBar(Math.round(percent)+'%')

              if (percent === 100) {
                setPercent(true)
                setTimeout(() => {
                  // uploaded
                  // get the url of image
                  var storageRef = firebase
                    .storage()
                    .ref(`midia/${File.name + dateX.getTime()}`);
                  storageRef.getDownloadURL().then(function (url) {
                    console.log(url);

                    // data for out servr
                    // info of file(file name posting date and time image url ....)

                    let data = {
                      Img: url,
                      caption: Caption,
                      type: File.type,
                      dateST: dateX.toISOString().split("T")[0],
                      dp: localStorage.getItem("dp"),
                      feedby: localStorage.getItem("userName"),
                    };

                    axios.post("https://social-media-app-api.herokuapp.com/img",data)
                    setRespon(false)

      
                  });
                }, 2000);
                 setTimeout(() => {
                      play()
                      setRespon(true)


                      
                    }, 3000);
                    setTimeout(() => {
                        setPercent(false)
                    }, 3600);
              }
            });
          }}
          encType="multipart/form-data"
        >
          {Percent && <UserAnim post={true} Respon={true} />}

          <input
            onChange={(e) => {
              var data = e.target.files[0];
              e.preventDefault();
              setFile(data);
            }}
            id="Img"
            type="file"
            hidden
          />

          <label className="postimgbnt" htmlFor="Img">
            {File ? null : <img src={add} alt="" />}
          </label>
          <input
          
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            placeholder="captions"
            className="captions"
            type="text"
          />

          <button value="submit" className="submitBnt" type="submit">
            <img src={send} alt="send" />
          </button>
        </form>

        <div style={{
          width:ProgressBar,
        }}  className="upLoadBar">
        </div>
      </div>
    </Fragment>
  );
}

