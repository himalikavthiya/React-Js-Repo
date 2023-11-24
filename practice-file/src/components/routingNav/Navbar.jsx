import { Link } from "react-router-dom"


import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="header">
  <nav className="nav">
    <div className="nav-wrapper">
      <div className="nav-header">
        <div className="nav-brand">BRAND</div>
      </div>
      <div className="nav-menu">
        <div className="nav-button">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <input type="checkbox" id="nav-check"/>
        <div className="nav-link">
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
     
        </div>
      </div>
    </div>
  </nav>
</header>
    </div>
  )
}

export default Navbar

