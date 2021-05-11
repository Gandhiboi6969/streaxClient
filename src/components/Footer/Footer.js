import React from 'react';

import './Footer.css';

export default function FooterComponent() {
    return (
        <div className="footer pt-4 bg-dark bhagwa text-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3 offset-sm-2 col-sm-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home">Settings</a></li>                                                     
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/join">Start a Session</a></li>
                        </ul>
                    </div>
                    <div className="col-2 col-sm-2">
                        {/* EMPTY */}
                    </div>
                    <div className="col-6 col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            MANIT,BHOPAL<br></br>
                            <i className="fa fa-phone fa-lg"></i>: +91 7470 23767<br />
                            <i className="fa fa-envelope fa-lg"></i>
                                Gandhiboi69@gmail.com
                        </address>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <p><i className="fa fa-copyright" /> Copyright 2021 Gandhiboi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
