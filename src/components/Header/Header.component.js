import React, { Component } from 'react';
import './Header.style.scss';
import {Link} from 'react-router-dom';

class HeaderComp extends Component {

    render() { 
        return ( 
            <div className="navbar">
            <div className="navbar-logo">Blogs</div>
            <ul className="navbar-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Blogs">Blogs</Link></li>
            </ul>
        </div>
         );
    }
}
 
export default HeaderComp;