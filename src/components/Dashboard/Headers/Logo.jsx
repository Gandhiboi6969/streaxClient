import React from 'react';
import {Link} from 'react-router-dom';
export default function Logo() {
  return (
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <Link className="navbar-brand brand-logo mr-5" to="/"><h2 className="text2" style={{fontFamily:'cursive'}}><i className="fab fa fa-lg fa-xing-square"></i> StréaX</h2></Link>

    </div>
  )
}
