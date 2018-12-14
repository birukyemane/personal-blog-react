import React from 'react'
import { NavLink } from 'react-router-dom'


const Post  = (props) => {
  const {id,title,category} = props.post;
  return (
    <div className="postRow">
      <div className="postTitle">
        <NavLink to={`posts/${id}`}>{title}</NavLink>  
      </div>  
      <div className="category">
        <h3>{category}</h3> 
      </div> 
    </div>
)}

export default Post;