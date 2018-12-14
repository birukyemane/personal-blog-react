import React from 'react';
import {NavLink } from 'react-router-dom'

const PostDetail  = (props) => {
    return (
        (   props.post==null?
            <div  className="formContainer">
                <div className="navWrapper">
                    <NavLink to='/posts' className="whiteFont blueBackground">Back to posts</NavLink>
                </div> 
                <h3>No post with that ID</h3>
            </div>
            :            
            <div className="formContainer">
                <div className="navWrapper">
                    <NavLink to='/posts' className="whiteFont blueBackground">Back to posts</NavLink>
                </div>                
                <h2 name="title" className="post-header">{ props.post.title}</h2>
                <h4 name="category" className="post-category">{ props.post.category}</h4>
                <p name="content" className="postText">{ props.post.content}</p>                             
            </div>
        )
             
)}
  
export default PostDetail;
