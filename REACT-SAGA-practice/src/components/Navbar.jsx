import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <Link to={'/'} class="nav-link mx-2 active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/product'} class="nav-link mx-2" href="#">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="#">
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
