import React, { Component } from 'react';
import { Navbar} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Navbar.css';

class NavbarComponent extends Component {

    render() {


        return (
            <React.Fragment>
                <Navbar dark expand="xl" fixed="top" className="bhagwa py-2">
                    <div className="container">
                        <Link to="/dashboard" style={{textDecoration:'none'}} className="mr-auto text-white logo"><i className="fab fa fa-lg fa-xing-square"></i> StréaX</Link>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavbarComponent;