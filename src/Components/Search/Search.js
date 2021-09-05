import { Fragment, useState,useEffect } from "react";
import "./Search.css";
import backIocn from "./backIocn.svg";
import SearchTags from "./SearchTags/SearchTags";
import Photos from "./SearchTags/Photos/Photos";

import People from "./SearchTags/People/People";

export default function Search(props) {
  const [ShowPhotos, setShowPhotos] = useState(true);
  const [Query, setQuery] = useState("");
  const [PassingQuery, setPassingQuery] = useState("");
  const [ShowTags,setShowTags]=useState(false)
  const [ShowPeople,setShowPeople]=useState(false)
  const [TagDIS,setTagDIS]=useState(null)

  // funtions calling from other file

  function photos() {
    setShowPeople(false)
    setShowPhotos(true);
  }

  function people(){
    setShowPhotos(false)
    setShowPeople(true)
  }


  function hide(data){
    setShowTags(data)
  }

  function DISTag(val){
    setTagDIS(val)
  }


  useEffect(() => {
    
    window.addEventListener("scroll",(()=>{
      props.closeNavBar(false)
    }))

setTimeout(() => {
  setShowTags(true)
}, 300);


  }, [])

  return (
    <Fragment>
      <div className="SearchContent">
        <div className="SearchContentBox">
          <div className="SearchContentAction">
            <img
              onClick={() => props.closeSerch()}
              className="backSearch"
              src={backIocn}
              alt="back"
            />

            <input 
              onBlur={() => {
                props.closeNavBar(false)

                   // as no user cliked
                   let viewport = document.querySelector("meta[name=viewport]");
                   viewport.setAttribute(
                     "content",
                     "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                   );
              }}
              onClick={() => {
                props.closeNavBar(true)

                document.documentElement.style.setProperty("overflow", "auto");
                        // as user cliked input
                        const metaViewport = document.querySelector("meta[name=viewport]");
                        metaViewport.setAttribute(
                          "content",
                          "height=" +
                            window.innerHeight +
                            "px, width=device-width, initial-scale=1.0",
                          "user-scalable=0"
                        );

              }}
              onChange={(e) => setQuery(e.target.value)}
              type="search"

              placeholder="Search"
              type="text"
            />
            <button
              onClick={() => {
                setPassingQuery(Query);
              }}
            >
              Go
            </button>
          </div>
        </div>
        <div className="SrarchResl">
          {ShowPeople && <People disTag={DISTag} query={PassingQuery} />}

          {ShowPhotos && <Photos   hide={hide} query={PassingQuery} />}

        </div>
      </div>
     {ShowTags && <SearchTags dis={TagDIS} People={people} photos={photos} />}
    </Fragment>
  );
}
