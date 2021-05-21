import React from "react";
import "./Style.css";

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;