import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => (
  <div>
    <h3>Welcome to the home page!</h3>
    <Link to='/posts/newpost'>Add post</Link>
    <ul>
        <li>blog title </li>
        <li>blog title </li>
        <li>blog title </li>
        <li>blog title </li>
    </ul>
  </div>
)

export default Home;