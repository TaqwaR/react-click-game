import React from "react";
import "./Wrapper.css";

const Wrapper = function (props) {
  return <div className="wrapper">
    {props.children}
  </div>
}

// const Wrapper = props => <div className="wrapper">{props.children}</div>


export default Wrapper;
