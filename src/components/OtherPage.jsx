import React from "react";
import Aside from "./otherPageComponents/Aside";
import Content from "./otherPageComponents/Content";

import Navbar from "./otherPageComponents/NavBar";

function OtherPage(props) {
  return (
    <div className="container">
      <Navbar handleClick={props.handleClick}/>
      <div className="row">
        <Aside />
        <Content />
      </div>
    </div>
  );
}

export default OtherPage;
