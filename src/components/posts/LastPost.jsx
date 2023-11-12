import React from 'react'
import './LastPost.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const LastPost = ({ post }) => {
    return (
        <div className='last-post'>
            <div className="last-post-image">
                <img src={post.img} alt="Last Post" />
            </div>
            <div className="last-post-content">
                <div className={`last-post-team ${post.team}`}>{post.team}</div>
                {post.oficial === true ? (
                    <div className="last-post-title">
                        {post.title}
                        <span className="last-post-verification-icon">
                            <BsFillPatchCheckFill/>
                        </span>
                    </div>
                ) : (
                    <div className="last-post-title">{post.title}</div>
                )}
                <div className="last-post-description">{post.description}</div>
                <div className="last-post-source">via {post.source}</div>
            </div>
        </div>
    )
}

export default LastPost