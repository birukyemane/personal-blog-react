import React from 'react'
import { NavLink } from 'react-router-dom'


const Post  = (props) => {
   const {title,category} = props.post;
  return (
  <div className="postRow">
    <div className="postTitle">
      <NavLink to='#'>{title}</NavLink>  
    </div>  
    <div className="category">
      <h3>{category}</h3> 
    </div> 
  </div>
)}

export default Post;