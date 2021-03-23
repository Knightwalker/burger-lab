import React from "react";

const GeneralErrorWrapper = (props) => {
  if (props.hasErrors) {
    return (
      <React.Fragment>
        <div>Something didnt work out!</div>
      </React.Fragment>
    );
  } else {
    return (
      <div>{props.children}</div>
    );
  }
}

export default GeneralErrorWrapper;