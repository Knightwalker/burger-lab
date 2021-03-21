import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";
import styles from './Layout.module.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: true
    }
  }

  fCloseTheSideDrawer = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar></Toolbar>
        <SideDrawer open={this.state.showSideDrawer} fCloseTheSideDrawer={this.fCloseTheSideDrawer}></SideDrawer>
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;