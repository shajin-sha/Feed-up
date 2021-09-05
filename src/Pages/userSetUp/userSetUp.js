import React, { useState, useContext } from "react";
import SetupName from "./start/setupName/setupName";
import Start from "./start/start";
import bioSvg from "./start/setupName/undraw_Social_bio_re_0t9u.svg";
import bioSvg1 from "./undraw_Social_life_re_x7t5.svg";
import SetBio from "./SetBio/SetBio";
import Setdp from "./setDp/setdp";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../store/FirebaseContext";
import UserAnim from "./UserAnim/UserAnim";
import MaBox from "../../Components/MaBox/MaBox";
import useSound from 'use-sound'
import axios from "axios";
import music from "./mixkit-positive-notification-951.wav"

export default function UserSetUp() {
  const [play] = useSound(music);
  const history = useHistory();
  const [Next, setNext] = useState(0);
  const { firebase } = useContext(FirebaseContext);

  // config date for uploading (post) data with date and time...
  const dateX = new Date();

  const [Name, setName] = useState("");
  const [Bio, setBio] = useState("");
  const [Dp, setDp] = useState(null);
  const [IsSendData, setIsSendData] = useState(false);
  const [Respon, setRespon] = useState(false);
  const [Err,setErr]=useState(false)
  const [ErrType,setErrType]=useState('')
  const [ErrMA,setErrMA]=useState('')
  const [ErrTitle,setErrTitle]=useState('')

  // calling function from other components --start

  function Next0(nextValue) {
    setNext(nextValue);
  }
  function getName(value) {
    setName(value);
  }

  function getBio(value) {
    setBio(value);
  }

  function getDp(value) {
    setDp(value);
  }

  function closeMa(){
    setErr(false)
  }

  // calling function from other components --end

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      className="SETUPU"
    >
    {Err &&  <MaBox closeMa={closeMa} Type={ErrType} MA={ErrMA} Title={ErrTitle} /> }

      {IsSendData && <UserAnim Respon={Respon} />}

      {Next === 0 && <Start Next={Next0} />}

      {Next === 1 && <img className="biosvg" src={bioSvg} alt="" />}
      {Next === 2 && <img className="biosvg" src={bioSvg1} alt="" />}

      {Next === 1 && <SetupName getName={getName} />}

      {Next === 2 && <SetBio getBio={getBio} />}

      {Next === 3 && <Setdp getDp={getDp} />}

      {Next === 1 && (
        <button
          onClick={() => {
            setNext(Next + 1);
          }}
          className="setName"
        >
          NEXT
        </button>
      )}

      {Next === 2 && (
        <button
          onClick={() => {
            setNext(Next + 1);
          }}
          className="setName"
        >
          NEXT
        </button>
      )}

      {Next === 3 && (
        <button
          onClick={() => {
            if (Name === "") {
              setErr(true)
              setErrType("wr")
              setErrMA("Enter Name ,and try again")
              setErrTitle("Invalid input")
            }
            if (Dp === null) {
              setErr(true)
              setErrType("wr")
              setErrMA("select an profile pictures ,and try again")
              setErrTitle("Invalid input")
            }
            if (Bio === "") {
                setErr(true)
                setErrType("wr")
                setErrMA("Enter bio,and try again")
                setErrTitle("Invalid input")
                
            } else {
              // sending data
              // make loading...
              // at this time
              setIsSendData(true);

              // user have done all
              // now we have to push data to backend

              // upload user dp(prifle) to  firebase firestore for storing

              firebase
                .storage()
                .ref(`/profile/${Dp.name + dateX.getTime()}`)
                .put(Dp)
                .then(({ ref }) => {
                  // image uploaded
                  ref.getDownloadURL().then((url) => {
                    // data for out servr
                    // url of the file have to send to backend

                    //difine user data
                    let data = {
                      Name: Name,
                      Bio: Bio,
                      userName: localStorage.getItem("userName"),
                      DpUrl: url,
                      profileUpdated: "true",
                    };

                    axios
                      .post(
                        "https://social-media-app-api.herokuapp.com/updateuser",
                        data
                      )
                      .then((res) => {
                        if (res.data.dp) {
                          JSON.stringify(localStorage.setItem("dp", res.data.dp))
                          JSON.stringify(localStorage.setItem("bio",res.data.Bio))
                          play()
                          setRespon(true);
                          setTimeout(() => {
                            history.push("/home");
                          }, 2000);
                        } else {
                          alert("a err");
                        }
                      });
                  });
                });
            }
          }}
          className="setName"
        >
          FINISH
        </button>
      )}
    </div>
  );
}
