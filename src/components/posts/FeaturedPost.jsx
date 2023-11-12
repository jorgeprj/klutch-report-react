import React from 'react'
import './FeaturedPost.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const FeaturedPost = ({ post }) => {
    return (
        <div className='featured-post'>
            <div className="featured-post-image">
                <img src={post.img} alt="main image" />
            </div>
            <div className="featured-post-content">
                {post.oficial === true ? (
                    <div className="post-title">
                        {post.title}
                        <span className="post-verification-icon">
                            <BsFillPatchCheckFill />
                        </span>
                    </div>
                ) : (
                    <div className="post-title">{post.title}</div>
                )}
                <div className="post-description">{post.description}</div>
                <div className="post-source">via {post.source}</div>
            </div>
        </div>
    )
}

export default FeaturedPost