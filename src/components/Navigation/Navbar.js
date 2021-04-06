import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/"><div className="nav__logo">Logo</div></Link>
      </div>
      <div className="navbar__mid">
        <ul className="nav__list-horizontal">
          <li><Link to="/users"><div className="nav__item">Users</div></Link></li>
          <li><Link to="/groups"><div className="nav__item">Groups</div></Link></li>
        </ul>
      </div>
      <div className="navbar__right">
        <ul className="nav__list-horizontal">
          <li><Link to="/auth/login"><div className="nav__item">Login</div></Link></li>
          <li><Link to="/auth/register"><div className="nav__item">Register</div></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;