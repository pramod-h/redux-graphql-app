import React, { Component } from 'react';
import {connect} from 'react-redux';
import Blogs from './Blogs.component';
import fetchBlogDispatcher  from '../../Store/Blogs/blog.dispatcher'

class BlogsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : null
        }
        this.props.fetchBlogdata()
    }

    render() {
        const {BlogData} =  this.props
        if(BlogData.length === 0) {
            return <div className="loading">Loading...</div>
        }
        return (
            <Blogs blogData = {BlogData.blogs.data.posts.data} />
        );
    }
}

/**
 * 
 * @param {*} state 
 * @returns 
 */
export const stateToProps = (state) => {
    console.log("state" , state);
    return {BlogData: state.Blogs}
}

/**
 * 
 * @param {*} dispatch 
 * @returns 
 */
export const matchDispatchToProps = (dispatch) => ({
 fetchBlogdata : () => fetchBlogDispatcher.dispatchBlogs(dispatch)   
})

export default connect(stateToProps, matchDispatchToProps)(BlogsContainer)