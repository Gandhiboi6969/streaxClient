import 'bootstrap/dist/css/bootstrap.min.css';
import './SessionInfo.css';
import {Link} from 'react-router-dom';
function SessionInfo() {





    let roomName = window.location.href;
    let lidx = roomName.indexOf("room=");
    roomName = roomName.slice(lidx+5);

    return (

        <div className="align-item-center">

            <div className="col-12 ">

                <div className="card-header">
                    <h3 style={{ textAlign: "center" }}>Room Name</h3>
                </div>
                <div className="card-body">
                    <input id="myInput" className="form-control" readonly="" style={{ marginBottom: "10px" }} type="text" value={roomName} />

                    <button type="button" onClick={() => { navigator.clipboard.writeText(roomName) }} className="sbttn btn btn-outline-dark btn-lg btn-block ">Copy Room</button>
                    <Link to="/dashboard" type="button" className="sbttn btn btn-outline-dark btn-lg btn-block">End Meet</Link>
                </div>
            </div>
        </div>

    );


}

export default SessionInfo;