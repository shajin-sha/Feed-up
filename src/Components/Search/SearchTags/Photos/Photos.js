import { useEffect, useState, Fragment } from "react";
import "./Photos.css";
import axios from "axios";
import TapPhotos from "./TapPhotos/TapPhotos";

export default function Photos(props) {
  const [Data, setData] = useState([]);
  const [TotalPages,setTotalPages]=useState(1)
  const [PageNow,setPageNow]=useState(1)

  const [Description,setDescription]=useState("No Description")
  const [Url,setUrl]=useState("")
  const [User,setUser]=useState([])
  const [links,setlinks]=useState([])
  const [Color,setColor]=useState('')
  const [Likes,setLikes]=useState(0)
  const [IsTap,setIsTap]=useState(false)
  const [Download,setDownload]=useState("")



  function closeISTap(){
    setIsTap(false)
  }


  function hide(data){
    props.hide(data)
  }



  useEffect(() => {
    let uri = `https://api.unsplash.com/search/photos?&query=${props.query}&per_page=30&orientation=portrait&client_id=G3dkKtM0iVCcgMMm5MKirSBdzwUhjilDG7E2GiuvyWI`;

    if (props.query !== "") {
      axios.get(uri).then((res) => {
        setData(res.data.results);
        console.log(res.data);
        setTotalPages(res.data.total_pages)
      });
    } else {
      let uri = `https://api.unsplash.com/photos?&page=${PageNow}&per_page=30&orientation=portrait&client_id=G3dkKtM0iVCcgMMm5MKirSBdzwUhjilDG7E2GiuvyWI`;
      axios.get(uri).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }


  }, [props.query||PageNow]);

  return (
    <Fragment>
   {props.query ==="" ? <h1 className="Trending">Trending now</h1> : <h1 className="Trending">{props.query}</h1>}

   {IsTap && <TapPhotos hide={hide} download={Download} close={closeISTap} color={Color} user={User} url={Url} links={links}  likes={Likes} />}

      <div
        className="SearchIMgase"
      >
        {Data &&
      
         Data.map((obj, index) => {


            return (
              <div style={{
                paddingBottom:index === 29 && '250%'
              }}  className="SearchIMgasecolumn" key={index}>
                <img style={{
                  background:obj.color
                }} onClick={()=>{ 
                  props.hide(false)
                  setUser(obj.user)
                  setlinks(obj.links)
                  setUrl(obj.urls.regular)
                  setColor(obj.color)
                  setLikes(obj.likes)
                  setDownload(obj.links.download)

                  setIsTap(true)
                }} src={obj.urls.small ? obj.urls.small : "#"} alt="icon" />
              </div>
            );


          })} 
      </div>
    </Fragment>
  );
}
