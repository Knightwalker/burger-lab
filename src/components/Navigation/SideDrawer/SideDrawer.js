import React from "react";
import Logo from "../../Logo/Logo.js";
import Backdrop from "../../UI/Backdrop/Backdrop.js";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let styles = ["SideDrawer"];
  if (props.open) { styles.push("Open"); }
  else            { styles.push("Close"); }

  return (
    <React.Fragment>
      <Backdrop show={props.open} isClicked={props.fCloseTheSideDrawer}></Backdrop>
      <div className={styles.join(" ")}>
        <Logo></Logo>
        <nav>
          <ul className="NavigationItems">
            <li className="NavigationItem"><a className="active" href="/">Burger Builder</a></li>
            <li className="NavigationItem"><a className={props.active ? "active" : null} href="/">Checkout</a></li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default sideDrawer;