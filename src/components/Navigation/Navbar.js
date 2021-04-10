import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

import "./Navbar.css";

const Navbar = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const bUserIsAuthenticated = authenticationContext.objUser.bUserIsAuthenticated;
  const username = authenticationContext.objUser.username;
  const user_id = authenticationContext.objUser.user_id;
  
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
          {bUserIsAuthenticated ? (
            <li><Link to={`/users/${user_id}/account_overview`}><div className="nav__logo">Welcome, {username}</div></Link></li>
          ) : (
            <>
              <li><Link to="/auth/login"><div className="nav__item">Login</div></Link></li>
              <li><Link to="/auth/register"><div className="nav__item">Register</div></Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;