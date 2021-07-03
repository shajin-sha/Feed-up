import React, { Fragment } from 'react'
import "./SetBio.css"

export default function SetBio(props) {
    return (
        <Fragment>

            <h1 className="SetupBio" >Setup your bio</h1>
            <textarea onChange={(e) => {
                
                props.getBio(e.target.value)

            }} placeholder=" some things describes you" className="YourNameIN" type="text" />

        </Fragment>

    )
}
