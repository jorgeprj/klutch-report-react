import React from 'react'
import './SidePost.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const SidePost = ({ post }) => {
    return (
        <div className='side-post'>
            <div className="side-post-image">
                <img src={post.img} alt="image" />
            </div>
            <div className="side-post-content">
                {post.oficial === true ? (
                    <div className="side-post-title">
                        {post.title}
                        <span className="side-post-verification-icon">
                            <BsFillPatchCheckFill />
                        </span>
                    </div>
                ) : (
                    <div className="side-post-title">{post.title}</div>
                )}

                <div className="side-post-description">{post.description}</div>
                <div className="side-post-source">via {post.source}</div>
            </div>
        </div>
    )
}

export default SidePost