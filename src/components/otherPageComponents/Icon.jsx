import React from "react";

function Icons(props) {
  const { id, name, style } = props.icon;
  return (
    <div className="col-4" key={id}>
      <i className={`icon bi bi-${style}`}></i>
      <small>{name}</small>
    </div>
  );
}

export default Icons;
