import React, { Component } from 'react';

import './BlogCard.style.scss';

class BlogCardDetails extends Component {

    render() {
        debugger
        const { match } = this.props
        console.log(match);
        return (
            <>
                <div className='blogCard'>
                    <div className='blogCard-title'>Blog Title: {match.params.title}</div>
                    <div className='blogCard-body'>
                        <div className='row'>
                            <div className='row-heading'>ID: </div>
                            <div>{match.params.id}</div>
                        </div>
                        <div className='row'>
                            <div className='row-heading'>Body: </div>
                            <div>{match.params.body}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogCardDetails;