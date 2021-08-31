import { Fragment ,useState} from "react";
import "./Search.css";
import backIocn from "./backIocn.svg";
import SearchTags from "./SearchTags/SearchTags";
import Photos from "./SearchTags/Photos/Photos";

export default function Search(props) {

  const [ShowPhotos,setShowPhotos]=useState(true)
  const [Query,setQuery]=useState('')
  const [PassingQuery,setPassingQuery]=useState("")




  // funtions calling from other file


  function photos(){
    setShowPhotos(true)
  }




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

            <input onChange={(e)=> setQuery(e.target.value)} type="search" placeholder="Search" type="text" />
            <button onClick={()=>{
                setPassingQuery(Query)
            }} >Go</button>
          </div>
        </div>
        <div className="SrarchResl">


          {/*Show Photos when ShowPhotos is true */}
          
        {ShowPhotos && <Photos query={PassingQuery} />}






        </div>
      </div>
      <SearchTags photos={photos} />
    </Fragment>
  );
}
