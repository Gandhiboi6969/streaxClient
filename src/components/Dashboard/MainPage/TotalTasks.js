import React  from 'react'

export default function TotalTasks(props) {
    

    
    return (
        <div className="col-md-6 mb-4 stretch-card transparent ">
            <div className="card  info-cards">
                    <div className="card-body">
                      <p className="mb-4 h4 font-weight-bold">Total Tasks Completed </p>
                      <p className="fs-30 mb-2">{props.tasks}</p>
                    </div>
            </div>
        </div>
    )
}
