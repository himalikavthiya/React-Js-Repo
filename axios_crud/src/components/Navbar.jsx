import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand d-md-none d-xs-block py-3" href="#">
            <img
              src="/static_files/images/logos/beer_white.png"
              height="40"
              alt="Company Logo"
            />
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

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to={"/about"}>About</Link>
              </li>
              <li class="nav-item">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="#">
                  Catering
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="#">
                  Reserve
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2 btn rounded-0 btn-danger" href="#">
                  Order Online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="text-center p-3 d-none d-md-block">
        <img
          src="/static_files/images/logos/beer.png"
          height="120"
          alt="Company Logo"
        />
      </div>
    </>
  );
}

export default Navbar
             
             
              