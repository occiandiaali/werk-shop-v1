import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand text-warning"><Link to="">Werk Shop</Link></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link"><Link to="/about">About <span className="sr-only">(current)</span></Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to="/hirer-info">For Employers</Link></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item"><Link to="/automotive">Automotive</Link></a>
          <a className="dropdown-item"><Link to="/domestic">Domestic</Link></a>
          <a className="dropdown-item"><Link to="/electrical">Electrical</Link></a>
          <a className="dropdown-item"><Link to="/artcraft">Arts &amp; Craft</Link></a>
          <a className="dropdown-item"><Link to="/academic">Academic</Link></a>
        </div>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item">
      <a className="nav-link"><Link to="/signin">Sign In</Link></a>
      </li>
      <li className="nav-item">
      <button className="btn bg-warning text-white my-2 my-sm-0"><Link to="/signup">Sign Up</Link></button> 
      </li>
    </ul>
  </div>
</nav>
</div>
    );
 
};

export default Navbar;
