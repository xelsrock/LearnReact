import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="navbar__item" to="/about">About</Link>
        <Link className="navbar__item" to="/posts">Posts</Link>
      </div>
    </div>
  )
}

export default Navbar