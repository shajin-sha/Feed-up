import React from 'react'
import "./FeedTextContent.css"

export default function FeedTextContent(props) {
    return (
        <p className="FeedTextContent" >{props.content}</p>
    )
}
