import React,{useState} from 'react'
import "./AddComments.css"
import send from "./send_black_24dp.svg"

export default function AddComments(props) {
    const [Value, setValue] = useState(null)
    return (
        <div className="AddCommentsContent" >


            <input
                name="AddComments"
                className="AddComments"
                type="text"
                placeholder="comments.."

                onChange={(e)=>{
                    setValue(e.target.value)
                }}
                
                />

            <button onClick={()=>{
                    props.getComments(Value)
            }}
                className="AddCommentsSend"
            ><img src={send} alt="send"/></button>

        </div>
    )
}
