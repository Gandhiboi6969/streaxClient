import React from 'react';
import {Link} from 'react-router-dom';
export default function HeaderLink() {
    return (
        <div >
            <Link to="/#" className="text-link" style={{ textDecoration: 'none', color: "white", marginRight: "17px" ,fontSize:"20px" }} ><span className="text-link"><i className="fas fa fa-home"></i> Dashboard</span></Link>
            <Link to="/join" style={{ textDecoration: 'none', color: "white", marginRight: "17px",fontSize:"20px" }} ><span className="text-link"><i class="fas fa fa-play-circle"></i> Start-Session</span></Link>

        </div>
    )
}
