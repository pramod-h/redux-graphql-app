import React, { Component } from 'react';
import './Blogs.style.scss';
import { Link } from 'react-router-dom';

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            blogs: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                let blogList = data.map((blog) => {
                    return (
                        <div key={blog.id} className="Blog-card">
                            <Link to={`/blogs/${blog.id}`}>
                                <p>Title : {blog.title}</p>
                                <p>ID : {blog.id}</p>
                                </Link>
                        </div>
                    )
                })
                this.setState({
                    isLoaded: true,
                    blogs: blogList
                });
            })
    }

    render() { 
        const { blogs, isLoaded } = this.state;
        if (!isLoaded) {
            return <div className="loading">Loading...</div>
        }
        return ( 
            <div>
                {blogs}
            </div>
         );
    }
}
 
export default Blogs;