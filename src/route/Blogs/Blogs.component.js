import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Blogs.style.scss';


class Blogs extends Component {

    render() {
        const { blogData } = this.props
        console.log("Component", blogData)
        const blogcards = blogData.map((blogcard, index) => {
            return (
                <div key={blogcard.id} className="Blog-card">
                    <Link to={`/Blogs/${blogcard.id}`}>
                        <p>Title : {blogcard.title}</p>
                        <p>ID : {blogcard.id}</p>
                    </Link>
                </div>
            )
        });
        return (
            <div className="Blog-container">
                {blogcards}
            </div>
        );
    }
}

export default Blogs;