import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const ccsClasses = ["Backdrop", props.show ? "BackOpen" : "BackClosed"];

  return <div className={ccsClasses.join(' ')}></div>;
};

export default backdrop;
