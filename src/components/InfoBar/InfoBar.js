import React from 'react';
import { Link } from 'react-router-dom';
import './InfoBar.css';

const InfoBar = () => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <i class="far fa fa-lg fa-comments"></i>
      <h3 className="space">Chat Section</h3>
    </div>
    <div className="rightInnerContainer">
      <Link to="/"><i className="cross far fa fa-window-close"></i></Link>
    </div>
  </div>
);

export default InfoBar;