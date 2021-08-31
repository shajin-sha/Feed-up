import { useEffect, useState, Fragment } from "react";
import "./Photos.css";
import axios from "axios";

export default function Photos(props) {
  const [Data, setData] = useState([]);

  useEffect(() => {

    let uri = `https://api.unsplash.com/search/photos?&query=${props.query}&count=30&client_id=G3dkKtM0iVCcgMMm5MKirSBdzwUhjilDG7E2GiuvyWI`;


    if(props.query!==""){
        axios.get(uri).then((res) => {
            setData(res.data.results);
            console.log(res.data)
            // if(res.data.total_pages>1){
            //     axios.get(`https://api.unsplash.com/search/photos?page=2&query=${props.query}&count=30&client_id=G3dkKtM0iVCcgMMm5MKirSBdzwUhjilDG7E2GiuvyWI`).then((res)=>{
            //         setData(preveData => {
            //             return [...Data,...res.data.results]
            //         })
            //         console.log([...Data,...res.data.results])
                    
            //     })
            // }
            // else if(res.data.total_pages>2){
            //     axios.get(`https://api.unsplash.com/search/photos?page=2&query=${props.query}&count=30&client_id=G3dkKtM0iVCcgMMm5MKirSBdzwUhjilDG7E2GiuvyWI`).then((res)=>{
            //         setData(preveData => {
            //             return [...Data,...res.data.results]
            //         })
            //         console.log([...Data,...res.data.results])
                    
            //     })
            // }
          });
    }else{
        let uri = `https://api.unsplash.com/photos?&page=${'1'}&count=30&client_id=G3dkKtM0iVCcgMMm5MKirSBdzwUhjilDG7E2GiuvyWI`
        axios.get(uri).then((res)=>{
            setData(res.data)
            console.log(res.data)
            
        })
    }





  }, [props.query]);

  return (
    <Fragment>
      <div className="SearchIMgase" >
        {Data &&
          Data.map((obj,index) => {
            return (
              <div className="SearchIMgasecolumn" key={index} >
                <img src={obj.urls.small ? obj.urls.small : "#"} alt="icon" />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
}
