import React from "react";

function AddSquareApp(props) {
  const { id, name } = props;
  return (
    <div
      className="col-sm-5 col-md-5 col-lg-5 add-square-app p-5 m-1 mb-3"
      key={id}
    >
      <div className="plus-body">{name}</div>
    </div>
  );
}

export default AddSquareApp;
