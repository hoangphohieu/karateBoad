import React from 'react';
import Face from './../images/facebook.svg';
import Home from './../images/home.svg';
import { Link } from 'react-router-dom';

const LinkIcon = (props) => {
  return (
    <div className="icon_home">
    <Link to=""><img src={Home} alt="" className="icon_link"/></Link>
    <a href="https://www.facebook.com/july.hph"><img src={Face} alt="" className="icon_link"/></a>
    </div>
  )
}

export default LinkIcon;