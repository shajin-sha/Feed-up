import React, { useState, Fragment ,useEffect} from 'react'
import "./AddImg.css"
import axios from "axios"
import send from "./send_black_24dp.svg"

export default function AddImg() {
    const [File, setFile] = useState(null)
    const [Caption,setCaption]=useState("")



    return (

        <Fragment>
            <div style={{
               backgroundImage:`url(${File && URL.createObjectURL(File)})`
            }} className="img">


                {/* <img className="img" src={`${process.env.PUBLIC_URL}/uploads/images/`+`netflix.jpg`} alt=""/> */}

                <form className="from" onSubmit={(e) => {
                    e.preventDefault()
                    let file = File
                    let formdata = new FormData()

                    formdata.append("Img", file)
                    formdata.append("caption", "this is an caption")
                    formdata.append("ImgName", File.name)
                    formdata.append("ImgName", File.name)
                    formdata.append("feedby",localStorage.getItem("userName"))

                    axios.post("/img", formdata).then((res) => {
                        console.log(res.data)

                    })

                }}
                    encType="multipart/form-data">

                    <input onChange={(e) => {
                     var data  = e.target.files[0]
                     setFile(data)

                    }}
                        id="Img"
                        type="file"
                        hidden
                    />

                    <label className="postimgbnt" htmlFor="Img">{File ? "1 img":"img"}</label>
                    <input
                        placeholder="captions"
                        className="captions"
                        type="text" />


                        <button value="submit" className="submitBnt" type="submit"><img src={send} alt=""/></button>

                </form>

                {/* <img src={`${process.env.PUBLIC_URL}/uploads/images/`+`netflix.jpg`} alt="img"/> */}








            </div>

        </Fragment>

    )
}




// http://localhost:3000/uploads/images/1624947778465netflix.jpg image path