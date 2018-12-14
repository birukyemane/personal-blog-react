import React from 'react'
import { NavLink } from 'react-router-dom'
import Post from './Post'


const Posts  = (props) => {
  const posts = props.posts;
  const displayPosts = posts.map( (post,index) => <Post key={index +1} post= {post}/>);

  return (
  <div className="posts">
    <div className="navWrapper">     
        <NavLink to='/posts/newpost' className="whiteFont blueBackground">Add post</NavLink>
    </div>    
    {displayPosts}
  </div>
  )
}

export default Posts;