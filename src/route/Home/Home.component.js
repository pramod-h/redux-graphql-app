import React, { Component } from 'react';
import './Home.style.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                <div className="home-content">
                    <div className="home-text">
                        <p className="home-first">Hello,</p>
                        <p className="home-second">Welcome Page</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;