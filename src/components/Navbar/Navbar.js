import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, } from 'reactstrap';
import { NavLink } from "react-router-dom";

import './Navbar.css';

class NavbarComponent extends Component {



    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {


        return (
            <React.Fragment>
                <Navbar dark expand="xl" fixed="top" className="bhagwa py-2">
                    <div className="container">
                        <NavLink to="/dashboard" style={{textDecoration: 'none'}} className=" mr-auto text-white logo"><i className="fab fa fa-lg fa-xing-square"></i> StréaX</NavLink>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse className="collapse-nav" isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="collapse-nav">
                                <NavItem >
                                    <NavLink onClick={this.toggleNav} className="nav-link " to="/settings">
                                        <i className="fa fa-cog" /> Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink onClick={this.toggleNav} className="nav-link " to="/dashboard">
                                        <i className="fa fa-dashboard" /> Dashboard
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink onClick={this.toggleNav} className="nav-link " to="/join">
                                        <i className="fa fa-play-circle" /> Start Session
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <a className="nav-link " href="http://localhost:4000/auth/logout" >
                                        <i className="fa fa-sign-out" /> Logout
                                        </a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavbarComponent;