import React, { Component } from 'react';

import './BlogCard.style.scss';

class BlogCardDetails extends Component {

    render() {
        const { match } = this.props
        console.log(match);
        return (
            <>
                <div className='blogCard'>
                    <div className='blogCard-title'>{match.params.title}</div>
                    <div className='blogCard-body'>
                        <div className='row'>
                            <div>{match.params.body}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogCardDetails;