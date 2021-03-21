import React from "react";
import Logo from "../../Logo/Logo.js";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle.js";
import "./Toolbar.css";

const toolbar = (props) => {
  return (
    <header className="Toolbar">
      <DrawerToggle isClicked={props.fDrawerToggle}></DrawerToggle>
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