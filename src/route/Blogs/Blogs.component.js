import React, { Component } from 'react';
import './Blogs.style.scss';

class Users extends Component {
    
    render() { 
        return ( 
            <div>
                <h1>Blogs Page</h1>
                <div className="Blog-card">
                    <div className="Blog-card-header">
                    <h3>Blog card title</h3>
                    <p>Image</p>
                    </div>
                    <div className="Blog-card-body">
                        <p>Blog detail</p>
                        <p>Blog body</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Users;