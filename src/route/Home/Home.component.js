import React, { Component } from 'react';
import HomeImage from '../../util/HomeImage';

import './Home.style.scss';

class Home extends Component {

    render() { 
        return ( 
            <div className="home">
                <div className="home-content">
                    <div className="home-text">
                        <p className="home-first">Hello,</p>
                        <p className="home-second">Welcome to Blogs</p>
                    </div>
                    <div className="home-image">
                        <HomeImage />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;