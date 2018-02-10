import React from 'react'
import { NavLink } from 'react-router-dom'

const navBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <NavLink to="/" exact className="navbar-brand">Imagefy</NavLink>
      </div>
      <ul className="nav navbar-nav">
        <li><NavLink to="/">Gallery</NavLink></li>
        <li><NavLink to="/upload">Upload Image</NavLink></li>
      </ul>
    </nav>
  )
}

export default navBar
