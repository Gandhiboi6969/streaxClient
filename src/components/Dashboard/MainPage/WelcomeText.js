import React from 'react'

export default function WelcomeText(props) {
    return (
        <div className="content-wrapper">
          <div className="row ">
            <h3 className="font-weight-bold welcome-text">Welcome {props.name} !!</h3>
            </div>
        </div>
    )
}
