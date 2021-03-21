import React from "react";
import Logo from "../../Logo/Logo.js";
import "./Toolbar.css";

const toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div>MENU</div>
      <Logo></Logo>
      <nav className="DesktopOnly">
        <ul className="NavigationItems">
          <li className="NavigationItem"><a className="active" href="/">Burger Builder</a></li>
          <li className="NavigationItem"><a className={props.active ? "active" : null} href="/">Checkout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default toolbar;