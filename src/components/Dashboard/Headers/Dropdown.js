import React from 'react';
import {Link} from 'react-router-dom';




export default function Dropdown(props) {

console.log(props);

      return (
            <div className="dropdown">
                  <h2 className="btn text " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" >{props.name}</h2>

                  <a className="btn text" type="button" id="dropdownMenuButton" data-toggle="dropdown"  >
                       
                  <img className="profile-image " src={props.img} alt="profile" />

                  </a>

                  <div className="dropdown-menu my-drop-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item text" to="/settings" ><i className="fas fa fa-cog"></i> Settings</Link>
                        <Link className="dropdown-item text" to="https://streax-app.herokuapp.com/auth/logout"><i class="fas fa fa-sign-out"></i> Logout</Link>
                  </div>

            </div>




      )

}