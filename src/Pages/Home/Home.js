import { useState, useEffect } from "react";
import Add from "../../Components/Add/Add";
import FeedCard from "../../Components/FeedCard/FeedCard";
import NavBar from "../../Components/NavBar/NavBar";
import USER from "../../Components/USER/USER";
import NavBottom from "../../Components/navBottom/NavBottom";
import FullVideo from "../../Components/FullVideo/FullVideo";
import Comments from "../../Components/Comments/Comments";
import { useHistory } from "react-router-dom";
import Search from "../../Components/Search/Search";


export default function Home() {
  const [IsADD, setIsADD] = useState(false);
  const [IsUser, setIsUser] = useState(false);
  const [IsFullVideo, setIsFullVideo] = useState(false);
  const [Width, setWidth] = useState(window.innerWidth);
  const [Url, setUrl] = useState("");
  const [IsComments, setIsComments] = useState(false);
  const [CommentID, setCommentID] = useState(null);
  const [Data, setData] = useState([]);
  const [HideHav, setHideNav] = useState(false);
  const [IsSearch,setIsSearch]=useState(false)
  let history = useHistory();

  useEffect(() => {
    // If this is a new user we have to push the user to login page
    // Useing localStorage for this...
    let user = localStorage.getItem("user_id");

    // pusing to loading page
    // we can expet null if no user
    // we can expet some bug,get null from backend
    // will be a stored as a string then we have to use 'null' in if else
    // undefined too
    // 'null' , 'undefined'  are bug
    // null is give a new user

    if (user === null) {
      history.push("/welcome");
    } else if (user === "undefined") {
      history.push("/welcome");
    } else if (user === "null") {
      history.push("/welcome");
    }
  }, []);

  function openAdd() {
    setHideNav(true);

    if (IsUser === true) {
      setIsUser(false);
    }

    if (IsADD === false) {
      setIsADD(!IsADD);
    }
    if(IsSearch===true){
      setIsSearch(false)
    }
  }

  function openUSER() {
    setHideNav(true);
    if (IsADD === true) {
      setIsADD(false);
    }

    if (IsUser === false) {
      setIsUser(!IsUser);
    }
    if(IsSearch===true){
      setIsSearch(false)
    }
  }

  function Home() {
    setHideNav(false);

    if (IsUser === true) {
      setIsUser(false);
    }

    if (IsADD === true) {
      setIsADD(false);
    }
    if(IsSearch===true){
      setIsSearch(false)
    }
  }
  function openFullVideo(url) {
    setIsFullVideo(true);
    setUrl(url);
    console.log(url);
  }

  function closeV() {
    setIsFullVideo(false);
  }


  function openSearch(){
    setIsSearch(true)
  }

  function closeSerch(){
    setIsSearch(false)
  }

  function openComment(id, data) {
    if (IsComments === false) {
      setIsComments(!IsComments);
      setCommentID(id);
      console.log(data);
      setData(data);
    } else {
      setIsComments(!IsComments);
    }
  }

  return (
    <div>
      <NavBar openSearch={openSearch} HideHav={HideHav} openUSER={openUSER} openAdd={openAdd} />

      { IsSearch && <Search closeSerch={closeSerch} />}




      {/* {IsUser === true
        ? null
        : IsADD === false && (
            <FeedCard
              openComment={openComment}
              hidden={IsFullVideo ? "hidden" : null}
              openFullVideo={openFullVideo}
            />
          )} */}






      {IsADD && <Add />}

      <FeedCard
        dis={IsSearch ? "none" : IsUser ? 'none' : IsADD ? 'none' : "block"}
        openComment={openComment}
        hidden={IsFullVideo ? "hidden" : null}
        openFullVideo={openFullVideo}
      />

      {IsUser ? <USER /> : null}

      {IsFullVideo && <FullVideo close={closeV} url={Url} />}

      {IsComments && (
        <Comments
          comments={Data}
          CommentID={CommentID}
          openComment={openComment}
        />
      )}

      {Width < 600 && (
        <NavBottom Home={Home} openAdd={openAdd} openUSER={openUSER} />
      )}
    </div>
  );
}
