import React, { useState, Fragment} from 'react'
import "./AddImg.css"
import axios from "axios"
import send from "./send_black_24dp.svg"
import add from "./add_circle_black_24dp.svg"

export default function AddImg() {
    const [File, setFile] = useState(null)
    const [Caption, setCaption] = useState("")



    let date = new Date()
    const dateX = new Date()



    return (

        <Fragment>
            <div style={{
                // backgroundImage: `url(${File && URL.createObjectURL(File)})`
            }} className="img">

             {File &&  File.type=== "image/jpeg" ?  <img className="filePERV" src={File ? URL.createObjectURL(File):null} alt="filePERV"/> :null}

             {File &&  File.type=== "image/png" ?  <img className="filePERV" src={File ? URL.createObjectURL(File):null} alt="filePERV"/> :null}

             {File &&  File.type=== "image/svg+xml" ?  <img className="filePERV" src={File ? URL.createObjectURL(File):null} alt="filePERV"/> :null}

             {File &&  File.type=== "video/mp4" ?   <video className="filePERVVi"   controls >

            <source src={URL.createObjectURL(File)} />

             </video>:null}

                


                {/* <img className="img" src={`${process.env.PUBLIC_URL}/uploads/images/`+`netflix.jpg`} alt=""/> */}

                <form className="from" onSubmit={(e) => {
                    e.preventDefault()
                    let file = File
                    let formdata = new FormData()

                    formdata.append("Img", file)
                    formdata.append("caption", Caption)
                    formdata.append("ImgName", File.name)
                    formdata.append("type", File.type)
                    formdata.append("dateSt",dateX.toISOString().split('T')[0])
                    formdata.append("dp",localStorage.getItem("dp"))
                    formdata.append("feedby", localStorage.getItem("userName"))

                    axios.post("/img", formdata).then((res) => {
                        e.preventDefault()

                    })
                    e.preventDefault()

                }}
                    encType="multipart/form-data">

                    <input onChange={(e) => {
                        var data = e.target.files[0]
                        e.preventDefault()
                        setFile(data)


                    }}
                        id="Img"
                        type="file"
                        hidden
                    />

                    <label className="postimgbnt" htmlFor="Img">{File ? null : <img src={add} alt=""/> }</label>
                    <input onChange={(e) => {
                        setCaption(e.target.value)
                    }}
                        placeholder="captions"
                        className="captions"
                        type="text" />


                    <button value="submit" className="submitBnt" type="submit"><img src={send} alt="" /></button>

                </form>

                {/* <img src={`${process.env.PUBLIC_URL}/uploads/images/`+`netflix.jpg`} alt="img"/> */}


            </div>

        </Fragment>

    )
}




// http://localhost:3000/uploads/images/1624947778465netflix.jpg image path