import React, { Component } from 'react';
import {Navbar, NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,} from 'reactstrap';
import { NavLink } from "react-router-dom";

import './Navbar.css';

class NavbarComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isNavOpen : false
        }

        this.toggleNav = this.toggleNav.bind(this);

    }
    
    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md" fixed="top" className="bhagwa py-2">
                    <div className="container">
                        <NavbarBrand href="/" className="text-white"><i className="fa fa-circle"/> Hourly</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem >
                                    <NavLink onClick={this.toggleNav} className="nav-link " to="/settings">
                                        <i className="fa fa-cog"/> Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink onClick={this.toggleNav} className="nav-link " to="/dashboard">
                                        <i className="fa fa-dashboard"/> Dashboard
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink onClick={this.toggleNav} className="nav-link " to="/join">
                                        <i className="fa fa-play-circle"/> Start Session
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink onClick={this.toggleNav} className="nav-link " to="/login">
                                        <i className="fa fa-sign-in"/> Login
                                    </NavLink>
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