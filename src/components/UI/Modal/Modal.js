import React from "react";
import Backdrop from "../Backdrop/Backdrop.js";
import "./Modal.css";

class Modal extends React.Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show) {
      return true;
    }
    return false;
  }

  componentWillUpdate() {
    console.log("[Modal] Will Update");
  }

  render () {
    const style = {
      transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: this.props.show ? "1" : "0"
    }
  
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} isClicked={this.props.fCancelPurchaseHandler}></Backdrop>
        <div className="Modal" style={style}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;