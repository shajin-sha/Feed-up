import React from 'react'
import "./HomeOffline.css"
import offline from "./offline.svg"

export default function HomeOffline() {
    return (
        <div className="HomeOffline" >
            <img  src={offline} alt="offline" />
        </div>
    )
}
