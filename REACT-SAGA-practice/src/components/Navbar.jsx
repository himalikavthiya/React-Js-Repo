import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <Link to={'/'} className="nav-link mx-2 active" aria-current="page" href="#">
          Home
</Link>

        </li>
        <li className="nav-item">
          <Link to={'/product'} className="nav-link mx-2" href="#" >
          Products
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">
            Pricing
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   
  );
}

export default Navbar
