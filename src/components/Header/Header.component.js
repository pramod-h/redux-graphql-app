import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Header.style.scss';

/**
 * 
 */
export class HeaderComp extends Component {

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