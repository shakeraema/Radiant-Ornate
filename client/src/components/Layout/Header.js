import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
   <>
   <nav classname="navbar navbar-expand-lg bg-body-tertiary">
  <div classname="container-fluid">
    <NavLink to="/" classname="navbar-brand" href="#">Navbar</NavLink>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon">
      </span></button>
    <div classname="collapse navbar-collapse" id="navbarSupportedContent">
        <li classname="nav-item">
          <NavLink to="/" classname="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li classname="nav-item">
          <NavLink to="/register" classname="nav-link" href="#">Signup</NavLink>
        </li>
        <li classname="nav-item">
          <NavLink to="/login" classname="nav-link" href="#">Login</NavLink>
        </li>

        {/* <li classname="nav-item dropdown">
          <NavLink to="/" classname="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul classname="dropdown-menu">
            <li><NavLink to="/" classname="dropdown-item" href="#">Action</NavLink></li>
            <li><NavLink to="/" classname="dropdown-item" href="#">Another action</NavLink></li>
            <li><NavLink to="/" classname="dropdown-divider" href="#" >hi</NavLink></li>
            <li><NavLink to="/" classname="dropdown-item" href="#">Something else here</NavLink></li>
          </ul>
        </li> */}
      
    </div>
  </div>
</nav>

   </>
  )
}

export default Header