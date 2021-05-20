import React from 'react'

export default function Friends(props) {




    return (
        <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent ">
            <div className="card info-cards">
                <div className="card-body">
                    <p className="mb-4 h4 font-weight-bold">Friends <i className="fas  fa-user-friends"></i> </p>
                    <p className="fs-30 mb-2">{props.friends}</p>

                </div>
            </div>
        </div>
    )
}
