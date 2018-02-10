import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink to="/" exact className="navbar-brand">MiniVimeo</NavLink>
        </div>
        <ul className="nav navbar-nav">
          <li><NavLink to="/">All Videos</NavLink></li>
          <li><NavLink to="/upload">Upload Video</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default nav
